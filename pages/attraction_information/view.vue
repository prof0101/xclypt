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
                    (form['attraction_information_id'] &&
                      $check_field('set', 'merchant_users')) ||
                    (!form['attraction_information_id'] &&
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
                    (form['attraction_information_id'] &&
                      $check_field('set', 'merchant_name')) ||
                    (!form['attraction_information_id'] &&
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
                    (form['attraction_information_id'] &&
                      $check_field('set', 'attraction_name')) ||
                    (!form['attraction_information_id'] &&
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
                  $check_field('get', 'scenic_spot_pictures') ||
                  $check_field('add', 'scenic_spot_pictures') ||
                  $check_field('set', 'scenic_spot_pictures')
                "
                label="景点图片"
                name="scenic_spot_pictures"
              >
                <!-- 修改权限 -->
                <view
                  class="diy_field diy_img"
                  v-if="
                    form['scenic_spot_pictures'] &&
                    $check_field('set', 'scenic_spot_pictures')
                  "
                >
                  <image
                    v-if="disabledObj['scenic_spot_pictures_isDisabled']"
                    :src="$fullUrl(form['scenic_spot_pictures'])"
                  />
                  <image
                    v-if="!disabledObj['scenic_spot_pictures_isDisabled']"
                    :src="$fullUrl(form['scenic_spot_pictures'])"
                    @click="change_img('scenic_spot_pictures')"
                  />
                </view>
                <!-- 添加权限 -->
                <view
                  class="diy_field diy_img"
                  v-else-if="
                    !form['scenic_spot_pictures'] &&
                    $check_field('add', 'scenic_spot_pictures')
                  "
                >
                  <view
                    v-if="disabledObj['scenic_spot_pictures_isDisabled']"
                    class="btn_add_img"
                  >
                    <text>+</text>
                  </view>
                  <view
                    v-if="!disabledObj['scenic_spot_pictures_isDisabled']"
                    class="btn_add_img"
                    @click="change_img('scenic_spot_pictures')"
                  >
                    <text>+</text>
                  </view>
                </view>
                <!-- 查询权限 -->
                <view
                  class="diy_field diy_img"
                  v-else-if="$check_field('get', 'scenic_spot_pictures')"
                >
                  <image :src="$fullUrl(form['scenic_spot_pictures'])" />
                </view>
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
                    (form['attraction_information_id'] &&
                      $check_field('set', 'admission_price')) ||
                    (!form['attraction_information_id'] &&
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
                  $check_field('get', 'tourist_attraction_phone_number') ||
                  $check_field('add', 'tourist_attraction_phone_number') ||
                  $check_field('set', 'tourist_attraction_phone_number')
                "
                label="景点电话"
                name="tourist_attraction_phone_number"
              >
                <uni-easyinput
                  type="number"
                  v-model="form['tourist_attraction_phone_number']"
                  v-if="
                    user_group === '管理员' ||
                    (form['attraction_information_id'] &&
                      $check_field('set', 'tourist_attraction_phone_number')) ||
                    (!form['attraction_information_id'] &&
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
                  $check_field('get', 'attraction_address') ||
                  $check_field('add', 'attraction_address') ||
                  $check_field('set', 'attraction_address')
                "
                label="景点地址"
                name="attraction_address"
              >
                <uni-easyinput
                  type="textarea"
                  v-model="form['attraction_address']"
                  v-if="
                    user_group === '管理员' ||
                    (form['attraction_information_id'] &&
                      $check_field('set', 'attraction_address')) ||
                    (!form['attraction_information_id'] &&
                      $check_field('add', 'attraction_address'))
                  "
                  :disabled="disabledObj['attraction_address_isDisabled']"
                />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get', 'attraction_address')">
                  {{ form['attraction_address'] }}
                </text>
              </uni-forms-item>
              <uni-forms-item
                v-if="
                  $check_field('get', 'introduction_to_scenic_spots') ||
                  $check_field('add', 'introduction_to_scenic_spots') ||
                  $check_field('set', 'introduction_to_scenic_spots')
                "
                label="景点简介"
                name="introduction_to_scenic_spots"
              >
                <uni-easyinput
                  type="textarea"
                  v-model="form['introduction_to_scenic_spots']"
                  v-if="
                    user_group === '管理员' ||
                    (form['attraction_information_id'] &&
                      $check_field('set', 'introduction_to_scenic_spots')) ||
                    (!form['attraction_information_id'] &&
                      $check_field('add', 'introduction_to_scenic_spots'))
                  "
                  :disabled="
                    disabledObj['introduction_to_scenic_spots_isDisabled']
                  "
                />
                <!-- 仅查看 -->
                <text
                  v-else-if="
                    $check_field('get', 'introduction_to_scenic_spots')
                  "
                >
                  {{ form['introduction_to_scenic_spots'] }}
                </text>
              </uni-forms-item>
            </uni-forms>
            <view
              class="form_button"
              v-if="
                $check_action('/attraction_information/view', 'set') ||
                $check_action('/attraction_information/view', 'add') ||
                $check_option('/attraction_information/table', 'examine')
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
      field: 'attraction_information_id',
      url_add: '~/api/attraction_information/add?',
      url_set: '~/api/attraction_information/set?',
      url_get_obj: '~/api/attraction_information/get_obj?',
      url_upload: '~/api/attraction_information/upload?',
      merchant_users: null,
      merchant_name: null,
      attraction_name: null,
      scenic_spot_pictures: null,
      admission_price: null,
      tourist_attraction_phone_number: null,
      attraction_address: null,
      introduction_to_scenic_spots: null,
      query: {
        attraction_information_id: 0,
      },

      form: {
        merchant_users: 0, // 商家用户
        merchant_name: '', // 商家名称
        attraction_name: '', // 景点名称
        scenic_spot_pictures: '', // 景点图片
        admission_price: 0, // 门票价格
        tourist_attraction_phone_number: '', // 景点电话
        attraction_address: '', // 景点地址
        introduction_to_scenic_spots: '', // 景点简介
        attraction_information_id: 0, // ID
      },
      disabledObj: {
        merchant_users_isDisabled: false,
        merchant_name_isDisabled: false,
        attraction_name_isDisabled: false,
        scenic_spot_pictures_isDisabled: false,
        tourist_attraction_phone_number_isDisabled: false,
        attraction_address_isDisabled: false,
        introduction_to_scenic_spots_isDisabled: false,
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
      let tourist_attraction_phone_number_phone_regular =
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
      if (
        param.tourist_attraction_phone_number &&
        !tourist_attraction_phone_number_phone_regular.test(
          param.tourist_attraction_phone_number
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
        url: getApp().globalData.host + '/api/attraction_information/upload', //仅为示例，非真实的接口地址
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
      if (type == 'attraction_name')
        this['attraction_name'] = this.form['attraction_name'] = ''
      if (type == 'scenic_spot_pictures')
        this['scenic_spot_pictures'] = this.form['scenic_spot_pictures'] = ''
      if (type == 'admission_price')
        this['admission_price'] = this.form['admission_price'] = ''
      if (type == 'tourist_attraction_phone_number')
        this['tourist_attraction_phone_number'] = this.form[
          'tourist_attraction_phone_number'
        ] = ''
      if (type == 'attraction_address')
        this['attraction_address'] = this.form['attraction_address'] = ''
      if (type == 'introduction_to_scenic_spots')
        this['introduction_to_scenic_spots'] = this.form[
          'introduction_to_scenic_spots'
        ] = ''
    },
    submit_() {
      if (this['merchant_users'] !== null)
        this.form['merchant_users'] = this['merchant_users']
      if (this['merchant_name'] !== null)
        this.form['merchant_name'] = this['merchant_name']
      if (this['attraction_name'] !== null)
        this.form['attraction_name'] = this['attraction_name']
      if (this['scenic_spot_pictures'] !== null)
        this.form['scenic_spot_pictures'] = this['scenic_spot_pictures']
      if (this['admission_price'] !== null)
        this.form['admission_price'] = this['admission_price']
      if (this['tourist_attraction_phone_number'] !== null)
        this.form['tourist_attraction_phone_number'] =
          this['tourist_attraction_phone_number']
      if (this['attraction_address'] !== null)
        this.form['attraction_address'] = this['attraction_address']
      if (this['introduction_to_scenic_spots'] !== null)
        this.form['introduction_to_scenic_spots'] =
          this['introduction_to_scenic_spots']

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
            url: _self.$fullUrl('/api/attraction_information/upload?'),
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
            url: _self.$fullUrl('/api/attraction_information/upload?'),
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
        bl = this.$check_action('/attraction_information/table', 'add')
        console.log(
          bl ? '你有表格添加权限视作有添加权限' : '你没有表格添加权限'
        )
      }
      if (!bl) {
        bl = this.$check_action('/attraction_information/table', 'set')
        console.log(
          bl ? '你有表格添加权限视作有修改权限' : '你没有表格修改权限'
        )
      }
      if (!bl) {
        bl = this.$check_action('/attraction_information/view', 'add')
        console.log(
          bl ? '你有视图添加权限视作有添加权限' : '你没有视图添加权限'
        )
      }
      if (!bl) {
        bl = this.$check_action('/attraction_information/view', 'set')
        console.log(
          bl ? '你有视图修改权限视作有修改权限' : '你没有视图修改权限'
        )
      }
      if (!bl) {
        bl = this.$check_action('/attraction_information/view', 'get')
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
