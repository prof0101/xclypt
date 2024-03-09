;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['components/common/slide'],
  {
    '1da4': function (t, n, i) {},
    9125: function (t, n, i) {
      'use strict'
      i.d(n, 'b', function () {
        return o
      }),
        i.d(n, 'c', function () {
          return a
        }),
        i.d(n, 'a', function () {})
      var o = function () {
          var t = this,
            n = t.$createElement,
            i =
              (t._self._c,
              t.__map(t.list, function (n, i) {
                var o = t.__get_orig(n),
                  a = n[t.vm.img] ? t.$fullImgUrl(n[t.vm.img]) : null
                return { $orig: o, m0: a }
              }))
          t.$mp.data = Object.assign({}, { $root: { l0: i } })
        },
        a = []
    },
    b874: function (t, n, i) {
      'use strict'
      i.r(n)
      var o = i('9125'),
        a = i('e71f')
      for (var e in a)
        ['default'].indexOf(e) < 0 &&
          (function (t) {
            i.d(n, t, function () {
              return a[t]
            })
          })(e)
      i('ffb0')
      var r = i('f0c5'),
        u = Object(r['a'])(
          a['default'],
          o['b'],
          o['c'],
          !1,
          null,
          '1fc439f1',
          null,
          !1,
          o['a'],
          void 0
        )
      n['default'] = u.exports
    },
    cc44: function (t, n, i) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.default = void 0)
      var o = {
        name: 'SwiperImg',
        props: {
          show_title: { type: String, default: '' },
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
            indicatorColor: 'rgba(0, 0, 0, .3)',
            indicatorActiveColor: '#fff',
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
      n.default = o
    },
    e71f: function (t, n, i) {
      'use strict'
      i.r(n)
      var o = i('cc44'),
        a = i.n(o)
      for (var e in o)
        ['default'].indexOf(e) < 0 &&
          (function (t) {
            i.d(n, t, function () {
              return o[t]
            })
          })(e)
      n['default'] = a.a
    },
    ffb0: function (t, n, i) {
      'use strict'
      var o = i('1da4'),
        a = i.n(o)
      a.a
    },
  },
])
;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  'components/common/slide-create-component',
  {
    'components/common/slide-create-component': function (
      module,
      exports,
      __webpack_require__
    ) {
      __webpack_require__('543d')['createComponent'](
        __webpack_require__('b874')
      )
    },
  },
  [['components/common/slide-create-component']],
])
