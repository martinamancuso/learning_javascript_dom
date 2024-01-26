/* Esercizio svolto in pair con Paolo Lupo */


const addProduct = () => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const input = document.querySelector("input");
  li.innerText = input.value;

  const checkBox = document.createElement("input");
  checkBox.setAttributeNode("type", "checkbox");
  ul.appendChile(li);
  li.appendChild(checkBox);
};