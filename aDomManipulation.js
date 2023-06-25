//Random Person Conditional 

document.getElementById('random').addEventListener('click' , randomPerson)
    function randomPerson() {
        let random = Math.random()
        if (random < .1111) {
            return mario()
        } else if (random < .2222) {
            return luigi()
        } else if (random < .3333){
            return yoshi()
        } else if (random < .4444){
            return link()
        } else if (random < .5555){
            return donkeyKong()
        } else if (random < .6666){
            return fox()
        } else if (random < .7777){
            return spongebob()
        } else if (random < .8888){
            return pikachu()
        } else if (random <= 1 ){
            return jiren()
        }
    }

//Event Listeners
// function mobileMediaQuery(){
//     if(window.innerWidth < 501){
//         return document.querySelector('body').style.backgroundSize = '10px'
//     }
// }

// window.addEventListener('resize', mobileMediaQuery)

// function tabletMediaQuery(){
//     if(window.innerWidth > 502){
//         return document.querySelector('body').style.backgroundSize = '5000px'
//     }
// }

// window.addEventListener('resize', tabletMediaQuery)


// DOM changes 



document.getElementById('mario').addEventListener('click' , mario)

function mario() {
    document.querySelector('body').style.backgroundImage = "url(Pictures/smario.png)"
    document.querySelector('body').style.backgroundSize='500px'
    document.querySelector('body').style.backgroundPosition= 'center 150px'
    document.querySelector('body').style.backgroundColor = 'rgb(11, 105, 240)'
    document.querySelector('header').style.background= 'transparent'
    document.querySelector('header').style.color = 'rgb(210, 208, 206)'
    document.querySelector('span').style.color = 'white'
    document.querySelector('span').style.backgroundColor = 'transparent'
    document.querySelector('.mainSection').style.background= 'rgb(1, 161, 233)'
    document.querySelector('.mainSection').style.color='rgb(210, 208, 206)'
   
    //Selected to apply each idiv. button instead of querySelectorAll
    document.querySelector('#mario').style.backgroundColor = 'rgb(150,150,150)'
    document.querySelector('#mario').style.color = 'rgb(0,170,250)'
    document.querySelector('#luigi').style.backgroundColor = 'rgb(210, 208, 206)'
    document.querySelector('#luigi').style.color = 'rgb(1, 161, 233)'
    document.querySelector('#yoshi').style.backgroundColor = 'rgb(210, 208, 206)'
    document.querySelector('#yoshi').style.color = 'rgb(1, 161, 233)'
    document.querySelector('#link').style.backgroundColor = 'rgb(210, 208, 206)'
    document.querySelector('#link').style.color = 'rgb(1, 161, 233)'
    document.querySelector('#donkeyKong').style.backgroundColor = 'rgb(210, 208, 206)'
    document.querySelector('#donkeyKong').style.color = 'rgb(1, 161, 233)'
    document.querySelector('#fox').style.backgroundColor = 'rgb(210, 208, 206)'
    document.querySelector('#fox').style.color = 'rgb(1, 161, 233)'
    document.querySelector('#spongebob').style.backgroundColor = 'rgb(210, 208, 206)'
    document.querySelector('#spongebob').style.color = 'rgb(1, 161, 233)'
    document.querySelector('#pikachu').style.backgroundColor = 'rgb(210, 208, 206)'
    document.querySelector('#pikachu').style.color = 'rgb(1, 161, 233)'
    document.querySelector('#jiren').style.backgroundColor = 'rgb(210, 208, 206)'
    document.querySelector('#jiren').style.color = 'rgb(1, 161, 233)'
    document.querySelector('#mainMenu').style.backgroundColor = 'rgb(210, 208, 206)'
    document.querySelector('#mainMenu').style.color = 'rgb(1, 161, 233)'
    document.querySelector('#random').style.backgroundColor = 'rgb(210, 208, 206)'
    document.querySelector('#random').style.color = 'rgb(1, 161, 233)'

}

document.getElementById('luigi').addEventListener('click' , luigi)

