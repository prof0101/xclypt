;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['common/main'],
  {
    '1e51': function (e, t, o) {
      'use strict'
      ;(function (e, t) {
        var n = o('4ea4'),
          r = n(o('9523'))
        o('e411')
        var c = n(o('66fd')),
          a = n(o('dc0d')),
          u = n(o('9f0f')),
          i = n(o('86cc'))
        function f(e, t) {
          var o = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e)
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              o.push.apply(o, n)
          }
          return o
        }
        ;(e.__webpack_require_UNI_MP_PLUGIN__ = o),
          (c.default.prototype.$store = u.default),
          (c.default.config.productionTip = !1),
          (a.default.mpType = 'app'),
          c.default.use(i.default)
        var s = new c.default(
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? f(Object(o), !0).forEach(function (t) {
                    ;(0, r.default)(e, t, o[t])
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(o)
                    )
                  : f(Object(o)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(o, t)
                      )
                    })
            }
            return e
          })({ store: u.default }, a.default)
        )
        t(s).$mount()
      }).call(this, o('bc2e')['default'], o('543d')['createApp'])
    },
    '6e4a': function (e, t, o) {},
    '701e': function (e, t, o) {
      'use strict'
      o.r(t)
      var n = o('c9db'),
        r = o.n(n)
      for (var c in n)
        ['default'].indexOf(c) < 0 &&
          (function (e) {
            o.d(t, e, function () {
              return n[e]
            })
          })(c)
      t['default'] = r.a
    },
    '72c3': function (e, t, o) {
      'use strict'
      var n = o('6e4a'),
        r = o.n(n)
      r.a
    },
    c9db: function (e, t, o) {
      'use strict'
      ;(function (e) {
        var n = o('4ea4')
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = void 0)
        var r = n(o('a40f')),
          c = {
            onLaunch: function () {},
            onShow: function () {
              console.log('App Show')
              var t = e.db.get('token')
              this.$store.commit('user_set', { token: t })
            },
            onHide: function () {
              console.log('App Hide')
            },
            created: function () {
              'undefined' != typeof sessionStorage &&
                sessionStorage.getItem('store') &&
                this.$store.replaceState(
                  Object.assign(
                    {},
                    this.$store.state,
                    JSON.parse(sessionStorage.getItem('store'))
                  )
                )
            },
            globalData: { host: r.default.slice(0, -1) },
          }
        t.default = c
      }).call(this, o('543d')['default'])
    },
    dc0d: function (e, t, o) {
      'use strict'
      o.r(t)
      var n = o('701e')
      for (var r in n)
        ['default'].indexOf(r) < 0 &&
          (function (e) {
            o.d(t, e, function () {
              return n[e]
            })
          })(r)
      o('72c3')
      var c = o('f0c5'),
        a = Object(c['a'])(
          n['default'],
          void 0,
          void 0,
          !1,
          null,
          null,
          null,
          !1,
          void 0,
          void 0
        )
      t['default'] = a.exports
    },
  },
  [['1e51', 'common/runtime', 'common/vendor']],
])
