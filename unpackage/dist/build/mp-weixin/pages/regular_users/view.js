;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/regular_users/view'],
  {
    '119f': function (e, r, s) {
      'use strict'
      s.r(r)
      var t = s('63f7'),
        o = s('4a31')
      for (var u in o)
        ['default'].indexOf(u) < 0 &&
          (function (e) {
            s.d(r, e, function () {
              return o[e]
            })
          })(u)
      s('32d5')
      var n = s('f0c5'),
        a = Object(n['a'])(
          o['default'],
          t['b'],
          t['c'],
          !1,
          null,
          '14d40177',
          null,
          !1,
          t['a'],
          void 0
        )
      r['default'] = a.exports
    },
    '32d5': function (e, r, s) {
      'use strict'
      var t = s('7c6f'),
        o = s.n(t)
      o.a
    },
    '4a31': function (e, r, s) {
      'use strict'
      s.r(r)
      var t = s('c365'),
        o = s.n(t)
      for (var u in t)
        ['default'].indexOf(u) < 0 &&
          (function (e) {
            s.d(r, e, function () {
              return t[e]
            })
          })(u)
      r['default'] = o.a
    },
    '63f7': function (e, r, s) {
      'use strict'
      s.d(r, 'b', function () {
        return o
      }),
        s.d(r, 'c', function () {
          return u
        }),
        s.d(r, 'a', function () {
          return t
        })
      var t = {
          uniForms: function () {
            return Promise.all([
              s.e('common/vendor'),
              s.e('components/uni-forms/uni-forms'),
            ]).then(s.bind(null, '2a9e'))
          },
          uniFormsItem: function () {
            return s
              .e('components/uni-forms-item/uni-forms-item')
              .then(s.bind(null, '4423'))
          },
          uniIcons: function () {
            return Promise.all([
              s.e('common/vendor'),
              s.e('components/uni-icons/uni-icons'),
            ]).then(s.bind(null, '9972'))
          },
          uniEasyinput: function () {
            return Promise.all([
              s.e('common/vendor'),
              s.e('components/uni-easyinput/uni-easyinput'),
            ]).then(s.bind(null, '4a17'))
          },
          uniDataSelect: function () {
            return Promise.all([
              s.e('common/vendor'),
              s.e('components/uni-data-select/uni-data-select'),
            ]).then(s.bind(null, '1b47'))
          },
        },
        o = function () {
          var e = this,
            r = e.$createElement,
            s = (e._self._c, e.is_view()),
            t =
              s && e.form_user['avatar']
                ? e.$fullUrl(e.form_user['avatar'])
                : null,
            o = s
              ? e.$check_field('get', 'user_name') ||
                e.$check_field('add', 'user_name') ||
                e.$check_field('set', 'user_name')
              : null,
            u =
              s && o
                ? '管理员' === e.user_group ||
                  (e.form['regular_users_id'] &&
                    e.$check_field('set', 'user_name')) ||
                  (!e.form['regular_users_id'] &&
                    e.$check_field('add', 'user_name'))
                : null,
            n = s && o && !u ? e.$check_field('get', 'user_name') : null,
            a = s
              ? e.$check_field('get', 'mobile_phone_number') ||
                e.$check_field('add', 'mobile_phone_number') ||
                e.$check_field('set', 'mobile_phone_number')
              : null,
            i =
              s && a
                ? '管理员' === e.user_group ||
                  (e.form['regular_users_id'] &&
                    e.$check_field('set', 'mobile_phone_number')) ||
                  (!e.form['regular_users_id'] &&
                    e.$check_field('add', 'mobile_phone_number'))
                : null,
            l =
              s && a && !i
                ? e.$check_field('get', 'mobile_phone_number')
                : null,
            c =
              e.$check_action('/regular_users/view', 'set') ||
              e.$check_action('/regular_users/view', 'add') ||
              e.$check_option('/regular_users/table', 'examine')
          e.$mp.data = Object.assign(
            {},
            {
              $root: {
                m0: s,
                m1: t,
                m2: o,
                m3: u,
                m4: n,
                m5: a,
                m6: i,
                m7: l,
                m8: c,
              },
            }
          )
        },
        u = []
    },
    '7c6f': function (e, r, s) {},
    b746: function (e, r, s) {
      'use strict'
      ;(function (e, r) {
        var t = s('4ea4')
        s('e411')
        t(s('66fd'))
        var o = t(s('119f'))
        ;(e.__webpack_require_UNI_MP_PLUGIN__ = s), r(o.default)
      }).call(this, s('bc2e')['default'], s('543d')['createPage'])
    },
    c365: function (e, r, s) {
      'use strict'
      ;(function (e, t) {
        var o = s('4ea4')
        Object.defineProperty(r, '__esModule', { value: !0 }),
          (r.default = void 0)
        var u,
          n = o(s('2eee')),
          a = o(s('9523')),
          i = o(s('c973')),
          l = o(s('813d')),
          c = {
            mixins: [l.default],
            data: function () {
              return {
                field_user: 'user_id',
                url_add_user: '~/api/user/register?',
                url_set_user: '~/api/user/set?',
                url_get_obj_user: '~/api/user/get_obj?',
                url_upload_user: '~/api/user/upload?',
                form_user: {
                  user_id: 0,
                  username: '',
                  nickname: '',
                  password: '',
                  avatar: '',
                  email: '',
                  user_group: '普通用户',
                  state: 1,
                  vip_level: '',
                  vip_discount: 0,
                },
                obj_user: {
                  user_id: 0,
                  username: '',
                  nickname: '',
                  password: '',
                  avatar: '',
                  email: '',
                  user_group: '普通用户',
                  state: 1,
                  vip_level: '',
                  vip_discount: 0,
                },
                query_user: { user_id: 0 },
                list_state: [
                  { value: 0, text: '未认证' },
                  { value: 1, text: '审核中' },
                  { value: 2, text: '已认证' },
                ],
                list_user_state: [
                  { value: 1, text: '可用' },
                  { value: 2, text: '异常' },
                  { value: 3, text: '已冻结' },
                  { value: 4, text: '已注销' },
                ],
                group_table: 'regular_users',
                is_password: !0,
                field: 'regular_users_id',
                url_add: '~/api/regular_users/add?',
                url_set: '~/api/regular_users/set?',
                url_get_obj: '~/api/regular_users/get_obj?',
                url_upload: '~/api/regular_users/upload?',
                user_name: null,
                mobile_phone_number: null,
                query: { regular_users_id: 0 },
                form: {
                  user_name: '',
                  mobile_phone_number: '',
                  user_id: 0,
                  regular_users_id: 0,
                },
                disabledObj: {
                  user_name_isDisabled: !1,
                  mobile_phone_number_isDisabled: !1,
                },
              }
            },
            methods:
              ((u = {
                submit_check: function (e) {
                  return e.mobile_phone_number &&
                    !/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(
                      e.mobile_phone_number
                    )
                    ? '手机号格式错误'
                    : null
                },
                changeLog: function (e, r) {
                  this.form[r] = e
                },
                uploadFile_: function (r) {
                  var s = this
                  'mp-weixin' != e.getSystemInfoSync().uniPlatform ||
                  'devtools' == e.getSystemInfoSync().platform
                    ? e.chooseImage({
                        count: 1,
                        success: function (e) {
                          var t = e.tempFilePaths
                          s.successChoose(t[0], r)
                        },
                      })
                    : t.chooseMessageFile({
                        count: 1,
                        success: function (e) {
                          var t = e.tempFiles
                          s.successChoose(t[0].path, r)
                        },
                      })
                },
                successChoose: function (r, s) {
                  var t = this
                  e.uploadFile({
                    url: getApp().globalData.host + '/api/regular_users/upload',
                    filePath: r,
                    name: 'file',
                    success: function (r) {
                      r.data.error
                        ? e.showToast({
                            title: r.data.error.message,
                            icon: 'none',
                          })
                        : (t[s] = JSON.parse(r.data).result.url)
                    },
                  })
                },
                close_: function (e) {
                  'user_name' == e &&
                    (this['user_name'] = this.form['user_name'] = ''),
                    'mobile_phone_number' == e &&
                      (this['mobile_phone_number'] = this.form[
                        'mobile_phone_number'
                      ] =
                        '')
                },
                submit_: function () {
                  null !== this['user_name'] &&
                    (this.form['user_name'] = this['user_name']),
                    null !== this['mobile_phone_number'] &&
                      (this.form['mobile_phone_number'] =
                        this['mobile_phone_number']),
                    console.log(this.form),
                    this.submit()
                },
                change_file: function (r) {
                  var s = this
                  e.chooseFile({
                    count: 1,
                    sizeType: ['original', 'compressed'],
                    sourceType: ['album'],
                    success: function (t) {
                      var o = t.tempFilePaths,
                        u = e.uploadFile({
                          url: s.$fullUrl('/api/regular_users/upload?'),
                          filePath: o[0],
                          name: 'file',
                          formData: { i_want_to_customize: 'test' },
                          header: { 'x-auth-token': s.$store.state.user.token },
                          success: function (e) {
                            var t = JSON.parse(e.data).result.url
                            s.form[r] = t
                          },
                        })
                      u.onProgressUpdate(function (e) {
                        ;(s.percent = e.progress),
                          console.log('上传进度' + e.progress),
                          console.log('已经上传的数据长度' + e.totalBytesSent),
                          console.log(
                            '预期需要上传的数据总长度' +
                              e.totalBytesExpectedToSend
                          )
                      })
                    },
                    error: function (e) {
                      console.log(e)
                    },
                  })
                },
                change_img: function (r) {
                  var s = this
                  ;(s.upload_img_flag = !1),
                    e.chooseImage({
                      count: 1,
                      sizeType: ['original', 'compressed'],
                      sourceType: ['album'],
                      success: function (t) {
                        var o = t.tempFilePaths,
                          u = e.uploadFile({
                            url: s.$fullUrl('/api/regular_users/upload?'),
                            filePath: o[0],
                            name: 'file',
                            formData: { i_want_to_customize: 'test' },
                            header: {
                              'x-auth-token': s.$store.state.user.token,
                            },
                            success: function (e) {
                              var t = JSON.parse(e.data).result.url
                              s.form[r] = t
                            },
                          })
                        u.onProgressUpdate(function (e) {
                          ;(s.percent = e.progress),
                            console.log('上传进度' + e.progress),
                            console.log(
                              '已经上传的数据长度' + e.totalBytesSent
                            ),
                            console.log(
                              '预期需要上传的数据总长度' +
                                e.totalBytesExpectedToSend
                            )
                        })
                      },
                      error: function (e) {
                        console.log(e)
                      },
                    })
                },
                get_obj_before: function (r) {
                  var s = e.db.get('form')
                  s &&
                    (delete s.examine_state,
                    delete s.examine_reply,
                    (this.obj = e.push(this.obj, s)),
                    (this.form = e.push(this.form, s)))
                  var t = []
                  for (var o in s) t.push(o)
                  for (var u = 0; u < t.length; u++)
                    this.disabledObj[t[u] + '_isDisabled'] = !0
                  return e.db.del('form'), r
                },
                get_obj_after: function (e, r) {
                  var s = this,
                    t = this.form.user_id
                  this.$get(
                    '~/api/user/get_obj?',
                    { user_id: t },
                    function (e) {
                      if (e.result && e.result.obj) {
                        var r = e.result.obj
                        delete r['create_time'],
                          delete r['login_time'],
                          (s.form_user = r),
                          (s.obj_user = r),
                          (s.is_password = !s.obj_user.password),
                          (s.query_user.user_id = t)
                      } else
                        e.error &&
                          (console.log(e.error),
                          console.log('获取不到相关信息'))
                    }
                  )
                },
                change_avatar: function () {
                  var r = this
                  ;(r.upload_img_flag = !1),
                    e.chooseImage({
                      count: 1,
                      sizeType: ['original', 'compressed'],
                      sourceType: ['album'],
                      success: function (s) {
                        var t = s.tempFilePaths,
                          o = e.uploadFile({
                            url: r.$fullUrl('/api/user/upload?'),
                            filePath: t[0],
                            name: 'file',
                            formData: { i_want_to_customize: 'test' },
                            header: {
                              'x-auth-token': r.$store.state.user.token,
                            },
                            success: function (e) {
                              var s = JSON.parse(e.data).result.url
                              r.form_user.avatar = s
                            },
                          })
                        o.onProgressUpdate(function (e) {
                          ;(r.percent = e.progress),
                            console.log('上传进度' + e.progress),
                            console.log(
                              '已经上传的数据长度' + e.totalBytesSent
                            ),
                            console.log(
                              '预期需要上传的数据总长度' +
                                e.totalBytesExpectedToSend
                            )
                        })
                      },
                      error: function (e) {
                        console.log(e)
                      },
                    })
                },
                submit: function (e, r) {
                  var s = this
                  return (0, i.default)(
                    n.default.mark(function t() {
                      var o, u, a
                      return n.default.wrap(function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                e || (e = s.form_user),
                                (o =
                                  s.events(
                                    'submit_before',
                                    Object.assign({}, e)
                                  ) || e),
                                (t.next = 4),
                                s.events('submit_check', o)
                              )
                            case 4:
                              return (
                                (u = t.sent),
                                u
                                  ? s.$toast(u, 'danger')
                                  : (a = s.events('submit_main', o, r)),
                                t.abrupt('return', a)
                              )
                            case 7:
                            case 'end':
                              return t.stop()
                          }
                      }, t)
                    })
                  )()
                },
              }),
              (0, a.default)(u, 'submit_check', function (e) {
                var r = this
                return (0, i.default)(
                  n.default.mark(function s() {
                    var t, o, u, a, i, l, c, _, m
                    return n.default.wrap(function (s) {
                      while (1)
                        switch ((s.prev = s.next)) {
                          case 0:
                            if (
                              ((t = null),
                              (o =
                                /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/),
                              (u = e.username),
                              (a = e.password),
                              (i = e.nickname),
                              (l = e.user_group),
                              (c = e.email),
                              r.confirm_password,
                              console.log(
                                '表单校验username ,password ,email ,nickname ,user_group',
                                u,
                                a,
                                c,
                                i,
                                l
                              ),
                              u
                                ? u.length > 16 || u.length < 5
                                  ? (t = '账号长度应为5到16个字符之间！')
                                  : a
                                    ? r.is_password &&
                                      (a.length > 16 || a.length < 5)
                                      ? (t = '密码长度应为5到16个字符之间！')
                                      : (i && i.length > 12) || i.length < 2
                                        ? (t =
                                            '昵称长度应为2个字符到12个字符之间')
                                        : c && !o.test(c)
                                          ? (t =
                                              '请输入正确的邮箱地址 例：test@test.com!')
                                          : l || (t = '请选择用户组!')
                                    : (t = '密码不能为空!')
                                : (t = '账号不能为空'),
                              { username: e.username },
                              (_ = Object.assign({}, r.form)),
                              (m =
                                /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/),
                              !_.mobile_phone_number ||
                                m.test(_.mobile_phone_number))
                            ) {
                              s.next = 11
                              break
                            }
                            return s.abrupt('return', '手机号格式错误')
                          case 11:
                            return s.abrupt('return', t)
                          case 12:
                          case 'end':
                            return s.stop()
                        }
                    }, s)
                  })
                )()
              }),
              (0, a.default)(u, 'submit_main', function (e, r) {
                var s = this.url
                if (s)
                  if (this.field_user) {
                    var t = e[this.field_user]
                    if (t) {
                      var o = { method: 'set' }
                      ;(o[this.field_user] = t), (s = this.toUrl(o, s))
                    } else s += 'method=add'
                  } else s += 'method=submit'
                else if (this.url_submit) s = this.url_submit
                else if (this.field_user) {
                  t = e[this.field_user]
                  s = t ? this.url_set_user : this.url_add_user
                }
                if (s) {
                  var u = this
                  this.$post(
                    this.$toUrl(this.query_user, s),
                    e,
                    function (e, s) {
                      e.result
                        ? u.events('submit_after', e, r)
                        : e.error
                          ? u.$toast(e.error.message, 'danger')
                          : u.$toast('服务器连接失败！', 'danger')
                    }
                  )
                }
              }),
              (0, a.default)(u, 'submit_after', function (e, r) {
                var s = Object.assign({}, this.form_user)
                console.log('查询表单form', s), this.get_register(s)
              }),
              (0, a.default)(u, 'get_register', function (e) {
                var r = this,
                  s = ((e = this.form), this.form_user)
                delete s.password,
                  this.$get('~/api/user/get_obj?', s, function (s) {
                    console.log('注册表信息res', s),
                      s.result && s.result.obj
                        ? ((e.user_id = s.result.obj.user_id), r.submit_sub(e))
                        : s.error &&
                          (console.error(s.error),
                          r.$toast(s.error.message, 'error'))
                  })
              }),
              (0, a.default)(u, 'submit_sub', function (r) {
                var s = this
                r['regular_users_id']
                  ? this.$post(
                      '~/api/' +
                        this.group_table +
                        '/set?regular_users_id=' +
                        r['regular_users_id'],
                      r,
                      function (r) {
                        console.log('提交结果：', r),
                          r.result
                            ? (s.$toast('修改成功!', 'success'),
                              e.navigateBack({ delta: 1 }))
                            : r.error &&
                              (console.error(r.error),
                              s.$toast(r.error.message, 'error'))
                      }
                    )
                  : this.$post(
                      '~/api/' + this.group_table + '/add?',
                      r,
                      function (t) {
                        if ((console.log('提交结果：', t), t.result))
                          s.$toast('添加成功!', 'success'),
                            e.navigateBack({ delta: 1 })
                        else if (t.error) {
                          var o = r['user_id']
                          s.$get('~/api/user/del?', { user_id: o }),
                            console.error(t.error),
                            s.$toast(t.error.message, 'error')
                        }
                      }
                    )
              }),
              (0, a.default)(u, 'is_view', function () {
                var e = '管理员' == this.user_group
                return (
                  e ||
                    ((e = this.$check_action('/regular_users/table', 'add')),
                    console.log(
                      e
                        ? '你有表格添加权限视作有添加权限'
                        : '你没有表格添加权限'
                    )),
                  e ||
                    ((e = this.$check_action('/regular_users/table', 'set')),
                    console.log(
                      e
                        ? '你有表格添加权限视作有修改权限'
                        : '你没有表格修改权限'
                    )),
                  e ||
                    ((e = this.$check_action('/regular_users/view', 'add')),
                    console.log(
                      e
                        ? '你有视图添加权限视作有添加权限'
                        : '你没有视图添加权限'
                    )),
                  e ||
                    ((e = this.$check_action('/regular_users/view', 'set')),
                    console.log(
                      e
                        ? '你有视图修改权限视作有修改权限'
                        : '你没有视图修改权限'
                    )),
                  e ||
                    ((e = this.$check_action('/regular_users/view', 'get')),
                    console.log(
                      e
                        ? '你有视图查询权限视作有查询权限'
                        : '你没有视图查询权限'
                    )),
                  console.log(
                    e
                      ? '具有当前页面的查看权，请注意这不代表你有字段的查看权'
                      : '无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行'
                  ),
                  e
                )
              }),
              u),
            created: function () {},
          }
        r.default = c
      }).call(this, s('543d')['default'], s('bc2e')['default'])
    },
  },
  [['b746', 'common/runtime', 'common/vendor']],
])
