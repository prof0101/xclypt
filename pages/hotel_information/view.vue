<template>
  <view>
    <view class="container diy_view">
      <view>
        <view>
          <view class="">
            <uni-forms :modelValue="form" v-if="is_view()">
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
                    (form['hotel_information_id'] &&
                      $check_field('set', 'merchant_users')) ||
                    (!form['hotel_information_id'] &&
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
                    (form['hotel_information_id'] &&
                      $check_field('set', 'merchant_name')) ||
                    (!form['hotel_information_id'] &&
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
                  $check_field('get', 'hotel_name') ||
                  $check_field('add', 'hotel_name') ||
                  $check_field('set', 'hotel_name')
                "
                label="酒店名称"
                name="hotel_name"
              >
                <uni-easyinput
                  type="text"
                  v-model="form['hotel_name']"
                  v-if="
                    user_group === '管理员' ||
                    (form['hotel_information_id'] &&
                      $check_field('set', 'hotel_name')) ||
                    (!form['hotel_information_id'] &&
                      $check_field('add', 'hotel_name'))
                  "
                  :disabled="disabledObj['hotel_name_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'hotel_name')">
                  {{ form['hotel_name'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'hotel_pictures') ||
                  $check_field('add', 'hotel_pictures') ||
                  $check_field('set', 'hotel_pictures')
                "
                label="酒店图片"
                name="hotel_pictures"
              >
                <!-- 修改权限 -->
                <view
                  class="diy_field diy_img"
                  v-if="
                    form['hotel_pictures'] &&
                    $check_field('set', 'hotel_pictures')
                  "
                >
                  <image
                    v-if="disabledObj['hotel_pictures_isDisabled']"
                    :src="$fullUrl(form['hotel_pictures'])"
                  />
                  <image
                    v-if="!disabledObj['hotel_pictures_isDisabled']"
                    :src="$fullUrl(form['hotel_pictures'])"
                    @click="change_img('hotel_pictures')"
                  />
                </view>
                <!-- 添加权限 -->
                <view
                  class="diy_field diy_img"
                  v-else-if="
                    !form['hotel_pictures'] &&
                    $check_field('add', 'hotel_pictures')
                  "
                >
                  <view
                    v-if="disabledObj['hotel_pictures_isDisabled']"
                    class="btn_add_img"
                  >
                    <text>+</text>
                  </view>
                  <view
                    v-if="!disabledObj['hotel_pictures_isDisabled']"
                    class="btn_add_img"
                    @click="change_img('hotel_pictures')"
                  >
                    <text>+</text>
                  </view>
                </view>
                <!-- 查询权限 -->
                <view
                  class="diy_field diy_img"
                  v-else-if="$check_field('get', 'hotel_pictures')"
                >
                  <image :src="$fullUrl(form['hotel_pictures'])" />
                </view>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'hotel_star_rating') ||
                  $check_field('add', 'hotel_star_rating') ||
                  $check_field('set', 'hotel_star_rating')
                "
                label="酒店星级"
                name="hotel_star_rating"
              >
                <uni-data-select
                  v-model="form.hotel_star_rating"
                  :localdata="list_hotel_star_rating"
                  :clear="!disabledObj['hotel_star_rating_isDisabled']"
                  :disabled="disabledObj['hotel_star_rating_isDisabled']"
                  v-if="
                    user_group === '管理员' ||
                    (form['hotel_information_id'] &&
                      $check_field('set', 'hotel_star_rating')) ||
                    (!form['hotel_information_id'] &&
                      $check_field('add', 'hotel_star_rating'))
                  "
                ></uni-data-select>
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'hotel_star_rating')">
                  {{ form['hotel_star_rating'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'hotel_category') ||
                  $check_field('add', 'hotel_category') ||
                  $check_field('set', 'hotel_category')
                "
                label="酒店类别"
                name="hotel_category"
              >
                <uni-easyinput
                  type="text"
                  v-model="form['hotel_category']"
                  v-if="
                    user_group === '管理员' ||
                    (form['hotel_information_id'] &&
                      $check_field('set', 'hotel_category')) ||
                    (!form['hotel_information_id'] &&
                      $check_field('add', 'hotel_category'))
                  "
                  :disabled="disabledObj['hotel_category_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'hotel_category')">
                  {{ form['hotel_category'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'room_type') ||
                  $check_field('add', 'room_type') ||
                  $check_field('set', 'room_type')
                "
                label="房间类型"
                name="room_type"
              >
                <uni-easyinput
                  type="text"
                  v-model="form['room_type']"
                  v-if="
                    user_group === '管理员' ||
                    (form['hotel_information_id'] &&
                      $check_field('set', 'room_type')) ||
                    (!form['hotel_information_id'] &&
                      $check_field('add', 'room_type'))
                  "
                  :disabled="disabledObj['room_type_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'room_type')">
                  {{ form['room_type'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'one_night_amount') ||
                  $check_field('add', 'one_night_amount') ||
                  $check_field('set', 'one_night_amount')
                "
                label="一晚金额"
                name="one_night_amount"
              >
                <uni-easyinput
                  type="text"
                  v-model="form['one_night_amount']"
                  v-if="
                    user_group === '管理员' ||
                    (form['hotel_information_id'] &&
                      $check_field('set', 'one_night_amount')) ||
                    (!form['hotel_information_id'] &&
                      $check_field('add', 'one_night_amount'))
                  "
                  :disabled="disabledObj['one_night_amount_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'one_night_amount')">
                  {{ form['one_night_amount'] }}
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
                    (form['hotel_information_id'] &&
                      $check_field('set', 'booking_amount')) ||
                    (!form['hotel_information_id'] &&
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
                  $check_field('get', 'hotel_phone_number') ||
                  $check_field('add', 'hotel_phone_number') ||
                  $check_field('set', 'hotel_phone_number')
                "
                label="酒店电话"
                name="hotel_phone_number"
              >
                <uni-easyinput
                  type="number"
                  v-model="form['hotel_phone_number']"
                  v-if="
                    user_group === '管理员' ||
                    (form['hotel_information_id'] &&
                      $check_field('set', 'hotel_phone_number')) ||
                    (!form['hotel_information_id'] &&
                      $check_field('add', 'hotel_phone_number'))
                  "
                  :disabled="disabledObj['hotel_phone_number_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'hotel_phone_number')">
                  {{ form['hotel_phone_number'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'hotel_introduction') ||
                  $check_field('add', 'hotel_introduction') ||
                  $check_field('set', 'hotel_introduction')
                "
                label="酒店介绍"
                name="hotel_introduction"
              >
                <uni-easyinput
                  type="textarea"
                  v-model="form['hotel_introduction']"
                  v-if="
                    user_group === '管理员' ||
                    (form['hotel_information_id'] &&
                      $check_field('set', 'hotel_introduction')) ||
                    (!form['hotel_information_id'] &&
                      $check_field('add', 'hotel_introduction'))
                  "
                  :disabled="disabledObj['hotel_introduction_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'hotel_introduction')">
                  {{ form['hotel_introduction'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'hotel_address') ||
                  $check_field('add', 'hotel_address') ||
                  $check_field('set', 'hotel_address')
                "
                label="酒店地址"
                name="hotel_address"
              >
                <uni-easyinput
                  type="textarea"
                  v-model="form['hotel_address']"
                  v-if="
                    user_group === '管理员' ||
                    (form['hotel_information_id'] &&
                      $check_field('set', 'hotel_address')) ||
                    (!form['hotel_information_id'] &&
                      $check_field('add', 'hotel_address'))
                  "
                  :disabled="disabledObj['hotel_address_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'hotel_address')">
                  {{ form['hotel_address'] }}
                </text>
              </uni-forms-item>
            </uni-forms>
            <view
              class="form_button"
              v-if="
                $check_action('/hotel_information/view', 'set') ||
                $check_action('/hotel_information/view', 'add') ||
                $check_option('/hotel_information/table', 'examine')
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
      field: 'hotel_information_id',
      url_add: '~/api/hotel_information/add?',
      url_set: '~/api/hotel_information/set?',
      url_get_obj: '~/api/hotel_information/get_obj?',
      url_upload: '~/api/hotel_information/upload?',
      merchant_users: null,
      merchant_name: null,
      hotel_name: null,
      hotel_pictures: null,
      hotel_star_rating: null,
      hotel_category: null,
      room_type: null,
      one_night_amount: null,
      booking_amount: null,
      hotel_phone_number: null,
      hotel_introduction: null,
      hotel_address: null,
      query: {
        hotel_information_id: 0,
      },

      form: {
        merchant_users: 0, // 商家用户
        merchant_name: '', // 商家名称
        hotel_name: '', // 酒店名称
        hotel_pictures: '', // 酒店图片
        hotel_star_rating: '', // 酒店星级
        hotel_category: '', // 酒店类别
        room_type: '', // 房间类型
        one_night_amount: 0, // 一晚金额
        booking_amount: 0, // 预定金额
        hotel_phone_number: '', // 酒店电话
        hotel_introduction: '', // 酒店介绍
        hotel_address: '', // 酒店地址
        hotel_information_id: 0, // ID
      },
      disabledObj: {
        merchant_users_isDisabled: false,
        merchant_name_isDisabled: false,
        hotel_name_isDisabled: false,
        hotel_pictures_isDisabled: false,
        hotel_star_rating_isDisabled: false,
        hotel_category_isDisabled: false,
        room_type_isDisabled: false,
        hotel_phone_number_isDisabled: false,
        hotel_introduction_isDisabled: false,
        hotel_address_isDisabled: false,
      },
      // 用户列表
      list_user_merchant_users: [],
      // 用户组
      group_user_merchant_users: '',
      // 酒店星级选项列表
      list_hotel_star_rating: [],
    }
  },
  created() {
    this.get_list_user_merchant_users()
    this.get_group_user_merchant_users()
    this.get_list_hotel_star_rating()
  },
  methods: {
    /**
     * 提交前验证事件
     * @param {Object}
请求参数
     * @return {String} 验证成功返回null, 失败返回错误提示
     */
    submit_check(param) {
      let hotel_phone_number_phone_regular =
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
      if (
        param.hotel_phone_number &&
        !hotel_phone_number_phone_regular.test(param.hotel_phone_number)
      ) {
        return '手机号格式错误'
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
        url: getApp().globalData.host + '/api/hotel_information/upload', //仅为示例，非真实的接口地址
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
      if (type == 'merchant_users')
        this['merchant_users'] = this.form['merchant_users'] = ''
      if (type == 'merchant_name')
        this['merchant_name'] = this.form['merchant_name'] = ''
      if (type == 'hotel_name')
        this['hotel_name'] = this.form['hotel_name'] = ''
      if (type == 'hotel_pictures')
        this['hotel_pictures'] = this.form['hotel_pictures'] = ''
      if (type == 'hotel_star_rating')
        this['hotel_star_rating'] = this.form['hotel_star_rating'] = ''
      if (type == 'hotel_category')
        this['hotel_category'] = this.form['hotel_category'] = ''
      if (type == 'room_type') this['room_type'] = this.form['room_type'] = ''
      if (type == 'one_night_amount')
        this['one_night_amount'] = this.form['one_night_amount'] = ''
      if (type == 'booking_amount')
        this['booking_amount'] = this.form['booking_amount'] = ''
      if (type == 'hotel_phone_number')
        this['hotel_phone_number'] = this.form['hotel_phone_number'] = ''
      if (type == 'hotel_introduction')
        this['hotel_introduction'] = this.form['hotel_introduction'] = ''
      if (type == 'hotel_address')
        this['hotel_address'] = this.form['hotel_address'] = ''
    },
    submit_() {
      if (this['merchant_users'] !== null)
        this.form['merchant_users'] = this['merchant_users']
      if (this['merchant_name'] !== null)
        this.form['merchant_name'] = this['merchant_name']
      if (this['hotel_name'] !== null)
        this.form['hotel_name'] = this['hotel_name']
      if (this['hotel_pictures'] !== null)
        this.form['hotel_pictures'] = this['hotel_pictures']
      if (this['hotel_star_rating'] !== null)
        this.form['hotel_star_rating'] = this['hotel_star_rating']
      if (this['hotel_category'] !== null)
        this.form['hotel_category'] = this['hotel_category']
      if (this['room_type'] !== null) this.form['room_type'] = this['room_type']
      if (this['one_night_amount'] !== null)
        this.form['one_night_amount'] = this['one_night_amount']
      if (this['booking_amount'] !== null)
        this.form['booking_amount'] = this['booking_amount']
      if (this['hotel_phone_number'] !== null)
        this.form['hotel_phone_number'] = this['hotel_phone_number']
      if (this['hotel_introduction'] !== null)
        this.form['hotel_introduction'] = this['hotel_introduction']
      if (this['hotel_address'] !== null)
        this.form['hotel_address'] = this['hotel_address']

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
            url: _self.$fullUrl('/api/hotel_information/upload?'),
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
            url: _self.$fullUrl('/api/hotel_information/upload?'),
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
      uni.db.del('form')
      return param
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
    /**
     * 获取商家用户用户组
     */
    async get_group_user_merchant_users() {
      this.form['merchant_users'] = this.user.user_id
      var json = await this.$get('~/api/user_group/get_obj?name=商家用户')
      if (json.result && json.result.obj) {
        this.group_user_merchant_users = json.result.obj
        this.get_user_session_merchant_users(this.form['merchant_users'])
      } else if (json.error) {
        console.error(json.error)
      }
    },
    get_user_session_merchant_users(id) {
      var _this = this
      var user_id = { user_id: id }
      var url =
        '~/api/' + _this.group_user_merchant_users.source_table + '/get_obj?'
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
          _this.form['merchant_users'] = id
          _this.disabledObj['merchant_users' + '_isDisabled'] = true
          for (var i = 0; i < arr.length; i++) {
            if (arr[i] !== 'examine_state' && arr[i] !== 'examine_reply') {
              for (var j = 0; j < arrForm.length; j++) {
                if (arr[i] === arrForm[j]) {
                  if (arr[i] !== 'merchant_users') {
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
     * 获取酒店星级列表
     */
    async get_list_hotel_star_rating() {
      ;['五星级', '四星级'].map((o) =>
        this.list_hotel_star_rating.push({ value: o, text: o })
      )
    },

    /**
     * 获取对象之后
     * @param {Object} json
     * @param {Object} func
     */
    get_obj_after(json, func) {},

    is_view() {
      var bl = this.user_group == '管理员'

      if (!bl) {
        bl = this.$check_action('/hotel_information/table', 'add')
        console.log(
          bl ? '你有表格添加权限视作有添加权限' : '你没有表格添加权限'
        )
      }
      if (!bl) {
        bl = this.$check_action('/hotel_information/table', 'set')
        console.log(
          bl ? '你有表格添加权限视作有修改权限' : '你没有表格修改权限'
        )
      }
      if (!bl) {
        bl = this.$check_action('/hotel_information/view', 'add')
        console.log(
          bl ? '你有视图添加权限视作有添加权限' : '你没有视图添加权限'
        )
      }
      if (!bl) {
        bl = this.$check_action('/hotel_information/view', 'set')
        console.log(
          bl ? '你有视图修改权限视作有修改权限' : '你没有视图修改权限'
        )
      }
      if (!bl) {
        bl = this.$check_action('/hotel_information/view', 'get')
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
