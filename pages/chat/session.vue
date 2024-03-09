<template>
  <view class="chat_session">
    <view class="scroll_view">
      <scroll-view
        scroll-y
        class="scroll"
        ref="right_message"
        :scroll-top="scrollTop"
      >
        <template v-for="item in messageList">
          <chatMessage
            :username="item.from_user_nickname"
            :content="item.content"
            :avatar="$fullUrl(item.avatar)"
            :type="item.type"
            :isOwn="item.me"
            :text="'你好'"
          ></chatMessage>
        </template>
      </scroll-view>
    </view>
    <view class="input_message_area">
      <view class="message_tool">
        <view style="display: flex">
          <image
            src="../../static/img/emoji.png"
            class="button-image"
            @click="$refs.emojiRef.open()"
          >
          </image>

          <image
            v-if="currentChatObj.group_id"
            @click="$refs.showRight.open()"
            src="../../static/img/group_persion_list.png"
            class="button-image"
          ></image>
        </view>
        <button
          type="primary"
          size="mini"
          style="margin: 0; margin-right: 10px"
          @click="sendMessage('text', textarea)"
        >
          发送
        </button>
      </view>
      <view class="text_input">
        <uni-easyinput type="textarea" v-model="textarea"></uni-easyinput>
      </view>
    </view>
    <uni-popup type="bottom" ref="emojiRef">
      <view class="emoji_box">
        <view
          style="padding: 2px; width: 34px; height: 34px"
          v-for="item in emojiList"
          @click="joinEmoji(item.alt)"
        >
          <image
            class="emoji_image"
            :src="'/static/emoji/' + item.url"
            :alt="item.alt"
          />
        </view>
      </view>
    </uni-popup>
    <uni-drawer ref="showRight" mode="right">
      <view
        style="
          padding: 5px;
          display: flex;
          flex-direction: row;
          align-items: center;
        "
      >
        群成员<button size="mini" type="primary" @click="addUser">
          添加成员
        </button>
      </view>
      <scroll-view style="height: 100%" scroll-y="true">
        <uni-list :border="true">
          <!-- 显示圆形头像 -->
          <uni-list-chat
            clickable
            v-for="item in $store.state.chat.groupChatUser"
            :avatar-circle="true"
            :title="item.nickname"
            :avatar="$fullUrl(item.avatar) || '/static/img/avatar.jpg'"
            @click="toChat(item)"
          >
          </uni-list-chat>
        </uni-list>
      </scroll-view>
    </uni-drawer>
  </view>
</template>

<script>
import chatMessage from '@/components/diy/chat_message.vue'

