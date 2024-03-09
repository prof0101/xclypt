;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['components/common/notice'],
  {
    '2c8d': function (t, n, e) {
      'use strict'
      e.d(n, 'b', function () {
        return o
      }),
        e.d(n, 'c', function () {
          return a
        }),
        e.d(n, 'a', function () {
          return i
        })
      var i = {
          uniNoticeBar: function () {
            return e
              .e('components/uni-notice-bar/uni-notice-bar')
              .then(e.bind(null, '7c08'))
          },
        },
        o = function () {
          var t = this.$createElement
          this._self._c
        },
        a = []
    },
    7073: function (t, n, e) {
      'use strict'
      e.r(n)
      var i = e('a157'),
        o = e.n(i)
      for (var a in i)
        ['default'].indexOf(a) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return i[t]
            })
          })(a)
      n['default'] = o.a
    },
    '990f': function (t, n, e) {},
    a157: function (t, n, e) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.default = void 0)
      var i = {
        props: {
          list: {
            type: Array,
            default: function () {
              return []
            },
          },
          vm: {
            type: Object,
            default: function () {
              return { img: 'img', title: 'title' }
            },
          },
        },
        data: function () {
          return {
            background: ['color1', 'color2', 'color3'],
            indicatorDots: !0,
            autoplay: !0,
            interval: 2e3,
            duration: 500,
          }
        },
        methods: {
          changeIndicatorDots: function (t) {
            this.indicatorDots = !this.indicatorDots
          },
          changeAutoplay: function (t) {
            this.autoplay = !this.autoplay
          },
          intervalChange: function (t) {
            this.interval = t.target.value
          },
          durationChange: function (t) {
            this.duration = t.target.value
          },
        },
      }
      n.default = i
    },
    a9fc: function (t, n, e) {
      'use strict'
      var i = e('990f'),
        o = e.n(i)
      o.a
    },
    b9a1: function (t, n, e) {
      'use strict'
      e.r(n)
      var i = e('2c8d'),
        o = e('7073')
      for (var a in o)
        ['default'].indexOf(a) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return o[t]
            })
          })(a)
      e('a9fc')
      var u = e('f0c5'),
        r = Object(u['a'])(
          o['default'],
          i['b'],
          i['c'],
          !1,
          null,
          'dc81ced4',
          null,
          !1,
          i['a'],
          void 0
        )
      n['default'] = r.exports
    },
  },
])
;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  'components/common/notice-create-component',
  {
    'components/common/notice-create-component': function (
      module,
      exports,
      __webpack_require__
    ) {
      __webpack_require__('543d')['createComponent'](
        __webpack_require__('b9a1')
      )
    },
  },
  [['components/common/notice-create-component']],
])
