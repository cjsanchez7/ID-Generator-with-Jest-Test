 export function Show() {
    var a=document.getElementById('nme').value;
    var b=document.getElementById('dob').value;
    var c=document.getElementById('scn').value;
    var d=document.getElementById('dep').value;
    var e=document.getElementById('url').value;
    var g=document.getElementById('con').value;
    var h=document.getElementById('ea').value;

    document.getElementById('aa').innerHTML=a;
    document.getElementById('bb').innerHTML=b;
    document.getElementById('cc').innerHTML=c;
    document.getElementById('dd').innerHTML=d;
    document.getElementById('image').src=e;
    document.getElementById('ff').innerHTML=g;
    document.getElementById('gg').innerHTML=h;
   
    document.getElementById('frm').style.display="none";
    document.getElementById('opt').style.display="block";
    document.getElementById('but').style.display="block";

    const min = 11111111;
    const max = 99999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 777)) + min;
    document.getElementById("ee").innerHTML = randomNumber;
}

export function Fill() {
  window.location.reload();
}

import html2canvas from 'html2canvas';
const { createCanvas } = require('canvas');
global.HTMLCanvasElement = createCanvas().constructor;

export function Download() {
  const card = document.getElementById("card");
  html2canvas(card).then(function (canvas) {
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "card.png";
    link.href = canvas.toDataURL();
    link.target = '_blank';
    link.click();
    console.log('Download Successful'); // Update this line
  });
}