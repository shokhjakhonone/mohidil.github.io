const uploadButton = document.getElementById("upload");
const articleList = document.querySelector("#article-list ul");

uploadButton.addEventListener("click", () => {
  const articleTitle = prompt("Enter article title:");
  if (articleTitle) {
    const listItem = document.createElement("li");
    listItem.textContent = articleTitle;
    articleList.appendChild(listItem);
  }
});
