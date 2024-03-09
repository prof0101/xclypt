;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/account/login'],
  {
    '4f30': function (e, n, r) {
      'use strict'
      r.r(n)
      var t = r('833b'),
        o = r.n(t)
      for (var s in t)
        ['default'].indexOf(s) < 0 &&
          (function (e) {
            r.d(n, e, function () {
              return t[e]
            })
          })(s)
      n['default'] = o.a
    },
    '50ce': function (e, n, r) {
      'use strict'
      ;(function (e, n) {
        var t = r('4ea4')
        r('e411')
        t(r('66fd'))
        var o = t(r('9e8d'))
        ;(e.__webpack_require_UNI_MP_PLUGIN__ = r), n(o.default)
      }).call(this, r('bc2e')['default'], r('543d')['createPage'])
    },
    '6c0d': function (e, n, r) {
      'use strict'
      r.d(n, 'b', function () {
        return t
      }),
        r.d(n, 'c', function () {
          return o
        }),
        r.d(n, 'a', function () {})
      var t = function () {
          var e = this.$createElement
          this._self._c
        },
        o = []
    },
    '833b': function (e, n, r) {
      'use strict'
      ;(function (e) {
        var t = r('4ea4')
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.default = void 0)
        var o = t(r('2eee')),
          s = t(r('c973')),
          i = t(r('813d')),
          a = t(r('8bdc')),
          u = {
            mixins: [i.default],
            data: function () {
              return {
                logining: !1,
                wx_open: a.default,
                form: { username: '', password: '' },
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
                },
              }
            },
            methods: {
              login: function () {
                var n = this
                this.logining = !0
                var r = Object.assign({}, this.form)
                this.$post('~/api/user/login?', r, function (r) {
                  if (r.result && r.result.obj) {
                    var t = r.result.obj
                    e.db.set('token', t.token),
                      n.$store.commit('user_set', t),
                      n.$get_auth(n.user.user_group),
                      n.$nav('/pages/index/index')
                  } else r.error && n.$toast(r.error.message, 'error')
                  n.logining = !1
                })
              },
              resetForm: function () {
                this.$refs.form.resetFields()
              },
              getUserInfo: function () {
                var n = this,
                  r = this
                e.showLoading({ title: '加载中' }),
                  e.getUserProfile({
                    desc: '登录后可同步数据',
                    success: (function () {
                      var t = (0, s.default)(
                        o.default.mark(function t(s) {
                          return o.default.wrap(function (t) {
                            while (1)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  ;(r.nickName = s.userInfo.nickName),
                                    (r.avatarUrl = s.userInfo.avatarUrl),
                                    e.login({
                                      provider: 'weixin',
                                      success: function (t) {
                                        if (
                                          (console.log('res-login', t),
                                          (r.code = t.code),
                                          'login:ok' == t.errMsg)
                                        ) {
                                          var o = {
                                            code: r.code,
                                            nickname: r.nickName,
                                            avatar: r.avatarUrl,
                                          }
                                          r.$get(
                                            'https://api.weixin.qq.com/sns/jscode2session',
                                            {
                                              appid: a.default.appid,
                                              secret: a.default.secret,
                                              js_code: o.code,
                                              grant_type: 'authorization_code',
                                            },
                                            function (t) {
                                              console.log(t),
                                                t.openid
                                                  ? r.$post(
                                                      '~/api/user/open_id_login?',
                                                      {
                                                        open_id: t.openid,
                                                        username:
                                                          r.form.username,
                                                        password:
                                                          r.form.password,
                                                      },
                                                      function (t) {
                                                        if (
                                                          t.result &&
                                                          t.result.obj
                                                        ) {
                                                          var o = t.result.obj
                                                          e.db.set(
                                                            'token',
                                                            o.token
                                                          ),
                                                            r.$store.commit(
                                                              'user_set',
                                                              o
                                                            ),
                                                            r.$get_auth(
                                                              n.user.user_group
                                                            ),
                                                            r.$nav(
                                                              '/pages/index/index'
                                                            )
                                                        } else
                                                          t.error &&
                                                            n.$toast(
                                                              t.error.message,
                                                              'error'
                                                            )
                                                      }
                                                    )
                                                  : e.showToast({
                                                      icon: 'none',
                                                      title:
                                                        '获取用户信息失败！',
                                                    })
                                            }
                                          )
                                        }
                                      },
                                    })
                                case 3:
                                case 'end':
                                  return t.stop()
                              }
                          }, t)
                        })
                      )
                      return function (e) {
                        return t.apply(this, arguments)
                      }
                    })(),
                    fail: function () {
                      e.showToast({
                        title: '授权已取消',
                        icon: 'error',
                        mask: !0,
                      })
                    },
                    complete: function () {
                      e.hideLoading()
                    },
                  })
              },
            },
            onBackPress: function () {
              var e = this.user.user_id
              return (null == e || e < 1) && !0, !1
            },
          }
        n.default = u
      }).call(this, r('543d')['default'])
    },
    '914f': function (e, n, r) {
      'use strict'
      var t = r('e895'),
        o = r.n(t)
      o.a
    },
    '9e8d': function (e, n, r) {
      'use strict'
      r.r(n)
      var t = r('6c0d'),
        o = r('4f30')
      for (var s in o)
        ['default'].indexOf(s) < 0 &&
          (function (e) {
            r.d(n, e, function () {
              return o[e]
            })
          })(s)
      r('914f')
      var i = r('f0c5'),
        a = Object(i['a'])(
          o['default'],
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
      n['default'] = a.exports
    },
    e895: function (e, n, r) {},
  },
  [['50ce', 'common/runtime', 'common/vendor']],
])
