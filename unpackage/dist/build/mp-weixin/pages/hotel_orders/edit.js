;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/hotel_orders/edit'],
  {
    '00cd': function (e, t, o) {
      'use strict'
      ;(function (e) {
        var r = o('4ea4')
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = void 0)
        var _ = r(o('2eee')),
          a = r(o('c973')),
          s = r(o('813d')),
          l = {
            mixins: [s.default],
            data: function () {
              return {
                url_get_obj: '~/api/hotel_orders/get_obj?',
                url_add: '~/api/hotel_orders/add?',
                url_set: '~/api/hotel_orders/set?',
                oauth: { signIn: !0, user_group: [] },
                query: {
                  regular_users: 0,
                  user_name: '',
                  mobile_phone_number: '',
                  merchant_users: 0,
                  merchant_name: '',
                  hotel_name: '',
                  room_type: '',
                  one_night_amount: 0,
                  days_of_stay: 0,
                  total_hotel_stay: '',
                  booking_amount: 0,
                  final_payment_for_hotel_stay: '',
                  time_of_stay: '',
                  hotel_remarks: '',
                  hotel_orders_id: 0,
                },
                obj: {
                  regular_users: 0,
                  user_name: '',
                  mobile_phone_number: '',
                  merchant_users: 0,
                  merchant_name: '',
                  hotel_name: '',
                  room_type: '',
                  one_night_amount: 0,
                  days_of_stay: 0,
                  total_hotel_stay: '',
                  booking_amount: 0,
                  final_payment_for_hotel_stay: '',
                  time_of_stay: this.$toTime(
                    new Date().getTime(),
                    'yyyy-MM-dd'
                  ),
                  hotel_remarks: '',
                  hotel_orders_id: 0,
                },
                form: {
                  regular_users: 0,
                  user_name: '',
                  mobile_phone_number: '',
                  merchant_users: 0,
                  merchant_name: '',
                  hotel_name: '',
                  room_type: '',
                  one_night_amount: 0,
                  days_of_stay: 0,
                  total_hotel_stay: '',
                  booking_amount: 0,
                  final_payment_for_hotel_stay: '',
                  time_of_stay: this.$toTime(
                    new Date().getTime(),
                    'yyyy-MM-dd'
                  ),
                  hotel_remarks: '',
                  hotel_orders_id: 0,
                },
                disabledObj: {
                  regular_users_isDisabled: !1,
                  user_name_isDisabled: !1,
                  mobile_phone_number_isDisabled: !1,
                  merchant_users_isDisabled: !1,
                  merchant_name_isDisabled: !1,
                  hotel_name_isDisabled: !1,
                  room_type_isDisabled: !1,
                  total_hotel_stay_isDisabled: !1,
                  final_payment_for_hotel_stay_isDisabled: !1,
                  time_of_stay_isDisabled: !1,
                  hotel_remarks_isDisabled: !1,
                },
                list_user_regular_users: [],
                list_user_merchant_users: [],
                field: 'hotel_orders_id',
                table_key: 'hotel_orders',
              }
            },
            methods: {
              submit_check: function (e) {
                return e.time_of_stay ? null : '住店时间不能为空'
              },
              get_list_user_regular_users: function () {
                var e = this
                return (0, a.default)(
                  _.default.mark(function t() {
                    var o
                    return _.default.wrap(function (t) {
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
                return (0, a.default)(
                  _.default.mark(function t() {
                    var o, r, a, s, l
                    return _.default.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (o = e),
                              (t.next = 3),
                              e.$get('~/api/user_group/get_obj?name=普通用户')
                            )
                          case 3:
                            ;(r = t.sent),
                              r.result && r.result.obj
                                ? ((a = r.result.obj.source_table),
                                  (s = o.$store.state.user.user_id),
                                  s &&
                                    ((l = '~/api/' + a + '/get_obj?'),
                                    e.$get(
                                      l,
                                      { user_id: o.$store.state.user.user_id },
                                      function (e) {
                                        if (e.result && e.result.obj) {
                                          var t = []
                                          for (var r in e.result.obj) t.push(r)
                                          var _ = []
                                          for (var a in o.form) _.push(a)
                                          ;(o.form['regular_users'] = s),
                                            (o.disabledObj[
                                              'regular_users_isDisabled'
                                            ] = !0)
                                          for (var l = 0; l < t.length; l++)
                                            if (
                                              'examine_state' !== t[l] &&
                                              'examine_reply' !== t[l]
                                            )
                                              for (var n = 0; n < _.length; n++)
                                                if (
                                                  t[l] === _[n] &&
                                                  'regular_users' !== t[l]
                                                ) {
                                                  ;(o.form[_[n]] =
                                                    e.result.obj[t[l]]),
                                                    (o.disabledObj[
                                                      _[n] + '_isDisabled'
                                                    ] = !0)
                                                  break
                                                }
                                        }
                                      }
                                    )))
                                : r.error && console.error(r.error)
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
                return (0, a.default)(
                  _.default.mark(function t() {
                    var o
                    return _.default.wrap(function (t) {
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
              set_total_hotel_stay: function () {
                this.form.total_hotel_stay =
                  parseFloat(this.form.one_night_amount) *
                  parseFloat(this.form.days_of_stay)
                ;/^\+?[1-9][0-9]*$/.test(this.form.total_hotel_stay) ||
                  (this.form.total_hotel_stay =
                    this.form.total_hotel_stay.toFixed(2))
              },
              set_final_payment_for_hotel_stay: function () {
                this.form.final_payment_for_hotel_stay =
                  parseFloat(this.form.one_night_amount) *
                    parseFloat(this.form.days_of_stay) -
                  parseFloat(this.form.booking_amount)
                ;/^\+?[1-9][0-9]*$/.test(
                  this.form.final_payment_for_hotel_stay
                ) ||
                  (this.form.final_payment_for_hotel_stay =
                    this.form.final_payment_for_hotel_stay.toFixed(2))
              },
              change_file: function (t) {
                var o = this
                this.$chooseFile().then(function (r) {
                  console.log(r)
                  var _ = e.uploadFile({
                    url: o.$fullUrl('/api/feedback/upload?'),
                    filePath: r[0].path,
                    name: 'file',
                    formData: { i_want_to_customize: 'test' },
                    header: { 'x-auth-token': o.$store.state.user.token },
                    success: function (e) {
                      console.log(e)
                      var r = JSON.parse(e.data).result.url
                      o.form[t] = r
                    },
                  })
                  _.onProgressUpdate(function (e) {
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
                    success: function (r) {
                      var _ = r.tempFilePaths,
                        a = e.uploadFile({
                          url: o.$fullUrl('/api/hotel_orders/upload?'),
                          filePath: _[0],
                          name: 'file',
                          formData: { hotel_orders: 'test' },
                          header: { 'x-auth-token': o.$store.state.user.token },
                          success: function (e) {
                            var r = JSON.parse(e.data).result.url,
                              _ = r
                            o.form[t] = _
                          },
                        })
                      a.onProgressUpdate(function (e) {
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
                var r = []
                for (var _ in o) r.push(_)
                for (var a = 0; a < r.length; a++)
                  this.disabledObj[r[a] + '_isDisabled'] = !0
                return (
                  this.form['time_of_stay'] &&
                    -1 ===
                      JSON.stringify(this.form['time_of_stay']).indexOf('-') &&
                    (this.form['time_of_stay'] = this.$toTime(
                      parseInt(this.form['time_of_stay']),
                      'yyyy-MM-dd'
                    )),
                  e.db.del('form'),
                  t
                )
              },
              get_obj_after: function (t, o) {
                var r = e.db.get('form'),
                  _ = Object.assign({}, r, this.obj)
                r && (this.obj = e.push(this.obj, _)),
                  r && (this.form = e.push(this.form, r)),
                  o && o(t)
              },
            },
            onLoad: function () {
              this.get_user_session_regular_users(),
                this.get_list_user_regular_users(),
                this.get_list_user_merchant_users()
            },
          }
        t.default = l
      }).call(this, o('543d')['default'])
    },
    '1b2e': function (e, t, o) {
      'use strict'
      o.r(t)
      var r = o('00cd'),
        _ = o.n(r)
      for (var a in r)
        ['default'].indexOf(a) < 0 &&
          (function (e) {
            o.d(t, e, function () {
              return r[e]
            })
          })(a)
      t['default'] = _.a
    },
    2082: function (e, t, o) {
      'use strict'
      o.d(t, 'b', function () {
        return _
      }),
        o.d(t, 'c', function () {
          return a
        }),
        o.d(t, 'a', function () {
          return r
        })
      var r = {
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
        _ = function () {
          var e = this,
            t = e.$createElement,
            o =
              (e._self._c,
              e.$check_field('set', 'regular_users') ||
                e.$check_field('add', 'regular_users') ||
                e.$check_field('get', 'regular_users')),
            r = o
              ? (e.form['regular_users'] &&
                  e.$check_field('set', 'regular_users')) ||
                (!e.form['regular_users'] &&
                  e.$check_field('add', 'regular_users'))
              : null,
            _ = o && !r ? e.$check_field('get', 'regular_users') : null,
            a =
              e.$check_field('set', 'user_name') ||
              e.$check_field('add', 'user_name') ||
              e.$check_field('get', 'user_name'),
            s = a
              ? (e.form['user_name'] && e.$check_field('set', 'user_name')) ||
                (!e.form['user_name'] && e.$check_field('add', 'user_name'))
              : null,
            l = a && !s ? e.$check_field('get', 'user_name') : null,
            n =
              e.$check_field('set', 'mobile_phone_number') ||
              e.$check_field('add', 'mobile_phone_number') ||
              e.$check_field('get', 'mobile_phone_number'),
            i = n
              ? (e.form['mobile_phone_number'] &&
                  e.$check_field('set', 'mobile_phone_number')) ||
                (!e.form['mobile_phone_number'] &&
                  e.$check_field('add', 'mobile_phone_number'))
              : null,
            c = n && !i ? e.$check_field('get', 'mobile_phone_number') : null,
            u =
              e.$check_field('set', 'merchant_users') ||
              e.$check_field('add', 'merchant_users') ||
              e.$check_field('get', 'merchant_users'),
            m = u
              ? (e.form['merchant_users'] &&
                  e.$check_field('set', 'merchant_users')) ||
                (!e.form['merchant_users'] &&
                  e.$check_field('add', 'merchant_users'))
              : null,
            f = u && !m ? e.$check_field('get', 'merchant_users') : null,
            d =
              e.$check_field('set', 'merchant_name') ||
              e.$check_field('add', 'merchant_name') ||
              e.$check_field('get', 'merchant_name'),
            h = d
              ? (e.form['merchant_name'] &&
                  e.$check_field('set', 'merchant_name')) ||
                (!e.form['merchant_name'] &&
                  e.$check_field('add', 'merchant_name'))
              : null,
            g = d && !h ? e.$check_field('get', 'merchant_name') : null,
            y =
              e.$check_field('set', 'hotel_name') ||
              e.$check_field('add', 'hotel_name') ||
              e.$check_field('get', 'hotel_name'),
            k = y
              ? (e.form['hotel_name'] && e.$check_field('set', 'hotel_name')) ||
                (!e.form['hotel_name'] && e.$check_field('add', 'hotel_name'))
              : null,
            p = y && !k ? e.$check_field('get', 'hotel_name') : null,
            b =
              e.$check_field('set', 'room_type') ||
              e.$check_field('add', 'room_type') ||
              e.$check_field('get', 'room_type'),
            $ = b
              ? (e.form['room_type'] && e.$check_field('set', 'room_type')) ||
                (!e.form['room_type'] && e.$check_field('add', 'room_type'))
              : null,
            v = b && !$ ? e.$check_field('get', 'room_type') : null,
            j =
              e.$check_field('set', 'one_night_amount') ||
              e.$check_field('add', 'one_night_amount') ||
              e.$check_field('get', 'one_night_amount'),
            x = j
              ? (e.form['one_night_amount'] &&
                  e.$check_field('set', 'one_night_amount')) ||
                (!e.form['one_night_amount'] &&
                  e.$check_field('add', 'one_night_amount'))
              : null,
            D = j && !x ? e.$check_field('get', 'one_night_amount') : null,
            w =
              e.$check_field('set', 'days_of_stay') ||
              e.$check_field('add', 'days_of_stay') ||
              e.$check_field('get', 'days_of_stay'),
            O = w
              ? (e.form['days_of_stay'] &&
                  e.$check_field('set', 'days_of_stay')) ||
                (!e.form['days_of_stay'] &&
                  e.$check_field('add', 'days_of_stay'))
              : null,
            P = w && !O ? e.$check_field('get', 'days_of_stay') : null,
            F =
              e.$check_field('set', 'total_hotel_stay') ||
              e.$check_field('add', 'total_hotel_stay') ||
              e.$check_field('get', 'total_hotel_stay'),
            T = F
              ? (e.form['total_hotel_stay'] &&
                  e.$check_field('set', 'total_hotel_stay')) ||
                (!e.form['total_hotel_stay'] &&
                  e.$check_field('add', 'total_hotel_stay'))
              : null,
            M = F && !T ? e.$check_field('get', 'total_hotel_stay') : null,
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
              e.$check_field('set', 'final_payment_for_hotel_stay') ||
              e.$check_field('add', 'final_payment_for_hotel_stay') ||
              e.$check_field('get', 'final_payment_for_hotel_stay'),
            N = J
              ? (e.form['final_payment_for_hotel_stay'] &&
                  e.$check_field('set', 'final_payment_for_hotel_stay')) ||
                (!e.form['final_payment_for_hotel_stay'] &&
                  e.$check_field('add', 'final_payment_for_hotel_stay'))
              : null,
            B =
              J && !N
                ? e.$check_field('get', 'final_payment_for_hotel_stay')
                : null,
            E =
              e.$check_field('set', 'time_of_stay') ||
              e.$check_field('add', 'time_of_stay') ||
              e.$check_field('get', 'time_of_stay'),
            q = E
              ? (e.form['time_of_stay'] &&
                  e.$check_field('set', 'time_of_stay')) ||
                (!e.form['time_of_stay'] &&
                  e.$check_field('add', 'time_of_stay'))
              : null,
            z = E && !q ? e.$check_field('get', 'time_of_stay') : null,
            L =
              e.$check_field('set', 'hotel_remarks') ||
              e.$check_field('add', 'hotel_remarks') ||
              e.$check_field('get', 'hotel_remarks'),
            G = L
              ? (e.form['hotel_remarks'] &&
                  e.$check_field('set', 'hotel_remarks')) ||
                (!e.form['hotel_remarks'] &&
                  e.$check_field('add', 'hotel_remarks'))
              : null,
            A = L && !G ? e.$check_field('get', 'hotel_remarks') : null
          e.$mp.data = Object.assign(
            {},
            {
              $root: {
                m0: o,
                m1: r,
                m2: _,
                m3: a,
                m4: s,
                m5: l,
                m6: n,
                m7: i,
                m8: c,
                m9: u,
                m10: m,
                m11: f,
                m12: d,
                m13: h,
                m14: g,
                m15: y,
                m16: k,
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
        a = []
    },
    4413: function (e, t, o) {
      'use strict'
      var r = o('fb6e'),
        _ = o.n(r)
      _.a
    },
    4962: function (e, t, o) {},
    '8cce': function (e, t, o) {
      'use strict'
      ;(function (e, t) {
        var r = o('4ea4')
        o('e411')
        r(o('66fd'))
        var _ = r(o('dc3c'))
        ;(e.__webpack_require_UNI_MP_PLUGIN__ = o), t(_.default)
      }).call(this, o('bc2e')['default'], o('543d')['createPage'])
    },
    dc3c: function (e, t, o) {
      'use strict'
      o.r(t)
      var r = o('2082'),
        _ = o('1b2e')
      for (var a in _)
        ['default'].indexOf(a) < 0 &&
          (function (e) {
            o.d(t, e, function () {
              return _[e]
            })
          })(a)
      o('4413'), o('ffdd')
      var s = o('f0c5'),
        l = Object(s['a'])(
          _['default'],
          r['b'],
          r['c'],
          !1,
          null,
          '520db75e',
          null,
          !1,
          r['a'],
          void 0
        )
      t['default'] = l.exports
    },
    fb6e: function (e, t, o) {},
    ffdd: function (e, t, o) {
      'use strict'
      var r = o('4962'),
        _ = o.n(r)
      _.a
    },
  },
  [['8cce', 'common/runtime', 'common/vendor']],
])
