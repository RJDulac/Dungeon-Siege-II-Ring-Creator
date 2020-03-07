//variables
const enchantmentOption = document.querySelector("#btnEnchantment");

enchantmentOption.addEventListener("click", () => {
  //data structure
  const enchantmentData = {
    health: "Health",
    strength: "Strength",
    mana: "Mana"
  };
  //variables
  const select = document.createElement("select");
  select.classList.add("selectValue");
  const enchantmentParent = document.querySelector("#enchantmentParent");

  //append select to dummy div
  enchantmentParent.appendChild(select);

  //generate options for select's dropdown
  generateOptions(enchantmentData, select);

  //add label
  const label = document.createElement("label");
  label.innerText = "Value:";
  enchantmentParent.appendChild(label);
  //add input
  const input = document.createElement("input");
  input.placeholder = "Enter a value";
  input.classList.add("inputValue");
  enchantmentParent.appendChild(input);
});

function generateOptions(data, select) {
  for (item of Object.values(data)) {
    const option = document.createElement("option");
    option.innerText = item;
    select.appendChild(option);
  }
}

function getAllValues(clss) {
  //data structure for options
  const extractedOptionData = [];
  let counter = 0;
  const values = document.querySelectorAll(`.${clss}`);
  for (item of values) {
    extractedOptionData[counter++] = [item.value];
  }
  return extractedOptionData;
}

const enchantmentValues = {
  selectValue: "",
  inputValue: ""
};
const btn = document.querySelector("#btnCode");
btn.addEventListener("click", () => {
  enchantmentValues.selectValue = getAllValues("selectValue");
  enchantmentValues.inputValue = getAllValues("inputValue");
});
// getAllValues("selectValue");
// function getAllInputValues() {
//   const inputAll = document.querySelectorAll(".inputValue");
//   for (item of inputAll) {
//     console.log(item.value);
//   }
// }
