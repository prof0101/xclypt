;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/merchant_users/view'],
  {
    '1ea7': function (e, t, r) {
      'use strict'
      r.r(t)
      var s = r('543a7'),
        n = r('21db')
      for (var o in n)
        ['default'].indexOf(o) < 0 &&
          (function (e) {
            r.d(t, e, function () {
              return n[e]
            })
          })(o)
      r('2bcd')
      var a = r('f0c5'),
        u = Object(a['a'])(
          n['default'],
          s['b'],
          s['c'],
          !1,
          null,
          '6fcefa86',
          null,
          !1,
          s['a'],
          void 0
        )
      t['default'] = u.exports
    },
    '21db': function (e, t, r) {
      'use strict'
      r.r(t)
      var s = r('b075'),
        n = r.n(s)
      for (var o in s)
        ['default'].indexOf(o) < 0 &&
          (function (e) {
            r.d(t, e, function () {
              return s[e]
            })
          })(o)
      t['default'] = n.a
    },
    '2bcd': function (e, t, r) {
      'use strict'
      var s = r('4371'),
        n = r.n(s)
      n.a
    },
    4371: function (e, t, r) {},
    '543a7': function (e, t, r) {
      'use strict'
      r.d(t, 'b', function () {
        return n
      }),
        r.d(t, 'c', function () {
          return o
        }),
        r.d(t, 'a', function () {
          return s
        })
      var s = {
          uniForms: function () {
            return Promise.all([
              r.e('common/vendor'),
              r.e('components/uni-forms/uni-forms'),
            ]).then(r.bind(null, '2a9e'))
          },
          uniFormsItem: function () {
            return r
              .e('components/uni-forms-item/uni-forms-item')
              .then(r.bind(null, '4423'))
          },
          uniIcons: function () {
            return Promise.all([
              r.e('common/vendor'),
              r.e('components/uni-icons/uni-icons'),
            ]).then(r.bind(null, '9972'))
          },
          uniEasyinput: function () {
            return Promise.all([
              r.e('common/vendor'),
              r.e('components/uni-easyinput/uni-easyinput'),
            ]).then(r.bind(null, '4a17'))
          },
          uniDataSelect: function () {
            return Promise.all([
              r.e('common/vendor'),
              r.e('components/uni-data-select/uni-data-select'),
            ]).then(r.bind(null, '1b47'))
          },
        },
        n = function () {
          var e = this,
            t = e.$createElement,
            r = (e._self._c, e.is_view()),
            s =
              r && e.form_user['avatar']
                ? e.$fullUrl(e.form_user['avatar'])
                : null,
            n = r
              ? e.$check_field('get', 'merchant_name') ||
                e.$check_field('add', 'merchant_name') ||
                e.$check_field('set', 'merchant_name')
              : null,
            o =
              r && n
                ? '管理员' === e.user_group ||
                  (e.form['merchant_users_id'] &&
                    e.$check_field('set', 'merchant_name')) ||
                  (!e.form['merchant_users_id'] &&
                    e.$check_field('add', 'merchant_name'))
                : null,
            a = r && n && !o ? e.$check_field('get', 'merchant_name') : null,
            u = r
              ? e.$check_field('get', 'merchant_phone_number') ||
                e.$check_field('add', 'merchant_phone_number') ||
                e.$check_field('set', 'merchant_phone_number')
              : null,
            i =
              r && u
                ? '管理员' === e.user_group ||
                  (e.form['merchant_users_id'] &&
                    e.$check_field('set', 'merchant_phone_number')) ||
                  (!e.form['merchant_users_id'] &&
                    e.$check_field('add', 'merchant_phone_number'))
                : null,
            c =
              r && u && !i
                ? e.$check_field('get', 'merchant_phone_number')
                : null,
            l = r
              ? '管理员' === e.user_group ||
                (e.form['examine_state'] && e.$check_examine()) ||
                (!e.form['examine_state'] && e.$check_examine())
              : null,
            m =
              e.$check_action('/merchant_users/view', 'set') ||
              e.$check_action('/merchant_users/view', 'add') ||
              e.$check_option('/merchant_users/table', 'examine')
          e.$mp.data = Object.assign(
            {},
            {
              $root: {
                m0: r,
                m1: s,
                m2: n,
                m3: o,
                m4: a,
                m5: u,
                m6: i,
                m7: c,
                m8: l,
                m9: m,
              },
            }
          )
        },
        o = []
    },
    b075: function (e, t, r) {
      'use strict'
      ;(function (e, s) {
        var n = r('4ea4')
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = void 0)
        var o,
          a = n(r('2eee')),
          u = n(r('9523')),
          i = n(r('c973')),
          c = n(r('813d')),
          l = {
            mixins: [c.default],
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
                  user_group: '商家用户',
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
                  user_group: '商家用户',
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
                group_table: 'merchant_users',
                is_password: !0,
                field: 'merchant_users_id',
                url_add: '~/api/merchant_users/add?',
                url_set: '~/api/merchant_users/set?',
                url_get_obj: '~/api/merchant_users/get_obj?',
                url_upload: '~/api/merchant_users/upload?',
                merchant_name: null,
                merchant_phone_number: null,
                query: { merchant_users_id: 0 },
                form: {
                  merchant_name: '',
                  merchant_phone_number: '',
                  examine_state: '未审核',
                  user_id: 0,
                  merchant_users_id: 0,
                },
                disabledObj: {
                  merchant_name_isDisabled: !1,
                  merchant_phone_number_isDisabled: !1,
                },
                list_examine_state: [
                  { value: '未审核', text: '未审核' },
                  { value: '已通过', text: '已通过' },
                  { value: '未通过', text: '未通过' },
                ],
              }
            },
            methods:
              ((o = {
                submit_check: function (e) {
                  return null
                },
                changeLog: function (e, t) {
                  this.form[t] = e
                },
                uploadFile_: function (t) {
                  var r = this
                  'mp-weixin' != e.getSystemInfoSync().uniPlatform ||
                  'devtools' == e.getSystemInfoSync().platform
                    ? e.chooseImage({
                        count: 1,
                        success: function (e) {
                          var s = e.tempFilePaths
                          r.successChoose(s[0], t)
                        },
                      })
                    : s.chooseMessageFile({
                        count: 1,
                        success: function (e) {
                          var s = e.tempFiles
                          r.successChoose(s[0].path, t)
                        },
                      })
                },
                successChoose: function (t, r) {
                  var s = this
                  e.uploadFile({
                    url:
                      getApp().globalData.host + '/api/merchant_users/upload',
                    filePath: t,
                    name: 'file',
                    success: function (t) {
                      t.data.error
                        ? e.showToast({
                            title: t.data.error.message,
                            icon: 'none',
                          })
                        : (s[r] = JSON.parse(t.data).result.url)
                    },
                  })
                },
                close_: function (e) {
                  'merchant_name' == e &&
                    (this['merchant_name'] = this.form['merchant_name'] = ''),
                    'merchant_phone_number' == e &&
                      (this['merchant_phone_number'] = this.form[
                        'merchant_phone_number'
                      ] =
                        '')
                },
                submit_: function () {
                  null !== this['merchant_name'] &&
                    (this.form['merchant_name'] = this['merchant_name']),
                    null !== this['merchant_phone_number'] &&
                      (this.form['merchant_phone_number'] =
                        this['merchant_phone_number']),
                    console.log(this.form),
                    this.submit()
                },
                change_file: function (t) {
                  var r = this
                  e.chooseFile({
                    count: 1,
                    sizeType: ['original', 'compressed'],
                    sourceType: ['album'],
                    success: function (s) {
                      var n = s.tempFilePaths,
                        o = e.uploadFile({
                          url: r.$fullUrl('/api/merchant_users/upload?'),
                          filePath: n[0],
                          name: 'file',
                          formData: { i_want_to_customize: 'test' },
                          header: { 'x-auth-token': r.$store.state.user.token },
                          success: function (e) {
                            var s = JSON.parse(e.data).result.url
                            r.form[t] = s
                          },
                        })
                      o.onProgressUpdate(function (e) {
                        ;(r.percent = e.progress),
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
                change_img: function (t) {
                  var r = this
                  ;(r.upload_img_flag = !1),
                    e.chooseImage({
                      count: 1,
                      sizeType: ['original', 'compressed'],
                      sourceType: ['album'],
                      success: function (s) {
                        var n = s.tempFilePaths,
                          o = e.uploadFile({
                            url: r.$fullUrl('/api/merchant_users/upload?'),
                            filePath: n[0],
                            name: 'file',
                            formData: { i_want_to_customize: 'test' },
                            header: {
                              'x-auth-token': r.$store.state.user.token,
                            },
                            success: function (e) {
                              var s = JSON.parse(e.data).result.url
                              r.form[t] = s
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
                get_obj_before: function (t) {
                  var r = e.db.get('form')
                  r &&
                    (delete r.examine_state,
                    delete r.examine_reply,
                    (this.obj = e.push(this.obj, r)),
                    (this.form = e.push(this.form, r)))
                  var s = []
                  for (var n in r) s.push(n)
                  for (var o = 0; o < s.length; o++)
                    this.disabledObj[s[o] + '_isDisabled'] = !0
                  return e.db.del('form'), t
                },
                get_obj_after: function (e, t) {
                  var r = this,
                    s = this.form.user_id
                  this.$get(
                    '~/api/user/get_obj?',
                    { user_id: s },
                    function (e) {
                      if (e.result && e.result.obj) {
                        var t = e.result.obj
                        delete t['create_time'],
                          delete t['login_time'],
                          (r.form_user = t),
                          (r.obj_user = t),
                          (r.is_password = !r.obj_user.password),
                          (r.query_user.user_id = s)
                      } else
                        e.error &&
                          (console.log(e.error),
                          console.log('获取不到相关信息'))
                    }
                  )
                },
                change_avatar: function () {
                  var t = this
                  ;(t.upload_img_flag = !1),
                    e.chooseImage({
                      count: 1,
                      sizeType: ['original', 'compressed'],
                      sourceType: ['album'],
                      success: function (r) {
                        var s = r.tempFilePaths,
                          n = e.uploadFile({
                            url: t.$fullUrl('/api/user/upload?'),
                            filePath: s[0],
                            name: 'file',
                            formData: { i_want_to_customize: 'test' },
                            header: {
                              'x-auth-token': t.$store.state.user.token,
                            },
                            success: function (e) {
                              var r = JSON.parse(e.data).result.url
                              t.form_user.avatar = r
                            },
                          })
                        n.onProgressUpdate(function (e) {
                          ;(t.percent = e.progress),
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
                submit: function (e, t) {
                  var r = this
                  return (0, i.default)(
                    a.default.mark(function s() {
                      var n, o, u
                      return a.default.wrap(function (s) {
                        while (1)
                          switch ((s.prev = s.next)) {
                            case 0:
                              return (
                                e || (e = r.form_user),
                                (n =
                                  r.events(
                                    'submit_before',
                                    Object.assign({}, e)
                                  ) || e),
                                (s.next = 4),
                                r.events('submit_check', n)
                              )
                            case 4:
                              return (
                                (o = s.sent),
                                o
                                  ? r.$toast(o, 'danger')
                                  : (u = r.events('submit_main', n, t)),
                                s.abrupt('return', u)
                              )
                            case 7:
                            case 'end':
                              return s.stop()
                          }
                      }, s)
                    })
                  )()
                },
              }),
              (0, u.default)(o, 'submit_check', function (e) {
                var t = this
                return (0, i.default)(
                  a.default.mark(function r() {
                    var s, n, o, u, i, c, l
                    return a.default.wrap(function (r) {
                      while (1)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (s = null),
                              (n =
                                /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/),
                              (o = e.username),
                              (u = e.password),
                              (i = e.nickname),
                              (c = e.user_group),
                              (l = e.email),
                              t.confirm_password,
                              console.log(
                                '表单校验username ,password ,email ,nickname ,user_group',
                                o,
                                u,
                                l,
                                i,
                                c
                              ),
                              o
                                ? o.length > 16 || o.length < 5
                                  ? (s = '账号长度应为5到16个字符之间！')
                                  : u
                                    ? t.is_password &&
                                      (u.length > 16 || u.length < 5)
                                      ? (s = '密码长度应为5到16个字符之间！')
                                      : (i && i.length > 12) || i.length < 2
                                        ? (s =
                                            '昵称长度应为2个字符到12个字符之间')
                                        : l && !n.test(l)
                                          ? (s =
                                              '请输入正确的邮箱地址 例：test@test.com!')
                                          : c || (s = '请选择用户组!')
                                    : (s = '密码不能为空!')
                                : (s = '账号不能为空'),
                              { username: e.username },
                              Object.assign({}, t.form),
                              r.abrupt('return', s)
                            )
                          case 9:
                          case 'end':
                            return r.stop()
                        }
                    }, r)
                  })
                )()
              }),
              (0, u.default)(o, 'submit_main', function (e, t) {
                var r = this.url
                if (r)
                  if (this.field_user) {
                    var s = e[this.field_user]
                    if (s) {
                      var n = { method: 'set' }
                      ;(n[this.field_user] = s), (r = this.toUrl(n, r))
                    } else r += 'method=add'
                  } else r += 'method=submit'
                else if (this.url_submit) r = this.url_submit
                else if (this.field_user) {
                  s = e[this.field_user]
                  r = s ? this.url_set_user : this.url_add_user
                }
                if (r) {
                  var o = this
                  this.$post(
                    this.$toUrl(this.query_user, r),
                    e,
                    function (e, r) {
                      e.result
                        ? o.events('submit_after', e, t)
                        : e.error
                          ? o.$toast(e.error.message, 'danger')
                          : o.$toast('服务器连接失败！', 'danger')
                    }
                  )
                }
              }),
              (0, u.default)(o, 'submit_after', function (e, t) {
                var r = Object.assign({}, this.form_user)
                console.log('查询表单form', r), this.get_register(r)
              }),
              (0, u.default)(o, 'get_register', function (e) {
                var t = this,
                  r = ((e = this.form), this.form_user)
                delete r.password,
                  this.$get('~/api/user/get_obj?', r, function (r) {
                    console.log('注册表信息res', r),
                      r.result && r.result.obj
                        ? ((e.user_id = r.result.obj.user_id), t.submit_sub(e))
                        : r.error &&
                          (console.error(r.error),
                          t.$toast(r.error.message, 'error'))
                  })
              }),
              (0, u.default)(o, 'submit_sub', function (t) {
                var r = this
                t['merchant_users_id']
                  ? this.$post(
                      '~/api/' +
                        this.group_table +
                        '/set?merchant_users_id=' +
                        t['merchant_users_id'],
                      t,
                      function (t) {
                        console.log('提交结果：', t),
                          t.result
                            ? (r.$toast('修改成功!', 'success'),
                              e.navigateBack({ delta: 1 }))
                            : t.error &&
                              (console.error(t.error),
                              r.$toast(t.error.message, 'error'))
                      }
                    )
                  : this.$post(
                      '~/api/' + this.group_table + '/add?',
                      t,
                      function (s) {
                        if ((console.log('提交结果：', s), s.result))
                          r.$toast('添加成功!', 'success'),
                            e.navigateBack({ delta: 1 })
                        else if (s.error) {
                          var n = t['user_id']
                          r.$get('~/api/user/del?', { user_id: n }),
                            console.error(s.error),
                            r.$toast(s.error.message, 'error')
                        }
                      }
                    )
              }),
              (0, u.default)(o, 'is_view', function () {
                var e = '管理员' == this.user_group
                return (
                  e ||
                    ((e = this.$check_action('/merchant_users/table', 'add')),
                    console.log(
                      e
                        ? '你有表格添加权限视作有添加权限'
                        : '你没有表格添加权限'
                    )),
                  e ||
                    ((e = this.$check_action('/merchant_users/table', 'set')),
                    console.log(
                      e
                        ? '你有表格添加权限视作有修改权限'
                        : '你没有表格修改权限'
                    )),
                  e ||
                    ((e = this.$check_action('/merchant_users/view', 'add')),
                    console.log(
                      e
                        ? '你有视图添加权限视作有添加权限'
                        : '你没有视图添加权限'
                    )),
                  e ||
                    ((e = this.$check_action('/merchant_users/view', 'set')),
                    console.log(
                      e
                        ? '你有视图修改权限视作有修改权限'
                        : '你没有视图修改权限'
                    )),
                  e ||
                    ((e = this.$check_action('/merchant_users/view', 'get')),
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
              o),
            created: function () {},
          }
        t.default = l
      }).call(this, r('543d')['default'], r('bc2e')['default'])
    },
    ff7d: function (e, t, r) {
      'use strict'
      ;(function (e, t) {
        var s = r('4ea4')
        r('e411')
        s(r('66fd'))
        var n = s(r('1ea7'))
        ;(e.__webpack_require_UNI_MP_PLUGIN__ = r), t(n.default)
      }).call(this, r('bc2e')['default'], r('543d')['createPage'])
    },
  },
  [['ff7d', 'common/runtime', 'common/vendor']],
])
