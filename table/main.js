let ground = document.querySelector('.ground')
const count = 725;
let colors = ['green','blue','red','yellow','orange']

function randomColor() {
    let index = Math.floor(Math.random() * colors.length)
    return colors[index]
}


for(let i = 0; i < count;i++) {
    let box = document.createElement('div')
    box.classList.add('box')
    ground.append(box)
    
    box.addEventListener('mouseover', () => setColor(box))
    box.addEventListener('mouseleave', () => removeColor(box))
}

function setColor(box) {
    box.style.background = randomColor()
}

function removeColor(box) {
    box.style.background = 'gray'
}


// Деструктуризация

// let user = {
//     name: 'Sasha',
//     age: 30,
//     skills: {
//         FrontEnd: {
//             html: '100%',
//             css: '90%',
//             js: '80%',
//         }
//     }
// }

// let { html: h, css, js, git = 'незнаю' } = user.skills.FrontEnd

// console.log(h);


// let cars = ['bmw','mers','audi']

// let [ b, m, a ] = cars

// console.log(m);


// spread - оператор

// let bmw = {
//     year: 2022,
//     model: 'm5'
// }

// let malibu = {
//     ...bmw,
//     date: new Date()
// }

// malibu.model = 'premier'


// console.log(bmw);
// console.log(malibu);


// let easy = ['html','css','js'];
// let hard = ['vue','vuex']


// let skills = [...easy, 'git', ...hard]

// console.log(skills);



// rest - оператор

let obj1 = { a:10, b: 5, c: 3}
let obj2 = { a:3, d: 4, c: 7, e: 5}
let sum =[obj1.a+obj2.a,obj1.b,obj1.c+obj2.c,obj2.d,obj2.e]
function solve( obj1 , obj2 ) {
    console.log(...sum);
    
    
  
   
}

console.log(solve(obj1,obj2));