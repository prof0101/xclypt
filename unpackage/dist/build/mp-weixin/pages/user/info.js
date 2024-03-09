;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/user/info'],
  {
    '0dab': function (e, t, n) {},
    '15f8': function (e, t, n) {
      'use strict'
      n.r(t)
      var u = n('4d31'),
        r = n.n(u)
      for (var s in u)
        ['default'].indexOf(s) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return u[e]
            })
          })(s)
      t['default'] = r.a
    },
    '41f3': function (e, t, n) {
      'use strict'
      ;(function (e, t) {
        var u = n('4ea4')
        n('e411')
        u(n('66fd'))
        var r = u(n('52d2'))
        ;(e.__webpack_require_UNI_MP_PLUGIN__ = n), t(r.default)
      }).call(this, n('bc2e')['default'], n('543d')['createPage'])
    },
    '4d31': function (e, t, n) {
      'use strict'
      ;(function (e) {
        var u = n('4ea4')
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = void 0)
        var r = u(n('2eee')),
          s = u(n('c973')),
          o = u(n('813d')),
          a = {
            mixins: [o.default],
            data: function () {
              return {
                oauth: { signIn: !0, user_group: [] },
                href: 'https://uniapp.dcloud.io/component/README?id=uniui',
                display_input: 'none',
                display_name: 'block',
                focus_input: !1,
                form: {},
                source_table_url: '',
              }
            },
            methods: {
              change_avatar: function () {
                var t = this
                e.chooseImage({
                  count: 1,
                  sizeType: ['original', 'compressed'],
                  sourceType: ['album'],
                  success: function (n) {
                    var u = n.tempFilePaths,
                      r = e.uploadFile({
                        url: t.$fullUrl('/api/user/upload?'),
                        filePath: u[0],
                        name: 'file',
                        header: { 'x-auth-token': t.$store.state.user.token },
                        formData: {},
                        success: function (e) {
                          var n = JSON.parse(e.data).result.url
                          console.log(n)
                          var u = JSON.parse(e.data).result.url
                          t.$post(
                            '~/api/user/set?user_id=' + t.user.user_id,
                            { avatar: u },
                            function (e) {
                              console.log(e), (t.user.avatar = n)
                            }
                          )
                        },
                      })
                    r.onProgressUpdate(function (e) {
                      ;(t.percent = e.progress),
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
              change_nickname: function () {
                ;(this.display_input = 'flex'),
                  (this.display_name = 'none'),
                  (this.focus_input = !0)
              },
              save_nickname: function () {
                var e = this,
                  t = this.user,
                  n = this.form.nickname
                this.$post(
                  '~/api/user/set?user_id=' + t.user_id,
                  { nickname: n },
                  function (t) {
                    console.log(t),
                      (e.focus_input = !1),
                      (e.display_input = 'none'),
                      (e.display_name = 'block'),
                      (e.user.nickname = n)
                  }
                )
              },
              get_source_table_url: function () {
                var e = this
                return (0, s.default)(
                  r.default.mark(function t() {
                    var n, u, s
                    return r.default.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (n = e.$store.state.user.user_group),
                              (t.next = 3),
                              e.$get('~/api/user_group/get_obj?name=' + n)
                            )
                          case 3:
                            if (((u = t.sent), !u.result || !u.result.obj)) {
                              t.next = 10
                              break
                            }
                            if (!u.result.obj.source_table) {
                              t.next = 10
                              break
                            }
                            return (
                              (t.next = 8),
                              e.$get(
                                '~/api/' +
                                  u.result.obj.source_table +
                                  '/get_obj?user_id=' +
                                  e.$store.state.user.user_id
                              )
                            )
                          case 8:
                            ;(s = t.sent),
                              s.result &&
                                s.result.obj &&
                                (e.source_table_url =
                                  '/pages/' +
                                  u.result.obj.source_table +
                                  '/view?' +
                                  u.result.obj.source_field +
                                  '=' +
                                  s.result.obj[u.result.obj.source_field])
                          case 10:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )()
              },
            },
            created: function () {
              this.get_source_table_url()
            },
          }
        t.default = a
      }).call(this, n('543d')['default'])
    },
    '52d2': function (e, t, n) {
      'use strict'
      n.r(t)
      var u = n('85754'),
        r = n('15f8')
      for (var s in r)
        ['default'].indexOf(s) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return r[e]
            })
          })(s)
      n('ab8d')
      var o = n('f0c5'),
        a = Object(o['a'])(
          r['default'],
          u['b'],
          u['c'],
          !1,
          null,
          null,
          null,
          !1,
          u['a'],
          void 0
        )
      t['default'] = a.exports
    },
    85754: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return r
      }),
        n.d(t, 'c', function () {
          return s
        }),
        n.d(t, 'a', function () {
          return u
        })
      var u = {
          uniEasyinput: function () {
            return Promise.all([
              n.e('common/vendor'),
              n.e('components/uni-easyinput/uni-easyinput'),
            ]).then(n.bind(null, '4a17'))
          },
          uniIcons: function () {
            return Promise.all([
              n.e('common/vendor'),
              n.e('components/uni-icons/uni-icons'),
            ]).then(n.bind(null, '9972'))
          },
        },
        r = function () {
          var e = this.$createElement,
            t = (this._self._c, this.$fullImgUrl(this.user.avatar))
          this.$mp.data = Object.assign({}, { $root: { m0: t } })
        },
        s = []
    },
    ab8d: function (e, t, n) {
      'use strict'
      var u = n('0dab'),
        r = n.n(u)
      r.a
    },
  },
  [['41f3', 'common/runtime', 'common/vendor']],
])
