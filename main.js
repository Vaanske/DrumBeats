const sounds= [{ id: "Q",
                 url: "http://www.synthmania.com/Boss%20DR-220A/Audio/Boss%20DR-220A%20Preset%20Patterns/Shuffle%20(2).mp3",
         key: "Q"
},
              {id: "W",
                 url: "http://www.synthmania.com/Boss%20DR-220A/Audio/Boss%20DR-220A%20Preset%20Patterns/Shuffle%20(2).mp3",
         key: "W"},
            {id: "E",
                 url: "http://www.synthmania.com/Boss%20DR-220A/Audio/Boss%20DR-220A%20Preset%20Patterns/Shuffle%20(2).mp3",
         key: "E"},
               {id: "A",
                 url: "http://www.synthmania.com/Boss%20DR-220A/Audio/Boss%20DR-220A%20Preset%20Patterns/Shuffle%20(2).mp3",
         key: "A"},
          {id: "C",
                 url: "http://www.synthmania.com/Boss%20DR-220A/Audio/Boss%20DR-220A%20Preset%20Patterns/Shuffle%20(2).mp3",
         key: "C"},
 {id: "S",
      url: "http://www.synthmania.com/Boss%20DR-220A/Audio/Boss%20DR-220A%20Preset%20Patterns/Shuffle%20(2).mp3",
         key: "S"},
 {id: "D",
                 url: "http://www.synthmania.com/Boss%20DR-220A/Audio/Boss%20DR-220A%20Preset%20Patterns/Shuffle%20(2).mp3",
         key: "D"}, 
     {id: "Z",
      url: "http://www.synthmania.com/Boss%20DR-220A/Audio/Boss%20DR-220A%20Preset%20Patterns/Shuffle%20(2).mp3",
   key: "Z"},
               {id: "X",
                 url: "http://www.synthmania.com/Boss%20DR-220A/Audio/Boss%20DR-220A%20Preset%20Patterns/Shuffle%20(2).mp3",
         key: "X"}]
let drums= $(".drum-pad")
drums.keypress( function (e) {
    if (e.key=="Q"|| e.key=="q") {
     let char=e.key.toUpperCase();
let aud=document.getElementById(char);
 aud.play();
 setTimeout(stopIt,300);
 function stopIt() {
     aud.pause();
 } ; 
   $("p").html(char);
 }
    if (e.key=="W"|| e.key=="w") {
     let char=e.key.toUpperCase();
let aud=document.getElementById(char);
 aud.play();
 setTimeout(stopIt,300);
 function stopIt() {
     aud.pause();
 } ; 
   $("p").html(char);
 }
    if (e.key=="E"|| e.key=="e") {
     let char=e.key.toUpperCase();
let aud=document.getElementById(char);
 aud.play();
 setTimeout(stopIt,300);
 function stopIt() {
     aud.pause();
 } ; 
   $("p").html(char);
 }
    if (e.key=="A"|| e.key=="a") {
     let char=e.key.toUpperCase();
let aud=document.getElementById(char);
 aud.play();
 setTimeout(stopIt,300);
 function stopIt() {
     aud.pause();
 } ; 
   $("p").html(char);
 }
    if (e.key=="S"|| e.key=="s") {
     let char=e.key.toUpperCase();
let aud=document.getElementById(char);
 aud.play();
 setTimeout(stopIt,300);
 function stopIt() {
     aud.pause();
 } ; 
   $("p").html(char);
 }
    if (e.key=="D"|| e.key=="d") {
     let char=e.key.toUpperCase();
let aud=document.getElementById(char);
 aud.play();
 setTimeout(stopIt,300);
 function stopIt() {
     aud.pause();
 } ; 
   $("p").html(char);
 }
    if (e.key=="Z"|| e.key=="z") {
     let char=e.key.toUpperCase();
let aud=document.getElementById(char);
 aud.play();
 setTimeout(stopIt,300);
 function stopIt() {
     aud.pause();
 } ; 
   $("p").html(char);
 }
    if (e.key=="X"|| e.key=="x") {
     let char=e.key.toUpperCase();
let aud=document.getElementById(char);
 aud.play();
 setTimeout(stopIt,300);
 function stopIt() {
     aud.pause();
 } ; 
   $("p").html(char);
 }
    if (e.key=="C"|| e.key=="c") {
     let char=e.key.toUpperCase();
let aud=document.getElementById(char);
 aud.play();
 setTimeout(stopIt,300);
 function stopIt() {
     aud.pause();
 } ; 
   $("p").html(char);
 }
})
function clickMe(value){
   console.log(value);
 for (let i=0;i<sounds.length;i++) {
     if (value==sounds[i].id){
        let aud=document.getElementById(sounds[i].id);
 aud.play();
 setTimeout(stopIt,300);
 function stopIt() {
     aud.pause();
 } ; 
   $("p").html(sounds[i].id);
     }
         
 }  
 }

