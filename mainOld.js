/*
input needed from user

template name:

example: [t:template,n:ring_unq_03]
[t:template,n:<value>]

follows with {

input for doctype:

doc = "<value>";
specializes = ring; auto generated - later will be done with selection

auto generate common block
[common]
{
    dropdown for base_screen_name = "<value>";
    input for screen_name = "<value>";
    auto
    allow_modifers = false;
    is_pcontent_allowed = false;
    rarity = unique;
}
[gui]
{
    user input for equipment requirments
    equip_requirments = uber:#item_level-<value>;
    use_class = IST_ALL; auto-gen
    user input for inventory icon but set a default value
    inventory_icon = <value>;
    input needed for item level
    item_level = <value>;

    [magic]
    {
        [enchantments]
        {
            user input for block and how many - create an add block button

            for block
            dropdown for alteration -- generate with description
            input for value
            duration = #infinite; -auto gen
            is_permanent = true; auto gen
            is_single_instance = false; auto gen
            
        }
    }
}

*/

const generatedCode = document.getElementById("generatedCode");
const btnCode = document.getElementById("btnCode");
const templateName = document.getElementById("templateName");
const docName = document.getElementById("docName");
const screenName = document.getElementById("screenName");
const iconSelect = document.getElementById("iconSelect");
const itemLevel = document.getElementById("itemLevel");
const iconList = ["b_gui_ig_i_it_ring_034"];
const btnEnchantment = document.getElementById("btnEnchantment");
const enchantmentParent = document.getElementById("enchantmentParent");
const alterationList = [
  "Strength",
  "Health",
  "Mana"
  // {
  //   alteration: "alter_strength",
  //   description: '"+<value> Strength"'
  // }
];
//need to check to make sure user doesn't exceed attribute list. if(attributeList > attributeCounter) notify user they have exceeded
let attributeList = [
  "oneAttribute",
  "twoAttribute",
  "threeAttribute",
  "fourAttribute",
  "fiveAttribute",
  "sixAttribute",
  "sevenAttribute",
  "eightAttribute",
  "nineAttribute",
  "tenAttribute"
];
//count from negative 1 to be in sync with attributeList array
let attributeCounter = -1;
//generated lists
iconList.forEach(options => {
  const opt = options;
  const el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  iconSelect.appendChild(el);
});

//event listener
btnCode.addEventListener("click", () => {
  assembleCode();
});

btnEnchantment.addEventListener("click", () => {
  attributeCounter += 1;
  // attributeList.push(attributeNum);

  const selectNode = document.createElement("SELECT");
  // const optionNode = document.createElement("OPTION");

  // selectNode.appendChild(optionNode);
  enchantmentParent.appendChild(selectNode);

  //put in here until better solution. -- not working - find better solution
  alterationList.forEach(options => {
    selectNode.setAttribute("id", attributeList[attributeCounter]);
    const opt = options;
    const el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    eval(attributeList[attributeCounter]).appendChild(el);
  });
  //refractor later
  //add label
  const attachLabel = document.getElementById(attributeList[attributeCounter]);
  let label = document.createElement("label");
  label.textContent = "Value";
  //create label
  attachLabel.after(label);
  let input = document.createElement("input");
  label.after(input);
});

const createAttributeName = name2 => {};

assembleCode = () => {
  generatedCode.innerText = `[t:template,n:${templateName.value}] \n{\n doc = "${docName.value}";\n specializes = ring; \n\n [common] \n { \n base_screen_name = "${docName.value}"; \n screen_name = "${screenName.value}";\n     allow_modifiers = false;\nis_pcontent_allowed = false;\nrarity = unique;\n}\n[gui]\n{\nequip_requirements = uber:#item_level-2;\nuse_class = IST_ALL;\ninventory_icon = ${iconSelect.value};\nitem_level = ${itemLevel.value};\n}\n[magic]\n{\n[enchantments]\n{`;
};
