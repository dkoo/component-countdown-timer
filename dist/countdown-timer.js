!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=68)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(69))},function(t,e,n){var r=n(0),o=n(16),i=n(3),a=n(29),u=n(34),c=n(50),s=o("wks"),f=r.Symbol,l=c?f:a;t.exports=function(t){return i(s,t)||(u&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(7),o=n(8),i=n(11);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(0),o=n(24).f,i=n(5),a=n(12),u=n(28),c=n(46),s=n(74);t.exports=function(t,e){var n,f,l,p,d,y=t.target,v=t.global,g=t.stat;if(n=v?r:g?r[y]||u(y,{}):(r[y]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(d=o(n,f))&&d.value:n[f],!s(v?f:y+(g?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(n,f,p,t)}}},function(t,e,n){var r=n(2);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(7),o=n(43),i=n(9),a=n(15),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(26),o=n(14);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(0),o=n(5),i=n(3),a=n(28),u=n(45),c=n(18),s=c.get,f=c.enforce,l=String(String).split("String");(t.exports=function(t,e,n,u){var c=!!u&&!!u.unsafe,s=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),f(n).source=l.join("string"==typeof e?e:"")),t!==r?(c?!p&&t[e]&&(s=!0):delete t[e],s?t[e]=n:o(t,e,n)):s?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u(this)}))},function(t,e,n){var r=n(14);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(17),o=n(70);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.4.7",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!1},function(t,e,n){var r,o,i,a=n(71),u=n(0),c=n(4),s=n(5),f=n(3),l=n(19),p=n(20),d=u.WeakMap;if(a){var y=new d,v=y.get,g=y.has,h=y.set;r=function(t,e){return h.call(y,t,e),e},o=function(t){return v.call(y,t)||{}},i=function(t){return g.call(y,t)}}else{var b=l("state");p[b]=!0,r=function(t,e){return s(t,b,e),e},o=function(t){return f(t,b)?t[b]:{}},i=function(t){return f(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(16),o=n(29),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){t.exports={}},function(t,e,n){var r=n(47),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(31),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(27);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(7),o=n(25),i=n(11),a=n(10),u=n(15),c=n(3),s=n(43),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=a(t),e=u(e,!0),s)try{return f(t,e)}catch(t){}if(c(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(2),o=n(27),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(0),o=n(5);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(48),o=n(32).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(2);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r=n(9),o=n(75),i=n(32),a=n(20),u=n(76),c=n(44),s=n(19)("IE_PROTO"),f=function(){},l=function(){var t,e=c("iframe"),n=i.length;for(e.style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;n--;)delete l.prototype[i[n]];return l()};t.exports=Object.create||function(t,e){var n;return null!==t?(f.prototype=r(t),n=new f,f.prototype=null,n[s]=t):n=l(),void 0===e?n:o(n,e)},a[s]=!0},function(t,e,n){var r=n(48),o=n(32);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(8).f,o=n(3),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(78),o=n(26),i=n(13),a=n(22),u=n(53),c=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l;return function(d,y,v,g){for(var h,b,m=i(d),x=o(m),w=r(y,v,3),S=a(x.length),O=0,j=g||u,A=e?j(d,S):n?j(d,0):void 0;S>O;O++)if((p||O in x)&&(b=w(h=x[O],O,m),t))if(e)A[O]=b;else if(b)switch(t){case 3:return!0;case 5:return h;case 6:return O;case 2:c.call(A,h)}else if(f)return!1;return l?-1:s||f?f:A}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,e,n){"use strict";var r=n(10),o=n(56),i=n(40),a=n(18),u=n(57),c=a.set,s=a.getterFor("Array Iterator");t.exports=u(Array,"Array",(function(t,e){c(this,{type:"Array Iterator",target:r(t),index:0,kind:e})}),(function(){var t=s(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e){t.exports={}},function(t,e,n){var r={};r[n(1)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,e,n){"use strict";var r=n(6),o=n(0),i=n(21),a=n(17),u=n(7),c=n(34),s=n(50),f=n(2),l=n(3),p=n(23),d=n(4),y=n(9),v=n(13),g=n(10),h=n(15),b=n(11),m=n(35),x=n(36),w=n(30),S=n(77),O=n(33),j=n(24),A=n(8),T=n(25),E=n(5),C=n(12),P=n(16),k=n(19),_=n(20),N=n(29),I=n(1),L=n(51),M=n(52),D=n(37),F=n(18),R=n(38).forEach,G=k("hidden"),V=I("toPrimitive"),U=F.set,Y=F.getterFor("Symbol"),z=Object.prototype,$=o.Symbol,q=i("JSON","stringify"),H=j.f,W=A.f,B=S.f,J=T.f,Z=P("symbols"),K=P("op-symbols"),Q=P("string-to-symbol-registry"),X=P("symbol-to-string-registry"),tt=P("wks"),et=o.QObject,nt=!et||!et.prototype||!et.prototype.findChild,rt=u&&f((function(){return 7!=m(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=H(z,e);r&&delete z[e],W(t,e,n),r&&t!==z&&W(z,e,r)}:W,ot=function(t,e){var n=Z[t]=m($.prototype);return U(n,{type:"Symbol",tag:t,description:e}),u||(n.description=e),n},it=c&&"symbol"==typeof $.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof $},at=function(t,e,n){t===z&&at(K,e,n),y(t);var r=h(e,!0);return y(n),l(Z,r)?(n.enumerable?(l(t,G)&&t[G][r]&&(t[G][r]=!1),n=m(n,{enumerable:b(0,!1)})):(l(t,G)||W(t,G,b(1,{})),t[G][r]=!0),rt(t,r,n)):W(t,r,n)},ut=function(t,e){y(t);var n=g(e),r=x(n).concat(lt(n));return R(r,(function(e){u&&!ct.call(n,e)||at(t,e,n[e])})),t},ct=function(t){var e=h(t,!0),n=J.call(this,e);return!(this===z&&l(Z,e)&&!l(K,e))&&(!(n||!l(this,e)||!l(Z,e)||l(this,G)&&this[G][e])||n)},st=function(t,e){var n=g(t),r=h(e,!0);if(n!==z||!l(Z,r)||l(K,r)){var o=H(n,r);return!o||!l(Z,r)||l(n,G)&&n[G][r]||(o.enumerable=!0),o}},ft=function(t){var e=B(g(t)),n=[];return R(e,(function(t){l(Z,t)||l(_,t)||n.push(t)})),n},lt=function(t){var e=t===z,n=B(e?K:g(t)),r=[];return R(n,(function(t){!l(Z,t)||e&&!l(z,t)||r.push(Z[t])})),r};(c||(C(($=function(){if(this instanceof $)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),n=function(t){this===z&&n.call(K,t),l(this,G)&&l(this[G],e)&&(this[G][e]=!1),rt(this,e,b(1,t))};return u&&nt&&rt(z,e,{configurable:!0,set:n}),ot(e,t)}).prototype,"toString",(function(){return Y(this).tag})),T.f=ct,A.f=at,j.f=st,w.f=S.f=ft,O.f=lt,u&&(W($.prototype,"description",{configurable:!0,get:function(){return Y(this).description}}),a||C(z,"propertyIsEnumerable",ct,{unsafe:!0}))),s||(L.f=function(t){return ot(I(t),t)}),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:$}),R(x(tt),(function(t){M(t)})),r({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(Q,e))return Q[e];var n=$(e);return Q[e]=n,X[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l(X,t))return X[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!u},{create:function(t,e){return void 0===e?m(t):ut(m(t),e)},defineProperty:at,defineProperties:ut,getOwnPropertyDescriptor:st}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ft,getOwnPropertySymbols:lt}),r({target:"Object",stat:!0,forced:f((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(v(t))}}),q)&&r({target:"JSON",stat:!0,forced:!c||f((function(){var t=$();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(d(e)||void 0!==t)&&!it(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),o[1]=e,q.apply(null,o)}});$.prototype[V]||E($.prototype,V,$.prototype.valueOf),D($,"Symbol"),_[G]=!0},function(t,e,n){var r=n(7),o=n(2),i=n(44);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),o=n(4),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},function(t,e,n){var r=n(16),o=Function.toString;t.exports=r("inspectSource",(function(t){return o.call(t)}))},function(t,e,n){var r=n(3),o=n(72),i=n(24),a=n(8);t.exports=function(t,e){for(var n=o(e),u=a.f,c=i.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||u(t,f,c(e,f))}}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(3),o=n(10),i=n(73).indexOf,a=n(20);t.exports=function(t,e){var n,u=o(t),c=0,s=[];for(n in u)!r(a,n)&&r(u,n)&&s.push(n);for(;e.length>c;)r(u,n=e[c++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){var r=n(31),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e,n){var r=n(34);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol()},function(t,e,n){var r=n(1);e.f=r},function(t,e,n){var r=n(47),o=n(3),i=n(51),a=n(8).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},function(t,e,n){var r=n(4),o=n(23),i=n(1)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){"use strict";var r=n(6),o=n(7),i=n(0),a=n(3),u=n(4),c=n(8).f,s=n(46),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};s(p,f);var d=p.prototype=f.prototype;d.constructor=p;var y=d.toString,v="Symbol(test)"==String(f("test")),g=/^Symbol\((.*)\)[^)]+$/;c(d,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,e=y.call(t);if(a(l,t))return"";var n=v?e.slice(7,-1):e.replace(g,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},function(t,e,n){n(52)("iterator")},function(t,e,n){var r=n(1),o=n(35),i=n(5),a=r("unscopables"),u=Array.prototype;null==u[a]&&i(u,a,o(null)),t.exports=function(t){u[a][t]=!0}},function(t,e,n){"use strict";var r=n(6),o=n(80),i=n(59),a=n(82),u=n(37),c=n(5),s=n(12),f=n(1),l=n(17),p=n(40),d=n(58),y=d.IteratorPrototype,v=d.BUGGY_SAFARI_ITERATORS,g=f("iterator"),h=function(){return this};t.exports=function(t,e,n,f,d,b,m){o(n,e,f);var x,w,S,O=function(t){if(t===d&&C)return C;if(!v&&t in T)return T[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},j=e+" Iterator",A=!1,T=t.prototype,E=T[g]||T["@@iterator"]||d&&T[d],C=!v&&E||O(d),P="Array"==e&&T.entries||E;if(P&&(x=i(P.call(new t)),y!==Object.prototype&&x.next&&(l||i(x)===y||(a?a(x,y):"function"!=typeof x[g]&&c(x,g,h)),u(x,j,!0,!0),l&&(p[j]=h))),"values"==d&&E&&"values"!==E.name&&(A=!0,C=function(){return E.call(this)}),l&&!m||T[g]===C||c(T,g,C),p[e]=C,d)if(w={values:O("values"),keys:b?C:O("keys"),entries:O("entries")},m)for(S in w)!v&&!A&&S in T||s(T,S,w[S]);else r({target:e,proto:!0,forced:v||A},w);return w}},function(t,e,n){"use strict";var r,o,i,a=n(59),u=n(5),c=n(3),s=n(1),f=n(17),l=s("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=a(a(i)))!==Object.prototype&&(r=o):p=!0),null==r&&(r={}),f||c(r,l)||u(r,l,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},function(t,e,n){var r=n(3),o=n(13),i=n(19),a=n(81),u=i("IE_PROTO"),c=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,e,n){var r=n(41),o=n(12),i=n(84);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,e,n){"use strict";var r=n(86).charAt,o=n(18),i=n(57),a=o.set,u=o.getterFor("String Iterator");i(String,"String",(function(t){a(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=u(this),n=e.string,o=e.index;return o>=n.length?{value:void 0,done:!0}:(t=r(n,o),e.index+=t.length,{value:t,done:!1})}))},function(t,e,n){var r=n(0),o=n(63),i=n(39),a=n(5),u=n(1),c=u("iterator"),s=u("toStringTag"),f=i.values;for(var l in o){var p=r[l],d=p&&p.prototype;if(d){if(d[c]!==f)try{a(d,c,f)}catch(t){d[c]=f}if(d[s]||a(d,s,l),o[l])for(var y in i)if(d[y]!==i[y])try{a(d,y,i[y])}catch(t){d[y]=i[y]}}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var r=n(15),o=n(8),i=n(11);t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,i(0,n)):t[a]=n}},function(t,e,n){var r=n(2),o=n(1),i=n(66),a=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){var r,o,i=n(0),a=n(88),u=i.process,c=u&&u.versions,s=c&&c.v8;s?o=(r=s.split("."))[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,e,n){t.exports=n(101)},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(0),o=n(28),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(0),o=n(45),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){var r=n(21),o=n(30),i=n(33),a=n(9);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(10),o=n(22),i=n(49),a=function(t){return function(e,n,a){var u,c=r(e),s=o(c.length),f=i(a,s);if(t&&n!=n){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},function(t,e,n){var r=n(2),o=/#|\.prototype\./,i=function(t,e){var n=u[a(t)];return n==s||n!=c&&("function"==typeof e?r(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},c=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,e,n){var r=n(7),o=n(8),i=n(9),a=n(36);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=a(e),u=r.length,c=0;u>c;)o.f(t,n=r[c++],e[n]);return t}},function(t,e,n){var r=n(21);t.exports=r("document","documentElement")},function(t,e,n){var r=n(10),o=n(30).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(r(t))}},function(t,e,n){var r=n(79);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){"use strict";var r=n(58).IteratorPrototype,o=n(35),i=n(11),a=n(37),u=n(40),c=function(){return this};t.exports=function(t,e,n){var s=e+" Iterator";return t.prototype=o(r,{next:i(1,n)}),a(t,s,!1,!0),u[s]=c,t}},function(t,e,n){var r=n(2);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,n){var r=n(9),o=n(83);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){"use strict";var r=n(41),o=n(85);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,e,n){var r=n(41),o=n(27),i=n(1)("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:a?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},function(t,e,n){var r=n(31),o=n(14),i=function(t){return function(e,n){var i,a,u=String(o(e)),c=r(n),s=u.length;return c<0||c>=s?t?"":void 0:(i=u.charCodeAt(c))<55296||i>56319||c+1===s||(a=u.charCodeAt(c+1))<56320||a>57343?t?u.charAt(c):i:t?u.slice(c,c+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e,n){"use strict";var r=n(6),o=n(2),i=n(23),a=n(4),u=n(13),c=n(22),s=n(64),f=n(53),l=n(65),p=n(1),d=n(66),y=p("isConcatSpreadable"),v=d>=51||!o((function(){var t=[];return t[y]=!1,t.concat()[0]!==t})),g=l("concat"),h=function(t){if(!a(t))return!1;var e=t[y];return void 0!==e?!!e:i(t)};r({target:"Array",proto:!0,forced:!v||!g},{concat:function(t){var e,n,r,o,i,a=u(this),l=f(a,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?a:arguments[e],h(i)){if(p+(o=c(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&s(l,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(l,p++,i)}return l.length=p,l}})},function(t,e,n){var r=n(21);t.exports=r("navigator","userAgent")||""},function(t,e,n){"use strict";var r=n(6),o=n(38).find,i=n(56),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("find")},function(t,e,n){"use strict";var r=n(6),o=n(4),i=n(23),a=n(49),u=n(22),c=n(10),s=n(64),f=n(65),l=n(1)("species"),p=[].slice,d=Math.max;r({target:"Array",proto:!0,forced:!f("slice")},{slice:function(t,e){var n,r,f,y=c(this),v=u(y.length),g=a(t,v),h=a(void 0===e?v:e,v);if(i(y)&&("function"!=typeof(n=y.constructor)||n!==Array&&!i(n.prototype)?o(n)&&null===(n=n[l])&&(n=void 0):n=void 0,n===Array||void 0===n))return p.call(y,g,h);for(r=new(void 0===n?Array:n)(d(h-g,0)),f=0;g<h;g++,f++)g in y&&s(r,f,y[g]);return r.length=f,r}})},function(t,e,n){var r=n(6),o=n(92);r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},function(t,e,n){"use strict";var r=n(7),o=n(2),i=n(36),a=n(33),u=n(25),c=n(13),s=n(26),f=Object.assign,l=Object.defineProperty;t.exports=!f||o((function(){if(r&&1!==f({b:1},f(l({},"a",{enumerable:!0,get:function(){l(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol();return t[n]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){e[t]=t})),7!=f({},t)[n]||"abcdefghijklmnopqrst"!=i(f({},e)).join("")}))?function(t,e){for(var n=c(t),o=arguments.length,f=1,l=a.f,p=u.f;o>f;)for(var d,y=s(arguments[f++]),v=l?i(y).concat(l(y)):i(y),g=v.length,h=0;g>h;)d=v[h++],r&&!p.call(y,d)||(n[d]=y[d]);return n}:f},function(t,e,n){var r=n(6),o=n(94);r({global:!0,forced:parseInt!=o},{parseInt:o})},function(t,e,n){var r=n(0),o=n(95).trim,i=n(67),a=r.parseInt,u=/^[+-]?0[Xx]/,c=8!==a(i+"08")||22!==a(i+"0x16");t.exports=c?function(t,e){var n=o(String(t));return a(n,e>>>0||(u.test(n)?16:10))}:a},function(t,e,n){var r=n(14),o="["+n(67)+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),u=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},function(t,e,n){"use strict";var r=n(12),o=n(9),i=n(2),a=n(97),u=RegExp.prototype,c=u.toString,s=i((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),f="toString"!=c.name;(s||f)&&r(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in u)?a.call(t):n)}),{unsafe:!0})},function(t,e,n){"use strict";var r=n(9);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var r=n(0),o=n(63),i=n(99),a=n(5);for(var u in o){var c=r[u],s=c&&c.prototype;if(s&&s.forEach!==i)try{a(s,"forEach",i)}catch(t){s.forEach=i}}},function(t,e,n){"use strict";var r=n(38).forEach,o=n(100);t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){"use strict";n.r(e);n(42),n(54),n(55),n(39),n(60),n(61),n(62),n(87),n(89),n(90),n(91),n(93),n(96),n(98);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);this.settings=Object.assign({},{onCreate:null,onEnd:null,onTick:null,compact:!1,allowNegative:!1,padValues:!1,separator:", ",showZeroes:!1,years:{allowed:!0,singular:"year",plural:"years"},weeks:{allowed:!0,singular:"week",plural:"weeks"},days:{allowed:!0,singular:"day",plural:"days"},hours:{allowed:!0,singular:"hour",plural:"hours"},minutes:{allowed:!0,singular:"minute",plural:"minutes"},seconds:{allowed:!0,singular:"second",plural:"seconds"}},r),this.$timers=Array.prototype.slice.call(document.querySelectorAll(".countdown-timer")),e&&0!==this.$timers.length?this.$timers.forEach((function(t){n.createTimer(t)})):console.error("10up Countdown Timer: Target not found. Please provide a valid target selector.")}var e,n,i;return e=t,(n=[{key:"createTimer",value:function(t){var e=new Date(t.getAttribute("datetime")).getTime();t.classList.add("tenup-countdown-timer"),"timer"!==t.getAttribute("role")&&t.setAttribute("role","timer"),t.getAttribute("tabindex")||t.setAttribute("tabindex",0),t.getAttribute("aria-label")||t.setAttribute("aria-label","Countdown timer"),t.setAttribute("aria-atomic","true"),e&&!isNaN(e)||(console.error("10up Countdown Timer: Time not found. Each countdown timer must have a datetime attribute with a valid date string. See https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats for details on how to build a valid date string."),e=(new Date).getTime()),t.textContent="",this.settings.onCreate&&"function"==typeof this.settings.onCreate&&this.settings.onCreate.call(this,{element:t,time:e}),this.createElements(t,e)}},{key:"createElements",value:function(t,e){var n=document.createElement("span"),r=n.cloneNode(),o=n.cloneNode(),i=n.cloneNode(),a=n.cloneNode(),u=n.cloneNode(),c=n.cloneNode(),s=document.createDocumentFragment();r.className="years",r.setAttribute("aria-label","years"),o.className="weeks",o.setAttribute("aria-label","weeks"),i.className="days",i.setAttribute("aria-label","days"),a.className="hours",a.setAttribute("aria-label","hours"),u.className="minutes",u.setAttribute("aria-label","minutes"),c.className="seconds",c.setAttribute("aria-label","seconds"),c.setAttribute("aria-hidden","true"),this.settings.years.allowed&&(s.appendChild(r),s.appendChild(document.createTextNode(this.settings.separator))),this.settings.weeks.allowed&&(s.appendChild(o),s.appendChild(document.createTextNode(this.settings.separator))),this.settings.days.allowed&&(s.appendChild(i),s.appendChild(document.createTextNode(this.settings.separator))),this.settings.hours.allowed&&(s.appendChild(a),s.appendChild(document.createTextNode(this.settings.separator))),this.settings.minutes.allowed&&(s.appendChild(u),s.appendChild(document.createTextNode(this.settings.separator))),this.settings.seconds.allowed&&s.appendChild(c),t.appendChild(s),this.startTimer(t,e,[r,o,i,a,u,c])}},{key:"startTimer",value:function(t,e,n){var o=this,i=function(){var i,u=r(n,6),c=u[0],s=u[1],f=u[2],l=u[3],p=u[4],d=u[5],y=(new Date).getTime(),v=e-y,g=0>v,h=o.formatDiff(v,e),b=r(h,6),m=b[0],x=b[1],w=b[2],S=b[3],O=b[4],j=b[5];if(h.find((function(e,r){if(0<e)return i=r,e;void 0===i&&(n[r].setAttribute("aria-hidden","true"),!o.settings.showZeroes&&t.contains(n[r])&&(n[r].nextSibling&&t.removeChild(n[r].nextSibling),t.removeChild(n[r])))})),i===n.length-1?(t.setAttribute("aria-live","polite"),n[i].setAttribute("aria-hidden","false")):0===h[5]?t.setAttribute("aria-live","polite"):t.setAttribute("aria-live","off"),o.settings.compact&&void 0!==i&&n.forEach((function(e,n){e.previousSibling&&t.removeChild(e.previousSibling),i===n?t.contains(e)||t.appendChild(e):t.contains(e)&&t.removeChild(e)})),0>=v&&!o.settings.allowNegative)return o.updateDisplay(t,c,0,o.settings.years),o.updateDisplay(t,s,0,o.settings.weeks),o.updateDisplay(t,f,0,o.settings.days),o.updateDisplay(t,l,0,o.settings.hours),o.updateDisplay(t,p,0,o.settings.minutes),o.updateDisplay(t,d,0,o.settings.seconds),a&&window.clearInterval(a),void(o.settings.onEnd&&"function"==typeof o.settings.onEnd&&o.settings.onEnd.call(o,{element:t,time:e}));o.updateDisplay(t,c,m,o.settings.years),o.updateDisplay(t,s,x,o.settings.weeks),o.updateDisplay(t,f,w,o.settings.days),o.updateDisplay(t,l,S,o.settings.hours),o.updateDisplay(t,p,O,o.settings.minutes),o.updateDisplay(t,d,j,o.settings.seconds),o.settings.onTick&&"function"==typeof o.settings.onTick&&o.settings.onTick.call(o,{element:t,time:e,diff:v,isNegative:g,years:parseInt(m),weeks:parseInt(x),days:parseInt(w),hours:parseInt(S),minutes:parseInt(O),seconds:parseInt(j)})};i();var a=window.setInterval(i,1e3)}},{key:"formatDiff",value:function(t,e){for(var n=0>t,r=new Date,o=new Date(e).getFullYear(),i=Math.floor(Math.abs(t)%864e5/36e5),a=Math.floor(Math.abs(t)%36e5/6e4),u=Math.floor(Math.abs(t)%6e4/1e3),c=0,s=0,f=Math.floor(Math.abs(t)/864e5),l=r.getFullYear(),p=l!==o;p&&365<=f;)c++,this.isLeapYear(l)?f-=366:f-=365,n?l--:l++,p=l!==o;for(;7<=f;)f-=7,52<=++s&&(s=0,c++);return[this.pad(c),this.pad(s),this.pad(f),this.pad(i),this.pad(a),this.pad(u)]}},{key:"updateDisplay",value:function(t,e,n,r){if(t.contains(e)){var o=1<n||0===n?r.plural:r.singular;e.textContent="".concat(n," ").concat(o),e.setAttribute("aria-label","".concat(n," ").concat(o))}}},{key:"pad",value:function(t){return this.settings.padValues&&10>t?"0".concat(t):t}},{key:"isLeapYear",value:function(t){return 0==t%100?0==t%400:0==t%4}}])&&o(e.prototype,n),i&&o(e,i),t}();function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}"object"!==a(window.TenUp)&&(window.TenUp={}),window.TenUp.CountdownTimer=i}]);
//# sourceMappingURL=countdown-timer.js.map