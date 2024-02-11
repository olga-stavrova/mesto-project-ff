/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t,e,r,n,o={337:(t,e,r)=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return e};var t,e={},r=Object.prototype,a=r.hasOwnProperty,c=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),i=new T(n||[]);return c(a,"_invoke",{value:C(t,r,i)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var h="suspendedStart",y="suspendedYield",v="executing",m="completed",_={};function b(){}function S(){}function g(){}var w={};f(w,u,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(P([])));E&&E!==r&&a.call(E,u)&&(w=E);var x=g.prototype=b.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function q(t,e){function r(o,c,i,u){var l=p(t[o],t,c);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==n(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,u)}))}u(l.arg)}var o;c(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function C(e,r,n){var o=h;return function(a,c){if(o===v)throw new Error("Generator is already running");if(o===m){if("throw"===a)throw c;return{value:t,done:!0}}for(n.method=a,n.arg=c;;){var i=n.delegate;if(i){var u=A(i,n);if(u){if(u===_)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=p(e,r,n);if("normal"===l.type){if(o=n.done?m:y,l.arg===_)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function A(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,A(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),_;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,_;var c=a.arg;return c?c.done?(r[e.resultName]=c.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,_):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,_)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,c=function r(){for(;++o<e.length;)if(a.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return c.next=c}}throw new TypeError(n(e)+" is not iterable")}return S.prototype=g,c(x,"constructor",{value:g,configurable:!0}),c(g,"constructor",{value:S,configurable:!0}),S.displayName=f(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,f(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},k(q.prototype),f(q.prototype,l,(function(){return this})),e.AsyncIterator=q,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var c=new q(d(t,r,n,o),a);return e.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},k(x),f(x,s,"Generator"),f(x,u,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return i.type="throw",i.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var u=a.call(c,"catchLoc"),l=a.call(c,"finallyLoc");if(u&&l){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,_):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),_}},e}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e,r,n,o,a,c){try{var i=t[a](c),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,o)}r.d(e,{Rg:()=>h,ZQ:()=>d,_H:()=>f,fP:()=>u,it:()=>l,w:()=>s,yT:()=>p});var i={baseUrl:"https://nomoreparties.co/v1/wff-cohort-6",headers:{authorization:"8aaa1ad9-6ed1-4bcb-bc32-b56ed203ae01","Content-Type":"application/json"}};function u(){var t={cardsData:[],userData:[]};return Promise.all([fetch("".concat(i.baseUrl,"/cards"),{headers:i.headers}),fetch("".concat(i.baseUrl,"/users/me"),{headers:i.headers})]).then(function(){var e,r=(e=o().mark((function e(r){var n,c,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=2,n=function(t){if(Array.isArray(t))return t}(o=r)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,c,i=[],u=!0,l=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(i.push(n.value),i.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(l)throw o}}return i}}(o,u)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}(o,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),c=n[0],i=n[1],e.next=3,c.json();case 3:return t.cardsData=e.sent,e.next=6,i.json();case 6:return t.userData=e.sent,e.abrupt("return",t);case 8:case"end":return e.stop()}var o,u}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(t){c(a,n,o,i,u,"next",t)}function u(t){c(a,n,o,i,u,"throw",t)}i(void 0)}))});return function(t){return r.apply(this,arguments)}}()).catch((function(t){console.log(t)}))}function l(t,e){return fetch("".concat(i.baseUrl,"/users/me"),{method:"PATCH",headers:i.headers,body:JSON.stringify({name:t,about:e})}).then((function(t){if(t.ok)return t.json()})).catch((function(t){console.log(t)}))}function s(t,e){return fetch("".concat(i.baseUrl,"/cards"),{method:"POST",headers:i.headers,body:JSON.stringify({name:t,link:e})}).then((function(t){if(t.ok)return t.json()})).catch((function(t){console.log(t)}))}function f(t){return fetch("".concat(i.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:i.headers}).then((function(t){if(t.ok)return t.json()})).catch((function(t){console.log(t)}))}function d(t){return fetch("".concat(i.baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:i.headers}).then((function(t){if(t.ok)return t.json()})).catch((function(t){console.log(t)}))}function p(t){return fetch("".concat(i.baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:i.headers}).then((function(t){if(t.ok)return t.json()})).catch((function(t){console.log(t)}))}function h(t){return fetch("".concat(i.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:i.headers,body:JSON.stringify({avatar:t})}).then((function(t){if(t.ok)return t.json()})).catch((function(t){console.log(t)}))}},516:(t,e,r)=>{r.d(e,{AS:()=>i,LH:()=>a,ti:()=>c});var n=r(337),o=document.querySelector("#card-template").content;function a(t,e,r,n,a){var c=o.querySelector(".card").cloneNode(!0);c.id=t._id;var i=c.querySelector(".card__image");i.src=t.link,i.alt=t.name,c.querySelector(".card__title").textContent=t.name,i.addEventListener("click",a);var u=c.querySelector(".card__delete-button");t.owner._id===e._id?u.addEventListener("click",r):u.style.visibility="hidden";var l=c.querySelector(".card__like-button");return l.addEventListener("click",n),c.querySelector(".likes_counter").textContent=t.likes.length,t.likes.forEach((function(t){t._id===e._id&&l.classList.add("card__like-button_is-active")})),c}function c(t){var e=t.target.closest(".card");e.remove(),(0,n._H)(e.id)}function i(t){var e=t.target;e.classList.toggle("card__like-button_is-active");var r=t.target.closest(".card");e.classList.contains("card__like-button_is-active")?((0,n.ZQ)(r.id),r.querySelector(".likes_counter").textContent++):((0,n.yT)(r.id),r.querySelector(".likes_counter").textContent--)}},927:(t,e,r)=>{r.a(t,(async(t,e)=>{try{var n=r(516),o=r(598),a=r(355),c=r(337),i={closeSelector:".popup__close",inputTypeUrlSelector:".popup__input_type_url",animatedClass:"popup_is-animated"},u=document.querySelector(".places__list");function j(t){t.forEach((function(t){var e=(0,n.LH)(t,l.userData,n.ti,n.AS,M);u.appendChild(e)}))}var l=await(0,c.fP)(),s=l.cardsData,f=l.userData,d=document.querySelector(".profile__image"),p=document.querySelector(".profile__title"),h=document.querySelector(".profile__description");p.textContent=f.name,h.textContent=f.about,d.style.backgroundImage="url(".concat(f.avatar,")"),j(s);var y=document.querySelector(".popup_type_edit"),v=y.querySelector(i.closeSelector);function O(){(0,o.Mr)(y)}y.classList.add(i.animatedClass),v.addEventListener("click",O);var m=y.querySelector(".popup__input_type_name"),_=y.querySelector(".popup__input_type_description"),b=document.querySelector(".popup_type_new-card"),S=b.querySelector(i.closeSelector);function T(){(0,o.Mr)(b),b.querySelector(a.Ac.formSelector).reset()}b.classList.add(i.animatedClass),S.addEventListener("click",T);var g=b.querySelector(".popup__input_type_card-name"),w=b.querySelector(i.inputTypeUrlSelector),L=document.querySelector(".popup__edit_avatar"),E=L.querySelector(i.closeSelector);function P(){(0,o.Mr)(L),L.querySelector(a.Ac.formSelector).reset()}L.classList.add(i.animatedClass),E.addEventListener("click",P);var x=L.querySelector(i.inputTypeUrlSelector),k=document.querySelector(".popup_type_image"),q=k.querySelector(i.closeSelector);function U(){(0,o.Mr)(k)}k.classList.add(i.animatedClass),q.addEventListener("click",U);var C=k.querySelector(".popup__image"),A=k.querySelector(".popup__caption");function D(){(0,o.h7)(y),(0,a.T1)(y,a.Ac),m.value=p.textContent,_.value=h.textContent}function N(){(0,o.h7)(b),(0,a.T1)(b,a.Ac)}function B(){(0,o.h7)(L),(0,a.T1)(L,a.Ac)}function M(t){(0,o.h7)(k);var e=t.target;A.textContent=e.alt,C.src=e.src,C.alt=e.alt}function G(t){var e=t.textContent;return t.textContent="Сохранение...",e}function I(t){t.preventDefault(),p.textContent=m.value,h.textContent=_.value;var e=y.querySelector(a.Ac.submitButtonSelector),r=G(e);(0,c.it)(m.value,_.value).finally((function(){e.textContent=r})),(0,o.Mr)(y)}function H(t){t.preventDefault();var e={name:g.value,link:w.value},r=b.querySelector(a.Ac.submitButtonSelector),i=G(r);(0,c.w)(g.value,w.value).then((function(t){e=t;var r=(0,n.LH)(e,l.userData,n.ti,n.AS,M);u.insertBefore(r,u.firstChild)})).catch((function(t){console.log(t)})).finally((function(){r.textContent=i})),(0,o.Mr)(b),b.querySelector(a.Ac.formSelector).reset()}function F(t){t.preventDefault();var e=L.querySelector(a.Ac.submitButtonSelector),r=G(e);d.style.backgroundImage="url(".concat(x.value,")"),(0,c.Rg)(x.value).finally((function(){e.textContent=r})),(0,o.Mr)(L),L.querySelector(a.Ac.formSelector).reset()}document.querySelectorAll(".popup").forEach((function(t){t.addEventListener("click",o.mh)})),document.querySelector(".profile__edit-button").addEventListener("click",D),document.querySelector(".profile__add-button").addEventListener("click",N),d.addEventListener("click",B),y.addEventListener("submit",I),b.addEventListener("submit",H),L.addEventListener("submit",F),(0,a.uK)(a.Ac),e()}catch(J){e(J)}}),1)},598:(t,e,r)=>{r.d(e,{Mr:()=>a,h7:()=>o,mh:()=>i});var n=r(355);function o(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",c)}function a(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",c)}function c(t){if("Escape"===t.key){var e=document.querySelector(".popup_is-opened");a(e),e.querySelector(n.Ac.formSelector).reset()}}function i(t){if(t.target===t.currentTarget){var e=t.target.closest(".popup");a(e),e.querySelector(n.Ac.formSelector).reset()}}},355:(t,e,r)=>{r.d(e,{Ac:()=>n,T1:()=>i,uK:()=>c});var n={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},o=function(t,e){e.validity.patternMismatch?e.setCustomValidity("Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы."):e.setCustomValidity(""),e.validity.valid?function(t,e){var r=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}(t,e):function(t,e,r){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n.inputErrorClass),o.textContent=r,o.classList.add(n.errorClass)}(t,e,e.validationMessage)};function a(t,e,r){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.disabled=!1,e.classList.remove(r.inactiveButtonClass)):(e.disabled=!0,e.classList.add(r.inactiveButtonClass))}var c=function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){!function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);a(r,n,e),r.forEach((function(c){c.addEventListener("input",(function(){o(t,c),a(r,n,e)}))}))}(e,t)}))};function i(t,e){t.querySelectorAll("."+e.errorClass).forEach((function(t){t.textContent="",t.classList.remove(e.errorClass)})),Array.from(t.querySelectorAll(e.inputSelector)).forEach((function(t){t.classList.remove(e.inputErrorClass)}));var r=t.querySelector(e.submitButtonSelector);r.disabled=!0,r.classList.add(e.inactiveButtonClass)}}},a={};function c(t){var e=a[t];if(void 0!==e)return e.exports;var r=a[t]={exports:{}};return o[t](r,r.exports,c),r.exports}t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=t=>{t&&t.d<1&&(t.d=1,t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},c.a=(o,a,c)=>{var i;c&&((i=[]).d=-1);var u,l,s,f=new Set,d=o.exports,p=new Promise(((t,e)=>{s=e,l=t}));p[e]=d,p[t]=t=>(i&&t(i),f.forEach(t),p.catch((t=>{}))),o.exports=p,a((o=>{var a;u=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[t])return o;if(o.then){var a=[];a.d=0,o.then((t=>{c[e]=t,n(a)}),(t=>{c[r]=t,n(a)}));var c={};return c[t]=t=>t(a),c}}var i={};return i[t]=t=>{},i[e]=o,i})))(o);var c=()=>u.map((t=>{if(t[r])throw t[r];return t[e]})),l=new Promise((e=>{(a=()=>e(c)).r=0;var r=t=>t!==i&&!f.has(t)&&(f.add(t),t&&!t.d&&(a.r++,t.push(a)));u.map((e=>e[t](r)))}));return a.r?l:c()}),(t=>(t?s(p[r]=t):l(d),n(i)))),i&&i.d<0&&(i.d=0)},c.d=(t,e)=>{for(var r in e)c.o(e,r)&&!c.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},c.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),c(927)})();