// For license information, see `https://assets.adobedtm.com/extensions/EP7b1fa4581fb94dd0961a981af9997765/AppMeasurement_Module_ActivityMap.js`.
function AppMeasurement_Module_ActivityMap(o){function e(){var e=t.pageYOffset+(t.innerHeight||0);e&&+g<e&&(g=e)}function n(){if(f.scrollReachSelector){var t=o.d.querySelector&&o.d.querySelector(f.scrollReachSelector);t?(g=t.scrollTop||0,t.addEventListener("scroll",function(){var e;(e=t&&t.scrollTop+t.clientHeight||0)>g&&(g=e)})):0<i--&&setTimeout(n,1e3)}}function a(e,t){var n,r,i;if(e&&t&&(n=f.c[t]||(f.c[t]=t.split(","))))for(i=0;i<n.length&&(r=n[i++]);)if(-1<e.indexOf(r))return null;return p=1,e}function c(e,t,n,r,i){var a,c;if(e.dataset&&(c=e.dataset[t])?a=c:e.getAttribute&&((c=e.getAttribute("data-"+n))?a=c:(c=e.getAttribute(n))&&(a=c)),!a&&o.useForcedLinkTracking&&i){var l;if(e=e.onclick?""+e.onclick:"",varValue="",r&&e&&0<=(t=e.indexOf(r))){for(t+=r.length;t<e.length;)if(n=e.charAt(t++),0<="'\"".indexOf(n)){l=n;break}for(c=!1;t<e.length&&l&&(n=e.charAt(t),c||n!==l);)"\\"===n?c=!0:(varValue+=n,c=!1),t++}(l=varValue)&&(o.w[r]=l)}return a||i&&o.w[r]}function l(e,t,n){var r;return(r=f[t](e,n))&&(p?(p=0,r):a(u(r),f[t+"Exclusions"]))}function s(e,t,n){var r;if(e&&!(1===(r=e.nodeType)&&(r=e.nodeName)&&(r=r.toUpperCase())&&d[r])&&(1===e.nodeType&&(r=e.nodeValue)&&(t[t.length]=r),n.a||n.t||n.s||!e.getAttribute||((r=e.getAttribute("alt"))?n.a=r:(r=e.getAttribute("title"))?n.t=r:"IMG"==(""+e.nodeName).toUpperCase()&&(r=e.getAttribute("src")||e.src)&&(n.s=r)),(r=e.childNodes)&&r.length))for(e=0;e<r.length;e++)s(r[e],t,n)}function u(e){if(null==e||null==e)return e;try{return e.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \xa0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \xa0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \xa0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)}catch(t){}}var f=this;f.s=o;var t=window;t.s_c_in||(t.s_c_il=[],t.s_c_in=0),f._il=t.s_c_il,f._in=t.s_c_in,f._il[f._in]=f,t.s_c_in++,f._c="s_m";var r,g=0,i=60;f.c={};var p=0,d={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};f._g=function(){var e,t,n,r=o.contextData,i=o.linkObject;(e=o.pageName||o.pageURL)&&(t=l(i,"link",o.linkName))&&(n=l(i,"region"))&&(r["a.activitymap.page"]=e.substring(0,255),r["a.activitymap.link"]=128<t.length?t.substring(0,128):t,r["a.activitymap.region"]=127<n.length?n.substring(0,127):n,0<g&&(r["a.activitymap.xy"]=10*Math.floor(g/10)),r["a.activitymap.pageIDType"]=o.pageName?1:0)},f._d=function(){f.trackScrollReach&&!r&&(f.scrollReachSelector?n():(e(),t.addEventListener&&t.addEventListener("scroll",e,!1)),r=!0)},f.link=function(e,t){var n;if(t)n=a(u(t),f.linkExclusions);else if((n=e)&&!(n=c(e,"sObjectId","s-object-id","s_objectID",1))){var r,i;(i=a(u(e.innerText||e.textContent),f.linkExclusions))||(s(e,r=[],n={a:void 0,t:void 0,s:void 0}),(i=a(u(r.join(""))))||(i=a(u(n.a?n.a:n.t?n.t:n.s?n.s:void 0)))||!(r=(r=e.tagName)&&r.toUpperCase?r.toUpperCase():"")||("INPUT"==r||"SUBMIT"==r&&e.value?i=a(u(e.value)):"IMAGE"==r&&e.src&&(i=a(u(e.src))))),n=i}return n},f.region=function(e){for(var t,n=f.regionIDAttribute||"id";e&&(e=e.parentNode);){if(t=c(e,n,n,n))return t;if("BODY"==e.nodeName)return"BODY"}}}