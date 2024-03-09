;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/comment/edit'],
  {
    '4ba3': function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('cc43'),
        r = n('db62')
      for (var i in r)
        ['default'].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return r[e]
            })
          })(i)
      n('d98a')
      var c = n('f0c5'),
        a = Object(c['a'])(
          r['default'],
          o['b'],
          o['c'],
          !1,
          null,
          '5f4e7ce6',
          null,
          !1,
          o['a'],
          void 0
        )
      t['default'] = a.exports
    },
    6308: function (e, t, n) {},
    '65b8': function (e, t, n) {
      'use strict'
      ;(function (e, t) {
        var o = n('4ea4')
        n('e411')
        o(n('66fd'))
        var r = o(n('4ba3'))
        ;(e.__webpack_require_UNI_MP_PLUGIN__ = n), t(r.default)
      }).call(this, n('bc2e')['default'], n('543d')['createPage'])
    },
    7629: function (e, t, n) {
      'use strict'
      ;(function (e) {
        var o = n('4ea4')
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = void 0)
        var r,
          i = o(n('2eee')),
          c = o(n('c973')),
          a = o(n('813d')),
          s = {
            mixins: [a.default],
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
                oauth: { signIn: !0, user_group: [] },
                form: { content: 'ceshi' },
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
                query: { nickname: '' },
                eValue: '',
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
                e.hideKeyboard()
              },
              confirm: function (e) {
                var t = this
                return (0, c.default)(
                  i.default.mark(function n() {
                    return i.default.wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (t.isEdit = !1), (n.next = 3), e.hex
                          case 3:
                            ;(t.fontColor = n.sent),
                              t.onStatusChange({ detail: { color: e.hex } }),
                              t.$forceUpdate()
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
                var t = this
                e.createSelectorQuery()
                  .select('#editor')
                  .context(function (e) {
                    console.log(e), (t.editorCtx = e.context)
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
              format: function (e) {
                var t = e.target.dataset,
                  n = t.name,
                  o = t.value
                n && this.editorCtx.format(n, o)
              },
              onStatusChange: function (e) {
                this.formats = e.detail
              },
              insertDivider: function () {
                this.editorCtx.insertDivider({
                  success: function () {
                    console.log('insert divider success')
                  },
                })
              },
              store: function (t) {
                this.editorCtx.getContents({
                  success: function (n) {
                    1 == t.currentTarget.id
                      ? console.log('保存内容:', n.html)
                      : e.navigateTo({
                          url: '../preview/preview?rich='.concat(
                            encodeURIComponent(n.html)
                          ),
                        })
                  },
                })
              },
              clear_: function () {
                this.editorCtx.clear({
                  success: function (e) {
                    console.log('clear success')
                  },
                })
              },
              removeFormat: function () {
                this.editorCtx.removeFormat()
              },
              insertDate: function () {
                var e = new Date(),
                  t = ''
                    .concat(e.getFullYear(), '/')
                    .concat(e.getMonth() + 1, '/')
                    .concat(e.getDate())
                this.editorCtx.insertText({ text: t })
              },
              insertImage: function () {
                var t = this
                e.chooseImage({
                  count: 1,
                  success: function (e) {
                    t.blobToDataURI(e.tempFiles[0], function (e) {
                      r.editorCtx.insertImage({
                        src: e,
                        data: { id: 'abcd', role: 'god' },
                        width: '80%',
                        success: function () {
                          console.log('insert image success')
                        },
                      })
                    })
                  },
                })
              },
              blobToDataURI: function (e, t) {
                console.log(e)
                var n = new FileReader()
                n.readAsDataURL(e),
                  (n.onload = function (e) {
                    t(e.target.result)
                  })
              },
              publish: function () {
                var e = this
                return (0, c.default)(
                  i.default.mark(function t() {
                    var n, o, r, c
                    return i.default.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (n = e.eValue),
                              (o =
                                getCurrentPages()[
                                  getCurrentPages().length - 1
                                ]),
                              (r = Object.assign({}, o.options, {
                                user_id: e.$store.state.user.user_id,
                                nickname: e.$store.state.user.nickname,
                                avatar: e.$store.state.user.avatar,
                                content: n,
                              })),
                              (t.next = 5),
                              e.filterSensitiveWords(r.content)
                            )
                          case 5:
                            if (((c = t.sent), !(c.length > 0))) {
                              t.next = 9
                              break
                            }
                            return (
                              e.$toast('当前消息中包含敏感词: ' + c.join(',')),
                              t.abrupt('return')
                            )
                          case 9:
                            e.$post('~/api/comment/add?', r, function (t) {
                              if (t.result) {
                                e.$toast(t.result, 'success'),
                                  console.log(t.result, 'success')
                                var n = e.$redirect()
                                e.$nav(n)
                              } else
                                t.error &&
                                  (console.log(t.error.message, 'error'),
                                  e.$toast(t.error.message, 'error'))
                            })
                          case 10:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )()
              },
            },
          }
        t.default = s
      }).call(this, n('543d')['default'])
    },
    cc43: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return r
      }),
        n.d(t, 'c', function () {
          return i
        }),
        n.d(t, 'a', function () {
          return o
        })
      var o = {
          uniEasyinput: function () {
            return Promise.all([
              n.e('common/vendor'),
              n.e('components/uni-easyinput/uni-easyinput'),
            ]).then(n.bind(null, '4a17'))
          },
        },
        r = function () {
          var e = this.$createElement
          this._self._c
        },
        i = []
    },
    d98a: function (e, t, n) {
      'use strict'
      var o = n('6308'),
        r = n.n(o)
      r.a
    },
    db62: function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('7629'),
        r = n.n(o)
      for (var i in o)
        ['default'].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return o[e]
            })
          })(i)
      t['default'] = r.a
    },
  },
  [['65b8', 'common/runtime', 'common/vendor']],
])
