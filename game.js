let count = 0;
let firstnb = 1;
let secondnb = 2;
let icons = [];
let containeer = document.getElementById("container");
document.getElementById("heart").style.display = "none";
document.getElementById("count").innerHTML = "0";
for (let a = 0; a <= 2; a++) {
  let dis = document.createElement("i");
  dis.style.color = "#ff0000";
  dis.style.width = "25px";
  dis.className = "fa-solid fa-heart";
  let heart = document.getElementById("heart");
  heart.appendChild(dis);
  icons.push(dis);
  document.getElementById("error").style.display = "none";

  function createItem() {
    for (let i = 0; i <= 0; i++) {
      const sphere = document.createElement("div");
      sphere.id = i;
      sphere.style.cursor = "pointer";
      sphere.style.width = "100px";
      sphere.style.height = "100px";
      sphere.style.borderRadius = "100px";
      sphere.style.background = "linear-gradient(360deg, #3ddf9bb9, #d8db17ce)";
      sphere.style.position = "absolute";
      sphere.style.margin = " auto ";
      sphere.classList.add("sphere");
      sphere.style.left = Math.random() * (containeer.clientWidth - 15) + "px";
      sphere.style.top = "0";
      containeer.appendChild(sphere);

      let speed = firstnb + secondnb; // Rastgele hız
      const interval = setInterval(function () {
        const top = sphere.getBoundingClientRect().top;
        if (top + sphere.clientHeight >= containeer.clientHeight) {
          clearInterval(interval);
          if (icons.length > 0) {
            const removedIcon = icons.pop();
            removedIcon.remove();
          }

          containeer.removeChild(sphere);
          document.getElementById("count").innerHTML = count;
        } else if (document.getElementById("heart").innerHTML == "") {
        } else {
          sphere.style.top = top + speed + "px";
        }
      }, 20);
      if (icons.length == 0) {
        document.getElementById("container").style.display = "none";
        document.getElementById("error").style.display = "block";
        let err = `<p>Kaybettiniz</p>`;
        document.getElementById("error").innerHTML = err;
        setTimeout(() => {
          document.getElementById("container").style.display = "block";
          document.getElementById("error").style.display = "none";
          Refresh();
        }, 3000);
      }
      sphere.addEventListener("click", function (e) {
        if (sphere.id == this.id) {
          count = count + 15;
          sphere.closest("div").remove();

          console.log(speed);

          document.getElementById("count").innerHTML = count;
        } else {
          count = 0;
          document.getElementById("count").innerHTML = count;
          sphere.style.display = "block";
        }
        if (count == 90) {
          firstnb = 3;
          secondnb = 3;
        }
        if (count == 300) {
          firstnb = 6;
          secondnb = 3;
        }
        if (count == 600) {
          firstnb = 8;
          secondnb = 4;
        }
        if (count == 600) {
          firstnb = 8;
          secondnb = 4;
        }
        if (count == 810) {
          firstnb = 8;
          secondnb = 6;
        }
        if (count == 1005) {
          let win = `<p>Kazandınız</p>`;
          document.getElementById("error").innerHTML = win;
          document.getElementById("container").style.display = "none";
          document.getElementById("error").style.display = "block";
          Refresh();
        }
      });
    }
  }
}
function start(event) {
  setInterval(createItem, 1000);
  document.getElementById("btn").style.display = "none";
  document.getElementById("heart").style.display = "block";
}
function Refresh(event) {
  window.location.reload();
  setInterval(createItem, 1000);
}
