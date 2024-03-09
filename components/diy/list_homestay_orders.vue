<template>
  <view
    class="list_homestay_orders list_com--new"
    style="background-color: #fff"
  >
    <!-- 视图 -->
    <view class="homestay_orders_block box_wrap">
      <navigator
        class="item_homestay_orders box_style"
        v-for="(o, i) in list"
        :key="i"
        :url="
          '/pages/homestay_orders/details?homestay_orders_id=' +
          o['homestay_orders_id']
        "
      >
        <view
          class="view"
          v-if="
            0 &&
            $check_index_field('get', 'regular_users', '/homestay_orders/list')
          "
        >
          <view class="title" v-if="true">
            <span>普通用户</span>
          </view>
          <view class="diy_field time">
            <span>{{ get_user_regular_users(o['regular_users']) }}</span>
          </view>
        </view>
        <view
          class="view"
          v-if="
            0 && $check_index_field('get', 'user_name', '/homestay_orders/list')
          "
        >
          <view class="title" v-if="true">
            <span>用户姓名</span>
          </view>
          <view class="diy_field text">
            <span>{{ o['user_name'] }}</span>
          </view>
        </view>
        <view
          class="view"
          v-if="
            0 &&
            $check_index_field(
              'get',
              'mobile_phone_number',
              '/homestay_orders/list'
            )
          "
        >
          <view class="title" v-if="true">
            <span>手机号码</span>
          </view>
          <view class="diy_field text">
            <span>{{ o['mobile_phone_number'] }}</span>
          </view>
        </view>
        <view
          class="view"
          v-if="
            0 &&
            $check_index_field('get', 'merchant_users', '/homestay_orders/list')
          "
        >
          <view class="title" v-if="true">
            <span>商家用户</span>
          </view>
          <view class="diy_field time">
            <span>{{ get_user_merchant_users(o['merchant_users']) }}</span>
          </view>
        </view>
        <view
          class="view"
          v-if="
            0 &&
            $check_index_field('get', 'merchant_name', '/homestay_orders/list')
          "
        >
          <view class="title" v-if="true">
            <span>商家名称</span>
          </view>
          <view class="diy_field text">
            <span>{{ o['merchant_name'] }}</span>
          </view>
        </view>
        <view
          class="view"
          v-if="
            1 &&
            $check_index_field('get', 'homestay_name', '/homestay_orders/list')
          "
        >
          <view class="title" v-if="true">
            <span>民宿名称</span>
          </view>
          <view class="diy_field text">
            <span>{{ o['homestay_name'] }}</span>
          </view>
        </view>
        <view
          class="view"
          v-if="
            1 &&
            $check_index_field('get', 'homestay_id', '/homestay_orders/list')
          "
        >
          <view class="title" v-if="true">
            <span>民宿编号</span>
          </view>
          <view class="diy_field text">
            <span>{{ o['homestay_id'] }}</span>
          </view>
        </view>
        <view
          class="view"
          v-if="
            1 &&
            $check_index_field(
              'get',
              'homestay_prices',
              '/homestay_orders/list'
            )
          "
        >
          <view class="title" v-if="true">
            <span>民宿价格</span>
          </view>
          <view class="diy_field text">
            <span>{{ o['homestay_prices'] }}</span>
          </view>
        </view>
        <view
          class="view"
          v-if="
            0 &&
            $check_index_field(
              'get',
              'accommodation_days',
              '/homestay_orders/list'
            )
          "
        >
          <view class="title" v-if="true">
            <span>住宿天数</span>
          </view>
          <view class="diy_field text">
            <span>{{ o['accommodation_days'] }}</span>
          </view>
        </view>
        <view
          class="view"
          v-if="
            0 &&
            $check_index_field(
              'get',
              'total_accommodation_amount',
              '/homestay_orders/list'
            )
          "
        >
          <view class="title" v-if="true">
            <span>住宿总额</span>
          </view>
          <view class="diy_field text">
            <span>{{ o['total_accommodation_amount'] }}</span>
          </view>
        </view>
        <view
          class="view"
          v-if="
            0 &&
            $check_index_field('get', 'booking_amount', '/homestay_orders/list')
          "
        >
          <view class="title" v-if="true">
            <span>预定金额</span>
          </view>
          <view class="diy_field text">
            <span>{{ o['booking_amount'] }}</span>
          </view>
        </view>
        <view
          class="view"
          v-if="
            0 &&
            $check_index_field(
              'get',
              'final_payment_for_homestays',
              '/homestay_orders/list'
            )
          "
        >
          <view class="title" v-if="true">
            <span>民宿尾款</span>
          </view>
          <view class="diy_field text">
            <span>{{ o['final_payment_for_homestays'] }}</span>
          </view>
        </view>
        <view
          class="view"
          v-if="
            0 &&
            $check_index_field(
              'get',
              'accommodation_time',
              '/homestay_orders/list'
            )
          "
        >
          <view class="title" v-if="true">
            <span>住宿时间</span>
          </view>
          <view class="diy_field time">
            <span>{{ $toTime(o['accommodation_time'], 'yyyy-MM-dd') }}</span>
          </view>
        </view>
        <view
          class="view"
          v-if="
            0 &&
            $check_index_field(
              'get',
              'homestay_address',
              '/homestay_orders/list'
            )
          "
        >
          <view class="title" v-if="true">
            <span>民宿地址</span>
          </view>
          <view class="diy_field text">
            <span>{{ o['homestay_address'] }}</span>
          </view>
        </view>
        <view
          class="view"
          v-if="
            0 &&
            $check_index_field('get', 'order_remarks', '/homestay_orders/list')
          "
        >
          <view class="title" v-if="true">
            <span>订单备注</span>
          </view>
          <view class="diy_field text">
            <span>{{ o['order_remarks'] }}</span>
          </view>
        </view>
        <view class="bottom-view"> </view>
        <view class="view">
          <view class="create_time_block diy_field number">
            <span>{{ $toTime(o['create_time'], 'yyyy-MM-dd hh:mm:ss') }}</span>
          </view>
        </view>
      </navigator>
    </view>
    <!-- /视图 -->
  </view>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      },
    },
  },
  data() {
    return {
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
    /**
     *  跳转链接
     *  @param {Object}
id
     */
    to_nav(id) {
      this.$nav('/pages/homestay_orders/details?homestay_orders_id=' + id)
    },
    /**
     * 获取普通用户用户列表
     */
    async get_list_user_regular_users() {
      var json = await this.$get('~/api/user/get_list?user_group=普通用户')
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

<style scoped>
.list_homestay_orders {
  /* padding: 0 1rem; */
  margin-bottom: 1rem;
}

.list_homestay_orders .list_homestay_orders_table {
  width: 100%;
  padding: 5px 0;
}

.list_homestay_orders .list_homestay_orders_table .btn_change_table {
  margin-left: auto;
  font-weight: bold;
  padding: 0.5rem 0;
  width: 100px;
  text-align: center;
  font-size: 0.875rem;
  border: 1px solid #cccccc;
  border-radius: 1rem;
  margin-bottom: 0.25rem;
}

.list_homestay_orders
  .list_homestay_orders_table
  .homestay_orders_table_block
  .uni-table-td {
  padding: 8px;
}

.list_homestay_orders
  .list_homestay_orders_table
  .homestay_orders_table_block
  .image {
  width: 10%;
}

.list_homestay_orders
  .list_homestay_orders_table
  .homestay_orders_table_block
  .text {
  overflow: hidden;
  width: 30%;
  font-size: 0.5rem;
}

.list_homestay_orders
  .list_homestay_orders_table
  .homestay_orders_table_block
  .hits {
  width: 12%;
  font-size: 0.5rem;
}

.list_homestay_orders
  .list_homestay_orders_table
  .homestay_orders_table_block
  .praise {
  width: 12%;
  font-size: 0.5rem;
}

.list_homestay_orders
  .list_homestay_orders_table
  .homestay_orders_table_block
  .create_time {
  width: 26%;
  font-size: 0.5rem;
}
.list_homestay_orders .item_homestay_orders {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 0.75rem 1rem;
}
.list_homestay_orders .item_homestay_orders + .item_homestay_orders {
  border-top: 1px solid #dbdbdb;
}
.list_homestay_orders .item_homestay_orders .left > image {
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  border-radius: 0.5rem;
}

.list_homestay_orders .item_homestay_orders .right_block {
  width: calc(100% - 5rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.list_homestay_orders .top {
  font-size: 0.9rem;
}

.list_homestay_orders .time {
  font-size: 0.6rem;
  color: var(--color_grey);
}

.list_homestay_orders .bottom {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 0.5rem;
  color: var(--color_grey);
}

.list_homestay_orders .see {
  margin-left: 1rem;
}
.box_wrap {
  padding: 0.75rem;
}
.box_style {
  margin-bottom: 0.75rem;
  padding: 0.375rem;
  display: inline-block !important;
  border: 0.075rem solid #ccc;
  border-radius: 0.375rem;
  overflow: hidden;
}
.box_style:nth-child(even) {
  margin-left: 0.6rem;
}
.box_style:nth-child(even) {
  margin-left: 0.6rem;
}
.bottom-view,
.create_time_block {
  font-size: 12px;
  color: #666666;
}
.bottom-view view {
  display: inline-block;
}
.bottom-view span {
  margin-left: 5px;
  margin-right: 10px;
}
/* new style start */
.list_com--new .box_wrap {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0 !important;
  padding-right: 0 !important;
  justify-content: space-between;
}
.list_com--new .box_style:nth-child(even) {
  margin-left: 0 !important;
}
.list_com--new .box_wrap .box_style {
  display: inline-block !important;
  width: 48%;
  max-width: 48%;
  overflow: hidden;
  border-color: var(--color_primary);
  box-sizing: border-box;
  padding: 8px !important;
}
.list_com--new .view {
  display: flex;
  overflow: hidden;
  width: 100%;
}

.list_com--new .view .title span {
  white-space: nowrap;
}
.list_com--new .view .text {
  display: flex;
  color: var(--color_primary);
  margin-left: 10px;
  border-bottom: 1px solid #ccc;
  white-space: nowrap;
}
.list_com--new .view .text span {
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.list_com--new .view .number {
  color: var(--color_primary);
}

.list_com--new .view .image {
  width: 100%;
  border-bottom: 1px solid #ccc;
  margin-top: 5px;
}

.list_com--new .diy_field.text {
  overflow: hidden;
  margin-right: -8px;
}

/* new style start */
</style>
