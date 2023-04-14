var mainElement = document.querySelector("main");
Object.keys(categories).forEach(cat => {
    mainElement.innerHTML += category_item_prefab.replace(/NAME/g, cat);
})