const my_info = document.querySelector(".my_info");
let isDragging = false;
const dragging = (e) => {
    if (!isDragging) return;
    my_info.scrollLeft = e.offsetX;
}

my_info.addEventListener("mousemove", dragging);
// const dragging = (dets) => {
//     my_info.scrollLeft = dets.x;
//     // Use clientX for mouse position relative to the viewport
//     // or
//     // console.log(e.offsetX); // Use offsetX for mouse position relative to the target element
// }
// document.addEventListener("mousemove", (e) => {
//     dragging({
//         x: e.clientX // Use clientX for mouse position relative to the viewport
//     });
// });
