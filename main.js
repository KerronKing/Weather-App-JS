!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=10)}([function(e,n,t){var o=t(1),r=t(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1},i=(o(e.i,r,a),r.locals?r.locals:{});e.exports=i},function(e,n,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i={};function c(e,n,t){for(var o=0;o<n.length;o++){var r={css:n[o][1],media:n[o][2],sourceMap:n[o][3]};i[e][o]?i[e][o](r):i[e].push(g(r,t))}}function s(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var u,d=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function l(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=d(n,r);else{var a=document.createTextNode(r),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function p(e,n,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,m=0;function g(e,n){var t,o,r;if(n.singleton){var a=m++;t=f||(f=s(n)),o=l.bind(null,t,a,!1),r=l.bind(null,t,a,!0)}else t=s(n),o=p.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n,t){return(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r()),e=t.base?e+t.base:e,n=n||[],i[e]||(i[e]=[]),c(e,n,t),function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){i[e]||(i[e]=[]),c(e,n,t);for(var o=n.length;o<i[e].length;o++)i[e][o]();i[e].length=n.length,0===i[e].length&&delete i[e]}}}},function(e,n,t){var o=t(3),r=t(4),a=t(5),i=t(6),c=t(7),s=t(8),u=t(9);n=o(!1);var d=r(a),l=r(i),p=r(c),f=r(s),m=r(u);n.push([e.i,"body { height: 100vh; }\n@keyframes animbkg {\n  from { background-position: 0 0; }\n  to { background-position: center center; }\n}\n#default-bkg {\n  background-image: url("+d+");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#clear {\n  animation: animbkg 5s linear ease-in-out;\n  background-image: url("+l+");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#sunny {\n  animation: animbkg 5s linear ease-in-out;\n  background-image: url("+p+");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#rainy {\n  animation: animbkg 5s linear ease-in-out;\n  background-image: url("+f+");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#overcast {\n  animation: animbkg 5s linear ease-in-out;\n  background-image: url("+m+");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\nh1 {\n  color: white;\n  font-family: Georgia, Times, 'Times New Roman', serif;\n  text-align: center;\n}\n.info {\n  border-radius: 5px;\n  font-family: Georgia, Times, 'Times New Roman', serif;\n  padding: 1rem;\n  margin: 0 auto;\n  margin-top: 3rem;;\n}\n.collection {\n  border: 2px solid rgba(255, 255, 255, 0.5); \n  width: 60%; \n}\n.info form {\n  text-align: center;\n}\n#form label { color: white; }\n#form input {\n  background-color: transparent;\n  border: 0.1px solid white;\n  border-radius: 5px;\n  color: white;\n  padding: 0.2rem;\n}\n#form input::placeholder { color: rgba(255, 255, 255, 0.5); }\n#form button {\n  background-color: transparent;\n  border: 0.1px solid white;\n  border-radius: 5px;\n  color: white;\n  margin-left: 0.9rem;\n}\n#temp-form {\n  color: white;\n  margin-top: 1rem;\n}\n.data {\n  border: 1px solid white;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  padding: 2rem;\n  width: 75%;\n}\n.data-pt {\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  color: white;\n  font-size: 1rem;\n  margin: 0 auto;\n  margin: 1rem;\n  padding: 3rem;\n  text-align: center;\n  width: 30%;\n}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([r]).join("\n")}var i,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o=0;o<e.length;o++){var r=[].concat(e[o]);t&&(r[2]?r[2]="".concat(t," and ").concat(r[2]):r[2]=t),n.push(r)}},n}},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/sara-the-freak-A4UojtraSrw-unsplash-2.jpg"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/marc-wieland-TrzlGaRedf0-unsplash.jpg"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/marko-blazevic-GFFGe2eGmiM-unsplash.jpg"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/zenad-nabil-QNgT5iy62BM-unsplash.jpg"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/nathan-anderson-uftVkZ1ikn4-unsplash-2.jpg"},function(e,n,t){"use strict";t.r(n);var o={render:(e,n)=>{document.getElementById("city-label").textContent=`${e.name} (${n})`;const t=document.getElementById("temperature"),o=Math.ceil(e.main.temp-273);t.textContent=`${o} deg C`;const r=document.getElementById("conditions");r.textContent=`${e.weather[0].description}`,r.textContent.includes("overcast")?(document.body.id="",document.body.id="overcast"):r.textContent.includes("clear")?(document.body.id="",document.body.id="sunny"):r.textContent.includes("rain")?(document.body.id="",document.body.id="rainy"):r.textContent.includes("clouds")&&(document.body.id="",document.body.id="clear"),document.getElementById("wind-speed").textContent=`Wind speed: ${e.wind.speed}`},tempChanger:e=>{const n=document.getElementById("temp"),t=document.getElementById("temperature");n.addEventListener("change",()=>{if(n.checked){t.textContent="";const n=Math.ceil(1.8*(e.main.temp-273)+32);t.textContent=`${n} deg F`}else{t.textContent="";const n=Math.ceil(e.main.temp-273);t.textContent=`${n} deg C`}})}};var r={getWeather:async(e,n)=>{const t=await fetch("/src/names.json",{mode:"cors"}),r=await t.json();(async(e,n,t)=>{const r=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e},${n}&APPID=6afc4c4d6d160273a7559007309c6525`,{mode:"cors"}),a=await r.json();o.render(a,t),o.tempChanger(a),console.log(`${a.wind.speed}`)})(e,await Object.keys(r).find(e=>r[e]===`${n}`).toLowerCase(),n)}};t(0);const a=document.getElementById("form");a.addEventListener("submit",e=>{e.preventDefault();const n=Object.fromEntries(new FormData(a)),t=n.city,o=n.country;r.getWeather(t,o),a.reset()})}]);