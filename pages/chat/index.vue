<template>
  <view class="chat">
    <view class="header">
      <view @click="index = 0" :class="index === 0 ? 'active' : ''">好友</view>
      <view @click="index = 1" :class="index === 1 ? 'active' : ''">群聊</view>
    </view>
    <swiper class="swiper" circular :current="index" @change="swiperChange">
      <swiper-item>
        <view class="swiper-item uni-bg-red">
          <view class="list">
            <uni-list :border="true">
              <!-- 显示圆形头像 -->
              <uni-list-chat
                v-for="item in $store.state.chat.friendList"
                :avatar-circle="true"
                :title="item.nickname"
                :avatar="$fullUrl(item.avatar)"
                clickable
                @click="toChat(item)"
              >
                <label
                  @click.stop="
                    openDeleteDialog({
                      type: 'single',
                      id: item.friend_user_id,
                    })
                  "
                >
                  <uni-icons type="trash" size="30"></uni-icons>
                </label>
              </uni-list-chat>
            </uni-list>
            <view
              style="display: flex; margin-top: 20px; justify-content: center"
              v-if="$store.state.chat.friendList.length <= 0"
              >您还没有好友，先去添加几个好友吧！</view
            >
          </view>
          <button
            style="margin-bottom: 10px; width: 90%"
            type="primary"
            @tap="$refs.inputDialog.open()"
          >
            添加好友
          </button>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item uni-bg-red">
          <view class="list">
            <uni-list :border="true">
              <!-- 显示圆形头像 -->
              <uni-list-chat
                clickable
                v-for="item in $store.state.chat.groupList"
                :avatar-circle="true"
                :title="item.group_name"
                :avatar="$fullUrl(item.avatar) || '/static/img/avatar.jpg'"
                @click="toChat(item)"
              >
                <label
                  @click.stop="
                    openDeleteDialog({ type: 'group', id: item.group_id })
                  "
                >
                  <uni-icons type="trash" size="30"></uni-icons>
                </label>
              </uni-list-chat>
            </uni-list>
            <view
              style="display: flex; margin-top: 20px; justify-content: center"
              v-if="$store.state.chat.groupList.length <= 0"
              >您还没有群聊，现在去创建吧！</view
            >
          </view>
          <button
            style="margin-bottom: 10px; width: 90%"
            type="primary"
            @tap="createGroup"
          >
            创建群聊
          </button>
        </view>
      </swiper-item>
    </swiper>
    <view>
      <uni-popup ref="tipsPopup">
        <uni-popup-dialog
          mode="base"
          :content="
            currentObj.type === 'group'
              ? '确定退出该群聊吗'
              : '确定删除该好友吗'
          "
          @confirm="deleteCurrentChat"
        ></uni-popup-dialog>
      </uni-popup>
      <!-- 输入框示例 -->
      <uni-popup ref="inputDialog" type="dialog">
        <view class="inputdialog">
          <view style="text-align: center">添加好友</view>
          <view
            style="display: flex; justify-content: center; margin-top: 30px"
          >
            <view style="display: flex">
              <uni-easyinput
                placeholder="请输入对方账号"
                v-model="account"
              ></uni-easyinput>
              <button
                type="primary"
                size="mini"
                style="width: 80px; margin-left: 20px"
                @tap="searchUser()"
              >
                搜索
              </button>
            </view>
          </view>
          <view
            style="
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              margin-top: 0.5rem;
            "
            v-if="userInfo"
          >
            <image
              :src="$fullUrl(userInfo.avatar)"
              style="width: 50px; height: 50px; border-radius: 50%"
              mode="aspectFill"
            ></image>
            {{ userInfo.nickname }}
          </view>
          <button
            @tap="addFriend"
            type="primary"
            :disabled="!userInfo"
            style="
              width: 80%;
              margin-top: 50px;
              position: absolute;
              bottom: 10px;
              left: 10%;
            "
          >
            添加
          </button>
        </view>
      </uni-popup>
    </view>
  </view>
</template>

