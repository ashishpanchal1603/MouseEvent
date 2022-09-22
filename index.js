let flag = true;
const onMouseMove = (e) => {
  let shape = document.getElementById("shape");
  shape.style.left = e.clientX + "px";
  shape.style.top = e.clientY + "px";
};
const onMouseDown = (event) => {
  let clr = document.getElementById("shape");
  clr.style.color = "white";
  clr.style.left = e.clientX + "px";
  clr.style.top = e.clientY + "px";
};
const onMouseUp = (event) => {
  let icon = document.getElementById("i");
  let update = document.getElementById("shape");
  update.style.color = "black";

  update.style.left = e.clientX + "px";
  update.style.top = e.clientY + "px";
};

document.addEventListener("mousemove", onMouseMove);
document.addEventListener("mousedown", onMouseDown);
document.addEventListener("mouseup", onMouseUp);
