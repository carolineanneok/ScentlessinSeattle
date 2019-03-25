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

 ImgLeft.hidden = false;
 ImgLeft.src = allViews[three[0]].filepath;
 ImgLeft.alt = allViews[three[0]].name;
 ImgLeft.title = allViews[three[0]].name;
 past=three;


 //add handle click event code here

 


    function handleClick(event){
        if(imgClicks <3){
          var imgClicks = document.getElementById('img');
        
          for (var i=0; i<allProducts.length; i++){
            if (event.target.title===allViews[i].name){
            allViews[i].muralPics++;
            views++;
            }
          }
          allViews=[];
          
          for(var i = 0; i<allViews.length; i++){
            allViews.push(allViews[i].muralPics);
          }
          var muralNamesStringified = JSON.stringify(muralNames);
          localStorage.muralNamesLoc=muralNamesStringified;
          var allmuralNamesStringified = JSON.stringify(allViews);
          localStorage.allMuralNamesLoc=allViewsStringified;
      
          showRandomMural();
          
        }



        if (imgClicks === 3){
        var imgClickLeft = document.getElementById('img');
        ImgLeftA.hidden=true;
        holder.hidden=true;
        ImgLefttA.src = '';
        ImgLefttA.alt = '';
        ImgLefttA.title = '';
           }
        }

showRandomMural();
imgLeft.addEventListener('click',handleClick)