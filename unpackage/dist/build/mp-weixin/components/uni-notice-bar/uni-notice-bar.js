;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['components/uni-notice-bar/uni-notice-bar'],
  {
    2755: function (n, t, e) {
      'use strict'
      e.d(t, 'b', function () {
        return o
      }),
        e.d(t, 'c', function () {
          return c
        }),
        e.d(t, 'a', function () {
          return i
        })
      var i = {
          uniIcons: function () {
            return Promise.all([
              e.e('common/vendor'),
              e.e('components/uni-icons/uni-icons'),
            ]).then(e.bind(null, '9972'))
          },
        },
        o = function () {
          var n = this.$createElement
          this._self._c
        },
        c = []
    },
    '343c': function (n, t, e) {
      'use strict'
      ;(function (n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = void 0)
        var i = {
          name: 'UniNoticeBar',
          components: {
            uniIcons: function () {
              Promise.all([
                e.e('common/vendor'),
                e.e('components/uni-icons/uni-icons'),
              ])
                .then(
                  function () {
                    return resolve(e('9972'))
                  }.bind(null, e)
                )
                .catch(e.oe)
            },
          },
          props: {
            text: { type: String, default: '' },
            moreText: { type: String, default: '' },
            backgroundColor: { type: String, default: '#fffbe8' },
            speed: { type: Number, default: 100 },
            color: { type: String, default: '#de8c17' },
            moreColor: { type: String, default: '#999999' },
            single: { type: [Boolean, String], default: !1 },
            scrollable: { type: [Boolean, String], default: !1 },
            showIcon: { type: [Boolean, String], default: !1 },
            showGetMore: { type: [Boolean, String], default: !1 },
            showClose: { type: [Boolean, String], default: !1 },
          },
          data: function () {
            var n = 'Uni_'.concat(Math.ceil(1e6 * Math.random()).toString(36)),
              t = 'Uni_'.concat(Math.ceil(1e6 * Math.random()).toString(36))
            return {
              textWidth: 0,
              boxWidth: 0,
              wrapWidth: '',
              webviewHide: !1,
              elId: n,
              elIdBox: t,
              show: !0,
              animationDuration: 'none',
              animationPlayState: 'paused',
              animationDelay: '0s',
            }
          },
          mounted: function () {
            var n = this
            this.$nextTick(function () {
              n.initSize()
            })
          },
          methods: {
            initSize: function () {
              var t = this
              if (this.scrollable) {
                var e = [],
                  i = new Promise(function (e, i) {
                    n.createSelectorQuery()
                      .in(t)
                      .select('#'.concat(t.elId))
                      .boundingClientRect()
                      .exec(function (n) {
                        ;(t.textWidth = n[0].width), e()
                      })
                  }).catch(function (n) {}),
                  o = new Promise(function (e, i) {
                    n.createSelectorQuery()
                      .in(t)
                      .select('#'.concat(t.elIdBox))
                      .boundingClientRect()
                      .exec(function (n) {
                        ;(t.boxWidth = n[0].width), e()
                      })
                  }).catch(function (n) {})
                e.push(i),
                  e.push(o),
                  Promise.all(e).then(function () {
                    ;(t.animationDuration = ''.concat(
                      t.textWidth / t.speed,
                      's'
                    )),
                      (t.animationDelay = '-'.concat(
                        t.boxWidth / t.speed,
                        's'
                      )),
                      setTimeout(function () {
                        t.animationPlayState = 'running'
                      }, 1e3)
                  })
              }
            },
            loopAnimation: function () {},
            clickMore: function () {
              this.$emit('getmore')
            },
            close: function () {
              ;(this.show = !1), this.$emit('close')
            },
            onClick: function () {
              this.$emit('click')
            },
          },
        }
        t.default = i
      }).call(this, e('543d')['default'])
    },
    '4a97': function (n, t, e) {},
    '62e5': function (n, t, e) {
      'use strict'
      e.r(t)
      var i = e('343c'),
        o = e.n(i)
      for (var c in i)
        ['default'].indexOf(c) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return i[n]
            })
          })(c)
      t['default'] = o.a
    },
    '7c08': function (n, t, e) {
      'use strict'
      e.r(t)
      var i = e('2755'),
        o = e('62e5')
      for (var c in o)
        ['default'].indexOf(c) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return o[n]
            })
          })(c)
      e('b7b0')
      var a = e('f0c5'),
        u = Object(a['a'])(
          o['default'],
          i['b'],
          i['c'],
          !1,
          null,
          'c4f18a3c',
          null,
          !1,
          i['a'],
          void 0
        )
      t['default'] = u.exports
    },
    b7b0: function (n, t, e) {
      'use strict'
      var i = e('4a97'),
        o = e.n(i)
      o.a
    },
  },
])
;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  'components/uni-notice-bar/uni-notice-bar-create-component',
  {
    'components/uni-notice-bar/uni-notice-bar-create-component': function (
      module,
      exports,
      __webpack_require__
    ) {
      __webpack_require__('543d')['createComponent'](
        __webpack_require__('7c08')
      )
    },
  },
  [['components/uni-notice-bar/uni-notice-bar-create-component']],
])
