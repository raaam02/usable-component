let btn = document.getElementById("btn");
btn.onclick = () => {
  btn.style.backgroundColor = "";
  btn.style.border = "";
  for (let index = 10; index >= 0; index--) {
    setTimeout(() => {
      btn.innerHTML = index;
      console.log(index);
    }, (10 - index) * 1000);
  }

  setTimeout(() => {
    btn.style.backgroundColor = "rgb(0, 153, 0)";
    btn.style.border = "1px solid rgb(0, 126, 0)";
    btn.innerHTML = "Hello....";
  }, 10000);
};
