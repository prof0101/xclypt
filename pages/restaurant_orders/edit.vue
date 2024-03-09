<template>
  <view class="diy_edit page_restaurant_orders" id="restaurant_orders_edit">
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
              $check_field('set', 'restaurant_name') ||
              $check_field('add', 'restaurant_name') ||
              $check_field('get', 'restaurant_name')
            "
            class="col-12 col-md-6 row-item"
          >
            <view class="diy_title diy_text_row">
              <text> 餐厅名称: </text>
            </view>
            <!-- 文本 -->
            <view class="diy_field diy_text diy_text_row">
              <input
                type="text"
                id="form_restaurant_name"
                v-model="form['restaurant_name']"
                placeholder="请输入餐厅名称"
                v-if="
                  (form['restaurant_name'] &&
                    $check_field('set', 'restaurant_name')) ||
                  (!form['restaurant_name'] &&
                    $check_field('add', 'restaurant_name'))
                "
                :disabled="disabledObj['restaurant_name_isDisabled']"
              />
              <text v-else-if="$check_field('get', 'restaurant_name')">{{
                form['restaurant_name']
              }}</text>
            </view>
          </view>
          <view
            v-if="
              $check_field('set', 'restaurant_id') ||
              $check_field('add', 'restaurant_id') ||
              $check_field('get', 'restaurant_id')
            "
            class="col-12 col-md-6 row-item"
          >
            <view class="diy_title diy_text_row">
              <text> 餐厅编号: </text>
            </view>
            <!-- 文本 -->
            <view class="diy_field diy_text diy_text_row">
              <input
                type="text"
                id="form_restaurant_id"
                v-model="form['restaurant_id']"
                placeholder="请输入餐厅编号"
                v-if="
                  (form['restaurant_id'] &&
                    $check_field('set', 'restaurant_id')) ||
                  (!form['restaurant_id'] &&
                    $check_field('add', 'restaurant_id'))
                "
                :disabled="disabledObj['restaurant_id_isDisabled']"
              />
              <text v-else-if="$check_field('get', 'restaurant_id')">{{
                form['restaurant_id']
              }}</text>
            </view>
          </view>
          <view
            v-if="
              $check_field('set', 'restaurant_phone_number') ||
              $check_field('add', 'restaurant_phone_number') ||
              $check_field('get', 'restaurant_phone_number')
            "
            class="col-12 col-md-6 row-item"
          >
            <view class="diy_title diy_text_row">
              <text> 餐厅电话: </text>
            </view>
            <!-- 文本 -->
            <view class="diy_field diy_text diy_text_row">
              <input
                type="text"
                id="form_restaurant_phone_number"
                v-model="form['restaurant_phone_number']"
                placeholder="请输入餐厅电话"
                v-if="
                  (form['restaurant_phone_number'] &&
                    $check_field('set', 'restaurant_phone_number')) ||
                  (!form['restaurant_phone_number'] &&
                    $check_field('add', 'restaurant_phone_number'))
                "
                :disabled="disabledObj['restaurant_phone_number_isDisabled']"
              />
              <text
                v-else-if="$check_field('get', 'restaurant_phone_number')"
                >{{ form['restaurant_phone_number'] }}</text
              >
            </view>
          </view>
          <view
            v-if="
              $check_field('set', 'restaurant_address') ||
              $check_field('add', 'restaurant_address') ||
              $check_field('get', 'restaurant_address')
            "
            class="col-12 col-md-6 row-item"
          >
            <view class="diy_title diy_text_row">
              <text> 餐厅地址: </text>
            </view>
            <!-- 文本 -->
            <view class="diy_field diy_text diy_text_row">
              <input
                type="text"
                id="form_restaurant_address"
                v-model="form['restaurant_address']"
                placeholder="请输入餐厅地址"
                v-if="
                  (form['restaurant_address'] &&
                    $check_field('set', 'restaurant_address')) ||
                  (!form['restaurant_address'] &&
                    $check_field('add', 'restaurant_address'))
                "
                :disabled="disabledObj['restaurant_address_isDisabled']"
              />
              <text v-else-if="$check_field('get', 'restaurant_address')">{{
                form['restaurant_address']
              }}</text>
            </view>
          </view>
          <view
            v-if="
              $check_field('set', 'dinner_time') ||
              $check_field('add', 'dinner_time') ||
              $check_field('get', 'dinner_time')
            "
            class="col-12 col-md-6 row-item"
          >
            <view class="diy_title diy_text_row">
              <text> 用餐时间: </text>
            </view>
            <!-- 日长 -->
            <view class="diy_field diy_datetime diy_text_row">
              <uni-datetime-picker
                :disabled="disabledObj['dinner_time_isDisabled']"
                type="datetime"
                id="form_dinner_time"
                v-model="form['dinner_time']"
                placeholder="请输入用餐时间"
                v-if="
                  (form['dinner_time'] && $check_field('set', 'dinner_time')) ||
                  (!form['dinner_time'] && $check_field('add', 'dinner_time'))
                "
              />
              <text v-else-if="$check_field('get', 'dinner_time')">{{
                form['dinner_time']
              }}</text>
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
              $check_field('set', 'order_balance') ||
              $check_field('add', 'order_balance') ||
              $check_field('get', 'order_balance')
            "
            class="col-12 col-md-6 row-item"
          >
            <view class="diy_title diy_text_row">
              <text> 订单尾款: </text>
            </view>
            <!-- 文本 -->
            <view class="diy_field diy_text diy_text_row">
              <input
                type="text"
                id="form_order_balance"
                v-model="form['order_balance']"
                placeholder="请输入订单尾款"
                v-if="
                  (form['order_balance'] &&
                    $check_field('set', 'order_balance')) ||
                  (!form['order_balance'] &&
                    $check_field('add', 'order_balance'))
                "
                :disabled="disabledObj['order_balance_isDisabled']"
              />
              <text v-else-if="$check_field('get', 'order_balance')">{{
                form['order_balance']
              }}</text>
            </view>
          </view>
          <view
            v-if="
              $check_field('set', 'booking_remarks') ||
              $check_field('add', 'booking_remarks') ||
              $check_field('get', 'booking_remarks')
            "
            class="col-12 col-md-6 row-item"
          >
            <view class="diy_title diy_text_row">
              <text> 预订备注: </text>
            </view>
            <!-- 文本 -->
            <view class="diy_field diy_text diy_text_row">
              <input
                type="text"
                id="form_booking_remarks"
                v-model="form['booking_remarks']"
                placeholder="请输入预订备注"
                v-if="
                  (form['booking_remarks'] &&
                    $check_field('set', 'booking_remarks')) ||
                  (!form['booking_remarks'] &&
                    $check_field('add', 'booking_remarks'))
                "
                :disabled="disabledObj['booking_remarks_isDisabled']"
              />
              <text v-else-if="$check_field('get', 'booking_remarks')">{{
                form['booking_remarks']
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
      url_get_obj: '~/api/restaurant_orders/get_obj?',
      url_add: '~/api/restaurant_orders/add?',
      url_set: '~/api/restaurant_orders/set?',

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
        restaurant_name: '',
        restaurant_id: '',
        restaurant_phone_number: '',
        restaurant_address: '',
        dinner_time: '',
        booking_amount: '',
        order_balance: '',
        booking_remarks: '',
        restaurant_orders_id: 0,
      },

      obj: {
        regular_users: 0, // 普通用户
        user_name: '', // 用户姓名
        mobile_phone_number: '', // 手机号码
        merchant_users: 0, // 商家用户
        merchant_name: '', // 商家名称
        restaurant_name: '', // 餐厅名称
        restaurant_id: '', // 餐厅编号
        restaurant_phone_number: '', // 餐厅电话
        restaurant_address: '', // 餐厅地址
        dinner_time: this.$toTime(new Date().getTime(), 'yyyy-MM-dd hh:mm:ss'),
        booking_amount: '', // 预定金额
        order_balance: '', // 订单尾款
        booking_remarks: '', // 预订备注
        restaurant_orders_id: 0,
      },

      // 表单字段
      form: {
        regular_users: 0, // 普通用户
        user_name: '', // 用户姓名
        mobile_phone_number: '', // 手机号码
        merchant_users: 0, // 商家用户
        merchant_name: '', // 商家名称
        restaurant_name: '', // 餐厅名称
        restaurant_id: '', // 餐厅编号
        restaurant_phone_number: '', // 餐厅电话
        restaurant_address: '', // 餐厅地址
        dinner_time: this.$toTime(new Date().getTime(), 'yyyy-MM-dd hh:mm:ss'),
        booking_amount: '', // 预定金额
        order_balance: '', // 订单尾款
        booking_remarks: '', // 预订备注
        restaurant_orders_id: 0,
      },
      disabledObj: {
        regular_users_isDisabled: false,
        user_name_isDisabled: false,
        mobile_phone_number_isDisabled: false,
        merchant_users_isDisabled: false,
        merchant_name_isDisabled: false,
        restaurant_name_isDisabled: false,
        restaurant_id_isDisabled: false,
        restaurant_phone_number_isDisabled: false,
        restaurant_address_isDisabled: false,
        dinner_time_isDisabled: false,
        booking_amount_isDisabled: false,
        order_balance_isDisabled: false,
        booking_remarks_isDisabled: false,
      },

      // 用户列表
      list_user_regular_users: [],
      // 用户列表
      list_user_merchant_users: [],

      field: 'restaurant_orders_id',
      table_key: 'restaurant_orders',
    }
  },
  methods: {
    /**
     * 提交前验证事件
     * @param {Object} 请求参数
     * @return {String} 验证成功返回null, 失败返回错误提示
     */
    submit_check(param) {
      if (!param.dinner_time) {
        return '用餐时间不能为空'
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
            url: _self.$fullUrl('/api/restaurant_orders/upload?'),
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              restaurant_orders: 'test',
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
        this.form['dinner_time'] &&
        JSON.stringify(this.form['dinner_time']).indexOf('-') === -1
      ) {
        this.form['dinner_time'] = this.$toTime(
          parseInt(this.form['dinner_time']),
          'yyyy-MM-dd hh:mm:ss'
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
