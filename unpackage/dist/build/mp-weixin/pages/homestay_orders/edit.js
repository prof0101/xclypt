;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/homestay_orders/edit'],
  {
    3003: function (e, t, o) {
      'use strict'
      o.r(t)
      var a = o('dd98'),
        r = o.n(a)
      for (var s in a)
        ['default'].indexOf(s) < 0 &&
          (function (e) {
            o.d(t, e, function () {
              return a[e]
            })
          })(s)
      t['default'] = r.a
    },
    '3acc': function (e, t, o) {
      'use strict'
      o.d(t, 'b', function () {
        return r
      }),
        o.d(t, 'c', function () {
          return s
        }),
        o.d(t, 'a', function () {
          return a
        })
      var a = {
          uniDataSelect: function () {
            return Promise.all([
              o.e('common/vendor'),
              o.e('components/uni-data-select/uni-data-select'),
            ]).then(o.bind(null, '1b47'))
          },
          uniDatetimePicker: function () {
            return Promise.all([
              o.e('common/vendor'),
              o.e('components/uni-datetime-picker/uni-datetime-picker'),
            ]).then(o.bind(null, '2626'))
          },
        },
        r = function () {
          var e = this,
            t = e.$createElement,
            o =
              (e._self._c,
              e.$check_field('set', 'regular_users') ||
                e.$check_field('add', 'regular_users') ||
                e.$check_field('get', 'regular_users')),
            a = o
              ? (e.form['regular_users'] &&
                  e.$check_field('set', 'regular_users')) ||
                (!e.form['regular_users'] &&
                  e.$check_field('add', 'regular_users'))
              : null,
            r = o && !a ? e.$check_field('get', 'regular_users') : null,
            s =
              e.$check_field('set', 'user_name') ||
              e.$check_field('add', 'user_name') ||
              e.$check_field('get', 'user_name'),
            m = s
              ? (e.form['user_name'] && e.$check_field('set', 'user_name')) ||
                (!e.form['user_name'] && e.$check_field('add', 'user_name'))
              : null,
            n = s && !m ? e.$check_field('get', 'user_name') : null,
            i =
              e.$check_field('set', 'mobile_phone_number') ||
              e.$check_field('add', 'mobile_phone_number') ||
              e.$check_field('get', 'mobile_phone_number'),
            c = i
              ? (e.form['mobile_phone_number'] &&
                  e.$check_field('set', 'mobile_phone_number')) ||
                (!e.form['mobile_phone_number'] &&
                  e.$check_field('add', 'mobile_phone_number'))
              : null,
            _ = i && !c ? e.$check_field('get', 'mobile_phone_number') : null,
            d =
              e.$check_field('set', 'merchant_users') ||
              e.$check_field('add', 'merchant_users') ||
              e.$check_field('get', 'merchant_users'),
            l = d
              ? (e.form['merchant_users'] &&
                  e.$check_field('set', 'merchant_users')) ||
                (!e.form['merchant_users'] &&
                  e.$check_field('add', 'merchant_users'))
              : null,
            u = d && !l ? e.$check_field('get', 'merchant_users') : null,
            h =
              e.$check_field('set', 'merchant_name') ||
              e.$check_field('add', 'merchant_name') ||
              e.$check_field('get', 'merchant_name'),
            f = h
              ? (e.form['merchant_name'] &&
                  e.$check_field('set', 'merchant_name')) ||
                (!e.form['merchant_name'] &&
                  e.$check_field('add', 'merchant_name'))
              : null,
            k = h && !f ? e.$check_field('get', 'merchant_name') : null,
            g =
              e.$check_field('set', 'homestay_name') ||
              e.$check_field('add', 'homestay_name') ||
              e.$check_field('get', 'homestay_name'),
            y = g
              ? (e.form['homestay_name'] &&
                  e.$check_field('set', 'homestay_name')) ||
                (!e.form['homestay_name'] &&
                  e.$check_field('add', 'homestay_name'))
              : null,
            p = g && !y ? e.$check_field('get', 'homestay_name') : null,
            b =
              e.$check_field('set', 'homestay_id') ||
              e.$check_field('add', 'homestay_id') ||
              e.$check_field('get', 'homestay_id'),
            $ = b
              ? (e.form['homestay_id'] &&
                  e.$check_field('set', 'homestay_id')) ||
                (!e.form['homestay_id'] && e.$check_field('add', 'homestay_id'))
              : null,
            v = b && !$ ? e.$check_field('get', 'homestay_id') : null,
            j =
              e.$check_field('set', 'homestay_prices') ||
              e.$check_field('add', 'homestay_prices') ||
              e.$check_field('get', 'homestay_prices'),
            x = j
              ? (e.form['homestay_prices'] &&
                  e.$check_field('set', 'homestay_prices')) ||
                (!e.form['homestay_prices'] &&
                  e.$check_field('add', 'homestay_prices'))
              : null,
            D = j && !x ? e.$check_field('get', 'homestay_prices') : null,
            w =
              e.$check_field('set', 'accommodation_days') ||
              e.$check_field('add', 'accommodation_days') ||
              e.$check_field('get', 'accommodation_days'),
            O = w
              ? (e.form['accommodation_days'] &&
                  e.$check_field('set', 'accommodation_days')) ||
                (!e.form['accommodation_days'] &&
                  e.$check_field('add', 'accommodation_days'))
              : null,
            P = w && !O ? e.$check_field('get', 'accommodation_days') : null,
            F =
              e.$check_field('set', 'total_accommodation_amount') ||
              e.$check_field('add', 'total_accommodation_amount') ||
              e.$check_field('get', 'total_accommodation_amount'),
            T = F
              ? (e.form['total_accommodation_amount'] &&
                  e.$check_field('set', 'total_accommodation_amount')) ||
                (!e.form['total_accommodation_amount'] &&
                  e.$check_field('add', 'total_accommodation_amount'))
              : null,
            M =
              F && !T
                ? e.$check_field('get', 'total_accommodation_amount')
                : null,
            S =
              e.$check_field('set', 'booking_amount') ||
              e.$check_field('add', 'booking_amount') ||
              e.$check_field('get', 'booking_amount'),
            U = S
              ? (e.form['booking_amount'] &&
                  e.$check_field('set', 'booking_amount')) ||
                (!e.form['booking_amount'] &&
                  e.$check_field('add', 'booking_amount'))
              : null,
            I = S && !U ? e.$check_field('get', 'booking_amount') : null,
            J =
              e.$check_field('set', 'accommodation_time') ||
              e.$check_field('add', 'accommodation_time') ||
              e.$check_field('get', 'accommodation_time'),
            N = J
              ? (e.form['accommodation_time'] &&
                  e.$check_field('set', 'accommodation_time')) ||
                (!e.form['accommodation_time'] &&
                  e.$check_field('add', 'accommodation_time'))
              : null,
            B = J && !N ? e.$check_field('get', 'accommodation_time') : null,
            E =
              e.$check_field('set', 'homestay_address') ||
              e.$check_field('add', 'homestay_address') ||
              e.$check_field('get', 'homestay_address'),
            q = E
              ? (e.form['homestay_address'] &&
                  e.$check_field('set', 'homestay_address')) ||
                (!e.form['homestay_address'] &&
                  e.$check_field('add', 'homestay_address'))
              : null,
            z = E && !q ? e.$check_field('get', 'homestay_address') : null,
            L =
              e.$check_field('set', 'order_remarks') ||
              e.$check_field('add', 'order_remarks') ||
              e.$check_field('get', 'order_remarks'),
            G = L
              ? (e.form['order_remarks'] &&
                  e.$check_field('set', 'order_remarks')) ||
                (!e.form['order_remarks'] &&
                  e.$check_field('add', 'order_remarks'))
              : null,
            A = L && !G ? e.$check_field('get', 'order_remarks') : null
          e.$mp.data = Object.assign(
            {},
            {
              $root: {
                m0: o,
                m1: a,
                m2: r,
                m3: s,
                m4: m,
                m5: n,
                m6: i,
                m7: c,
                m8: _,
                m9: d,
                m10: l,
                m11: u,
                m12: h,
                m13: f,
                m14: k,
                m15: g,
                m16: y,
                m17: p,
                m18: b,
                m19: $,
                m20: v,
                m21: j,
                m22: x,
                m23: D,
                m24: w,
                m25: O,
                m26: P,
                m27: F,
                m28: T,
                m29: M,
                m30: S,
                m31: U,
                m32: I,
                m33: J,
                m34: N,
                m35: B,
                m36: E,
                m37: q,
                m38: z,
                m39: L,
                m40: G,
                m41: A,
              },
            }
          )
        },
        s = []
    },
    '9fca': function (e, t, o) {
      'use strict'
      o.r(t)
      var a = o('3acc'),
        r = o('3003')
      for (var s in r)
        ['default'].indexOf(s) < 0 &&
          (function (e) {
            o.d(t, e, function () {
              return r[e]
            })
          })(s)
      o('fffe'), o('b115')
      var m = o('f0c5'),
        n = Object(m['a'])(
          r['default'],
          a['b'],
          a['c'],
          !1,
          null,
          '1faec989',
          null,
          !1,
          a['a'],
          void 0
        )
      t['default'] = n.exports
    },
    a14b: function (e, t, o) {},
    b115: function (e, t, o) {
      'use strict'
      var a = o('f046'),
        r = o.n(a)
      r.a
    },
    da82: function (e, t, o) {
      'use strict'
      ;(function (e, t) {
        var a = o('4ea4')
        o('e411')
        a(o('66fd'))
        var r = a(o('9fca'))
        ;(e.__webpack_require_UNI_MP_PLUGIN__ = o), t(r.default)
      }).call(this, o('bc2e')['default'], o('543d')['createPage'])
    },
    dd98: function (e, t, o) {
      'use strict'
      ;(function (e) {
        var a = o('4ea4')
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = void 0)
        var r = a(o('2eee')),
          s = a(o('c973')),
          m = a(o('813d')),
          n = {
            mixins: [m.default],
            data: function () {
              return {
                url_get_obj: '~/api/homestay_orders/get_obj?',
                url_add: '~/api/homestay_orders/add?',
                url_set: '~/api/homestay_orders/set?',
                oauth: { signIn: !0, user_group: [] },
                query: {
                  regular_users: 0,
                  user_name: '',
                  mobile_phone_number: '',
                  merchant_users: 0,
                  merchant_name: '',
                  homestay_name: '',
                  homestay_id: '',
                  homestay_prices: 0,
                  accommodation_days: 0,
                  total_accommodation_amount: '',
                  booking_amount: 0,
                  final_payment_for_homestays: '',
                  accommodation_time: '',
                  homestay_address: '',
                  order_remarks: '',
                  homestay_orders_id: 0,
                },
                obj: {
                  regular_users: 0,
                  user_name: '',
                  mobile_phone_number: '',
                  merchant_users: 0,
                  merchant_name: '',
                  homestay_name: '',
                  homestay_id: '',
                  homestay_prices: 0,
                  accommodation_days: 0,
                  total_accommodation_amount: '',
                  booking_amount: 0,
                  accommodation_time: this.$toTime(
                    new Date().getTime(),
                    'yyyy-MM-dd'
                  ),
                  homestay_address: '',
                  order_remarks: '',
                  homestay_orders_id: 0,
                },
                form: {
                  regular_users: 0,
                  user_name: '',
                  mobile_phone_number: '',
                  merchant_users: 0,
                  merchant_name: '',
                  homestay_name: '',
                  homestay_id: '',
                  homestay_prices: 0,
                  accommodation_days: 0,
                  total_accommodation_amount: '',
                  booking_amount: 0,
                  accommodation_time: this.$toTime(
                    new Date().getTime(),
                    'yyyy-MM-dd'
                  ),
                  homestay_address: '',
                  order_remarks: '',
                  homestay_orders_id: 0,
                },
                disabledObj: {
                  regular_users_isDisabled: !1,
                  user_name_isDisabled: !1,
                  mobile_phone_number_isDisabled: !1,
                  merchant_users_isDisabled: !1,
                  merchant_name_isDisabled: !1,
                  homestay_name_isDisabled: !1,
                  homestay_id_isDisabled: !1,
                  total_accommodation_amount_isDisabled: !1,
                  final_payment_for_homestays_isDisabled: !1,
                  accommodation_time_isDisabled: !1,
                  homestay_address_isDisabled: !1,
                  order_remarks_isDisabled: !1,
                },
                list_user_regular_users: [],
                list_user_merchant_users: [],
                field: 'homestay_orders_id',
                table_key: 'homestay_orders',
              }
            },
            methods: {
              submit_check: function (e) {
                return e.accommodation_time ? null : '住宿时间不能为空'
              },
              get_list_user_regular_users: function () {
                var e = this
                return (0, s.default)(
                  r.default.mark(function t() {
                    var o
                    return r.default.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              e.$get('~/api/user/get_list?user_group=普通用户')
                            )
                          case 2:
                            ;(o = t.sent),
                              o.result && o.result.list
                                ? o.result.list.map(function (t) {
                                    return e.list_user_regular_users.push({
                                      value: t.user_id,
                                      text: t.nickname + '-' + t.username,
                                    })
                                  })
                                : o.error && console.error(o.error)
                          case 4:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )()
              },
              get_user_session_regular_users: function () {
                var e = this
                return (0, s.default)(
                  r.default.mark(function t() {
                    var o, a, s, m, n
                    return r.default.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (o = e),
                              (t.next = 3),
                              e.$get('~/api/user_group/get_obj?name=普通用户')
                            )
                          case 3:
                            ;(a = t.sent),
                              a.result && a.result.obj
                                ? ((s = a.result.obj.source_table),
                                  (m = o.$store.state.user.user_id),
                                  m &&
                                    ((n = '~/api/' + s + '/get_obj?'),
                                    e.$get(
                                      n,
                                      { user_id: o.$store.state.user.user_id },
                                      function (e) {
                                        if (e.result && e.result.obj) {
                                          var t = []
                                          for (var a in e.result.obj) t.push(a)
                                          var r = []
                                          for (var s in o.form) r.push(s)
                                          ;(o.form['regular_users'] = m),
                                            (o.disabledObj[
                                              'regular_users_isDisabled'
                                            ] = !0)
                                          for (var n = 0; n < t.length; n++)
                                            if (
                                              'examine_state' !== t[n] &&
                                              'examine_reply' !== t[n]
                                            )
                                              for (var i = 0; i < r.length; i++)
                                                if (
                                                  t[n] === r[i] &&
                                                  'regular_users' !== t[n]
                                                ) {
                                                  ;(o.form[r[i]] =
                                                    e.result.obj[t[n]]),
                                                    (o.disabledObj[
                                                      r[i] + '_isDisabled'
                                                    ] = !0)
                                                  break
                                                }
                                        }
                                      }
                                    )))
                                : a.error && console.error(a.error)
                          case 5:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )()
              },
              get_list_user_merchant_users: function () {
                var e = this
                return (0, s.default)(
                  r.default.mark(function t() {
                    var o
                    return r.default.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              e.$get('~/api/user/get_list?user_group=商家用户')
                            )
                          case 2:
                            ;(o = t.sent),
                              o.result && o.result.list
                                ? o.result.list.map(function (t) {
                                    return e.list_user_merchant_users.push({
                                      value: t.user_id,
                                      text: t.nickname + '-' + t.username,
                                    })
                                  })
                                : o.error && console.error(o.error)
                          case 4:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )()
              },
              set_total_accommodation_amount: function () {
                this.form.total_accommodation_amount =
                  parseFloat(this.form.homestay_prices) *
                  parseFloat(this.form.accommodation_days)
                ;/^\+?[1-9][0-9]*$/.test(
                  this.form.total_accommodation_amount
                ) ||
                  (this.form.total_accommodation_amount =
                    this.form.total_accommodation_amount.toFixed(2))
              },
              set_final_payment_for_homestays: function () {
                this.form.final_payment_for_homestays =
                  parseFloat(this.form.homestay_prices) *
                    parseFloat(this.form.accommodation_days) -
                  parseFloat(this.form.booking_amount)
                ;/^\+?[1-9][0-9]*$/.test(
                  this.form.final_payment_for_homestays
                ) ||
                  (this.form.final_payment_for_homestays =
                    this.form.final_payment_for_homestays.toFixed(2))
              },
              change_file: function (t) {
                var o = this
                this.$chooseFile().then(function (a) {
                  console.log(a)
                  var r = e.uploadFile({
                    url: o.$fullUrl('/api/feedback/upload?'),
                    filePath: a[0].path,
                    name: 'file',
                    formData: { i_want_to_customize: 'test' },
                    header: { 'x-auth-token': o.$store.state.user.token },
                    success: function (e) {
                      console.log(e)
                      var a = JSON.parse(e.data).result.url
                      o.form[t] = a
                    },
                  })
                  r.onProgressUpdate(function (e) {
                    ;(o.percent = e.progress),
                      console.log('上传进度' + e.progress),
                      console.log('已经上传的数据长度' + e.totalBytesSent),
                      console.log(
                        '预期需要上传的数据总长度' + e.totalBytesExpectedToSend
                      )
                  })
                })
              },
              change_img: function (t) {
                var o = this
                ;(o.upload_img_flag = !1),
                  e.chooseImage({
                    count: 1,
                    sizeType: ['original', 'compressed'],
                    sourceType: ['album'],
                    success: function (a) {
                      var r = a.tempFilePaths,
                        s = e.uploadFile({
                          url: o.$fullUrl('/api/homestay_orders/upload?'),
                          filePath: r[0],
                          name: 'file',
                          formData: { homestay_orders: 'test' },
                          header: { 'x-auth-token': o.$store.state.user.token },
                          success: function (e) {
                            var a = JSON.parse(e.data).result.url,
                              r = a
                            o.form[t] = r
                          },
                        })
                      s.onProgressUpdate(function (e) {
                        ;(o.percent = e.progress),
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
              get_obj_before: function (t) {
                var o = e.db.get('form')
                o &&
                  (delete o.examine_state,
                  delete o.examine_reply,
                  (this.obj = e.push(this.obj, o)),
                  (this.form = e.push(this.form, o)))
                var a = []
                for (var r in o) a.push(r)
                for (var s = 0; s < a.length; s++)
                  this.disabledObj[a[s] + '_isDisabled'] = !0
                return (
                  this.form['accommodation_time'] &&
                    -1 ===
                      JSON.stringify(this.form['accommodation_time']).indexOf(
                        '-'
                      ) &&
                    (this.form['accommodation_time'] = this.$toTime(
                      parseInt(this.form['accommodation_time']),
                      'yyyy-MM-dd'
                    )),
                  e.db.del('form'),
                  t
                )
              },
              get_obj_after: function (t, o) {
                var a = e.db.get('form'),
                  r = Object.assign({}, a, this.obj)
                a && (this.obj = e.push(this.obj, r)),
                  a && (this.form = e.push(this.form, a)),
                  o && o(t)
              },
            },
            onLoad: function () {
              this.get_user_session_regular_users(),
                this.get_list_user_regular_users(),
                this.get_list_user_merchant_users()
            },
          }
        t.default = n
      }).call(this, o('543d')['default'])
    },
    f046: function (e, t, o) {},
    fffe: function (e, t, o) {
      'use strict'
      var a = o('a14b'),
        r = o.n(a)
      r.a
    },
  },
  [['da82', 'common/runtime', 'common/vendor']],
])