function luigi() {
    document.querySelector('body').style.backgroundImage = "url(Pictures/Sluigi.png)"
    document.querySelector('body').style.backgroundColor= 'rgb(18, 76, 18)'
    document.querySelector('body').style.backgroundPosition= 'center 150px'
    document.querySelector('body').style.backgroundSize ='380px'
    document.querySelector('header').style.background= 'transparent'
    document.querySelector('header').style.color = 'rgb(210, 208, 206)'
    document.querySelector('span').style.color = 'white'
    document.querySelector('span').style.backgroundColor = 'transparent'
    document.querySelector('.mainSection').style.color='rgb(210, 208, 206)'
    document.querySelector('.mainSection').style.background= 'rgb(43, 105, 42)'
   
    //Selected to apply each idiv. button instead of querySelectorAll
    document.querySelector('#mario').style.backgroundColor = 'rgb(15, 173, 0)'
    document.querySelector('#mario').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#luigi').style.backgroundColor = 'rgb(0, 130, 0)'
    document.querySelector('#luigi').style.color = 'rgb(245,245,245)'
    document.querySelector('#yoshi').style.backgroundColor = 'rgb(15, 173, 0)'
    document.querySelector('#yoshi').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#link').style.backgroundColor = 'rgb(15, 173, 0)'
    document.querySelector('#link').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#donkeyKong').style.backgroundColor = 'rgb(15, 173, 0)'
    document.querySelector('#donkeyKong').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#fox').style.backgroundColor = 'rgb(15, 173, 0)'
    document.querySelector('#fox').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#spongebob').style.backgroundColor = 'rgb(15, 173, 0)'
    document.querySelector('#spongebob').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#pikachu').style.backgroundColor = 'rgb(15, 173, 0)'
    document.querySelector('#pikachu').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#jiren').style.backgroundColor = 'rgb(15, 173, 0)'
    document.querySelector('#jiren').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#mainMenu').style.backgroundColor = 'rgb(15, 173, 0)'
    document.querySelector('#mainMenu').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#random').style.backgroundColor = 'rgb(15, 173, 0)'
    document.querySelector('#random').style.color = 'rgb(210, 208, 206)'
}

document.getElementById('yoshi').addEventListener('click', yoshi)

function yoshi() {
    document.querySelector('body').style.backgroundImage = 'url(Pictures/Yoshi1.jpg)'
    document.querySelector('body').style.backgroundSize='430px'
    document.querySelector('body').style.backgroundPosition= 'center 140px' 
    document.querySelector('body').style.color ='rgb(214, 207, 207)'
    document.querySelector('body').style.backgroundColor= 'green'
    document.querySelector('header').style.background= 'transparent'
    document.querySelector('header').style.color ='rgb(250, 217, 104)'
    document.querySelector('span').style.color = 'black'
    document.querySelector('span').style.backgroundColor = 'transparent'
    document.querySelector('.mainSection').style.background= 'rgb(250, 217, 104)'
    document.querySelector('.mainSection').style.color='rgb(165, 120, 51)'
    
    //Selected to apply each idiv. button instead of querySelectorAll
    document.querySelector('#mario').style.backgroundColor = 'rgb(189, 120, 51)'
    document.querySelector('#mario').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#luigi').style.backgroundColor = 'rgb(189, 120, 51)'
    document.querySelector('#luigi').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#yoshi').style.backgroundColor = 'rgb(155, 100, 40)'
    document.querySelector('#yoshi').style.color = 'rgb(245,245,245)'
    document.querySelector('#link').style.backgroundColor = 'rgb(189, 120, 51)'
    document.querySelector('#link').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#donkeyKong').style.backgroundColor = 'rgb(189, 120, 51)'
    document.querySelector('#donkeyKong').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#fox').style.backgroundColor = 'rgb(189, 120, 51)'
    document.querySelector('#fox').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#spongebob').style.backgroundColor = 'rgb(189, 120, 51)'
    document.querySelector('#spongebob').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#pikachu').style.backgroundColor = 'rgb(189, 120, 51)'
    document.querySelector('#pikachu').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#jiren').style.backgroundColor = 'rgb(189, 120, 51)'
    document.querySelector('#jiren').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#mainMenu').style.backgroundColor = 'rgb(189, 120, 51)'
    document.querySelector('#mainMenu').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#random').style.backgroundColor = 'rgb(189, 120, 51)'
    document.querySelector('#random').style.color = 'rgb(210, 208, 206)'
}

document.getElementById('link').addEventListener('click' , link)

