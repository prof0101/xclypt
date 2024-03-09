;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['components/uni-td/uni-td'],
  {
    3072: function (t, n, e) {
      'use strict'
      e.d(n, 'b', function () {
        return r
      }),
        e.d(n, 'c', function () {
          return i
        }),
        e.d(n, 'a', function () {})
      var r = function () {
          var t = this.$createElement
          this._self._c
        },
        i = []
    },
    '532c': function (t, n, e) {
      'use strict'
      e.r(n)
      var r = e('7798'),
        i = e.n(r)
      for (var u in r)
        ['default'].indexOf(u) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return r[t]
            })
          })(u)
      n['default'] = i.a
    },
    7798: function (t, n, e) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.default = void 0)
      var r = {
        name: 'uniTd',
        options: { virtualHost: !0 },
        props: {
          width: { type: [String, Number], default: '' },
          align: { type: String, default: 'left' },
        },
        data: function () {
          return { border: !1 }
        },
        created: function () {
          ;(this.root = this.getTable()), (this.border = this.root.border)
        },
        methods: {
          getTable: function () {
            var t = this.$parent,
              n = t.$options.name
            while ('uniTable' !== n) {
              if (((t = t.$parent), !t)) return !1
              n = t.$options.name
            }
            return t
          },
        },
      }
      n.default = r
    },
    '98c1': function (t, n, e) {},
    f59a: function (t, n, e) {
      'use strict'
      var r = e('98c1'),
        i = e.n(r)
      i.a
    },
    f802: function (t, n, e) {
      'use strict'
      e.r(n)
      var r = e('3072'),
        i = e('532c')
      for (var u in i)
        ['default'].indexOf(u) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return i[t]
            })
          })(u)
      e('f59a')
      var o = e('f0c5'),
        a = Object(o['a'])(
          i['default'],
          r['b'],
          r['c'],
          !1,
          null,
          null,
          null,
          !1,
          r['a'],
          void 0
        )
      n['default'] = a.exports
    },
  },
])
;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  'components/uni-td/uni-td-create-component',
  {
    'components/uni-td/uni-td-create-component': function (
      module,
      exports,
      __webpack_require__
    ) {
      __webpack_require__('543d')['createComponent'](
        __webpack_require__('f802')
      )
    },
  },
  [['components/uni-td/uni-td-create-component']],
])
