<template>
  <view class="diy_details diy_div_homestay_information">
    <view v-if="Object.keys(obj).length !== 0" class="warp">
      <view class="container">
        <view class="row">
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
            v-if="$check_field('get', 'homestay_name')"
            class="col-12 col-md-6"
          >
            <view class="diy_title">
              <span>民宿名称:</span>
            </view>
            <view class="diy_field diy_text">
              <text>
                {{ obj['homestay_name'] }}
              </text>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'homestay_id')"
            class="col-12 col-md-6"
          >
            <view class="diy_title">
              <span>民宿编号:</span>
            </view>
            <view class="diy_field diy_text">
              <text>
                {{ obj['homestay_id'] }}
              </text>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'homestay_telephone_number')"
            class="col-12 col-md-6"
          >
            <view class="diy_title">
              <span>民宿电话:</span>
            </view>
            <view class="diy_field diy_phone">
              <text>
                {{ obj['homestay_telephone_number'] }}
              </text>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'homestay_pictures')"
            class="col-12 col-md-6"
          >
            <view class="diy_title">
              <span>民宿图片:</span>
            </view>
            <view class="diy_field diy_img">
              <image
                style="width: 100%; height: auto"
                :src="$fullUrl(obj['homestay_pictures'])"
                mode="widthFix"
              >
              </image>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'homestay_prices')"
            class="col-12 col-md-6"
          >
            <view class="diy_title">
              <span>民宿价格:</span>
            </view>
            <view class="diy_field diy_number">
              <text>
                {{ obj['homestay_prices'] }}
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
            <view class="diy_field diy_number">
              <text>
                {{ obj['booking_amount'] }}
              </text>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'homestay_address')"
            class="col-12 col-md-6"
          >
            <view class="diy_title">
              <span>民宿地址:</span>
            </view>
            <view class="diy_field diy_desc">
              <text>
                {{ obj['homestay_address'] }}
              </text>
            </view>
          </view>
          <view
            v-if="$check_field('get', 'homestay_details')"
            class="col-12 col-md-6"
          >
            <view class="diy_title">
              <span>民宿详情:</span>
            </view>
            <view class="diy_field diy_desc">
              <text>
                {{ obj['homestay_details'] }}
              </text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="warp">
      <view class="container">
        <view class="row">
          <view class="col">
            <button
              type="button"
              class="diy_btn"
              @click="to_form('/pages/homestay_orders/edit')"
              v-if="
                $check_action('/homestay_orders/edit', 'add') ||
                $check_action('/homestay_orders/edit', 'set')
              "
            >
              民宿预订
            </button>
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
          homestay_information_id: 0,
        }
      },
    },
  },
  data() {
    return {
      obj_goods_type: {},
      obj: {},
      // 用户列表
      list_user_merchant_users: [],
    }
  },
  created() {
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
        getApp().globalData.host + '/api/homestay_information/get_obj',
        {
          homestay_information_id: this.query.homestay_information_id,
        }
      )

      if (res.result && res.result.obj) {
        this.obj = res.result.obj
      } else {
        console.log('没有请求到商品分类')
      }
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
    } else if (this.query['homestay_information_id'] !== 0) {
      await this.get_obj_by_id()
    }
  },
}
</script>

<style scoped>
.div_homestay_information_details {
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
