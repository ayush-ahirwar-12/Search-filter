let form = document.querySelector("form");
let username = document.querySelector("#username");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let image = document.querySelector("#image");
let usersDiv = document.querySelector(".users");
let body = document.querySelector("body");
let userCard = document.querySelector(".userCard");

let userManager = {
  users: [],

  init: function () {
    form.addEventListener("submit", this.formSubmit.bind(this));
  },
  formSubmit: function (e) {
    e.preventDefault();
    this.addUser();
  },
  addUser: function () {
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      image: image.value,
    });
    console.log("user created");
    this.renderUi();
    
  },
  renderUi: function () {
    usersDiv.innerHTML="";
    this.users.forEach(function (user) {
      let div = document.createElement("div");
      div.className =
        "bg-white p-6 rounded-2xl shadow-lg w-80 text-center h-fit";

      let username = document.createElement("h3");
      username.className = "text-xl font-semibold text-gray-800";
      username.textContent = user.username;

      let role = document.createElement("p");
      role.className = "text-gray-500 text-sm mb-3";
      role.textContent = user.role;

      let bio = document.createElement("p");
      bio.className = "text-gray-700 text-sm";
      bio.textContent = user.bio;

      let image = document.createElement("img");
      image.className =
        "w-24 h-24 rounded-full mx-auto mb-4 object-cover border";
      image.src = user.image;

      div.appendChild(image);
      div.appendChild(username);
      div.appendChild(role);
      div.appendChild(bio);

      usersDiv.appendChild(div);
    });
  },
  removeUser: function () {},
};

userManager.init();
