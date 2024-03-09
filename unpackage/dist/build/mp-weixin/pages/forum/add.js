;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/forum/add'],
  {
    '06ad': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return a
      }),
        n.d(t, 'c', function () {
          return i
        }),
        n.d(t, 'a', function () {
          return o
        })
      var o = {
          uniDataSelect: function () {
            return Promise.all([
              n.e('common/vendor'),
              n.e('components/uni-data-select/uni-data-select'),
            ]).then(n.bind(null, '1b47'))
          },
        },
        a = function () {
          var e = this.$createElement,
            t = (this._self._c, this.$fullImgUrl(this.obj.img))
          this.$mp.data = Object.assign({}, { $root: { m0: t } })
        },
        i = []
    },
    2040: function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('7af7'),
        a = n.n(o)
      for (var i in o)
        ['default'].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return o[e]
            })
          })(i)
      t['default'] = a.a
    },
    '7af7': function (e, t, n) {
      'use strict'
      ;(function (e) {
        var o = n('4ea4')
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = void 0)
        var a = o(n('813d')),
          i = {
            mixins: [a.default],
            components: {
              bar_title: function () {
                n.e('components/diy/bar_title')
                  .then(
                    function () {
                      return resolve(n('a5c1'))
                    }.bind(null, n)
                  )
                  .catch(n.oe)
              },
            },
            data: function () {
              return {
                url_add: '~/api/forum/add',
                url_get_type_list: '~/api/forum_type/get_list',
                field: 'forum_id',
                query: { forum_id: 0 },
                obj: {
                  title: '',
                  content: '',
                  description: '',
                  display: 0,
                  tag: '',
                  type: '',
                  img: '',
                  nickname: this.$store.state.user.nickname,
                  user_id: this.$store.state.user.user_id,
                },
                placeholder: '开始输入...',
                type_list: [],
              }
            },
            methods: {
              get_forum_type: function () {
                var e = this
                this.$get(this.url_get_type_list, {}, function (t, n) {
                  e.type_list = t.result.list.map(function (e) {
                    return { value: e.name, text: e.name }
                  })
                })
              },
              change_avatar: function (t) {
                var n = this
                e.chooseImage({
                  count: 1,
                  sizeType: ['original', 'compressed'],
                  sourceType: ['album'],
                  success: function (t) {
                    var o = t.tempFilePaths,
                      a = e.uploadFile({
                        url: n.$fullUrl('/api/forum/upload?'),
                        filePath: o[0],
                        name: 'file',
                        header: { 'x-auth-token': n.$store.state.user.token },
                        success: function (e) {
                          var t = JSON.parse(e.data).result.url
                          console.log(t), (n.obj.img = t)
                        },
                      })
                    a.onProgressUpdate(function (e) {
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
              submit_main: function () {
                var t = this.obj
                delete t.update_time,
                  delete t.create_time,
                  this.$post(this.url_add, t, function (t, n) {
                    e.showToast({ icon: 'success', title: '保存成功' }),
                      setTimeout(function () {
                        e.hideToast(),
                          e.navigateTo({ url: '/pages/forum/table' })
                      }, 1500)
                  })
              },
            },
            created: function () {
              this.get_forum_type()
            },
          }
        t.default = i
      }).call(this, n('543d')['default'])
    },
    '9ff9': function (e, t, n) {
      'use strict'
      var o = n('d8b9'),
        a = n.n(o)
      a.a
    },
    d8b9: function (e, t, n) {},
    e6f1: function (e, t, n) {
      'use strict'
      ;(function (e, t) {
        var o = n('4ea4')
        n('e411')
        o(n('66fd'))
        var a = o(n('eee4'))
        ;(e.__webpack_require_UNI_MP_PLUGIN__ = n), t(a.default)
      }).call(this, n('bc2e')['default'], n('543d')['createPage'])
    },
    eee4: function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('06ad'),
        a = n('2040')
      for (var i in a)
        ['default'].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e]
            })
          })(i)
      n('9ff9')
      var u = n('f0c5'),
        r = Object(u['a'])(
          a['default'],
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
      t['default'] = r.exports
    },
  },
  [['e6f1', 'common/runtime', 'common/vendor']],
])
