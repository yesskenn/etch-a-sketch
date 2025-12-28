//initialize contact objects
const contactInfo = {name: "Yessi Kenney", occupation: "Web Developer", email: "yessikenney@gmail.com"};

const socials = {github: "https://github.com/yesskenn", ig: "@spacewavez1", bksy: "@spacewavez.bksy.social", linkedin: "https://www.linkedin.com/in/yessirpk/"};

const container = document.getElementById('container');
const canvas = document.getElementById('grid');
canvas.style.setProperty('margin', '0 auto');
canvas.style.setProperty('padding', '1%');
canvas.style.setProperty('display', 'flex');
canvas.style.setProperty('flex-wrap','wrap');
canvas.style.setProperty('flex-direction','row');
canvas.style.setProperty('justify-content','space-between')
canvas.style.setProperty('width', '666px');


function addGrid(element, squares){
    element.style.setProperty('background-color', '#f5f5f5')
    for (let i=0; i < squares*squares; i++){
        let square = document.createElement('div')
        square.style.setProperty('border', '1px solid #4a5a72')
        square.style.setProperty('width',`calc(100%/${squares})`)
        square.style.setProperty('height',`calc(100%/${squares})`)
        square.style.setProperty('box-sizing', 'border-box')
        square.style.setProperty('aspect-ratio','1/1')
        square.style.setProperty('flex','1 1 1');

       // square.style.setProperty('border-right', '1px solid #ffffff')
       // square.style.setProperty('border-top', '1px solid #4a5a72')  
       // square.style.setProperty('border-bottom', '1px solid #ffffff')  
        square.addEventListener('mouseover', () => {
        const rndCol = `rgb(${random(120)+80} ${random(115)} ${random(120)+80})`;
        square.style.backgroundColor = rndCol;        
    });
        
        
        //canvas.style.setProperty('margin','auto');
       // let xy = getRandomPosition()
        //square.style.left = `${xy[0]}px`
        //square.style.top = `${xy[1]}px`


        canvas.appendChild(square)
       
    }

}
let oldGrid = addGrid(canvas, 11);

let btn = document.createElement('button');
btn.innerText = "NEW GRID";
btn.classList = "btn";
container.prepend(btn);
 let info = document.createElement('p');
    info.innerText = "(Limit 100)"

let enterNum = document.createElement('input');
enterNum.setAttribute('type','number');
enterNum.setAttribute('max', '100');
enterNum.id= 'inputNum';
btn.addEventListener('click', () => {
   
    btn.after(enterNum);
        btn.after(info);



    
});

enterNum.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
    let userNum2 = event.target.valueAsNumber;
    canvas.replaceChildren();
   addGrid(canvas, userNum2);

   
    }
});

function removeOld(){
    

}



function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function getRandomPosition() {
    let y = document.body.scrollHeight
    let x = document.body.scrollWidth
    let randomY = Math.floor(Math.random() * y)
    let randomX = Math.floor(Math.random() * x)
    return [randomX, randomY]
}

//const cardCanvas = document.querySelector("#cardCanvas");
/*
let contactList = "";
contactList += `<h2 class="contact-name">${contactInfo.name}</h2>`


for (let x in contactInfo){
 if (x !== "name"){ //skip the name, since it is listed first for h2
  contactList += `${contactInfo[x]} <br/>`;
  }
};

document.querySelector(".contact").innerHTML = contactList;

const heading = document.createElement('div');
heading.textContent = contactInfo.name[0];


document.body.appendChild(contactName);
*/