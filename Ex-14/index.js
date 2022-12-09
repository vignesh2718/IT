function over() {
  let textcontainer = document.getElementById("txt");
  document.innerHTML += textcontainer.value;
}
function submitt() {
  let username = document.getElementById("user");
  let pwd = document.getElementById("pwd");
  if (username.value == "" || pwd.value == "") {
    alert("The username / password can't be empty");
  }
}
