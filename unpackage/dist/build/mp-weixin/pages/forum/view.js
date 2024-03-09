;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/forum/view'],
  {
    3801: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('fd59'),
        u = n.n(r)
      for (var o in r)
        ['default'].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return r[e]
            })
          })(o)
      t['default'] = u.a
    },
    '888e': function (e, t, n) {
      'use strict'
      var r = n('e938'),
        u = n.n(r)
      u.a
    },
    d0dc: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('f710'),
        u = n('3801')
      for (var o in u)
        ['default'].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return u[e]
            })
          })(o)
      n('888e')
      var i = n('f0c5'),
        a = Object(i['a'])(
          u['default'],
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
      t['default'] = a.exports
    },
    e938: function (e, t, n) {},
    ecc7: function (e, t, n) {
      'use strict'
      ;(function (e, t) {
        var r = n('4ea4')
        n('e411')
        r(n('66fd'))
        var u = r(n('d0dc'))
        ;(e.__webpack_require_UNI_MP_PLUGIN__ = n), t(u.default)
      }).call(this, n('bc2e')['default'], n('543d')['createPage'])
    },
    f710: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return u
      }),
        n.d(t, 'c', function () {
          return o
        }),
        n.d(t, 'a', function () {
          return r
        })
      var r = {
          uniForms: function () {
            return Promise.all([
              n.e('common/vendor'),
              n.e('components/uni-forms/uni-forms'),
            ]).then(n.bind(null, '2a9e'))
          },
          uniFormsItem: function () {
            return n
              .e('components/uni-forms-item/uni-forms-item')
              .then(n.bind(null, '4423'))
          },
          uniEasyinput: function () {
            return Promise.all([
              n.e('common/vendor'),
              n.e('components/uni-easyinput/uni-easyinput'),
            ]).then(n.bind(null, '4a17'))
          },
          uniDataSelect: function () {
            return Promise.all([
              n.e('common/vendor'),
              n.e('components/uni-data-select/uni-data-select'),
            ]).then(n.bind(null, '1b47'))
          },
        },
        u = function () {
          var e = this.$createElement,
            t =
              (this._self._c,
              this.form.img ? this.$fullImgUrl(this.form.img) : null)
          this.$mp.data = Object.assign({}, { $root: { m0: t } })
        },
        o = []
    },
    fd59: function (e, t, n) {
      'use strict'
      ;(function (e) {
        var r = n('4ea4')
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = void 0)
        var u = r(n('2eee')),
          o = r(n('c973')),
          i = r(n('813d')),
          a = {
            mixins: [i.default],
            components: {},
            data: function () {
              return {
                field: 'forum_id',
                url_add: '~/api/forum/add?',
                url_set: '~/api/forum/set?',
                url_get_obj: '~/api/forum/get_obj?',
                url_upload: '~/api/forum/upload?',
                query: { forum_id: 0 },
                list_forum_type: [],
                form: {
                  forum_id: 0,
                  user_id: this.$store.state.user.user_id,
                  display: 0,
                  nickname: this.$store.state.user.nickname,
                  hits: 0,
                  title: '',
                  keywords: '',
                  description: '',
                  url: '',
                  tag: '',
                  img: '',
                  content: '',
                  avatar: this.$store.state.user.avatar,
                  type: '',
                },
              }
            },
            methods: {
              change_img: function (t) {
                var n = this
                e.chooseImage({
                  count: 1,
                  sizeType: ['original', 'compressed'],
                  sourceType: ['album'],
                  success: function (r) {
                    var u = r.tempFilePaths,
                      o = e.uploadFile({
                        url: n.$fullUrl('/api/forum/upload?'),
                        filePath: u[0],
                        name: 'file',
                        formData: { i_want_to_customize: 'test' },
                        header: { 'x-auth-token': n.$store.state.user.token },
                        success: function (e) {
                          var r = JSON.parse(e.data).result.url
                          n.form[t] = r
                        },
                      })
                    o.onProgressUpdate(function (e) {
                      ;(n.percent = e.progress),
                        console.log('上传进度' + e.progress),
                        console.log('已经上传的数据长度' + e.totalBytesSent),
                        console.log(
                          '预期需要上传的数据总长度' +
                            e.totalBytesExpectedToSend
                        )
                    })
                  },
                  error: function (e) {
                    console.log(e)
                  },
                })
              },
              submit_check: function (e) {
                var t = this
                return (0, o.default)(
                  u.default.mark(function n() {
                    var r, o, i
                    return u.default.wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (('', '' !== e.title)) {
                              n.next = 4
                              break
                            }
                            return (
                              '标题不能为空', n.abrupt('return', '标题不能为空')
                            )
                          case 4:
                            return (
                              (n.next = 6), t.filterSensitiveWords(e.content)
                            )
                          case 6:
                            if (((r = n.sent), !(r.length > 0))) {
                              n.next = 9
                              break
                            }
                            return n.abrupt(
                              'return',
                              '当前消息中包含敏感词: ' + r.join(',')
                            )
                          case 9:
                            return (
                              (n.next = 11), t.filterSensitiveWords(e.title)
                            )
                          case 11:
                            if (((o = n.sent), !(o.length > 0))) {
                              n.next = 14
                              break
                            }
                            return n.abrupt(
                              'return',
                              '当前标题中包含敏感词: ' + r.join(',')
                            )
                          case 14:
                            return (n.next = 16), t.filterSensitiveWords(e.tag)
                          case 16:
                            if (((i = n.sent), !(i.length > 0))) {
                              n.next = 19
                              break
                            }
                            return n.abrupt(
                              'return',
                              '当前标签中包含敏感词: ' + r.join(',')
                            )
                          case 19:
                          case 'end':
                            return n.stop()
                        }
                    }, n)
                  })
                )()
              },
              get_forum_type: function () {
                var e = this
                return (0, o.default)(
                  u.default.mark(function t() {
                    var n
                    return u.default.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), e.$get('~/api/forum_type/get_list?')
                            )
                          case 2:
                            ;(n = t.sent),
                              n.result
                                ? (console.log(n.result.list),
                                  n.result.list.map(function (t) {
                                    e.list_forum_type.push({
                                      value: t.name,
                                      text: t.name,
                                    })
                                  }))
                                : n.error && console.error(n.error)
                          case 4:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )()
              },
            },
            created: function () {
              this.get_forum_type()
            },
          }
        t.default = a
      }).call(this, n('543d')['default'])
    },
  },
  [['ecc7', 'common/runtime', 'common/vendor']],
])
