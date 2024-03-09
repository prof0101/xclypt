<template>
  <view
    class="page_restaurant_information diy_detail diy_detail--new"
    id="restaurant_information_details"
  >
    <view class="warp">
      <view class="container-fluid">
        <view class="row">
          <view
            v-if="$check_field('get', 'merchant_users')"
            class="col-12 col-6"
          >
            <view class="view">
              <view class="diy_title">
                <span>商家用户</span>
              </view>
              <view class="diy_field diy_uid">
                {{ get_user_merchant_users(obj['merchant_users']) }}
              </view>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'merchant_name')"
            class="col-12 col-6"
          >
            <view class="view">
              <view class="diy_title">
                <span>商家名称</span>
              </view>
              <view class="diy_field diy_text">
                <span>
                  {{ obj['merchant_name'] }}
                </span>
              </view>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'restaurant_name')"
            class="col-12 col-6"
          >
            <view class="view">
              <view class="diy_title">
                <span>餐厅名称</span>
              </view>
              <view class="diy_field diy_text">
                <span>
                  {{ obj['restaurant_name'] }}
                </span>
              </view>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'restaurant_id')"
            class="col-12 col-6"
          >
            <view class="view">
              <view class="diy_title">
                <span>餐厅编号</span>
              </view>
              <view class="diy_field diy_text">
                <span>
                  {{ obj['restaurant_id'] }}
                </span>
              </view>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'restaurant_phone_number')"
            class="col-12 col-6"
          >
            <view class="view">
              <view class="diy_title">
                <span>餐厅电话</span>
              </view>
              <view class="diy_field diy_phone">
                <span>
                  {{ obj['restaurant_phone_number'] }}
                </span>
              </view>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'restaurant_image')"
            class="col-12 col-6"
          >
            <view class="view">
              <view class="diy_title">
                <span>餐厅图片</span>
              </view>
              <view class="diy_field diy_img">
                <img :src="$fullUrl(obj['restaurant_image'])" />
              </view>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'restaurant_type')"
            class="col-12 col-6"
          >
            <view class="view">
              <view class="diy_title">
                <span>餐厅类型</span>
              </view>
              <view class="diy_field diy_text">
                <span>
                  {{ obj['restaurant_type'] }}
                </span>
              </view>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'booking_amount')"
            class="col-12 col-6"
          >
            <view class="view">
              <view class="diy_title">
                <span>预定金额</span>
              </view>
              <view class="diy_field diy_text">
                <span>
                  {{ obj['booking_amount'] }}
                </span>
              </view>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'restaurant_address')"
            class="col-12 col-6"
          >
            <view class="view">
              <view class="diy_title">
                <span>餐厅地址</span>
              </view>
              <view class="diy_field diy_desc">
                <span>
                  {{ obj['restaurant_address'] }}
                </span>
              </view>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'restaurant_details')"
            class="col-12 col-6"
          >
            <view class="view">
              <view class="diy_title">
                <span>餐厅详情</span>
              </view>
              <view class="diy_field diy_desc">
                <span>
                  {{ obj['restaurant_details'] }}
                </span>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="row">
        <view class="col-12 col-md-4 view">
          <span>点赞{{ obj['praise_len'] }}</span>
        </view>
      </view>
    </view>

    <!-- 评论区标题 -->
    <view class="bar_title comment_title">
      <view class="title">
        <navigator :url="bar_url">
          <text>
            {{ bar_title }}
          </text>
        </navigator>
      </view>
    </view>

    <!-- 评论区列表 -->
    <list_comment :list="list_comment"></list_comment>

    <view class="warp">
      <view class="container-fluid container-fluid-comment--new">
        <view class="row">
          <view class="col">
            <button
              type="button"
              class="btn btn-primary"
              v-if="$check_action('/restaurant_orders/edit', 'add')"
              @click="to_form('/pages/restaurant_orders/edit')"
            >
              <span>餐厅预订</span>
            </button>

            <!--						<button type="button" class="btn btn-primary" @click="cancel()">返回</button>-->

            <button
              v-if="user_group != '游客'"
              type="button"
              class="btn btn-primary"
              @click="change_praise()"
            >
              <span>点赞</span>
            </button>

            <navigator
              v-if="$check_action('/comment/list', 'add')"
              class="btn link"
              :url="
                '/pages/comment/edit?source_table=restaurant_information&source_field=restaurant_information_id&source_id=' +
                obj['restaurant_information_id']
              "
            >
              评论
            </navigator>

            <navigator
              v-if="$check_action('/collect/list', 'add')"
              @click="change_collect()"
              class="btn publish_box"
            >
              <uni-icons type="heart"></uni-icons>
              <text>收藏</text>
            </navigator>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import list_comment from '@/components/diy/list_comment.vue'
import bar_title from '@/components/diy/bar_title.vue'
import form_editor from '@/components/diy/form_editor.vue'

