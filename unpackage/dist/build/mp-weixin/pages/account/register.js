;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/account/register'],
  {
    1318: function (e, r, n) {
      'use strict'
      n.d(r, 'b', function () {
        return s
      }),
        n.d(r, 'c', function () {
          return u
        }),
        n.d(r, 'a', function () {
          return t
        })
      var t = {
          uniForms: function () {
            return Promise.all([
              n.e('common/vendor'),
              n.e('components/uni-forms/uni-forms'),
            ]).then(n.bind(null, '2a9e'))
          },
          uniFormsItem: function () {
            return n
              .e('components/uni-forms-item/uni-forms-item')
              .then(n.bind(null, '4423'))
          },
          uniEasyinput: function () {
            return Promise.all([
              n.e('common/vendor'),
              n.e('components/uni-easyinput/uni-easyinput'),
            ]).then(n.bind(null, '4a17'))
          },
          uniIcons: function () {
            return Promise.all([
              n.e('common/vendor'),
              n.e('components/uni-icons/uni-icons'),
            ]).then(n.bind(null, '9972'))
          },
        },
        s = function () {
          var e = this.$createElement
          this._self._c
        },
        u = []
    },
    3879: function (e, r, n) {
      'use strict'
      var t = n('4ea4')
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.default = void 0)
      var s = t(n('2eee')),
        u = t(n('c973')),
        o = t(n('7037')),
        a = t(n('813d')),
        i = {
          components: {
            form_regular_users: function () {
              n.e('components/diy/form_regular_users')
                .then(
                  function () {
                    return resolve(n('cd00'))
                  }.bind(null, n)
                )
                .catch(n.oe)
            },
          },
          mixins: [a.default],
          data: function () {
            return {
              url_submit: '~/api/user/register?',
              form: {
                nickname: '',
                username: '',
                password: '',
                email: '',
                user_group: '',
              },
              form_sub: {},
              confirm_password: '',
              rules: {
                username: {
                  rules: [
                    { required: !0, errorMessage: '请输入用户名' },
                    {
                      minLength: 5,
                      maxLength: 16,
                      errorMessage:
                        '用户名长度在 {minLength} 到 {maxLength} 个字符',
                    },
                  ],
                },
                password: {
                  rules: [
                    { required: !0, errorMessage: '请输入密码' },
                    {
                      minLength: 5,
                      maxLength: 16,
                      errorMessage:
                        '密码长度在 {minLength} 到 {maxLength} 个字符',
                    },
                  ],
                },
                confirm_password: {
                  rules: [
                    { required: !0, errorMessage: '请输入确认密码' },
                    {
                      minLength: 5,
                      maxLength: 16,
                      errorMessage:
                        '确认密码长度在 {minLength} 到 {maxLength} 个字符',
                    },
                  ],
                },
                nickname: {
                  rules: [
                    {
                      minLength: 2,
                      maxLength: 12,
                      errorMessage: '昵称长度为{maxLength} 个字符',
                    },
                  ],
                },
                email: {
                  rules: [
                    { format: 'email', errorMessage: '请输入正确的邮箱地址' },
                  ],
                },
                user_group: {
                  rules: [{ required: !0, errorMessage: '请选择用户组' }],
                },
              },
              list_user_group: [],
            }
          },
          methods: {
            as: function (e, r, n) {
              if (e) {
                var t = !0,
                  s = (0, o.default)(e)
                if (s !== (0, o.default)(r)) t = !1
                else if ('string' === s || 'bool' === s || 'number' === s)
                  t = e === r
                else if (e.constructor == Array) {
                  var u = e.length
                  if (n && u !== r.length) t = !1
                  else
                    for (var a = 0; a < u; a++)
                      if (!this.as(e[a], r[a])) {
                        t = !1
                        break
                      }
                } else if (
                  n &&
                  Object.getOwnPropertyNames(e).length !==
                    Object.getOwnPropertyNames(r).length
                )
                  t = !1
                else
                  for (var i in r)
                    if (!this.as(e[i], r[i], n)) {
                      t = !1
                      break
                    }
                return t
              }
              return !1
            },
            getObj: function (e, r) {
              var n
              if (r)
                for (var t = 0; t < e.length; t++) {
                  var s = e[t]
                  if (this.as(s, r)) {
                    n = s
                    break
                  }
                }
              return n
            },
            getVal: function (e, r, n) {
              var t = this.getObj(e, n)
              return t ? t[r] : null
            },
            handleSubFormChange: function (e) {
              this.form_sub[e.type] = e.value
            },
            submit: function (e, r) {
              var n = this
              return (0, u.default)(
                s.default.mark(function t() {
                  var u, o, a
                  return s.default.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            e || (e = n.form),
                            (u =
                              n.events('submit_before', Object.assign({}, e)) ||
                              e),
                            (t.next = 4),
                            n.events('submit_check', u)
                          )
                        case 4:
                          return (
                            (o = t.sent),
                            console.log('提交前错误信息：', o),
                            o
                              ? n.$toast(o, 'danger')
                              : (a = n.events('submit_main', u, r)),
                            t.abrupt('return', a)
                          )
                        case 8:
                        case 'end':
                          return t.stop()
                      }
                  }, t)
                })
              )()
            },
            submit_before: function (e) {
              e.user_group
            },
            submit_check: function (e) {
              var r = this
              return (0, u.default)(
                s.default.mark(function n() {
                  var t, u, o, a, i, l, c, f, m, g, d, h
                  return s.default.wrap(function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            ((t = null),
                            (u =
                              /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/),
                            (o = e.username),
                            (a = e.password),
                            (i = e.nickname),
                            (l = e.user_group),
                            (c = e.email),
                            (f = r.confirm_password),
                            console.log(
                              '表单校验username ,password ,email ,nickname ,user_group',
                              o,
                              a,
                              c,
                              i,
                              l
                            ),
                            o
                              ? o.length > 16 || o.length < 5
                                ? (t = '账号长度应为5到16个字符之间！')
                                : a
                                  ? a.length > 16 || a.length < 5
                                    ? (t = '密码长度应为5到16个字符之间！')
                                    : (i && i.length > 12) || i.length < 2
                                      ? (t =
                                          '昵称长度应为2个字符到12个字符之间')
                                      : c && !u.test(c)
                                        ? (t =
                                            '请输入正确的邮箱地址 例：test@test.com!')
                                        : a != f
                                          ? (t = '确认密码与密码不一致！')
                                          : l || (t = '请选择用户组!')
                                  : (t = '密码不能为空!')
                              : (t = '账号不能为空'),
                            t || !l)
                          ) {
                            n.next = 12
                            break
                          }
                          if ('普通用户' !== l) {
                            n.next = 12
                            break
                          }
                          if (
                            ((m = Object.assign({}, r.form_sub)),
                            (g =
                              /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/),
                            !m.mobile_phone_number ||
                              g.test(m.mobile_phone_number))
                          ) {
                            n.next = 12
                            break
                          }
                          return n.abrupt('return', '手机号格式错误')
                        case 12:
                          if (((d = { username: e.username }), t)) {
                            n.next = 18
                            break
                          }
                          return (n.next = 16), r.$get('~/api/user/count?', d)
                        case 16:
                          ;(h = n.sent), h.result && (t = '用户已存在!')
                        case 18:
                          return n.abrupt('return', t)
                        case 19:
                        case 'end':
                          return n.stop()
                      }
                  }, n)
                })
              )()
            },
            submit_after: function (e, r) {
              var n = Object.assign({}, this.form)
              delete n.password, console.log('查询表单form', n)
              var t = this.getVal(this.list_user_group, 'source_table', {
                name: n.user_group,
              })
              console.log('关联表:', t),
                t ? this.get_register(n, t) : console.log('用户组没有关联表')
            },
            get_register: function (e, r) {
              var n = this,
                t = this.form_sub
              this.$get('~/api/user/get_obj?', e, function (e) {
                console.log('注册表信息res', e),
                  e.result && e.result.obj
                    ? ((t.user_id = e.result.obj.user_id), n.submit_sub(t, r))
                    : e.error &&
                      (console.error(e.error),
                      n.$toast(e.error.message, 'error'))
              })
            },
            submit_sub: function (e, r) {
              var n = this,
                t = this
              this.$post('~/api/' + r + '/add?', e, function (e) {
                console.log('提交结果res：', e),
                  e.result
                    ? (t.$toast('注册成功!'),
                      setTimeout(function () {
                        n.$nav('/pages/index/index')
                      }, 1e3))
                    : e.error &&
                      (console.error(e.error), n.$toast(e.error.message))
              })
            },
            select_group: function (e) {
              var r = e.target.value,
                n = this.list_user_group
              this.form.user_group = n[r].name
            },
            get_list_user_group: function () {
              var e = this
              this.$get(
                '~/api/user_group/get_list?register_min=2&register_max=3',
                {},
                function (r) {
                  r.result && r.result.list
                    ? (e.list_user_group = r.result.list)
                    : r.error &&
                      (console.error(r.error), e.$toast(r.error.message))
                }
              )
            },
            handleBlur: function (e, r) {
              this.$emit('change', { value: e, type: r })
            },
          },
          onLoad: function () {
            this.get_list_user_group()
          },
          onReady: function () {},
        }
      r.default = i
    },
    9314: function (e, r, n) {
      'use strict'
      var t = n('f6aa'),
        s = n.n(t)
      s.a
    },
    a647: function (e, r, n) {
      'use strict'
      ;(function (e, r) {
        var t = n('4ea4')
        n('e411')
        t(n('66fd'))
        var s = t(n('ad1b'))
        ;(e.__webpack_require_UNI_MP_PLUGIN__ = n), r(s.default)
      }).call(this, n('bc2e')['default'], n('543d')['createPage'])
    },
    a6c7: function (e, r, n) {
      'use strict'
      n.r(r)
      var t = n('3879'),
        s = n.n(t)
      for (var u in t)
        ['default'].indexOf(u) < 0 &&
          (function (e) {
            n.d(r, e, function () {
              return t[e]
            })
          })(u)
      r['default'] = s.a
    },
    ad1b: function (e, r, n) {
      'use strict'
      n.r(r)
      var t = n('1318'),
        s = n('a6c7')
      for (var u in s)
        ['default'].indexOf(u) < 0 &&
          (function (e) {
            n.d(r, e, function () {
              return s[e]
            })
          })(u)
      n('9314')
      var o = n('f0c5'),
        a = Object(o['a'])(
          s['default'],
          t['b'],
          t['c'],
          !1,
          null,
          null,
          null,
          !1,
          t['a'],
          void 0
        )
      r['default'] = a.exports
    },
    f6aa: function (e, r, n) {},
  },
  [['a647', 'common/runtime', 'common/vendor']],
])
