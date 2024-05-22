function mealCard(name, calories) {
  const h4 = document.createElement("h4");
  h4.classList.add("mx-1");
  h4.textContent = name;

  const div = createDiv("card my-2");
  const div2 = createDiv("card-body");
  const div3 = createDiv("d-flex align-items-center justify-content-between");
  div3.appendChild(h4);
  const div4 = createDiv(
    "fs-1 bg-primary text-white text-center rounded-2 px-2 px-sm-5",
    calories
  );
  div3.appendChild(div4);
  div3.appendChild(
    createButton(
      "delete btn btn-danger btn-sm mx-2",
      '<i class="fa-solid fa-xmark"></i>'
    )
  );
  div2.appendChild(div3);
  div.appendChild(div2);
  return div;
}

function createDiv(className, textContent) {
  const div = document.createElement("div");
  className.split(" ").forEach((cls) => div.classList.add(cls));
  if (textContent) {
    div.textContent = textContent;
  }
  return div;
}

function createButton(className, childrean) {
  const btn = document.createElement("button");
  className.split(" ").forEach((cls) => btn.classList.add(cls));
  btn.innerHTML = childrean;

  return btn;
}
