(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405],
    {
        5557: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/',
                function () {
                    return t(7890);
                },
            ]);
        },
        7890: function (e, n, t) {
            'use strict';
            t.r(n),
                t.d(n, {
                    default: function () {
                        return y;
                    },
                });
            var r = t(5893),
                i = t(9008),
                c = t.n(i),
                s = t(1163),
                o = t(7088),
                a = t.n(o);
            function d(e) {
                e.children;
                return (0, r.jsx)('div', { className: a().header });
            }
            var l = t(8947),
                h = t(1417),
                m = t(7814),
                u = (t(7720), t(2077)),
                _ = t.n(u);
            function f(e) {
                e.children;
                var n = new Date().getFullYear();
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)('footer', {
                        className: _().footer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: _().socialmedia,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: _().facebook,
                                        children: (0, r.jsx)('a', {
                                            href: 'https://www.facebook.com/AweAndReverence',
                                            title: 'Awe & Reverence on Facebook',
                                            target: '_blank',
                                            children: (0, r.jsx)('div', {
                                                className: _().icon,
                                                children: (0, r.jsx)(m.G, {
                                                    icon: ['fab', 'facebook-f'],
                                                }),
                                            }),
                                        }),
                                    }),
                                    (0, r.jsx)('div', {
                                        className: _().twitter,
                                        children: (0, r.jsx)('a', {
                                            href: 'https://twitter.com/aweandreverence',
                                            title: 'theology101 on Twitter',
                                            target: '_blank',
                                            children: (0, r.jsx)('div', {
                                                className: _().icon,
                                                children: (0, r.jsx)(m.G, {
                                                    icon: ['fab', 'twitter'],
                                                }),
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)('div', {
                                className: _().copyright,
                                children: (0, r.jsxs)('p', {
                                    children: ['\xa9 theology101.church ', n],
                                }),
                            }),
                        ],
                    }),
                });
            }
            function g() {
                return (0, r.jsx)(r.Fragment, {});
            }
            l.vI.add(h.vnX, h.AYu, h.mdU);
            var j = t(5906);
            function x(e) {
                var n =
                    "\nwindow.dataLayer = window.dataLayer || [];\nfunction gtag() {\n    dataLayer.push(arguments);\n}\ngtag('js', new Date());\n\ngtag('config', '".concat(
                        e.trackingId,
                        "');\n"
                    );
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)(c(), {
                        children: [
                            (0, r.jsx)(
                                'script',
                                {
                                    async: !0,
                                    src:
                                        'https://www.googletagmanager.com/gtag/js?id=' +
                                        e.trackingId,
                                },
                                'google-analytics'
                            ),
                            (0, r.jsx)(j.Z.script, { children: n }),
                        ],
                    }),
                });
            }
            function p() {
                return (0, r.jsx)(x, { trackingId: 'UA-8680690-4' });
            }
            function w() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('script', {
                            src: 'https://unpkg.com/react/umd/react.production.min.js',
                            crossOrigin: 'crossorigin',
                        }),
                        (0, r.jsx)('script', {
                            src: 'https://unpkg.com/react-dom/umd/react-dom.production.min.js',
                            crossOrigin: 'crossorigin',
                        }),
                        (0, r.jsx)('script', {
                            src: 'https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js',
                            crossOrigin: 'crossorigin',
                        }),
                        (0, r.jsx)('script', {
                            children: 'var Alert = ReactBootstrap.Alert;',
                        }),
                    ],
                });
            }
            var v = { '/': 'Home' },
                k = t(8974),
                b = t.n(k);
            function N(e) {
                var n = e.children,
                    t = (0, s.useRouter)().pathname;
                return (0, r.jsxs)('div', {
                    className: b().container,
                    children: [
                        (0, r.jsxs)(c(), {
                            children: [
                                (0, r.jsxs)('title', {
                                    children: [
                                        v[t],
                                        ' | ',
                                        'theology101.church',
                                    ],
                                }),
                                (0, r.jsx)('meta', { charSet: 'utf-8' }),
                                (0, r.jsx)('meta', {
                                    name: 'viewport',
                                    content:
                                        'width=device-width, initial-scale=1, shrink-to-fit=no',
                                }),
                                (0, r.jsx)('link', {
                                    rel: 'stylesheet',
                                    href: 'https://use.fontawesome.com/releases/v5.15.4/css/all.css',
                                    integrity:
                                        'sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm',
                                    crossorigin: 'anonymous',
                                }),
                                (0, r.jsx)('link', {
                                    rel: 'icon',
                                    href: '/favicon.ico',
                                }),
                            ],
                        }),
                        (0, r.jsx)(g, {}),
                        (0, r.jsx)(p, {}),
                        (0, r.jsx)(d, {}),
                        (0, r.jsx)('main', {
                            className: b().main,
                            children: n,
                        }),
                        (0, r.jsx)(f, {}),
                        (0, r.jsx)(w, {}),
                    ],
                });
            }
            function y() {
                return (0, r.jsx)(N, {
                    children: (0, r.jsx)('h1', { children: 'theology101' }),
                });
            }
        },
        8974: function (e) {
            e.exports = {
                container: 'common_container__Xg40H',
                main: 'common_main__Ng8aD',
                title: 'common_title__BpjOH',
                description: 'common_description__vYJee',
            };
        },
        2077: function (e) {
            e.exports = {
                footer: 'footer_footer__CKQ67',
                facebook: 'footer_facebook__p0Ugs',
                twitter: 'footer_twitter__X_hqD',
                icon: 'footer_icon__Nh5bV',
                socialmedia: 'footer_socialmedia__GO0_Z',
                copyright: 'footer_copyright__J4r4F',
            };
        },
        7088: function (e) {
            e.exports = {
                header: 'header_header__FfSP_',
                active: 'header_active__K5vbe',
            };
        },
    },
    function (e) {
        e.O(0, [112, 49, 774, 888, 179], function () {
            return (n = 5557), e((e.s = n));
        });
        var n = e.O();
        _N_E = n;
    },
]);
