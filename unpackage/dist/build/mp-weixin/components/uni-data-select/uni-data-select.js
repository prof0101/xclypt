;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['components/uni-data-select/uni-data-select'],
  {
    '0379': function (t, e, a) {
      'use strict'
      a.d(e, 'b', function () {
        return n
      }),
        a.d(e, 'c', function () {
          return l
        }),
        a.d(e, 'a', function () {
          return i
        })
      var i = {
          uniIcons: function () {
            return Promise.all([
              a.e('common/vendor'),
              a.e('components/uni-icons/uni-icons'),
            ]).then(a.bind(null, '9972'))
          },
        },
        n = function () {
          var t = this,
            e = t.$createElement,
            a =
              (t._self._c,
              t.showSelector ? t.mixinDatacomResData.length : null),
            i =
              t.showSelector && 0 !== a
                ? t.__map(t.mixinDatacomResData, function (e, a) {
                    var i = t.__get_orig(e),
                      n = t.formatItemName(e)
                    return { $orig: i, m0: n }
                  })
                : null
          t.$mp.data = Object.assign({}, { $root: { g0: a, l0: i } })
        },
        l = []
    },
    '0cb8': function (t, e, a) {
      'use strict'
      ;(function (t, a) {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = void 0)
        var i = {
          name: 'uni-stat-select',
          mixins: [t.mixinDatacom || {}],
          data: function () {
            return {
              showSelector: !1,
              current: '',
              mixinDatacomResData: [],
              apps: [],
              channels: [],
            }
          },
          props: {
            localdata: {
              type: Array,
              default: function () {
                return []
              },
            },
            value: { type: [String, Number], default: '' },
            modelValue: { type: [String, Number], default: '' },
            label: { type: String, default: '' },
            placeholder: { type: String, default: '请选择' },
            emptyTips: { type: String, default: '无选项' },
            clear: { type: Boolean, default: !0 },
            defItem: { type: Number, default: 0 },
            disabled: { type: Boolean, default: !1 },
          },
          created: function () {
            ;(this.last = ''.concat(
              this.collection,
              '_last_selected_option_value'
            )),
              this.collection &&
                !this.localdata.length &&
                this.mixinDatacomEasyGet()
          },
          computed: {
            typePlaceholder: function () {
              var t = this.placeholder,
                e = {
                  'opendb-stat-app-versions': '版本',
                  'opendb-app-channels': '渠道',
                  'opendb-app-list': '应用',
                }[this.collection]
              return e ? t + e : t
            },
          },
          watch: {
            localdata: {
              immediate: !0,
              handler: function (t, e) {
                Array.isArray(t) && e !== t && (this.mixinDatacomResData = t)
              },
            },
            value: function () {
              this.initDefVal()
            },
            mixinDatacomResData: {
              immediate: !0,
              handler: function (t) {
                t.length && this.initDefVal()
              },
            },
          },
          methods: {
            initDefVal: function () {
              var t = ''
              if (
                (!this.value && 0 !== this.value) ||
                this.isDisabled(this.value)
              )
                if (
                  (!this.modelValue && 0 !== this.modelValue) ||
                  this.isDisabled(this.modelValue)
                ) {
                  var e
                  if (
                    (this.collection && (e = a.getStorageSync(this.last)),
                    e || 0 === e)
                  )
                    t = e
                  else {
                    var i = ''
                    this.defItem > 0 &&
                      this.defItem < this.mixinDatacomResData.length &&
                      (i = this.mixinDatacomResData[this.defItem - 1].value),
                      (t = i)
                  }
                  this.emit(t)
                } else t = this.modelValue
              else t = this.value
              var n = this.mixinDatacomResData.find(function (e) {
                return e.value === t
              })
              this.current = n ? this.formatItemName(n) : ''
            },
            isDisabled: function (t) {
              var e = !1
              return (
                this.mixinDatacomResData.forEach(function (a) {
                  a.value === t && (e = a.disable)
                }),
                e
              )
            },
            clearVal: function () {
              this.emit(''), this.collection && a.removeStorageSync(this.last)
            },
            change: function (t) {
              t.disable ||
                ((this.showSelector = !1),
                (this.current = this.formatItemName(t)),
                this.emit(t.value))
            },
            emit: function (t) {
              this.$emit('change', t),
                this.$emit('input', t),
                this.$emit('update:modelValue', t),
                this.collection && a.setStorageSync(this.last, t)
            },
            toggleSelector: function () {
              this.disabled || (this.showSelector = !this.showSelector)
            },
            formatItemName: function (t) {
              var e = t.text,
                a = t.value,
                i = t.channel_code
              return (
                (i = i ? '('.concat(i, ')') : ''),
                this.collection.indexOf('app-list') > 0
                  ? ''.concat(e, '(').concat(a, ')')
                  : e || '未命名'.concat(i)
              )
            },
          },
        }
        e.default = i
      }).call(this, a('a9ff')['default'], a('543d')['default'])
    },
    '1b47': function (t, e, a) {
      'use strict'
      a.r(e)
      var i = a('0379'),
        n = a('41fb')
      for (var l in n)
        ['default'].indexOf(l) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t]
            })
          })(l)
      a('777f')
      var o = a('f0c5'),
        c = Object(o['a'])(
          n['default'],
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
      e['default'] = c.exports
    },
    '3f0f': function (t, e, a) {},
    '41fb': function (t, e, a) {
      'use strict'
      a.r(e)
      var i = a('0cb8'),
        n = a.n(i)
      for (var l in i)
        ['default'].indexOf(l) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t]
            })
          })(l)
      e['default'] = n.a
    },
    '777f': function (t, e, a) {
      'use strict'
      var i = a('3f0f'),
        n = a.n(i)
      n.a
    },
  },
])
;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  'components/uni-data-select/uni-data-select-create-component',
  {
    'components/uni-data-select/uni-data-select-create-component': function (
      module,
      exports,
      __webpack_require__
    ) {
      __webpack_require__('543d')['createComponent'](
        __webpack_require__('1b47')
      )
    },
  },
  [['components/uni-data-select/uni-data-select-create-component']],
])
