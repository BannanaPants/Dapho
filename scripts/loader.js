! function(e) {
  function t(t) {
    for(var s, r, i = t[0], c = t[1], l = t[2], m = 0, f = []; m < i.length; m++) r = i[m], Object.prototype.hasOwnProperty.call(n, r) && n[r] && f.push(n[r][0]), n[r] = 0;
    for(s in c) Object.prototype.hasOwnProperty.call(c, s) && (e[s] = c[s]);
    for(u && u(t); f.length;) f.shift()();
    return o.push.apply(o, l || []), a()
  }

  function a() {
    for(var e, t = 0; t < o.length; t++) {
      for(var a = o[t], s = !0, i = 1; i < a.length; i++) {
        var c = a[i];
        0 !== n[c] && (s = !1)
      }
      console.log(JSON.stringify(o));
      s && (o.splice(t--, 1), e = r(r.s = a[0]))
    }
    return e
  }
  var s = {},
    n = {
      11: 0
    },
    o = [];

  function r(t) {
    if(s[t]) return s[t].exports;
    var a = s[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    if(typeof e[t] !== 'number') return e[t].call(a.exports, a, a.exports, r), a.l = !0, a.exports
  }
  r.m = e, r.c = s, r.d = function(e, t, a) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: a
    })
  }, r.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, r.t = function(e, t) {
    if(1 & t && (e = r(e)), 8 & t) return e;
    if(4 & t && "object" == typeof e && e && e.__esModule) return e;
    var a = Object.create(null);
    if(r.r(a), Object.defineProperty(a, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for(var s in e) r.d(a, s, function(t) {
        return e[t]
      }.bind(null, s));
    return a
  }, r.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return r.d(t, "a", t), t
  }, r.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, r.p = "/";
  var i = window.webpackJsonp = window.webpackJsonp || [],
    c = i.push.bind(i);
  i.push = t, i = i.slice();
  for(var l = 0; l < i.length; l++) t(i[l]);
  var u = c;
  o.push([0, 23, 20, 37, 19, 28, 33, 40, 29, 30, 27, 41, 32, 35, 31, 24, 26, 25, 36, 21, 38, 22, 34, 39, 0, 1, 4, 9, 2, 16, 14, 10, 8, 5, 7, 6, 18, 13, 12, 15, 17, 3]), a()
}({
  "+42v": function(e, t, a) {
    (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__statContainer___3mPyZ-camelCase{display:flex;flex-direction:row;align-items:center;height:50px;margin-right:10px}.styles__toysText___3J5Jz-camelCase{font-size:28px;font-weight:700;color:#3a3a3a;font-family:Nunito,sans-serif;text-align:right;margin-right:5px}.styles__toyImage___26l-4-camelCase{height:55%;width:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}", ""]), t.locals = {
      statContainer: "styles__statContainer___3mPyZ-camelCase",
      toysText: "styles__toysText___3J5Jz-camelCase",
      toyImage: "styles__toyImage___26l-4-camelCase"
    }
  },
  "+JpI": function(e, t, a) {
    var s = a("pZkE");
    "string" == typeof s && (s = [
      [e.i, s, ""]
    ]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a("aET+")(s, n);
    s.locals && (e.exports = s.locals)
  },
  "+KYW": function(e, t, a) {
    var s = a("v83B");
    "string" == typeof s && (s = [
      [e.i, s, ""]
    ]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a("aET+")(s, n);
    s.locals && (e.exports = s.locals)
  },
  "/qww": function(e, t, a) {
    "use strict";
    var s = a("q1tI"),
      n = a.n(s),
      o = a("/MKj"),
      r = a("wIs1"),
      i = a("b6Qr"),
      c = a("17x9"),
      l = a.n(c),
      u = a("iQ+n"),
      m = a("GIcp"),
      f = a.n(m),
      p = a("2g2H"),
      _ = a("SdQT"),
      d = a("anyA");

    function h(e) {
      return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function y(e, t, a, s, n, o, r) {
      try {
        var i = e[o](r),
          c = i.value
      } catch (e) {
        return void a(e)
      }
      i.done ? t(c) : Promise.resolve(c).then(s, n)
    }

    function w(e, t) {
      for(var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
    }

    function b(e, t) {
      return (b = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function g(e) {
      var t = function() {
        if("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if(Reflect.construct.sham) return !1;
        if("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }();
      return function() {
        var a, s = C(e);
        if(t) {
          var n = C(this).constructor;
          a = Reflect.construct(s, arguments, n)
        } else a = s.apply(this, arguments);
        return v(this, a)
      }
    }

    function v(e, t) {
      return !t || "object" !== h(t) && "function" != typeof t ? function(e) {
        if(void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }(e) : t
    }

    function C(e) {
      return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }
    var x = function(e) {
      ! function(e, t) {
        if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && b(e, t)
      }(l, e);
      var t, a, s, o, r, c = g(l);

      function l(e) {
        var t;
        return function(e, t) {
          if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, l), (t = c.call(this, e)).state = {}, t.here = !0, t
      }
      return t = l, (a = [{
        key: "componentDidMount",
        value: (o = regeneratorRuntime.mark((function e() {
          var t;
          return regeneratorRuntime.wrap((function(e) {
            for(;;) switch(e.prev = e.next) {
              case 0:
                return e.next = 2, this.props.user.getData();
              case 2:
                if((t = e.sent) && "Bot" === t.name) {
                  e.next = 5;
                  break
                }
                return e.abrupt("return", this.props.history.push("/login"));
              case 5:
              case "end":
                return e.stop()
            }
          }), e, this)
        })), r = function() {
          var e = this,
            t = arguments;
          return new Promise((function(a, s) {
            var n = o.apply(e, t);

            function r(e) {
              y(n, a, s, r, i, "next", e)
            }

            function i(e) {
              y(n, a, s, r, i, "throw", e)
            }
            r(void 0)
          }))
        }, function() {
          return r.apply(this, arguments)
        })
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.here = !1
        }
      }, {
        key: "render",
        value: function() {
          return n.a.createElement("div", {
            className: i.isMobile ? f.a.mBody : f.a.body
          }, n.a.createElement(u.a, {
            title: "Test Blooket",
            desc: "Pls don't come here."
          }), n.a.createElement(p.a, {
            name: "Ben",
            noRight: !0
          }), n.a.createElement("div", {
            className: f.a.regularBody
          }, "test"))
        }
      }]) && w(t.prototype, a), s && w(t, s), l
    }(n.a.Component);
    x.propTypes = {
      history: l.a.object,
      user: l.a.object
    }, t.a = Object(d.c)(Object(r.a)(Object(o.b)()(Object(_.d)(x))))
  },
  "05xZ": function(e, t, a) {
    (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__questionContainer___3Oyfn-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#292929}", ""]), t.locals = {
      questionContainer: "styles__questionContainer___3Oyfn-camelCase"
    }
  },
  "11cj": function(e, t, a) {
    (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__stageText___1SjJ9-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden}", ""]), t.locals = {
      stageText: "styles__stageText___1SjJ9-camelCase"
    }
  },
  "3DIO": function(e, t, a) {
    var s = a("3Gwu");
    "string" == typeof s && (s = [
      [e.i, s, ""]
    ]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a("aET+")(s, n);
    s.locals && (e.exports = s.locals)
  },
  "3GV5": function(e, t, a) {
    "use strict";
    var s = a("q1tI"),
      n = a.n(s),
      o = a("ANjH"),
      r = a("/MKj"),
      i = a("17x9"),
      c = a.n(i),
      l = a("wIs1"),
      u = a("mLw1"),
      m = a("b6Qr"),
      f = a("vDqi"),
      p = a.n(f),
      _ = a("Tiit"),
      d = a("pMbe"),
      h = a("vBtp"),
      y = a.n(h),
      w = a("GIcp"),
      b = a.n(w),
      g = a("dJL0"),
      v = a("iQ+n"),
      C = a("anyA"),
      x = a("ZENw"),
      k = a("bpVs");

    function T(e) {
      return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function S(e, t, a, s, n, o, r) {
      try {
        var i = e[o](r),
          c = i.value
      } catch (e) {
        return void a(e)
      }
      i.done ? t(c) : Promise.resolve(c).then(s, n)
    }

    function E(e, t) {
      for(var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
    }

    function I(e, t) {
      return (I = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function O(e) {
      var t = function() {
        if("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if(Reflect.construct.sham) return !1;
        if("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }();
      return function() {
        var a, s = B(e);
        if(t) {
          var n = B(this).constructor;
          a = Reflect.construct(s, arguments, n)
        } else a = s.apply(this, arguments);
        return N(this, a)
      }
    }

    function N(e, t) {
      return !t || "object" !== T(t) && "function" != typeof t ? j(e) : t
    }

    function j(e) {
      if(void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function B(e) {
      return (B = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }
    var R = function(e) {
        return n.a.createElement("div", {
          className: y.a.stageText
        }, 33 === e.stagesCleared ? "You Won!" : "".concat(e.stagesCleared, " ").concat(1 === e.stagesCleared ? "Stage" : "Stages"))
      },
      z = function(e) {
        ! function(e, t) {
          if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && I(e, t)
        }(c, e);
        var t, a, s, o, r, i = O(c);

        function c(e) {
          var t;
          return function(e, t) {
            if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, c), (t = i.call(this, e)).state = {
            ready: !1,
            numCorrect: 0,
            numQuestions: 0,
            standings: [],
            plus: !1,
            stagesCleared: 0,
            message: "",
            name: ""
          }, t.here = !0, t.stats = {}, t.saveStats = t.saveStats.bind(j(t)), t
        }
        return t = c, (a = [{
          key: "componentDidMount",
          value: (o = regeneratorRuntime.mark((function e() {
            var t, a, s, n, o, r, i, c, l = this;
            return regeneratorRuntime.wrap((function(e) {
              for(;;) switch(e.prev = e.next) {
                case 0:
                  if(this.props.tower && "final" === this.props.tower.stage) {
                    e.next = 2;
                    break
                  }
                  return e.abrupt("return", this.props.history.push("/login"));
                case 2:
                  return e.next = 4, this.props.user.getData();
                case 4:
                  (t = e.sent) || this.setState({
                    notLoggedIn: !0
                  }), this.props.tower && this.props.tower.resultId && p.a.put("/api/results", {
                    id: this.props.tower.resultId,
                    data: {
                      corrects: this.props.tower.corrects,
                      incorrects: this.props.tower.incorrects,
                      stage: this.props.tower.numNodes,
                      alive: !1
                    }
                  }).catch((function(e) {
                    return console.error(e)
                  })), a = 0, s = 0, Object.values(this.props.tower.corrects).forEach((function(e) {
                    a += e, s += e
                  })), Object.values(this.props.tower.incorrects).forEach((function(e) {
                    s += e
                  })), n = Math.max(this.props.tower.numNodes - 1, 0), o = 34 - n, r = "Chick", i = 0, this.props.tower.cards.forEach((function(e) {
                    var t = e.strength + e.charisma + e.wisdom;
                    t > i && (i = t, r = e.blook)
                  })), c = this.props.client && this.props.client.name ? this.props.client.name : "You", this.stats = {
                    place: o,
                    stagesCleared: n,
                    correctAnswers: a,
                    blookUsed: r,
                    nameUsed: c
                  }, t && (this.saveStats(t.name, (function() {})), p.a.put("/api/users/plan", {
                    name: t.name,
                    stripeId: t.stripe
                  }).then((function(e) {
                    l.here && l.setState({
                      ready: !0,
                      name: t.name,
                      plus: "Starter" !== e.data.plan || l.props.client && l.props.client.plus
                    })
                  })).catch((function(e) {
                    console.error(e)
                  })), this.props.tower.towerId && (p.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null, p.a.delete("/api/towers", {
                    params: {
                      name: t.name,
                      id: this.props.tower.towerId
                    }
                  }).catch((function(e) {
                    console.error(e)
                  })))), this.setState({
                    numCorrect: a,
                    numQuestions: s,
                    stagesCleared: n,
                    message: Object(k.a)((o - 1) / 33),
                    ready: !this.props.tower.towerId || this.state.ready,
                    standings: [{
                      name: c,
                      blook: r,
                      place: o,
                      stagesCleared: n
                    }]
                  });
                case 20:
                case "end":
                  return e.stop()
              }
            }), e, this)
          })), r = function() {
            var e = this,
              t = arguments;
            return new Promise((function(a, s) {
              var n = o.apply(e, t);

              function r(e) {
                S(n, a, s, r, i, "next", e)
              }

              function i(e) {
                S(n, a, s, r, i, "throw", e)
              }
              r(void 0)
            }))
          }, function() {
            return r.apply(this, arguments)
          })
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.props.deleteTower(), this.props.deleteClient(), this.here = !1
          }
        }, {
          key: "saveStats",
          value: function(e, t) {
            p.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null, p.a.put("/api/users/towerstats", {
              name: e,
              place: this.stats.place,
              stagesCleared: this.stats.stagesCleared,
              blookUsed: this.stats.blookUsed,
              nameUsed: this.stats.nameUsed,
              correctAnswers: this.stats.correctAnswers
            }).then((function() {
              t()
            })).catch((function(e) {
              console.error(e)
            }))
          }
        }, {
          key: "render",
          value: function() {
            if(this.props.tower && this.props.tower.resultId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || !this.props.tower) return n.a.createElement(u.a, {
              to: "/login"
            });
            var e = this.props.tower && this.props.tower.resultId;
            return n.a.createElement("div", {
              className: m.isMobile ? b.a.mBody : b.a.body,
              style: {
                backgroundColor: "#292929"
              }
            }, n.a.createElement(v.a, {
              title: "Play Tower of Doom | Blooket",
              desc: "Ascend the feared Tower of Doom by answering questions and building a deck to defeat evil Blooks on your way to the top."
            }), n.a.createElement(g.a, {
              noRight: !e,
              rightText: "Play Again",
              rightLink: "/play"
            }), this.state.ready ? n.a.createElement(x.a, {
              standings: this.state.standings,
              name: this.props.client && this.props.client.name ? this.props.client.name : "You",
              numCorrect: this.state.numCorrect,
              numQuestions: this.state.numQuestions,
              username: this.state.name,
              plus: this.state.plus,
              myStat: 33 === this.state.stagesCleared ? "You Won!" : "Cleared ".concat(this.state.stagesCleared, " ").concat(1 === this.state.stagesCleared ? "Stage" : "Stages"),
              saveStats: this.saveStats,
              renderStandingStat: R,
              renderStats: function() {},
              customMessage: this.state.message,
              tokenMultiplier: .35
            }) : null)
          }
        }]) && E(t.prototype, a), s && E(t, s), c
      }(n.a.Component);
    z.propTypes = {
      history: c.a.object.isRequired,
      tower: c.a.object,
      client: c.a.object,
      deleteTower: c.a.func.isRequired,
      deleteClient: c.a.func.isRequired,
      user: c.a.object
    };
    t.a = Object(C.c)(Object(l.a)(Object(r.b)((function(e) {
      return {
        tower: e.towers.tower,
        client: e.clients.client
      }
    }), (function(e) {
      return Object(o.b)({
        deleteTower: _.a,
        deleteClient: d.a
      }, e)
    }))(z)))
  },
  "3Gwu": function(e, t, a) {
    (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__feedbackContainer___3xVK8-camelCase{position:absolute;top:0;left:0;width:100%;height:100%}.styles__feedbackContainer___3xVK8-camelCase,.styles__winterBackground___MZ3LX-camelCase{background-image:linear-gradient(#31aae0,#bdf)}.styles__winterBackground___MZ3LX-camelCase{overflow:hidden}.styles__header___1v1iz-camelCase{color:#fff;text-shadow:2px 2px 8px grey;text-align:center;top:10%;left:50%;transform:translateX(-50%);width:640px;font-family:Titan One,sans-serif;font-size:52px}.styles__choice___3rOIi-camelCase,.styles__header___1v1iz-camelCase{position:absolute}.styles__choice___3rOIi-camelCase{width:250px;height:250px;background-color:#f23941;top:45%;border-radius:50%;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:column;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__choice___3rOIi-camelCase:focus,.styles__choice___3rOIi-camelCase:hover{transform:scale(.96)}.styles__choiceInside___1exMC-camelCase{width:220px;height:220px;background-color:#f23941;border-radius:50%;border:5px solid #fff;display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__choiceLeft___3rcEW-camelCase{right:calc(50% + 50px)}.styles__choiceRight___yg21f-camelCase{left:calc(50% + 50px)}.styles__choiceBlook___mkVgP-camelCase{height:85px;width:74px;margin-bottom:10px}.styles__choiceText___1siIC-camelCase{font-family:Nunito,sans-serif;font-size:26px;line-height:28px;color:#fff;font-weight:700;text-align:center;width:75%}.styles__choiceDuck___2wqRY-camelCase{height:24px}.styles__mountainsBackground___3XPzH-camelCase{z-index:-1;bottom:0}.styles__mountainsBackground___3XPzH-camelCase,.styles__plowSnow___7FChz-camelCase{position:absolute;left:0;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__plowSnow___7FChz-camelCase{top:0;height:100%;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);z-index:16;-webkit-animation:styles__plowSnow___7FChz-camelCase 8s linear 0s forwards;animation:styles__plowSnow___7FChz-camelCase 8s linear 0s forwards}@-webkit-keyframes styles__plowSnow___7FChz-camelCase{0%{transform:translateY(100%)}25%{transform:translate(0)}to{transform:translate(140%)}}@keyframes styles__plowSnow___7FChz-camelCase{0%{transform:translateY(100%)}25%{transform:translate(0)}to{transform:translate(140%)}}.styles__plow___2Z6UE-camelCase{position:absolute;top:50%;right:0;font-size:30vw;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#ff751a;z-index:16;transform:translate(100vw,-50%);pointer-events:none;-webkit-animation:styles__plow___2Z6UE-camelCase 6s linear 2s forwards;animation:styles__plow___2Z6UE-camelCase 6s linear 2s forwards}@-webkit-keyframes styles__plow___2Z6UE-camelCase{0%{transform:translate(-100vw,-50%)}to{transform:translate(40vw,-50%)}}@keyframes styles__plow___2Z6UE-camelCase{0%{transform:translate(-100vw,-50%)}to{transform:translate(40vw,-50%)}}.styles__plowBlook___3JBzy-camelCase{position:absolute;top:calc(50% - 6vw);right:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:15;width:10vw;transform:translate(100vw,-50%);pointer-events:none;-webkit-animation:styles__plowBlook___3JBzy-camelCase 6s linear 2s forwards;animation:styles__plowBlook___3JBzy-camelCase 6s linear 2s forwards}@-webkit-keyframes styles__plowBlook___3JBzy-camelCase{0%{transform:translate(-116.5vw,-50%)}to{transform:translate(23.5vw,-50%)}}@keyframes styles__plowBlook___3JBzy-camelCase{0%{transform:translate(-116.5vw,-50%)}to{transform:translate(23.5vw,-50%)}}.styles__canada1___2sxyq-camelCase{left:0;width:33.3%;background-color:#eb2d37}.styles__canada1___2sxyq-camelCase,.styles__canada2___2JKra-camelCase{position:absolute;top:0;height:100%;opacity:.4;z-index:25;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.styles__canada2___2JKra-camelCase{left:33.3%;width:33.4%;background-color:#fff}.styles__canada3___2rH5i-camelCase{top:0;right:0;width:33.3%;height:100%;background-color:#eb2d37;z-index:25}.styles__canada3___2rH5i-camelCase,.styles__canadaIcon___3rLt9-camelCase{position:absolute;opacity:.4;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.styles__canadaIcon___3rLt9-camelCase{top:50%;left:50%;transform:translate(-50%,-50%);font-size:17vw;color:#eb2d37;z-index:26}.styles__wind___md2wr-camelCase{position:absolute;top:0;left:0;height:100%;width:100%;-webkit-animation:styles__blow___3vENr-camelCase 5s linear 2s forwards;animation:styles__blow___3vENr-camelCase 5s linear 2s forwards}@-webkit-keyframes styles__blow___3vENr-camelCase{0%{transform:translate(0)}49.5%{transform:translate(100%);opacity:1}49.75%{transform:translate(100%);opacity:0}49.85%{transform:translate(100%,100%);opacity:0}50.15%{transform:translate(-100%,100%);opacity:0}50.25%{transform:translate(-100%);opacity:0}50.5%{transform:translate(-100%);opacity:1}to{transform:translate(0)}}@keyframes styles__blow___3vENr-camelCase{0%{transform:translate(0)}49.5%{transform:translate(100%);opacity:1}49.75%{transform:translate(100%);opacity:0}49.85%{transform:translate(100%,100%);opacity:0}50.15%{transform:translate(-100%,100%);opacity:0}50.25%{transform:translate(-100%);opacity:0}50.5%{transform:translate(-100%);opacity:1}to{transform:translate(0)}}.styles__treeContainer___2KQ2a-camelCase{position:absolute;top:50vw;left:50vw;height:20vw;width:20vw;margin-left:-10vw;margin-top:-10vw;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;z-index:12;transition:.5s}.styles__treeContainer___2KQ2a-camelCase:hover{transform:scale(1.03)}.styles__playerWrapper___2-VFL-camelCase,.styles__treeImg___1r_wI-camelCase{height:100%;width:100%}.styles__playerWrapper___2-VFL-camelCase{display:flex;flex-flow:column;position:absolute;top:0;left:0;overflow-x:hidden;-webkit-animation:styles__fadeIn___3xl7O-camelCase .2s;animation:styles__fadeIn___3xl7O-camelCase .2s}.styles__playerHeader___2J6XY-camelCase{font-size:48px;margin:30px auto 0;text-shadow:2px 2px 8px grey;color:#fff;width:90%;text-align:center;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__playerHolder___3xkBQ-camelCase{display:flex;flex-flow:row wrap;justify-content:center;width:80%;margin:30px auto;-webkit-animation:styles__fadeIn___3xl7O-camelCase .2s;animation:styles__fadeIn___3xl7O-camelCase .2s}@-webkit-keyframes styles__fadeIn___3xl7O-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___3xl7O-camelCase{0%{opacity:0}to{opacity:1}}.styles__noPlayers___1Gsgj-camelCase{width:220px;height:80px;line-height:60px;background-color:#eb2d37;border-radius:5px;box-shadow:5px 5px 0 rgba(0,0,0,.2);box-sizing:border-box;padding:7px;font-family:Nunito,sans-serif;font-weight:700;cursor:pointer;text-align:center;text-decoration:none;display:flex;justify-content:center;align-items:center;outline:none;font-size:30px;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;top:calc(50% - 30px);left:calc(50% - 100px);transition:.2s}.styles__noPlayers___1Gsgj-camelCase:hover{transform:scale(.95)}.styles__playerInside___1KfGH-camelCase{border:5px solid #fff;width:100%;flex-direction:row}.styles__playerContainer___3KJxS-camelCase,.styles__playerInside___1KfGH-camelCase{background-color:#eb2d37;box-sizing:border-box;display:flex;align-items:center;justify-content:center}.styles__playerContainer___3KJxS-camelCase{color:#fff;border-radius:5px;box-shadow:5px 5px 0 rgba(0,0,0,.2);font-family:Nunito,sans-serif;padding:7px;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;margin:10px;min-width:295px;transition:.2s}.styles__playerContainer___3KJxS-camelCase:focus,.styles__playerContainer___3KJxS-camelCase:hover{transform:scale(.97)}.styles__playerBlook___1uY7--camelCase{width:52px;margin:auto 5px auto 10px}.styles__playerColumn___3zfK7-camelCase{display:flex;flex-direction:column;flex-grow:1;margin:2.5px 10px}.styles__playerText___3gYo--camelCase{font-family:Nunito,sans-serif;word-wrap:break-word;font-weight:700;font-size:28px;margin:2.5px 10px 2.5px 0;line-height:30px}.styles__toyRow___3h1k9-camelCase{height:35px;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.styles__playerToys___1B13a-camelCase{font-family:Nunito,sans-serif;font-size:26px}.styles__toyIcon___2lHbQ-camelCase{height:60%;width:auto;margin:auto 5px auto 10px}.styles__sabotageContainer___NENAN-camelCase{position:absolute;top:70px;left:15px;background-color:rgba(0,0,0,.4);border-radius:5px;padding:7px 10px;font-size:28px;font-weight:700;font-family:Nunito,sans-serif;color:#fff;display:flex;flex-direction:row;align-items:center;-webkit-animation:styles__sabotageFade___10Dnc-camelCase 6s linear;animation:styles__sabotageFade___10Dnc-camelCase 6s linear}@-webkit-keyframes styles__sabotageFade___10Dnc-camelCase{0%{opacity:0}5%{opacity:1}95%{opacity:1}to{opacity:0}}@keyframes styles__sabotageFade___10Dnc-camelCase{0%{opacity:0}5%{opacity:1}95%{opacity:1}to{opacity:0}}.styles__sabotageBlook___3Cle0-camelCase{height:40px;width:35px;margin-right:7px}@media only screen and (max-width:650px){.styles__header___1v1iz-camelCase{top:5%;width:300px}.styles__header___1v1iz-camelCase,.styles__playerHeader___2J6XY-camelCase{font-size:36px;line-height:38px}.styles__choice___3rOIi-camelCase{width:160px;height:160px;top:45%}.styles__choice___3rOIi-camelCase:focus,.styles__choice___3rOIi-camelCase:hover{transform:scale(1)}.styles__choiceInside___1exMC-camelCase{width:140px;height:140px;border:5px solid #fff}.styles__choiceLeft___3rcEW-camelCase{right:calc(50% - 20px);bottom:calc(50% - 60px);top:auto}.styles__choiceRight___yg21f-camelCase{left:calc(50% - 20px);top:calc(50% + 40px)}.styles__choiceBlook___mkVgP-camelCase{height:56px;width:49px;margin-bottom:6px}.styles__choiceText___1siIC-camelCase{font-size:18px;line-height:20px;font-weight:700;width:75%}.styles__choiceDuck___2wqRY-camelCase{height:18px}.styles__treeContainer___2KQ2a-camelCase{height:30vw;width:30vw;margin-left:-15vw;margin-top:-15vw}.styles__playerContainer___3KJxS-camelCase{width:100%}.styles__noPlayers___1Gsgj-camelCase:hover,.styles__playerContainer___3KJxS-camelCase:focus,.styles__playerContainer___3KJxS-camelCase:hover{transform:scale(1)}}", ""]), t.locals = {
      feedbackContainer: "styles__feedbackContainer___3xVK8-camelCase",
      winterBackground: "styles__winterBackground___MZ3LX-camelCase",
      header: "styles__header___1v1iz-camelCase",
      choice: "styles__choice___3rOIi-camelCase",
      choiceInside: "styles__choiceInside___1exMC-camelCase",
      choiceLeft: "styles__choiceLeft___3rcEW-camelCase",
      choiceRight: "styles__choiceRight___yg21f-camelCase",
      choiceBlook: "styles__choiceBlook___mkVgP-camelCase",
      choiceText: "styles__choiceText___1siIC-camelCase",
      choiceDuck: "styles__choiceDuck___2wqRY-camelCase",
      mountainsBackground: "styles__mountainsBackground___3XPzH-camelCase",
      plowSnow: "styles__plowSnow___7FChz-camelCase",
      plow: "styles__plow___2Z6UE-camelCase",
      plowBlook: "styles__plowBlook___3JBzy-camelCase",
      canada1: "styles__canada1___2sxyq-camelCase",
      canada2: "styles__canada2___2JKra-camelCase",
      canada3: "styles__canada3___2rH5i-camelCase",
      canadaIcon: "styles__canadaIcon___3rLt9-camelCase",
      wind: "styles__wind___md2wr-camelCase",
      blow: "styles__blow___3vENr-camelCase",
      treeContainer: "styles__treeContainer___2KQ2a-camelCase",
      playerWrapper: "styles__playerWrapper___2-VFL-camelCase",
      treeImg: "styles__treeImg___1r_wI-camelCase",
      fadeIn: "styles__fadeIn___3xl7O-camelCase",
      playerHeader: "styles__playerHeader___2J6XY-camelCase",
      playerHolder: "styles__playerHolder___3xkBQ-camelCase",
      noPlayers: "styles__noPlayers___1Gsgj-camelCase",
      playerInside: "styles__playerInside___1KfGH-camelCase",
      playerContainer: "styles__playerContainer___3KJxS-camelCase",
      playerBlook: "styles__playerBlook___1uY7--camelCase",
      playerColumn: "styles__playerColumn___3zfK7-camelCase",
      playerText: "styles__playerText___3gYo--camelCase",
      toyRow: "styles__toyRow___3h1k9-camelCase",
      playerToys: "styles__playerToys___1B13a-camelCase",
      toyIcon: "styles__toyIcon___2lHbQ-camelCase",
      sabotageContainer: "styles__sabotageContainer___NENAN-camelCase",
      sabotageFade: "styles__sabotageFade___10Dnc-camelCase",
      sabotageBlook: "styles__sabotageBlook___3Cle0-camelCase"
    }
  },
  "4CQy": function(e, t, a) {
    "use strict";
    a.d(t, "a", (function() {
      return s
    })), a.d(t, "b", (function() {
      return n
    }));
    var s = {
        "Oh Canada": "c",
        Blizzard: "b",
        "Fog Spell": "f",
        "Dark & Dusk": "d",
        "Howling Wind": "w",
        "Gift Time!": "g",
        TREES: "t",
        "Snow Plow": "s",
        "Use The Force": "fr"
      },
      n = {
        c: "Oh Canada",
        b: "Blizzard",
        f: "Fog Spell",
        d: "Dark & Dusk",
        w: "Howling Wind",
        g: "Gift Time!",
        t: "TREES",
        s: "Snow Plow",
        fr: "Use The Force"
      }
  },
  "4MCU": function(e, t, a) {
    "use strict";
    a.d(t, "a", (function() {
      return n
    })), a.d(t, "c", (function() {
      return o
    })), a.d(t, "g", (function() {
      return r
    })), a.d(t, "d", (function() {
      return i
    })), a.d(t, "f", (function() {
      return c
    })), a.d(t, "b", (function() {
      return l
    })), a.d(t, "e", (function() {
      return u
    }));
    var s = a("SLYh");

    function n(e, t, a) {
      return {
        type: s.a,
        corrects: e,
        incorrects: t,
        freeQuestions: a
      }
    }

    function o(e) {
      return {
        type: s.c,
        cards: e
      }
    }

    function r(e) {
      return {
        type: s.g,
        stage: e
      }
    }

    function i(e) {
      return {
        type: s.d,
        coins: e
      }
    }

    function c(e) {
      return {
        type: s.f,
        life: e
      }
    }

    function l(e) {
      return {
        type: s.b,
        artifacts: e
      }
    }

    function u(e) {
      return {
        type: s.e,
        instruct: e
      }
    }
  },
  "4otw": function(e, t, a) {
    "use strict";
    a.d(t, "b", (function() {
      return X
    }));
    var s = a("q1tI"),
      n = a.n(s),
      o = a("ANjH"),
      r = a("/MKj"),
      i = a("17x9"),
      c = a.n(i),
      l = a("mf+E"),
      u = a("wIs1"),
      m = a("b6Qr"),
      f = a("TSYQ"),
      p = a.n(f),
      _ = a("4CQy"),
      d = a("AcTT"),
      h = a("pMbe"),
      y = a("iQ+n"),
      w = a("3DIO"),
      b = a.n(w),
      g = a("GIcp"),
      v = a.n(g),
      C = a("2g2H"),
      x = a("SdQT"),
      k = a("FPhr"),
      T = a("6hcl"),
      S = a("DoX5"),
      E = a("e/rn"),
      I = a("iIA2"),
      O = a("+kc2"),
      N = a.n(O),
      j = a("vimH"),
      B = a("H3Sp"),
      R = a("SCqF"),
      z = a("1OG6"),
      P = a("TN+F");

    function A(e) {
      return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function D(e) {
      return function(e) {
        if(Array.isArray(e)) return H(e)
      }(e) || function(e) {
        if("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
      }(e) || M(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function q(e, t) {
      return function(e) {
        if(Array.isArray(e)) return e
      }(e) || function(e, t) {
        if("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var a = [],
          s = !0,
          n = !1,
          o = void 0;
        try {
          for(var r, i = e[Symbol.iterator](); !(s = (r = i.next()).done) && (a.push(r.value), !t || a.length !== t); s = !0);
        } catch (e) {
          n = !0, o = e
        } finally {
          try {
            s || null == i.return || i.return()
          } finally {
            if(n) throw o
          }
        }
        return a
      }(e, t) || M(e, t) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function M(e, t) {
      if(e) {
        if("string" == typeof e) return H(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? H(e, t) : void 0
      }
    }

    function H(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for(var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
      return s
    }

    function Q(e, t, a, s, n, o, r) {
      try {
        var i = e[o](r),
          c = i.value
      } catch (e) {
        return void a(e)
      }
      i.done ? t(c) : Promise.resolve(c).then(s, n)
    }

    function L(e, t) {
      for(var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
    }

    function J(e, t) {
      return (J = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function W(e) {
      var t = function() {
        if("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if(Reflect.construct.sham) return !1;
        if("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }();
      return function() {
        var a, s = U(e);
        if(t) {
          var n = U(this).constructor;
          a = Reflect.construct(s, arguments, n)
        } else a = s.apply(this, arguments);
        return F(this, a)
      }
    }

    function F(e, t) {
      return !t || "object" !== A(t) && "function" != typeof t ? G(e) : t
    }

    function G(e) {
      if(void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function U(e) {
      return (U = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }
    var K = [{
        type: "toys",
        val: 10,
        rate: .1,
        blook: "Baby Penguin",
        text: "+ 10 Toys"
      }, {
        type: "toys",
        val: 25,
        rate: .11,
        blook: "Seal",
        text: "+ 25 Toys"
      }, {
        type: "toys",
        val: 50,
        rate: .085,
        blook: "Polar Bear",
        text: "+ 50 Toys"
      }, {
        type: "toys",
        val: 75,
        rate: .06,
        blook: "Unicorn",
        text: "+ 75 Toys"
      }, {
        type: "toys",
        val: 100,
        rate: .035,
        blook: "King",
        text: "+ 100 Toys"
      }, {
        type: "mult",
        val: 2,
        rate: .03,
        blook: "Penguin",
        text: "Double Toys"
      }, {
        type: "mult",
        val: 3,
        rate: .015,
        blook: "Holiday Wreath",
        text: "Triple Toys"
      }, {
        type: "tpq",
        val: 1,
        rate: .08,
        blook: "Snowy Owl",
        text: "+ 1 Toys Per Question"
      }, {
        type: "tpq",
        val: 5,
        rate: .11,
        blook: "Arctic Hare",
        text: "+ 5 Toys Per Question"
      }, {
        type: "tpq",
        val: 10,
        rate: .095,
        blook: "Arctic Fox",
        text: "+ 10 Toys Per Question"
      }, {
        type: "tpq",
        val: 15,
        rate: .07,
        blook: "Walrus",
        text: "+ 15 Toys Per Question"
      }, {
        type: "tpq",
        val: 20,
        rate: .05,
        blook: "Dragon",
        text: "+ 20 Toys Per Question"
      }, {
        type: "tpq",
        val: 25,
        rate: .025,
        blook: "Wizard",
        text: "+ 25 Toys Per Question"
      }, {
        type: "mult-tpq",
        val: 2,
        rate: .03,
        blook: "Hot Chocolate",
        text: "Double Toys Per Question"
      }, {
        type: "mult-tpq",
        val: 3,
        rate: .015,
        blook: "Snowman",
        text: "Triple Toys Per Question"
      }, {
        type: "take",
        val: .1,
        rate: .025,
        blook: "Gingerbread House",
        text: "Take 10%"
      }, {
        type: "take",
        val: .25,
        rate: .0242,
        blook: "Gingerbread Man",
        text: "Take 25%"
      }, {
        type: "swap",
        rate: .02,
        blook: "Santa Claus",
        text: "SWAP"
      }, {
        type: "sab",
        rate: .002,
        blook: "Moose",
        text: "Oh Canada"
      }, {
        type: "sab",
        rate: .0065,
        blook: "Snow Globe",
        text: "Blizzard"
      }, {
        type: "sab",
        rate: .002,
        blook: "Fairy",
        text: "Fog Spell"
      }, {
        type: "sab",
        rate: .002,
        blook: "Raccoon",
        text: "Dark & Dusk"
      }, {
        type: "sab",
        rate: .002,
        blook: "Cockatoo",
        text: "Howling Wind"
      }, {
        type: "sab",
        rate: .002,
        blook: "Holiday Gift",
        text: "Gift Time!"
      }, {
        type: "sab",
        rate: .002,
        blook: "Elf",
        text: "TREES"
      }, {
        type: "sab",
        rate: .002,
        blook: "Werewolf",
        text: "Snow Plow"
      }, {
        type: "sab",
        rate: 3e-4,
        blook: "Spooky Ghost",
        text: "Use The Force"
      }],
      Y = function(e) {
        if(e.includes("Toys")) {
          var t = e.split("Toys");
          return n.a.createElement(n.a.Fragment, null, t[0], n.a.createElement("img", {
            src: E.a,
            alt: "Duck Toy",
            className: b.a.choiceDuck,
            draggable: !1
          }), t[1])
        }
        return e
      },
      X = [{
        top: 20,
        left: 15
      }, {
        top: 20,
        left: 40
      }, {
        top: 80,
        left: 65
      }, {
        top: 25,
        left: 80
      }, {
        top: 80,
        left: 30
      }, {
        top: 60,
        left: 50
      }, {
        top: 70,
        left: 12.5
      }, {
        top: 30,
        left: 60
      }, {
        top: 40,
        left: 27.5
      }, {
        top: 70,
        left: 85
      }],
      V = function(e) {
        ! function(e, t) {
          if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && J(e, t)
        }(c, e);
        var t, a, s, o, r, i = W(c);

        function c(e) {
          var t;
          return function(e, t) {
            if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, c), (t = i.call(this, e)).state = {
            question: {},
            correct: !1,
            toys: 0,
            toysPerQ: 1,
            stage: "",
            choices: [],
            gift: !1,
            giftText: "",
            fog: !1,
            dusk: !1,
            wind: !1,
            plow: !1,
            blizzard: !1,
            force: !1,
            canada: !1,
            trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1],
            players: [],
            phaseTwo: !1,
            attackerMsg: "",
            attackerBlook: ""
          }, t.dbRefStage = {}, t.dbRefMe = {}, t.dbRefAction = {}, t.here = !0, t.waiting = !1, t.corrects = {}, t.incorrects = {}, t.nextReady = !1, t.picking = !1, t.gettingQuestion = !1, t.choosingPlayer = !1, t.questions = [], t.freeQuestions = [], t.onAnswer = t.onAnswer.bind(G(t)), t.answerNext = t.answerNext.bind(G(t)), t.randomQ = t.randomQ.bind(G(t)), t.choose = t.choose.bind(G(t)), t.clickTree = t.clickTree.bind(G(t)), t.sendGift = t.sendGift.bind(G(t)), t
        }
        return t = c, (a = [{
          key: "componentDidMount",
          value: (o = regeneratorRuntime.mark((function e() {
            var t = this;
            return regeneratorRuntime.wrap((function(e) {
              for(;;) switch(e.prev = e.next) {
                case 0:
                  if(this.props.client && this.props.client.questions && this.props.client.questions[0]) {
                    e.next = 2;
                    break
                  }
                  return e.abrupt("return");
                case 2:
                  return Object(P.c)(), e.next = 5, this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                case 5:
                  return this.dbRefStage = e.sent, this.dbRefStage.on("value", (function(e) {
                    switch(e.val()) {
                      case "fin":
                        t.props.firebase.getDatabaseVal(t.props.client.hostId, "st", (function(e) {
                          var a = e ? e.map((function(e) {
                            return {
                              name: e.n,
                              blook: e.b,
                              toys: e.t || 0,
                              place: e.p
                            }
                          })) : [];
                          t.props.setGoldFinal(t.corrects, t.incorrects, a), t.props.history.push("/play/toy/final")
                        }));
                        break;
                      case null:
                        t.props.firebase.getDatabaseVal(t.props.client.hostId, "stg", (function(e) {
                          e || (t.props.deleteClient(), t.props.history.push("/play"))
                        }))
                    }
                  })), e.next = 9, this.props.firebase.getDatabaseRef(this.props.client.hostId, "c/".concat(this.props.client.name, "/at"));
                case 9:
                  return this.dbRefMe = e.sent, this.dbRefMe.on("value", (function(e) {
                    if(e.val() && e.val().at) {
                      var a = e.val().at.split(":"),
                        s = "swap" === a[2] ? parseInt(a[3], 10) : Math.max(0, t.state.toys - (a[2] && Number.isInteger(parseInt(a[2], 10)) ? parseInt(a[2], 10) : 0));
                      t.setState({
                        attackerMsg: "".concat(a[0], " just ").concat("swap" === a[2] ? "swapped toys with you!" : "took ".concat(Object(P.n)(a[2]), " ").concat("1" === a[2] ? "toy" : "toys", " from you!")),
                        attackerBlook: a[1],
                        toys: s
                      }), t.props.firebase.setVal({
                        id: t.props.client.hostId,
                        path: "c/".concat(t.props.client.name),
                        val: {
                          b: t.props.client.blook,
                          t: s
                        }
                      })
                    }
                  })), e.next = 13, this.props.firebase.getDatabaseRef(this.props.client.hostId, "act");
                case 13:
                  this.dbRefAction = e.sent, this.dbRefAction.on("value", (function(e) {
                    if(e.val() && e.val().s)
                      if(t.safe) t.safe = !1;
                      else {
                        var a = _.b[e.val().s];
                        clearTimeout(t.nameTimeout), "Oh Canada" === a ? (clearTimeout(t.canadaTimeout), t.setState({
                          canada: !1
                        }, (function() {
                          t.setState({
                            canada: !0
                          }, (function() {
                            t.canadaTimeout = setTimeout((function() {
                              t.setState({
                                canada: !1
                              })
                            }), 1e4)
                          }))
                        }))) : "Blizzard" === a ? (clearTimeout(t.blizzardTimeout), t.setState({
                          blizzard: !1
                        }, (function() {
                          t.setState({
                            blizzard: !0
                          }, (function() {
                            t.blizzardTimeout = setTimeout((function() {
                              t.setState({
                                blizzard: !1
                              })
                            }), 17e3)
                          }))
                        }))) : "Fog Spell" === a ? (clearTimeout(t.fogTimeout), t.setState({
                          fog: !1
                        }, (function() {
                          t.setState({
                            fog: !0
                          }, (function() {
                            t.fogTimeout = setTimeout((function() {
                              t.setState({
                                fog: !1
                              })
                            }), 8e3)
                          }))
                        }))) : "Dark & Dusk" === a ? (clearTimeout(t.duskTimeout), t.setState({
                          dusk: !1
                        }, (function() {
                          t.setState({
                            dusk: !0
                          }, (function() {
                            t.duskTimeout = setTimeout((function() {
                              t.setState({
                                dusk: !1
                              })
                            }), 1e4)
                          }))
                        }))) : "Howling Wind" === a ? (clearTimeout(t.windTimeout), t.setState({
                          wind: !1
                        }, (function() {
                          t.setState({
                            wind: !0
                          }, (function() {
                            t.windTimeout = setTimeout((function() {
                              t.setState({
                                wind: !1
                              })
                            }), 7050)
                          }))
                        }))) : "Gift Time!" === a ? t.setState({
                          gift: !0
                        }) : "TREES" === a ? t.setState({
                          trees: [!0, !0, !0, !0, !0, !0, !0, !0, !0, !0]
                        }) : "Snow Plow" === a ? (clearTimeout(t.plowTimeout), t.setState({
                          plow: !1
                        }, (function() {
                          t.setState({
                            plow: !0
                          }, (function() {
                            t.plowTimeout = setTimeout((function() {
                              t.setState({
                                plow: !1
                              })
                            }), 8050)
                          }))
                        }))) : "Use The Force" === a && (clearTimeout(t.forceTimeout), t.setState({
                          force: !1
                        }, (function() {
                          t.setState({
                            force: !0
                          }, (function() {
                            t.forceTimeout = setTimeout((function() {
                              t.setState({
                                force: !1
                              })
                            }), 18100)
                          }))
                        }))), t.setState({
                          sabotageName: e.val().n,
                          sabotageBlook: e.val().b
                        }, (function() {
                          t.nameTimeout = setTimeout((function() {
                            t.setState({
                              sabotageName: "",
                              sabotageBlook: ""
                            })
                          }), 6e3)
                        }))
                      }
                  })), this.questions = this.props.client.questions, this.freeQuestions = JSON.parse(JSON.stringify(this.props.client.questions)), this.randomQ();
                case 18:
                case "end":
                  return e.stop()
              }
            }), e, this)
          })), r = function() {
            var e = this,
              t = arguments;
            return new Promise((function(a, s) {
              var n = o.apply(e, t);

              function r(e) {
                Q(n, a, s, r, i, "next", e)
              }

              function i(e) {
                Q(n, a, s, r, i, "throw", e)
              }
              r(void 0)
            }))
          }, function() {
            return r.apply(this, arguments)
          })
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.here = !1, Object(P.t)(), clearTimeout(this.waitTimeout), clearTimeout(this.claimTimeout), clearTimeout(this.canadaTimeout), clearTimeout(this.blizzardTimeout), clearTimeout(this.fogTimeout), clearTimeout(this.duskTimeout), clearTimeout(this.windTimeout), clearTimeout(this.plowTimeout), clearTimeout(this.forceTimeout), Object.keys(this.dbRefStage).length && this.dbRefStage.off("value"), Object.keys(this.dbRefMe).length && this.dbRefMe.off("value"), Object.keys(this.dbRefAction).length && this.dbRefAction.off("value")
          }
        }, {
          key: "onAnswer",
          value: function(e) {
            if(!this.waiting && this.here) {
              this.waiting = !0;
              var t = this.state.question.correctAnswers.includes(e),
                a = this.state.question.number;
              t ? this.corrects[a] ? this.corrects[a] += 1 : this.corrects[a] = 1 : this.incorrects[a] ? this.incorrects[a] += 1 : this.incorrects[a] = 1, this.nextReady = !0, this.setState({
                correct: t,
                stage: "feedback",
                toys: t ? this.state.toys + this.state.toysPerQ : this.state.toys
              })
            }
          }
        }, {
          key: "answerNext",
          value: function() {
            var e = this;
            this.nextReady && this.here && (this.nextReady = !1, this.state.correct ? this.setState({
              choices: Object(P.r)(K, 2),
              stage: "prize",
              choiceObj: {}
            }, (function() {
              clearTimeout(e.waitTimeout), e.waitTimeout = setTimeout((function() {
                e.picking = !0
              }), 300), clearTimeout(e.claimTimeout), e.claimTimeout = setTimeout((function() {
                e.randomQ()
              }), 12500)
            })) : this.randomQ())
          }
        }, {
          key: "randomQ",
          value: function() {
            var e = this;
            if(this.here) {
              clearTimeout(this.claimTimeout), 0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
              var t = Object(P.o)(this.freeQuestions);
              this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(P.w)(t.answers)), this.setState({
                question: t,
                phaseTwo: !1,
                stage: "question"
              }, (function() {
                e.waiting = !0, clearTimeout(e.waitTimeout), e.waitTimeout = setTimeout((function() {
                  e.waiting = !1, e.gettingQuestion = !1
                }), 400)
              }))
            }
          }
        }, {
          key: "choose",
          value: function(e) {
            var t = this;
            if(this.picking) {
              this.picking = !1;
              var a = this.state.toys,
                s = this.state.toysPerQ,
                n = this.state.choices[e],
                o = !0;
              "toys" === n.type ? a += n.val : "tpq" === n.type ? s += n.val : "mult" === n.type ? a = Math.round(a * n.val) : "mult-tpq" === n.type ? s = Math.round(s * n.val) : ["take", "swap"].includes(n.type) ? (o = !1, this.props.firebase.getDatabaseVal(this.props.client.hostId, "c", (function(e) {
                var a = e ? Object.entries(e).map((function(e) {
                  var t = q(e, 2),
                    a = t[0],
                    s = t[1];
                  return {
                    name: a,
                    blook: s.b,
                    toys: s.t || 0
                  }
                })).filter((function(e) {
                  return e.name !== t.props.client.name
                })) : [];
                a.sort((function(e, t) {
                  return t.toys - e.toys
                })), t.choosingPlayer = !1, t.setState({
                  players: a,
                  choiceObj: n,
                  phaseTwo: !0
                }, (function() {
                  clearTimeout(t.waitTimeout), t.waitTimeout = setTimeout((function() {
                    t.choosingPlayer = !0
                  }), 300)
                }))
              }))) : (this.safe = !0, this.props.client.name && this.props.client.blook && this.props.client.hostId && this.props.firebase.setVal({
                id: this.props.client.hostId,
                path: "c/".concat(this.props.client.name, "/tat"),
                val: _.a[n.text]
              })), this.props.firebase.setVal({
                id: this.props.client.hostId,
                path: "c/".concat(this.props.client.name),
                val: {
                  b: this.props.client.blook,
                  t: a
                }
              }), this.setState({
                toys: a,
                toysPerQ: s
              }), o && this.randomQ()
            }
          }
        }, {
          key: "clickTree",
          value: function(e) {
            var t = D(this.state.trees);
            t[e] = !1, this.setState({
              trees: t
            })
          }
        }, {
          key: "sendGift",
          value: function(e) {
            e.preventDefault(), this.state.giftText.length < 3 || this.setState({
              gift: !1,
              giftText: ""
            })
          }
        }, {
          key: "selectPlayer",
          value: function(e) {
            if(this.choosingPlayer) {
              if(this.choosingPlayer = !1, clearTimeout(this.claimTimeout), "swap" === this.state.choiceObj.type) this.props.firebase.setVal({
                id: this.props.client.hostId,
                path: "c/".concat(this.props.client.name),
                val: {
                  b: this.props.client.blook,
                  t: e.toys || 0,
                  tat: "".concat(e.name, ":swap:").concat(this.state.gold)
                }
              }), this.setState({
                toys: e.toys || 0
              });
              else {
                var t = Math.round((e.toys || 0) * this.state.choiceObj.val);
                if(t > 0) {
                  var a = this.state.toys + t;
                  this.props.firebase.setVal({
                    id: this.props.client.hostId,
                    path: "c/".concat(this.props.client.name),
                    val: {
                      b: this.props.client.blook,
                      t: a,
                      tat: "".concat(e.name, ":").concat(t)
                    }
                  }), this.setState({
                    toys: a
                  })
                }
              }
              this.randomQ()
            }
          }
        }, {
          key: "render",
          value: function() {
            var e = this;
            return this.props.client && this.props.client.questions && this.props.client.questions[0] ? n.a.createElement("div", {
              className: m.isMobile ? v.a.mBody : v.a.body,
              style: {
                overflow: "hidden",
                backgroundColor: "#fff",
                filter: this.state.fog && this.state.dusk ? "grayscale(100%) blur(2px)" : this.state.fog ? "blur(2px)" : this.state.dusk ? "grayscale(100%)" : null
              },
              id: "body"
            }, n.a.createElement(y.a, {
              title: "Play Santa's Workshop | Blooket",
              desc: "Engage in an exciting, fast-paced review game where you build toys by answering questions."
            }), n.a.createElement(C.a, {
              name: this.props.client.name,
              toys: this.state.toys
            }), n.a.createElement("div", {
              className: this.state.wind ? b.a.wind : null
            }, "question" === this.state.stage ? n.a.createElement(k.a, {
              onAnswer: this.onAnswer,
              text: this.state.question.text,
              answers: this.state.question.answers,
              image: this.state.question.image,
              theme: "merry"
            }) : "feedback" === this.state.stage ? n.a.createElement("div", {
              className: b.a.feedbackContainer
            }, n.a.createElement(T.a, {
              incorrectTime: 3,
              correctAnswers: this.state.question.correctAnswers,
              correct: this.state.correct,
              onNext: this.answerNext,
              reward: this.state.correct ? "+".concat(Object(P.n)(this.state.toysPerQ)) : null
            })) : "prize" === this.state.stage ? n.a.createElement("div", {
              className: p()(v.a.regularBody, b.a.winterBackground),
              id: "regularBody"
            }, n.a.createElement("img", {
              src: N.a,
              alt: "Mountains",
              className: b.a.mountainsBackground,
              draggable: !1
            }), this.state.phaseTwo ? this.state.players.length > 0 ? n.a.createElement("div", {
              className: b.a.playerWrapper
            }, n.a.createElement("div", {
              className: b.a.playerHeader
            }, "swap" === this.state.choiceObj.type ? "Choose a Player to Swap With" : "Choose a Player to Take From"), n.a.createElement("div", {
              className: b.a.playerHolder
            }, this.state.players.map((function(t) {
              return n.a.createElement("div", {
                className: b.a.playerContainer,
                key: t.name,
                role: "button",
                tabIndex: 0,
                onClick: function() {
                  return e.selectPlayer(t)
                }
              }, n.a.createElement("div", {
                className: b.a.playerInside
              }, n.a.createElement(S.a, {
                name: t.blook,
                className: b.a.playerBlook
              }), n.a.createElement("div", {
                className: b.a.playerColumn
              }, n.a.createElement("div", {
                className: b.a.playerText
              }, t.name), n.a.createElement("div", {
                className: b.a.toyRow
              }, n.a.createElement("div", {
                className: b.a.playerToys
              }, Object(P.n)(t.toys)), n.a.createElement("img", {
                src: E.a,
                alt: "Toy",
                className: b.a.toyIcon,
                draggable: !1
              })))))
            })), n.a.createElement("div", {
              style: {
                height: 20
              }
            }))) : n.a.createElement("div", {
              className: b.a.playerWrapper
            }, n.a.createElement("div", {
              className: b.a.playerHeader
            }, "No Players to Interact With"), n.a.createElement("div", {
              className: b.a.noPlayers,
              role: "button",
              tabIndex: 0,
              onClick: this.randomQ
            }, n.a.createElement("div", {
              className: b.a.playerInside
            }, "Next"))) : n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
              className: b.a.header
            }, "Choose a Helper!"), n.a.createElement("div", {
              className: p()(b.a.choice, b.a.choiceLeft),
              role: "button",
              tabIndex: 0,
              onClick: function() {
                return e.choose(0)
              }
            }, n.a.createElement("div", {
              className: b.a.choiceInside
            }, n.a.createElement(S.a, {
              name: this.state.choices[0].blook,
              className: b.a.choiceBlook
            }), n.a.createElement("div", {
              className: b.a.choiceText
            }, Y(this.state.choices[0].text)))), n.a.createElement("div", {
              className: p()(b.a.choice, b.a.choiceRight),
              role: "button",
              tabIndex: 0,
              onClick: function() {
                return e.choose(1)
              }
            }, n.a.createElement("div", {
              className: b.a.choiceInside
            }, n.a.createElement(S.a, {
              name: this.state.choices[1].blook,
              className: b.a.choiceBlook
            }), n.a.createElement("div", {
              className: b.a.choiceText
            }, Y(this.state.choices[1].text)))))) : null), this.state.gift ? n.a.createElement(R.a, {
              text: "What gift do you want for the holidays? (3 letter minimum)",
              buttonOne: {
                text: "Submit",
                click: this.sendGift,
                color: "blue"
              },
              stringValue: this.state.giftText,
              stringChange: function(t) {
                return e.setState({
                  giftText: t.target.value
                })
              },
              stringPlaceholder: "Gift",
              onSubmit: this.sendGift
            }) : null, this.state.trees.filter((function(e) {
              return e
            })).length > 0 ? this.state.trees.map((function(t, a) {
              return t ? n.a.createElement("div", {
                className: b.a.treeContainer,
                style: {
                  top: "".concat(X[a].top, "vh"),
                  left: "".concat(X[a].left, "vw")
                },
                key: a,
                role: "button",
                tabIndex: 0,
                onClick: function() {
                  return e.clickTree(a)
                }
              }, n.a.createElement("img", {
                className: b.a.treeImg,
                src: I.a,
                alt: "tree",
                draggable: !1
              })) : null
            })) : null, this.state.plow ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
              className: b.a.plowSnow
            }), n.a.createElement(S.a, {
              name: "Werewolf",
              className: b.a.plowBlook
            }), n.a.createElement("i", {
              className: p()(b.a.plow, "fas fa-snowplow")
            })) : null, this.state.force ? n.a.createElement(B.a, null) : null, this.state.blizzard ? n.a.createElement(j.a, {
              zIndex: 20,
              count: m.isMobile ? 85 : 170
            }) : null, this.state.canada ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
              className: b.a.canada1
            }), n.a.createElement("div", {
              className: b.a.canada2
            }), n.a.createElement("div", {
              className: b.a.canada3
            }), n.a.createElement("i", {
              className: p()(b.a.canadaIcon, "fab fa-canadian-maple-leaf")
            })) : null, this.state.sabotageName ? n.a.createElement("div", {
              className: b.a.sabotageContainer
            }, n.a.createElement(S.a, {
              name: this.state.sabotageBlook,
              className: b.a.sabotageBlook
            }), this.state.sabotageName) : null, this.state.attackerBlook ? n.a.createElement(z.a, {
              text: this.state.attackerMsg,
              blook: this.state.attackerBlook,
              onClick: function() {
                return e.setState({
                  attackerMsg: "",
                  attackerBlook: ""
                })
              },
              isMerry: !0
            }) : null) : n.a.createElement(l.a, {
              to: "/play"
            })
          }
        }]) && L(t.prototype, a), s && L(t, s), c
      }(n.a.Component);
    V.propTypes = {
      client: c.a.object,
      history: c.a.object.isRequired,
      firebase: c.a.object,
      deleteClient: c.a.func.isRequired,
      setGoldFinal: c.a.func.isRequired
    };
    t.a = Object(u.a)(Object(r.b)((function(e) {
      return {
        client: e.clients.client
      }
    }), (function(e) {
      return Object(o.b)({
        deleteClient: h.a,
        setGoldFinal: d.a
      }, e)
    }))(Object(x.d)(V)))
  },
  "51kA": function(e, t, a) {
    (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__deckButton___2bMdI-camelCase{display:flex;flex-direction:row;align-items:center;position:absolute;top:1vw;right:1vw;color:#fff;text-shadow:2px 2px 8px grey;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__deckButton___2bMdI-camelCase:hover{transform:scale(1.05)}.styles__leaveButton___2HHdn-camelCase{display:flex;flex-direction:row;align-items:center;position:absolute;bottom:1vw;right:1vw;color:#ff5050;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__leaveButton___2HHdn-camelCase:hover{transform:scale(1.05)}.styles__deckIcon___3L-Bf-camelCase{font-size:27px;margin-right:10px}.styles__deckText___3bq48-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:30px}.styles__deckContainer___2agY_-camelCase{position:absolute;top:0;left:0;min-height:calc(100% - 10vh);width:calc(100% - 10vw);padding:5vh 5vw;background-color:rgba(0,0,0,.8);z-index:3;display:flex;flex-flow:row wrap;align-content:flex-start}.styles__cardContainer___cUxpV-camelCase{width:25vw;height:32.5vw;transform:scale(.7);margin:-4vw -1.5vw}.styles__closeIcon___2Jvbw-camelCase{font-size:30px;text-shadow:2px 2px 8px grey;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;top:1vw;right:1vw;color:#fff;transition:.2s}.styles__closeIcon___2Jvbw-camelCase:focus,.styles__closeIcon___2Jvbw-camelCase:hover{transform:scale(1.05)}.styles__shopContainer___3JmL2-camelCase{flex-direction:row;width:75vw;height:95%;margin:auto auto auto 14vw}.styles__cardsHolder___395S0-camelCase,.styles__shopContainer___3JmL2-camelCase{display:flex;align-items:center}.styles__cardsHolder___395S0-camelCase{flex-flow:row wrap;justify-content:center;width:82.5%;height:100%}.styles__shopCardContainer___2XhzX-camelCase{display:flex;flex-direction:column;width:25vw;transform:scale(.55);margin:-9vw -3.25vw;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__shopCardContainer___2XhzX-camelCase:hover{transform:scale(.53)}.styles__priceText___9_45d-camelCase{font-family:Nunito,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;font-weight:700;width:100%;text-align:center;margin-top:.5vw;font-size:3.5vw;display:flex;flex-direction:row;align-items:center;justify-content:center}.styles__priceIcon___2tZwx-camelCase{margin-left:1vw;font-size:3vw}.styles__removeButton___2_sd6-camelCase{display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Nunito,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;font-weight:700;font-size:2.5vw;line-height:2.65vw;box-shadow:0 0 8px 3px rgba(0,0,0,.2);height:50%;width:17.5%;margin:auto;border-radius:6px;background-color:#ff5050;text-align:center;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__removeButton___2_sd6-camelCase:hover{transform:scale(.95)}.styles__removeButtonText___2OGlk-camelCase{margin:0 auto}.styles__removeIcon___2G5bX-camelCase{font-size:6vw;margin:2vw auto}.styles__removeCost___3eUrm-camelCase{display:flex;flex-direction:row;align-items:center;font-size:2.5vw;margin:0 auto}.styles__removeCostIcon___5fkZp-camelCase{margin-left:1vw;font-size:2.2vw}.styles__removeDeckContainer___2sMHs-camelCase{position:absolute;top:calc(10% + 3vw);left:0;min-height:calc(100% - 10vh);width:calc(100% - 10vw);padding:5vh 5vw;z-index:3;display:flex;flex-flow:row wrap;-webkit-animation:styles__fadeIn___4166I-camelCase .3s;animation:styles__fadeIn___4166I-camelCase .3s}.styles__removeCardContainer___1UBdW-camelCase{width:25vw;height:32.5vw;transform:scale(.7);margin:-4vw -1.5vw;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;transition:.2s}.styles__removeCardContainer___1UBdW-camelCase:hover{transform:scale(.75)}.styles__removeText___3W9K1-camelCase{font-family:Creepster,sans-serif;text-shadow:2px 2px 8px grey;color:#b3ffb3;font-size:5vw;position:absolute;width:80%;top:5%;left:10%;text-align:center;-webkit-animation:styles__fadeIn___4166I-camelCase .3s;animation:styles__fadeIn___4166I-camelCase .3s}.styles__backButton___1F5uI-camelCase{display:flex;flex-direction:row;align-items:center;position:absolute;top:1vw;left:1vw;color:#fff;font-family:Nunito,sans-serif;font-weight:700;font-size:30px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__backButton___1F5uI-camelCase:hover{transform:scale(1.05)}.styles__lifeContainer___cxTP4-camelCase{position:absolute;top:0;left:0;transform:scale(.6);height:15vw;width:15vw}.styles__cardRemove___eD6Qw-camelCase{width:25vw;height:32.5vw;position:absolute;top:calc(50% - 12vw);left:calc(50% - 12.5vw);-webkit-animation:styles__spinRemove___3cq0m-camelCase 4s ease-in .5s forwards;animation:styles__spinRemove___3cq0m-camelCase 4s ease-in .5s forwards}@-webkit-keyframes styles__spinRemove___3cq0m-camelCase{0%{transform:rotate(0deg) scale(1)}to{transform:rotate(10turn) scale(0)}}@keyframes styles__spinRemove___3cq0m-camelCase{0%{transform:rotate(0deg) scale(1)}to{transform:rotate(10turn) scale(0)}}@-webkit-keyframes styles__fadeIn___4166I-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___4166I-camelCase{0%{opacity:0}to{opacity:1}}@media only screen and (max-width:800px){.styles__deckButton___2bMdI-camelCase{right:0}.styles__deckButton___2bMdI-camelCase,.styles__deckButton___2bMdI-camelCase:hover{transform:scale(.8)}.styles__deckContainer___2agY_-camelCase{transform:scale(1.1);margin:2.5vw 2vw}.styles__closeIcon___2Jvbw-camelCase{top:5vw;right:8.5vw}.styles__lifeContainer___cxTP4-camelCase{top:3vw;left:3vw;transform:scale(1.1)}.styles__shopContainer___3JmL2-camelCase{flex-direction:column;margin:20% auto 5%;align-items:center;width:95%;height:75%}.styles__removeButton___2_sd6-camelCase{flex-direction:row;justify-content:space-evenly;font-size:5vw;line-height:5.15vw;height:15%;width:75%;margin:auto}.styles__removeIcon___2G5bX-camelCase{display:none}.styles__removeCost___3eUrm-camelCase{font-weight:700;font-size:5.5vw}.styles__removeCostIcon___5fkZp-camelCase{margin-left:3vw;font-size:5.2vw}.styles__shopCardContainer___2XhzX-camelCase{width:25vw;height:32.5vw;margin:-4vw 3vw}.styles__shopCardContainer___2XhzX-camelCase,.styles__shopCardContainer___2XhzX-camelCase:hover{transform:scale(.95)}.styles__priceText___9_45d-camelCase{margin-top:2vw}.styles__cardsHolder___395S0-camelCase{display:flex;flex-flow:row wrap;justify-content:center;align-items:center;width:100%}.styles__removeText___3W9K1-camelCase{font-size:9vw;top:7.5%}.styles__removeDeckContainer___2sMHs-camelCase{top:17.5%;align-content:flex-start;min-height:75%;width:95%;padding:5% 2.5%}.styles__removeCardContainer___1UBdW-camelCase{width:25vw;height:32.5vw;transform:scale(.95);margin:2vw 3vw}.styles__removeCardContainer___1UBdW-camelCase:hover{transform:scale(.95)}.styles__cardRemove___eD6Qw-camelCase{transform:scale(1.5);-webkit-animation:styles__spinRemove___3cq0m-camelCase 4s ease-in .5s forwards;animation:styles__spinRemove___3cq0m-camelCase 4s ease-in .5s forwards}@-webkit-keyframes styles__spinRemove___3cq0m-camelCase{0%{transform:rotate(0deg) scale(1.5)}to{transform:rotate(10turn) scale(0)}}@keyframes styles__spinRemove___3cq0m-camelCase{0%{transform:rotate(0deg) scale(1.5)}to{transform:rotate(10turn) scale(0)}}}", ""]), t.locals = {
      deckButton: "styles__deckButton___2bMdI-camelCase",
      leaveButton: "styles__leaveButton___2HHdn-camelCase",
      deckIcon: "styles__deckIcon___3L-Bf-camelCase",
      deckText: "styles__deckText___3bq48-camelCase",
      deckContainer: "styles__deckContainer___2agY_-camelCase",
      cardContainer: "styles__cardContainer___cUxpV-camelCase",
      closeIcon: "styles__closeIcon___2Jvbw-camelCase",
      shopContainer: "styles__shopContainer___3JmL2-camelCase",
      cardsHolder: "styles__cardsHolder___395S0-camelCase",
      shopCardContainer: "styles__shopCardContainer___2XhzX-camelCase",
      priceText: "styles__priceText___9_45d-camelCase",
      priceIcon: "styles__priceIcon___2tZwx-camelCase",
      removeButton: "styles__removeButton___2_sd6-camelCase",
      removeButtonText: "styles__removeButtonText___2OGlk-camelCase",
      removeIcon: "styles__removeIcon___2G5bX-camelCase",
      removeCost: "styles__removeCost___3eUrm-camelCase",
      removeCostIcon: "styles__removeCostIcon___5fkZp-camelCase",
      removeDeckContainer: "styles__removeDeckContainer___2sMHs-camelCase",
      fadeIn: "styles__fadeIn___4166I-camelCase",
      removeCardContainer: "styles__removeCardContainer___1UBdW-camelCase",
      removeText: "styles__removeText___3W9K1-camelCase",
      backButton: "styles__backButton___1F5uI-camelCase",
      lifeContainer: "styles__lifeContainer___cxTP4-camelCase",
      cardRemove: "styles__cardRemove___eD6Qw-camelCase",
      spinRemove: "styles__spinRemove___3cq0m-camelCase"
    }
  },
  "5aLK": function(e, t, a) {
    var s = a("jdaG");
    "string" == typeof s && (s = [
      [e.i, s, ""]
    ]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a("aET+")(s, n);
    s.locals && (e.exports = s.locals)
  },
  "7+rr": function(e, t, a) {
    "use strict";
    var s = a("q1tI"),
      n = a.n(s),
      o = a("ANjH"),
      r = a("/MKj"),
      i = a("17x9"),
      c = a.n(i),
      l = a("wIs1"),
      u = a("vDqi"),
      m = a.n(u),
      f = a("b6Qr"),
      p = a("TSYQ"),
      _ = a.n(p),
      d = a("GIcp"),
      h = a.n(d),
      y = a("+KYW"),
      w = a.n(y),
      b = a("e47E"),
      g = a("DoX5"),
      v = a("iQ+n"),
      C = a("MQPm"),
      x = a("3B9I"),
      k = a("TN+F"),
      T = a("anyA");

    function S(e) {
      return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function E(e, t, a, s, n, o, r) {
      try {
        var i = e[o](r),
          c = i.value
      } catch (e) {
        return void a(e)
      }
      i.done ? t(c) : Promise.resolve(c).then(s, n)
    }

    function I(e, t) {
      for(var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
    }

    function O(e, t) {
      return (O = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function N(e) {
      var t = function() {
        if("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if(Reflect.construct.sham) return !1;
        if("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }();
      return function() {
        var a, s = B(e);
        if(t) {
          var n = B(this).constructor;
          a = Reflect.construct(s, arguments, n)
        } else a = s.apply(this, arguments);
        return j(this, a)
      }
    }

    function j(e, t) {
      return !t || "object" !== S(t) && "function" != typeof t ? function(e) {
        if(void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }(e) : t
    }

    function B(e) {
      return (B = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }
    var R = function(e) {
      ! function(e, t) {
        if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && O(e, t)
      }(c, e);
      var t, a, s, o, r, i = N(c);

      function c(e) {
        var t;
        return function(e, t) {
          if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, c), (t = i.call(this, e)).state = {
          standings: [],
          user: {},
          showPrizes: !1
        }, t.here = !0, t
      }
      return t = c, (a = [{
        key: "componentDidMount",
        value: (o = regeneratorRuntime.mark((function e() {
          var t, a = this;
          return regeneratorRuntime.wrap((function(e) {
            for(;;) switch(e.prev = e.next) {
              case 0:
                return e.next = 2, this.props.user.getData();
              case 2:
                if(t = e.sent) {
                  e.next = 5;
                  break
                }
                return e.abrupt("return", this.props.history.push("/login"));
              case 5:
                this.name = t.name, m.a.get("/api/tourneys", {
                  params: {
                    name: t.name
                  }
                }).then((function(e) {
                  var t = e.data.user || {},
                    s = e.data.standings,
                    n = 0,
                    o = -1;
                  s.forEach((function(e) {
                    e.candy !== o && (n += 1, o = e.candy), e.place = n
                  })), t.name && !s.map((function(e) {
                    return e.name
                  })).includes(t.name) && s.push(t), a.setState({
                    standings: s,
                    user: t
                  })
                })).catch((function(e) {
                  console.error(e)
                }));
              case 7:
              case "end":
                return e.stop()
            }
          }), e, this)
        })), r = function() {
          var e = this,
            t = arguments;
          return new Promise((function(a, s) {
            var n = o.apply(e, t);

            function r(e) {
              E(n, a, s, r, i, "next", e)
            }

            function i(e) {
              E(n, a, s, r, i, "throw", e)
            }
            r(void 0)
          }))
        }, function() {
          return r.apply(this, arguments)
        })
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.here = !1
        }
      }, {
        key: "render",
        value: function() {
          var e = this;
          return n.a.createElement("div", {
            className: f.isMobile ? h.a.mBody : h.a.body,
            style: {
              backgroundColor: "#292929"
            }
          }, n.a.createElement(v.a, {
            title: "Contest | Blooket",
            desc: "Compete in Blooket's Contest of Candy to see if you can make the most candy in 7 minutes!"
          }), n.a.createElement(b.a, {
            history: this.props.history,
            page: "Stats"
          }), n.a.createElement("div", {
            className: h.a.regularBodyMax
          }, n.a.createElement("div", {
            className: w.a.headerRow
          }, n.a.createElement("div", {
            className: w.a.header
          }, n.a.createElement(g.a, {
            name: "Pumpkin",
            className: w.a.headerBlook
          }), n.a.createElement("div", {
            className: w.a.headerText
          }, "Contest of Candy"), n.a.createElement(g.a, {
            name: "Ghost",
            className: w.a.headerBlook
          }))), n.a.createElement("div", {
            className: w.a.desc
          }, "Final Standings"), n.a.createElement("div", {
            className: w.a.prizesButton,
            role: "button",
            tabIndex: 0,
            onClick: function() {
              return e.setState({
                showPrizes: !0
              })
            }
          }, "Prizes"), this.state.standings.map((function(t, a) {
            return n.a.createElement("div", {
              className: w.a.standingRow,
              key: t.name,
              style: {
                marginTop: 25 === a ? 50 : null,
                maxHeight: 25 === a ? 100 : null
              }
            }, t.place ? n.a.createElement("div", {
              style: {
                display: "flex",
                flexDirection: "row",
                alignItems: "stretch"
              }
            }, n.a.createElement("div", {
              className: w.a.placeText
            }, t.place), n.a.createElement("div", {
              className: w.a.superPlaceText
            }, Object(k.g)(t.place))) : null, n.a.createElement("div", {
              className: w.a.nameText,
              style: {
                color: e.state.user.name === t.name ? "#e57e25" : "#fff"
              }
            }, t.name), n.a.createElement("div", {
              className: w.a.candyRow
            }, n.a.createElement("div", {
              className: w.a.candyText
            }, t.candy > 1e6 ? "".concat(Object(k.n)(Math.round(t.candy / 1e6)), "M") : Object(k.n)(t.candy)), n.a.createElement("img", {
              src: C.a,
              alt: "Candy",
              className: w.a.candyImg,
              draggable: !1
            })))
          })), n.a.createElement("div", {
            className: w.a.standingRow,
            style: {
              opacity: 0
            }
          })), this.state.showPrizes ? n.a.createElement("div", {
            className: h.a.modal
          }, n.a.createElement("div", {
            className: w.a.prizesContainer
          }, n.a.createElement("i", {
            className: _()(w.a.closeIcon, "fas fa-times"),
            role: "button",
            tabIndex: 0,
            onClick: function() {
              return e.setState({
                showPrizes: !1
              })
            }
          }), n.a.createElement("div", {
            className: w.a.prizesHeader
          }, "Prizes"), n.a.createElement("div", {
            className: w.a.prizesRow
          }, n.a.createElement("div", {
            style: {
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch"
            }
          }, n.a.createElement("div", {
            className: w.a.placeText,
            style: {
              fontSize: 34,
              marginRight: 18
            }
          }, "Champion")), n.a.createElement(g.a, {
            name: "Spooky Ghost",
            className: w.a.prizeBlook
          }), n.a.createElement(g.a, {
            name: "Spooky Mummy",
            className: w.a.prizeBlook
          }), n.a.createElement(g.a, {
            name: "Spooky Pumpkin",
            className: w.a.prizeBlook
          }), n.a.createElement("div", {
            style: {
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }
          }, "+ 500", n.a.createElement("img", {
            src: x.a,
            alt: "Token",
            className: w.a.prizesToken,
            draggable: !1
          }))), n.a.createElement("div", {
            className: w.a.prizesRow
          }, n.a.createElement("div", {
            style: {
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch"
            }
          }, n.a.createElement("div", {
            className: w.a.placeText
          }, "2"), n.a.createElement("div", {
            className: w.a.superPlaceText
          }, Object(k.g)(2))), " - ", n.a.createElement("div", {
            style: {
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
              marginRight: 30
            }
          }, n.a.createElement("div", {
            className: w.a.placeText
          }, "5"), n.a.createElement("div", {
            className: w.a.superPlaceText
          }, Object(k.g)(5))), n.a.createElement(g.a, {
            name: "Spooky Mummy",
            className: w.a.prizeBlook
          }), n.a.createElement(g.a, {
            name: "Spooky Pumpkin",
            className: w.a.prizeBlook
          }), n.a.createElement("div", {
            style: {
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }
          }, "+ 300", n.a.createElement("img", {
            src: x.a,
            alt: "Token",
            className: w.a.prizesToken,
            draggable: !1
          }))), n.a.createElement("div", {
            className: w.a.prizesRow
          }, n.a.createElement("div", {
            style: {
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch"
            }
          }, n.a.createElement("div", {
            className: w.a.placeText
          }, "6"), n.a.createElement("div", {
            className: w.a.superPlaceText
          }, Object(k.g)(6))), " - ", n.a.createElement("div", {
            style: {
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
              marginRight: 30
            }
          }, n.a.createElement("div", {
            className: w.a.placeText
          }, "15"), n.a.createElement("div", {
            className: w.a.superPlaceText
          }, Object(k.g)(15))), n.a.createElement(g.a, {
            name: "Spooky Pumpkin",
            className: w.a.prizeBlook
          }), n.a.createElement("div", {
            style: {
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }
          }, "+ 200", n.a.createElement("img", {
            src: x.a,
            alt: "Token",
            className: w.a.prizesToken,
            draggable: !1
          }))), n.a.createElement("div", {
            className: w.a.prizesRow
          }, n.a.createElement("div", {
            style: {
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch"
            }
          }, n.a.createElement("div", {
            className: w.a.placeText
          }, "16"), n.a.createElement("div", {
            className: w.a.superPlaceText
          }, Object(k.g)(16))), " - ", n.a.createElement("div", {
            style: {
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
              marginRight: 30
            }
          }, n.a.createElement("div", {
            className: w.a.placeText
          }, "25"), n.a.createElement("div", {
            className: w.a.superPlaceText
          }, Object(k.g)(25))), n.a.createElement("div", {
            style: {
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }
          }, "100", n.a.createElement("img", {
            src: x.a,
            alt: "Token",
            className: w.a.prizesToken,
            draggable: !1
          }))), n.a.createElement("div", {
            style: {
              height: 20
            }
          }))) : null)
        }
      }]) && I(t.prototype, a), s && I(t, s), c
    }(n.a.Component);
    R.propTypes = {
      history: c.a.object.isRequired,
      user: c.a.object
    };
    t.a = Object(T.c)(Object(l.a)(Object(r.b)((function() {
      return {}
    }), (function(e) {
      return Object(o.b)({}, e)
    }))(R)))
  },
  "8EZC": function(e, t, a) {
    (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__blook___1dEZe-camelCase{width:30vw;position:absolute;top:55%;left:15vw;transform:rotate(-10deg) translateY(-50%)}.styles__textContainer___11QtD-camelCase{display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;width:45%;height:90%;left:50%;top:5%}.styles__riskText___1e1DB-camelCase{text-shadow:2px 2px 8px grey;color:#fff;font-family:Nunito,sans-serif;font-weight:700;text-align:center;width:100%;font-size:3.5vw}.styles__buttonContainer___17AvY-camelCase{flex-direction:row;justify-content:space-evenly;width:100%;margin-top:3.5vw}.styles__button___2mciG-camelCase,.styles__buttonContainer___17AvY-camelCase{display:flex;align-items:center}.styles__button___2mciG-camelCase{justify-content:center;color:#fff;font-family:Nunito,sans-serif;font-weight:700;text-align:center;font-size:3vw;padding:.5vw 2vw;margin:0 auto;border:3px solid #fff;border-radius:6px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__button___2mciG-camelCase:hover{transform:scale(1.05)}.styles__lifeContainer___15r1E-camelCase{position:absolute;top:0;left:0;height:15vw;width:15vw;transform:scale(.6)}@media only screen and (max-width:600px){.styles__lifeContainer___15r1E-camelCase{top:3vw;left:3vw;transform:scale(1.1)}.styles__blook___1dEZe-camelCase{width:50vw;top:7.5%;left:50%;transform:rotate(-10deg) translateX(-50%)}.styles__textContainer___11QtD-camelCase{width:90%;height:50%;left:5%;top:55%}.styles__riskText___1e1DB-camelCase{font-size:6.75vw;line-height:6.95vw}.styles__buttonContainer___17AvY-camelCase{margin-top:5vw}.styles__button___2mciG-camelCase{font-size:6vw;padding:1.5vw 3.5vw}.styles__button___2mciG-camelCase:hover{transform:scale(1)}}", ""]), t.locals = {
      blook: "styles__blook___1dEZe-camelCase",
      textContainer: "styles__textContainer___11QtD-camelCase",
      riskText: "styles__riskText___1e1DB-camelCase",
      buttonContainer: "styles__buttonContainer___17AvY-camelCase",
      button: "styles__button___2mciG-camelCase",
      lifeContainer: "styles__lifeContainer___15r1E-camelCase"
    }
  },
  "9vW0": function(e, t, a) {
    "use strict";
    a.d(t, "b", (function() {
      return n
    })), a.d(t, "a", (function() {
      return o
    }));
    var s = a("PfDG");

    function n(e, t) {
      return {
        type: s.b,
        enemy: e,
        enemyType: t
      }
    }

    function o(e) {
      return {
        type: s.a,
        node: e
      }
    }
  },
  ABkm: function(e, t, a) {
    (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__welcomeText___2TfG6-camelCase{font-family:Creepster,sans-serif;text-shadow:2px 2px 8px grey;color:#b3ffb3;font-size:7vw;position:absolute;width:80%;top:50%;left:10%;transform:translateY(-50%);text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-animation:styles__fadeIn___3BlIQ-camelCase .3s;animation:styles__fadeIn___3BlIQ-camelCase .3s}.styles__questionContainer___3oXiO-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#292929}.styles__lifeContainer___2Dvjp-camelCase{position:absolute;top:0;left:0;height:15vw;width:15vw;transform:scale(.6)}.styles__deckButton___37wic-camelCase{display:flex;flex-direction:row;align-items:center;position:absolute;top:1vw;right:1vw;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__deckButton___37wic-camelCase:hover{transform:scale(1.05)}.styles__deckIcon___2bLFK-camelCase{font-size:27px;margin-right:10px}.styles__deckIcon___2bLFK-camelCase,.styles__deckText___3c0Cj-camelCase{text-shadow:2px 2px 8px grey}.styles__deckText___3c0Cj-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:30px}.styles__deckContainer___3aj5d-camelCase{position:absolute;top:0;left:0;min-height:calc(100% - 10vh);width:calc(100% - 10vw);padding:5vh 5vw;background-color:rgba(0,0,0,.8);z-index:3;display:flex;flex-flow:row wrap}.styles__cardContainer___ruDkK-camelCase{width:25vw;height:32.5vw;transform:scale(.7);margin:-4vw -1.5vw}.styles__closeIcon___2b1yp-camelCase{font-size:30px;text-shadow:2px 2px 8px grey;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;top:1vw;right:1vw;color:#fff;transition:.3s}.styles__closeIcon___2b1yp-camelCase:focus,.styles__closeIcon___2b1yp-camelCase:hover{transform:scale(1.05)}.styles__chooseText___j-WK6-camelCase{font-family:Creepster,sans-serif;text-shadow:2px 2px 8px grey;color:#b3ffb3;font-size:6vw;bottom:70%;text-align:center;-webkit-animation:styles__fadeIn___3BlIQ-camelCase .3s;animation:styles__fadeIn___3BlIQ-camelCase .3s}.styles__chooseText___j-WK6-camelCase,.styles__restButtonContainer___2mc_6-camelCase{position:absolute;width:80%;left:10%}.styles__restButtonContainer___2mc_6-camelCase{flex-flow:row wrap;top:40%;opacity:0;-webkit-animation:styles__fadeIn___3BlIQ-camelCase .3s linear .2s forwards;animation:styles__fadeIn___3BlIQ-camelCase .3s linear .2s forwards}.styles__restButton___3nRTj-camelCase,.styles__restButtonContainer___2mc_6-camelCase{display:flex;align-items:center;justify-content:center}.styles__restButton___3nRTj-camelCase{width:17.5vw;height:17.5vw;margin:2vw 4vw;border-radius:6px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;flex-direction:column;font-family:Nunito,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;font-weight:700;font-size:3vw;transition:.2s}.styles__restButton___3nRTj-camelCase:hover{transform:scale(1.03)}.styles__buttonIcon___DT-7g-camelCase{font-size:6vw;margin-bottom:.75vw}.styles__upgradeDeckContainer___1BQm3-camelCase{position:absolute;top:calc(10% + 3vw);left:0;min-height:calc(100% - 10vh);width:calc(100% - 10vw);padding:5vh 5vw;z-index:3;display:flex;flex-flow:row wrap}.styles__upgradeCardContainer___1oCXT-camelCase{width:25vw;height:32.5vw;transform:scale(.7);margin:-4vw -1.5vw;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;transition:.2s}.styles__upgradeCardContainer___1oCXT-camelCase:hover{transform:scale(.75)}.styles__upgradeText___2HDz3-camelCase{font-family:Creepster,sans-serif;text-shadow:2px 2px 8px grey;color:#b3ffb3;font-size:5vw;position:absolute;width:80%;top:5%;left:10%;text-align:center;-webkit-animation:styles__fadeIn___3BlIQ-camelCase .3s;animation:styles__fadeIn___3BlIQ-camelCase .3s}.styles__lifeHealContainer___1m_li-camelCase{position:absolute;top:0;left:0;height:15vw;width:15vw;transform:scale(1.5);top:calc(60% - 7.5vw);left:calc(50% - 7.5vw)}.styles__cardReveal___25IEa-camelCase{width:25vw;height:32.5vw;position:absolute;top:calc(50% - 12vw);left:calc(50% - 12.5vw);-webkit-animation:styles__spinReveal___3fQ1J-camelCase 4s ease-in-out .5s;animation:styles__spinReveal___3fQ1J-camelCase 4s ease-in-out .5s}@-webkit-keyframes styles__spinReveal___3fQ1J-camelCase{0%{transform:rotateY(0deg)}to{transform:rotateY(10turn)}}@keyframes styles__spinReveal___3fQ1J-camelCase{0%{transform:rotateY(0deg)}to{transform:rotateY(10turn)}}@-webkit-keyframes styles__fadeIn___3BlIQ-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___3BlIQ-camelCase{0%{opacity:0}to{opacity:1}}@media only screen and (max-width:600px){.styles__welcomeText___2TfG6-camelCase{font-size:12vw}.styles__lifeContainer___2Dvjp-camelCase{top:3vw;left:3vw;transform:scale(1.1)}.styles__deckButton___37wic-camelCase{right:0}.styles__deckButton___37wic-camelCase,.styles__deckButton___37wic-camelCase:hover{transform:scale(.8)}.styles__cardContainer___ruDkK-camelCase{transform:scale(1.1);margin:2.5vw 2vw}.styles__closeIcon___2b1yp-camelCase{top:2vw;right:2vw}.styles__chooseText___j-WK6-camelCase{font-size:54px;bottom:60%}.styles__restButton___3nRTj-camelCase{margin:auto}.styles__restButton___3nRTj-camelCase,.styles__restButton___3nRTj-camelCase:hover{transform:scale(1.5)}.styles__restButtonContainer___2mc_6-camelCase{top:55%;left:5%;width:90%}.styles__upgradeText___2HDz3-camelCase{font-size:9.25vw;top:6.5%}.styles__upgradeDeckContainer___1BQm3-camelCase{top:17.5%;align-content:flex-start;min-height:75%;width:95%;padding:5% 2.5%}.styles__upgradeCardContainer___1oCXT-camelCase{width:25vw;height:32.5vw;transform:scale(.95);margin:2vw 3vw}.styles__upgradeCardContainer___1oCXT-camelCase:hover{transform:scale(.95)}.styles__lifeHealContainer___1m_li-camelCase{transform:scale(2.5)}.styles__cardReveal___25IEa-camelCase{transform:scale(1.5);-webkit-animation:styles__spinReveal___3fQ1J-camelCase 4s ease-in-out .5s;animation:styles__spinReveal___3fQ1J-camelCase 4s ease-in-out .5s}@-webkit-keyframes styles__spinReveal___3fQ1J-camelCase{0%{transform:scale(1.5) rotateY(0deg)}to{transform:scale(1.5) rotateY(10turn)}}@keyframes styles__spinReveal___3fQ1J-camelCase{0%{transform:scale(1.5) rotateY(0deg)}to{transform:scale(1.5) rotateY(10turn)}}}", ""]), t.locals = {
      welcomeText: "styles__welcomeText___2TfG6-camelCase",
      fadeIn: "styles__fadeIn___3BlIQ-camelCase",
      questionContainer: "styles__questionContainer___3oXiO-camelCase",
      lifeContainer: "styles__lifeContainer___2Dvjp-camelCase",
      deckButton: "styles__deckButton___37wic-camelCase",
      deckIcon: "styles__deckIcon___2bLFK-camelCase",
      deckText: "styles__deckText___3c0Cj-camelCase",
      deckContainer: "styles__deckContainer___3aj5d-camelCase",
      cardContainer: "styles__cardContainer___ruDkK-camelCase",
      closeIcon: "styles__closeIcon___2b1yp-camelCase",
      chooseText: "styles__chooseText___j-WK6-camelCase",
      restButtonContainer: "styles__restButtonContainer___2mc_6-camelCase",
      restButton: "styles__restButton___3nRTj-camelCase",
      buttonIcon: "styles__buttonIcon___DT-7g-camelCase",
      upgradeDeckContainer: "styles__upgradeDeckContainer___1BQm3-camelCase",
      upgradeCardContainer: "styles__upgradeCardContainer___1oCXT-camelCase",
      upgradeText: "styles__upgradeText___2HDz3-camelCase",
      lifeHealContainer: "styles__lifeHealContainer___1m_li-camelCase",
      cardReveal: "styles__cardReveal___25IEa-camelCase",
      spinReveal: "styles__spinReveal___3fQ1J-camelCase"
    }
  },
  D2f2: function(e, t, a) {
    var s = a("05xZ");
    "string" == typeof s && (s = [
      [e.i, s, ""]
    ]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a("aET+")(s, n);
    s.locals && (e.exports = s.locals)
  },
  EzYG: function(e, t, a) {
    "use strict";
    var s = a("q1tI"),
      n = a.n(s),
      o = a("ANjH"),
      r = a("/MKj"),
      i = a("17x9"),
      c = a.n(i),
      l = a("mLw1"),
      u = a("wIs1"),
      m = a("4HzQ"),
      f = a("vDqi"),
      p = a.n(f),
      _ = a("1F66"),
      d = a.n(_),
      h = a("ZRP+"),
      y = a("TSYQ"),
      w = a.n(y),
      b = a("wd/R"),
      g = a.n(b),
      v = (a("RiPy"), a("1b17")),
      C = a("6bnt"),
      x = a("5gLy"),
      k = a("9IXX"),
      T = a("lDJk"),
      S = a("iQ+n"),
      E = a("GIcp"),
      I = a.n(E),
      O = a("eDxB"),
      N = a.n(O),
      j = a("4otw"),
      B = a("4CQy"),
      R = a("e/rn"),
      z = a("iIA2"),
      P = a("+kc2"),
      A = a.n(P),
      D = a("DoX5"),
      q = a("H3Sp"),
      M = a("vimH"),
      H = a("TN+F"),
      Q = a("2UHf"),
      L = a.n(Q),
      J = a("SdQT");

    function W(e) {
      return (W = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function F(e) {
      return function(e) {
        if(Array.isArray(e)) return K(e)
      }(e) || function(e) {
        if("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
      }(e) || U(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function G(e, t) {
      return function(e) {
        if(Array.isArray(e)) return e
      }(e) || function(e, t) {
        if("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var a = [],
          s = !0,
          n = !1,
          o = void 0;
        try {
          for(var r, i = e[Symbol.iterator](); !(s = (r = i.next()).done) && (a.push(r.value), !t || a.length !== t); s = !0);
        } catch (e) {
          n = !0, o = e
        } finally {
          try {
            s || null == i.return || i.return()
          } finally {
            if(n) throw o
          }
        }
        return a
      }(e, t) || U(e, t) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function U(e, t) {
      if(e) {
        if("string" == typeof e) return K(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? K(e, t) : void 0
      }
    }

    function K(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for(var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
      return s
    }

    function Y(e, t, a, s, n, o, r) {
      try {
        var i = e[o](r),
          c = i.value
      } catch (e) {
        return void a(e)
      }
      i.done ? t(c) : Promise.resolve(c).then(s, n)
    }

    function X(e, t) {
      for(var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
    }

    function V(e, t) {
      return (V = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function Z(e) {
      var t = function() {
        if("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if(Reflect.construct.sham) return !1;
        if("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }();
      return function() {
        var a, s = te(e);
        if(t) {
          var n = te(this).constructor;
          a = Reflect.construct(s, arguments, n)
        } else a = s.apply(this, arguments);
        return $(this, a)
      }
    }

    function $(e, t) {
      return !t || "object" !== W(t) && "function" != typeof t ? ee(e) : t
    }

    function ee(e) {
      if(void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function te(e) {
      return (te = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }
    var ae = function(e) {
      ! function(e, t) {
        if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && V(e, t)
      }(c, e);
      var t, a, s, o, r, i = Z(c);

      function c(e) {
        var t;
        return function(e, t) {
          if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, c), (t = i.call(this, e)).state = {
          timer: "00:00",
          players: [],
          alerts: [],
          totalToys: 0,
          muted: !!e.host && e.host.muted,
          fog: !1,
          dusk: !1,
          wind: !1,
          plow: !1,
          blizzard: !1,
          force: !1,
          canada: !1,
          trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1]
        }, t.ok = !1, t.dbRefAction = {}, t.alertContainer = n.a.createRef(), t.goNext = t.goNext.bind(ee(t)), t.addAlert = t.addAlert.bind(ee(t)), t.scrollToBottom = t.scrollToBottom.bind(ee(t)), t.changeMuted = t.changeMuted.bind(ee(t)), t.audio = new Audio(L.a), t.audio.muted = t.state.muted, t
      }
      return t = c, (a = [{
        key: "componentDidMount",
        value: (o = regeneratorRuntime.mark((function e() {
          var t, a, s = this;
          return regeneratorRuntime.wrap((function(e) {
            for(;;) switch(e.prev = e.next) {
              case 0:
                if(this.props.host && this.props.host.settings) {
                  e.next = 2;
                  break
                }
                return e.abrupt("return");
              case 2:
                return this.audio.volume = .4, this.audio.play(), this.audio.addEventListener("ended", (function() {
                  s.audio.currentTime = 0, s.audio.play()
                }), !1), this.go = !0, p.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null, this.props.firebase.setStage({
                  id: this.props.host.id,
                  stage: "toy"
                }), "Time" === this.props.host.settings.mode ? (t = 60 * this.props.host.settings.amount, a = 4, this.setState({
                  timer: g.a.duration(t, "seconds").format("mm:ss")
                }), this.timerInterval = setInterval((function() {
                  t -= 1, s.setState({
                    timer: g.a.duration(t, "seconds").format("mm:ss")
                  }), t <= 0 ? (s.getClients(!0), clearInterval(s.timerInterval)) : 0 === a ? (s.getClients(!1), a = 4) : a -= 1
                }), 1e3)) : this.clientsInterval = setInterval((function() {
                  s.getClients(!1)
                }), 4e3), e.next = 11, this.props.firebase.getDatabaseRef(this.props.host.id, "act");
              case 11:
                this.dbRefAction = e.sent, this.dbRefAction.on("value", (function(e) {
                  if(e.val() && e.val().s) {
                    var t = B.b[e.val().s];
                    "Oh Canada" === t ? (clearTimeout(s.canadaTimeout), s.setState({
                      canada: !1
                    }, (function() {
                      s.setState({
                        canada: !0
                      }, (function() {
                        s.canadaTimeout = setTimeout((function() {
                          s.setState({
                            canada: !1
                          })
                        }), 1e4)
                      }))
                    }))) : "Blizzard" === t ? (clearTimeout(s.blizzardTimeout), s.setState({
                      blizzard: !1
                    }, (function() {
                      s.setState({
                        blizzard: !0
                      }, (function() {
                        s.blizzardTimeout = setTimeout((function() {
                          s.setState({
                            blizzard: !1
                          })
                        }), 17e3)
                      }))
                    }))) : "Fog Spell" === t ? (clearTimeout(s.fogTimeout), s.setState({
                      fog: !1
                    }, (function() {
                      s.setState({
                        fog: !0
                      }, (function() {
                        s.fogTimeout = setTimeout((function() {
                          s.setState({
                            fog: !1
                          })
                        }), 8e3)
                      }))
                    }))) : "Dark & Dusk" === t ? (clearTimeout(s.duskTimeout), s.setState({
                      dusk: !1
                    }, (function() {
                      s.setState({
                        dusk: !0
                      }, (function() {
                        s.duskTimeout = setTimeout((function() {
                          s.setState({
                            dusk: !1
                          })
                        }), 1e4)
                      }))
                    }))) : "Howling Wind" === t ? (clearTimeout(s.windTimeout), s.setState({
                      wind: !1
                    }, (function() {
                      s.setState({
                        wind: !0
                      }, (function() {
                        s.windTimeout = setTimeout((function() {
                          s.setState({
                            wind: !1
                          })
                        }), 7050)
                      }))
                    }))) : "TREES" === t ? (clearTimeout(s.treeTimeout), s.setState({
                      trees: [!0, !0, !0, !0, !0, !0, !0, !0, !0, !0]
                    }, (function() {
                      s.treeTimeout = setTimeout((function() {
                        s.setState({
                          trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1]
                        })
                      }), 8050)
                    }))) : "Snow Plow" === t ? (clearTimeout(s.plowTimeout), s.setState({
                      plow: !1
                    }, (function() {
                      s.setState({
                        plow: !0
                      }, (function() {
                        s.plowTimeout = setTimeout((function() {
                          s.setState({
                            plow: !1
                          })
                        }), 8050)
                      }))
                    }))) : "Use The Force" === t && (clearTimeout(s.forceTimeout), s.setState({
                      force: !1
                    }, (function() {
                      s.setState({
                        force: !0
                      }, (function() {
                        s.forceTimeout = setTimeout((function() {
                          s.setState({
                            force: !1
                          })
                        }), 18100)
                      }))
                    }))), s.addAlert(e.val().n, e.val().b, 'sabotaged with "'.concat(t, '"'))
                  }
                })), this.alertContainer = document.querySelector("#alerts");
              case 14:
              case "end":
                return e.stop()
            }
          }), e, this)
        })), r = function() {
          var e = this,
            t = arguments;
          return new Promise((function(a, s) {
            var n = o.apply(e, t);

            function r(e) {
              Y(n, a, s, r, i, "next", e)
            }

            function i(e) {
              Y(n, a, s, r, i, "throw", e)
            }
            r(void 0)
          }))
        }, function() {
          return r.apply(this, arguments)
        })
      }, {
        key: "componentWillUnmount",
        value: function() {
          var e = this;
          clearInterval(this.timerInterval), clearInterval(this.clientsInterval), clearTimeout(this.canadaTimeout), clearTimeout(this.blizzardTimeout), clearTimeout(this.fogTimeout), clearTimeout(this.duskTimeout), clearTimeout(this.windTimeout), clearTimeout(this.plowTimeout), clearTimeout(this.forceTimeout), clearTimeout(this.treeTimeout), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost(), window.removeEventListener("beforeunload", H.u)), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
            e.audio.currentTime = 0, e.audio.play()
          }), !1)
        }
      }, {
        key: "getClients",
        value: function(e) {
          var t = this;
          this.props.firebase.getDatabaseVal(this.props.host.id, "c", (function(a) {
            var s = a || {};
            if(s && 0 !== Object.keys(s).length) {
              var n = "Amount" === t.props.host.settings.mode,
                o = !1,
                r = Object.entries(s).map((function(e) {
                  var t = G(e, 2),
                    a = t[0],
                    s = t[1];
                  return {
                    name: a,
                    blook: s.b,
                    toys: s.t || 0,
                    toAttack: s.tat
                  }
                })),
                i = r.map((function(e) {
                  return e.name
                }));
              r.forEach((function(e) {
                if(e.toAttack) {
                  var a = e.toAttack.split(":");
                  if(1 === a.length) return void t.props.firebase.setVal({
                    id: t.props.host.id,
                    path: "act",
                    val: {
                      n: e.name,
                      b: e.blook,
                      s: a[0]
                    }
                  });
                  var s = i.indexOf(a[0]);
                  if(-1 === s) return;
                  var n = r[s];
                  if("swap" === a[1]) {
                    if(a.length < 3) return;
                    t.props.firebase.setVal({
                      id: t.props.host.id,
                      path: "c/".concat(n.name),
                      val: {
                        b: n.blook,
                        t: a[2],
                        at: "".concat(e.name, ":").concat(e.blook, ":swap:").concat(a[2])
                      }
                    }), r[s].toys = a[2], t.addAlert(e.name, e.blook, "just swapped toys with ".concat(n.name))
                  } else {
                    if(a.length < 2) return;
                    t.props.firebase.setVal({
                      id: t.props.host.id,
                      path: "c/".concat(n.name),
                      val: {
                        b: n.blook,
                        t: Math.max((n.toys || 0) - a[1], 0),
                        at: "".concat(e.name, ":").concat(e.blook, ":").concat(a[1])
                      }
                    }), r[s].toys = Math.max((n.toys || 0) - a[1], 0), t.addAlert(e.name, e.blook, "just stole ".concat(Object(H.n)(a[1]), " ").concat("1" === a[1] ? "toy" : "toys", " from ").concat(e.name))
                  }
                  t.props.firebase.removeVal(t.props.host.id, "c/".concat(e.name, "/tat"))
                }
              })), r.sort((function(e, t) {
                return t.toys - e.toys
              }));
              for(var c = 0, l = 0; l < r.length; l++) r[l].place = l + 1, c += r[l].toys, n && r[l].toys >= t.props.host.settings.amount && (o = !0);
              o || e ? t.goNext(F(r)) : t.setState({
                players: r,
                totalToys: c
              })
            }
          }))
        }
      }, {
        key: "goNext",
        value: function(e) {
          var t = this;
          this.go = !1, this.props.updateStandings(e);
          var a = e.map((function(e) {
            return {
              n: e.name,
              b: e.blook,
              t: e.toys,
              p: e.place
            }
          }));
          this.props.firebase.setVal({
            id: this.props.host.id,
            path: "st",
            val: a
          }, (function() {
            p.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null, t.props.firebase.setStage({
              id: t.props.host.id,
              stage: "fin"
            }, (function() {
              t.ok = !0, t.props.history.push("/host/toy/final")
            }))
          }))
        }
      }, {
        key: "addAlert",
        value: function(e, t, a, s) {
          var n = this,
            o = [].concat(F(this.state.alerts), [{
              name: e,
              blook: t,
              msg: a,
              info: s
            }]),
            r = Array.from(new Set(o.map((function(e) {
              return e.msg
            })))).map((function(e) {
              return o.find((function(t) {
                return t.msg === e
              }))
            }));
          r.length > 15 && r.splice(0, 1), this.setState({
            alerts: r
          }, (function() {
            return n.scrollToBottom()
          }))
        }
      }, {
        key: "scrollToBottom",
        value: function() {
          this.alertContainer.scrollTop = this.alertContainer.scrollHeight
        }
      }, {
        key: "changeMuted",
        value: function() {
          var e = this;
          this.setState({
            muted: !this.state.muted
          }, (function() {
            e.audio.muted = e.state.muted, e.props.setMuted(e.state.muted)
          }))
        }
      }, {
        key: "render",
        value: function() {
          var e, t, a, s = this;
          return this.props.host && this.props.host.settings ? n.a.createElement("div", {
            className: I.a.body,
            style: {
              overflow: "hidden",
              backgroundColor: "#fff",
              filter: this.state.fog && this.state.dusk ? "grayscale(100%) blur(2px)" : this.state.fog ? "blur(2px)" : this.state.dusk ? "grayscale(100%)" : null
            }
          }, n.a.createElement(S.a, {
            title: "Host Blooket",
            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
          }), n.a.createElement(k.a, {
            left: "Blooket",
            center: "Time" === this.props.host.settings.mode ? this.state.timer : "Goal: ".concat(Object(H.n)(this.props.host.settings.amount)),
            right: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
            muted: this.state.muted,
            changeMuted: this.changeMuted,
            onRightClick: function() {
              return s.getClients(!0)
            }
          }), n.a.createElement("div", {
            className: w()(I.a.hostRegularBody, N.a.winterBackground, (e = {}, t = N.a.wind, a = this.state.wind, t in e ? Object.defineProperty(e, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = a, e))
          }, n.a.createElement("img", {
            src: A.a,
            alt: "Moutains",
            className: N.a.mountainsBackground,
            draggable: !1
          }), n.a.createElement(d.a, {
            data: this.state.players,
            keyAccessor: function(e) {
              return e.name
            },
            start: function(e) {
              return {
                opacity: 1,
                x: -60,
                y: 12.5 * (e.place - 1)
              }
            },
            enter: function(e) {
              return {
                opacity: [1],
                x: [0],
                y: [12.5 * (e.place - 1)],
                timing: {
                  duration: 1e3,
                  ease: h.a
                }
              }
            },
            update: function(e) {
              return {
                opacity: [1],
                x: [0],
                y: [12.5 * (e.place - 1)],
                timing: {
                  duration: 500,
                  ease: h.a
                }
              }
            },
            leave: function() {
              return {
                opacity: [1e-6],
                x: [-60],
                timing: 1e3
              }
            }
          }, (function(e) {
            return n.a.createElement("div", {
              className: w()(N.a.left, N.a.invisibleScrollbar)
            }, e.map((function(e, t) {
              var a = e.key,
                s = e.data,
                o = e.state,
                r = o.x,
                i = o.y,
                c = o.opacity;
              return n.a.createElement("div", {
                key: a,
                style: {
                  opacity: c,
                  transform: "translate(".concat(r, "vw, ").concat(i, "vh)"),
                  position: "absolute",
                  height: "calc(8vh + 25px)",
                  width: "calc(35vw - 5px)",
                  boxSizing: "border-box",
                  padding: 7,
                  backgroundColor: t % 2 == 0 ? "#0cb04a" : "#f23941",
                  borderRadius: 8,
                  boxShadow: "5px 5px 0 rgba(0, 0, 0, 0.2)",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  willChange: "transform"
                }
              }, n.a.createElement("div", {
                className: N.a.standingInside,
                style: {
                  backgroundColor: t % 2 == 0 ? "#0cb04a" : "#f23941"
                }
              }, n.a.createElement(m.Textfit, {
                className: N.a.placeText,
                mode: "single",
                forceSingleModeWidth: !1,
                min: 1,
                max: Object(H.C)("5vw")
              }, s.place), n.a.createElement("div", {
                className: N.a.superPlaceText
              }, Object(H.g)(s.place)), n.a.createElement(D.a, {
                name: s.blook,
                className: N.a.blookBox
              }), n.a.createElement(m.Textfit, {
                className: N.a.nameText,
                mode: "single",
                forceSingleModeWidth: !1,
                min: 1,
                max: Object(H.C)("4vw")
              }, s.name), n.a.createElement("div", {
                className: N.a.toyContainer
              }, n.a.createElement(m.Textfit, {
                className: N.a.toyText,
                mode: "single",
                forceSingleModeWidth: !1,
                min: 1,
                max: Object(H.C)("5vw")
              }, s.toys < 1e4 ? Object(H.n)(s.toys) : Object(H.v)(s.toys)), n.a.createElement("img", {
                src: R.a,
                alt: "Toy",
                className: N.a.toyIcon,
                draggable: !1
              }))))
            })))
          })), n.a.createElement("div", {
            className: N.a.chatroom
          }, n.a.createElement("div", {
            className: w()(N.a.chatroomInside, N.a.invisibleScrollbar),
            id: "alerts"
          }, this.state.alerts[0] ? this.state.alerts.map((function(e) {
            return n.a.createElement(T.a, {
              key: s.state.alerts.indexOf(e),
              name: e.name,
              blook: e.blook,
              message: e.msg,
              glitchInfo: e.info,
              night: !0
            })
          })) : n.a.createElement("div", {
            className: N.a.noAlerts
          }, n.a.createElement("i", {
            className: w()(N.a.noAlertsIcon, "fas fa-snowman")
          }), n.a.createElement("div", {
            className: N.a.noAlertsText
          }, "Waiting To Party...")))), n.a.createElement("div", {
            className: N.a.totalToyContainer
          }, n.a.createElement("div", {
            className: N.a.totalToyInside
          }, n.a.createElement("div", {
            className: N.a.totalToyText
          }, Object(H.n)(this.state.totalToys)), n.a.createElement("img", {
            src: R.a,
            alt: "Toy",
            className: N.a.totalToyIcon,
            draggable: !1
          })))), this.state.trees.filter((function(e) {
            return e
          })).length > 0 ? this.state.trees.map((function(e, t) {
            return e ? n.a.createElement("div", {
              className: N.a.treeContainer,
              style: {
                top: "".concat(j.b[t].top, "vh"),
                left: "".concat(j.b[t].left, "vw")
              },
              key: t
            }, n.a.createElement("img", {
              className: N.a.treeImg,
              src: z.a,
              alt: "tree",
              draggable: !1
            })) : null
          })) : null, this.state.plow ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
            className: N.a.plowSnow
          }), n.a.createElement(D.a, {
            name: "Werewolf",
            className: N.a.plowBlook
          }), n.a.createElement("i", {
            className: w()(N.a.plow, "fas fa-snowplow")
          })) : null, this.state.force ? n.a.createElement(q.a, null) : null, this.state.blizzard ? n.a.createElement(M.a, {
            zIndex: 20,
            count: 170
          }) : null, this.state.canada ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
            className: N.a.canada1
          }), n.a.createElement("div", {
            className: N.a.canada2
          }), n.a.createElement("div", {
            className: N.a.canada3
          }), n.a.createElement("i", {
            className: w()(N.a.canadaIcon, "fab fa-canadian-maple-leaf")
          })) : null) : n.a.createElement(l.a, {
            to: "/dashboard"
          })
        }
      }]) && X(t.prototype, a), s && X(t, s), c
    }(n.a.Component);
    ae.propTypes = {
      host: c.a.object,
      firebase: c.a.object,
      history: c.a.object,
      updateStandings: c.a.func.isRequired,
      deleteHost: c.a.func.isRequired,
      setMuted: c.a.func.isRequired
    };
    t.a = Object(u.a)(Object(r.b)((function(e) {
      return {
        host: e.hosts.host
      }
    }), (function(e) {
      return Object(o.b)({
        updateStandings: C.b,
        deleteHost: x.c,
        setMuted: v.a
      }, e)
    }))(Object(J.d)(ae)))
  },
  FEc8: function(e, t, a) {
    "use strict";
    var s = a("q1tI"),
      n = a.n(s),
      o = a("ANjH"),
      r = a("/MKj"),
      i = a("17x9"),
      c = a.n(i),
      l = a("wIs1"),
      u = a("mLw1"),
      m = a("b6Qr"),
      f = a("TSYQ"),
      p = a.n(f),
      _ = a("vDqi"),
      d = a.n(_),
      h = a("4MCU"),
      y = a("GIcp"),
      w = a.n(y),
      b = a("ySkM"),
      g = a.n(b),
      v = a("2g2H"),
      C = a("iQ+n"),
      x = a("1AT+"),
      k = a("6hcl"),
      T = a("tYQ+"),
      S = a("6Ny9"),
      E = a("TN+F"),
      I = a("anyA");

    function O(e) {
      return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function N(e, t) {
      var a = Object.keys(e);
      if(Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        t && (s = s.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), a.push.apply(a, s)
      }
      return a
    }

    function j(e) {
      for(var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? N(Object(a), !0).forEach((function(t) {
          B(e, t, a[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : N(Object(a)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
        }))
      }
      return e
    }

    function B(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e
    }

    function R(e) {
      return function(e) {
        if(Array.isArray(e)) return z(e)
      }(e) || function(e) {
        if("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
      }(e) || function(e, t) {
        if(!e) return;
        if("string" == typeof e) return z(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === a && e.constructor && (a = e.constructor.name);
        if("Map" === a || "Set" === a) return Array.from(e);
        if("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return z(e, t)
      }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function z(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for(var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
      return s
    }

    function P(e, t, a, s, n, o, r) {
      try {
        var i = e[o](r),
          c = i.value
      } catch (e) {
        return void a(e)
      }
      i.done ? t(c) : Promise.resolve(c).then(s, n)
    }

    function A(e, t) {
      for(var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
    }

    function D(e, t) {
      return (D = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function q(e) {
      var t = function() {
        if("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if(Reflect.construct.sham) return !1;
        if("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }();
      return function() {
        var a, s = Q(e);
        if(t) {
          var n = Q(this).constructor;
          a = Reflect.construct(s, arguments, n)
        } else a = s.apply(this, arguments);
        return M(this, a)
      }
    }

    function M(e, t) {
      return !t || "object" !== O(t) && "function" != typeof t ? H(e) : t
    }

    function H(e) {
      if(void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function Q(e) {
      return (Q = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }
    var L = function(e) {
      ! function(e, t) {
        if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && D(e, t)
      }(c, e);
      var t, a, s, o, r, i = q(c);

      function c(e) {
        var t;
        return function(e, t) {
          if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, c), (t = i.call(this, e)).state = {
          question: {},
          phase: "",
          correct: !1,
          showDeck: !1,
          card: {},
          life: 100,
          healAmount: 20,
          bonusStats: 2
        }, t.freeQuestions = [], t.waiting = !1, t.qRemaining = 3, t.onAnswer = t.onAnswer.bind(H(t)), t.onHeal = t.onHeal.bind(H(t)), t.getQuestion = t.getQuestion.bind(H(t)), t.answerNext = t.answerNext.bind(H(t)), t.selectCard = t.selectCard.bind(H(t)), t
      }
      return t = c, (a = [{
        key: "componentDidMount",
        value: (o = regeneratorRuntime.mark((function e() {
          var t, a, s = this;
          return regeneratorRuntime.wrap((function(e) {
            for(;;) switch(e.prev = e.next) {
              case 0:
                if(this.props.tower && "rest" === this.props.tower.stage && this.props.tower.questions && this.props.tower.questions.length) {
                  e.next = 2;
                  break
                }
                return e.abrupt("return", this.props.history.push("/login"));
              case 2:
                return e.next = 4, this.props.user.getData();
              case 4:
                if(e.sent || this.setState({
                    notLoggedIn: !0
                  }), !this.props.tower.artifacts.includes("Anorak's Wizard Cap")) {
                  e.next = 9;
                  break
                }
                return this.props.tower.towerId ? (d.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null, d.a.put("/api/towers/save", {
                  id: this.props.tower.towerId,
                  stage: "map"
                }).then((function() {
                  s.props.setTowerStage("map"), s.props.history.push("/tower/map")
                })).catch((function(e) {
                  console.error(e)
                }))) : (this.props.setTowerStage("map"), this.props.history.push("/tower/map")), e.abrupt("return");
              case 9:
                t = 20, a = 2, this.props.tower.artifacts.forEach((function(e) {
                  "Tasty Egg" === e ? t += 7 : "Training Weights" === e && (a += 2)
                })), t = Math.min(t, 100 - this.props.tower.life), this.setState({
                  healAmount: t,
                  bonusStats: a,
                  phase: "welcome"
                }), this.freeQuestions = JSON.parse(JSON.stringify(this.props.tower.freeQuestions)), this.welcomeTimeout = setTimeout((function() {
                  s.getQuestion()
                }), 3e3);
              case 16:
              case "end":
                return e.stop()
            }
          }), e, this)
        })), r = function() {
          var e = this,
            t = arguments;
          return new Promise((function(a, s) {
            var n = o.apply(e, t);

            function r(e) {
              P(n, a, s, r, i, "next", e)
            }

            function i(e) {
              P(n, a, s, r, i, "throw", e)
            }
            r(void 0)
          }))
        }, function() {
          return r.apply(this, arguments)
        })
      }, {
        key: "componentWillUnmount",
        value: function() {
          clearTimeout(this.welcomeTimeout), clearTimeout(this.waitTimeout), clearTimeout(this.cardTimeout), clearTimeout(this.healTimeout), clearInterval(this.healInterval)
        }
      }, {
        key: "onAnswer",
        value: function(e) {
          if(!this.waiting) {
            this.waiting = !0;
            var t = this.state.question.correctAnswers.includes(e),
              a = JSON.parse(JSON.stringify(this.props.tower.corrects)),
              s = JSON.parse(JSON.stringify(this.props.tower.incorrects)),
              n = this.state.question.number;
            t ? a[n] ? a[n] += 1 : a[n] = 1 : s[n] ? s[n] += 1 : s[n] = 1, this.props.answerTower(a, s, JSON.parse(JSON.stringify(this.freeQuestions))), this.setState({
              correct: t,
              phase: "feedback"
            })
          }
        }
      }, {
        key: "onHeal",
        value: function() {
          var e = this;
          this.setState({
            life: this.props.tower.life,
            phase: "healing"
          }, (function() {
            e.healTimeout = setTimeout((function() {
              var t = e.state.healAmount;
              e.healInterval = setInterval((function() {
                t <= 0 ? (clearInterval(e.healInterval), e.healTimeout = setTimeout((function() {
                  var t = Math.min(e.props.tower.life + e.state.healAmount, 100);
                  e.props.tower.towerId ? (d.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null, d.a.put("/api/towers/save", {
                    id: e.props.tower.towerId,
                    stage: "map",
                    life: t,
                    corrects: e.props.tower.corrects,
                    incorrects: e.props.tower.incorrects
                  }).then((function() {
                    e.props.setTowerLife(t), e.props.setTowerStage("map"), e.props.history.push("/tower/map")
                  })).catch((function(e) {
                    console.error(e)
                  }))) : (e.props.setTowerLife(t), e.props.setTowerStage("map"), e.props.history.push("/tower/map"))
                }), 1500)) : (t -= 1, e.setState({
                  life: e.state.life + 1
                }))
              }), 100)
            }), 1500)
          }))
        }
      }, {
        key: "getQuestion",
        value: function() {
          var e = this;
          0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.props.tower.questions)));
          var t = Object(E.o)(this.freeQuestions);
          this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(E.w)(t.answers)), this.setState({
            question: t,
            phase: "question"
          }, (function() {
            e.waiting = !0, e.waitTimeout = setTimeout((function() {
              e.waiting = !1
            }), 400)
          }))
        }
      }, {
        key: "answerNext",
        value: function() {
          this.state.correct ? this.qRemaining -= 1 : (this.props.setTowerStage("map"), this.props.history.push("/tower/map")), this.qRemaining > 0 ? this.getQuestion() : this.setState({
            phase: "rest"
          })
        }
      }, {
        key: "selectCard",
        value: function(e) {
          var t = this,
            a = R(this.props.tower.cards),
            s = j({}, a[e]);
          a[e] = j(j({}, s), {}, {
            strength: Math.min(s.strength + this.state.bonusStats, 20),
            charisma: Math.min(s.charisma + this.state.bonusStats, 20),
            wisdom: Math.min(s.wisdom + this.state.bonusStats, 20)
          }), this.setState({
            card: s,
            phase: "upgradeReveal"
          }, (function() {
            t.cardTimeout = setTimeout((function() {
              t.setState({
                card: a[e]
              }, (function() {
                t.cardTimeout = setTimeout((function() {
                  t.props.tower.towerId ? (d.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null, d.a.put("/api/towers/save", {
                    id: t.props.tower.towerId,
                    stage: "map",
                    cards: a,
                    corrects: t.props.tower.corrects,
                    incorrects: t.props.tower.incorrects
                  }).then((function() {
                    t.props.setTowerStage("map"), t.props.setTowerCards(a), t.props.history.push("/tower/map")
                  })).catch((function(e) {
                    console.error(e)
                  }))) : (t.props.setTowerStage("map"), t.props.setTowerCards(a), t.props.history.push("/tower/map"))
                }), 3500)
              }))
            }), 2500)
          }))
        }
      }, {
        key: "render",
        value: function() {
          var e = this;
          return this.props.tower && this.props.tower.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), !this.redirect && this.props.tower && this.props.tower.questions && this.props.tower.questions.length ? n.a.createElement("div", {
            className: m.isMobile ? w.a.mBody : w.a.body,
            style: {
              backgroundColor: "#292929"
            }
          }, n.a.createElement(C.a, {
            title: "Play Tower of Doom | Blooket",
            desc: "Ascend the feared Tower of Doom by answering questions and building a deck to defeat evil Blooks on your way to the top."
          }), n.a.createElement(v.a, {
            coins: this.props.tower.coins
          }), "question" === this.state.phase ? n.a.createElement("div", {
            className: g.a.questionContainer
          }, n.a.createElement(x.a, {
            onAnswer: this.onAnswer,
            text: this.state.question.text,
            answers: this.state.question.answers,
            image: this.state.question.image
          })) : "feedback" === this.state.phase ? n.a.createElement(k.a, {
            incorrectTime: 3,
            correctAnswers: this.state.question.correctAnswers,
            correct: this.state.correct,
            onNext: this.answerNext
          }) : "welcome" === this.state.phase ? n.a.createElement("div", {
            className: w.a.regularBody
          }, n.a.createElement("div", {
            className: g.a.welcomeText
          }, "Answer 3 Questions Correctly to Rest")) : "rest" === this.state.phase ? n.a.createElement("div", {
            className: w.a.regularBody
          }, n.a.createElement("div", {
            className: g.a.lifeContainer
          }, n.a.createElement(S.a, {
            currentLife: this.props.tower.life,
            maxLife: 100
          })), n.a.createElement("div", {
            className: g.a.deckButton,
            role: "button",
            tabIndex: 0,
            onClick: function() {
              return e.setState({
                showDeck: !0
              })
            }
          }, n.a.createElement("i", {
            className: p()("fas fa-layer-group", g.a.deckIcon)
          }), n.a.createElement("div", {
            className: g.a.deckText
          }, "View Deck")), this.state.showDeck ? n.a.createElement("div", {
            className: g.a.deckContainer
          }, [].concat(R(this.props.tower.artifacts), R(this.props.tower.cards)).map((function(e, t) {
            return n.a.createElement("div", {
              className: g.a.cardContainer,
              key: t
            }, n.a.createElement(T.a, {
              card: e,
              flipped: !1,
              isArtifact: !e.blook
            }))
          })), n.a.createElement("i", {
            className: p()("fas fa-times", g.a.closeIcon),
            role: "button",
            tabIndex: 0,
            onClick: function() {
              return e.setState({
                showDeck: !1
              })
            }
          })) : null, n.a.createElement("div", {
            className: g.a.chooseText
          }, "Choose an Option"), n.a.createElement("div", {
            className: g.a.restButtonContainer
          }, n.a.createElement("div", {
            className: g.a.restButton,
            role: "button",
            tabIndex: 0,
            style: {
              backgroundColor: "#ff9933"
            },
            onClick: function() {
              return e.setState({
                phase: "upgradeSelect"
              })
            }
          }, n.a.createElement("i", {
            className: p()("fas fa-wrench", g.a.buttonIcon)
          }), "Upgrade", n.a.createElement("span", {
            style: {
              fontSize: "2vw"
            }
          }, "+".concat(this.state.bonusStats, " Attributes"))), n.a.createElement("div", {
            className: g.a.restButton,
            role: "button",
            tabIndex: 0,
            style: {
              backgroundColor: "#33cc33"
            },
            onClick: function() {
              return e.onHeal()
            }
          }, n.a.createElement("i", {
            className: p()("fas fa-medkit", g.a.buttonIcon)
          }), "Recover", n.a.createElement("span", {
            style: {
              fontSize: "2vw"
            }
          }, "+".concat(this.state.healAmount, " Health"))))) : "upgradeSelect" === this.state.phase ? n.a.createElement("div", {
            className: w.a.regularBody
          }, n.a.createElement("div", {
            className: g.a.upgradeText
          }, "Choose a Card to Upgrade"), n.a.createElement("div", {
            className: g.a.upgradeDeckContainer
          }, this.props.tower.cards.map((function(t, a) {
            return n.a.createElement("div", {
              className: g.a.upgradeCardContainer,
              key: a,
              role: "button",
              tabIndex: 0,
              onClick: function() {
                return e.selectCard(a)
              }
            }, n.a.createElement(T.a, {
              card: t,
              flipped: !1
            }))
          })))) : "upgradeReveal" === this.state.phase ? n.a.createElement("div", {
            className: w.a.regularBody
          }, n.a.createElement("div", {
            className: g.a.upgradeText
          }, "Adding +".concat(this.state.bonusStats, " to All Attributes")), n.a.createElement("div", {
            className: g.a.cardReveal
          }, n.a.createElement(T.a, {
            card: this.state.card,
            flipped: !1
          }))) : "healing" === this.state.phase ? n.a.createElement("div", {
            className: w.a.regularBody
          }, n.a.createElement("div", {
            className: g.a.upgradeText
          }, "Adding +".concat(this.state.healAmount, " Health")), n.a.createElement("div", {
            className: g.a.lifeHealContainer
          }, n.a.createElement(S.a, {
            currentLife: this.state.life,
            maxLife: 100
          }))) : null) : n.a.createElement(u.a, {
            to: "/login"
          })
        }
      }]) && A(t.prototype, a), s && A(t, s), c
    }(n.a.Component);
    L.propTypes = {
      history: c.a.object.isRequired,
      tower: c.a.object,
      answerTower: c.a.func.isRequired,
      setTowerCards: c.a.func.isRequired,
      setTowerStage: c.a.func.isRequired,
      setTowerLife: c.a.func.isRequired,
      user: c.a.object
    };
    t.a = Object(I.c)(Object(l.a)(Object(r.b)((function(e) {
      return {
        tower: e.towers.tower
      }
    }), (function(e) {
      return Object(o.b)({
        answerTower: h.a,
        setTowerCards: h.c,
        setTowerStage: h.g,
        setTowerLife: h.f
      }, e)
    }))(L)))
  },
  FeV8: function(e, t, a) {
    "use strict";
    a.d(t, "a", (function() {
      return s
    })), a.d(t, "b", (function() {
      return n
    }));
    var s = "CREATE_TOWER",
      n = "LOAD_TOWER"
  },
  Iuzw: function(e, t, a) {
    "use strict";
    var s = a("q1tI"),
      n = a.n(s),
      o = a("ANjH"),
      r = a("/MKj"),
      i = a("17x9"),
      c = a.n(i),
      l = a("wIs1"),
      u = a("mLw1"),
      m = a("TkZq"),
      f = a("b6Qr"),
      p = a("TSYQ"),
      _ = a.n(p),
      d = a("vDqi"),
      h = a.n(d),
      y = a("A0Lk"),
      w = a.n(y),
      b = a("9vW0"),
      g = a("4MCU"),
      v = a("e78h"),
      C = a("GIcp"),
      x = a.n(C),
      k = a("W0NV"),
      T = a.n(k),
      S = a("2g2H"),
      E = a("iQ+n"),
      I = a("vPiy"),
      O = a("hAB6"),
      N = a.n(O),
      j = [{
        text: "This is the map of the 1st level. Each time you play, the maps for each level will be different.",
        nextButtonText: "Next",
        className: N.a.centered
      }, {
        text: "Your goal is to go down the map. Each time you're on this page, you have to pick a highlighted icon to enter that stage.",
        nextButtonText: "Next",
        className: N.a.centered
      }, {
        elementId: "buttonContainer",
        backgroundColor: "#292929",
        text: "You can use the 'View Deck' button to view your current Deck, and the 'Map Key' is helpful to learn about what the map icons mean.",
        nextButtonText: "Next",
        className: N.a.topRight
      }, {
        text: "Once you choose a stage, you can't go back. You'll only be able to enter stages lower on the map that are connected by the paths.",
        nextButtonText: "Next",
        className: N.a.centered
      }, {
        text: "Go ahead and click a non-white icon now to enter that stage. Good Luck!",
        nextButtonText: "Done",
        className: N.a.centered
      }],
      B = a("anyA"),
      R = a("tYQ+"),
      z = a("6Ny9"),
      P = a("TN+F");

    function A(e) {
      return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function D(e) {
      return function(e) {
        if(Array.isArray(e)) return q(e)
      }(e) || function(e) {
        if("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
      }(e) || function(e, t) {
        if(!e) return;
        if("string" == typeof e) return q(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === a && e.constructor && (a = e.constructor.name);
        if("Map" === a || "Set" === a) return Array.from(e);
        if("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return q(e, t)
      }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function q(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for(var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
      return s
    }

    function M(e, t, a, s, n, o, r) {
      try {
        var i = e[o](r),
          c = i.value
      } catch (e) {
        return void a(e)
      }
      i.done ? t(c) : Promise.resolve(c).then(s, n)
    }

    function H(e, t) {
      for(var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
    }

    function Q(e, t) {
      return (Q = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function L(e) {
      var t = function() {
        if("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if(Reflect.construct.sham) return !1;
        if("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }();
      return function() {
        var a, s = W(e);
        if(t) {
          var n = W(this).constructor;
          a = Reflect.construct(s, arguments, n)
        } else a = s.apply(this, arguments);
        return J(this, a)
      }
    }

    function J(e, t) {
      return !t || "object" !== A(t) && "function" != typeof t ? function(e) {
        if(void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }(e) : t
    }

    function W(e) {
      return (W = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }
    var F = {
        small: {
          code: "",
          color: "#6666ff",
          size: Object(P.C)("1.7vw")
        },
        big: {
          code: "",
          color: "#ff5050",
          size: Object(P.C)("2.5vw")
        },
        shop: {
          code: "",
          color: "#ffff66",
          size: Object(P.C)("2vw")
        },
        rest: {
          code: "",
          color: "#ffa31a",
          size: Object(P.C)("2vw")
        },
        risk: {
          code: "",
          color: "#cc33ff",
          size: Object(P.C)("2.2vw")
        },
        boss: {
          code: "",
          color: "#990000",
          size: Object(P.C)("7vw")
        }
      },
      G = function(e) {
        ! function(e, t) {
          if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && Q(e, t)
        }(c, e);
        var t, a, s, o, r, i = L(c);

        function c(e) {
          var t;
          return function(e, t) {
            if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, c), (t = i.call(this, e)).state = {
            showDeck: !1,
            showKey: !1,
            showTour: e.tower && 0 === e.tower.currentNode && e.tower.instruct
          }, t
        }
        return t = c, (a = [{
          key: "componentDidMount",
          value: (o = regeneratorRuntime.mark((function e() {
            var t, a, s, n, o, r, i, c, l, u, p = this;
            return regeneratorRuntime.wrap((function(e) {
              for(;;) switch(e.prev = e.next) {
                case 0:
                  if(this.props.tower && "map" === this.props.tower.stage) {
                    e.next = 2;
                    break
                  }
                  return e.abrupt("return", this.props.history.push("/login"));
                case 2:
                  return e.next = 4, this.props.user.getData();
                case 4:
                  e.sent || this.setState({
                    notLoggedIn: !0
                  }), this.props.tower && this.props.tower.resultId && h.a.put("/api/results", {
                    id: this.props.tower.resultId,
                    data: {
                      corrects: this.props.tower.corrects,
                      incorrects: this.props.tower.incorrects,
                      stage: this.props.tower.numNodes,
                      alive: !0
                    }
                  }).catch((function(e) {
                    return console.error(e)
                  })), t = this.props.tower.currentNode, a = this.props.tower.mapNodes, s = 0 === t ? a.filter((function(e) {
                    return e.y < 10
                  })).map((function(e) {
                    return e.id
                  })) : a.filter((function(e) {
                    return e.id === t
                  }))[0].connected, n = new m.a.DataSet(a.map((function(e) {
                    return {
                      id: e.id,
                      x: Object(P.C)("".concat(f.isMobile ? e.x + .5 * (e.x - 50) : e.x, "vw")),
                      y: Object(P.C)("".concat(e.y).concat(f.isMobile ? "vh" : "vw")),
                      color: "#fff",
                      shape: "icon",
                      icon: {
                        face: '"Font Awesome 5 Free"',
                        weight: "bold",
                        code: t === e.id ? "" : F[e.type].code,
                        color: t === e.id || p.props.tower.nodePath.includes(e.id) ? "#fff" : s.includes(e.id) ? F[e.type].color : "rgba(255, 255, 255, 0.6)",
                        size: t === e.id ? Object(P.C)(f.isMobile ? "3.5vh" : "3vw") : s.includes(e.id) ? F[e.type].size + Object(P.C)("1.2vw") : F[e.type].size
                      }
                    }
                  }))), o = [], a.forEach((function(e) {
                    e.connected.forEach((function(a) {
                      o.push({
                        from: e.id,
                        to: a,
                        width: e.id === t || p.props.tower.nodePath.includes(e.id) && [].concat(D(p.props.tower.nodePath), [e.id]).includes(a) ? 3 : 1
                      })
                    }))
                  })), r = new m.a.DataSet(o), i = document.getElementById("mynetwork"), c = {
                    nodes: n,
                    edges: r
                  }, l = {
                    interaction: {
                      dragNodes: !1,
                      zoomView: !1,
                      dragView: !0,
                      selectConnectedEdges: !1
                    },
                    autoResize: !1,
                    physics: !1,
                    height: "".concat(Object(P.C)(f.isMobile ? "110vh" : "110vw"), "px"),
                    width: "100%",
                    edges: {
                      dashes: !0,
                      smooth: !1
                    }
                  }, (u = new m.a.Network(i, c, l)).on("selectNode", (function(e) {
                    if(s.includes(e.nodes[0])) {
                      var t = [].concat(D(p.props.tower.nodePath), [e.nodes[0]]),
                        n = p.props.tower.numNodes + 1;
                      p.props.addTowerNode(e.nodes[0]);
                      var o = a.filter((function(t) {
                        return t.id === e.nodes[0]
                      }))[0];
                      if(p.props.tower.towerId) switch(o.type) {
                        case "shop":
                        case "rest":
                          h.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null, h.a.put("/api/towers/save", {
                            id: p.props.tower.towerId,
                            stage: o.type,
                            nodePath: t,
                            numNodes: n,
                            currentNode: o.id
                          }).then((function() {
                            p.props.setTowerStage(o.type), p.props.history.push("/tower/".concat(o.type))
                          })).catch((function(e) {
                            console.error(e)
                          }));
                          break;
                        case "risk":
                          h.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null, h.a.put("/api/towers/save", {
                            id: p.props.tower.towerId,
                            stage: o.type,
                            nodePath: t,
                            numNodes: n,
                            currentNode: o.id,
                            enemy: p.props.tower.artifacts.includes("Dave's Doggo") ? "-" : p.props.tower.artifacts.includes("Lucky Feather") ? Object(P.o)(["+", "+", "-"]) : Object(P.o)(["-", "-", "+"])
                          }).then((function(e) {
                            p.props.setTowerEnemy(e.data.enemy, "small"), p.props.setTowerStage(o.type), p.props.history.push("/tower/".concat(o.type))
                          })).catch((function(e) {
                            console.error(e)
                          }));
                          break;
                        case "small":
                        case "big":
                        case "boss":
                          h.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null, h.a.put("/api/towers/save", {
                            id: p.props.tower.towerId,
                            stage: o.type,
                            nodePath: t,
                            numNodes: n,
                            currentNode: o.id,
                            enemy: Object(v.b)(o.type, p.props.tower.level)
                          }).then((function(e) {
                            p.props.setTowerEnemy(e.data.enemy, o.type), p.props.history.push("/tower/battle")
                          })).catch((function(e) {
                            console.error(e)
                          }))
                      } else switch(o.type) {
                        case "shop":
                        case "rest":
                          p.props.setTowerStage(o.type), p.props.history.push("/tower/".concat(o.type));
                          break;
                        case "risk":
                          p.props.setTowerEnemy(p.props.tower.artifacts.includes("Dave's Doggo") ? "-" : p.props.tower.artifacts.includes("Lucky Feather") ? Object(P.o)(["+", "+", "-"]) : Object(P.o)(["-", "-", "+"]), "small"), p.props.setTowerStage(o.type), p.props.history.push("/tower/".concat(o.type));
                          break;
                        case "small":
                        case "big":
                        case "boss":
                          p.props.setTowerEnemy(Object(v.b)(o.type, p.props.tower.level), o.type), p.props.history.push("/tower/battle")
                      }
                    }
                  })), new w.a("FontAwesome", {}).load("", 12500).then((function() {
                    p.redrawTimeout = setTimeout((function() {
                      u.redraw()
                    }), 1e3)
                  }));
                case 21:
                case "end":
                  return e.stop()
              }
            }), e, this)
          })), r = function() {
            var e = this,
              t = arguments;
            return new Promise((function(a, s) {
              var n = o.apply(e, t);

              function r(e) {
                M(n, a, s, r, i, "next", e)
              }

              function i(e) {
                M(n, a, s, r, i, "throw", e)
              }
              r(void 0)
            }))
          }, function() {
            return r.apply(this, arguments)
          })
        }, {
          key: "componentWillUnmount",
          value: function() {
            clearTimeout(this.redrawTimeout)
          }
        }, {
          key: "render",
          value: function() {
            var e = this;
            return this.props.tower && this.props.tower.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || !this.props.tower ? n.a.createElement(u.a, {
              to: "/login"
            }) : n.a.createElement("div", {
              className: f.isMobile ? x.a.mBody : x.a.body,
              id: "body",
              style: {
                backgroundColor: "#292929",
                overflow: f.isMobile ? "hidden" : null,
                height: f.isMobile ? "100%" : null
              }
            }, n.a.createElement(E.a, {
              title: "Play Tower of Doom | Blooket",
              desc: "Ascend the feared Tower of Doom by answering questions and building a deck to defeat evil Blooks on your way to the top."
            }), n.a.createElement(S.a, {
              coins: this.props.tower.coins
            }), n.a.createElement("div", {
              className: x.a.regularBody,
              id: "regularBody"
            }, this.state.showTour ? n.a.createElement(I.a, {
              steps: j,
              onExit: function() {
                return e.setState({
                  showTour: !1
                })
              }
            }) : null, n.a.createElement("div", {
              className: T.a.header
            }, 3 === this.props.tower.level ? "Final Map" : "Level ".concat(this.props.tower.level, " Map")), n.a.createElement("div", {
              className: T.a.subheader
            }, "Choose a Highlighted Location"), n.a.createElement("div", {
              className: T.a.buttonContainer,
              id: "buttonContainer"
            }, n.a.createElement("div", {
              className: T.a.deckButton,
              role: "button",
              tabIndex: 0,
              onClick: this.state.showTour ? function() {} : function() {
                return e.setState({
                  showDeck: !0
                })
              }
            }, n.a.createElement("i", {
              className: _()("fas fa-layer-group", T.a.deckIcon)
            }), n.a.createElement("div", {
              className: T.a.deckText
            }, "View Deck")), n.a.createElement("div", {
              className: T.a.deckButton,
              role: "button",
              tabIndex: 0,
              onClick: this.state.showTour ? function() {} : function() {
                return e.setState({
                  showKey: !0
                })
              }
            }, n.a.createElement("i", {
              className: _()("fas fa-map", T.a.deckIcon)
            }), n.a.createElement("div", {
              className: T.a.deckText
            }, "Map Key"))), n.a.createElement("div", {
              className: T.a.lifeContainer
            }, n.a.createElement(z.a, {
              currentLife: this.props.tower.life,
              maxLife: 100
            })), n.a.createElement("div", {
              id: "mynetwork",
              className: T.a.network
            }), this.state.showDeck ? n.a.createElement("div", {
              className: T.a.deckContainer
            }, [].concat(D(this.props.tower.artifacts), D(this.props.tower.cards)).map((function(e, t) {
              return n.a.createElement("div", {
                className: T.a.cardContainer,
                key: t
              }, n.a.createElement(R.a, {
                card: e,
                flipped: !1,
                isArtifact: !e.blook
              }))
            })), n.a.createElement("i", {
              className: _()("fas fa-times", T.a.closeIcon),
              role: "button",
              tabIndex: 0,
              onClick: function() {
                return e.setState({
                  showDeck: !1
                })
              }
            })) : this.state.showKey ? n.a.createElement("div", {
              className: x.a.modal,
              style: {
                top: 55,
                height: "calc(100% - 55px)"
              }
            }, n.a.createElement("div", {
              className: T.a.keyContainer
            }, n.a.createElement("div", {
              className: T.a.keyHeader
            }, "Map Key"), n.a.createElement("i", {
              className: _()("fas fa-times", T.a.closeIcon),
              role: "button",
              tabIndex: 0,
              onClick: function() {
                return e.setState({
                  showKey: !1
                })
              }
            }), n.a.createElement("div", {
              className: T.a.keyRow
            }, n.a.createElement("i", {
              className: _()("fas fa-bed", T.a.keyIcon),
              style: {
                color: "#ffa31a"
              }
            }), "Rest to restore health or upgrade cards"), n.a.createElement("div", {
              className: T.a.keyRow
            }, n.a.createElement("i", {
              className: _()("fas fa-question", T.a.keyIcon),
              style: {
                color: "#cc33ff"
              }
            }), "Take a risk with your health and cards"), n.a.createElement("div", {
              className: T.a.keyRow
            }, n.a.createElement("i", {
              className: _()("fas fa-store", T.a.keyIcon),
              style: {
                color: "#ffff66"
              }
            }), "Use coins to remove cards or buy new ones"), n.a.createElement("div", {
              className: T.a.keyRow
            }, n.a.createElement("i", {
              className: _()("fas fa-robot", T.a.keyIcon),
              style: {
                color: "#6666ff"
              }
            }), "Fight an easy enemy for a small reward"), n.a.createElement("div", {
              className: T.a.keyRow
            }, n.a.createElement("i", {
              className: _()("fas fa-skull", T.a.keyIcon),
              style: {
                color: "#ff5050"
              }
            }), "Fight a larger enemy for a better reward"), n.a.createElement("div", {
              className: T.a.keyRow
            }, n.a.createElement("i", {
              className: _()("fas fa-exclamation-triangle", T.a.keyIcon),
              style: {
                color: "#990000"
              }
            }), "Fight the boss to clear the level"), n.a.createElement("div", {
              style: {
                height: 20
              }
            }))) : null))
          }
        }]) && H(t.prototype, a), s && H(t, s), c
      }(n.a.Component);
    G.propTypes = {
      history: c.a.object.isRequired,
      tower: c.a.object,
      setTowerEnemy: c.a.func.isRequired,
      addTowerNode: c.a.func.isRequired,
      setTowerStage: c.a.func.isRequired,
      user: c.a.object
    };
    t.a = Object(B.c)(Object(l.a)(Object(r.b)((function(e) {
      return {
        tower: e.towers.tower,
        client: e.clients.client
      }
    }), (function(e) {
      return Object(o.b)({
        setTowerEnemy: b.b,
        addTowerNode: b.a,
        setTowerStage: g.g
      }, e)
    }))(G)))
  },
  J34z: function(e, t, a) {
    (t = e.exports = a("JPst")(!1)).push([e.i, '.styles__container___3OmUH-camelCase{display:"flex";flex-direction:column;width:100%;-webkit-animation:styles__fadeIn___35OD_-camelCase 3s ease-in;animation:styles__fadeIn___35OD_-camelCase 3s ease-in}@-webkit-keyframes styles__fadeIn___35OD_-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___35OD_-camelCase{0%{opacity:0}to{opacity:1}}.styles__header___i1pep-camelCase{font-size:16vw;margin:0 auto 20px;font-family:Creepster,sans-serif;color:#b3ffb3}.styles__header___i1pep-camelCase,.styles__winText___1ArvS-camelCase{text-align:center;text-shadow:2px 2px 8px grey;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__winText___1ArvS-camelCase{font-size:2.7vw;width:95%;margin:0 auto;font-family:Nunito,sans-serif;color:#fff;font-weight:700}.styles__endButton___3uthB-camelCase{font-size:5vw;width:25%;margin:20px auto 0;text-align:center;font-family:Creepster,sans-serif;text-shadow:2px 2px 8px grey;color:#b3ffb3;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__endButton___3uthB-camelCase:focus,.styles__endButton___3uthB-camelCase:hover{transform:scale(1.05)}@media only screen and (max-width:700px){.styles__header___i1pep-camelCase{font-size:100px}.styles__winText___1ArvS-camelCase{font-size:24px}.styles__endButton___3uthB-camelCase{font-size:60px;width:250px}}', ""]), t.locals = {
      container: "styles__container___3OmUH-camelCase",
      fadeIn: "styles__fadeIn___35OD_-camelCase",
      header: "styles__header___i1pep-camelCase",
      winText: "styles__winText___1ArvS-camelCase",
      endButton: "styles__endButton___3uthB-camelCase"
    }
  },
  MfGM: function(e, t, a) {
    "use strict";
    var s = a("TN+F"),
      n = [
        ["small", 60],
        ["big", 13],
        ["shop", 9],
        ["rest", 8],
        ["risk", 10]
      ],
      o = function() {
        for(var e = 100 * Math.random(), t = 0, a = "", s = 0; s < n.length; s++)
          if((t += n[s][1]) >= e) {
            a = n[s][0];
            break
          } return a
      };
    t.a = function() {
      for(var e = [], t = [], a = 5, n = function(n) {
          e[n] = [0, 0, 0, 0, 0, 0, 0];
          for(var r = 0 === Object(s.q)(0, 3) ? 3 : 4, i = Object(s.q)(r, 6), c = []; c.length < i;) {
            var l = Object(s.q)(0, e[n].length);
            c.includes(l) || c.push(l)
          }
          c.sort();
          var u = 0;
          c.forEach((function(s) {
            var r = t.length + 1;
            e[n][s] = r;
            var i = Math.min(80, Math.max(8.5 * s + 24 + 8 * Math.random() - 4, u + 5));
            t.push({
              id: r,
              y: a + 4 * Math.random() - 2,
              x: i,
              type: o(),
              connected: []
            }), u = i
          })), a += 10
        }, r = 0; r < 10; r++) n(r);
      for(var i = [], c = 0, l = 0; l < 9; l++) {
        var u = e[l].map((function(e, t) {
            return 0 !== e ? t : null
          })).filter((function(e) {
            return null !== e
          })),
          m = e[l + 1].map((function(e, t) {
            return 0 !== e ? t : null
          })).filter((function(e) {
            return null !== e
          }));
        8 === l && (i = e[l + 1].filter((function(e) {
          return 0 !== e
        })));
        for(var f = 0, p = !1, _ = 0; _ < e[l].length; _++)
          if(u.includes(_)) {
            var d = t[c],
              h = !1,
              y = f;
            if(p) {
              var w = m.indexOf(f);
              y = w !== m.length - 1 && _ - f > 1 ? m[w + 1] : f
            }
            for(; !h || y <= (u[u.length - 1] === _ ? e[l].length - 1 : _ + 1);) 0 !== e[l + 1][y] && (d.connected.push(e[l + 1][y]), h = !0, f = y, p = !0), y += 1;
            c += 1
          }
      }
      t.push({
        id: t.length + 1,
        x: 50,
        y: 110,
        color: "#fff",
        type: "boss",
        connected: []
      });
      for(var b = t.length, g = 0; g < i.length; g++) t[t.length - i.length - 1 + g].connected.push(b);
      return t
    }
  },
  NncC: function(e, t, a) {
    (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__left___2mUuk-camelCase{position:absolute;height:85%;top:6%;width:35vw;padding:1.5% 1.25vw;left:2.5vw;overflow-y:auto}.styles__standingInside___1tY6d-camelCase{background-color:#f23941;border:5px solid #fff;width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:row;justify-content:space-between}.styles__placeText___36eR4-camelCase{padding:.5vh 0 1vh .5vw;min-width:2.5vw;margin:auto 0;height:5.75vh;display:flex;flex-direction:row;justify-content:flex-end;align-items:center;text-align:right}.styles__placeText___36eR4-camelCase,.styles__superPlaceText___7rJrU-camelCase{color:#fff;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__superPlaceText___7rJrU-camelCase{text-align:left;width:1.4vw;font-size:1.2vw;margin-top:4px;margin-left:1px}.styles__blookBox____0J67-camelCase{margin-left:1vw;width:6.25vh;height:7.1875vh;margin-top:.40625vh;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__nameText___1rqhM-camelCase{font-weight:700;color:#fff;line-height:6vh;padding:1vh 1vw;font-family:Nunito,sans-serif;text-align:left;flex-grow:1}.styles__toyContainer___3ENwf-camelCase{height:6vh;margin:1vh 1vw;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.styles__toyText___2FxPY-camelCase{width:6.5vw;height:6vh;color:#fff;font-family:Nunito,sans-serif;text-align:right}.styles__toyIcon___aD3po-camelCase{height:60%;margin-left:.75vw;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__chatroom___u4r4U-camelCase{width:55vw;height:calc(65% - 30px);position:absolute;left:42.5vw;top:7.5%;background-color:#f23941;box-shadow:5px 5px 0 rgba(0,0,0,.2);border-radius:8px;padding:10px}.styles__chatroomInside___A_cTk-camelCase{background-color:#f23941;border:5px solid #fff;width:100%;height:100%;box-sizing:border-box;overflow:hidden;overflow-y:scroll;padding:15px 0}.styles__invisibleScrollbar___1J8RK-camelCase::-webkit-scrollbar{display:none}.styles__noAlerts___34cux-camelCase{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-content:center;text-align:center;color:#fff}.styles__noAlertsIcon___2kIHC-camelCase{font-size:8vw;margin:0 auto 2vh}.styles__noAlertsText___35BUI-camelCase{font-family:Titan One,sans-serif;font-size:3vw}.styles__totalToyContainer___1FOL--camelCase{box-shadow:5px 5px 0 rgba(0,0,0,.2);padding:10px;border-radius:6px;position:absolute;left:45vw;top:80%;width:50vw;height:15%}.styles__totalToyContainer___1FOL--camelCase,.styles__totalToyInside___36b9r-camelCase{background-color:#0cb04a;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;justify-content:center}.styles__totalToyInside___36b9r-camelCase{border:5px solid #fff;width:100%;height:100%}.styles__totalToyText____U8E2-camelCase{color:#fff;font-family:Titan One,sans-serif;font-size:3.5vw}.styles__totalToyIcon___1GUcc-camelCase{height:60%;width:auto;margin-left:1.5vw;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__winterBackground___2QnBB-camelCase{background-image:linear-gradient(#31aae0,#bdf)}.styles__mountainsBackground___3XFur-camelCase{z-index:-1;bottom:0}.styles__mountainsBackground___3XFur-camelCase,.styles__plowSnow___2rgaP-camelCase{position:absolute;left:0;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__plowSnow___2rgaP-camelCase{top:0;height:100%;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);z-index:16;-webkit-animation:styles__plowSnow___2rgaP-camelCase 8s linear 0s forwards;animation:styles__plowSnow___2rgaP-camelCase 8s linear 0s forwards}@-webkit-keyframes styles__plowSnow___2rgaP-camelCase{0%{transform:translateY(100%)}25%{transform:translate(0)}to{transform:translate(140%)}}@keyframes styles__plowSnow___2rgaP-camelCase{0%{transform:translateY(100%)}25%{transform:translate(0)}to{transform:translate(140%)}}.styles__plow___121wP-camelCase{position:absolute;top:50%;right:0;font-size:30vw;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#ff751a;z-index:16;transform:translate(100vw,-50%);pointer-events:none;-webkit-animation:styles__plow___121wP-camelCase 6s linear 2s forwards;animation:styles__plow___121wP-camelCase 6s linear 2s forwards}@-webkit-keyframes styles__plow___121wP-camelCase{0%{transform:translate(-100vw,-50%)}to{transform:translate(40vw,-50%)}}@keyframes styles__plow___121wP-camelCase{0%{transform:translate(-100vw,-50%)}to{transform:translate(40vw,-50%)}}.styles__plowBlook___Gbb9g-camelCase{position:absolute;top:calc(50% - 6vw);right:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:15;width:10vw;transform:translate(100vw,-50%);pointer-events:none;-webkit-animation:styles__plowBlook___Gbb9g-camelCase 6s linear 2s forwards;animation:styles__plowBlook___Gbb9g-camelCase 6s linear 2s forwards}@-webkit-keyframes styles__plowBlook___Gbb9g-camelCase{0%{transform:translate(-116.5vw,-50%)}to{transform:translate(23.5vw,-50%)}}@keyframes styles__plowBlook___Gbb9g-camelCase{0%{transform:translate(-116.5vw,-50%)}to{transform:translate(23.5vw,-50%)}}.styles__canada1___LlEf5-camelCase{left:0;width:33.3%;background-color:#eb2d37}.styles__canada1___LlEf5-camelCase,.styles__canada2___2vB_c-camelCase{position:absolute;top:0;height:100%;opacity:.4;z-index:25;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.styles__canada2___2vB_c-camelCase{left:33.3%;width:33.4%;background-color:#fff}.styles__canada3___I0KA9-camelCase{top:0;right:0;width:33.3%;height:100%;background-color:#eb2d37;z-index:25}.styles__canada3___I0KA9-camelCase,.styles__canadaIcon___1oyeJ-camelCase{position:absolute;opacity:.4;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.styles__canadaIcon___1oyeJ-camelCase{top:50%;left:50%;transform:translate(-50%,-50%);font-size:17vw;color:#eb2d37;z-index:26}.styles__wind___2-I9U-camelCase{position:absolute;top:0;left:0;height:100%;width:100%;-webkit-animation:styles__blow___1dJ8F-camelCase 5s linear 2s forwards;animation:styles__blow___1dJ8F-camelCase 5s linear 2s forwards}@-webkit-keyframes styles__blow___1dJ8F-camelCase{0%{transform:translate(0)}49.5%{transform:translate(100%);opacity:1}49.75%{transform:translate(100%);opacity:0}49.85%{transform:translate(100%,100%);opacity:0}50.15%{transform:translate(-100%,100%);opacity:0}50.25%{transform:translate(-100%);opacity:0}50.5%{transform:translate(-100%);opacity:1}to{transform:translate(0)}}@keyframes styles__blow___1dJ8F-camelCase{0%{transform:translate(0)}49.5%{transform:translate(100%);opacity:1}49.75%{transform:translate(100%);opacity:0}49.85%{transform:translate(100%,100%);opacity:0}50.15%{transform:translate(-100%,100%);opacity:0}50.25%{transform:translate(-100%);opacity:0}50.5%{transform:translate(-100%);opacity:1}to{transform:translate(0)}}.styles__treeContainer___3dhSj-camelCase{position:absolute;top:50vw;left:50vw;height:20vw;width:20vw;margin-left:-10vw;margin-top:-10vw;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;z-index:12;transition:.5s}.styles__treeImg___3Pn13-camelCase{height:100%;width:100%}", ""]), t.locals = {
      left: "styles__left___2mUuk-camelCase",
      standingInside: "styles__standingInside___1tY6d-camelCase",
      placeText: "styles__placeText___36eR4-camelCase",
      superPlaceText: "styles__superPlaceText___7rJrU-camelCase",
      blookBox: "styles__blookBox____0J67-camelCase",
      nameText: "styles__nameText___1rqhM-camelCase",
      toyContainer: "styles__toyContainer___3ENwf-camelCase",
      toyText: "styles__toyText___2FxPY-camelCase",
      toyIcon: "styles__toyIcon___aD3po-camelCase",
      chatroom: "styles__chatroom___u4r4U-camelCase",
      chatroomInside: "styles__chatroomInside___A_cTk-camelCase",
      invisibleScrollbar: "styles__invisibleScrollbar___1J8RK-camelCase",
      noAlerts: "styles__noAlerts___34cux-camelCase",
      noAlertsIcon: "styles__noAlertsIcon___2kIHC-camelCase",
      noAlertsText: "styles__noAlertsText___35BUI-camelCase",
      totalToyContainer: "styles__totalToyContainer___1FOL--camelCase",
      totalToyInside: "styles__totalToyInside___36b9r-camelCase",
      totalToyText: "styles__totalToyText____U8E2-camelCase",
      totalToyIcon: "styles__totalToyIcon___1GUcc-camelCase",
      winterBackground: "styles__winterBackground___2QnBB-camelCase",
      mountainsBackground: "styles__mountainsBackground___3XFur-camelCase",
      plowSnow: "styles__plowSnow___2rgaP-camelCase",
      plow: "styles__plow___121wP-camelCase",
      plowBlook: "styles__plowBlook___Gbb9g-camelCase",
      canada1: "styles__canada1___LlEf5-camelCase",
      canada2: "styles__canada2___2vB_c-camelCase",
      canada3: "styles__canada3___I0KA9-camelCase",
      canadaIcon: "styles__canadaIcon___1oyeJ-camelCase",
      wind: "styles__wind___2-I9U-camelCase",
      blow: "styles__blow___1dJ8F-camelCase",
      treeContainer: "styles__treeContainer___3dhSj-camelCase",
      treeImg: "styles__treeImg___3Pn13-camelCase"
    }
  },
  "O+bi": function(e, t, a) {
    "use strict";
    var s = a("q1tI"),
      n = a.n(s),
      o = a("ANjH"),
      r = a("/MKj"),
      i = a("17x9"),
      c = a.n(i),
      l = a("wIs1"),
      u = a("mLw1"),
      m = a("vDqi"),
      f = a.n(m),
      p = a("b6Qr"),
      _ = a("TSYQ"),
      d = a.n(_),
      h = a("FeV8");

    function y(e, t, a, s, n, o) {
      return {
        type: h.a,
        towerId: e,
        resultId: t,
        questions: a,
        mapNodes: s,
        setId: n,
        hwId: o
      }
    }

    function w(e, t, a, s, n, o) {
      return {
        type: h.b,
        saveData: e,
        towerId: t,
        resultId: a,
        questions: s,
        setId: n,
        hwId: o
      }
    }
    var b = a("4MCU"),
      g = a("Tiit"),
      v = a("epYD"),
      C = a("XuX+"),
      x = a("GIcp"),
      k = a.n(x),
      T = a("sM3C"),
      S = a.n(T),
      E = a("2g2H"),
      I = a("iQ+n"),
      O = a("anyA"),
      N = a("SCqF"),
      j = a("ZENw"),
      B = a("bpVs"),
      R = a("tYQ+"),
      z = a("5Gl+"),
      P = a("MfGM");

    function A(e) {
      return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function D(e, t) {
      var a = Object.keys(e);
      if(Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        t && (s = s.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), a.push.apply(a, s)
      }
      return a
    }

    function q(e) {
      for(var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? D(Object(a), !0).forEach((function(t) {
          M(e, t, a[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : D(Object(a)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
        }))
      }
      return e
    }

    function M(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e
    }

    function H(e, t, a, s, n, o, r) {
      try {
        var i = e[o](r),
          c = i.value
      } catch (e) {
        return void a(e)
      }
      i.done ? t(c) : Promise.resolve(c).then(s, n)
    }

    function Q(e) {
      return function() {
        var t = this,
          a = arguments;
        return new Promise((function(s, n) {
          var o = e.apply(t, a);

          function r(e) {
            H(o, s, n, r, i, "next", e)
          }

          function i(e) {
            H(o, s, n, r, i, "throw", e)
          }
          r(void 0)
        }))
      }
    }

    function L(e, t) {
      for(var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
    }

    function J(e, t) {
      return (J = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function W(e) {
      var t = function() {
        if("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if(Reflect.construct.sham) return !1;
        if("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }();
      return function() {
        var a, s = U(e);
        if(t) {
          var n = U(this).constructor;
          a = Reflect.construct(s, arguments, n)
        } else a = s.apply(this, arguments);
        return F(this, a)
      }
    }

    function F(e, t) {
      return !t || "object" !== A(t) && "function" != typeof t ? G(e) : t
    }

    function G(e) {
      if(void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function U(e) {
      return (U = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }
    var K = function(e) {
        switch(e) {
          case "small":
            return "fas fa-robot";
          case "big":
            return "fas fa-skull";
          case "shop":
            return "fas fa-store";
          case "rest":
            return "fas fa-bed";
          case "risk":
            return "fas fa-question";
          case "boss":
            return "fas fa-exclamation-triangle";
          default:
            return "fas fa-map"
        }
      },
      Y = function(e) {
        return n.a.createElement("div", {
          className: S.a.stageText
        }, 33 === e.stagesCleared ? "You Won!" : "".concat(e.stagesCleared, " ").concat(1 === e.stagesCleared ? "Stage" : "Stages"))
      },
      X = function(e) {
        ! function(e, t) {
          if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && J(e, t)
        }(i, e);
        var t, a, s, o, r = W(i);

        function i(e) {
          var t;
          return function(e, t) {
            if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, i), (t = r.call(this, e)).state = {
            questions: [],
            ready: !1,
            isSave: !1,
            warn: !1,
            loggedIn: !1,
            savesPhase: !1,
            savesArray: [],
            loading: !1,
            replaceIndex: 0,
            name: "",
            nameUsed: "",
            numCorrect: 0,
            numQuestions: 0,
            stagesCleared: 0,
            message: "",
            showFinal: !1,
            standings: [],
            noId: !1,
            noIdPopUp: !1,
            noQuestions: !1
          }, t.redirect = !1, t.name = "", t.stripe = "", t.working = !0, t.here = !0, t.loadGame = t.loadGame.bind(G(t)), t.newGame = t.newGame.bind(G(t)), t.endGame = t.endGame.bind(G(t)), t
        }
        return t = i, (a = [{
          key: "componentDidMount",
          value: (o = Q(regeneratorRuntime.mark((function e() {
            var t, a = this;
            return regeneratorRuntime.wrap((function(e) {
              for(;;) switch(e.prev = e.next) {
                case 0:
                  return this.props.deleteTower(), e.next = 3, this.props.user.getData();
                case 3:
                  (t = e.sent) ? (this.name = t.name, this.stripe = t.stripe, this.setState({
                    loggedIn: !0
                  }), f.a.get("/api/towers/byuser", {
                    params: {
                      name: this.name
                    }
                  }).then((function(e) {
                    a.here && a.setState({
                      isSave: e.data.success && !(a.props.client && a.props.client.hwId && a.props.client.questions),
                      savesArray: e.data.success ? e.data.savesArray : [null, null, null]
                    }, (function() {
                      a.working = !1
                    }))
                  })).catch((function(e) {
                    console.error(e)
                  }))) : this.setState({
                    notLoggedIn: !0
                  }), this.props.client && this.props.client.hwId && this.props.client.questions ? (this.working = !1, this.setState({
                    questions: this.props.client.questions,
                    ready: !0
                  })) : this.props.id ? f.a.get("/api/games", {
                    params: {
                      gameId: this.props.id
                    }
                  }).then((function(e) {
                    a.here && a.setState({
                      questions: e.data.questions.map((function(e) {
                        return {
                          text: e.question,
                          answers: e.answers,
                          correctAnswers: e.correctAnswers,
                          number: e.number,
                          random: e.random,
                          image: e.image ? e.image.url : null
                        }
                      })),
                      ready: !0
                    })
                  })).catch((function(e) {
                    console.error(e)
                  })) : this.setState({
                    noId: !0,
                    ready: !0
                  });
                case 6:
                case "end":
                  return e.stop()
              }
            }), e, this)
          }))), function() {
            return o.apply(this, arguments)
          })
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.here = !1
          }
        }, {
          key: "loadGame",
          value: function(e) {
            if(this.state.ready && !this.working) {
              this.working = !0;
              var t = this.state.savesArray[e],
                a = [],
                s = !1,
                n = this;
              ! function() {
                o.apply(this, arguments)
              }()
            }

            function o() {
              return (o = Q(regeneratorRuntime.mark((function e() {
                return regeneratorRuntime.wrap((function(e) {
                  for(;;) switch(e.prev = e.next) {
                    case 0:
                      if(!t.setId) {
                        e.next = 9;
                        break
                      }
                      if(!n.state.noId) {
                        e.next = 6;
                        break
                      }
                      return e.next = 4, new Promise((function(e) {
                        f.a.get("/api/games", {
                          params: {
                            gameId: t.setId
                          }
                        }).then((function(t) {
                          t.data ? a = t.data.questions.map((function(e) {
                            return {
                              text: e.question,
                              answers: e.answers,
                              correctAnswers: e.correctAnswers,
                              number: e.number,
                              random: e.random,
                              image: e.image ? e.image.url : null
                            }
                          })) : s = !0, e()
                        })).catch((function(e) {
                          console.error(e)
                        }))
                      }));
                    case 4:
                      e.next = 7;
                      break;
                    case 6:
                      a = n.state.questions;
                    case 7:
                      e.next = 11;
                      break;
                    case 9:
                      return e.next = 11, new Promise((function(e) {
                        f.a.get("/api/homeworks/byid", {
                          params: {
                            id: t.hwId
                          }
                        }).then((function(t) {
                          t.data ? a = t.data.questions : n.state.noId ? s = !0 : a = n.state.questions, e()
                        })).catch((function(e) {
                          console.error(e)
                        }))
                      }));
                    case 11:
                      if(!s) {
                        e.next = 15;
                        break
                      }
                      return n.setState({
                        noIdPopUp: !0,
                        noQuestions: !0
                      }), n.working = !1, e.abrupt("return");
                    case 15:
                      t.hwName && (n.props.addClientName(t.hwName), n.props.addHwClient(t.hwId, "Tower", 0, t.hwPlus)), n.props.loadTower(t, t._id, t.resultId, a, t.setId, t.hwId), ["small", "big", "boss"].includes(t.stage) ? n.props.history.push("/tower/battle") : "victory" === t.stage ? (n.props.setTowerStage("final"), n.props.history.push("/tower/final")) : n.props.history.push("/tower/".concat(t.stage));
                    case 18:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })))).apply(this, arguments)
            }
          }
        }, {
          key: "newGame",
          value: function(e) {
            if(this.state.ready && !this.working) {
              this.working = !0;
              var t = Object(P.a)(),
                a = this;
              ! function() {
                s.apply(this, arguments)
              }()
            }

            function s() {
              return (s = Q(regeneratorRuntime.mark((function s() {
                var n, o;
                return regeneratorRuntime.wrap((function(s) {
                  for(;;) switch(s.prev = s.next) {
                    case 0:
                      if(n = "", !a.props.client || !a.props.client.hwId) {
                        s.next = 4;
                        break
                      }
                      return s.next = 4, new Promise((function(e, t) {
                        f.a.post("/api/results", {
                          hwId: a.props.client.hwId,
                          name: a.props.client.name,
                          data: {
                            corrects: {},
                            incorrects: {},
                            stage: 0,
                            alive: !0
                          }
                        }).then((function(t) {
                          n = t.data._id, e()
                        })).catch((function(e) {
                          console.error(e), t()
                        }))
                      }));
                    case 4:
                      if(o = {}, !a.name) {
                        s.next = 9;
                        break
                      }
                      return s.next = 8, new Promise((function(s, o) {
                        f.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null, f.a.post("/api/towers", {
                          setId: a.props.id,
                          name: a.name,
                          mapNodes: t,
                          hwId: a.props.client && a.props.client.hwId ? a.props.client.hwId : null,
                          hwName: a.props.client && a.props.client.name ? a.props.client.name : null,
                          hwPlus: !(!a.props.client || !a.props.client.plus) && a.props.client.plus,
                          saveIndex: e,
                          resultId: n
                        }).then((function(e) {
                          localStorage.setItem("token", e.data.token), s(e.data)
                        })).catch((function(e) {
                          console.error(e), o()
                        }))
                      }));
                    case 8:
                      o = s.sent;
                    case 9:
                      a.props.createTower(o.newSaveId, n, a.state.questions, t, a.props.id, a.props.client && a.props.client.hwId ? a.props.client.hwId : null), o.oldSave && o.oldSave.stage ? a.endGame(o.oldSave) : a.props.history.push("/tower/start");
                    case 11:
                    case "end":
                      return s.stop()
                  }
                }), s)
              })))).apply(this, arguments)
            }
          }
        }, {
          key: "endGame",
          value: function(e) {
            var t = this;
            f.a.put("/api/users/plan", {
              name: this.name,
              stripeId: this.stripe
            }).then((function(e) {
              t.here && t.setState({
                showFinal: !0,
                plus: "Starter" !== e.data.plan
              })
            })).catch((function(e) {
              console.error(e)
            }));
            var a = e.hwName || "You",
              s = 0,
              n = 0;
            Object.values(e.corrects).forEach((function(e) {
              s += e, n += e
            })), Object.values(e.incorrects).forEach((function(e) {
              n += e
            }));
            var o = Math.max(e.numNodes, 0),
              r = 34 - o,
              i = "Chick",
              c = 0;
            e.cards.forEach((function(e) {
              var t = e.strength + e.charisma + e.wisdom;
              t > c && (c = t, i = e.blook)
            })), f.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null, f.a.put("/api/users/towerstats", {
              name: this.name,
              place: r,
              stagesCleared: o,
              blookUsed: i,
              nameUsed: a,
              correctAnswers: s
            }).catch((function(e) {
              console.error(e)
            })), this.setState({
              warn: !1,
              name: this.name,
              nameUsed: a,
              numCorrect: s,
              numQuestions: n,
              stagesCleared: o,
              message: Object(B.a)((r - 1) / 33),
              showFinal: !this.name || this.state.showFinal,
              standings: [{
                name: a,
                blook: i,
                place: r,
                stagesCleared: o
              }]
            })
          }
        }, {
          key: "render",
          value: function() {
            var e = this;
            return this.props.client && this.props.client.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || this.state.ready && (!this.state.questions || 0 === this.state.questions.length) && !this.state.noId ? n.a.createElement(u.a, {
              to: "/login"
            }) : n.a.createElement("div", {
              className: p.isMobile ? k.a.mBody : k.a.body,
              style: {
                backgroundColor: "#292929"
              }
            }, n.a.createElement(I.a, {
              title: "Load Tower of Doom | Blooket",
              desc: "Start a new game or load a saved game of Blooket's Tower of Doom."
            }), n.a.createElement(E.a, {
              noRight: !0
            }), this.state.savesPhase ? n.a.createElement("div", {
              className: k.a.regularBody
            }, n.a.createElement("div", {
              className: S.a.backButton,
              role: "button",
              tabIndex: 0,
              onClick: function() {
                return e.setState({
                  savesPhase: !1,
                  loading: !1
                })
              }
            }, "Back"), n.a.createElement("div", {
              className: S.a.savesHeader
            }, this.state.loading ? "Choose a Save" : "Choose a Save Slot"), n.a.createElement("div", {
              className: S.a.savesHolder
            }, this.state.savesArray.map((function(t, a) {
              return t ? n.a.createElement("div", {
                className: S.a.saveContainer,
                key: t._id
              }, n.a.createElement("div", {
                className: S.a.saveTitle
              }, "Stage ".concat(t.nodePath.length)), n.a.createElement("div", {
                className: S.a.saveSubTitle
              }, "Level ".concat(t.level)), n.a.createElement("div", {
                className: S.a.saveRow
              }, t.coins, n.a.createElement("i", {
                className: d()(S.a.saveIcon, "fas fa-coins")
              })), n.a.createElement("div", {
                className: S.a.saveRow
              }, t.stage.charAt(0).toUpperCase() + t.stage.slice(1), n.a.createElement("i", {
                className: d()(S.a.saveIcon, K(t.stage))
              })), n.a.createElement("div", {
                className: S.a.saveRow
              }, t.hwName || "Not Homework", n.a.createElement("i", {
                className: d()(S.a.saveIcon, "fas fa-file-alt")
              })), n.a.createElement("div", {
                className: S.a.saveRow
              }, n.a.createElement("div", {
                className: S.a.saveHealthHolder
              }, n.a.createElement("div", {
                className: S.a.saveHealthBar,
                style: {
                  transform: "scaleX(".concat(t.life / 100, ")")
                }
              })), n.a.createElement("i", {
                className: d()(S.a.saveIcon, "fas fa-heart")
              })), n.a.createElement("div", {
                className: S.a.loadButton,
                role: "button",
                tabIndex: 0,
                onClick: e.state.loading ? function() {
                  return e.loadGame(a)
                } : e.state.noId ? function() {
                  return e.setState({
                    noIdPopUp: !0
                  })
                } : function() {
                  return e.setState({
                    warn: !0,
                    replaceIndex: a
                  })
                }
              }, e.state.loading ? "Load Game" : "Replace Game")) : n.a.createElement("div", {
                className: S.a.saveContainer,
                key: a
              }, n.a.createElement("div", {
                className: S.a.emptySave
              }, "Empty"), e.state.loading ? null : n.a.createElement("div", {
                className: S.a.loadButton,
                role: "button",
                tabIndex: 0,
                onClick: e.state.noId ? function() {
                  return e.setState({
                    noIdPopUp: !0
                  })
                } : function() {
                  return e.newGame(a)
                }
              }, "New Game"))
            })))) : n.a.createElement("div", {
              className: k.a.regularBody,
              style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                overflow: "hidden"
              }
            }, n.a.createElement("div", {
              className: S.a.header
            }, "Tower", n.a.createElement("br", null), "of Doom"), n.a.createElement("div", {
              className: S.a.buttonContainer
            }, this.state.isSave ? n.a.createElement("div", {
              className: S.a.button,
              role: "button",
              tabIndex: 0,
              onClick: function() {
                return e.setState({
                  savesPhase: !0,
                  loading: !0
                })
              }
            }, "Load Game") : null, n.a.createElement("div", {
              className: S.a.button,
              role: "button",
              tabIndex: 0,
              onClick: this.state.loggedIn ? function() {
                return e.setState({
                  savesPhase: !0,
                  loading: !1
                })
              } : this.newGame
            }, "New Game")), n.a.createElement("div", {
              className: d()(S.a.cardContainer, S.a.card1)
            }, n.a.createElement(R.a, {
              card: q({
                blook: "Chicken"
              }, z.c.Chicken),
              flipped: !1
            })), n.a.createElement("div", {
              className: d()(S.a.cardContainer, S.a.card2)
            }, n.a.createElement(R.a, {
              card: q({
                blook: "Goldfish"
              }, z.c.Goldfish),
              flipped: !1
            })), n.a.createElement("div", {
              className: d()(S.a.cardContainer, S.a.card3)
            }, n.a.createElement(R.a, {
              card: q({
                blook: "Wizard"
              }, z.c.Wizard),
              flipped: !1
            })), n.a.createElement("div", {
              className: d()(S.a.cardContainer, S.a.card4)
            }, n.a.createElement(R.a, {
              card: q({
                blook: "Tiger"
              }, z.c.Tiger),
              flipped: !1
            })), n.a.createElement("div", {
              className: d()(S.a.cardContainer, S.a.card5)
            }, n.a.createElement(R.a, {
              card: q({
                blook: "Arctic Fox"
              }, z.c["Arctic Fox"]),
              flipped: !1
            })), this.state.loggedIn ? n.a.createElement("div", {
              className: S.a.loginText
            }, "Your progress will automatically be saved") : n.a.createElement("div", {
              className: S.a.loginText
            }, n.a.createElement("a", {
              href: "https://www.blooket.com/login",
              target: "_blank",
              rel: "noopener noreferrer",
              style: {
                color: "#fff"
              }
            }, "Login"), " to save your progress")), this.state.warn ? n.a.createElement(N.a, {
              text: "Starting a new game will delete this save! Don't worry though, we'll give you the tokens for your old save right now!",
              isDark: !0,
              buttonOne: {
                text: "Continue",
                click: function() {
                  return e.newGame(e.state.replaceIndex)
                },
                color: "white"
              },
              buttonTwo: {
                text: "Go Back",
                click: function() {
                  return e.setState({
                    warn: !1
                  })
                },
                color: "white"
              }
            }) : this.state.noIdPopUp ? n.a.createElement(N.a, {
              text: this.state.noQuestions ? "This save doesn't have an associated question set. Go find a set, click 'Solo', and try again!" : "You need a question set to create a new game!",
              isDark: !0,
              buttonOne: {
                text: "Find A Set",
                click: function() {
                  return e.props.history.push("/discover")
                },
                color: "white"
              },
              buttonTwo: {
                text: "Go Back",
                click: function() {
                  return e.setState({
                    noIdPopUp: !1,
                    noQuestions: !1
                  })
                },
                color: "white"
              }
            }) : null, this.state.showFinal ? n.a.createElement("div", {
              className: k.a.modal
            }, n.a.createElement(j.a, {
              standings: this.state.standings,
              name: this.state.nameUsed,
              numCorrect: this.state.numCorrect,
              numQuestions: this.state.numQuestions,
              username: this.state.name,
              plus: this.state.plus,
              myStat: 33 === this.state.stagesCleared ? "You Won!" : "Cleared ".concat(this.state.stagesCleared, " ").concat(1 === this.state.stagesCleared ? "Stage" : "Stages"),
              saveStats: this.saveStats,
              renderStandingStat: Y,
              renderStats: function() {},
              customMessage: this.state.message,
              tokenMultiplier: .3,
              buttonFunc: function() {
                return e.props.history.push("/tower/start")
              },
              noWait: !0
            })) : null)
          }
        }]) && L(t.prototype, a), s && L(t, s), i
      }(n.a.Component);
    X.propTypes = {
      client: c.a.object,
      history: c.a.object.isRequired,
      id: c.a.string,
      deleteTower: c.a.func.isRequired,
      user: c.a.object
    };
    t.a = Object(O.c)(Object(l.a)(Object(r.b)((function(e) {
      return {
        id: e.hosts.id,
        client: e.clients.client
      }
    }), (function(e) {
      return Object(o.b)({
        createTower: y,
        loadTower: w,
        deleteTower: g.a,
        setTowerStage: b.g,
        addClientName: C.a,
        addHwClient: v.b
      }, e)
    }))(X)))
  },
  PfDG: function(e, t, a) {
    "use strict";
    a.d(t, "b", (function() {
      return s
    })), a.d(t, "a", (function() {
      return n
    }));
    var s = "SET_TOWER_ENEMY",
      n = "ADD_TOWER_NODE"
  },
  Qz0i: function(e, t, a) {
    "use strict";
    a.d(t, "a", (function() {
      return s
    }));
    var s = "NEW_TOWER_LEVEL"
  },
  SLYh: function(e, t, a) {
    "use strict";
    a.d(t, "a", (function() {
      return s
    })), a.d(t, "c", (function() {
      return n
    })), a.d(t, "g", (function() {
      return o
    })), a.d(t, "d", (function() {
      return r
    })), a.d(t, "f", (function() {
      return i
    })), a.d(t, "b", (function() {
      return c
    })), a.d(t, "e", (function() {
      return l
    }));
    var s = "ANSWER_TOWER",
      n = "SET_TOWER_CARDS",
      o = "SET_TOWER_STAGE",
      r = "SET_TOWER_COINS",
      i = "SET_TOWER_LIFE",
      c = "SET_TOWER_ARTIFACTS",
      l = "SET_TOWER_INSTRUCT"
  },
  Tiit: function(e, t, a) {
    "use strict";
    a.d(t, "a", (function() {
      return n
    }));
    var s = a("a9gz");

    function n() {
      return {
        type: s.a
      }
    }
  },
  W0NV: function(e, t, a) {
    var s = a("W9fG");
    "string" == typeof s && (s = [
      [e.i, s, ""]
    ]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a("aET+")(s, n);
    s.locals && (e.exports = s.locals)
  },
  W9fG: function(e, t, a) {
    (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__header___jX3nL-camelCase{font-size:72px;font-family:Creepster,sans-serif;color:#b3ffb3;margin:30px auto 10px}.styles__header___jX3nL-camelCase,.styles__subheader___3jhcz-camelCase{text-shadow:2px 2px 8px grey;text-align:center;width:80%}.styles__subheader___3jhcz-camelCase{font-size:30px;font-family:Nunito,sans-serif;font-weight:700;color:#fff;margin:10px auto}.styles__network___dt-xI-camelCase{position:absolute;top:150px;left:-1px;width:100%;height:110vw;outline:none;border:none}.styles__buttonContainer___2B1Ty-camelCase{position:absolute;top:0;right:0;padding:1vw;display:flex;flex-direction:column;align-items:flex-end}.styles__deckButton___2VFUP-camelCase{display:flex;flex-direction:row;align-items:center;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;margin:0;transition:.2s}.styles__deckButton___2VFUP-camelCase:hover{transform:scale(.95)}.styles__deckIcon___2PBRf-camelCase{font-size:27px;margin-right:10px}.styles__deckIcon___2PBRf-camelCase,.styles__deckText___i5Nvz-camelCase{text-shadow:2px 2px 8px grey}.styles__deckText___i5Nvz-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:30px}.styles__deckContainer___2fv8P-camelCase{position:absolute;top:0;left:0;width:calc(100% - 10vw);min-height:calc(100% - 10vh);padding:5vh 5vw;background-color:rgba(0,0,0,.8);z-index:3;display:flex;flex-flow:row wrap;align-content:flex-start}.styles__cardContainer___1JWIk-camelCase{width:25vw;height:32.5vw;transform:scale(.7);margin:-4vw -1.5vw}.styles__closeIcon___3jw48-camelCase{font-size:30px;text-shadow:2px 2px 8px grey;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;top:1vw;right:1vw;color:#fff;transition:.2s}.styles__closeIcon___3jw48-camelCase:focus,.styles__closeIcon___3jw48-camelCase:hover{transform:scale(1.05)}.styles__lifeContainer___VRgfN-camelCase{position:absolute;top:0;left:0;height:15vw;width:15vw;transform:scale(.6)}.styles__keyContainer___1jSjm-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:650px;min-width:600px;max-height:90%;background-color:#292929;color:#fff;font-family:Nunito,sans-serif;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center;display:flex;flex-direction:column;overflow-x:hidden;overflow-y:scroll}.styles__keyContainer___1jSjm-camelCase::-webkit-scrollbar{width:12px;margin-right:10px}.styles__keyContainer___1jSjm-camelCase::-webkit-scrollbar-thumb{background:#888;border-radius:10px}.styles__keyContainer___1jSjm-camelCase::-webkit-scrollbar-thumb:hover{background:#777;border-radius:10px}.styles__keyHeader___1r7X5-camelCase{font-size:52px;font-family:Creepster,sans-serif;text-shadow:2px 2px 8px grey;color:#b3ffb3;margin:10px auto}.styles__keyRow___3Icej-camelCase{display:flex;flex-direction:row;align-items:center;width:90%;margin:9px auto;font-size:18px}.styles__keyIcon___S4dha-camelCase{width:60px;font-size:36px;text-align:center;margin-right:10px}@media only screen and (max-width:800px){.styles__header___jX3nL-camelCase{font-size:52px;margin-top:70px}.styles__subheader___3jhcz-camelCase{font-size:24px}.styles__network___dt-xI-camelCase{top:200px}.styles__buttonContaner___27vMN-camelCase{right:0}.styles__deckButton___2VFUP-camelCase{margin:2px 5px}.styles__deckIcon___2PBRf-camelCase{font-size:22px}.styles__deckText___i5Nvz-camelCase{font-size:20px}.styles__deckContainer___2fv8P-camelCase{height:100%;overflow-y:auto}.styles__cardContainer___1JWIk-camelCase{transform:scale(1.1);margin:2.5vw 2vw}.styles__closeIcon___3jw48-camelCase{top:2vw;right:2vw}.styles__lifeContainer___VRgfN-camelCase{top:3vw;left:3vw;transform:scale(1.1)}.styles__keyContainer___1jSjm-camelCase{min-width:100px;width:90%}}", ""]), t.locals = {
      header: "styles__header___jX3nL-camelCase",
      subheader: "styles__subheader___3jhcz-camelCase",
      network: "styles__network___dt-xI-camelCase",
      buttonContainer: "styles__buttonContainer___2B1Ty-camelCase",
      deckButton: "styles__deckButton___2VFUP-camelCase",
      deckIcon: "styles__deckIcon___2PBRf-camelCase",
      deckText: "styles__deckText___i5Nvz-camelCase",
      deckContainer: "styles__deckContainer___2fv8P-camelCase",
      cardContainer: "styles__cardContainer___1JWIk-camelCase",
      closeIcon: "styles__closeIcon___3jw48-camelCase",
      lifeContainer: "styles__lifeContainer___VRgfN-camelCase",
      keyContainer: "styles__keyContainer___1jSjm-camelCase",
      keyHeader: "styles__keyHeader___1r7X5-camelCase",
      keyRow: "styles__keyRow___3Icej-camelCase",
      keyIcon: "styles__keyIcon___S4dha-camelCase",
      buttonContaner: "styles__buttonContaner___27vMN-camelCase"
    }
  },
  X0QI: function(e, t, a) {
    "use strict";
    var s = a("q1tI"),
      n = a.n(s),
      o = a("ANjH"),
      r = a("/MKj"),
      i = a("17x9"),
      c = a.n(i),
      l = a("mLw1"),
      u = a("wIs1"),
      m = (a("vDqi"), a("1b17")),
      f = a("5gLy"),
      p = a("9IXX"),
      _ = a("iQ+n"),
      d = a("GIcp"),
      h = a.n(d),
      y = a("c4kv"),
      w = a("4uRJ"),
      b = a.n(w),
      g = a("SdQT"),
      v = a("TN+F");

    function C(e) {
      return (C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function x(e, t) {
      for(var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
    }

    function k(e, t) {
      return (k = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function T(e) {
      var t = function() {
        if("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if(Reflect.construct.sham) return !1;
        if("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }();
      return function() {
        var a, s = I(e);
        if(t) {
          var n = I(this).constructor;
          a = Reflect.construct(s, arguments, n)
        } else a = s.apply(this, arguments);
        return S(this, a)
      }
    }

    function S(e, t) {
      return !t || "object" !== C(t) && "function" != typeof t ? E(e) : t
    }

    function E(e) {
      if(void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function I(e) {
      return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }
    var O = function(e) {
      ! function(e, t) {
        if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && k(e, t)
      }(r, e);
      var t, a, s, o = T(r);

      function r(e) {
        var t;
        return function(e, t) {
          if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, r), (t = o.call(this, e)).state = {
          muted: !!e.host && e.host.muted
        }, t.ok = !1, t.skip = t.skip.bind(E(t)), t.changeMuted = t.changeMuted.bind(E(t)), t.audio = new Audio(b.a), t.audio.muted = t.state.muted, t
      }
      return t = r, (a = [{
        key: "componentDidMount",
        value: function() {
          var e = this;
          this.props.host && this.props.host.settings && (this.audio.volume = .45, this.audio.play(), this.audio.addEventListener("ended", (function() {
            e.audio.currentTime = 0, e.audio.play()
          }), !1), this.timeout = setTimeout((function() {
            e.skip()
          }), 14500))
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          var e = this;
          clearTimeout(this.timeout), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost(), window.removeEventListener("beforeunload", v.u)), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
            e.audio.currentTime = 0, e.audio.play()
          }), !1)
        }
      }, {
        key: "skip",
        value: function() {
          this.ok = !0, this.props.history.push("/host/toy")
        }
      }, {
        key: "changeMuted",
        value: function() {
          var e = this;
          this.setState({
            muted: !this.state.muted
          }, (function() {
            e.audio.muted = e.state.muted, e.props.setMuted(e.state.muted)
          }))
        }
      }, {
        key: "render",
        value: function() {
          var e = this;
          return this.props.host && this.props.host.settings ? n.a.createElement("div", {
            className: h.a.body
          }, n.a.createElement(_.a, {
            title: "Host Blooket",
            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
          }), n.a.createElement(p.a, {
            left: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
            center: "Instructions",
            muted: this.state.muted,
            changeMuted: this.changeMuted
          }), n.a.createElement("div", {
            className: h.a.regularBody
          }, n.a.createElement(y.a, {
            mode: this.props.host.settings.mode,
            amount: this.props.host.settings.amount
          })), n.a.createElement("div", {
            className: h.a.skipButton,
            onClick: function() {
              return e.skip()
            },
            role: "button",
            tabIndex: "0"
          }, "Skip")) : n.a.createElement(l.a, {
            to: "/dashboard"
          })
        }
      }]) && x(t.prototype, a), s && x(t, s), r
    }(n.a.Component);
    O.propTypes = {
      host: c.a.object,
      id: c.a.string,
      history: c.a.object,
      deleteHost: c.a.func.isRequired,
      setMuted: c.a.func.isRequired
    };
    t.a = Object(u.a)(Object(r.b)((function(e) {
      return {
        host: e.hosts.host,
        id: e.hosts.id
      }
    }), (function(e) {
      return Object(o.b)({
        deleteHost: f.c,
        setMuted: m.a
      }, e)
    }))(Object(g.d)(O)))
  },
  ZtiM: function(e, t, a) {
    "use strict";
    var s = a("q1tI"),
      n = a.n(s),
      o = a("ANjH"),
      r = a("/MKj"),
      i = a("17x9"),
      c = a.n(i),
      l = a("wIs1"),
      u = a("mLw1"),
      m = a("b6Qr"),
      f = a("TSYQ"),
      p = a.n(f),
      _ = a("vDqi"),
      d = a.n(_),
      h = a("GIcp"),
      y = a.n(h),
      w = a("a2pf"),
      b = a.n(w),
      g = a("2g2H"),
      v = a("iQ+n"),
      C = a("vPiy"),
      x = a("+JpI"),
      k = a.n(x),
      T = [{
        text: "You've encountered an evil Blook! In order to survive, you'll have to reduce its health to 0 while keeping yours above 0.",
        nextButtonText: "Next",
        className: k.a.centered
      }, {
        text: "Battles are broken down into rounds. Each round you'll have to answer one question.",
        nextButtonText: "Next",
        className: k.a.centered
      }, {
        elementId: "myCard",
        text: "Before that, you can take a look at the card you drew this round.",
        nextButtonText: "Next",
        className: k.a.myCard
      }, {
        elementId: "oppCard",
        text: "Similarly, your opponent also drew a card this round. Your goal each round is for your card to be stronger than this one.",
        nextButtonText: "Next",
        className: k.a.oppCard
      }, {
        elementId: "myCard",
        text: "To determine the stronger card, one attribute (Strength, Charisma, or Wisdom) will be chosen each round.",
        nextButtonText: "Next",
        className: k.a.myCard
      }, {
        elementId: "oppCard",
        text: "Unfortunately, you can't see your opponent's card before battle. You're best bet is to choose your strongest attribute.",
        nextButtonText: "Next",
        className: k.a.oppCard
      }, {
        text: "Whoever's card has the highest value of that attribute wins. Then, the winner deals damage equal to how much stronger they were.",
        nextButtonText: "Next",
        className: k.a.centered
      }, {
        text: "Also, winning multiple rounds in a row will give you a streak. The damage you deal will be multiplied by that streak number.",
        nextButtonText: "Next",
        className: k.a.centered
      }, {
        text: "If you answer the question correctly each round, you'll get to pick the attribute. Answering incorrectly means your opponent gets to choose.",
        nextButtonText: "Next",
        functionIndex: 0,
        className: k.a.centered
      }, {
        elementId: "myCard",
        text: "Let's assume you answer the first question correctly. Now, go ahead and click an attribute bar on your card.",
        className: k.a.myCard
      }, {}, {
        text: "Great work! If your health drops to 0 your game is over, but if you win the battle then you'll get to add another card to your deck.",
        nextButtonText: "Next",
        className: k.a.centered
      }, {
        text: "That's all for the tutorial. Good luck ascending the Tower of Doom!",
        nextButtonText: "Done",
        className: k.a.centered
      }],
      S = a("anyA"),
      E = a("Qz0i");

    function I(e) {
      return {
        type: E.a,
        mapNodes: e
      }
    }
    var O = a("9vW0"),
      N = a("4MCU"),
      j = a("tYQ+"),
      B = a("DoX5"),
      R = a("6Ny9"),
      z = a("1AT+"),
      P = a("6hcl"),
      A = a("97E7"),
      D = a("e78h"),
      q = a("5Gl+"),
      M = a("MfGM"),
      H = a("TN+F");

    function Q(e) {
      return (Q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function L(e, t) {
      return function(e) {
        if(Array.isArray(e)) return e
      }(e) || function(e, t) {
        if("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var a = [],
          s = !0,
          n = !1,
          o = void 0;
        try {
          for(var r, i = e[Symbol.iterator](); !(s = (r = i.next()).done) && (a.push(r.value), !t || a.length !== t); s = !0);
        } catch (e) {
          n = !0, o = e
        } finally {
          try {
            s || null == i.return || i.return()
          } finally {
            if(n) throw o
          }
        }
        return a
      }(e, t) || U(e, t) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function J(e, t) {
      var a = Object.keys(e);
      if(Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        t && (s = s.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), a.push.apply(a, s)
      }
      return a
    }

    function W(e) {
      for(var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? J(Object(a), !0).forEach((function(t) {
          F(e, t, a[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : J(Object(a)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
        }))
      }
      return e
    }

    function F(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e
    }

    function G(e) {
      return function(e) {
        if(Array.isArray(e)) return K(e)
      }(e) || function(e) {
        if("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
      }(e) || U(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function U(e, t) {
      if(e) {
        if("string" == typeof e) return K(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? K(e, t) : void 0
      }
    }

    function K(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for(var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
      return s
    }

    function Y(e, t, a, s, n, o, r) {
      try {
        var i = e[o](r),
          c = i.value
      } catch (e) {
        return void a(e)
      }
      i.done ? t(c) : Promise.resolve(c).then(s, n)
    }

    function X(e, t) {
      for(var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
    }

    function V(e, t) {
      return (V = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function Z(e) {
      var t = function() {
        if("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if(Reflect.construct.sham) return !1;
        if("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }();
      return function() {
        var a, s = te(e);
        if(t) {
          var n = te(this).constructor;
          a = Reflect.construct(s, arguments, n)
        } else a = s.apply(this, arguments);
        return $(this, a)
      }
    }

    function $(e, t) {
      return !t || "object" !== Q(t) && "function" != typeof t ? ee(e) : t
    }

    function ee(e) {
      if(void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function te(e) {
      return (te = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }
    var ae = function(e) {
      ! function(e, t) {
        if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && V(e, t)
      }(c, e);
      var t, a, s, o, r, i = Z(c);

      function c(e) {
        var t;
        return function(e, t) {
          if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, c), (t = i.call(this, e)).state = {
          enemy: {},
          myCards: [],
          phase: "draw",
          enemyCard: {},
          myCard: {},
          myFlipped: !0,
          enemyFlipped: !0,
          myLife: 100,
          result: "tie",
          damage: 0,
          rawDamage: 0,
          question: {},
          correct: !1,
          streak: 0,
          myStreak: !0,
          coins: 0,
          usedShield: !1,
          showTour: e.tower && e.tower.instruct
        }, t.waitingCard = !1, t.waitingQuestion = !1, t.allEnemyCards = [], t.freeQuestions = [], t.isFirstTurn = !0, t.hasShield = !1, t.tourRef = n.a.createRef(), t.onSelect = t.onSelect.bind(ee(t)), t.onAnswer = t.onAnswer.bind(ee(t)), t.onWin = t.onWin.bind(ee(t)), t.getQuestion = t.getQuestion.bind(ee(t)), t.answerNext = t.answerNext.bind(ee(t)), t.drawCards = t.drawCards.bind(ee(t)), t.selectCard = t.selectCard.bind(ee(t)), t
      }
      return t = c, (a = [{
        key: "componentDidMount",
        value: (o = regeneratorRuntime.mark((function e() {
          var t, a, s, n, o, r = this;
          return regeneratorRuntime.wrap((function(e) {
            for(;;) switch(e.prev = e.next) {
              case 0:
                if(this.props.tower && ["small", "big", "boss"].includes(this.props.tower.stage) && this.props.tower.questions && this.props.tower.questions.length) {
                  e.next = 2;
                  break
                }
                return e.abrupt("return", this.props.history.push("/login"));
              case 2:
                return e.next = 4, this.props.user.getData();
              case 4:
                if(e.sent || this.setState({
                    notLoggedIn: !0
                  }), this.props.setTowerInstruct(!1), (t = {
                    blooks: this.props.tower.enemy
                  }).blook = this.props.tower.enemy, a = D.a[t.blook].maxLife + 10 * (this.props.tower.level - 1), t.life = a, t.maxLife = a, s = D.a[t.blook].deckBlooks, t.cards = [], s.forEach((function(e) {
                    var a = q.c[e];
                    t.cards.push({
                      blook: e,
                      class: a.class,
                      strength: Math.min(a.strength + r.props.tower.level - 1, 20),
                      charisma: Math.min(a.charisma + r.props.tower.level - 1, 20),
                      wisdom: Math.min(a.wisdom + r.props.tower.level - 1, 20)
                    })
                  })), this.allEnemyCards = t.cards, n = this.props.tower.life, o = !1, this.props.tower.artifacts.forEach((function(e) {
                    "Survival Guide" === e ? n = Math.min(100, n + 3) : "Band-Aid" === e && "boss" === r.props.tower.stage ? n = Math.min(100, n + 15) : "Mighty Shield" === e ? r.hasShield = !0 : "Cursed Hourglass" === e && (n = Math.max(0, n - 3), t.life = Math.max(0, t.life - 10), n <= 0 ? (o = !0, r.props.setTowerLife(0), r.props.setTowerStage("final"), r.props.history.push("/tower/final")) : t.life <= 0 && (o = !0, r.setState({
                      myLife: n
                    }, (function() {
                      r.onWin()
                    }))))
                  })), !o) {
                  e.next = 21;
                  break
                }
                return e.abrupt("return");
              case 21:
                this.freeQuestions = JSON.parse(JSON.stringify(this.props.tower.freeQuestions)), this.setState({
                  enemy: t,
                  myCards: G(this.props.tower.cards),
                  myLife: n
                }, this.drawCards);
              case 23:
              case "end":
                return e.stop()
            }
          }), e, this)
        })), r = function() {
          var e = this,
            t = arguments;
          return new Promise((function(a, s) {
            var n = o.apply(e, t);

            function r(e) {
              Y(n, a, s, r, i, "next", e)
            }

            function i(e) {
              Y(n, a, s, r, i, "throw", e)
            }
            r(void 0)
          }))
        }, function() {
          return r.apply(this, arguments)
        })
      }, {
        key: "componentWillUnmount",
        value: function() {
          clearTimeout(this.revealTimeout), clearTimeout(this.waitQuestionTimeout), clearTimeout(this.flipTimeout), clearTimeout(this.damageTimeout), clearTimeout(this.nextTimeout), clearTimeout(this.questionTImeout)
        }
      }, {
        key: "onSelect",
        value: function(e) {
          var t = this;
          if(!this.waitingCard) {
            this.state.showTour && this.tourRef.current.setStep(10);
            var a = Math.abs(this.state.myCard[e] - this.state.enemyCard[e]),
              s = this.state.streak,
              n = this.state.myStreak,
              o = "loss";
            this.state.myCard[e] > this.state.enemyCard[e] ? (o = "win", n ? s += 1 : (n = !0, s = 1)) : 0 === a ? o = "tie" : n ? (n = !1, s = 1) : s += 1;
            var r = a;
            a *= Math.max(s, 1);
            var i = this.state.enemy.life,
              c = !1;
            "tie" === o && this.props.tower.artifacts.includes("Chess Pieces") && (a = 4), this.props.tower.artifacts.forEach((function(e) {
              "Fury Relic" === e && t.isFirstTurn && (a *= 2), "Toxic Waste" === e && (a *= 2), "win" === o && "Lifeline Totem" === e && t.state.myLife < 20 && (a *= 2)
            })), this.props.tower.artifacts.forEach((function(e) {
              "loss" === o && (t.hasShield && (c = !0, t.hasShield = !1), t.hasShield || c || ("Captain's Anchor" === e ? a = Math.max(0, a - 1) : "Steel Socks" === e && r - t.props.tower.artifacts.filter((function(e) {
                return "Captain's Anchor" === e
              })).length > 0 && (i = Math.max(0, i - 2))))
            })), this.isFirstTurn && (this.isFirstTurn = !1), this.setState({
              enemyFlipped: !1,
              phase: "flipping",
              attribute: e
            }, (function() {
              t.flipTimeout = setTimeout((function() {
                t.setState({
                  result: o,
                  streak: s,
                  myStreak: n,
                  rawDamage: r,
                  usedShield: c,
                  damage: a,
                  phase: "fight"
                }, (function() {
                  t.damageTimeout = setTimeout((function() {
                    t.setState({
                      enemy: W(W({}, t.state.enemy), {}, {
                        life: "win" === t.state.result || "tie" === t.state.result ? Math.max(t.state.enemy.life - t.state.damage, 0) : i
                      }),
                      myLife: "loss" === t.state.result ? Math.max(c ? t.state.myLife : t.state.myLife - t.state.damage, 0) : t.state.myLife
                    }, (function() {
                      t.nextTimeout = setTimeout((function() {
                        t.props.setTowerLife(t.state.myLife), 0 === t.state.enemy.life ? t.onWin() : 0 === t.state.myLife ? (t.props.setTowerStage("final"), t.props.history.push("/tower/final")) : (t.drawCards(), t.state.showTour && t.tourRef.current.setStep(11))
                      }), 3500)
                    }))
                  }), 500)
                }))
              }), 900)
            }))
          }
        }
      }, {
        key: "onWin",
        value: function() {
          if(3 === this.props.tower.level && "boss" === this.props.tower.stage) this.props.addTowerNode(100), this.props.setTowerStage("victory"), this.props.history.push("/tower/victory");
          else {
            var e = "boss" === this.props.tower.stage ? Object(H.q)(70, 100) : "big" === this.props.tower.stage ? Object(H.q)(30, 55) : Object(H.q)(15, 35);
            this.props.tower.artifacts.forEach((function(t) {
              "Piggy Bank" === t && (e += 6)
            })), this.setState({
              phase: "prize",
              coins: e
            })
          }
        }
      }, {
        key: "onAnswer",
        value: function(e) {
          if(!this.waitingQuestion) {
            this.waitingQuestion = !0;
            var t = this.state.question.correctAnswers.includes(e),
              a = JSON.parse(JSON.stringify(this.props.tower.corrects)),
              s = JSON.parse(JSON.stringify(this.props.tower.incorrects)),
              n = this.state.question.number;
            t ? a[n] ? a[n] += 1 : a[n] = 1 : s[n] ? s[n] += 1 : s[n] = 1, this.props.answerTower(a, s, JSON.parse(JSON.stringify(this.freeQuestions))), this.setState({
              correct: t,
              phase: "feedback"
            })
          }
        }
      }, {
        key: "getQuestion",
        value: function() {
          var e = this;
          0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.props.tower.questions)));
          var t = Object(H.o)(this.freeQuestions);
          this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(H.w)(t.answers)), this.waitingQuestion = !0, this.setState({
            question: t,
            phase: "question"
          }, (function() {
            e.waitQuestionTimeout = setTimeout((function() {
              e.waitingQuestion = !1
            }), 800)
          }))
        }
      }, {
        key: "answerNext",
        value: function() {
          var e = this;
          this.waitingCard = !0, this.state.correct ? this.setState({
            phase: "select"
          }, (function() {
            e.waitCardTimeout = setTimeout((function() {
              e.waitingCard = !1
            }), 400)
          })) : this.setState({
            phase: "enemySelect"
          }, (function() {
            e.enemyPickTimeout = setTimeout((function() {
              var t = "";
              if(1 === e.props.tower.level || 2 === e.props.tower.level && 0 === Object(H.q)(0, 2)) {
                var a = 0;
                Object.entries(e.state.enemyCard).forEach((function(e) {
                  var s = L(e, 2),
                    n = s[0],
                    o = s[1];
                  "blook" !== n && o > a && (t = n, a = o)
                }))
              } else {
                var s = -21;
                Object.entries(e.state.enemyCard).forEach((function(a) {
                  var n = L(a, 2),
                    o = n[0],
                    r = n[1];
                  "blook" !== o && r - e.state.myCard[o] > s && (t = o, s = r - e.state.myCard[o])
                }))
              }
              e.waitingCard = !1, e.onSelect(t)
            }), 2e3)
          }))
        }
      }, {
        key: "drawCards",
        value: function() {
          var e = this;
          this.waitingCard = !0;
          var t = JSON.parse(JSON.stringify(this.state.enemy.cards));
          0 === t.length && (t = JSON.parse(JSON.stringify(this.allEnemyCards)));
          var a = JSON.parse(JSON.stringify(this.state.myCards));
          0 === a.length && (a = JSON.parse(JSON.stringify(this.props.tower.cards)));
          var s = t.splice(Object(H.q)(0, t.length), 1),
            n = a.splice(Object(H.q)(0, a.length), 1),
            o = s[0],
            r = n[0];
          this.props.tower.artifacts.includes("Pink Hippo") && (r.strength = Math.min(r.strength + 2, 20)), this.props.tower.artifacts.includes("Dave's Doggo") && (r.charisma = Math.min(r.charisma + 2, 20)), this.props.tower.artifacts.includes("Anorak's Wizard Cap") && (r.wisdom = Math.min(r.wisdom + 2, 20)), this.props.tower.artifacts.includes("Anubis' Obelisk") && (o.strength = Math.max(o.strength - 1, 0), o.charisma = Math.max(o.charisma - 1, 0), o.wisdom = Math.max(o.wisdom - 1, 0));
          var i = 0;
          this.props.tower.artifacts.forEach((function(e) {
            "Farm Tractor" === e ? "🌽" === r.class ? i += 1 : "🌴" === r.class && (i -= 1) : "Magic Seedling" === e ? ["🌲", "🌴"].includes(r.class) ? i += 1 : ["🌽", "🐾"].includes(r.class) && (i -= 1) : "Just A Bone" === e ? "🐾" === r.class ? i += 1 : "🌲" === r.class && (i -= 1) : "Cozy Igloo" === e ? ["❄️", "☃️"].includes(r.class) ? i += 1 : ["⚔️", "🏰"].includes(r.class) && (i -= 1) : "King's Crown" === e ? "⚔️" === r.class ? i += 1 : "🏰" === r.class && (i -= 1) : "Sacred Scroll" === e && ("🏰" === r.class ? i += 1 : "⚔️" === r.class && (i -= 1))
          })), 0 !== i && (r.strength = Math.max(0, Math.min(r.strength + i, 20)), r.charisma = Math.max(0, Math.min(r.charisma + i, 20)), r.wisdom = Math.max(0, Math.min(r.wisdom + i, 20))), this.setState({
            myFlipped: !0,
            enemyFlipped: !0,
            phase: "draw"
          }, (function() {
            e.revealTimeout = setTimeout((function() {
              e.setState({
                myFlipped: !1,
                enemyCard: o,
                myCard: r,
                enemy: W(W({}, e.state.enemy), {}, {
                  cards: t
                }),
                myCards: a,
                attribute: ""
              }, (function() {
                e.state.showTour || (e.questionTimeout = setTimeout((function() {
                  e.getQuestion()
                }), 800))
              }))
            }), 900)
          }))
        }
      }, {
        key: "selectCard",
        value: function(e) {
          var t = this,
            a = G(this.props.tower.cards),
            s = G(this.props.tower.artifacts),
            n = this.props.tower.coins;
          e.blook ? (a.push(e), this.props.setTowerCards(a)) : (s.push(e), "Elder Coins" !== e || s.includes("Anubis' Obelisk") || (n += 100), this.props.setTowerArtifacts(s)), s.includes("Anubis' Obelisk") || (n += this.state.coins), this.props.setTowerCoins(n);
          var o = this.props.tower.mapNodes,
            r = this.props.tower.level,
            i = this.props.tower.currentNode,
            c = this.props.tower.nodePath;
          "boss" === this.props.tower.stage && (r += 1, i = 0, c = [], o = Object(M.a)(), this.props.newTowerLevel(o));
          var l = this.state.myLife;
          s.forEach((function(e) {
            "Medical Kit" === e && (l = Math.min(100, l + 3))
          })), this.props.setTowerLife(l), this.props.tower.towerId ? (d.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null, d.a.put("/api/towers/save", {
            id: this.props.tower.towerId,
            stage: "map",
            cards: a,
            artifacts: s,
            life: l,
            coins: n,
            corrects: this.props.tower.corrects,
            incorrects: this.props.tower.incorrects,
            mapNodes: o,
            level: r,
            currentNode: i,
            nodePath: c
          }).then((function() {
            t.props.setTowerStage("map"), t.props.history.push("/tower/map")
          })).catch((function(e) {
            console.error(e)
          }))) : (this.props.setTowerStage("map"), this.props.history.push("/tower/map"))
        }
      }, {
        key: "render",
        value: function() {
          var e = this;
          if(this.props.tower && this.props.tower.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || !this.props.tower || !this.props.tower.questions || !this.props.tower.questions.length) return n.a.createElement(u.a, {
            to: "/login"
          });
          var t = Math.min(this.state.rawDamage, this.props.tower.artifacts.filter((function(e) {
            return "Captain's Anchor" === e
          })).length);
          return n.a.createElement("div", {
            className: m.isMobile ? y.a.mBody : y.a.body,
            id: "body",
            style: {
              backgroundColor: "#292929",
              oveflow: "hidden"
            }
          }, n.a.createElement(v.a, {
            title: "Play Tower of Doom | Blooket",
            desc: "Ascend the feared Tower of Doom by answering questions and building a deck to defeat evil Blooks on your way to the top."
          }), n.a.createElement(g.a, {
            coins: this.props.tower.coins
          }), this.state.myCard && "prize" !== this.state.phase ? n.a.createElement("div", {
            className: y.a.regularBody,
            id: "regularBody"
          }, this.state.showTour ? n.a.createElement(C.a, {
            steps: T,
            onExit: function() {
              return e.setState({
                showTour: !1
              }, e.getQuestion)
            },
            functions: [function() {
              e.waitingCard = !1, e.setState({
                phase: "select"
              })
            }],
            ref: this.tourRef
          }) : null, n.a.createElement("div", {
            className: b.a.myName
          }, "You", n.a.createElement("br", null), n.a.createElement("span", {
            style: {
              fontSize: m.isMobile ? "4vw" : "1.5vw"
            }
          }, this.state.myStreak && this.state.streak > 0 ? "Streak: ".concat(this.state.streak) : null)), n.a.createElement("div", {
            className: b.a.myLife
          }, n.a.createElement(R.a, {
            currentLife: this.state.myLife,
            maxLife: 100,
            top: "0px",
            left: "0px"
          })), n.a.createElement("div", {
            className: b.a.myCircle
          }), n.a.createElement("div", {
            className: p()(b.a.cardContainer, b.a.myCard, F({}, b.a.myCardAttack, "fight" === this.state.phase && "win" === this.state.result), F({}, b.a.myCardHit, "fight" === this.state.phase && "loss" === this.state.result)),
            id: "myCard"
          }, n.a.createElement(j.a, {
            card: this.state.myCard,
            flipped: this.state.myFlipped,
            attribute: this.state.attribute,
            onClick: "select" === this.state.phase ? this.onSelect : void 0
          })), n.a.createElement("div", {
            className: b.a.oppCircle
          }), n.a.createElement("div", {
            className: p()(b.a.cardContainer, b.a.oppCard, F({}, b.a.enemyCardAttack, "fight" === this.state.phase && "loss" === this.state.result), F({}, b.a.enemyCardHit, "fight" === this.state.phase && "win" === this.state.result)),
            id: "oppCard"
          }, n.a.createElement(j.a, {
            card: ["flipping", "fight", "draw"].includes(this.state.phase) ? this.state.enemyCard : {},
            flipped: this.state.enemyFlipped,
            attribute: this.state.attribute
          })), n.a.createElement("div", {
            className: b.a.oppBlookStage
          }), n.a.createElement(B.a, {
            name: this.state.enemy.blook,
            className: b.a.oppBlook
          }), n.a.createElement("div", {
            className: b.a.oppName
          }, "Evil ".concat(this.state.enemy.blook), n.a.createElement("br", null), n.a.createElement("span", {
            style: {
              fontSize: m.isMobile ? "3vw" : "1.6vw"
            }
          }, !this.state.myStreak && this.state.streak > 0 ? "Streak: ".concat(this.state.streak) : null)), n.a.createElement("div", {
            className: b.a.oppLife
          }, n.a.createElement(R.a, {
            currentLife: this.state.enemy.life,
            maxLife: this.state.enemy.maxLife
          })), "select" === this.state.phase ? n.a.createElement("div", {
            className: b.a.text
          }, "Choose an attribute on your card") : "enemySelect" === this.state.phase ? n.a.createElement("div", {
            className: b.a.text
          }, "Waiting for the enemy to choose an attribute") : "fight" === this.state.phase ? n.a.createElement("div", {
            className: b.a.text
          }, "win" === this.state.result ? "You Win" : "loss" === this.state.result ? "You Lose" : "Tie", n.a.createElement("br", null), "".concat(this.state.rawDamage, " x ").concat(Math.round((("tie" === this.state.result ? 0 : this.state.damage) + ("loss" !== this.state.result || this.state.usedShield ? 0 : t)) / (this.state.rawDamage || 1))).concat(t > 0 && "loss" === this.state.result && !this.state.usedShield ? " - ".concat(t) : "", " = ").concat("tie" === this.state.result ? 0 : this.state.damage), n.a.createElement("br", null), this.state.usedShield ? "Blocked with Shield" : "tie" === this.state.result && 0 === this.state.damage ? "No Damage Dealt" : "".concat("loss" === this.state.result ? "Take" : "Deal", " ").concat(this.state.damage, " Damage")) : null) : null, "question" === this.state.phase ? n.a.createElement("div", {
            className: b.a.questionContainer
          }, n.a.createElement(z.a, {
            onAnswer: this.onAnswer,
            text: this.state.question.text,
            answers: this.state.question.answers,
            image: this.state.question.image
          })) : "feedback" === this.state.phase ? n.a.createElement("div", {
            className: b.a.feedbackContainer
          }, n.a.createElement(P.a, {
            incorrectTime: 3,
            correctAnswers: this.state.question.correctAnswers,
            correct: this.state.correct,
            onNext: this.answerNext
          })) : "prize" === this.state.phase ? n.a.createElement("div", {
            className: y.a.regularBody,
            style: {
              backgroundColor: "#292929"
            }
          }, n.a.createElement(A.a, {
            type: this.props.tower.stage,
            onClick: this.selectCard,
            coins: this.state.coins,
            cards: [].concat(G(this.props.tower.artifacts), G(this.props.tower.cards)),
            noThird: this.props.tower.artifacts.includes("Pink Hippo")
          })) : null)
        }
      }]) && X(t.prototype, a), s && X(t, s), c
    }(n.a.Component);
    ae.propTypes = {
      history: c.a.object.isRequired,
      tower: c.a.object,
      answerTower: c.a.func.isRequired,
      setTowerCards: c.a.func.isRequired,
      setTowerStage: c.a.func.isRequired,
      setTowerCoins: c.a.func.isRequired,
      setTowerLife: c.a.func.isRequired,
      newTowerLevel: c.a.func.isRequired,
      addTowerNode: c.a.func.isRequired,
      setTowerArtifacts: c.a.func.isRequired,
      setTowerInstruct: c.a.func.isRequired,
      user: c.a.object
    };
    t.a = Object(S.c)(Object(l.a)(Object(r.b)((function(e) {
      return {
        tower: e.towers.tower
      }
    }), (function(e) {
      return Object(o.b)({
        answerTower: N.a,
        setTowerCards: N.c,
        setTowerStage: N.g,
        setTowerCoins: N.d,
        setTowerLife: N.f,
        newTowerLevel: I,
        addTowerNode: O.a,
        setTowerArtifacts: N.b,
        setTowerInstruct: N.e
      }, e)
    }))(ae)))
  },
  "a+qp": function(e, t, a) {
    "use strict";
    var s = a("q1tI"),
      n = a.n(s),
      o = a("ANjH"),
      r = a("/MKj"),
      i = a("17x9"),
      c = a.n(i),
      l = a("wIs1"),
      u = a("mLw1"),
      m = a("b6Qr"),
      f = a("TSYQ"),
      p = a.n(f),
      _ = a("vDqi"),
      d = a.n(_),
      h = a("4MCU"),
      y = a("tSTY"),
      w = a.n(y),
      b = a("GIcp"),
      g = a.n(b),
      v = a("2g2H"),
      C = a("iQ+n"),
      x = a("anyA"),
      k = a("5Gl+"),
      T = a("TN+F"),
      S = a("Rpcy"),
      E = {
        Common: [10, 26],
        Uncommon: [30, 56],
        Rare: [50, 76],
        Epic: [75, 101],
        Legendary: [100, 126]
      },
      I = function() {
        var e = Object(k.d)("boss", 6),
          t = [];
        return e.forEach((function(e) {
          var a = e.blook ? E[Object(S.a)(e.blook)] : E[k.a[e].rarity];
          t.push({
            card: e,
            price: Object(T.q)(a[0], a[1])
          })
        })), t
      },
      O = a("6Ny9"),
      N = a("tYQ+"),
      j = a("SCqF");

    function B(e) {
      return (B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function R(e) {
      return function(e) {
        if(Array.isArray(e)) return z(e)
      }(e) || function(e) {
        if("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
      }(e) || function(e, t) {
        if(!e) return;
        if("string" == typeof e) return z(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === a && e.constructor && (a = e.constructor.name);
        if("Map" === a || "Set" === a) return Array.from(e);
        if("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return z(e, t)
      }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function z(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for(var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
      return s
    }

    function P(e, t, a, s, n, o, r) {
      try {
        var i = e[o](r),
          c = i.value
      } catch (e) {
        return void a(e)
      }
      i.done ? t(c) : Promise.resolve(c).then(s, n)
    }

    function A(e, t) {
      for(var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
    }

    function D(e, t) {
      return (D = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function q(e) {
      var t = function() {
        if("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if(Reflect.construct.sham) return !1;
        if("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }();
      return function() {
        var a, s = Q(e);
        if(t) {
          var n = Q(this).constructor;
          a = Reflect.construct(s, arguments, n)
        } else a = s.apply(this, arguments);
        return M(this, a)
      }
    }

    function M(e, t) {
      return !t || "object" !== B(t) && "function" != typeof t ? H(e) : t
    }

    function H(e) {
      if(void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function Q(e) {
      return (Q = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }
    var L = function(e) {
      ! function(e, t) {
        if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && D(e, t)
      }(c, e);
      var t, a, s, o, r, i = q(c);

      function c(e) {
        var t;
        return function(e, t) {
          if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, c), (t = i.call(this, e)).state = {
          cards: [],
          artifacts: [],
          shopItems: [],
          coins: 0,
          noBuy: !1,
          showDeck: !1,
          phase: "",
          buyCard: {},
          buyPrice: 0,
          shopMultiplier: 1
        }, t.ready = !1, t.removeReady = !1, t.onBuy = t.onBuy.bind(H(t)), t.leave = t.leave.bind(H(t)), t.selectCard = t.selectCard.bind(H(t)), t
      }
      return t = c, (a = [{
        key: "componentDidMount",
        value: (o = regeneratorRuntime.mark((function e() {
          var t, a = this;
          return regeneratorRuntime.wrap((function(e) {
            for(;;) switch(e.prev = e.next) {
              case 0:
                if(this.props.tower && "shop" === this.props.tower.stage) {
                  e.next = 2;
                  break
                }
                return e.abrupt("return", this.props.history.push("/login"));
              case 2:
                return e.next = 4, this.props.user.getData();
              case 4:
                e.sent || this.setState({
                  notLoggedIn: !0
                }), t = 1, this.props.tower.artifacts.forEach((function(e) {
                  "Coupon" === e && (t -= .1)
                })), this.setState({
                  shopItems: I(),
                  cards: JSON.parse(JSON.stringify(this.props.tower.cards)),
                  artifacts: R(this.props.tower.artifacts),
                  coins: this.props.tower.coins,
                  shopMultiplier: t,
                  phase: "shop"
                }, (function() {
                  a.waitTimeout = setTimeout((function() {
                    a.ready = !0
                  }), 1e3)
                }));
              case 9:
              case "end":
                return e.stop()
            }
          }), e, this)
        })), r = function() {
          var e = this,
            t = arguments;
          return new Promise((function(a, s) {
            var n = o.apply(e, t);

            function r(e) {
              P(n, a, s, r, i, "next", e)
            }

            function i(e) {
              P(n, a, s, r, i, "throw", e)
            }
            r(void 0)
          }))
        }, function() {
          return r.apply(this, arguments)
        })
      }, {
        key: "componentWillUnmount",
        value: function() {
          clearTimeout(this.waitTimeout), clearTimeout(this.removeTimeout)
        }
      }, {
        key: "onBuy",
        value: function(e, t, a) {
          var s = this;
          if(this.ready) {
            if(this.ready = !1, t > this.state.coins) return this.setState({
              noBuy: !0
            }), void(this.ready = !0);
            if("card" === e) {
              var n = R(this.state.shopItems),
                o = n.map((function(e) {
                  return e.card
                })).indexOf(a);
              if(-1 === o) return void(this.ready = !0);
              n.splice(o, 1);
              var r = R(this.state.cards),
                i = R(this.state.artifacts);
              a.blook ? (r.push(a), this.props.setTowerCards(r)) : (i.push(a), this.props.setTowerArtifacts(i));
              var c = 1;
              i.forEach((function(e) {
                "Coupon" === e && (c -= .1)
              }));
              var l = this.state.coins - t;
              "Elder Coins" !== a || this.state.artifacts.includes("Anubis' Obelisk") || (l += 100), this.props.setTowerCoins(l), this.setState({
                shopItems: n,
                cards: r,
                artifacts: i,
                coins: l,
                buyCard: {},
                buyPrice: 0,
                shopMultiplier: c
              }, (function() {
                s.ready = !0
              }))
            } else this.ready = !0, this.removeReady = !1, this.setState({
              phase: "removeSelect"
            }, (function() {
              s.removeTimeout = setTimeout((function() {
                s.removeReady = !0
              }), 1e3)
            }))
          }
        }
      }, {
        key: "leave",
        value: function() {
          var e = this,
            t = this.props.tower.life;
          this.state.artifacts.forEach((function(e) {
            "Cheese" === e && (t = Math.min(100, t + 5))
          })), t !== this.props.tower.life && this.props.setTowerLife(t), this.props.tower.towerId ? (d.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null, d.a.put("/api/towers/save", {
            id: this.props.tower.towerId,
            stage: "map",
            cards: this.state.cards,
            artifacts: this.state.artifacts,
            coins: this.state.coins,
            life: t
          }).then((function() {
            e.props.setTowerStage("map"), e.props.history.push("/tower/map")
          })).catch((function(e) {
            console.error(e)
          }))) : (this.props.setTowerStage("map"), this.props.history.push("/tower/map"))
        }
      }, {
        key: "selectCard",
        value: function(e) {
          var t = this;
          if(this.removeReady) {
            var a = R(this.state.cards),
              s = R(this.state.artifacts);
            a.includes(e) ? (a.splice(a.indexOf(e), 1), this.props.setTowerCards(a)) : s.includes(e) && (s.splice(s.indexOf(e), 1), this.props.setTowerArtifacts(s));
            var n = Math.round(50 * this.state.shopMultiplier);
            this.props.setTowerCoins(this.props.tower.coins - n);
            var o = 1;
            s.forEach((function(e) {
              "Coupon" === e && (o -= .1)
            })), this.setState({
              phase: "removeReveal",
              card: e
            }, (function() {
              t.removeTimeout = setTimeout((function() {
                t.setState({
                  phase: "shop",
                  cards: a,
                  artifacts: s,
                  coins: t.state.coins - n,
                  shopMultiplier: o
                }, (function() {
                  t.waitTimeout = setTimeout((function() {
                    t.ready = !0
                  }), 1e3)
                }))
              }), 5e3)
            }))
          }
        }
      }, {
        key: "render",
        value: function() {
          var e = this;
          return this.props.tower && this.props.tower.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || !this.props.tower ? n.a.createElement(u.a, {
            to: "/login"
          }) : n.a.createElement("div", {
            className: m.isMobile ? g.a.mBody : g.a.body,
            style: {
              backgroundColor: "#292929"
            }
          }, n.a.createElement(C.a, {
            title: "Play Tower of Doom | Blooket",
            desc: "Ascend the feared Tower of Doom by answering questions and building a deck to defeat evil Blooks on your way to the top."
          }), n.a.createElement(v.a, {
            coins: this.state.coins
          }), "shop" === this.state.phase ? n.a.createElement("div", {
            className: g.a.regularBody,
            style: {
              display: "flex",
              flexDirection: "column"
            }
          }, n.a.createElement("div", {
            className: w.a.lifeContainer
          }, n.a.createElement(O.a, {
            currentLife: this.props.tower.life,
            maxLife: 100
          })), n.a.createElement("div", {
            className: w.a.deckButton,
            role: "button",
            tabIndex: 0,
            onClick: function() {
              return e.setState({
                showDeck: !0
              })
            }
          }, n.a.createElement("i", {
            className: p()("fas fa-layer-group", w.a.deckIcon)
          }), n.a.createElement("div", {
            className: w.a.deckText
          }, "View Deck")), n.a.createElement("div", {
            className: w.a.leaveButton,
            role: "button",
            tabIndex: 0,
            onClick: this.leave
          }, n.a.createElement("i", {
            className: p()("fas fa-door-open", w.a.deckIcon)
          }), n.a.createElement("div", {
            className: w.a.deckText
          }, "Leave Shop")), n.a.createElement("div", {
            className: w.a.shopContainer
          }, this.state.cards.length > 1 ? n.a.createElement("div", {
            className: w.a.removeButton,
            role: "button",
            tabIndex: 0,
            onClick: function() {
              return e.onBuy("remove", Math.round(50 * e.state.shopMultiplier))
            }
          }, n.a.createElement("div", {
            className: w.a.removeButtonText
          }, "Remove", n.a.createElement("br", null), "a Card"), n.a.createElement("i", {
            className: p()("fas fa-trash-alt", w.a.removeIcon)
          }), n.a.createElement("div", {
            className: w.a.removeCost
          }, Math.round(50 * this.state.shopMultiplier), n.a.createElement("i", {
            className: p()("fas fa-coins", w.a.removeCostIcon)
          }))) : null, n.a.createElement("div", {
            className: w.a.cardsHolder
          }, this.state.shopItems.map((function(t, a) {
            return n.a.createElement("div", {
              className: w.a.shopCardContainer,
              key: a,
              role: "button",
              tabIndex: 0,
              onClick: function() {
                return Math.round(t.price * e.state.shopMultiplier) > e.state.coins ? e.setState({
                  noBuy: !0
                }) : e.setState({
                  buyCard: t.card,
                  buyPrice: Math.round(t.price * e.state.shopMultiplier)
                })
              }
            }, n.a.createElement(N.a, {
              card: t.card,
              flipped: !1,
              isArtifact: !t.card.blook
            }), n.a.createElement("div", {
              className: w.a.priceText
            }, Math.round(t.price * e.state.shopMultiplier), n.a.createElement("i", {
              className: p()("fas fa-coins", w.a.priceIcon)
            })))
          })))), this.state.showDeck ? n.a.createElement("div", {
            className: w.a.deckContainer
          }, [].concat(R(this.state.artifacts), R(this.state.cards)).map((function(e, t) {
            return n.a.createElement("div", {
              className: w.a.cardContainer,
              key: t
            }, n.a.createElement(N.a, {
              card: e,
              flipped: !1,
              isArtifact: !e.blook
            }))
          })), n.a.createElement("i", {
            className: p()("fas fa-times", w.a.closeIcon),
            role: "button",
            tabIndex: 0,
            onClick: function() {
              return e.setState({
                showDeck: !1
              })
            }
          })) : null) : "removeSelect" === this.state.phase ? n.a.createElement("div", {
            className: g.a.regularBody
          }, n.a.createElement("div", {
            className: w.a.removeText
          }, "Choose a Card to Remove"), n.a.createElement("div", {
            className: w.a.backButton,
            role: "button",
            tabIndex: 0,
            onClick: function() {
              return e.setState({
                phase: "shop"
              })
            }
          }, "Back"), n.a.createElement("div", {
            className: w.a.removeDeckContainer
          }, [].concat(R(this.state.artifacts), R(this.state.cards)).map((function(t, a) {
            return n.a.createElement("div", {
              className: w.a.removeCardContainer,
              key: a,
              role: "button",
              tabIndex: 0,
              onClick: function() {
                return e.selectCard(t)
              }
            }, n.a.createElement(N.a, {
              card: t,
              flipped: !1,
              isArtifact: !t.blook
            }))
          })))) : "removeReveal" === this.state.phase ? n.a.createElement("div", {
            className: g.a.regularBody,
            style: {
              overflow: "hidden"
            }
          }, n.a.createElement("div", {
            className: w.a.removeText
          }, "Removing Card from Deck"), n.a.createElement("div", {
            className: w.a.cardRemove
          }, n.a.createElement(N.a, {
            card: this.state.card,
            flipped: !1,
            isArtifact: !this.state.card.blook
          }))) : null, this.state.noBuy ? n.a.createElement(j.a, {
            text: "You don't have enough coins to buy this item!",
            isDark: !0,
            buttonOne: {
              text: "Ok",
              click: function() {
                return e.setState({
                  noBuy: !1
                })
              },
              color: "white"
            }
          }) : this.state.buyPrice ? n.a.createElement(j.a, {
            text: "Buy the ".concat(this.state.buyCard.blook || this.state.buyCard, " card for ").concat(this.state.buyPrice, " coins?"),
            isDark: !0,
            buttonOne: {
              text: "Yes",
              click: function() {
                return e.onBuy("card", e.state.buyPrice, e.state.buyCard)
              },
              color: "white"
            },
            buttonTwo: {
              text: "No",
              click: function() {
                return e.setState({
                  buyCard: {},
                  buyPrice: 0
                })
              },
              color: "white"
            }
          }) : null)
        }
      }]) && A(t.prototype, a), s && A(t, s), c
    }(n.a.Component);
    L.propTypes = {
      history: c.a.object.isRequired,
      tower: c.a.object,
      setTowerCards: c.a.func.isRequired,
      setTowerStage: c.a.func.isRequired,
      setTowerCoins: c.a.func.isRequired,
      setTowerArtifacts: c.a.func.isRequired,
      setTowerLife: c.a.func.isRequired,
      user: c.a.object
    };
    t.a = Object(x.c)(Object(l.a)(Object(r.b)((function(e) {
      return {
        tower: e.towers.tower
      }
    }), (function(e) {
      return Object(o.b)({
        setTowerCards: h.c,
        setTowerStage: h.g,
        setTowerCoins: h.d,
        setTowerArtifacts: h.b,
        setTowerLife: h.f
      }, e)
    }))(L)))
  },
  a2pf: function(e, t, a) {
    var s = a("jioo");
    "string" == typeof s && (s = [
      [e.i, s, ""]
    ]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a("aET+")(s, n);
    s.locals && (e.exports = s.locals)
  },
  a9gz: function(e, t, a) {
    "use strict";
    a.d(t, "a", (function() {
      return s
    }));
    var s = "DELETE_TOWER"
  },
  b36M: function(e, t, a) {
    (t = e.exports = a("JPst")(!1)).push([e.i, ".tourSteps__centered___bHXWH-camelCase{top:50%;left:50%;transform:translate(-50%,-50%)}.tourSteps__topRight___dDZHl-camelCase{right:2vw;top:calc(115px + 5vw)}@media only screen and (max-width:800px){.tourSteps__topRight___dDZHl-camelCase{top:calc(80px + 16vw)}}", ""]), t.locals = {
      centered: "tourSteps__centered___bHXWH-camelCase",
      topRight: "tourSteps__topRight___dDZHl-camelCase"
    }
  },
  bH6C: function(e, t, a) {
    "use strict";
    var s = a("q1tI"),
      n = a.n(s),
      o = a("ANjH"),
      r = a("/MKj"),
      i = a("17x9"),
      c = a.n(i),
      l = a("wIs1"),
      u = a("mLw1"),
      m = a("b6Qr"),
      f = a("vDqi"),
      p = a.n(f),
      _ = a("4MCU"),
      d = a("kuZG"),
      h = a.n(d),
      y = a("GIcp"),
      w = a.n(y),
      b = a("2g2H"),
      g = a("iQ+n"),
      v = a("TN+F"),
      C = a("anyA");

    function x(e) {
      return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function k(e, t, a, s, n, o, r) {
      try {
        var i = e[o](r),
          c = i.value
      } catch (e) {
        return void a(e)
      }
      i.done ? t(c) : Promise.resolve(c).then(s, n)
    }

    function T(e, t) {
      for(var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
    }

    function S(e, t) {
      return (S = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function E(e) {
      var t = function() {
        if("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if(Reflect.construct.sham) return !1;
        if("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }();
      return function() {
        var a, s = N(e);
        if(t) {
          var n = N(this).constructor;
          a = Reflect.construct(s, arguments, n)
        } else a = s.apply(this, arguments);
        return I(this, a)
      }
    }

    function I(e, t) {
      return !t || "object" !== x(t) && "function" != typeof t ? O(e) : t
    }

    function O(e) {
      if(void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function N(e) {
      return (N = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }
    var j = function(e) {
      ! function(e, t) {
        if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && S(e, t)
      }(c, e);
      var t, a, s, o, r, i = E(c);

      function c(e) {
        var t;
        return function(e, t) {
          if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, c), (t = i.call(this, e)).state = {
          wins: 0
        }, t.endGame = t.endGame.bind(O(t)), t
      }
      return t = c, (a = [{
        key: "componentDidMount",
        value: (o = regeneratorRuntime.mark((function e() {
          var t = this;
          return regeneratorRuntime.wrap((function(e) {
            for(;;) switch(e.prev = e.next) {
              case 0:
                if(this.props.tower && "victory" === this.props.tower.stage) {
                  e.next = 2;
                  break
                }
                return e.abrupt("return", this.props.history.push("/login"));
              case 2:
                p.a.put("/api/towers/victory").then((function(e) {
                  t.setState({
                    wins: e.data.wins
                  })
                })).catch((function(e) {
                  console.error(e), t.endGame()
                }));
              case 3:
              case "end":
                return e.stop()
            }
          }), e, this)
        })), r = function() {
          var e = this,
            t = arguments;
          return new Promise((function(a, s) {
            var n = o.apply(e, t);

            function r(e) {
              k(n, a, s, r, i, "next", e)
            }

            function i(e) {
              k(n, a, s, r, i, "throw", e)
            }
            r(void 0)
          }))
        }, function() {
          return r.apply(this, arguments)
        })
      }, {
        key: "endGame",
        value: function() {
          this.props.setTowerStage("final"), this.props.history.push("/tower/final")
        }
      }, {
        key: "render",
        value: function() {
          return this.props.tower && this.props.tower.hwId && (this.redirect = !1), this.redirect || !this.props.tower ? n.a.createElement(u.a, {
            to: "/login"
          }) : n.a.createElement("div", {
            className: m.isMobile ? w.a.mBody : w.a.body,
            style: {
              backgroundColor: "#292929",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }
          }, n.a.createElement(g.a, {
            title: "Play Tower of Doom | Blooket",
            desc: "Ascend the feared Tower of Doom by answering questions and building a deck to defeat evil Blooks on your way to the top."
          }), n.a.createElement(b.a, {
            coins: this.props.tower.coins
          }), this.state.wins > 0 ? n.a.createElement("div", {
            className: h.a.container
          }, n.a.createElement("div", {
            className: h.a.header
          }, "Victory"), n.a.createElement("div", {
            className: h.a.winText
          }, "You are the ".concat(Object(v.n)(this.state.wins)).concat(Object(v.g)(this.state.wins), " adventurer to ascend the Tower of Doom!")), n.a.createElement("div", {
            className: h.a.endButton,
            role: "button",
            tabIndex: 0,
            onClick: this.endGame
          }, "End Game")) : null)
        }
      }]) && T(t.prototype, a), s && T(t, s), c
    }(n.a.Component);
    j.propTypes = {
      history: c.a.object.isRequired,
      tower: c.a.object,
      setTowerStage: c.a.func.isRequired
    };
    t.a = Object(C.c)(Object(l.a)(Object(r.b)((function(e) {
      return {
        tower: e.towers.tower,
        client: e.clients.client
      }
    }), (function(e) {
      return Object(o.b)({
        setTowerStage: _.g
      }, e)
    }))(j)))
  },
  e78h: function(e, t, a) {
    "use strict";
    a.d(t, "a", (function() {
      return n
    })), a.d(t, "b", (function() {
      return r
    }));
    var s = a("TN+F"),
      n = {
        Chicken: {
          maxLife: 25,
          deckBlooks: ["Chick", "Chick", "Chicken", "Chicken", "Duck", "Duck", "Cow", "Pig", "Jester", "Cheshire Cat"]
        },
        Pig: {
          maxLife: 40,
          deckBlooks: ["Pig", "Pig", "Cow", "Cow", "Goat", "Walrus", "Sheep", "Horse", "Slime Monster", "Dormouse"]
        },
        Dog: {
          maxLife: 28,
          deckBlooks: ["Dog", "Dog", "Puppy", "Puppy", "Bear", "Goldfish", "Turtle", "Moose", "Walrus", "Gingerbread Man", "Eat Me", "Two of Spades"]
        },
        Cat: {
          maxLife: 30,
          deckBlooks: ["Cat", "Cat", "Kitten", "Kitten", "Rabbit", "Hamster", "Turtle", "Tiger", "Panther", "Unicorn", "Cheshire Cat"]
        },
        Bear: {
          maxLife: 43,
          deckBlooks: ["Bear", "Bear", "Polar Bear", "Penguin", "Orangutan", "Moose", "Fox", "Tiger", "Dragon", "Queen of Hearts"]
        },
        Raccoon: {
          maxLife: 27,
          deckBlooks: ["Raccoon", "Raccoon", "Raccoon", "Fox", "Squirrel", "Owl", "Hedgehog", "Anaconda", "Goldfish", "Jester", "Cheshire Cat"]
        },
        Tiger: {
          maxLife: 33,
          deckBlooks: ["Tiger", "Tiger", "Orangutan", "Panther", "Jaguar", "Toucan", "Macaw", "Horse", "Walrus", "Queen of Hearts"]
        },
        Parrot: {
          maxLife: 32,
          deckBlooks: ["Parrot", "Parrot", "Macaw", "Toucan", "Cockatoo", "Cockatoo", "Owl", "Snowy Owl", "Tiger", "Wizard", "Mad Hatter"]
        },
        "Arctic Fox": {
          maxLife: 30,
          deckBlooks: ["Arctic Fox", "Arctic Fox", "Fox", "Penguin", "Snowy Owl", "Polar Bear", "Baby Penguin", "Arctic Hare", "Seal", "Walrus", "Walrus", "Fairy", "Drink Me", "Alice"]
        },
        Panther: {
          maxLife: 35,
          deckBlooks: ["Panther", "Panther", "Tiger", "Orangutan", "Owl", "Raccoon", "Cow", "Baby Penguin", "Penguin", "Kitten", "Puppy", "Witch", "Dormouse"]
        },
        Rabbit: {
          maxLife: 41,
          deckBlooks: ["Rabbit", "Rabbit", "Hamster", "Arctic Hare", "Baby Penguin", "Raccoon", "Fox", "Puppy", "White Rabbit", "Squirrel", "Cheshire Cat"]
        },
        Orangutan: {
          maxLife: 48,
          deckBlooks: ["Orangutan", "Orangutan", "Orangutan", "Orangutan", "Orangutan", "Orangutan", "Orangutan", "Orangutan", "King of Hearts"]
        },
        Witch: {
          maxLife: 65,
          deckBlooks: ["Witch", "Witch", "Wizard", "Wizard", "Fairy", "Dragon", "White Rabbit", "Caterpillar", "Turtle", "Owl", "Snowy Owl", "Horse"]
        },
        "Slime Monster": {
          maxLife: 73,
          deckBlooks: ["Slime Monster", "Slime Monster", "Bear", "Walrus", "Tiger", "Hedgehog", "Wizard", "Dragon", "Dormouse", "Queen of Hearts"]
        },
        Dragon: {
          maxLife: 67,
          deckBlooks: ["Dragon", "Dragon", "Jester", "Wizard", "Elf", "Moose", "Jaguar", "Tiger", "Dormouse", "Queen of Hearts", "Eat Me"]
        },
        "Gingerbread Man": {
          maxLife: 63,
          deckBlooks: ["Gingerbread Man", "Gingerbread Man", "Snow Globe", "Holiday Gift", "Hot Chocolate", "Holiday Wreath", "Gingerbread House", "Gingerbread House", "Snowy Owl", "Penguin", "Cheshire Cat", "Walrus", "Polar Bear"]
        },
        Elf: {
          maxLife: 56,
          deckBlooks: ["Elf", "Elf", "Fairy", "Slime Monster", "Dragon", "Anaconda", "Turtle", "Capuchin", "Witch", "Two of Spades", "Wizard", "White Rabbit"]
        },
        Jester: {
          maxLife: 58,
          deckBlooks: ["Jester", "Jester", "Chick", "Parrot", "Macaw", "Slime Monster", "Mad Hatter", "Cheshire Cat", "Eat Me", "Drink Me", "Queen of Hearts"]
        },
        Alice: {
          maxLife: 54,
          deckBlooks: ["Alice", "Alice", "Cheshire Cat", "Drink Me", "Eat Me", "Two of Spades", "Dormouse", "White Rabbit", "Unicorn", "Parrot", "Macaw", "Seal"]
        },
        Unicorn: {
          maxLife: 70,
          deckBlooks: ["Unicorn", "Unicorn", "Witch", "Wizard", "Dragon", "Queen", "White Rabbit", "Cheshire Cat", "Jester", "Caterpillar", "Snowman", "Horse", "Jaguar", "Tiger", "Orangutan"]
        },
        "Santa Claus": {
          maxLife: 90,
          deckBlooks: ["Santa Claus", "Santa Claus", "Snowman", "Snowman", "Gingerbread Man", "Gingerbread Man", "Gingerbread House", "Holiday Wreath", "Hot Chocolate", "Holiday Gift", "Snow Globe", "Penguin", "White Rabbit", "Eat Me", "Walrus"]
        },
        King: {
          maxLife: 130,
          deckBlooks: ["King", "King", "King of Hearts", "King of Hearts", "Caterpillar", "Unicorn", "Santa Claus", "Jester", "Dragon", "Elf", "Witch", "Wizard", "Slime Monster", "White Rabbit", "Cheshire Cat", "Alice", "Queen", "Two of Spades", "Fairy"]
        }
      },
      o = {
        small: ["Chicken", "Pig", "Dog", "Cat", "Bear", "Raccoon", "Tiger", "Parrot", "Arctic Fox", "Panther", "Rabbit", "Orangutan"],
        big: ["Witch", "Slime Monster", "Dragon", "Gingerbread Man", "Elf", "Jester", "Alice"],
        boss: ["Unicorn", "Santa Claus", "King"]
      },
      r = function(e, t) {
        return "boss" === e ? o.boss[t - 1] : Object(s.o)(o[e])
      }
  },
  eDxB: function(e, t, a) {
    var s = a("NncC");
    "string" == typeof s && (s = [
      [e.i, s, ""]
    ]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a("aET+")(s, n);
    s.locals && (e.exports = s.locals)
  },
  fxUS: function(e, t, a) {
    "use strict";
    var s = a("q1tI"),
      n = a.n(s),
      o = a("ANjH"),
      r = a("/MKj"),
      i = a("17x9"),
      c = a.n(i),
      l = a("wIs1"),
      u = a("mLw1"),
      m = a("b6Qr"),
      f = a("vDqi"),
      p = a.n(f),
      _ = a("4MCU"),
      d = a("D2f2"),
      h = a.n(d),
      y = a("GIcp"),
      w = a.n(y),
      b = a("2g2H"),
      g = a("iQ+n"),
      v = a("SCqF"),
      C = a("vPiy"),
      x = a("5aLK"),
      k = a.n(x),
      T = [{
        text: "Welcome to the Tower of Doom! Your goal is to ascend the Tower's 3 Haunted Floors.",
        nextButtonText: "Next",
        className: k.a.centered
      }, {
        text: "Unfortunately, these floors are covered with enemies. You're going to need a deck to defend yourself.",
        nextButtonText: "Next",
        className: k.a.centered
      }, {
        text: "Before you start climbing the Tower, you'll answer 5 questions to get your deck started! Answer 1 question now.",
        nextButtonText: "OK",
        className: k.a.centered
      }, {}, {
        text: "Great work! Now you get to choose a card to add to your deck.",
        nextButtonText: "Next",
        className: k.a.centered
      }, {
        elementId: "card1",
        text: "You'll use Blook cards to battle. Each card has 3 attributes: Strength, Charisma, and Wisdom.",
        nextButtonText: "Next",
        elementClick: !0,
        className: k.a.card1
      }, {
        elementId: "card1",
        text: "The greater the attribute, the better. Therefore, even though the Chick appears weak, it's Charisma can be very powerful.",
        nextButtonText: "Next",
        elementClick: !0,
        className: k.a.card1
      }, {
        elementId: "card2",
        text: "This card is an Artifact. They aren't used in battle, but they apply effects that can help you.",
        nextButtonText: "Next",
        elementClick: !0,
        className: k.a.card2
      }, {
        elementId: "card2",
        text: "Coins are earned after battles and are used to purchase cards in Shops. The Piggy Bank would help you earn more of these coins.",
        nextButtonText: "Next",
        elementClick: !0,
        className: k.a.card2
      }, {
        elementId: "card1",
        text: "For now, let's just stick with the Chick. Go ahead and click the card to add it to your Deck!",
        elementClick: !0,
        functionIndex: 0,
        className: k.a.card1
      }, {
        text: "Awesome, now answer 4 more questions and choose 4 more cards. Then you'll be ready to take on the Tower of Doom!",
        nextButtonText: "OK",
        className: k.a.centered
      }],
      S = a("anyA"),
      E = a("1AT+"),
      I = a("6hcl"),
      O = a("97E7"),
      N = a("5Gl+"),
      j = a("TN+F");

    function B(e) {
      return (B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function R(e) {
      return function(e) {
        if(Array.isArray(e)) return z(e)
      }(e) || function(e) {
        if("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
      }(e) || function(e, t) {
        if(!e) return;
        if("string" == typeof e) return z(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === a && e.constructor && (a = e.constructor.name);
        if("Map" === a || "Set" === a) return Array.from(e);
        if("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return z(e, t)
      }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function z(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for(var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
      return s
    }

    function P(e, t, a, s, n, o, r) {
      try {
        var i = e[o](r),
          c = i.value
      } catch (e) {
        return void a(e)
      }
      i.done ? t(c) : Promise.resolve(c).then(s, n)
    }

    function A(e, t) {
      for(var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
    }

    function D(e, t) {
      return (D = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function q(e) {
      var t = function() {
        if("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if(Reflect.construct.sham) return !1;
        if("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }();
      return function() {
        var a, s = Q(e);
        if(t) {
          var n = Q(this).constructor;
          a = Reflect.construct(s, arguments, n)
        } else a = s.apply(this, arguments);
        return M(this, a)
      }
    }

    function M(e, t) {
      return !t || "object" !== B(t) && "function" != typeof t ? H(e) : t
    }

    function H(e) {
      if(void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function Q(e) {
      return (Q = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }
    var L = function(e) {
      ! function(e, t) {
        if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && D(e, t)
      }(c, e);
      var t, a, s, o, r, i = q(c);

      function c(e) {
        var t;
        return function(e, t) {
          if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, c), (t = i.call(this, e)).state = {
          question: {},
          phase: "question",
          correct: !1,
          cards: [],
          artifacts: [],
          coins: 0,
          askTour: !0,
          showTour: !1
        }, t.freeQuestions = [], t.waiting = !1, t.done = !1, t.qRemaining = 5, t.tourRef = n.a.createRef(), t.onAnswer = t.onAnswer.bind(H(t)), t.getQuestion = t.getQuestion.bind(H(t)), t.answerNext = t.answerNext.bind(H(t)), t.selectCard = t.selectCard.bind(H(t)), t.endTour = t.endTour.bind(H(t)), t
      }
      return t = c, (a = [{
        key: "componentDidMount",
        value: (o = regeneratorRuntime.mark((function e() {
          return regeneratorRuntime.wrap((function(e) {
            for(;;) switch(e.prev = e.next) {
              case 0:
                if(this.props.tower && "start" === this.props.tower.stage && this.props.tower.questions && this.props.tower.questions.length) {
                  e.next = 2;
                  break
                }
                return e.abrupt("return", this.props.history.push("/login"));
              case 2:
                return e.next = 4, this.props.user.getData();
              case 4:
                e.sent || this.setState({
                  notLoggedIn: !0
                }), this.setState({
                  coins: this.props.tower.coins
                }), this.freeQuestions = JSON.parse(JSON.stringify(this.props.tower.freeQuestions)), this.getQuestion();
              case 9:
              case "end":
                return e.stop()
            }
          }), e, this)
        })), r = function() {
          var e = this,
            t = arguments;
          return new Promise((function(a, s) {
            var n = o.apply(e, t);

            function r(e) {
              P(n, a, s, r, i, "next", e)
            }

            function i(e) {
              P(n, a, s, r, i, "throw", e)
            }
            r(void 0)
          }))
        }, function() {
          return r.apply(this, arguments)
        })
      }, {
        key: "componentWillUnmount",
        value: function() {
          clearTimeout(this.waitTimeout)
        }
      }, {
        key: "onAnswer",
        value: function(e) {
          if(!this.waiting) {
            this.waiting = !0;
            var t = this.state.question.correctAnswers.includes(e),
              a = JSON.parse(JSON.stringify(this.props.tower.corrects)),
              s = JSON.parse(JSON.stringify(this.props.tower.incorrects)),
              n = this.state.question.number;
            t ? a[n] ? a[n] += 1 : a[n] = 1 : s[n] ? s[n] += 1 : s[n] = 1, this.props.answerTower(a, s, JSON.parse(JSON.stringify(this.freeQuestions))), this.setState({
              correct: t,
              phase: "feedback"
            })
          }
        }
      }, {
        key: "getQuestion",
        value: function() {
          var e = this;
          0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.props.tower.questions)));
          var t = Object(j.o)(this.freeQuestions);
          this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(j.w)(t.answers)), this.setState({
            question: t,
            phase: "question"
          }, (function() {
            e.waiting = !0, e.waitTimeout = setTimeout((function() {
              e.waiting = !1
            }), 400)
          }))
        }
      }, {
        key: "answerNext",
        value: function() {
          var e = this;
          this.state.correct ? (this.qRemaining -= 1, this.setState({
            phase: "card"
          }, (function() {
            e.state.showTour && e.tourRef.current.setStep(4)
          }))) : this.getQuestion()
        }
      }, {
        key: "selectCard",
        value: function(e, t) {
          var a = this;
          if(!(this.done || this.state.showTour && !t)) {
            var s = R(this.state.cards),
              n = R(this.state.artifacts),
              o = this.state.coins;
            e.blook ? (s.push(JSON.parse(JSON.stringify(e))), this.setState({
              cards: s
            })) : (n.push(e), "Elder Coins" !== e || n.includes("Anubis' Obelisk") || (o += 100), this.setState({
              artifacts: n,
              coins: o
            })), this.qRemaining <= 0 ? (this.done = !0, this.props.setTowerCards(s), this.props.setTowerArtifacts(n), this.props.setTowerCoins(o), this.props.tower.towerId ? (p.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null, p.a.put("/api/towers/save", {
              id: this.props.tower.towerId,
              cards: s,
              artifacts: n,
              corrects: this.props.tower.corrects,
              incorrects: this.props.tower.incorrects,
              stage: "map"
            }).then((function() {
              a.props.setTowerStage("map"), a.props.history.push("/tower/map")
            })).catch((function(e) {
              console.error(e)
            }))) : (this.props.setTowerStage("map"), this.props.history.push("/tower/map"))) : this.getQuestion()
          }
        }
      }, {
        key: "endTour",
        value: function() {
          this.setState({
            showTour: !1
          }), this.props.setTowerInstruct(!0)
        }
      }, {
        key: "render",
        value: function() {
          var e = this;
          return this.props.tower && this.props.tower.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), !this.redirect && this.props.tower && this.props.tower.questions && this.props.tower.questions.length ? n.a.createElement("div", {
            className: m.isMobile ? w.a.mBody : w.a.body,
            id: "body",
            style: {
              backgroundColor: "#292929"
            }
          }, n.a.createElement(g.a, {
            title: "Play Tower of Doom | Blooket",
            desc: "Ascend the feared Tower of Doom by answering questions and building a deck to defeat evil Blooks on your way to the top."
          }), n.a.createElement(b.a, {
            coins: this.state.coins || this.props.tower.coins
          }), this.state.showTour ? n.a.createElement(C.a, {
            steps: T,
            onExit: this.endTour,
            functions: [function() {
              return e.selectCard(N.e, !0)
            }],
            ref: this.tourRef
          }) : null, this.state.question.correctAnswers ? "question" === this.state.phase ? n.a.createElement("div", {
            className: h.a.questionContainer
          }, n.a.createElement(E.a, {
            onAnswer: this.onAnswer,
            text: this.state.question.text,
            answers: this.state.question.answers,
            image: this.state.question.image
          })) : "feedback" === this.state.phase ? n.a.createElement(I.a, {
            incorrectTime: 3,
            correctAnswers: this.state.question.correctAnswers,
            correct: this.state.correct,
            onNext: this.answerNext
          }) : n.a.createElement("div", {
            className: w.a.regularBody
          }, n.a.createElement(O.a, {
            type: "small",
            onClick: this.selectCard,
            cards: [].concat(R(this.state.artifacts), R(this.state.cards)),
            noArtifacts: 0 === this.state.cards.length,
            noThird: this.state.artifacts.includes("Pink Hippo"),
            isTutorial: this.state.showTour
          })) : null, this.state.askTour ? n.a.createElement(v.a, {
            text: "Would you like a quick tutorial?",
            buttonOne: {
              text: "Yes",
              click: function() {
                return e.setState({
                  askTour: !1,
                  showTour: !0
                })
              },
              color: "blue"
            },
            buttonTwo: {
              text: "No",
              click: function() {
                return e.setState({
                  askTour: !1
                })
              },
              color: "blue"
            }
          }) : null) : n.a.createElement(u.a, {
            to: "/login"
          })
        }
      }]) && A(t.prototype, a), s && A(t, s), c
    }(n.a.Component);
    L.propTypes = {
      history: c.a.object.isRequired,
      tower: c.a.object,
      answerTower: c.a.func.isRequired,
      setTowerCards: c.a.func.isRequired,
      setTowerStage: c.a.func.isRequired,
      setTowerArtifacts: c.a.func.isRequired,
      setTowerCoins: c.a.func.isRequired,
      setTowerInstruct: c.a.func.isRequired,
      user: c.a.object
    };
    t.a = Object(S.c)(Object(l.a)(Object(r.b)((function(e) {
      return {
        tower: e.towers.tower
      }
    }), (function(e) {
      return Object(o.b)({
        answerTower: _.a,
        setTowerCards: _.c,
        setTowerStage: _.g,
        setTowerArtifacts: _.b,
        setTowerCoins: _.d,
        setTowerInstruct: _.e
      }, e)
    }))(L)))
  },
  hAB6: function(e, t, a) {
    var s = a("b36M");
    "string" == typeof s && (s = [
      [e.i, s, ""]
    ]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a("aET+")(s, n);
    s.locals && (e.exports = s.locals)
  },
  jdaG: function(e, t, a) {
    (t = e.exports = a("JPst")(!1)).push([e.i, ".tourSteps__centered___khVJS-camelCase{top:50%;left:50%;transform:translate(-50%,-50%)}.tourSteps__card1___2-Pae-camelCase{left:calc(50% - 15vw)}.tourSteps__card1___2-Pae-camelCase,.tourSteps__card2___21lvw-camelCase{top:60%;transform:translateY(-50%)}.tourSteps__card2___21lvw-camelCase{left:calc(50% + 15vw)}@media only screen and (max-width:800px){.tourSteps__card1___2-Pae-camelCase,.tourSteps__card2___21lvw-camelCase{left:50%;top:calc(50% + 23vw);transform:translateX(-50%)}}", ""]), t.locals = {
      centered: "tourSteps__centered___khVJS-camelCase",
      card1: "tourSteps__card1___2-Pae-camelCase",
      card2: "tourSteps__card2___21lvw-camelCase"
    }
  },
  jioo: function(e, t, a) {
    (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__myCircle___1qqh--camelCase{width:30vw;height:10vw;border-radius:50%;background-color:#404040;position:absolute;top:calc(50% + 16.25vw);left:35vw;transform:translate(-50%,-50%)}.styles__myName___2PdqM-camelCase{font-family:Nunito,sans-serif;font-size:3.5vw;font-weight:700;top:calc(50% + 9vw);text-align:center;color:#fff}.styles__myLife___3Fctx-camelCase,.styles__myName___2PdqM-camelCase{position:absolute;left:2.5vw;width:15vw}.styles__myLife___3Fctx-camelCase{top:calc(50% - 7.5vw);height:15vw}.styles__oppCircle___3NuFR-camelCase{width:21vw;height:7vw;border-radius:50%;background-color:#404040;position:absolute;top:26.25vw;left:68.75vw;transform:translate(-50%,-50%)}.styles__oppBlook___17FtE-camelCase{height:13.8vw;width:12vw;position:absolute;top:3.5vw;left:82.75vw;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__oppBlookStage___2hVdW-camelCase{height:5vw;border-radius:2vw;background-color:#404040;top:13.8vw}.styles__oppBlookStage___2hVdW-camelCase,.styles__oppName___3pyFl-camelCase{width:16vw;position:absolute;left:80.75vw}.styles__oppName___3pyFl-camelCase{font-family:Nunito,sans-serif;font-size:2vw;line-height:2.2vw;font-weight:700;top:20vw;text-align:center;color:#fff}.styles__oppLife___2tHat-camelCase{position:absolute;top:26vw;left:81.25vw;height:15vw;width:15vw;transform:scale(.7)}.styles__cardContainer___3sNpg-camelCase{position:absolute;width:25vw;height:32.5vw;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__myCard___trgeY-camelCase{top:50%;left:35vw;transform:translate(-50%,-50%)}.styles__oppCard___RyH7t-camelCase{top:10vw;left:65vw;transform:scale(.7) translate(-50%,-50%)}.styles__myCardAttack___ry0b2-camelCase{-webkit-animation:styles__myAttack___3Yw18-camelCase .35s ease-out;animation:styles__myAttack___3Yw18-camelCase .35s ease-out}@-webkit-keyframes styles__myAttack___3Yw18-camelCase{0%{transform:translate(-50%,-50%)}50%{transform:translate(-40%,-60%)}to{transform:translate(-50%,-50%)}}@keyframes styles__myAttack___3Yw18-camelCase{0%{transform:translate(-50%,-50%)}50%{transform:translate(-40%,-60%)}to{transform:translate(-50%,-50%)}}.styles__myCardHit___2K5FQ-camelCase{-webkit-animation:styles__myHit___Cj1lO-camelCase .35s ease-out 185ms;animation:styles__myHit___Cj1lO-camelCase .35s ease-out 185ms}@-webkit-keyframes styles__myHit___Cj1lO-camelCase{0%{transform:translate(-50%,-50%)}50%{transform:translate(-60%,-40%)}to{transform:translate(-50%,-50%)}}@keyframes styles__myHit___Cj1lO-camelCase{0%{transform:translate(-50%,-50%)}50%{transform:translate(-60%,-40%)}to{transform:translate(-50%,-50%)}}.styles__enemyCardAttack___1xoja-camelCase{-webkit-animation:styles__enemyAttack___3z6d8-camelCase .35s ease-out;animation:styles__enemyAttack___3z6d8-camelCase .35s ease-out}@-webkit-keyframes styles__enemyAttack___3z6d8-camelCase{0%{transform:scale(.7) translate(-50%,-50%)}50%{transform:scale(.7) translate(-60%,-40%)}to{transform:scale(.7) translate(-50%,-50%)}}@keyframes styles__enemyAttack___3z6d8-camelCase{0%{transform:scale(.7) translate(-50%,-50%)}50%{transform:scale(.7) translate(-60%,-40%)}to{transform:scale(.7) translate(-50%,-50%)}}.styles__enemyCardHit___24TRj-camelCase{-webkit-animation:styles__enemyHit___1xpy1-camelCase .35s ease-out 185ms;animation:styles__enemyHit___1xpy1-camelCase .35s ease-out 185ms}@-webkit-keyframes styles__enemyHit___1xpy1-camelCase{0%{transform:scale(.7) translate(-50%,-50%)}50%{transform:scale(.7) translate(-40%,-60%)}to{transform:scale(.7) translate(-50%,-50%)}}@keyframes styles__enemyHit___1xpy1-camelCase{0%{transform:scale(.7) translate(-50%,-50%)}50%{transform:scale(.7) translate(-40%,-60%)}to{transform:scale(.7) translate(-50%,-50%)}}.styles__text___24Wal-camelCase{display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;width:27.5vw;height:10.5vw;left:53.5vw;top:32.5vw;font-size:2.3vw;font-family:Nunito,sans-serif;font-weight:700;text-align:center;color:#fff;text-shadow:2px 2px 8px grey}.styles__questionContainer___1C1ex-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#292929;-webkit-animation:styles__growIn___1Jig2-camelCase .5s;animation:styles__growIn___1Jig2-camelCase .5s}@-webkit-keyframes styles__growIn___1Jig2-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes styles__growIn___1Jig2-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}.styles__feedbackContainer___yPj_L-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#292929}@media only screen and (max-width:600px){.styles__myCard___trgeY-camelCase{transform:scale(1.8) translate(-50%,-50%);top:80%;left:40vw}.styles__myCircle___1qqh--camelCase{width:55vw;height:18vw;top:calc(80% + 16.25vw);left:30vw}.styles__oppCard___RyH7t-camelCase{transform:scale(1.5) translate(-50%,-50%);top:37.5vw;left:80vw}.styles__oppCircle___3NuFR-camelCase{width:45vw;height:15vw;top:53.75vw;left:73.75vw}.styles__text___24Wal-camelCase{width:40vw;height:50vw;left:5vw;top:7.5vw;font-size:6vw}.styles__oppBlook___17FtE-camelCase{height:17.25vw;width:15vw;top:65vw;left:80vw}.styles__oppBlookStage___2hVdW-camelCase{width:20vw;height:7vw;border-radius:2vw;top:77.25vw;left:77.5vw}.styles__oppName___3pyFl-camelCase{font-size:4vw;line-height:4.2vw;left:77.5vw;top:88vw;width:20vw}.styles__oppLife___2tHat-camelCase{top:69.5vw;left:57.5vw;transform:scale(1.2)}.styles__myName___2PdqM-camelCase{font-size:6vw;line-height:6vw;left:77vw;top:calc(81.5% - 3.75vw);width:23vw}.styles__myLife___3Fctx-camelCase{top:calc(81.5% - 7.5vw);left:60vw;transform:scale(1.5)}@-webkit-keyframes styles__myAttack___3Yw18-camelCase{0%{transform:scale(1.8) translate(-50%,-50%)}50%{transform:scale(1.8) translate(-40%,-60%)}to{transform:scale(1.8) translate(-50%,-50%)}}@keyframes styles__myAttack___3Yw18-camelCase{0%{transform:scale(1.8) translate(-50%,-50%)}50%{transform:scale(1.8) translate(-40%,-60%)}to{transform:scale(1.8) translate(-50%,-50%)}}@-webkit-keyframes styles__myHit___Cj1lO-camelCase{0%{transform:scale(1.8) translate(-50%,-50%)}50%{transform:scale(1.8) translate(-60%,-40%)}to{transform:scale(1.8) translate(-50%,-50%)}}@keyframes styles__myHit___Cj1lO-camelCase{0%{transform:scale(1.8) translate(-50%,-50%)}50%{transform:scale(1.8) translate(-60%,-40%)}to{transform:scale(1.8) translate(-50%,-50%)}}@-webkit-keyframes styles__enemyAttack___3z6d8-camelCase{0%{transform:scale(1.5) translate(-50%,-50%)}50%{transform:scale(1.5) translate(-60%,-40%)}to{transform:scale(1.5) translate(-50%,-50%)}}@keyframes styles__enemyAttack___3z6d8-camelCase{0%{transform:scale(1.5) translate(-50%,-50%)}50%{transform:scale(1.5) translate(-60%,-40%)}to{transform:scale(1.5) translate(-50%,-50%)}}@-webkit-keyframes styles__enemyHit___1xpy1-camelCase{0%{transform:scale(1.5) translate(-50%,-50%)}50%{transform:scale(1.5) translate(-40%,-60%)}to{transform:scale(1.5) translate(-50%,-50%)}}@keyframes styles__enemyHit___1xpy1-camelCase{0%{transform:scale(1.5) translate(-50%,-50%)}50%{transform:scale(1.5) translate(-40%,-60%)}to{transform:scale(1.5) translate(-50%,-50%)}}}", ""]), t.locals = {
      myCircle: "styles__myCircle___1qqh--camelCase",
      myName: "styles__myName___2PdqM-camelCase",
      myLife: "styles__myLife___3Fctx-camelCase",
      oppCircle: "styles__oppCircle___3NuFR-camelCase",
      oppBlook: "styles__oppBlook___17FtE-camelCase",
      oppBlookStage: "styles__oppBlookStage___2hVdW-camelCase",
      oppName: "styles__oppName___3pyFl-camelCase",
      oppLife: "styles__oppLife___2tHat-camelCase",
      cardContainer: "styles__cardContainer___3sNpg-camelCase",
      myCard: "styles__myCard___trgeY-camelCase",
      oppCard: "styles__oppCard___RyH7t-camelCase",
      myCardAttack: "styles__myCardAttack___ry0b2-camelCase",
      myAttack: "styles__myAttack___3Yw18-camelCase",
      myCardHit: "styles__myCardHit___2K5FQ-camelCase",
      myHit: "styles__myHit___Cj1lO-camelCase",
      enemyCardAttack: "styles__enemyCardAttack___1xoja-camelCase",
      enemyAttack: "styles__enemyAttack___3z6d8-camelCase",
      enemyCardHit: "styles__enemyCardHit___24TRj-camelCase",
      enemyHit: "styles__enemyHit___1xpy1-camelCase",
      text: "styles__text___24Wal-camelCase",
      questionContainer: "styles__questionContainer___1C1ex-camelCase",
      growIn: "styles__growIn___1Jig2-camelCase",
      feedbackContainer: "styles__feedbackContainer___yPj_L-camelCase"
    }
  },
  jsdw: function(e, t, a) {
    var s = a("+42v");
    "string" == typeof s && (s = [
      [e.i, s, ""]
    ]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a("aET+")(s, n);
    s.locals && (e.exports = s.locals)
  },
  kuZG: function(e, t, a) {
    var s = a("J34z");
    "string" == typeof s && (s = [
      [e.i, s, ""]
    ]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a("aET+")(s, n);
    s.locals && (e.exports = s.locals)
  },
  nb6V: function(e, t, a) {
    "use strict";
    var s = a("q1tI"),
      n = a.n(s),
      o = a("ANjH"),
      r = a("/MKj"),
      i = a("17x9"),
      c = a.n(i),
      l = a("mLw1"),
      u = a("wIs1"),
      m = a("vDqi"),
      f = a.n(m),
      p = a("5gLy"),
      _ = a("GIcp"),
      d = a.n(_),
      h = a("pcIS"),
      y = a("iQ+n"),
      w = a("TN+F"),
      b = a("SdQT");

    function g(e) {
      return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function v(e, t) {
      return function(e) {
        if(Array.isArray(e)) return e
      }(e) || function(e, t) {
        if("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var a = [],
          s = !0,
          n = !1,
          o = void 0;
        try {
          for(var r, i = e[Symbol.iterator](); !(s = (r = i.next()).done) && (a.push(r.value), !t || a.length !== t); s = !0);
        } catch (e) {
          n = !0, o = e
        } finally {
          try {
            s || null == i.return || i.return()
          } finally {
            if(n) throw o
          }
        }
        return a
      }(e, t) || function(e, t) {
        if(!e) return;
        if("string" == typeof e) return C(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === a && e.constructor && (a = e.constructor.name);
        if("Map" === a || "Set" === a) return Array.from(e);
        if("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return C(e, t)
      }(e, t) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function C(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for(var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
      return s
    }

    function x(e, t) {
      for(var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
    }

    function k(e, t) {
      return (k = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function T(e) {
      var t = function() {
        if("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if(Reflect.construct.sham) return !1;
        if("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }();
      return function() {
        var a, s = E(e);
        if(t) {
          var n = E(this).constructor;
          a = Reflect.construct(s, arguments, n)
        } else a = s.apply(this, arguments);
        return S(this, a)
      }
    }

    function S(e, t) {
      return !t || "object" !== g(t) && "function" != typeof t ? function(e) {
        if(void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }(e) : t
    }

    function E(e) {
      return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }
    var I = function(e) {
      ! function(e, t) {
        if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && k(e, t)
      }(r, e);
      var t, a, s, o = T(r);

      function r(e) {
        var t;
        return function(e, t) {
          if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, r), (t = o.call(this, e)).state = {
          ready: !1,
          historyId: "",
          standings: [],
          muted: !!e.host && e.host.muted
        }, t
      }
      return t = r, (a = [{
        key: "componentDidMount",
        value: function() {
          var e = this;
          if(this.props.host && this.props.host.standings && this.props.host.standings[0]) {
            var t = JSON.parse(JSON.stringify(this.props.host));
            this.setState({
              standings: t.standings
            }, (function() {
              e.startTimeout = setTimeout((function() {
                var a = {};
                e.props.firebase.getDatabaseVal(t.id, "c", (function(s) {
                  var n = s || {};
                  Object.entries(n).forEach((function(e) {
                    var t = v(e, 2),
                      s = t[0],
                      n = t[1],
                      o = {};
                    if(n.i)
                      if(Array.isArray(n.i))
                        for(var r = 0; r < n.i.length; r++) {
                          var i = n.i[r];
                          i && (o[r] = i)
                        } else o = n.i;
                      else o = {};
                    var c = {};
                    if(n.c)
                      if(Array.isArray(n.c))
                        for(var l = 0; l < n.c.length; l++) {
                          var u = n.c[l];
                          u && (c[l] = u)
                        } else c = n.c;
                      else c = {};
                    a[s] = {
                      corrects: c,
                      incorrects: o
                    }
                  })), e.props.host && e.props.host.id && (e.props.firebase.removeHost(e.props.host.id), e.props.deleteHost()), window.removeEventListener("beforeunload", w.u), e.waitTimeout = setTimeout((function() {
                    e.state.standings.length > 0 && (f.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null, f.a.post("/api/history", {
                      standings: t.standings.map((function(e) {
                        return {
                          blook: e.blook,
                          name: e.name,
                          place: e.place,
                          toys: e.toys,
                          corrects: a[e.name] ? a[e.name].corrects : {},
                          incorrects: a[e.name] ? a[e.name].incorrects : {}
                        }
                      })),
                      settings: t.settings,
                      set: t.hostName,
                      setId: t.setId,
                      name: t.hoster
                    }).then((function(t) {
                      e.setState({
                        historyId: t.data._id,
                        ready: !0
                      })
                    })).catch((function(e) {
                      console.error(e)
                    })))
                  }), 2e3)
                }))
              }), 3500)
            }))
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          clearTimeout(this.startTimeout), clearTimeout(this.waitTimeout), this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost())
        }
      }, {
        key: "render",
        value: function() {
          return this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0] ? n.a.createElement("div", {
            className: d.a.body,
            style: {
              overflowY: this.state.ready ? "auto" : "hidden",
              backgroundImage: "linear-gradient(#31aae0, #bdf)"
            }
          }, n.a.createElement(y.a, {
            title: "Host Blooket",
            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
          }), this.state.standings.length > 0 ? n.a.createElement(h.a, {
            standings: this.state.standings,
            stats: this.state.standings.map((function(e) {
              return "".concat(Object(w.n)(e.toys), " Toys")
            })),
            gameId: this.props.gameId,
            historyId: this.state.historyId,
            muted: this.state.muted,
            theme: "winter"
          }) : null) : n.a.createElement(l.a, {
            to: "/dashboard"
          })
        }
      }]) && x(t.prototype, a), s && x(t, s), r
    }(n.a.Component);
    I.propTypes = {
      gameId: c.a.string,
      host: c.a.object,
      firebase: c.a.object,
      deleteHost: c.a.func.isRequired
    };
    t.a = Object(u.a)(Object(r.b)((function(e) {
      return {
        host: e.hosts.host,
        gameId: e.hosts.id
      }
    }), (function(e) {
      return Object(o.b)({
        deleteHost: p.c
      }, e)
    }))(Object(b.d)(I)))
  },
  pZkE: function(e, t, a) {
    (t = e.exports = a("JPst")(!1)).push([e.i, ".tourSteps__centered___2N9xU-camelCase{top:50%;left:50%;transform:translate(-50%,-50%)}.tourSteps__myCard___3kwQw-camelCase{top:50%;left:50vw}.tourSteps__myCard___3kwQw-camelCase,.tourSteps__oppCard___3vUwC-camelCase{transform:translateY(-50%)}.tourSteps__oppCard___3vUwC-camelCase{top:calc(15.6875vw + 55px);right:45vw}@media only screen and (max-width:600px){.tourSteps__myCard___3kwQw-camelCase{top:auto;left:5vw;bottom:calc(20% + 45vw);transform:none}.tourSteps__oppCard___3vUwC-camelCase{top:75vw;right:5vw;transform:none}}", ""]), t.locals = {
      centered: "tourSteps__centered___2N9xU-camelCase",
      myCard: "tourSteps__myCard___3kwQw-camelCase",
      oppCard: "tourSteps__oppCard___3vUwC-camelCase"
    }
  },
  sM3C: function(e, t, a) {
    var s = a("wsbM");
    "string" == typeof s && (s = [
      [e.i, s, ""]
    ]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a("aET+")(s, n);
    s.locals && (e.exports = s.locals)
  },
  tSTY: function(e, t, a) {
    var s = a("51kA");
    "string" == typeof s && (s = [
      [e.i, s, ""]
    ]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a("aET+")(s, n);
    s.locals && (e.exports = s.locals)
  },
  v83B: function(e, t, a) {
    (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__headerRow___2cBm_-camelCase{width:90%;margin:0 auto}.styles__header___2zzan-camelCase,.styles__headerRow___2cBm_-camelCase{display:flex;flex-direction:row}.styles__header___2zzan-camelCase{margin:25px auto 10px;width:100%;background-color:#1a1a1a;box-shadow:0 0 8px 3px #e57e25;border-radius:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:center;justify-content:space-between;align-items:center;padding:5px 0}.styles__headerBlook___1ttS8-camelCase{height:86px;margin:0 10px 2px}.styles__headerText___s95eQ-camelCase{font-family:Titan One,sans-serif;color:#fff;text-shadow:2px 2px 8px grey;font-size:68px}.styles__desc___15hiZ-camelCase{width:80%}.styles__desc___15hiZ-camelCase,.styles__prizesButton___37BAn-camelCase{background-color:#1a1a1a;box-shadow:0 0 8px 3px #e57e25;color:#fff;font-family:Nunito,sans-serif;font-size:24px;border-radius:5px;padding:7px 10px;box-sizing:border-box;margin:20px auto 30px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700}.styles__prizesButton___37BAn-camelCase{width:60%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__prizesButton___37BAn-camelCase:hover{transform:scale(.97)}.styles__standingRow___3BSMm-camelCase{width:85%;height:50px;box-sizing:border-box;padding:5px 10px;background-color:#1a1a1a;box-shadow:0 0 8px 3px #e57e25;color:#fff;font-family:Nunito,sans-serif;border-radius:5px;margin:20px auto;display:flex;flex-direction:row;align-items:center}.styles__placeText___bkTWi-camelCase{text-align:right;min-width:40px;font-size:40px}.styles__placeText___bkTWi-camelCase,.styles__superPlaceText___K5wnQ-camelCase{font-family:Titan One,sans-serif}.styles__superPlaceText___K5wnQ-camelCase{margin:4px 2px auto;width:27px;text-align:left;font-size:20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__nameText___ZdyCD-camelCase{font-size:34px;font-weight:700;margin-left:9px;margin-top:5px;flex-grow:1}.styles__candyRow___1mXqp-camelCase{display:flex;flex-direction:row;align-items:center}.styles__candyText___1ZlcE-camelCase{margin-left:10px;font-size:28px;text-align:right}.styles__candyImg___2k_XJ-camelCase{height:30px;margin-left:7px}.styles__prizesContainer___80IXd-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:620px;min-height:200px;max-height:90%;background-color:#1a1a1a;box-shadow:0 0 8px 3px #e57e25;border-radius:7px;display:flex;flex-direction:column;overflow-x:hidden;overflow-y:auto;font-family:Nunito,sans-serif;color:#fff}.styles__prizesContainer___80IXd-camelCase::-webkit-scrollbar{width:12px}.styles__prizesContainer___80IXd-camelCase::-webkit-scrollbar-thumb,.styles__prizesContainer___80IXd-camelCase::-webkit-scrollbar-thumb:hover{background:#fff;border-radius:10px}.styles__closeIcon___2sCz5-camelCase{position:absolute;top:15px;right:17px;font-size:26px;color:#fff;text-shadow:2px 2px 8px grey;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.2s}.styles__closeIcon___2sCz5-camelCase:focus,.styles__closeIcon___2sCz5-camelCase:hover{transform:scale(.95)}.styles__prizesHeader___1poig-camelCase{justify-content:center;text-align:center;padding:20px 20px 25px;font-family:Titan One,sans-serif;font-size:48px;text-shadow:2px 2px 8px grey;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__prizesHeader___1poig-camelCase,.styles__prizesRow___2-fLj-camelCase{display:flex;align-items:center}.styles__prizesRow___2-fLj-camelCase{flex-flow:row wrap;font-family:Nunito,sans-serif;font-size:30px;padding:10px 20px}.styles__prizeBlook___1N8qX-camelCase{width:55px;margin:0 15px}.styles__prizesToken___2uiqn-camelCase{height:30px;width:30px;border-radius:6px;margin-left:7px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media only screen and (max-width:800px){.styles__headerText___s95eQ-camelCase{font-size:60px}.styles__standingRow___3BSMm-camelCase{height:140px;flex-direction:column;justify-content:center}.styles__row___3a1Px-camelCase{height:40px;align-items:center}.styles__placeText___bkTWi-camelCase{width:auto;line-height:40px}.styles__superPlaceText___K5wnQ-camelCase{width:auto;margin:2px 2px 6px}.styles__nameText___ZdyCD-camelCase{margin-left:0;font-size:27px;line-height:38px;flex-grow:0}.styles__candyText___1ZlcE-camelCase{font-size:24px}.styles__candyImg___2k_XJ-camelCase{height:25px}.styles__prizesContainer___80IXd-camelCase{max-width:350px;min-width:300px;width:90%}}@media only screen and (max-width:600px){.styles__headerBlook___1ttS8-camelCase{display:none}}", ""]), t.locals = {
      headerRow: "styles__headerRow___2cBm_-camelCase",
      header: "styles__header___2zzan-camelCase",
      headerBlook: "styles__headerBlook___1ttS8-camelCase",
      headerText: "styles__headerText___s95eQ-camelCase",
      desc: "styles__desc___15hiZ-camelCase",
      prizesButton: "styles__prizesButton___37BAn-camelCase",
      standingRow: "styles__standingRow___3BSMm-camelCase",
      placeText: "styles__placeText___bkTWi-camelCase",
      superPlaceText: "styles__superPlaceText___K5wnQ-camelCase",
      nameText: "styles__nameText___ZdyCD-camelCase",
      candyRow: "styles__candyRow___1mXqp-camelCase",
      candyText: "styles__candyText___1ZlcE-camelCase",
      candyImg: "styles__candyImg___2k_XJ-camelCase",
      prizesContainer: "styles__prizesContainer___80IXd-camelCase",
      closeIcon: "styles__closeIcon___2sCz5-camelCase",
      prizesHeader: "styles__prizesHeader___1poig-camelCase",
      prizesRow: "styles__prizesRow___2-fLj-camelCase",
      prizeBlook: "styles__prizeBlook___1N8qX-camelCase",
      prizesToken: "styles__prizesToken___2uiqn-camelCase",
      row: "styles__row___3a1Px-camelCase"
    }
  },
  vBtp: function(e, t, a) {
    var s = a("11cj");
    "string" == typeof s && (s = [
      [e.i, s, ""]
    ]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a("aET+")(s, n);
    s.locals && (e.exports = s.locals)
  },
  vPpK: function(e, t, a) {
    var s = a("8EZC");
    "string" == typeof s && (s = [
      [e.i, s, ""]
    ]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a("aET+")(s, n);
    s.locals && (e.exports = s.locals)
  },
  wsbM: function(e, t, a) {
    (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__header___1LJst-camelCase{font-size:8vw;width:80%;margin:0 5%;text-align:left;font-family:Creepster,sans-serif;text-shadow:2px 2px 8px grey;color:#b3ffb3;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__buttonContainer___3uLFE-camelCase{width:80%;margin:40px 5% 0;display:flex;flex-flow:column;align-items:flex-start}.styles__button___2lTzR-camelCase{font-size:3vw;font-family:Creepster,sans-serif;font-weight:700;text-shadow:2px 2px 8px grey;color:#fff;opacity:.8;margin:5px 0;text-align:left;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__button___2lTzR-camelCase:hover{transform:scale(1.05);opacity:1}.styles__cardContainer___2DZzR-camelCase{width:25vw;height:32.5vw;z-index:-1;position:absolute}.styles__card1___QHYEN-camelCase{top:50%;left:80%;transform:scale(.65) rotate(-20deg) translate(-50%,-50%)}.styles__card2___t_mPc-camelCase{top:20%;left:60%;transform:scale(.65) rotate(10deg) translate(-50%,-50%)}.styles__card3___Fu2fn-camelCase{top:20%;left:40%;transform:scale(.65) rotate(5deg) translate(-50%,-50%)}.styles__card4___1_edK-camelCase{top:55%;left:50%;transform:scale(.65) rotate(-10deg) translate(-50%,-50%)}.styles__card5___1VCz7-camelCase{top:19%;left:80%;transform:scale(.65) rotate(15deg) translate(-50%,-50%)}.styles__loginText___3KpJg-camelCase{position:absolute;bottom:1%;width:90%;left:5%;font-size:18px;font-family:Nunito,sans-serif}.styles__loginText___3KpJg-camelCase,.styles__savesHeader___31eG8-camelCase{text-align:center;text-shadow:2px 2px 8px grey;color:#fff}.styles__savesHeader___31eG8-camelCase{font-size:68px;width:80%;margin:70px 10% 50px;font-family:Creepster,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__savesHolder___3Glcv-camelCase{width:90%;margin:5px 5%;display:flex;flex-direction:row;justify-content:space-evenly}.styles__saveContainer___nJwby-camelCase{background-color:#404040;border:7px solid #333;border-radius:6px;display:flex;flex-direction:column;max-width:300px;margin:15px 20px;flex-grow:1;font-family:Nunito,sans-serif;color:#fff;text-shadow:2px 2px 8px grey}.styles__saveTitle___3iV54-camelCase{font-size:42px;line-height:45px;margin:5px 5% 0}.styles__saveSubTitle___CchlQ-camelCase,.styles__saveTitle___3iV54-camelCase{font-weight:700;width:90%}.styles__saveSubTitle___CchlQ-camelCase{font-size:32px;margin:0 5%;opacity:.75}.styles__saveRow___kRJCK-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;width:90%;margin:5px auto;font-size:22px;height:25px}.styles__saveIcon___1mJ8u-camelCase{width:38px;text-align:center;margin-left:5px}.styles__saveHealthHolder___UBAmL-camelCase{height:18px;width:calc(100% - 43px);margin-right:auto;background-color:#c43a35;border-radius:5px;overflow:hidden}.styles__saveHealthBar___3Ng8i-camelCase{width:100%;height:100%;background-color:#4bc22e;transform-origin:left}.styles__loadButton___1x0aA-camelCase{background-color:#404040;border:7px solid #333;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:6px;display:flex;justify-content:center;align-items:center;margin:15px auto;font-family:Nunito,sans-serif;font-weight:700;font-size:26px;padding:5px 13px;color:#fff;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__loadButton___1x0aA-camelCase:hover{transform:scale(.95)}.styles__emptySave___3VrZw-camelCase{font-size:54px;padding:20px 0;margin:auto;font-weight:700}.styles__backButton___2nwBW-camelCase{position:absolute;top:10px;left:10px;font-size:30px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;color:#fff;text-shadow:2px 2px 8px grey}.styles__backButton___2nwBW-camelCase,.styles__stageText___3PfQM-camelCase{font-family:Nunito,sans-serif}.styles__stageText___3PfQM-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;text-align:right;overflow:hidden}@media only screen and (max-width:800px){.styles__header___1LJst-camelCase{font-size:25vw}.styles__button___2lTzR-camelCase{font-size:10vw}.styles__cardContainer___2DZzR-camelCase{display:none;opacity:0}.styles__savesHolder___3Glcv-camelCase{width:90%;margin:5px 5%;flex-direction:column;justify-content:space-evenly;align-items:center}.styles__saveContainer___nJwby-camelCase{width:300px;margin:15px 20px}.styles__savesHeader___31eG8-camelCase{font-size:68px;margin:40px 10% 10px}.styles__backButton___2nwBW-camelCase{font-size:26px}}", ""]), t.locals = {
      header: "styles__header___1LJst-camelCase",
      buttonContainer: "styles__buttonContainer___3uLFE-camelCase",
      button: "styles__button___2lTzR-camelCase",
      cardContainer: "styles__cardContainer___2DZzR-camelCase",
      card1: "styles__card1___QHYEN-camelCase",
      card2: "styles__card2___t_mPc-camelCase",
      card3: "styles__card3___Fu2fn-camelCase",
      card4: "styles__card4___1_edK-camelCase",
      card5: "styles__card5___1VCz7-camelCase",
      loginText: "styles__loginText___3KpJg-camelCase",
      savesHeader: "styles__savesHeader___31eG8-camelCase",
      savesHolder: "styles__savesHolder___3Glcv-camelCase",
      saveContainer: "styles__saveContainer___nJwby-camelCase",
      saveTitle: "styles__saveTitle___3iV54-camelCase",
      saveSubTitle: "styles__saveSubTitle___CchlQ-camelCase",
      saveRow: "styles__saveRow___kRJCK-camelCase",
      saveIcon: "styles__saveIcon___1mJ8u-camelCase",
      saveHealthHolder: "styles__saveHealthHolder___UBAmL-camelCase",
      saveHealthBar: "styles__saveHealthBar___3Ng8i-camelCase",
      loadButton: "styles__loadButton___1x0aA-camelCase",
      emptySave: "styles__emptySave___3VrZw-camelCase",
      backButton: "styles__backButton___2nwBW-camelCase",
      stageText: "styles__stageText___3PfQM-camelCase"
    }
  },
  yGy1: function(e, t, a) {
    "use strict";
    var s = a("q1tI"),
      n = a.n(s),
      o = a("ANjH"),
      r = a("/MKj"),
      i = a("17x9"),
      c = a.n(i),
      l = a("wIs1"),
      u = a("mLw1"),
      m = a("b6Qr"),
      f = a("vDqi"),
      p = a.n(f),
      _ = a("4MCU"),
      d = a("vPpK"),
      h = a.n(d),
      y = a("GIcp"),
      w = a.n(y),
      b = a("2g2H"),
      g = a("iQ+n"),
      v = a("anyA"),
      C = a("TN+F"),
      x = a("5Gl+"),
      k = function(e, t) {
        var a = {},
          s = 0;
        if("+" === t) {
          s = Math.round(.01 * Object(C.q)(25, 41) * (100 - e)) || 10;
          var n = Object(C.o)(x.b[0 === Object(C.q)(0, 2) ? "uncommon" : "rare"]);
          a = {
            blook: n,
            strength: Object(C.q)(16, 19),
            charisma: Object(C.q)(16, 19),
            wisdom: Object(C.q)(16, 19),
            class: x.c[n].class
          }
        } else {
          s = -Math.round(.01 * Object(C.q)(30, 46) * e) || -10;
          var o = Object(C.o)(x.b.common);
          a = {
            blook: o,
            strength: Object(C.q)(0, 5),
            charisma: Object(C.q)(0, 5),
            wisdom: Object(C.q)(0, 5),
            class: x.c[o].class
          }
        }
        return {
          card: a,
          health: s
        }
      },
      T = a("6Ny9"),
      S = a("DoX5");

    function E(e) {
      return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function I(e) {
      return function(e) {
        if(Array.isArray(e)) return O(e)
      }(e) || function(e) {
        if("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
      }(e) || function(e, t) {
        if(!e) return;
        if("string" == typeof e) return O(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === a && e.constructor && (a = e.constructor.name);
        if("Map" === a || "Set" === a) return Array.from(e);
        if("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return O(e, t)
      }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function O(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for(var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
      return s
    }

    function N(e, t, a, s, n, o, r) {
      try {
        var i = e[o](r),
          c = i.value
      } catch (e) {
        return void a(e)
      }
      i.done ? t(c) : Promise.resolve(c).then(s, n)
    }

    function j(e, t) {
      for(var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
    }

    function B(e, t) {
      return (B = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function R(e) {
      var t = function() {
        if("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if(Reflect.construct.sham) return !1;
        if("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }();
      return function() {
        var a, s = A(e);
        if(t) {
          var n = A(this).constructor;
          a = Reflect.construct(s, arguments, n)
        } else a = s.apply(this, arguments);
        return z(this, a)
      }
    }

    function z(e, t) {
      return !t || "object" !== E(t) && "function" != typeof t ? P(e) : t
    }

    function P(e) {
      if(void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function A(e) {
      return (A = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }
    var D = function(e) {
      ! function(e, t) {
        if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && B(e, t)
      }(c, e);
      var t, a, s, o, r, i = R(c);

      function c(e) {
        var t;
        return function(e, t) {
          if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, c), (t = i.call(this, e)).state = {
          card: {},
          health: 0,
          riskText: ""
        }, t.ready = !1, t.onSelect = t.onSelect.bind(P(t)), t
      }
      return t = c, (a = [{
        key: "componentDidMount",
        value: (o = regeneratorRuntime.mark((function e() {
          var t, a, s = this;
          return regeneratorRuntime.wrap((function(e) {
            for(;;) switch(e.prev = e.next) {
              case 0:
                if(this.props.tower && "risk" === this.props.tower.stage) {
                  e.next = 2;
                  break
                }
                return e.abrupt("return", this.props.history.push("/login"));
              case 2:
                return e.next = 4, this.props.user.getData();
              case 4:
                e.sent || this.setState({
                  notLoggedIn: !0
                }), t = k(this.props.tower.life, this.props.tower.enemy), a = "".concat(t.card.strength, "/").concat(t.card.charisma, "/").concat(t.card.wisdom, " ").concat(t.card.blook, " Card"), this.setState({
                  card: t.card,
                  health: t.health,
                  riskText: "Gain a ".concat(a, " or ").concat(t.health > 0 ? "Heal for" : "Sacrifice", " ").concat(Math.abs(t.health), " Health?")
                }, (function() {
                  s.waitTimeout = setTimeout((function() {
                    s.ready = !0
                  }), 1e3)
                }));
              case 9:
              case "end":
                return e.stop()
            }
          }), e, this)
        })), r = function() {
          var e = this,
            t = arguments;
          return new Promise((function(a, s) {
            var n = o.apply(e, t);

            function r(e) {
              N(n, a, s, r, i, "next", e)
            }

            function i(e) {
              N(n, a, s, r, i, "throw", e)
            }
            r(void 0)
          }))
        }, function() {
          return r.apply(this, arguments)
        })
      }, {
        key: "componentWillUnmount",
        value: function() {
          clearTimeout(this.waitTimeout)
        }
      }, {
        key: "onSelect",
        value: function(e) {
          var t = this;
          if(this.ready) {
            var a = I(this.props.tower.cards),
              s = this.props.tower.life;
            e ? (a = [].concat(I(this.props.tower.cards), [this.state.card]), this.props.setTowerCards(a)) : (s += this.state.health, this.props.setTowerLife(s)), this.props.tower.towerId ? (p.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null, p.a.put("/api/towers/save", {
              id: this.props.tower.towerId,
              stage: "map",
              cards: a,
              life: s
            }).then((function() {
              t.props.setTowerStage("map"), t.props.history.push("/tower/map")
            })).catch((function(e) {
              console.error(e)
            }))) : (this.props.setTowerStage("map"), this.props.history.push("/tower/map"))
          }
        }
      }, {
        key: "render",
        value: function() {
          var e = this;
          return this.props.tower && this.props.tower.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || !this.props.tower ? n.a.createElement(u.a, {
            to: "/login"
          }) : n.a.createElement("div", {
            className: m.isMobile ? w.a.mBody : w.a.body,
            style: {
              backgroundColor: "#292929"
            }
          }, n.a.createElement(g.a, {
            title: "Play Tower of Doom | Blooket",
            desc: "Ascend the feared Tower of Doom by answering questions and building a deck to defeat evil Blooks on your way to the top."
          }), n.a.createElement(b.a, {
            coins: this.props.tower.coins
          }), this.state.health ? n.a.createElement("div", {
            className: w.a.regularBody,
            style: {
              overflow: "hidden"
            }
          }, n.a.createElement("div", {
            className: h.a.lifeContainer
          }, n.a.createElement(T.a, {
            currentLife: this.props.tower.life,
            maxLife: 100
          })), n.a.createElement(S.a, {
            name: this.state.card.blook,
            className: h.a.blook
          }), n.a.createElement("div", {
            className: h.a.textContainer
          }, n.a.createElement("div", {
            className: h.a.riskText
          }, this.state.riskText), n.a.createElement("div", {
            className: h.a.buttonContainer
          }, n.a.createElement("div", {
            className: h.a.button,
            role: "button",
            tabIndex: 0,
            onClick: function() {
              return e.onSelect(!0)
            }
          }, "Card"), n.a.createElement("div", {
            className: h.a.button,
            role: "button",
            tabIndex: 0,
            onClick: function() {
              return e.onSelect(!1)
            }
          }, "Health")))) : null)
        }
      }]) && j(t.prototype, a), s && j(t, s), c
    }(n.a.Component);
    D.propTypes = {
      history: c.a.object.isRequired,
      tower: c.a.object,
      setTowerCards: c.a.func.isRequired,
      setTowerStage: c.a.func.isRequired,
      setTowerLife: c.a.func.isRequired,
      user: c.a.object
    };
    t.a = Object(v.c)(Object(l.a)(Object(r.b)((function(e) {
      return {
        tower: e.towers.tower
      }
    }), (function(e) {
      return Object(o.b)({
        setTowerCards: _.c,
        setTowerStage: _.g,
        setTowerLife: _.f
      }, e)
    }))(D)))
  },
  ySkM: function(e, t, a) {
    var s = a("ABkm");
    "string" == typeof s && (s = [
      [e.i, s, ""]
    ]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a("aET+")(s, n);
    s.locals && (e.exports = s.locals)
  },
  z2sy: function(e, t, a) {
    "use strict";
    var s = a("q1tI"),
      n = a.n(s),
      o = a("ANjH"),
      r = a("/MKj"),
      i = a("17x9"),
      c = a.n(i),
      l = a("wIs1"),
      u = a("mLw1"),
      m = a("vDqi"),
      f = a.n(m),
      p = a("b6Qr"),
      _ = a("pMbe"),
      d = a("dJL0"),
      h = a("jsdw"),
      y = a.n(h),
      w = a("GIcp"),
      b = a.n(w),
      g = a("iQ+n"),
      v = a("ZENw"),
      C = a("e/rn"),
      x = a("TN+F"),
      k = a("SdQT");

    function T(e) {
      return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function S(e, t) {
      var a = Object.keys(e);
      if(Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        t && (s = s.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), a.push.apply(a, s)
      }
      return a
    }

    function E(e) {
      for(var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? S(Object(a), !0).forEach((function(t) {
          I(e, t, a[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : S(Object(a)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
        }))
      }
      return e
    }

    function I(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e
    }

    function O(e, t) {
      for(var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
    }

    function N(e, t) {
      return (N = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function j(e) {
      var t = function() {
        if("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if(Reflect.construct.sham) return !1;
        if("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (e) {
          return !1
        }
      }();
      return function() {
        var a, s = z(e);
        if(t) {
          var n = z(this).constructor;
          a = Reflect.construct(s, arguments, n)
        } else a = s.apply(this, arguments);
        return B(this, a)
      }
    }

    function B(e, t) {
      return !t || "object" !== T(t) && "function" != typeof t ? R(e) : t
    }

    function R(e) {
      if(void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function z(e) {
      return (z = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }
    var P = function(e) {
        return n.a.createElement("div", {
          className: y.a.statContainer
        }, n.a.createElement("div", {
          className: y.a.toysText
        }, Object(x.v)(e.toys)), n.a.createElement("img", {
          src: C.a,
          alt: "Toy",
          className: y.a.toyImage,
          draggable: !1
        }))
      },
      A = function(e) {
        ! function(e, t) {
          if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && N(e, t)
        }(r, e);
        var t, a, s, o = j(r);

        function r(e) {
          var t;
          return function(e, t) {
            if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, r), (t = o.call(this, e)).state = {
            numCorrect: "",
            numQuestions: "",
            ready: !1
          }, t.saveStats = t.saveStats.bind(R(t)), t.final = !1, t
        }
        return t = r, (a = [{
          key: "componentDidMount",
          value: function() {
            var e = this;
            if(this.props.client && this.props.client.standing && this.props.client.standing[0]) {
              this.props.firebase.setVal({
                id: this.props.client.hostId,
                path: "c/".concat(this.props.client.name),
                val: {
                  c: E({}, this.props.client.corrects),
                  i: E({}, this.props.client.incorrects)
                }
              });
              var t = this.props.client.standing.map((function(e) {
                return e.name
              })).indexOf(this.props.client.name);
              if(-1 !== t) {
                var a = 0,
                  s = 0;
                Object.values(this.props.client.corrects).forEach((function(e) {
                  a += e, s += e
                })), Object.values(this.props.client.incorrects).forEach((function(e) {
                  s += e
                }));
                var n = this.props.client.standing[t].place;
                this.stats = {
                  place: n,
                  toys: this.props.client.standing[t].toys,
                  playersDefeated: this.props.client.standing.length - n,
                  correctAnswers: a,
                  blookUsed: this.props.client.blook,
                  nameUsed: this.props.client.name,
                  contest: this.props.client.contest
                }, this.props.client.username && this.saveStats(this.props.client.username, (function() {})), this.readyTimeout = setTimeout((function() {
                  e.setState({
                    ready: !0,
                    numCorrect: a,
                    numQuestions: s,
                    me: e.props.client.standing[t]
                  })
                }), 4750)
              }
            }
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            clearTimeout(this.readyTimeout), this.props.deleteClient()
          }
        }, {
          key: "saveStats",
          value: function(e, t) {
            f.a.defaults.headers.common.Authorization = "undefined" != typeof window ? localStorage.getItem("token") : null, f.a.put("/api/users/toystats", {
              name: e,
              place: this.stats.place,
              toys: this.stats.toys,
              playersDefeated: this.stats.playersDefeated,
              correctAnswers: this.stats.correctAnswers,
              blookUsed: this.stats.blookUsed,
              nameUsed: this.stats.nameUsed,
              contest: this.stats.contest
            }).then((function() {
              t()
            })).catch((function(e) {
              console.error(e)
            }))
          }
        }, {
          key: "render",
          value: function() {
            return this.props.client && this.props.client.standing && this.props.client.standing[0] ? n.a.createElement("div", {
              className: p.isMobile ? b.a.mBody : b.a.body,
              style: {
                backgroundColor: "#0bc2cf"
              }
            }, n.a.createElement(g.a, {
              title: "Play Blooket",
              desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
            }), n.a.createElement(d.a, {
              leftText: this.props.client.name,
              rightText: "Play Again",
              rightLink: "/play"
            }), this.state.ready ? n.a.createElement(v.a, {
              standings: this.props.client.standing,
              name: this.props.client.name,
              numCorrect: this.state.numCorrect,
              numQuestions: this.state.numQuestions,
              username: this.props.client.username,
              plus: this.props.client.plus,
              myStat: "".concat(Object(x.n)(this.state.me.toys), " Toys"),
              saveStats: this.saveStats,
              renderStandingStat: P,
              renderStats: function() {},
              tokenMultiplier: .25
            }) : null) : n.a.createElement(u.a, {
              to: "/play"
            })
          }
        }]) && O(t.prototype, a), s && O(t, s), r
      }(n.a.Component);
    A.propTypes = {
      client: c.a.shape({
        name: c.a.string,
        hostId: c.a.string,
        points: c.a.number,
        score: c.a.number,
        answer: c.a.string,
        raceResult: c.a.array,
        standing: c.a.array,
        blook: c.a.string,
        totalPoints: c.a.number,
        corrects: c.a.any,
        question: c.a.object,
        raceFinishes: c.a.array,
        tens: c.a.number,
        fifties: c.a.number,
        username: c.a.string,
        mode: c.a.string,
        type: c.a.string,
        incorrects: c.a.object,
        upgrades: c.a.number,
        plus: c.a.bool,
        contest: c.a.bool
      }),
      deleteClient: c.a.func.isRequired,
      firebase: c.a.object
    };
    t.a = Object(l.a)(Object(r.b)((function(e) {
      return {
        client: e.clients.client
      }
    }), (function(e) {
      return Object(o.b)({
        deleteClient: _.a
      }, e)
    }))(Object(k.d)(A)))
  }
});