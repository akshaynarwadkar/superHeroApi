
const divEl=document.getElementById('div')
const btnEl=document.getElementById('btn')
const searchBtnEl=document.getElementById('search-btn')
const heroValueEl=document.getElementById('Hero-value')

const url='https://www.superheroapi.com/api.php/3011754185797805'

const emoji={
    intelligence:'🧠',
    strength:'💪',
    speed:'⚡',
    durability:'🏋️',
    power:'👊',
    combat:'⚔️'
}

function randomHero(){
    let id=Math.floor(Math.random()*731)+1
    fetch(`${url}/${id} `)
    .then(response=>response.json())
    .then(json=>{
        divEl.innerHTML=`<h2>Name: ${json.name}</h2> `
        divEl.innerHTML+=`<img src='${json.image.url}' width=200 height=200>`
        
       
        
        for (key in json.powerstats){ 
            divEl.innerHTML+=`<p> ${emoji[key]} ${key.toUpperCase()}: ${json.powerstats[key]}  </p>`
        }
    })
}

function specificHero(){
    let searchedValue= heroValueEl.value
    fetch(`${url}/search/${searchedValue}`)
    .then(response=>response.json())
    .then(json=>{
        // console.log(json)
        divEl.innerHTML=`<h2> Name: ${json.results[0].name} </h2> `
        divEl.innerHTML+=`<img src='${json.results[0].image.url}' width=200 height=200 >`


        for(key in json.results[0].powerstats){
            divEl.innerHTML+=`<p> ${emoji[key]} ${key.toUpperCase()}: ${json.results[0].powerstats[key]} `
        }

    })
}

btnEl.onclick=()=>{
    randomHero()
}

searchBtnEl.onclick=()=>{
    specificHero()
}