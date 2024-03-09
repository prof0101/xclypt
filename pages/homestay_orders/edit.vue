<template>
  <view class="diy_edit page_homestay_orders" id="homestay_orders_edit">
    <view class="warp">
      <view class="container">
        <view class="row">
          <view
            v-if="
              $check_field('set', 'regular_users') ||
              $check_field('add', 'regular_users') ||
              $check_field('get', 'regular_users')
            "
            class="col-12 col-md-6 row-item"
          >
            <view class="diy_title diy_text_row">
              <text> 普通用户: </text>
            </view>
            <view class="diy_field diy_down diy_text_row diy_select_flex">
              <uni-data-select
                id="form_regular_users"
                v-model="form['regular_users']"
                :localdata="list_user_regular_users"
                :clear="!disabledObj['regular_users_isDisabled']"
                :disabled="disabledObj['regular_users_isDisabled']"
                v-if="
                  (form['regular_users'] &&
                    $check_field('set', 'regular_users')) ||
                  (!form['regular_users'] &&
                    $check_field('add', 'regular_users'))
                "
              ></uni-data-select>
              <text v-else-if="$check_field('get', 'regular_users')">{{
                form['regular_users']
              }}</text>
            </view>
          </view>
          <view
            v-if="
              $check_field('set', 'user_name') ||
              $check_field('add', 'user_name') ||
              $check_field('get', 'user_name')
            "
            class="col-12 col-md-6 row-item"
          >
            <view class="diy_title diy_text_row">
              <text> 用户姓名: </text>
            </view>
            <!-- 文本 -->
            <view class="diy_field diy_text diy_text_row">
              <input
                type="text"
                id="form_user_name"
                v-model="form['user_name']"
                placeholder="请输入用户姓名"
                v-if="
                  (form['user_name'] && $check_field('set', 'user_name')) ||
                  (!form['user_name'] && $check_field('add', 'user_name'))
                "
                :disabled="disabledObj['user_name_isDisabled']"
              />
              <text v-else-if="$check_field('get', 'user_name')">{{
                form['user_name']
              }}</text>
            </view>
          </view>
          <view
            v-if="
              $check_field('set', 'mobile_phone_number') ||
              $check_field('add', 'mobile_phone_number') ||
              $check_field('get', 'mobile_phone_number')
            "
            class="col-12 col-md-6 row-item"
          >
            <view class="diy_title diy_text_row">
              <text> 手机号码: </text>
            </view>
            <!-- 文本 -->
            <view class="diy_field diy_text diy_text_row">
              <input
                type="text"
                id="form_mobile_phone_number"
                v-model="form['mobile_phone_number']"
                placeholder="请输入手机号码"
                v-if="
                  (form['mobile_phone_number'] &&
                    $check_field('set', 'mobile_phone_number')) ||
                  (!form['mobile_phone_number'] &&
                    $check_field('add', 'mobile_phone_number'))
                "
                :disabled="disabledObj['mobile_phone_number_isDisabled']"
              />
              <text v-else-if="$check_field('get', 'mobile_phone_number')">{{
                form['mobile_phone_number']
              }}</text>
            </view>
          </view>
          <view
            v-if="
              $check_field('set', 'merchant_users') ||
              $check_field('add', 'merchant_users') ||
              $check_field('get', 'merchant_users')
            "
            class="col-12 col-md-6 row-item"
          >
            <view class="diy_title diy_text_row">
              <text> 商家用户: </text>
            </view>
            <view class="diy_field diy_down diy_text_row diy_select_flex">
              <uni-data-select
                id="form_merchant_users"
                v-model="form['merchant_users']"
                :localdata="list_user_merchant_users"
                :clear="!disabledObj['merchant_users_isDisabled']"
                :disabled="disabledObj['merchant_users_isDisabled']"
                v-if="
                  (form['merchant_users'] &&
                    $check_field('set', 'merchant_users')) ||
                  (!form['merchant_users'] &&
                    $check_field('add', 'merchant_users'))
                "
              ></uni-data-select>
              <text v-else-if="$check_field('get', 'merchant_users')">{{
                form['merchant_users']
              }}</text>
            </view>
          </view>
          <view
            v-if="
              $check_field('set', 'merchant_name') ||
              $check_field('add', 'merchant_name') ||
              $check_field('get', 'merchant_name')
            "
            class="col-12 col-md-6 row-item"
          >
            <view class="diy_title diy_text_row">
              <text> 商家名称: </text>
            </view>
            <!-- 文本 -->
            <view class="diy_field diy_text diy_text_row">
              <input
                type="text"
                id="form_merchant_name"
                v-model="form['merchant_name']"
                placeholder="请输入商家名称"
                v-if="
                  (form['merchant_name'] &&
                    $check_field('set', 'merchant_name')) ||
                  (!form['merchant_name'] &&
                    $check_field('add', 'merchant_name'))
                "
                :disabled="disabledObj['merchant_name_isDisabled']"
              />
              <text v-else-if="$check_field('get', 'merchant_name')">{{
                form['merchant_name']
              }}</text>
            </view>
          </view>
          <view
            v-if="
              $check_field('set', 'homestay_name') ||
              $check_field('add', 'homestay_name') ||
              $check_field('get', 'homestay_name')
            "
            class="col-12 col-md-6 row-item"
          >
            <view class="diy_title diy_text_row">
              <text> 民宿名称: </text>
            </view>
            <!-- 文本 -->
            <view class="diy_field diy_text diy_text_row">
              <input
                type="text"
                id="form_homestay_name"
                v-model="form['homestay_name']"
                placeholder="请输入民宿名称"
                v-if="
                  (form['homestay_name'] &&
                    $check_field('set', 'homestay_name')) ||
                  (!form['homestay_name'] &&
                    $check_field('add', 'homestay_name'))
                "
                :disabled="disabledObj['homestay_name_isDisabled']"
              />
              <text v-else-if="$check_field('get', 'homestay_name')">{{
                form['homestay_name']
              }}</text>
            </view>
          </view>
          <view
            v-if="
              $check_field('set', 'homestay_id') ||
              $check_field('add', 'homestay_id') ||
              $check_field('get', 'homestay_id')
            "
            class="col-12 col-md-6 row-item"
          >
            <view class="diy_title diy_text_row">
              <text> 民宿编号: </text>
            </view>
            <!-- 文本 -->
            <view class="diy_field diy_text diy_text_row">
              <input
                type="text"
                id="form_homestay_id"
                v-model="form['homestay_id']"
                placeholder="请输入民宿编号"
                v-if="
                  (form['homestay_id'] && $check_field('set', 'homestay_id')) ||
                  (!form['homestay_id'] && $check_field('add', 'homestay_id'))
                "
                :disabled="disabledObj['homestay_id_isDisabled']"
              />
              <text v-else-if="$check_field('get', 'homestay_id')">{{
                form['homestay_id']
              }}</text>
            </view>
          </view>
          <view
            v-if="
              $check_field('set', 'homestay_prices') ||
              $check_field('add', 'homestay_prices') ||
              $check_field('get', 'homestay_prices')
            "
            class="col-12 col-md-6 row-item"
          >
            <view class="diy_title diy_text_row">
              <text> 民宿价格: </text>
            </view>
            <!-- 文本 -->
            <view class="diy_field diy_text diy_text_row">
              <input
                type="text"
                id="form_homestay_prices"
                v-model="form['homestay_prices']"
                placeholder="请输入民宿价格"
                v-if="
                  (form['homestay_prices'] &&
                    $check_field('set', 'homestay_prices')) ||
                  (!form['homestay_prices'] &&
                    $check_field('add', 'homestay_prices'))
                "
                :disabled="disabledObj['homestay_prices_isDisabled']"
              />
              <text v-else-if="$check_field('get', 'homestay_prices')">{{
                form['homestay_prices']
              }}</text>
            </view>
          </view>
          <view
            v-if="
              $check_field('set', 'accommodation_days') ||
              $check_field('add', 'accommodation_days') ||
              $check_field('get', 'accommodation_days')
            "
            class="col-12 col-md-6 row-item"
          >
            <view class="diy_title diy_text_row">
              <text> 住宿天数: </text>
            </view>
            <!-- 文本 -->
            <view class="diy_field diy_text diy_text_row">
              <input
                type="text"
                id="form_accommodation_days"
                v-model="form['accommodation_days']"
                placeholder="请输入住宿天数"
                v-if="
                  (form['accommodation_days'] &&
                    $check_field('set', 'accommodation_days')) ||
                  (!form['accommodation_days'] &&
                    $check_field('add', 'accommodation_days'))
                "
                :disabled="disabledObj['accommodation_days_isDisabled']"
              />
              <text v-else-if="$check_field('get', 'accommodation_days')">{{
                form['accommodation_days']
              }}</text>
            </view>
          </view>
          <view
            v-if="
              $check_field('set', 'total_accommodation_amount') ||
              $check_field('add', 'total_accommodation_amount') ||
              $check_field('get', 'total_accommodation_amount')
            "
            class="col-12 col-md-6 row-item"
          >
            <view class="diy_title diy_text_row">
              <text> 住宿总额: </text>
            </view>
            <!-- 文本 -->
            <view class="diy_field diy_text diy_text_row">
              <input
                type="text"
                id="form_total_accommodation_amount"
                v-model="form['total_accommodation_amount']"
                placeholder="请输入住宿总额"
                v-if="
                  (form['total_accommodation_amount'] &&
                    $check_field('set', 'total_accommodation_amount')) ||
                  (!form['total_accommodation_amount'] &&
                    $check_field('add', 'total_accommodation_amount'))
                "
                @focus="set_total_accommodation_amount()"
                :disabled="disabledObj['total_accommodation_amount_isDisabled']"
              />
              <text
                v-else-if="$check_field('get', 'total_accommodation_amount')"
                >{{ form['total_accommodation_amount'] }}</text
              >
            </view>
          </view>
          <view
            v-if="
              $check_field('set', 'booking_amount') ||
              $check_field('add', 'booking_amount') ||
              $check_field('get', 'booking_amount')
            "
            class="col-12 col-md-6 row-item"
          >
            <view class="diy_title diy_text_row">
              <text> 预定金额: </text>
            </view>
            <!-- 文本 -->
            <view class="diy_field diy_text diy_text_row">
              <input
                type="text"
                id="form_booking_amount"
                v-model="form['booking_amount']"
                placeholder="请输入预定金额"
                v-if="
                  (form['booking_amount'] &&
                    $check_field('set', 'booking_amount')) ||
                  (!form['booking_amount'] &&
                    $check_field('add', 'booking_amount'))
                "
                :disabled="disabledObj['booking_amount_isDisabled']"
              />
              <text v-else-if="$check_field('get', 'booking_amount')">{{
                form['booking_amount']
              }}</text>
            </view>
          </view>
          <view
            v-if="
              $check_field('set', 'final_payment_for_homestays') ||
              $check_field('add', 'final_payment_for_homestays') ||
              $check_field('get', 'final_payment_for_homestays')
            "
            class="col-12 col-md-6 row-item"
          >
            <view class="diy_title diy_text_row">
              <text> 民宿尾款: </text>
            </view>
            <!-- 文本 -->
            <view class="diy_field diy_text diy_text_row">
              <input
                type="text"
                id="form_final_payment_for_homestays"
                v-model="form['final_payment_for_homestays']"
                placeholder="请输入民宿尾款"
                v-if="
                  (form['final_payment_for_homestays'] &&
                    $check_field('set', 'final_payment_for_homestays')) ||
                  (!form['final_payment_for_homestays'] &&
                    $check_field('add', 'final_payment_for_homestays'))
                "
                @focus="set_final_payment_for_homestays()"
                :disabled="
                  disabledObj['final_payment_for_homestays_isDisabled']
                "
              />
              <text
                v-else-if="$check_field('get', 'final_payment_for_homestays')"
                >{{ form['final_payment_for_homestays'] }}</text
              >
            </view>
          </view>
          <view
            v-if="
              $check_field('set', 'accommodation_time') ||
              $check_field('add', 'accommodation_time') ||
              $check_field('get', 'accommodation_time')
            "
            class="col-12 col-md-6 row-item"
          >
            <view class="diy_title diy_text_row">
              <text> 住宿时间: </text>
            </view>
            <!-- 日期 -->
            <view class="diy_field diy_date">
              <uni-datetime-picker
                :disabled="disabledObj['accommodation_time_isDisabled']"
                type="date"
                id="form_accommodation_time"
                v-model="form['accommodation_time']"
                placeholder="请输入住宿时间"
                v-if="
                  (form['accommodation_time'] &&
                    $check_field('set', 'accommodation_time')) ||
                  (!form['accommodation_time'] &&
                    $check_field('add', 'accommodation_time'))
                "
              />
              <text v-else-if="$check_field('get', 'accommodation_time')">{{
                form['accommodation_time']
              }}</text>
            </view>
          </view>
          <view
            v-if="
              $check_field('set', 'homestay_address') ||
              $check_field('add', 'homestay_address') ||
              $check_field('get', 'homestay_address')
            "
            class="col-12 col-md-6 row-item"
          >
            <view class="diy_title diy_text_row">
              <text> 民宿地址: </text>
            </view>
            <!-- 文本 -->
            <view class="diy_field diy_text diy_text_row">
              <input
                type="text"
                id="form_homestay_address"
                v-model="form['homestay_address']"
                placeholder="请输入民宿地址"
                v-if="
                  (form['homestay_address'] &&
                    $check_field('set', 'homestay_address')) ||
                  (!form['homestay_address'] &&
                    $check_field('add', 'homestay_address'))
                "
                :disabled="disabledObj['homestay_address_isDisabled']"
              />
              <text v-else-if="$check_field('get', 'homestay_address')">{{
                form['homestay_address']
              }}</text>
            </view>
          </view>
          <view
            v-if="
              $check_field('set', 'order_remarks') ||
              $check_field('add', 'order_remarks') ||
              $check_field('get', 'order_remarks')
            "
            class="col-12 col-md-6 row-item"
          >
            <view class="diy_title diy_text_row">
              <text> 订单备注: </text>
            </view>
            <!-- 文本 -->
            <view class="diy_field diy_text diy_text_row">
              <input
                type="text"
                id="form_order_remarks"
                v-model="form['order_remarks']"
                placeholder="请输入订单备注"
                v-if="
                  (form['order_remarks'] &&
                    $check_field('set', 'order_remarks')) ||
                  (!form['order_remarks'] &&
                    $check_field('add', 'order_remarks'))
                "
                :disabled="disabledObj['order_remarks_isDisabled']"
              />
              <text v-else-if="$check_field('get', 'order_remarks')">{{
                form['order_remarks']
              }}</text>
            </view>
          </view>
        </view>
        <view class="row">
          <view class="col-12">
            <view class="btn_box">
              <button class="btn_submit primary_btn" @click="submit()">
                提交
              </button>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import mixin from '@/libs/mixins/page.js'
