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
                    (form['homestay_information_id'] &&
                      $check_field('set', 'merchant_users')) ||
                    (!form['homestay_information_id'] &&
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
                    (form['homestay_information_id'] &&
                      $check_field('set', 'merchant_name')) ||
                    (!form['homestay_information_id'] &&
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
                    (form['homestay_information_id'] &&
                      $check_field('set', 'homestay_name')) ||
                    (!form['homestay_information_id'] &&
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
                    (form['homestay_information_id'] &&
                      $check_field('set', 'homestay_id')) ||
                    (!form['homestay_information_id'] &&
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
                  $check_field('get', 'homestay_telephone_number') ||
                  $check_field('add', 'homestay_telephone_number') ||
                  $check_field('set', 'homestay_telephone_number')
                "
                label="民宿电话"
                name="homestay_telephone_number"
              >
                <uni-easyinput
                  type="number"
                  v-model="form['homestay_telephone_number']"
                  v-if="
                    user_group === '管理员' ||
                    (form['homestay_information_id'] &&
                      $check_field('set', 'homestay_telephone_number')) ||
                    (!form['homestay_information_id'] &&
                      $check_field('add', 'homestay_telephone_number'))
                  "
                  :disabled="
                    disabledObj['homestay_telephone_number_isDisabled']
                  "
                />
                <!-- 仅查看 -->
                <text
                  v-else-if="$check_field('get', 'homestay_telephone_number')"
                >
                  {{ form['homestay_telephone_number'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'homestay_pictures') ||
                  $check_field('add', 'homestay_pictures') ||
                  $check_field('set', 'homestay_pictures')
                "
                label="民宿图片"
                name="homestay_pictures"
              >
                <!-- 修改权限 -->
                <view
                  class="diy_field diy_img"
                  v-if="
                    form['homestay_pictures'] &&
                    $check_field('set', 'homestay_pictures')
                  "
                >
                  <image
                    v-if="disabledObj['homestay_pictures_isDisabled']"
                    :src="$fullUrl(form['homestay_pictures'])"
                  />
                  <image
                    v-if="!disabledObj['homestay_pictures_isDisabled']"
                    :src="$fullUrl(form['homestay_pictures'])"
                    @click="change_img('homestay_pictures')"
                  />
                </view>
                <!-- 添加权限 -->
                <view
                  class="diy_field diy_img"
                  v-else-if="
                    !form['homestay_pictures'] &&
                    $check_field('add', 'homestay_pictures')
                  "
                >
                  <view
                    v-if="disabledObj['homestay_pictures_isDisabled']"
                    class="btn_add_img"
                  >
                    <text>+</text>
                  </view>
                  <view
                    v-if="!disabledObj['homestay_pictures_isDisabled']"
                    class="btn_add_img"
                    @click="change_img('homestay_pictures')"
                  >
                    <text>+</text>
                  </view>
                </view>
                <!-- 查询权限 -->
                <view
                  class="diy_field diy_img"
                  v-else-if="$check_field('get', 'homestay_pictures')"
                >
                  <image :src="$fullUrl(form['homestay_pictures'])" />
                </view>
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
                    (form['homestay_information_id'] &&
                      $check_field('set', 'homestay_prices')) ||
                    (!form['homestay_information_id'] &&
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
                    (form['homestay_information_id'] &&
                      $check_field('set', 'booking_amount')) ||
                    (!form['homestay_information_id'] &&
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
                  $check_field('get', 'homestay_address') ||
                  $check_field('add', 'homestay_address') ||
                  $check_field('set', 'homestay_address')
                "
                label="民宿地址"
                name="homestay_address"
              >
                <uni-easyinput
                  type="textarea"
                  v-model="form['homestay_address']"
                  v-if="
                    user_group === '管理员' ||
                    (form['homestay_information_id'] &&
                      $check_field('set', 'homestay_address')) ||
                    (!form['homestay_information_id'] &&
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
                  $check_field('get', 'homestay_details') ||
                  $check_field('add', 'homestay_details') ||
                  $check_field('set', 'homestay_details')
                "
                label="民宿详情"
                name="homestay_details"
              >
                <uni-easyinput
                  type="textarea"
                  v-model="form['homestay_details']"
                  v-if="
                    user_group === '管理员' ||
                    (form['homestay_information_id'] &&
                      $check_field('set', 'homestay_details')) ||
                    (!form['homestay_information_id'] &&
                      $check_field('add', 'homestay_details'))
                  "
                  :disabled="disabledObj['homestay_details_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'homestay_details')">
                  {{ form['homestay_details'] }}
                </text>
              </uni-forms-item>
            </uni-forms>
            <view
              class="form_button"
              v-if="
                $check_action('/homestay_information/view', 'set') ||
                $check_action('/homestay_information/view', 'add') ||
                $check_option('/homestay_information/table', 'examine')
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
      field: 'homestay_information_id',
      url_add: '~/api/homestay_information/add?',
      url_set: '~/api/homestay_information/set?',
      url_get_obj: '~/api/homestay_information/get_obj?',
      url_upload: '~/api/homestay_information/upload?',
      merchant_users: null,
      merchant_name: null,
      homestay_name: null,
      homestay_id: null,
      homestay_telephone_number: null,
      homestay_pictures: null,
      homestay_prices: null,
      booking_amount: null,
      homestay_address: null,
      homestay_details: null,
      query: {
        homestay_information_id: 0,
      },

      form: {
        merchant_users: 0, // 商家用户
        merchant_name: '', // 商家名称
        homestay_name: '', // 民宿名称
        homestay_id: '', // 民宿编号
        homestay_telephone_number: '', // 民宿电话
        homestay_pictures: '', // 民宿图片
        homestay_prices: 0, // 民宿价格
        booking_amount: 0, // 预定金额
        homestay_address: '', // 民宿地址
        homestay_details: '', // 民宿详情
        homestay_information_id: 0, // ID
      },
      disabledObj: {
        merchant_users_isDisabled: false,
        merchant_name_isDisabled: false,
        homestay_name_isDisabled: false,
        homestay_id_isDisabled: false,
        homestay_telephone_number_isDisabled: false,
        homestay_pictures_isDisabled: false,
        homestay_address_isDisabled: false,
        homestay_details_isDisabled: false,
      },
      // 用户列表
      list_user_merchant_users: [],
      // 用户组
      group_user_merchant_users: '',
    }
  },
  created() {
    this.get_list_user_merchant_users()
    this.get_group_user_merchant_users()
  },
  methods: {
    /**
     * 提交前验证事件
     * @param {Object}
请求参数
     * @return {String} 验证成功返回null, 失败返回错误提示
     */
    submit_check(param) {
      let homestay_telephone_number_phone_regular =
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
      if (
        param.homestay_telephone_number &&
        !homestay_telephone_number_phone_regular.test(
          param.homestay_telephone_number
        )
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
        url: getApp().globalData.host + '/api/homestay_information/upload', //仅为示例，非真实的接口地址
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
      if (type == 'homestay_name')
        this['homestay_name'] = this.form['homestay_name'] = ''
      if (type == 'homestay_id')
        this['homestay_id'] = this.form['homestay_id'] = ''
      if (type == 'homestay_telephone_number')
        this['homestay_telephone_number'] = this.form[
          'homestay_telephone_number'
        ] = ''
      if (type == 'homestay_pictures')
        this['homestay_pictures'] = this.form['homestay_pictures'] = ''
      if (type == 'homestay_prices')
        this['homestay_prices'] = this.form['homestay_prices'] = ''
      if (type == 'booking_amount')
        this['booking_amount'] = this.form['booking_amount'] = ''
      if (type == 'homestay_address')
        this['homestay_address'] = this.form['homestay_address'] = ''
      if (type == 'homestay_details')
        this['homestay_details'] = this.form['homestay_details'] = ''
    },
    submit_() {
      if (this['merchant_users'] !== null)
        this.form['merchant_users'] = this['merchant_users']
      if (this['merchant_name'] !== null)
        this.form['merchant_name'] = this['merchant_name']
      if (this['homestay_name'] !== null)
        this.form['homestay_name'] = this['homestay_name']
      if (this['homestay_id'] !== null)
        this.form['homestay_id'] = this['homestay_id']
      if (this['homestay_telephone_number'] !== null)
        this.form['homestay_telephone_number'] =
          this['homestay_telephone_number']
      if (this['homestay_pictures'] !== null)
        this.form['homestay_pictures'] = this['homestay_pictures']
      if (this['homestay_prices'] !== null)
        this.form['homestay_prices'] = this['homestay_prices']
      if (this['booking_amount'] !== null)
        this.form['booking_amount'] = this['booking_amount']
      if (this['homestay_address'] !== null)
        this.form['homestay_address'] = this['homestay_address']
      if (this['homestay_details'] !== null)
        this.form['homestay_details'] = this['homestay_details']

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
            url: _self.$fullUrl('/api/homestay_information/upload?'),
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
            url: _self.$fullUrl('/api/homestay_information/upload?'),
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
     * 获取对象之后
     * @param {Object} json
     * @param {Object} func
     */
    get_obj_after(json, func) {},

    is_view() {
      var bl = this.user_group == '管理员'

      if (!bl) {
        bl = this.$check_action('/homestay_information/table', 'add')
        console.log(
          bl ? '你有表格添加权限视作有添加权限' : '你没有表格添加权限'
        )
      }
      if (!bl) {
        bl = this.$check_action('/homestay_information/table', 'set')
        console.log(
          bl ? '你有表格添加权限视作有修改权限' : '你没有表格修改权限'
        )
      }
      if (!bl) {
        bl = this.$check_action('/homestay_information/view', 'add')
        console.log(
          bl ? '你有视图添加权限视作有添加权限' : '你没有视图添加权限'
        )
      }
      if (!bl) {
        bl = this.$check_action('/homestay_information/view', 'set')
        console.log(
          bl ? '你有视图修改权限视作有修改权限' : '你没有视图修改权限'
        )
      }
      if (!bl) {
        bl = this.$check_action('/homestay_information/view', 'get')
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
