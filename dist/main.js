!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o={render:e=>{document.getElementById("city-label").textContent=`${e.name}`,document.getElementById("conditions").textContent=`${e.main.temp}`;const t=document.getElementById("temperature");t.textContent=`${e.weather[0].description}`,t.textContent.includes("overcast")?(document.body.id="",document.body.id="overcast"):t.textContent.includes("clear")?(document.body.id="",document.body.id="sunny"):t.textContent.includes("rain")?(document.body.id="",document.body.id="rainy"):t.textContent.includes("clouds")&&(document.body.id="",document.body.id="clear")}};var r={getWeather:async(e,t)=>{const n=await fetch("/src/names.json",{mode:"cors"}),r=await n.json();(async(e,t)=>{const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e},${t}&APPID=6afc4c4d6d160273a7559007309c6525`,{mode:"cors"}),r=await n.json();o.render(r),console.log(`${r.name}, ${r.main.temp}, ${r.weather[0].description}`)})(e,await Object.keys(r).find(e=>r[e]===`${t}`).toLowerCase())}};const c=document.getElementById("form");c.addEventListener("submit",e=>{e.preventDefault();const t=Object.fromEntries(new FormData(c)),n=t.city,o=t.country;r.getWeather(n,o),c.reset()})}]);