<template>
  <view class="diy_details diy_div_restaurant_orders">
    <view v-if="Object.keys(obj).length !== 0" class="warp">
      <view class="container">
        <view class="row">
          <view
            v-if="$check_field('get', 'regular_users')"
            class="col-12 col-md-6"
          >
            <view class="diy_title">
              <span>普通用户:</span>
            </view>
            <view class="diy_field diy_uid">
              <text>
                {{ get_user_regular_users(obj['regular_users']) }}
              </text>
            </view>
          </view>
          <view v-if="$check_field('get', 'user_name')" class="col-12 col-md-6">
            <view class="diy_title">
              <span>用户姓名:</span>
            </view>
            <view class="diy_field diy_text">
              <text>
                {{ obj['user_name'] }}
              </text>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'mobile_phone_number')"
            class="col-12 col-md-6"
          >
            <view class="diy_title">
              <span>手机号码:</span>
            </view>
            <view class="diy_field diy_text">
              <text>
                {{ obj['mobile_phone_number'] }}
              </text>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'merchant_users')"
            class="col-12 col-md-6"
          >
            <view class="diy_title">
              <span>商家用户:</span>
            </view>
            <view class="diy_field diy_uid">
              <text>
                {{ get_user_merchant_users(obj['merchant_users']) }}
              </text>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'merchant_name')"
            class="col-12 col-md-6"
          >
            <view class="diy_title">
              <span>商家名称:</span>
            </view>
            <view class="diy_field diy_text">
              <text>
                {{ obj['merchant_name'] }}
              </text>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'restaurant_name')"
            class="col-12 col-md-6"
          >
            <view class="diy_title">
              <span>餐厅名称:</span>
            </view>
            <view class="diy_field diy_text">
              <text>
                {{ obj['restaurant_name'] }}
              </text>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'restaurant_id')"
            class="col-12 col-md-6"
          >
            <view class="diy_title">
              <span>餐厅编号:</span>
            </view>
            <view class="diy_field diy_text">
              <text>
                {{ obj['restaurant_id'] }}
              </text>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'restaurant_phone_number')"
            class="col-12 col-md-6"
          >
            <view class="diy_title">
              <span>餐厅电话:</span>
            </view>
            <view class="diy_field diy_text">
              <text>
                {{ obj['restaurant_phone_number'] }}
              </text>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'restaurant_address')"
            class="col-12 col-md-6"
          >
            <view class="diy_title">
              <span>餐厅地址:</span>
            </view>
            <view class="diy_field diy_text">
              <text>
                {{ obj['restaurant_address'] }}
              </text>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'dinner_time')"
            class="col-12 col-md-6"
          >
            <view class="diy_title">
              <span>用餐时间:</span>
            </view>
            <view class="diy_field diy_datetime">
              <text>
                {{ $toTime(obj['dinner_time'], 'yyyy-MM-dd hh:mm:ss') }}
              </text>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'booking_amount')"
            class="col-12 col-md-6"
          >
            <view class="diy_title">
              <span>预定金额:</span>
            </view>
            <view class="diy_field diy_text">
              <text>
                {{ obj['booking_amount'] }}
              </text>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'order_balance')"
            class="col-12 col-md-6"
          >
            <view class="diy_title">
              <span>订单尾款:</span>
            </view>
            <view class="diy_field diy_text">
              <text>
                {{ obj['order_balance'] }}
              </text>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'booking_remarks')"
            class="col-12 col-md-6"
          >
            <view class="diy_title">
              <span>预订备注:</span>
            </view>
            <view class="diy_field diy_text">
              <text>
                {{ obj['booking_remarks'] }}
              </text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import mixin from '@/libs/mixins/component.js'
export default {
  mixins: [mixin],
  props: {
    obj_goods: {
      type: Object,
      default() {
        return {}
      },
    },
    query: {
      type: Object,
      default() {
        return {
          restaurant_orders_id: 0,
        }
      },
    },
  },
  data() {
    return {
      obj_goods_type: {},
      obj: {},
      // 用户列表
      list_user_regular_users: [],
      // 用户列表
      list_user_merchant_users: [],
    }
  },
  created() {
    this.get_list_user_regular_users()
    this.get_list_user_merchant_users()
  },
  methods: {
    async get_obj_goods_type() {
      var res = await this.$get(
        getApp().globalData.host + '/api/goods_type/get_obj',
        {
          name: this.obj_goods.type,
        }
      )

      if (res.result.obj) {
        this.obj_goods_type = res.result.obj
      } else {
        console.log('没有请求到商品分类')
      }
    },
    async get_obj_by_goods() {
      var { source_table, source_field } = this.obj_goods_type
      var { source_id } = this.obj_goods
      var query = {}
      query[source_field] = source_id
      this.$get(
        getApp().globalData.host + '/api/' + source_table + '/get_obj',
        {},
        (res) => {
          if (res.result.obj) {
            this.obj = res.result.obj
          } else {
            console.log('没有请求到商品分类')
          }
        }
      )
    },
    async get_obj_by_id() {
      var res = await this.$get(
        getApp().globalData.host + '/api/restaurant_orders/get_obj',
        {
          restaurant_orders_id: this.query.restaurant_orders_id,
        }
      )

      if (res.result && res.result.obj) {
        this.obj = res.result.obj
      } else {
        console.log('没有请求到商品分类')
      }
    },
    /**
     * 获取普通用户用户列表
     */
    async get_list_user_regular_users() {
      var json = await this.$get(
        getApp().globalData.host + '/api/user/get_list?user_group=普通用户'
      )
      if (json.result && json.result.list) {
        this.list_user_regular_users = json.result.list
      } else if (json.error) {
        console.error(json.error)
      }
    },
    get_user_regular_users(id) {
      let obj = this.list_user_regular_users
      let ret = ''
      for (let i = 0; i < obj.length; i++) {
        if (obj[i].user_id == id) {
          ret = obj[i].nickname + '-' + obj[i].username
        }
      }
      return ret
    },
    /**
     * 获取商家用户用户列表
     */
    async get_list_user_merchant_users() {
      var json = await this.$get(
        getApp().globalData.host + '/api/user/get_list?user_group=商家用户'
      )
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

  async onLoad() {
    if (Object.keys(this.obj_goods).length !== 0) {
      await this.get_obj_goods_type()
      await this.get_obj_by_goods()
    } else if (this.query['restaurant_orders_id'] !== 0) {
      await this.get_obj_by_id()
    }
  },
}
</script>

<style scoped>
.div_restaurant_orders_details {
}

.details {
  background-color: #fff;
  margin-bottom: 0.5rem;
  padding: 1rem;
  font-size: 10px;
}

.item {
  display: flex;
  padding: 0.2rem 0;
  border-bottom: 1px solid #eee;
}

.left_text {
  flex: 0 0 25%;
}

.right_text {
  flex: 0 0 75%;
}
.edit_nav {
  text-align: center;
  background-color: #fff;
  padding: 0.3rem;
  margin: 0.1rem 1rem;
  border: 1px solid #eee;
  border-radius: 0.5rem;
}
</style>