function link() {
    document.querySelector('body').style.backgroundImage = 'url(Pictures/sausage_Link.png)'
    document.querySelector('body').style.backgroundSize= '400px'
    document.querySelector('body').style.backgroundPosition= 'center 140px' 
    document.querySelector('body').style.backgroundColor = 'rgb(73, 39, 27)'
    document.querySelector('header').style.background= 'transparent'
    document.querySelector('header').style.color ='rgb(133, 190, 49)'
    document.querySelector('span').style.color = 'black'
    document.querySelector('span').style.backgroundColor = 'transparent'
    document.querySelector('.mainSection').style.background= 'rgb(1, 84, 58)'
    document.querySelector('.mainSection').style.color= 'rgb(27, 176, 81)'
    
    //Selected to apply each idiv. button instead of querySelectorAll
    document.querySelector('#mario').style.backgroundColor = 'rgb(27, 176, 81)'
    document.querySelector('#mario').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#luigi').style.backgroundColor = 'rgb(27, 176, 81)'
    document.querySelector('#luigi').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#yoshi').style.backgroundColor = 'rgb(27, 176, 81)'
    document.querySelector('#yoshi').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#link').style.backgroundColor = 'rgb(27, 125, 60)'
    document.querySelector('#link').style.color = 'rgb(245,245,245)'
    document.querySelector('#donkeyKong').style.backgroundColor = 'rgb(27, 176, 81)'
    document.querySelector('#donkeyKong').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#fox').style.backgroundColor = 'rgb(27, 176, 81)'
    document.querySelector('#fox').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#spongebob').style.backgroundColor = 'rgb(27, 176, 81)'
    document.querySelector('#spongebob').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#pikachu').style.backgroundColor = 'rgb(27, 176, 81)'
    document.querySelector('#pikachu').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#jiren').style.backgroundColor = 'rgb(27, 176, 81)'
    document.querySelector('#jiren').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#mainMenu').style.backgroundColor = 'rgb(27, 176, 81)'
    document.querySelector('#mainMenu').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#random').style.backgroundColor = 'rgb(27, 176, 81)'
    document.querySelector('#random').style.color = 'rgb(210, 208, 206)'
}

document.getElementById('donkeyKong').addEventListener('click', donkeyKong)

function donkeyKong(){
    document.querySelector('body').style.backgroundImage = 'url(Pictures/dk1.png)'
    document.querySelector('body').style.backgroundSize= '400px'
    document.querySelector('body').style.backgroundPosition= 'center 140px'
    document.querySelector('body').style.backgroundColor= 'rgb(40,20,20)'
    document.querySelector('header').style.background= 'transparent'
    document.querySelector('header').style.color = 'rgb(255, 0, 0)'
    document.querySelector('span').style.color = 'rgb(255, 0, 0)'
    document.querySelector('span').style.backgroundColor = 'rgba(0, 0, 0,0.6)'
    document.querySelector('.mainSection').style.background= 'rgb(96, 54, 11)'
    document.querySelector('.mainSection').style.color= 'rgb(199, 157, 109)'
    
    //Selected to apply each idiv. button instead of querySelectorAll
    document.querySelector('#mario').style.backgroundColor = 'rgb(199, 157, 109)'
    document.querySelector('#mario').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#luigi').style.backgroundColor = 'rgb(199, 157, 109)'
    document.querySelector('#luigi').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#yoshi').style.backgroundColor = 'rgb(199, 157, 109)'
    document.querySelector('#yoshi').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#link').style.backgroundColor = 'rgb(199, 157, 109)'
    document.querySelector('#link').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#donkeyKong').style.backgroundColor = 'rgb(155 , 120, 80)'
    document.querySelector('#donkeyKong').style.color = 'rgb(245,245,245)'
    document.querySelector('#fox').style.backgroundColor = 'rgb(199, 157, 109)'
    document.querySelector('#fox').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#spongebob').style.backgroundColor = 'rgb(199, 157, 109)'
    document.querySelector('#spongebob').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#pikachu').style.backgroundColor = 'rgb(199, 157, 109)'
    document.querySelector('#pikachu').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#jiren').style.backgroundColor = 'rgb(199, 157, 109)'
    document.querySelector('#jiren').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#mainMenu').style.backgroundColor = 'rgb(199, 157, 109)'
    document.querySelector('#mainMenu').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#random').style.backgroundColor = 'rgb(199, 157, 109)'
    document.querySelector('#random').style.color = 'rgb(210, 208, 206)'
}

