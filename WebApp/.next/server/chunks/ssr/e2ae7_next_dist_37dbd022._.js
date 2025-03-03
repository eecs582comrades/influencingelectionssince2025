module.exports = {

"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/page-path/normalize-path-sep.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * For a given page path, this function ensures that there is no backslash
 * escaping slashes in the path. Example:
 *  - `foo\/bar\/baz` -> `foo/bar/baz`
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizePathSep", {
    enumerable: true,
    get: function() {
        return normalizePathSep;
    }
});
function normalizePathSep(path) {
    return path.replace(/\\/g, '/');
} //# sourceMappingURL=normalize-path-sep.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/lib/metadata/is-metadata-route.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    STATIC_METADATA_IMAGES: null,
    getExtensionRegexString: null,
    isMetadataRoute: null,
    isMetadataRouteFile: null,
    isStaticMetadataRoute: null,
    isStaticMetadataRouteFile: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    STATIC_METADATA_IMAGES: function() {
        return STATIC_METADATA_IMAGES;
    },
    getExtensionRegexString: function() {
        return getExtensionRegexString;
    },
    isMetadataRoute: function() {
        return isMetadataRoute;
    },
    isMetadataRouteFile: function() {
        return isMetadataRouteFile;
    },
    isStaticMetadataRoute: function() {
        return isStaticMetadataRoute;
    },
    isStaticMetadataRouteFile: function() {
        return isStaticMetadataRouteFile;
    }
});
const _normalizepathsep = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/page-path/normalize-path-sep.js [app-rsc] (ecmascript)");
const STATIC_METADATA_IMAGES = {
    icon: {
        filename: 'icon',
        extensions: [
            'ico',
            'jpg',
            'jpeg',
            'png',
            'svg'
        ]
    },
    apple: {
        filename: 'apple-icon',
        extensions: [
            'jpg',
            'jpeg',
            'png'
        ]
    },
    favicon: {
        filename: 'favicon',
        extensions: [
            'ico'
        ]
    },
    openGraph: {
        filename: 'opengraph-image',
        extensions: [
            'jpg',
            'jpeg',
            'png',
            'gif'
        ]
    },
    twitter: {
        filename: 'twitter-image',
        extensions: [
            'jpg',
            'jpeg',
            'png',
            'gif'
        ]
    }
};
// Match routes that are metadata routes, e.g. /sitemap.xml, /favicon.<ext>, /<icon>.<ext>, etc.
// TODO-METADATA: support more metadata routes with more extensions
const defaultExtensions = [
    'js',
    'jsx',
    'ts',
    'tsx'
];
const getExtensionRegexString = (staticExtensions, dynamicExtensions)=>{
    // If there's no possible multi dynamic routes, will not match any <name>[].<ext> files
    if (!dynamicExtensions) {
        return `\\.(?:${staticExtensions.join('|')})`;
    }
    return `(?:\\.(${staticExtensions.join('|')})|((\\[\\])?\\.(${dynamicExtensions.join('|')})))`;
};
function isMetadataRouteFile(appDirRelativePath, pageExtensions, withExtension) {
    const metadataRouteFilesRegex = [
        new RegExp(`^[\\\\/]robots${withExtension ? `${getExtensionRegexString(pageExtensions.concat('txt'), null)}$` : ''}`),
        new RegExp(`^[\\\\/]manifest${withExtension ? `${getExtensionRegexString(pageExtensions.concat('webmanifest', 'json'), null)}$` : ''}`),
        new RegExp(`^[\\\\/]favicon\\.ico$`),
        new RegExp(`[\\\\/]sitemap${withExtension ? `${getExtensionRegexString([
            'xml'
        ], pageExtensions)}$` : ''}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.icon.filename}\\d?${withExtension ? `${getExtensionRegexString(STATIC_METADATA_IMAGES.icon.extensions, pageExtensions)}$` : ''}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.apple.filename}\\d?${withExtension ? `${getExtensionRegexString(STATIC_METADATA_IMAGES.apple.extensions, pageExtensions)}$` : ''}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.openGraph.filename}\\d?${withExtension ? `${getExtensionRegexString(STATIC_METADATA_IMAGES.openGraph.extensions, pageExtensions)}$` : ''}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.twitter.filename}\\d?${withExtension ? `${getExtensionRegexString(STATIC_METADATA_IMAGES.twitter.extensions, pageExtensions)}$` : ''}`)
    ];
    const normalizedAppDirRelativePath = (0, _normalizepathsep.normalizePathSep)(appDirRelativePath);
    return metadataRouteFilesRegex.some((r)=>r.test(normalizedAppDirRelativePath));
}
function isStaticMetadataRouteFile(appDirRelativePath) {
    return isMetadataRouteFile(appDirRelativePath, [], true);
}
function isStaticMetadataRoute(page) {
    return page === '/robots' || page === '/manifest' || isStaticMetadataRouteFile(page);
}
function isMetadataRoute(route) {
    let page = route.replace(/^\/?app\//, '').replace(/\/route$/, '');
    if (page[0] !== '/') page = '/' + page;
    return !page.endsWith('/page') && isMetadataRouteFile(page, defaultExtensions, false);
} //# sourceMappingURL=is-metadata-route.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/isomorphic/path.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * This module is for next.js server internal usage of path module.
 * It will use native path module for nodejs runtime.
 * It will use path-browserify polyfill for edge runtime.
 */ "use strict";
let path;
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
}
module.exports = path; //# sourceMappingURL=path.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizeLocalePath", {
    enumerable: true,
    get: function() {
        return normalizeLocalePath;
    }
});
/**
 * A cache of lowercased locales for each list of locales. This is stored as a
 * WeakMap so if the locales are garbage collected, the cache entry will be
 * removed as well.
 */ const cache = new WeakMap();
function normalizeLocalePath(pathname, locales) {
    // If locales is undefined, return the pathname as is.
    if (!locales) return {
        pathname
    };
    // Get the cached lowercased locales or create a new cache entry.
    let lowercasedLocales = cache.get(locales);
    if (!lowercasedLocales) {
        lowercasedLocales = locales.map((locale)=>locale.toLowerCase());
        cache.set(locales, lowercasedLocales);
    }
    let detectedLocale;
    // The first segment will be empty, because it has a leading `/`. If
    // there is no further segment, there is no locale (or it's the default).
    const segments = pathname.split('/', 2);
    // If there's no second segment (ie, the pathname is just `/`), there's no
    // locale.
    if (!segments[1]) return {
        pathname
    };
    // The second segment will contain the locale part if any.
    const segment = segments[1].toLowerCase();
    // See if the segment matches one of the locales. If it doesn't, there is
    // no locale (or it's the default).
    const index = lowercasedLocales.indexOf(segment);
    if (index < 0) return {
        pathname
    };
    // Return the case-sensitive locale.
    detectedLocale = locales[index];
    // Remove the `/${locale}` part of the pathname.
    pathname = pathname.slice(detectedLocale.length + 1) || '/';
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/compiled/path-to-regexp/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var e = {};
    (()=>{
        var r = e;
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        function lexer(e) {
            var r = [];
            var n = 0;
            while(n < e.length){
                var t = e[n];
                if (t === "*" || t === "+" || t === "?") {
                    r.push({
                        type: "MODIFIER",
                        index: n,
                        value: e[n++]
                    });
                    continue;
                }
                if (t === "\\") {
                    r.push({
                        type: "ESCAPED_CHAR",
                        index: n++,
                        value: e[n++]
                    });
                    continue;
                }
                if (t === "{") {
                    r.push({
                        type: "OPEN",
                        index: n,
                        value: e[n++]
                    });
                    continue;
                }
                if (t === "}") {
                    r.push({
                        type: "CLOSE",
                        index: n,
                        value: e[n++]
                    });
                    continue;
                }
                if (t === ":") {
                    var i = "";
                    var a = n + 1;
                    while(a < e.length){
                        var o = e.charCodeAt(a);
                        if (o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 || o === 95) {
                            i += e[a++];
                            continue;
                        }
                        break;
                    }
                    if (!i) throw new TypeError("Missing parameter name at " + n);
                    r.push({
                        type: "NAME",
                        index: n,
                        value: i
                    });
                    n = a;
                    continue;
                }
                if (t === "(") {
                    var f = 1;
                    var u = "";
                    var a = n + 1;
                    if (e[a] === "?") {
                        throw new TypeError('Pattern cannot start with "?" at ' + a);
                    }
                    while(a < e.length){
                        if (e[a] === "\\") {
                            u += e[a++] + e[a++];
                            continue;
                        }
                        if (e[a] === ")") {
                            f--;
                            if (f === 0) {
                                a++;
                                break;
                            }
                        } else if (e[a] === "(") {
                            f++;
                            if (e[a + 1] !== "?") {
                                throw new TypeError("Capturing groups are not allowed at " + a);
                            }
                        }
                        u += e[a++];
                    }
                    if (f) throw new TypeError("Unbalanced pattern at " + n);
                    if (!u) throw new TypeError("Missing pattern at " + n);
                    r.push({
                        type: "PATTERN",
                        index: n,
                        value: u
                    });
                    n = a;
                    continue;
                }
                r.push({
                    type: "CHAR",
                    index: n,
                    value: e[n++]
                });
            }
            r.push({
                type: "END",
                index: n,
                value: ""
            });
            return r;
        }
        function parse(e, r) {
            if (r === void 0) {
                r = {};
            }
            var n = lexer(e);
            var t = r.prefixes, i = t === void 0 ? "./" : t;
            var a = "[^" + escapeString(r.delimiter || "/#?") + "]+?";
            var o = [];
            var f = 0;
            var u = 0;
            var p = "";
            var tryConsume = function(e) {
                if (u < n.length && n[u].type === e) return n[u++].value;
            };
            var mustConsume = function(e) {
                var r = tryConsume(e);
                if (r !== undefined) return r;
                var t = n[u], i = t.type, a = t.index;
                throw new TypeError("Unexpected " + i + " at " + a + ", expected " + e);
            };
            var consumeText = function() {
                var e = "";
                var r;
                while(r = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")){
                    e += r;
                }
                return e;
            };
            while(u < n.length){
                var v = tryConsume("CHAR");
                var c = tryConsume("NAME");
                var s = tryConsume("PATTERN");
                if (c || s) {
                    var d = v || "";
                    if (i.indexOf(d) === -1) {
                        p += d;
                        d = "";
                    }
                    if (p) {
                        o.push(p);
                        p = "";
                    }
                    o.push({
                        name: c || f++,
                        prefix: d,
                        suffix: "",
                        pattern: s || a,
                        modifier: tryConsume("MODIFIER") || ""
                    });
                    continue;
                }
                var g = v || tryConsume("ESCAPED_CHAR");
                if (g) {
                    p += g;
                    continue;
                }
                if (p) {
                    o.push(p);
                    p = "";
                }
                var x = tryConsume("OPEN");
                if (x) {
                    var d = consumeText();
                    var l = tryConsume("NAME") || "";
                    var h = tryConsume("PATTERN") || "";
                    var m = consumeText();
                    mustConsume("CLOSE");
                    o.push({
                        name: l || (h ? f++ : ""),
                        pattern: l && !h ? a : h,
                        prefix: d,
                        suffix: m,
                        modifier: tryConsume("MODIFIER") || ""
                    });
                    continue;
                }
                mustConsume("END");
            }
            return o;
        }
        r.parse = parse;
        function compile(e, r) {
            return tokensToFunction(parse(e, r), r);
        }
        r.compile = compile;
        function tokensToFunction(e, r) {
            if (r === void 0) {
                r = {};
            }
            var n = flags(r);
            var t = r.encode, i = t === void 0 ? function(e) {
                return e;
            } : t, a = r.validate, o = a === void 0 ? true : a;
            var f = e.map(function(e) {
                if (typeof e === "object") {
                    return new RegExp("^(?:" + e.pattern + ")$", n);
                }
            });
            return function(r) {
                var n = "";
                for(var t = 0; t < e.length; t++){
                    var a = e[t];
                    if (typeof a === "string") {
                        n += a;
                        continue;
                    }
                    var u = r ? r[a.name] : undefined;
                    var p = a.modifier === "?" || a.modifier === "*";
                    var v = a.modifier === "*" || a.modifier === "+";
                    if (Array.isArray(u)) {
                        if (!v) {
                            throw new TypeError('Expected "' + a.name + '" to not repeat, but got an array');
                        }
                        if (u.length === 0) {
                            if (p) continue;
                            throw new TypeError('Expected "' + a.name + '" to not be empty');
                        }
                        for(var c = 0; c < u.length; c++){
                            var s = i(u[c], a);
                            if (o && !f[t].test(s)) {
                                throw new TypeError('Expected all "' + a.name + '" to match "' + a.pattern + '", but got "' + s + '"');
                            }
                            n += a.prefix + s + a.suffix;
                        }
                        continue;
                    }
                    if (typeof u === "string" || typeof u === "number") {
                        var s = i(String(u), a);
                        if (o && !f[t].test(s)) {
                            throw new TypeError('Expected "' + a.name + '" to match "' + a.pattern + '", but got "' + s + '"');
                        }
                        n += a.prefix + s + a.suffix;
                        continue;
                    }
                    if (p) continue;
                    var d = v ? "an array" : "a string";
                    throw new TypeError('Expected "' + a.name + '" to be ' + d);
                }
                return n;
            };
        }
        r.tokensToFunction = tokensToFunction;
        function match(e, r) {
            var n = [];
            var t = pathToRegexp(e, n, r);
            return regexpToFunction(t, n, r);
        }
        r.match = match;
        function regexpToFunction(e, r, n) {
            if (n === void 0) {
                n = {};
            }
            var t = n.decode, i = t === void 0 ? function(e) {
                return e;
            } : t;
            return function(n) {
                var t = e.exec(n);
                if (!t) return false;
                var a = t[0], o = t.index;
                var f = Object.create(null);
                var _loop_1 = function(e) {
                    if (t[e] === undefined) return "continue";
                    var n = r[e - 1];
                    if (n.modifier === "*" || n.modifier === "+") {
                        f[n.name] = t[e].split(n.prefix + n.suffix).map(function(e) {
                            return i(e, n);
                        });
                    } else {
                        f[n.name] = i(t[e], n);
                    }
                };
                for(var u = 1; u < t.length; u++){
                    _loop_1(u);
                }
                return {
                    path: a,
                    index: o,
                    params: f
                };
            };
        }
        r.regexpToFunction = regexpToFunction;
        function escapeString(e) {
            return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
        }
        function flags(e) {
            return e && e.sensitive ? "" : "i";
        }
        function regexpToRegexp(e, r) {
            if (!r) return e;
            var n = e.source.match(/\((?!\?)/g);
            if (n) {
                for(var t = 0; t < n.length; t++){
                    r.push({
                        name: t,
                        prefix: "",
                        suffix: "",
                        modifier: "",
                        pattern: ""
                    });
                }
            }
            return e;
        }
        function arrayToRegexp(e, r, n) {
            var t = e.map(function(e) {
                return pathToRegexp(e, r, n).source;
            });
            return new RegExp("(?:" + t.join("|") + ")", flags(n));
        }
        function stringToRegexp(e, r, n) {
            return tokensToRegexp(parse(e, n), r, n);
        }
        function tokensToRegexp(e, r, n) {
            if (n === void 0) {
                n = {};
            }
            var t = n.strict, i = t === void 0 ? false : t, a = n.start, o = a === void 0 ? true : a, f = n.end, u = f === void 0 ? true : f, p = n.encode, v = p === void 0 ? function(e) {
                return e;
            } : p;
            var c = "[" + escapeString(n.endsWith || "") + "]|$";
            var s = "[" + escapeString(n.delimiter || "/#?") + "]";
            var d = o ? "^" : "";
            for(var g = 0, x = e; g < x.length; g++){
                var l = x[g];
                if (typeof l === "string") {
                    d += escapeString(v(l));
                } else {
                    var h = escapeString(v(l.prefix));
                    var m = escapeString(v(l.suffix));
                    if (l.pattern) {
                        if (r) r.push(l);
                        if (h || m) {
                            if (l.modifier === "+" || l.modifier === "*") {
                                var E = l.modifier === "*" ? "?" : "";
                                d += "(?:" + h + "((?:" + l.pattern + ")(?:" + m + h + "(?:" + l.pattern + "))*)" + m + ")" + E;
                            } else {
                                d += "(?:" + h + "(" + l.pattern + ")" + m + ")" + l.modifier;
                            }
                        } else {
                            d += "(" + l.pattern + ")" + l.modifier;
                        }
                    } else {
                        d += "(?:" + h + m + ")" + l.modifier;
                    }
                }
            }
            if (u) {
                if (!i) d += s + "?";
                d += !n.endsWith ? "$" : "(?=" + c + ")";
            } else {
                var T = e[e.length - 1];
                var y = typeof T === "string" ? s.indexOf(T[T.length - 1]) > -1 : T === undefined;
                if (!i) {
                    d += "(?:" + s + "(?=" + c + "))?";
                }
                if (!y) {
                    d += "(?=" + s + "|" + c + ")";
                }
            }
            return new RegExp(d, flags(n));
        }
        r.tokensToRegexp = tokensToRegexp;
        function pathToRegexp(e, r, n) {
            if (e instanceof RegExp) return regexpToRegexp(e, r);
            if (Array.isArray(e)) return arrayToRegexp(e, r, n);
            return stringToRegexp(e, r, n);
        }
        r.pathToRegexp = pathToRegexp;
    })();
    module.exports = e;
})();
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/router/utils/path-match.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getPathMatch", {
    enumerable: true,
    get: function() {
        return getPathMatch;
    }
});
const _pathtoregexp = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/compiled/path-to-regexp/index.js [app-rsc] (ecmascript)");
function getPathMatch(path, options) {
    const keys = [];
    const regexp = (0, _pathtoregexp.pathToRegexp)(path, keys, {
        delimiter: '/',
        sensitive: typeof (options == null ? void 0 : options.sensitive) === 'boolean' ? options.sensitive : false,
        strict: options == null ? void 0 : options.strict
    });
    const matcher = (0, _pathtoregexp.regexpToFunction)((options == null ? void 0 : options.regexModifier) ? new RegExp(options.regexModifier(regexp.source), regexp.flags) : regexp, keys);
    /**
   * A matcher function that will check if a given pathname matches the path
   * given in the builder function. When the path does not match it will return
   * `false` but if it does it will return an object with the matched params
   * merged with the params provided in the second argument.
   */ return (pathname, params)=>{
        // If no pathname is provided it's not a match.
        if (typeof pathname !== 'string') return false;
        const match = matcher(pathname);
        // If the path did not match `false` will be returned.
        if (!match) return false;
        /**
     * If unnamed params are not allowed they must be removed from
     * the matched parameters. path-to-regexp uses "string" for named and
     * "number" for unnamed parameters.
     */ if (options == null ? void 0 : options.removeUnnamedParams) {
            for (const key of keys){
                if (typeof key.name === 'number') {
                    delete match.params[key.name];
                }
            }
        }
        return {
            ...params,
            ...match.params
        };
    };
} //# sourceMappingURL=path-match.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/lib/constants.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_SUFFIX: null,
    APP_DIR_ALIAS: null,
    CACHE_ONE_YEAR: null,
    DOT_NEXT_ALIAS: null,
    ESLINT_DEFAULT_DIRS: null,
    GSP_NO_RETURNED_VALUE: null,
    GSSP_COMPONENT_MEMBER_ERROR: null,
    GSSP_NO_RETURNED_VALUE: null,
    INFINITE_CACHE: null,
    INSTRUMENTATION_HOOK_FILENAME: null,
    MATCHED_PATH_HEADER: null,
    MIDDLEWARE_FILENAME: null,
    MIDDLEWARE_LOCATION_REGEXP: null,
    NEXT_BODY_SUFFIX: null,
    NEXT_CACHE_IMPLICIT_TAG_ID: null,
    NEXT_CACHE_REVALIDATED_TAGS_HEADER: null,
    NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: null,
    NEXT_CACHE_SOFT_TAG_MAX_LENGTH: null,
    NEXT_CACHE_TAGS_HEADER: null,
    NEXT_CACHE_TAG_MAX_ITEMS: null,
    NEXT_CACHE_TAG_MAX_LENGTH: null,
    NEXT_DATA_SUFFIX: null,
    NEXT_INTERCEPTION_MARKER_PREFIX: null,
    NEXT_META_SUFFIX: null,
    NEXT_QUERY_PARAM_PREFIX: null,
    NEXT_RESUME_HEADER: null,
    NON_STANDARD_NODE_ENV: null,
    PAGES_DIR_ALIAS: null,
    PRERENDER_REVALIDATE_HEADER: null,
    PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: null,
    PUBLIC_DIR_MIDDLEWARE_CONFLICT: null,
    ROOT_DIR_ALIAS: null,
    RSC_ACTION_CLIENT_WRAPPER_ALIAS: null,
    RSC_ACTION_ENCRYPTION_ALIAS: null,
    RSC_ACTION_PROXY_ALIAS: null,
    RSC_ACTION_VALIDATE_ALIAS: null,
    RSC_CACHE_WRAPPER_ALIAS: null,
    RSC_MOD_REF_PROXY_ALIAS: null,
    RSC_PREFETCH_SUFFIX: null,
    RSC_SEGMENTS_DIR_SUFFIX: null,
    RSC_SEGMENT_SUFFIX: null,
    RSC_SUFFIX: null,
    SERVER_PROPS_EXPORT_ERROR: null,
    SERVER_PROPS_GET_INIT_PROPS_CONFLICT: null,
    SERVER_PROPS_SSG_CONFLICT: null,
    SERVER_RUNTIME: null,
    SSG_FALLBACK_EXPORT_ERROR: null,
    SSG_GET_INITIAL_PROPS_CONFLICT: null,
    STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: null,
    UNSTABLE_REVALIDATE_RENAME_ERROR: null,
    WEBPACK_LAYERS: null,
    WEBPACK_RESOURCE_QUERIES: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_SUFFIX: function() {
        return ACTION_SUFFIX;
    },
    APP_DIR_ALIAS: function() {
        return APP_DIR_ALIAS;
    },
    CACHE_ONE_YEAR: function() {
        return CACHE_ONE_YEAR;
    },
    DOT_NEXT_ALIAS: function() {
        return DOT_NEXT_ALIAS;
    },
    ESLINT_DEFAULT_DIRS: function() {
        return ESLINT_DEFAULT_DIRS;
    },
    GSP_NO_RETURNED_VALUE: function() {
        return GSP_NO_RETURNED_VALUE;
    },
    GSSP_COMPONENT_MEMBER_ERROR: function() {
        return GSSP_COMPONENT_MEMBER_ERROR;
    },
    GSSP_NO_RETURNED_VALUE: function() {
        return GSSP_NO_RETURNED_VALUE;
    },
    INFINITE_CACHE: function() {
        return INFINITE_CACHE;
    },
    INSTRUMENTATION_HOOK_FILENAME: function() {
        return INSTRUMENTATION_HOOK_FILENAME;
    },
    MATCHED_PATH_HEADER: function() {
        return MATCHED_PATH_HEADER;
    },
    MIDDLEWARE_FILENAME: function() {
        return MIDDLEWARE_FILENAME;
    },
    MIDDLEWARE_LOCATION_REGEXP: function() {
        return MIDDLEWARE_LOCATION_REGEXP;
    },
    NEXT_BODY_SUFFIX: function() {
        return NEXT_BODY_SUFFIX;
    },
    NEXT_CACHE_IMPLICIT_TAG_ID: function() {
        return NEXT_CACHE_IMPLICIT_TAG_ID;
    },
    NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
        return NEXT_CACHE_REVALIDATED_TAGS_HEADER;
    },
    NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
        return NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER;
    },
    NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_SOFT_TAG_MAX_LENGTH;
    },
    NEXT_CACHE_TAGS_HEADER: function() {
        return NEXT_CACHE_TAGS_HEADER;
    },
    NEXT_CACHE_TAG_MAX_ITEMS: function() {
        return NEXT_CACHE_TAG_MAX_ITEMS;
    },
    NEXT_CACHE_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_TAG_MAX_LENGTH;
    },
    NEXT_DATA_SUFFIX: function() {
        return NEXT_DATA_SUFFIX;
    },
    NEXT_INTERCEPTION_MARKER_PREFIX: function() {
        return NEXT_INTERCEPTION_MARKER_PREFIX;
    },
    NEXT_META_SUFFIX: function() {
        return NEXT_META_SUFFIX;
    },
    NEXT_QUERY_PARAM_PREFIX: function() {
        return NEXT_QUERY_PARAM_PREFIX;
    },
    NEXT_RESUME_HEADER: function() {
        return NEXT_RESUME_HEADER;
    },
    NON_STANDARD_NODE_ENV: function() {
        return NON_STANDARD_NODE_ENV;
    },
    PAGES_DIR_ALIAS: function() {
        return PAGES_DIR_ALIAS;
    },
    PRERENDER_REVALIDATE_HEADER: function() {
        return PRERENDER_REVALIDATE_HEADER;
    },
    PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
        return PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER;
    },
    PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
        return PUBLIC_DIR_MIDDLEWARE_CONFLICT;
    },
    ROOT_DIR_ALIAS: function() {
        return ROOT_DIR_ALIAS;
    },
    RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
        return RSC_ACTION_CLIENT_WRAPPER_ALIAS;
    },
    RSC_ACTION_ENCRYPTION_ALIAS: function() {
        return RSC_ACTION_ENCRYPTION_ALIAS;
    },
    RSC_ACTION_PROXY_ALIAS: function() {
        return RSC_ACTION_PROXY_ALIAS;
    },
    RSC_ACTION_VALIDATE_ALIAS: function() {
        return RSC_ACTION_VALIDATE_ALIAS;
    },
    RSC_CACHE_WRAPPER_ALIAS: function() {
        return RSC_CACHE_WRAPPER_ALIAS;
    },
    RSC_MOD_REF_PROXY_ALIAS: function() {
        return RSC_MOD_REF_PROXY_ALIAS;
    },
    RSC_PREFETCH_SUFFIX: function() {
        return RSC_PREFETCH_SUFFIX;
    },
    RSC_SEGMENTS_DIR_SUFFIX: function() {
        return RSC_SEGMENTS_DIR_SUFFIX;
    },
    RSC_SEGMENT_SUFFIX: function() {
        return RSC_SEGMENT_SUFFIX;
    },
    RSC_SUFFIX: function() {
        return RSC_SUFFIX;
    },
    SERVER_PROPS_EXPORT_ERROR: function() {
        return SERVER_PROPS_EXPORT_ERROR;
    },
    SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
        return SERVER_PROPS_GET_INIT_PROPS_CONFLICT;
    },
    SERVER_PROPS_SSG_CONFLICT: function() {
        return SERVER_PROPS_SSG_CONFLICT;
    },
    SERVER_RUNTIME: function() {
        return SERVER_RUNTIME;
    },
    SSG_FALLBACK_EXPORT_ERROR: function() {
        return SSG_FALLBACK_EXPORT_ERROR;
    },
    SSG_GET_INITIAL_PROPS_CONFLICT: function() {
        return SSG_GET_INITIAL_PROPS_CONFLICT;
    },
    STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
        return STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR;
    },
    UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
        return UNSTABLE_REVALIDATE_RENAME_ERROR;
    },
    WEBPACK_LAYERS: function() {
        return WEBPACK_LAYERS;
    },
    WEBPACK_RESOURCE_QUERIES: function() {
        return WEBPACK_RESOURCE_QUERIES;
    }
});
const NEXT_QUERY_PARAM_PREFIX = 'nxtP';
const NEXT_INTERCEPTION_MARKER_PREFIX = 'nxtI';
const MATCHED_PATH_HEADER = 'x-matched-path';
const PRERENDER_REVALIDATE_HEADER = 'x-prerender-revalidate';
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = 'x-prerender-revalidate-if-generated';
const RSC_PREFETCH_SUFFIX = '.prefetch.rsc';
const RSC_SEGMENTS_DIR_SUFFIX = '.segments';
const RSC_SEGMENT_SUFFIX = '.segment.rsc';
const RSC_SUFFIX = '.rsc';
const ACTION_SUFFIX = '.action';
const NEXT_DATA_SUFFIX = '.json';
const NEXT_META_SUFFIX = '.meta';
const NEXT_BODY_SUFFIX = '.body';
const NEXT_CACHE_TAGS_HEADER = 'x-next-cache-tags';
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = 'x-next-revalidated-tags';
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = 'x-next-revalidate-tag-token';
const NEXT_RESUME_HEADER = 'next-resume';
const NEXT_CACHE_TAG_MAX_ITEMS = 128;
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = '_N_T_';
const CACHE_ONE_YEAR = 31536000;
const INFINITE_CACHE = 0xfffffffe;
const MIDDLEWARE_FILENAME = 'middleware';
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
const INSTRUMENTATION_HOOK_FILENAME = 'instrumentation';
const PAGES_DIR_ALIAS = 'private-next-pages';
const DOT_NEXT_ALIAS = 'private-dot-next';
const ROOT_DIR_ALIAS = 'private-next-root-dir';
const APP_DIR_ALIAS = 'private-next-app-dir';
const RSC_MOD_REF_PROXY_ALIAS = 'private-next-rsc-mod-ref-proxy';
const RSC_ACTION_VALIDATE_ALIAS = 'private-next-rsc-action-validate';
const RSC_ACTION_PROXY_ALIAS = 'private-next-rsc-server-reference';
const RSC_CACHE_WRAPPER_ALIAS = 'private-next-rsc-cache-wrapper';
const RSC_ACTION_ENCRYPTION_ALIAS = 'private-next-rsc-action-encryption';
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = 'private-next-rsc-action-client-wrapper';
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
const SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
const SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
const SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
const GSP_NO_RETURNED_VALUE = 'Your `getStaticProps` function did not return an object. Did you forget to add a `return`?';
const GSSP_NO_RETURNED_VALUE = 'Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?';
const UNSTABLE_REVALIDATE_RENAME_ERROR = 'The `unstable_revalidate` property is available for general use.\n' + 'Please use `revalidate` instead.';
const GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
const NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
const SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
const ESLINT_DEFAULT_DIRS = [
    'app',
    'pages',
    'components',
    'lib',
    'src'
];
const SERVER_RUNTIME = {
    edge: 'edge',
    experimentalEdge: 'experimental-edge',
    nodejs: 'nodejs'
};
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: 'shared',
    /**
   * The layer for server-only runtime and picking up `react-server` export conditions.
   * Including app router RSC pages and app router custom routes and metadata routes.
   */ reactServerComponents: 'rsc',
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: 'ssr',
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: 'action-browser',
    /**
   * The layer for the API routes.
   */ api: 'api',
    /**
   * The layer for the middleware code.
   */ middleware: 'middleware',
    /**
   * The layer for the instrumentation hooks.
   */ instrument: 'instrument',
    /**
   * The layer for assets on the edge.
   */ edgeAsset: 'edge-asset',
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: 'app-pages-browser',
    /**
   * The browser client bundle layer for Pages directory.
   */ pagesDirBrowser: 'pages-dir-browser',
    /**
   * The Edge Lite bundle layer for Pages directory.
   */ pagesDirEdge: 'pages-dir-edge',
    /**
   * The Node.js bundle layer for Pages directory.
   */ pagesDirNode: 'pages-dir-node'
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        builtinReact: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ],
        serverOnly: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        neutralTarget: [
            // pages api
            WEBPACK_LAYERS_NAMES.api
        ],
        clientOnly: [
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        bundled: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.shared,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        appPages: [
            // app router pages and layouts
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: '__next_edge_ssr_entry__',
    metadata: '__next_metadata__',
    metadataRoute: '__next_metadata_route__',
    metadataImageMeta: '__next_metadata_image_meta__'
}; //# sourceMappingURL=constants.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureLeadingSlash", {
    enumerable: true,
    get: function() {
        return ensureLeadingSlash;
    }
});
function ensureLeadingSlash(path) {
    return path.startsWith('/') ? path : "/" + path;
} //# sourceMappingURL=ensure-leading-slash.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/segment.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DEFAULT_SEGMENT_KEY: null,
    PAGE_SEGMENT_KEY: null,
    addSearchParamsIfPageSegment: null,
    isGroupSegment: null,
    isParallelRouteSegment: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
    },
    isGroupSegment: function() {
        return isGroupSegment;
    },
    isParallelRouteSegment: function() {
        return isParallelRouteSegment;
    }
});
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === '(' && segment.endsWith(')');
}
function isParallelRouteSegment(segment) {
    return segment.startsWith('@') && segment !== '@children';
}
function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
    if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
    }
    return segment;
}
const PAGE_SEGMENT_KEY = '__PAGE__';
const DEFAULT_SEGMENT_KEY = '__DEFAULT__'; //# sourceMappingURL=segment.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    normalizeAppPath: null,
    normalizeRscURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    normalizeAppPath: function() {
        return normalizeAppPath;
    },
    normalizeRscURL: function() {
        return normalizeRscURL;
    }
});
const _ensureleadingslash = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/segment.js [app-rsc] (ecmascript)");
function normalizeAppPath(route) {
    return (0, _ensureleadingslash.ensureLeadingSlash)(route.split('/').reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, _segment.isGroupSegment)(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === '@') {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === 'page' || segment === 'route') && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ''));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, '$1');
} //# sourceMappingURL=app-paths.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/lib/interception-routes.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    INTERCEPTION_ROUTE_MARKERS: null,
    extractInterceptionRouteInformation: null,
    isInterceptionRouteAppPath: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    INTERCEPTION_ROUTE_MARKERS: function() {
        return INTERCEPTION_ROUTE_MARKERS;
    },
    extractInterceptionRouteInformation: function() {
        return extractInterceptionRouteInformation;
    },
    isInterceptionRouteAppPath: function() {
        return isInterceptionRouteAppPath;
    }
});
const _apppaths = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
const INTERCEPTION_ROUTE_MARKERS = [
    '(..)(..)',
    '(.)',
    '(..)',
    '(...)'
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split('/').find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute, marker, interceptedRoute;
    for (const segment of path.split('/')){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            ;
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`), "__NEXT_ERROR_CODE", {
            value: "E269",
            enumerable: false,
            configurable: true
        });
    }
    interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case '(.)':
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === '/') {
                interceptedRoute = `/${interceptedRoute}`;
            } else {
                interceptedRoute = interceptingRoute + '/' + interceptedRoute;
            }
            break;
        case '(..)':
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === '/') {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`), "__NEXT_ERROR_CODE", {
                    value: "E207",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = interceptingRoute.split('/').slice(0, -1).concat(interceptedRoute).join('/');
            break;
        case '(...)':
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = '/' + interceptedRoute;
            break;
        case '(..)(..)':
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split('/');
            if (splitInterceptingRoute.length <= 2) {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`), "__NEXT_ERROR_CODE", {
                    value: "E486",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join('/');
            break;
        default:
            throw Object.defineProperty(new Error('Invariant: unexpected marker'), "__NEXT_ERROR_CODE", {
                value: "E112",
                enumerable: false,
                configurable: true
            });
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
} //# sourceMappingURL=interception-routes.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/escape-regexp.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
// regexp is based on https://github.com/sindresorhus/escape-string-regexp
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "escapeStringRegexp", {
    enumerable: true,
    get: function() {
        return escapeStringRegexp;
    }
});
const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
function escapeStringRegexp(str) {
    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
    if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, '\\$&');
    }
    return str;
} //# sourceMappingURL=escape-regexp.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removeTrailingSlash", {
    enumerable: true,
    get: function() {
        return removeTrailingSlash;
    }
});
function removeTrailingSlash(route) {
    return route.replace(/\/$/, '') || '/';
} //# sourceMappingURL=remove-trailing-slash.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/router/utils/route-regex.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getNamedMiddlewareRegex: null,
    getNamedRouteRegex: null,
    getRouteRegex: null,
    parseParameter: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getNamedMiddlewareRegex: function() {
        return getNamedMiddlewareRegex;
    },
    getNamedRouteRegex: function() {
        return getNamedRouteRegex;
    },
    getRouteRegex: function() {
        return getRouteRegex;
    },
    parseParameter: function() {
        return parseParameter;
    }
});
const _constants = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/lib/constants.js [app-rsc] (ecmascript)");
const _interceptionroutes = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/lib/interception-routes.js [app-rsc] (ecmascript)");
const _escaperegexp = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/escape-regexp.js [app-rsc] (ecmascript)");
const _removetrailingslash = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [app-rsc] (ecmascript)");
/**
 * Regular expression pattern used to match route parameters.
 * Matches both single parameters and parameter groups.
 * Examples:
 *   - `[[...slug]]` matches parameter group with key 'slug', repeat: true, optional: true
 *   - `[...slug]` matches parameter group with key 'slug', repeat: true, optional: false
 *   - `[[foo]]` matches parameter with key 'foo', repeat: false, optional: true
 *   - `[bar]` matches parameter with key 'bar', repeat: false, optional: false
 */ const PARAMETER_PATTERN = /^([^[]*)\[((?:\[[^\]]*\])|[^\]]+)\](.*)$/;
function parseParameter(param) {
    const match = param.match(PARAMETER_PATTERN);
    if (!match) {
        return parseMatchedParameter(param);
    }
    return parseMatchedParameter(match[2]);
}
/**
 * Parses a matched parameter from the PARAMETER_PATTERN regex to a data structure that can be used
 * to generate the parametrized route.
 * Examples:
 *   - `[...slug]` -> `{ key: 'slug', repeat: true, optional: true }`
 *   - `...slug` -> `{ key: 'slug', repeat: true, optional: false }`
 *   - `[foo]` -> `{ key: 'foo', repeat: false, optional: true }`
 *   - `bar` -> `{ key: 'bar', repeat: false, optional: false }`
 * @param param - The matched parameter to parse.
 * @returns The parsed parameter as a data structure.
 */ function parseMatchedParameter(param) {
    const optional = param.startsWith('[') && param.endsWith(']');
    if (optional) {
        param = param.slice(1, -1);
    }
    const repeat = param.startsWith('...');
    if (repeat) {
        param = param.slice(3);
    }
    return {
        key: param,
        repeat,
        optional
    };
}
function getParametrizedRoute(route, includeSuffix, includePrefix) {
    const groups = {};
    let groupIndex = 1;
    const segments = [];
    for (const segment of (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split('/')){
        const markerMatch = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        const paramMatches = segment.match(PARAMETER_PATTERN) // Check for parameters
        ;
        if (markerMatch && paramMatches && paramMatches[2]) {
            const { key, optional, repeat } = parseMatchedParameter(paramMatches[2]);
            groups[key] = {
                pos: groupIndex++,
                repeat,
                optional
            };
            segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(markerMatch) + "([^/]+?)");
        } else if (paramMatches && paramMatches[2]) {
            const { key, repeat, optional } = parseMatchedParameter(paramMatches[2]);
            groups[key] = {
                pos: groupIndex++,
                repeat,
                optional
            };
            if (includePrefix && paramMatches[1]) {
                segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(paramMatches[1]));
            }
            let s = repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
            // Remove the leading slash if includePrefix already added it.
            if (includePrefix && paramMatches[1]) {
                s = s.substring(1);
            }
            segments.push(s);
        } else {
            segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(segment));
        }
        // If there's a suffix, add it to the segments if it's enabled.
        if (includeSuffix && paramMatches && paramMatches[3]) {
            segments.push((0, _escaperegexp.escapeStringRegexp)(paramMatches[3]));
        }
    }
    return {
        parameterizedRoute: segments.join(''),
        groups
    };
}
function getRouteRegex(normalizedRoute, param) {
    let { includeSuffix = false, includePrefix = false, excludeOptionalTrailingSlash = false } = param === void 0 ? {} : param;
    const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute, includeSuffix, includePrefix);
    let re = parameterizedRoute;
    if (!excludeOptionalTrailingSlash) {
        re += '(?:/)?';
    }
    return {
        re: new RegExp("^" + re + "$"),
        groups: groups
    };
}
/**
 * Builds a function to generate a minimal routeKey using only a-z and minimal
 * number of characters.
 */ function buildGetSafeRouteKey() {
    let i = 0;
    return ()=>{
        let routeKey = '';
        let j = ++i;
        while(j > 0){
            routeKey += String.fromCharCode(97 + (j - 1) % 26);
            j = Math.floor((j - 1) / 26);
        }
        return routeKey;
    };
}
function getSafeKeyFromSegment(param) {
    let { interceptionMarker, getSafeRouteKey, segment, routeKeys, keyPrefix, backreferenceDuplicateKeys } = param;
    const { key, optional, repeat } = parseMatchedParameter(segment);
    // replace any non-word characters since they can break
    // the named regex
    let cleanedKey = key.replace(/\W/g, '');
    if (keyPrefix) {
        cleanedKey = "" + keyPrefix + cleanedKey;
    }
    let invalidKey = false;
    // check if the key is still invalid and fallback to using a known
    // safe key
    if (cleanedKey.length === 0 || cleanedKey.length > 30) {
        invalidKey = true;
    }
    if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
        invalidKey = true;
    }
    if (invalidKey) {
        cleanedKey = getSafeRouteKey();
    }
    const duplicateKey = cleanedKey in routeKeys;
    if (keyPrefix) {
        routeKeys[cleanedKey] = "" + keyPrefix + key;
    } else {
        routeKeys[cleanedKey] = key;
    }
    // if the segment has an interception marker, make sure that's part of the regex pattern
    // this is to ensure that the route with the interception marker doesn't incorrectly match
    // the non-intercepted route (ie /app/(.)[username] should not match /app/[username])
    const interceptionPrefix = interceptionMarker ? (0, _escaperegexp.escapeStringRegexp)(interceptionMarker) : '';
    let pattern;
    if (duplicateKey && backreferenceDuplicateKeys) {
        // Use a backreference to the key to ensure that the key is the same value
        // in each of the placeholders.
        pattern = "\\k<" + cleanedKey + ">";
    } else if (repeat) {
        pattern = "(?<" + cleanedKey + ">.+?)";
    } else {
        pattern = "(?<" + cleanedKey + ">[^/]+?)";
    }
    return optional ? "(?:/" + interceptionPrefix + pattern + ")?" : "/" + interceptionPrefix + pattern;
}
function getNamedParametrizedRoute(route, prefixRouteKeys, includeSuffix, includePrefix, backreferenceDuplicateKeys) {
    const getSafeRouteKey = buildGetSafeRouteKey();
    const routeKeys = {};
    const segments = [];
    for (const segment of (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split('/')){
        const hasInterceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m));
        const paramMatches = segment.match(PARAMETER_PATTERN) // Check for parameters
        ;
        if (hasInterceptionMarker && paramMatches && paramMatches[2]) {
            // If there's an interception marker, add it to the segments.
            segments.push(getSafeKeyFromSegment({
                getSafeRouteKey,
                interceptionMarker: paramMatches[1],
                segment: paramMatches[2],
                routeKeys,
                keyPrefix: prefixRouteKeys ? _constants.NEXT_INTERCEPTION_MARKER_PREFIX : undefined,
                backreferenceDuplicateKeys
            }));
        } else if (paramMatches && paramMatches[2]) {
            // If there's a prefix, add it to the segments if it's enabled.
            if (includePrefix && paramMatches[1]) {
                segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(paramMatches[1]));
            }
            let s = getSafeKeyFromSegment({
                getSafeRouteKey,
                segment: paramMatches[2],
                routeKeys,
                keyPrefix: prefixRouteKeys ? _constants.NEXT_QUERY_PARAM_PREFIX : undefined,
                backreferenceDuplicateKeys
            });
            // Remove the leading slash if includePrefix already added it.
            if (includePrefix && paramMatches[1]) {
                s = s.substring(1);
            }
            segments.push(s);
        } else {
            segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(segment));
        }
        // If there's a suffix, add it to the segments if it's enabled.
        if (includeSuffix && paramMatches && paramMatches[3]) {
            segments.push((0, _escaperegexp.escapeStringRegexp)(paramMatches[3]));
        }
    }
    return {
        namedParameterizedRoute: segments.join(''),
        routeKeys
    };
}
function getNamedRouteRegex(normalizedRoute, options) {
    var _options_includeSuffix, _options_includePrefix, _options_backreferenceDuplicateKeys;
    const result = getNamedParametrizedRoute(normalizedRoute, options.prefixRouteKeys, (_options_includeSuffix = options.includeSuffix) != null ? _options_includeSuffix : false, (_options_includePrefix = options.includePrefix) != null ? _options_includePrefix : false, (_options_backreferenceDuplicateKeys = options.backreferenceDuplicateKeys) != null ? _options_backreferenceDuplicateKeys : false);
    let namedRegex = result.namedParameterizedRoute;
    if (!options.excludeOptionalTrailingSlash) {
        namedRegex += '(?:/)?';
    }
    return {
        ...getRouteRegex(normalizedRoute, options),
        namedRegex: "^" + namedRegex + "$",
        routeKeys: result.routeKeys
    };
}
function getNamedMiddlewareRegex(normalizedRoute, options) {
    const { parameterizedRoute } = getParametrizedRoute(normalizedRoute, false, false);
    const { catchAll = true } = options;
    if (parameterizedRoute === '/') {
        let catchAllRegex = catchAll ? '.*' : '';
        return {
            namedRegex: "^/" + catchAllRegex + "$"
        };
    }
    const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false, false, false, false);
    let catchAllGroupedRegex = catchAll ? '(?:(/.*)?)' : '';
    return {
        namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
    };
} //# sourceMappingURL=route-regex.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/utils.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ':' + port : '');
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?" + urlParts.slice(1).join('?') : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        var _App_prototype;
        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
            const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/router/utils/route-matcher.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getRouteMatcher", {
    enumerable: true,
    get: function() {
        return getRouteMatcher;
    }
});
const _utils = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/utils.js [app-rsc] (ecmascript)");
function getRouteMatcher(param) {
    let { re, groups } = param;
    return (pathname)=>{
        const routeMatch = re.exec(pathname);
        if (!routeMatch) return false;
        const decode = (param)=>{
            try {
                return decodeURIComponent(param);
            } catch (e) {
                throw Object.defineProperty(new _utils.DecodeError('failed to decode param'), "__NEXT_ERROR_CODE", {
                    value: "E528",
                    enumerable: false,
                    configurable: true
                });
            }
        };
        const params = {};
        for (const [key, group] of Object.entries(groups)){
            const match = routeMatch[group.pos];
            if (match !== undefined) {
                if (group.repeat) {
                    params[key] = match.split('/').map((entry)=>decode(entry));
                } else {
                    params[key] = decode(match);
                }
            }
        }
        return params;
    };
} //# sourceMappingURL=route-matcher.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseRelativeUrl", {
    enumerable: true,
    get: function() {
        return parseRelativeUrl;
    }
});
const _utils = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/utils.js [app-rsc] (ecmascript)");
const _querystring = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-rsc] (ecmascript)");
function parseRelativeUrl(url, base, parseQuery) {
    if (parseQuery === void 0) parseQuery = true;
    const globalBase = new URL(("TURBOPACK compile-time truthy", 1) ? 'http://n' : ("TURBOPACK unreachable", undefined));
    const resolvedBase = base ? new URL(base, globalBase) : url.startsWith('.') ? new URL(("TURBOPACK compile-time truthy", 1) ? 'http://n' : ("TURBOPACK unreachable", undefined)) : globalBase;
    const { pathname, searchParams, search, hash, href, origin } = new URL(url, resolvedBase);
    if (origin !== globalBase.origin) {
        throw Object.defineProperty(new Error("invariant: invalid relative URL, router received " + url), "__NEXT_ERROR_CODE", {
            value: "E159",
            enumerable: false,
            configurable: true
        });
    }
    return {
        pathname,
        query: parseQuery ? (0, _querystring.searchParamsToUrlQuery)(searchParams) : undefined,
        search,
        hash,
        href: href.slice(origin.length)
    };
} //# sourceMappingURL=parse-relative-url.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/router/utils/parse-url.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseUrl", {
    enumerable: true,
    get: function() {
        return parseUrl;
    }
});
const _querystring = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-rsc] (ecmascript)");
const _parserelativeurl = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js [app-rsc] (ecmascript)");
function parseUrl(url) {
    if (url.startsWith('/')) {
        return (0, _parserelativeurl.parseRelativeUrl)(url);
    }
    const parsedURL = new URL(url);
    return {
        hash: parsedURL.hash,
        hostname: parsedURL.hostname,
        href: parsedURL.href,
        pathname: parsedURL.pathname,
        port: parsedURL.port,
        protocol: parsedURL.protocol,
        query: (0, _querystring.searchParamsToUrlQuery)(parsedURL.searchParams),
        search: parsedURL.search
    };
} //# sourceMappingURL=parse-url.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/client/components/app-router-headers.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_HEADER: null,
    FLIGHT_HEADERS: null,
    NEXT_DID_POSTPONE_HEADER: null,
    NEXT_HMR_REFRESH_HEADER: null,
    NEXT_IS_PRERENDER_HEADER: null,
    NEXT_REWRITTEN_PATH_HEADER: null,
    NEXT_REWRITTEN_QUERY_HEADER: null,
    NEXT_ROUTER_PREFETCH_HEADER: null,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: null,
    NEXT_ROUTER_STALE_TIME_HEADER: null,
    NEXT_ROUTER_STATE_TREE_HEADER: null,
    NEXT_RSC_UNION_QUERY: null,
    NEXT_URL: null,
    RSC_CONTENT_TYPE_HEADER: null,
    RSC_HEADER: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_HEADER: function() {
        return ACTION_HEADER;
    },
    FLIGHT_HEADERS: function() {
        return FLIGHT_HEADERS;
    },
    NEXT_DID_POSTPONE_HEADER: function() {
        return NEXT_DID_POSTPONE_HEADER;
    },
    NEXT_HMR_REFRESH_HEADER: function() {
        return NEXT_HMR_REFRESH_HEADER;
    },
    NEXT_IS_PRERENDER_HEADER: function() {
        return NEXT_IS_PRERENDER_HEADER;
    },
    NEXT_REWRITTEN_PATH_HEADER: function() {
        return NEXT_REWRITTEN_PATH_HEADER;
    },
    NEXT_REWRITTEN_QUERY_HEADER: function() {
        return NEXT_REWRITTEN_QUERY_HEADER;
    },
    NEXT_ROUTER_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_PREFETCH_HEADER;
    },
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_SEGMENT_PREFETCH_HEADER;
    },
    NEXT_ROUTER_STALE_TIME_HEADER: function() {
        return NEXT_ROUTER_STALE_TIME_HEADER;
    },
    NEXT_ROUTER_STATE_TREE_HEADER: function() {
        return NEXT_ROUTER_STATE_TREE_HEADER;
    },
    NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
    },
    NEXT_URL: function() {
        return NEXT_URL;
    },
    RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
    },
    RSC_HEADER: function() {
        return RSC_HEADER;
    }
});
const RSC_HEADER = 'RSC';
const ACTION_HEADER = 'Next-Action';
const NEXT_ROUTER_STATE_TREE_HEADER = 'Next-Router-State-Tree';
const NEXT_ROUTER_PREFETCH_HEADER = 'Next-Router-Prefetch';
const NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = 'Next-Router-Segment-Prefetch';
const NEXT_HMR_REFRESH_HEADER = 'Next-HMR-Refresh';
const NEXT_URL = 'Next-Url';
const RSC_CONTENT_TYPE_HEADER = 'text/x-component';
const FLIGHT_HEADERS = [
    RSC_HEADER,
    NEXT_ROUTER_STATE_TREE_HEADER,
    NEXT_ROUTER_PREFETCH_HEADER,
    NEXT_HMR_REFRESH_HEADER,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
];
const NEXT_RSC_UNION_QUERY = '_rsc';
const NEXT_ROUTER_STALE_TIME_HEADER = 'x-nextjs-stale-time';
const NEXT_DID_POSTPONE_HEADER = 'x-nextjs-postponed';
const NEXT_REWRITTEN_PATH_HEADER = 'x-nextjs-rewritten-path';
const NEXT_REWRITTEN_QUERY_HEADER = 'x-nextjs-rewritten-query';
const NEXT_IS_PRERENDER_HEADER = 'x-nextjs-prerender';
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-headers.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var e = {};
    (()=>{
        var r = e;
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ r.parse = parse;
        r.serialize = serialize;
        var i = decodeURIComponent;
        var t = encodeURIComponent;
        var a = /; */;
        var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function parse(e, r) {
            if (typeof e !== "string") {
                throw new TypeError("argument str must be a string");
            }
            var t = {};
            var n = r || {};
            var o = e.split(a);
            var s = n.decode || i;
            for(var p = 0; p < o.length; p++){
                var f = o[p];
                var u = f.indexOf("=");
                if (u < 0) {
                    continue;
                }
                var v = f.substr(0, u).trim();
                var c = f.substr(++u, f.length).trim();
                if ('"' == c[0]) {
                    c = c.slice(1, -1);
                }
                if (undefined == t[v]) {
                    t[v] = tryDecode(c, s);
                }
            }
            return t;
        }
        function serialize(e, r, i) {
            var a = i || {};
            var o = a.encode || t;
            if (typeof o !== "function") {
                throw new TypeError("option encode is invalid");
            }
            if (!n.test(e)) {
                throw new TypeError("argument name is invalid");
            }
            var s = o(r);
            if (s && !n.test(s)) {
                throw new TypeError("argument val is invalid");
            }
            var p = e + "=" + s;
            if (null != a.maxAge) {
                var f = a.maxAge - 0;
                if (isNaN(f) || !isFinite(f)) {
                    throw new TypeError("option maxAge is invalid");
                }
                p += "; Max-Age=" + Math.floor(f);
            }
            if (a.domain) {
                if (!n.test(a.domain)) {
                    throw new TypeError("option domain is invalid");
                }
                p += "; Domain=" + a.domain;
            }
            if (a.path) {
                if (!n.test(a.path)) {
                    throw new TypeError("option path is invalid");
                }
                p += "; Path=" + a.path;
            }
            if (a.expires) {
                if (typeof a.expires.toUTCString !== "function") {
                    throw new TypeError("option expires is invalid");
                }
                p += "; Expires=" + a.expires.toUTCString();
            }
            if (a.httpOnly) {
                p += "; HttpOnly";
            }
            if (a.secure) {
                p += "; Secure";
            }
            if (a.sameSite) {
                var u = typeof a.sameSite === "string" ? a.sameSite.toLowerCase() : a.sameSite;
                switch(u){
                    case true:
                        p += "; SameSite=Strict";
                        break;
                    case "lax":
                        p += "; SameSite=Lax";
                        break;
                    case "strict":
                        p += "; SameSite=Strict";
                        break;
                    case "none":
                        p += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid");
                }
            }
            return p;
        }
        function tryDecode(e, r) {
            try {
                return r(e);
            } catch (r) {
                return e;
            }
        }
    })();
    module.exports = e;
})();
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/api-utils/get-cookie-parser.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getCookieParser", {
    enumerable: true,
    get: function() {
        return getCookieParser;
    }
});
function getCookieParser(headers) {
    return function parseCookie() {
        const { cookie } = headers;
        if (!cookie) {
            return {};
        }
        const { parse: parseCookieFn } = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)");
        return parseCookieFn(Array.isArray(cookie) ? cookie.join('; ') : cookie);
    };
} //# sourceMappingURL=get-cookie-parser.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/router/utils/prepare-destination.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    compileNonPath: null,
    matchHas: null,
    parseDestination: null,
    prepareDestination: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    compileNonPath: function() {
        return compileNonPath;
    },
    matchHas: function() {
        return matchHas;
    },
    parseDestination: function() {
        return parseDestination;
    },
    prepareDestination: function() {
        return prepareDestination;
    }
});
const _pathtoregexp = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/compiled/path-to-regexp/index.js [app-rsc] (ecmascript)");
const _escaperegexp = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/escape-regexp.js [app-rsc] (ecmascript)");
const _parseurl = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/router/utils/parse-url.js [app-rsc] (ecmascript)");
const _interceptionroutes = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/lib/interception-routes.js [app-rsc] (ecmascript)");
const _approuterheaders = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/client/components/app-router-headers.js [app-rsc] (ecmascript)");
const _getcookieparser = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/api-utils/get-cookie-parser.js [app-rsc] (ecmascript)");
/**
 * Ensure only a-zA-Z are used for param names for proper interpolating
 * with path-to-regexp
 */ function getSafeParamName(paramName) {
    let newParamName = '';
    for(let i = 0; i < paramName.length; i++){
        const charCode = paramName.charCodeAt(i);
        if (charCode > 64 && charCode < 91 || // A-Z
        charCode > 96 && charCode < 123 // a-z
        ) {
            newParamName += paramName[i];
        }
    }
    return newParamName;
}
function escapeSegment(str, segmentName) {
    return str.replace(new RegExp(":" + (0, _escaperegexp.escapeStringRegexp)(segmentName), 'g'), "__ESC_COLON_" + segmentName);
}
function unescapeSegments(str) {
    return str.replace(/__ESC_COLON_/gi, ':');
}
function matchHas(req, query, has, missing) {
    if (has === void 0) has = [];
    if (missing === void 0) missing = [];
    const params = {};
    const hasMatch = (hasItem)=>{
        let value;
        let key = hasItem.key;
        switch(hasItem.type){
            case 'header':
                {
                    key = key.toLowerCase();
                    value = req.headers[key];
                    break;
                }
            case 'cookie':
                {
                    if ('cookies' in req) {
                        value = req.cookies[hasItem.key];
                    } else {
                        const cookies = (0, _getcookieparser.getCookieParser)(req.headers)();
                        value = cookies[hasItem.key];
                    }
                    break;
                }
            case 'query':
                {
                    value = query[key];
                    break;
                }
            case 'host':
                {
                    const { host } = (req == null ? void 0 : req.headers) || {};
                    // remove port from host if present
                    const hostname = host == null ? void 0 : host.split(':', 1)[0].toLowerCase();
                    value = hostname;
                    break;
                }
            default:
                {
                    break;
                }
        }
        if (!hasItem.value && value) {
            params[getSafeParamName(key)] = value;
            return true;
        } else if (value) {
            const matcher = new RegExp("^" + hasItem.value + "$");
            const matches = Array.isArray(value) ? value.slice(-1)[0].match(matcher) : value.match(matcher);
            if (matches) {
                if (Array.isArray(matches)) {
                    if (matches.groups) {
                        Object.keys(matches.groups).forEach((groupKey)=>{
                            params[groupKey] = matches.groups[groupKey];
                        });
                    } else if (hasItem.type === 'host' && matches[0]) {
                        params.host = matches[0];
                    }
                }
                return true;
            }
        }
        return false;
    };
    const allMatch = has.every((item)=>hasMatch(item)) && !missing.some((item)=>hasMatch(item));
    if (allMatch) {
        return params;
    }
    return false;
}
function compileNonPath(value, params) {
    if (!value.includes(':')) {
        return value;
    }
    for (const key of Object.keys(params)){
        if (value.includes(":" + key)) {
            value = value.replace(new RegExp(":" + key + "\\*", 'g'), ":" + key + "--ESCAPED_PARAM_ASTERISKS").replace(new RegExp(":" + key + "\\?", 'g'), ":" + key + "--ESCAPED_PARAM_QUESTION").replace(new RegExp(":" + key + "\\+", 'g'), ":" + key + "--ESCAPED_PARAM_PLUS").replace(new RegExp(":" + key + "(?!\\w)", 'g'), "--ESCAPED_PARAM_COLON" + key);
        }
    }
    value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*');
    // the value needs to start with a forward-slash to be compiled
    // correctly
    return (0, _pathtoregexp.compile)("/" + value, {
        validate: false
    })(params).slice(1);
}
function parseDestination(args) {
    let escaped = args.destination;
    for (const param of Object.keys({
        ...args.params,
        ...args.query
    })){
        if (!param) continue;
        escaped = escapeSegment(escaped, param);
    }
    const parsed = (0, _parseurl.parseUrl)(escaped);
    let pathname = parsed.pathname;
    if (pathname) {
        pathname = unescapeSegments(pathname);
    }
    let href = parsed.href;
    if (href) {
        href = unescapeSegments(href);
    }
    let hostname = parsed.hostname;
    if (hostname) {
        hostname = unescapeSegments(hostname);
    }
    let hash = parsed.hash;
    if (hash) {
        hash = unescapeSegments(hash);
    }
    return {
        ...parsed,
        pathname,
        hostname,
        href,
        hash
    };
}
function prepareDestination(args) {
    const query = Object.assign({}, args.query);
    delete query[_approuterheaders.NEXT_RSC_UNION_QUERY];
    const parsedDestination = parseDestination(args);
    const { hostname: destHostname, query: destQuery } = parsedDestination;
    // The following code assumes that the pathname here includes the hash if it's
    // present.
    let destPath = parsedDestination.pathname;
    if (parsedDestination.hash) {
        destPath = "" + destPath + parsedDestination.hash;
    }
    const destParams = [];
    const destPathParamKeys = [];
    (0, _pathtoregexp.pathToRegexp)(destPath, destPathParamKeys);
    for (const key of destPathParamKeys){
        destParams.push(key.name);
    }
    if (destHostname) {
        const destHostnameParamKeys = [];
        (0, _pathtoregexp.pathToRegexp)(destHostname, destHostnameParamKeys);
        for (const key of destHostnameParamKeys){
            destParams.push(key.name);
        }
    }
    const destPathCompiler = (0, _pathtoregexp.compile)(destPath, // have already validated before we got to this point and validating
    // breaks compiling destinations with named pattern params from the source
    // e.g. /something:hello(.*) -> /another/:hello is broken with validation
    // since compile validation is meant for reversing and not for inserting
    // params from a separate path-regex into another
    {
        validate: false
    });
    let destHostnameCompiler;
    if (destHostname) {
        destHostnameCompiler = (0, _pathtoregexp.compile)(destHostname, {
            validate: false
        });
    }
    // update any params in query values
    for (const [key, strOrArray] of Object.entries(destQuery)){
        // the value needs to start with a forward-slash to be compiled
        // correctly
        if (Array.isArray(strOrArray)) {
            destQuery[key] = strOrArray.map((value)=>compileNonPath(unescapeSegments(value), args.params));
        } else if (typeof strOrArray === 'string') {
            destQuery[key] = compileNonPath(unescapeSegments(strOrArray), args.params);
        }
    }
    // add path params to query if it's not a redirect and not
    // already defined in destination query or path
    let paramKeys = Object.keys(args.params).filter((name)=>name !== 'nextInternalLocale');
    if (args.appendParamsToQuery && !paramKeys.some((key)=>destParams.includes(key))) {
        for (const key of paramKeys){
            if (!(key in destQuery)) {
                destQuery[key] = args.params[key];
            }
        }
    }
    let newUrl;
    // The compiler also that the interception route marker is an unnamed param, hence '0',
    // so we need to add it to the params object.
    if ((0, _interceptionroutes.isInterceptionRouteAppPath)(destPath)) {
        for (const segment of destPath.split('/')){
            const marker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
            if (marker) {
                if (marker === '(..)(..)') {
                    args.params['0'] = '(..)';
                    args.params['1'] = '(..)';
                } else {
                    args.params['0'] = marker;
                }
                break;
            }
        }
    }
    try {
        newUrl = destPathCompiler(args.params);
        const [pathname, hash] = newUrl.split('#', 2);
        if (destHostnameCompiler) {
            parsedDestination.hostname = destHostnameCompiler(args.params);
        }
        parsedDestination.pathname = pathname;
        parsedDestination.hash = "" + (hash ? '#' : '') + (hash || '');
        delete parsedDestination.search;
    } catch (err) {
        if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
            throw Object.defineProperty(new Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match"), "__NEXT_ERROR_CODE", {
                value: "E329",
                enumerable: false,
                configurable: true
            });
        }
        throw err;
    }
    // Query merge order lowest priority to highest
    // 1. initial URL query values
    // 2. path segment values
    // 3. destination specified query values
    parsedDestination.query = {
        ...query,
        ...parsedDestination.query
    };
    return {
        newUrl,
        destQuery,
        parsedDestination
    };
} //# sourceMappingURL=prepare-destination.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/web/utils.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    fromNodeOutgoingHttpHeaders: null,
    normalizeNextQueryParam: null,
    splitCookiesString: null,
    toNodeOutgoingHttpHeaders: null,
    validateURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    fromNodeOutgoingHttpHeaders: function() {
        return fromNodeOutgoingHttpHeaders;
    },
    normalizeNextQueryParam: function() {
        return normalizeNextQueryParam;
    },
    splitCookiesString: function() {
        return splitCookiesString;
    },
    toNodeOutgoingHttpHeaders: function() {
        return toNodeOutgoingHttpHeaders;
    },
    validateURL: function() {
        return validateURL;
    }
});
const _constants = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/lib/constants.js [app-rsc] (ecmascript)");
function fromNodeOutgoingHttpHeaders(nodeHeaders) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(nodeHeaders)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === 'undefined') continue;
            if (typeof v === 'number') {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== '=' && ch !== ';' && ch !== ',';
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ',') {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === '=') {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
function toNodeOutgoingHttpHeaders(headers) {
    const nodeHeaders = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === 'set-cookie') {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                nodeHeaders[key] = value;
            }
        }
    }
    return nodeHeaders;
}
function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw Object.defineProperty(new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        }), "__NEXT_ERROR_CODE", {
            value: "E61",
            enumerable: false,
            configurable: true
        });
    }
}
function normalizeNextQueryParam(key) {
    const prefixes = [
        _constants.NEXT_QUERY_PARAM_PREFIX,
        _constants.NEXT_INTERCEPTION_MARKER_PREFIX
    ];
    for (const prefix of prefixes){
        if (key !== prefix && key.startsWith(prefix)) {
            return key.substring(prefix.length);
        }
    }
    return null;
} //# sourceMappingURL=utils.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/server-utils.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getUtils: null,
    interpolateDynamicPath: null,
    normalizeDynamicRouteParams: null,
    normalizeVercelUrl: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getUtils: function() {
        return getUtils;
    },
    interpolateDynamicPath: function() {
        return interpolateDynamicPath;
    },
    normalizeDynamicRouteParams: function() {
        return normalizeDynamicRouteParams;
    },
    normalizeVercelUrl: function() {
        return normalizeVercelUrl;
    }
});
const _url = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const _normalizelocalepath = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js [app-rsc] (ecmascript)");
const _pathmatch = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/router/utils/path-match.js [app-rsc] (ecmascript)");
const _routeregex = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/router/utils/route-regex.js [app-rsc] (ecmascript)");
const _routematcher = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/router/utils/route-matcher.js [app-rsc] (ecmascript)");
const _preparedestination = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/router/utils/prepare-destination.js [app-rsc] (ecmascript)");
const _removetrailingslash = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [app-rsc] (ecmascript)");
const _apppaths = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
const _constants = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/lib/constants.js [app-rsc] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/web/utils.js [app-rsc] (ecmascript)");
function normalizeVercelUrl(req, paramKeys, defaultRouteRegex) {
    // make sure to normalize req.url on Vercel to strip dynamic and rewrite
    // params from the query which are added during routing
    const _parsedUrl = (0, _url.parse)(req.url, true);
    delete _parsedUrl.search;
    for (const key of Object.keys(_parsedUrl.query)){
        const isNextQueryPrefix = key !== _constants.NEXT_QUERY_PARAM_PREFIX && key.startsWith(_constants.NEXT_QUERY_PARAM_PREFIX);
        const isNextInterceptionMarkerPrefix = key !== _constants.NEXT_INTERCEPTION_MARKER_PREFIX && key.startsWith(_constants.NEXT_INTERCEPTION_MARKER_PREFIX);
        if (isNextQueryPrefix || isNextInterceptionMarkerPrefix || paramKeys.includes(key) || defaultRouteRegex && Object.keys(defaultRouteRegex.groups).includes(key)) {
            delete _parsedUrl.query[key];
        }
    }
    req.url = (0, _url.format)(_parsedUrl);
}
function interpolateDynamicPath(pathname, params, defaultRouteRegex) {
    if (!defaultRouteRegex) return pathname;
    for (const param of Object.keys(defaultRouteRegex.groups)){
        const { optional, repeat } = defaultRouteRegex.groups[param];
        let builtParam = `[${repeat ? '...' : ''}${param}]`;
        if (optional) {
            builtParam = `[${builtParam}]`;
        }
        let paramValue;
        const value = params[param];
        if (Array.isArray(value)) {
            paramValue = value.map((v)=>v && encodeURIComponent(v)).join('/');
        } else if (value) {
            paramValue = encodeURIComponent(value);
        } else {
            paramValue = '';
        }
        pathname = pathname.replaceAll(builtParam, paramValue);
    }
    return pathname;
}
function normalizeDynamicRouteParams(query, defaultRouteRegex, defaultRouteMatches, ignoreMissingOptional) {
    let hasValidParams = true;
    let params = {};
    for (const key of Object.keys(defaultRouteRegex.groups)){
        let value = query[key];
        if (typeof value === 'string') {
            value = (0, _apppaths.normalizeRscURL)(value);
        } else if (Array.isArray(value)) {
            value = value.map(_apppaths.normalizeRscURL);
        }
        // if the value matches the default value we can't rely
        // on the parsed params, this is used to signal if we need
        // to parse x-now-route-matches or not
        const defaultValue = defaultRouteMatches[key];
        const isOptional = defaultRouteRegex.groups[key].optional;
        const isDefaultValue = Array.isArray(defaultValue) ? defaultValue.some((defaultVal)=>{
            return Array.isArray(value) ? value.some((val)=>val.includes(defaultVal)) : value == null ? void 0 : value.includes(defaultVal);
        }) : value == null ? void 0 : value.includes(defaultValue);
        if (isDefaultValue || typeof value === 'undefined' && !(isOptional && ignoreMissingOptional)) {
            return {
                params: {},
                hasValidParams: false
            };
        }
        // non-provided optional values should be undefined so normalize
        // them to undefined
        if (isOptional && (!value || Array.isArray(value) && value.length === 1 && // fallback optional catch-all SSG pages have
        // [[...paramName]] for the root path on Vercel
        (value[0] === 'index' || value[0] === `[[...${key}]]`))) {
            value = undefined;
            delete query[key];
        }
        // query values from the proxy aren't already split into arrays
        // so make sure to normalize catch-all values
        if (value && typeof value === 'string' && defaultRouteRegex.groups[key].repeat) {
            value = value.split('/');
        }
        if (value) {
            params[key] = value;
        }
    }
    return {
        params,
        hasValidParams
    };
}
function getUtils({ page, i18n, basePath, rewrites, pageIsDynamic, trailingSlash, caseSensitive }) {
    let defaultRouteRegex;
    let dynamicRouteMatcher;
    let defaultRouteMatches;
    if (pageIsDynamic) {
        defaultRouteRegex = (0, _routeregex.getNamedRouteRegex)(page, {
            prefixRouteKeys: false
        });
        dynamicRouteMatcher = (0, _routematcher.getRouteMatcher)(defaultRouteRegex);
        defaultRouteMatches = dynamicRouteMatcher(page);
    }
    function handleRewrites(req, parsedUrl) {
        const rewriteParams = {};
        let fsPathname = parsedUrl.pathname;
        const matchesPage = ()=>{
            const fsPathnameNoSlash = (0, _removetrailingslash.removeTrailingSlash)(fsPathname || '');
            return fsPathnameNoSlash === (0, _removetrailingslash.removeTrailingSlash)(page) || (dynamicRouteMatcher == null ? void 0 : dynamicRouteMatcher(fsPathnameNoSlash));
        };
        const checkRewrite = (rewrite)=>{
            const matcher = (0, _pathmatch.getPathMatch)(rewrite.source + (trailingSlash ? '(/)?' : ''), {
                removeUnnamedParams: true,
                strict: true,
                sensitive: !!caseSensitive
            });
            if (!parsedUrl.pathname) return false;
            let params = matcher(parsedUrl.pathname);
            if ((rewrite.has || rewrite.missing) && params) {
                const hasParams = (0, _preparedestination.matchHas)(req, parsedUrl.query, rewrite.has, rewrite.missing);
                if (hasParams) {
                    Object.assign(params, hasParams);
                } else {
                    params = false;
                }
            }
            if (params) {
                const { parsedDestination, destQuery } = (0, _preparedestination.prepareDestination)({
                    appendParamsToQuery: true,
                    destination: rewrite.destination,
                    params: params,
                    query: parsedUrl.query
                });
                // if the rewrite destination is external break rewrite chain
                if (parsedDestination.protocol) {
                    return true;
                }
                Object.assign(rewriteParams, destQuery, params);
                Object.assign(parsedUrl.query, parsedDestination.query);
                delete parsedDestination.query;
                Object.assign(parsedUrl, parsedDestination);
                fsPathname = parsedUrl.pathname;
                if (!fsPathname) return false;
                if (basePath) {
                    fsPathname = fsPathname.replace(new RegExp(`^${basePath}`), '') || '/';
                }
                if (i18n) {
                    const result = (0, _normalizelocalepath.normalizeLocalePath)(fsPathname, i18n.locales);
                    fsPathname = result.pathname;
                    parsedUrl.query.nextInternalLocale = result.detectedLocale || params.nextInternalLocale;
                }
                if (fsPathname === page) {
                    return true;
                }
                if (pageIsDynamic && dynamicRouteMatcher) {
                    const dynamicParams = dynamicRouteMatcher(fsPathname);
                    if (dynamicParams) {
                        parsedUrl.query = {
                            ...parsedUrl.query,
                            ...dynamicParams
                        };
                        return true;
                    }
                }
            }
            return false;
        };
        for (const rewrite of rewrites.beforeFiles || []){
            checkRewrite(rewrite);
        }
        if (fsPathname !== page) {
            let finished = false;
            for (const rewrite of rewrites.afterFiles || []){
                finished = checkRewrite(rewrite);
                if (finished) break;
            }
            if (!finished && !matchesPage()) {
                for (const rewrite of rewrites.fallback || []){
                    finished = checkRewrite(rewrite);
                    if (finished) break;
                }
            }
        }
        return rewriteParams;
    }
    function getParamsFromRouteMatches(routeMatchesHeader) {
        // If we don't have a default route regex, we can't get params from route
        // matches
        if (!defaultRouteRegex) return null;
        const { groups, routeKeys } = defaultRouteRegex;
        const matcher = (0, _routematcher.getRouteMatcher)({
            re: {
                // Simulate a RegExp match from the \`req.url\` input
                exec: (str)=>{
                    // Normalize all the prefixed query params.
                    const obj = Object.fromEntries(new URLSearchParams(str));
                    for (const [key, value] of Object.entries(obj)){
                        const normalizedKey = (0, _utils.normalizeNextQueryParam)(key);
                        if (!normalizedKey) continue;
                        obj[normalizedKey] = value;
                        delete obj[key];
                    }
                    // Use all the named route keys.
                    const result = {};
                    for (const keyName of Object.keys(routeKeys)){
                        const paramName = routeKeys[keyName];
                        // If this param name is not a valid parameter name, then skip it.
                        if (!paramName) continue;
                        const group = groups[paramName];
                        const value = obj[keyName];
                        // When we're missing a required param, we can't match the route.
                        if (!group.optional && !value) return null;
                        result[group.pos] = value;
                    }
                    return result;
                }
            },
            groups
        });
        const routeMatches = matcher(routeMatchesHeader);
        if (!routeMatches) return null;
        return routeMatches;
    }
    return {
        handleRewrites,
        defaultRouteRegex,
        dynamicRouteMatcher,
        defaultRouteMatches,
        getParamsFromRouteMatches,
        /**
     * Normalize dynamic route params.
     *
     * @param query - The query params to normalize.
     * @param ignoreMissingOptional - Whether to ignore missing optional params.
     * @returns The normalized params and whether they are valid.
     */ normalizeDynamicRouteParams: (query, ignoreMissingOptional)=>{
            if (!defaultRouteRegex || !defaultRouteMatches) {
                return {
                    params: {},
                    hasValidParams: false
                };
            }
            return normalizeDynamicRouteParams(query, defaultRouteRegex, defaultRouteMatches, ignoreMissingOptional);
        },
        normalizeVercelUrl: (req, paramKeys)=>normalizeVercelUrl(req, paramKeys, defaultRouteRegex),
        interpolateDynamicPath: (pathname, params)=>interpolateDynamicPath(pathname, params, defaultRouteRegex)
    };
} //# sourceMappingURL=server-utils.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/hash.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
// http://www.cse.yorku.ca/~oz/hash.html
// More specifically, 32-bit hash via djbxor
// (ref: https://gist.github.com/eplawless/52813b1d8ad9af510d85?permalink_comment_id=3367765#gistcomment-3367765)
// This is due to number type differences between rust for turbopack to js number types,
// where rust does not have easy way to repreesnt js's 53-bit float number type for the matching
// overflow behavior. This is more `correct` in terms of having canonical hash across different runtime / implementation
// as can gaurantee determinstic output from 32bit hash.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    djb2Hash: null,
    hexHash: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    djb2Hash: function() {
        return djb2Hash;
    },
    hexHash: function() {
        return hexHash;
    }
});
function djb2Hash(str) {
    let hash = 5381;
    for(let i = 0; i < str.length; i++){
        const char = str.charCodeAt(i);
        hash = (hash << 5) + hash + char & 0xffffffff;
    }
    return hash >>> 0;
}
function hexHash(str) {
    return djb2Hash(str).toString(36).slice(0, 5);
} //# sourceMappingURL=hash.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    fillMetadataSegment: null,
    normalizeMetadataPageToRoute: null,
    normalizeMetadataRoute: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    fillMetadataSegment: function() {
        return fillMetadataSegment;
    },
    normalizeMetadataPageToRoute: function() {
        return normalizeMetadataPageToRoute;
    },
    normalizeMetadataRoute: function() {
        return normalizeMetadataRoute;
    }
});
const _ismetadataroute = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/lib/metadata/is-metadata-route.js [app-rsc] (ecmascript)");
const _path = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/isomorphic/path.js [app-rsc] (ecmascript)"));
const _serverutils = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/server-utils.js [app-rsc] (ecmascript)");
const _routeregex = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/router/utils/route-regex.js [app-rsc] (ecmascript)");
const _hash = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/hash.js [app-rsc] (ecmascript)");
const _apppaths = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
const _normalizepathsep = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/page-path/normalize-path-sep.js [app-rsc] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/shared/lib/segment.js [app-rsc] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/*
 * If there's special convention like (...) or @ in the page path,
 * Give it a unique hash suffix to avoid conflicts
 *
 * e.g.
 * /opengraph-image -> /opengraph-image
 * /(post)/opengraph-image.tsx -> /opengraph-image-[0-9a-z]{6}
 *
 * Sitemap is an exception, it should not have a suffix.
 * Each sitemap contains all the urls of sub routes, we don't have the case of duplicates `/(group)/sitemap.[ext]` and `/sitemap.[ext]` since they should be the same.
 * Hence we always normalize the urls for sitemap and do not append hash suffix, and ensure user-land only contains one sitemap per pathname.
 *
 * /sitemap -> /sitemap
 * /(post)/sitemap -> /sitemap
 */ function getMetadataRouteSuffix(page) {
    // Remove the last segment and get the parent pathname
    // e.g. /parent/a/b/c -> /parent/a/b
    // e.g. /parent/opengraph-image -> /parent
    const parentPathname = _path.default.dirname(page);
    // Only apply suffix to metadata routes except for sitemaps
    if (page.endsWith('/sitemap')) {
        return '';
    }
    // Calculate the hash suffix based on the parent path
    let suffix = '';
    // Check if there's any special characters in the parent pathname.
    const segments = parentPathname.split('/');
    if (segments.some((seg)=>(0, _segment.isGroupSegment)(seg) || (0, _segment.isParallelRouteSegment)(seg))) {
        // Hash the parent path to get a unique suffix
        suffix = (0, _hash.djb2Hash)(parentPathname).toString(36).slice(0, 6);
    }
    return suffix;
}
function fillMetadataSegment(segment, params, lastSegment) {
    const pathname = (0, _apppaths.normalizeAppPath)(segment);
    const routeRegex = (0, _routeregex.getNamedRouteRegex)(pathname, {
        prefixRouteKeys: false
    });
    const route = (0, _serverutils.interpolateDynamicPath)(pathname, params, routeRegex);
    const { name, ext } = _path.default.parse(lastSegment);
    const pagePath = _path.default.posix.join(segment, name);
    const suffix = getMetadataRouteSuffix(pagePath);
    const routeSuffix = suffix ? `-${suffix}` : '';
    return (0, _normalizepathsep.normalizePathSep)(_path.default.join(route, `${name}${routeSuffix}${ext}`));
}
function normalizeMetadataRoute(page) {
    if (!(0, _ismetadataroute.isMetadataRoute)(page)) {
        return page;
    }
    let route = page;
    let suffix = '';
    if (page === '/robots') {
        route += '.txt';
    } else if (page === '/manifest') {
        route += '.webmanifest';
    } else {
        suffix = getMetadataRouteSuffix(page);
    }
    // Support both /<metadata-route.ext> and custom routes /<metadata-route>/route.ts.
    // If it's a metadata file route, we need to append /[id]/route to the page.
    if (!route.endsWith('/route')) {
        const { dir, name: baseName, ext } = _path.default.parse(route);
        route = _path.default.posix.join(dir, `${baseName}${suffix ? `-${suffix}` : ''}${ext}`, 'route');
    }
    return route;
}
function normalizeMetadataPageToRoute(page, isDynamic) {
    const isRoute = page.endsWith('/route');
    const routePagePath = isRoute ? page.slice(0, -'/route'.length) : page;
    const metadataRouteExtension = routePagePath.endsWith('/sitemap') ? '.xml' : '';
    const mapped = isDynamic ? `${routePagePath}/[__metadata_id__]` : `${routePagePath}${metadataRouteExtension}`;
    return mapped + (isRoute ? '/route' : '');
} //# sourceMappingURL=get-metadata-route.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RouteKind": (()=>RouteKind)
});
var RouteKind = /*#__PURE__*/ function(RouteKind) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ RouteKind["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ RouteKind["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ RouteKind["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ RouteKind["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `IMAGE` represents all the images that are generated by `next/image`.
   */ RouteKind["IMAGE"] = "IMAGE";
    return RouteKind;
}({}); //# sourceMappingURL=route-kind.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactServerDOMTurbopackServerEdge; //# sourceMappingURL=react-server-dom-turbopack-server-edge.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/client/components/error-boundary.js (client reference/proxy) <module evaluation>": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/client/components/error-boundary.js <module evaluation>"));
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/client/components/error-boundary.js (client reference/proxy)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/client/components/error-boundary.js"));
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/client/components/error-boundary.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$error$2d$boundary$2e$js__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/client/components/error-boundary.js (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$error$2d$boundary$2e$js__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/client/components/error-boundary.js (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$error$2d$boundary$2e$js__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-static-edge.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactServerDOMTurbopackStaticEdge; //# sourceMappingURL=react-server-dom-turbopack-static-edge.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/layout-router.js (client reference/proxy) <module evaluation>": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/layout-router.js <module evaluation>"));
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/layout-router.js (client reference/proxy)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/layout-router.js"));
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/layout-router.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$layout$2d$router$2e$js__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/layout-router.js (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$layout$2d$router$2e$js__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/layout-router.js (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$layout$2d$router$2e$js__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/render-from-template-context.js (client reference/proxy) <module evaluation>": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/render-from-template-context.js <module evaluation>"));
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/render-from-template-context.js (client reference/proxy)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/render-from-template-context.js"));
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/render-from-template-context.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$render$2d$from$2d$template$2d$context$2e$js__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/render-from-template-context.js (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$render$2d$from$2d$template$2d$context$2e$js__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/render-from-template-context.js (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$render$2d$from$2d$template$2d$context$2e$js__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/client-page.js (client reference/proxy) <module evaluation>": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/client-page.js <module evaluation>"));
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/client-page.js (client reference/proxy)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/client-page.js"));
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/client-page.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$page$2e$js__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/client-page.js (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$page$2e$js__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/client-page.js (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$page$2e$js__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/client-segment.js (client reference/proxy) <module evaluation>": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/client-segment.js <module evaluation>"));
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/client-segment.js (client reference/proxy)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/client-segment.js"));
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/client-segment.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$segment$2e$js__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/client-segment.js (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$segment$2e$js__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/client-segment.js (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$segment$2e$js__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReflectAdapter": (()=>ReflectAdapter)
});
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
} //# sourceMappingURL=reflect.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].React; //# sourceMappingURL=react.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/hooks-server-context.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DynamicServerError": (()=>DynamicServerError),
    "isDynamicServerError": (()=>isDynamicServerError)
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super("Dynamic server usage: " + description), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
} //# sourceMappingURL=hooks-server-context.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/static-generation-bailout.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "StaticGenBailoutError": (()=>StaticGenBailoutError),
    "isStaticGenBailoutError": (()=>isStaticGenBailoutError)
});
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
} //# sourceMappingURL=static-generation-bailout.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isHangingPromiseRejectionError": (()=>isHangingPromiseRejectionError),
    "makeHangingPromise": (()=>makeHangingPromise)
});
function isHangingPromiseRejectionError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === HANGING_PROMISE_REJECTION;
}
const HANGING_PROMISE_REJECTION = 'HANGING_PROMISE_REJECTION';
class HangingPromiseRejectionError extends Error {
    constructor(expression){
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context.`), this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
    }
}
function makeHangingPromise(signal, expression) {
    const hangingPromise = new Promise((_, reject)=>{
        signal.addEventListener('abort', ()=>{
            reject(new HangingPromiseRejectionError(expression));
        }, {
            once: true
        });
    });
    // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
    // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
    // your own promise out of it you'll need to ensure you handle the error when it rejects.
    hangingPromise.catch(ignoreReject);
    return hangingPromise;
}
function ignoreReject() {} //# sourceMappingURL=dynamic-rendering-utils.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/metadata-constants.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "METADATA_BOUNDARY_NAME": (()=>METADATA_BOUNDARY_NAME),
    "OUTLET_BOUNDARY_NAME": (()=>OUTLET_BOUNDARY_NAME),
    "VIEWPORT_BOUNDARY_NAME": (()=>VIEWPORT_BOUNDARY_NAME)
});
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__'; //# sourceMappingURL=metadata-constants.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
/**
 * Schedules a function to be called on the next tick after the other promises
 * have been resolved.
 *
 * @param cb the function to schedule
 */ __turbopack_context__.s({
    "atLeastOneTask": (()=>atLeastOneTask),
    "scheduleImmediate": (()=>scheduleImmediate),
    "scheduleOnNextTick": (()=>scheduleOnNextTick),
    "waitAtLeastOneReactRenderTask": (()=>waitAtLeastOneReactRenderTask)
});
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        } else {
            process.nextTick(cb);
        }
    });
};
const scheduleImmediate = (cb)=>{
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        setImmediate(cb);
    }
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}
function waitAtLeastOneReactRenderTask() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        return new Promise((r)=>setImmediate(r));
    }
} //# sourceMappingURL=scheduler.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ // Once postpone is in stable we should switch to importing the postpone export directly
__turbopack_context__.s({
    "Postpone": (()=>Postpone),
    "abortAndThrowOnSynchronousRequestDataAccess": (()=>abortAndThrowOnSynchronousRequestDataAccess),
    "abortOnSynchronousPlatformIOAccess": (()=>abortOnSynchronousPlatformIOAccess),
    "accessedDynamicData": (()=>accessedDynamicData),
    "annotateDynamicAccess": (()=>annotateDynamicAccess),
    "consumeDynamicAccess": (()=>consumeDynamicAccess),
    "createDynamicTrackingState": (()=>createDynamicTrackingState),
    "createDynamicValidationState": (()=>createDynamicValidationState),
    "createHangingInputAbortSignal": (()=>createHangingInputAbortSignal),
    "createPostponedAbortSignal": (()=>createPostponedAbortSignal),
    "formatDynamicAPIAccesses": (()=>formatDynamicAPIAccesses),
    "getFirstDynamicReason": (()=>getFirstDynamicReason),
    "isDynamicPostpone": (()=>isDynamicPostpone),
    "isPrerenderInterruptedError": (()=>isPrerenderInterruptedError),
    "markCurrentScopeAsDynamic": (()=>markCurrentScopeAsDynamic),
    "postponeWithTracking": (()=>postponeWithTracking),
    "throwIfDisallowedDynamic": (()=>throwIfDisallowedDynamic),
    "throwToInterruptStaticGeneration": (()=>throwToInterruptStaticGeneration),
    "trackAllowedDynamicAccess": (()=>trackAllowedDynamicAccess),
    "trackDynamicDataInDynamicRender": (()=>trackDynamicDataInDynamicRender),
    "trackFallbackParamAccessed": (()=>trackFallbackParamAccessed),
    "trackSynchronousPlatformIOAccessInDev": (()=>trackSynchronousPlatformIOAccessInDev),
    "trackSynchronousRequestDataAccessInDev": (()=>trackSynchronousRequestDataAccessInDev),
    "useDynamicRouteParams": (()=>useDynamicRouteParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/static-generation-bailout.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/metadata-constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const hasPostpone = typeof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].unstable_postpone === 'function';
function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicExpression: undefined,
        syncDynamicErrorWithStack: null
    };
}
function createDynamicValidationState() {
    return {
        hasSuspendedDynamic: false,
        hasDynamicMetadata: false,
        hasDynamicViewport: false,
        hasSyncDynamicErrors: false,
        dynamicErrors: []
    };
}
function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
}
function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
            // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
            // creates a cache boundary. This is subtly different from reading a dynamic data source which is
            // forbidden inside a cache scope.
            return;
        }
    }
    // If we're forcing dynamic rendering or we're forcing static rendering, we
    // don't need to do anything here because the entire page is already dynamic
    // or it's static and it should not throw or postpone here.
    if (store.forceDynamic || store.forceStatic) return;
    if (store.dynamicShouldError) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E553",
            enumerable: false,
            configurable: true
        });
    }
    if (workUnitStore) {
        if (workUnitStore.type === 'prerender-ppr') {
            postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
        } else if (workUnitStore.type === 'prerender-legacy') {
            workUnitStore.revalidate = 0;
            // We aren't prerendering but we are generating a static page. We need to bail out of static generation
            const err = Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DynamicServerError"](`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                value: "E550",
                enumerable: false,
                configurable: true
            });
            store.dynamicUsageDescription = expression;
            store.dynamicUsageStack = err.stack;
            throw err;
        } else if (("TURBOPACK compile-time value", "development") === 'development' && workUnitStore && workUnitStore.type === 'request') {
            workUnitStore.usedDynamic = true;
        }
    }
}
function trackFallbackParamAccessed(store, expression) {
    const prerenderStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"].getStore();
    if (!prerenderStore || prerenderStore.type !== 'prerender-ppr') return;
    postponeWithTracking(store.route, expression, prerenderStore.dynamicTracking);
}
function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
    const err = Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DynamicServerError"](`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
    });
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
}
function trackDynamicDataInDynamicRender(_store, workUnitStore) {
    if (workUnitStore) {
        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
            // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
            // creates a cache boundary. This is subtly different from reading a dynamic data source which is
            // forbidden inside a cache scope.
            return;
        }
        if (workUnitStore.type === 'prerender' || workUnitStore.type === 'prerender-legacy') {
            workUnitStore.revalidate = 0;
        }
        if (("TURBOPACK compile-time value", "development") === 'development' && workUnitStore.type === 'request') {
            workUnitStore.usedDynamic = true;
        }
    }
}
// Despite it's name we don't actually abort unless we have a controller to call abort on
// There are times when we let a prerender run long to discover caches where we want the semantics
// of tracking dynamic access without terminating the prerender early
function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicExpression = expression;
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
    }
    return abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
}
function trackSynchronousPlatformIOAccessInDev(requestStore) {
    // We don't actually have a controller to abort but we do the semantic equivalent by
    // advancing the request store out of prerender mode
    requestStore.prerenderPhase = false;
}
function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicExpression = expression;
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
            if (prerenderStore.validating === true) {
                // We always log Request Access in dev at the point of calling the function
                // So we mark the dynamic validation as not requiring it to be printed
                dynamicTracking.syncDynamicLogged = true;
            }
        }
    }
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
}
const trackSynchronousRequestDataAccessInDev = trackSynchronousPlatformIOAccessInDev;
function Postpone({ reason, route }) {
    const prerenderStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"].getStore();
    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
}
function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].unstable_postpone(createPostponeReason(route, expression));
}
function createPostponeReason(route, expression) {
    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
}
function isDynamicPostpone(err) {
    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
        return isDynamicPostponeReason(err.message);
    }
    return false;
}
function isDynamicPostponeReason(reason) {
    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
}
if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
    throw Object.defineProperty(new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
    });
}
const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
function createPrerenderInterruptedError(message) {
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
}
function isPrerenderInterruptedError(error) {
    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
}
function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
}
function consumeDynamicAccess(serverDynamic, clientDynamic) {
    // We mutate because we only call this once we are no longer writing
    // to the dynamicTrackingState and it's more efficient than creating a new
    // array.
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
}
function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split('\n') // Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes('node_modules/next/')) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
            value: "E224",
            enumerable: false,
            configurable: true
        });
    }
}
function createPostponedAbortSignal(reason) {
    assertPostpone();
    const controller = new AbortController();
    // We get our hands on a postpone instance by calling postpone and catching the throw
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].unstable_postpone(reason);
    } catch (x) {
        controller.abort(x);
    }
    return controller.signal;
}
function createHangingInputAbortSignal(workUnitStore) {
    const controller = new AbortController();
    if (workUnitStore.cacheSignal) {
        // If we have a cacheSignal it means we're in a prospective render. If the input
        // we're waiting on is coming from another cache, we do want to wait for it so that
        // we can resolve this cache entry too.
        workUnitStore.cacheSignal.inputReady().then(()=>{
            controller.abort();
        });
    } else {
        // Otherwise we're in the final render and we should already have all our caches
        // filled. We might still be waiting on some microtasks so we wait one tick before
        // giving up. When we give up, we still want to render the content of this cache
        // as deeply as we can so that we can suspend as deeply as possible in the tree
        // or not at all if we don't end up waiting for the input.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scheduleOnNextTick"])(()=>controller.abort());
    }
    return controller.signal;
}
function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function useDynamicRouteParams(expression) {
    if ("TURBOPACK compile-time truthy", 1) {
        const workStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"].getStore();
        if (workStore && workStore.isStaticGeneration && workStore.fallbackRouteParams && workStore.fallbackRouteParams.size > 0) {
            // There are fallback route params, we should track these as dynamic
            // accesses.
            const workUnitStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"].getStore();
            if (workUnitStore) {
                // We're prerendering with dynamicIO or PPR or both
                if (workUnitStore.type === 'prerender') {
                    // We are in a prerender with dynamicIO semantics
                    // We are going to hang here and never resolve. This will cause the currently
                    // rendering component to effectively be a dynamic hole
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, expression));
                } else if (workUnitStore.type === 'prerender-ppr') {
                    // We're prerendering with PPR
                    postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
                } else if (workUnitStore.type === 'prerender-legacy') {
                    throwToInterruptStaticGeneration(expression, workStore, workUnitStore);
                }
            }
        }
    }
}
const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
const hasMetadataRegex = new RegExp(`\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["METADATA_BOUNDARY_NAME"]}[\\n\\s]`);
const hasViewportRegex = new RegExp(`\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VIEWPORT_BOUNDARY_NAME"]}[\\n\\s]`);
const hasOutletRegex = new RegExp(`\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OUTLET_BOUNDARY_NAME"]}[\\n\\s]`);
function trackAllowedDynamicAccess(route, componentStack, dynamicValidation, serverDynamic, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        dynamicValidation.hasSuspendedDynamic = true;
        return;
    } else if (serverDynamic.syncDynamicErrorWithStack || clientDynamic.syncDynamicErrorWithStack) {
        dynamicValidation.hasSyncDynamicErrors = true;
        return;
    } else {
        const message = `Route "${route}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`;
        const error = createErrorWithComponentStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
function createErrorWithComponentStack(message, componentStack) {
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.stack = 'Error: ' + message + componentStack;
    return error;
}
function throwIfDisallowedDynamic(route, dynamicValidation, serverDynamic, clientDynamic) {
    let syncError;
    let syncExpression;
    let syncLogged;
    if (serverDynamic.syncDynamicErrorWithStack) {
        syncError = serverDynamic.syncDynamicErrorWithStack;
        syncExpression = serverDynamic.syncDynamicExpression;
        syncLogged = serverDynamic.syncDynamicLogged === true;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        syncError = clientDynamic.syncDynamicErrorWithStack;
        syncExpression = clientDynamic.syncDynamicExpression;
        syncLogged = clientDynamic.syncDynamicLogged === true;
    } else {
        syncError = null;
        syncExpression = undefined;
        syncLogged = false;
    }
    if (dynamicValidation.hasSyncDynamicErrors && syncError) {
        if (!syncLogged) {
            // In dev we already log errors about sync dynamic access. But during builds we need to ensure
            // the offending sync error is logged before we exit the build
            console.error(syncError);
        }
        // The actual error should have been logged when the sync access ocurred
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StaticGenBailoutError"]();
    }
    const dynamicErrors = dynamicValidation.dynamicErrors;
    if (dynamicErrors.length) {
        for(let i = 0; i < dynamicErrors.length; i++){
            console.error(dynamicErrors[i]);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StaticGenBailoutError"]();
    }
    if (!dynamicValidation.hasSuspendedDynamic) {
        if (dynamicValidation.hasDynamicMetadata) {
            if (syncError) {
                console.error(syncError);
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route "${route}" has a \`generateMetadata\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`), "__NEXT_ERROR_CODE", {
                    value: "E608",
                    enumerable: false,
                    configurable: true
                });
            }
            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route "${route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`), "__NEXT_ERROR_CODE", {
                value: "E534",
                enumerable: false,
                configurable: true
            });
        } else if (dynamicValidation.hasDynamicViewport) {
            if (syncError) {
                console.error(syncError);
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route "${route}" has a \`generateViewport\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`), "__NEXT_ERROR_CODE", {
                    value: "E573",
                    enumerable: false,
                    configurable: true
                });
            }
            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route "${route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`), "__NEXT_ERROR_CODE", {
                value: "E590",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=dynamic-rendering.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InvariantError": (()=>InvariantError)
});
class InvariantError extends Error {
    constructor(message, options){
        super("Invariant: " + (message.endsWith('.') ? message : message + '.') + " This is a bug in Next.js.", options);
        this.name = 'InvariantError';
    }
} //# sourceMappingURL=invariant-error.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/create-deduped-by-callsite-server-error-logger.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createDedupedByCallsiteServerErrorLoggerDev": (()=>createDedupedByCallsiteServerErrorLoggerDev)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
const errorRef = {
    current: null
};
// React.cache is currently only available in canary/experimental React channels.
const cache = typeof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"] === 'function' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"] : (fn)=>fn;
// When Dynamic IO is enabled, we record these as errors so that they
// are captured by the dev overlay as it's more critical to fix these
// when enabled.
const logErrorOrWarn = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : console.warn;
// We don't want to dedupe across requests.
// The developer might've just attempted to fix the warning so we should warn again if it still happens.
const flushCurrentErrorIfNew = cache((key)=>{
    try {
        logErrorOrWarn(errorRef.current);
    } finally{
        errorRef.current = null;
    }
});
function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
    return function logDedupedError(...args) {
        const message = getMessage(...args);
        if ("TURBOPACK compile-time truthy", 1) {
            var _stack;
            const callStackFrames = (_stack = new Error().stack) == null ? void 0 : _stack.split('\n');
            if (callStackFrames === undefined || callStackFrames.length < 4) {
                logErrorOrWarn(message);
            } else {
                // Error:
                //   logDedupedError
                //   asyncApiBeingAccessedSynchronously
                //   <userland callsite>
                // TODO: This breaks if sourcemaps with ignore lists are enabled.
                const key = callStackFrames[4];
                errorRef.current = message;
                flushCurrentErrorIfNew(key);
            }
        } else {
            "TURBOPACK unreachable";
        }
    };
} //# sourceMappingURL=create-deduped-by-callsite-server-error-logger.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/request/utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "describeHasCheckingStringProperty": (()=>describeHasCheckingStringProperty),
    "describeStringPropertyAccess": (()=>describeStringPropertyAccess),
    "isRequestAPICallableInsideAfter": (()=>isRequestAPICallableInsideAfter),
    "throwForSearchParamsAccessInUseCache": (()=>throwForSearchParamsAccessInUseCache),
    "throwWithStaticGenerationBailoutError": (()=>throwWithStaticGenerationBailoutError),
    "throwWithStaticGenerationBailoutErrorWithDynamicError": (()=>throwWithStaticGenerationBailoutErrorWithDynamicError),
    "wellKnownProperties": (()=>wellKnownProperties)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/static-generation-bailout.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)");
;
;
// This regex will have fast negatives meaning valid identifiers may not pass
// this test. However this is only used during static generation to provide hints
// about why a page bailed out of some or all prerendering and we can use bracket notation
// for example while `ಠ_ಠ` is a valid identifier it's ok to print `searchParams['ಠ_ಠ']`
// even if this would have been fine too `searchParams.ಠ_ಠ`
const isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function describeStringPropertyAccess(target, prop) {
    if (isDefinitelyAValidIdentifier.test(prop)) {
        return `\`${target}.${prop}\``;
    }
    return `\`${target}[${JSON.stringify(prop)}]\``;
}
function describeHasCheckingStringProperty(target, prop) {
    const stringifiedProp = JSON.stringify(prop);
    return `\`Reflect.has(${target}, ${stringifiedProp})\`, \`${stringifiedProp} in ${target}\`, or similar`;
}
function throwWithStaticGenerationBailoutError(route, expression) {
    throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route ${route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
        value: "E576",
        enumerable: false,
        configurable: true
    });
}
function throwWithStaticGenerationBailoutErrorWithDynamicError(route, expression) {
    throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route ${route} with \`dynamic = "error"\` couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
        value: "E543",
        enumerable: false,
        configurable: true
    });
}
function throwForSearchParamsAccessInUseCache(route) {
    throw Object.defineProperty(new Error(`Route ${route} used "searchParams" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "searchParams" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
        value: "E634",
        enumerable: false,
        configurable: true
    });
}
function isRequestAPICallableInsideAfter() {
    const afterTaskStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["afterTaskAsyncStorage"].getStore();
    return (afterTaskStore == null ? void 0 : afterTaskStore.rootTaskSpawnPhase) === 'action';
}
const wellKnownProperties = new Set([
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    'toLocaleString',
    // Promise prototype
    // fallthrough
    'then',
    'catch',
    'finally',
    // React Promise extension
    // fallthrough
    'status',
    // React introspection
    'displayName',
    // Common tested properties
    // fallthrough
    'toJSON',
    '$$typeof',
    '__esModule'
]); //# sourceMappingURL=utils.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/request/search-params.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createPrerenderSearchParamsForClientPage": (()=>createPrerenderSearchParamsForClientPage),
    "createSearchParamsFromClient": (()=>createSearchParamsFromClient),
    "createServerSearchParamsForMetadata": (()=>createServerSearchParamsForMetadata),
    "createServerSearchParamsForServerPage": (()=>createServerSearchParamsForServerPage),
    "makeErroringExoticSearchParamsForUseCache": (()=>makeErroringExoticSearchParamsForUseCache)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$create$2d$deduped$2d$by$2d$callsite$2d$server$2d$error$2d$logger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/create-deduped-by-callsite-server-error-logger.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/request/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
function createSearchParamsFromClient(underlyingSearchParams, workStore) {
    const workUnitStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"].getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createPrerenderSearchParams(workStore, workUnitStore);
            default:
        }
    }
    return createRenderSearchParams(underlyingSearchParams, workStore);
}
const createServerSearchParamsForMetadata = createServerSearchParamsForServerPage;
function createServerSearchParamsForServerPage(underlyingSearchParams, workStore) {
    const workUnitStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"].getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createPrerenderSearchParams(workStore, workUnitStore);
            default:
        }
    }
    return createRenderSearchParams(underlyingSearchParams, workStore);
}
function createPrerenderSearchParamsForClientPage(workStore) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    }
    const prerenderStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"].getStore();
    if (prerenderStore && prerenderStore.type === 'prerender') {
        // dynamicIO Prerender
        // We're prerendering in a mode that aborts (dynamicIO) and should stall
        // the promise to ensure the RSC side is considered dynamic
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeHangingPromise"])(prerenderStore.renderSignal, '`searchParams`');
    }
    // We're prerendering in a mode that does not aborts. We resolve the promise without
    // any tracking because we're just transporting a value from server to client where the tracking
    // will be applied.
    return Promise.resolve({});
}
function createPrerenderSearchParams(workStore, prerenderStore) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    }
    if (prerenderStore.type === 'prerender') {
        // We are in a dynamicIO (PPR or otherwise) prerender
        return makeAbortingExoticSearchParams(workStore.route, prerenderStore);
    }
    // The remaining cases are prerender-ppr and prerender-legacy
    // We are in a legacy static generation and need to interrupt the prerender
    // when search params are accessed.
    return makeErroringExoticSearchParams(workStore, prerenderStore);
}
function createRenderSearchParams(underlyingSearchParams, workStore) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    } else {
        if (("TURBOPACK compile-time value", "development") === 'development' && !workStore.isPrefetchRequest) {
            return makeDynamicallyTrackedExoticSearchParamsWithDevWarnings(underlyingSearchParams, workStore);
        } else {
            return makeUntrackedExoticSearchParams(underlyingSearchParams, workStore);
        }
    }
}
const CachedSearchParams = new WeakMap();
const CachedSearchParamsForUseCache = new WeakMap();
function makeAbortingExoticSearchParams(route, prerenderStore) {
    const cachedSearchParams = CachedSearchParams.get(prerenderStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeHangingPromise"])(prerenderStore.renderSignal, '`searchParams`');
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it.
                // We know it isn't a dynamic access because it can only be something
                // that was previously written to the promise and thus not an underlying searchParam value
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
            }
            switch(prop){
                case 'then':
                    {
                        const expression = '`await searchParams`, `searchParams.then`, or similar';
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["annotateDynamicAccess"])(expression, prerenderStore);
                        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                    }
                case 'status':
                    {
                        const expression = '`use(searchParams)`, `searchParams.status`, or similar';
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["annotateDynamicAccess"])(expression, prerenderStore);
                        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                    }
                default:
                    {
                        if (typeof prop === 'string' && !__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wellKnownProperties"].has(prop)) {
                            const expression = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["describeStringPropertyAccess"])('searchParams', prop);
                            const error = createSearchAccessError(route, expression);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
                        }
                        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                    }
            }
        },
        has (target, prop) {
            // We don't expect key checking to be used except for testing the existence of
            // searchParams so we make all has tests trigger dynamic. this means that `promise.then`
            // can resolve to the then function on the Promise prototype but 'then' in promise will assume
            // you are testing whether the searchParams has a 'then' property.
            if (typeof prop === 'string') {
                const expression = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["describeHasCheckingStringProperty"])('searchParams', prop);
                const error = createSearchAccessError(route, expression);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, prop);
        },
        ownKeys () {
            const expression = '`{...searchParams}`, `Object.keys(searchParams)`, or similar';
            const error = createSearchAccessError(route, expression);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
        }
    });
    CachedSearchParams.set(prerenderStore, proxiedPromise);
    return proxiedPromise;
}
function makeErroringExoticSearchParams(workStore, prerenderStore) {
    const cachedSearchParams = CachedSearchParams.get(workStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const underlyingSearchParams = {};
    // For search params we don't construct a ReactPromise because we want to interrupt
    // rendering on any property access that was not set from outside and so we only want
    // to have properties like value and status if React sets them.
    const promise = Promise.resolve(underlyingSearchParams);
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it.
                // We know it isn't a dynamic access because it can only be something
                // that was previously written to the promise and thus not an underlying searchParam value
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
            }
            switch(prop){
                case 'then':
                    {
                        const expression = '`await searchParams`, `searchParams.then`, or similar';
                        if (workStore.dynamicShouldError) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwWithStaticGenerationBailoutErrorWithDynamicError"])(workStore.route, expression);
                        } else if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no dynamicIO)
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["postponeWithTracking"])(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwToInterruptStaticGeneration"])(expression, workStore, prerenderStore);
                        }
                        return;
                    }
                case 'status':
                    {
                        const expression = '`use(searchParams)`, `searchParams.status`, or similar';
                        if (workStore.dynamicShouldError) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwWithStaticGenerationBailoutErrorWithDynamicError"])(workStore.route, expression);
                        } else if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no dynamicIO)
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["postponeWithTracking"])(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwToInterruptStaticGeneration"])(expression, workStore, prerenderStore);
                        }
                        return;
                    }
                default:
                    {
                        if (typeof prop === 'string' && !__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wellKnownProperties"].has(prop)) {
                            const expression = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["describeStringPropertyAccess"])('searchParams', prop);
                            if (workStore.dynamicShouldError) {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwWithStaticGenerationBailoutErrorWithDynamicError"])(workStore.route, expression);
                            } else if (prerenderStore.type === 'prerender-ppr') {
                                // PPR Prerender (no dynamicIO)
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["postponeWithTracking"])(workStore.route, expression, prerenderStore.dynamicTracking);
                            } else {
                                // Legacy Prerender
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwToInterruptStaticGeneration"])(expression, workStore, prerenderStore);
                            }
                        }
                        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                    }
            }
        },
        has (target, prop) {
            // We don't expect key checking to be used except for testing the existence of
            // searchParams so we make all has tests trigger dynamic. this means that `promise.then`
            // can resolve to the then function on the Promise prototype but 'then' in promise will assume
            // you are testing whether the searchParams has a 'then' property.
            if (typeof prop === 'string') {
                const expression = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["describeHasCheckingStringProperty"])('searchParams', prop);
                if (workStore.dynamicShouldError) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwWithStaticGenerationBailoutErrorWithDynamicError"])(workStore.route, expression);
                } else if (prerenderStore.type === 'prerender-ppr') {
                    // PPR Prerender (no dynamicIO)
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["postponeWithTracking"])(workStore.route, expression, prerenderStore.dynamicTracking);
                } else {
                    // Legacy Prerender
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwToInterruptStaticGeneration"])(expression, workStore, prerenderStore);
                }
                return false;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, prop);
        },
        ownKeys () {
            const expression = '`{...searchParams}`, `Object.keys(searchParams)`, or similar';
            if (workStore.dynamicShouldError) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwWithStaticGenerationBailoutErrorWithDynamicError"])(workStore.route, expression);
            } else if (prerenderStore.type === 'prerender-ppr') {
                // PPR Prerender (no dynamicIO)
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["postponeWithTracking"])(workStore.route, expression, prerenderStore.dynamicTracking);
            } else {
                // Legacy Prerender
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwToInterruptStaticGeneration"])(expression, workStore, prerenderStore);
            }
        }
    });
    CachedSearchParams.set(workStore, proxiedPromise);
    return proxiedPromise;
}
function makeErroringExoticSearchParamsForUseCache(workStore) {
    const cachedSearchParams = CachedSearchParamsForUseCache.get(workStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const promise = Promise.resolve({});
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it. We know it
                // isn't a dynamic access because it can only be something that was
                // previously written to the promise and thus not an underlying
                // searchParam value
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
            }
            if (typeof prop === 'string' && (prop === 'then' || !__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wellKnownProperties"].has(prop))) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwForSearchParamsAccessInUseCache"])(workStore.route);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
        },
        has (target, prop) {
            // We don't expect key checking to be used except for testing the existence of
            // searchParams so we make all has tests throw an error. this means that `promise.then`
            // can resolve to the then function on the Promise prototype but 'then' in promise will assume
            // you are testing whether the searchParams has a 'then' property.
            if (typeof prop === 'string' && (prop === 'then' || !__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wellKnownProperties"].has(prop))) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwForSearchParamsAccessInUseCache"])(workStore.route);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, prop);
        },
        ownKeys () {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwForSearchParamsAccessInUseCache"])(workStore.route);
        }
    });
    CachedSearchParamsForUseCache.set(workStore, proxiedPromise);
    return proxiedPromise;
}
function makeUntrackedExoticSearchParams(underlyingSearchParams, store) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    // We don't use makeResolvedReactPromise here because searchParams
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(underlyingSearchParams);
    CachedSearchParams.set(underlyingSearchParams, promise);
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wellKnownProperties"].has(prop)) {
            Object.defineProperty(promise, prop, {
                get () {
                    const workUnitStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"].getStore();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trackDynamicDataInDynamicRender"])(store, workUnitStore);
                    return underlyingSearchParams[prop];
                },
                set (value) {
                    Object.defineProperty(promise, prop, {
                        value,
                        writable: true,
                        enumerable: true
                    });
                },
                enumerable: true,
                configurable: true
            });
        }
    });
    return promise;
}
function makeDynamicallyTrackedExoticSearchParamsWithDevWarnings(underlyingSearchParams, store) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const proxiedProperties = new Set();
    const unproxiedProperties = [];
    // We have an unfortunate sequence of events that requires this initialization logic. We want to instrument the underlying
    // searchParams object to detect if you are accessing values in dev. This is used for warnings and for things like the static prerender
    // indicator. However when we pass this proxy to our Promise.resolve() below the VM checks if the resolved value is a promise by looking
    // at the `.then` property. To our dynamic tracking logic this is indistinguishable from a `then` searchParam and so we would normally trigger
    // dynamic tracking. However we know that this .then is not real dynamic access, it's just how thenables resolve in sequence. So we introduce
    // this initialization concept so we omit the dynamic check until after we've constructed our resolved promise.
    let promiseInitialized = false;
    const proxiedUnderlying = new Proxy(underlyingSearchParams, {
        get (target, prop, receiver) {
            if (typeof prop === 'string' && promiseInitialized) {
                if (store.dynamicShouldError) {
                    const expression = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["describeStringPropertyAccess"])('searchParams', prop);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwWithStaticGenerationBailoutErrorWithDynamicError"])(store.route, expression);
                }
                const workUnitStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"].getStore();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trackDynamicDataInDynamicRender"])(store, workUnitStore);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (store.dynamicShouldError) {
                    const expression = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["describeHasCheckingStringProperty"])('searchParams', prop);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwWithStaticGenerationBailoutErrorWithDynamicError"])(store.route, expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            if (store.dynamicShouldError) {
                const expression = '`{...searchParams}`, `Object.keys(searchParams)`, or similar';
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwWithStaticGenerationBailoutErrorWithDynamicError"])(store.route, expression);
            }
            return Reflect.ownKeys(target);
        }
    });
    // We don't use makeResolvedReactPromise here because searchParams
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = new Promise((resolve)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scheduleImmediate"])(()=>resolve(underlyingSearchParams)));
    promise.then(()=>{
        promiseInitialized = true;
    });
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wellKnownProperties"].has(prop)) {
            // These properties cannot be shadowed because they need to be the
            // true underlying value for Promises to work correctly at runtime
            unproxiedProperties.push(prop);
        } else {
            proxiedProperties.add(prop);
            Object.defineProperty(promise, prop, {
                get () {
                    return proxiedUnderlying[prop];
                },
                set (newValue) {
                    Object.defineProperty(promise, prop, {
                        value: newValue,
                        writable: true,
                        enumerable: true
                    });
                },
                enumerable: true,
                configurable: true
            });
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (prop === 'then' && store.dynamicShouldError) {
                const expression = '`searchParams.then`';
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwWithStaticGenerationBailoutErrorWithDynamicError"])(store.route, expression);
            }
            if (typeof prop === 'string') {
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wellKnownProperties"].has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["describeStringPropertyAccess"])('searchParams', prop);
                    syncIODev(store.route, expression);
                }
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wellKnownProperties"].has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["describeHasCheckingStringProperty"])('searchParams', prop);
                    syncIODev(store.route, expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            const expression = '`Object.keys(searchParams)` or similar';
            syncIODev(store.route, expression, unproxiedProperties);
            return Reflect.ownKeys(target);
        }
    });
    CachedSearchParams.set(underlyingSearchParams, proxiedPromise);
    return proxiedPromise;
}
function syncIODev(route, expression, missingProperties) {
    // In all cases we warn normally
    if (missingProperties && missingProperties.length > 0) {
        warnForIncompleteEnumeration(route, expression, missingProperties);
    } else {
        warnForSyncAccess(route, expression);
    }
    const workUnitStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"].getStore();
    if (workUnitStore && workUnitStore.type === 'request' && workUnitStore.prerenderPhase === true) {
        // When we're rendering dynamically in dev we need to advance out of the
        // Prerender environment when we read Request data synchronously
        const requestStore = workUnitStore;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trackSynchronousRequestDataAccessInDev"])(requestStore);
    }
}
const warnForSyncAccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$create$2d$deduped$2d$by$2d$callsite$2d$server$2d$error$2d$logger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDedupedByCallsiteServerErrorLoggerDev"])(createSearchAccessError);
const warnForIncompleteEnumeration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$create$2d$deduped$2d$by$2d$callsite$2d$server$2d$error$2d$logger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDedupedByCallsiteServerErrorLoggerDev"])(createIncompleteEnumerationError);
function createSearchAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`searchParams\` should be awaited before using its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E249",
        enumerable: false,
        configurable: true
    });
}
function createIncompleteEnumerationError(route, expression, missingProperties) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`searchParams\` should be awaited before using its properties. ` + `The following properties were not available through enumeration ` + `because they conflict with builtin or well-known property names: ` + `${describeListOfPropertyNames(missingProperties)}. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E2",
        enumerable: false,
        configurable: true
    });
}
function describeListOfPropertyNames(properties) {
    switch(properties.length){
        case 0:
            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Expected describeListOfPropertyNames to be called with a non-empty list of strings.'), "__NEXT_ERROR_CODE", {
                value: "E531",
                enumerable: false,
                configurable: true
            });
        case 1:
            return `\`${properties[0]}\``;
        case 2:
            return `\`${properties[0]}\` and \`${properties[1]}\``;
        default:
            {
                let description = '';
                for(let i = 0; i < properties.length - 1; i++){
                    description += `\`${properties[i]}\`, `;
                }
                description += `, and \`${properties[properties.length - 1]}\``;
                return description;
            }
    }
} //# sourceMappingURL=search-params.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/request/params.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createParamsFromClient": (()=>createParamsFromClient),
    "createPrerenderParamsForClientSegment": (()=>createPrerenderParamsForClientSegment),
    "createServerParamsForMetadata": (()=>createServerParamsForMetadata),
    "createServerParamsForRoute": (()=>createServerParamsForRoute),
    "createServerParamsForServerSegment": (()=>createServerParamsForServerSegment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/request/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$create$2d$deduped$2d$by$2d$callsite$2d$server$2d$error$2d$logger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/create-deduped-by-callsite-server-error-logger.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
function createParamsFromClient(underlyingParams, workStore) {
    const workUnitStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"].getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createPrerenderParams(underlyingParams, workStore, workUnitStore);
            default:
        }
    }
    return createRenderParams(underlyingParams, workStore);
}
const createServerParamsForMetadata = createServerParamsForServerSegment;
function createServerParamsForRoute(underlyingParams, workStore) {
    const workUnitStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"].getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createPrerenderParams(underlyingParams, workStore, workUnitStore);
            default:
        }
    }
    return createRenderParams(underlyingParams, workStore);
}
function createServerParamsForServerSegment(underlyingParams, workStore) {
    const workUnitStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"].getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createPrerenderParams(underlyingParams, workStore, workUnitStore);
            default:
        }
    }
    return createRenderParams(underlyingParams, workStore);
}
function createPrerenderParamsForClientSegment(underlyingParams, workStore) {
    const prerenderStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"].getStore();
    if (prerenderStore && prerenderStore.type === 'prerender') {
        const fallbackParams = workStore.fallbackRouteParams;
        if (fallbackParams) {
            for(let key in underlyingParams){
                if (fallbackParams.has(key)) {
                    // This params object has one of more fallback params so we need to consider
                    // the awaiting of this params object "dynamic". Since we are in dynamicIO mode
                    // we encode this as a promise that never resolves
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeHangingPromise"])(prerenderStore.renderSignal, '`params`');
                }
            }
        }
    }
    // We're prerendering in a mode that does not abort. We resolve the promise without
    // any tracking because we're just transporting a value from server to client where the tracking
    // will be applied.
    return Promise.resolve(underlyingParams);
}
function createPrerenderParams(underlyingParams, workStore, prerenderStore) {
    const fallbackParams = workStore.fallbackRouteParams;
    if (fallbackParams) {
        let hasSomeFallbackParams = false;
        for(const key in underlyingParams){
            if (fallbackParams.has(key)) {
                hasSomeFallbackParams = true;
                break;
            }
        }
        if (hasSomeFallbackParams) {
            // params need to be treated as dynamic because we have at least one fallback param
            if (prerenderStore.type === 'prerender') {
                // We are in a dynamicIO (PPR or otherwise) prerender
                return makeAbortingExoticParams(underlyingParams, workStore.route, prerenderStore);
            }
            // remaining cases are prerender-ppr and prerender-legacy
            // We aren't in a dynamicIO prerender but we do have fallback params at this
            // level so we need to make an erroring exotic params object which will postpone
            // if you access the fallback params
            return makeErroringExoticParams(underlyingParams, fallbackParams, workStore, prerenderStore);
        }
    }
    // We don't have any fallback params so we have an entirely static safe params object
    return makeUntrackedExoticParams(underlyingParams);
}
function createRenderParams(underlyingParams, workStore) {
    if (("TURBOPACK compile-time value", "development") === 'development' && !workStore.isPrefetchRequest) {
        return makeDynamicallyTrackedExoticParamsWithDevWarnings(underlyingParams, workStore);
    } else {
        return makeUntrackedExoticParams(underlyingParams);
    }
}
const CachedParams = new WeakMap();
function makeAbortingExoticParams(underlyingParams, route, prerenderStore) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeHangingPromise"])(prerenderStore.renderSignal, '`params`');
    CachedParams.set(underlyingParams, promise);
    Object.keys(underlyingParams).forEach((prop)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wellKnownProperties"].has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            Object.defineProperty(promise, prop, {
                get () {
                    const expression = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["describeStringPropertyAccess"])('params', prop);
                    const error = createParamsAccessError(route, expression);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abortAndThrowOnSynchronousRequestDataAccess"])(route, expression, error, prerenderStore);
                },
                set (newValue) {
                    Object.defineProperty(promise, prop, {
                        value: newValue,
                        writable: true,
                        enumerable: true
                    });
                },
                enumerable: true,
                configurable: true
            });
        }
    });
    return promise;
}
function makeErroringExoticParams(underlyingParams, fallbackParams, workStore, prerenderStore) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const augmentedUnderlying = {
        ...underlyingParams
    };
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(augmentedUnderlying);
    CachedParams.set(underlyingParams, promise);
    Object.keys(underlyingParams).forEach((prop)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wellKnownProperties"].has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            if (fallbackParams.has(prop)) {
                Object.defineProperty(augmentedUnderlying, prop, {
                    get () {
                        const expression = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["describeStringPropertyAccess"])('params', prop);
                        // In most dynamic APIs we also throw if `dynamic = "error"` however
                        // for params is only dynamic when we're generating a fallback shell
                        // and even when `dynamic = "error"` we still support generating dynamic
                        // fallback shells
                        // TODO remove this comment when dynamicIO is the default since there
                        // will be no `dynamic = "error"`
                        if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no dynamicIO)
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["postponeWithTracking"])(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwToInterruptStaticGeneration"])(expression, workStore, prerenderStore);
                        }
                    },
                    enumerable: true
                });
                Object.defineProperty(promise, prop, {
                    get () {
                        const expression = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["describeStringPropertyAccess"])('params', prop);
                        // In most dynamic APIs we also throw if `dynamic = "error"` however
                        // for params is only dynamic when we're generating a fallback shell
                        // and even when `dynamic = "error"` we still support generating dynamic
                        // fallback shells
                        // TODO remove this comment when dynamicIO is the default since there
                        // will be no `dynamic = "error"`
                        if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no dynamicIO)
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["postponeWithTracking"])(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwToInterruptStaticGeneration"])(expression, workStore, prerenderStore);
                        }
                    },
                    set (newValue) {
                        Object.defineProperty(promise, prop, {
                            value: newValue,
                            writable: true,
                            enumerable: true
                        });
                    },
                    enumerable: true,
                    configurable: true
                });
            } else {
                ;
                promise[prop] = underlyingParams[prop];
            }
        }
    });
    return promise;
}
function makeUntrackedExoticParams(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(underlyingParams);
    CachedParams.set(underlyingParams, promise);
    Object.keys(underlyingParams).forEach((prop)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wellKnownProperties"].has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            ;
            promise[prop] = underlyingParams[prop];
        }
    });
    return promise;
}
function makeDynamicallyTrackedExoticParamsWithDevWarnings(underlyingParams, store) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = new Promise((resolve)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scheduleImmediate"])(()=>resolve(underlyingParams)));
    const proxiedProperties = new Set();
    const unproxiedProperties = [];
    Object.keys(underlyingParams).forEach((prop)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wellKnownProperties"].has(prop)) {
            // These properties cannot be shadowed because they need to be the
            // true underlying value for Promises to work correctly at runtime
            unproxiedProperties.push(prop);
        } else {
            proxiedProperties.add(prop);
            promise[prop] = underlyingParams[prop];
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    const expression = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["describeStringPropertyAccess"])('params', prop);
                    syncIODev(store.route, expression);
                }
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, prop, value, receiver);
        },
        ownKeys (target) {
            const expression = '`...params` or similar expression';
            syncIODev(store.route, expression, unproxiedProperties);
            return Reflect.ownKeys(target);
        }
    });
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
function syncIODev(route, expression, missingProperties) {
    const workUnitStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"].getStore();
    if (workUnitStore && workUnitStore.type === 'request' && workUnitStore.prerenderPhase === true) {
        // When we're rendering dynamically in dev we need to advance out of the
        // Prerender environment when we read Request data synchronously
        const requestStore = workUnitStore;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trackSynchronousRequestDataAccessInDev"])(requestStore);
    }
    // In all cases we warn normally
    if (missingProperties && missingProperties.length > 0) {
        warnForIncompleteEnumeration(route, expression, missingProperties);
    } else {
        warnForSyncAccess(route, expression);
    }
}
const warnForSyncAccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$create$2d$deduped$2d$by$2d$callsite$2d$server$2d$error$2d$logger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDedupedByCallsiteServerErrorLoggerDev"])(createParamsAccessError);
const warnForIncompleteEnumeration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$create$2d$deduped$2d$by$2d$callsite$2d$server$2d$error$2d$logger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDedupedByCallsiteServerErrorLoggerDev"])(createIncompleteEnumerationError);
function createParamsAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`params\` should be awaited before using its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E307",
        enumerable: false,
        configurable: true
    });
}
function createIncompleteEnumerationError(route, expression, missingProperties) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`params\` should be awaited before using its properties. ` + `The following properties were not available through enumeration ` + `because they conflict with builtin property names: ` + `${describeListOfPropertyNames(missingProperties)}. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E482",
        enumerable: false,
        configurable: true
    });
}
function describeListOfPropertyNames(properties) {
    switch(properties.length){
        case 0:
            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Expected describeListOfPropertyNames to be called with a non-empty list of strings.'), "__NEXT_ERROR_CODE", {
                value: "E531",
                enumerable: false,
                configurable: true
            });
        case 1:
            return `\`${properties[0]}\``;
        case 2:
            return `\`${properties[0]}\` and \`${properties[1]}\``;
        default:
            {
                let description = '';
                for(let i = 0; i < properties.length - 1; i++){
                    description += `\`${properties[i]}\`, `;
                }
                description += `, and \`${properties[properties.length - 1]}\``;
                return description;
            }
    }
} //# sourceMappingURL=params.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js (client reference/proxy) <module evaluation>": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js <module evaluation>"));
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js (client reference/proxy)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js"));
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$error$2d$boundary$2e$js__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$error$2d$boundary$2e$js__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$error$2d$boundary$2e$js__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxRuntime; //# sourceMappingURL=react-jsx-runtime.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/non-nullable.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "nonNullable": (()=>nonNullable)
});
function nonNullable(value) {
    return value !== null && value !== undefined;
} //# sourceMappingURL=non-nullable.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/generate/meta.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Meta": (()=>Meta),
    "MetaFilter": (()=>MetaFilter),
    "MultiMeta": (()=>MultiMeta)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$non$2d$nullable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/non-nullable.js [app-rsc] (ecmascript)");
;
;
;
function Meta({ name, property, content, media }) {
    if (typeof content !== 'undefined' && content !== null && content !== '') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("meta", {
            ...name ? {
                name
            } : {
                property
            },
            ...media ? {
                media
            } : undefined,
            content: typeof content === 'string' ? content : content.toString()
        });
    }
    return null;
}
function MetaFilter(items) {
    const acc = [];
    for (const item of items){
        if (Array.isArray(item)) {
            acc.push(...item.filter(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$non$2d$nullable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nonNullable"]));
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$non$2d$nullable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nonNullable"])(item)) {
            acc.push(item);
        }
    }
    return acc;
}
function camelToSnake(camelCaseStr) {
    return camelCaseStr.replace(/([A-Z])/g, function(match) {
        return '_' + match.toLowerCase();
    });
}
const aliasPropPrefixes = new Set([
    'og:image',
    'twitter:image',
    'og:video',
    'og:audio'
]);
function getMetaKey(prefix, key) {
    // Use `twitter:image` and `og:image` instead of `twitter:image:url` and `og:image:url`
    // to be more compatible as it's a more common format.
    // `og:video` & `og:audio` do not have a `:url` suffix alias
    if (aliasPropPrefixes.has(prefix) && key === 'url') {
        return prefix;
    }
    if (prefix.startsWith('og:') || prefix.startsWith('twitter:')) {
        key = camelToSnake(key);
    }
    return prefix + ':' + key;
}
function ExtendMeta({ content, namePrefix, propertyPrefix }) {
    if (!content) return null;
    return MetaFilter(Object.entries(content).map(([k, v])=>{
        return typeof v === 'undefined' ? null : Meta({
            ...propertyPrefix && {
                property: getMetaKey(propertyPrefix, k)
            },
            ...namePrefix && {
                name: getMetaKey(namePrefix, k)
            },
            content: typeof v === 'string' ? v : v == null ? void 0 : v.toString()
        });
    }));
}
function MultiMeta({ propertyPrefix, namePrefix, contents }) {
    if (typeof contents === 'undefined' || contents === null) {
        return null;
    }
    return MetaFilter(contents.map((content)=>{
        if (typeof content === 'string' || typeof content === 'number' || content instanceof URL) {
            return Meta({
                ...propertyPrefix ? {
                    property: propertyPrefix
                } : {
                    name: namePrefix
                },
                content
            });
        } else {
            return ExtendMeta({
                namePrefix,
                propertyPrefix,
                content
            });
        }
    }));
} //# sourceMappingURL=meta.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/constants.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconKeys": (()=>IconKeys),
    "ViewportMetaKeys": (()=>ViewportMetaKeys)
});
const ViewportMetaKeys = {
    width: 'width',
    height: 'height',
    initialScale: 'initial-scale',
    minimumScale: 'minimum-scale',
    maximumScale: 'maximum-scale',
    viewportFit: 'viewport-fit',
    userScalable: 'user-scalable',
    interactiveWidget: 'interactive-widget'
};
const IconKeys = [
    'icon',
    'shortcut',
    'apple',
    'other'
]; //# sourceMappingURL=constants.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/generate/utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getOrigin": (()=>getOrigin),
    "resolveArray": (()=>resolveArray),
    "resolveAsArrayOrUndefined": (()=>resolveAsArrayOrUndefined)
});
function resolveArray(value) {
    if (Array.isArray(value)) {
        return value;
    }
    return [
        value
    ];
}
function resolveAsArrayOrUndefined(value) {
    if (typeof value === 'undefined' || value === null) {
        return undefined;
    }
    return resolveArray(value);
}
function getOrigin(url) {
    let origin = undefined;
    if (typeof url === 'string') {
        try {
            url = new URL(url);
            origin = url.origin;
        } catch  {}
    }
    return origin;
}
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/generate/basic.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AppleWebAppMeta": (()=>AppleWebAppMeta),
    "BasicMeta": (()=>BasicMeta),
    "FacebookMeta": (()=>FacebookMeta),
    "FormatDetectionMeta": (()=>FormatDetectionMeta),
    "ItunesMeta": (()=>ItunesMeta),
    "VerificationMeta": (()=>VerificationMeta),
    "ViewportMeta": (()=>ViewportMeta)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/generate/meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/generate/utils.js [app-rsc] (ecmascript)");
;
;
;
;
// convert viewport object to string for viewport meta tag
function resolveViewportLayout(viewport) {
    let resolved = null;
    if (viewport && typeof viewport === 'object') {
        resolved = '';
        for(const viewportKey_ in __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ViewportMetaKeys"]){
            const viewportKey = viewportKey_;
            if (viewportKey in viewport) {
                let value = viewport[viewportKey];
                if (typeof value === 'boolean') {
                    value = value ? 'yes' : 'no';
                } else if (!value && viewportKey === 'initialScale') {
                    value = undefined;
                }
                if (value) {
                    if (resolved) resolved += ', ';
                    resolved += `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ViewportMetaKeys"][viewportKey]}=${value}`;
                }
            }
        }
    }
    return resolved;
}
function ViewportMeta({ viewport }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("meta", {
            charSet: "utf-8"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'viewport',
            content: resolveViewportLayout(viewport)
        }),
        ...viewport.themeColor ? viewport.themeColor.map((themeColor)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                name: 'theme-color',
                content: themeColor.color,
                media: themeColor.media
            })) : [],
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'color-scheme',
            content: viewport.colorScheme
        })
    ]);
}
function BasicMeta({ metadata }) {
    var _metadata_keywords, _metadata_robots, _metadata_robots1;
    const manifestOrigin = metadata.manifest ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOrigin"])(metadata.manifest) : undefined;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        metadata.title !== null && metadata.title.absolute ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("title", {
            children: metadata.title.absolute
        }) : null,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'description',
            content: metadata.description
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'application-name',
            content: metadata.applicationName
        }),
        ...metadata.authors ? metadata.authors.map((author)=>[
                author.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("link", {
                    rel: "author",
                    href: author.url.toString()
                }) : null,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                    name: 'author',
                    content: author.name
                })
            ]) : [],
        metadata.manifest ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("link", {
            rel: "manifest",
            href: metadata.manifest.toString(),
            // If it's same origin, and it's a preview deployment,
            // including credentials for manifest request.
            crossOrigin: !manifestOrigin && process.env.VERCEL_ENV === 'preview' ? 'use-credentials' : undefined
        }) : null,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'generator',
            content: metadata.generator
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'keywords',
            content: (_metadata_keywords = metadata.keywords) == null ? void 0 : _metadata_keywords.join(',')
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'referrer',
            content: metadata.referrer
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'creator',
            content: metadata.creator
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'publisher',
            content: metadata.publisher
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'robots',
            content: (_metadata_robots = metadata.robots) == null ? void 0 : _metadata_robots.basic
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'googlebot',
            content: (_metadata_robots1 = metadata.robots) == null ? void 0 : _metadata_robots1.googleBot
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'abstract',
            content: metadata.abstract
        }),
        ...metadata.archives ? metadata.archives.map((archive)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("link", {
                rel: "archives",
                href: archive
            })) : [],
        ...metadata.assets ? metadata.assets.map((asset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("link", {
                rel: "assets",
                href: asset
            })) : [],
        ...metadata.bookmarks ? metadata.bookmarks.map((bookmark)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("link", {
                rel: "bookmarks",
                href: bookmark
            })) : [],
        ...metadata.pagination ? [
            metadata.pagination.previous ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("link", {
                rel: "prev",
                href: metadata.pagination.previous
            }) : null,
            metadata.pagination.next ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("link", {
                rel: "next",
                href: metadata.pagination.next
            }) : null
        ] : [],
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'category',
            content: metadata.category
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'classification',
            content: metadata.classification
        }),
        ...metadata.other ? Object.entries(metadata.other).map(([name, content])=>{
            if (Array.isArray(content)) {
                return content.map((contentItem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        name,
                        content: contentItem
                    }));
            } else {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                    name,
                    content
                });
            }
        }) : []
    ]);
}
function ItunesMeta({ itunes }) {
    if (!itunes) return null;
    const { appId, appArgument } = itunes;
    let content = `app-id=${appId}`;
    if (appArgument) {
        content += `, app-argument=${appArgument}`;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("meta", {
        name: "apple-itunes-app",
        content: content
    });
}
function FacebookMeta({ facebook }) {
    if (!facebook) return null;
    const { appId, admins } = facebook;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        appId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("meta", {
            property: "fb:app_id",
            content: appId
        }) : null,
        ...admins ? admins.map((admin)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("meta", {
                property: "fb:admins",
                content: admin
            })) : []
    ]);
}
const formatDetectionKeys = [
    'telephone',
    'date',
    'address',
    'email',
    'url'
];
function FormatDetectionMeta({ formatDetection }) {
    if (!formatDetection) return null;
    let content = '';
    for (const key of formatDetectionKeys){
        if (key in formatDetection) {
            if (content) content += ', ';
            content += `${key}=no`;
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("meta", {
        name: "format-detection",
        content: content
    });
}
function AppleWebAppMeta({ appleWebApp }) {
    if (!appleWebApp) return null;
    const { capable, title, startupImage, statusBarStyle } = appleWebApp;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        capable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'mobile-web-app-capable',
            content: 'yes'
        }) : null,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'apple-mobile-web-app-title',
            content: title
        }),
        startupImage ? startupImage.map((image)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("link", {
                href: image.url,
                media: image.media,
                rel: "apple-touch-startup-image"
            })) : null,
        statusBarStyle ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'apple-mobile-web-app-status-bar-style',
            content: statusBarStyle
        }) : null
    ]);
}
function VerificationMeta({ verification }) {
    if (!verification) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            namePrefix: 'google-site-verification',
            contents: verification.google
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            namePrefix: 'y_key',
            contents: verification.yahoo
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            namePrefix: 'yandex-verification',
            contents: verification.yandex
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            namePrefix: 'me',
            contents: verification.me
        }),
        ...verification.other ? Object.entries(verification.other).map(([key, value])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                namePrefix: key,
                contents: value
            })) : []
    ]);
} //# sourceMappingURL=basic.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/generate/alternate.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AlternatesMetadata": (()=>AlternatesMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/generate/meta.js [app-rsc] (ecmascript)");
;
;
;
function AlternateLink({ descriptor, ...props }) {
    if (!descriptor.url) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("link", {
        ...props,
        ...descriptor.title && {
            title: descriptor.title
        },
        href: descriptor.url.toString()
    });
}
function AlternatesMetadata({ alternates }) {
    if (!alternates) return null;
    const { canonical, languages, media, types } = alternates;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        canonical ? AlternateLink({
            rel: 'canonical',
            descriptor: canonical
        }) : null,
        languages ? Object.entries(languages).flatMap(([locale, descriptors])=>descriptors == null ? void 0 : descriptors.map((descriptor)=>AlternateLink({
                    rel: 'alternate',
                    hrefLang: locale,
                    descriptor
                }))) : null,
        media ? Object.entries(media).flatMap(([mediaName, descriptors])=>descriptors == null ? void 0 : descriptors.map((descriptor)=>AlternateLink({
                    rel: 'alternate',
                    media: mediaName,
                    descriptor
                }))) : null,
        types ? Object.entries(types).flatMap(([type, descriptors])=>descriptors == null ? void 0 : descriptors.map((descriptor)=>AlternateLink({
                    rel: 'alternate',
                    type,
                    descriptor
                }))) : null
    ]);
} //# sourceMappingURL=alternate.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/generate/opengraph.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AppLinksMeta": (()=>AppLinksMeta),
    "OpenGraphMetadata": (()=>OpenGraphMetadata),
    "TwitterMetadata": (()=>TwitterMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/generate/meta.js [app-rsc] (ecmascript)");
;
function OpenGraphMetadata({ openGraph }) {
    var _openGraph_title, _openGraph_url, _openGraph_ttl;
    if (!openGraph) {
        return null;
    }
    let typedOpenGraph;
    if ('type' in openGraph) {
        const openGraphType = openGraph.type;
        switch(openGraphType){
            case 'website':
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'website'
                    })
                ];
                break;
            case 'article':
                var _openGraph_publishedTime, _openGraph_modifiedTime, _openGraph_expirationTime;
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'article'
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'article:published_time',
                        content: (_openGraph_publishedTime = openGraph.publishedTime) == null ? void 0 : _openGraph_publishedTime.toString()
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'article:modified_time',
                        content: (_openGraph_modifiedTime = openGraph.modifiedTime) == null ? void 0 : _openGraph_modifiedTime.toString()
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'article:expiration_time',
                        content: (_openGraph_expirationTime = openGraph.expirationTime) == null ? void 0 : _openGraph_expirationTime.toString()
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'article:author',
                        contents: openGraph.authors
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'article:section',
                        content: openGraph.section
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'article:tag',
                        contents: openGraph.tags
                    })
                ];
                break;
            case 'book':
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'book'
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'book:isbn',
                        content: openGraph.isbn
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'book:release_date',
                        content: openGraph.releaseDate
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'book:author',
                        contents: openGraph.authors
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'book:tag',
                        contents: openGraph.tags
                    })
                ];
                break;
            case 'profile':
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'profile'
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'profile:first_name',
                        content: openGraph.firstName
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'profile:last_name',
                        content: openGraph.lastName
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'profile:username',
                        content: openGraph.username
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'profile:gender',
                        content: openGraph.gender
                    })
                ];
                break;
            case 'music.song':
                var _openGraph_duration;
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'music.song'
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'music:duration',
                        content: (_openGraph_duration = openGraph.duration) == null ? void 0 : _openGraph_duration.toString()
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'music:album',
                        contents: openGraph.albums
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'music:musician',
                        contents: openGraph.musicians
                    })
                ];
                break;
            case 'music.album':
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'music.album'
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'music:song',
                        contents: openGraph.songs
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'music:musician',
                        contents: openGraph.musicians
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'music:release_date',
                        content: openGraph.releaseDate
                    })
                ];
                break;
            case 'music.playlist':
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'music.playlist'
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'music:song',
                        contents: openGraph.songs
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'music:creator',
                        contents: openGraph.creators
                    })
                ];
                break;
            case 'music.radio_station':
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'music.radio_station'
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'music:creator',
                        contents: openGraph.creators
                    })
                ];
                break;
            case 'video.movie':
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'video.movie'
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'video:actor',
                        contents: openGraph.actors
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'video:director',
                        contents: openGraph.directors
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'video:writer',
                        contents: openGraph.writers
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'video:duration',
                        content: openGraph.duration
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'video:release_date',
                        content: openGraph.releaseDate
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'video:tag',
                        contents: openGraph.tags
                    })
                ];
                break;
            case 'video.episode':
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'video.episode'
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'video:actor',
                        contents: openGraph.actors
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'video:director',
                        contents: openGraph.directors
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'video:writer',
                        contents: openGraph.writers
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'video:duration',
                        content: openGraph.duration
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'video:release_date',
                        content: openGraph.releaseDate
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'video:tag',
                        contents: openGraph.tags
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'video:series',
                        content: openGraph.series
                    })
                ];
                break;
            case 'video.tv_show':
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'video.tv_show'
                    })
                ];
                break;
            case 'video.other':
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'video.other'
                    })
                ];
                break;
            default:
                const _exhaustiveCheck = openGraphType;
                throw Object.defineProperty(new Error(`Invalid OpenGraph type: ${_exhaustiveCheck}`), "__NEXT_ERROR_CODE", {
                    value: "E237",
                    enumerable: false,
                    configurable: true
                });
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            property: 'og:determiner',
            content: openGraph.determiner
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            property: 'og:title',
            content: (_openGraph_title = openGraph.title) == null ? void 0 : _openGraph_title.absolute
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            property: 'og:description',
            content: openGraph.description
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            property: 'og:url',
            content: (_openGraph_url = openGraph.url) == null ? void 0 : _openGraph_url.toString()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            property: 'og:site_name',
            content: openGraph.siteName
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            property: 'og:locale',
            content: openGraph.locale
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            property: 'og:country_name',
            content: openGraph.countryName
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            property: 'og:ttl',
            content: (_openGraph_ttl = openGraph.ttl) == null ? void 0 : _openGraph_ttl.toString()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'og:image',
            contents: openGraph.images
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'og:video',
            contents: openGraph.videos
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'og:audio',
            contents: openGraph.audio
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'og:email',
            contents: openGraph.emails
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'og:phone_number',
            contents: openGraph.phoneNumbers
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'og:fax_number',
            contents: openGraph.faxNumbers
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'og:locale:alternate',
            contents: openGraph.alternateLocale
        }),
        ...typedOpenGraph ? typedOpenGraph : []
    ]);
}
function TwitterAppItem({ app, type }) {
    var _app_url_type, _app_url;
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: `twitter:app:name:${type}`,
            content: app.name
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: `twitter:app:id:${type}`,
            content: app.id[type]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: `twitter:app:url:${type}`,
            content: (_app_url = app.url) == null ? void 0 : (_app_url_type = _app_url[type]) == null ? void 0 : _app_url_type.toString()
        })
    ];
}
function TwitterMetadata({ twitter }) {
    var _twitter_title;
    if (!twitter) return null;
    const { card } = twitter;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'twitter:card',
            content: card
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'twitter:site',
            content: twitter.site
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'twitter:site:id',
            content: twitter.siteId
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'twitter:creator',
            content: twitter.creator
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'twitter:creator:id',
            content: twitter.creatorId
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'twitter:title',
            content: (_twitter_title = twitter.title) == null ? void 0 : _twitter_title.absolute
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'twitter:description',
            content: twitter.description
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            namePrefix: 'twitter:image',
            contents: twitter.images
        }),
        ...card === 'player' ? twitter.players.flatMap((player)=>[
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                    name: 'twitter:player',
                    content: player.playerUrl.toString()
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                    name: 'twitter:player:stream',
                    content: player.streamUrl.toString()
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                    name: 'twitter:player:width',
                    content: player.width
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                    name: 'twitter:player:height',
                    content: player.height
                })
            ]) : [],
        ...card === 'app' ? [
            TwitterAppItem({
                app: twitter.app,
                type: 'iphone'
            }),
            TwitterAppItem({
                app: twitter.app,
                type: 'ipad'
            }),
            TwitterAppItem({
                app: twitter.app,
                type: 'googleplay'
            })
        ] : []
    ]);
}
function AppLinksMeta({ appLinks }) {
    if (!appLinks) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'al:ios',
            contents: appLinks.ios
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'al:iphone',
            contents: appLinks.iphone
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'al:ipad',
            contents: appLinks.ipad
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'al:android',
            contents: appLinks.android
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'al:windows_phone',
            contents: appLinks.windows_phone
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'al:windows',
            contents: appLinks.windows
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'al:windows_universal',
            contents: appLinks.windows_universal
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'al:web',
            contents: appLinks.web
        })
    ]);
} //# sourceMappingURL=opengraph.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/generate/icons.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconsMetadata": (()=>IconsMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/generate/meta.js [app-rsc] (ecmascript)");
;
;
;
function IconDescriptorLink({ icon }) {
    const { url, rel = 'icon', ...props } = icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("link", {
        rel: rel,
        href: url.toString(),
        ...props
    });
}
function IconLink({ rel, icon }) {
    if (typeof icon === 'object' && !(icon instanceof URL)) {
        if (!icon.rel && rel) icon.rel = rel;
        return IconDescriptorLink({
            icon
        });
    } else {
        const href = icon.toString();
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("link", {
            rel: rel,
            href: href
        });
    }
}
function IconsMetadata({ icons }) {
    if (!icons) return null;
    const shortcutList = icons.shortcut;
    const iconList = icons.icon;
    const appleList = icons.apple;
    const otherList = icons.other;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        shortcutList ? shortcutList.map((icon)=>IconLink({
                rel: 'shortcut icon',
                icon
            })) : null,
        iconList ? iconList.map((icon)=>IconLink({
                rel: 'icon',
                icon
            })) : null,
        appleList ? appleList.map((icon)=>IconLink({
                rel: 'apple-touch-icon',
                icon
            })) : null,
        otherList ? otherList.map((icon)=>IconDescriptorLink({
                icon
            })) : null
    ]);
} //# sourceMappingURL=icons.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/default-metadata.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createDefaultMetadata": (()=>createDefaultMetadata),
    "createDefaultViewport": (()=>createDefaultViewport)
});
function createDefaultViewport() {
    return {
        // name=viewport
        width: 'device-width',
        initialScale: 1,
        // visual metadata
        themeColor: null,
        colorScheme: null
    };
}
function createDefaultMetadata() {
    return {
        // Deprecated ones
        viewport: null,
        themeColor: null,
        colorScheme: null,
        metadataBase: null,
        // Other values are all null
        title: null,
        description: null,
        applicationName: null,
        authors: null,
        generator: null,
        keywords: null,
        referrer: null,
        creator: null,
        publisher: null,
        robots: null,
        manifest: null,
        alternates: {
            canonical: null,
            languages: null,
            media: null,
            types: null
        },
        icons: null,
        openGraph: null,
        twitter: null,
        verification: {},
        appleWebApp: null,
        formatDetection: null,
        itunes: null,
        facebook: null,
        abstract: null,
        appLinks: null,
        archives: null,
        assets: null,
        bookmarks: null,
        category: null,
        classification: null,
        pagination: {
            previous: null,
            next: null
        },
        other: {}
    };
} //# sourceMappingURL=default-metadata.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/isomorphic/path.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * This module is for next.js server internal usage of path module.
 * It will use native path module for nodejs runtime.
 * It will use path-browserify polyfill for edge runtime.
 */ let path;
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
}
module.exports = path; //# sourceMappingURL=path.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/resolvers/resolve-url.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getSocialImageMetadataBaseFallback": (()=>getSocialImageMetadataBaseFallback),
    "isStringOrURL": (()=>isStringOrURL),
    "resolveAbsoluteUrlWithPathname": (()=>resolveAbsoluteUrlWithPathname),
    "resolveRelativeUrl": (()=>resolveRelativeUrl),
    "resolveUrl": (()=>resolveUrl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$isomorphic$2f$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/isomorphic/path.js [app-rsc] (ecmascript)");
;
function isStringOrURL(icon) {
    return typeof icon === 'string' || icon instanceof URL;
}
function createLocalMetadataBase() {
    return new URL(`http://localhost:${process.env.PORT || 3000}`);
}
function getPreviewDeploymentUrl() {
    const origin = process.env.VERCEL_BRANCH_URL || process.env.VERCEL_URL;
    return origin ? new URL(`https://${origin}`) : undefined;
}
function getProductionDeploymentUrl() {
    const origin = process.env.VERCEL_PROJECT_PRODUCTION_URL;
    return origin ? new URL(`https://${origin}`) : undefined;
}
function getSocialImageMetadataBaseFallback(metadataBase) {
    const defaultMetadataBase = createLocalMetadataBase();
    const previewDeploymentUrl = getPreviewDeploymentUrl();
    const productionDeploymentUrl = getProductionDeploymentUrl();
    let fallbackMetadataBase;
    if ("TURBOPACK compile-time truthy", 1) {
        fallbackMetadataBase = defaultMetadataBase;
    } else {
        "TURBOPACK unreachable";
    }
    return fallbackMetadataBase;
}
function resolveUrl(url, metadataBase) {
    if (url instanceof URL) return url;
    if (!url) return null;
    try {
        // If we can construct a URL instance from url, ignore metadataBase
        const parsedUrl = new URL(url);
        return parsedUrl;
    } catch  {}
    if (!metadataBase) {
        metadataBase = createLocalMetadataBase();
    }
    // Handle relative or absolute paths
    const basePath = metadataBase.pathname || '';
    const joinedPath = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$isomorphic$2f$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].posix.join(basePath, url);
    return new URL(joinedPath, metadataBase);
}
// Resolve with `pathname` if `url` is a relative path.
function resolveRelativeUrl(url, pathname) {
    if (typeof url === 'string' && url.startsWith('./')) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$isomorphic$2f$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].posix.resolve(pathname, url);
    }
    return url;
}
// The regex is matching logic from packages/next/src/lib/load-custom-routes.ts
const FILE_REGEX = /^(?:\/((?!\.well-known(?:\/.*)?)(?:[^/]+\/)*[^/]+\.\w+))(\/?|$)/i;
function isFilePattern(pathname) {
    return FILE_REGEX.test(pathname);
}
// Resolve `pathname` if `url` is a relative path the compose with `metadataBase`.
function resolveAbsoluteUrlWithPathname(url, metadataBase, { trailingSlash, pathname }) {
    // Resolve url with pathname that always starts with `/`
    url = resolveRelativeUrl(url, pathname);
    // Convert string url or URL instance to absolute url string,
    // if there's case needs to be resolved with metadataBase
    let resolvedUrl = '';
    const result = metadataBase ? resolveUrl(url, metadataBase) : url;
    if (typeof result === 'string') {
        resolvedUrl = result;
    } else {
        resolvedUrl = result.pathname === '/' ? result.origin : result.href;
    }
    // Add trailing slash if it's enabled for urls matches the condition
    // - Not external, same origin with metadataBase
    // - Doesn't have query
    if (trailingSlash && !resolvedUrl.endsWith('/')) {
        let isRelative = resolvedUrl.startsWith('/');
        let hasQuery = resolvedUrl.includes('?');
        let isExternal = false;
        let isFileUrl = false;
        if (!isRelative) {
            try {
                const parsedUrl = new URL(resolvedUrl);
                isExternal = metadataBase != null && parsedUrl.origin !== metadataBase.origin;
                isFileUrl = isFilePattern(parsedUrl.pathname);
            } catch  {
                // If it's not a valid URL, treat it as external
                isExternal = true;
            }
            if (!isFileUrl && !isExternal && !hasQuery) return `${resolvedUrl}/`;
        }
    }
    return resolvedUrl;
}
;
 //# sourceMappingURL=resolve-url.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/resolvers/resolve-title.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "resolveTitle": (()=>resolveTitle)
});
function resolveTitleTemplate(template, title) {
    return template ? template.replace(/%s/g, title) : title;
}
function resolveTitle(title, stashedTemplate) {
    let resolved;
    const template = typeof title !== 'string' && title && 'template' in title ? title.template : null;
    if (typeof title === 'string') {
        resolved = resolveTitleTemplate(stashedTemplate, title);
    } else if (title) {
        if ('default' in title) {
            resolved = resolveTitleTemplate(stashedTemplate, title.default);
        }
        if ('absolute' in title && title.absolute) {
            resolved = title.absolute;
        }
    }
    if (title && typeof title !== 'string') {
        return {
            template,
            absolute: resolved || ''
        };
    } else {
        return {
            absolute: resolved || title || '',
            template
        };
    }
} //# sourceMappingURL=resolve-title.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ACTION_HEADER": (()=>ACTION_HEADER),
    "FLIGHT_HEADERS": (()=>FLIGHT_HEADERS),
    "NEXT_DID_POSTPONE_HEADER": (()=>NEXT_DID_POSTPONE_HEADER),
    "NEXT_HMR_REFRESH_HEADER": (()=>NEXT_HMR_REFRESH_HEADER),
    "NEXT_IS_PRERENDER_HEADER": (()=>NEXT_IS_PRERENDER_HEADER),
    "NEXT_REWRITTEN_PATH_HEADER": (()=>NEXT_REWRITTEN_PATH_HEADER),
    "NEXT_REWRITTEN_QUERY_HEADER": (()=>NEXT_REWRITTEN_QUERY_HEADER),
    "NEXT_ROUTER_PREFETCH_HEADER": (()=>NEXT_ROUTER_PREFETCH_HEADER),
    "NEXT_ROUTER_SEGMENT_PREFETCH_HEADER": (()=>NEXT_ROUTER_SEGMENT_PREFETCH_HEADER),
    "NEXT_ROUTER_STALE_TIME_HEADER": (()=>NEXT_ROUTER_STALE_TIME_HEADER),
    "NEXT_ROUTER_STATE_TREE_HEADER": (()=>NEXT_ROUTER_STATE_TREE_HEADER),
    "NEXT_RSC_UNION_QUERY": (()=>NEXT_RSC_UNION_QUERY),
    "NEXT_URL": (()=>NEXT_URL),
    "RSC_CONTENT_TYPE_HEADER": (()=>RSC_CONTENT_TYPE_HEADER),
    "RSC_HEADER": (()=>RSC_HEADER)
});
const RSC_HEADER = 'RSC';
const ACTION_HEADER = 'Next-Action';
const NEXT_ROUTER_STATE_TREE_HEADER = 'Next-Router-State-Tree';
const NEXT_ROUTER_PREFETCH_HEADER = 'Next-Router-Prefetch';
const NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = 'Next-Router-Segment-Prefetch';
const NEXT_HMR_REFRESH_HEADER = 'Next-HMR-Refresh';
const NEXT_URL = 'Next-Url';
const RSC_CONTENT_TYPE_HEADER = 'text/x-component';
const FLIGHT_HEADERS = [
    RSC_HEADER,
    NEXT_ROUTER_STATE_TREE_HEADER,
    NEXT_ROUTER_PREFETCH_HEADER,
    NEXT_HMR_REFRESH_HEADER,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
];
const NEXT_RSC_UNION_QUERY = '_rsc';
const NEXT_ROUTER_STALE_TIME_HEADER = 'x-nextjs-stale-time';
const NEXT_DID_POSTPONE_HEADER = 'x-nextjs-postponed';
const NEXT_REWRITTEN_PATH_HEADER = 'x-nextjs-rewritten-path';
const NEXT_REWRITTEN_QUERY_HEADER = 'x-nextjs-rewritten-query';
const NEXT_IS_PRERENDER_HEADER = 'x-nextjs-prerender'; //# sourceMappingURL=app-router-headers.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/url.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isFullStringUrl": (()=>isFullStringUrl),
    "parseUrl": (()=>parseUrl),
    "stripNextRscUnionQuery": (()=>stripNextRscUnionQuery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
;
const DUMMY_ORIGIN = 'http://n';
function isFullStringUrl(url) {
    return /https?:\/\//.test(url);
}
function parseUrl(url) {
    let parsed = undefined;
    try {
        parsed = new URL(url, DUMMY_ORIGIN);
    } catch  {}
    return parsed;
}
function stripNextRscUnionQuery(relativeUrl) {
    const urlInstance = new URL(relativeUrl, DUMMY_ORIGIN);
    urlInstance.searchParams.delete(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_RSC_UNION_QUERY"]);
    return urlInstance.pathname + urlInstance.search;
} //# sourceMappingURL=url.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/picocolors.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
// ISC License
// Copyright (c) 2021 Alexey Raspopov, Kostiantyn Denysov, Anton Verinov
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
//
// https://github.com/alexeyraspopov/picocolors/blob/b6261487e7b81aaab2440e397a356732cad9e342/picocolors.js#L1
__turbopack_context__.s({
    "bgBlack": (()=>bgBlack),
    "bgBlue": (()=>bgBlue),
    "bgCyan": (()=>bgCyan),
    "bgGreen": (()=>bgGreen),
    "bgMagenta": (()=>bgMagenta),
    "bgRed": (()=>bgRed),
    "bgWhite": (()=>bgWhite),
    "bgYellow": (()=>bgYellow),
    "black": (()=>black),
    "blue": (()=>blue),
    "bold": (()=>bold),
    "cyan": (()=>cyan),
    "dim": (()=>dim),
    "gray": (()=>gray),
    "green": (()=>green),
    "hidden": (()=>hidden),
    "inverse": (()=>inverse),
    "italic": (()=>italic),
    "magenta": (()=>magenta),
    "purple": (()=>purple),
    "red": (()=>red),
    "reset": (()=>reset),
    "strikethrough": (()=>strikethrough),
    "underline": (()=>underline),
    "white": (()=>white),
    "yellow": (()=>yellow)
});
var _globalThis;
const { env, stdout } = ((_globalThis = globalThis) == null ? void 0 : _globalThis.process) ?? {};
const enabled = env && !env.NO_COLOR && (env.FORCE_COLOR || (stdout == null ? void 0 : stdout.isTTY) && !env.CI && env.TERM !== 'dumb');
const replaceClose = (str, close, replace, index)=>{
    const start = str.substring(0, index) + replace;
    const end = str.substring(index + close.length);
    const nextIndex = end.indexOf(close);
    return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
};
const formatter = (open, close, replace = open)=>{
    if (!enabled) return String;
    return (input)=>{
        const string = '' + input;
        const index = string.indexOf(close, open.length);
        return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
};
const reset = enabled ? (s)=>`\x1b[0m${s}\x1b[0m` : String;
const bold = formatter('\x1b[1m', '\x1b[22m', '\x1b[22m\x1b[1m');
const dim = formatter('\x1b[2m', '\x1b[22m', '\x1b[22m\x1b[2m');
const italic = formatter('\x1b[3m', '\x1b[23m');
const underline = formatter('\x1b[4m', '\x1b[24m');
const inverse = formatter('\x1b[7m', '\x1b[27m');
const hidden = formatter('\x1b[8m', '\x1b[28m');
const strikethrough = formatter('\x1b[9m', '\x1b[29m');
const black = formatter('\x1b[30m', '\x1b[39m');
const red = formatter('\x1b[31m', '\x1b[39m');
const green = formatter('\x1b[32m', '\x1b[39m');
const yellow = formatter('\x1b[33m', '\x1b[39m');
const blue = formatter('\x1b[34m', '\x1b[39m');
const magenta = formatter('\x1b[35m', '\x1b[39m');
const purple = formatter('\x1b[38;2;173;127;168m', '\x1b[39m');
const cyan = formatter('\x1b[36m', '\x1b[39m');
const white = formatter('\x1b[37m', '\x1b[39m');
const gray = formatter('\x1b[90m', '\x1b[39m');
const bgBlack = formatter('\x1b[40m', '\x1b[49m');
const bgRed = formatter('\x1b[41m', '\x1b[49m');
const bgGreen = formatter('\x1b[42m', '\x1b[49m');
const bgYellow = formatter('\x1b[43m', '\x1b[49m');
const bgBlue = formatter('\x1b[44m', '\x1b[49m');
const bgMagenta = formatter('\x1b[45m', '\x1b[49m');
const bgCyan = formatter('\x1b[46m', '\x1b[49m');
const bgWhite = formatter('\x1b[47m', '\x1b[49m'); //# sourceMappingURL=picocolors.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/lru-cache.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LRUCache": (()=>LRUCache)
});
class LRUCache {
    constructor(maxSize, calculateSize){
        this.cache = new Map();
        this.sizes = new Map();
        this.totalSize = 0;
        this.maxSize = maxSize;
        this.calculateSize = calculateSize || (()=>1);
    }
    set(key, value) {
        if (!key || !value) return;
        const size = this.calculateSize(value);
        if (size > this.maxSize) {
            console.warn('Single item size exceeds maxSize');
            return;
        }
        if (this.cache.has(key)) {
            this.totalSize -= this.sizes.get(key) || 0;
        }
        this.cache.set(key, value);
        this.sizes.set(key, size);
        this.totalSize += size;
        this.touch(key);
    }
    has(key) {
        if (!key) return false;
        this.touch(key);
        return Boolean(this.cache.get(key));
    }
    get(key) {
        if (!key) return;
        const value = this.cache.get(key);
        if (value === undefined) {
            return undefined;
        }
        this.touch(key);
        return value;
    }
    touch(key) {
        const value = this.cache.get(key);
        if (value !== undefined) {
            this.cache.delete(key);
            this.cache.set(key, value);
            this.evictIfNecessary();
        }
    }
    evictIfNecessary() {
        while(this.totalSize > this.maxSize && this.cache.size > 0){
            this.evictLeastRecentlyUsed();
        }
    }
    evictLeastRecentlyUsed() {
        const lruKey = this.cache.keys().next().value;
        if (lruKey !== undefined) {
            const lruSize = this.sizes.get(lruKey) || 0;
            this.totalSize -= lruSize;
            this.cache.delete(lruKey);
            this.sizes.delete(lruKey);
        }
    }
    reset() {
        this.cache.clear();
        this.sizes.clear();
        this.totalSize = 0;
    }
    keys() {
        return [
            ...this.cache.keys()
        ];
    }
    remove(key) {
        if (this.cache.has(key)) {
            this.totalSize -= this.sizes.get(key) || 0;
            this.cache.delete(key);
            this.sizes.delete(key);
        }
    }
    clear() {
        this.cache.clear();
        this.sizes.clear();
        this.totalSize = 0;
    }
    get size() {
        return this.cache.size;
    }
    get currentSize() {
        return this.totalSize;
    }
} //# sourceMappingURL=lru-cache.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/build/output/log.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "bootstrap": (()=>bootstrap),
    "error": (()=>error),
    "event": (()=>event),
    "info": (()=>info),
    "prefixes": (()=>prefixes),
    "ready": (()=>ready),
    "trace": (()=>trace),
    "wait": (()=>wait),
    "warn": (()=>warn),
    "warnOnce": (()=>warnOnce)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/picocolors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$lru$2d$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/lru-cache.js [app-rsc] (ecmascript)");
;
;
const prefixes = {
    wait: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["white"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bold"])('○')),
    error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["red"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bold"])('⨯')),
    warn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["yellow"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bold"])('⚠')),
    ready: '▲',
    info: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["white"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bold"])(' ')),
    event: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["green"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bold"])('✓')),
    trace: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["magenta"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bold"])('»'))
};
const LOGGING_METHOD = {
    log: 'log',
    warn: 'warn',
    error: 'error'
};
function prefixedLog(prefixType, ...message) {
    if ((message[0] === '' || message[0] === undefined) && message.length === 1) {
        message.shift();
    }
    const consoleMethod = prefixType in LOGGING_METHOD ? LOGGING_METHOD[prefixType] : 'log';
    const prefix = prefixes[prefixType];
    // If there's no message, don't print the prefix but a new line
    if (message.length === 0) {
        console[consoleMethod]('');
    } else {
        // Ensure if there's ANSI escape codes it's concatenated into one string.
        // Chrome DevTool can only handle color if it's in one string.
        if (message.length === 1 && typeof message[0] === 'string') {
            console[consoleMethod](' ' + prefix + ' ' + message[0]);
        } else {
            console[consoleMethod](' ' + prefix, ...message);
        }
    }
}
function bootstrap(...message) {
    // logging format: ' <prefix> <message>'
    // e.g. ' ✓ Compiled successfully'
    // Add spaces to align with the indent of other logs
    console.log('   ' + message.join(' '));
}
function wait(...message) {
    prefixedLog('wait', ...message);
}
function error(...message) {
    prefixedLog('error', ...message);
}
function warn(...message) {
    prefixedLog('warn', ...message);
}
function ready(...message) {
    prefixedLog('ready', ...message);
}
function info(...message) {
    prefixedLog('info', ...message);
}
function event(...message) {
    prefixedLog('event', ...message);
}
function trace(...message) {
    prefixedLog('trace', ...message);
}
const warnOnceCache = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$lru$2d$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LRUCache"](10000, (value)=>value.length);
function warnOnce(...message) {
    const key = message.join(' ');
    if (!warnOnceCache.has(key)) {
        warnOnceCache.set(key, key);
        warn(...message);
    }
} //# sourceMappingURL=log.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/resolvers/resolve-opengraph.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "resolveImages": (()=>resolveImages),
    "resolveOpenGraph": (()=>resolveOpenGraph),
    "resolveTwitter": (()=>resolveTwitter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/generate/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/resolvers/resolve-url.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$title$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/resolvers/resolve-title.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/url.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$output$2f$log$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/build/output/log.js [app-rsc] (ecmascript)");
;
;
;
;
;
const OgTypeFields = {
    article: [
        'authors',
        'tags'
    ],
    song: [
        'albums',
        'musicians'
    ],
    playlist: [
        'albums',
        'musicians'
    ],
    radio: [
        'creators'
    ],
    video: [
        'actors',
        'directors',
        'writers',
        'tags'
    ],
    basic: [
        'emails',
        'phoneNumbers',
        'faxNumbers',
        'alternateLocale',
        'audio',
        'videos'
    ]
};
function resolveAndValidateImage(item, metadataBase, isStaticMetadataRouteFile) {
    if (!item) return undefined;
    const isItemUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStringOrURL"])(item);
    const inputUrl = isItemUrl ? item : item.url;
    if (!inputUrl) return undefined;
    // process.env.VERCEL is set to "1" when System Environment Variables are
    // exposed. When exposed, validation is not necessary since we are falling back to
    // process.env.VERCEL_PROJECT_PRODUCTION_URL, process.env.VERCEL_BRANCH_URL, or
    // process.env.VERCEL_URL for the `metadataBase`. process.env.VERCEL is undefined
    // when System Environment Variables are not exposed. When not exposed, we cannot
    // detect in the build environment if the deployment is a Vercel deployment or not.
    //
    // x-ref: https://vercel.com/docs/projects/environment-variables/system-environment-variables#system-environment-variables
    const isUsingVercelSystemEnvironmentVariables = Boolean(process.env.VERCEL);
    const isRelativeUrl = typeof inputUrl === 'string' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFullStringUrl"])(inputUrl);
    // When no explicit metadataBase is specified by the user, we'll override it with the fallback metadata
    // under the following conditions:
    // - The provided URL is relative (ie ./og-image).
    // - The image is statically generated by Next.js (such as the special `opengraph-image` route)
    // In both cases, we want to ensure that across all environments, the ogImage is a fully qualified URL.
    // In the `opengraph-image` case, since the user isn't explicitly passing a relative path, this ensures
    // the ogImage will be properly discovered across different environments without the user needing to
    // have a bunch of `process.env` checks when defining their `metadataBase`.
    if (isRelativeUrl && (!metadataBase || isStaticMetadataRouteFile)) {
        const fallbackMetadataBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSocialImageMetadataBaseFallback"])(metadataBase);
        // When not using Vercel environment variables for URL injection, we aren't able to determine
        // a fallback value for `metadataBase`. For self-hosted setups, we want to warn
        // about this since the only fallback we'll be able to generate is `localhost`.
        // In development, we'll only warn for relative metadata that isn't part of the static
        // metadata conventions (eg `opengraph-image`), as otherwise it's currently very noisy
        // for common cases. Eventually we should remove this warning all together in favor of
        // devtools.
        const shouldWarn = !isUsingVercelSystemEnvironmentVariables && !metadataBase && (("TURBOPACK compile-time value", "development") === 'production' || !isStaticMetadataRouteFile);
        if (shouldWarn) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$output$2f$log$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["warnOnce"])(`metadataBase property in metadata export is not set for resolving social open graph or twitter images, using "${fallbackMetadataBase.origin}". See https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase`);
        }
        metadataBase = fallbackMetadataBase;
    }
    return isItemUrl ? {
        url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveUrl"])(inputUrl, metadataBase)
    } : {
        ...item,
        // Update image descriptor url
        url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveUrl"])(inputUrl, metadataBase)
    };
}
function resolveImages(images, metadataBase, isStaticMetadataRouteFile) {
    const resolvedImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveAsArrayOrUndefined"])(images);
    if (!resolvedImages) return resolvedImages;
    const nonNullableImages = [];
    for (const item of resolvedImages){
        const resolvedItem = resolveAndValidateImage(item, metadataBase, isStaticMetadataRouteFile);
        if (!resolvedItem) continue;
        nonNullableImages.push(resolvedItem);
    }
    return nonNullableImages;
}
const ogTypeToFields = {
    article: OgTypeFields.article,
    book: OgTypeFields.article,
    'music.song': OgTypeFields.song,
    'music.album': OgTypeFields.song,
    'music.playlist': OgTypeFields.playlist,
    'music.radio_station': OgTypeFields.radio,
    'video.movie': OgTypeFields.video,
    'video.episode': OgTypeFields.video
};
function getFieldsByOgType(ogType) {
    if (!ogType || !(ogType in ogTypeToFields)) return OgTypeFields.basic;
    return ogTypeToFields[ogType].concat(OgTypeFields.basic);
}
const resolveOpenGraph = (openGraph, metadataBase, metadataContext, titleTemplate)=>{
    if (!openGraph) return null;
    function resolveProps(target, og) {
        const ogType = og && 'type' in og ? og.type : undefined;
        const keys = getFieldsByOgType(ogType);
        for (const k of keys){
            const key = k;
            if (key in og && key !== 'url') {
                const value = og[key];
                target[key] = value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveArray"])(value) : null;
            }
        }
        target.images = resolveImages(og.images, metadataBase, metadataContext.isStaticMetadataRouteFile);
    }
    const resolved = {
        ...openGraph,
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$title$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTitle"])(openGraph.title, titleTemplate)
    };
    resolveProps(resolved, openGraph);
    resolved.url = openGraph.url ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveAbsoluteUrlWithPathname"])(openGraph.url, metadataBase, metadataContext) : null;
    return resolved;
};
const TwitterBasicInfoKeys = [
    'site',
    'siteId',
    'creator',
    'creatorId',
    'description'
];
const resolveTwitter = (twitter, metadataBase, metadataContext, titleTemplate)=>{
    var _resolved_images;
    if (!twitter) return null;
    let card = 'card' in twitter ? twitter.card : undefined;
    const resolved = {
        ...twitter,
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$title$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTitle"])(twitter.title, titleTemplate)
    };
    for (const infoKey of TwitterBasicInfoKeys){
        resolved[infoKey] = twitter[infoKey] || null;
    }
    resolved.images = resolveImages(twitter.images, metadataBase, metadataContext.isStaticMetadataRouteFile);
    card = card || (((_resolved_images = resolved.images) == null ? void 0 : _resolved_images.length) ? 'summary_large_image' : 'summary');
    resolved.card = card;
    if ('card' in resolved) {
        switch(resolved.card){
            case 'player':
                {
                    resolved.players = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveAsArrayOrUndefined"])(resolved.players) || [];
                    break;
                }
            case 'app':
                {
                    resolved.app = resolved.app || {};
                    break;
                }
            default:
                break;
        }
    }
    return resolved;
}; //# sourceMappingURL=resolve-opengraph.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/segment.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DEFAULT_SEGMENT_KEY": (()=>DEFAULT_SEGMENT_KEY),
    "PAGE_SEGMENT_KEY": (()=>PAGE_SEGMENT_KEY),
    "addSearchParamsIfPageSegment": (()=>addSearchParamsIfPageSegment),
    "isGroupSegment": (()=>isGroupSegment),
    "isParallelRouteSegment": (()=>isParallelRouteSegment)
});
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === '(' && segment.endsWith(')');
}
function isParallelRouteSegment(segment) {
    return segment.startsWith('@') && segment !== '@children';
}
function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
    if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
    }
    return segment;
}
const PAGE_SEGMENT_KEY = '__PAGE__';
const DEFAULT_SEGMENT_KEY = '__DEFAULT__'; //# sourceMappingURL=segment.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/app-dir-module.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getComponentTypeModule": (()=>getComponentTypeModule),
    "getLayoutOrPageModule": (()=>getLayoutOrPageModule)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/segment.js [app-rsc] (ecmascript)");
;
async function getLayoutOrPageModule(loaderTree) {
    const { layout, page, defaultPage } = loaderTree[2];
    const isLayout = typeof layout !== 'undefined';
    const isPage = typeof page !== 'undefined';
    const isDefaultPage = typeof defaultPage !== 'undefined' && loaderTree[0] === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_SEGMENT_KEY"];
    let mod = undefined;
    let modType = undefined;
    let filePath = undefined;
    if (isLayout) {
        mod = await layout[0]();
        modType = 'layout';
        filePath = layout[1];
    } else if (isPage) {
        mod = await page[0]();
        modType = 'page';
        filePath = page[1];
    } else if (isDefaultPage) {
        mod = await defaultPage[0]();
        modType = 'page';
        filePath = defaultPage[1];
    }
    return {
        mod,
        modType,
        filePath
    };
}
async function getComponentTypeModule(loaderTree, moduleType) {
    const { [moduleType]: module } = loaderTree[2];
    if (typeof module !== 'undefined') {
        return await module[0]();
    }
    return undefined;
} //# sourceMappingURL=app-dir-module.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/interop-default.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "interopDefault": (()=>interopDefault)
});
function interopDefault(mod) {
    return mod.default || mod;
} //# sourceMappingURL=interop-default.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/resolvers/resolve-basics.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "resolveAlternates": (()=>resolveAlternates),
    "resolveAppLinks": (()=>resolveAppLinks),
    "resolveAppleWebApp": (()=>resolveAppleWebApp),
    "resolveFacebook": (()=>resolveFacebook),
    "resolveItunes": (()=>resolveItunes),
    "resolvePagination": (()=>resolvePagination),
    "resolveRobots": (()=>resolveRobots),
    "resolveThemeColor": (()=>resolveThemeColor),
    "resolveVerification": (()=>resolveVerification)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/generate/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/resolvers/resolve-url.js [app-rsc] (ecmascript)");
;
;
function resolveAlternateUrl(url, metadataBase, metadataContext) {
    // If alter native url is an URL instance,
    // we treat it as a URL base and resolve with current pathname
    if (url instanceof URL) {
        const newUrl = new URL(metadataContext.pathname, url);
        url.searchParams.forEach((value, key)=>newUrl.searchParams.set(key, value));
        url = newUrl;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveAbsoluteUrlWithPathname"])(url, metadataBase, metadataContext);
}
const resolveThemeColor = (themeColor)=>{
    var _resolveAsArrayOrUndefined;
    if (!themeColor) return null;
    const themeColorDescriptors = [];
    (_resolveAsArrayOrUndefined = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveAsArrayOrUndefined"])(themeColor)) == null ? void 0 : _resolveAsArrayOrUndefined.forEach((descriptor)=>{
        if (typeof descriptor === 'string') themeColorDescriptors.push({
            color: descriptor
        });
        else if (typeof descriptor === 'object') themeColorDescriptors.push({
            color: descriptor.color,
            media: descriptor.media
        });
    });
    return themeColorDescriptors;
};
function resolveUrlValuesOfObject(obj, metadataBase, metadataContext) {
    if (!obj) return null;
    const result = {};
    for (const [key, value] of Object.entries(obj)){
        if (typeof value === 'string' || value instanceof URL) {
            result[key] = [
                {
                    url: resolveAlternateUrl(value, metadataBase, metadataContext)
                }
            ];
        } else {
            result[key] = [];
            value == null ? void 0 : value.forEach((item, index)=>{
                const url = resolveAlternateUrl(item.url, metadataBase, metadataContext);
                result[key][index] = {
                    url,
                    title: item.title
                };
            });
        }
    }
    return result;
}
function resolveCanonicalUrl(urlOrDescriptor, metadataBase, metadataContext) {
    if (!urlOrDescriptor) return null;
    const url = typeof urlOrDescriptor === 'string' || urlOrDescriptor instanceof URL ? urlOrDescriptor : urlOrDescriptor.url;
    // Return string url because structureClone can't handle URL instance
    return {
        url: resolveAlternateUrl(url, metadataBase, metadataContext)
    };
}
const resolveAlternates = (alternates, metadataBase, context)=>{
    if (!alternates) return null;
    const canonical = resolveCanonicalUrl(alternates.canonical, metadataBase, context);
    const languages = resolveUrlValuesOfObject(alternates.languages, metadataBase, context);
    const media = resolveUrlValuesOfObject(alternates.media, metadataBase, context);
    const types = resolveUrlValuesOfObject(alternates.types, metadataBase, context);
    const result = {
        canonical,
        languages,
        media,
        types
    };
    return result;
};
const robotsKeys = [
    'noarchive',
    'nosnippet',
    'noimageindex',
    'nocache',
    'notranslate',
    'indexifembedded',
    'nositelinkssearchbox',
    'unavailable_after',
    'max-video-preview',
    'max-image-preview',
    'max-snippet'
];
const resolveRobotsValue = (robots)=>{
    if (!robots) return null;
    if (typeof robots === 'string') return robots;
    const values = [];
    if (robots.index) values.push('index');
    else if (typeof robots.index === 'boolean') values.push('noindex');
    if (robots.follow) values.push('follow');
    else if (typeof robots.follow === 'boolean') values.push('nofollow');
    for (const key of robotsKeys){
        const value = robots[key];
        if (typeof value !== 'undefined' && value !== false) {
            values.push(typeof value === 'boolean' ? key : `${key}:${value}`);
        }
    }
    return values.join(', ');
};
const resolveRobots = (robots)=>{
    if (!robots) return null;
    return {
        basic: resolveRobotsValue(robots),
        googleBot: typeof robots !== 'string' ? resolveRobotsValue(robots.googleBot) : null
    };
};
const VerificationKeys = [
    'google',
    'yahoo',
    'yandex',
    'me',
    'other'
];
const resolveVerification = (verification)=>{
    if (!verification) return null;
    const res = {};
    for (const key of VerificationKeys){
        const value = verification[key];
        if (value) {
            if (key === 'other') {
                res.other = {};
                for(const otherKey in verification.other){
                    const otherValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveAsArrayOrUndefined"])(verification.other[otherKey]);
                    if (otherValue) res.other[otherKey] = otherValue;
                }
            } else res[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveAsArrayOrUndefined"])(value);
        }
    }
    return res;
};
const resolveAppleWebApp = (appWebApp)=>{
    var _resolveAsArrayOrUndefined;
    if (!appWebApp) return null;
    if (appWebApp === true) {
        return {
            capable: true
        };
    }
    const startupImages = appWebApp.startupImage ? (_resolveAsArrayOrUndefined = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveAsArrayOrUndefined"])(appWebApp.startupImage)) == null ? void 0 : _resolveAsArrayOrUndefined.map((item)=>typeof item === 'string' ? {
            url: item
        } : item) : null;
    return {
        capable: 'capable' in appWebApp ? !!appWebApp.capable : true,
        title: appWebApp.title || null,
        startupImage: startupImages,
        statusBarStyle: appWebApp.statusBarStyle || 'default'
    };
};
const resolveAppLinks = (appLinks)=>{
    if (!appLinks) return null;
    for(const key in appLinks){
        // @ts-ignore // TODO: type infer
        appLinks[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveAsArrayOrUndefined"])(appLinks[key]);
    }
    return appLinks;
};
const resolveItunes = (itunes, metadataBase, context)=>{
    if (!itunes) return null;
    return {
        appId: itunes.appId,
        appArgument: itunes.appArgument ? resolveAlternateUrl(itunes.appArgument, metadataBase, context) : undefined
    };
};
const resolveFacebook = (facebook)=>{
    if (!facebook) return null;
    return {
        appId: facebook.appId,
        admins: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveAsArrayOrUndefined"])(facebook.admins)
    };
};
const resolvePagination = (pagination, metadataBase, context)=>{
    return {
        previous: (pagination == null ? void 0 : pagination.previous) ? resolveAlternateUrl(pagination.previous, metadataBase, context) : null,
        next: (pagination == null ? void 0 : pagination.next) ? resolveAlternateUrl(pagination.next, metadataBase, context) : null
    };
}; //# sourceMappingURL=resolve-basics.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/resolvers/resolve-icons.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "resolveIcon": (()=>resolveIcon),
    "resolveIcons": (()=>resolveIcons)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/generate/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/resolvers/resolve-url.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/constants.js [app-rsc] (ecmascript)");
;
;
;
function resolveIcon(icon) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStringOrURL"])(icon)) return {
        url: icon
    };
    else if (Array.isArray(icon)) return icon;
    return icon;
}
const resolveIcons = (icons)=>{
    if (!icons) {
        return null;
    }
    const resolved = {
        icon: [],
        apple: []
    };
    if (Array.isArray(icons)) {
        resolved.icon = icons.map(resolveIcon).filter(Boolean);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStringOrURL"])(icons)) {
        resolved.icon = [
            resolveIcon(icons)
        ];
    } else {
        for (const key of __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconKeys"]){
            const values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveAsArrayOrUndefined"])(icons[key]);
            if (values) resolved[key] = values.map(resolveIcon);
        }
    }
    return resolved;
}; //# sourceMappingURL=resolve-icons.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
/**
 * Contains predefined constants for the trace span name in next/server.
 *
 * Currently, next/server/tracer is internal implementation only for tracking
 * next.js's implementation only with known span names defined here.
 **/ // eslint typescript has a bug with TS enums
/* eslint-disable no-shadow */ __turbopack_context__.s({
    "AppRenderSpan": (()=>AppRenderSpan),
    "AppRouteRouteHandlersSpan": (()=>AppRouteRouteHandlersSpan),
    "BaseServerSpan": (()=>BaseServerSpan),
    "LoadComponentsSpan": (()=>LoadComponentsSpan),
    "LogSpanAllowList": (()=>LogSpanAllowList),
    "MiddlewareSpan": (()=>MiddlewareSpan),
    "NextNodeServerSpan": (()=>NextNodeServerSpan),
    "NextServerSpan": (()=>NextServerSpan),
    "NextVanillaSpanAllowlist": (()=>NextVanillaSpanAllowlist),
    "NodeSpan": (()=>NodeSpan),
    "RenderSpan": (()=>RenderSpan),
    "ResolveMetadataSpan": (()=>ResolveMetadataSpan),
    "RouterSpan": (()=>RouterSpan),
    "StartServerSpan": (()=>StartServerSpan)
});
var BaseServerSpan = /*#__PURE__*/ function(BaseServerSpan) {
    BaseServerSpan["handleRequest"] = "BaseServer.handleRequest";
    BaseServerSpan["run"] = "BaseServer.run";
    BaseServerSpan["pipe"] = "BaseServer.pipe";
    BaseServerSpan["getStaticHTML"] = "BaseServer.getStaticHTML";
    BaseServerSpan["render"] = "BaseServer.render";
    BaseServerSpan["renderToResponseWithComponents"] = "BaseServer.renderToResponseWithComponents";
    BaseServerSpan["renderToResponse"] = "BaseServer.renderToResponse";
    BaseServerSpan["renderToHTML"] = "BaseServer.renderToHTML";
    BaseServerSpan["renderError"] = "BaseServer.renderError";
    BaseServerSpan["renderErrorToResponse"] = "BaseServer.renderErrorToResponse";
    BaseServerSpan["renderErrorToHTML"] = "BaseServer.renderErrorToHTML";
    BaseServerSpan["render404"] = "BaseServer.render404";
    return BaseServerSpan;
}(BaseServerSpan || {});
var LoadComponentsSpan = /*#__PURE__*/ function(LoadComponentsSpan) {
    LoadComponentsSpan["loadDefaultErrorComponents"] = "LoadComponents.loadDefaultErrorComponents";
    LoadComponentsSpan["loadComponents"] = "LoadComponents.loadComponents";
    return LoadComponentsSpan;
}(LoadComponentsSpan || {});
var NextServerSpan = /*#__PURE__*/ function(NextServerSpan) {
    NextServerSpan["getRequestHandler"] = "NextServer.getRequestHandler";
    NextServerSpan["getServer"] = "NextServer.getServer";
    NextServerSpan["getServerRequestHandler"] = "NextServer.getServerRequestHandler";
    NextServerSpan["createServer"] = "createServer.createServer";
    return NextServerSpan;
}(NextServerSpan || {});
var NextNodeServerSpan = /*#__PURE__*/ function(NextNodeServerSpan) {
    NextNodeServerSpan["compression"] = "NextNodeServer.compression";
    NextNodeServerSpan["getBuildId"] = "NextNodeServer.getBuildId";
    NextNodeServerSpan["createComponentTree"] = "NextNodeServer.createComponentTree";
    NextNodeServerSpan["clientComponentLoading"] = "NextNodeServer.clientComponentLoading";
    NextNodeServerSpan["getLayoutOrPageModule"] = "NextNodeServer.getLayoutOrPageModule";
    NextNodeServerSpan["generateStaticRoutes"] = "NextNodeServer.generateStaticRoutes";
    NextNodeServerSpan["generateFsStaticRoutes"] = "NextNodeServer.generateFsStaticRoutes";
    NextNodeServerSpan["generatePublicRoutes"] = "NextNodeServer.generatePublicRoutes";
    NextNodeServerSpan["generateImageRoutes"] = "NextNodeServer.generateImageRoutes.route";
    NextNodeServerSpan["sendRenderResult"] = "NextNodeServer.sendRenderResult";
    NextNodeServerSpan["proxyRequest"] = "NextNodeServer.proxyRequest";
    NextNodeServerSpan["runApi"] = "NextNodeServer.runApi";
    NextNodeServerSpan["render"] = "NextNodeServer.render";
    NextNodeServerSpan["renderHTML"] = "NextNodeServer.renderHTML";
    NextNodeServerSpan["imageOptimizer"] = "NextNodeServer.imageOptimizer";
    NextNodeServerSpan["getPagePath"] = "NextNodeServer.getPagePath";
    NextNodeServerSpan["getRoutesManifest"] = "NextNodeServer.getRoutesManifest";
    NextNodeServerSpan["findPageComponents"] = "NextNodeServer.findPageComponents";
    NextNodeServerSpan["getFontManifest"] = "NextNodeServer.getFontManifest";
    NextNodeServerSpan["getServerComponentManifest"] = "NextNodeServer.getServerComponentManifest";
    NextNodeServerSpan["getRequestHandler"] = "NextNodeServer.getRequestHandler";
    NextNodeServerSpan["renderToHTML"] = "NextNodeServer.renderToHTML";
    NextNodeServerSpan["renderError"] = "NextNodeServer.renderError";
    NextNodeServerSpan["renderErrorToHTML"] = "NextNodeServer.renderErrorToHTML";
    NextNodeServerSpan["render404"] = "NextNodeServer.render404";
    NextNodeServerSpan["startResponse"] = "NextNodeServer.startResponse";
    // nested inner span, does not require parent scope name
    NextNodeServerSpan["route"] = "route";
    NextNodeServerSpan["onProxyReq"] = "onProxyReq";
    NextNodeServerSpan["apiResolver"] = "apiResolver";
    NextNodeServerSpan["internalFetch"] = "internalFetch";
    return NextNodeServerSpan;
}(NextNodeServerSpan || {});
var StartServerSpan = /*#__PURE__*/ function(StartServerSpan) {
    StartServerSpan["startServer"] = "startServer.startServer";
    return StartServerSpan;
}(StartServerSpan || {});
var RenderSpan = /*#__PURE__*/ function(RenderSpan) {
    RenderSpan["getServerSideProps"] = "Render.getServerSideProps";
    RenderSpan["getStaticProps"] = "Render.getStaticProps";
    RenderSpan["renderToString"] = "Render.renderToString";
    RenderSpan["renderDocument"] = "Render.renderDocument";
    RenderSpan["createBodyResult"] = "Render.createBodyResult";
    return RenderSpan;
}(RenderSpan || {});
var AppRenderSpan = /*#__PURE__*/ function(AppRenderSpan) {
    AppRenderSpan["renderToString"] = "AppRender.renderToString";
    AppRenderSpan["renderToReadableStream"] = "AppRender.renderToReadableStream";
    AppRenderSpan["getBodyResult"] = "AppRender.getBodyResult";
    AppRenderSpan["fetch"] = "AppRender.fetch";
    return AppRenderSpan;
}(AppRenderSpan || {});
var RouterSpan = /*#__PURE__*/ function(RouterSpan) {
    RouterSpan["executeRoute"] = "Router.executeRoute";
    return RouterSpan;
}(RouterSpan || {});
var NodeSpan = /*#__PURE__*/ function(NodeSpan) {
    NodeSpan["runHandler"] = "Node.runHandler";
    return NodeSpan;
}(NodeSpan || {});
var AppRouteRouteHandlersSpan = /*#__PURE__*/ function(AppRouteRouteHandlersSpan) {
    AppRouteRouteHandlersSpan["runHandler"] = "AppRouteRouteHandlers.runHandler";
    return AppRouteRouteHandlersSpan;
}(AppRouteRouteHandlersSpan || {});
var ResolveMetadataSpan = /*#__PURE__*/ function(ResolveMetadataSpan) {
    ResolveMetadataSpan["generateMetadata"] = "ResolveMetadata.generateMetadata";
    ResolveMetadataSpan["generateViewport"] = "ResolveMetadata.generateViewport";
    return ResolveMetadataSpan;
}(ResolveMetadataSpan || {});
var MiddlewareSpan = /*#__PURE__*/ function(MiddlewareSpan) {
    MiddlewareSpan["execute"] = "Middleware.execute";
    return MiddlewareSpan;
}(MiddlewareSpan || {});
const NextVanillaSpanAllowlist = [
    "Middleware.execute",
    "BaseServer.handleRequest",
    "Render.getServerSideProps",
    "Render.getStaticProps",
    "AppRender.fetch",
    "AppRender.getBodyResult",
    "Render.renderDocument",
    "Node.runHandler",
    "AppRouteRouteHandlers.runHandler",
    "ResolveMetadata.generateMetadata",
    "ResolveMetadata.generateViewport",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.findPageComponents",
    "NextNodeServer.getLayoutOrPageModule",
    "NextNodeServer.startResponse",
    "NextNodeServer.clientComponentLoading"
];
const LogSpanAllowList = [
    "NextNodeServer.findPageComponents",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.clientComponentLoading"
];
;
 //# sourceMappingURL=constants.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/is-thenable.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
/**
 * Check to see if a value is Thenable.
 *
 * @param promise the maybe-thenable value
 * @returns true if the value is thenable
 */ __turbopack_context__.s({
    "isThenable": (()=>isThenable)
});
function isThenable(promise) {
    return promise !== null && typeof promise === 'object' && 'then' in promise && typeof promise.then === 'function';
} //# sourceMappingURL=is-thenable.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/compiled/@opentelemetry/api/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
(()=>{
    "use strict";
    var e = {
        491: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ContextAPI = void 0;
            const n = r(223);
            const a = r(172);
            const o = r(930);
            const i = "context";
            const c = new n.NoopContextManager;
            class ContextAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new ContextAPI;
                    }
                    return this._instance;
                }
                setGlobalContextManager(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                active() {
                    return this._getContextManager().active();
                }
                with(e, t, r, ...n) {
                    return this._getContextManager().with(e, t, r, ...n);
                }
                bind(e, t) {
                    return this._getContextManager().bind(e, t);
                }
                _getContextManager() {
                    return (0, a.getGlobal)(i) || c;
                }
                disable() {
                    this._getContextManager().disable();
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.ContextAPI = ContextAPI;
        },
        930: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagAPI = void 0;
            const n = r(56);
            const a = r(912);
            const o = r(957);
            const i = r(172);
            const c = "diag";
            class DiagAPI {
                constructor(){
                    function _logProxy(e) {
                        return function(...t) {
                            const r = (0, i.getGlobal)("diag");
                            if (!r) return;
                            return r[e](...t);
                        };
                    }
                    const e = this;
                    const setLogger = (t, r = {
                        logLevel: o.DiagLogLevel.INFO
                    })=>{
                        var n, c, s;
                        if (t === e) {
                            const t = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                            e.error((n = t.stack) !== null && n !== void 0 ? n : t.message);
                            return false;
                        }
                        if (typeof r === "number") {
                            r = {
                                logLevel: r
                            };
                        }
                        const u = (0, i.getGlobal)("diag");
                        const l = (0, a.createLogLevelDiagLogger)((c = r.logLevel) !== null && c !== void 0 ? c : o.DiagLogLevel.INFO, t);
                        if (u && !r.suppressOverrideMessage) {
                            const e = (s = (new Error).stack) !== null && s !== void 0 ? s : "<failed to generate stacktrace>";
                            u.warn(`Current logger will be overwritten from ${e}`);
                            l.warn(`Current logger will overwrite one already registered from ${e}`);
                        }
                        return (0, i.registerGlobal)("diag", l, e, true);
                    };
                    e.setLogger = setLogger;
                    e.disable = ()=>{
                        (0, i.unregisterGlobal)(c, e);
                    };
                    e.createComponentLogger = (e)=>new n.DiagComponentLogger(e);
                    e.verbose = _logProxy("verbose");
                    e.debug = _logProxy("debug");
                    e.info = _logProxy("info");
                    e.warn = _logProxy("warn");
                    e.error = _logProxy("error");
                }
                static instance() {
                    if (!this._instance) {
                        this._instance = new DiagAPI;
                    }
                    return this._instance;
                }
            }
            t.DiagAPI = DiagAPI;
        },
        653: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.MetricsAPI = void 0;
            const n = r(660);
            const a = r(172);
            const o = r(930);
            const i = "metrics";
            class MetricsAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new MetricsAPI;
                    }
                    return this._instance;
                }
                setGlobalMeterProvider(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                getMeterProvider() {
                    return (0, a.getGlobal)(i) || n.NOOP_METER_PROVIDER;
                }
                getMeter(e, t, r) {
                    return this.getMeterProvider().getMeter(e, t, r);
                }
                disable() {
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.MetricsAPI = MetricsAPI;
        },
        181: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.PropagationAPI = void 0;
            const n = r(172);
            const a = r(874);
            const o = r(194);
            const i = r(277);
            const c = r(369);
            const s = r(930);
            const u = "propagation";
            const l = new a.NoopTextMapPropagator;
            class PropagationAPI {
                constructor(){
                    this.createBaggage = c.createBaggage;
                    this.getBaggage = i.getBaggage;
                    this.getActiveBaggage = i.getActiveBaggage;
                    this.setBaggage = i.setBaggage;
                    this.deleteBaggage = i.deleteBaggage;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new PropagationAPI;
                    }
                    return this._instance;
                }
                setGlobalPropagator(e) {
                    return (0, n.registerGlobal)(u, e, s.DiagAPI.instance());
                }
                inject(e, t, r = o.defaultTextMapSetter) {
                    return this._getGlobalPropagator().inject(e, t, r);
                }
                extract(e, t, r = o.defaultTextMapGetter) {
                    return this._getGlobalPropagator().extract(e, t, r);
                }
                fields() {
                    return this._getGlobalPropagator().fields();
                }
                disable() {
                    (0, n.unregisterGlobal)(u, s.DiagAPI.instance());
                }
                _getGlobalPropagator() {
                    return (0, n.getGlobal)(u) || l;
                }
            }
            t.PropagationAPI = PropagationAPI;
        },
        997: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceAPI = void 0;
            const n = r(172);
            const a = r(846);
            const o = r(139);
            const i = r(607);
            const c = r(930);
            const s = "trace";
            class TraceAPI {
                constructor(){
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                    this.wrapSpanContext = o.wrapSpanContext;
                    this.isSpanContextValid = o.isSpanContextValid;
                    this.deleteSpan = i.deleteSpan;
                    this.getSpan = i.getSpan;
                    this.getActiveSpan = i.getActiveSpan;
                    this.getSpanContext = i.getSpanContext;
                    this.setSpan = i.setSpan;
                    this.setSpanContext = i.setSpanContext;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new TraceAPI;
                    }
                    return this._instance;
                }
                setGlobalTracerProvider(e) {
                    const t = (0, n.registerGlobal)(s, this._proxyTracerProvider, c.DiagAPI.instance());
                    if (t) {
                        this._proxyTracerProvider.setDelegate(e);
                    }
                    return t;
                }
                getTracerProvider() {
                    return (0, n.getGlobal)(s) || this._proxyTracerProvider;
                }
                getTracer(e, t) {
                    return this.getTracerProvider().getTracer(e, t);
                }
                disable() {
                    (0, n.unregisterGlobal)(s, c.DiagAPI.instance());
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                }
            }
            t.TraceAPI = TraceAPI;
        },
        277: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.deleteBaggage = t.setBaggage = t.getActiveBaggage = t.getBaggage = void 0;
            const n = r(491);
            const a = r(780);
            const o = (0, a.createContextKey)("OpenTelemetry Baggage Key");
            function getBaggage(e) {
                return e.getValue(o) || undefined;
            }
            t.getBaggage = getBaggage;
            function getActiveBaggage() {
                return getBaggage(n.ContextAPI.getInstance().active());
            }
            t.getActiveBaggage = getActiveBaggage;
            function setBaggage(e, t) {
                return e.setValue(o, t);
            }
            t.setBaggage = setBaggage;
            function deleteBaggage(e) {
                return e.deleteValue(o);
            }
            t.deleteBaggage = deleteBaggage;
        },
        993: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BaggageImpl = void 0;
            class BaggageImpl {
                constructor(e){
                    this._entries = e ? new Map(e) : new Map;
                }
                getEntry(e) {
                    const t = this._entries.get(e);
                    if (!t) {
                        return undefined;
                    }
                    return Object.assign({}, t);
                }
                getAllEntries() {
                    return Array.from(this._entries.entries()).map(([e, t])=>[
                            e,
                            t
                        ]);
                }
                setEntry(e, t) {
                    const r = new BaggageImpl(this._entries);
                    r._entries.set(e, t);
                    return r;
                }
                removeEntry(e) {
                    const t = new BaggageImpl(this._entries);
                    t._entries.delete(e);
                    return t;
                }
                removeEntries(...e) {
                    const t = new BaggageImpl(this._entries);
                    for (const r of e){
                        t._entries.delete(r);
                    }
                    return t;
                }
                clear() {
                    return new BaggageImpl;
                }
            }
            t.BaggageImpl = BaggageImpl;
        },
        830: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataSymbol = void 0;
            t.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
        },
        369: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataFromString = t.createBaggage = void 0;
            const n = r(930);
            const a = r(993);
            const o = r(830);
            const i = n.DiagAPI.instance();
            function createBaggage(e = {}) {
                return new a.BaggageImpl(new Map(Object.entries(e)));
            }
            t.createBaggage = createBaggage;
            function baggageEntryMetadataFromString(e) {
                if (typeof e !== "string") {
                    i.error(`Cannot create baggage metadata from unknown type: ${typeof e}`);
                    e = "";
                }
                return {
                    __TYPE__: o.baggageEntryMetadataSymbol,
                    toString () {
                        return e;
                    }
                };
            }
            t.baggageEntryMetadataFromString = baggageEntryMetadataFromString;
        },
        67: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.context = void 0;
            const n = r(491);
            t.context = n.ContextAPI.getInstance();
        },
        223: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopContextManager = void 0;
            const n = r(780);
            class NoopContextManager {
                active() {
                    return n.ROOT_CONTEXT;
                }
                with(e, t, r, ...n) {
                    return t.call(r, ...n);
                }
                bind(e, t) {
                    return t;
                }
                enable() {
                    return this;
                }
                disable() {
                    return this;
                }
            }
            t.NoopContextManager = NoopContextManager;
        },
        780: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ROOT_CONTEXT = t.createContextKey = void 0;
            function createContextKey(e) {
                return Symbol.for(e);
            }
            t.createContextKey = createContextKey;
            class BaseContext {
                constructor(e){
                    const t = this;
                    t._currentContext = e ? new Map(e) : new Map;
                    t.getValue = (e)=>t._currentContext.get(e);
                    t.setValue = (e, r)=>{
                        const n = new BaseContext(t._currentContext);
                        n._currentContext.set(e, r);
                        return n;
                    };
                    t.deleteValue = (e)=>{
                        const r = new BaseContext(t._currentContext);
                        r._currentContext.delete(e);
                        return r;
                    };
                }
            }
            t.ROOT_CONTEXT = new BaseContext;
        },
        506: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.diag = void 0;
            const n = r(930);
            t.diag = n.DiagAPI.instance();
        },
        56: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagComponentLogger = void 0;
            const n = r(172);
            class DiagComponentLogger {
                constructor(e){
                    this._namespace = e.namespace || "DiagComponentLogger";
                }
                debug(...e) {
                    return logProxy("debug", this._namespace, e);
                }
                error(...e) {
                    return logProxy("error", this._namespace, e);
                }
                info(...e) {
                    return logProxy("info", this._namespace, e);
                }
                warn(...e) {
                    return logProxy("warn", this._namespace, e);
                }
                verbose(...e) {
                    return logProxy("verbose", this._namespace, e);
                }
            }
            t.DiagComponentLogger = DiagComponentLogger;
            function logProxy(e, t, r) {
                const a = (0, n.getGlobal)("diag");
                if (!a) {
                    return;
                }
                r.unshift(t);
                return a[e](...r);
            }
        },
        972: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagConsoleLogger = void 0;
            const r = [
                {
                    n: "error",
                    c: "error"
                },
                {
                    n: "warn",
                    c: "warn"
                },
                {
                    n: "info",
                    c: "info"
                },
                {
                    n: "debug",
                    c: "debug"
                },
                {
                    n: "verbose",
                    c: "trace"
                }
            ];
            class DiagConsoleLogger {
                constructor(){
                    function _consoleFunc(e) {
                        return function(...t) {
                            if (console) {
                                let r = console[e];
                                if (typeof r !== "function") {
                                    r = console.log;
                                }
                                if (typeof r === "function") {
                                    return r.apply(console, t);
                                }
                            }
                        };
                    }
                    for(let e = 0; e < r.length; e++){
                        this[r[e].n] = _consoleFunc(r[e].c);
                    }
                }
            }
            t.DiagConsoleLogger = DiagConsoleLogger;
        },
        912: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createLogLevelDiagLogger = void 0;
            const n = r(957);
            function createLogLevelDiagLogger(e, t) {
                if (e < n.DiagLogLevel.NONE) {
                    e = n.DiagLogLevel.NONE;
                } else if (e > n.DiagLogLevel.ALL) {
                    e = n.DiagLogLevel.ALL;
                }
                t = t || {};
                function _filterFunc(r, n) {
                    const a = t[r];
                    if (typeof a === "function" && e >= n) {
                        return a.bind(t);
                    }
                    return function() {};
                }
                return {
                    error: _filterFunc("error", n.DiagLogLevel.ERROR),
                    warn: _filterFunc("warn", n.DiagLogLevel.WARN),
                    info: _filterFunc("info", n.DiagLogLevel.INFO),
                    debug: _filterFunc("debug", n.DiagLogLevel.DEBUG),
                    verbose: _filterFunc("verbose", n.DiagLogLevel.VERBOSE)
                };
            }
            t.createLogLevelDiagLogger = createLogLevelDiagLogger;
        },
        957: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagLogLevel = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["ERROR"] = 30] = "ERROR";
                e[e["WARN"] = 50] = "WARN";
                e[e["INFO"] = 60] = "INFO";
                e[e["DEBUG"] = 70] = "DEBUG";
                e[e["VERBOSE"] = 80] = "VERBOSE";
                e[e["ALL"] = 9999] = "ALL";
            })(r = t.DiagLogLevel || (t.DiagLogLevel = {}));
        },
        172: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.unregisterGlobal = t.getGlobal = t.registerGlobal = void 0;
            const n = r(200);
            const a = r(521);
            const o = r(130);
            const i = a.VERSION.split(".")[0];
            const c = Symbol.for(`opentelemetry.js.api.${i}`);
            const s = n._globalThis;
            function registerGlobal(e, t, r, n = false) {
                var o;
                const i = s[c] = (o = s[c]) !== null && o !== void 0 ? o : {
                    version: a.VERSION
                };
                if (!n && i[e]) {
                    const t = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                if (i.version !== a.VERSION) {
                    const t = new Error(`@opentelemetry/api: Registration of version v${i.version} for ${e} does not match previously registered API v${a.VERSION}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                i[e] = t;
                r.debug(`@opentelemetry/api: Registered a global for ${e} v${a.VERSION}.`);
                return true;
            }
            t.registerGlobal = registerGlobal;
            function getGlobal(e) {
                var t, r;
                const n = (t = s[c]) === null || t === void 0 ? void 0 : t.version;
                if (!n || !(0, o.isCompatible)(n)) {
                    return;
                }
                return (r = s[c]) === null || r === void 0 ? void 0 : r[e];
            }
            t.getGlobal = getGlobal;
            function unregisterGlobal(e, t) {
                t.debug(`@opentelemetry/api: Unregistering a global for ${e} v${a.VERSION}.`);
                const r = s[c];
                if (r) {
                    delete r[e];
                }
            }
            t.unregisterGlobal = unregisterGlobal;
        },
        130: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.isCompatible = t._makeCompatibilityCheck = void 0;
            const n = r(521);
            const a = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
            function _makeCompatibilityCheck(e) {
                const t = new Set([
                    e
                ]);
                const r = new Set;
                const n = e.match(a);
                if (!n) {
                    return ()=>false;
                }
                const o = {
                    major: +n[1],
                    minor: +n[2],
                    patch: +n[3],
                    prerelease: n[4]
                };
                if (o.prerelease != null) {
                    return function isExactmatch(t) {
                        return t === e;
                    };
                }
                function _reject(e) {
                    r.add(e);
                    return false;
                }
                function _accept(e) {
                    t.add(e);
                    return true;
                }
                return function isCompatible(e) {
                    if (t.has(e)) {
                        return true;
                    }
                    if (r.has(e)) {
                        return false;
                    }
                    const n = e.match(a);
                    if (!n) {
                        return _reject(e);
                    }
                    const i = {
                        major: +n[1],
                        minor: +n[2],
                        patch: +n[3],
                        prerelease: n[4]
                    };
                    if (i.prerelease != null) {
                        return _reject(e);
                    }
                    if (o.major !== i.major) {
                        return _reject(e);
                    }
                    if (o.major === 0) {
                        if (o.minor === i.minor && o.patch <= i.patch) {
                            return _accept(e);
                        }
                        return _reject(e);
                    }
                    if (o.minor <= i.minor) {
                        return _accept(e);
                    }
                    return _reject(e);
                };
            }
            t._makeCompatibilityCheck = _makeCompatibilityCheck;
            t.isCompatible = _makeCompatibilityCheck(n.VERSION);
        },
        886: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.metrics = void 0;
            const n = r(653);
            t.metrics = n.MetricsAPI.getInstance();
        },
        901: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ValueType = void 0;
            var r;
            (function(e) {
                e[e["INT"] = 0] = "INT";
                e[e["DOUBLE"] = 1] = "DOUBLE";
            })(r = t.ValueType || (t.ValueType = {}));
        },
        102: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createNoopMeter = t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = t.NOOP_OBSERVABLE_GAUGE_METRIC = t.NOOP_OBSERVABLE_COUNTER_METRIC = t.NOOP_UP_DOWN_COUNTER_METRIC = t.NOOP_HISTOGRAM_METRIC = t.NOOP_COUNTER_METRIC = t.NOOP_METER = t.NoopObservableUpDownCounterMetric = t.NoopObservableGaugeMetric = t.NoopObservableCounterMetric = t.NoopObservableMetric = t.NoopHistogramMetric = t.NoopUpDownCounterMetric = t.NoopCounterMetric = t.NoopMetric = t.NoopMeter = void 0;
            class NoopMeter {
                constructor(){}
                createHistogram(e, r) {
                    return t.NOOP_HISTOGRAM_METRIC;
                }
                createCounter(e, r) {
                    return t.NOOP_COUNTER_METRIC;
                }
                createUpDownCounter(e, r) {
                    return t.NOOP_UP_DOWN_COUNTER_METRIC;
                }
                createObservableGauge(e, r) {
                    return t.NOOP_OBSERVABLE_GAUGE_METRIC;
                }
                createObservableCounter(e, r) {
                    return t.NOOP_OBSERVABLE_COUNTER_METRIC;
                }
                createObservableUpDownCounter(e, r) {
                    return t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
                }
                addBatchObservableCallback(e, t) {}
                removeBatchObservableCallback(e) {}
            }
            t.NoopMeter = NoopMeter;
            class NoopMetric {
            }
            t.NoopMetric = NoopMetric;
            class NoopCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopCounterMetric = NoopCounterMetric;
            class NoopUpDownCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopUpDownCounterMetric = NoopUpDownCounterMetric;
            class NoopHistogramMetric extends NoopMetric {
                record(e, t) {}
            }
            t.NoopHistogramMetric = NoopHistogramMetric;
            class NoopObservableMetric {
                addCallback(e) {}
                removeCallback(e) {}
            }
            t.NoopObservableMetric = NoopObservableMetric;
            class NoopObservableCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableCounterMetric = NoopObservableCounterMetric;
            class NoopObservableGaugeMetric extends NoopObservableMetric {
            }
            t.NoopObservableGaugeMetric = NoopObservableGaugeMetric;
            class NoopObservableUpDownCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableUpDownCounterMetric = NoopObservableUpDownCounterMetric;
            t.NOOP_METER = new NoopMeter;
            t.NOOP_COUNTER_METRIC = new NoopCounterMetric;
            t.NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric;
            t.NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric;
            t.NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric;
            t.NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric;
            t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric;
            function createNoopMeter() {
                return t.NOOP_METER;
            }
            t.createNoopMeter = createNoopMeter;
        },
        660: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NOOP_METER_PROVIDER = t.NoopMeterProvider = void 0;
            const n = r(102);
            class NoopMeterProvider {
                getMeter(e, t, r) {
                    return n.NOOP_METER;
                }
            }
            t.NoopMeterProvider = NoopMeterProvider;
            t.NOOP_METER_PROVIDER = new NoopMeterProvider;
        },
        200: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(46), t);
        },
        651: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t._globalThis = void 0;
            t._globalThis = typeof globalThis === "object" ? globalThis : global;
        },
        46: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(651), t);
        },
        939: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.propagation = void 0;
            const n = r(181);
            t.propagation = n.PropagationAPI.getInstance();
        },
        874: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTextMapPropagator = void 0;
            class NoopTextMapPropagator {
                inject(e, t) {}
                extract(e, t) {
                    return e;
                }
                fields() {
                    return [];
                }
            }
            t.NoopTextMapPropagator = NoopTextMapPropagator;
        },
        194: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.defaultTextMapSetter = t.defaultTextMapGetter = void 0;
            t.defaultTextMapGetter = {
                get (e, t) {
                    if (e == null) {
                        return undefined;
                    }
                    return e[t];
                },
                keys (e) {
                    if (e == null) {
                        return [];
                    }
                    return Object.keys(e);
                }
            };
            t.defaultTextMapSetter = {
                set (e, t, r) {
                    if (e == null) {
                        return;
                    }
                    e[t] = r;
                }
            };
        },
        845: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.trace = void 0;
            const n = r(997);
            t.trace = n.TraceAPI.getInstance();
        },
        403: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NonRecordingSpan = void 0;
            const n = r(476);
            class NonRecordingSpan {
                constructor(e = n.INVALID_SPAN_CONTEXT){
                    this._spanContext = e;
                }
                spanContext() {
                    return this._spanContext;
                }
                setAttribute(e, t) {
                    return this;
                }
                setAttributes(e) {
                    return this;
                }
                addEvent(e, t) {
                    return this;
                }
                setStatus(e) {
                    return this;
                }
                updateName(e) {
                    return this;
                }
                end(e) {}
                isRecording() {
                    return false;
                }
                recordException(e, t) {}
            }
            t.NonRecordingSpan = NonRecordingSpan;
        },
        614: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracer = void 0;
            const n = r(491);
            const a = r(607);
            const o = r(403);
            const i = r(139);
            const c = n.ContextAPI.getInstance();
            class NoopTracer {
                startSpan(e, t, r = c.active()) {
                    const n = Boolean(t === null || t === void 0 ? void 0 : t.root);
                    if (n) {
                        return new o.NonRecordingSpan;
                    }
                    const s = r && (0, a.getSpanContext)(r);
                    if (isSpanContext(s) && (0, i.isSpanContextValid)(s)) {
                        return new o.NonRecordingSpan(s);
                    } else {
                        return new o.NonRecordingSpan;
                    }
                }
                startActiveSpan(e, t, r, n) {
                    let o;
                    let i;
                    let s;
                    if (arguments.length < 2) {
                        return;
                    } else if (arguments.length === 2) {
                        s = t;
                    } else if (arguments.length === 3) {
                        o = t;
                        s = r;
                    } else {
                        o = t;
                        i = r;
                        s = n;
                    }
                    const u = i !== null && i !== void 0 ? i : c.active();
                    const l = this.startSpan(e, o, u);
                    const g = (0, a.setSpan)(u, l);
                    return c.with(g, s, undefined, l);
                }
            }
            t.NoopTracer = NoopTracer;
            function isSpanContext(e) {
                return typeof e === "object" && typeof e["spanId"] === "string" && typeof e["traceId"] === "string" && typeof e["traceFlags"] === "number";
            }
        },
        124: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracerProvider = void 0;
            const n = r(614);
            class NoopTracerProvider {
                getTracer(e, t, r) {
                    return new n.NoopTracer;
                }
            }
            t.NoopTracerProvider = NoopTracerProvider;
        },
        125: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracer = void 0;
            const n = r(614);
            const a = new n.NoopTracer;
            class ProxyTracer {
                constructor(e, t, r, n){
                    this._provider = e;
                    this.name = t;
                    this.version = r;
                    this.options = n;
                }
                startSpan(e, t, r) {
                    return this._getTracer().startSpan(e, t, r);
                }
                startActiveSpan(e, t, r, n) {
                    const a = this._getTracer();
                    return Reflect.apply(a.startActiveSpan, a, arguments);
                }
                _getTracer() {
                    if (this._delegate) {
                        return this._delegate;
                    }
                    const e = this._provider.getDelegateTracer(this.name, this.version, this.options);
                    if (!e) {
                        return a;
                    }
                    this._delegate = e;
                    return this._delegate;
                }
            }
            t.ProxyTracer = ProxyTracer;
        },
        846: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracerProvider = void 0;
            const n = r(125);
            const a = r(124);
            const o = new a.NoopTracerProvider;
            class ProxyTracerProvider {
                getTracer(e, t, r) {
                    var a;
                    return (a = this.getDelegateTracer(e, t, r)) !== null && a !== void 0 ? a : new n.ProxyTracer(this, e, t, r);
                }
                getDelegate() {
                    var e;
                    return (e = this._delegate) !== null && e !== void 0 ? e : o;
                }
                setDelegate(e) {
                    this._delegate = e;
                }
                getDelegateTracer(e, t, r) {
                    var n;
                    return (n = this._delegate) === null || n === void 0 ? void 0 : n.getTracer(e, t, r);
                }
            }
            t.ProxyTracerProvider = ProxyTracerProvider;
        },
        996: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SamplingDecision = void 0;
            var r;
            (function(e) {
                e[e["NOT_RECORD"] = 0] = "NOT_RECORD";
                e[e["RECORD"] = 1] = "RECORD";
                e[e["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
            })(r = t.SamplingDecision || (t.SamplingDecision = {}));
        },
        607: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getSpanContext = t.setSpanContext = t.deleteSpan = t.setSpan = t.getActiveSpan = t.getSpan = void 0;
            const n = r(780);
            const a = r(403);
            const o = r(491);
            const i = (0, n.createContextKey)("OpenTelemetry Context Key SPAN");
            function getSpan(e) {
                return e.getValue(i) || undefined;
            }
            t.getSpan = getSpan;
            function getActiveSpan() {
                return getSpan(o.ContextAPI.getInstance().active());
            }
            t.getActiveSpan = getActiveSpan;
            function setSpan(e, t) {
                return e.setValue(i, t);
            }
            t.setSpan = setSpan;
            function deleteSpan(e) {
                return e.deleteValue(i);
            }
            t.deleteSpan = deleteSpan;
            function setSpanContext(e, t) {
                return setSpan(e, new a.NonRecordingSpan(t));
            }
            t.setSpanContext = setSpanContext;
            function getSpanContext(e) {
                var t;
                return (t = getSpan(e)) === null || t === void 0 ? void 0 : t.spanContext();
            }
            t.getSpanContext = getSpanContext;
        },
        325: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceStateImpl = void 0;
            const n = r(564);
            const a = 32;
            const o = 512;
            const i = ",";
            const c = "=";
            class TraceStateImpl {
                constructor(e){
                    this._internalState = new Map;
                    if (e) this._parse(e);
                }
                set(e, t) {
                    const r = this._clone();
                    if (r._internalState.has(e)) {
                        r._internalState.delete(e);
                    }
                    r._internalState.set(e, t);
                    return r;
                }
                unset(e) {
                    const t = this._clone();
                    t._internalState.delete(e);
                    return t;
                }
                get(e) {
                    return this._internalState.get(e);
                }
                serialize() {
                    return this._keys().reduce((e, t)=>{
                        e.push(t + c + this.get(t));
                        return e;
                    }, []).join(i);
                }
                _parse(e) {
                    if (e.length > o) return;
                    this._internalState = e.split(i).reverse().reduce((e, t)=>{
                        const r = t.trim();
                        const a = r.indexOf(c);
                        if (a !== -1) {
                            const o = r.slice(0, a);
                            const i = r.slice(a + 1, t.length);
                            if ((0, n.validateKey)(o) && (0, n.validateValue)(i)) {
                                e.set(o, i);
                            } else {}
                        }
                        return e;
                    }, new Map);
                    if (this._internalState.size > a) {
                        this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, a));
                    }
                }
                _keys() {
                    return Array.from(this._internalState.keys()).reverse();
                }
                _clone() {
                    const e = new TraceStateImpl;
                    e._internalState = new Map(this._internalState);
                    return e;
                }
            }
            t.TraceStateImpl = TraceStateImpl;
        },
        564: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.validateValue = t.validateKey = void 0;
            const r = "[_0-9a-z-*/]";
            const n = `[a-z]${r}{0,255}`;
            const a = `[a-z0-9]${r}{0,240}@[a-z]${r}{0,13}`;
            const o = new RegExp(`^(?:${n}|${a})$`);
            const i = /^[ -~]{0,255}[!-~]$/;
            const c = /,|=/;
            function validateKey(e) {
                return o.test(e);
            }
            t.validateKey = validateKey;
            function validateValue(e) {
                return i.test(e) && !c.test(e);
            }
            t.validateValue = validateValue;
        },
        98: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createTraceState = void 0;
            const n = r(325);
            function createTraceState(e) {
                return new n.TraceStateImpl(e);
            }
            t.createTraceState = createTraceState;
        },
        476: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.INVALID_SPAN_CONTEXT = t.INVALID_TRACEID = t.INVALID_SPANID = void 0;
            const n = r(475);
            t.INVALID_SPANID = "0000000000000000";
            t.INVALID_TRACEID = "00000000000000000000000000000000";
            t.INVALID_SPAN_CONTEXT = {
                traceId: t.INVALID_TRACEID,
                spanId: t.INVALID_SPANID,
                traceFlags: n.TraceFlags.NONE
            };
        },
        357: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanKind = void 0;
            var r;
            (function(e) {
                e[e["INTERNAL"] = 0] = "INTERNAL";
                e[e["SERVER"] = 1] = "SERVER";
                e[e["CLIENT"] = 2] = "CLIENT";
                e[e["PRODUCER"] = 3] = "PRODUCER";
                e[e["CONSUMER"] = 4] = "CONSUMER";
            })(r = t.SpanKind || (t.SpanKind = {}));
        },
        139: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.wrapSpanContext = t.isSpanContextValid = t.isValidSpanId = t.isValidTraceId = void 0;
            const n = r(476);
            const a = r(403);
            const o = /^([0-9a-f]{32})$/i;
            const i = /^[0-9a-f]{16}$/i;
            function isValidTraceId(e) {
                return o.test(e) && e !== n.INVALID_TRACEID;
            }
            t.isValidTraceId = isValidTraceId;
            function isValidSpanId(e) {
                return i.test(e) && e !== n.INVALID_SPANID;
            }
            t.isValidSpanId = isValidSpanId;
            function isSpanContextValid(e) {
                return isValidTraceId(e.traceId) && isValidSpanId(e.spanId);
            }
            t.isSpanContextValid = isSpanContextValid;
            function wrapSpanContext(e) {
                return new a.NonRecordingSpan(e);
            }
            t.wrapSpanContext = wrapSpanContext;
        },
        847: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanStatusCode = void 0;
            var r;
            (function(e) {
                e[e["UNSET"] = 0] = "UNSET";
                e[e["OK"] = 1] = "OK";
                e[e["ERROR"] = 2] = "ERROR";
            })(r = t.SpanStatusCode || (t.SpanStatusCode = {}));
        },
        475: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceFlags = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["SAMPLED"] = 1] = "SAMPLED";
            })(r = t.TraceFlags || (t.TraceFlags = {}));
        },
        521: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.VERSION = void 0;
            t.VERSION = "1.6.0";
        }
    };
    var t = {};
    function __nccwpck_require__(r) {
        var n = t[r];
        if (n !== undefined) {
            return n.exports;
        }
        var a = t[r] = {
            exports: {}
        };
        var o = true;
        try {
            e[r].call(a.exports, a, a.exports, __nccwpck_require__);
            o = false;
        } finally{
            if (o) delete t[r];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var r = {};
    (()=>{
        var e = r;
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        e.trace = e.propagation = e.metrics = e.diag = e.context = e.INVALID_SPAN_CONTEXT = e.INVALID_TRACEID = e.INVALID_SPANID = e.isValidSpanId = e.isValidTraceId = e.isSpanContextValid = e.createTraceState = e.TraceFlags = e.SpanStatusCode = e.SpanKind = e.SamplingDecision = e.ProxyTracerProvider = e.ProxyTracer = e.defaultTextMapSetter = e.defaultTextMapGetter = e.ValueType = e.createNoopMeter = e.DiagLogLevel = e.DiagConsoleLogger = e.ROOT_CONTEXT = e.createContextKey = e.baggageEntryMetadataFromString = void 0;
        var t = __nccwpck_require__(369);
        Object.defineProperty(e, "baggageEntryMetadataFromString", {
            enumerable: true,
            get: function() {
                return t.baggageEntryMetadataFromString;
            }
        });
        var n = __nccwpck_require__(780);
        Object.defineProperty(e, "createContextKey", {
            enumerable: true,
            get: function() {
                return n.createContextKey;
            }
        });
        Object.defineProperty(e, "ROOT_CONTEXT", {
            enumerable: true,
            get: function() {
                return n.ROOT_CONTEXT;
            }
        });
        var a = __nccwpck_require__(972);
        Object.defineProperty(e, "DiagConsoleLogger", {
            enumerable: true,
            get: function() {
                return a.DiagConsoleLogger;
            }
        });
        var o = __nccwpck_require__(957);
        Object.defineProperty(e, "DiagLogLevel", {
            enumerable: true,
            get: function() {
                return o.DiagLogLevel;
            }
        });
        var i = __nccwpck_require__(102);
        Object.defineProperty(e, "createNoopMeter", {
            enumerable: true,
            get: function() {
                return i.createNoopMeter;
            }
        });
        var c = __nccwpck_require__(901);
        Object.defineProperty(e, "ValueType", {
            enumerable: true,
            get: function() {
                return c.ValueType;
            }
        });
        var s = __nccwpck_require__(194);
        Object.defineProperty(e, "defaultTextMapGetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapGetter;
            }
        });
        Object.defineProperty(e, "defaultTextMapSetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapSetter;
            }
        });
        var u = __nccwpck_require__(125);
        Object.defineProperty(e, "ProxyTracer", {
            enumerable: true,
            get: function() {
                return u.ProxyTracer;
            }
        });
        var l = __nccwpck_require__(846);
        Object.defineProperty(e, "ProxyTracerProvider", {
            enumerable: true,
            get: function() {
                return l.ProxyTracerProvider;
            }
        });
        var g = __nccwpck_require__(996);
        Object.defineProperty(e, "SamplingDecision", {
            enumerable: true,
            get: function() {
                return g.SamplingDecision;
            }
        });
        var p = __nccwpck_require__(357);
        Object.defineProperty(e, "SpanKind", {
            enumerable: true,
            get: function() {
                return p.SpanKind;
            }
        });
        var d = __nccwpck_require__(847);
        Object.defineProperty(e, "SpanStatusCode", {
            enumerable: true,
            get: function() {
                return d.SpanStatusCode;
            }
        });
        var _ = __nccwpck_require__(475);
        Object.defineProperty(e, "TraceFlags", {
            enumerable: true,
            get: function() {
                return _.TraceFlags;
            }
        });
        var f = __nccwpck_require__(98);
        Object.defineProperty(e, "createTraceState", {
            enumerable: true,
            get: function() {
                return f.createTraceState;
            }
        });
        var b = __nccwpck_require__(139);
        Object.defineProperty(e, "isSpanContextValid", {
            enumerable: true,
            get: function() {
                return b.isSpanContextValid;
            }
        });
        Object.defineProperty(e, "isValidTraceId", {
            enumerable: true,
            get: function() {
                return b.isValidTraceId;
            }
        });
        Object.defineProperty(e, "isValidSpanId", {
            enumerable: true,
            get: function() {
                return b.isValidSpanId;
            }
        });
        var v = __nccwpck_require__(476);
        Object.defineProperty(e, "INVALID_SPANID", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPANID;
            }
        });
        Object.defineProperty(e, "INVALID_TRACEID", {
            enumerable: true,
            get: function() {
                return v.INVALID_TRACEID;
            }
        });
        Object.defineProperty(e, "INVALID_SPAN_CONTEXT", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPAN_CONTEXT;
            }
        });
        const O = __nccwpck_require__(67);
        Object.defineProperty(e, "context", {
            enumerable: true,
            get: function() {
                return O.context;
            }
        });
        const P = __nccwpck_require__(506);
        Object.defineProperty(e, "diag", {
            enumerable: true,
            get: function() {
                return P.diag;
            }
        });
        const N = __nccwpck_require__(886);
        Object.defineProperty(e, "metrics", {
            enumerable: true,
            get: function() {
                return N.metrics;
            }
        });
        const S = __nccwpck_require__(939);
        Object.defineProperty(e, "propagation", {
            enumerable: true,
            get: function() {
                return S.propagation;
            }
        });
        const C = __nccwpck_require__(845);
        Object.defineProperty(e, "trace", {
            enumerable: true,
            get: function() {
                return C.trace;
            }
        });
        e["default"] = {
            context: O.context,
            diag: P.diag,
            metrics: N.metrics,
            propagation: S.propagation,
            trace: C.trace
        };
    })();
    module.exports = r;
})();
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BubbledError": (()=>BubbledError),
    "SpanKind": (()=>SpanKind),
    "SpanStatusCode": (()=>SpanStatusCode),
    "getTracer": (()=>getTracer),
    "isBubbledError": (()=>isBubbledError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$thenable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/is-thenable.js [app-rsc] (ecmascript)");
;
;
let api;
// we want to allow users to use their own version of @opentelemetry/api if they
// want to, so we try to require it first, and if it fails we fall back to the
// version that is bundled with Next.js
// this is because @opentelemetry/api has to be synced with the version of
// @opentelemetry/tracing that is used, and we don't want to force users to use
// the version that is bundled with Next.js.
// the API is ~stable, so this should be fine
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    try {
        api = __turbopack_context__.r("[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)");
    } catch (err) {
        api = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/compiled/@opentelemetry/api/index.js [app-rsc] (ecmascript)");
    }
}
const { context, propagation, trace, SpanStatusCode, SpanKind, ROOT_CONTEXT } = api;
class BubbledError extends Error {
    constructor(bubble, result){
        super(), this.bubble = bubble, this.result = result;
    }
}
function isBubbledError(error) {
    if (typeof error !== 'object' || error === null) return false;
    return error instanceof BubbledError;
}
const closeSpanWithError = (span, error)=>{
    if (isBubbledError(error) && error.bubble) {
        span.setAttribute('next.bubble', true);
    } else {
        if (error) {
            span.recordException(error);
        }
        span.setStatus({
            code: SpanStatusCode.ERROR,
            message: error == null ? void 0 : error.message
        });
    }
    span.end();
};
/** we use this map to propagate attributes from nested spans to the top span */ const rootSpanAttributesStore = new Map();
const rootSpanIdKey = api.createContextKey('next.rootSpanId');
let lastSpanId = 0;
const getSpanId = ()=>lastSpanId++;
const clientTraceDataSetter = {
    set (carrier, key, value) {
        carrier.push({
            key,
            value
        });
    }
};
class NextTracerImpl {
    /**
   * Returns an instance to the trace with configured name.
   * Since wrap / trace can be defined in any place prior to actual trace subscriber initialization,
   * This should be lazily evaluated.
   */ getTracerInstance() {
        return trace.getTracer('next.js', '0.0.1');
    }
    getContext() {
        return context;
    }
    getTracePropagationData() {
        const activeContext = context.active();
        const entries = [];
        propagation.inject(activeContext, entries, clientTraceDataSetter);
        return entries;
    }
    getActiveScopeSpan() {
        return trace.getSpan(context == null ? void 0 : context.active());
    }
    withPropagatedContext(carrier, fn, getter) {
        const activeContext = context.active();
        if (trace.getSpanContext(activeContext)) {
            // Active span is already set, too late to propagate.
            return fn();
        }
        const remoteContext = propagation.extract(activeContext, carrier, getter);
        return context.with(remoteContext, fn);
    }
    trace(...args) {
        var _trace_getSpanContext;
        const [type, fnOrOptions, fnOrEmpty] = args;
        // coerce options form overload
        const { fn, options } = typeof fnOrOptions === 'function' ? {
            fn: fnOrOptions,
            options: {}
        } : {
            fn: fnOrEmpty,
            options: {
                ...fnOrOptions
            }
        };
        const spanName = options.spanName ?? type;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextVanillaSpanAllowlist"].includes(type) && process.env.NEXT_OTEL_VERBOSE !== '1' || options.hideSpan) {
            return fn();
        }
        // Trying to get active scoped span to assign parent. If option specifies parent span manually, will try to use it.
        let spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        let isRootSpan = false;
        if (!spanContext) {
            spanContext = (context == null ? void 0 : context.active()) ?? ROOT_CONTEXT;
            isRootSpan = true;
        } else if ((_trace_getSpanContext = trace.getSpanContext(spanContext)) == null ? void 0 : _trace_getSpanContext.isRemote) {
            isRootSpan = true;
        }
        const spanId = getSpanId();
        options.attributes = {
            'next.span_name': spanName,
            'next.span_type': type,
            ...options.attributes
        };
        return context.with(spanContext.setValue(rootSpanIdKey, spanId), ()=>this.getTracerInstance().startActiveSpan(spanName, options, (span)=>{
                const startTime = 'performance' in globalThis && 'measure' in performance ? globalThis.performance.now() : undefined;
                const onCleanup = ()=>{
                    rootSpanAttributesStore.delete(spanId);
                    if (startTime && process.env.NEXT_OTEL_PERFORMANCE_PREFIX && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LogSpanAllowList"].includes(type || '')) {
                        performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-${(type.split('.').pop() || '').replace(/[A-Z]/g, (match)=>'-' + match.toLowerCase())}`, {
                            start: startTime,
                            end: performance.now()
                        });
                    }
                };
                if (isRootSpan) {
                    rootSpanAttributesStore.set(spanId, new Map(Object.entries(options.attributes ?? {})));
                }
                try {
                    if (fn.length > 1) {
                        return fn(span, (err)=>closeSpanWithError(span, err));
                    }
                    const result = fn(span);
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$thenable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isThenable"])(result)) {
                        // If there's error make sure it throws
                        return result.then((res)=>{
                            span.end();
                            // Need to pass down the promise result,
                            // it could be react stream response with error { error, stream }
                            return res;
                        }).catch((err)=>{
                            closeSpanWithError(span, err);
                            throw err;
                        }).finally(onCleanup);
                    } else {
                        span.end();
                        onCleanup();
                    }
                    return result;
                } catch (err) {
                    closeSpanWithError(span, err);
                    onCleanup();
                    throw err;
                }
            }));
    }
    wrap(...args) {
        const tracer = this;
        const [name, options, fn] = args.length === 3 ? args : [
            args[0],
            {},
            args[1]
        ];
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextVanillaSpanAllowlist"].includes(name) && process.env.NEXT_OTEL_VERBOSE !== '1') {
            return fn;
        }
        return function() {
            let optionsObj = options;
            if (typeof optionsObj === 'function' && typeof fn === 'function') {
                optionsObj = optionsObj.apply(this, arguments);
            }
            const lastArgId = arguments.length - 1;
            const cb = arguments[lastArgId];
            if (typeof cb === 'function') {
                const scopeBoundCb = tracer.getContext().bind(context.active(), cb);
                return tracer.trace(name, optionsObj, (_span, done)=>{
                    arguments[lastArgId] = function(err) {
                        done == null ? void 0 : done(err);
                        return scopeBoundCb.apply(this, arguments);
                    };
                    return fn.apply(this, arguments);
                });
            } else {
                return tracer.trace(name, optionsObj, ()=>fn.apply(this, arguments));
            }
        };
    }
    startSpan(...args) {
        const [type, options] = args;
        const spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        return this.getTracerInstance().startSpan(type, options, spanContext);
    }
    getSpanContext(parentSpan) {
        const spanContext = parentSpan ? trace.setSpan(context.active(), parentSpan) : undefined;
        return spanContext;
    }
    getRootSpanAttributes() {
        const spanId = context.active().getValue(rootSpanIdKey);
        return rootSpanAttributesStore.get(spanId);
    }
    setRootSpanAttribute(key, value) {
        const spanId = context.active().getValue(rootSpanIdKey);
        const attributes = rootSpanAttributesStore.get(spanId);
        if (attributes) {
            attributes.set(key, value);
        }
    }
}
const getTracer = (()=>{
    const tracer = new NextTracerImpl();
    return ()=>tracer;
})();
;
 //# sourceMappingURL=tracer.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/clone-metadata.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cloneMetadata": (()=>cloneMetadata)
});
const TYPE_URL = '__METADATA_URL';
function replacer(_key, val) {
    // clone URL as string but recover it as URL
    if (val instanceof URL) {
        return {
            _type: TYPE_URL,
            value: val.href
        };
    }
    return val;
}
function reviver(_key, val) {
    if (typeof val === 'object' && val !== null && val._type === TYPE_URL) {
        return new URL(val.value);
    }
    return val;
}
function cloneMetadata(metadata) {
    const jsonString = JSON.stringify(metadata, replacer);
    return JSON.parse(jsonString, reviver);
} //# sourceMappingURL=clone-metadata.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/resolve-metadata.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
// eslint-disable-next-line import/no-extraneous-dependencies
__turbopack_context__.s({
    "accumulateMetadata": (()=>accumulateMetadata),
    "accumulateViewport": (()=>accumulateViewport),
    "resolveMetadata": (()=>resolveMetadata),
    "resolveViewport": (()=>resolveViewport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$default$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/default-metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$opengraph$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/resolvers/resolve-opengraph.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$title$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/resolvers/resolve-title.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/generate/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$app$2d$dir$2d$module$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/app-dir-module.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/interop-default.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$basics$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/resolvers/resolve-basics.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$icons$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/resolvers/resolve-icons.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/segment.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$output$2f$log$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/build/output/log.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function isFavicon(icon) {
    if (!icon) {
        return false;
    }
    // turbopack appends a hash to all images
    return (icon.url === '/favicon.ico' || icon.url.toString().startsWith('/favicon.ico?')) && icon.type === 'image/x-icon';
}
function mergeStaticMetadata(source, target, staticFilesMetadata, metadataContext, titleTemplates, leafSegmentStaticIcons) {
    var _source_twitter, _source_openGraph;
    if (!staticFilesMetadata) return;
    const { icon, apple, openGraph, twitter, manifest } = staticFilesMetadata;
    // Keep updating the static icons in the most leaf node
    if (icon) {
        leafSegmentStaticIcons.icon = icon;
    }
    if (apple) {
        leafSegmentStaticIcons.apple = apple;
    }
    // file based metadata is specified and current level metadata twitter.images is not specified
    if (twitter && !(source == null ? void 0 : (_source_twitter = source.twitter) == null ? void 0 : _source_twitter.hasOwnProperty('images'))) {
        const resolvedTwitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$opengraph$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTwitter"])({
            ...target.twitter,
            images: twitter
        }, target.metadataBase, {
            ...metadataContext,
            isStaticMetadataRouteFile: true
        }, titleTemplates.twitter);
        target.twitter = resolvedTwitter;
    }
    // file based metadata is specified and current level metadata openGraph.images is not specified
    if (openGraph && !(source == null ? void 0 : (_source_openGraph = source.openGraph) == null ? void 0 : _source_openGraph.hasOwnProperty('images'))) {
        const resolvedOpenGraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$opengraph$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveOpenGraph"])({
            ...target.openGraph,
            images: openGraph
        }, target.metadataBase, {
            ...metadataContext,
            isStaticMetadataRouteFile: true
        }, titleTemplates.openGraph);
        target.openGraph = resolvedOpenGraph;
    }
    if (manifest) {
        target.manifest = manifest;
    }
    return target;
}
// Merge the source metadata into the resolved target metadata.
function mergeMetadata({ source, target, staticFilesMetadata, titleTemplates, metadataContext, buildState, leafSegmentStaticIcons }) {
    // If there's override metadata, prefer it otherwise fallback to the default metadata.
    const metadataBase = typeof (source == null ? void 0 : source.metadataBase) !== 'undefined' ? source.metadataBase : target.metadataBase;
    for(const key_ in source){
        const key = key_;
        switch(key){
            case 'title':
                {
                    target.title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$title$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTitle"])(source.title, titleTemplates.title);
                    break;
                }
            case 'alternates':
                {
                    target.alternates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$basics$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveAlternates"])(source.alternates, metadataBase, metadataContext);
                    break;
                }
            case 'openGraph':
                {
                    target.openGraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$opengraph$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveOpenGraph"])(source.openGraph, metadataBase, metadataContext, titleTemplates.openGraph);
                    break;
                }
            case 'twitter':
                {
                    target.twitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$opengraph$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTwitter"])(source.twitter, metadataBase, metadataContext, titleTemplates.twitter);
                    break;
                }
            case 'facebook':
                target.facebook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$basics$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveFacebook"])(source.facebook);
                break;
            case 'verification':
                target.verification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$basics$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveVerification"])(source.verification);
                break;
            case 'icons':
                {
                    target.icons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$icons$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveIcons"])(source.icons);
                    break;
                }
            case 'appleWebApp':
                target.appleWebApp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$basics$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveAppleWebApp"])(source.appleWebApp);
                break;
            case 'appLinks':
                target.appLinks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$basics$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveAppLinks"])(source.appLinks);
                break;
            case 'robots':
                {
                    target.robots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$basics$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveRobots"])(source.robots);
                    break;
                }
            case 'archives':
            case 'assets':
            case 'bookmarks':
            case 'keywords':
                {
                    target[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveAsArrayOrUndefined"])(source[key]);
                    break;
                }
            case 'authors':
                {
                    target[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveAsArrayOrUndefined"])(source.authors);
                    break;
                }
            case 'itunes':
                {
                    target[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$basics$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveItunes"])(source.itunes, metadataBase, metadataContext);
                    break;
                }
            case 'pagination':
                {
                    target.pagination = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$basics$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolvePagination"])(source.pagination, metadataBase, metadataContext);
                    break;
                }
            // directly assign fields that fallback to null
            case 'applicationName':
            case 'description':
            case 'generator':
            case 'creator':
            case 'publisher':
            case 'category':
            case 'classification':
            case 'referrer':
            case 'formatDetection':
            case 'manifest':
                // @ts-ignore TODO: support inferring
                target[key] = source[key] || null;
                break;
            case 'other':
                target.other = Object.assign({}, target.other, source.other);
                break;
            case 'metadataBase':
                target.metadataBase = metadataBase;
                break;
            default:
                {
                    if ((key === 'viewport' || key === 'themeColor' || key === 'colorScheme') && source[key] != null) {
                        buildState.warnings.add(`Unsupported metadata ${key} is configured in metadata export in ${metadataContext.pathname}. Please move it to viewport export instead.\nRead more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport`);
                    }
                    break;
                }
        }
    }
    mergeStaticMetadata(source, target, staticFilesMetadata, metadataContext, titleTemplates, leafSegmentStaticIcons);
}
function mergeViewport({ target, source }) {
    if (!source) return;
    for(const key_ in source){
        const key = key_;
        switch(key){
            case 'themeColor':
                {
                    target.themeColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$basics$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveThemeColor"])(source.themeColor);
                    break;
                }
            case 'colorScheme':
                target.colorScheme = source.colorScheme || null;
                break;
            default:
                // always override the target with the source
                // @ts-ignore viewport properties
                target[key] = source[key];
                break;
        }
    }
}
function getDefinedViewport(mod, props, tracingProps) {
    if (typeof mod.generateViewport === 'function') {
        const { route } = tracingProps;
        return (parent)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResolveMetadataSpan"].generateViewport, {
                spanName: `generateViewport ${route}`,
                attributes: {
                    'next.page': route
                }
            }, ()=>mod.generateViewport(props, parent));
    }
    return mod.viewport || null;
}
function getDefinedMetadata(mod, props, tracingProps) {
    if (typeof mod.generateMetadata === 'function') {
        const { route } = tracingProps;
        return (parent)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResolveMetadataSpan"].generateMetadata, {
                spanName: `generateMetadata ${route}`,
                attributes: {
                    'next.page': route
                }
            }, ()=>mod.generateMetadata(props, parent));
    }
    return mod.metadata || null;
}
async function collectStaticImagesFiles(metadata, props, type) {
    var _this;
    if (!(metadata == null ? void 0 : metadata[type])) return undefined;
    const iconPromises = metadata[type].map(async (imageModule)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["interopDefault"])(await imageModule(props)));
    return (iconPromises == null ? void 0 : iconPromises.length) > 0 ? (_this = await Promise.all(iconPromises)) == null ? void 0 : _this.flat() : undefined;
}
async function resolveStaticMetadata(modules, props) {
    const { metadata } = modules;
    if (!metadata) return null;
    const [icon, apple, openGraph, twitter] = await Promise.all([
        collectStaticImagesFiles(metadata, props, 'icon'),
        collectStaticImagesFiles(metadata, props, 'apple'),
        collectStaticImagesFiles(metadata, props, 'openGraph'),
        collectStaticImagesFiles(metadata, props, 'twitter')
    ]);
    const staticMetadata = {
        icon,
        apple,
        openGraph,
        twitter,
        manifest: metadata.manifest
    };
    return staticMetadata;
}
// [layout.metadata, static files metadata] -> ... -> [page.metadata, static files metadata]
async function collectMetadata({ tree, metadataItems, errorMetadataItem, props, route, errorConvention }) {
    let mod;
    let modType;
    const hasErrorConventionComponent = Boolean(errorConvention && tree[2][errorConvention]);
    if (errorConvention) {
        mod = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$app$2d$dir$2d$module$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getComponentTypeModule"])(tree, 'layout');
        modType = errorConvention;
    } else {
        const { mod: layoutOrPageMod, modType: layoutOrPageModType } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$app$2d$dir$2d$module$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLayoutOrPageModule"])(tree);
        mod = layoutOrPageMod;
        modType = layoutOrPageModType;
    }
    if (modType) {
        route += `/${modType}`;
    }
    const staticFilesMetadata = await resolveStaticMetadata(tree[2], props);
    const metadataExport = mod ? getDefinedMetadata(mod, props, {
        route
    }) : null;
    const viewportExport = mod ? getDefinedViewport(mod, props, {
        route
    }) : null;
    metadataItems.push([
        metadataExport,
        staticFilesMetadata,
        viewportExport
    ]);
    if (hasErrorConventionComponent && errorConvention) {
        const errorMod = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$app$2d$dir$2d$module$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getComponentTypeModule"])(tree, errorConvention);
        const errorViewportExport = errorMod ? getDefinedViewport(errorMod, props, {
            route
        }) : null;
        const errorMetadataExport = errorMod ? getDefinedMetadata(errorMod, props, {
            route
        }) : null;
        errorMetadataItem[0] = errorMetadataExport;
        errorMetadataItem[1] = staticFilesMetadata;
        errorMetadataItem[2] = errorViewportExport;
    }
}
const resolveMetadataItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(async function(tree, searchParams, errorConvention, getDynamicParamFromSegment, createServerParamsForMetadata, workStore) {
    const parentParams = {};
    const metadataItems = [];
    const errorMetadataItem = [
        null,
        null,
        null
    ];
    const treePrefix = undefined;
    return resolveMetadataItemsImpl(metadataItems, tree, treePrefix, parentParams, searchParams, errorConvention, errorMetadataItem, getDynamicParamFromSegment, createServerParamsForMetadata, workStore);
});
async function resolveMetadataItemsImpl(metadataItems, tree, /** Provided tree can be nested subtree, this argument says what is the path of such subtree */ treePrefix, parentParams, searchParams, errorConvention, errorMetadataItem, getDynamicParamFromSegment, createServerParamsForMetadata, workStore) {
    const [segment, parallelRoutes, { page }] = tree;
    const currentTreePrefix = treePrefix && treePrefix.length ? [
        ...treePrefix,
        segment
    ] : [
        segment
    ];
    const isPage = typeof page !== 'undefined';
    // Handle dynamic segment params.
    const segmentParam = getDynamicParamFromSegment(segment);
    /**
   * Create object holding the parent params and current params
   */ let currentParams = parentParams;
    if (segmentParam && segmentParam.value !== null) {
        currentParams = {
            ...parentParams,
            [segmentParam.param]: segmentParam.value
        };
    }
    const params = createServerParamsForMetadata(currentParams, workStore);
    let layerProps;
    if (isPage) {
        layerProps = {
            params,
            searchParams
        };
    } else {
        layerProps = {
            params
        };
    }
    await collectMetadata({
        tree,
        metadataItems,
        errorMetadataItem,
        errorConvention,
        props: layerProps,
        route: currentTreePrefix // __PAGE__ shouldn't be shown in a route
        .filter((s)=>s !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PAGE_SEGMENT_KEY"]).join('/')
    });
    for(const key in parallelRoutes){
        const childTree = parallelRoutes[key];
        await resolveMetadataItemsImpl(metadataItems, childTree, currentTreePrefix, currentParams, searchParams, errorConvention, errorMetadataItem, getDynamicParamFromSegment, createServerParamsForMetadata, workStore);
    }
    if (Object.keys(parallelRoutes).length === 0 && errorConvention) {
        // If there are no parallel routes, place error metadata as the last item.
        // e.g. layout -> layout -> not-found
        metadataItems.push(errorMetadataItem);
    }
    return metadataItems;
}
const isTitleTruthy = (title)=>!!(title == null ? void 0 : title.absolute);
const hasTitle = (metadata)=>isTitleTruthy(metadata == null ? void 0 : metadata.title);
function inheritFromMetadata(target, metadata) {
    if (target) {
        if (!hasTitle(target) && hasTitle(metadata)) {
            target.title = metadata.title;
        }
        if (!target.description && metadata.description) {
            target.description = metadata.description;
        }
    }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const commonOgKeys = [
    'title',
    'description',
    'images'
];
function postProcessMetadata(metadata, favicon, titleTemplates, metadataContext) {
    const { openGraph, twitter } = metadata;
    if (openGraph) {
        // If there's openGraph information but not configured in twitter,
        // inherit them from openGraph metadata.
        let autoFillProps = {};
        const hasTwTitle = hasTitle(twitter);
        const hasTwDescription = twitter == null ? void 0 : twitter.description;
        const hasTwImages = Boolean((twitter == null ? void 0 : twitter.hasOwnProperty('images')) && twitter.images);
        if (!hasTwTitle) {
            if (isTitleTruthy(openGraph.title)) {
                autoFillProps.title = openGraph.title;
            } else if (metadata.title && isTitleTruthy(metadata.title)) {
                autoFillProps.title = metadata.title;
            }
        }
        if (!hasTwDescription) autoFillProps.description = openGraph.description || metadata.description || undefined;
        if (!hasTwImages) autoFillProps.images = openGraph.images;
        if (Object.keys(autoFillProps).length > 0) {
            const partialTwitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolvers$2f$resolve$2d$opengraph$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveTwitter"])(autoFillProps, metadata.metadataBase, metadataContext, titleTemplates.twitter);
            if (metadata.twitter) {
                metadata.twitter = Object.assign({}, metadata.twitter, {
                    ...!hasTwTitle && {
                        title: partialTwitter == null ? void 0 : partialTwitter.title
                    },
                    ...!hasTwDescription && {
                        description: partialTwitter == null ? void 0 : partialTwitter.description
                    },
                    ...!hasTwImages && {
                        images: partialTwitter == null ? void 0 : partialTwitter.images
                    }
                });
            } else {
                metadata.twitter = partialTwitter;
            }
        }
    }
    // If there's no title and description configured in openGraph or twitter,
    // use the title and description from metadata.
    inheritFromMetadata(openGraph, metadata);
    inheritFromMetadata(twitter, metadata);
    if (favicon) {
        if (!metadata.icons) {
            metadata.icons = {
                icon: [],
                apple: []
            };
        }
        metadata.icons.icon.unshift(favicon);
    }
    return metadata;
}
function collectMetadataExportPreloading(results, dynamicMetadataExportFn, resolvers) {
    const result = dynamicMetadataExportFn(new Promise((resolve)=>{
        resolvers.push(resolve);
    }));
    if (result instanceof Promise) {
        // since we eager execute generateMetadata and
        // they can reject at anytime we need to ensure
        // we attach the catch handler right away to
        // prevent unhandled rejections crashing the process
        result.catch((err)=>{
            return {
                __nextError: err
            };
        });
    }
    results.push(result);
}
async function getMetadataFromExport(getPreloadMetadataExport, dynamicMetadataResolveState, metadataItems, currentIndex, resolvedMetadata, metadataResults) {
    const metadataExport = getPreloadMetadataExport(metadataItems[currentIndex]);
    const dynamicMetadataResolvers = dynamicMetadataResolveState.resolvers;
    let metadata = null;
    if (typeof metadataExport === 'function') {
        // Only preload at the beginning when resolves are empty
        if (!dynamicMetadataResolvers.length) {
            for(let j = currentIndex; j < metadataItems.length; j++){
                const preloadMetadataExport = getPreloadMetadataExport(metadataItems[j]);
                // call each `generateMetadata function concurrently and stash their resolver
                if (typeof preloadMetadataExport === 'function') {
                    collectMetadataExportPreloading(metadataResults, preloadMetadataExport, dynamicMetadataResolvers);
                }
            }
        }
        const resolveParent = dynamicMetadataResolvers[dynamicMetadataResolveState.resolvingIndex];
        const metadataResult = metadataResults[dynamicMetadataResolveState.resolvingIndex++];
        // In dev we clone and freeze to prevent relying on mutating resolvedMetadata directly.
        // In prod we just pass resolvedMetadata through without any copying.
        const currentResolvedMetadata = ("TURBOPACK compile-time truthy", 1) ? Object.freeze(__turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/clone-metadata.js [app-rsc] (ecmascript)").cloneMetadata(resolvedMetadata)) : ("TURBOPACK unreachable", undefined);
        // This resolve should unblock the generateMetadata function if it awaited the parent
        // argument. If it didn't await the parent argument it might already have a value since it was
        // called concurrently. Regardless we await the return value before continuing on to the next layer
        resolveParent(currentResolvedMetadata);
        metadata = metadataResult instanceof Promise ? await metadataResult : metadataResult;
        if (metadata && typeof metadata === 'object' && '__nextError' in metadata) {
            // re-throw caught metadata error from preloading
            throw metadata['__nextError'];
        }
    } else if (metadataExport !== null && typeof metadataExport === 'object') {
        // This metadataExport is the object form
        metadata = metadataExport;
    }
    return metadata;
}
async function accumulateMetadata(metadataItems, metadataContext) {
    const resolvedMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$default$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDefaultMetadata"])();
    const metadataResults = [];
    let titleTemplates = {
        title: null,
        twitter: null,
        openGraph: null
    };
    // Loop over all metadata items again, merging synchronously any static object exports,
    // awaiting any static promise exports, and resolving parent metadata and awaiting any generated metadata
    const dynamicMetadataResolvers = {
        resolvers: [],
        resolvingIndex: 0
    };
    const buildState = {
        warnings: new Set()
    };
    let favicon;
    // Collect the static icons in the most leaf node,
    // since we don't collect all the static metadata icons in the parent segments.
    const leafSegmentStaticIcons = {
        icon: [],
        apple: []
    };
    for(let i = 0; i < metadataItems.length; i++){
        var _staticFilesMetadata_icon;
        const staticFilesMetadata = metadataItems[i][1];
        // Treat favicon as special case, it should be the first icon in the list
        // i <= 1 represents root layout, and if current page is also at root
        if (i <= 1 && isFavicon(staticFilesMetadata == null ? void 0 : (_staticFilesMetadata_icon = staticFilesMetadata.icon) == null ? void 0 : _staticFilesMetadata_icon[0])) {
            var _staticFilesMetadata_icon1;
            const iconMod = staticFilesMetadata == null ? void 0 : (_staticFilesMetadata_icon1 = staticFilesMetadata.icon) == null ? void 0 : _staticFilesMetadata_icon1.shift();
            if (i === 0) favicon = iconMod;
        }
        const metadata = await getMetadataFromExport((metadataItem)=>metadataItem[0], dynamicMetadataResolvers, metadataItems, i, resolvedMetadata, metadataResults);
        mergeMetadata({
            target: resolvedMetadata,
            source: metadata,
            metadataContext,
            staticFilesMetadata,
            titleTemplates,
            buildState,
            leafSegmentStaticIcons
        });
        // If the layout is the same layer with page, skip the leaf layout and leaf page
        // The leaf layout and page are the last two items
        if (i < metadataItems.length - 2) {
            var _resolvedMetadata_title, _resolvedMetadata_openGraph, _resolvedMetadata_twitter;
            titleTemplates = {
                title: ((_resolvedMetadata_title = resolvedMetadata.title) == null ? void 0 : _resolvedMetadata_title.template) || null,
                openGraph: ((_resolvedMetadata_openGraph = resolvedMetadata.openGraph) == null ? void 0 : _resolvedMetadata_openGraph.title.template) || null,
                twitter: ((_resolvedMetadata_twitter = resolvedMetadata.twitter) == null ? void 0 : _resolvedMetadata_twitter.title.template) || null
            };
        }
    }
    if (leafSegmentStaticIcons.icon.length > 0 || leafSegmentStaticIcons.apple.length > 0) {
        if (!resolvedMetadata.icons) {
            resolvedMetadata.icons = {
                icon: [],
                apple: []
            };
            if (leafSegmentStaticIcons.icon.length > 0) {
                resolvedMetadata.icons.icon.unshift(...leafSegmentStaticIcons.icon);
            }
            if (leafSegmentStaticIcons.apple.length > 0) {
                resolvedMetadata.icons.apple.unshift(...leafSegmentStaticIcons.apple);
            }
        }
    }
    // Only log warnings if there are any, and only once after the metadata resolving process is finished
    if (buildState.warnings.size > 0) {
        for (const warning of buildState.warnings){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$output$2f$log$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["warn"])(warning);
        }
    }
    return postProcessMetadata(resolvedMetadata, favicon, titleTemplates, metadataContext);
}
async function accumulateViewport(metadataItems) {
    const resolvedViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$default$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDefaultViewport"])();
    const viewportResults = [];
    const dynamicMetadataResolvers = {
        resolvers: [],
        resolvingIndex: 0
    };
    for(let i = 0; i < metadataItems.length; i++){
        const viewport = await getMetadataFromExport((metadataItem)=>metadataItem[2], dynamicMetadataResolvers, metadataItems, i, resolvedViewport, viewportResults);
        mergeViewport({
            target: resolvedViewport,
            source: viewport
        });
    }
    return resolvedViewport;
}
async function resolveMetadata(tree, searchParams, errorConvention, getDynamicParamFromSegment, createServerParamsForMetadata, workStore, metadataContext) {
    const metadataItems = await resolveMetadataItems(tree, searchParams, errorConvention, getDynamicParamFromSegment, createServerParamsForMetadata, workStore);
    return accumulateMetadata(metadataItems, metadataContext);
}
async function resolveViewport(tree, searchParams, errorConvention, getDynamicParamFromSegment, createServerParamsForMetadata, workStore) {
    const metadataItems = await resolveMetadataItems(tree, searchParams, errorConvention, getDynamicParamFromSegment, createServerParamsForMetadata, workStore);
    return accumulateViewport(metadataItems);
} //# sourceMappingURL=resolve-metadata.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HTTPAccessErrorStatus": (()=>HTTPAccessErrorStatus),
    "HTTP_ERROR_FALLBACK_ERROR_CODE": (()=>HTTP_ERROR_FALLBACK_ERROR_CODE),
    "getAccessFallbackErrorTypeByStatus": (()=>getAccessFallbackErrorTypeByStatus),
    "getAccessFallbackHTTPStatus": (()=>getAccessFallbackHTTPStatus),
    "isHTTPAccessFallbackError": (()=>isHTTPAccessFallbackError)
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
} //# sourceMappingURL=http-access-fallback.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/async-metadata.js (client reference/proxy) <module evaluation>": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/async-metadata.js <module evaluation>"));
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/async-metadata.js (client reference/proxy)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/async-metadata.js"));
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/async-metadata.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$async$2d$metadata$2e$js__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/async-metadata.js (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$async$2d$metadata$2e$js__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/async-metadata.js (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$async$2d$metadata$2e$js__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/router-utils/is-postpone.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isPostpone": (()=>isPostpone)
});
const REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
function isPostpone(error) {
    return typeof error === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
} //# sourceMappingURL=is-postpone.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/metadata.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createMetadataComponents": (()=>createMetadataComponents)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$basic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/generate/basic.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$alternate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/generate/alternate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$opengraph$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/generate/opengraph.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$icons$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/generate/icons.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolve$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/resolve-metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/generate/meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$http$2d$access$2d$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/metadata-constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$async$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/async-metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$router$2d$utils$2f$is$2d$postpone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/router-utils/is-postpone.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
function createMetadataComponents({ tree, searchParams, metadataContext, getDynamicParamFromSegment, appUsingSizeAdjustment, errorType, createServerParamsForMetadata, workStore, MetadataBoundary, ViewportBoundary, serveStreamingMetadata }) {
    function ViewportTree() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(ViewportBoundary, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(Viewport, {})
                }),
                appUsingSizeAdjustment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("meta", {
                    name: "next-size-adjust",
                    content: ""
                }) : null
            ]
        });
    }
    function MetadataTree() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(MetadataBoundary, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(Metadata, {})
        });
    }
    function viewport() {
        return getResolvedViewport(tree, searchParams, getDynamicParamFromSegment, createServerParamsForMetadata, workStore, errorType);
    }
    async function Viewport() {
        try {
            return await viewport();
        } catch (error) {
            if (!errorType && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$http$2d$access$2d$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHTTPAccessFallbackError"])(error)) {
                try {
                    return await getNotFoundViewport(tree, searchParams, getDynamicParamFromSegment, createServerParamsForMetadata, workStore);
                } catch  {}
            }
            // We don't actually want to error in this component. We will
            // also error in the MetadataOutlet which causes the error to
            // bubble from the right position in the page to be caught by the
            // appropriate boundaries
            return null;
        }
    }
    Viewport.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VIEWPORT_BOUNDARY_NAME"];
    function metadata() {
        return getResolvedMetadata(tree, searchParams, getDynamicParamFromSegment, metadataContext, createServerParamsForMetadata, workStore, errorType);
    }
    async function resolveFinalMetadata() {
        let result;
        let error = null;
        try {
            result = await metadata();
            return {
                metadata: result,
                error: null,
                digest: undefined
            };
        } catch (metadataErr) {
            error = metadataErr;
            if (!errorType && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$http$2d$access$2d$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHTTPAccessFallbackError"])(metadataErr)) {
                try {
                    result = await getNotFoundMetadata(tree, searchParams, getDynamicParamFromSegment, metadataContext, createServerParamsForMetadata, workStore);
                    return {
                        metadata: result,
                        error,
                        digest: error == null ? void 0 : error.digest
                    };
                } catch (notFoundMetadataErr) {
                    error = notFoundMetadataErr;
                    // In PPR rendering we still need to throw the postpone error.
                    // If metadata is postponed, React needs to be aware of the location of error.
                    if (serveStreamingMetadata && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$router$2d$utils$2f$is$2d$postpone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPostpone"])(notFoundMetadataErr)) {
                        throw notFoundMetadataErr;
                    }
                }
            }
            // In PPR rendering we still need to throw the postpone error.
            // If metadata is postponed, React needs to be aware of the location of error.
            if (serveStreamingMetadata && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$router$2d$utils$2f$is$2d$postpone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPostpone"])(metadataErr)) {
                throw metadataErr;
            }
            // We don't actually want to error in this component. We will
            // also error in the MetadataOutlet which causes the error to
            // bubble from the right position in the page to be caught by the
            // appropriate boundaries
            return {
                metadata: result,
                error,
                digest: error == null ? void 0 : error.digest
            };
        }
    }
    async function Metadata() {
        const promise = resolveFinalMetadata();
        if (serveStreamingMetadata) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$async$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AsyncMetadata"], {
                    promise: promise
                })
            });
        }
        const metadataState = await promise;
        return metadataState.metadata;
    }
    Metadata.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["METADATA_BOUNDARY_NAME"];
    async function getMetadataReady() {
        // Only warm up metadata() call when it's blocking metadata,
        // otherwise it will be fully managed by AsyncMetadata component.
        if (!serveStreamingMetadata) {
            await metadata();
        }
        return undefined;
    }
    async function getViewportReady() {
        await viewport();
        return undefined;
    }
    function StreamingMetadataOutlet() {
        if (serveStreamingMetadata) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$async$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AsyncMetadataOutlet"], {
                promise: resolveFinalMetadata()
            });
        }
        return null;
    }
    return {
        ViewportTree,
        MetadataTree,
        getViewportReady,
        getMetadataReady,
        StreamingMetadataOutlet
    };
}
const getResolvedMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(getResolvedMetadataImpl);
async function getResolvedMetadataImpl(tree, searchParams, getDynamicParamFromSegment, metadataContext, createServerParamsForMetadata, workStore, errorType) {
    const errorConvention = errorType === 'redirect' ? undefined : errorType;
    return renderMetadata(tree, searchParams, getDynamicParamFromSegment, metadataContext, createServerParamsForMetadata, workStore, errorConvention);
}
const getNotFoundMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(getNotFoundMetadataImpl);
async function getNotFoundMetadataImpl(tree, searchParams, getDynamicParamFromSegment, metadataContext, createServerParamsForMetadata, workStore) {
    const notFoundErrorConvention = 'not-found';
    return renderMetadata(tree, searchParams, getDynamicParamFromSegment, metadataContext, createServerParamsForMetadata, workStore, notFoundErrorConvention);
}
const getResolvedViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(getResolvedViewportImpl);
async function getResolvedViewportImpl(tree, searchParams, getDynamicParamFromSegment, createServerParamsForMetadata, workStore, errorType) {
    const errorConvention = errorType === 'redirect' ? undefined : errorType;
    return renderViewport(tree, searchParams, getDynamicParamFromSegment, createServerParamsForMetadata, workStore, errorConvention);
}
const getNotFoundViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(getNotFoundViewportImpl);
async function getNotFoundViewportImpl(tree, searchParams, getDynamicParamFromSegment, createServerParamsForMetadata, workStore) {
    const notFoundErrorConvention = 'not-found';
    return renderViewport(tree, searchParams, getDynamicParamFromSegment, createServerParamsForMetadata, workStore, notFoundErrorConvention);
}
async function renderMetadata(tree, searchParams, getDynamicParamFromSegment, metadataContext, createServerParamsForMetadata, workStore, errorConvention) {
    const resolvedMetadata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolve$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveMetadata"])(tree, searchParams, errorConvention, getDynamicParamFromSegment, createServerParamsForMetadata, workStore, metadataContext);
    const elements = createMetadataElements(resolvedMetadata);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: elements.map((el, index)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cloneElement"])(el, {
                key: index
            });
        })
    });
}
async function renderViewport(tree, searchParams, getDynamicParamFromSegment, createServerParamsForMetadata, workStore, errorConvention) {
    const notFoundResolvedViewport = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$resolve$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveViewport"])(tree, searchParams, errorConvention, getDynamicParamFromSegment, createServerParamsForMetadata, workStore);
    const elements = createViewportElements(notFoundResolvedViewport);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: elements.map((el, index)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cloneElement"])(el, {
                key: index
            });
        })
    });
}
function createMetadataElements(metadata) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$basic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BasicMeta"])({
            metadata
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$alternate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AlternatesMetadata"])({
            alternates: metadata.alternates
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$basic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ItunesMeta"])({
            itunes: metadata.itunes
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$basic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FacebookMeta"])({
            facebook: metadata.facebook
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$basic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FormatDetectionMeta"])({
            formatDetection: metadata.formatDetection
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$basic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VerificationMeta"])({
            verification: metadata.verification
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$basic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppleWebAppMeta"])({
            appleWebApp: metadata.appleWebApp
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$opengraph$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OpenGraphMetadata"])({
            openGraph: metadata.openGraph
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$opengraph$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TwitterMetadata"])({
            twitter: metadata.twitter
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$opengraph$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppLinksMeta"])({
            appLinks: metadata.appLinks
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$icons$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconsMetadata"])({
            icons: metadata.icons
        })
    ]);
}
function createViewportElements(viewport) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$basic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ViewportMeta"])({
            viewport: viewport
        })
    ]);
} //# sourceMappingURL=metadata.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ACTION_SUFFIX": (()=>ACTION_SUFFIX),
    "APP_DIR_ALIAS": (()=>APP_DIR_ALIAS),
    "CACHE_ONE_YEAR": (()=>CACHE_ONE_YEAR),
    "DOT_NEXT_ALIAS": (()=>DOT_NEXT_ALIAS),
    "ESLINT_DEFAULT_DIRS": (()=>ESLINT_DEFAULT_DIRS),
    "GSP_NO_RETURNED_VALUE": (()=>GSP_NO_RETURNED_VALUE),
    "GSSP_COMPONENT_MEMBER_ERROR": (()=>GSSP_COMPONENT_MEMBER_ERROR),
    "GSSP_NO_RETURNED_VALUE": (()=>GSSP_NO_RETURNED_VALUE),
    "INFINITE_CACHE": (()=>INFINITE_CACHE),
    "INSTRUMENTATION_HOOK_FILENAME": (()=>INSTRUMENTATION_HOOK_FILENAME),
    "MATCHED_PATH_HEADER": (()=>MATCHED_PATH_HEADER),
    "MIDDLEWARE_FILENAME": (()=>MIDDLEWARE_FILENAME),
    "MIDDLEWARE_LOCATION_REGEXP": (()=>MIDDLEWARE_LOCATION_REGEXP),
    "NEXT_BODY_SUFFIX": (()=>NEXT_BODY_SUFFIX),
    "NEXT_CACHE_IMPLICIT_TAG_ID": (()=>NEXT_CACHE_IMPLICIT_TAG_ID),
    "NEXT_CACHE_REVALIDATED_TAGS_HEADER": (()=>NEXT_CACHE_REVALIDATED_TAGS_HEADER),
    "NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER": (()=>NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER),
    "NEXT_CACHE_SOFT_TAG_MAX_LENGTH": (()=>NEXT_CACHE_SOFT_TAG_MAX_LENGTH),
    "NEXT_CACHE_TAGS_HEADER": (()=>NEXT_CACHE_TAGS_HEADER),
    "NEXT_CACHE_TAG_MAX_ITEMS": (()=>NEXT_CACHE_TAG_MAX_ITEMS),
    "NEXT_CACHE_TAG_MAX_LENGTH": (()=>NEXT_CACHE_TAG_MAX_LENGTH),
    "NEXT_DATA_SUFFIX": (()=>NEXT_DATA_SUFFIX),
    "NEXT_INTERCEPTION_MARKER_PREFIX": (()=>NEXT_INTERCEPTION_MARKER_PREFIX),
    "NEXT_META_SUFFIX": (()=>NEXT_META_SUFFIX),
    "NEXT_QUERY_PARAM_PREFIX": (()=>NEXT_QUERY_PARAM_PREFIX),
    "NEXT_RESUME_HEADER": (()=>NEXT_RESUME_HEADER),
    "NON_STANDARD_NODE_ENV": (()=>NON_STANDARD_NODE_ENV),
    "PAGES_DIR_ALIAS": (()=>PAGES_DIR_ALIAS),
    "PRERENDER_REVALIDATE_HEADER": (()=>PRERENDER_REVALIDATE_HEADER),
    "PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER": (()=>PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER),
    "PUBLIC_DIR_MIDDLEWARE_CONFLICT": (()=>PUBLIC_DIR_MIDDLEWARE_CONFLICT),
    "ROOT_DIR_ALIAS": (()=>ROOT_DIR_ALIAS),
    "RSC_ACTION_CLIENT_WRAPPER_ALIAS": (()=>RSC_ACTION_CLIENT_WRAPPER_ALIAS),
    "RSC_ACTION_ENCRYPTION_ALIAS": (()=>RSC_ACTION_ENCRYPTION_ALIAS),
    "RSC_ACTION_PROXY_ALIAS": (()=>RSC_ACTION_PROXY_ALIAS),
    "RSC_ACTION_VALIDATE_ALIAS": (()=>RSC_ACTION_VALIDATE_ALIAS),
    "RSC_CACHE_WRAPPER_ALIAS": (()=>RSC_CACHE_WRAPPER_ALIAS),
    "RSC_MOD_REF_PROXY_ALIAS": (()=>RSC_MOD_REF_PROXY_ALIAS),
    "RSC_PREFETCH_SUFFIX": (()=>RSC_PREFETCH_SUFFIX),
    "RSC_SEGMENTS_DIR_SUFFIX": (()=>RSC_SEGMENTS_DIR_SUFFIX),
    "RSC_SEGMENT_SUFFIX": (()=>RSC_SEGMENT_SUFFIX),
    "RSC_SUFFIX": (()=>RSC_SUFFIX),
    "SERVER_PROPS_EXPORT_ERROR": (()=>SERVER_PROPS_EXPORT_ERROR),
    "SERVER_PROPS_GET_INIT_PROPS_CONFLICT": (()=>SERVER_PROPS_GET_INIT_PROPS_CONFLICT),
    "SERVER_PROPS_SSG_CONFLICT": (()=>SERVER_PROPS_SSG_CONFLICT),
    "SERVER_RUNTIME": (()=>SERVER_RUNTIME),
    "SSG_FALLBACK_EXPORT_ERROR": (()=>SSG_FALLBACK_EXPORT_ERROR),
    "SSG_GET_INITIAL_PROPS_CONFLICT": (()=>SSG_GET_INITIAL_PROPS_CONFLICT),
    "STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR": (()=>STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR),
    "UNSTABLE_REVALIDATE_RENAME_ERROR": (()=>UNSTABLE_REVALIDATE_RENAME_ERROR),
    "WEBPACK_LAYERS": (()=>WEBPACK_LAYERS),
    "WEBPACK_RESOURCE_QUERIES": (()=>WEBPACK_RESOURCE_QUERIES)
});
const NEXT_QUERY_PARAM_PREFIX = 'nxtP';
const NEXT_INTERCEPTION_MARKER_PREFIX = 'nxtI';
const MATCHED_PATH_HEADER = 'x-matched-path';
const PRERENDER_REVALIDATE_HEADER = 'x-prerender-revalidate';
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = 'x-prerender-revalidate-if-generated';
const RSC_PREFETCH_SUFFIX = '.prefetch.rsc';
const RSC_SEGMENTS_DIR_SUFFIX = '.segments';
const RSC_SEGMENT_SUFFIX = '.segment.rsc';
const RSC_SUFFIX = '.rsc';
const ACTION_SUFFIX = '.action';
const NEXT_DATA_SUFFIX = '.json';
const NEXT_META_SUFFIX = '.meta';
const NEXT_BODY_SUFFIX = '.body';
const NEXT_CACHE_TAGS_HEADER = 'x-next-cache-tags';
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = 'x-next-revalidated-tags';
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = 'x-next-revalidate-tag-token';
const NEXT_RESUME_HEADER = 'next-resume';
const NEXT_CACHE_TAG_MAX_ITEMS = 128;
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = '_N_T_';
const CACHE_ONE_YEAR = 31536000;
const INFINITE_CACHE = 0xfffffffe;
const MIDDLEWARE_FILENAME = 'middleware';
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
const INSTRUMENTATION_HOOK_FILENAME = 'instrumentation';
const PAGES_DIR_ALIAS = 'private-next-pages';
const DOT_NEXT_ALIAS = 'private-dot-next';
const ROOT_DIR_ALIAS = 'private-next-root-dir';
const APP_DIR_ALIAS = 'private-next-app-dir';
const RSC_MOD_REF_PROXY_ALIAS = 'private-next-rsc-mod-ref-proxy';
const RSC_ACTION_VALIDATE_ALIAS = 'private-next-rsc-action-validate';
const RSC_ACTION_PROXY_ALIAS = 'private-next-rsc-server-reference';
const RSC_CACHE_WRAPPER_ALIAS = 'private-next-rsc-cache-wrapper';
const RSC_ACTION_ENCRYPTION_ALIAS = 'private-next-rsc-action-encryption';
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = 'private-next-rsc-action-client-wrapper';
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
const SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
const SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
const SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
const GSP_NO_RETURNED_VALUE = 'Your `getStaticProps` function did not return an object. Did you forget to add a `return`?';
const GSSP_NO_RETURNED_VALUE = 'Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?';
const UNSTABLE_REVALIDATE_RENAME_ERROR = 'The `unstable_revalidate` property is available for general use.\n' + 'Please use `revalidate` instead.';
const GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
const NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
const SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
const ESLINT_DEFAULT_DIRS = [
    'app',
    'pages',
    'components',
    'lib',
    'src'
];
const SERVER_RUNTIME = {
    edge: 'edge',
    experimentalEdge: 'experimental-edge',
    nodejs: 'nodejs'
};
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: 'shared',
    /**
   * The layer for server-only runtime and picking up `react-server` export conditions.
   * Including app router RSC pages and app router custom routes and metadata routes.
   */ reactServerComponents: 'rsc',
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: 'ssr',
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: 'action-browser',
    /**
   * The layer for the API routes.
   */ api: 'api',
    /**
   * The layer for the middleware code.
   */ middleware: 'middleware',
    /**
   * The layer for the instrumentation hooks.
   */ instrument: 'instrument',
    /**
   * The layer for assets on the edge.
   */ edgeAsset: 'edge-asset',
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: 'app-pages-browser',
    /**
   * The browser client bundle layer for Pages directory.
   */ pagesDirBrowser: 'pages-dir-browser',
    /**
   * The Edge Lite bundle layer for Pages directory.
   */ pagesDirEdge: 'pages-dir-edge',
    /**
   * The Node.js bundle layer for Pages directory.
   */ pagesDirNode: 'pages-dir-node'
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        builtinReact: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ],
        serverOnly: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        neutralTarget: [
            // pages api
            WEBPACK_LAYERS_NAMES.api
        ],
        clientOnly: [
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        bundled: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.shared,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        appPages: [
            // app router pages and layouts
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: '__next_edge_ssr_entry__',
    metadata: '__next_metadata__',
    metadataRoute: '__next_metadata_route__',
    metadataImageMeta: '__next_metadata_image_meta__'
};
;
 //# sourceMappingURL=constants.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/clone-response.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
/**
 * Clones a response by teeing the body so we can return two independent
 * ReadableStreams from it. This avoids the bug in the undici library around
 * response cloning.
 *
 * After cloning, the original response's body will be consumed and closed.
 *
 * @see https://github.com/vercel/next.js/pull/73274
 *
 * @param original - The original response to clone.
 * @returns A tuple containing two independent clones of the original response.
 */ __turbopack_context__.s({
    "cloneResponse": (()=>cloneResponse)
});
function cloneResponse(original) {
    // If the response has no body, then we can just return the original response
    // twice because it's immutable.
    if (!original.body) {
        return [
            original,
            original
        ];
    }
    const [body1, body2] = original.body.tee();
    const cloned1 = new Response(body1, {
        status: original.status,
        statusText: original.statusText,
        headers: original.headers
    });
    Object.defineProperty(cloned1, 'url', {
        value: original.url
    });
    const cloned2 = new Response(body2, {
        status: original.status,
        statusText: original.statusText,
        headers: original.headers
    });
    Object.defineProperty(cloned2, 'url', {
        value: original.url
    });
    return [
        cloned1,
        cloned2
    ];
} //# sourceMappingURL=clone-response.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/dedupe-fetch.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
/**
 * Based on https://github.com/facebook/react/blob/d4e78c42a94be027b4dc7ed2659a5fddfbf9bd4e/packages/react/src/ReactFetch.js
 */ __turbopack_context__.s({
    "createDedupeFetch": (()=>createDedupeFetch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$clone$2d$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/clone-response.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
;
;
;
const simpleCacheKey = '["GET",[],null,"follow",null,null,null,null]' // generateCacheKey(new Request('https://blank'));
;
function generateCacheKey(request) {
    // We pick the fields that goes into the key used to dedupe requests.
    // We don't include the `cache` field, because we end up using whatever
    // caching resulted from the first request.
    // Notably we currently don't consider non-standard (or future) options.
    // This might not be safe. TODO: warn for non-standard extensions differing.
    // IF YOU CHANGE THIS UPDATE THE simpleCacheKey ABOVE.
    return JSON.stringify([
        request.method,
        Array.from(request.headers.entries()),
        request.mode,
        request.redirect,
        request.credentials,
        request.referrer,
        request.referrerPolicy,
        request.integrity
    ]);
}
function createDedupeFetch(originalFetch) {
    const getCacheEntries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])((url)=>[]);
    return function dedupeFetch(resource, options) {
        if (options && options.signal) {
            // If we're passed a signal, then we assume that
            // someone else controls the lifetime of this object and opts out of
            // caching. It's effectively the opt-out mechanism.
            // Ideally we should be able to check this on the Request but
            // it always gets initialized with its own signal so we don't
            // know if it's supposed to override - unless we also override the
            // Request constructor.
            return originalFetch(resource, options);
        }
        // Normalize the Request
        let url;
        let cacheKey;
        if (typeof resource === 'string' && !options) {
            // Fast path.
            cacheKey = simpleCacheKey;
            url = resource;
        } else {
            // Normalize the request.
            // if resource is not a string or a URL (its an instance of Request)
            // then do not instantiate a new Request but instead
            // reuse the request as to not disturb the body in the event it's a ReadableStream.
            const request = typeof resource === 'string' || resource instanceof URL ? new Request(resource, options) : resource;
            if (request.method !== 'GET' && request.method !== 'HEAD' || request.keepalive) {
                // We currently don't dedupe requests that might have side-effects. Those
                // have to be explicitly cached. We assume that the request doesn't have a
                // body if it's GET or HEAD.
                // keepalive gets treated the same as if you passed a custom cache signal.
                return originalFetch(resource, options);
            }
            cacheKey = generateCacheKey(request);
            url = request.url;
        }
        const cacheEntries = getCacheEntries(url);
        for(let i = 0, j = cacheEntries.length; i < j; i += 1){
            const [key, promise] = cacheEntries[i];
            if (key === cacheKey) {
                return promise.then(()=>{
                    const response = cacheEntries[i][2];
                    if (!response) throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('No cached response'), "__NEXT_ERROR_CODE", {
                        value: "E579",
                        enumerable: false,
                        configurable: true
                    });
                    // We're cloning the response using this utility because there exists
                    // a bug in the undici library around response cloning. See the
                    // following pull request for more details:
                    // https://github.com/vercel/next.js/pull/73274
                    const [cloned1, cloned2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$clone$2d$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cloneResponse"])(response);
                    cacheEntries[i][2] = cloned2;
                    return cloned1;
                });
            }
        }
        // We pass the original arguments here in case normalizing the Request
        // doesn't include all the options in this environment.
        const promise = originalFetch(resource, options);
        const entry = [
            cacheKey,
            promise,
            null
        ];
        cacheEntries.push(entry);
        return promise.then((response)=>{
            // We're cloning the response using this utility because there exists
            // a bug in the undici library around response cloning. See the
            // following pull request for more details:
            // https://github.com/vercel/next.js/pull/73274
            const [cloned1, cloned2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$clone$2d$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cloneResponse"])(response);
            entry[2] = cloned2;
            return cloned1;
        });
    };
} //# sourceMappingURL=dedupe-fetch.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/response-cache/types.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CachedRouteKind": (()=>CachedRouteKind),
    "IncrementalCacheKind": (()=>IncrementalCacheKind)
});
var CachedRouteKind = /*#__PURE__*/ function(CachedRouteKind) {
    CachedRouteKind["APP_PAGE"] = "APP_PAGE";
    CachedRouteKind["APP_ROUTE"] = "APP_ROUTE";
    CachedRouteKind["PAGES"] = "PAGES";
    CachedRouteKind["FETCH"] = "FETCH";
    CachedRouteKind["REDIRECT"] = "REDIRECT";
    CachedRouteKind["IMAGE"] = "IMAGE";
    return CachedRouteKind;
}({});
var IncrementalCacheKind = /*#__PURE__*/ function(IncrementalCacheKind) {
    IncrementalCacheKind["APP_PAGE"] = "APP_PAGE";
    IncrementalCacheKind["APP_ROUTE"] = "APP_ROUTE";
    IncrementalCacheKind["PAGES"] = "PAGES";
    IncrementalCacheKind["FETCH"] = "FETCH";
    IncrementalCacheKind["IMAGE"] = "IMAGE";
    return IncrementalCacheKind;
}({}); //# sourceMappingURL=types.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/detached-promise.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
/**
 * A `Promise.withResolvers` implementation that exposes the `resolve` and
 * `reject` functions on a `Promise`.
 *
 * @see https://tc39.es/proposal-promise-with-resolvers/
 */ __turbopack_context__.s({
    "DetachedPromise": (()=>DetachedPromise)
});
class DetachedPromise {
    constructor(){
        let resolve;
        let reject;
        // Create the promise and assign the resolvers to the object.
        this.promise = new Promise((res, rej)=>{
            resolve = res;
            reject = rej;
        });
        // We know that resolvers is defined because the Promise constructor runs
        // synchronously.
        this.resolve = resolve;
        this.reject = reject;
    }
} //# sourceMappingURL=detached-promise.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/batcher.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Batcher": (()=>Batcher)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/detached-promise.js [app-rsc] (ecmascript)");
;
class Batcher {
    constructor(cacheKeyFn, /**
     * A function that will be called to schedule the wrapped function to be
     * executed. This defaults to a function that will execute the function
     * immediately.
     */ schedulerFn = (fn)=>fn()){
        this.cacheKeyFn = cacheKeyFn;
        this.schedulerFn = schedulerFn;
        this.pending = new Map();
    }
    static create(options) {
        return new Batcher(options == null ? void 0 : options.cacheKeyFn, options == null ? void 0 : options.schedulerFn);
    }
    /**
   * Wraps a function in a promise that will be resolved or rejected only once
   * for a given key. This will allow multiple calls to the function to be
   * made, but only one will be executed at a time. The result of the first
   * call will be returned to all callers.
   *
   * @param key the key to use for the cache
   * @param fn the function to wrap
   * @returns a promise that resolves to the result of the function
   */ async batch(key, fn) {
        const cacheKey = this.cacheKeyFn ? await this.cacheKeyFn(key) : key;
        if (cacheKey === null) {
            return fn(cacheKey, Promise.resolve);
        }
        const pending = this.pending.get(cacheKey);
        if (pending) return pending;
        const { promise, resolve, reject } = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DetachedPromise"]();
        this.pending.set(cacheKey, promise);
        this.schedulerFn(async ()=>{
            try {
                const result = await fn(cacheKey, resolve);
                // Resolving a promise multiple times is a no-op, so we can safely
                // resolve all pending promises with the same result.
                resolve(result);
            } catch (err) {
                reject(err);
            } finally{
                this.pending.delete(cacheKey);
            }
        });
        return promise;
    }
} //# sourceMappingURL=batcher.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/stream-utils/encodedTags.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ENCODED_TAGS": (()=>ENCODED_TAGS)
});
const ENCODED_TAGS = {
    // opening tags do not have the closing `>` since they can contain other attributes such as `<body className=''>`
    OPENING: {
        // <html
        HTML: new Uint8Array([
            60,
            104,
            116,
            109,
            108
        ]),
        // <body
        BODY: new Uint8Array([
            60,
            98,
            111,
            100,
            121
        ])
    },
    CLOSED: {
        // </head>
        HEAD: new Uint8Array([
            60,
            47,
            104,
            101,
            97,
            100,
            62
        ]),
        // </body>
        BODY: new Uint8Array([
            60,
            47,
            98,
            111,
            100,
            121,
            62
        ]),
        // </html>
        HTML: new Uint8Array([
            60,
            47,
            104,
            116,
            109,
            108,
            62
        ]),
        // </body></html>
        BODY_AND_HTML: new Uint8Array([
            60,
            47,
            98,
            111,
            100,
            121,
            62,
            60,
            47,
            104,
            116,
            109,
            108,
            62
        ])
    }
}; //# sourceMappingURL=encodedTags.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/stream-utils/uint8array-helpers.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
/**
 * Find the starting index of Uint8Array `b` within Uint8Array `a`.
 */ __turbopack_context__.s({
    "indexOfUint8Array": (()=>indexOfUint8Array),
    "isEquivalentUint8Arrays": (()=>isEquivalentUint8Arrays),
    "removeFromUint8Array": (()=>removeFromUint8Array)
});
function indexOfUint8Array(a, b) {
    if (b.length === 0) return 0;
    if (a.length === 0 || b.length > a.length) return -1;
    // start iterating through `a`
    for(let i = 0; i <= a.length - b.length; i++){
        let completeMatch = true;
        // from index `i`, iterate through `b` and check for mismatch
        for(let j = 0; j < b.length; j++){
            // if the values do not match, then this isn't a complete match, exit `b` iteration early and iterate to next index of `a`.
            if (a[i + j] !== b[j]) {
                completeMatch = false;
                break;
            }
        }
        if (completeMatch) {
            return i;
        }
    }
    return -1;
}
function isEquivalentUint8Arrays(a, b) {
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++){
        if (a[i] !== b[i]) return false;
    }
    return true;
}
function removeFromUint8Array(a, b) {
    const tagIndex = indexOfUint8Array(a, b);
    if (tagIndex === 0) return a.subarray(b.length);
    if (tagIndex > -1) {
        const removed = new Uint8Array(a.length - b.length);
        removed.set(a.slice(0, tagIndex));
        removed.set(a.slice(tagIndex + b.length), tagIndex);
        return removed;
    } else {
        return a;
    }
} //# sourceMappingURL=uint8array-helpers.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/stream-utils/node-web-streams-helper.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "chainStreams": (()=>chainStreams),
    "continueDynamicHTMLResume": (()=>continueDynamicHTMLResume),
    "continueDynamicPrerender": (()=>continueDynamicPrerender),
    "continueFizzStream": (()=>continueFizzStream),
    "continueStaticPrerender": (()=>continueStaticPrerender),
    "createBufferedTransformStream": (()=>createBufferedTransformStream),
    "createDocumentClosingStream": (()=>createDocumentClosingStream),
    "createRootLayoutValidatorStream": (()=>createRootLayoutValidatorStream),
    "renderToInitialFizzStream": (()=>renderToInitialFizzStream),
    "streamFromBuffer": (()=>streamFromBuffer),
    "streamFromString": (()=>streamFromString),
    "streamToBuffer": (()=>streamToBuffer),
    "streamToString": (()=>streamToString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/detached-promise.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/stream-utils/encodedTags.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/stream-utils/uint8array-helpers.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
function voidCatch() {
// this catcher is designed to be used with pipeTo where we expect the underlying
// pipe implementation to forward errors but we don't want the pipeTo promise to reject
// and be unhandled
}
// We can share the same encoder instance everywhere
// Notably we cannot do the same for TextDecoder because it is stateful
// when handling streaming data
const encoder = new TextEncoder();
function chainStreams(...streams) {
    // We could encode this invariant in the arguments but current uses of this function pass
    // use spread so it would be missed by
    if (streams.length === 0) {
        throw Object.defineProperty(new Error('Invariant: chainStreams requires at least one stream'), "__NEXT_ERROR_CODE", {
            value: "E437",
            enumerable: false,
            configurable: true
        });
    }
    // If we only have 1 stream we fast path it by returning just this stream
    if (streams.length === 1) {
        return streams[0];
    }
    const { readable, writable } = new TransformStream();
    // We always initiate pipeTo immediately. We know we have at least 2 streams
    // so we need to avoid closing the writable when this one finishes.
    let promise = streams[0].pipeTo(writable, {
        preventClose: true
    });
    let i = 1;
    for(; i < streams.length - 1; i++){
        const nextStream = streams[i];
        promise = promise.then(()=>nextStream.pipeTo(writable, {
                preventClose: true
            }));
    }
    // We can omit the length check because we halted before the last stream and there
    // is at least two streams so the lastStream here will always be defined
    const lastStream = streams[i];
    promise = promise.then(()=>lastStream.pipeTo(writable));
    // Catch any errors from the streams and ignore them, they will be handled
    // by whatever is consuming the readable stream.
    promise.catch(voidCatch);
    return readable;
}
function streamFromString(str) {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(encoder.encode(str));
            controller.close();
        }
    });
}
function streamFromBuffer(chunk) {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(chunk);
            controller.close();
        }
    });
}
async function streamToBuffer(stream) {
    const reader = stream.getReader();
    const chunks = [];
    while(true){
        const { done, value } = await reader.read();
        if (done) {
            break;
        }
        chunks.push(value);
    }
    return Buffer.concat(chunks);
}
async function streamToString(stream, signal) {
    const decoder = new TextDecoder('utf-8', {
        fatal: true
    });
    let string = '';
    for await (const chunk of stream){
        if (signal == null ? void 0 : signal.aborted) {
            return string;
        }
        string += decoder.decode(chunk, {
            stream: true
        });
    }
    string += decoder.decode();
    return string;
}
function createBufferedTransformStream() {
    let bufferedChunks = [];
    let bufferByteLength = 0;
    let pending;
    const flush = (controller)=>{
        // If we already have a pending flush, then return early.
        if (pending) return;
        const detached = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DetachedPromise"]();
        pending = detached;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scheduleImmediate"])(()=>{
            try {
                const chunk = new Uint8Array(bufferByteLength);
                let copiedBytes = 0;
                for(let i = 0; i < bufferedChunks.length; i++){
                    const bufferedChunk = bufferedChunks[i];
                    chunk.set(bufferedChunk, copiedBytes);
                    copiedBytes += bufferedChunk.byteLength;
                }
                // We just wrote all the buffered chunks so we need to reset the bufferedChunks array
                // and our bufferByteLength to prepare for the next round of buffered chunks
                bufferedChunks.length = 0;
                bufferByteLength = 0;
                controller.enqueue(chunk);
            } catch  {
            // If an error occurs while enqueuing it can't be due to this
            // transformers fault. It's likely due to the controller being
            // errored due to the stream being cancelled.
            } finally{
                pending = undefined;
                detached.resolve();
            }
        });
    };
    return new TransformStream({
        transform (chunk, controller) {
            // Combine the previous buffer with the new chunk.
            bufferedChunks.push(chunk);
            bufferByteLength += chunk.byteLength;
            // Flush the buffer to the controller.
            flush(controller);
        },
        flush () {
            if (!pending) return;
            return pending.promise;
        }
    });
}
function renderToInitialFizzStream({ ReactDOMServer, element, streamOptions }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppRenderSpan"].renderToReadableStream, async ()=>ReactDOMServer.renderToReadableStream(element, streamOptions));
}
function createHeadInsertionTransformStream(insert) {
    let inserted = false;
    // We need to track if this transform saw any bytes because if it didn't
    // we won't want to insert any server HTML at all
    let hasBytes = false;
    return new TransformStream({
        async transform (chunk, controller) {
            hasBytes = true;
            const insertion = await insert();
            if (inserted) {
                if (insertion) {
                    const encodedInsertion = encoder.encode(insertion);
                    controller.enqueue(encodedInsertion);
                }
                controller.enqueue(chunk);
            } else {
                // TODO (@Ethan-Arrowood): Replace the generic `indexOfUint8Array` method with something finely tuned for the subset of things actually being checked for.
                const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["indexOfUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.HEAD);
                // In fully static rendering or non PPR rendering cases:
                // `/head>` will always be found in the chunk in first chunk rendering.
                if (index !== -1) {
                    if (insertion) {
                        const encodedInsertion = encoder.encode(insertion);
                        // Get the total count of the bytes in the chunk and the insertion
                        // e.g.
                        // chunk = <head><meta charset="utf-8"></head>
                        // insertion = <script>...</script>
                        // output = <head><meta charset="utf-8"> [ <script>...</script> ] </head>
                        const insertedHeadContent = new Uint8Array(chunk.length + encodedInsertion.length);
                        // Append the first part of the chunk, before the head tag
                        insertedHeadContent.set(chunk.slice(0, index));
                        // Append the server inserted content
                        insertedHeadContent.set(encodedInsertion, index);
                        // Append the rest of the chunk
                        insertedHeadContent.set(chunk.slice(index), index + encodedInsertion.length);
                        controller.enqueue(insertedHeadContent);
                    } else {
                        controller.enqueue(chunk);
                    }
                    inserted = true;
                } else {
                    // This will happens in PPR rendering during next start, when the page is partially rendered.
                    // When the page resumes, the head tag will be found in the middle of the chunk.
                    // Where we just need to append the insertion and chunk to the current stream.
                    // e.g.
                    // PPR-static: <head>...</head><body> [ resume content ] </body>
                    // PPR-resume: [ insertion ] [ rest content ]
                    if (insertion) {
                        controller.enqueue(encoder.encode(insertion));
                    }
                    controller.enqueue(chunk);
                    inserted = true;
                }
            }
        },
        async flush (controller) {
            // Check before closing if there's anything remaining to insert.
            if (hasBytes) {
                const insertion = await insert();
                if (insertion) {
                    controller.enqueue(encoder.encode(insertion));
                }
            }
        }
    });
}
// Suffix after main body content - scripts before </body>,
// but wait for the major chunks to be enqueued.
function createDeferredSuffixStream(suffix) {
    let flushed = false;
    let pending;
    const flush = (controller)=>{
        const detached = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DetachedPromise"]();
        pending = detached;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scheduleImmediate"])(()=>{
            try {
                controller.enqueue(encoder.encode(suffix));
            } catch  {
            // If an error occurs while enqueuing it can't be due to this
            // transformers fault. It's likely due to the controller being
            // errored due to the stream being cancelled.
            } finally{
                pending = undefined;
                detached.resolve();
            }
        });
    };
    return new TransformStream({
        transform (chunk, controller) {
            controller.enqueue(chunk);
            // If we've already flushed, we're done.
            if (flushed) return;
            // Schedule the flush to happen.
            flushed = true;
            flush(controller);
        },
        flush (controller) {
            if (pending) return pending.promise;
            if (flushed) return;
            // Flush now.
            controller.enqueue(encoder.encode(suffix));
        }
    });
}
// Merge two streams into one. Ensure the final transform stream is closed
// when both are finished.
function createMergedTransformStream(stream) {
    let pull = null;
    let donePulling = false;
    async function startPulling(controller) {
        if (pull) {
            return;
        }
        const reader = stream.getReader();
        // NOTE: streaming flush
        // We are buffering here for the inlined data stream because the
        // "shell" stream might be chunkenized again by the underlying stream
        // implementation, e.g. with a specific high-water mark. To ensure it's
        // the safe timing to pipe the data stream, this extra tick is
        // necessary.
        // We don't start reading until we've left the current Task to ensure
        // that it's inserted after flushing the shell. Note that this implementation
        // might get stale if impl details of Fizz change in the future.
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atLeastOneTask"])();
        try {
            while(true){
                const { done, value } = await reader.read();
                if (done) {
                    donePulling = true;
                    return;
                }
                controller.enqueue(value);
            }
        } catch (err) {
            controller.error(err);
        }
    }
    return new TransformStream({
        transform (chunk, controller) {
            controller.enqueue(chunk);
            // Start the streaming if it hasn't already been started yet.
            if (!pull) {
                pull = startPulling(controller);
            }
        },
        flush (controller) {
            if (donePulling) {
                return;
            }
            return pull || startPulling(controller);
        }
    });
}
const CLOSE_TAG = '</body></html>';
/**
 * This transform stream moves the suffix to the end of the stream, so results
 * like `</body></html><script>...</script>` will be transformed to
 * `<script>...</script></body></html>`.
 */ function createMoveSuffixStream() {
    let foundSuffix = false;
    return new TransformStream({
        transform (chunk, controller) {
            if (foundSuffix) {
                return controller.enqueue(chunk);
            }
            const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["indexOfUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
            if (index > -1) {
                foundSuffix = true;
                // If the whole chunk is the suffix, then don't write anything, it will
                // be written in the flush.
                if (chunk.length === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML.length) {
                    return;
                }
                // Write out the part before the suffix.
                const before = chunk.slice(0, index);
                controller.enqueue(before);
                // In the case where the suffix is in the middle of the chunk, we need
                // to split the chunk into two parts.
                if (chunk.length > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML.length + index) {
                    // Write out the part after the suffix.
                    const after = chunk.slice(index + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML.length);
                    controller.enqueue(after);
                }
            } else {
                controller.enqueue(chunk);
            }
        },
        flush (controller) {
            // Even if we didn't find the suffix, the HTML is not valid if we don't
            // add it, so insert it at the end.
            controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
        }
    });
}
function createStripDocumentClosingTagsTransform() {
    return new TransformStream({
        transform (chunk, controller) {
            // We rely on the assumption that chunks will never break across a code unit.
            // This is reasonable because we currently concat all of React's output from a single
            // flush into one chunk before streaming it forward which means the chunk will represent
            // a single coherent utf-8 string. This is not safe to use if we change our streaming to no
            // longer do this large buffered chunk
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isEquivalentUint8Arrays"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isEquivalentUint8Arrays"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isEquivalentUint8Arrays"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.HTML)) {
                // the entire chunk is the closing tags; return without enqueueing anything.
                return;
            }
            // We assume these tags will go at together at the end of the document and that
            // they won't appear anywhere else in the document. This is not really a safe assumption
            // but until we revamp our streaming infra this is a performant way to string the tags
            chunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeFromUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY);
            chunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeFromUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.HTML);
            controller.enqueue(chunk);
        }
    });
}
function createRootLayoutValidatorStream() {
    let foundHtml = false;
    let foundBody = false;
    return new TransformStream({
        async transform (chunk, controller) {
            // Peek into the streamed chunk to see if the tags are present.
            if (!foundHtml && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["indexOfUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].OPENING.HTML) > -1) {
                foundHtml = true;
            }
            if (!foundBody && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["indexOfUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].OPENING.BODY) > -1) {
                foundBody = true;
            }
            controller.enqueue(chunk);
        },
        flush (controller) {
            const missingTags = [];
            if (!foundHtml) missingTags.push('html');
            if (!foundBody) missingTags.push('body');
            if (!missingTags.length) return;
            controller.enqueue(encoder.encode(`<script>self.__next_root_layout_missing_tags=${JSON.stringify(missingTags)}</script>`));
        }
    });
}
function chainTransformers(readable, transformers) {
    let stream = readable;
    for (const transformer of transformers){
        if (!transformer) continue;
        stream = stream.pipeThrough(transformer);
    }
    return stream;
}
async function continueFizzStream(renderStream, { suffix, inlinedDataStream, isStaticGeneration, getServerInsertedHTML, getServerInsertedMetadata, validateRootLayout }) {
    // Suffix itself might contain close tags at the end, so we need to split it.
    const suffixUnclosed = suffix ? suffix.split(CLOSE_TAG, 1)[0] : null;
    // If we're generating static HTML and there's an `allReady` promise on the
    // stream, we need to wait for it to resolve before continuing.
    if (isStaticGeneration && 'allReady' in renderStream) {
        await renderStream.allReady;
    }
    return chainTransformers(renderStream, [
        // Buffer everything to avoid flushing too frequently
        createBufferedTransformStream(),
        // Insert generated metadata
        createHeadInsertionTransformStream(getServerInsertedMetadata),
        // Insert suffix content
        suffixUnclosed != null && suffixUnclosed.length > 0 ? createDeferredSuffixStream(suffixUnclosed) : null,
        // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
        inlinedDataStream ? createMergedTransformStream(inlinedDataStream) : null,
        // Validate the root layout for missing html or body tags
        validateRootLayout ? createRootLayoutValidatorStream() : null,
        // Close tags should always be deferred to the end
        createMoveSuffixStream(),
        // Special head insertions
        // TODO-APP: Insert server side html to end of head in app layout rendering, to avoid
        // hydration errors. Remove this once it's ready to be handled by react itself.
        createHeadInsertionTransformStream(getServerInsertedHTML)
    ]);
}
async function continueDynamicPrerender(prerenderStream, { getServerInsertedHTML, getServerInsertedMetadata }) {
    return prerenderStream // Buffer everything to avoid flushing too frequently
    .pipeThrough(createBufferedTransformStream()).pipeThrough(createStripDocumentClosingTagsTransform()) // Insert generated tags to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML)) // Insert generated metadata
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedMetadata));
}
async function continueStaticPrerender(prerenderStream, { inlinedDataStream, getServerInsertedHTML, getServerInsertedMetadata }) {
    return prerenderStream // Buffer everything to avoid flushing too frequently
    .pipeThrough(createBufferedTransformStream()) // Insert generated tags to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML)) // Insert generated metadata to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedMetadata)) // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
    .pipeThrough(createMergedTransformStream(inlinedDataStream)) // Close tags should always be deferred to the end
    .pipeThrough(createMoveSuffixStream());
}
async function continueDynamicHTMLResume(renderStream, { inlinedDataStream, getServerInsertedHTML, getServerInsertedMetadata }) {
    return renderStream // Buffer everything to avoid flushing too frequently
    .pipeThrough(createBufferedTransformStream()) // Insert generated tags to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML)) // Insert generated metadata to body
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedMetadata)) // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
    .pipeThrough(createMergedTransformStream(inlinedDataStream)) // Close tags should always be deferred to the end
    .pipeThrough(createMoveSuffixStream());
}
function createDocumentClosingStream() {
    return streamFromString(CLOSE_TAG);
} //# sourceMappingURL=node-web-streams-helper.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
/* eslint-disable no-redeclare */ // FIXME: (wyattjoh) this is a temporary solution to allow us to pass data between bundled modules
__turbopack_context__.s({
    "NEXT_REQUEST_META": (()=>NEXT_REQUEST_META),
    "addRequestMeta": (()=>addRequestMeta),
    "getRequestMeta": (()=>getRequestMeta),
    "removeRequestMeta": (()=>removeRequestMeta),
    "setRequestMeta": (()=>setRequestMeta)
});
const NEXT_REQUEST_META = Symbol.for('NextInternalRequestMeta');
function getRequestMeta(req, key) {
    const meta = req[NEXT_REQUEST_META] || {};
    return typeof key === 'string' ? meta[key] : meta;
}
function setRequestMeta(req, meta) {
    req[NEXT_REQUEST_META] = meta;
    return meta;
}
function addRequestMeta(request, key, value) {
    const meta = getRequestMeta(request);
    meta[key] = value;
    return setRequestMeta(request, meta);
}
function removeRequestMeta(request, key) {
    const meta = getRequestMeta(request);
    delete meta[key];
    return setRequestMeta(request, meta);
} //# sourceMappingURL=request-meta.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/web/utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fromNodeOutgoingHttpHeaders": (()=>fromNodeOutgoingHttpHeaders),
    "normalizeNextQueryParam": (()=>normalizeNextQueryParam),
    "splitCookiesString": (()=>splitCookiesString),
    "toNodeOutgoingHttpHeaders": (()=>toNodeOutgoingHttpHeaders),
    "validateURL": (()=>validateURL)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
;
function fromNodeOutgoingHttpHeaders(nodeHeaders) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(nodeHeaders)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === 'undefined') continue;
            if (typeof v === 'number') {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== '=' && ch !== ';' && ch !== ',';
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ',') {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === '=') {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
function toNodeOutgoingHttpHeaders(headers) {
    const nodeHeaders = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === 'set-cookie') {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                nodeHeaders[key] = value;
            }
        }
    }
    return nodeHeaders;
}
function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw Object.defineProperty(new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        }), "__NEXT_ERROR_CODE", {
            value: "E61",
            enumerable: false,
            configurable: true
        });
    }
}
function normalizeNextQueryParam(key) {
    const prefixes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_QUERY_PARAM_PREFIX"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_INTERCEPTION_MARKER_PREFIX"]
    ];
    for (const prefix of prefixes){
        if (key !== prefix && key.startsWith(prefix)) {
            return key.substring(prefix.length);
        }
    }
    return null;
} //# sourceMappingURL=utils.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "detectDomainLocale": (()=>detectDomainLocale)
});
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        var _item_domain, _item_locales;
        // remove port if present
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(':', 1)[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ __turbopack_context__.s({
    "removeTrailingSlash": (()=>removeTrailingSlash)
});
function removeTrailingSlash(route) {
    return route.replace(/\/$/, '') || '/';
} //# sourceMappingURL=remove-trailing-slash.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ __turbopack_context__.s({
    "parsePath": (()=>parsePath)
});
function parsePath(path) {
    const hashIndex = path.indexOf('#');
    const queryIndex = path.indexOf('?');
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : '',
            hash: hashIndex > -1 ? path.slice(hashIndex) : ''
        };
    }
    return {
        pathname: path,
        query: '',
        hash: ''
    };
} //# sourceMappingURL=parse-path.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addPathPrefix": (()=>addPathPrefix)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [app-rsc] (ecmascript)");
;
function addPathPrefix(path, prefix) {
    if (!path.startsWith('/') || !prefix) {
        return path;
    }
    const { pathname, query, hash } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addPathSuffix": (()=>addPathSuffix)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [app-rsc] (ecmascript)");
;
function addPathSuffix(path, suffix) {
    if (!path.startsWith('/') || !suffix) {
        return path;
    }
    const { pathname, query, hash } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "pathHasPrefix": (()=>pathHasPrefix)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [app-rsc] (ecmascript)");
;
function pathHasPrefix(path, prefix) {
    if (typeof path !== 'string') {
        return false;
    }
    const { pathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return pathname === prefix || pathname.startsWith(prefix + '/');
} //# sourceMappingURL=path-has-prefix.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addLocale": (()=>addLocale)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [app-rsc] (ecmascript)");
;
;
function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathHasPrefix"])(lower, '/api')) return path;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathHasPrefix"])(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addPathPrefix"])(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatNextPathnameInfo": (()=>formatNextPathnameInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$locale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js [app-rsc] (ecmascript)");
;
;
;
;
function formatNextPathnameInfo(info) {
    let pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$locale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLocale"])(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(pathname);
    }
    if (info.buildId) {
        pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addPathSuffix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addPathPrefix"])(pathname, "/_next/data/" + info.buildId), info.pathname === '/' ? 'index.json' : '.json');
    }
    pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addPathPrefix"])(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith('/') ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addPathSuffix"])(pathname, '/') : pathname : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/get-hostname.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
/**
 * Takes an object with a hostname property (like a parsed URL) and some
 * headers that may contain Host and returns the preferred hostname.
 * @param parsed An object containing a hostname property.
 * @param headers A dictionary with headers containing a `host`.
 */ __turbopack_context__.s({
    "getHostname": (()=>getHostname)
});
function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(':', 1)[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
} //# sourceMappingURL=get-hostname.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
/**
 * A cache of lowercased locales for each list of locales. This is stored as a
 * WeakMap so if the locales are garbage collected, the cache entry will be
 * removed as well.
 */ __turbopack_context__.s({
    "normalizeLocalePath": (()=>normalizeLocalePath)
});
const cache = new WeakMap();
function normalizeLocalePath(pathname, locales) {
    // If locales is undefined, return the pathname as is.
    if (!locales) return {
        pathname
    };
    // Get the cached lowercased locales or create a new cache entry.
    let lowercasedLocales = cache.get(locales);
    if (!lowercasedLocales) {
        lowercasedLocales = locales.map((locale)=>locale.toLowerCase());
        cache.set(locales, lowercasedLocales);
    }
    let detectedLocale;
    // The first segment will be empty, because it has a leading `/`. If
    // there is no further segment, there is no locale (or it's the default).
    const segments = pathname.split('/', 2);
    // If there's no second segment (ie, the pathname is just `/`), there's no
    // locale.
    if (!segments[1]) return {
        pathname
    };
    // The second segment will contain the locale part if any.
    const segment = segments[1].toLowerCase();
    // See if the segment matches one of the locales. If it doesn't, there is
    // no locale (or it's the default).
    const index = lowercasedLocales.indexOf(segment);
    if (index < 0) return {
        pathname
    };
    // Return the case-sensitive locale.
    detectedLocale = locales[index];
    // Remove the `/${locale}` part of the pathname.
    pathname = pathname.slice(detectedLocale.length + 1) || '/';
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "removePathPrefix": (()=>removePathPrefix)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [app-rsc] (ecmascript)");
;
function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathHasPrefix"])(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith('/')) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getNextPathnameInfo": (()=>getNextPathnameInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [app-rsc] (ecmascript)");
;
;
;
function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath, i18n, trailingSlash } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname,
        trailingSlash: pathname !== '/' ? pathname.endsWith('/') : trailingSlash
    };
    if (basePath && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathHasPrefix"])(info.pathname, basePath)) {
        info.pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removePathPrefix"])(info.pathname, basePath);
        info.basePath = basePath;
    }
    let pathnameNoDataPrefix = info.pathname;
    if (info.pathname.startsWith('/_next/data/') && info.pathname.endsWith('.json')) {
        const paths = info.pathname.replace(/^\/_next\/data\//, '').replace(/\.json$/, '').split('/');
        const buildId = paths[0];
        info.buildId = buildId;
        pathnameNoDataPrefix = paths[1] !== 'index' ? "/" + paths.slice(1).join('/') : '/';
        // update pathname with normalized if enabled although
        // we use normalized to populate locale info still
        if (options.parseData === true) {
            info.pathname = pathnameNoDataPrefix;
        }
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (i18n) {
        let result = options.i18nProvider ? options.i18nProvider.analyze(info.pathname) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeLocalePath"])(info.pathname, i18n.locales);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
        if (!result.detectedLocale && info.buildId) {
            result = options.i18nProvider ? options.i18nProvider.analyze(pathnameNoDataPrefix) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeLocalePath"])(pathnameNoDataPrefix, i18n.locales);
            if (result.detectedLocale) {
                info.locale = result.detectedLocale;
            }
        }
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/web/next-url.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NextURL": (()=>NextURL)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$detect$2d$domain$2d$locale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$format$2d$next$2d$pathname$2d$info$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$get$2d$hostname$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/get-hostname.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$next$2d$pathname$2d$info$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js [app-rsc] (ecmascript)");
;
;
;
;
const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, 'localhost'), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, 'localhost'));
}
const Internal = Symbol('NextURLInternal');
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === 'object' && 'pathname' in baseOrOpts || typeof baseOrOpts === 'string') {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ''
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig, _this_Internal_domainLocale, _this_Internal_options_nextConfig_i18n1, _this_Internal_options_nextConfig1;
        const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$next$2d$pathname$2d$info$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNextPathnameInfo"])(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE,
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$get$2d$hostname$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHostname"])(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$detect$2d$domain$2d$locale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["detectDomainLocale"])((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? '';
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$format$2d$next$2d$pathname$2d$info$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatNextPathnameInfo"])({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? '';
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw Object.defineProperty(new TypeError(`The NextURL configuration includes no locale "${locale}"`), "__NEXT_ERROR_CODE", {
                value: "E597",
                enumerable: false,
                configurable: true
            });
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith('/') ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for('edge-runtime.inspect.custom')]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
} //# sourceMappingURL=next-url.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/web/error.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PageSignatureError": (()=>PageSignatureError),
    "RemovedPageError": (()=>RemovedPageError),
    "RemovedUAError": (()=>RemovedUAError)
});
class PageSignatureError extends Error {
    constructor({ page }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
} //# sourceMappingURL=error.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: ()=>RequestCookies,
    ResponseCookies: ()=>ResponseCookies,
    parseCookie: ()=>parseCookie,
    parseSetCookie: ()=>parseSetCookie,
    stringifyCookie: ()=>stringifyCookie
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function stringifyCookie(c) {
    var _a;
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
        "partitioned" in c && c.partitioned && "Partitioned",
        "priority" in c && c.priority && `Priority=${c.priority}`
    ].filter(Boolean);
    const stringified = `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}`;
    return attrs.length === 0 ? stringified : `${stringified}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
    const map = /* @__PURE__ */ new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
            map.set(pair, "true");
            continue;
        }
        const [key, value] = [
            pair.slice(0, splitAt),
            pair.slice(splitAt + 1)
        ];
        try {
            map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch  {}
    }
    return map;
}
function parseSetCookie(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    const [[name, value], ...attributes] = parseCookie(setCookie);
    const { domain, expires, httponly, maxage, path, samesite, secure, partitioned, priority } = Object.fromEntries(attributes.map(([key, value2])=>[
            key.toLowerCase().replace(/-/g, ""),
            value2
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        },
        ...priority && {
            priority: parsePriority(priority)
        },
        ...partitioned && {
            partitioned: true
        }
    };
    return compact(cookie);
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
var PRIORITY = [
    "low",
    "medium",
    "high"
];
function parsePriority(string) {
    string = string.toLowerCase();
    return PRIORITY.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// src/request-cookies.ts
var RequestCookies = class {
    constructor(requestHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = parseCookie(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    /**
   * The amount of cookies received from the client
   */ get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, value2])=>stringifyCookie(value2)).join("; "));
        return this;
    }
    /**
   * Delete the cookies matching the passed name or names in the request.
   */ delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>stringifyCookie(value)).join("; "));
        return result;
    }
    /**
   * Delete all the cookies in the cookies in the request.
   */ clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    /**
   * Format the cookies in the request as a string for logging
   */ [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
    }
};
// src/response-cookies.ts
var ResponseCookies = class {
    constructor(responseHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        for (const cookieString of cookieStrings){
            const parsed = parseSetCookie(cookieString);
            if (parsed) this._parsed.set(parsed.name, parsed);
        }
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */ get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */ getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c)=>c.name === key);
    }
    has(name) {
        return this._parsed.has(name);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */ set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */ delete(...args) {
        const [name, options] = typeof args[0] === "string" ? [
            args[0]
        ] : [
            args[0].name,
            args[0]
        ];
        return this.set({
            ...options,
            name,
            value: "",
            expires: /* @__PURE__ */ new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map(stringifyCookie).join("; ");
    }
};
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    RequestCookies,
    ResponseCookies,
    parseCookie,
    parseSetCookie,
    stringifyCookie
});
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
 //# sourceMappingURL=cookies.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/web/spec-extension/request.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "INTERNALS": (()=>INTERNALS),
    "NextRequest": (()=>NextRequest)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/web/next-url.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/web/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/web/error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-rsc] (ecmascript)");
;
;
;
;
const INTERNALS = Symbol('internal request');
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== 'string' && 'url' in input ? input.url : String(input);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateURL"])(url);
        // node Request instance requires duplex option when a body
        // is present or it errors, we don't handle this for
        // Request being passed in since it would have already
        // errored if this wasn't configured
        if ("TURBOPACK compile-time truthy", 1) {
            if (init.body && init.duplex !== 'half') {
                init.duplex = 'half';
            }
        }
        if (input instanceof Request) super(input, init);
        else super(url, init);
        const nextUrl = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextURL"](url, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toNodeOutgoingHttpHeaders"])(this.headers),
            nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
            cookies: new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RequestCookies"](this.headers),
            nextUrl,
            url: process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE ? url : nextUrl.toString()
        };
    }
    [Symbol.for('edge-runtime.inspect.custom')]() {
        return {
            cookies: this.cookies,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get nextUrl() {
        return this[INTERNALS].nextUrl;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RemovedPageError"]();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RemovedUAError"]();
    }
    get url() {
        return this[INTERNALS].url;
    }
} //# sourceMappingURL=request.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/base-http/helpers.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
/**
 * This file provides some helpers that should be used in conjunction with
 * explicit environment checks. When combined with the environment checks, it
 * will ensure that the correct typings are used as well as enable code
 * elimination.
 */ /**
 * Type guard to determine if a request is a WebNextRequest. This does not
 * actually check the type of the request, but rather the runtime environment.
 * It's expected that when the runtime environment is the edge runtime, that any
 * base request is a WebNextRequest.
 */ __turbopack_context__.s({
    "isNodeNextRequest": (()=>isNodeNextRequest),
    "isNodeNextResponse": (()=>isNodeNextResponse),
    "isWebNextRequest": (()=>isWebNextRequest),
    "isWebNextResponse": (()=>isWebNextResponse)
});
const isWebNextRequest = (req)=>("TURBOPACK compile-time value", "nodejs") === 'edge';
const isWebNextResponse = (res)=>("TURBOPACK compile-time value", "nodejs") === 'edge';
const isNodeNextRequest = (req)=>("TURBOPACK compile-time value", "nodejs") !== 'edge';
const isNodeNextResponse = (res)=>("TURBOPACK compile-time value", "nodejs") !== 'edge'; //# sourceMappingURL=helpers.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/web/spec-extension/adapters/next-request.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NextRequestAdapter": (()=>NextRequestAdapter),
    "ResponseAborted": (()=>ResponseAborted),
    "ResponseAbortedName": (()=>ResponseAbortedName),
    "createAbortController": (()=>createAbortController),
    "signalFromNodeResponse": (()=>signalFromNodeResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/web/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/web/spec-extension/request.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/base-http/helpers.js [app-rsc] (ecmascript)");
;
;
;
;
const ResponseAbortedName = 'ResponseAborted';
class ResponseAborted extends Error {
    constructor(...args){
        super(...args), this.name = ResponseAbortedName;
    }
}
function createAbortController(response) {
    const controller = new AbortController();
    // If `finish` fires first, then `res.end()` has been called and the close is
    // just us finishing the stream on our side. If `close` fires first, then we
    // know the client disconnected before we finished.
    response.once('close', ()=>{
        if (response.writableFinished) return;
        controller.abort(new ResponseAborted());
    });
    return controller;
}
function signalFromNodeResponse(response) {
    const { errored, destroyed } = response;
    if (errored || destroyed) {
        return AbortSignal.abort(errored ?? new ResponseAborted());
    }
    const { signal } = createAbortController(response);
    return signal;
}
class NextRequestAdapter {
    static fromBaseNextRequest(request, signal) {
        if (// environment variable check provides dead code elimination.
        ("TURBOPACK compile-time value", "nodejs") === 'edge' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isWebNextRequest"])(request)) {
            "TURBOPACK unreachable";
        } else if (// environment variable check provides dead code elimination.
        ("TURBOPACK compile-time value", "nodejs") !== 'edge' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNodeNextRequest"])(request)) {
            return NextRequestAdapter.fromNodeNextRequest(request, signal);
        } else {
            throw Object.defineProperty(new Error('Invariant: Unsupported NextRequest type'), "__NEXT_ERROR_CODE", {
                value: "E345",
                enumerable: false,
                configurable: true
            });
        }
    }
    static fromNodeNextRequest(request, signal) {
        // HEAD and GET requests can not have a body.
        let body = null;
        if (request.method !== 'GET' && request.method !== 'HEAD' && request.body) {
            // @ts-expect-error - this is handled by undici, when streams/web land use it instead
            body = request.body;
        }
        let url;
        if (request.url.startsWith('http')) {
            url = new URL(request.url);
        } else {
            // Grab the full URL from the request metadata.
            const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(request, 'initURL');
            if (!base || !base.startsWith('http')) {
                // Because the URL construction relies on the fact that the URL provided
                // is absolute, we need to provide a base URL. We can't use the request
                // URL because it's relative, so we use a dummy URL instead.
                url = new URL(request.url, 'http://n');
            } else {
                url = new URL(request.url, base);
            }
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextRequest"](url, {
            method: request.method,
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromNodeOutgoingHttpHeaders"])(request.headers),
            duplex: 'half',
            signal,
            // geo
            // ip
            // nextConfig
            // body can not be passed if request was aborted
            // or we get a Request body was disturbed error
            ...signal.aborted ? {} : {
                body
            }
        });
    }
    static fromWebNextRequest(request) {
        // HEAD and GET requests can not have a body.
        let body = null;
        if (request.method !== 'GET' && request.method !== 'HEAD') {
            body = request.body;
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextRequest"](request.url, {
            method: request.method,
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromNodeOutgoingHttpHeaders"])(request.headers),
            duplex: 'half',
            signal: request.request.signal,
            // geo
            // ip
            // nextConfig
            // body can not be passed if request was aborted
            // or we get a Request body was disturbed error
            ...request.request.signal.aborted ? {} : {
                body
            }
        });
    }
} //# sourceMappingURL=next-request.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/client-component-renderer-logger.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
// Combined load times for loading client components
__turbopack_context__.s({
    "getClientComponentLoaderMetrics": (()=>getClientComponentLoaderMetrics),
    "wrapClientComponentLoader": (()=>wrapClientComponentLoader)
});
let clientComponentLoadStart = 0;
let clientComponentLoadTimes = 0;
let clientComponentLoadCount = 0;
function wrapClientComponentLoader(ComponentMod) {
    if (!('performance' in globalThis)) {
        return ComponentMod.__next_app__;
    }
    return {
        require: (...args)=>{
            const startTime = performance.now();
            if (clientComponentLoadStart === 0) {
                clientComponentLoadStart = startTime;
            }
            try {
                clientComponentLoadCount += 1;
                return ComponentMod.__next_app__.require(...args);
            } finally{
                clientComponentLoadTimes += performance.now() - startTime;
            }
        },
        loadChunk: (...args)=>{
            const startTime = performance.now();
            try {
                return ComponentMod.__next_app__.loadChunk(...args);
            } finally{
                clientComponentLoadTimes += performance.now() - startTime;
            }
        }
    };
}
function getClientComponentLoaderMetrics(options = {}) {
    const metrics = clientComponentLoadStart === 0 ? undefined : {
        clientComponentLoadStart,
        clientComponentLoadTimes,
        clientComponentLoadCount
    };
    if (options.reset) {
        clientComponentLoadStart = 0;
        clientComponentLoadTimes = 0;
        clientComponentLoadCount = 0;
    }
    return metrics;
} //# sourceMappingURL=client-component-renderer-logger.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/pipe-readable.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isAbortError": (()=>isAbortError),
    "pipeToNodeResponse": (()=>pipeToNodeResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$next$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/web/spec-extension/adapters/next-request.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/detached-promise.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$client$2d$component$2d$renderer$2d$logger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/client-component-renderer-logger.js [app-rsc] (ecmascript)");
;
;
;
;
;
function isAbortError(e) {
    return (e == null ? void 0 : e.name) === 'AbortError' || (e == null ? void 0 : e.name) === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$next$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResponseAbortedName"];
}
function createWriterFromResponse(res, waitUntilForEnd) {
    let started = false;
    // Create a promise that will resolve once the response has drained. See
    // https://nodejs.org/api/stream.html#stream_event_drain
    let drained = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DetachedPromise"]();
    function onDrain() {
        drained.resolve();
    }
    res.on('drain', onDrain);
    // If the finish event fires, it means we shouldn't block and wait for the
    // drain event.
    res.once('close', ()=>{
        res.off('drain', onDrain);
        drained.resolve();
    });
    // Create a promise that will resolve once the response has finished. See
    // https://nodejs.org/api/http.html#event-finish_1
    const finished = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DetachedPromise"]();
    res.once('finish', ()=>{
        finished.resolve();
    });
    // Create a writable stream that will write to the response.
    return new WritableStream({
        write: async (chunk)=>{
            // You'd think we'd want to use `start` instead of placing this in `write`
            // but this ensures that we don't actually flush the headers until we've
            // started writing chunks.
            if (!started) {
                started = true;
                if ('performance' in globalThis && process.env.NEXT_OTEL_PERFORMANCE_PREFIX) {
                    const metrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$client$2d$component$2d$renderer$2d$logger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getClientComponentLoaderMetrics"])();
                    if (metrics) {
                        performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-client-component-loading`, {
                            start: metrics.clientComponentLoadStart,
                            end: metrics.clientComponentLoadStart + metrics.clientComponentLoadTimes
                        });
                    }
                }
                res.flushHeaders();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextNodeServerSpan"].startResponse, {
                    spanName: 'start response'
                }, ()=>undefined);
            }
            try {
                const ok = res.write(chunk);
                // Added by the `compression` middleware, this is a function that will
                // flush the partially-compressed response to the client.
                if ('flush' in res && typeof res.flush === 'function') {
                    res.flush();
                }
                // If the write returns false, it means there's some backpressure, so
                // wait until it's streamed before continuing.
                if (!ok) {
                    await drained.promise;
                    // Reset the drained promise so that we can wait for the next drain event.
                    drained = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DetachedPromise"]();
                }
            } catch (err) {
                res.end();
                throw Object.defineProperty(new Error('failed to write chunk to response', {
                    cause: err
                }), "__NEXT_ERROR_CODE", {
                    value: "E321",
                    enumerable: false,
                    configurable: true
                });
            }
        },
        abort: (err)=>{
            if (res.writableFinished) return;
            res.destroy(err);
        },
        close: async ()=>{
            // if a waitUntil promise was passed, wait for it to resolve before
            // ending the response.
            if (waitUntilForEnd) {
                await waitUntilForEnd;
            }
            if (res.writableFinished) return;
            res.end();
            return finished.promise;
        }
    });
}
async function pipeToNodeResponse(readable, res, waitUntilForEnd) {
    try {
        // If the response has already errored, then just return now.
        const { errored, destroyed } = res;
        if (errored || destroyed) return;
        // Create a new AbortController so that we can abort the readable if the
        // client disconnects.
        const controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$next$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAbortController"])(res);
        const writer = createWriterFromResponse(res, waitUntilForEnd);
        await readable.pipeTo(writer, {
            signal: controller.signal
        });
    } catch (err) {
        // If this isn't related to an abort error, re-throw it.
        if (isAbortError(err)) return;
        throw Object.defineProperty(new Error('failed to pipe response', {
            cause: err
        }), "__NEXT_ERROR_CODE", {
            value: "E180",
            enumerable: false,
            configurable: true
        });
    }
} //# sourceMappingURL=pipe-readable.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/render-result.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RenderResult)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/stream-utils/node-web-streams-helper.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/pipe-readable.js [app-rsc] (ecmascript)");
;
;
class RenderResult {
    /**
   * Creates a new RenderResult instance from a static response.
   *
   * @param value the static response value
   * @returns a new RenderResult instance
   */ static fromStatic(value) {
        return new RenderResult(value, {
            metadata: {}
        });
    }
    constructor(response, { contentType, waitUntil, metadata }){
        this.response = response;
        this.contentType = contentType;
        this.metadata = metadata;
        this.waitUntil = waitUntil;
    }
    assignMetadata(metadata) {
        Object.assign(this.metadata, metadata);
    }
    /**
   * Returns true if the response is null. It can be null if the response was
   * not found or was already sent.
   */ get isNull() {
        return this.response === null;
    }
    /**
   * Returns false if the response is a string. It can be a string if the page
   * was prerendered. If it's not, then it was generated dynamically.
   */ get isDynamic() {
        return typeof this.response !== 'string';
    }
    toUnchunkedBuffer(stream = false) {
        if (this.response === null) {
            throw Object.defineProperty(new Error('Invariant: null responses cannot be unchunked'), "__NEXT_ERROR_CODE", {
                value: "E274",
                enumerable: false,
                configurable: true
            });
        }
        if (typeof this.response !== 'string') {
            if (!stream) {
                throw Object.defineProperty(new Error('Invariant: dynamic responses cannot be unchunked. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
                    value: "E81",
                    enumerable: false,
                    configurable: true
                });
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streamToBuffer"])(this.readable);
        }
        return Buffer.from(this.response);
    }
    toUnchunkedString(stream = false) {
        if (this.response === null) {
            throw Object.defineProperty(new Error('Invariant: null responses cannot be unchunked'), "__NEXT_ERROR_CODE", {
                value: "E274",
                enumerable: false,
                configurable: true
            });
        }
        if (typeof this.response !== 'string') {
            if (!stream) {
                throw Object.defineProperty(new Error('Invariant: dynamic responses cannot be unchunked. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
                    value: "E81",
                    enumerable: false,
                    configurable: true
                });
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streamToString"])(this.readable);
        }
        return this.response;
    }
    /**
   * Returns the response if it is a stream, or throws an error if it is a
   * string.
   */ get readable() {
        if (this.response === null) {
            throw Object.defineProperty(new Error('Invariant: null responses cannot be streamed'), "__NEXT_ERROR_CODE", {
                value: "E14",
                enumerable: false,
                configurable: true
            });
        }
        if (typeof this.response === 'string') {
            throw Object.defineProperty(new Error('Invariant: static responses cannot be streamed'), "__NEXT_ERROR_CODE", {
                value: "E151",
                enumerable: false,
                configurable: true
            });
        }
        if (Buffer.isBuffer(this.response)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streamFromBuffer"])(this.response);
        }
        // If the response is an array of streams, then chain them together.
        if (Array.isArray(this.response)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["chainStreams"])(...this.response);
        }
        return this.response;
    }
    /**
   * Chains a new stream to the response. This will convert the response to an
   * array of streams if it is not already one and will add the new stream to
   * the end. When this response is piped, all of the streams will be piped
   * one after the other.
   *
   * @param readable The new stream to chain
   */ chain(readable) {
        if (this.response === null) {
            throw Object.defineProperty(new Error('Invariant: response is null. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
                value: "E258",
                enumerable: false,
                configurable: true
            });
        }
        // If the response is not an array of streams already, make it one.
        let responses;
        if (typeof this.response === 'string') {
            responses = [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streamFromString"])(this.response)
            ];
        } else if (Array.isArray(this.response)) {
            responses = this.response;
        } else if (Buffer.isBuffer(this.response)) {
            responses = [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streamFromBuffer"])(this.response)
            ];
        } else {
            responses = [
                this.response
            ];
        }
        // Add the new stream to the array.
        responses.push(readable);
        // Update the response.
        this.response = responses;
    }
    /**
   * Pipes the response to a writable stream. This will close/cancel the
   * writable stream if an error is encountered. If this doesn't throw, then
   * the writable stream will be closed or aborted.
   *
   * @param writable Writable stream to pipe the response to
   */ async pipeTo(writable) {
        try {
            await this.readable.pipeTo(writable, {
                // We want to close the writable stream ourselves so that we can wait
                // for the waitUntil promise to resolve before closing it. If an error
                // is encountered, we'll abort the writable stream if we swallowed the
                // error.
                preventClose: true
            });
            // If there is a waitUntil promise, wait for it to resolve before
            // closing the writable stream.
            if (this.waitUntil) await this.waitUntil;
            // Close the writable stream.
            await writable.close();
        } catch (err) {
            // If this is an abort error, we should abort the writable stream (as we
            // took ownership of it when we started piping). We don't need to re-throw
            // because we handled the error.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAbortError"])(err)) {
                // Abort the writable stream if an error is encountered.
                await writable.abort(err);
                return;
            }
            // We're not aborting the writer here as when this method throws it's not
            // clear as to how so the caller should assume it's their responsibility
            // to clean up the writer.
            throw err;
        }
    }
    /**
   * Pipes the response to a node response. This will close/cancel the node
   * response if an error is encountered.
   *
   * @param res
   */ async pipeToNodeResponse(res) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pipeToNodeResponse"])(this.readable, res, this.waitUntil);
    }
} //# sourceMappingURL=render-result.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/response-cache/utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fromResponseCacheEntry": (()=>fromResponseCacheEntry),
    "routeKindToIncrementalCacheKind": (()=>routeKindToIncrementalCacheKind),
    "toResponseCacheEntry": (()=>toResponseCacheEntry)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/response-cache/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/render-result.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)");
;
;
;
async function fromResponseCacheEntry(cacheEntry) {
    var _cacheEntry_value, _cacheEntry_value1;
    return {
        ...cacheEntry,
        value: ((_cacheEntry_value = cacheEntry.value) == null ? void 0 : _cacheEntry_value.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].PAGES ? {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].PAGES,
            html: await cacheEntry.value.html.toUnchunkedString(true),
            pageData: cacheEntry.value.pageData,
            headers: cacheEntry.value.headers,
            status: cacheEntry.value.status
        } : ((_cacheEntry_value1 = cacheEntry.value) == null ? void 0 : _cacheEntry_value1.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE ? {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE,
            html: await cacheEntry.value.html.toUnchunkedString(true),
            postponed: cacheEntry.value.postponed,
            rscData: cacheEntry.value.rscData,
            headers: cacheEntry.value.headers,
            status: cacheEntry.value.status,
            segmentData: cacheEntry.value.segmentData
        } : cacheEntry.value
    };
}
async function toResponseCacheEntry(response) {
    var _response_value, _response_value1, _response_value2;
    if (!response) return null;
    if (((_response_value = response.value) == null ? void 0 : _response_value.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].FETCH) {
        throw Object.defineProperty(new Error('Invariant: unexpected cachedResponse of kind fetch in response cache'), "__NEXT_ERROR_CODE", {
            value: "E165",
            enumerable: false,
            configurable: true
        });
    }
    return {
        isMiss: response.isMiss,
        isStale: response.isStale,
        revalidate: response.revalidate,
        isFallback: response.isFallback,
        value: ((_response_value1 = response.value) == null ? void 0 : _response_value1.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].PAGES ? {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].PAGES,
            html: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fromStatic(response.value.html),
            pageData: response.value.pageData,
            headers: response.value.headers,
            status: response.value.status
        } : ((_response_value2 = response.value) == null ? void 0 : _response_value2.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE ? {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE,
            html: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fromStatic(response.value.html),
            rscData: response.value.rscData,
            headers: response.value.headers,
            status: response.value.status,
            postponed: response.value.postponed,
            segmentData: response.value.segmentData
        } : response.value
    };
}
function routeKindToIncrementalCacheKind(routeKind) {
    switch(routeKind){
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].PAGES:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].PAGES;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].APP_PAGE:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].APP_PAGE;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].IMAGE:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].IMAGE;
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].APP_ROUTE:
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].APP_ROUTE;
        default:
            throw Object.defineProperty(new Error(`Unexpected route kind ${routeKind}`), "__NEXT_ERROR_CODE", {
                value: "E64",
                enumerable: false,
                configurable: true
            });
    }
} //# sourceMappingURL=utils.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ResponseCache)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/response-cache/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$batcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/batcher.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/response-cache/utils.js [app-rsc] (ecmascript)");
;
;
;
;
;
class ResponseCache {
    constructor(minimalMode){
        this.batcher = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$batcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Batcher"].create({
            // Ensure on-demand revalidate doesn't block normal requests, it should be
            // safe to run an on-demand revalidate for the same key as a normal request.
            cacheKeyFn: ({ key, isOnDemandRevalidate })=>`${key}-${isOnDemandRevalidate ? '1' : '0'}`,
            // We wait to do any async work until after we've added our promise to
            // `pendingResponses` to ensure that any any other calls will reuse the
            // same promise until we've fully finished our work.
            schedulerFn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scheduleOnNextTick"]
        });
        // this is a hack to avoid Webpack knowing this is equal to this.minimalMode
        // because we replace this.minimalMode to true in production bundles.
        const minimalModeKey = 'minimalMode';
        this[minimalModeKey] = minimalMode;
    }
    async get(key, responseGenerator, context) {
        // If there is no key for the cache, we can't possibly look this up in the
        // cache so just return the result of the response generator.
        if (!key) {
            return responseGenerator({
                hasResolved: false,
                previousCacheEntry: null
            });
        }
        const { incrementalCache, isOnDemandRevalidate = false, isFallback = false, isRoutePPREnabled = false } = context;
        const response = await this.batcher.batch({
            key,
            isOnDemandRevalidate
        }, async (cacheKey, resolve)=>{
            var _this_previousCacheItem;
            // We keep the previous cache entry around to leverage when the
            // incremental cache is disabled in minimal mode.
            if (this.minimalMode && ((_this_previousCacheItem = this.previousCacheItem) == null ? void 0 : _this_previousCacheItem.key) === cacheKey && this.previousCacheItem.expiresAt > Date.now()) {
                return this.previousCacheItem.entry;
            }
            // Coerce the kindHint into a given kind for the incremental cache.
            const kind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routeKindToIncrementalCacheKind"])(context.routeKind);
            let resolved = false;
            let cachedResponse = null;
            try {
                cachedResponse = !this.minimalMode ? await incrementalCache.get(key, {
                    kind,
                    isRoutePPREnabled: context.isRoutePPREnabled,
                    isFallback
                }) : null;
                if (cachedResponse && !isOnDemandRevalidate) {
                    var _cachedResponse_value;
                    if (((_cachedResponse_value = cachedResponse.value) == null ? void 0 : _cachedResponse_value.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].FETCH) {
                        throw Object.defineProperty(new Error(`invariant: unexpected cachedResponse of kind fetch in response cache`), "__NEXT_ERROR_CODE", {
                            value: "E30",
                            enumerable: false,
                            configurable: true
                        });
                    }
                    resolve({
                        ...cachedResponse,
                        revalidate: cachedResponse.curRevalidate
                    });
                    resolved = true;
                    if (!cachedResponse.isStale || context.isPrefetch) {
                        // The cached value is still valid, so we don't need
                        // to update it yet.
                        return null;
                    }
                }
                const cacheEntry = await responseGenerator({
                    hasResolved: resolved,
                    previousCacheEntry: cachedResponse,
                    isRevalidating: true
                });
                // If the cache entry couldn't be generated, we don't want to cache
                // the result.
                if (!cacheEntry) {
                    // Unset the previous cache item if it was set.
                    if (this.minimalMode) this.previousCacheItem = undefined;
                    return null;
                }
                const resolveValue = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromResponseCacheEntry"])({
                    ...cacheEntry,
                    isMiss: !cachedResponse
                });
                if (!resolveValue) {
                    // Unset the previous cache item if it was set.
                    if (this.minimalMode) this.previousCacheItem = undefined;
                    return null;
                }
                // For on-demand revalidate wait to resolve until cache is set.
                // Otherwise resolve now.
                if (!isOnDemandRevalidate && !resolved) {
                    resolve(resolveValue);
                    resolved = true;
                }
                // We want to persist the result only if it has a revalidate value
                // defined.
                if (typeof resolveValue.revalidate !== 'undefined') {
                    if (this.minimalMode) {
                        this.previousCacheItem = {
                            key: cacheKey,
                            entry: resolveValue,
                            expiresAt: Date.now() + 1000
                        };
                    } else {
                        await incrementalCache.set(key, resolveValue.value, {
                            revalidate: resolveValue.revalidate,
                            isRoutePPREnabled,
                            isFallback
                        });
                    }
                }
                return resolveValue;
            } catch (err) {
                // When a getStaticProps path is erroring we automatically re-set the
                // existing cache under a new expiration to prevent non-stop retrying.
                if (cachedResponse) {
                    await incrementalCache.set(key, cachedResponse.value, {
                        revalidate: Math.min(Math.max(cachedResponse.revalidate || 3, 3), 30),
                        isRoutePPREnabled,
                        isFallback
                    });
                }
                // While revalidating in the background we can't reject as we already
                // resolved the cache entry so log the error here.
                if (resolved) {
                    console.error(err);
                    return null;
                }
                // We haven't resolved yet, so let's throw to indicate an error.
                throw err;
            }
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toResponseCacheEntry"])(response);
    }
} //# sourceMappingURL=index.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/response-cache/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$batcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/batcher.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/response-cache/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/patch-fetch.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NEXT_PATCH_SYMBOL": (()=>NEXT_PATCH_SYMBOL),
    "createPatchedFetcher": (()=>createPatchedFetcher),
    "patchFetch": (()=>patchFetch),
    "validateRevalidate": (()=>validateRevalidate),
    "validateTags": (()=>validateTags)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$dedupe$2d$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/dedupe-fetch.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/response-cache/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$clone$2d$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/clone-response.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
const isEdgeRuntime = ("TURBOPACK compile-time value", "nodejs") === 'edge';
const NEXT_PATCH_SYMBOL = Symbol.for('next-patch');
function isFetchPatched() {
    return globalThis[NEXT_PATCH_SYMBOL] === true;
}
function validateRevalidate(revalidateVal, route) {
    try {
        let normalizedRevalidate = undefined;
        if (revalidateVal === false) {
            normalizedRevalidate = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INFINITE_CACHE"];
        } else if (typeof revalidateVal === 'number' && !isNaN(revalidateVal) && revalidateVal > -1) {
            normalizedRevalidate = revalidateVal;
        } else if (typeof revalidateVal !== 'undefined') {
            throw Object.defineProperty(new Error(`Invalid revalidate value "${revalidateVal}" on "${route}", must be a non-negative number or false`), "__NEXT_ERROR_CODE", {
                value: "E179",
                enumerable: false,
                configurable: true
            });
        }
        return normalizedRevalidate;
    } catch (err) {
        // handle client component error from attempting to check revalidate value
        if (err instanceof Error && err.message.includes('Invalid revalidate')) {
            throw err;
        }
        return undefined;
    }
}
function validateTags(tags, description) {
    const validTags = [];
    const invalidTags = [];
    for(let i = 0; i < tags.length; i++){
        const tag = tags[i];
        if (typeof tag !== 'string') {
            invalidTags.push({
                tag,
                reason: 'invalid type, must be a string'
            });
        } else if (tag.length > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAG_MAX_LENGTH"]) {
            invalidTags.push({
                tag,
                reason: `exceeded max length of ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAG_MAX_LENGTH"]}`
            });
        } else {
            validTags.push(tag);
        }
        if (validTags.length > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAG_MAX_ITEMS"]) {
            console.warn(`Warning: exceeded max tag count for ${description}, dropped tags:`, tags.slice(i).join(', '));
            break;
        }
    }
    if (invalidTags.length > 0) {
        console.warn(`Warning: invalid tags passed to ${description}: `);
        for (const { tag, reason } of invalidTags){
            console.log(`tag: "${tag}" ${reason}`);
        }
    }
    return validTags;
}
function trackFetchMetric(workStore, ctx) {
    var _workStore_requestEndedState;
    // If the static generation store is not available, we can't track the fetch
    if (!workStore) return;
    if ((_workStore_requestEndedState = workStore.requestEndedState) == null ? void 0 : _workStore_requestEndedState.ended) return;
    const isDebugBuild = (!!process.env.NEXT_DEBUG_BUILD || process.env.NEXT_SSG_FETCH_METRICS === '1') && workStore.isStaticGeneration;
    const isDevelopment = ("TURBOPACK compile-time value", "development") === 'development';
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    workStore.fetchMetrics ??= [];
    workStore.fetchMetrics.push({
        ...ctx,
        end: performance.timeOrigin + performance.now(),
        idx: workStore.nextFetchId || 0
    });
}
function createPatchedFetcher(originFetch, { workAsyncStorage, workUnitAsyncStorage }) {
    // Create the patched fetch function. We don't set the type here, as it's
    // verified as the return value of this function.
    const patched = async (input, init)=>{
        var _init_method, _init_next;
        let url;
        try {
            url = new URL(input instanceof Request ? input.url : input);
            url.username = '';
            url.password = '';
        } catch  {
            // Error caused by malformed URL should be handled by native fetch
            url = undefined;
        }
        const fetchUrl = (url == null ? void 0 : url.href) ?? '';
        const method = (init == null ? void 0 : (_init_method = init.method) == null ? void 0 : _init_method.toUpperCase()) || 'GET';
        // Do create a new span trace for internal fetches in the
        // non-verbose mode.
        const isInternal = (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next.internal) === true;
        const hideSpan = process.env.NEXT_OTEL_FETCH_DISABLED === '1';
        // We don't track fetch metrics for internal fetches
        // so it's not critical that we have a start time, as it won't be recorded.
        // This is to workaround a flaky issue where performance APIs might
        // not be available and will require follow-up investigation.
        const fetchStart = isInternal ? undefined : performance.timeOrigin + performance.now();
        const workStore = workAsyncStorage.getStore();
        const workUnitStore = workUnitAsyncStorage.getStore();
        // During static generation we track cache reads so we can reason about when they fill
        let cacheSignal = workUnitStore && workUnitStore.type === 'prerender' ? workUnitStore.cacheSignal : null;
        if (cacheSignal) {
            cacheSignal.beginRead();
        }
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])().trace(isInternal ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextNodeServerSpan"].internalFetch : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppRenderSpan"].fetch, {
            hideSpan,
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SpanKind"].CLIENT,
            spanName: [
                'fetch',
                method,
                fetchUrl
            ].filter(Boolean).join(' '),
            attributes: {
                'http.url': fetchUrl,
                'http.method': method,
                'net.peer.name': url == null ? void 0 : url.hostname,
                'net.peer.port': (url == null ? void 0 : url.port) || undefined
            }
        }, async ()=>{
            var _getRequestMeta;
            // If this is an internal fetch, we should not do any special treatment.
            if (isInternal) {
                return originFetch(input, init);
            }
            // If the workStore is not available, we can't do any
            // special treatment of fetch, therefore fallback to the original
            // fetch implementation.
            if (!workStore) {
                return originFetch(input, init);
            }
            // We should also fallback to the original fetch implementation if we
            // are in draft mode, it does not constitute a static generation.
            if (workStore.isDraftMode) {
                return originFetch(input, init);
            }
            const isRequestInput = input && typeof input === 'object' && typeof input.method === 'string';
            const getRequestMeta = (field)=>{
                // If request input is present but init is not, retrieve from input first.
                const value = init == null ? void 0 : init[field];
                return value || (isRequestInput ? input[field] : null);
            };
            let finalRevalidate = undefined;
            const getNextField = (field)=>{
                var _init_next, _init_next1, _input_next;
                return typeof (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next[field]) !== 'undefined' ? init == null ? void 0 : (_init_next1 = init.next) == null ? void 0 : _init_next1[field] : isRequestInput ? (_input_next = input.next) == null ? void 0 : _input_next[field] : undefined;
            };
            // RequestInit doesn't keep extra fields e.g. next so it's
            // only available if init is used separate
            let currentFetchRevalidate = getNextField('revalidate');
            const tags = validateTags(getNextField('tags') || [], `fetch ${input.toString()}`);
            const revalidateStore = workUnitStore && (workUnitStore.type === 'cache' || workUnitStore.type === 'prerender' || workUnitStore.type === 'prerender-ppr' || workUnitStore.type === 'prerender-legacy') ? workUnitStore : undefined;
            if (revalidateStore) {
                if (Array.isArray(tags)) {
                    // Collect tags onto parent caches or parent prerenders.
                    const collectedTags = revalidateStore.tags ?? (revalidateStore.tags = []);
                    for (const tag of tags){
                        if (!collectedTags.includes(tag)) {
                            collectedTags.push(tag);
                        }
                    }
                }
            }
            const implicitTags = !workUnitStore || workUnitStore.type === 'unstable-cache' ? [] : workUnitStore.implicitTags;
            // Inside unstable-cache we treat it the same as force-no-store on the
            // page.
            const pageFetchCacheMode = workUnitStore && workUnitStore.type === 'unstable-cache' ? 'force-no-store' : workStore.fetchCache;
            const isUsingNoStore = !!workStore.isUnstableNoStore;
            let currentFetchCacheConfig = getRequestMeta('cache');
            let cacheReason = '';
            let cacheWarning;
            if (typeof currentFetchCacheConfig === 'string' && typeof currentFetchRevalidate !== 'undefined') {
                // If the revalidate value conflicts with the cache value, we should warn the user and unset the conflicting values.
                const isConflictingRevalidate = currentFetchCacheConfig === 'force-cache' && currentFetchRevalidate === 0 || // revalidate: >0 or revalidate: false and cache: no-store
                currentFetchCacheConfig === 'no-store' && (currentFetchRevalidate > 0 || currentFetchRevalidate === false);
                if (isConflictingRevalidate) {
                    cacheWarning = `Specified "cache: ${currentFetchCacheConfig}" and "revalidate: ${currentFetchRevalidate}", only one should be specified.`;
                    currentFetchCacheConfig = undefined;
                    currentFetchRevalidate = undefined;
                }
            }
            const hasExplicitFetchCacheOptOut = currentFetchCacheConfig === 'no-cache' || currentFetchCacheConfig === 'no-store' || // the fetch isn't explicitly caching and the segment level cache config signals not to cache
            // note: `pageFetchCacheMode` is also set by being in an unstable_cache context.
            pageFetchCacheMode === 'force-no-store' || pageFetchCacheMode === 'only-no-store';
            // If no explicit fetch cache mode is set, but dynamic = `force-dynamic` is set,
            // we shouldn't consider caching the fetch. This is because the `dynamic` cache
            // is considered a "top-level" cache mode, whereas something like `fetchCache` is more
            // fine-grained. Top-level modes are responsible for setting reasonable defaults for the
            // other configurations.
            const noFetchConfigAndForceDynamic = !pageFetchCacheMode && !currentFetchCacheConfig && !currentFetchRevalidate && workStore.forceDynamic;
            if (// which will signal the cache to not revalidate
            currentFetchCacheConfig === 'force-cache' && typeof currentFetchRevalidate === 'undefined') {
                currentFetchRevalidate = false;
            } else if (// we shouldn't set the revalidate to 0 as it's overridden
            // by the cache context
            (workUnitStore == null ? void 0 : workUnitStore.type) !== 'cache' && (hasExplicitFetchCacheOptOut || noFetchConfigAndForceDynamic)) {
                currentFetchRevalidate = 0;
            }
            if (currentFetchCacheConfig === 'no-cache' || currentFetchCacheConfig === 'no-store') {
                cacheReason = `cache: ${currentFetchCacheConfig}`;
            }
            finalRevalidate = validateRevalidate(currentFetchRevalidate, workStore.route);
            const _headers = getRequestMeta('headers');
            const initHeaders = typeof (_headers == null ? void 0 : _headers.get) === 'function' ? _headers : new Headers(_headers || {});
            const hasUnCacheableHeader = initHeaders.get('authorization') || initHeaders.get('cookie');
            const isUnCacheableMethod = ![
                'get',
                'head'
            ].includes(((_getRequestMeta = getRequestMeta('method')) == null ? void 0 : _getRequestMeta.toLowerCase()) || 'get');
            /**
         * We automatically disable fetch caching under the following conditions:
         * - Fetch cache configs are not set. Specifically:
         *    - A page fetch cache mode is not set (export const fetchCache=...)
         *    - A fetch cache mode is not set in the fetch call (fetch(url, { cache: ... }))
         *      or the fetch cache mode is set to 'default'
         *    - A fetch revalidate value is not set in the fetch call (fetch(url, { revalidate: ... }))
         * - OR the fetch comes after a configuration that triggered dynamic rendering (e.g., reading cookies())
         *   and the fetch was considered uncacheable (e.g., POST method or has authorization headers)
         */ const hasNoExplicitCacheConfig = pageFetchCacheMode == undefined && // eslint-disable-next-line eqeqeq
            (currentFetchCacheConfig == undefined || // when considering whether to opt into the default "no-cache" fetch semantics,
            // a "default" cache config should be treated the same as no cache config
            currentFetchCacheConfig === 'default') && // eslint-disable-next-line eqeqeq
            currentFetchRevalidate == undefined;
            const autoNoCache = // eslint-disable-next-line eqeqeq
            hasNoExplicitCacheConfig && // we disable automatic no caching behavior during build time SSG so that we can still
            // leverage the fetch cache between SSG workers
            !workStore.isPrerendering || (hasUnCacheableHeader || isUnCacheableMethod) && revalidateStore && revalidateStore.revalidate === 0;
            if (hasNoExplicitCacheConfig && workUnitStore !== undefined && workUnitStore.type === 'prerender') {
                // If we have no cache config, and we're in Dynamic I/O prerendering, it'll be a dynamic call.
                // We don't have to issue that dynamic call.
                if (cacheSignal) {
                    cacheSignal.endRead();
                    cacheSignal = null;
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, 'fetch()');
            }
            switch(pageFetchCacheMode){
                case 'force-no-store':
                    {
                        cacheReason = 'fetchCache = force-no-store';
                        break;
                    }
                case 'only-no-store':
                    {
                        if (currentFetchCacheConfig === 'force-cache' || typeof finalRevalidate !== 'undefined' && finalRevalidate > 0) {
                            throw Object.defineProperty(new Error(`cache: 'force-cache' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-no-store'`), "__NEXT_ERROR_CODE", {
                                value: "E448",
                                enumerable: false,
                                configurable: true
                            });
                        }
                        cacheReason = 'fetchCache = only-no-store';
                        break;
                    }
                case 'only-cache':
                    {
                        if (currentFetchCacheConfig === 'no-store') {
                            throw Object.defineProperty(new Error(`cache: 'no-store' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-cache'`), "__NEXT_ERROR_CODE", {
                                value: "E521",
                                enumerable: false,
                                configurable: true
                            });
                        }
                        break;
                    }
                case 'force-cache':
                    {
                        if (typeof currentFetchRevalidate === 'undefined' || currentFetchRevalidate === 0) {
                            cacheReason = 'fetchCache = force-cache';
                            finalRevalidate = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INFINITE_CACHE"];
                        }
                        break;
                    }
                default:
            }
            if (typeof finalRevalidate === 'undefined') {
                if (pageFetchCacheMode === 'default-cache' && !isUsingNoStore) {
                    finalRevalidate = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INFINITE_CACHE"];
                    cacheReason = 'fetchCache = default-cache';
                } else if (pageFetchCacheMode === 'default-no-store') {
                    finalRevalidate = 0;
                    cacheReason = 'fetchCache = default-no-store';
                } else if (isUsingNoStore) {
                    finalRevalidate = 0;
                    cacheReason = 'noStore call';
                } else if (autoNoCache) {
                    finalRevalidate = 0;
                    cacheReason = 'auto no cache';
                } else {
                    // TODO: should we consider this case an invariant?
                    cacheReason = 'auto cache';
                    finalRevalidate = revalidateStore ? revalidateStore.revalidate : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INFINITE_CACHE"];
                }
            } else if (!cacheReason) {
                cacheReason = `revalidate: ${finalRevalidate}`;
            }
            if (// `revalidate: 0` values
            !(workStore.forceStatic && finalRevalidate === 0) && // we don't consider autoNoCache to switch to dynamic for ISR
            !autoNoCache && // If the revalidate value isn't currently set or the value is less
            // than the current revalidate value, we should update the revalidate
            // value.
            revalidateStore && finalRevalidate < revalidateStore.revalidate) {
                // If we were setting the revalidate value to 0, we should try to
                // postpone instead first.
                if (finalRevalidate === 0) {
                    if (workUnitStore && workUnitStore.type === 'prerender') {
                        if (cacheSignal) {
                            cacheSignal.endRead();
                            cacheSignal = null;
                        }
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, 'fetch()');
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markCurrentScopeAsDynamic"])(workStore, workUnitStore, `revalidate: 0 fetch ${input} ${workStore.route}`);
                    }
                }
                // We only want to set the revalidate store's revalidate time if it
                // was explicitly set for the fetch call, i.e. currentFetchRevalidate.
                if (revalidateStore && currentFetchRevalidate === finalRevalidate) {
                    revalidateStore.revalidate = finalRevalidate;
                }
            }
            const isCacheableRevalidate = typeof finalRevalidate === 'number' && finalRevalidate > 0;
            let cacheKey;
            const { incrementalCache } = workStore;
            const useCacheOrRequestStore = (workUnitStore == null ? void 0 : workUnitStore.type) === 'request' || (workUnitStore == null ? void 0 : workUnitStore.type) === 'cache' ? workUnitStore : undefined;
            if (incrementalCache && (isCacheableRevalidate || (useCacheOrRequestStore == null ? void 0 : useCacheOrRequestStore.serverComponentsHmrCache))) {
                try {
                    cacheKey = await incrementalCache.generateCacheKey(fetchUrl, isRequestInput ? input : init);
                } catch (err) {
                    console.error(`Failed to generate cache key for`, input);
                }
            }
            const fetchIdx = workStore.nextFetchId ?? 1;
            workStore.nextFetchId = fetchIdx + 1;
            let handleUnlock = ()=>Promise.resolve();
            const doOriginalFetch = async (isStale, cacheReasonOverride)=>{
                const requestInputFields = [
                    'cache',
                    'credentials',
                    'headers',
                    'integrity',
                    'keepalive',
                    'method',
                    'mode',
                    'redirect',
                    'referrer',
                    'referrerPolicy',
                    'window',
                    'duplex',
                    // don't pass through signal when revalidating
                    ...isStale ? [] : [
                        'signal'
                    ]
                ];
                if (isRequestInput) {
                    const reqInput = input;
                    const reqOptions = {
                        body: reqInput._ogBody || reqInput.body
                    };
                    for (const field of requestInputFields){
                        // @ts-expect-error custom fields
                        reqOptions[field] = reqInput[field];
                    }
                    input = new Request(reqInput.url, reqOptions);
                } else if (init) {
                    const { _ogBody, body, signal, ...otherInput } = init;
                    init = {
                        ...otherInput,
                        body: _ogBody || body,
                        signal: isStale ? undefined : signal
                    };
                }
                // add metadata to init without editing the original
                const clonedInit = {
                    ...init,
                    next: {
                        ...init == null ? void 0 : init.next,
                        fetchType: 'origin',
                        fetchIdx
                    }
                };
                return originFetch(input, clonedInit).then(async (res)=>{
                    if (!isStale && fetchStart) {
                        trackFetchMetric(workStore, {
                            start: fetchStart,
                            url: fetchUrl,
                            cacheReason: cacheReasonOverride || cacheReason,
                            cacheStatus: finalRevalidate === 0 || cacheReasonOverride ? 'skip' : 'miss',
                            cacheWarning,
                            status: res.status,
                            method: clonedInit.method || 'GET'
                        });
                    }
                    if (res.status === 200 && incrementalCache && cacheKey && (isCacheableRevalidate || (useCacheOrRequestStore == null ? void 0 : useCacheOrRequestStore.serverComponentsHmrCache))) {
                        const normalizedRevalidate = finalRevalidate >= __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INFINITE_CACHE"] ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CACHE_ONE_YEAR"] : finalRevalidate;
                        const externalRevalidate = finalRevalidate >= __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INFINITE_CACHE"] ? false : finalRevalidate;
                        if (workUnitStore && workUnitStore.type === 'prerender') {
                            // We are prerendering at build time or revalidate time with dynamicIO so we need to
                            // buffer the response so we can guarantee it can be read in a microtask
                            const bodyBuffer = await res.arrayBuffer();
                            const fetchedData = {
                                headers: Object.fromEntries(res.headers.entries()),
                                body: Buffer.from(bodyBuffer).toString('base64'),
                                status: res.status,
                                url: res.url
                            };
                            // We can skip checking the serverComponentsHmrCache because we aren't in
                            // dev mode.
                            await incrementalCache.set(cacheKey, {
                                kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].FETCH,
                                data: fetchedData,
                                revalidate: normalizedRevalidate
                            }, {
                                fetchCache: true,
                                revalidate: externalRevalidate,
                                fetchUrl,
                                fetchIdx,
                                tags
                            });
                            await handleUnlock();
                            // We return a new Response to the caller.
                            return new Response(bodyBuffer, {
                                headers: res.headers,
                                status: res.status,
                                statusText: res.statusText
                            });
                        } else {
                            // We're cloning the response using this utility because there
                            // exists a bug in the undici library around response cloning.
                            // See the following pull request for more details:
                            // https://github.com/vercel/next.js/pull/73274
                            const [cloned1, cloned2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$clone$2d$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cloneResponse"])(res);
                            // We are dynamically rendering including dev mode. We want to return
                            // the response to the caller as soon as possible because it might stream
                            // over a very long time.
                            cloned1.arrayBuffer().then(async (arrayBuffer)=>{
                                var _useCacheOrRequestStore_serverComponentsHmrCache;
                                const bodyBuffer = Buffer.from(arrayBuffer);
                                const fetchedData = {
                                    headers: Object.fromEntries(cloned1.headers.entries()),
                                    body: bodyBuffer.toString('base64'),
                                    status: cloned1.status,
                                    url: cloned1.url
                                };
                                useCacheOrRequestStore == null ? void 0 : (_useCacheOrRequestStore_serverComponentsHmrCache = useCacheOrRequestStore.serverComponentsHmrCache) == null ? void 0 : _useCacheOrRequestStore_serverComponentsHmrCache.set(cacheKey, fetchedData);
                                if (isCacheableRevalidate) {
                                    await incrementalCache.set(cacheKey, {
                                        kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].FETCH,
                                        data: fetchedData,
                                        revalidate: normalizedRevalidate
                                    }, {
                                        fetchCache: true,
                                        revalidate: externalRevalidate,
                                        fetchUrl,
                                        fetchIdx,
                                        tags
                                    });
                                }
                            }).catch((error)=>console.warn(`Failed to set fetch cache`, input, error)).finally(handleUnlock);
                            return cloned2;
                        }
                    }
                    // we had response that we determined shouldn't be cached so we return it
                    // and don't cache it. This also needs to unlock the cache lock we acquired.
                    await handleUnlock();
                    return res;
                }).catch((error)=>{
                    handleUnlock();
                    throw error;
                });
            };
            let cacheReasonOverride;
            let isForegroundRevalidate = false;
            let isHmrRefreshCache = false;
            if (cacheKey && incrementalCache) {
                let cachedFetchData;
                if ((useCacheOrRequestStore == null ? void 0 : useCacheOrRequestStore.isHmrRefresh) && useCacheOrRequestStore.serverComponentsHmrCache) {
                    cachedFetchData = useCacheOrRequestStore.serverComponentsHmrCache.get(cacheKey);
                    isHmrRefreshCache = true;
                }
                if (isCacheableRevalidate && !cachedFetchData) {
                    handleUnlock = await incrementalCache.lock(cacheKey);
                    const entry = workStore.isOnDemandRevalidate ? null : await incrementalCache.get(cacheKey, {
                        kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].FETCH,
                        revalidate: finalRevalidate,
                        fetchUrl,
                        fetchIdx,
                        tags,
                        softTags: implicitTags,
                        isFallback: false
                    });
                    if (hasNoExplicitCacheConfig) {
                        // We sometimes use the cache to dedupe fetches that do not specify a cache configuration
                        // In these cases we want to make sure we still exclude them from prerenders if dynamicIO is on
                        // so we introduce an artificial Task boundary here.
                        if (workUnitStore && workUnitStore.type === 'prerender') {
                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["waitAtLeastOneReactRenderTask"])();
                        }
                    }
                    if (entry) {
                        await handleUnlock();
                    } else {
                        // in dev, incremental cache response will be null in case the browser adds `cache-control: no-cache` in the request headers
                        cacheReasonOverride = 'cache-control: no-cache (hard refresh)';
                    }
                    if ((entry == null ? void 0 : entry.value) && entry.value.kind === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].FETCH) {
                        // when stale and is revalidating we wait for fresh data
                        // so the revalidated entry has the updated data
                        if (workStore.isRevalidate && entry.isStale) {
                            isForegroundRevalidate = true;
                        } else {
                            if (entry.isStale) {
                                workStore.pendingRevalidates ??= {};
                                if (!workStore.pendingRevalidates[cacheKey]) {
                                    const pendingRevalidate = doOriginalFetch(true).then(async (response)=>({
                                            body: await response.arrayBuffer(),
                                            headers: response.headers,
                                            status: response.status,
                                            statusText: response.statusText
                                        })).finally(()=>{
                                        workStore.pendingRevalidates ??= {};
                                        delete workStore.pendingRevalidates[cacheKey || ''];
                                    });
                                    // Attach the empty catch here so we don't get a "unhandled
                                    // promise rejection" warning.
                                    pendingRevalidate.catch(console.error);
                                    workStore.pendingRevalidates[cacheKey] = pendingRevalidate;
                                }
                            }
                            cachedFetchData = entry.value.data;
                        }
                    }
                }
                if (cachedFetchData) {
                    if (fetchStart) {
                        trackFetchMetric(workStore, {
                            start: fetchStart,
                            url: fetchUrl,
                            cacheReason,
                            cacheStatus: isHmrRefreshCache ? 'hmr' : 'hit',
                            cacheWarning,
                            status: cachedFetchData.status || 200,
                            method: (init == null ? void 0 : init.method) || 'GET'
                        });
                    }
                    const response = new Response(Buffer.from(cachedFetchData.body, 'base64'), {
                        headers: cachedFetchData.headers,
                        status: cachedFetchData.status
                    });
                    Object.defineProperty(response, 'url', {
                        value: cachedFetchData.url
                    });
                    return response;
                }
            }
            if (workStore.isStaticGeneration && init && typeof init === 'object') {
                const { cache } = init;
                // Delete `cache` property as Cloudflare Workers will throw an error
                if ("TURBOPACK compile-time falsy", 0) {
                    "TURBOPACK unreachable";
                }
                if (cache === 'no-store') {
                    // If enabled, we should bail out of static generation.
                    if (workUnitStore && workUnitStore.type === 'prerender') {
                        if (cacheSignal) {
                            cacheSignal.endRead();
                            cacheSignal = null;
                        }
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, 'fetch()');
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markCurrentScopeAsDynamic"])(workStore, workUnitStore, `no-store fetch ${input} ${workStore.route}`);
                    }
                }
                const hasNextConfig = 'next' in init;
                const { next = {} } = init;
                if (typeof next.revalidate === 'number' && revalidateStore && next.revalidate < revalidateStore.revalidate) {
                    if (next.revalidate === 0) {
                        // If enabled, we should bail out of static generation.
                        if (workUnitStore && workUnitStore.type === 'prerender') {
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, 'fetch()');
                        } else {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markCurrentScopeAsDynamic"])(workStore, workUnitStore, `revalidate: 0 fetch ${input} ${workStore.route}`);
                        }
                    }
                    if (!workStore.forceStatic || next.revalidate !== 0) {
                        revalidateStore.revalidate = next.revalidate;
                    }
                }
                if (hasNextConfig) delete init.next;
            }
            // if we are revalidating the whole page via time or on-demand and
            // the fetch cache entry is stale we should still de-dupe the
            // origin hit if it's a cache-able entry
            if (cacheKey && isForegroundRevalidate) {
                const pendingRevalidateKey = cacheKey;
                workStore.pendingRevalidates ??= {};
                let pendingRevalidate = workStore.pendingRevalidates[pendingRevalidateKey];
                if (pendingRevalidate) {
                    const revalidatedResult = await pendingRevalidate;
                    return new Response(revalidatedResult.body, {
                        headers: revalidatedResult.headers,
                        status: revalidatedResult.status,
                        statusText: revalidatedResult.statusText
                    });
                }
                // We used to just resolve the Response and clone it however for
                // static generation with dynamicIO we need the response to be able to
                // be resolved in a microtask and cloning the response will never have
                // a body that can resolve in a microtask in node (as observed through
                // experimentation) So instead we await the body and then when it is
                // available we construct manually cloned Response objects with the
                // body as an ArrayBuffer. This will be resolvable in a microtask
                // making it compatible with dynamicIO.
                const pendingResponse = doOriginalFetch(true, cacheReasonOverride) // We're cloning the response using this utility because there
                // exists a bug in the undici library around response cloning.
                // See the following pull request for more details:
                // https://github.com/vercel/next.js/pull/73274
                .then(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$clone$2d$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cloneResponse"]);
                pendingRevalidate = pendingResponse.then(async (responses)=>{
                    const response = responses[0];
                    return {
                        body: await response.arrayBuffer(),
                        headers: response.headers,
                        status: response.status,
                        statusText: response.statusText
                    };
                }).finally(()=>{
                    var _workStore_pendingRevalidates;
                    // If the pending revalidate is not present in the store, then
                    // we have nothing to delete.
                    if (!((_workStore_pendingRevalidates = workStore.pendingRevalidates) == null ? void 0 : _workStore_pendingRevalidates[pendingRevalidateKey])) {
                        return;
                    }
                    delete workStore.pendingRevalidates[pendingRevalidateKey];
                });
                // Attach the empty catch here so we don't get a "unhandled promise
                // rejection" warning
                pendingRevalidate.catch(()=>{});
                workStore.pendingRevalidates[pendingRevalidateKey] = pendingRevalidate;
                return pendingResponse.then((responses)=>responses[1]);
            } else {
                return doOriginalFetch(false, cacheReasonOverride);
            }
        });
        if (cacheSignal) {
            try {
                return await result;
            } finally{
                if (cacheSignal) {
                    cacheSignal.endRead();
                }
            }
        }
        return result;
    };
    // Attach the necessary properties to the patched fetch function.
    // We don't use this to determine if the fetch function has been patched,
    // but for external consumers to determine if the fetch function has been
    // patched.
    patched.__nextPatched = true;
    patched.__nextGetStaticStore = ()=>workAsyncStorage;
    patched._nextOriginalFetch = originFetch;
    globalThis[NEXT_PATCH_SYMBOL] = true;
    return patched;
}
function patchFetch(options) {
    // If we've already patched fetch, we should not patch it again.
    if (isFetchPatched()) return;
    // Grab the original fetch function. We'll attach this so we can use it in
    // the patched fetch function.
    const original = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$dedupe$2d$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDedupeFetch"])(globalThis.fetch);
    // Set the global fetch to the patched fetch.
    globalThis.fetch = createPatchedFetcher(original, options);
} //# sourceMappingURL=patch-fetch.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/error-boundary.js (client reference/proxy) <module evaluation>": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/error-boundary.js <module evaluation>"));
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/error-boundary.js (client reference/proxy)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/error-boundary.js"));
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/error-boundary.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$error$2d$boundary$2e$js__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/error-boundary.js (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$error$2d$boundary$2e$js__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/error-boundary.js (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$error$2d$boundary$2e$js__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/metadata-boundary.js (client reference/proxy) <module evaluation>": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/metadata-boundary.js <module evaluation>"));
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/metadata-boundary.js (client reference/proxy)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/metadata-boundary.js"));
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/metadata-boundary.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$boundary$2e$js__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/metadata-boundary.js (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$boundary$2e$js__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/metadata-boundary.js (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$boundary$2e$js__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-dom.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactDOM; //# sourceMappingURL=react-dom.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/rsc/preloads.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
/*

Files in the rsc directory are meant to be packaged as part of the RSC graph using next-app-loader.

*/ __turbopack_context__.s({
    "preconnect": (()=>preconnect),
    "preloadFont": (()=>preloadFont),
    "preloadStyle": (()=>preloadStyle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$dom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-dom.js [app-rsc] (ecmascript)");
;
function preloadStyle(href, crossOrigin, nonce) {
    const opts = {
        as: 'style'
    };
    if (typeof crossOrigin === 'string') {
        opts.crossOrigin = crossOrigin;
    }
    if (typeof nonce === 'string') {
        opts.nonce = nonce;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$dom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].preload(href, opts);
}
function preloadFont(href, type, crossOrigin, nonce) {
    const opts = {
        as: 'font',
        type
    };
    if (typeof crossOrigin === 'string') {
        opts.crossOrigin = crossOrigin;
    }
    if (typeof nonce === 'string') {
        opts.nonce = nonce;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$dom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].preload(href, opts);
}
function preconnect(href, crossOrigin, nonce) {
    const opts = {};
    if (typeof crossOrigin === 'string') {
        opts.crossOrigin = crossOrigin;
    }
    if (typeof nonce === 'string') {
        opts.nonce = nonce;
    }
    ;
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$dom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].preconnect(href, opts);
} //# sourceMappingURL=preloads.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/rsc/postpone.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
/*

Files in the rsc directory are meant to be packaged as part of the RSC graph using next-app-loader.

*/ // When postpone is available in canary React we can switch to importing it directly
__turbopack_context__.s({});
;
 //# sourceMappingURL=postpone.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/rsc/postpone.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$rsc$2f$postpone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/rsc/postpone.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/rsc/taint.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
/*

Files in the rsc directory are meant to be packaged as part of the RSC graph using next-app-loader.

*/ __turbopack_context__.s({
    "taintObjectReference": (()=>taintObjectReference),
    "taintUniqueValue": (()=>taintUniqueValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
function notImplemented() {
    throw Object.defineProperty(new Error('Taint can only be used with the taint flag.'), "__NEXT_ERROR_CODE", {
        value: "E354",
        enumerable: false,
        configurable: true
    });
}
const taintObjectReference = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : notImplemented;
const taintUniqueValue = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : notImplemented; //# sourceMappingURL=taint.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/compiled/react-server-dom-turbopack/cjs/react-server-dom-turbopack-client.edge.development.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-server-dom-turbopack-client.edge.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function _defineProperty(obj, key, value) {
        key in obj ? Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : obj[key] = value;
        return obj;
    }
    function resolveClientReference(bundlerConfig, metadata) {
        if (bundlerConfig) {
            var moduleExports = bundlerConfig[metadata[0]];
            if (bundlerConfig = moduleExports && moduleExports[metadata[2]]) moduleExports = bundlerConfig.name;
            else {
                bundlerConfig = moduleExports && moduleExports["*"];
                if (!bundlerConfig) throw Error('Could not find the module "' + metadata[0] + '" in the React Server Consumer Manifest. This is probably a bug in the React Server Components bundler.');
                moduleExports = metadata[2];
            }
            return 4 === metadata.length ? [
                bundlerConfig.id,
                bundlerConfig.chunks,
                moduleExports,
                1
            ] : [
                bundlerConfig.id,
                bundlerConfig.chunks,
                moduleExports
            ];
        }
        return metadata;
    }
    function resolveServerReference(bundlerConfig, id) {
        var name = "", resolvedModuleData = bundlerConfig[id];
        if (resolvedModuleData) name = resolvedModuleData.name;
        else {
            var idx = id.lastIndexOf("#");
            -1 !== idx && (name = id.slice(idx + 1), resolvedModuleData = bundlerConfig[id.slice(0, idx)]);
            if (!resolvedModuleData) throw Error('Could not find the module "' + id + '" in the React Server Manifest. This is probably a bug in the React Server Components bundler.');
        }
        return [
            resolvedModuleData.id,
            resolvedModuleData.chunks,
            name
        ];
    }
    function requireAsyncModule(id) {
        var promise = globalThis.__next_require__(id);
        if ("function" !== typeof promise.then || "fulfilled" === promise.status) return null;
        promise.then(function(value) {
            promise.status = "fulfilled";
            promise.value = value;
        }, function(reason) {
            promise.status = "rejected";
            promise.reason = reason;
        });
        return promise;
    }
    function ignoreReject() {}
    function preloadModule(metadata) {
        for(var chunks = metadata[1], promises = [], i = 0; i < chunks.length; i++){
            var chunkFilename = chunks[i], entry = chunkCache.get(chunkFilename);
            if (void 0 === entry) {
                entry = globalThis.__next_chunk_load__(chunkFilename);
                promises.push(entry);
                var resolve = chunkCache.set.bind(chunkCache, chunkFilename, null);
                entry.then(resolve, ignoreReject);
                chunkCache.set(chunkFilename, entry);
            } else null !== entry && promises.push(entry);
        }
        return 4 === metadata.length ? 0 === promises.length ? requireAsyncModule(metadata[0]) : Promise.all(promises).then(function() {
            return requireAsyncModule(metadata[0]);
        }) : 0 < promises.length ? Promise.all(promises) : null;
    }
    function requireModule(metadata) {
        var moduleExports = globalThis.__next_require__(metadata[0]);
        if (4 === metadata.length && "function" === typeof moduleExports.then) if ("fulfilled" === moduleExports.status) moduleExports = moduleExports.value;
        else throw moduleExports.reason;
        return "*" === metadata[2] ? moduleExports : "" === metadata[2] ? moduleExports.__esModule ? moduleExports.default : moduleExports : moduleExports[metadata[2]];
    }
    function prepareDestinationWithChunks(moduleLoading, chunks, nonce$jscomp$0) {
        if (null !== moduleLoading) for(var i = 0; i < chunks.length; i++){
            var nonce = nonce$jscomp$0, JSCompiler_temp_const = ReactDOMSharedInternals.d, JSCompiler_temp_const$jscomp$0 = JSCompiler_temp_const.X, JSCompiler_temp_const$jscomp$1 = moduleLoading.prefix + chunks[i];
            var JSCompiler_inline_result = moduleLoading.crossOrigin;
            JSCompiler_inline_result = "string" === typeof JSCompiler_inline_result ? "use-credentials" === JSCompiler_inline_result ? JSCompiler_inline_result : "" : void 0;
            JSCompiler_temp_const$jscomp$0.call(JSCompiler_temp_const, JSCompiler_temp_const$jscomp$1, {
                crossOrigin: JSCompiler_inline_result,
                nonce: nonce
            });
        }
    }
    function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    function isObjectPrototype(object) {
        if (!object) return !1;
        var ObjectPrototype = Object.prototype;
        if (object === ObjectPrototype) return !0;
        if (getPrototypeOf(object)) return !1;
        object = Object.getOwnPropertyNames(object);
        for(var i = 0; i < object.length; i++)if (!(object[i] in ObjectPrototype)) return !1;
        return !0;
    }
    function isSimpleObject(object) {
        if (!isObjectPrototype(getPrototypeOf(object))) return !1;
        for(var names = Object.getOwnPropertyNames(object), i = 0; i < names.length; i++){
            var descriptor = Object.getOwnPropertyDescriptor(object, names[i]);
            if (!descriptor || !descriptor.enumerable && ("key" !== names[i] && "ref" !== names[i] || "function" !== typeof descriptor.get)) return !1;
        }
        return !0;
    }
    function objectName(object) {
        return Object.prototype.toString.call(object).replace(/^\[object (.*)\]$/, function(m, p0) {
            return p0;
        });
    }
    function describeKeyForErrorMessage(key) {
        var encodedKey = JSON.stringify(key);
        return '"' + key + '"' === encodedKey ? key : encodedKey;
    }
    function describeValueForErrorMessage(value) {
        switch(typeof value){
            case "string":
                return JSON.stringify(10 >= value.length ? value : value.slice(0, 10) + "...");
            case "object":
                if (isArrayImpl(value)) return "[...]";
                if (null !== value && value.$$typeof === CLIENT_REFERENCE_TAG) return "client";
                value = objectName(value);
                return "Object" === value ? "{...}" : value;
            case "function":
                return value.$$typeof === CLIENT_REFERENCE_TAG ? "client" : (value = value.displayName || value.name) ? "function " + value : "function";
            default:
                return String(value);
        }
    }
    function describeElementType(type) {
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeElementType(type.render);
            case REACT_MEMO_TYPE:
                return describeElementType(type.type);
            case REACT_LAZY_TYPE:
                var payload = type._payload;
                type = type._init;
                try {
                    return describeElementType(type(payload));
                } catch (x) {}
        }
        return "";
    }
    function describeObjectForErrorMessage(objectOrArray, expandedName) {
        var objKind = objectName(objectOrArray);
        if ("Object" !== objKind && "Array" !== objKind) return objKind;
        var start = -1, length = 0;
        if (isArrayImpl(objectOrArray)) if (jsxChildrenParents.has(objectOrArray)) {
            var type = jsxChildrenParents.get(objectOrArray);
            objKind = "<" + describeElementType(type) + ">";
            for(var i = 0; i < objectOrArray.length; i++){
                var value = objectOrArray[i];
                value = "string" === typeof value ? value : "object" === typeof value && null !== value ? "{" + describeObjectForErrorMessage(value) + "}" : "{" + describeValueForErrorMessage(value) + "}";
                "" + i === expandedName ? (start = objKind.length, length = value.length, objKind += value) : objKind = 15 > value.length && 40 > objKind.length + value.length ? objKind + value : objKind + "{...}";
            }
            objKind += "</" + describeElementType(type) + ">";
        } else {
            objKind = "[";
            for(type = 0; type < objectOrArray.length; type++)0 < type && (objKind += ", "), i = objectOrArray[type], i = "object" === typeof i && null !== i ? describeObjectForErrorMessage(i) : describeValueForErrorMessage(i), "" + type === expandedName ? (start = objKind.length, length = i.length, objKind += i) : objKind = 10 > i.length && 40 > objKind.length + i.length ? objKind + i : objKind + "...";
            objKind += "]";
        }
        else if (objectOrArray.$$typeof === REACT_ELEMENT_TYPE) objKind = "<" + describeElementType(objectOrArray.type) + "/>";
        else {
            if (objectOrArray.$$typeof === CLIENT_REFERENCE_TAG) return "client";
            if (jsxPropsParents.has(objectOrArray)) {
                objKind = jsxPropsParents.get(objectOrArray);
                objKind = "<" + (describeElementType(objKind) || "...");
                type = Object.keys(objectOrArray);
                for(i = 0; i < type.length; i++){
                    objKind += " ";
                    value = type[i];
                    objKind += describeKeyForErrorMessage(value) + "=";
                    var _value2 = objectOrArray[value];
                    var _substr2 = value === expandedName && "object" === typeof _value2 && null !== _value2 ? describeObjectForErrorMessage(_value2) : describeValueForErrorMessage(_value2);
                    "string" !== typeof _value2 && (_substr2 = "{" + _substr2 + "}");
                    value === expandedName ? (start = objKind.length, length = _substr2.length, objKind += _substr2) : objKind = 10 > _substr2.length && 40 > objKind.length + _substr2.length ? objKind + _substr2 : objKind + "...";
                }
                objKind += ">";
            } else {
                objKind = "{";
                type = Object.keys(objectOrArray);
                for(i = 0; i < type.length; i++)0 < i && (objKind += ", "), value = type[i], objKind += describeKeyForErrorMessage(value) + ": ", _value2 = objectOrArray[value], _value2 = "object" === typeof _value2 && null !== _value2 ? describeObjectForErrorMessage(_value2) : describeValueForErrorMessage(_value2), value === expandedName ? (start = objKind.length, length = _value2.length, objKind += _value2) : objKind = 10 > _value2.length && 40 > objKind.length + _value2.length ? objKind + _value2 : objKind + "...";
                objKind += "}";
            }
        }
        return void 0 === expandedName ? objKind : -1 < start && 0 < length ? (objectOrArray = " ".repeat(start) + "^".repeat(length), "\n  " + objKind + "\n  " + objectOrArray) : "\n  " + objKind;
    }
    function serializeNumber(number) {
        return Number.isFinite(number) ? 0 === number && -Infinity === 1 / number ? "$-0" : number : Infinity === number ? "$Infinity" : -Infinity === number ? "$-Infinity" : "$NaN";
    }
    function processReply(root, formFieldPrefix, temporaryReferences, resolve, reject) {
        function serializeTypedArray(tag, typedArray) {
            typedArray = new Blob([
                new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength)
            ]);
            var blobId = nextPartId++;
            null === formData && (formData = new FormData());
            formData.append(formFieldPrefix + blobId, typedArray);
            return "$" + tag + blobId.toString(16);
        }
        function serializeBinaryReader(reader) {
            function progress(entry) {
                entry.done ? (entry = nextPartId++, data.append(formFieldPrefix + entry, new Blob(buffer)), data.append(formFieldPrefix + streamId, '"$o' + entry.toString(16) + '"'), data.append(formFieldPrefix + streamId, "C"), pendingParts--, 0 === pendingParts && resolve(data)) : (buffer.push(entry.value), reader.read(new Uint8Array(1024)).then(progress, reject));
            }
            null === formData && (formData = new FormData());
            var data = formData;
            pendingParts++;
            var streamId = nextPartId++, buffer = [];
            reader.read(new Uint8Array(1024)).then(progress, reject);
            return "$r" + streamId.toString(16);
        }
        function serializeReader(reader) {
            function progress(entry) {
                if (entry.done) data.append(formFieldPrefix + streamId, "C"), pendingParts--, 0 === pendingParts && resolve(data);
                else try {
                    var partJSON = JSON.stringify(entry.value, resolveToJSON);
                    data.append(formFieldPrefix + streamId, partJSON);
                    reader.read().then(progress, reject);
                } catch (x) {
                    reject(x);
                }
            }
            null === formData && (formData = new FormData());
            var data = formData;
            pendingParts++;
            var streamId = nextPartId++;
            reader.read().then(progress, reject);
            return "$R" + streamId.toString(16);
        }
        function serializeReadableStream(stream) {
            try {
                var binaryReader = stream.getReader({
                    mode: "byob"
                });
            } catch (x) {
                return serializeReader(stream.getReader());
            }
            return serializeBinaryReader(binaryReader);
        }
        function serializeAsyncIterable(iterable, iterator) {
            function progress(entry) {
                if (entry.done) {
                    if (void 0 === entry.value) data.append(formFieldPrefix + streamId, "C");
                    else try {
                        var partJSON = JSON.stringify(entry.value, resolveToJSON);
                        data.append(formFieldPrefix + streamId, "C" + partJSON);
                    } catch (x) {
                        reject(x);
                        return;
                    }
                    pendingParts--;
                    0 === pendingParts && resolve(data);
                } else try {
                    var _partJSON = JSON.stringify(entry.value, resolveToJSON);
                    data.append(formFieldPrefix + streamId, _partJSON);
                    iterator.next().then(progress, reject);
                } catch (x$0) {
                    reject(x$0);
                }
            }
            null === formData && (formData = new FormData());
            var data = formData;
            pendingParts++;
            var streamId = nextPartId++;
            iterable = iterable === iterator;
            iterator.next().then(progress, reject);
            return "$" + (iterable ? "x" : "X") + streamId.toString(16);
        }
        function resolveToJSON(key, value) {
            var originalValue = this[key];
            "object" !== typeof originalValue || originalValue === value || originalValue instanceof Date || ("Object" !== objectName(originalValue) ? console.error("Only plain objects can be passed to Server Functions from the Client. %s objects are not supported.%s", objectName(originalValue), describeObjectForErrorMessage(this, key)) : console.error("Only plain objects can be passed to Server Functions from the Client. Objects with toJSON methods are not supported. Convert it manually to a simple value before passing it to props.%s", describeObjectForErrorMessage(this, key)));
            if (null === value) return null;
            if ("object" === typeof value) {
                switch(value.$$typeof){
                    case REACT_ELEMENT_TYPE:
                        if (void 0 !== temporaryReferences && -1 === key.indexOf(":")) {
                            var parentReference = writtenObjects.get(this);
                            if (void 0 !== parentReference) return temporaryReferences.set(parentReference + ":" + key, value), "$T";
                        }
                        throw Error("React Element cannot be passed to Server Functions from the Client without a temporary reference set. Pass a TemporaryReferenceSet to the options." + describeObjectForErrorMessage(this, key));
                    case REACT_LAZY_TYPE:
                        originalValue = value._payload;
                        var init = value._init;
                        null === formData && (formData = new FormData());
                        pendingParts++;
                        try {
                            parentReference = init(originalValue);
                            var lazyId = nextPartId++, partJSON = serializeModel(parentReference, lazyId);
                            formData.append(formFieldPrefix + lazyId, partJSON);
                            return "$" + lazyId.toString(16);
                        } catch (x) {
                            if ("object" === typeof x && null !== x && "function" === typeof x.then) {
                                pendingParts++;
                                var _lazyId = nextPartId++;
                                parentReference = function() {
                                    try {
                                        var _partJSON2 = serializeModel(value, _lazyId), _data = formData;
                                        _data.append(formFieldPrefix + _lazyId, _partJSON2);
                                        pendingParts--;
                                        0 === pendingParts && resolve(_data);
                                    } catch (reason) {
                                        reject(reason);
                                    }
                                };
                                x.then(parentReference, parentReference);
                                return "$" + _lazyId.toString(16);
                            }
                            reject(x);
                            return null;
                        } finally{
                            pendingParts--;
                        }
                }
                if ("function" === typeof value.then) {
                    null === formData && (formData = new FormData());
                    pendingParts++;
                    var promiseId = nextPartId++;
                    value.then(function(partValue) {
                        try {
                            var _partJSON3 = serializeModel(partValue, promiseId);
                            partValue = formData;
                            partValue.append(formFieldPrefix + promiseId, _partJSON3);
                            pendingParts--;
                            0 === pendingParts && resolve(partValue);
                        } catch (reason) {
                            reject(reason);
                        }
                    }, reject);
                    return "$@" + promiseId.toString(16);
                }
                parentReference = writtenObjects.get(value);
                if (void 0 !== parentReference) if (modelRoot === value) modelRoot = null;
                else return parentReference;
                else -1 === key.indexOf(":") && (parentReference = writtenObjects.get(this), void 0 !== parentReference && (parentReference = parentReference + ":" + key, writtenObjects.set(value, parentReference), void 0 !== temporaryReferences && temporaryReferences.set(parentReference, value)));
                if (isArrayImpl(value)) return value;
                if (value instanceof FormData) {
                    null === formData && (formData = new FormData());
                    var _data3 = formData;
                    key = nextPartId++;
                    var prefix = formFieldPrefix + key + "_";
                    value.forEach(function(originalValue, originalKey) {
                        _data3.append(prefix + originalKey, originalValue);
                    });
                    return "$K" + key.toString(16);
                }
                if (value instanceof Map) return key = nextPartId++, parentReference = serializeModel(Array.from(value), key), null === formData && (formData = new FormData()), formData.append(formFieldPrefix + key, parentReference), "$Q" + key.toString(16);
                if (value instanceof Set) return key = nextPartId++, parentReference = serializeModel(Array.from(value), key), null === formData && (formData = new FormData()), formData.append(formFieldPrefix + key, parentReference), "$W" + key.toString(16);
                if (value instanceof ArrayBuffer) return key = new Blob([
                    value
                ]), parentReference = nextPartId++, null === formData && (formData = new FormData()), formData.append(formFieldPrefix + parentReference, key), "$A" + parentReference.toString(16);
                if (value instanceof Int8Array) return serializeTypedArray("O", value);
                if (value instanceof Uint8Array) return serializeTypedArray("o", value);
                if (value instanceof Uint8ClampedArray) return serializeTypedArray("U", value);
                if (value instanceof Int16Array) return serializeTypedArray("S", value);
                if (value instanceof Uint16Array) return serializeTypedArray("s", value);
                if (value instanceof Int32Array) return serializeTypedArray("L", value);
                if (value instanceof Uint32Array) return serializeTypedArray("l", value);
                if (value instanceof Float32Array) return serializeTypedArray("G", value);
                if (value instanceof Float64Array) return serializeTypedArray("g", value);
                if (value instanceof BigInt64Array) return serializeTypedArray("M", value);
                if (value instanceof BigUint64Array) return serializeTypedArray("m", value);
                if (value instanceof DataView) return serializeTypedArray("V", value);
                if ("function" === typeof Blob && value instanceof Blob) return null === formData && (formData = new FormData()), key = nextPartId++, formData.append(formFieldPrefix + key, value), "$B" + key.toString(16);
                if (parentReference = getIteratorFn(value)) return parentReference = parentReference.call(value), parentReference === value ? (key = nextPartId++, parentReference = serializeModel(Array.from(parentReference), key), null === formData && (formData = new FormData()), formData.append(formFieldPrefix + key, parentReference), "$i" + key.toString(16)) : Array.from(parentReference);
                if ("function" === typeof ReadableStream && value instanceof ReadableStream) return serializeReadableStream(value);
                parentReference = value[ASYNC_ITERATOR];
                if ("function" === typeof parentReference) return serializeAsyncIterable(value, parentReference.call(value));
                parentReference = getPrototypeOf(value);
                if (parentReference !== ObjectPrototype && (null === parentReference || null !== getPrototypeOf(parentReference))) {
                    if (void 0 === temporaryReferences) throw Error("Only plain objects, and a few built-ins, can be passed to Server Functions. Classes or null prototypes are not supported." + describeObjectForErrorMessage(this, key));
                    return "$T";
                }
                value.$$typeof === REACT_CONTEXT_TYPE ? console.error("React Context Providers cannot be passed to Server Functions from the Client.%s", describeObjectForErrorMessage(this, key)) : "Object" !== objectName(value) ? console.error("Only plain objects can be passed to Server Functions from the Client. %s objects are not supported.%s", objectName(value), describeObjectForErrorMessage(this, key)) : isSimpleObject(value) ? Object.getOwnPropertySymbols && (parentReference = Object.getOwnPropertySymbols(value), 0 < parentReference.length && console.error("Only plain objects can be passed to Server Functions from the Client. Objects with symbol properties like %s are not supported.%s", parentReference[0].description, describeObjectForErrorMessage(this, key))) : console.error("Only plain objects can be passed to Server Functions from the Client. Classes or other objects with methods are not supported.%s", describeObjectForErrorMessage(this, key));
                return value;
            }
            if ("string" === typeof value) {
                if ("Z" === value[value.length - 1] && this[key] instanceof Date) return "$D" + value;
                key = "$" === value[0] ? "$" + value : value;
                return key;
            }
            if ("boolean" === typeof value) return value;
            if ("number" === typeof value) return serializeNumber(value);
            if ("undefined" === typeof value) return "$undefined";
            if ("function" === typeof value) {
                parentReference = knownServerReferences.get(value);
                if (void 0 !== parentReference) return key = JSON.stringify(parentReference, resolveToJSON), null === formData && (formData = new FormData()), parentReference = nextPartId++, formData.set(formFieldPrefix + parentReference, key), "$F" + parentReference.toString(16);
                if (void 0 !== temporaryReferences && -1 === key.indexOf(":") && (parentReference = writtenObjects.get(this), void 0 !== parentReference)) return temporaryReferences.set(parentReference + ":" + key, value), "$T";
                throw Error("Client Functions cannot be passed directly to Server Functions. Only Functions passed from the Server can be passed back again.");
            }
            if ("symbol" === typeof value) {
                if (void 0 !== temporaryReferences && -1 === key.indexOf(":") && (parentReference = writtenObjects.get(this), void 0 !== parentReference)) return temporaryReferences.set(parentReference + ":" + key, value), "$T";
                throw Error("Symbols cannot be passed to a Server Function without a temporary reference set. Pass a TemporaryReferenceSet to the options." + describeObjectForErrorMessage(this, key));
            }
            if ("bigint" === typeof value) return "$n" + value.toString(10);
            throw Error("Type " + typeof value + " is not supported as an argument to a Server Function.");
        }
        function serializeModel(model, id) {
            "object" === typeof model && null !== model && (id = "$" + id.toString(16), writtenObjects.set(model, id), void 0 !== temporaryReferences && temporaryReferences.set(id, model));
            modelRoot = model;
            return JSON.stringify(model, resolveToJSON);
        }
        var nextPartId = 1, pendingParts = 0, formData = null, writtenObjects = new WeakMap(), modelRoot = root, json = serializeModel(root, 0);
        null === formData ? resolve(json) : (formData.set(formFieldPrefix + "0", json), 0 === pendingParts && resolve(formData));
        return function() {
            0 < pendingParts && (pendingParts = 0, null === formData ? resolve(json) : resolve(formData));
        };
    }
    function encodeFormData(reference) {
        var resolve, reject, thenable = new Promise(function(res, rej) {
            resolve = res;
            reject = rej;
        });
        processReply(reference, "", void 0, function(body) {
            if ("string" === typeof body) {
                var data = new FormData();
                data.append("0", body);
                body = data;
            }
            thenable.status = "fulfilled";
            thenable.value = body;
            resolve(body);
        }, function(e) {
            thenable.status = "rejected";
            thenable.reason = e;
            reject(e);
        });
        return thenable;
    }
    function defaultEncodeFormAction(identifierPrefix) {
        var reference = knownServerReferences.get(this);
        if (!reference) throw Error("Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.");
        var data = null;
        if (null !== reference.bound) {
            data = boundCache.get(reference);
            data || (data = encodeFormData(reference), boundCache.set(reference, data));
            if ("rejected" === data.status) throw data.reason;
            if ("fulfilled" !== data.status) throw data;
            reference = data.value;
            var prefixedData = new FormData();
            reference.forEach(function(value, key) {
                prefixedData.append("$ACTION_" + identifierPrefix + ":" + key, value);
            });
            data = prefixedData;
            reference = "$ACTION_REF_" + identifierPrefix;
        } else reference = "$ACTION_ID_" + reference.id;
        return {
            name: reference,
            method: "POST",
            encType: "multipart/form-data",
            data: data
        };
    }
    function isSignatureEqual(referenceId, numberOfBoundArgs) {
        var reference = knownServerReferences.get(this);
        if (!reference) throw Error("Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.");
        if (reference.id !== referenceId) return !1;
        var boundPromise = reference.bound;
        if (null === boundPromise) return 0 === numberOfBoundArgs;
        switch(boundPromise.status){
            case "fulfilled":
                return boundPromise.value.length === numberOfBoundArgs;
            case "pending":
                throw boundPromise;
            case "rejected":
                throw boundPromise.reason;
            default:
                throw "string" !== typeof boundPromise.status && (boundPromise.status = "pending", boundPromise.then(function(boundArgs) {
                    boundPromise.status = "fulfilled";
                    boundPromise.value = boundArgs;
                }, function(error) {
                    boundPromise.status = "rejected";
                    boundPromise.reason = error;
                })), boundPromise;
        }
    }
    function createFakeServerFunction(name, filename, sourceMap, line, col, environmentName, innerFunction) {
        name || (name = "<anonymous>");
        var encodedName = JSON.stringify(name);
        1 >= line ? (line = encodedName.length + 7, col = "s=>({" + encodedName + " ".repeat(col < line ? 0 : col - line) + ":(...args) => s(...args)})\n/* This module is a proxy to a Server Action. Turn on Source Maps to see the server source. */") : col = "/* This module is a proxy to a Server Action. Turn on Source Maps to see the server source. */" + "\n".repeat(line - 2) + "server=>({" + encodedName + ":\n" + " ".repeat(1 > col ? 0 : col - 1) + "(...args) => server(...args)})";
        filename.startsWith("/") && (filename = "file://" + filename);
        sourceMap ? (col += "\n//# sourceURL=rsc://React/" + encodeURIComponent(environmentName) + "/" + filename + "?s" + fakeServerFunctionIdx++, col += "\n//# sourceMappingURL=" + sourceMap) : filename && (col += "\n//# sourceURL=" + filename);
        try {
            return (0, eval)(col)(innerFunction)[name];
        } catch (x) {
            return innerFunction;
        }
    }
    function registerServerReference(proxy, reference$jscomp$0, encodeFormAction) {
        Object.defineProperties(proxy, {
            $$FORM_ACTION: {
                value: void 0 === encodeFormAction ? defaultEncodeFormAction : function() {
                    var reference = knownServerReferences.get(this);
                    if (!reference) throw Error("Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.");
                    var boundPromise = reference.bound;
                    null === boundPromise && (boundPromise = Promise.resolve([]));
                    return encodeFormAction(reference.id, boundPromise);
                }
            },
            $$IS_SIGNATURE_EQUAL: {
                value: isSignatureEqual
            },
            bind: {
                value: bind
            }
        });
        knownServerReferences.set(proxy, reference$jscomp$0);
    }
    function bind() {
        var newFn = FunctionBind.apply(this, arguments), reference = knownServerReferences.get(this);
        if (reference) {
            null != arguments[0] && console.error('Cannot bind "this" of a Server Action. Pass null or undefined as the first argument to .bind().');
            var args = ArraySlice.call(arguments, 1), boundPromise = null;
            boundPromise = null !== reference.bound ? Promise.resolve(reference.bound).then(function(boundArgs) {
                return boundArgs.concat(args);
            }) : Promise.resolve(args);
            Object.defineProperties(newFn, {
                $$FORM_ACTION: {
                    value: this.$$FORM_ACTION
                },
                $$IS_SIGNATURE_EQUAL: {
                    value: isSignatureEqual
                },
                bind: {
                    value: bind
                }
            });
            knownServerReferences.set(newFn, {
                id: reference.id,
                bound: boundPromise
            });
        }
        return newFn;
    }
    function createBoundServerReference(metaData, callServer, encodeFormAction, findSourceMapURL) {
        function action() {
            var args = Array.prototype.slice.call(arguments);
            return bound ? "fulfilled" === bound.status ? callServer(id, bound.value.concat(args)) : Promise.resolve(bound).then(function(boundArgs) {
                return callServer(id, boundArgs.concat(args));
            }) : callServer(id, args);
        }
        var id = metaData.id, bound = metaData.bound, location = metaData.location;
        if (location) {
            var functionName = metaData.name || "", filename = location[1], line = location[2];
            location = location[3];
            metaData = metaData.env || "Server";
            findSourceMapURL = null == findSourceMapURL ? null : findSourceMapURL(filename, metaData);
            action = createFakeServerFunction(functionName, filename, findSourceMapURL, line, location, metaData, action);
        }
        registerServerReference(action, {
            id: id,
            bound: bound
        }, encodeFormAction);
        return action;
    }
    function parseStackLocation(error) {
        error = error.stack;
        error.startsWith("Error: react-stack-top-frame\n") && (error = error.slice(29));
        var endOfFirst = error.indexOf("\n");
        if (-1 !== endOfFirst) {
            var endOfSecond = error.indexOf("\n", endOfFirst + 1);
            endOfFirst = -1 === endOfSecond ? error.slice(endOfFirst + 1) : error.slice(endOfFirst + 1, endOfSecond);
        } else endOfFirst = error;
        error = v8FrameRegExp.exec(endOfFirst);
        if (!error && (error = jscSpiderMonkeyFrameRegExp.exec(endOfFirst), !error)) return null;
        endOfFirst = error[1] || "";
        "<anonymous>" === endOfFirst && (endOfFirst = "");
        endOfSecond = error[2] || error[5] || "";
        "<anonymous>" === endOfSecond && (endOfSecond = "");
        return [
            endOfFirst,
            endOfSecond,
            +(error[3] || error[6]),
            +(error[4] || error[7])
        ];
    }
    function createServerReference$1(id, callServer, encodeFormAction, findSourceMapURL, functionName) {
        function action() {
            var args = Array.prototype.slice.call(arguments);
            return callServer(id, args);
        }
        var location = parseStackLocation(Error("react-stack-top-frame"));
        if (null !== location) {
            var filename = location[1], line = location[2];
            location = location[3];
            findSourceMapURL = null == findSourceMapURL ? null : findSourceMapURL(filename, "Client");
            action = createFakeServerFunction(functionName || "", filename, findSourceMapURL, line, location, "Client", action);
        }
        registerServerReference(action, {
            id: id,
            bound: null
        }, encodeFormAction);
        return action;
    }
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function prepareStackTrace(error, structuredStackTrace) {
        error = (error.name || "Error") + ": " + (error.message || "");
        for(var i = 0; i < structuredStackTrace.length; i++)error += "\n    at " + structuredStackTrace[i].toString();
        return error;
    }
    function ReactPromise(status, value, reason, response) {
        this.status = status;
        this.value = value;
        this.reason = reason;
        this._response = response;
        this._debugInfo = null;
    }
    function readChunk(chunk) {
        switch(chunk.status){
            case "resolved_model":
                initializeModelChunk(chunk);
                break;
            case "resolved_module":
                initializeModuleChunk(chunk);
        }
        switch(chunk.status){
            case "fulfilled":
                return chunk.value;
            case "pending":
            case "blocked":
                throw chunk;
            default:
                throw chunk.reason;
        }
    }
    function createPendingChunk(response) {
        return new ReactPromise("pending", null, null, response);
    }
    function wakeChunk(listeners, value) {
        for(var i = 0; i < listeners.length; i++)(0, listeners[i])(value);
    }
    function wakeChunkIfInitialized(chunk, resolveListeners, rejectListeners) {
        switch(chunk.status){
            case "fulfilled":
                wakeChunk(resolveListeners, chunk.value);
                break;
            case "pending":
            case "blocked":
                if (chunk.value) for(var i = 0; i < resolveListeners.length; i++)chunk.value.push(resolveListeners[i]);
                else chunk.value = resolveListeners;
                if (chunk.reason) {
                    if (rejectListeners) for(resolveListeners = 0; resolveListeners < rejectListeners.length; resolveListeners++)chunk.reason.push(rejectListeners[resolveListeners]);
                } else chunk.reason = rejectListeners;
                break;
            case "rejected":
                rejectListeners && wakeChunk(rejectListeners, chunk.reason);
        }
    }
    function triggerErrorOnChunk(chunk, error) {
        if ("pending" !== chunk.status && "blocked" !== chunk.status) chunk.reason.error(error);
        else {
            var listeners = chunk.reason;
            chunk.status = "rejected";
            chunk.reason = error;
            null !== listeners && wakeChunk(listeners, error);
        }
    }
    function createResolvedIteratorResultChunk(response, value, done) {
        return new ReactPromise("resolved_model", (done ? '{"done":true,"value":' : '{"done":false,"value":') + value + "}", null, response);
    }
    function resolveIteratorResultChunk(chunk, value, done) {
        resolveModelChunk(chunk, (done ? '{"done":true,"value":' : '{"done":false,"value":') + value + "}");
    }
    function resolveModelChunk(chunk, value) {
        if ("pending" !== chunk.status) chunk.reason.enqueueModel(value);
        else {
            var resolveListeners = chunk.value, rejectListeners = chunk.reason;
            chunk.status = "resolved_model";
            chunk.value = value;
            null !== resolveListeners && (initializeModelChunk(chunk), wakeChunkIfInitialized(chunk, resolveListeners, rejectListeners));
        }
    }
    function resolveModuleChunk(chunk, value) {
        if ("pending" === chunk.status || "blocked" === chunk.status) {
            var resolveListeners = chunk.value, rejectListeners = chunk.reason;
            chunk.status = "resolved_module";
            chunk.value = value;
            null !== resolveListeners && (initializeModuleChunk(chunk), wakeChunkIfInitialized(chunk, resolveListeners, rejectListeners));
        }
    }
    function initializeModelChunk(chunk) {
        var prevHandler = initializingHandler;
        initializingHandler = null;
        var resolvedModel = chunk.value;
        chunk.status = "blocked";
        chunk.value = null;
        chunk.reason = null;
        try {
            var value = JSON.parse(resolvedModel, chunk._response._fromJSON), resolveListeners = chunk.value;
            null !== resolveListeners && (chunk.value = null, chunk.reason = null, wakeChunk(resolveListeners, value));
            if (null !== initializingHandler) {
                if (initializingHandler.errored) throw initializingHandler.value;
                if (0 < initializingHandler.deps) {
                    initializingHandler.value = value;
                    initializingHandler.chunk = chunk;
                    return;
                }
            }
            chunk.status = "fulfilled";
            chunk.value = value;
        } catch (error) {
            chunk.status = "rejected", chunk.reason = error;
        } finally{
            initializingHandler = prevHandler;
        }
    }
    function initializeModuleChunk(chunk) {
        try {
            var value = requireModule(chunk.value);
            chunk.status = "fulfilled";
            chunk.value = value;
        } catch (error) {
            chunk.status = "rejected", chunk.reason = error;
        }
    }
    function reportGlobalError(response, error) {
        response._closed = !0;
        response._closedReason = error;
        response._chunks.forEach(function(chunk) {
            "pending" === chunk.status && triggerErrorOnChunk(chunk, error);
        });
    }
    function nullRefGetter() {
        return null;
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("function" === typeof type) return '"use client"';
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return type._init === readChunk ? '"use client"' : "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function createLazyChunkWrapper(chunk) {
        var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: chunk,
            _init: readChunk
        };
        chunk = chunk._debugInfo || (chunk._debugInfo = []);
        lazyType._debugInfo = chunk;
        return lazyType;
    }
    function getChunk(response, id) {
        var chunks = response._chunks, chunk = chunks.get(id);
        chunk || (chunk = response._closed ? new ReactPromise("rejected", null, response._closedReason, response) : createPendingChunk(response), chunks.set(id, chunk));
        return chunk;
    }
    function waitForReference(referencedChunk, parentObject, key, response, map, path) {
        function fulfill(value) {
            for(var i = 1; i < path.length; i++){
                for(; value.$$typeof === REACT_LAZY_TYPE;)if (value = value._payload, value === handler.chunk) value = handler.value;
                else if ("fulfilled" === value.status) value = value.value;
                else {
                    path.splice(0, i - 1);
                    value.then(fulfill, reject);
                    return;
                }
                value = value[path[i]];
            }
            i = map(response, value, parentObject, key);
            parentObject[key] = i;
            "" === key && null === handler.value && (handler.value = i);
            if (parentObject[0] === REACT_ELEMENT_TYPE && "object" === typeof handler.value && null !== handler.value && handler.value.$$typeof === REACT_ELEMENT_TYPE) switch(value = handler.value, key){
                case "3":
                    value.props = i;
                    break;
                case "4":
                    value._owner = i;
            }
            handler.deps--;
            0 === handler.deps && (i = handler.chunk, null !== i && "blocked" === i.status && (value = i.value, i.status = "fulfilled", i.value = handler.value, null !== value && wakeChunk(value, handler.value)));
        }
        function reject(error) {
            if (!handler.errored) {
                var blockedValue = handler.value;
                handler.errored = !0;
                handler.value = error;
                var chunk = handler.chunk;
                if (null !== chunk && "blocked" === chunk.status) {
                    if ("object" === typeof blockedValue && null !== blockedValue && blockedValue.$$typeof === REACT_ELEMENT_TYPE) {
                        var erroredComponent = {
                            name: getComponentNameFromType(blockedValue.type) || "",
                            owner: blockedValue._owner
                        };
                        erroredComponent.debugStack = blockedValue._debugStack;
                        supportsCreateTask && (erroredComponent.debugTask = blockedValue._debugTask);
                        (chunk._debugInfo || (chunk._debugInfo = [])).push(erroredComponent);
                    }
                    triggerErrorOnChunk(chunk, error);
                }
            }
        }
        if (initializingHandler) {
            var handler = initializingHandler;
            handler.deps++;
        } else handler = initializingHandler = {
            parent: null,
            chunk: null,
            value: null,
            deps: 1,
            errored: !1
        };
        referencedChunk.then(fulfill, reject);
        return null;
    }
    function loadServerReference(response, metaData, parentObject, key) {
        if (!response._serverReferenceConfig) return createBoundServerReference(metaData, response._callServer, response._encodeFormAction, response._debugFindSourceMapURL);
        var serverReference = resolveServerReference(response._serverReferenceConfig, metaData.id);
        if (response = preloadModule(serverReference)) metaData.bound && (response = Promise.all([
            response,
            metaData.bound
        ]));
        else if (metaData.bound) response = Promise.resolve(metaData.bound);
        else return requireModule(serverReference);
        if (initializingHandler) {
            var handler = initializingHandler;
            handler.deps++;
        } else handler = initializingHandler = {
            parent: null,
            chunk: null,
            value: null,
            deps: 1,
            errored: !1
        };
        response.then(function() {
            var resolvedValue = requireModule(serverReference);
            if (metaData.bound) {
                var boundArgs = metaData.bound.value.slice(0);
                boundArgs.unshift(null);
                resolvedValue = resolvedValue.bind.apply(resolvedValue, boundArgs);
            }
            parentObject[key] = resolvedValue;
            "" === key && null === handler.value && (handler.value = resolvedValue);
            if (parentObject[0] === REACT_ELEMENT_TYPE && "object" === typeof handler.value && null !== handler.value && handler.value.$$typeof === REACT_ELEMENT_TYPE) switch(boundArgs = handler.value, key){
                case "3":
                    boundArgs.props = resolvedValue;
                    break;
                case "4":
                    boundArgs._owner = resolvedValue;
            }
            handler.deps--;
            0 === handler.deps && (resolvedValue = handler.chunk, null !== resolvedValue && "blocked" === resolvedValue.status && (boundArgs = resolvedValue.value, resolvedValue.status = "fulfilled", resolvedValue.value = handler.value, null !== boundArgs && wakeChunk(boundArgs, handler.value)));
        }, function(error) {
            if (!handler.errored) {
                var blockedValue = handler.value;
                handler.errored = !0;
                handler.value = error;
                var chunk = handler.chunk;
                if (null !== chunk && "blocked" === chunk.status) {
                    if ("object" === typeof blockedValue && null !== blockedValue && blockedValue.$$typeof === REACT_ELEMENT_TYPE) {
                        var erroredComponent = {
                            name: getComponentNameFromType(blockedValue.type) || "",
                            owner: blockedValue._owner
                        };
                        erroredComponent.debugStack = blockedValue._debugStack;
                        supportsCreateTask && (erroredComponent.debugTask = blockedValue._debugTask);
                        (chunk._debugInfo || (chunk._debugInfo = [])).push(erroredComponent);
                    }
                    triggerErrorOnChunk(chunk, error);
                }
            }
        });
        return null;
    }
    function getOutlinedModel(response, reference, parentObject, key, map) {
        reference = reference.split(":");
        var id = parseInt(reference[0], 16);
        id = getChunk(response, id);
        switch(id.status){
            case "resolved_model":
                initializeModelChunk(id);
                break;
            case "resolved_module":
                initializeModuleChunk(id);
        }
        switch(id.status){
            case "fulfilled":
                for(var value = id.value, i = 1; i < reference.length; i++){
                    for(; value.$$typeof === REACT_LAZY_TYPE;)if (value = value._payload, "fulfilled" === value.status) value = value.value;
                    else return waitForReference(value, parentObject, key, response, map, reference.slice(i - 1));
                    value = value[reference[i]];
                }
                response = map(response, value, parentObject, key);
                id._debugInfo && ("object" !== typeof response || null === response || !isArrayImpl(response) && "function" !== typeof response[ASYNC_ITERATOR] && response.$$typeof !== REACT_ELEMENT_TYPE || response._debugInfo || Object.defineProperty(response, "_debugInfo", {
                    configurable: !1,
                    enumerable: !1,
                    writable: !0,
                    value: id._debugInfo
                }));
                return response;
            case "pending":
            case "blocked":
                return waitForReference(id, parentObject, key, response, map, reference);
            default:
                return initializingHandler ? (initializingHandler.errored = !0, initializingHandler.value = id.reason) : initializingHandler = {
                    parent: null,
                    chunk: null,
                    value: id.reason,
                    deps: 0,
                    errored: !0
                }, null;
        }
    }
    function createMap(response, model) {
        return new Map(model);
    }
    function createSet(response, model) {
        return new Set(model);
    }
    function createBlob(response, model) {
        return new Blob(model.slice(1), {
            type: model[0]
        });
    }
    function createFormData(response, model) {
        response = new FormData();
        for(var i = 0; i < model.length; i++)response.append(model[i][0], model[i][1]);
        return response;
    }
    function extractIterator(response, model) {
        return model[Symbol.iterator]();
    }
    function createModel(response, model) {
        return model;
    }
    function parseModelString(response, parentObject, key, value) {
        if ("$" === value[0]) {
            if ("$" === value) return null !== initializingHandler && "0" === key && (initializingHandler = {
                parent: initializingHandler,
                chunk: null,
                value: null,
                deps: 0,
                errored: !1
            }), REACT_ELEMENT_TYPE;
            switch(value[1]){
                case "$":
                    return value.slice(1);
                case "L":
                    return parentObject = parseInt(value.slice(2), 16), response = getChunk(response, parentObject), createLazyChunkWrapper(response);
                case "@":
                    if (2 === value.length) return new Promise(function() {});
                    parentObject = parseInt(value.slice(2), 16);
                    return getChunk(response, parentObject);
                case "S":
                    return Symbol.for(value.slice(2));
                case "F":
                    return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, loadServerReference);
                case "T":
                    parentObject = "$" + value.slice(2);
                    response = response._tempRefs;
                    if (null == response) throw Error("Missing a temporary reference set but the RSC response returned a temporary reference. Pass a temporaryReference option with the set that was used with the reply.");
                    return response.get(parentObject);
                case "Q":
                    return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, createMap);
                case "W":
                    return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, createSet);
                case "B":
                    return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, createBlob);
                case "K":
                    return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, createFormData);
                case "Z":
                    return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, resolveErrorDev);
                case "i":
                    return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, extractIterator);
                case "I":
                    return Infinity;
                case "-":
                    return "$-0" === value ? -0 : -Infinity;
                case "N":
                    return NaN;
                case "u":
                    return;
                case "D":
                    return new Date(Date.parse(value.slice(2)));
                case "n":
                    return BigInt(value.slice(2));
                case "E":
                    try {
                        return (0, eval)(value.slice(2));
                    } catch (x) {
                        return function() {};
                    }
                case "Y":
                    return Object.defineProperty(parentObject, key, {
                        get: function() {
                            return "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.";
                        },
                        enumerable: !0,
                        configurable: !1
                    }), null;
                default:
                    return value = value.slice(1), getOutlinedModel(response, value, parentObject, key, createModel);
            }
        }
        return value;
    }
    function missingCall() {
        throw Error('Trying to call a function from "use server" but the callServer option was not implemented in your router runtime.');
    }
    function ResponseInstance(bundlerConfig, serverReferenceConfig, moduleLoading, callServer, encodeFormAction, nonce, temporaryReferences, findSourceMapURL, replayConsole, environmentName) {
        var chunks = new Map();
        this._bundlerConfig = bundlerConfig;
        this._serverReferenceConfig = serverReferenceConfig;
        this._moduleLoading = moduleLoading;
        this._callServer = void 0 !== callServer ? callServer : missingCall;
        this._encodeFormAction = encodeFormAction;
        this._nonce = nonce;
        this._chunks = chunks;
        this._stringDecoder = new TextDecoder();
        this._fromJSON = null;
        this._rowLength = this._rowTag = this._rowID = this._rowState = 0;
        this._buffer = [];
        this._closed = !1;
        this._closedReason = null;
        this._tempRefs = temporaryReferences;
        this._debugRootOwner = bundlerConfig = void 0 === ReactSharedInteralsServer || null === ReactSharedInteralsServer.A ? null : ReactSharedInteralsServer.A.getOwner();
        this._debugRootStack = null !== bundlerConfig ? Error("react-stack-top-frame") : null;
        environmentName = void 0 === environmentName ? "Server" : environmentName;
        supportsCreateTask && (this._debugRootTask = console.createTask('"use ' + environmentName.toLowerCase() + '"'));
        this._debugFindSourceMapURL = findSourceMapURL;
        this._replayConsole = replayConsole;
        this._rootEnvironmentName = environmentName;
        this._fromJSON = createFromJSONCallback(this);
    }
    function resolveModel(response, id, model) {
        var chunks = response._chunks, chunk = chunks.get(id);
        chunk ? resolveModelChunk(chunk, model) : chunks.set(id, new ReactPromise("resolved_model", model, null, response));
    }
    function resolveText(response, id, text) {
        var chunks = response._chunks, chunk = chunks.get(id);
        chunk && "pending" !== chunk.status ? chunk.reason.enqueueValue(text) : chunks.set(id, new ReactPromise("fulfilled", text, null, response));
    }
    function resolveBuffer(response, id, buffer) {
        var chunks = response._chunks, chunk = chunks.get(id);
        chunk && "pending" !== chunk.status ? chunk.reason.enqueueValue(buffer) : chunks.set(id, new ReactPromise("fulfilled", buffer, null, response));
    }
    function resolveModule(response, id, model) {
        var chunks = response._chunks, chunk = chunks.get(id);
        model = JSON.parse(model, response._fromJSON);
        var clientReference = resolveClientReference(response._bundlerConfig, model);
        prepareDestinationWithChunks(response._moduleLoading, model[1], response._nonce);
        if (model = preloadModule(clientReference)) {
            if (chunk) {
                var blockedChunk = chunk;
                blockedChunk.status = "blocked";
            } else blockedChunk = new ReactPromise("blocked", null, null, response), chunks.set(id, blockedChunk);
            model.then(function() {
                return resolveModuleChunk(blockedChunk, clientReference);
            }, function(error) {
                return triggerErrorOnChunk(blockedChunk, error);
            });
        } else chunk ? resolveModuleChunk(chunk, clientReference) : chunks.set(id, new ReactPromise("resolved_module", clientReference, null, response));
    }
    function resolveStream(response, id, stream, controller) {
        var chunks = response._chunks, chunk = chunks.get(id);
        chunk ? "pending" === chunk.status && (response = chunk.value, chunk.status = "fulfilled", chunk.value = stream, chunk.reason = controller, null !== response && wakeChunk(response, chunk.value)) : chunks.set(id, new ReactPromise("fulfilled", stream, controller, response));
    }
    function startReadableStream(response, id, type) {
        var controller = null;
        type = new ReadableStream({
            type: type,
            start: function(c) {
                controller = c;
            }
        });
        var previousBlockedChunk = null;
        resolveStream(response, id, type, {
            enqueueValue: function(value) {
                null === previousBlockedChunk ? controller.enqueue(value) : previousBlockedChunk.then(function() {
                    controller.enqueue(value);
                });
            },
            enqueueModel: function(json) {
                if (null === previousBlockedChunk) {
                    var chunk = new ReactPromise("resolved_model", json, null, response);
                    initializeModelChunk(chunk);
                    "fulfilled" === chunk.status ? controller.enqueue(chunk.value) : (chunk.then(function(v) {
                        return controller.enqueue(v);
                    }, function(e) {
                        return controller.error(e);
                    }), previousBlockedChunk = chunk);
                } else {
                    chunk = previousBlockedChunk;
                    var _chunk3 = createPendingChunk(response);
                    _chunk3.then(function(v) {
                        return controller.enqueue(v);
                    }, function(e) {
                        return controller.error(e);
                    });
                    previousBlockedChunk = _chunk3;
                    chunk.then(function() {
                        previousBlockedChunk === _chunk3 && (previousBlockedChunk = null);
                        resolveModelChunk(_chunk3, json);
                    });
                }
            },
            close: function() {
                if (null === previousBlockedChunk) controller.close();
                else {
                    var blockedChunk = previousBlockedChunk;
                    previousBlockedChunk = null;
                    blockedChunk.then(function() {
                        return controller.close();
                    });
                }
            },
            error: function(error) {
                if (null === previousBlockedChunk) controller.error(error);
                else {
                    var blockedChunk = previousBlockedChunk;
                    previousBlockedChunk = null;
                    blockedChunk.then(function() {
                        return controller.error(error);
                    });
                }
            }
        });
    }
    function asyncIterator() {
        return this;
    }
    function createIterator(next) {
        next = {
            next: next
        };
        next[ASYNC_ITERATOR] = asyncIterator;
        return next;
    }
    function startAsyncIterable(response, id, iterator) {
        var buffer = [], closed = !1, nextWriteIndex = 0, iterable = _defineProperty({}, ASYNC_ITERATOR, function() {
            var nextReadIndex = 0;
            return createIterator(function(arg) {
                if (void 0 !== arg) throw Error("Values cannot be passed to next() of AsyncIterables passed to Client Components.");
                if (nextReadIndex === buffer.length) {
                    if (closed) return new ReactPromise("fulfilled", {
                        done: !0,
                        value: void 0
                    }, null, response);
                    buffer[nextReadIndex] = createPendingChunk(response);
                }
                return buffer[nextReadIndex++];
            });
        });
        resolveStream(response, id, iterator ? iterable[ASYNC_ITERATOR]() : iterable, {
            enqueueValue: function(value) {
                if (nextWriteIndex === buffer.length) buffer[nextWriteIndex] = new ReactPromise("fulfilled", {
                    done: !1,
                    value: value
                }, null, response);
                else {
                    var chunk = buffer[nextWriteIndex], resolveListeners = chunk.value, rejectListeners = chunk.reason;
                    chunk.status = "fulfilled";
                    chunk.value = {
                        done: !1,
                        value: value
                    };
                    null !== resolveListeners && wakeChunkIfInitialized(chunk, resolveListeners, rejectListeners);
                }
                nextWriteIndex++;
            },
            enqueueModel: function(value) {
                nextWriteIndex === buffer.length ? buffer[nextWriteIndex] = createResolvedIteratorResultChunk(response, value, !1) : resolveIteratorResultChunk(buffer[nextWriteIndex], value, !1);
                nextWriteIndex++;
            },
            close: function(value) {
                closed = !0;
                nextWriteIndex === buffer.length ? buffer[nextWriteIndex] = createResolvedIteratorResultChunk(response, value, !0) : resolveIteratorResultChunk(buffer[nextWriteIndex], value, !0);
                for(nextWriteIndex++; nextWriteIndex < buffer.length;)resolveIteratorResultChunk(buffer[nextWriteIndex++], '"$undefined"', !0);
            },
            error: function(error) {
                closed = !0;
                for(nextWriteIndex === buffer.length && (buffer[nextWriteIndex] = createPendingChunk(response)); nextWriteIndex < buffer.length;)triggerErrorOnChunk(buffer[nextWriteIndex++], error);
            }
        });
    }
    function stopStream(response, id, row) {
        (response = response._chunks.get(id)) && "fulfilled" === response.status && response.reason.close("" === row ? '"$undefined"' : row);
    }
    function resolveErrorDev(response, errorInfo) {
        var name = errorInfo.name, env = errorInfo.env;
        errorInfo = buildFakeCallStack(response, errorInfo.stack, env, Error.bind(null, errorInfo.message || "An error occurred in the Server Components render but no message was provided"));
        response = getRootTask(response, env);
        response = null != response ? response.run(errorInfo) : errorInfo();
        response.name = name;
        response.environmentName = env;
        return response;
    }
    function resolveHint(response, code, model) {
        response = JSON.parse(model, response._fromJSON);
        model = ReactDOMSharedInternals.d;
        switch(code){
            case "D":
                model.D(response);
                break;
            case "C":
                "string" === typeof response ? model.C(response) : model.C(response[0], response[1]);
                break;
            case "L":
                code = response[0];
                var as = response[1];
                3 === response.length ? model.L(code, as, response[2]) : model.L(code, as);
                break;
            case "m":
                "string" === typeof response ? model.m(response) : model.m(response[0], response[1]);
                break;
            case "X":
                "string" === typeof response ? model.X(response) : model.X(response[0], response[1]);
                break;
            case "S":
                "string" === typeof response ? model.S(response) : model.S(response[0], 0 === response[1] ? void 0 : response[1], 3 === response.length ? response[2] : void 0);
                break;
            case "M":
                "string" === typeof response ? model.M(response) : model.M(response[0], response[1]);
        }
    }
    function createFakeFunction(name, filename, sourceMap, line, col, environmentName) {
        name || (name = "<anonymous>");
        var encodedName = JSON.stringify(name);
        1 >= line ? (line = encodedName.length + 7, col = "({" + encodedName + ":_=>" + " ".repeat(col < line ? 0 : col - line) + "_()})\n/* This module was rendered by a Server Component. Turn on Source Maps to see the server source. */") : col = "/* This module was rendered by a Server Component. Turn on Source Maps to see the server source. */" + "\n".repeat(line - 2) + "({" + encodedName + ":_=>\n" + " ".repeat(1 > col ? 0 : col - 1) + "_()})";
        filename.startsWith("/") && (filename = "file://" + filename);
        sourceMap ? (col += "\n//# sourceURL=rsc://React/" + encodeURIComponent(environmentName) + "/" + encodeURI(filename) + "?" + fakeFunctionIdx++, col += "\n//# sourceMappingURL=" + sourceMap) : col = filename ? col + ("\n//# sourceURL=" + encodeURI(filename)) : col + "\n//# sourceURL=<anonymous>";
        try {
            var fn = (0, eval)(col)[name];
        } catch (x) {
            fn = function(_) {
                return _();
            };
        }
        return fn;
    }
    function buildFakeCallStack(response, stack, environmentName, innerCall) {
        for(var i = 0; i < stack.length; i++){
            var frame = stack[i], frameKey = frame.join("-") + "-" + environmentName, fn = fakeFunctionCache.get(frameKey);
            if (void 0 === fn) {
                fn = frame[0];
                var filename = frame[1], line = frame[2];
                frame = frame[3];
                var findSourceMapURL = response._debugFindSourceMapURL;
                findSourceMapURL = findSourceMapURL ? findSourceMapURL(filename, environmentName) : null;
                fn = createFakeFunction(fn, filename, findSourceMapURL, line, frame, environmentName);
                fakeFunctionCache.set(frameKey, fn);
            }
            innerCall = fn.bind(null, innerCall);
        }
        return innerCall;
    }
    function getRootTask(response, childEnvironmentName) {
        var rootTask = response._debugRootTask;
        return rootTask ? response._rootEnvironmentName !== childEnvironmentName ? (response = console.createTask.bind(console, '"use ' + childEnvironmentName.toLowerCase() + '"'), rootTask.run(response)) : rootTask : null;
    }
    function initializeFakeTask(response, debugInfo, childEnvironmentName) {
        if (!supportsCreateTask || null == debugInfo.stack) return null;
        var stack = debugInfo.stack, env = null == debugInfo.env ? response._rootEnvironmentName : debugInfo.env;
        if (env !== childEnvironmentName) return debugInfo = null == debugInfo.owner ? null : initializeFakeTask(response, debugInfo.owner, env), buildFakeTask(response, debugInfo, stack, '"use ' + childEnvironmentName.toLowerCase() + '"', env);
        childEnvironmentName = debugInfo.debugTask;
        if (void 0 !== childEnvironmentName) return childEnvironmentName;
        childEnvironmentName = null == debugInfo.owner ? null : initializeFakeTask(response, debugInfo.owner, env);
        return debugInfo.debugTask = buildFakeTask(response, childEnvironmentName, stack, "<" + (debugInfo.name || "...") + ">", env);
    }
    function buildFakeTask(response, ownerTask, stack, taskName, env) {
        taskName = console.createTask.bind(console, taskName);
        stack = buildFakeCallStack(response, stack, env, taskName);
        return null === ownerTask ? (response = getRootTask(response, env), null != response ? response.run(stack) : stack()) : ownerTask.run(stack);
    }
    function fakeJSXCallSite() {
        return Error("react-stack-top-frame");
    }
    function initializeFakeStack(response, debugInfo) {
        void 0 === debugInfo.debugStack && (null != debugInfo.stack && (debugInfo.debugStack = createFakeJSXCallStackInDEV(response, debugInfo.stack, null == debugInfo.env ? "" : debugInfo.env)), null != debugInfo.owner && initializeFakeStack(response, debugInfo.owner));
    }
    function resolveDebugInfo(response, id, debugInfo) {
        var env = void 0 === debugInfo.env ? response._rootEnvironmentName : debugInfo.env;
        void 0 !== debugInfo.stack && initializeFakeTask(response, debugInfo, env);
        null === debugInfo.owner && null != response._debugRootOwner ? (debugInfo.owner = response._debugRootOwner, debugInfo.debugStack = response._debugRootStack) : void 0 !== debugInfo.stack && initializeFakeStack(response, debugInfo);
        response = getChunk(response, id);
        (response._debugInfo || (response._debugInfo = [])).push(debugInfo);
    }
    function getCurrentStackInDEV() {
        var owner = currentOwnerInDEV;
        if (null === owner) return "";
        try {
            var info = "";
            if (owner.owner || "string" !== typeof owner.name) {
                for(; owner;){
                    var ownerStack = owner.debugStack;
                    if (null != ownerStack) {
                        if (owner = owner.owner) {
                            var JSCompiler_temp_const = info;
                            var error = ownerStack, prevPrepareStackTrace = Error.prepareStackTrace;
                            Error.prepareStackTrace = prepareStackTrace;
                            var stack = error.stack;
                            Error.prepareStackTrace = prevPrepareStackTrace;
                            stack.startsWith("Error: react-stack-top-frame\n") && (stack = stack.slice(29));
                            var idx = stack.indexOf("\n");
                            -1 !== idx && (stack = stack.slice(idx + 1));
                            idx = stack.indexOf("react-stack-bottom-frame");
                            -1 !== idx && (idx = stack.lastIndexOf("\n", idx));
                            var JSCompiler_inline_result = -1 !== idx ? stack = stack.slice(0, idx) : "";
                            info = JSCompiler_temp_const + ("\n" + JSCompiler_inline_result);
                        }
                    } else break;
                }
                var JSCompiler_inline_result$jscomp$0 = info;
            } else {
                JSCompiler_temp_const = owner.name;
                if (void 0 === prefix) try {
                    throw Error();
                } catch (x) {
                    prefix = (error = x.stack.trim().match(/\n( *(at )?)/)) && error[1] || "", suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
                }
                JSCompiler_inline_result$jscomp$0 = "\n" + prefix + JSCompiler_temp_const + suffix;
            }
        } catch (x) {
            JSCompiler_inline_result$jscomp$0 = "\nError generating stack: " + x.message + "\n" + x.stack;
        }
        return JSCompiler_inline_result$jscomp$0;
    }
    function resolveConsoleEntry(response, value) {
        if (response._replayConsole) {
            var payload = JSON.parse(value, response._fromJSON);
            value = payload[0];
            var stackTrace = payload[1], owner = payload[2], env = payload[3];
            payload = payload.slice(4);
            replayConsoleWithCallStackInDEV(response, value, stackTrace, owner, env, payload);
        }
    }
    function mergeBuffer(buffer, lastChunk) {
        for(var l = buffer.length, byteLength = lastChunk.length, i = 0; i < l; i++)byteLength += buffer[i].byteLength;
        byteLength = new Uint8Array(byteLength);
        for(var _i2 = i = 0; _i2 < l; _i2++){
            var chunk = buffer[_i2];
            byteLength.set(chunk, i);
            i += chunk.byteLength;
        }
        byteLength.set(lastChunk, i);
        return byteLength;
    }
    function resolveTypedArray(response, id, buffer, lastChunk, constructor, bytesPerElement) {
        buffer = 0 === buffer.length && 0 === lastChunk.byteOffset % bytesPerElement ? lastChunk : mergeBuffer(buffer, lastChunk);
        constructor = new constructor(buffer.buffer, buffer.byteOffset, buffer.byteLength / bytesPerElement);
        resolveBuffer(response, id, constructor);
    }
    function processFullBinaryRow(response, id, tag, buffer, chunk) {
        switch(tag){
            case 65:
                resolveBuffer(response, id, mergeBuffer(buffer, chunk).buffer);
                return;
            case 79:
                resolveTypedArray(response, id, buffer, chunk, Int8Array, 1);
                return;
            case 111:
                resolveBuffer(response, id, 0 === buffer.length ? chunk : mergeBuffer(buffer, chunk));
                return;
            case 85:
                resolveTypedArray(response, id, buffer, chunk, Uint8ClampedArray, 1);
                return;
            case 83:
                resolveTypedArray(response, id, buffer, chunk, Int16Array, 2);
                return;
            case 115:
                resolveTypedArray(response, id, buffer, chunk, Uint16Array, 2);
                return;
            case 76:
                resolveTypedArray(response, id, buffer, chunk, Int32Array, 4);
                return;
            case 108:
                resolveTypedArray(response, id, buffer, chunk, Uint32Array, 4);
                return;
            case 71:
                resolveTypedArray(response, id, buffer, chunk, Float32Array, 4);
                return;
            case 103:
                resolveTypedArray(response, id, buffer, chunk, Float64Array, 8);
                return;
            case 77:
                resolveTypedArray(response, id, buffer, chunk, BigInt64Array, 8);
                return;
            case 109:
                resolveTypedArray(response, id, buffer, chunk, BigUint64Array, 8);
                return;
            case 86:
                resolveTypedArray(response, id, buffer, chunk, DataView, 1);
                return;
        }
        for(var stringDecoder = response._stringDecoder, row = "", i = 0; i < buffer.length; i++)row += stringDecoder.decode(buffer[i], decoderOptions);
        row += stringDecoder.decode(chunk);
        processFullStringRow(response, id, tag, row);
    }
    function processFullStringRow(response, id, tag, row) {
        switch(tag){
            case 73:
                resolveModule(response, id, row);
                break;
            case 72:
                resolveHint(response, row[0], row.slice(1));
                break;
            case 69:
                row = JSON.parse(row);
                tag = resolveErrorDev(response, row);
                tag.digest = row.digest;
                row = response._chunks;
                var chunk = row.get(id);
                chunk ? triggerErrorOnChunk(chunk, tag) : row.set(id, new ReactPromise("rejected", null, tag, response));
                break;
            case 84:
                resolveText(response, id, row);
                break;
            case 78:
            case 68:
                tag = new ReactPromise("resolved_model", row, null, response);
                initializeModelChunk(tag);
                "fulfilled" === tag.status ? resolveDebugInfo(response, id, tag.value) : tag.then(function(v) {
                    return resolveDebugInfo(response, id, v);
                }, function() {});
                break;
            case 87:
                resolveConsoleEntry(response, row);
                break;
            case 82:
                startReadableStream(response, id, void 0);
                break;
            case 114:
                startReadableStream(response, id, "bytes");
                break;
            case 88:
                startAsyncIterable(response, id, !1);
                break;
            case 120:
                startAsyncIterable(response, id, !0);
                break;
            case 67:
                stopStream(response, id, row);
                break;
            default:
                resolveModel(response, id, row);
        }
    }
    function createFromJSONCallback(response) {
        return function(key, value) {
            if ("string" === typeof value) return parseModelString(response, this, key, value);
            if ("object" === typeof value && null !== value) {
                if (value[0] === REACT_ELEMENT_TYPE) {
                    var type = value[1];
                    key = value[4];
                    var stack = value[5], validated = value[6];
                    value = {
                        $$typeof: REACT_ELEMENT_TYPE,
                        type: type,
                        key: value[2],
                        props: value[3],
                        _owner: null === key ? response._debugRootOwner : key
                    };
                    Object.defineProperty(value, "ref", {
                        enumerable: !1,
                        get: nullRefGetter
                    });
                    value._store = {};
                    Object.defineProperty(value._store, "validated", {
                        configurable: !1,
                        enumerable: !1,
                        writable: !0,
                        value: validated
                    });
                    Object.defineProperty(value, "_debugInfo", {
                        configurable: !1,
                        enumerable: !1,
                        writable: !0,
                        value: null
                    });
                    validated = response._rootEnvironmentName;
                    null !== key && null != key.env && (validated = key.env);
                    var normalizedStackTrace = null;
                    null === key && null != response._debugRootStack ? normalizedStackTrace = response._debugRootStack : null !== stack && (normalizedStackTrace = createFakeJSXCallStackInDEV(response, stack, validated));
                    Object.defineProperty(value, "_debugStack", {
                        configurable: !1,
                        enumerable: !1,
                        writable: !0,
                        value: normalizedStackTrace
                    });
                    normalizedStackTrace = null;
                    supportsCreateTask && null !== stack && (type = console.createTask.bind(console, getTaskName(type)), stack = buildFakeCallStack(response, stack, validated, type), type = null === key ? null : initializeFakeTask(response, key, validated), null === type ? (type = response._debugRootTask, normalizedStackTrace = null != type ? type.run(stack) : stack()) : normalizedStackTrace = type.run(stack));
                    Object.defineProperty(value, "_debugTask", {
                        configurable: !1,
                        enumerable: !1,
                        writable: !0,
                        value: normalizedStackTrace
                    });
                    null !== key && initializeFakeStack(response, key);
                    null !== initializingHandler ? (stack = initializingHandler, initializingHandler = stack.parent, stack.errored ? (key = new ReactPromise("rejected", null, stack.value, response), stack = {
                        name: getComponentNameFromType(value.type) || "",
                        owner: value._owner
                    }, stack.debugStack = value._debugStack, supportsCreateTask && (stack.debugTask = value._debugTask), key._debugInfo = [
                        stack
                    ], value = createLazyChunkWrapper(key)) : 0 < stack.deps && (key = new ReactPromise("blocked", null, null, response), stack.value = value, stack.chunk = key, value = Object.freeze.bind(Object, value.props), key.then(value, value), value = createLazyChunkWrapper(key))) : Object.freeze(value.props);
                }
                return value;
            }
            return value;
        };
    }
    function noServerCall() {
        throw Error("Server Functions cannot be called during initial render. This would create a fetch waterfall. Try to use a Server Component to pass data to Client Components instead.");
    }
    function createResponseFromOptions(options) {
        return new ResponseInstance(options.serverConsumerManifest.moduleMap, options.serverConsumerManifest.serverModuleMap, options.serverConsumerManifest.moduleLoading, noServerCall, options.encodeFormAction, "string" === typeof options.nonce ? options.nonce : void 0, options && options.temporaryReferences ? options.temporaryReferences : void 0, options && options.findSourceMapURL ? options.findSourceMapURL : void 0, options ? !0 === options.replayConsoleLogs : !1, options && options.environmentName ? options.environmentName : void 0);
    }
    function startReadingFromStream(response, stream) {
        function progress(_ref) {
            var value = _ref.value;
            if (_ref.done) reportGlobalError(response, Error("Connection closed."));
            else {
                var i = 0, rowState = response._rowState;
                _ref = response._rowID;
                for(var rowTag = response._rowTag, rowLength = response._rowLength, buffer = response._buffer, chunkLength = value.length; i < chunkLength;){
                    var lastIdx = -1;
                    switch(rowState){
                        case 0:
                            lastIdx = value[i++];
                            58 === lastIdx ? rowState = 1 : _ref = _ref << 4 | (96 < lastIdx ? lastIdx - 87 : lastIdx - 48);
                            continue;
                        case 1:
                            rowState = value[i];
                            84 === rowState || 65 === rowState || 79 === rowState || 111 === rowState || 85 === rowState || 83 === rowState || 115 === rowState || 76 === rowState || 108 === rowState || 71 === rowState || 103 === rowState || 77 === rowState || 109 === rowState || 86 === rowState ? (rowTag = rowState, rowState = 2, i++) : 64 < rowState && 91 > rowState || 35 === rowState || 114 === rowState || 120 === rowState ? (rowTag = rowState, rowState = 3, i++) : (rowTag = 0, rowState = 3);
                            continue;
                        case 2:
                            lastIdx = value[i++];
                            44 === lastIdx ? rowState = 4 : rowLength = rowLength << 4 | (96 < lastIdx ? lastIdx - 87 : lastIdx - 48);
                            continue;
                        case 3:
                            lastIdx = value.indexOf(10, i);
                            break;
                        case 4:
                            lastIdx = i + rowLength, lastIdx > value.length && (lastIdx = -1);
                    }
                    var offset = value.byteOffset + i;
                    if (-1 < lastIdx) rowLength = new Uint8Array(value.buffer, offset, lastIdx - i), processFullBinaryRow(response, _ref, rowTag, buffer, rowLength), i = lastIdx, 3 === rowState && i++, rowLength = _ref = rowTag = rowState = 0, buffer.length = 0;
                    else {
                        value = new Uint8Array(value.buffer, offset, value.byteLength - i);
                        buffer.push(value);
                        rowLength -= value.byteLength;
                        break;
                    }
                }
                response._rowState = rowState;
                response._rowID = _ref;
                response._rowTag = rowTag;
                response._rowLength = rowLength;
                return reader.read().then(progress).catch(error);
            }
        }
        function error(e) {
            reportGlobalError(response, e);
        }
        var reader = stream.getReader();
        reader.read().then(progress).catch(error);
    }
    var ReactDOM = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-dom.js [app-rsc] (ecmascript)"), React = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)"), decoderOptions = {
        stream: !0
    }, bind$1 = Function.prototype.bind, chunkCache = new Map(), ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, ASYNC_ITERATOR = Symbol.asyncIterator, isArrayImpl = Array.isArray, getPrototypeOf = Object.getPrototypeOf, jsxPropsParents = new WeakMap(), jsxChildrenParents = new WeakMap(), CLIENT_REFERENCE_TAG = Symbol.for("react.client.reference"), ObjectPrototype = Object.prototype, knownServerReferences = new WeakMap(), boundCache = new WeakMap(), fakeServerFunctionIdx = 0, FunctionBind = Function.prototype.bind, ArraySlice = Array.prototype.slice, v8FrameRegExp = /^ {3} at (?:(.+) \((.+):(\d+):(\d+)\)|(?:async )?(.+):(\d+):(\d+))$/, jscSpiderMonkeyFrameRegExp = /(?:(.*)@)?(.*):(\d+):(\d+)/, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), prefix, suffix;
    new ("function" === typeof WeakMap ? WeakMap : Map)();
    var ReactSharedInteralsServer = React.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE || ReactSharedInteralsServer;
    ReactPromise.prototype = Object.create(Promise.prototype);
    ReactPromise.prototype.then = function(resolve, reject) {
        switch(this.status){
            case "resolved_model":
                initializeModelChunk(this);
                break;
            case "resolved_module":
                initializeModuleChunk(this);
        }
        switch(this.status){
            case "fulfilled":
                resolve(this.value);
                break;
            case "pending":
            case "blocked":
                resolve && (null === this.value && (this.value = []), this.value.push(resolve));
                reject && (null === this.reason && (this.reason = []), this.reason.push(reject));
                break;
            default:
                reject && reject(this.reason);
        }
    };
    var initializingHandler = null, supportsCreateTask = !!console.createTask, fakeFunctionCache = new Map(), fakeFunctionIdx = 0, createFakeJSXCallStack = {
        "react-stack-bottom-frame": function(response, stack, environmentName) {
            return buildFakeCallStack(response, stack, environmentName, fakeJSXCallSite)();
        }
    }, createFakeJSXCallStackInDEV = createFakeJSXCallStack["react-stack-bottom-frame"].bind(createFakeJSXCallStack), currentOwnerInDEV = null, replayConsoleWithCallStack = {
        "react-stack-bottom-frame": function(response, methodName, stackTrace, owner, env, args) {
            var prevStack = ReactSharedInternals.getCurrentStack;
            ReactSharedInternals.getCurrentStack = getCurrentStackInDEV;
            currentOwnerInDEV = null === owner ? response._debugRootOwner : owner;
            try {
                a: {
                    var offset = 0;
                    switch(methodName){
                        case "dir":
                        case "dirxml":
                        case "groupEnd":
                        case "table":
                            var JSCompiler_inline_result = bind$1.apply(console[methodName], [
                                console
                            ].concat(args));
                            break a;
                        case "assert":
                            offset = 1;
                    }
                    var newArgs = args.slice(0);
                    "string" === typeof newArgs[offset] ? newArgs.splice(offset, 1, "\u001b[0m\u001b[7m%c%s\u001b[0m%c " + newArgs[offset], "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + env + " ", "") : newArgs.splice(offset, 0, "\u001b[0m\u001b[7m%c%s\u001b[0m%c ", "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + env + " ", "");
                    newArgs.unshift(console);
                    JSCompiler_inline_result = bind$1.apply(console[methodName], newArgs);
                }
                var callStack = buildFakeCallStack(response, stackTrace, env, JSCompiler_inline_result);
                if (null != owner) {
                    var task = initializeFakeTask(response, owner, env);
                    initializeFakeStack(response, owner);
                    if (null !== task) {
                        task.run(callStack);
                        return;
                    }
                }
                var rootTask = getRootTask(response, env);
                null != rootTask ? rootTask.run(callStack) : callStack();
            } finally{
                currentOwnerInDEV = null, ReactSharedInternals.getCurrentStack = prevStack;
            }
        }
    }, replayConsoleWithCallStackInDEV = replayConsoleWithCallStack["react-stack-bottom-frame"].bind(replayConsoleWithCallStack);
    exports.createFromFetch = function(promiseForResponse, options) {
        var response = createResponseFromOptions(options);
        promiseForResponse.then(function(r) {
            startReadingFromStream(response, r.body);
        }, function(e) {
            reportGlobalError(response, e);
        });
        return getChunk(response, 0);
    };
    exports.createFromReadableStream = function(stream, options) {
        options = createResponseFromOptions(options);
        startReadingFromStream(options, stream);
        return getChunk(options, 0);
    };
    exports.createServerReference = function(id) {
        return createServerReference$1(id, noServerCall);
    };
    exports.createTemporaryReferenceSet = function() {
        return new Map();
    };
    exports.encodeReply = function(value, options) {
        return new Promise(function(resolve, reject) {
            var abort = processReply(value, "", options && options.temporaryReferences ? options.temporaryReferences : void 0, resolve, reject);
            if (options && options.signal) {
                var signal = options.signal;
                if (signal.aborted) abort(signal.reason);
                else {
                    var listener = function() {
                        abort(signal.reason);
                        signal.removeEventListener("abort", listener);
                    };
                    signal.addEventListener("abort", listener);
                }
            }
        });
    };
}();
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/compiled/react-server-dom-turbopack/client.edge.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/compiled/react-server-dom-turbopack/cjs/react-server-dom-turbopack-client.edge.development.js [app-rsc] (ecmascript)");
}
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/segment-value-encoding.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ROOT_SEGMENT_KEY": (()=>ROOT_SEGMENT_KEY),
    "encodeChildSegmentKey": (()=>encodeChildSegmentKey),
    "encodeSegment": (()=>encodeSegment)
});
function encodeSegment(segment) {
    if (typeof segment === 'string') {
        const safeName = // But params typically don't include the leading slash. We should use
        // a different encoding to avoid this special case.
        segment === '/_not-found' ? '_not-found' : encodeToFilesystemAndURLSafeString(segment);
        // Since this is not a dynamic segment, it's fully encoded. It does not
        // need to be "hydrated" with a param value.
        return safeName;
    }
    const name = segment[0];
    const paramValue = segment[1];
    const paramType = segment[2];
    const safeName = encodeToFilesystemAndURLSafeString(name);
    const safeValue = encodeToFilesystemAndURLSafeString(paramValue);
    const encodedName = '$' + paramType + '$' + safeName + '$' + safeValue;
    return encodedName;
}
const ROOT_SEGMENT_KEY = '';
function encodeChildSegmentKey(parentSegmentKey, parallelRouteKey, segment) {
    // Aside from being filesystem safe, segment keys are also designed so that
    // each segment and parallel route creates its own subdirectory. Roughly in
    // the same shape as the source app directory. This is mostly just for easier
    // debugging (you can open up the build folder and navigate the output); if
    // we wanted to do we could just use a flat structure.
    // Omit the parallel route key for children, since this is the most
    // common case. Saves some bytes (and it's what the app directory does).
    const slotKey = parallelRouteKey === 'children' ? segment : `@${encodeToFilesystemAndURLSafeString(parallelRouteKey)}/${segment}`;
    return parentSegmentKey + '/' + slotKey;
}
// Define a regex pattern to match the most common characters found in a route
// param. It excludes anything that might not be cross-platform filesystem
// compatible, like |. It does not need to be precise because the fallback is to
// just base64url-encode the whole parameter, which is fine; we just don't do it
// by default for compactness, and for easier debugging.
const simpleParamValueRegex = /^[a-zA-Z0-9\-_@]+$/;
function encodeToFilesystemAndURLSafeString(value) {
    if (simpleParamValueRegex.test(value)) {
        return value;
    }
    // If there are any unsafe characters, base64url-encode the entire value.
    // We also add a ! prefix so it doesn't collide with the simple case.
    const base64url = btoa(value).replace(/\+/g, '-') // Replace '+' with '-'
    .replace(/\//g, '_') // Replace '/' with '_'
    .replace(/=+$/, '') // Remove trailing '='
    ;
    return '!' + base64url;
} //# sourceMappingURL=segment-value-encoding.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/compiled/string-hash/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
(()=>{
    "use strict";
    var e = {
        328: (e)=>{
            function hash(e) {
                var r = 5381, _ = e.length;
                while(_){
                    r = r * 33 ^ e.charCodeAt(--_);
                }
                return r >>> 0;
            }
            e.exports = hash;
        }
    };
    var r = {};
    function __nccwpck_require__(_) {
        var a = r[_];
        if (a !== undefined) {
            return a.exports;
        }
        var t = r[_] = {
            exports: {}
        };
        var i = true;
        try {
            e[_](t, t.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[_];
        }
        return t.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var _ = __nccwpck_require__(328);
    module.exports = _;
})();
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/format-server-error.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatServerError": (()=>formatServerError),
    "getStackWithoutErrorMessage": (()=>getStackWithoutErrorMessage)
});
const invalidServerComponentReactHooks = [
    'useDeferredValue',
    'useEffect',
    'useImperativeHandle',
    'useInsertionEffect',
    'useLayoutEffect',
    'useReducer',
    'useRef',
    'useState',
    'useSyncExternalStore',
    'useTransition',
    'experimental_useOptimistic',
    'useOptimistic'
];
function setMessage(error, message) {
    error.message = message;
    if (error.stack) {
        const lines = error.stack.split('\n');
        lines[0] = message;
        error.stack = lines.join('\n');
    }
}
function getStackWithoutErrorMessage(error) {
    const stack = error.stack;
    if (!stack) return '';
    return stack.replace(/^[^\n]*\n/, '');
}
function formatServerError(error) {
    if (typeof (error == null ? void 0 : error.message) !== 'string') return;
    if (error.message.includes('Class extends value undefined is not a constructor or null')) {
        const addedMessage = 'This might be caused by a React Class Component being rendered in a Server Component, React Class Components only works in Client Components. Read more: https://nextjs.org/docs/messages/class-component-in-server-component';
        // If this error instance already has the message, don't add it again
        if (error.message.includes(addedMessage)) return;
        setMessage(error, `${error.message}

${addedMessage}`);
        return;
    }
    if (error.message.includes('createContext is not a function')) {
        setMessage(error, 'createContext only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/context-in-server-component');
        return;
    }
    for (const clientHook of invalidServerComponentReactHooks){
        const regex = new RegExp(`\\b${clientHook}\\b.*is not a function`);
        if (regex.test(error.message)) {
            setMessage(error, `${clientHook} only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/react-client-hook-in-server-component`);
            return;
        }
    }
} //# sourceMappingURL=format-server-error.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
// This has to be a shared module which is shared between client component error boundary and dynamic component
__turbopack_context__.s({
    "BailoutToCSRError": (()=>BailoutToCSRError),
    "isBailoutToCSRError": (()=>isBailoutToCSRError)
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super("Bail out to client-side rendering: " + reason), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
} //# sourceMappingURL=bailout-to-csr.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RedirectStatusCode": (()=>RedirectStatusCode)
});
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({}); //# sourceMappingURL=redirect-status-code.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/redirect-error.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "REDIRECT_ERROR_CODE": (()=>REDIRECT_ERROR_CODE),
    "RedirectType": (()=>RedirectType),
    "isRedirectError": (()=>isRedirectError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
;
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
var RedirectType = /*#__PURE__*/ function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
    return RedirectType;
}({});
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RedirectStatusCode"];
} //# sourceMappingURL=redirect-error.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/is-next-router-error.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isNextRouterError": (()=>isNextRouterError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$http$2d$access$2d$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/redirect-error.js [app-rsc] (ecmascript)");
;
;
function isNextRouterError(error) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isRedirectError"])(error) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$http$2d$access$2d$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHTTPAccessFallbackError"])(error);
} //# sourceMappingURL=is-next-router-error.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/is-plain-object.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getObjectClassLabel": (()=>getObjectClassLabel),
    "isPlainObject": (()=>isPlainObject)
});
function getObjectClassLabel(value) {
    return Object.prototype.toString.call(value);
}
function isPlainObject(value) {
    if (getObjectClassLabel(value) !== '[object Object]') {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    /**
   * this used to be previously:
   *
   * `return prototype === null || prototype === Object.prototype`
   *
   * but Edge Runtime expose Object from vm, being that kind of type-checking wrongly fail.
   *
   * It was changed to the current implementation since it's resilient to serialization.
   */ return prototype === null || prototype.hasOwnProperty('isPrototypeOf');
} //# sourceMappingURL=is-plain-object.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/is-error.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>isError),
    "getProperError": (()=>getProperError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$plain$2d$object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/is-plain-object.js [app-rsc] (ecmascript)");
;
function isError(err) {
    return typeof err === 'object' && err !== null && 'name' in err && 'message' in err;
}
function safeStringify(obj) {
    const seen = new WeakSet();
    return JSON.stringify(obj, (_key, value)=>{
        // If value is an object and already seen, replace with "[Circular]"
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
                return '[Circular]';
            }
            seen.add(value);
        }
        return value;
    });
}
function getProperError(err) {
    if (isError(err)) {
        return err;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        // provide better error for case where `throw undefined`
        // is called in development
        if (typeof err === 'undefined') {
            return Object.defineProperty(new Error('An undefined error was thrown, ' + 'see here for more info: https://nextjs.org/docs/messages/threw-undefined'), "__NEXT_ERROR_CODE", {
                value: "E98",
                enumerable: false,
                configurable: true
            });
        }
        if (err === null) {
            return Object.defineProperty(new Error('A null error was thrown, ' + 'see here for more info: https://nextjs.org/docs/messages/threw-undefined'), "__NEXT_ERROR_CODE", {
                value: "E336",
                enumerable: false,
                configurable: true
            });
        }
    }
    return Object.defineProperty(new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$plain$2d$object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(err) ? safeStringify(err) : err + ''), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
} //# sourceMappingURL=is-error.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/error-telemetry-utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "copyNextErrorCode": (()=>copyNextErrorCode),
    "createDigestWithErrorCode": (()=>createDigestWithErrorCode),
    "extractNextErrorCode": (()=>extractNextErrorCode)
});
const ERROR_CODE_DELIMITER = '@';
const createDigestWithErrorCode = (thrownValue, originalDigest)=>{
    if (typeof thrownValue === 'object' && thrownValue !== null && '__NEXT_ERROR_CODE' in thrownValue) {
        return `${originalDigest}${ERROR_CODE_DELIMITER}${thrownValue.__NEXT_ERROR_CODE}`;
    }
    return originalDigest;
};
const copyNextErrorCode = (source, target)=>{
    const errorCode = extractNextErrorCode(source);
    if (errorCode && typeof target === 'object' && target !== null) {
        Object.defineProperty(target, '__NEXT_ERROR_CODE', {
            value: errorCode,
            enumerable: false,
            configurable: true
        });
    }
};
const extractNextErrorCode = (error)=>{
    if (typeof error === 'object' && error !== null && '__NEXT_ERROR_CODE' in error && typeof error.__NEXT_ERROR_CODE === 'string') {
        return error.__NEXT_ERROR_CODE;
    }
    if (typeof error === 'object' && error !== null && 'digest' in error && typeof error.digest === 'string') {
        const segments = error.digest.split(ERROR_CODE_DELIMITER);
        const errorCode = segments.find((segment)=>segment.startsWith('E'));
        return errorCode;
    }
    return undefined;
}; //# sourceMappingURL=error-telemetry-utils.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/create-error-handler.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createFlightReactServerErrorHandler": (()=>createFlightReactServerErrorHandler),
    "createHTMLErrorHandler": (()=>createHTMLErrorHandler),
    "createHTMLReactServerErrorHandler": (()=>createHTMLReactServerErrorHandler),
    "getDigestForWellKnownError": (()=>getDigestForWellKnownError),
    "isUserLandError": (()=>isUserLandError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$string$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/compiled/string-hash/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$format$2d$server$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/format-server-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/pipe-readable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$lazy$2d$dynamic$2f$bailout$2d$to$2d$csr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$is$2d$next$2d$router$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/is-next-router-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$is$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/is-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$error$2d$telemetry$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/error-telemetry-utils.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
function getDigestForWellKnownError(error) {
    // If we're bailing out to CSR, we don't need to log the error.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$lazy$2d$dynamic$2f$bailout$2d$to$2d$csr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isBailoutToCSRError"])(error)) return error.digest;
    // If this is a navigation error, we don't need to log the error.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$is$2d$next$2d$router$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNextRouterError"])(error)) return error.digest;
    // If this error occurs, we know that we should be stopping the static
    // render. This is only thrown in static generation when PPR is not enabled,
    // which causes the whole page to be marked as dynamic. We don't need to
    // tell the user about this error, as it's not actionable.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDynamicServerError"])(error)) return error.digest;
    return undefined;
}
function createFlightReactServerErrorHandler(shouldFormatError, onReactServerRenderError) {
    return (thrownValue)=>{
        if (typeof thrownValue === 'string') {
            // TODO-APP: look at using webcrypto instead. Requires a promise to be awaited.
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$string$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(thrownValue).toString();
        }
        // If the response was closed, we don't need to log the error.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAbortError"])(thrownValue)) return;
        const digest = getDigestForWellKnownError(thrownValue);
        if (digest) {
            return digest;
        }
        const err = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$is$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProperError"])(thrownValue);
        // If the error already has a digest, respect the original digest,
        // so it won't get re-generated into another new error.
        if (!err.digest) {
            // TODO-APP: look at using webcrypto instead. Requires a promise to be awaited.
            err.digest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$string$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(err.message + err.stack || '').toString();
        }
        // Format server errors in development to add more helpful error messages
        if (shouldFormatError) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$format$2d$server$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatServerError"])(err);
        }
        // Record exception in an active span, if available.
        const span = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])().getActiveScopeSpan();
        if (span) {
            span.recordException(err);
            span.setStatus({
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SpanStatusCode"].ERROR,
                message: err.message
            });
        }
        onReactServerRenderError(err);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$error$2d$telemetry$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDigestWithErrorCode"])(thrownValue, err.digest);
    };
}
function createHTMLReactServerErrorHandler(shouldFormatError, isNextExport, reactServerErrors, silenceLogger, onReactServerRenderError) {
    return (thrownValue)=>{
        var _err_message;
        if (typeof thrownValue === 'string') {
            // TODO-APP: look at using webcrypto instead. Requires a promise to be awaited.
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$string$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(thrownValue).toString();
        }
        // If the response was closed, we don't need to log the error.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAbortError"])(thrownValue)) return;
        const digest = getDigestForWellKnownError(thrownValue);
        if (digest) {
            return digest;
        }
        const err = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$is$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProperError"])(thrownValue);
        // If the error already has a digest, respect the original digest,
        // so it won't get re-generated into another new error.
        if (!err.digest) {
            // TODO-APP: look at using webcrypto instead. Requires a promise to be awaited.
            err.digest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$string$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(err.message + (err.stack || '')).toString();
        }
        // @TODO by putting this here and not at the top it is possible that
        // we don't error the build in places we actually expect to
        if (!reactServerErrors.has(err.digest)) {
            reactServerErrors.set(err.digest, err);
        }
        // Format server errors in development to add more helpful error messages
        if (shouldFormatError) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$format$2d$server$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatServerError"])(err);
        }
        // Don't log the suppressed error during export
        if (!(isNextExport && (err == null ? void 0 : (_err_message = err.message) == null ? void 0 : _err_message.includes('The specific message is omitted in production builds to avoid leaking sensitive details.')))) {
            // Record exception in an active span, if available.
            const span = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])().getActiveScopeSpan();
            if (span) {
                span.recordException(err);
                span.setStatus({
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SpanStatusCode"].ERROR,
                    message: err.message
                });
            }
            if (!silenceLogger) {
                onReactServerRenderError == null ? void 0 : onReactServerRenderError(err);
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$error$2d$telemetry$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDigestWithErrorCode"])(thrownValue, err.digest);
    };
}
function createHTMLErrorHandler(shouldFormatError, isNextExport, reactServerErrors, allCapturedErrors, silenceLogger, onHTMLRenderSSRError) {
    return (thrownValue, errorInfo)=>{
        var _err_message;
        let isSSRError = true;
        allCapturedErrors.push(thrownValue);
        // If the response was closed, we don't need to log the error.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAbortError"])(thrownValue)) return;
        const digest = getDigestForWellKnownError(thrownValue);
        if (digest) {
            return digest;
        }
        const err = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$is$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProperError"])(thrownValue);
        // If the error already has a digest, respect the original digest,
        // so it won't get re-generated into another new error.
        if (err.digest) {
            if (reactServerErrors.has(err.digest)) {
                // This error is likely an obfuscated error from react-server.
                // We recover the original error here.
                thrownValue = reactServerErrors.get(err.digest);
                isSSRError = false;
            } else {
            // The error is not from react-server but has a digest
            // from other means so we don't need to produce a new one
            }
        } else {
            err.digest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$string$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(err.message + ((errorInfo == null ? void 0 : errorInfo.componentStack) || err.stack || '')).toString();
        }
        // Format server errors in development to add more helpful error messages
        if (shouldFormatError) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$format$2d$server$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatServerError"])(err);
        }
        // Don't log the suppressed error during export
        if (!(isNextExport && (err == null ? void 0 : (_err_message = err.message) == null ? void 0 : _err_message.includes('The specific message is omitted in production builds to avoid leaking sensitive details.')))) {
            // Record exception in an active span, if available.
            const span = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])().getActiveScopeSpan();
            if (span) {
                span.recordException(err);
                span.setStatus({
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SpanStatusCode"].ERROR,
                    message: err.message
                });
            }
            if (!silenceLogger && // HTML errors contain RSC errors as well, filter them out before reporting
            isSSRError) {
                onHTMLRenderSSRError(err, errorInfo);
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$error$2d$telemetry$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDigestWithErrorCode"])(thrownValue, err.digest);
    };
}
function isUserLandError(err) {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAbortError"])(err) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$lazy$2d$dynamic$2f$bailout$2d$to$2d$csr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isBailoutToCSRError"])(err) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$is$2d$next$2d$router$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNextRouterError"])(err);
} //# sourceMappingURL=create-error-handler.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/collect-segment-data.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "collectSegmentData": (()=>collectSegmentData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
// eslint-disable-next-line import/no-extraneous-dependencies
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$server$2d$dom$2d$turbopack$2f$client$2e$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/compiled/react-server-dom-turbopack/client.edge.js [app-rsc] (ecmascript)");
// eslint-disable-next-line import/no-extraneous-dependencies
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$static$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-static-edge.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/stream-utils/node-web-streams-helper.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$segment$2d$value$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/segment-value-encoding.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$create$2d$error$2d$handler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/create-error-handler.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function onSegmentPrerenderError(error) {
    const digest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$create$2d$error$2d$handler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDigestForWellKnownError"])(error);
    if (digest) {
        return digest;
    }
// We don't need to log the errors because we would have already done that
// when generating the original Flight stream for the whole page.
}
async function collectSegmentData(shouldAssumePartialData, fullPageDataBuffer, staleTime, clientModules, serverConsumerManifest, fallbackRouteParams) {
    // Traverse the router tree and generate a prefetch response for each segment.
    // A mutable map to collect the results as we traverse the route tree.
    const resultMap = new Map();
    // Before we start, warm up the module cache by decoding the page data once.
    // Then we can assume that any remaining async tasks that occur the next time
    // are due to hanging promises caused by dynamic data access. Note we only
    // have to do this once per page, not per individual segment.
    //
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$server$2d$dom$2d$turbopack$2f$client$2e$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createFromReadableStream"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streamFromBuffer"])(fullPageDataBuffer), {
            serverConsumerManifest
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["waitAtLeastOneReactRenderTask"])();
    } catch  {}
    // Create an abort controller that we'll use to stop the stream.
    const abortController = new AbortController();
    const onCompletedProcessingRouteTree = async ()=>{
        // Since all we're doing is decoding and re-encoding a cached prerender, if
        // serializing the stream takes longer than a microtask, it must because of
        // hanging promises caused by dynamic data.
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["waitAtLeastOneReactRenderTask"])();
        abortController.abort();
    };
    // Generate a stream for the route tree prefetch. While we're walking the
    // tree, we'll also spawn additional tasks to generate the segment prefetches.
    // The promises for these tasks are pushed to a mutable array that we will
    // await once the route tree is fully rendered.
    const segmentTasks = [];
    const { prelude: treeStream } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$static$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_prerender"])(// we need to use a component so that when we decode the original stream
    // inside of it, the side effects are transferred to the new stream.
    // @ts-expect-error
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(PrefetchTreeData, {
        shouldAssumePartialData: shouldAssumePartialData,
        fullPageDataBuffer: fullPageDataBuffer,
        fallbackRouteParams: fallbackRouteParams,
        serverConsumerManifest: serverConsumerManifest,
        clientModules: clientModules,
        staleTime: staleTime,
        segmentTasks: segmentTasks,
        onCompletedProcessingRouteTree: onCompletedProcessingRouteTree
    }), clientModules, {
        signal: abortController.signal,
        onError: onSegmentPrerenderError
    });
    // Write the route tree to a special `/_tree` segment.
    const treeBuffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streamToBuffer"])(treeStream);
    resultMap.set('/_tree', treeBuffer);
    // Now that we've finished rendering the route tree, all the segment tasks
    // should have been spawned. Await them in parallel and write the segment
    // prefetches to the result map.
    for (const [segmentPath, buffer] of (await Promise.all(segmentTasks))){
        resultMap.set(segmentPath, buffer);
    }
    return resultMap;
}
async function PrefetchTreeData({ shouldAssumePartialData, fullPageDataBuffer, fallbackRouteParams, serverConsumerManifest, clientModules, staleTime, segmentTasks, onCompletedProcessingRouteTree }) {
    // We're currently rendering a Flight response for the route tree prefetch.
    // Inside this component, decode the Flight stream for the whole page. This is
    // a hack to transfer the side effects from the original Flight stream (e.g.
    // Float preloads) onto the Flight stream for the tree prefetch.
    // TODO: React needs a better way to do this. Needed for Server Actions, too.
    const initialRSCPayload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$server$2d$dom$2d$turbopack$2f$client$2e$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createFromReadableStream"])(createUnclosingPrefetchStream((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streamFromBuffer"])(fullPageDataBuffer)), {
        serverConsumerManifest
    });
    const buildId = initialRSCPayload.b;
    // FlightDataPath is an unsound type, hence the additional checks.
    const flightDataPaths = initialRSCPayload.f;
    if (flightDataPaths.length !== 1 && flightDataPaths[0].length !== 3) {
        console.error('Internal Next.js error: InitialRSCPayload does not match the expected ' + 'shape for a prerendered page during segment prefetch generation.');
        return null;
    }
    const flightRouterState = flightDataPaths[0][0];
    const seedData = flightDataPaths[0][1];
    const head = flightDataPaths[0][2];
    // Compute the route metadata tree by traversing the FlightRouterState. As we
    // walk the tree, we will also spawn a task to produce a prefetch response for
    // each segment.
    const tree = collectSegmentDataImpl(shouldAssumePartialData, flightRouterState, buildId, seedData, fallbackRouteParams, fullPageDataBuffer, clientModules, serverConsumerManifest, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$segment$2d$value$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ROOT_SEGMENT_KEY"], segmentTasks);
    const isHeadPartial = shouldAssumePartialData || await isPartialRSCData(head, clientModules);
    // Notify the abort controller that we're done processing the route tree.
    // Anything async that happens after this point must be due to hanging
    // promises in the original stream.
    onCompletedProcessingRouteTree();
    // Render the route tree to a special `/_tree` segment.
    const treePrefetch = {
        buildId,
        tree,
        head,
        isHeadPartial,
        staleTime
    };
    return treePrefetch;
}
function collectSegmentDataImpl(shouldAssumePartialData, route, buildId, seedData, fallbackRouteParams, fullPageDataBuffer, clientModules, serverConsumerManifest, key, segmentTasks) {
    // Metadata about the segment. Sent as part of the tree prefetch. Null if
    // there are no children.
    let slotMetadata = null;
    const children = route[1];
    const seedDataChildren = seedData !== null ? seedData[2] : null;
    for(const parallelRouteKey in children){
        const childRoute = children[parallelRouteKey];
        const childSegment = childRoute[0];
        const childSeedData = seedDataChildren !== null ? seedDataChildren[parallelRouteKey] : null;
        const childKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$segment$2d$value$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encodeChildSegmentKey"])(key, parallelRouteKey, Array.isArray(childSegment) && fallbackRouteParams !== null ? encodeSegmentWithPossibleFallbackParam(childSegment, fallbackRouteParams) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$segment$2d$value$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encodeSegment"])(childSegment));
        const childTree = collectSegmentDataImpl(shouldAssumePartialData, childRoute, buildId, childSeedData, fallbackRouteParams, fullPageDataBuffer, clientModules, serverConsumerManifest, childKey, segmentTasks);
        if (slotMetadata === null) {
            slotMetadata = {};
        }
        slotMetadata[parallelRouteKey] = childTree;
    }
    if (seedData !== null) {
        // Spawn a task to write the segment data to a new Flight stream.
        segmentTasks.push(// current task to escape the current rendering context.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["waitAtLeastOneReactRenderTask"])().then(()=>renderSegmentPrefetch(shouldAssumePartialData, buildId, seedData, key, clientModules)));
    } else {
    // This segment does not have any seed data. Skip generating a prefetch
    // response for it. We'll still include it in the route tree, though.
    // TODO: We should encode in the route tree whether a segment is missing
    // so we don't attempt to fetch it for no reason. As of now this shouldn't
    // ever happen in practice, though.
    }
    // Metadata about the segment. Sent to the client as part of the
    // tree prefetch.
    return {
        segment: route[0],
        slots: slotMetadata,
        isRootLayout: route[4] === true
    };
}
function encodeSegmentWithPossibleFallbackParam(segment, fallbackRouteParams) {
    const name = segment[0];
    if (!fallbackRouteParams.has(name)) {
        // Normal case. No matching fallback parameter.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$segment$2d$value$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encodeSegment"])(segment);
    }
    // This segment includes a fallback parameter. During prerendering, a random
    // placeholder value was used; however, for segment prefetches, we need the
    // segment path to be predictable so the server can create a rewrite for it.
    // So, replace the placeholder segment value with a "template" string,
    // e.g. `[name]`.
    // TODO: This will become a bit cleaner once remove route parameters from the
    // server response, and instead add them to the segment keys on the client.
    // Instead of a string replacement, like we do here, route params will always
    // be encoded in separate step from the rest of the segment, not just in the
    // case of fallback params.
    const encodedSegment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$segment$2d$value$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encodeSegment"])(segment);
    const lastIndex = encodedSegment.lastIndexOf('$');
    const encodedFallbackSegment = // because non-simple characters (including [ and ]) trigger a base
    // 64 encoding.
    encodedSegment.substring(0, lastIndex + 1) + `[${name}]`;
    return encodedFallbackSegment;
}
async function renderSegmentPrefetch(shouldAssumePartialData, buildId, seedData, key, clientModules) {
    // Render the segment data to a stream.
    // In the future, this is where we can include additional metadata, like the
    // stale time and cache tags.
    const rsc = seedData[1];
    const loading = seedData[3];
    const segmentPrefetch = {
        buildId,
        rsc,
        loading,
        isPartial: shouldAssumePartialData || await isPartialRSCData(rsc, clientModules)
    };
    // Since all we're doing is decoding and re-encoding a cached prerender, if
    // it takes longer than a microtask, it must because of hanging promises
    // caused by dynamic data. Abort the stream at the end of the current task.
    const abortController = new AbortController();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["waitAtLeastOneReactRenderTask"])().then(()=>abortController.abort());
    const { prelude: segmentStream } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$static$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_prerender"])(segmentPrefetch, clientModules, {
        signal: abortController.signal,
        onError: onSegmentPrerenderError
    });
    const segmentBuffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streamToBuffer"])(segmentStream);
    if (key === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$segment$2d$value$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ROOT_SEGMENT_KEY"]) {
        return [
            '/_index',
            segmentBuffer
        ];
    } else {
        return [
            key,
            segmentBuffer
        ];
    }
}
async function isPartialRSCData(rsc, clientModules) {
    // We can determine if a segment contains only partial data if it takes longer
    // than a task to encode, because dynamic data is encoded as an infinite
    // promise. We must do this in a separate Flight prerender from the one that
    // actually generates the prefetch stream because we need to include
    // `isPartial` in the stream itself.
    let isPartial = false;
    const abortController = new AbortController();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["waitAtLeastOneReactRenderTask"])().then(()=>{
        // If we haven't yet finished the outer task, then it must be because we
        // accessed dynamic data.
        isPartial = true;
        abortController.abort();
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$static$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_prerender"])(rsc, clientModules, {
        signal: abortController.signal,
        onError () {}
    });
    return isPartial;
}
function createUnclosingPrefetchStream(originalFlightStream) {
    // When PPR is enabled, prefetch streams may contain references that never
    // resolve, because that's how we encode dynamic data access. In the decoded
    // object returned by the Flight client, these are reified into hanging
    // promises that suspend during render, which is effectively what we want.
    // The UI resolves when it switches to the dynamic data stream
    // (via useDeferredValue(dynamic, static)).
    //
    // However, the Flight implementation currently errors if the server closes
    // the response before all the references are resolved. As a cheat to work
    // around this, we wrap the original stream in a new stream that never closes,
    // and therefore doesn't error.
    const reader = originalFlightStream.getReader();
    return new ReadableStream({
        async pull (controller) {
            while(true){
                const { done, value } = await reader.read();
                if (!done) {
                    // Pass to the target stream and keep consuming the Flight response
                    // from the server.
                    controller.enqueue(value);
                    continue;
                }
                // The server stream has closed. Exit, but intentionally do not close
                // the target stream.
                return;
            }
        }
    });
} //# sourceMappingURL=collect-segment-data.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
// eslint-disable-next-line import/no-extraneous-dependencies
__turbopack_context__.s({
    "patchFetch": (()=>patchFetch)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$patch$2d$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/patch-fetch.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// patchFetch makes use of APIs such as `React.unstable_postpone` which are only available
// in the experimental channel of React, so export it from here so that it comes from the bundled runtime
function patchFetch() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$patch$2d$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["patchFetch"])({
        workAsyncStorage: __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"],
        workUnitAsyncStorage: __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"]
    });
}
;
 //# sourceMappingURL=entry-base.js.map
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$static$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-static-edge.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$layout$2d$router$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/layout-router.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$render$2d$from$2d$template$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/render-from-template-context.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/client-page.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/client-segment.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$search$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/request/search-params.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/request/params.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$patch$2d$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/lib/patch-fetch.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/error-boundary.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/metadata-boundary.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$rsc$2f$preloads$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/rsc/preloads.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$rsc$2f$postpone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/rsc/postpone.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$rsc$2f$taint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/rsc/taint.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$collect$2d$segment$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/collect-segment-data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClientPageRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClientPageRoot"]),
    "ClientSegmentRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClientSegmentRoot"]),
    "HTTPAccessFallbackBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTTPAccessFallbackBoundary"]),
    "LayoutRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$layout$2d$router$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]),
    "MetadataBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetadataBoundary"]),
    "OutletBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OutletBoundary"]),
    "Postpone": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Postpone"]),
    "RenderFromTemplateContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$render$2d$from$2d$template$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]),
    "ViewportBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ViewportBoundary"]),
    "actionAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["actionAsyncStorage"]),
    "collectSegmentData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$collect$2d$segment$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collectSegmentData"]),
    "createMetadataComponents": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createMetadataComponents"]),
    "createPrerenderParamsForClientSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPrerenderParamsForClientSegment"]),
    "createPrerenderSearchParamsForClientPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$search$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPrerenderSearchParamsForClientPage"]),
    "createServerParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerParamsForMetadata"]),
    "createServerParamsForServerSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerParamsForServerSegment"]),
    "createServerSearchParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$search$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSearchParamsForMetadata"]),
    "createServerSearchParamsForServerPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$search$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerSearchParamsForServerPage"]),
    "createTemporaryReferenceSet": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTemporaryReferenceSet"]),
    "decodeAction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeAction"]),
    "decodeFormState": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeFormState"]),
    "decodeReply": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeReply"]),
    "patchFetch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["patchFetch"]),
    "preconnect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$rsc$2f$preloads$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preconnect"]),
    "preloadFont": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$rsc$2f$preloads$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preloadFont"]),
    "preloadStyle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$rsc$2f$preloads$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preloadStyle"]),
    "prerender": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$static$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_prerender"]),
    "renderToReadableStream": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderToReadableStream"]),
    "serverHooks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__),
    "taintObjectReference": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$rsc$2f$taint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["taintObjectReference"]),
    "workAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"]),
    "workUnitAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$static$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-static-edge.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$layout$2d$router$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/layout-router.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$render$2d$from$2d$template$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/render-from-template-context.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/client-page.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/client-segment.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$search$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/request/search-params.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/request/params.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/lib/metadata/metadata-boundary.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$rsc$2f$preloads$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/rsc/preloads.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$rsc$2f$taint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/rsc/taint.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$collect$2d$segment$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/collect-segment-data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClientPageRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ClientPageRoot"]),
    "ClientSegmentRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ClientSegmentRoot"]),
    "HTTPAccessFallbackBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["HTTPAccessFallbackBoundary"]),
    "LayoutRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["LayoutRouter"]),
    "MetadataBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["MetadataBoundary"]),
    "OutletBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["OutletBoundary"]),
    "Postpone": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Postpone"]),
    "RenderFromTemplateContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["RenderFromTemplateContext"]),
    "ViewportBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ViewportBoundary"]),
    "actionAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["actionAsyncStorage"]),
    "collectSegmentData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["collectSegmentData"]),
    "createMetadataComponents": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createMetadataComponents"]),
    "createPrerenderParamsForClientSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createPrerenderParamsForClientSegment"]),
    "createPrerenderSearchParamsForClientPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createPrerenderSearchParamsForClientPage"]),
    "createServerParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerParamsForMetadata"]),
    "createServerParamsForServerSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerParamsForServerSegment"]),
    "createServerSearchParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerSearchParamsForMetadata"]),
    "createServerSearchParamsForServerPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerSearchParamsForServerPage"]),
    "createTemporaryReferenceSet": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createTemporaryReferenceSet"]),
    "decodeAction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["decodeAction"]),
    "decodeFormState": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["decodeFormState"]),
    "decodeReply": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["decodeReply"]),
    "patchFetch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["patchFetch"]),
    "preconnect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preconnect"]),
    "preloadFont": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preloadFont"]),
    "preloadStyle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preloadStyle"]),
    "prerender": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["prerender"]),
    "renderToReadableStream": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["renderToReadableStream"]),
    "serverHooks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["serverHooks"]),
    "taintObjectReference": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["taintObjectReference"]),
    "workAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["workAsyncStorage"]),
    "workUnitAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["workUnitAsyncStorage"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ElectionBox$2f$WebApp$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/Desktop/ElectionBox/WebApp/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <exports>");
}}),

};

//# sourceMappingURL=e2ae7_next_dist_37dbd022._.js.map