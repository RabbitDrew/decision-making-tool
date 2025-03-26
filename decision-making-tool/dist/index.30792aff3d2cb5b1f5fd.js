(() => {
  'use strict';
  var t = {
      23: (t, e) => {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = {
            optionNavTitles: [
              'Add Option',
              'Paste List',
              'Clear List',
              'Save List to File',
              'Load List from File',
            ],
          });
      },
      34: (t, e) => {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = class {
            static createElement(t, e) {
              const n = document.createElement(t);
              if (n) return n instanceof Element && (n.className = e), n;
              throw new Error('Failed to create element');
            }
            static renderElement(t, e) {
              t.append(e);
            }
          });
      },
      38: (t, e, n) => {
        n.r(e), n.d(e, { default: () => b });
        var i = n(72),
          o = n.n(i),
          r = n(825),
          a = n.n(r),
          l = n(659),
          s = n.n(l),
          c = n(56),
          p = n.n(c),
          d = n(540),
          u = n.n(d),
          f = n(113),
          m = n.n(f),
          h = n(947),
          g = {};
        (g.styleTagTransform = m()),
          (g.setAttributes = p()),
          (g.insert = s().bind(null, 'head')),
          (g.domAPI = a()),
          (g.insertStyleElement = u()),
          o()(h.A, g);
        const b = h.A && h.A.locals ? h.A.locals : void 0;
      },
      56: (t, e, n) => {
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute('nonce', e);
        };
      },
      72: (t) => {
        var e = [];
        function n(t) {
          for (var n = -1, i = 0; i < e.length; i++)
            if (e[i].identifier === t) {
              n = i;
              break;
            }
          return n;
        }
        function i(t, i) {
          for (var r = {}, a = [], l = 0; l < t.length; l++) {
            var s = t[l],
              c = i.base ? s[0] + i.base : s[0],
              p = r[c] || 0,
              d = ''.concat(c, ' ').concat(p);
            r[c] = p + 1;
            var u = n(d),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== u) e[u].references++, e[u].updater(f);
            else {
              var m = o(f, i);
              (i.byIndex = l),
                e.splice(l, 0, { identifier: d, updater: m, references: 1 });
            }
            a.push(d);
          }
          return a;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var r = i((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < r.length; a++) {
              var l = n(r[a]);
              e[l].references--;
            }
            for (var s = i(t, o), c = 0; c < r.length; c++) {
              var p = n(r[c]);
              0 === e[p].references && (e[p].updater(), e.splice(p, 1));
            }
            r = s;
          };
        };
      },
      86: function (t, e, n) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, '__esModule', { value: !0 });
        const o = i(n(974)),
          r = i(n(996));
        e.default = class {
          static openPasteList() {
            r.default.pasteList();
          }
          static closePasteList(t) {
            const e = (0, o.default)('.page-modal');
            if (t instanceof KeyboardEvent && 'Escape' === t.code)
              e instanceof Element && e.remove();
            else if (t.target instanceof HTMLElement) {
              const n = t.target.closest('.paste-list-btn-title');
              (null == n ? void 0 : n.closest('.paste-list-btn-cancel')) &&
                e instanceof Element &&
                e.remove(),
                e && t.target === e && e.remove();
            }
          }
        };
      },
      113: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      132: function (t, e, n) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, '__esModule', { value: !0 }), n(38);
        const o = i(n(974)),
          r = i(n(34)),
          a = i(n(684)),
          l = i(n(23));
        class s extends r.default {
          static renderMain() {
            const t = (0, o.default)('.page'),
              e = this.createElement('main', 'page-main'),
              n = this.createMainOptionSection();
            this.renderElement(e, n),
              t instanceof Element && this.renderElement(t, e);
          }
          static createMainOptionSection() {
            const t = this.createElement('section', 'main-option__wrapper'),
              e = this.createElement('ul', 'main-option-list');
            this.renderElement(t, e);
            const n = (0, a.default)(1, '', null);
            this.renderElement(e, n);
            const i = this.createMainNavOptions();
            this.renderElement(t, i);
            const o = this.createMainBtnDecision();
            return this.renderElement(t, o), t;
          }
          static createMainNavOptions() {
            const t = this.createElement('ul', 'option-nav');
            return (
              l.default.optionNavTitles.forEach((e) => {
                const n = this.createElement('li', 'option-nav-item'),
                  i = this.createElement('h2', 'option-nav-title');
                (i.textContent = e),
                  this.renderElement(n, i),
                  this.renderElement(t, n);
              }),
              t
            );
          }
          static createMainBtnDecision() {
            const t = this.createElement('div', 'main-decision-btn'),
              e = this.createElement('h2', 'decision-btn-title');
            return (
              (e.textContent = 'Let me help you make a decision'),
              this.renderElement(t, e),
              t
            );
          }
        }
        s.renderMain();
      },
      182: (t, e, n) => {
        n.r(e), n.d(e, { default: () => b });
        var i = n(72),
          o = n.n(i),
          r = n(825),
          a = n.n(r),
          l = n(659),
          s = n.n(l),
          c = n(56),
          p = n.n(c),
          d = n(540),
          u = n.n(d),
          f = n(113),
          m = n.n(f),
          h = n(827),
          g = {};
        (g.styleTagTransform = m()),
          (g.setAttributes = p()),
          (g.insert = s().bind(null, 'head')),
          (g.domAPI = a()),
          (g.insertStyleElement = u()),
          o()(h.A, g);
        const b = h.A && h.A.locals ? h.A.locals : void 0;
      },
      314: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = '',
                  i = void 0 !== e[5];
                return (
                  e[4] && (n += '@supports ('.concat(e[4], ') {')),
                  e[2] && (n += '@media '.concat(e[2], ' {')),
                  i &&
                    (n += '@layer'.concat(
                      e[5].length > 0 ? ' '.concat(e[5]) : '',
                      ' {'
                    )),
                  (n += t(e)),
                  i && (n += '}'),
                  e[2] && (n += '}'),
                  e[4] && (n += '}'),
                  n
                );
              }).join('');
            }),
            (e.i = function (t, n, i, o, r) {
              'string' == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (i)
                for (var l = 0; l < this.length; l++) {
                  var s = this[l][0];
                  null != s && (a[s] = !0);
                }
              for (var c = 0; c < t.length; c++) {
                var p = [].concat(t[c]);
                (i && a[p[0]]) ||
                  (void 0 !== r &&
                    (void 0 === p[5] ||
                      (p[1] = '@layer'
                        .concat(p[5].length > 0 ? ' '.concat(p[5]) : '', ' {')
                        .concat(p[1], '}')),
                    (p[5] = r)),
                  n &&
                    (p[2]
                      ? ((p[1] = '@media '
                          .concat(p[2], ' {')
                          .concat(p[1], '}')),
                        (p[2] = n))
                      : (p[2] = n)),
                  o &&
                    (p[4]
                      ? ((p[1] = '@supports ('
                          .concat(p[4], ') {')
                          .concat(p[1], '}')),
                        (p[4] = o))
                      : (p[4] = ''.concat(o))),
                  e.push(p));
              }
            }),
            e
          );
        };
      },
      417: (t) => {
        t.exports = function (t, e) {
          return (
            e || (e = {}),
            t
              ? ((t = String(t.__esModule ? t.default : t)),
                /^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
                e.hash && (t += e.hash),
                /["'() \t\n]|(%20)/.test(t) || e.needQuotes
                  ? '"'.concat(
                      t.replace(/"/g, '\\"').replace(/\n/g, '\\n'),
                      '"'
                    )
                  : t)
              : t
          );
        };
      },
      434: function (t, e, n) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, '__esModule', { value: !0 }), n(182);
        const o = i(n(974)),
          r = i(n(34));
        class a extends r.default {
          constructor() {
            super();
          }
          static createHeader() {
            const t = (0, o.default)('.page'),
              e = this.createElement('header', 'page-header'),
              n = this.createElement('h2', 'header-logo-title');
            (n.textContent = 'Decision making tool'),
              this.renderElement(e, n),
              t && t instanceof Element && this.renderElement(t, e);
          }
        }
        a.createHeader();
      },
      465: (t, e, n) => {
        Object.defineProperty(e, '__esModule', { value: !0 }), n(798);
        const i = document.querySelector('body');
        i instanceof HTMLElement && (i.className = 'page');
      },
      540: (t) => {
        t.exports = function (t) {
          var e = document.createElement('style');
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      601: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      639: (t, e, n) => {
        n.r(e), n.d(e, { default: () => b });
        var i = n(72),
          o = n.n(i),
          r = n(825),
          a = n.n(r),
          l = n(659),
          s = n.n(l),
          c = n(56),
          p = n.n(c),
          d = n(540),
          u = n.n(d),
          f = n(113),
          m = n.n(f),
          h = n(852),
          g = {};
        (g.styleTagTransform = m()),
          (g.setAttributes = p()),
          (g.insert = s().bind(null, 'head')),
          (g.domAPI = a()),
          (g.insertStyleElement = u()),
          o()(h.A, g);
        const b = h.A && h.A.locals ? h.A.locals : void 0;
      },
      655: function (t, e, n) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, '__esModule', { value: !0 });
        const o = i(n(974)),
          r = i(n(936)),
          a = i(n(86));
        class l {
          static handlers() {
            this.addOptionHandler(), this.pastListItemHandler();
          }
          static addOptionHandler() {
            this.getOptionsItems(),
              this._optionItems instanceof NodeList &&
                this._optionItems[0].addEventListener('click', () => {
                  r.default.addOptionItem();
                });
          }
          static pastListItemHandler() {
            this.getOptionsItems(),
              this._optionItems instanceof NodeList &&
                this._optionItems[1].addEventListener('click', () => {
                  a.default.openPasteList();
                });
          }
          static getOptionsItems() {
            if (
              ((this._optionItems = (0, o.default)('.option-nav-item')),
              this._optionItems && this._optionItems instanceof NodeList)
            )
              return this._optionItems;
          }
        }
        (l._optionItems = (0, o.default)('.option-nav-item')), l.handlers();
      },
      659: (t) => {
        var e = {};
        t.exports = function (t, n) {
          var i = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!i)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          i.appendChild(n);
        };
      },
      684: function (t, e, n) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, '__esModule', { value: !0 });
        const o = i(n(34));
        e.default = (t, e, n) => {
          const i = o.default.createElement('li', 'opton-item'),
            r = o.default.createElement('h2', 'item-id');
          (r.textContent = `#${t}`), o.default.renderElement(i, r);
          const a = o.default.createElement('div', 'item-input-title__wrapper'),
            l = o.default.createElement('input', 'item-input-title');
          l instanceof HTMLInputElement &&
            ((l.type = 'text'),
            (l.placeholder = 'Decision title'),
            (l.value = e)),
            o.default.renderElement(a, l);
          const s = o.default.createElement('div', 'input-style-line');
          o.default.renderElement(a, s);
          const c = o.default.createElement(
              'div',
              'item-input-weight__wrapper'
            ),
            p = o.default.createElement('input', 'item-input-weight');
          p instanceof HTMLInputElement &&
            ((p.type = 'number'),
            (p.placeholder = 'Weight'),
            (p.value = n ? n.toString() : '')),
            o.default.renderElement(c, p);
          const d = o.default.createElement('div', 'input-style-line');
          o.default.renderElement(c, d),
            o.default.renderElement(i, a),
            o.default.renderElement(i, c);
          const u = o.default.createElement('div', 'item-delete-btn'),
            f = o.default.createElement('h2', 'delete-btn-title');
          return (
            (f.textContent = 'Delete'),
            o.default.renderElement(u, f),
            o.default.renderElement(i, u),
            i
          );
        };
      },
      798: (t, e, n) => {
        n.r(e), n.d(e, { default: () => b });
        var i = n(72),
          o = n.n(i),
          r = n(825),
          a = n.n(r),
          l = n(659),
          s = n.n(l),
          c = n(56),
          p = n.n(c),
          d = n(540),
          u = n.n(d),
          f = n(113),
          m = n.n(f),
          h = n(799),
          g = {};
        (g.styleTagTransform = m()),
          (g.setAttributes = p()),
          (g.insert = s().bind(null, 'head')),
          (g.domAPI = a()),
          (g.insertStyleElement = u()),
          o()(h.A, g);
        const b = h.A && h.A.locals ? h.A.locals : void 0;
      },
      799: (t, e, n) => {
        n.d(e, { A: () => u });
        var i = n(601),
          o = n.n(i),
          r = n(314),
          a = n.n(r),
          l = n(417),
          s = n.n(l),
          c = new URL(n(834), n.b),
          p = a()(o()),
          d = s()(c);
        p.push([
          t.id,
          `.page{min-width:320px;max-width:100%;width:100%;min-height:100vh;margin:0 auto;padding:0;font-size:15px;font-family:"comforta",sans-serif;color:#000;display:flex;flex:1;flex-direction:column;justify-content:start;align-items:center;position:relative}.page::before{content:"";width:100%;height:100%;background-image:url(${d});background-position:center;background-size:cover;background-repeat:no-repeat;filter:blur(2px);position:absolute;top:0;left:0;z-index:-1}*{scroll-behavior:smooth}*,*:before,*:after{box-sizing:border-box}a,h1,h2,h3,h4,h5,h6,p{margin:0;text-decoration:none}ul,li{padding:0;margin:0;list-style-type:none}:root{--font-color: #666666;--accent-color: #46cbff;--placeholder-font-color: #a0a0a0}input[type=number]::-webkit-outer-spin-button,input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}`,
          '',
        ]);
        const u = p;
      },
      825: (t) => {
        t.exports = function (t) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var i = '';
                n.supports && (i += '@supports ('.concat(n.supports, ') {')),
                  n.media && (i += '@media '.concat(n.media, ' {'));
                var o = void 0 !== n.layer;
                o &&
                  (i += '@layer'.concat(
                    n.layer.length > 0 ? ' '.concat(n.layer) : '',
                    ' {'
                  )),
                  (i += n.css),
                  o && (i += '}'),
                  n.media && (i += '}'),
                  n.supports && (i += '}');
                var r = n.sourceMap;
                r &&
                  'undefined' != typeof btoa &&
                  (i +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                      ' */'
                    )),
                  e.styleTagTransform(i, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      827: (t, e, n) => {
        n.d(e, { A: () => l });
        var i = n(601),
          o = n.n(i),
          r = n(314),
          a = n.n(r)()(o());
        a.push([
          t.id,
          '.page-header{max-width:1440px;width:100%;display:flex;justify-content:start;align-items:center;padding:20px 60px}.page-header .header-logo-title{font-size:36px;font-weight:600;font-style:normal;letter-spacing:1px;color:var(--font-color);position:relative}.page-header .header-logo-title::before{content:"";width:100%;height:5px;background-color:var(--accent-color);position:absolute;bottom:-7px;left:0;border-radius:2px}',
          '',
        ]);
        const l = a;
      },
      829: function (t, e, n) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, '__esModule', { value: !0 });
        const o = i(n(936));
        document.addEventListener('click', (t) => {
          o.default.deleteOption(t);
        });
      },
      834: (t, e, n) => {
        t.exports = n.p + 'assets/bg-decision-maker.jpg';
      },
      852: (t, e, n) => {
        n.d(e, { A: () => l });
        var i = n(601),
          o = n.n(i),
          r = n(314),
          a = n.n(r)()(o());
        a.push([
          t.id,
          '.modal-text-area__wrapper{display:flex;flex-direction:column;align-items:center;gap:10px;padding:10px;background-color:hsla(0,0%,100%,.75);border-radius:10px}.modal-text-area__wrapper .textarea__wrapper{max-width:900px;width:100%;border-bottom:5px var(--accent-color) solid}.modal-text-area__wrapper .textarea__wrapper .textarea{resize:none;width:100%;height:350px;background:rgba(0,0,0,0);border:none;font-size:21px;font-weight:600;font-style:normal;letter-spacing:1px;color:var(--font-color)}.modal-text-area__wrapper .textarea__wrapper .csv-textarea:focus{outline:none}.modal-text-area__wrapper .textarea__wrapper .csv-textarea::placeholder{font-size:18px;font-weight:600;font-style:normal;letter-spacing:1px;color:var(--font-color)}.modal-text-area__wrapper .paste-list-btns__wrapper{width:100%;display:flex;justify-content:center;align-items:center;gap:60px}.modal-text-area__wrapper .paste-list-btns__wrapper .paste-list-btn-cancel,.modal-text-area__wrapper .paste-list-btns__wrapper .paste-list-btn-confirm{max-width:200px;width:100%;padding:10px;border:3px var(--font-color) solid;border-radius:5px;display:flex;justify-content:center;align-items:center;cursor:pointer;transition:border .3s ease}.modal-text-area__wrapper .paste-list-btns__wrapper .paste-list-btn-cancel .paste-list-btn-title,.modal-text-area__wrapper .paste-list-btns__wrapper .paste-list-btn-confirm .paste-list-btn-title{font-size:23px;font-weight:600;font-style:normal;letter-spacing:1px;color:var(--font-color);transition:color .3s ease}.modal-text-area__wrapper .paste-list-btns__wrapper .paste-list-btn-confirm:hover,.modal-text-area__wrapper .paste-list-btns__wrapper .paste-list-btn-cancel:hover{border-color:#cc582b}.modal-text-area__wrapper .paste-list-btns__wrapper .paste-list-btn-confirm:hover .paste-list-btn-title,.modal-text-area__wrapper .paste-list-btns__wrapper .paste-list-btn-cancel:hover .paste-list-btn-title{color:#cc582b}.modal-warn{width:380px;height:180px;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:hsla(0,0%,100%,.75);border-radius:10px;gap:20px;padding:5px}.modal-warn .warn-title__wrapper{width:100%;display:flex;justify-content:center;align-items:center}.modal-warn .warn-title__wrapper .warn-title{font-size:18px;font-weight:600;font-style:normal;letter-spacing:1px;color:var(--font-color);text-align:center}.modal-warn .warn-cancel-btn{width:50%;display:flex;justify-content:center;align-items:center;border:3px var(--font-color) solid;border-radius:5px;transition:border .5s ease;cursor:pointer}.modal-warn .warn-cancel-btn .cancel-btn-title{font-size:21px;font-weight:600;font-style:normal;letter-spacing:1px;color:var(--font-color);transition:color .5s ease}.modal-warn .warn-cancel-btn:hover{border-color:#cc582b}.modal-warn .warn-cancel-btn:hover .cancel-btn-title{color:#cc582b}.page-modal{width:100%;height:100%;display:flex;justify-content:center;align-items:center;position:fixed;top:0;left:0;z-index:2;background-color:rgba(0,0,0,.3)}',
          '',
        ]);
        const l = a;
      },
      918: function (t, e, n) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, '__esModule', { value: !0 });
        const o = i(n(86));
        (class {
          static cancelBtn() {
            document.addEventListener('click', (t) => {
              o.default.closePasteList(t);
            }),
              document.addEventListener('keydown', (t) => {
                'Escape' == t.code && o.default.closePasteList(t);
              });
          }
        }).cancelBtn();
      },
      936: function (t, e, n) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, '__esModule', { value: !0 });
        const o = i(n(974)),
          r = i(n(684)),
          a = i(n(34));
        e.default = class {
          static addOptionItem() {
            const t = (0, o.default)('.main-option-list');
            let e = this.getitemOptionId();
            if (e && t && t instanceof Element) {
              e++;
              const n = (0, r.default)(e, '', null);
              a.default.renderElement(t, n);
            } else if (!e && t && t instanceof Element) {
              const e = (0, r.default)(1, '', null);
              a.default.renderElement(t, e);
            }
          }
          static deleteOption(t) {
            const e = (0, o.default)('.delete-btn-title');
            if (t.target instanceof Element)
              if (e && e instanceof HTMLElement) {
                const n = e.closest('.item-delete-btn');
                if (n && (t.target === e || t.target === n)) {
                  const t = n.closest('.opton-item');
                  t && t.remove();
                }
              } else
                e &&
                  e instanceof NodeList &&
                  e.forEach((e) => {
                    if (e && e instanceof HTMLElement) {
                      const n = e.closest('.item-delete-btn');
                      if (n && (t.target === e || t.target === n)) {
                        const t = n.closest('.opton-item');
                        t && t.remove();
                      }
                    }
                  });
          }
          static getitemOptionId() {
            var t;
            const e = (0, o.default)('.item-id');
            if (e) {
              if (e instanceof NodeList && 0 === e.length) return 1;
              if (e instanceof HTMLElement)
                return Number(
                  null === (t = e.textContent) || void 0 === t
                    ? void 0
                    : t.replace('#', '')
                );
              if (e instanceof NodeList) {
                const t = Array.from(e).map((t) => {
                  var e;
                  return Number(
                    null === (e = t.textContent) || void 0 === e
                      ? void 0
                      : e.replace('#', '')
                  );
                });
                return Math.max(...t.filter((t) => 'number' == typeof t));
              }
            }
          }
        };
      },
      947: (t, e, n) => {
        n.d(e, { A: () => l });
        var i = n(601),
          o = n.n(i),
          r = n(314),
          a = n.n(r)()(o());
        a.push([
          t.id,
          '.page-main{max-width:1440px;width:100%;display:flex;flex:1;flex-direction:column;justify-content:center;align-items:center}.page-main .main-option__wrapper{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px}.main-option-list{width:60%;background-color:hsla(0,0%,100%,.75);display:flex;flex-direction:column;align-items:center;border-radius:10px;gap:10px;padding:20px 5px}.main-option-list .opton-item{width:100%;display:flex;justify-content:center;align-items:center;gap:10px}.main-option-list .opton-item .item-id{font-size:23px;font-weight:600;font-style:normal;letter-spacing:1px;color:var(--font-color);height:100%;align-self:flex-end}.main-option-list .opton-item .item-input-title__wrapper{height:35px;display:flex;flex:1;justify-content:center;align-items:start;position:relative}.main-option-list .opton-item .item-input-title__wrapper .item-input-title{width:100%;height:100%;background:rgba(0,0,0,0);border:rgba(0,0,0,0);font-size:18px;font-weight:600;font-style:normal;letter-spacing:1px;color:var(--font-color)}.main-option-list .opton-item .item-input-title__wrapper .item-input-title::placeholder{font-size:18px;font-weight:600;font-style:normal;letter-spacing:1px;color:var(--placeholder-font-color)}.main-option-list .opton-item .item-input-weight__wrapper{width:15%;height:35px;display:flex;justify-content:center;align-items:start;position:relative}.main-option-list .opton-item .item-input-weight__wrapper .item-input-weight{width:100%;height:100%;background:rgba(0,0,0,0);border:rgba(0,0,0,0);font-size:18px;font-weight:600;font-style:normal;letter-spacing:1px;color:var(--font-color)}.main-option-list .opton-item .item-input-weight__wrapper .item-input-weight::placeholder{font-size:18px;font-weight:600;font-style:normal;letter-spacing:1px;color:var(--placeholder-font-color)}.main-option-list .opton-item .input-style-line{width:100%;height:3px;background-color:var(--accent-color);position:absolute;bottom:0;left:0;border-radius:2px;transition:background-color .3s ease}.main-option-list .opton-item .item-input-weight:focus,.main-option-list .opton-item .item-input-title:focus{outline:none}.main-option-list .opton-item .item-input-weight:focus~.input-style-line,.main-option-list .opton-item .item-input-title:focus~.input-style-line{background-color:#cc582b}.main-option-list .opton-item .item-delete-btn{height:40px;display:flex;justify-content:center;align-items:end;cursor:pointer}.main-option-list .opton-item .item-delete-btn .delete-btn-title{font-size:23px;font-weight:600;font-style:normal;letter-spacing:1px;color:var(--font-color);transition:color .3s ease}.main-option-list .opton-item .item-delete-btn:hover .delete-btn-title{color:#cc582b}.option-nav{width:60%;display:flex;flex-direction:column;align-items:center;gap:10px}.option-nav .option-nav-item{width:100%;display:flex;justify-content:center;align-items:center;border:3px var(--font-color) solid;border-radius:5px;transition:border .5s ease;background-color:hsla(0,0%,100%,.75);cursor:pointer}.option-nav .option-nav-item .option-nav-title{font-size:23px;font-weight:600;font-style:normal;letter-spacing:1px;color:var(--font-color);transition:color .5s ease}.option-nav .option-nav-item:hover{border-color:#cc582b}.option-nav .option-nav-item:hover .option-nav-title{color:#cc582b}.main-decision-btn{width:60%;display:flex;flex-direction:column;align-items:center;justify-content:center;border:3px var(--font-color) solid;border-radius:5px;padding:10px 5px;cursor:pointer;transition:border .5s ease;background-color:hsla(0,0%,100%,.75)}.main-decision-btn .decision-btn-title{font-size:23px;font-weight:600;font-style:normal;letter-spacing:1px;color:var(--font-color);transition:color .5s ease}.main-decision-btn:hover{border-color:#cc582b}.main-decision-btn:hover .decision-btn-title{color:#cc582b}',
          '',
        ]);
        const l = a;
      },
      974: (t, e) => {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = (t) => {
            const e = document.querySelectorAll(t),
              n = e[0];
            return 1 === e.length
              ? n instanceof Element
                ? n
                : void 0
              : e instanceof NodeList
                ? e
                : void 0;
          });
      },
      996: function (t, e, n) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, '__esModule', { value: !0 }), n(639);
        const o = i(n(974)),
          r = i(n(34));
        class a extends r.default {
          constructor() {
            super();
          }
          static pasteList() {
            const t = (0, o.default)('.page-main'),
              e = this.createElement('section', 'page-modal'),
              n = this.createElement('div', 'modal-text-area__wrapper');
            this.renderElement(e, n);
            const i = this.pasteListTextArea();
            this.renderElement(n, i);
            const r = this.pasteListBtns();
            this.renderElement(n, r),
              t instanceof Element && this.renderElement(t, e);
          }
          static pasteListTextArea() {
            const t = this.createElement('div', 'textarea__wrapper'),
              e = this.createElement('textarea', 'textarea');
            return (
              e instanceof HTMLTextAreaElement &&
                ((e.rows = 12),
                (e.cols = 64),
                (e.placeholder =
                  'Paste a list of new options in a CSV-like format:\ntitle,1 -> | title | 1 |\ntitle with whitespace,2 -> | title with whitespace | 2 |\ntitle , with , commas,3 -> | title , with , commas | 3 |\ntitle with "quotes",4   -> | title with "quotes"   | 4 |\n'),
                (e.name = 'table')),
              this.renderElement(t, e),
              t
            );
          }
          static pasteListBtns() {
            const t = this.createElement('div', 'paste-list-btns__wrapper'),
              e = this.createElement('div', 'paste-list-btn-cancel'),
              n = this.createElement('h2', 'paste-list-btn-title');
            (n.textContent = 'Cancel'),
              this.renderElement(e, n),
              this.renderElement(t, e);
            const i = this.createElement('div', 'paste-list-btn-confirm'),
              o = this.createElement('h2', 'paste-list-btn-title');
            return (
              (o.textContent = 'Confirm'),
              this.renderElement(i, o),
              this.renderElement(t, i),
              t
            );
          }
        }
        e.default = a;
      },
    },
    e = {};
  function n(i) {
    var o = e[i];
    if (void 0 !== o) return o.exports;
    var r = (e[i] = { id: i, exports: {} });
    return t[i].call(r.exports, r, r.exports, n), r.exports;
  }
  (n.m = t),
    (n.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return n.d(e, { a: e }), e;
    }),
    (n.d = (t, e) => {
      for (var i in e)
        n.o(e, i) &&
          !n.o(t, i) &&
          Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
    }),
    (n.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (t) {
        if ('object' == typeof window) return window;
      }
    })()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.r = (t) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (() => {
      var t;
      n.g.importScripts && (t = n.g.location + '');
      var e = n.g.document;
      if (
        !t &&
        e &&
        (e.currentScript &&
          'SCRIPT' === e.currentScript.tagName.toUpperCase() &&
          (t = e.currentScript.src),
        !t)
      ) {
        var i = e.getElementsByTagName('script');
        if (i.length)
          for (var o = i.length - 1; o > -1 && (!t || !/^http(s?):/.test(t)); )
            t = i[o--].src;
      }
      if (!t)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (t = t
        .replace(/^blob:/, '')
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (n.p = t);
    })(),
    (n.b = document.baseURI || self.location.href),
    (n.nc = void 0),
    n(465),
    n(434),
    n(132),
    n(655),
    n(829),
    n(918);
})();
