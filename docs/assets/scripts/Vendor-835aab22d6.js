!function(r){var i={};function n(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=r,n.c=i,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}({6:function(e,t,r){"use strict";r(7),r(8),r(!function(){var e=new Error('Cannot find module "../../temp/scripts/modernizr"');throw e.code="MODULE_NOT_FOUND",e}())},7:function(e,t){var r,i;r=window,i=function(c,_){"use strict";if(!_.getElementsByClassName){return}var k,$,I=_.documentElement,o=c.Date,i=c.HTMLPictureElement,u="addEventListener",O="getAttribute",U=c[u],F=c.setTimeout,l=c.requestAnimationFrame||F,f=c.requestIdleCallback,H=/^picture$/i,n=["load","error","lazyincluded","_lazyloaded"],r={},Q=Array.prototype.forEach,G=function(e,t){if(!r[t]){r[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return r[t].test(e[O]("class")||"")&&r[t]},j=function(e,t){if(!G(e,t)){e.setAttribute("class",(e[O]("class")||"").trim()+" "+t)}},q=function(e,t){var r;if(r=G(e,t)){e.setAttribute("class",(e[O]("class")||"").replace(r," "))}},V=function(t,r,e){var i=e?u:"removeEventListener";if(e){V(t,r)}n.forEach(function(e){t[i](e,r)})},K=function(e,t,r,i,n){var s=_.createEvent("CustomEvent");if(!r){r={}}r.instance=k;s.initCustomEvent(t,!i,!n,r);e.dispatchEvent(s);return s},J=function(e,t){var r;if(!i&&(r=c.picturefill||$.pf)){r({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},X=function(e,t){return(getComputedStyle(e,null)||{})[t]},a=function(e,t,r){r=r||e.offsetWidth;while(r<$.minSize&&t&&!e._lazysizesWidth){r=t.offsetWidth;t=t.parentNode}return r},Y=function(){var r,i;var t=[];var n=[];var s=t;var a=function(){var e=s;s=t.length?n:t;r=true;i=false;while(e.length){e.shift()()}r=false};var e=function(e,t){if(r&&!t){e.apply(this,arguments)}else{s.push(e);if(!i){i=true;(_.hidden?F:l)(a)}}};e._lsFlush=a;return e}(),Z=function(r,e){return e?function(){Y(r)}:function(){var e=this;var t=arguments;Y(function(){r.apply(e,t)})}},ee=function(e){var r;var i=0;var n=125;var s=$.ricTimeout;var t=function(){r=false;i=o.now();e()};var a=f&&$.ricTimeout?function(){f(t,{timeout:s});if(s!==$.ricTimeout){s=$.ricTimeout}}:Z(function(){F(t)},true);return function(e){var t;if(e=e===true){s=33}if(r){return}r=true;t=n-(o.now()-i);if(t<0){t=0}if(e||t<9&&f){a()}else{F(a,t)}}},te=function(e){var t,r;var i=99;var n=function(){t=null;e()};var s=function(){var e=o.now()-r;if(e<i){F(s,i-e)}else{(f||n)(n)}};return function(){r=o.now();if(!t){t=F(s,i)}}};(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:300};$=c.lazySizesConfig||c.lazysizesConfig||{};for(e in t){if(!(e in $)){$[e]=t[e]}}c.lazySizesConfig=$;F(function(){if($.init){s()}})})();var e=function(){var l,f,d,p,t;var m,h,v,A,g,y;var z,w,b;var s=/^img$/i;var E=/^iframe$/i;var C="onscroll"in c&&!/glebot/.test(navigator.userAgent);var x=0;var S=0;var T=0;var M=-1;var R=function(e){T--;if(e&&e.target){V(e.target,R)}if(!e||T<0||!e.target){T=0}};var L=function(e,t){var r;var i=e;var n=X(_.body,"visibility")=="hidden"||X(e,"visibility")!="hidden";v-=t;y+=t;A-=t;g+=t;while(n&&(i=i.offsetParent)&&i!=_.body&&i!=I){n=(X(i,"opacity")||1)>0;if(n&&X(i,"overflow")!="visible"){r=i.getBoundingClientRect();n=g>r.left&&A<r.right&&y>r.top-1&&v<r.bottom+1}}return n};var e=function(){var e,t,r,i,n,s,a,c,o;var u=k.elements;if((p=$.loadMode)&&T<8&&(e=u.length)){t=0;M++;if(w==null){if(!("expand"in $)){$.expand=I.clientHeight>500&&I.clientWidth>500?500:370}z=$.expand;w=z*$.expFactor}if(S<w&&T<1&&M>2&&p>2&&!_.hidden){S=w;M=0}else if(p>1&&M>1&&T<6){S=z}else{S=x}for(;t<e;t++){if(!u[t]||u[t]._lazyRace){continue}if(!C){N(u[t]);continue}if(!(c=u[t][O]("data-expand"))||!(s=c*1)){s=S}if(o!==s){m=innerWidth+s*b;h=innerHeight+s;a=s*-1;o=s}r=u[t].getBoundingClientRect();if((y=r.bottom)>=a&&(v=r.top)<=h&&(g=r.right)>=a*b&&(A=r.left)<=m&&(y||g||A||v)&&($.loadHidden||X(u[t],"visibility")!="hidden")&&(f&&T<3&&!c&&(p<3||M<4)||L(u[t],s))){N(u[t]);n=true;if(T>9){break}}else if(!n&&f&&!i&&T<4&&M<4&&p>2&&(l[0]||$.preloadAfterLoad)&&(l[0]||!c&&(y||g||A||v||u[t][O]($.sizesAttr)!="auto"))){i=l[0]||u[t]}}if(i&&!n){N(i)}}};var r=ee(e);var P=function(e){j(e.target,$.loadedClass);q(e.target,$.loadingClass);V(e.target,B);K(e.target,"lazyloaded")};var i=Z(P);var B=function(e){i({target:e.target})};var D=function(t,r){try{t.contentWindow.location.replace(r)}catch(e){t.src=r}};var W=function(e){var t;var r=e[O]($.srcsetAttr);if(t=$.customMedia[e[O]("data-media")||e[O]("media")]){e.setAttribute("media",t)}if(r){e.setAttribute("srcset",r)}};var a=Z(function(e,t,r,i,n){var s,a,c,o,u,l;if(!(u=K(e,"lazybeforeunveil",t)).defaultPrevented){if(i){if(r){j(e,$.autosizesClass)}else{e.setAttribute("sizes",i)}}a=e[O]($.srcsetAttr);s=e[O]($.srcAttr);if(n){c=e.parentNode;o=c&&H.test(c.nodeName||"")}l=t.firesLoad||"src"in e&&(a||s||o);u={target:e};if(l){V(e,R,true);clearTimeout(d);d=F(R,2500);j(e,$.loadingClass);V(e,B,true)}if(o){Q.call(c.getElementsByTagName("source"),W)}if(a){e.setAttribute("srcset",a)}else if(s&&!o){if(E.test(e.nodeName)){D(e,s)}else{e.src=s}}if(n&&(a||o)){J(e,{src:s})}}if(e._lazyRace){delete e._lazyRace}q(e,$.lazyClass);Y(function(){if(!l||e.complete&&e.naturalWidth>1){if(l){R(u)}else{T--}P(u)}},true)});var N=function(e){var t;var r=s.test(e.nodeName);var i=r&&(e[O]($.sizesAttr)||e[O]("sizes"));var n=i=="auto";if((n||!f)&&r&&(e[O]("src")||e.srcset)&&!e.complete&&!G(e,$.errorClass)&&G(e,$.lazyClass)){return}t=K(e,"lazyunveilread").detail;if(n){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;T++;a(e,t,n,i,r)};var n=function(){if(f){return}if(o.now()-t<999){F(n,999);return}var e=te(function(){$.loadMode=3;r()});f=true;$.loadMode=3;r();U("scroll",function(){if($.loadMode==3){$.loadMode=2}e()},true)};return{_:function(){t=o.now();k.elements=_.getElementsByClassName($.lazyClass);l=_.getElementsByClassName($.lazyClass+" "+$.preloadClass);b=$.hFac;U("scroll",r,true);U("resize",r,true);if(c.MutationObserver){new MutationObserver(r).observe(I,{childList:true,subtree:true,attributes:true})}else{I[u]("DOMNodeInserted",r,true);I[u]("DOMAttrModified",r,true);setInterval(r,999)}U("hashchange",r,true);["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){_[u](e,r,true)});if(/d$|^c/.test(_.readyState)){n()}else{U("load",n);_[u]("DOMContentLoaded",r);F(n,2e4)}if(k.elements.length){e();Y._lsFlush()}else{r()}},checkElems:r,unveil:N}}(),re=function(){var r;var s=Z(function(e,t,r,i){var n,s,a;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(H.test(t.nodeName||"")){n=t.getElementsByTagName("source");for(s=0,a=n.length;s<a;s++){n[s].setAttribute("sizes",i)}}if(!r.detail.dataAttr){J(e,r.detail)}});var i=function(e,t,r){var i;var n=e.parentNode;if(n){r=a(e,n,r);i=K(e,"lazybeforesizes",{width:r,dataAttr:!!t});if(!i.defaultPrevented){r=i.detail.width;if(r&&r!==e._lazysizesWidth){s(e,n,i,r)}}}};var e=function(){var e;var t=r.length;if(t){e=0;for(;e<t;e++){i(r[e])}}};var t=te(e);return{_:function(){r=_.getElementsByClassName($.autosizesClass);U("resize",t)},checkElems:t,updateElem:i}}(),s=function(){if(!s.i){s.i=true;re._();e._()}};return k={cfg:$,autoSizer:re,loader:e,init:s,uP:J,aC:j,rC:q,hC:G,fire:K,gW:a,rAF:Y}}(r,r.document),r.lazySizes=i,"object"==typeof e&&e.exports&&(e.exports=i)},8:function(fe,de,pe){var me,e,t,n,r,i;function s(e){var t,r,i=e.parentNode;"PICTURE"===i.nodeName.toUpperCase()?(t=n.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))}function a(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)s(t[e])}function c(){clearTimeout(t),t=setTimeout(a,99)}function o(){c(),r&&r.addListener&&r.addListener(c)}e=window,i=navigator.userAgent,e.HTMLPictureElement&&/ecko/.test(i)&&i.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(n=document.createElement("source"),r=e.matchMedia&&matchMedia("(orientation: landscape)"),n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),c)),function(e,s,u){"use strict";var n,l,a;s.createElement("picture");function t(){}function r(e,t,r,i){e.addEventListener?e.addEventListener(t,r,i||!1):e.attachEvent&&e.attachEvent("on"+t,r)}function i(t){var r={};return function(e){return e in r||(r[e]=t(e)),r[e]}}var y={},c=!1,o=s.createElement("img"),f=o.getAttribute,d=o.setAttribute,p=o.removeAttribute,m=s.documentElement,h={},z={algorithm:""},v="data-pfsrc",A=v+"set",g=navigator.userAgent,w=/rident/.test(g)||/ecko/.test(g)&&g.match(/rv\:(\d+)/)&&35<RegExp.$1,b="currentSrc",E=/\s+\+?\d+(e\d+)?w/,C=/(\([^)]+\))?\s*(.+)/,x=e.picturefillCFG,S="font-size:100%!important;",T=!0,M={},R={},L=e.devicePixelRatio,P={px:1,in:96},B=s.createElement("a"),D=!1,W=/^[ \t\n\r\u000c]+/,N=/^[, \t\n\r\u000c]+/,_=/^[^ \t\n\r\u000c]+/,k=/[,]+$/,$=/^\d+$/,I=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;function O(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function U(e,t){return e.w?(e.cWidth=y.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e}var F,H,Q,G,j,q,V,K,J,X,Y,Z,ee,te,re,ie,ne,se,ae=(F=/^([\d\.]+)(em|vw|px)$/,H=i(function(e){return"return "+function(){for(var e=arguments,t=0,r=e[0];++t in e;)r=r.replace(e[t],e[++t]);return r}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var r;if(!(e in M))if(M[e]=!1,t&&(r=e.match(F)))M[e]=r[1]*P[r[2]];else try{M[e]=new Function("e",H(e))(P)}catch(e){}return M[e]}),ce=function(e){if(c){var t,r,i,n=e||{};if(n.elements&&1===n.elements.nodeType&&("IMG"===n.elements.nodeName.toUpperCase()?n.elements=[n.elements]:(n.context=n.elements,n.elements=null)),i=(t=n.elements||y.qsa(n.context||s,n.reevaluate||n.reselect?y.sel:y.selShort)).length){for(y.setupRun(n),D=!0,r=0;r<i;r++)y.fillImg(t[r],n);y.teardownRun(n)}}};function oe(e,t){return e.res-t.res}function ue(e,t){var r,i,n;if(e&&t)for(n=y.parseSet(t),e=y.makeUrl(e),r=0;r<n.length;r++)if(e===y.makeUrl(n[r].url)){i=n[r];break}return i}function le(){2===j.width&&(y.supSizes=!0),l=y.supSrcset&&!y.supSizes,c=!0,setTimeout(ce)}e.console&&console.warn,b in o||(b="src"),h["image/jpeg"]=!0,h["image/gif"]=!0,h["image/png"]=!0,h["image/svg+xml"]=s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),y.ns=("pf"+(new Date).getTime()).substr(0,9),y.supSrcset="srcset"in o,y.supSizes="sizes"in o,y.supPicture=!!e.HTMLPictureElement,y.supSrcset&&y.supPicture&&!y.supSizes&&(Q=s.createElement("img"),o.srcset="data:,a",Q.src="data:,a",y.supSrcset=o.complete===Q.complete,y.supPicture=y.supSrcset&&y.supPicture),y.supSrcset&&!y.supSizes?(G="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",(j=s.createElement("img")).onload=le,j.onerror=le,j.setAttribute("sizes","9px"),j.srcset=G+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",j.src=G):c=!0,y.selShort="picture>img,img[srcset]",y.sel=y.selShort,y.cfg=z,y.DPR=L||1,y.u=P,y.types=h,y.setSize=t,y.makeUrl=i(function(e){return B.href=e,B.href}),y.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},y.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?y.matchesMedia=function(e){return!e||matchMedia(e).matches}:y.matchesMedia=y.mMQ,y.matchesMedia.apply(this,arguments)},y.mMQ=function(e){return!e||ae(e)},y.calcLength=function(e){var t=ae(e,!0)||!1;return t<0&&(t=!1),t},y.supportsType=function(e){return!e||h[e]},y.parseSize=i(function(e){var t=(e||"").match(C);return{media:t&&t[1],length:t&&t[2]}}),y.parseSet=function(e){return e.cands||(e.cands=function(i,f){function e(e){var t,r=e.exec(i.substring(a));if(r)return t=r[0],a+=t.length,t}var d,p,t,r,n,s=i.length,a=0,m=[];function c(){var e,t,r,i,n,s,a,c,o,u=!1,l={};for(i=0;i<p.length;i++)s=(n=p[i])[n.length-1],a=n.substring(0,n.length-1),c=parseInt(a,10),o=parseFloat(a),$.test(a)&&"w"===s?((e||t)&&(u=!0),0===c?u=!0:e=c):I.test(a)&&"x"===s?((e||t||r)&&(u=!0),o<0?u=!0:t=o):$.test(a)&&"h"===s?((r||t)&&(u=!0),0===c?u=!0:r=c):u=!0;u||(l.url=d,e&&(l.w=e),t&&(l.d=t),r&&(l.h=r),r||t||e||(l.d=1),1===l.d&&(f.has1x=!0),l.set=f,m.push(l))}function o(){for(e(W),t="",r="in descriptor";;){if(n=i.charAt(a),"in descriptor"===r)if(O(n))t&&(p.push(t),t="",r="after descriptor");else{if(","===n)return a+=1,t&&p.push(t),void c();if("("===n)t+=n,r="in parens";else{if(""===n)return t&&p.push(t),void c();t+=n}}else if("in parens"===r)if(")"===n)t+=n,r="in descriptor";else{if(""===n)return p.push(t),void c();t+=n}else if("after descriptor"===r)if(O(n));else{if(""===n)return void c();r="in descriptor",a-=1}a+=1}}for(;;){if(e(N),s<=a)return m;d=e(_),p=[],","===d.slice(-1)?(d=d.replace(k,""),c()):o()}}(e.srcset,e)),e.cands},y.getEmValue=function(){var e;if(!n&&(e=s.body)){var t=s.createElement("div"),r=m.style.cssText,i=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",m.style.cssText=S,e.style.cssText=S,e.appendChild(t),n=t.offsetWidth,e.removeChild(t),n=parseFloat(n,10),m.style.cssText=r,e.style.cssText=i}return n||16},y.calcListLength=function(e){if(!(e in R)||z.uT){var t=y.calcLength(function(e){var t,r,i,n,s,a,c,o=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,u=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(i=(r=function(e){var t,r="",i=[],n=[],s=0,a=0,c=!1;function o(){r&&(i.push(r),r="")}function u(){i[0]&&(n.push(i),i=[])}for(;;){if(""===(t=e.charAt(a)))return o(),u(),n;if(c){if("*"===t&&"/"===e[a+1]){c=!1,a+=2,o();continue}a+=1}else{if(O(t)){if(e.charAt(a-1)&&O(e.charAt(a-1))||!r){a+=1;continue}if(0===s){o(),a+=1;continue}t=" "}else if("("===t)s+=1;else if(")"===t)s-=1;else{if(","===t){o(),u(),a+=1;continue}if("/"===t&&"*"===e.charAt(a+1)){c=!0,a+=2;continue}}r+=t,a+=1}}}(e)).length,t=0;t<i;t++)if(s=(n=r[t])[n.length-1],c=s,o.test(c)&&0<=parseFloat(c)||u.test(c)||"0"===c||"-0"===c||"+0"===c){if(a=s,n.pop(),0===n.length)return a;if(n=n.join(" "),y.matchesMedia(n))return a}return"100vw"}(e));R[e]=t||P.width}return R[e]},y.setRes=function(e){var t;if(e)for(var r=0,i=(t=y.parseSet(e)).length;r<i;r++)U(t[r],e.sizes);return t},y.setRes.res=U,y.applySetCandidate=function(e,t){if(e.length){var r,i,n,s,a,c,o,u,l,f,d,p,m,h,v,A=t[y.ns],g=y.DPR;if(c=A.curSrc||t[b],(o=A.curCan||function(e,t,r){var i;return!r&&t&&(r=(r=e[y.ns].sets)&&r[r.length-1]),(i=ue(t,r))&&(t=y.makeUrl(t),e[y.ns].curSrc=t,(e[y.ns].curCan=i).res||U(i,i.set.sizes)),i}(t,c,e[0].set))&&o.set===e[0].set&&((l=w&&!t.complete&&o.res-.1>g)||(o.cached=!0,o.res>=g&&(a=o))),!a)for(e.sort(oe),a=e[(s=e.length)-1],i=0;i<s;i++)if((r=e[i]).res>=g){a=e[n=i-1]&&(l||c!==y.makeUrl(r.url))&&(f=e[n].res,d=r.res,p=g,m=e[n].cached,v=h=void 0,p<("saveData"===z.algorithm?2.7<f?p+1:(v=(d-p)*(h=Math.pow(f-.6,1.5)),m&&(v+=.1*h),f+v):1<p?Math.sqrt(f*d):f))?e[n]:r;break}a&&(u=y.makeUrl(a.url),A.curSrc=u,A.curCan=a,u!==c&&y.setSrc(t,a),y.setSize(t))}},y.setSrc=function(e,t){var r;e.src=t.url,"image/svg+xml"===t.set.type&&(r=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=r))},y.getSet=function(e){var t,r,i,n=!1,s=e[y.ns].sets;for(t=0;t<s.length&&!n;t++)if((r=s[t]).srcset&&y.matchesMedia(r.media)&&(i=y.supportsType(r.type))){"pending"===i&&(r=i),n=r;break}return n},y.parseSets=function(e,t,r){var i,n,s,a,c=t&&"PICTURE"===t.nodeName.toUpperCase(),o=e[y.ns];o.src!==u&&!r.src||(o.src=f.call(e,"src"),o.src?d.call(e,v,o.src):p.call(e,v)),o.srcset!==u&&!r.srcset&&y.supSrcset&&!e.srcset||(i=f.call(e,"srcset"),o.srcset=i,a=!0),o.sets=[],c&&(o.pic=!0,function(e,t){var r,i,n,s,a=e.getElementsByTagName("source");for(r=0,i=a.length;r<i;r++)(n=a[r])[y.ns]=!0,(s=n.getAttribute("srcset"))&&t.push({srcset:s,media:n.getAttribute("media"),type:n.getAttribute("type"),sizes:n.getAttribute("sizes")})}(t,o.sets)),o.srcset?(n={srcset:o.srcset,sizes:f.call(e,"sizes")},o.sets.push(n),(s=(l||o.src)&&E.test(o.srcset||""))||!o.src||ue(o.src,n)||n.has1x||(n.srcset+=", "+o.src,n.cands.push({url:o.src,d:1,set:n}))):o.src&&o.sets.push({srcset:o.src,sizes:null}),o.curCan=null,o.curSrc=u,o.supported=!(c||n&&!y.supSrcset||s&&!y.supSizes),a&&y.supSrcset&&!o.supported&&(i?(d.call(e,A,i),e.srcset=""):p.call(e,A)),o.supported&&!o.srcset&&(!o.src&&e.src||e.src!==y.makeUrl(o.src))&&(null===o.src?e.removeAttribute("src"):e.src=o.src),o.parsed=!0},y.fillImg=function(e,t){var r,i=t.reselect||t.reevaluate;e[y.ns]||(e[y.ns]={}),r=e[y.ns],!i&&r.evaled===a||(r.parsed&&!t.reevaluate||y.parseSets(e,e.parentNode,t),r.supported?r.evaled=a:function(e){var t,r=y.getSet(e),i=!1;"pending"!==r&&(i=a,r&&(t=y.setRes(r),y.applySetCandidate(t,e))),e[y.ns].evaled=i}(e))},y.setupRun=function(){D&&!T&&L===e.devicePixelRatio||(T=!1,L=e.devicePixelRatio,M={},R={},y.DPR=L||1,P.width=Math.max(e.innerWidth||0,m.clientWidth),P.height=Math.max(e.innerHeight||0,m.clientHeight),P.vw=P.width/100,P.vh=P.height/100,a=[P.height,P.width,L].join("-"),P.em=y.getEmValue(),P.rem=P.em)},y.supPicture?(ce=t,y.fillImg=t):(Z=e.attachEvent?/d$|^c/:/d$|^c|^i/,ee=function(){var e=s.readyState||"";te=setTimeout(ee,"loading"===e?200:999),s.body&&(y.fillImgs(),(q=q||Z.test(e))&&clearTimeout(te))},te=setTimeout(ee,s.body?9:99),re=m.clientHeight,r(e,"resize",(V=function(){T=Math.max(e.innerWidth||0,m.clientWidth)!==P.width||m.clientHeight!==re,re=m.clientHeight,T&&y.fillImgs()},K=99,Y=function(){var e=new Date-X;e<K?J=setTimeout(Y,K-e):(J=null,V())},function(){X=new Date,J=J||setTimeout(Y,K)})),r(s,"readystatechange",ee)),y.picturefill=ce,y.fillImgs=ce,y.teardownRun=t,ce._=y,e.picturefillCFG={pf:y,push:function(e){var t=e.shift();"function"==typeof y[t]?y[t].apply(y,e):(z[t]=e[0],D&&y.fillImgs({reselect:!0}))}};for(;x&&x.length;)e.picturefillCFG.push(x.shift());e.picturefill=ce,"object"==typeof fe&&"object"==typeof fe.exports?fe.exports=ce:(me=function(){return ce}.call(de,pe,de,fe))===u||(fe.exports=me),y.supPicture||(h["image/webp"]=(ie="image/webp",ne="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(se=new e.Image).onerror=function(){h[ie]=!1,ce()},se.onload=function(){h[ie]=1===se.width,ce()},se.src=ne,"pending"))}(window,document)}});