document.getElementById('fox').addEventListener('click' , fox)

function fox() {
    document.querySelector('body').style.backgroundImage= 'url(Pictures/fox1.png)'
    document.querySelector('body').style.backgroundSize= '410px'
    document.querySelector('body').style.backgroundPosition= 'center 140px'
    document.querySelector('body').style.color= 'rgb(214, 207, 207)'
    document.querySelector('body').style.backgroundColor= 'navy'
    document.querySelector('header').style.background= 'transparent'
    document.querySelector('header').style.color = 'rgb(41, 60, 75)'
    document.querySelector('span').style.color = 'rgb(237, 207, 147)'
    document.querySelector('span').style.backgroundColor = 'transparent'
    document.querySelector('.mainSection').style.background= 'rgb(16, 62, 75)'
    document.querySelector('.mainSection').style.color= 'rgb(84, 153, 182)'
    
    //Selected to apply each idiv. button instead of querySelectorAll
    document.querySelector('#mario').style.backgroundColor = 'rgb(84, 153, 182)'
    document.querySelector('#mario').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#luigi').style.backgroundColor = 'rgb(84, 153, 182)'
    document.querySelector('#luigi').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#yoshi').style.backgroundColor = 'rgb(84, 153, 182)'
    document.querySelector('#yoshi').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#link').style.backgroundColor = 'rgb(84, 153, 182)'
    document.querySelector('#link').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#donkeyKong').style.backgroundColor = 'rgb(84, 153, 182)'
    document.querySelector('#donkeyKong').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#fox').style.backgroundColor = 'rgb(65,115,140)'
    document.querySelector('#fox').style.color = 'rgb(245,245,245)'
    document.querySelector('#spongebob').style.backgroundColor = 'rgb(84, 153, 182)'
    document.querySelector('#spongebob').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#pikachu').style.backgroundColor = 'rgb(84, 153, 182)'
    document.querySelector('#pikachu').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#jiren').style.backgroundColor = 'rgb(84, 153, 182)'
    document.querySelector('#jiren').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#mainMenu').style.backgroundColor = 'rgb(84, 153, 182)'
    document.querySelector('#mainMenu').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#random').style.backgroundColor = 'rgb(84, 153, 182)'
    document.querySelector('#random').style.color = 'rgb(210, 208, 206)'
}

document.getElementById('spongebob').addEventListener('click' , spongebob)

function spongebob() {
    document.querySelector('body').style.backgroundImage = 'url(Pictures/doodlebob1.png)'
    document.querySelector('body').style.backgroundSize= '425px'
    document.querySelector('body').style.backgroundPosition= 'center 140px'
    document.querySelector('body').style.color= 'rgb(214, 207, 207)'
    document.querySelector('body').style.backgroundColor= 'rgb(0, 67, 178)'
    document.querySelector('header').style.background= 'transparent'
    document.querySelector('header').style.color= 'rgb(210, 208, 206)'
    document.querySelector('span').style.color = 'black'
    document.querySelector('span').style.backgroundColor = 'transparent'
    document.querySelector('.mainSection').style.background= 'rgb(1, 145, 192)'
    document.querySelector('.mainSection').style.color='rgb(89, 56, 136)'
    
    //Selected to apply each idiv. button instead of querySelectorAll
    document.querySelector('#mario').style.backgroundColor = 'rgb(139, 94, 181)'
    document.querySelector('#mario').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#luigi').style.backgroundColor = 'rgb(139, 94, 181)'
    document.querySelector('#luigi').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#yoshi').style.backgroundColor = 'rgb(139, 94, 181)'
    document.querySelector('#yoshi').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#link').style.backgroundColor = 'rgb(139, 94, 181)'
    document.querySelector('#link').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#donkeyKong').style.backgroundColor = 'rgb(139, 94, 181)'
    document.querySelector('#donkeyKong').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#fox').style.backgroundColor = 'rgb(139, 94, 181)'
    document.querySelector('#fox').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#spongebob').style.backgroundColor = 'rgb(110,75,140)'
    document.querySelector('#spongebob').style.color = 'rgb(245,245,245)'
    document.querySelector('#pikachu').style.backgroundColor = 'rgb(139, 94, 181)'
    document.querySelector('#pikachu').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#jiren').style.backgroundColor = 'rgb(139, 94, 181)'
    document.querySelector('#jiren').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#mainMenu').style.backgroundColor = 'rgb(139, 94, 181)'
    document.querySelector('#mainMenu').style.color = 'rgb(210, 208, 206)'
    document.querySelector('#random').style.backgroundColor = 'rgb(139, 94, 181)'
    document.querySelector('#random').style.color = 'rgb(210, 208, 206)'
}

