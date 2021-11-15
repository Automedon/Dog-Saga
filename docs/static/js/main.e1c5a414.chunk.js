(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    31: function (e, t, n) {
      e.exports = n.p + "static/media/logo.ee7cd8ed.svg";
    },
    36: function (e, t, n) {
      e.exports = n(70);
    },
    45: function (e, t, n) {},
    68: function (e, t, n) {},
    70: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(3),
        a = n.n(r),
        c = n(33),
        o = n(26),
        s = n(5),
        i = n(12),
        u = n(27),
        l = n(13),
        p = "API_CALL_REQUEST",
        g = "API_CALL_SUCCESS",
        d = "API_CALL_FAILURE",
        h = { fetching: !1, dog: null, error: null };
      var m = n(28),
        f = n(29),
        b = n(34),
        A = n(30),
        E = n(35),
        j = n(31),
        O = n.n(j),
        L =
          (n(45),
          (function (e) {
            function t() {
              return (
                Object(m.a)(this, t),
                Object(b.a)(this, Object(A.a)(t).apply(this, arguments))
              );
            }
            return (
              Object(E.a)(t, e),
              Object(f.a)(t, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.fetching,
                      n = e.dog,
                      r = e.onRequestDog,
                      c = e.error;
                    return a.a.createElement(
                      "div",
                      { className: "App" },
                      a.a.createElement(
                        "header",
                        { className: "App-header" },
                        a.a.createElement("img", {
                          src: n || O.a,
                          className: "App-logo",
                          alt: "logo",
                        }),
                        a.a.createElement(
                          "h1",
                          { className: "App-title" },
                          "Welcome to Dog Saga"
                        )
                      ),
                      n
                        ? a.a.createElement(
                            "p",
                            { className: "App-intro" },
                            "Keep clicking for new dogs"
                          )
                        : a.a.createElement(
                            "p",
                            { className: "App-intro" },
                            "Replace the React icon with a dog!"
                          ),
                      t
                        ? a.a.createElement(
                            "button",
                            { disabled: !0 },
                            "Fetching..."
                          )
                        : a.a.createElement(
                            "button",
                            { onClick: r },
                            "Request a Dog"
                          ),
                      c &&
                        a.a.createElement(
                          "p",
                          { style: { color: "red" } },
                          "Uh oh - something went wrong!"
                        )
                    );
                  },
                },
              ]),
              t
            );
          })(r.Component)),
        v = Object(i.b)(
          function (e) {
            return { fetching: e.fetching, dog: e.dog, error: e.error };
          },
          function (e) {
            return {
              onRequestDog: function () {
                return e({ type: "API_CALL_REQUEST" });
              },
            };
          }
        )(L),
        w = n(10),
        _ = n.n(w),
        C = n(9),
        I = n(32),
        R = n.n(I),
        S = _.a.mark(k),
        x = _.a.mark(U);
      function k() {
        return _.a.wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    Object(C.a)([Object(C.d)("API_CALL_REQUEST", U)])
                  );
                case 2:
                case "end":
                  return e.stop();
              }
          },
          S,
          this
        );
      }
      function y() {
        return R()({
          method: "get",
          url: "https://dog.ceo/api/breeds/image/random",
        });
      }
      function U() {
        var e, t;
        return _.a.wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (n.prev = 0), (n.next = 3), Object(C.b)(y);
                case 3:
                  return (
                    (e = n.sent),
                    (t = e.data.message),
                    console.log(e),
                    (n.next = 8),
                    Object(C.c)({ type: "API_CALL_SUCCESS", dog: t })
                  );
                case 8:
                  n.next = 14;
                  break;
                case 10:
                  return (
                    (n.prev = 10),
                    (n.t0 = n.catch(0)),
                    (n.next = 14),
                    Object(C.c)({ type: "API_CALL_FAILURE", error: n.t0 })
                  );
                case 14:
                case "end":
                  return n.stop();
              }
          },
          x,
          this,
          [[0, 10]]
        );
      }
      n(68);
      var P = Object(c.a)(),
        N = Object(s.d)(function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : h,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case p:
              return Object(l.a)({}, e, { fetching: !0, error: null });
            case g:
              return Object(l.a)({}, e, { fetching: !1, dog: t.dog });
            case d:
              return Object(l.a)({}, e, {
                fetching: !1,
                dog: null,
                error: t.error,
              });
            default:
              return e;
          }
        }, Object(s.a)(P, u.logger));
      P.run(k),
        Object(o.render)(
          a.a.createElement(i.a, { store: N }, a.a.createElement(v, null)),
          document.getElementById("root")
        );
    },
  },
  [[36, 2, 1]],
]);
//# sourceMappingURL=main.e1c5a414.chunk.js.map
