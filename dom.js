/* document */
/* the path of this (html) page */
console.log(document.baseURI);
console.log(document.URL);

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
  element.style.width = "500px";
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

const colorPicker = document.getElementsByName("color");

for (let index = 0; index < colorPicker.length; index++) {
  const element = colorPicker[index];
  // const elementFocus = colorPicker[index].onfocus();
  console.log(element);
  element.style.width = "150px";
  element.style.height = "150px";
  element.style.padding = "15px";
  element.style.borderWidth = "10px";
  element.style.borderRadius = "50%";
  element.style.borderColor = "blue";
  element.style.backgroundColor = "red";
  element.onfocus = function () {
    element.style.backgroundColor = "magenta";
    element.style.borderRadius = "50%";
  };
}

const paragraph = document.getElementsByTagName("p");
for (let index = 0; index < paragraph.length; index++) {
  const element = paragraph[index];
  const element1 = paragraph[index][0];

  element.style.color = "gray";
  element.style.textAlign = "justify";
  element.style.padding = "30px";
  element.style.borderRadius = "20px";
  element.style.borderWidth = "0 10px";
  element.style.borderStyle = "solid";
  element.style.borderColor = "purple";
}
const fieldset = document.querySelector("fieldset");
// console.log(fieldset.childNodes);
fieldset.childNodes[3].style.display = "inline-block";
fieldset.childNodes[3].style.minWidth = "3rem";
fieldset.childNodes[3].style.height = "3rem";
fieldset.childNodes[3].style.border = "3px solid red";
fieldset.childNodes[3].style.padding = "1.5rem 1rem 0";

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
 *  Add Event To The Element/s
 * ===========================
 * */

const queryAllAnchor = document.querySelectorAll("a");
for (let index = 0; index < queryAllAnchor.length; index++) {
  const element = queryAllAnchor[index];
  //   element.style.borderWidth = "10px";
  element.style.border = "10px inset violet";
  element.style.padding = "10px 20px";
  element.style.textDecoration = "none";
  //   element.style.borderImage = 'url("./js-icon.png") 30 round';
  //   element.style.backgroundClip = "content-box";
  element.style.borderRadius = "5px";

  /* Hover effect */
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
 *
 * ===============================
 * */