document.getElementById('pikachu').addEventListener('click' , pikachu)

function pikachu() {
    document.querySelector('body').style.backgroundImage = 'url(Pictures/peekachoo.png)'
    document.querySelector('body').style.backgroundSize= '400px'
    document.querySelector('body').style.backgroundPosition= 'center 140px'
    document.querySelector('body').style.color= 'rgb(214, 207, 207)'
    document.querySelector('body').style.backgroundColor= 'navy'
    document.querySelector('header').style.backgroundColor= 'transparent'
    document.querySelector('header').style.color='rgb(247, 255, 122)'
    document.querySelector('span').style.color = 'white'
    document.querySelector('span').style.backgroundColor = 'transparent'
    document.querySelector('.mainSection').style.background= 'rgb(6, 90, 126)'
    document.querySelector('.mainSection').style.color='rgb(247, 255, 122)'
    
    //Selected to apply each idiv. button instead of querySelectorAll
    document.querySelector('#mario').style.backgroundColor = 'rgb(44, 73, 105)'
    document.querySelector('#mario').style.color = 'rgb(247, 255, 122)'
    document.querySelector('#luigi').style.backgroundColor = 'rgb(44, 73, 105)'
    document.querySelector('#luigi').style.color = 'rgb(247, 255, 122)'
    document.querySelector('#yoshi').style.backgroundColor = 'rgb(44, 73, 105)'
    document.querySelector('#yoshi').style.color = 'rgb(247, 255, 122)'
    document.querySelector('#link').style.backgroundColor = 'rgb(44, 73, 105)'
    document.querySelector('#link').style.color = 'rgb(247, 255, 122)'
    document.querySelector('#donkeyKong').style.backgroundColor = 'rgb(44, 73, 105)'
    document.querySelector('#donkeyKong').style.color = 'rgb(247, 255, 122)'
    document.querySelector('#fox').style.backgroundColor = 'rgb(44, 73, 105)'
    document.querySelector('#fox').style.color = 'rgb(247, 255, 122)'
    document.querySelector('#spongebob').style.backgroundColor = 'rgb(40, 60, 100)'
    document.querySelector('#spongebob').style.color = 'rgb(247,255,122)' 
    document.querySelector('#pikachu').style.backgroundColor = 'rgb(30, 50, 75)'
    document.querySelector('#pikachu').style.color = 'rgb(255,255,80)'
    document.querySelector('#jiren').style.backgroundColor = 'rgb(44, 73, 105)'
    document.querySelector('#jiren').style.color = 'rgb(247, 255, 122)'
    document.querySelector('#mainMenu').style.backgroundColor = 'rgb(44, 73, 105)'
    document.querySelector('#mainMenu').style.color = 'rgb(247, 255, 122)'
    document.querySelector('#random').style.backgroundColor = 'rgb(44, 73, 105)'
    document.querySelector('#random').style.color = 'rgb(247, 255, 122)'
}

document.getElementById('jiren').addEventListener('click' , jiren)