export default {
  data() {
    return {
      visible: false,
      textarea: '',
      dialogVisible: false,
      isImage: false,
      filename: '',
      messageList: [],
      groupPersionList: [],
      scrollTop: 9999,
      emojiList: [
        {
          url: 'Expression_0.png',
          alt: '[微笑]',
        },
        {
          url: 'Expression_1.png',
          alt: '[撇嘴]',
        },
        {
          url: 'Expression_2.png',
          alt: '[眨眼]',
        },
        {
          url: 'Expression_3.png',
          alt: '[乖巧]',
        },
        {
          url: 'Expression_4.png',
          alt: '[色]',
        },
        {
          url: 'Expression_5.png',
          alt: '[呲牙]',
        },
        {
          url: 'Expression_6.png',
          alt: '[流泪]',
        },
        {
          url: 'Expression_7.png',
          alt: '[可爱]',
        },
        {
          url: 'Expression_8.png',
          alt: '[难过]',
        },
        {
          url: 'Expression_9.png',
          alt: '[失望]',
        },
        {
          url: 'Expression_10.png',
          alt: '[鼻涕]',
        },
        {
          url: 'Expression_11.png',
          alt: '[冷汗]',
        },
        {
          url: 'Expression_12.png',
          alt: '[调皮]',
        },
        {
          url: 'Expression_13.png',
          alt: '[开心]',
        },
        {
          url: 'Expression_14.png',
          alt: '[悲伤]',
        },
        {
          url: 'Expression_15.png',
          alt: '[流汗]',
        },
        {
          url: 'Expression_16.png',
          alt: '[酷]',
        },
        {
          url: 'Expression_17.png',
          alt: '[微笑]',
        },
        {
          url: 'Expression_18.png',
          alt: '[抓狂]',
        },
        {
          url: 'Expression_19.png',
          alt: '[皱眉]',
        },
        {
          url: 'Expression_20.png',
          alt: '[大笑]',
        },
        {
          url: 'Expression_21.png',
          alt: '[快乐]',
        },
        {
          url: 'Expression_22.png',
          alt: '[眯眼]',
        },
        {
          url: 'Expression_23.png',
          alt: '[衰]',
        },
        {
          url: 'Expression_24.png',
          alt: '[高兴]',
        },
        {
          url: 'Expression_25.png',
          alt: '[笑哭]',
        },
        {
          url: 'Expression_26.png',
          alt: '[学习]',
        },
        {
          url: 'Expression_27.png',
          alt: '[萌]',
        },
        {
          url: 'Expression_28.png',
          alt: '[闭嘴]',
        },
        {
          url: 'Expression_29.png',
          alt: '[飞吻]',
        },
        {
          url: 'Expression_30.png',
          alt: '[撇嘴]',
        },
        {
          url: 'Expression_31.png',
          alt: '[色眯眯]',
        },
        {
          url: 'Expression_32.png',
          alt: '[傲娇]',
        },
        {
          url: 'Expression_33.png',
          alt: '[不屑]',
        },
        {
          url: 'Expression_34.png',
          alt: '[尴尬]',
        },
        {
          url: 'Expression_35.png',
          alt: '[吃饱了]',
        },
      ],
    }
  },
  components: {
    chatMessage,
  },
  onShow() {
    uni.setNavigationBarTitle({
      title:
        this.$store.state.chat.currentChatObj.nickname ||
        this.$store.state.chat.currentChatObj.group_name,
    })
  },
  methods: {
    addUser() {
      uni.navigateTo({
        url: '/pages/chat/createGroup?type=yaoqing',
      })
    },
    getGroupPersionList() {
      if (!this.$store.state.chat.currentChatObj.group_id) return
      this.$get('~/api/user_chat_group/get_group_user_list', {
        group_id: this.$store.state.chat.currentChatObj.group_id,
      }).then((res) => {
        this.$store.commit('set_groupChatUser', res.result.list)
      })
    },
    selectFile(url) {
      uni.showLoading({
        title: '上传中',
        mask: true,
      })
      const that = this

      uni.uploadFile({
        url: this.$fullUrl('~/api/user_chat_friend/upload'),
        filePath: url,
        name: 'file',
        success: (uploadFileRes) => {
          const res = JSON.parse(uploadFileRes.data)
          that.uploadFileSuccess(res)
        },
        complete() {
          uni.hideLoading()
        },
      })
    },
    getList1() {
      if (!this.$store.state.chat.currentChatObj) {
        return false
      }
      const currentChatObjId =
        this.$store.state.chat.currentChatObj.group_id ||
        this.$store.state.chat.currentChatObj.friend_user_id
      this.messageList = []
      for (let i = 0; i < this.recordList.length; i++) {
        if (this.recordList[i].id === currentChatObjId) {
          this.messageList = this.recordList[i].list
        }
      }

      const that = this
      this.$nextTick(() => {
        that.scrollTop += 1
        that.scrollTop = that.scrollTop
      })
    },
    beforeUploadFile(obj) {},
    uploadFileSuccess(res) {
      if (this.isImage) {
        this.sendMessage('image', res.result.url)
      } else {
        this.sendMessage('file', res.result.url + '|' + this.filename)
      }
      this.$refs.uploadFile.clearFiles()
    },
    getEmojiUrl(url) {
      return require('@/static/emoji/' + url)
    },
    joinEmoji(alt) {
      this.textarea += alt

      this.$refs.emojiRef.close()
    },
    sendMessage(type, content) {
      if (this.textarea.trim() || type !== 'text') {
        const to = {}
        const message = {
          type: type,
          content: content,
          avatar: this.$store.state.user.avatar,
        }

        const currentChatObj = this.$store.state.chat.currentChatObj

        if (currentChatObj.group_id) {
          to.type = 'group'
          to.group_id = currentChatObj.group_id
          message.group_id = currentChatObj.group_id
        } else {
          to.type = 'single'
          to.user_id = currentChatObj.friend_user_id
        }

        message.from_user_id = this.$store.state.user.user_id
        message.from_user_nickname = this.$store.state.user.nickname

        this.send(message, to)

        //将自己发送的消息加入到聊天记录
        const recordList = this.$store.state.chat.recordList
        const objId = currentChatObj.friend_user_id || currentChatObj.group_id
        for (let i = 0; i < recordList.length; i++) {
          if (recordList[i].id === objId) {
            message.me = true
            recordList[i].list.push(message)
          }
        }
        //保存到sessionStorage

        this.$store.commit('set_recordList', recordList)
        uni.setStorageSync(
          'recordList' + this.$store.state.user.user_id,
          JSON.stringify(recordList)
        )

        this.textarea = ''
      }
    },
    send(message, to) {
      const obj = {
        message: message,
        user_id: this.$store.state.user.user_id,
        username: this.$store.state.user.nickname,
        to: to,
      }

      this.$store.state.chat.websocket.send({
        data: JSON.stringify(obj),
      })
    },
  },
  watch: {
    recordList: {
      handler() {
        this.getList1()
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    recordList() {
      return this.$store.state.chat.recordList
    },
    currentChatObj() {
      return this.$store.state.chat.currentChatObj
    },
  },
}
</script>

<style scoped>
.chat_session {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
}

.scroll_view {
  height: calc(100vh - 180px);
}

.scroll {
  height: 500px;
}

.input_message_area {
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 180px;
  flex: 1;
  flex-direction: column;
}

.message_tool {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
}

.message_tool .button-image {
  display: block;
  width: 30px;
  height: 30px;
  margin-left: 20px;
}

.text_input {
  flex: 1;
  padding: 5px;
  box-sizing: border-box;
}

.emoji_box {
  padding: 10px;
  width: 100%;
  height: 300px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  box-sizing: border-box;
}

.emoji_image {
  width: 30px;
  height: 30px;
}
</style>
<style>
.chat_session .uni-file-picker__lists {
  display: none;
}
</style>
