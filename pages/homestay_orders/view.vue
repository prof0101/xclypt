<template>
  <view>
    <view class="container diy_view">
      <view>
        <view>
          <view class="">
            <uni-forms :modelValue="form" v-if="is_view()">
              <uni-forms-item
                v-if="
                  $check_field('get', 'regular_users') ||
                  $check_field('add', 'regular_users') ||
                  $check_field('set', 'regular_users')
                "
                label="普通用户"
                name="regular_users"
              >
                <uni-data-select
                  id="form_regular_users"
                  v-model="form['regular_users']"
                  :localdata="list_user_regular_users"
                  :clear="!disabledObj['regular_users_isDisabled']"
                  :disabled="disabledObj['regular_users_isDisabled']"
                  v-if="
                    user_group === '管理员' ||
                    (form['homestay_orders_id'] &&
                      $check_field('set', 'regular_users')) ||
                    (!form['homestay_orders_id'] &&
                      $check_field('add', 'regular_users'))
                  "
                ></uni-data-select>
                <uni-data-select
                  v-model="form['regular_users']"
                  :localdata="list_user_regular_users"
                  :clear="false"
                  :disabled="true"
                  v-else-if="$check_field('get', 'regular_users')"
                  id="regular_users"
                ></uni-data-select>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'user_name') ||
                  $check_field('add', 'user_name') ||
                  $check_field('set', 'user_name')
                "
                label="用户姓名"
                name="user_name"
              >
                <uni-easyinput
                  type="text"
                  v-model="form['user_name']"
                  v-if="
                    user_group === '管理员' ||
                    (form['homestay_orders_id'] &&
                      $check_field('set', 'user_name')) ||
                    (!form['homestay_orders_id'] &&
                      $check_field('add', 'user_name'))
                  "
                  :disabled="disabledObj['user_name_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'user_name')">
                  {{ form['user_name'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'mobile_phone_number') ||
                  $check_field('add', 'mobile_phone_number') ||
                  $check_field('set', 'mobile_phone_number')
                "
                label="手机号码"
                name="mobile_phone_number"
              >
                <uni-easyinput
                  type="text"
                  v-model="form['mobile_phone_number']"
                  v-if="
                    user_group === '管理员' ||
                    (form['homestay_orders_id'] &&
                      $check_field('set', 'mobile_phone_number')) ||
                    (!form['homestay_orders_id'] &&
                      $check_field('add', 'mobile_phone_number'))
                  "
                  :disabled="disabledObj['mobile_phone_number_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'mobile_phone_number')">
                  {{ form['mobile_phone_number'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'merchant_users') ||
                  $check_field('add', 'merchant_users') ||
                  $check_field('set', 'merchant_users')
                "
                label="商家用户"
                name="merchant_users"
              >
                <uni-data-select
                  id="form_merchant_users"
                  v-model="form['merchant_users']"
                  :localdata="list_user_merchant_users"
                  :clear="!disabledObj['merchant_users_isDisabled']"
                  :disabled="disabledObj['merchant_users_isDisabled']"
                  v-if="
                    user_group === '管理员' ||
                    (form['homestay_orders_id'] &&
                      $check_field('set', 'merchant_users')) ||
                    (!form['homestay_orders_id'] &&
                      $check_field('add', 'merchant_users'))
                  "
                ></uni-data-select>
                <uni-data-select
                  v-model="form['merchant_users']"
                  :localdata="list_user_merchant_users"
                  :clear="false"
                  :disabled="true"
                  v-else-if="$check_field('get', 'merchant_users')"
                  id="merchant_users"
                ></uni-data-select>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'merchant_name') ||
                  $check_field('add', 'merchant_name') ||
                  $check_field('set', 'merchant_name')
                "
                label="商家名称"
                name="merchant_name"
              >
                <uni-easyinput
                  type="text"
                  v-model="form['merchant_name']"
                  v-if="
                    user_group === '管理员' ||
                    (form['homestay_orders_id'] &&
                      $check_field('set', 'merchant_name')) ||
                    (!form['homestay_orders_id'] &&
                      $check_field('add', 'merchant_name'))
                  "
                  :disabled="disabledObj['merchant_name_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'merchant_name')">
                  {{ form['merchant_name'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'homestay_name') ||
                  $check_field('add', 'homestay_name') ||
                  $check_field('set', 'homestay_name')
                "
                label="民宿名称"
                name="homestay_name"
              >
                <uni-easyinput
                  type="text"
                  v-model="form['homestay_name']"
                  v-if="
                    user_group === '管理员' ||
                    (form['homestay_orders_id'] &&
                      $check_field('set', 'homestay_name')) ||
                    (!form['homestay_orders_id'] &&
                      $check_field('add', 'homestay_name'))
                  "
                  :disabled="disabledObj['homestay_name_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'homestay_name')">
                  {{ form['homestay_name'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'homestay_id') ||
                  $check_field('add', 'homestay_id') ||
                  $check_field('set', 'homestay_id')
                "
                label="民宿编号"
                name="homestay_id"
              >
                <uni-easyinput
                  type="text"
                  v-model="form['homestay_id']"
                  v-if="
                    user_group === '管理员' ||
                    (form['homestay_orders_id'] &&
                      $check_field('set', 'homestay_id')) ||
                    (!form['homestay_orders_id'] &&
                      $check_field('add', 'homestay_id'))
                  "
                  :disabled="disabledObj['homestay_id_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'homestay_id')">
                  {{ form['homestay_id'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'homestay_prices') ||
                  $check_field('add', 'homestay_prices') ||
                  $check_field('set', 'homestay_prices')
                "
                label="民宿价格"
                name="homestay_prices"
              >
                <uni-easyinput
                  type="text"
                  v-model="form['homestay_prices']"
                  v-if="
                    user_group === '管理员' ||
                    (form['homestay_orders_id'] &&
                      $check_field('set', 'homestay_prices')) ||
                    (!form['homestay_orders_id'] &&
                      $check_field('add', 'homestay_prices'))
                  "
                  :disabled="disabledObj['homestay_prices_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'homestay_prices')">
                  {{ form['homestay_prices'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'accommodation_days') ||
                  $check_field('add', 'accommodation_days') ||
                  $check_field('set', 'accommodation_days')
                "
                label="住宿天数"
                name="accommodation_days"
              >
                <uni-easyinput
                  type="text"
                  v-model="form['accommodation_days']"
                  v-if="
                    user_group === '管理员' ||
                    (form['homestay_orders_id'] &&
                      $check_field('set', 'accommodation_days')) ||
                    (!form['homestay_orders_id'] &&
                      $check_field('add', 'accommodation_days'))
                  "
                  :disabled="disabledObj['accommodation_days_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'accommodation_days')">
                  {{ form['accommodation_days'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'total_accommodation_amount') ||
                  $check_field('add', 'total_accommodation_amount') ||
                  $check_field('set', 'total_accommodation_amount')
                "
                label="住宿总额"
                name="total_accommodation_amount"
              >
                <uni-easyinput
                  type="text"
                  v-model="form['total_accommodation_amount']"
                  v-if="
                    user_group === '管理员' ||
                    (form['homestay_orders_id'] &&
                      $check_field('set', 'total_accommodation_amount')) ||
                    (!form['homestay_orders_id'] &&
                      $check_field('add', 'total_accommodation_amount'))
                  "
                  @focus="set_total_accommodation_amount()"
                  :disabled="
                    disabledObj['total_accommodation_amount_isDisabled']
                  "
                />
                <!-- 仅查看 -->
                <text
                  v-else-if="$check_field('get', 'total_accommodation_amount')"
                >
                  {{ form['total_accommodation_amount'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'booking_amount') ||
                  $check_field('add', 'booking_amount') ||
                  $check_field('set', 'booking_amount')
                "
                label="预定金额"
                name="booking_amount"
              >
                <uni-easyinput
                  type="text"
                  v-model="form['booking_amount']"
                  v-if="
                    user_group === '管理员' ||
                    (form['homestay_orders_id'] &&
                      $check_field('set', 'booking_amount')) ||
                    (!form['homestay_orders_id'] &&
                      $check_field('add', 'booking_amount'))
                  "
                  :disabled="disabledObj['booking_amount_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'booking_amount')">
                  {{ form['booking_amount'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'final_payment_for_homestays') ||
                  $check_field('add', 'final_payment_for_homestays') ||
                  $check_field('set', 'final_payment_for_homestays')
                "
                label="民宿尾款"
                name="final_payment_for_homestays"
              >
                <uni-easyinput
                  type="text"
                  v-model="form['final_payment_for_homestays']"
                  v-if="
                    user_group === '管理员' ||
                    (form['homestay_orders_id'] &&
                      $check_field('set', 'final_payment_for_homestays')) ||
                    (!form['homestay_orders_id'] &&
                      $check_field('add', 'final_payment_for_homestays'))
                  "
                  @focus="set_final_payment_for_homestays()"
                  :disabled="
                    disabledObj['final_payment_for_homestays_isDisabled']
                  "
                />
                <!-- 仅查看 -->
                <text
                  v-else-if="$check_field('get', 'final_payment_for_homestays')"
                >
                  {{ form['final_payment_for_homestays'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'accommodation_time') ||
                  $check_field('add', 'accommodation_time') ||
                  $check_field('set', 'accommodation_time')
                "
                label="住宿时间"
                name="accommodation_time"
              >
                <uni-datetime-picker
                  v-if="
                    user_group === '管理员' ||
                    (form['homestay_orders_id'] &&
                      $check_field('set', 'accommodation_time')) ||
                    (!form['homestay_orders_id'] &&
                      $check_field('add', 'accommodation_time'))
                  "
                  v-model="form['accommodation_time']"
                  type="date"
                  :disabled="disabledObj['accommodation_time_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'accommodation_time')">
                  {{ form['accommodation_time'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'homestay_address') ||
                  $check_field('add', 'homestay_address') ||
                  $check_field('set', 'homestay_address')
                "
                label="民宿地址"
                name="homestay_address"
              >
                <uni-easyinput
                  type="text"
                  v-model="form['homestay_address']"
                  v-if="
                    user_group === '管理员' ||
                    (form['homestay_orders_id'] &&
                      $check_field('set', 'homestay_address')) ||
                    (!form['homestay_orders_id'] &&
                      $check_field('add', 'homestay_address'))
                  "
                  :disabled="disabledObj['homestay_address_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'homestay_address')">
                  {{ form['homestay_address'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'order_remarks') ||
                  $check_field('add', 'order_remarks') ||
                  $check_field('set', 'order_remarks')
                "
                label="订单备注"
                name="order_remarks"
              >
                <uni-easyinput
                  type="text"
                  v-model="form['order_remarks']"
                  v-if="
                    user_group === '管理员' ||
                    (form['homestay_orders_id'] &&
                      $check_field('set', 'order_remarks')) ||
                    (!form['homestay_orders_id'] &&
                      $check_field('add', 'order_remarks'))
                  "
                  :disabled="disabledObj['order_remarks_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'order_remarks')">
                  {{ form['order_remarks'] }}
                </text>
              </uni-forms-item>
            </uni-forms>
            <view
              class="form_button"
              v-if="
                $check_action('/homestay_orders/view', 'set') ||
                $check_action('/homestay_orders/view', 'add') ||
                $check_option('/homestay_orders/table', 'examine')
              "
            >
              <button
                size="mini"
                type="primary"
                @click="submit_()"
                class="primary_btn"
              >
                提交
              </button>
              <button size="mini" @click="cancel()">取消</button>
            </view>
            <view class="form_button" v-else>
              <button size="mini" @click="cancel()">返回</button>
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
      field: 'homestay_orders_id',
      url_add: '~/api/homestay_orders/add?',
      url_set: '~/api/homestay_orders/set?',
      url_get_obj: '~/api/homestay_orders/get_obj?',
      url_upload: '~/api/homestay_orders/upload?',
      regular_users: null,
      user_name: null,
      mobile_phone_number: null,
      merchant_users: null,
      merchant_name: null,
      homestay_name: null,
      homestay_id: null,
      homestay_prices: null,
      accommodation_days: null,
      total_accommodation_amount: null,
      booking_amount: null,
      final_payment_for_homestays: null,
      accommodation_time: null,
      homestay_address: null,
      order_remarks: null,
      query: {
        homestay_orders_id: 0,
      },

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
        homestay_orders_id: 0, // ID
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
      // 用户组
      group_user_regular_users: '',
      // 用户列表
      list_user_merchant_users: [],
    }
  },
  created() {
    this.get_list_user_regular_users()
    this.get_group_user_regular_users()
    this.get_list_user_merchant_users()
  },
  methods: {
    /**
     * 提交前验证事件
     * @param {Object}
请求参数
     * @return {String} 验证成功返回null, 失败返回错误提示
     */
    submit_check(param) {
      if (!param.accommodation_time) {
        return '住宿时间不能为空'
      }
      return null
    },

    changeLog(v, value) {
      this.form[value] = v
    },
    uploadFile_(type) {
      // #ifdef !APP-VUE
      if (
        uni.getSystemInfoSync().uniPlatform != 'mp-weixin' ||
        uni.getSystemInfoSync().platform == 'devtools'
      ) {
        uni.chooseImage({
          count: 1,
          success: (chooseImageRes) => {
            const tempFilePaths = chooseImageRes.tempFilePaths
            this.successChoose(tempFilePaths[0], type)
          },
        })
      } else {
        wx.chooseMessageFile({
          count: 1,
          success: (chooseImageRes) => {
            const tempFilePaths = chooseImageRes.tempFiles
            this.successChoose(tempFilePaths[0].path, type)
          },
        })
      }
      // #endif
    },
    successChoose(filePath, type) {
      uni.uploadFile({
        url: getApp().globalData.host + '/api/homestay_orders/upload', //仅为示例，非真实的接口地址
        filePath,
        name: 'file',
        success: (uploadFileRes) => {
          if (uploadFileRes.data.error) {
            uni.showToast({
              title: uploadFileRes.data.error.message,
              icon: 'none',
            })
          } else {
            this[type] = JSON.parse(uploadFileRes.data).result.url
          }
        },
      })
    },
    close_(type) {
      if (type == 'regular_users')
        this['regular_users'] = this.form['regular_users'] = ''
      if (type == 'user_name') this['user_name'] = this.form['user_name'] = ''
      if (type == 'mobile_phone_number')
        this['mobile_phone_number'] = this.form['mobile_phone_number'] = ''
      if (type == 'merchant_users')
        this['merchant_users'] = this.form['merchant_users'] = ''
      if (type == 'merchant_name')
        this['merchant_name'] = this.form['merchant_name'] = ''
      if (type == 'homestay_name')
        this['homestay_name'] = this.form['homestay_name'] = ''
      if (type == 'homestay_id')
        this['homestay_id'] = this.form['homestay_id'] = ''
      if (type == 'homestay_prices')
        this['homestay_prices'] = this.form['homestay_prices'] = ''
      if (type == 'accommodation_days')
        this['accommodation_days'] = this.form['accommodation_days'] = ''
      if (type == 'total_accommodation_amount')
        this['total_accommodation_amount'] = this.form[
          'total_accommodation_amount'
        ] = ''
      if (type == 'booking_amount')
        this['booking_amount'] = this.form['booking_amount'] = ''
      if (type == 'final_payment_for_homestays')
        this['final_payment_for_homestays'] = this.form[
          'final_payment_for_homestays'
        ] = ''
      if (type == 'accommodation_time')
        this['accommodation_time'] = this.form['accommodation_time'] = ''
      if (type == 'homestay_address')
        this['homestay_address'] = this.form['homestay_address'] = ''
      if (type == 'order_remarks')
        this['order_remarks'] = this.form['order_remarks'] = ''
    },
    submit_() {
      if (this['regular_users'] !== null)
        this.form['regular_users'] = this['regular_users']
      if (this['user_name'] !== null) this.form['user_name'] = this['user_name']
      if (this['mobile_phone_number'] !== null)
        this.form['mobile_phone_number'] = this['mobile_phone_number']
      if (this['merchant_users'] !== null)
        this.form['merchant_users'] = this['merchant_users']
      if (this['merchant_name'] !== null)
        this.form['merchant_name'] = this['merchant_name']
      if (this['homestay_name'] !== null)
        this.form['homestay_name'] = this['homestay_name']
      if (this['homestay_id'] !== null)
        this.form['homestay_id'] = this['homestay_id']
      if (this['homestay_prices'] !== null)
        this.form['homestay_prices'] = this['homestay_prices']
      if (this['accommodation_days'] !== null)
        this.form['accommodation_days'] = this['accommodation_days']
      if (this['total_accommodation_amount'] !== null)
        this.form['total_accommodation_amount'] =
          this['total_accommodation_amount']
      if (this['booking_amount'] !== null)
        this.form['booking_amount'] = this['booking_amount']
      if (this['final_payment_for_homestays'] !== null)
        this.form['final_payment_for_homestays'] =
          this['final_payment_for_homestays']
      if (this['accommodation_time'] !== null)
        this.form['accommodation_time'] = this['accommodation_time']
      if (this['homestay_address'] !== null)
        this.form['homestay_address'] = this['homestay_address']
      if (this['order_remarks'] !== null)
        this.form['order_remarks'] = this['order_remarks']

      this.submit()
    },
    /**
     * 上传文件
     * @param {Object} param文件参数
     */
    change_file(key_name) {
      var _self = this
      // 选择图像方法
      uni.chooseFile({
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

            console.log(
              '预期需要上传的数据总长度' + res.totalBytesExpectedToSend
            )
          })
        },
        error: function (e) {},
      })
    },
    /**
     * 上传图片
     * @param {Object} param文件参数
     */
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
    /**
     * 获取普通用户用户组
     */
    async get_group_user_regular_users() {
      this.form['regular_users'] = this.user.user_id
      var json = await this.$get('~/api/user_group/get_obj?name=普通用户')
      if (json.result && json.result.obj) {
        this.group_user_regular_users = json.result.obj
        this.get_user_session_regular_users(this.form['regular_users'])
      } else if (json.error) {
        console.error(json.error)
      }
    },
    get_user_session_regular_users(id) {
      var _this = this
      var user_id = { user_id: id }
      var url =
        '~/api/' + _this.group_user_regular_users.source_table + '/get_obj?'
      this.$get(url, user_id, function (res) {
        if (res.result && res.result.obj) {
          var arr = []
          for (let key in res.result.obj) {
            arr.push(key)
          }
          var arrForm = []
          for (let key in _this.form) {
            arrForm.push(key)
          }
          _this.form['regular_users'] = id
          _this.disabledObj['regular_users' + '_isDisabled'] = true
          for (var i = 0; i < arr.length; i++) {
            if (arr[i] !== 'examine_state' && arr[i] !== 'examine_reply') {
              for (var j = 0; j < arrForm.length; j++) {
                if (arr[i] === arrForm[j]) {
                  if (arr[i] !== 'regular_users') {
                    _this.form[arrForm[j]] = res.result.obj[arr[i]]
                    _this.disabledObj[arrForm[j] + '_isDisabled'] = true
                    break
                  } else {
                    _this.disabledObj[arrForm[j] + '_isDisabled'] = true
                  }
                }
              }
            }
          }
        }
      })
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

    /**
     * 获取对象之后
     * @param {Object} json
     * @param {Object} func
     */
    get_obj_after(json, func) {
      if (
        this.form['accommodation_time'] &&
        JSON.stringify(this.form['accommodation_time']).indexOf('-') === -1
      ) {
        this.form['accommodation_time'] = this.$toTime(
          parseInt(this.form['accommodation_time']),
          'yyyy-MM-dd'
        )
      }
    },

    is_view() {
      var bl = this.user_group == '管理员'

      if (!bl) {
        bl = this.$check_action('/homestay_orders/table', 'add')
        console.log(
          bl ? '你有表格添加权限视作有添加权限' : '你没有表格添加权限'
        )
      }
      if (!bl) {
        bl = this.$check_action('/homestay_orders/table', 'set')
        console.log(
          bl ? '你有表格添加权限视作有修改权限' : '你没有表格修改权限'
        )
      }
      if (!bl) {
        bl = this.$check_action('/homestay_orders/view', 'add')
        console.log(
          bl ? '你有视图添加权限视作有添加权限' : '你没有视图添加权限'
        )
      }
      if (!bl) {
        bl = this.$check_action('/homestay_orders/view', 'set')
        console.log(
          bl ? '你有视图修改权限视作有修改权限' : '你没有视图修改权限'
        )
      }
      if (!bl) {
        bl = this.$check_action('/homestay_orders/view', 'get')
        console.log(
          bl ? '你有视图查询权限视作有查询权限' : '你没有视图查询权限'
        )
      }

      console.log(
        bl
          ? '具有当前页面的查看权，请注意这不代表你有字段的查看权'
          : '无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行'
      )

      return bl
    },
  },
}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.form_button {
  padding-bottom: 15px;
  display: flex;
}
.form_button button {
  width: 40%;
}
.query_select {
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

.query_option {
  width: 100%;
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.form_button {
  padding-bottom: 15px;
  display: flex;
}
.form_button button {
  width: 40%;
}
.query_select {
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

.query_option {
  width: 100%;
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
/*新样式*/
.uni-forms {
  padding-top: 1rem;
}
.uni-forms-item {
  padding: 6px 10px;
  background: #f8f6fc;
}
.uni-forms .is-input-border {
  border: 0;
}
.container {
  -webkit-box-shadow: 0px 0px 0px #888888;
  box-shadow: 0px 0px 0px #888888;
}
.form_button .primary_btn {
  background-color: #22b8b8;
  color: #ffffff;
}
.file-url {
  font-size: 12px;
  color: #ccc;
}
.diy_field,
.file-url {
  position: relative;
}
.close_ {
  position: absolute;
  top: -18px;
  left: -7px;
  font-size: 22px;
  color: #22b8b8;
  font-weight: 600;
}
</style>
