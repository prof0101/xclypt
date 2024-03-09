;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['components/diy/form_regular_users'],
  {
    '90f7': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return r
      }),
        n.d(t, 'c', function () {
          return o
        }),
        n.d(t, 'a', function () {})
      var r = function () {
          var e = this.$createElement,
            t =
              (this._self._c,
              this.$check_register_field(
                'add',
                'user_name',
                '/regular_users/view'
              )),
            n = this.$check_register_field(
              'add',
              'mobile_phone_number',
              '/regular_users/view'
            )
          this.$mp.data = Object.assign({}, { $root: { m0: t, m1: n } })
        },
        o = []
    },
    '96ec': function (e, t, n) {
      'use strict'
      var r = n('9ebd'),
        o = n.n(r)
      o.a
    },
    '9ebd': function (e, t, n) {},
    a146: function (e, t, n) {
      'use strict'
      ;(function (e) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = void 0)
        var n = {
          model: { prop: 'form', event: 'change' },
          props: {
            form: {
              type: Object,
              default: function () {
                return { url_upload: '~/api/regular_users/upload?' }
              },
            },
          },
          data: function () {
            return {}
          },
          methods: {
            change_img: function (t) {
              var n = this
              ;(n.upload_img_flag = !1),
                e.chooseImage({
                  count: 1,
                  sizeType: ['original', 'compressed'],
                  sourceType: ['album'],
                  success: function (r) {
                    var o = r.tempFilePaths,
                      u = e.uploadFile({
                        url: n.$fullUrl('/api/regular_users/upload?'),
                        filePath: o[0],
                        name: 'file',
                        formData: { i_want_to_customize: 'test' },
                        header: { 'x-auth-token': 'null' },
                        success: function (e) {
                          var r = JSON.parse(e.data).result.url
                          n.$delete(n.form, t),
                            n.$set(n.form, t, r),
                            n.handleBlur(r, t)
                        },
                      })
                    u.onProgressUpdate(function (e) {
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
            handleBlur: function (e, t) {
              this.$emit('change', { value: e, type: t })
            },
          },
          mounted: function () {},
        }
        t.default = n
      }).call(this, n('543d')['default'])
    },
    a51f: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('a146'),
        o = n.n(r)
      for (var u in r)
        ['default'].indexOf(u) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return r[e]
            })
          })(u)
      t['default'] = o.a
    },
    cd00: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('90f7'),
        o = n('a51f')
      for (var u in o)
        ['default'].indexOf(u) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return o[e]
            })
          })(u)
      n('96ec')
      var a = n('f0c5'),
        l = Object(a['a'])(
          o['default'],
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
      t['default'] = l.exports
    },
  },
])
;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  'components/diy/form_regular_users-create-component',
  {
    'components/diy/form_regular_users-create-component': function (
      module,
      exports,
      __webpack_require__
    ) {
      __webpack_require__('543d')['createComponent'](
        __webpack_require__('cd00')
      )
    },
  },
  [['components/diy/form_regular_users-create-component']],
])
