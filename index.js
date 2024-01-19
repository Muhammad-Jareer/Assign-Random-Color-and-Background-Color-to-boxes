// let box = document.getElementsByClassName("box");
// console.log(box);
// let box1 = document.querySelector(".box").style.backgroundColor = "green";
// console.log(box1);
// console.log(boxes)
// let a = Math.random()
// console.log(a)
// let b = Math.round(Math.random()) 
// console.log(b)
// let c = Math.round(Math.random() * 256) 
// console.log(c)
// Array.from(boxes).forEach(d => {
//     console.log(d)
let boxes = document.querySelector(".container").children
// })
    function getRandomColor() {
        let red = Math.round(Math.random() * 256);
        let blue = Math.round(Math.random() * 256);
        let green = Math.round(Math.random() * 256);
    
        let RandomColor = 'rgb('+ red + ', '+ green +', '+ blue +')';
        return RandomColor;
    }
    var color = getRandomColor();
    console.log(color);

    Array.from(boxes).forEach(e => {
        e.style.backgroundColor = getRandomColor()
        e.style.color = getRandomColor()
    })


