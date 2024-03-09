;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/ticket_orders/edit'],
  {
    '261f': function (e, t, r) {
      'use strict'
      r.d(t, 'b', function () {
        return n
      }),
        r.d(t, 'c', function () {
          return a
        }),
        r.d(t, 'a', function () {
          return i
        })
      var i = {
          uniDataSelect: function () {
            return Promise.all([
              r.e('common/vendor'),
              r.e('components/uni-data-select/uni-data-select'),
            ]).then(r.bind(null, '1b47'))
          },
          uniDatetimePicker: function () {
            return Promise.all([
              r.e('common/vendor'),
              r.e('components/uni-datetime-picker/uni-datetime-picker'),
            ]).then(r.bind(null, '2626'))
          },
        },
        n = function () {
          var e = this,
            t = e.$createElement,
            r =
              (e._self._c,
              e.$check_field('set', 'regular_users') ||
                e.$check_field('add', 'regular_users') ||
                e.$check_field('get', 'regular_users')),
            i = r
              ? (e.form['regular_users'] &&
                  e.$check_field('set', 'regular_users')) ||
                (!e.form['regular_users'] &&
                  e.$check_field('add', 'regular_users'))
              : null,
            n = r && !i ? e.$check_field('get', 'regular_users') : null,
            a =
              e.$check_field('set', 'user_name') ||
              e.$check_field('add', 'user_name') ||
              e.$check_field('get', 'user_name'),
            s = a
              ? (e.form['user_name'] && e.$check_field('set', 'user_name')) ||
                (!e.form['user_name'] && e.$check_field('add', 'user_name'))
              : null,
            o = a && !s ? e.$check_field('get', 'user_name') : null,
            _ =
              e.$check_field('set', 'mobile_phone_number') ||
              e.$check_field('add', 'mobile_phone_number') ||
              e.$check_field('get', 'mobile_phone_number'),
            c = _
              ? (e.form['mobile_phone_number'] &&
                  e.$check_field('set', 'mobile_phone_number')) ||
                (!e.form['mobile_phone_number'] &&
                  e.$check_field('add', 'mobile_phone_number'))
              : null,
            u = _ && !c ? e.$check_field('get', 'mobile_phone_number') : null,
            l =
              e.$check_field('set', 'merchant_users') ||
              e.$check_field('add', 'merchant_users') ||
              e.$check_field('get', 'merchant_users'),
            m = l
              ? (e.form['merchant_users'] &&
                  e.$check_field('set', 'merchant_users')) ||
                (!e.form['merchant_users'] &&
                  e.$check_field('add', 'merchant_users'))
              : null,
            d = l && !m ? e.$check_field('get', 'merchant_users') : null,
            f =
              e.$check_field('set', 'merchant_name') ||
              e.$check_field('add', 'merchant_name') ||
              e.$check_field('get', 'merchant_name'),
            h = f
              ? (e.form['merchant_name'] &&
                  e.$check_field('set', 'merchant_name')) ||
                (!e.form['merchant_name'] &&
                  e.$check_field('add', 'merchant_name'))
              : null,
            k = f && !h ? e.$check_field('get', 'merchant_name') : null,
            g =
              e.$check_field('set', 'attraction_name') ||
              e.$check_field('add', 'attraction_name') ||
              e.$check_field('get', 'attraction_name'),
            b = g
              ? (e.form['attraction_name'] &&
                  e.$check_field('set', 'attraction_name')) ||
                (!e.form['attraction_name'] &&
                  e.$check_field('add', 'attraction_name'))
              : null,
            p = g && !b ? e.$check_field('get', 'attraction_name') : null,
            $ =
              e.$check_field('set', 'tourist_attraction_phone_number') ||
              e.$check_field('add', 'tourist_attraction_phone_number') ||
              e.$check_field('get', 'tourist_attraction_phone_number'),
            v = $
              ? (e.form['tourist_attraction_phone_number'] &&
                  e.$check_field('set', 'tourist_attraction_phone_number')) ||
                (!e.form['tourist_attraction_phone_number'] &&
                  e.$check_field('add', 'tourist_attraction_phone_number'))
              : null,
            y =
              $ && !v
                ? e.$check_field('get', 'tourist_attraction_phone_number')
                : null,
            j =
              e.$check_field('set', 'admission_price') ||
              e.$check_field('add', 'admission_price') ||
              e.$check_field('get', 'admission_price'),
            x = j
              ? (e.form['admission_price'] &&
                  e.$check_field('set', 'admission_price')) ||
                (!e.form['admission_price'] &&
                  e.$check_field('add', 'admission_price'))
              : null,
            D = j && !x ? e.$check_field('get', 'admission_price') : null,
            w =
              e.$check_field('set', 'ticket_quantity') ||
              e.$check_field('add', 'ticket_quantity') ||
              e.$check_field('get', 'ticket_quantity'),
            q = w
              ? (e.form['ticket_quantity'] &&
                  e.$check_field('set', 'ticket_quantity')) ||
                (!e.form['ticket_quantity'] &&
                  e.$check_field('add', 'ticket_quantity'))
              : null,
            O = w && !q ? e.$check_field('get', 'ticket_quantity') : null,
            P =
              e.$check_field('set', 'total_ticket_amount') ||
              e.$check_field('add', 'total_ticket_amount') ||
              e.$check_field('get', 'total_ticket_amount'),
            T = P
              ? (e.form['total_ticket_amount'] &&
                  e.$check_field('set', 'total_ticket_amount')) ||
                (!e.form['total_ticket_amount'] &&
                  e.$check_field('add', 'total_ticket_amount'))
              : null,
            M = P && !T ? e.$check_field('get', 'total_ticket_amount') : null,
            S =
              e.$check_field('set', 'booking_time') ||
              e.$check_field('add', 'booking_time') ||
              e.$check_field('get', 'booking_time'),
            F = S
              ? (e.form['booking_time'] &&
                  e.$check_field('set', 'booking_time')) ||
                (!e.form['booking_time'] &&
                  e.$check_field('add', 'booking_time'))
              : null,
            U = S && !F ? e.$check_field('get', 'booking_time') : null,
            I =
              e.$check_field('set', 'other_remarks') ||
              e.$check_field('add', 'other_remarks') ||
              e.$check_field('get', 'other_remarks'),
            J = I
              ? (e.form['other_remarks'] &&
                  e.$check_field('set', 'other_remarks')) ||
                (!e.form['other_remarks'] &&
                  e.$check_field('add', 'other_remarks'))
              : null,
            N = I && !J ? e.$check_field('get', 'other_remarks') : null
          e.$mp.data = Object.assign(
            {},
            {
              $root: {
                m0: r,
                m1: i,
                m2: n,
                m3: a,
                m4: s,
                m5: o,
                m6: _,
                m7: c,
                m8: u,
                m9: l,
                m10: m,
                m11: d,
                m12: f,
                m13: h,
                m14: k,
                m15: g,
                m16: b,
                m17: p,
                m18: $,
                m19: v,
                m20: y,
                m21: j,
                m22: x,
                m23: D,
                m24: w,
                m25: q,
                m26: O,
                m27: P,
                m28: T,
                m29: M,
                m30: S,
                m31: F,
                m32: U,
                m33: I,
                m34: J,
                m35: N,
              },
            }
          )
        },
        a = []
    },
    '297a': function (e, t, r) {
      'use strict'
      ;(function (e, t) {
        var i = r('4ea4')
        r('e411')
        i(r('66fd'))
        var n = i(r('8864'))
        ;(e.__webpack_require_UNI_MP_PLUGIN__ = r), t(n.default)
      }).call(this, r('bc2e')['default'], r('543d')['createPage'])
    },
    '2a3e': function (e, t, r) {
      'use strict'
      r.r(t)
      var i = r('d698'),
        n = r.n(i)
      for (var a in i)
        ['default'].indexOf(a) < 0 &&
          (function (e) {
            r.d(t, e, function () {
              return i[e]
            })
          })(a)
      t['default'] = n.a
    },
    '35e7': function (e, t, r) {
      'use strict'
      var i = r('764c'),
        n = r.n(i)
      n.a
    },
    3721: function (e, t, r) {},
    '5ec4': function (e, t, r) {
      'use strict'
      var i = r('3721'),
        n = r.n(i)
      n.a
    },
    '764c': function (e, t, r) {},
    8864: function (e, t, r) {
      'use strict'
      r.r(t)
      var i = r('261f'),
        n = r('2a3e')
      for (var a in n)
        ['default'].indexOf(a) < 0 &&
          (function (e) {
            r.d(t, e, function () {
              return n[e]
            })
          })(a)
      r('5ec4'), r('35e7')
      var s = r('f0c5'),
        o = Object(s['a'])(
          n['default'],
          i['b'],
          i['c'],
          !1,
          null,
          '27919940',
          null,
          !1,
          i['a'],
          void 0
        )
      t['default'] = o.exports
    },
    d698: function (e, t, r) {
      'use strict'
      ;(function (e) {
        var i = r('4ea4')
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = void 0)
        var n = i(r('2eee')),
          a = i(r('c973')),
          s = i(r('813d')),
          o = {
            mixins: [s.default],
            data: function () {
              return {
                url_get_obj: '~/api/ticket_orders/get_obj?',
                url_add: '~/api/ticket_orders/add?',
                url_set: '~/api/ticket_orders/set?',
                oauth: { signIn: !0, user_group: [] },
                query: {
                  regular_users: 0,
                  user_name: '',
                  mobile_phone_number: '',
                  merchant_users: 0,
                  merchant_name: '',
                  attraction_name: '',
                  tourist_attraction_phone_number: '',
                  admission_price: 0,
                  ticket_quantity: 0,
                  total_ticket_amount: '',
                  booking_time: '',
                  other_remarks: '',
                  ticket_orders_id: 0,
                },
                obj: {
                  regular_users: 0,
                  user_name: '',
                  mobile_phone_number: '',
                  merchant_users: 0,
                  merchant_name: '',
                  attraction_name: '',
                  tourist_attraction_phone_number: '',
                  admission_price: 0,
                  ticket_quantity: 0,
                  total_ticket_amount: '',
                  booking_time: this.$toTime(
                    new Date().getTime(),
                    'yyyy-MM-dd hh:mm:ss'
                  ),
                  other_remarks: '',
                  ticket_orders_id: 0,
                },
                form: {
                  regular_users: 0,
                  user_name: '',
                  mobile_phone_number: '',
                  merchant_users: 0,
                  merchant_name: '',
                  attraction_name: '',
                  tourist_attraction_phone_number: '',
                  admission_price: 0,
                  ticket_quantity: 0,
                  total_ticket_amount: '',
                  booking_time: this.$toTime(
                    new Date().getTime(),
                    'yyyy-MM-dd hh:mm:ss'
                  ),
                  other_remarks: '',
                  ticket_orders_id: 0,
                },
                disabledObj: {
                  regular_users_isDisabled: !1,
                  user_name_isDisabled: !1,
                  mobile_phone_number_isDisabled: !1,
                  merchant_users_isDisabled: !1,
                  merchant_name_isDisabled: !1,
                  attraction_name_isDisabled: !1,
                  tourist_attraction_phone_number_isDisabled: !1,
                  total_ticket_amount_isDisabled: !1,
                  booking_time_isDisabled: !1,
                  other_remarks_isDisabled: !1,
                },
                list_user_regular_users: [],
                list_user_merchant_users: [],
                field: 'ticket_orders_id',
                table_key: 'ticket_orders',
              }
            },
            methods: {
              submit_check: function (e) {
                return e.booking_time ? null : '预订时间不能为空'
              },
              get_list_user_regular_users: function () {
                var e = this
                return (0, a.default)(
                  n.default.mark(function t() {
                    var r
                    return n.default.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              e.$get('~/api/user/get_list?user_group=普通用户')
                            )
                          case 2:
                            ;(r = t.sent),
                              r.result && r.result.list
                                ? r.result.list.map(function (t) {
                                    return e.list_user_regular_users.push({
                                      value: t.user_id,
                                      text: t.nickname + '-' + t.username,
                                    })
                                  })
                                : r.error && console.error(r.error)
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
                  n.default.mark(function t() {
                    var r, i, a, s, o
                    return n.default.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (r = e),
                              (t.next = 3),
                              e.$get('~/api/user_group/get_obj?name=普通用户')
                            )
                          case 3:
                            ;(i = t.sent),
                              i.result && i.result.obj
                                ? ((a = i.result.obj.source_table),
                                  (s = r.$store.state.user.user_id),
                                  s &&
                                    ((o = '~/api/' + a + '/get_obj?'),
                                    e.$get(
                                      o,
                                      { user_id: r.$store.state.user.user_id },
                                      function (e) {
                                        if (e.result && e.result.obj) {
                                          var t = []
                                          for (var i in e.result.obj) t.push(i)
                                          var n = []
                                          for (var a in r.form) n.push(a)
                                          ;(r.form['regular_users'] = s),
                                            (r.disabledObj[
                                              'regular_users_isDisabled'
                                            ] = !0)
                                          for (var o = 0; o < t.length; o++)
                                            if (
                                              'examine_state' !== t[o] &&
                                              'examine_reply' !== t[o]
                                            )
                                              for (var _ = 0; _ < n.length; _++)
                                                if (
                                                  t[o] === n[_] &&
                                                  'regular_users' !== t[o]
                                                ) {
                                                  ;(r.form[n[_]] =
                                                    e.result.obj[t[o]]),
                                                    (r.disabledObj[
                                                      n[_] + '_isDisabled'
                                                    ] = !0)
                                                  break
                                                }
                                        }
                                      }
                                    )))
                                : i.error && console.error(i.error)
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
                  n.default.mark(function t() {
                    var r
                    return n.default.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              e.$get('~/api/user/get_list?user_group=商家用户')
                            )
                          case 2:
                            ;(r = t.sent),
                              r.result && r.result.list
                                ? r.result.list.map(function (t) {
                                    return e.list_user_merchant_users.push({
                                      value: t.user_id,
                                      text: t.nickname + '-' + t.username,
                                    })
                                  })
                                : r.error && console.error(r.error)
                          case 4:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )()
              },
              set_total_ticket_amount: function () {
                this.form.total_ticket_amount =
                  parseFloat(this.form.admission_price) *
                  parseFloat(this.form.ticket_quantity)
                ;/^\+?[1-9][0-9]*$/.test(this.form.total_ticket_amount) ||
                  (this.form.total_ticket_amount =
                    this.form.total_ticket_amount.toFixed(2))
              },
              change_file: function (t) {
                var r = this
                this.$chooseFile().then(function (i) {
                  console.log(i)
                  var n = e.uploadFile({
                    url: r.$fullUrl('/api/feedback/upload?'),
                    filePath: i[0].path,
                    name: 'file',
                    formData: { i_want_to_customize: 'test' },
                    header: { 'x-auth-token': r.$store.state.user.token },
                    success: function (e) {
                      console.log(e)
                      var i = JSON.parse(e.data).result.url
                      r.form[t] = i
                    },
                  })
                  n.onProgressUpdate(function (e) {
                    ;(r.percent = e.progress),
                      console.log('上传进度' + e.progress),
                      console.log('已经上传的数据长度' + e.totalBytesSent),
                      console.log(
                        '预期需要上传的数据总长度' + e.totalBytesExpectedToSend
                      )
                  })
                })
              },
              change_img: function (t) {
                var r = this
                ;(r.upload_img_flag = !1),
                  e.chooseImage({
                    count: 1,
                    sizeType: ['original', 'compressed'],
                    sourceType: ['album'],
                    success: function (i) {
                      var n = i.tempFilePaths,
                        a = e.uploadFile({
                          url: r.$fullUrl('/api/ticket_orders/upload?'),
                          filePath: n[0],
                          name: 'file',
                          formData: { ticket_orders: 'test' },
                          header: { 'x-auth-token': r.$store.state.user.token },
                          success: function (e) {
                            var i = JSON.parse(e.data).result.url,
                              n = i
                            r.form[t] = n
                          },
                        })
                      a.onProgressUpdate(function (e) {
                        ;(r.percent = e.progress),
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
                var r = e.db.get('form')
                r &&
                  (delete r.examine_state,
                  delete r.examine_reply,
                  (this.obj = e.push(this.obj, r)),
                  (this.form = e.push(this.form, r)))
                var i = []
                for (var n in r) i.push(n)
                for (var a = 0; a < i.length; a++)
                  this.disabledObj[i[a] + '_isDisabled'] = !0
                return (
                  this.form['booking_time'] &&
                    -1 ===
                      JSON.stringify(this.form['booking_time']).indexOf('-') &&
                    (this.form['booking_time'] = this.$toTime(
                      parseInt(this.form['booking_time']),
                      'yyyy-MM-dd hh:mm:ss'
                    )),
                  e.db.del('form'),
                  t
                )
              },
              get_obj_after: function (t, r) {
                var i = e.db.get('form'),
                  n = Object.assign({}, i, this.obj)
                i && (this.obj = e.push(this.obj, n)),
                  i && (this.form = e.push(this.form, i)),
                  r && r(t)
              },
            },
            onLoad: function () {
              this.get_user_session_regular_users(),
                this.get_list_user_regular_users(),
                this.get_list_user_merchant_users()
            },
          }
        t.default = o
      }).call(this, r('543d')['default'])
    },
  },
  [['297a', 'common/runtime', 'common/vendor']],
])
