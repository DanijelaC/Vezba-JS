'use strict'

  var text = 'Ovo je moja prezentacija';
  var text1 = text.split(''); 
    

//console.log(text1);

var loop;
var scroll = document.getElementById('scroll');

function start() {
    if (text1.length > 0) {
        scroll.innerHTML += text1.shift();
        loop = setTimeout(start, 400);
         
    }
}
start();

var btn = document.getElementById('btn');
var btn1 = document.getElementById('btn1')
var video = document.getElementById('video');
var audio = document.getElementById('audio');
var abtn = document.getElementById('abtn');
var sbtn = document.getElementById('sbtn')

btn.addEventListener('click', function (){
    
    vd.play();
});
btn1.addEventListener('click', function (){
    
    vd.pause();
});
abtn.addEventListener('click', function (){
    
   aud.play();
});
sbtn.addEventListener('click', function (){
    
    aud.pause();
});

var timer = document.getElementById('timer');
var loop1;

function showTime(){
    var d = new Date();
    var h = d.getHours();
    var m =d.getMinutes();
    var s = d.getSeconds();
    
    timer.innerHTML = h+'h:'+m+'m:'+s+'s'
    
}
loop1 = setInterval(showTime, 1000);

