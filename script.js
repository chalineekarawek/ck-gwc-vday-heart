const thesaurusApiBaseEndpoint = "https://api.api-ninjas.com/v1/thesaurus?word=";
const apiKey = "/hga6BymRA+U6ZtVqh+vWQ==guJF8ujRBmGHHlQx";

let hearts = document.querySelectorAll(".heart-base");
let heartCircles = document.querySelectorAll(".heart-bump");
const heartText = document.querySelector("#changing-message");
const originalHeartMessage = heartText.innerText;

function randomizeHeartColor(heart){
  let newColor = "rgb(" + (Math.floor(Math.random() * 256)).toString() + "," + (Math.floor(Math.random() * 256)).toString() + ',' + (Math.floor(Math.random() * 256)).toString() + ')';
  let childHearts = heart.querySelectorAll(".heart-bump");
  
  heart.style.backgroundColor = newColor; 
  for(let i=0; i < childHearts.length; i++){
    childHearts[i].style.backgroundColor = newColor;
  }
  
}


function randomizeAllHearts(){
  for(let i=0; i < hearts.length; i++){
    randomizeHeartColor(hearts[i]);
  }
}

setInterval(randomizeAllHearts, 2000);

hearts[1].addEventListener("click", function (){
  const xhttp = new XMLHttpRequest();
  
  xhttp.onload = function(){
    let res = JSON.parse(xhttp.responseText);
    let synonyms = res["synonyms"];
    let randIdx = Math.floor(Math.random() * synonyms.length);
    let randSynonym = synonyms[randIdx];
    heartText.innerText = randSynonym;
  }
  xhttp.open("GET", thesaurusApiBaseEndpoint + originalHeartMessage);
  xhttp.setRequestHeader("X-Api-Key", apiKey);
  xhttp.send();
});
