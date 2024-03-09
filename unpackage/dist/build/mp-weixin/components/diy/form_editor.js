;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['components/diy/form_editor'],
  {
    '2bef': function (t, e, n) {
      'use strict'
      n.r(e)
      var o = n('45e0'),
        r = n('49d5')
      for (var i in r)
        ['default'].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t]
            })
          })(i)
      n('b8c9')
      var c = n('f0c5'),
        s = Object(c['a'])(
          r['default'],
          o['b'],
          o['c'],
          !1,
          null,
          null,
          null,
          !1,
          o['a'],
          void 0
        )
      e['default'] = s.exports
    },
    '45e0': function (t, e, n) {
      'use strict'
      n.d(e, 'b', function () {
        return o
      }),
        n.d(e, 'c', function () {
          return r
        }),
        n.d(e, 'a', function () {})
      var o = function () {
          var t = this.$createElement
          this._self._c
        },
        r = []
    },
    '49d5': function (t, e, n) {
      'use strict'
      n.r(e)
      var o = n('c966'),
        r = n.n(o)
      for (var i in o)
        ['default'].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t]
            })
          })(i)
      e['default'] = r.a
    },
    b8c9: function (t, e, n) {
      'use strict'
      var o = n('ecce'),
        r = n.n(o)
      r.a
    },
    c966: function (t, e, n) {
      'use strict'
      ;(function (t) {
        var o = n('4ea4')
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = void 0)
        var r,
          i = o(n('2eee')),
          c = o(n('c973')),
          s = {
            components: {
              't-color-picker': function () {
                n.e('components/diy/t-color-picker')
                  .then(
                    function () {
                      return resolve(n('955b'))
                    }.bind(null, n)
                  )
                  .catch(n.oe)
              },
            },
            data: function () {
              return {
                color: { r: 255, g: 0, b: 0, a: 0.6 },
                isEdit: !1,
                fontColor: '#000',
                formats: {},
                readOnly: !1,
                placeholder: '开始输入...',
                editorHeight: 300,
                keyboardHeight: 0,
                isIOS: !1,
                content: '',
                editoValue: '',
              }
            },
            onLoad: function () {
              r = this
            },
            methods: {
              cancel: function () {
                this.isEdit = !1
              },
              open: function () {
                this.$refs.colorPicker.open(), (this.isEdit = !0)
              },
              hideKey: function () {
                t.hideKeyboard()
              },
              confirm: function (t) {
                var e = this
                return (0, c.default)(
                  i.default.mark(function n() {
                    return i.default.wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (e.isEdit = !1), (n.next = 3), t.hex
                          case 3:
                            ;(e.fontColor = n.sent),
                              e.onStatusChange({ detail: { color: t.hex } }),
                              e.$forceUpdate()
                          case 6:
                          case 'end':
                            return n.stop()
                        }
                    }, n)
                  })
                )()
              },
              readOnlyChange: function () {
                this.readOnly = !this.readOnly
              },
              onEditorReady: function () {
                var e = this
                t.createSelectorQuery()
                  .select('#editor')
                  .context(function (t) {
                    console.log(t), (e.editorCtx = t.context)
                  })
                  .exec()
              },
              undo: function () {
                this.editorCtx.undo()
              },
              redo: function () {
                this.editorCtx.redo()
              },
              blur: function () {
                this.editorCtx.blur()
              },
              format: function (t) {
                var e = t.target.dataset,
                  n = e.name,
                  o = e.value
                n && this.editorCtx.format(n, o)
              },
              onStatusChange: function (t) {
                this.formats = t.detail
              },
              insertDivider: function () {
                this.editorCtx.insertDivider({
                  success: function () {
                    console.log('insert divider success')
                  },
                })
              },
              store: function (e) {
                this.editorCtx.getContents({
                  success: function (n) {
                    1 == e.currentTarget.id
                      ? console.log('保存内容:', n.html)
                      : t.navigateTo({
                          url: '../preview/preview?rich='.concat(
                            encodeURIComponent(n.html)
                          ),
                        })
                  },
                })
              },
              clear: function () {
                this.editorCtx.clear({
                  success: function (t) {
                    console.log('clear success')
                  },
                })
              },
              removeFormat: function () {
                this.editorCtx.removeFormat()
              },
              insertDate: function () {
                var t = new Date(),
                  e = ''
                    .concat(t.getFullYear(), '/')
                    .concat(t.getMonth() + 1, '/')
                    .concat(t.getDate())
                this.editorCtx.insertText({ text: e })
              },
              insertImage: function () {
                t.chooseImage({
                  count: 1,
                  success: function (t) {
                    r.editorCtx.insertImage({
                      src: t.tempFilePaths[0],
                      data: { id: 'abcd', role: 'god' },
                      width: '80%',
                      success: function () {
                        console.log('insert image success')
                      },
                    })
                  },
                })
              },
              publish: function () {
                var t = this
                return (0, c.default)(
                  i.default.mark(function e() {
                    var n, o, r, c
                    return i.default.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = new Promise(function (e, n) {
                                t.editorCtx.getContents({
                                  success: function (t) {
                                    e(t)
                                  },
                                  fail: function (t) {
                                    n(t)
                                  },
                                })
                              }).catch(function (t) {})),
                              (e.next = 3),
                              n.then(function (t) {
                                return t.html
                              })
                            )
                          case 3:
                            ;(o = e.sent),
                              (r =
                                getCurrentPages()[
                                  getCurrentPages().length - 1
                                ]),
                              (c = Object.assign({}, r.options, {
                                user_id: t.$store.state.user.user_id,
                                nickname: t.$store.state.user.nickname,
                                avatar: t.$store.state.user.avatar,
                                content: o,
                              })),
                              console.log(c),
                              t.$post('~/api/comment/add?', c, function (e) {
                                if (e.result) {
                                  t.$toast(e.result, 'success')
                                  var n = t.$redirect()
                                  t.$nav(n)
                                } else
                                  e.error && t.$toast(e.error.message, 'error')
                              })
                          case 8:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  })
                )()
              },
            },
          }
        e.default = s
      }).call(this, n('543d')['default'])
    },
    ecce: function (t, e, n) {},
  },
])
;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  'components/diy/form_editor-create-component',
  {
    'components/diy/form_editor-create-component': function (
      module,
      exports,
      __webpack_require__
    ) {
      __webpack_require__('543d')['createComponent'](
        __webpack_require__('2bef')
      )
    },
  },
  [['components/diy/form_editor-create-component']],
])
