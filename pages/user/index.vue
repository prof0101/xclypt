<template>
  <view class="page_user page_user--new" id="user_index">
    <!-- 用户栏模块(开始) -->
    <view>
      <view class="container">
        <view>
          <view>
            <view class="">
              <view
                class="top_user"
                :style="
                  'background:url(' +
                  bgc_avatar +
                  ') no-repeat;background-size:100% 100%;'
                "
              >
                <image
                  class="avatar"
                  style="width: 6rem; height: 6rem"
                  :src="$fullUrl(user.avatar) || '/static/img/default.png'"
                  mode="scaleToFill"
                ></image>
                <view class="name">
                  <text style="font-size: 2rem">{{ user.nickname }}</text>
                  <text style="font-size: 1.5rem; color: var(--color_grey)">{{
                    user.user_group
                  }}</text>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 用户栏模块(结束) -->
    <!-- 菜单栏模块(开始) -->
    <view v-if="user.user_id">
      <view class="container">
        <view>
          <view>
            <view class="">
              <view class="list_my">
                <view
                  class="item_my"
                  v-for="(o, i) in list_info"
                  :key="i"
                  v-if="
                    $check_action(o.url, 'get') &&
                    (o.title != '统计图' || chartAble)
                  "
                >
                  <navigator
                    :url="'/pages' + o.url"
                    class="my_nav"
                    hover-class="hover"
                  >
                    <uni-icons :type="o.type" size="20"></uni-icons>
                    <text class="name">{{ o.title }}</text>
                  </navigator>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 菜单栏模块(结束) -->

    <!-- 自定义栏模块(开始) -->
    <view>
      <view class="container">
        <view>
          <view>
            <view class="">
              <view class="list_module">
                <view v-if="$check_action('/regular_users/table', 'get')">
                  <navigator
                    class="my_module"
                    url="/pages/regular_users/table"
                    hover-class="hover"
                  >
                    <div>
                      <text>普通用户</text>
                    </div>
                  </navigator>
                </view>
                <view v-if="$check_action('/merchant_users/table', 'get')">
                  <navigator
                    class="my_module"
                    url="/pages/merchant_users/table"
                    hover-class="hover"
                  >
                    <div>
                      <text>商家用户</text>
                    </div>
                  </navigator>
                </view>
                <view
                  v-if="$check_action('/attraction_information/table', 'get')"
                >
                  <navigator
                    class="my_module"
                    url="/pages/attraction_information/table"
                    hover-class="hover"
                  >
                    <div>
                      <text>景点信息</text>
                    </div>
                  </navigator>
                </view>
                <view v-if="$check_action('/ticket_orders/table', 'get')">
                  <navigator
                    class="my_module"
                    url="/pages/ticket_orders/table"
                    hover-class="hover"
                  >
                    <div>
                      <text>门票订单</text>
                    </div>
                  </navigator>
                </view>
                <view
                  v-if="$check_action('/restaurant_information/table', 'get')"
                >
                  <navigator
                    class="my_module"
                    url="/pages/restaurant_information/table"
                    hover-class="hover"
                  >
                    <div>
                      <text>餐厅信息</text>
                    </div>
                  </navigator>
                </view>
                <view v-if="$check_action('/restaurant_orders/table', 'get')">
                  <navigator
                    class="my_module"
                    url="/pages/restaurant_orders/table"
                    hover-class="hover"
                  >
                    <div>
                      <text>餐厅订单</text>
                    </div>
                  </navigator>
                </view>
                <view v-if="$check_action('/hotel_information/table', 'get')">
                  <navigator
                    class="my_module"
                    url="/pages/hotel_information/table"
                    hover-class="hover"
                  >
                    <div>
                      <text>酒店信息</text>
                    </div>
                  </navigator>
                </view>
                <view v-if="$check_action('/hotel_orders/table', 'get')">
                  <navigator
                    class="my_module"
                    url="/pages/hotel_orders/table"
                    hover-class="hover"
                  >
                    <div>
                      <text>酒店订单</text>
                    </div>
                  </navigator>
                </view>
                <view
                  v-if="$check_action('/homestay_information/table', 'get')"
                >
                  <navigator
                    class="my_module"
                    url="/pages/homestay_information/table"
                    hover-class="hover"
                  >
                    <div>
                      <text>民宿信息</text>
                    </div>
                  </navigator>
                </view>
                <view v-if="$check_action('/homestay_orders/table', 'get')">
                  <navigator
                    class="my_module"
                    url="/pages/homestay_orders/table"
                    hover-class="hover"
                  >
                    <div>
                      <text>民宿订单</text>
                    </div>
                  </navigator>
                </view>

                <!-- 论坛管理 -->
                <view v-if="$check_action('/forum/table', 'get')">
                  <navigator
                    class="my_module"
                    url="/pages/forum/table"
                    hover-class="hover"
                  >
                    <div>
                      <text>论坛管理</text>
                    </div>
                  </navigator>
                </view>
                <!-- 论坛管理 -->
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 自定义栏模块(结束) -->

    <!-- 按钮模块(开始) -->
    <view>
      <view class="container">
        <view>
          <view>
            <view class="">
              <view class="btns">
                <view
                  class="btn btn_logout"
                  v-if="user.user_id"
                  @click="sign_out()"
                >
                  退出登录
                </view>
                <navigator
                  v-else
                  class="btn btn_login"
                  url="/pages/account/login"
                  type="default"
                  >登录</navigator
                >
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 按钮模块(结束) -->
  </view>
