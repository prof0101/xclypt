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
                    (form['ticket_orders_id'] &&
                      $check_field('set', 'regular_users')) ||
                    (!form['ticket_orders_id'] &&
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
                    (form['ticket_orders_id'] &&
                      $check_field('set', 'user_name')) ||
                    (!form['ticket_orders_id'] &&
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
                    (form['ticket_orders_id'] &&
                      $check_field('set', 'mobile_phone_number')) ||
                    (!form['ticket_orders_id'] &&
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
                    (form['ticket_orders_id'] &&
                      $check_field('set', 'merchant_users')) ||
                    (!form['ticket_orders_id'] &&
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
                    (form['ticket_orders_id'] &&
                      $check_field('set', 'merchant_name')) ||
                    (!form['ticket_orders_id'] &&
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
                  $check_field('get', 'attraction_name') ||
                  $check_field('add', 'attraction_name') ||
                  $check_field('set', 'attraction_name')
                "
                label="景点名称"
                name="attraction_name"
              >
                <uni-easyinput
                  type="text"
                  v-model="form['attraction_name']"
                  v-if="
                    user_group === '管理员' ||
                    (form['ticket_orders_id'] &&
                      $check_field('set', 'attraction_name')) ||
                    (!form['ticket_orders_id'] &&
                      $check_field('add', 'attraction_name'))
                  "
                  :disabled="disabledObj['attraction_name_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'attraction_name')">
                  {{ form['attraction_name'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'tourist_attraction_phone_number') ||
                  $check_field('add', 'tourist_attraction_phone_number') ||
                  $check_field('set', 'tourist_attraction_phone_number')
                "
                label="景点电话"
                name="tourist_attraction_phone_number"
              >
                <uni-easyinput
                  type="text"
                  v-model="form['tourist_attraction_phone_number']"
                  v-if="
                    user_group === '管理员' ||
                    (form['ticket_orders_id'] &&
                      $check_field('set', 'tourist_attraction_phone_number')) ||
                    (!form['ticket_orders_id'] &&
                      $check_field('add', 'tourist_attraction_phone_number'))
                  "
                  :disabled="
                    disabledObj['tourist_attraction_phone_number_isDisabled']
                  "
                />
                <!-- 仅查看 -->
                <text
                  v-else-if="
                    $check_field('get', 'tourist_attraction_phone_number')
                  "
                >
                  {{ form['tourist_attraction_phone_number'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'admission_price') ||
                  $check_field('add', 'admission_price') ||
                  $check_field('set', 'admission_price')
                "
                label="门票价格"
                name="admission_price"
              >
                <uni-easyinput
                  type="text"
                  v-model="form['admission_price']"
                  v-if="
                    user_group === '管理员' ||
                    (form['ticket_orders_id'] &&
                      $check_field('set', 'admission_price')) ||
                    (!form['ticket_orders_id'] &&
                      $check_field('add', 'admission_price'))
                  "
                  :disabled="disabledObj['admission_price_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'admission_price')">
                  {{ form['admission_price'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'ticket_quantity') ||
                  $check_field('add', 'ticket_quantity') ||
                  $check_field('set', 'ticket_quantity')
                "
                label="门票数量"
                name="ticket_quantity"
              >
                <uni-easyinput
                  type="text"
                  v-model="form['ticket_quantity']"
                  v-if="
                    user_group === '管理员' ||
                    (form['ticket_orders_id'] &&
                      $check_field('set', 'ticket_quantity')) ||
                    (!form['ticket_orders_id'] &&
                      $check_field('add', 'ticket_quantity'))
                  "
                  :disabled="disabledObj['ticket_quantity_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'ticket_quantity')">
                  {{ form['ticket_quantity'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'total_ticket_amount') ||
                  $check_field('add', 'total_ticket_amount') ||
                  $check_field('set', 'total_ticket_amount')
                "
                label="门票总额"
                name="total_ticket_amount"
              >
                <uni-easyinput
                  type="text"
                  v-model="form['total_ticket_amount']"
                  v-if="
                    user_group === '管理员' ||
                    (form['ticket_orders_id'] &&
                      $check_field('set', 'total_ticket_amount')) ||
                    (!form['ticket_orders_id'] &&
                      $check_field('add', 'total_ticket_amount'))
                  "
                  @focus="set_total_ticket_amount()"
                  :disabled="disabledObj['total_ticket_amount_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'total_ticket_amount')">
                  {{ form['total_ticket_amount'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'booking_time') ||
                  $check_field('add', 'booking_time') ||
                  $check_field('set', 'booking_time')
                "
                label="预订时间"
                name="booking_time"
              >
                <uni-datetime-picker
                  v-if="
                    user_group === '管理员' ||
                    (form['ticket_orders_id'] &&
                      $check_field('set', 'booking_time')) ||
                    (!form['ticket_orders_id'] &&
                      $check_field('add', 'booking_time'))
                  "
                  @change="changeLog($event, 'booking_time')"
                  v-model="form['booking_time']"
                  type="datetime"
                  :disabled="disabledObj['booking_time_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'booking_time')">
                  {{ form['booking_time'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'other_remarks') ||
                  $check_field('add', 'other_remarks') ||
                  $check_field('set', 'other_remarks')
                "
                label="其它备注"
                name="other_remarks"
              >
                <uni-easyinput
                  type="text"
                  v-model="form['other_remarks']"
                  v-if="
                    user_group === '管理员' ||
                    (form['ticket_orders_id'] &&
                      $check_field('set', 'other_remarks')) ||
                    (!form['ticket_orders_id'] &&
                      $check_field('add', 'other_remarks'))
                  "
                  :disabled="disabledObj['other_remarks_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'other_remarks')">
                  {{ form['other_remarks'] }}
                </text>
              </uni-forms-item>
            </uni-forms>
            <view
              class="form_button"
              v-if="
                $check_action('/ticket_orders/view', 'set') ||
                $check_action('/ticket_orders/view', 'add') ||
                $check_option('/ticket_orders/table', 'examine')
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
      field: 'ticket_orders_id',
      url_add: '~/api/ticket_orders/add?',
      url_set: '~/api/ticket_orders/set?',
      url_get_obj: '~/api/ticket_orders/get_obj?',
      url_upload: '~/api/ticket_orders/upload?',
      regular_users: null,
      user_name: null,
      mobile_phone_number: null,
      merchant_users: null,
      merchant_name: null,
      attraction_name: null,
      tourist_attraction_phone_number: null,
      admission_price: null,
      ticket_quantity: null,
      total_ticket_amount: null,
      booking_time: null,
      other_remarks: null,
      query: {
        ticket_orders_id: 0,
      },

      form: {
        regular_users: 0, // 普通用户
        user_name: '', // 用户姓名
        mobile_phone_number: '', // 手机号码
        merchant_users: 0, // 商家用户
        merchant_name: '', // 商家名称
        attraction_name: '', // 景点名称
        tourist_attraction_phone_number: '', // 景点电话
        admission_price: 0, // 门票价格
        ticket_quantity: 0, // 门票数量
        total_ticket_amount: '', // 门票总额
        booking_time: this.$toTime(new Date().getTime(), 'yyyy-MM-dd hh:mm:ss'),
        other_remarks: '', // 其它备注
        ticket_orders_id: 0, // ID
      },
      disabledObj: {
        regular_users_isDisabled: false,
        user_name_isDisabled: false,
        mobile_phone_number_isDisabled: false,
        merchant_users_isDisabled: false,
        merchant_name_isDisabled: false,
        attraction_name_isDisabled: false,
        tourist_attraction_phone_number_isDisabled: false,
        total_ticket_amount_isDisabled: false,
        booking_time_isDisabled: false,
        other_remarks_isDisabled: false,
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
      if (!param.booking_time) {
        return '预订时间不能为空'
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
        url: getApp().globalData.host + '/api/ticket_orders/upload', //仅为示例，非真实的接口地址
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
      if (type == 'attraction_name')
        this['attraction_name'] = this.form['attraction_name'] = ''
      if (type == 'tourist_attraction_phone_number')
        this['tourist_attraction_phone_number'] = this.form[
          'tourist_attraction_phone_number'
        ] = ''
      if (type == 'admission_price')
        this['admission_price'] = this.form['admission_price'] = ''
      if (type == 'ticket_quantity')
        this['ticket_quantity'] = this.form['ticket_quantity'] = ''
      if (type == 'total_ticket_amount')
        this['total_ticket_amount'] = this.form['total_ticket_amount'] = ''
      if (type == 'booking_time')
        this['booking_time'] = this.form['booking_time'] = ''
      if (type == 'other_remarks')
        this['other_remarks'] = this.form['other_remarks'] = ''
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
      if (this['attraction_name'] !== null)
        this.form['attraction_name'] = this['attraction_name']
      if (this['tourist_attraction_phone_number'] !== null)
        this.form['tourist_attraction_phone_number'] =
          this['tourist_attraction_phone_number']
      if (this['admission_price'] !== null)
        this.form['admission_price'] = this['admission_price']
      if (this['ticket_quantity'] !== null)
        this.form['ticket_quantity'] = this['ticket_quantity']
      if (this['total_ticket_amount'] !== null)
        this.form['total_ticket_amount'] = this['total_ticket_amount']
      if (this['booking_time'] !== null)
        this.form['booking_time'] = this['booking_time']
      if (this['other_remarks'] !== null)
        this.form['other_remarks'] = this['other_remarks']

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
            url: _self.$fullUrl('/api/ticket_orders/upload?'),
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
            url: _self.$fullUrl('/api/ticket_orders/upload?'),
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
        this.form['booking_time'] &&
        JSON.stringify(this.form['booking_time']).indexOf('-') === -1
      ) {
        this.form['booking_time'] = this.$toTime(
          parseInt(this.form['booking_time']),
          'yyyy-MM-dd hh:mm:ss'
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

    set_total_ticket_amount() {
      this.form.total_ticket_amount =
        parseFloat(this.form.admission_price) *
        parseFloat(this.form.ticket_quantity)
      let r = /^\+?[1-9][0-9]*$/ // 正整数
      if (!r.test(this.form.total_ticket_amount)) {
        this.form.total_ticket_amount = this.form.total_ticket_amount.toFixed(2)
      }
    },

    /**
     * 获取对象之后
     * @param {Object} json
     * @param {Object} func
     */
    get_obj_after(json, func) {
      if (
        this.form['booking_time'] &&
        JSON.stringify(this.form['booking_time']).indexOf('-') === -1
      ) {
        this.form['booking_time'] = this.$toTime(
          parseInt(this.form['booking_time']),
          'yyyy-MM-dd hh:mm:ss'
        )
      }
    },

    is_view() {
      var bl = this.user_group == '管理员'

      if (!bl) {
        bl = this.$check_action('/ticket_orders/table', 'add')
        console.log(
          bl ? '你有表格添加权限视作有添加权限' : '你没有表格添加权限'
        )
      }
      if (!bl) {
        bl = this.$check_action('/ticket_orders/table', 'set')
        console.log(
          bl ? '你有表格添加权限视作有修改权限' : '你没有表格修改权限'
        )
      }
      if (!bl) {
        bl = this.$check_action('/ticket_orders/view', 'add')
        console.log(
          bl ? '你有视图添加权限视作有添加权限' : '你没有视图添加权限'
        )
      }
      if (!bl) {
        bl = this.$check_action('/ticket_orders/view', 'set')
        console.log(
          bl ? '你有视图修改权限视作有修改权限' : '你没有视图修改权限'
        )
      }
      if (!bl) {
        bl = this.$check_action('/ticket_orders/view', 'get')
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
