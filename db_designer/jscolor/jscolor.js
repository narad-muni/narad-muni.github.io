var jscolor = {
  dir: "",
  bindClass: "color",
  binding: !0,
  preloading: !0,
  install: function () {
    jscolor.addEvent(window, "load", jscolor.init);
  },
  init: function () {
    jscolor.binding && jscolor.bind(), jscolor.preloading && jscolor.preload();
  },
  getDir: function () {
    if (!jscolor.dir) {
      var e = jscolor.detectDir();
      jscolor.dir = e !== !1 ? e : "jscolor/";
    }
    return jscolor.dir;
  },
  detectDir: function () {
    for (
      var e = location.href, t = document.getElementsByTagName("base"), o = 0;
      o < t.length;
      o += 1
    )
      t[o].href && (e = t[o].href);
    for (
      var t = document.getElementsByTagName("script"), o = 0;
      o < t.length;
      o += 1
    )
      if (t[o].src && /(^|\/)jscolor\.js([?#].*)?$/i.test(t[o].src)) {
        var r = new jscolor.URI(t[o].src),
          s = r.toAbsolute(e);
        return (
          (s.path = s.path.replace(/[^\/]+$/, "")),
          (s.query = null),
          (s.fragment = null),
          s.toString()
        );
      }
    return !1;
  },
  bind: function () {
    for (
      var e = new RegExp(
          "(^|\\s)(" + jscolor.bindClass + ")(\\s*(\\{[^}]*\\})|\\s|$)",
          "i"
        ),
        t = document.getElementsByTagName("input"),
        o = 0;
      o < t.length;
      o += 1
    )
      if (!jscolor.isColorAttrSupported || "color" != t[o].type.toLowerCase()) {
        var r;
        if (!t[o].color && t[o].className && (r = t[o].className.match(e))) {
          var s = {};
          if (r[4])
            try {
              s = new Function("return (" + r[4] + ")")();
            } catch (n) {}
          t[o].color = new jscolor.color(t[o], s);
        }
      }
  },
  preload: function () {
    for (var e in jscolor.imgRequire)
      jscolor.imgRequire.hasOwnProperty(e) && jscolor.loadImage(e);
  },
  images: { pad: [181, 101], sld: [16, 101], cross: [15, 15], arrow: [7, 11] },
  imgRequire: {},
  imgLoaded: {},
  requireImage: function (e) {
    jscolor.imgRequire[e] = !0;
  },
  loadImage: function (e) {
    jscolor.imgLoaded[e] ||
      ((jscolor.imgLoaded[e] = new Image()),
      (jscolor.imgLoaded[e].src = jscolor.getDir() + e));
  },
  fetchElement: function (e) {
    return "string" == typeof e ? document.getElementById(e) : e;
  },
  addEvent: function (e, t, o) {
    e.addEventListener
      ? e.addEventListener(t, o, !1)
      : e.attachEvent && e.attachEvent("on" + t, o);
  },
  fireEvent: function (e, t) {
    if (e)
      if (document.createEvent) {
        var o = document.createEvent("HTMLEvents");
        o.initEvent(t, !0, !0), e.dispatchEvent(o);
      } else if (document.createEventObject) {
        var o = document.createEventObject();
        e.fireEvent("on" + t, o);
      } else e["on" + t] && e["on" + t]();
  },
  getElementPos: function (e) {
    var t = e,
      o = e,
      r = 0,
      s = 0;
    if (t.offsetParent)
      do (r += t.offsetLeft), (s += t.offsetTop);
      while ((t = t.offsetParent));
    for (; (o = o.parentNode) && "BODY" !== o.nodeName.toUpperCase(); )
      (r -= o.scrollLeft), (s -= o.scrollTop);
    return [r, s];
  },
  getElementSize: function (e) {
    return [e.offsetWidth, e.offsetHeight];
  },
  getRelMousePos: function (e) {
    var t = 0,
      o = 0;
    return (
      e || (e = window.event),
      "number" == typeof e.offsetX
        ? ((t = e.offsetX), (o = e.offsetY))
        : "number" == typeof e.layerX && ((t = e.layerX), (o = e.layerY)),
      { x: t, y: o }
    );
  },
  getViewPos: function () {
    return "number" == typeof window.pageYOffset
      ? [window.pageXOffset, window.pageYOffset]
      : document.body && (document.body.scrollLeft || document.body.scrollTop)
      ? [document.body.scrollLeft, document.body.scrollTop]
      : document.documentElement &&
        (document.documentElement.scrollLeft ||
          document.documentElement.scrollTop)
      ? [
          document.documentElement.scrollLeft,
          document.documentElement.scrollTop,
        ]
      : [0, 0];
  },
  getViewSize: function () {
    return "number" == typeof window.innerWidth
      ? [window.innerWidth, window.innerHeight]
      : document.body &&
        (document.body.clientWidth || document.body.clientHeight)
      ? [document.body.clientWidth, document.body.clientHeight]
      : document.documentElement &&
        (document.documentElement.clientWidth ||
          document.documentElement.clientHeight)
      ? [
          document.documentElement.clientWidth,
          document.documentElement.clientHeight,
        ]
      : [0, 0];
  },
  URI: function (e) {
    function t(e) {
      for (var t = ""; e; )
        if ("../" === e.substr(0, 3) || "./" === e.substr(0, 2))
          e = e.replace(/^\.+/, "").substr(1);
        else if ("/./" === e.substr(0, 3) || "/." === e) e = "/" + e.substr(3);
        else if ("/../" === e.substr(0, 4) || "/.." === e)
          (e = "/" + e.substr(4)), (t = t.replace(/\/?[^\/]*$/, ""));
        else if ("." === e || ".." === e) e = "";
        else {
          var o = e.match(/^\/?[^\/]*/)[0];
          (e = e.substr(o.length)), (t += o);
        }
      return t;
    }
    (this.scheme = null),
      (this.authority = null),
      (this.path = ""),
      (this.query = null),
      (this.fragment = null),
      (this.parse = function (e) {
        var t = e.match(
          /^(([A-Za-z][0-9A-Za-z+.-]*)(:))?((\/\/)([^\/?#]*))?([^?#]*)((\?)([^#]*))?((#)(.*))?/
        );
        return (
          (this.scheme = t[3] ? t[2] : null),
          (this.authority = t[5] ? t[6] : null),
          (this.path = t[7]),
          (this.query = t[9] ? t[10] : null),
          (this.fragment = t[12] ? t[13] : null),
          this
        );
      }),
      (this.toString = function () {
        var e = "";
        return (
          null !== this.scheme && (e = e + this.scheme + ":"),
          null !== this.authority && (e = e + "//" + this.authority),
          null !== this.path && (e += this.path),
          null !== this.query && (e = e + "?" + this.query),
          null !== this.fragment && (e = e + "#" + this.fragment),
          e
        );
      }),
      (this.toAbsolute = function (e) {
        var e = new jscolor.URI(e),
          o = this,
          r = new jscolor.URI();
        return null === e.scheme
          ? !1
          : (null !== o.scheme &&
              o.scheme.toLowerCase() === e.scheme.toLowerCase() &&
              (o.scheme = null),
            null !== o.scheme
              ? ((r.scheme = o.scheme),
                (r.authority = o.authority),
                (r.path = t(o.path)),
                (r.query = o.query))
              : (null !== o.authority
                  ? ((r.authority = o.authority),
                    (r.path = t(o.path)),
                    (r.query = o.query))
                  : ("" === o.path
                      ? ((r.path = e.path),
                        (r.query = null !== o.query ? o.query : e.query))
                      : ("/" === o.path.substr(0, 1)
                          ? (r.path = t(o.path))
                          : ((r.path =
                              null !== e.authority && "" === e.path
                                ? "/" + o.path
                                : e.path.replace(/[^\/]+$/, "") + o.path),
                            (r.path = t(r.path))),
                        (r.query = o.query)),
                    (r.authority = e.authority)),
                (r.scheme = e.scheme)),
            (r.fragment = o.fragment),
            r);
      }),
      e && this.parse(e);
  },
  color: function (e, t) {
    function o(e, t, o) {
      var r = Math.min(Math.min(e, t), o),
        s = Math.max(Math.max(e, t), o),
        n = s - r;
      if (0 === n) return [null, 0, s];
      var i =
        e === r ? 3 + (o - t) / n : t === r ? 5 + (e - o) / n : 1 + (t - e) / n;
      return [6 === i ? 0 : i, n / s, s];
    }
    function r(e, t, o) {
      if (null === e) return [o, o, o];
      var r = Math.floor(e),
        s = r % 2 ? e - r : 1 - (e - r),
        n = o * (1 - t),
        i = o * (1 - t * s);
      switch (r) {
        case 6:
        case 0:
          return [o, i, n];
        case 1:
          return [i, o, n];
        case 2:
          return [n, o, i];
        case 3:
          return [n, i, o];
        case 4:
          return [i, n, o];
        case 5:
          return [o, n, i];
      }
    }
    function s() {
      delete jscolor.picker.owner,
        document
          .getElementsByTagName("body")[0]
          .removeChild(jscolor.picker.boxB);
    }
    function n(t, o) {
      function r() {
        var e = f.pickerInsetColor.split(/\s+/),
          t = e.length < 2 ? e[0] : e[1] + " " + e[0] + " " + e[0] + " " + e[1];
        h.btn.style.borderColor = t;
      }
      if (!jscolor.picker) {
        jscolor.picker = {
          box: document.createElement("div"),
          boxB: document.createElement("div"),
          pad: document.createElement("div"),
          padB: document.createElement("div"),
          padM: document.createElement("div"),
          sld: document.createElement("div"),
          sldB: document.createElement("div"),
          sldM: document.createElement("div"),
          btn: document.createElement("div"),
          btnS: document.createElement("span"),
          btnT: document.createTextNode(f.pickerCloseText),
        };
        for (var s = 0, n = 4; s < jscolor.images.sld[1]; s += n) {
          var a = document.createElement("div");
          (a.style.height = n + "px"),
            (a.style.fontSize = "1px"),
            (a.style.lineHeight = "0"),
            jscolor.picker.sld.appendChild(a);
        }
        jscolor.picker.sldB.appendChild(jscolor.picker.sld),
          jscolor.picker.box.appendChild(jscolor.picker.sldB),
          jscolor.picker.box.appendChild(jscolor.picker.sldM),
          jscolor.picker.padB.appendChild(jscolor.picker.pad),
          jscolor.picker.box.appendChild(jscolor.picker.padB),
          jscolor.picker.box.appendChild(jscolor.picker.padM),
          jscolor.picker.btnS.appendChild(jscolor.picker.btnT),
          jscolor.picker.btn.appendChild(jscolor.picker.btnS),
          jscolor.picker.box.appendChild(jscolor.picker.btn),
          jscolor.picker.boxB.appendChild(jscolor.picker.box);
      }
      var h = jscolor.picker;
      if (
        ((h.box.onmouseup = h.box.onmouseout =
          function () {
            e.focus();
          }),
        (h.box.onmousedown = function () {
          y = !0;
        }),
        (h.box.onmousemove = function (e) {
          (j || x) &&
            (j && d(e),
            x && p(e),
            document.selection
              ? document.selection.empty()
              : window.getSelection && window.getSelection().removeAllRanges(),
            m());
        }),
        "ontouchstart" in window)
      ) {
        var u = function (e) {
          var t = {
            offsetX: e.touches[0].pageX - w.X,
            offsetY: e.touches[0].pageY - w.Y,
          };
          (j || x) && (j && d(t), x && p(t), m()),
            e.stopPropagation(),
            e.preventDefault();
        };
        h.box.removeEventListener("touchmove", u, !1),
          h.box.addEventListener("touchmove", u, !1);
      }
      (h.padM.onmouseup = h.padM.onmouseout =
        function () {
          j && ((j = !1), jscolor.fireEvent(k, "change"));
        }),
        (h.padM.onmousedown = function (e) {
          switch (b) {
            case 0:
              0 === f.hsv[2] && f.fromHSV(null, null, 1);
              break;
            case 1:
              0 === f.hsv[1] && f.fromHSV(null, 1, null);
          }
          (x = !1), (j = !0), d(e), m();
        }),
        "ontouchstart" in window &&
          h.padM.addEventListener("touchstart", function (e) {
            (w = {
              X: e.target.offsetParent.offsetLeft,
              Y: e.target.offsetParent.offsetTop,
            }),
              this.onmousedown({
                offsetX: e.touches[0].pageX - w.X,
                offsetY: e.touches[0].pageY - w.Y,
              });
          }),
        (h.sldM.onmouseup = h.sldM.onmouseout =
          function () {
            x && ((x = !1), jscolor.fireEvent(k, "change"));
          }),
        (h.sldM.onmousedown = function (e) {
          (j = !1), (x = !0), p(e), m();
        }),
        "ontouchstart" in window &&
          h.sldM.addEventListener("touchstart", function (e) {
            (w = {
              X: e.target.offsetParent.offsetLeft,
              Y: e.target.offsetParent.offsetTop,
            }),
              this.onmousedown({
                offsetX: e.touches[0].pageX - w.X,
                offsetY: e.touches[0].pageY - w.Y,
              });
          });
      var g = i(f);
      (h.box.style.width = g[0] + "px"),
        (h.box.style.height = g[1] + "px"),
        (h.boxB.style.position = "absolute"),
        (h.boxB.style.clear = "both"),
        (h.boxB.style.left = t + "px"),
        (h.boxB.style.top = o + "px"),
        (h.boxB.style.zIndex = f.pickerZIndex),
        (h.boxB.style.border = f.pickerBorder + "px solid"),
        (h.boxB.style.borderColor = f.pickerBorderColor),
        (h.boxB.style.background = f.pickerFaceColor),
        (h.pad.style.width = jscolor.images.pad[0] + "px"),
        (h.pad.style.height = jscolor.images.pad[1] + "px"),
        (h.padB.style.position = "absolute"),
        (h.padB.style.left = f.pickerFace + "px"),
        (h.padB.style.top = f.pickerFace + "px"),
        (h.padB.style.border = f.pickerInset + "px solid"),
        (h.padB.style.borderColor = f.pickerInsetColor),
        (h.padM.style.position = "absolute"),
        (h.padM.style.left = "0"),
        (h.padM.style.top = "0"),
        (h.padM.style.width =
          f.pickerFace +
          2 * f.pickerInset +
          jscolor.images.pad[0] +
          jscolor.images.arrow[0] +
          "px"),
        (h.padM.style.height = h.box.style.height),
        (h.padM.style.cursor = "crosshair"),
        (h.sld.style.overflow = "hidden"),
        (h.sld.style.width = jscolor.images.sld[0] + "px"),
        (h.sld.style.height = jscolor.images.sld[1] + "px"),
        (h.sldB.style.display = f.slider ? "block" : "none"),
        (h.sldB.style.position = "absolute"),
        (h.sldB.style.right = f.pickerFace + "px"),
        (h.sldB.style.top = f.pickerFace + "px"),
        (h.sldB.style.border = f.pickerInset + "px solid"),
        (h.sldB.style.borderColor = f.pickerInsetColor),
        (h.sldM.style.display = f.slider ? "block" : "none"),
        (h.sldM.style.position = "absolute"),
        (h.sldM.style.right = "0"),
        (h.sldM.style.top = "0"),
        (h.sldM.style.width =
          jscolor.images.sld[0] +
          jscolor.images.arrow[0] +
          f.pickerFace +
          2 * f.pickerInset +
          "px"),
        (h.sldM.style.height = h.box.style.height);
      try {
        h.sldM.style.cursor = "pointer";
      } catch (v) {
        h.sldM.style.cursor = "hand";
      }
      (h.btn.style.display = f.pickerClosable ? "block" : "none"),
        (h.btn.style.position = "absolute"),
        (h.btn.style.left = f.pickerFace + "px"),
        (h.btn.style.bottom = f.pickerFace + "px"),
        (h.btn.style.padding = "0 15px"),
        (h.btn.style.height = "18px"),
        (h.btn.style.border = f.pickerInset + "px solid"),
        r(),
        (h.btn.style.color = f.pickerButtonColor),
        (h.btn.style.font = "12px sans-serif"),
        (h.btn.style.textAlign = "center");
      try {
        h.btn.style.cursor = "pointer";
      } catch (v) {
        h.btn.style.cursor = "hand";
      }
      switch (
        ((h.btn.onmousedown = function () {
          f.hidePicker();
        }),
        (h.btnS.style.lineHeight = h.btn.style.height),
        b)
      ) {
        case 0:
          var C = "hs.png";
          break;
        case 1:
          var C = "hv.png";
      }
      (h.padM.style.backgroundImage =
        "url('" + jscolor.getDir() + "cross.gif')"),
        (h.padM.style.backgroundRepeat = "no-repeat"),
        (h.sldM.style.backgroundImage =
          "url('" + jscolor.getDir() + "arrow.gif')"),
        (h.sldM.style.backgroundRepeat = "no-repeat"),
        (h.pad.style.backgroundImage = "url('" + jscolor.getDir() + C + "')"),
        (h.pad.style.backgroundRepeat = "no-repeat"),
        (h.pad.style.backgroundPosition = "0 0"),
        l(),
        c(),
        (jscolor.picker.owner = f),
        document.getElementsByTagName("body")[0].appendChild(h.boxB);
    }
    function i(e) {
      var t = [
        2 * e.pickerInset +
          2 * e.pickerFace +
          jscolor.images.pad[0] +
          (e.slider
            ? 2 * e.pickerInset +
              2 * jscolor.images.arrow[0] +
              jscolor.images.sld[0]
            : 0),
        e.pickerClosable
          ? 4 * e.pickerInset +
            3 * e.pickerFace +
            jscolor.images.pad[1] +
            e.pickerButtonHeight
          : 2 * e.pickerInset + 2 * e.pickerFace + jscolor.images.pad[1],
      ];
      return t;
    }
    function l() {
      switch (b) {
        case 0:
          var e = 1;
          break;
        case 1:
          var e = 2;
      }
      var t = Math.round((f.hsv[0] / 6) * (jscolor.images.pad[0] - 1)),
        o = Math.round((1 - f.hsv[e]) * (jscolor.images.pad[1] - 1));
      jscolor.picker.padM.style.backgroundPosition =
        f.pickerFace +
        f.pickerInset +
        t -
        Math.floor(jscolor.images.cross[0] / 2) +
        "px " +
        (f.pickerFace +
          f.pickerInset +
          o -
          Math.floor(jscolor.images.cross[1] / 2)) +
        "px";
      var s = jscolor.picker.sld.childNodes;
      switch (b) {
        case 0:
          for (var n = r(f.hsv[0], f.hsv[1], 1), i = 0; i < s.length; i += 1)
            s[i].style.backgroundColor =
              "rgb(" +
              n[0] * (1 - i / s.length) * 100 +
              "%," +
              n[1] * (1 - i / s.length) * 100 +
              "%," +
              n[2] * (1 - i / s.length) * 100 +
              "%)";
          break;
        case 1:
          var n,
            l,
            c = [f.hsv[2], 0, 0],
            i = Math.floor(f.hsv[0]),
            a = i % 2 ? f.hsv[0] - i : 1 - (f.hsv[0] - i);
          switch (i) {
            case 6:
            case 0:
              n = [0, 1, 2];
              break;
            case 1:
              n = [1, 0, 2];
              break;
            case 2:
              n = [2, 0, 1];
              break;
            case 3:
              n = [2, 1, 0];
              break;
            case 4:
              n = [1, 2, 0];
              break;
            case 5:
              n = [0, 2, 1];
          }
          for (var i = 0; i < s.length; i += 1)
            (l = 1 - (1 / (s.length - 1)) * i),
              (c[1] = c[0] * (1 - l * a)),
              (c[2] = c[0] * (1 - l)),
              (s[i].style.backgroundColor =
                "rgb(" +
                100 * c[n[0]] +
                "%," +
                100 * c[n[1]] +
                "%," +
                100 * c[n[2]] +
                "%)");
      }
    }
    function c() {
      switch (b) {
        case 0:
          var e = 2;
          break;
        case 1:
          var e = 1;
      }
      var t = Math.round((1 - f.hsv[e]) * (jscolor.images.sld[1] - 1));
      jscolor.picker.sldM.style.backgroundPosition =
        "0 " +
        (f.pickerFace +
          f.pickerInset +
          t -
          Math.floor(jscolor.images.arrow[1] / 2)) +
        "px";
    }
    function a() {
      return jscolor.picker && jscolor.picker.owner === f;
    }
    function h() {
      k === e && f.importColor(), f.pickerOnfocus && f.hidePicker();
    }
    function u() {
      k !== e && f.importColor();
    }
    function d(e) {
      var t = jscolor.getRelMousePos(e),
        o = t.x - f.pickerFace - f.pickerInset,
        r = t.y - f.pickerFace - f.pickerInset;
      switch (b) {
        case 0:
          f.fromHSV(
            o * (6 / (jscolor.images.pad[0] - 1)),
            1 - r / (jscolor.images.pad[1] - 1),
            null,
            I
          );
          break;
        case 1:
          f.fromHSV(
            o * (6 / (jscolor.images.pad[0] - 1)),
            null,
            1 - r / (jscolor.images.pad[1] - 1),
            I
          );
      }
    }
    function p(e) {
      var t = jscolor.getRelMousePos(e),
        o = t.y - f.pickerFace - f.pickerInset;
      switch (b) {
        case 0:
          f.fromHSV(null, null, 1 - o / (jscolor.images.sld[1] - 1), E);
          break;
        case 1:
          f.fromHSV(null, 1 - o / (jscolor.images.sld[1] - 1), null, E);
      }
    }
    function m() {
      if (f.onImmediateChange) {
        var e;
        (e =
          "string" == typeof f.onImmediateChange
            ? new Function(f.onImmediateChange)
            : f.onImmediateChange),
          e.call(f);
      }
    }
    (this.required = !0),
      (this.adjust = !0),
      (this.hash = !1),
      (this.caps = !0),
      (this.slider = !0),
      (this.valueElement = e),
      (this.styleElement = e),
      (this.onImmediateChange = null),
      (this.hsv = [0, 0, 1]),
      (this.rgb = [1, 1, 1]),
      (this.minH = 0),
      (this.maxH = 6),
      (this.minS = 0),
      (this.maxS = 1),
      (this.minV = 0),
      (this.maxV = 1),
      (this.pickerOnfocus = !0),
      (this.pickerMode = "HSV"),
      (this.pickerPosition = "bottom"),
      (this.pickerSmartPosition = !0),
      (this.pickerButtonHeight = 20),
      (this.pickerClosable = !1),
      (this.pickerCloseText = "Close"),
      (this.pickerButtonColor = "ButtonText"),
      (this.pickerFace = 10),
      (this.pickerFaceColor = "ThreeDFace"),
      (this.pickerBorder = 1),
      (this.pickerBorderColor =
        "ThreeDHighlight ThreeDShadow ThreeDShadow ThreeDHighlight"),
      (this.pickerInset = 1),
      (this.pickerInsetColor =
        "ThreeDShadow ThreeDHighlight ThreeDHighlight ThreeDShadow"),
      (this.pickerZIndex = 1e4);
    for (var g in t) t.hasOwnProperty(g) && (this[g] = t[g]);
    (this.hidePicker = function () {
      a() && s();
    }),
      (this.showPicker = function () {
        if (!a()) {
          var t,
            o,
            r,
            s = jscolor.getElementPos(e),
            l = jscolor.getElementSize(e),
            c = jscolor.getViewPos(),
            h = jscolor.getViewSize(),
            u = i(this);
          switch (this.pickerPosition.toLowerCase()) {
            case "left":
              (t = 1), (o = 0), (r = -1);
              break;
            case "right":
              (t = 1), (o = 0), (r = 1);
              break;
            case "top":
              (t = 0), (o = 1), (r = -1);
              break;
            default:
              (t = 0), (o = 1), (r = 1);
          }
          var d = (l[o] + u[o]) / 2;
          if (this.pickerSmartPosition)
            var p = [
              -c[t] + s[t] + u[t] > h[t] &&
              -c[t] + s[t] + l[t] / 2 > h[t] / 2 &&
              s[t] + l[t] - u[t] >= 0
                ? s[t] + l[t] - u[t]
                : s[t],
              -c[o] + s[o] + l[o] + u[o] - d + d * r > h[o]
                ? -c[o] + s[o] + l[o] / 2 > h[o] / 2 &&
                  s[o] + l[o] - d - d * r >= 0
                  ? s[o] + l[o] - d - d * r
                  : s[o] + l[o] - d + d * r
                : s[o] + l[o] - d + d * r >= 0
                ? s[o] + l[o] - d + d * r
                : s[o] + l[o] - d - d * r,
            ];
          else var p = [s[t], s[o] + l[o] - d + d * r];
          n(p[t], p[o]);
        }
      }),
      (this.importColor = function () {
        k
          ? this.adjust
            ? !this.required && /^\s*$/.test(k.value)
              ? ((k.value = ""),
                (v.style.backgroundImage = v.jscStyle.backgroundImage),
                (v.style.backgroundColor = v.jscStyle.backgroundColor),
                (v.style.color = v.jscStyle.color),
                this.exportColor(C | M))
              : this.fromString(k.value) || this.exportColor()
            : this.fromString(k.value, C) ||
              ((v.style.backgroundImage = v.jscStyle.backgroundImage),
              (v.style.backgroundColor = v.jscStyle.backgroundColor),
              (v.style.color = v.jscStyle.color),
              this.exportColor(C | M))
          : this.exportColor();
      }),
      (this.exportColor = function (e) {
        if (!(e & C) && k) {
          var t = this.toString();
          this.caps && (t = t.toUpperCase()),
            this.hash && (t = "#" + t),
            (k.value = t);
        }
        e & M ||
          !v ||
          ((v.style.backgroundImage = "none"),
          (v.style.backgroundColor = "#" + this.toString()),
          (v.style.color =
            0.213 * this.rgb[0] + 0.715 * this.rgb[1] + 0.072 * this.rgb[2] <
            0.5
              ? "#FFF"
              : "#000")),
          e & E || !a() || l(),
          e & I || !a() || c();
      }),
      (this.fromHSV = function (e, t, o, s) {
        null !== e && (e = Math.max(0, this.minH, Math.min(6, this.maxH, e))),
          null !== t && (t = Math.max(0, this.minS, Math.min(1, this.maxS, t))),
          null !== o && (o = Math.max(0, this.minV, Math.min(1, this.maxV, o))),
          (this.rgb = r(
            null === e ? this.hsv[0] : (this.hsv[0] = e),
            null === t ? this.hsv[1] : (this.hsv[1] = t),
            null === o ? this.hsv[2] : (this.hsv[2] = o)
          )),
          this.exportColor(s);
      }),
      (this.fromRGB = function (e, t, s, n) {
        null !== e && (e = Math.max(0, Math.min(1, e))),
          null !== t && (t = Math.max(0, Math.min(1, t))),
          null !== s && (s = Math.max(0, Math.min(1, s)));
        var i = o(
          null === e ? this.rgb[0] : e,
          null === t ? this.rgb[1] : t,
          null === s ? this.rgb[2] : s
        );
        null !== i[0] &&
          (this.hsv[0] = Math.max(0, this.minH, Math.min(6, this.maxH, i[0]))),
          0 !== i[2] &&
            (this.hsv[1] =
              null === i[1]
                ? null
                : Math.max(0, this.minS, Math.min(1, this.maxS, i[1]))),
          (this.hsv[2] =
            null === i[2]
              ? null
              : Math.max(0, this.minV, Math.min(1, this.maxV, i[2])));
        var l = r(this.hsv[0], this.hsv[1], this.hsv[2]);
        (this.rgb[0] = l[0]),
          (this.rgb[1] = l[1]),
          (this.rgb[2] = l[2]),
          this.exportColor(n);
      }),
      (this.fromString = function (e, t) {
        var o = e.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i);
        return o
          ? (6 === o[1].length
              ? this.fromRGB(
                  parseInt(o[1].substr(0, 2), 16) / 255,
                  parseInt(o[1].substr(2, 2), 16) / 255,
                  parseInt(o[1].substr(4, 2), 16) / 255,
                  t
                )
              : this.fromRGB(
                  parseInt(o[1].charAt(0) + o[1].charAt(0), 16) / 255,
                  parseInt(o[1].charAt(1) + o[1].charAt(1), 16) / 255,
                  parseInt(o[1].charAt(2) + o[1].charAt(2), 16) / 255,
                  t
                ),
            !0)
          : !1;
      }),
      (this.toString = function () {
        return (
          (256 | Math.round(255 * this.rgb[0])).toString(16).substr(1) +
          (256 | Math.round(255 * this.rgb[1])).toString(16).substr(1) +
          (256 | Math.round(255 * this.rgb[2])).toString(16).substr(1)
        );
      });
    var f = this,
      b = "hvs" === this.pickerMode.toLowerCase() ? 1 : 0,
      y = !1,
      k = jscolor.fetchElement(this.valueElement),
      v = jscolor.fetchElement(this.styleElement),
      j = !1,
      x = !1,
      w = {},
      C = 1,
      M = 2,
      E = 4,
      I = 8;
    jscolor.isColorAttrSupported = !1;
    var S = document.createElement("input");
    if (
      (S.setAttribute &&
        (S.setAttribute("type", "color"),
        "color" == S.type.toLowerCase() && (jscolor.isColorAttrSupported = !0)),
      jscolor.addEvent(e, "focus", function () {
        f.pickerOnfocus && f.showPicker();
      }),
      jscolor.addEvent(e, "blur", function () {
        y
          ? (y = !1)
          : window.setTimeout(function () {
              y || h(), (y = !1);
            }, 0);
      }),
      k)
    ) {
      var B = function () {
        f.fromString(k.value, C), m();
      };
      jscolor.addEvent(k, "keyup", B),
        jscolor.addEvent(k, "input", B),
        jscolor.addEvent(k, "blur", u),
        k.setAttribute("autocomplete", "off");
    }
    switch (
      (v &&
        (v.jscStyle = {
          backgroundImage: v.style.backgroundImage,
          backgroundColor: v.style.backgroundColor,
          color: v.style.color,
        }),
      b)
    ) {
      case 0:
        jscolor.requireImage("hs.png");
        break;
      case 1:
        jscolor.requireImage("hv.png");
    }
    jscolor.requireImage("cross.gif"),
      jscolor.requireImage("arrow.gif"),
      this.importColor();
  },
};
jscolor.install();
