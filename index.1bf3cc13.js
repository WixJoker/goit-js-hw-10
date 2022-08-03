document.querySelector("#search-box").addEventListener("input",void fetch(`https://restcountries.com/v3.1/name/${""}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>console.log(e))).catch((e=>console.log("Error!"))));
//# sourceMappingURL=index.1bf3cc13.js.map