export default {
  mixins: [mixin],
  data() {
    return {
      url_get_obj: '~/api/homestay_orders/get_obj?',
      url_add: '~/api/homestay_orders/add?',
      url_set: '~/api/homestay_orders/set?',

      // 登录权限
      oauth: {
        signIn: true,
        user_group: [],
      },

      // 查询条件
      query: {
        regular_users: 0,
        user_name: '',
        mobile_phone_number: '',
        merchant_users: 0,
        merchant_name: '',
        homestay_name: '',
        homestay_id: '',
        homestay_prices: 0,
        accommodation_days: 0,
        total_accommodation_amount: '',
        booking_amount: 0,
        final_payment_for_homestays: '',
        accommodation_time: '',
        homestay_address: '',
        order_remarks: '',
        homestay_orders_id: 0,
      },

      obj: {
        regular_users: 0, // 普通用户
        user_name: '', // 用户姓名
        mobile_phone_number: '', // 手机号码
        merchant_users: 0, // 商家用户
        merchant_name: '', // 商家名称
        homestay_name: '', // 民宿名称
        homestay_id: '', // 民宿编号
        homestay_prices: 0, // 民宿价格
        accommodation_days: 0, // 住宿天数
        total_accommodation_amount: '', // 住宿总额
        booking_amount: 0, // 预定金额
        final_payment_for_homestays: '', // 民宿尾款
        accommodation_time: this.$toTime(new Date().getTime(), 'yyyy-MM-dd'),
        homestay_address: '', // 民宿地址
        order_remarks: '', // 订单备注
        homestay_orders_id: 0,
      },

      // 表单字段
      form: {
        regular_users: 0, // 普通用户
        user_name: '', // 用户姓名
        mobile_phone_number: '', // 手机号码
        merchant_users: 0, // 商家用户
        merchant_name: '', // 商家名称
        homestay_name: '', // 民宿名称
        homestay_id: '', // 民宿编号
        homestay_prices: 0, // 民宿价格
        accommodation_days: 0, // 住宿天数
        total_accommodation_amount: '', // 住宿总额
        booking_amount: 0, // 预定金额
        final_payment_for_homestays: '', // 民宿尾款
        accommodation_time: this.$toTime(new Date().getTime(), 'yyyy-MM-dd'),
        homestay_address: '', // 民宿地址
        order_remarks: '', // 订单备注
        homestay_orders_id: 0,
      },
      disabledObj: {
        regular_users_isDisabled: false,
        user_name_isDisabled: false,
        mobile_phone_number_isDisabled: false,
        merchant_users_isDisabled: false,
        merchant_name_isDisabled: false,
        homestay_name_isDisabled: false,
        homestay_id_isDisabled: false,
        total_accommodation_amount_isDisabled: false,
        final_payment_for_homestays_isDisabled: false,
        accommodation_time_isDisabled: false,
        homestay_address_isDisabled: false,
        order_remarks_isDisabled: false,
      },

      // 用户列表
      list_user_regular_users: [],
      // 用户列表
      list_user_merchant_users: [],

      field: 'homestay_orders_id',
      table_key: 'homestay_orders',
    }
  },
  methods: {
    /**
     * 提交前验证事件
     * @param {Object} 请求参数
     * @return {String} 验证成功返回null, 失败返回错误提示
     */
    submit_check(param) {
      if (!param.accommodation_time) {
        return '住宿时间不能为空'
      }
      return null
    },

    /**
     * 获取普通用户用户列表
     */
    async get_list_user_regular_users() {
      // if(this.user_group !== "管理员" && this.form["regular_users"] === 0) {
      //     this.form["regular_users"] = this.user.user_id;
      // }
      var json = await this.$get('~/api/user/get_list?user_group=普通用户')
      if (json.result && json.result.list) {
        json.result.list.map((o) =>
          this.list_user_regular_users.push({
            value: o.user_id,
            text: o.nickname + '-' + o.username,
          })
        )
      } else if (json.error) {
        console.error(json.error)
      }
    },
    async get_user_session_regular_users() {
      var _this = this
      var json = await this.$get('~/api/user_group/get_obj?name=普通用户')
      if (json.result && json.result.obj) {
        var source_table = json.result.obj.source_table
        var user_id = _this.$store.state.user.user_id
        if (user_id) {
          var url = '~/api/' + source_table + '/get_obj?'
          this.$get(
            url,
            { user_id: _this.$store.state.user.user_id },
            function (res) {
              if (res.result && res.result.obj) {
                var arr = []
                for (let key in res.result.obj) {
                  arr.push(key)
                }
                var arrForm = []
                for (let key in _this.form) {
                  arrForm.push(key)
                }
                _this.form['regular_users'] = user_id
                _this.disabledObj['regular_users' + '_isDisabled'] = true
                for (var i = 0; i < arr.length; i++) {
                  if (
                    arr[i] !== 'examine_state' &&
                    arr[i] !== 'examine_reply'
                  ) {
                    for (var j = 0; j < arrForm.length; j++) {
                      if (arr[i] === arrForm[j]) {
                        if (arr[i] !== 'regular_users') {
                          _this.form[arrForm[j]] = res.result.obj[arr[i]]
                          _this.disabledObj[arrForm[j] + '_isDisabled'] = true
                          break
                        }
                      }
                    }
                  }
                }
              }
            }
          )
        }
      } else if (json.error) {
        console.error(json.error)
      }
    },

    /**
     * 获取商家用户用户列表
     */
    async get_list_user_merchant_users() {
      // if(this.user_group !== "管理员" && this.form["merchant_users"] === 0) {
      //     this.form["merchant_users"] = this.user.user_id;
      // }
      var json = await this.$get('~/api/user/get_list?user_group=商家用户')
      if (json.result && json.result.list) {
        json.result.list.map((o) =>
          this.list_user_merchant_users.push({
            value: o.user_id,
            text: o.nickname + '-' + o.username,
          })
        )
      } else if (json.error) {
        console.error(json.error)
      }
    },

    set_total_accommodation_amount() {
      this.form.total_accommodation_amount =
        parseFloat(this.form.homestay_prices) *
        parseFloat(this.form.accommodation_days)
      let r = /^\+?[1-9][0-9]*$/ // 正整数
      if (!r.test(this.form.total_accommodation_amount)) {
        this.form.total_accommodation_amount =
          this.form.total_accommodation_amount.toFixed(2)
      }
    },

    set_final_payment_for_homestays() {
      this.form.final_payment_for_homestays =
        parseFloat(this.form.homestay_prices) *
          parseFloat(this.form.accommodation_days) -
        parseFloat(this.form.booking_amount)
      let r = /^\+?[1-9][0-9]*$/ // 正整数
      if (!r.test(this.form.final_payment_for_homestays)) {
        this.form.final_payment_for_homestays =
          this.form.final_payment_for_homestays.toFixed(2)
      }
    },

    change_file(key_name) {
      var _self = this
      this.$chooseFile().then((res) => {
        const uploadTask = uni.uploadFile({
          url: _self.$fullUrl('/api/feedback/upload?'),
          filePath: res[0].path,
          name: 'file',
          formData: {
            i_want_to_customize: 'test',
          },
          header: {
            'x-auth-token': _self.$store.state.user.token,
          },
          success: function (uploadFileRes) {
            var filename = JSON.parse(uploadFileRes.data).result.url
            _self.form[key_name] = filename
          },
        })

        uploadTask.onProgressUpdate(function (res) {
          _self.percent = res.progress
        })
      })
    },
    change_img(key_name) {
      var _self = this
      _self.upload_img_flag = false
      // 选择图像方法
      uni.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'], //从相册选择
        success: function (res) {
          const tempFilePaths = res.tempFilePaths
          const uploadTask = uni.uploadFile({
            url: _self.$fullUrl('/api/homestay_orders/upload?'),
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              homestay_orders: 'test',
            },
            header: {
              'x-auth-token': _self.$store.state.user.token,
            },
            success: function (uploadFileRes) {
              var filename = JSON.parse(uploadFileRes.data).result.url
              var img_url = filename
              _self.form[key_name] = img_url
            },
          })

          uploadTask.onProgressUpdate(function (res) {
            _self.percent = res.progress

            console.log(
              '预期需要上传的数据总长度' + res.totalBytesExpectedToSend
            )
          })
        },
        error: function (e) {},
      })
    },

    /**
     * 获取对象后获取缓存表单
     * @param {Object} json
     * @param {Object} func
     */
    get_obj_before(param) {
      var form = uni.db.get('form')
      if (form) {
        delete form.examine_state
        delete form.examine_reply
        this.obj = uni.push(this.obj, form)
        this.form = uni.push(this.form, form)
      }
      var arr = []
      for (let key in form) {
        arr.push(key)
      }
      for (var i = 0; i < arr.length; i++) {
        this.disabledObj[arr[i] + '_isDisabled'] = true
      }
      if (
        this.form['accommodation_time'] &&
        JSON.stringify(this.form['accommodation_time']).indexOf('-') === -1
      ) {
        this.form['accommodation_time'] = this.$toTime(
          parseInt(this.form['accommodation_time']),
          'yyyy-MM-dd'
        )
      }
      uni.db.del('form')
      return param
    },

    /**
     * 获取对象后获取缓存表单
     * @param {Object} json
     * @param {Object} func
     */
    get_obj_after(json, func) {
      var form = uni.db.get('form')
      var obj = Object.assign({}, form, this.obj)
      if (form) {
        this.obj = uni.push(this.obj, obj)
      }
      if (form) {
        this.form = uni.push(this.form, form)
      }
      if (func) {
        func(json)
      }
    },
  },
  onLoad() {
    this.get_user_session_regular_users()
    this.get_list_user_regular_users()
    this.get_list_user_merchant_users()
  },
}
</script>