function jiren() {
    document.querySelector('body').style.backgroundImage = 'url(Pictures/geeren.png)'
    document.querySelector('body').style.backgroundSize= '425px'
    document.querySelector('body').style.backgroundPosition= 'center 110px'
    document.querySelector('body').style.backgroundColor= 'black'
    document.querySelector('header').style.background= 'transparent'
    document.querySelector('header').style.color= 'rgb(169, 3, 27)'
    document.querySelector('span').style.color = 'black'
    document.querySelector('span').style.backgroundColor = 'transparent'
    document.querySelector('.mainSection').style.background= 'rgb(85, 99, 128)'
    document.querySelector('.mainSection').style.color='rgb(169, 3, 27)'
    
    //Selected to apply each idiv. button instead of querySelectorAll
    document.querySelector('#mario').style.backgroundColor = 'rgb(93, 134, 178)'
    document.querySelector('#mario').style.color = 'black'
    document.querySelector('#luigi').style.backgroundColor = 'rgb(93, 134, 178)'
    document.querySelector('#luigi').style.color= 'black'
    document.querySelector('#yoshi').style.backgroundColor = 'rgb(93, 134, 178)'
    document.querySelector('#yoshi').style.color = 'black'
    document.querySelector('#link').style.backgroundColor = 'rgb(93, 134, 178)'
    document.querySelector('#link').style.color = 'black'
    document.querySelector('#donkeyKong').style.backgroundColor = 'rgb(93, 134, 178)'
    document.querySelector('#donkeyKong').style.color = 'black'
    document.querySelector('#fox').style.backgroundColor = 'rgb(93, 134, 178)'
    document.querySelector('#fox').style.color = 'black'
    document.querySelector('#spongebob').style.backgroundColor = 'rgb(93, 134, 178)'
    document.querySelector('#spongebob').style.color = 'black'
    document.querySelector('#pikachu').style.backgroundColor = 'rgb(93, 134, 178)'
    document.querySelector('#pikachu').style.color = 'black'
    document.querySelector('#jiren').style.backgroundColor = 'rgb(70, 100, 130)'
    document.querySelector('#jiren').style.color = 'black'
    document.querySelector('#mainMenu').style.backgroundColor = 'rgb(93, 134, 178)'
    document.querySelector('#mainMenu').style.color = 'black'
    document.querySelector('#random').style.backgroundColor = 'rgb(93, 134, 178)'
    document.querySelector('#random').style.color = 'black'
}

document.getElementById('mainMenu').addEventListener('click', mainMenu)

function mainMenu(){
    document.querySelector('body').style.backgroundImage = 'url(Pictures/mainScreen2.png)'
    document.querySelector('body').style.backgroundSize= '500px'
    document.querySelector('body').style.backgroundPosition= 'center 190px'
    document.querySelector('body').style.backgroundColor= 'white'
    document.querySelector('.mainSection').style.background= 'rgb(43, 153, 226)'
    document.querySelector('.mainSection').style.color = 'rgb(103, 61, 182)'
    document.querySelector('span').style.color = 'rgb(243, 139, 203)'
    document.querySelector('span').style.backgroundColor = 'transparent'
    document.querySelector('header').style.backgroundColor = 'transparent'
    document.querySelector('header').style.color = 'rgb(103, 209, 54)'
    
    //Selected to apply each idiv. button instead of querySelectorAll
    document.querySelector('#mario').style.backgroundColor = 'rgb(43, 153, 226)'
    document.querySelector('#mario').style.color = 'white'
    document.querySelector('#luigi').style.backgroundColor = 'rgb(43, 153, 226)'
    document.querySelector('#luigi').style.color = 'white'
    document.querySelector('#yoshi').style.backgroundColor = 'rgb(43, 153, 226)'
    document.querySelector('#yoshi').style.color = 'white'
    document.querySelector('#link').style.backgroundColor = 'rgb(43, 153, 226)'
    document.querySelector('#link').style.color = 'white'
    document.querySelector('#donkeyKong').style.backgroundColor = 'rgb(43, 153, 226)'
    document.querySelector('#donkeyKong').style.color = 'white'
    document.querySelector('#fox').style.backgroundColor = 'rgb(43, 153, 226)'
    document.querySelector('#fox').style.color = 'white'
    document.querySelector('#spongebob').style.backgroundColor = 'rgb(43, 153, 226)'
    document.querySelector('#spongebob').style.color = 'white'
    document.querySelector('#pikachu').style.backgroundColor = 'rgb(43, 153, 226)'
    document.querySelector('#pikachu').style.color = 'white'
    document.querySelector('#jiren').style.backgroundColor = 'rgb(43, 153, 226)'
    document.querySelector('#jiren').style.color = 'white'
    document.querySelector('#mainMenu').style.backgroundColor = 'rgb(43, 153, 226)'
    document.querySelector('#mainMenu').style.color = 'white'
    document.querySelector('#random').style.backgroundColor = 'rgb(43, 153, 226)'
    document.querySelector('#random').style.color = 'white'
}
