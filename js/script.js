// function updateClass(addCla, remCla) {
//   refs.checkBoxClick.classList.add(addCla);
//   refs.checkBoxClick.classList.remove(remCla);
// }

// function choiceTheme(event) {
//   const check = refs.checkBox.checked;

//   if (check) {
//     updateClass(Theme.DARK, Theme.LIGHT);
//   } else {
//     updateClass(Theme.LIGHT, Theme.DARK);
//   }
// }

// function updateTheme(addCla, remCla) {
//   bodyRef.classList.add(addCla);
//   bodyRef.classList.remove(remCla);
// }

// updateClass(Theme.LIGHT, Theme.DARK);

// function setDefaultDarkTheme() {
//   updateTheme("dark-theme", "light-theme");
//   themeSwitchToggleRef.checked = true;
// }

// function addLightTheme() {
//   updateTheme("light-theme", "dark-theme");
//   updateDataLocalStorage(Theme.LIGHT);
// }

// function addDarkTheme() {
//   updateTheme("dark-theme", "light-theme");
//   updateDataLocalStorage(Theme.DARK);
// }

// function updateDataLocalStorage(theme) {
//   localStorage.setItem("theme", JSON.stringify(theme));
// }

// function onFocusChange(event) {
//   if (event.target.value.length === dataLength) {
//     updateClass("valid", "invalid");
//   } else {
//     updateClass("invalid", "valid");
//   }
// }

// function updateClass(addClass, remClass) {
//   refs.inputText.classList.remove(remClass);
//   refs.inputText.classList.add(addClass);
// }

// let a = {
//   b: 111,
// };

// let arr = [1, 2, 3, 4, 5];
// arr.fill(9, 1, 3);
// if (a?.b?.c) console.log(true);
// else console.log(false);

const persone = Object.create(
  {},
  {
    name: {
      value: "Maxim",
      enumerable: true,
    },
    age: {
      value: 25,
    },
  }
);
for (let key in persone) console.log(key);

const user = {
  get() {
    return "hello";
  },
  set(value) {
    console.log(value);
  },
};
console.log(user);