<style scoped>
input {
  font-size: 10px;
}

.form_edit {
  background-color: #fff;
  margin-bottom: 0.5rem;
  padding: 1rem;
  font-size: 10px;
}

.item {
  display: flex;
  padding: 0.2rem 0;
}

.left_text {
  flex: 0 0 25%;
  display: flex;
  align-items: center;
}

.right_text {
  flex: 0 0 75%;
  border-bottom: 1px solid #eee;
}
.right_text.btn_warp {
  border-bottom: 0;
}

.btn_submit {
  text-align: center;
  background-color: #fff;
  padding: 0.3rem;
  margin: 0.1rem 1rem;
  border: 1px solid #eee;
  border-radius: 0.5rem;
}

.btn_submit:hover {
  opacity: 0.5;
}
.btn_add_img {
  color: #d3d3d3;
  text-align: center;
  border: 1px solid #eee;
  height: 5rem;
  width: 5rem;
  position: relative;
}
.btn_add_img text {
  font-size: 35px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
<style scoped>
/*新样式*/
.diy_text_row {
  display: inline-block;
}
.container {
  margin-top: 1rem;
  padding: 1rem;
  -webkit-box-shadow: 0px 0px 0px #888888;
  box-shadow: 0px 0px 0px #888888;
}
.primary_btn {
  background-color: #22b8b8;
  color: #ffffff;
}
.btn_submit {
  padding: 0;
  margin-top: 1rem;
}
.row-item {
  padding: 10px 10px;
  background: #f8f6fc;
  margin-bottom: 1rem;
}
.diy_field {
  padding-left: 1rem;
}
.diy_title {
  align-items: center;
  font-size: 14px;
  color: #333;
}

.row-item {
  display: flex !important;
  align-items: baseline;
}
.diy_select_flex {
  flex: 1;
}
.query_select {
  flex: 1;
  border-color: rgb(229, 229, 229);
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  line-height: 2;
  font-size: 14px;
  height: 2.4em;
  min-height: 2.4em;
  display: block;
  outline: none;
}
</style>
