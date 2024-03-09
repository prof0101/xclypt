;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['components/uni-th/uni-th'],
  {
    '1ffd': function (t, n, e) {
      'use strict'
      e.r(n)
      var i = e('825e'),
        r = e.n(i)
      for (var u in i)
        ['default'].indexOf(u) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return i[t]
            })
          })(u)
      n['default'] = r.a
    },
    '2cd3': function (t, n, e) {
      'use strict'
      var i = e('8a7e'),
        r = e.n(i)
      r.a
    },
    '825e': function (t, n, e) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.default = void 0)
      var i = {
        name: 'uniTh',
        options: { virtualHost: !0 },
        props: {
          width: { type: [String, Number], default: '' },
          align: { type: String, default: 'left' },
        },
        data: function () {
          return { border: !1 }
        },
        created: function () {
          ;(this.root = this.getTable('uniTable')),
            (this.rootTr = this.getTable('uniTr')),
            this.rootTr.minWidthUpdate(this.width ? this.width : 140),
            (this.border = this.root.border)
        },
        methods: {
          getTable: function (t) {
            var n = this.$parent,
              e = n.$options.name
            while (e !== t) {
              if (((n = n.$parent), !n)) return !1
              e = n.$options.name
            }
            return n
          },
        },
      }
      n.default = i
    },
    8701: function (t, n, e) {
      'use strict'
      e.d(n, 'b', function () {
        return i
      }),
        e.d(n, 'c', function () {
          return r
        }),
        e.d(n, 'a', function () {})
      var i = function () {
          var t = this.$createElement
          this._self._c
        },
        r = []
    },
    '8a7e': function (t, n, e) {},
    a7eb: function (t, n, e) {
      'use strict'
      e.r(n)
      var i = e('8701'),
        r = e('1ffd')
      for (var u in r)
        ['default'].indexOf(u) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return r[t]
            })
          })(u)
      e('2cd3')
      var o = e('f0c5'),
        a = Object(o['a'])(
          r['default'],
          i['b'],
          i['c'],
          !1,
          null,
          null,
          null,
          !1,
          i['a'],
          void 0
        )
      n['default'] = a.exports
    },
  },
])
;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  'components/uni-th/uni-th-create-component',
  {
    'components/uni-th/uni-th-create-component': function (
      module,
      exports,
      __webpack_require__
    ) {
      __webpack_require__('543d')['createComponent'](
        __webpack_require__('a7eb')
      )
    },
  },
  [['components/uni-th/uni-th-create-component']],
])
