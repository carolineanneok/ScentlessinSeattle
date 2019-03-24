'use strict'

if (localStorage.allViewLoc){
    console.log('previous storage');
var retrievedViews=localStorage.muralPicsLoc;    
var allView = json.parse (retrievedViews);
    localStorage.clear
}
else { 
    console.log('new view')
var muralPics=[muralcrowd,muralfence,muralstage];
var allView= [];
for (i=0;i<muralPics.length;i++){
   allView.push (0);
}
}

var views =0;
var allMural =[];
var imgLeft= document.getElementsByClassName('column');

//dom node

function Mural(name,column){
    this.filepath ='img/${name}.jpg';
    this.name =name;
    this.view =column;
    allMural.push(this);
}
for(var i=0; i< MuralNames.length;i++){
    new MuralNames(`${MuralNames[i]}`,allViews[i]);
}

//construction function to make random pics show up in imgLeft
 function showRandomMural (){
     var left =[];
     var img ={};
     for(var i = 0;i<3;i++){
         img[past[k]]=true;
     }
 } for(var i=0; i<past.lenth;i++){ 
     var random = Math.floor(Math.random()*allViews.length);
     while (img[random]){
         random =Math.floor(Math.random()*allViews.length);
     }
     three.push(random);
     img[random]=true;
 }   