import mixin from '@/libs/mixins/page.js'
export default {
  mixins: [mixin],
  components: {
    list_comment,
    bar_title,
    form_editor,
  },
  data() {
    return {
      url_get_obj: '~/api/restaurant_information/get_obj?',
      field: 'restaurant_information_id',
      query: {
        restaurant_information_id: 0,
      },
      // 商品详情初始化
      obj: {
        merchant_users: 0,
        merchant_name: '',
        restaurant_name: '',
        restaurant_id: '',
        restaurant_phone_number: '',
        restaurant_image: '',
        restaurant_type: '',
        booking_amount: '',
        restaurant_address: '',
        restaurant_details: '',
        praise_len: 0,
        restaurant_information_id: 0,
      },
      // 点赞
      praise: 0,
      // 点赞状态
      state_praise: false,
      // 收藏
      collect: 0,
      // 收藏状态
      state_collect: false,
      // 评论列表初始化
      list_comment: [],
      // 评论bar标题
      bar_title: '评论区',
      // 评论bar的链接
      bar_url: '',
      // 用户列表
      list_user_merchant_users: [],
    }
  },
  created() {
    this.get_list_user_merchant_users()
  },
  mounted() {},
  methods: {
    /**
     * 获取点赞
     * @param {Object}
obj
     */
    get_praise(obj) {
      var user_id = this.user.user_id

      this.obj.praise_len = 0

      this.$get(
        '~/api/praise/count?',
        {
          source_table: 'restaurant_information',
          source_field: 'restaurant_information_id',
          source_id: obj['restaurant_information_id'],
        },
        (res) => {
          if (res.result || res.result === 0) {
            this.praise = res.result
            this.obj.praise_len = res.result
          } else if (res.error) {
            this.$toast(res.error.message)
            console.error(res.error)
          }
        }
      )

      this.$get(
        '~/api/praise/count?',
        {
          source_table: 'restaurant_information',
          source_field: 'restaurant_information_id',
          source_id: obj['restaurant_information_id'],
          user_id,
        },
        (res) => {
          if (res.result || res.result === 0) {
            this.state_praise = res.result ? true : false
          } else if (res.error) {
            this.$toast(res.error.message)
            console.error(res.error)
          }
        }
      )
    },

    /**
     * 改变点赞数
     */
    change_praise(obj) {
      var user_id = this.user.user_id

      var query = {
        source_table: 'restaurant_information',
        source_field: 'restaurant_information_id',
        source_id: this.obj['restaurant_information_id'],
        user_id,
      }

      var _this = this
      _this.obj.praise_len = parseInt(_this.obj.praise_len)
      // 点赞状态
      if (this.state_praise) {
        this.state_praise = false
        this.$get('~/api/praise/del?', query, (res) => {
          if (res.result) {
            var praise_len = _this.obj.praise_len - 1
            this.$post(
              '~/api/restaurant_information/set?restaurant_information_id=' +
                _this.obj['restaurant_information_id'],
              {
                praise_len,
              },
              (res) => {
                if (res.result) {
                  _this.obj.praise_len = praise_len
                } else if (res.error) {
                  console.error(res.error)
                }
              }
            )
            this.$toast('取消点赞')
          } else if (res.error) {
            this.$toast(res.error.message)
            console.error(res.error)
          }
        })
      } else {
        this.state_praise = true
        this.$post('~/api/praise/add?', query, (res) => {
          if (res.result) {
            var praise_len = _this.obj.praise_len + 1
            this.$post(
              '~/api/restaurant_information/set?restaurant_information_id=' +
                _this.obj['restaurant_information_id'],
              {
                praise_len,
              },
              (res) => {
                if (res.result) {
                  _this.obj.praise_len = praise_len
                } else if (res.error) {
                  console.error(res.error)
                }
              }
            )
            this.$toast('点赞成功')
          } else if (res.error) {
            this.$toast(res.error.message)
            console.error(res.error)
          }
        })
      }
    },

    /**
     * 初始化收藏状态
     * @param {Object} obj
     */
    get_collect(obj) {
      var user_id = this.user.user_id

      var query = {
        source_table: 'restaurant_information',
        source_field: 'restaurant_information_id',
        source_id: obj['restaurant_information_id'],
        user_id,
      }

      this.$get('~/api/collect/count?', query, (res) => {
        if (res.result || res.result === 0) {
          var bl = res.result ? true : false
          this.state_collect = bl
        } else if (res.error) {
          console.error(res.error)
        }
      })
    },

    /**
     * 改变收藏状态
     */
    change_collect() {
      var user_id = this.user.user_id

      var query = {
        source_table: 'restaurant_information',
        source_field: 'restaurant_information_id',
        source_id: this.obj['restaurant_information_id'],
        user_id,
      }

      // 收藏状态
      if (this.state_collect) {
        this.state_collect = false
        this.$get('~/api/collect/del?', query, (res) => {
          if (res.result) {
            this.$toast('取消收藏')
          } else if (res.error) {
            this.$toast(res.error.message)
            console.error(res.error)
          }
        })
      } else {
        this.state_collect = true
        query.title = this.obj.restaurant_name
        query.img = this.obj.restaurant_image
        this.$post('~/api/collect/add?', query, (res) => {
          if (res.result) {
            this.$toast('收藏成功')
          } else if (res.error) {
            this.$toast(res.error.message)
            console.error(res.error)
          }
        })
      }
    },

    /**
     * 获取评论
     * @param {Object} obj
     */
    get_comment(obj) {
      var query = {
        source_table: 'restaurant_information',
        source_field: 'restaurant_information_id',
        source_id: obj['restaurant_information_id'],
        orderby: 'create_time desc',
        reply_to_id: '0',
      }
      this.$get(
        getApp().globalData.host + '/api/comment/get_list?',
        query,
        (json) => {
          if (json.result) {
            var list_comment = json.result.list
            list_comment.map((o) => {
              o.list_reply = []
            })
            this.add_reply(obj, list_comment).then((list) => {
              this.list_comment = list
            })
          }
        }
      )
    },
    /**
     * @param { Array } list 评论列表
     * 添加回复到评论列表
     */
    add_reply(obj, list) {
      return new Promise((resolve) => {
        for (let idx = 0; idx < list.length; idx++) {
          const obj = list[idx]
          this.$get(
            getApp().globalData.host + '/api/comment/get_list?',
            {
              source_table: 'restaurant_information',
              source_field: 'restaurant_information_id',
              source_id: obj['restaurant_information_id'],
              orderby: 'create_time desc',
              reply_to_id: obj.comment_id,
            },
            (res) => {
              if (res.result) {
                obj.list_reply = res.result.list
              }
            }
          )
        }
        resolve(list)
      }).catch((e) => {})
    },

    /**
     * 获取对象之后
     * @param {Object} json 结果对象
     */
    get_obj_after(json) {
      // 判断是否获取到数据
      if (this.obj) {
        var obj = this.obj
        // 获取点赞数
        this.get_praise(obj)
        // 初始化收藏状态
        this.get_collect(obj)
        // 获取评论
        this.get_comment(obj)
      }
    },

    /**
     * 获取商家用户用户列表
     */
    async get_list_user_merchant_users() {
      var json = await this.$get('~/api/user/get_list?user_group=商家用户')
      if (json.result && json.result.list) {
        this.list_user_merchant_users = json.result.list
      } else if (json.error) {
        console.error(json.error)
      }
    },
    get_user_merchant_users(id) {
      let obj = this.list_user_merchant_users
      let ret = ''
      for (let i = 0; i < obj.length; i++) {
        if (obj[i].user_id == id) {
          ret = obj[i].nickname + '-' + obj[i].username
        }
      }
      return ret
    },
  },
}
</script>

