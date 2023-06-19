
// document.querySelector('enter').addEventListener('click', enter)

// // function enter(){
// //     document.querySelector('.enter').style.visibility = 'visible'
// // }

document.getElementById('mario').addEventListener('click' , mario)

function mario() {
    document.querySelector('body').style.backgroundImage = "url(Pictures/marioWithBackground.jpg.png)"
    document.querySelector('body').style.backgroundSize='1500px'
    document.querySelector('body').style.backgroundPosition= 'center'
    document.querySelector('header').style.background= 'transparent'
    document.querySelector('.mainSection').style.background= 'rgb(140,43,43)'

}

document.getElementById('luigi').addEventListener('click' , luigi)

function luigi() {
    document.querySelector('body').style.backgroundImage = "url(Pictures/luigi2.png)"
    document.querySelector('body').style.backgroundColor= 'rgb(0,100,50)'
    document.querySelector('body').style.backgroundPosition= 'center'
    document.querySelector('body').style.backgroundSize ='800px'
    document.querySelector('header').style.background= 'transparent'
    document.querySelector('.mainSection').style.background= 'rgb(0,120,11)'

    

}

document.getElementById('yoshi').addEventListener('click', yoshi)

function yoshi() {
    document.querySelector('body').style.backgroundImage = 'url(Pictures/Yoshi1.jpg)'
    document.querySelector('body').style.backgroundSize='550px'
    document.querySelector('body').style.backgroundPosition= 'center 110px' 
    document.querySelector('header').style.background= 'transparent'
    document.querySelector('.mainSection').style.background= 'green'
    document.querySelector('body').style.color ='rgb(214, 207, 207)'
    document.querySelector('body').style.backgroundColor= 'green'
}

document.getElementById('link').addEventListener('click' , link)

function link() {
    document.querySelector('body').style.backgroundImage = 'url(Pictures/sausagelink2.png)'
    document.querySelector('body').style.backgroundSize= '900px'
    document.querySelector('body').style.backgroundPosition= 'center center' 
    document.querySelector('header').style.background= 'rgba(0,80,80,0.8)'
    document.querySelector('.mainSection').style.background= 'rgb(0,80,80)'
}

document.getElementById('donkeyKong').addEventListener('click', donkeyKong)

function donkeyKong(){
    document.querySelector('body').style.backgroundImage = 'url(Pictures/dk.png)'
    document.querySelector('body').style.backgroundSize= '800px'
    document.querySelector('body').style.backgroundPosition= 'center 50px'
    document.querySelector('header').style.background= 'rgb(0,8,8)'
    document.querySelector('.mainSection').style.background= 'black'
    document.querySelector('body').style.backgroundColor= 'rgb(40,20,20)'
}

document.getElementById('fox').addEventListener('click' , fox)

function fox() {
    document.querySelector('body').style.backgroundImage= 'url(Pictures/fox1.png)'
    document.querySelector('body').style.backgroundSize= '800px'
    document.querySelector('body').style.backgroundPosition= 'center 25px'
    document.querySelector('header').style.background= 'rgb(0,30,65)'
    document.querySelector('.mainSection').style.background= 'rgb(0,30,65)'
    document.querySelector('body').style.color= 'rgb(214, 207, 207)'
    document.querySelector('body').style.backgroundColor= 'navy'
    
}

document.getElementById('spongebob').addEventListener('click' , spongebob)

function spongebob() {
    document.querySelector('body').style.backgroundImage = 'url(Pictures/doodlebob.png)'
    document.querySelector('body').style.backgroundSize= '800px'
    document.querySelector('body').style.backgroundPosition= 'center 100px'
    document.querySelector('header').style.background= 'transparent'
    document.querySelector('.mainSection').style.background= 'rgb(120,80,80,0.25)'
    document.querySelector('body').style.color= 'rgb(214, 207, 207)'
    document.querySelector('body').style.backgroundColor= 'navy'
}

document.getElementById('pikachu').addEventListener('click' , pikachu)

function pikachu() {
    document.querySelector('body').style.backgroundImage = 'url(Pictures/pikachu1.png)'
    document.querySelector('body').style.backgroundSize= '1200px'
    document.querySelector('body').style.backgroundPosition= 'center'
    document.querySelector('.mainSection').style.background= 'rgb(0,102,180)'
    document.querySelector('header').style.backgroundColor= 'transparent'
    document.querySelector('span').style.color = 'navy'
    document.querySelector('body').style.color= 'rgb(214, 207, 207)'
    document.querySelector('body').style.backgroundColor= 'navy'
}

document.getElementById('jiren').addEventListener('click' , jiren)

function jiren() {
    document.querySelector('body').style.backgroundImage = 'url(Pictures/jiren1.png)'
    document.querySelector('body').style.backgroundSize= '1000px'
    document.querySelector('body').style.backgroundPosition= 'center -50px'
    document.querySelector('header').style.background= 'rgba(0,8,8,0.8)'
    document.querySelector('.mainSection').style.background= 'rgba(0,8,8,0.5)'
    document.querySelector('body').style.backgroundColor= 'black'
}

document.getElementById('mainMenu').addEventListener('click', mainMenu)

function mainMenu(){
    document.querySelector('body').style.backgroundImage = 'url(Pictures/mainScreen2.png)'
    document.querySelector('body').style.backgroundSize= '700px'
    document.querySelector('body').style.backgroundPosition= 'center 160px'
    document.querySelector('.mainSection').style.background= 'rgb(0,8,8)'
    document.querySelector('header').style.backgroundColor = 'none'
    document.querySelector('body').style.backgroundColor= 'white'

}
