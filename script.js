// alert("saaa");
let name1 = document.getElementsByClassName("name1")[0];
name1.style.color = "white";
name1.style.backgroundColor = "black";

let pragraph = document.getElementById("pragraph");
pragraph.style.fontWeight = "700";
pragraph.setAttribute("class", "prag");

let img1 = document.getElementsByTagName("img")[0];
// console.log(img1.src);
img1.style.width = "20%";
img1.src =
  "https://images.pexels.com/photos/22805588/pexels-photo-22805588/free-photo-of-a-close-up-of-a-white-flower-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";

let list = document.querySelector("ul");
list.insertAdjacentHTML(
  "afterbegin",
  `
<li> Item1</li>
<li> Item2</li>
<li> Item3</li>

  
  `
);
list.style.width = "20vw";
list.style.display = "flex";
list.style.listStyleType = "none";
list.style.justifyContent = "space-between";
let li = document.querySelectorAll("li");
for (let index = 0; index < li.length; index++) {
  li[index].style.color = "gray";
  li[index].style.border = "2px solid black";
}

let table = document.createElement("table");
document.body.appendChild(table);
table.insertAdjacentHTML(
  "afterbegin",
  `

<tr>
    <th>Name</th>
    <th>Age</th>
    <th>id</th>
</tr>
<td>
    <td>Ahmed</td>
    <td>20</td>
    <td>1929292</td>
</td>

`
);
table.setAttribute("class", "table");
