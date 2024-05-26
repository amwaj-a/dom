
let squer = document.getElementsByTagName("div")[0];

setInterval(() => {
  squer.style.backgroundColor = `#${(Math.random() * 9).toFixed(0)}${(Math.random() * 9).toFixed(0)}${(Math.random() * 9).toFixed(0)}${(Math.random() * 9).toFixed(0)}${(Math.random() * 9).toFixed(0)}${(Math.random() * 9).toFixed(0)}`;
  squer.style.height = `${(Math.random() * 100).toFixed(2)}vh`;
  squer.style.width = `${(Math.random() * 100).toFixed(2)}vh`;
  squer.style.left =`${(Math.random() * 50).toFixed(0)}vw`
  squer.style.top =`${(Math.random() * 20).toFixed(0)}vh`

}, 2000);
// squer.style.background = random;
