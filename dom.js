/* document */
/* the path of this (html) page */
console.log(document.baseURI);
console.log(document.URL);
// document.style.boxSizing = "border-box";
/**
 * ============================
 *  Get DOM Elements and add styles
 * ============================
 * */

/* which field is active now | change text in tag */
function activeElement() {
  const activeE = document.activeElement.tagName;
  document.getElementById("button").innerHTML = activeE;
}
activeElement();

/* change attribute value */
document.getElementById("button").type = "submit";

/* form validation */
function validationField() {
  const email = document.forms["formField"]["email"].value;
  if (email == "") {
    alert("Please Fill The Field...");
    return false;
  }
}
const containerSection = document.getElementsByClassName("container-section");

for (let index = 0; index < containerSection.length; index++) {
  //   console.log(containerSection[index]);
  const element = containerSection[index];
  element.style.minWidth = "500px";
}

const practiceSection = document.getElementById("practice-section");
/* We can use style/properties directly to an id but class */
practiceSection.style.borderWidth = "5px";
practiceSection.style.borderStyle = "solid";
practiceSection.style.borderColor = "red green";
practiceSection.style.backgroundColor = "#A8FFD2";
practiceSection.style.padding = "10px 30px";
practiceSection.style.minHeight = "100vh";

// console.log(practiceSection);

const colorPicker = document.getElementById("colorChecker");

// console.log(colorPicker.childNodes);
colorPicker.childNodes[3].style.width = "120px";
colorPicker.childNodes[3].style.height = "120px";
colorPicker.childNodes[3].style.marginTop = "-10px";
colorPicker.childNodes[3].style.marginLeft = "-10px";
colorPicker.style.width = "100px";
colorPicker.style.height = "100px";
colorPicker.style.borderRadius = "50%";
colorPicker.style.overflow = "hidden";

const paragraph = document.getElementsByTagName("p");
for (let index = 0; index < paragraph.length; index++) {
  const element = paragraph[index];
  element.style.width = "300px";

  element.style.color = "gray";
  element.style.textAlign = "justify";
  element.style.padding = "30px";
  element.style.borderRadius = "20px";
  element.style.borderWidth = "0 10px";
  element.style.borderStyle = "double";
  element.style.borderColor = "purple";
}

const fieldset = document.querySelector("fieldset");

fieldset.childNodes[3].style.minWidth = "calc((100%*8)/12)";
fieldset.childNodes[3].style.height = "2rem";
fieldset.childNodes[3].style.border = "0px solid red";
fieldset.childNodes[3].style.paddingLeft = "1.5rem";

fieldset.childNodes[5].style.minWidth = "calc((100%*3.2319)/12)";
fieldset.childNodes[5].style.height = "2rem";

/*  */
const queryAllButtons = document.querySelectorAll("button");
// console.log(queryAllButtons);
for (let index = 0; index < queryAllButtons.length; index++) {
  const element = queryAllButtons[index];
  element.style.width = "150px";
  element.style.height = "50px";
  element.style.borderRadius = "5px";
  element.style.margin = "50px";
}

/**
 * ===========================
 *  Add Event/s To The Element/s
 * ===========================
 * */

/* tel-name-hover */
const queryAllAnchor = document.querySelectorAll("a");
for (let index = 0; index < queryAllAnchor.length; index++) {
  const element = queryAllAnchor[index];
  //   element.style.borderWidth = "10px";
  element.style.border = "3px inset violet";
  element.style.padding = "10px 20px";
  element.style.textDecoration = "none";
  element.style.borderRadius = "5px";

  /* Hover effect using DOM events */
  element.onmouseenter = function () {
    element.style.backgroundColor = "blue";
    element.style.color = "white";
    element.style.fontStyle = "italic";
    element.style.fontWeight = "bold";
  };
  element.onmouseleave = function () {
    element.style.backgroundColor = "magenta";
    element.style.color = "black";
    element.style.margin = "50px auto";
  };
}

/**
 * ===============================
 *  Animation Using JS
 * ===============================
 * */
