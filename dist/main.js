!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){var o=t(1),r=t(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(n.i,r,i),r.locals?r.locals:{});n.exports=a},function(n,e,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a={};function c(n,e,t){for(var o=0;o<e.length;o++){var r={css:e[o][1],media:e[o][2],sourceMap:e[o][3]};a[n][o]?a[n][o](r):a[n].push(g(r,t))}}function d(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,l=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function u(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=l(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var m=null,f=0;function g(n,e){var t,o,r;if(e.singleton){var i=f++;t=m||(m=d(e)),o=u.bind(null,t,i,!1),r=u.bind(null,t,i,!0)}else t=d(e),o=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e,t){return(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r()),n=t.base?n+t.base:n,e=e||[],a[n]||(a[n]=[]),c(n,e,t),function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){a[n]||(a[n]=[]),c(n,e,t);for(var o=e.length;o<a[n].length;o++)a[n][o]();a[n].length=e.length,0===a[n].length&&delete a[n]}}}},function(n,e,t){(e=t(3)(!1)).push([n.i,"body {\n  font-family: 'Epilogue', sans-serif;\n  height: 100vh;\n}\nnav p {\n  color: white;\n  font-size: 1.5rem;\n  margin-left: 1rem;\n  text-align: center;\n}\nnav hr {\n  width: 30%;\n}\n.hidden {\n  height: 0px;\n  visibility: hidden;\n  width: 0px;\n}\n.visible {\n  visibility: visible;\n}\n#default-bkg {\n  background-image: url('https://www.dropbox.com/s/qvr1zer40qeb8jl/sara-the-freak-A4UojtraSrw-unsplash-2.jpg?raw=1');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#clear {\n  background-image: url('https://www.dropbox.com/s/z223yz1okwnrraf/marc-wieland-TrzlGaRedf0-unsplash.jpg?raw=1');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#sunny {\n  background-image: url('https://www.dropbox.com/s/7kcy2okw6o6dnd9/zwaddi-YvYBOSiBJE8-unsplash.jpg?raw=1');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#rainy {\n  background-image: url('https://www.dropbox.com/s/q99wsf4v67v415p/marc-zimmer-1dNujhlCTYQ-unsplash.jpg?raw=1');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#overcast {\n  background-image: url('https://www.dropbox.com/s/987qwzurxkevofs/nathan-anderson-uftVkZ1ikn4-unsplash-2.jpg?raw=1');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.info {\n  border-radius: 5px;\n  font-weight: bold;\n  padding: 1rem;\n  margin: 0 auto;\n  margin-top: 3rem;\n}\n.collection {\n  width: 35%; \n}\n.info form {\n  text-align: center;\n}\n#form label { color: white; }\n#form input {\n  background-color: transparent;\n  border: 0.1px solid rgb(255, 255, 255, 0.4);\n  border-radius: 5px;\n  color: white;\n  padding: 0.5rem;\n  width: 60%;\n}\n#form input::placeholder { color: rgba(255, 255, 255, 0.5); }\n#form button {\n  background-color: transparent;\n  border: 0.1px solid rgb(255, 255, 255, 0.4);\n  border-radius: 5px;\n  color: white;\n  margin-left: 0.9rem;\n}\n.btn {\n  padding: 0.5rem;\n}\n#temp-form {\n  color: white;\n  margin-top: 1.5rem;\n}\n.data {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: row;\n  margin: 0 auto;\n  margin-bottom: 5rem;\n  padding: 2rem;\n  position: relative;\n  top: 20%;\n  width: 85%;\n}\n.data-pt {\n  color: white;\n  font-weight: bold;\n  margin: 0 auto;\n  padding: 2rem;\n  text-align: center;\n  width: 30%;\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 2.75rem;\n  height: 1.125rem;\n}\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 0.625rem;\n  width: 0.625rem;\n  left: 0.25rem;\n  bottom: 0.25rem;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\ninput:checked + .slider { background-color: #2196F3; }\ninput:focus + .slider { box-shadow: 0 0 1px #2196F3; }\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n.slider.round { border-radius: 34px; }\n.slider.round:before { border-radius: 50%; }\n#temp-label { margin-right: 0.5rem; }\n#city-label {\n  color: white;\n  font-size: 2rem;\n  font-weight: bold;\n  line-height: 2.5;\n  margin: 0 auto;\n  text-align: center;\n  width: 30%;\n}\n#date {\n  color: white;\n  font-size: 1rem;\n  left: 4.5%;\n  position: relative;\n}\n\n@media only screen and (max-width: 1024px) {\n  .data {\n    flex-direction: column;\n    margin-top: 5rem;\n    width: 50%;\n    position: static;\n  }\n  #city-label { width: 100%; }\n  #date { position: static; }\n}\n\n@media only screen and (max-width: 767px) {\n  body { height: 100%; }\n}\n\n@media only screen and (max-width: 500px) {\n  .collection { width: 80%; }\n}",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),i=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([r]).join("\n")}var a,c,d;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o=0;o<n.length;o++){var r=[].concat(n[o]);t&&(r[2]?r[2]="".concat(t," and ").concat(r[2]):r[2]=t),e.push(r)}},e}},function(n,e,t){"use strict";t.r(e);const o=document.getElementById("city-label"),r=document.getElementById("temperature"),i=document.getElementById("conditions"),a=document.getElementById("wind-speed"),c=document.getElementById("temp"),d=document.getElementById("temp-label"),s=document.getElementById("date"),l=document.getElementById("results-area");var u={render:n=>{o.textContent=`${n.name}`;const e=Math.ceil(n.main.temp-273);r.textContent=`${e} deg C`,i.textContent=`${n.weather[0].description}`,i.textContent.includes("overcast")?(document.body.id="",document.body.id="overcast"):i.textContent.includes("clear")?(document.body.id="",document.body.id="sunny"):i.textContent.includes("rain")?(document.body.id="",document.body.id="rainy"):i.textContent.includes("clouds")&&(document.body.id="",document.body.id="clear");const t=new Date;l.classList.remove("hidden"),s.textContent=`${t.toLocaleDateString("de-DE")}`,a.textContent=`Wind speed: ${n.wind.speed}`},tempChanger:n=>{c.addEventListener("change",()=>{if(c.checked){d.textContent="",d.textContent="To Celcius:",r.textContent="";const e=Math.ceil(1.8*(n.main.temp-273)+32);r.textContent=`${e} deg F`}else{d.textContent="",d.textContent="To Fahrenheit:",r.textContent="";const e=Math.ceil(n.main.temp-273);r.textContent=`${e} deg C`}})}};var p={getWeather:n=>{(async n=>{const e=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n}&APPID=6afc4c4d6d160273a7559007309c6525`,{mode:"cors"}),t=await e.json();u.render(t),u.tempChanger(t)})(n.toLowerCase().split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(" "))}};t(0);var m=(()=>{const n={enableHighAccuracy:!0,timeout:5e3,maximumAge:0},e=async n=>{const e=n.coords,t=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e.latitude}&lon=${e.longitude}&appid=6afc4c4d6d160273a7559007309c6525`,{mode:"cors"}),o=await t.json();u.render(o),u.tempChanger(o)},t=n=>{throw n};return{getCurrentLocation:()=>{navigator.geolocation.getCurrentPosition(e,t,n)}}})();const f=document.getElementById("form");window.onload=m.getCurrentLocation(),f.addEventListener("submit",n=>{n.preventDefault();const e=Object.fromEntries(new FormData(f)),{city:t}=e;p.getWeather(t),f.reset()})}]);