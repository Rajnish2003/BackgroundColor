
const randomColor = () => {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r},${g},${b})`;
}


// window.onmousemove = () => {
//     setTimeout(() => {
//         let rgb = randomColor();
//         document.body.style.backgroundColor = rgb;
//     }, 3000);
// }
setInterval(() => {
    let rgb = randomColor();
    document.body.style.backgroundColor = rgb;
}, 500);
