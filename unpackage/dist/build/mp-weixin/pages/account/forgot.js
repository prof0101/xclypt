;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/account/forgot'],
  {
    '5a5c': function (e, r, n) {
      'use strict'
      ;(function (e) {
        Object.defineProperty(r, '__esModule', { value: !0 }),
          (r.default = void 0)
        var n = {
          data: function () {
            return {
              form: { username: '', password: '', email: '', code: '' },
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
                code: {
                  rules: [
                    { required: !0, errorMessage: '请输入验证码' },
                    {
                      minLength: 1,
                      maxLength: 4,
                      errorMessage: '验证码长度为{maxLength} 个字符',
                    },
                  ],
                },
                email: {
                  rules: [
                    { format: 'email', errorMessage: '请输入正确的邮箱地址' },
                  ],
                },
              },
            }
          },
          onLoad: function () {},
          onReady: function () {},
          methods: {
            get_code: function () {
              for (
                var e = Math.floor(9999 * Math.random()), r = e.length;
                r < 4;
                r++
              )
                e = '0' + e
              this.form.code = e.toString()
            },
            forgot: function () {
              var e = this,
                r = Object.assign({}, this.form)
              r.password === r.confirm_password
                ? this.$post('~/api/user/forget_password?', r, function (r) {
                    if (r.result) {
                      var n = e.$redirect()
                      e.$nav(n)
                    } else r.error && e.$toast(r.error.message, 'error')
                  })
                : this.$toast('两次输入密码不一致！', 'error')
            },
            resetForm: function () {
              this.$refs.form.resetFields()
            },
            navBack: function () {
              e.navigateBack()
            },
          },
        }
        r.default = n
      }).call(this, n('543d')['default'])
    },
    '7b12': function (e, r, n) {
      'use strict'
      n.r(r)
      var t = n('5a5c'),
        a = n.n(t)
      for (var o in t)
        ['default'].indexOf(o) < 0 &&
          (function (e) {
            n.d(r, e, function () {
              return t[e]
            })
          })(o)
      r['default'] = a.a
    },
    8704: function (e, r, n) {
      'use strict'
      ;(function (e, r) {
        var t = n('4ea4')
        n('e411')
        t(n('66fd'))
        var a = t(n('a0e7'))
        ;(e.__webpack_require_UNI_MP_PLUGIN__ = n), r(a.default)
      }).call(this, n('bc2e')['default'], n('543d')['createPage'])
    },
    a0e7: function (e, r, n) {
      'use strict'
      n.r(r)
      var t = n('f8f0'),
        a = n('7b12')
      for (var o in a)
        ['default'].indexOf(o) < 0 &&
          (function (e) {
            n.d(r, e, function () {
              return a[e]
            })
          })(o)
      n('d012')
      var s = n('f0c5'),
        i = Object(s['a'])(
          a['default'],
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
      r['default'] = i.exports
    },
    c27a: function (e, r, n) {},
    d012: function (e, r, n) {
      'use strict'
      var t = n('c27a'),
        a = n.n(t)
      a.a
    },
    f8f0: function (e, r, n) {
      'use strict'
      n.d(r, 'b', function () {
        return t
      }),
        n.d(r, 'c', function () {
          return a
        }),
        n.d(r, 'a', function () {})
      var t = function () {
          var e = this.$createElement
          this._self._c
        },
        a = []
    },
  },
  [['8704', 'common/runtime', 'common/vendor']],
])
