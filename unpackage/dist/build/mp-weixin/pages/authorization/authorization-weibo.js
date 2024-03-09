;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/authorization/authorization-weibo'],
  {
    '09bd': function (n, t, e) {
      'use strict'
      var o = e('97bf'),
        u = e.n(o)
      u.a
    },
    '0a8f': function (n, t, e) {
      'use strict'
      e.r(t)
      var o = e('a236'),
        u = e.n(o)
      for (var c in o)
        ['default'].indexOf(c) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return o[n]
            })
          })(c)
      t['default'] = u.a
    },
    7682: function (n, t, e) {
      'use strict'
      ;(function (n, t) {
        var o = e('4ea4')
        e('e411')
        o(e('66fd'))
        var u = o(e('fde0'))
        ;(n.__webpack_require_UNI_MP_PLUGIN__ = e), t(u.default)
      }).call(this, e('bc2e')['default'], e('543d')['createPage'])
    },
    '97bf': function (n, t, e) {},
    a236: function (n, t, e) {
      'use strict'
      ;(function (n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = void 0)
        var e = {
          data: function () {
            return { titem: '', accname: '', Account: 0, authorization: !1 }
          },
          onReady: function () {},
          methods: {
            open: function () {
              this.$refs.popup.open('center')
            },
            close: function () {
              this.$refs.popup.close()
            },
            aut: function () {
              ;(this.authorization = !0),
                n.reLaunch({ url: '../account/login' })
            },
            returns: function () {
              n.navigateBack({})
            },
          },
          onLoad: function (t) {
            ;(this.Account = t.id),
              console.log(this.Account),
              3 == this.Account
                ? ((this.titem = '你同意将以下信息授权给微博'),
                  (this.accname = '微博账号'))
                : n.navigateBack({})
          },
        }
        t.default = e
      }).call(this, e('543d')['default'])
    },
    edcb: function (n, t, e) {
      'use strict'
      e.d(t, 'b', function () {
        return u
      }),
        e.d(t, 'c', function () {
          return c
        }),
        e.d(t, 'a', function () {
          return o
        })
      var o = {
          uniPopup: function () {
            return Promise.all([
              e.e('common/vendor'),
              e.e('components/uni-popup/uni-popup'),
            ]).then(e.bind(null, '800b'))
          },
        },
        u = function () {
          var n = this.$createElement
          this._self._c
        },
        c = []
    },
    fde0: function (n, t, e) {
      'use strict'
      e.r(t)
      var o = e('edcb'),
        u = e('0a8f')
      for (var c in u)
        ['default'].indexOf(c) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return u[n]
            })
          })(c)
      e('09bd')
      var i = e('f0c5'),
        a = Object(i['a'])(
          u['default'],
          o['b'],
          o['c'],
          !1,
          null,
          '3db7077c',
          null,
          !1,
          o['a'],
          void 0
        )
      t['default'] = a.exports
    },
  },
  [['7682', 'common/runtime', 'common/vendor']],
])
