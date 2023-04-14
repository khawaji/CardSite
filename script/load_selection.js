const queryString = window.location.search.split("=")[1].replace(/%20/, " ");
var mainElement = document.querySelector("main");
Object.keys(categories[queryString]).forEach(cat => {
    mainElement.innerHTML += selection_item_prefab.replace(/NAME/g, cat).replace(/KAT/g, queryString);
})
document.querySelector("h2").innerHTML = queryString;