<script>
import { userInfo } from 'os'
export default {
  data() {
    return {
      index: 0,
      account: '',
      userInfo: null,
      currentObj: {},
      isClickDelete: false,
    }
  },
  onLoad(e) {
    this.connectServer()
  },
  onShow() {
    this.getFriendList()
    this.getGroupList()
  },
  beforeDestroy() {
    uni.closeSocket()
  },
  methods: {
    openDeleteDialog(params) {
      this.isClickDelete = true
      this.currentObj = params
      this.$refs.tipsPopup.open()
    },
    deleteCurrentChat() {
      const currentChatObj = this.$store.state.chat.currentChatObj
      if (this.currentObj.type === 'group') {
        this.$get('~/api/user_chat_group/del_group', {
          user_id: this.$store.state.user.user_id,
          group_id: this.currentObj.id,
        }).then((res) => {
          uni.showToast({
            icon: 'none',
            title: '退出群聊成功',
          })
          this.getGroupList()
        })
      } else {
        this.$get('~/api/user_chat_friend/del_friend', {
          friend_user_id: this.currentObj.id,
          user_id: this.$store.state.user.user_id,
        }).then((res) => {
          uni.showToast({
            icon: 'none',
            title: '删除好友成功',
          })
          this.getFriendList()
        })
      }
      this.$refs.tipsPopup.close()
      this.$store.commit('set_currentChatObj', null)
    },
    swiperChange(e) {
      this.index = e.detail.current
    },
    setCurrentChatObj(item) {
      this.$store.commit('set_currentChatObj', item)
      uni.setStorageSync('currentChatObj', JSON.stringify(item))
    },
    connectServer() {
      let url = this.$fullUrl(
        `~/api/websocket/${this.$store.state.user.user_id}/${this.$store.state.user.nickname}`
      )
      url = url.replace('http', 'ws')
      this.websocket = uni.connectSocket({
        url: url,
        complete: () => {},
      })
      this.$store.commit('set_websocket', this.websocket)

      uni.onSocketOpen(function (res) {
        uni.showToast({
          title: '已连接消息服务器',
        })
      })
      uni.onSocketError(function (res) {})

      uni.onSocketMessage(this.onWebsocketMessage)
    },
    onWebsocketMessage(evt) {
      //接收消息

      const data = JSON.parse(evt.data)
      if (data.message_type === 4) {
        const message = JSON.parse(data.text_message)

        this.readMessage([data.user_chat_read_id])

        this.saveChatRecord(message)
      }
      if (data.message_type === 5) {
        this.getFriendList()
      }
    },
    sortConversationList() {
      let arr = this.$store.state.chat.friendList.concat(
        this.$store.state.chat.groupList
      )
      const sessionRecordList = uni.getStorageSync(
        'recordList' + this.$store.state.user.user_id
      )

      this.$store.commit(
        'set_recordList',
        (sessionRecordList && JSON.parse(sessionRecordList)) || []
      )
      const recordList = this.$store.state.chat.recordList

      let currentChatObj = uni.getStorageSync('currentChatObj')
      currentChatObj = JSON.parse(currentChatObj)
      if (!this.$store.state.chat.currentChatObj) {
        this.$store.commit('set_currentChatObj', currentChatObj)
      }
      if (currentChatObj && currentChatObj.group_id) {
        this.activeName = 'group'
      }

      for (let i = 0; i < arr.length; i++) {
        const id = arr[i].friend_user_id || arr[i].group_id
        let isExist = false
        for (let j = 0; j < recordList.length; j++) {
          if (id === recordList[j].id) {
            isExist = true
          }
        }
        if (!isExist) {
          recordList.push({
            id: id,
            list: [],
          })
        }
      }
      // arr.sort((a, b)=>{
      //   const aTime = new Date(a.create_time)
      //   const bTime = new Date(b.create_time)
      //   return aTime - bTime
      // })
      //
      this.$store.commit('set_mergeList', arr)
    },
    getFriendList() {
      this.$get(
        '~/api/user_chat_friend/get_friend_list?user_id=' +
          this.$store.state.user.user_id
      ).then((res) => {
        this.$store.commit('set_friendList', res.result.list || [])
        this.sortConversationList()
      })
    },
    getGroupList() {
      this.$get(
        '~/api/user_chat_group/get_group_list?user_id=' +
          this.$store.state.user.user_id
      ).then((res) => {
        this.$store.commit('set_groupList', res.result.list || [])
        this.sortConversationList()
      })
    },
    saveChatRecord(message) {
      const recordList = this.$store.state.chat.recordList
      const objId = message.group_id || message.from_user_id

      let hasRecordList = false
      for (let i = 0; i < recordList.length; i++) {
        if (recordList[i].id === objId) {
          hasRecordList = true
          recordList[i].list.push(message)
        }
      }

      let record = {
        id: objId,
        list: [message],
      }

      if (!hasRecordList) {
        recordList.push(record)
      }

      this.$store.commit('set_recordList', recordList)
      uni.setStorageSync(
        'recordList' + this.$store.state.user.user_id,
        JSON.stringify(recordList)
      )
    },
    readMessage(readIdList) {
      const obj = {
        to: {
          type: 'read',
          read_list: readIdList,
        },
      }

      this.$store.state.chat.websocket.send({
        data: JSON.stringify(obj),
      })
    },
    getGroupUserList() {
      if (!this.currentChatObj.group_id) return
      this.$get('~/api/user_chat_group/get_group_user_list', {
        group_id: this.currentChatObj.group_id,
      }).then((res) => {
        this.$store.commit('set_groupChatUser', res.result.list)
      })
    },
    searchUser() {
      if (!this.account || this.account === '') {
        return
      }

      this.isSearch = true

      this.$get('~/api/user/get_obj?', {
        username: this.account,
      }).then((res) => {
        this.userInfo = res.result.obj
      })
    },
    addFriend() {
      const friends = this.$store.state.chat.friendList
      // let isAdd = false
      if (this.userInfo.user_id === this.$store.state.user.user_id) {
        uni.showModal({
          title: '您不能添加自己',
        })
        return
      }
      for (let i = 0; i < friends.length; i++) {
        if (friends[i].friend_user_id === this.userInfo.user_id) {
          uni.showModal({
            title: '您已经添加过此好友了',
          })
          return
        }
      }

      this.$post('~/api/user_chat_friend/add_friend', {
        user_id: this.$store.state.user.user_id,
        avatar: this.$store.state.user.avatar,
        friend_user_id: this.userInfo.user_id,
        friend_user_name: this.userInfo.nickname,
      }).then((res) => {
        if (res.result === 1) {
          uni.showToast({
            title: '添加成功',
          })
          this.$refs.inputDialog.close()
          this.getFriendList()
        }
      })
    },
    createGroup() {
      uni.navigateTo({
        url: '/pages/chat/createGroup?type=add',
      })
    },
    toChat(item) {
      this.setCurrentChatObj(item)
      uni.navigateTo({
        url: `/pages/chat/session?type=${item}`,
      })
    },
  },
  watch: {
    user() {
      this.getFriendList()
      this.getGroupList()
      this.connectServer()
    },
    currentChatObj: {
      handler() {
        if (this.currentChatObj && this.currentChatObj.group_id) {
          this.getGroupUserList()

          this.$get(
            '~/api/user_chat_group/get_read_list',
            {
              user_id: this.$store.state.user.user_id,
              group_id: this.currentChatObj.group_id,
            },
            (res) => {
              const list = res.result.list
              const readList = []
              for (let i = 0; i < list.length; i++) {
                const message = JSON.parse(list[i].message)
                readList.push(list[i].user_chat_read_id)
                const text = JSON.parse(message.text_message)
                this.saveChatRecord(text)
              }
              this.readMessage(readList)
            }
          )
        } else if (this.currentChatObj) {
          this.$get(
            '~/api/user_chat_friend/get_read_list',
            {
              user_id: this.$store.state.user.user_id,
              send_user_id: this.currentChatObj.friend_user_id,
            },
            (res) => {
              if (!res.result) return
              const list = res.result.list
              const readList = []
              for (let i = 0; i < list.length; i++) {
                const message = JSON.parse(list[i].message)
                readList.push(list[i].user_chat_read_id)
                const text = JSON.parse(message.text_message)
                this.saveChatRecord(text)
              }
              this.readMessage(readList)
            }
          )
        }
      },
    },
  },
  computed: {
    currentChatObj() {
      return this.$store.state.chat.currentChatObj
    },
    active(item) {
      return (item) => {
        if (this.$store.state.chat.currentChatObj) {
          const currentId =
            this.$store.state.chat.currentChatObj.friend_user_id ||
            this.$store.state.chat.currentChatObj.group_id
          const itemId = item.friend_user_id || item.group_id
          if (currentId === itemId) {
            return 'active'
          }
        }
        return ''
      }
    },
  },
}
</script>

<style scoped>
.chat {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.chat .header {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ccc;
}

.chat .header view {
  text-align: center;
  height: 100%;
  line-height: 3rem;
  flex: 1;
}

.swiper {
  width: 100%;
  flex: 1;
}

.class {
  width: 100%;
  height: 100%;
  background-color: aqua;
}

.swiper-item {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.list {
  flex: 1;
}

.inputdialog {
  width: 80vw;
  height: 200px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.active {
  background: #00aaff;
  color: #ffffff;
  font-weight: bold;
}
</style>