<style>
.page_goods {
  padding-bottom: 3rem;
}

.link {
  text-align: center;
  padding: 0.5rem 0;
  border: 1px solid #dbdbdb;
  border-radius: 0.5rem;
}

.buy_wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.dialog {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  padding: 20vh 0;
}

.dialog-content {
  width: 500upx;
  height: 60vh;
  margin: 0 auto;
  background: #fff;
  border-radius: 10upx;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 5vh;
  text-align: center;
}
.dialog-content span {
  margin-top: 3vh;
}

.dialog-close {
  width: 40upx;
  height: 40upx;
  border-radius: 20upx;
  position: absolute;
  right: 10upx;
  top: 10upx;
  font-size: 26upx;
  line-height: 40upx;
  text-align: center;
}

.dialog-list {
  padding: 40upx 20upx;
}

scroll-view {
  width: 100%;
  height: 100%;
}

.show-dialog {
  animation: 100ms showDialog linear forwards;
}

.hide-dialog {
  animation: 100ms hideDialog linear forwards;
}

@keyframes hideDialog {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes showDialog {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/* new style start */
.diy_detail--new {
  padding: 5px;
}
.diy_detail--new .view {
  border-bottom: 1px solid #ccc;
  padding: 8px 0;
}
.diy_detail--new .view uni-view {
  display: inline-block;
}
.diy_detail--new .view .diy_title {
  color: var(--color_primary);
  margin-right: 5px;
  vertical-align: top;
}
.diy_detail--new .view .diy_img img {
  width: 100%;
}
.diy_detail--new .view .diy_music {
  vertical-align: text-top;
}
.diy_detail--new .bar_title {
  position: relative;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
  background: var(--color_primary);
  border-radius: 10px;
  height: 46px;
}
.diy_detail--new .bar_title .title {
  margin: 0 auto;
  color: var(--color_white);
  font-weight: 600;
}
.diy_detail--new .container-fluid-comment--new {
  margin: 10px 0.6rem;
}
.diy_detail--new .container-fluid-comment--new .col {
  display: flex;
  flex: auto;
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: -10px;
}
.diy_detail--new .container-fluid-comment--new .btn {
  display: inline-block;
  border: none;
  background: var(--color_primary);
  color: #fff;
  font-size: 16px !important;
  padding: 2px 12px !important;
  border-radius: 20px;
  line-height: inherit;
  margin-bottom: 5px;
  margin-left: 10px;
  margin-right: 0;
}
.diy_detail--new .container-fluid-comment--new .btn:after {
  display: none;
}
.diy_detail--new .container-fluid-comment--new .btn .uni-icons {
  color: #fff !important;
}
.diy_detail--new .comment_title {
  margin-top: 10px;
}
/* new style end */
</style>
