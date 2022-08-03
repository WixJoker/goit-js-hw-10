!function(){var n;document.querySelector("#search-box").addEventListener("input",(n="https://restcountries.com/v3.1/name/".concat(""),void fetch(n).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return console.log(n)})).catch((function(n){return console.log("Error!")}))))}();
//# sourceMappingURL=index.dfc9b10e.js.map