</template>

<script>
import nav_quick from '@/components/diy/nav_quick.vue'

import mixin from '@/libs/mixins/page.js'

export default {
  components: {
    nav_quick,
  },
  mixins: [mixin],
  data() {
    return {
      chartAble: false,
      list_info: [
        {
          title: '基本信息',
          type: 'info',
          url: '/user/info',
        },
        {
          title: '收藏',
          type: 'heart',
          url: '/user/collect',
        },
        {
          title: '统计图',
          type: 'home',
          url: '/user_center/index',
        },
      ],
      bgc_avatar: '../../static/img/bgc_1.jpg',
    }
  },
  onLoad() {},
  methods: {
    sign_out() {
      this.$store.replaceState({
        count: 6,
        user: {
          user_id: 0,
          token: '',
          username: '',
          referee_id: 0,
          vip: 0,
          gm: 0,
          mc: 0,
          phone: '',
          phone_state: 0,
          email: '',
          email_state: 0,
          login_ip: '',
          login_time: '',
          user_group: '游客',
          user_admin: '',
          signature: '',
          nickname: '',
          avatar: '',
          invite_code: '',
          friends: '',
          state: 0,
        },
        web: {
          active_index: 1,
          auth: [],
        },
        chat: {
          friendList: [],
          groupList: [],
          mergeList: [],
          currentChatObj: null,
          websocket: null,
          recordList: [],
          groupChatUser: [],
        },
      })
      this.$store.commit('sign_out')
      // this.$get(getApp().globalData.host + "/api/user/sign_out")
    },
  },
}
</script>

<style scoped>
.page_user {
  background-color: #f7f7f7;
}

.top_user {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
}

.top_user .avatar {
  border-radius: 1rem;
  box-shadow: 0px 0px 4px 2px #eee;
}

.top_user .name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btns {
  padding: 1rem;
}

.list_my {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  text-align: center;
  background-color: #fff;
  padding: 0.5rem 0.2rem 0;
}

.item_my {
  flex: 1;
  padding-bottom: 0.5rem;
}

.my_nav {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.my_nav text {
  font-size: 0.5rem;
}

.btn {
  text-align: center;
}

.btn_logout {
  background-color: var(--color_primary);
  color: #fff;
}

.my_module {
  font-size: 0.5rem;
  line-height: 2.5rem;
}

.my_module div {
  width: 80%;
  margin: 0 auto;
  border-bottom: 1px solid #666;
}

.my_module span {
  float: right;
  padding-right: 0.5rem;
  color: #666;
}

.list_module {
  justify-content: flex-start;
  background-color: #fff;
  padding: 0.5rem 0.2rem 1.5rem;
}

/*new style start*/
.page_user--new .btn_logout,
.page_user--new .btn_login {
  border-radius: 10px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background: var(--color_primary);
  color: var(--color_white);
}

.list_module {
  padding-top: 0;
  padding-bottom: 0;
}

.list_module uni-view:first-child {
  padding-top: 0.5rem;
}

.list_module uni-view:last-child {
  padding-bottom: 1.5rem;
}

/*new style end*/
</style>
