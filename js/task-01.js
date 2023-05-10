const numberOfCategories = document.querySelector("#categories");
const category = numberOfCategories.querySelectorAll(".item");
console.log(`Number of categories: ${category.length}`);

category.forEach((categ) => {
    const catName = categ.querySelector('h2').textContent;
    const catValue = categ.querySelectorAll("li").length;
    console.log(`Category: ${catName}\n Elements: ${catValue}`);
})