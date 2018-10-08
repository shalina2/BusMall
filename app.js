
'use strict';

var images =3;
var maxvote =5;
var votetotal =0;


var pictures = function(filepath,fileName) {
  this.filepath =filepath;
  this.fileName =fileName;
  this.views = 0;
  this.clicks = 0;
  pictures.allimages =[];
}
function loadImages() {
  var localpictures = localStorage.getItem('pic');
  var pictures = JSON.parse(localpictures);
  if (images && images.length) {

  }
  function newImages() {
  new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/bag.jpg', 'bag');
  new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/banana.jpg', 'banana');
  new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/bathroom.jpg', 'bathroom');
  new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/boots.jpg', 'boots');
  new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/breakfast.jpg', 'breakfast');
  new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/bubblegum.jpg', 'bubblegum');
  new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/chair.jpg', 'chair');
  new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/cthulhu.jpg', 'cthulhu');
  new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/dog-duck.jpg', 'dog-duck');
  new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/dragon.jpg', 'dragon');
  new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/pet-sweep.jpg', 'pen');
  new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/pet-sweep.jpg', 'pet-sweep');
  new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/scissors.jpg', 'scissors');
  new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/shark.jpg', 'shark');
  new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/sweep.png', 'sweep');
  new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/tauntaun.jpg', 'tauntaun');
  new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/unicorn.jpg', 'unicorn');
  new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/usb.gif', 'usb');
  new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/water-can.jpg', 'water-can');
  new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/wine-glass.jpg', 'wine-glass');
}





}

function showChart(){
  var labels =[];
  var clickdata =[];

}

function setupEventListeners() {
  imgElement1.addEventListener('click', eventHandler);
  imgElement2.addEventListener('click', eventHandler);
  imgElement3.addEventListener('click', eventHandler);
}



function eventHandler(event){
  var imageName = event.target.alt;
  for( var i=0; i<Images.pic.length; i++) {
    if(Images.pic[i].filename === imageName ) {
      Images.pic[i].votes++;
      maxClicksAllowed--;
      break;
    }
  }

  if(maxClicksAllowed === 0) {
    totalData();
    return;
  }

  var randomNum1 = Math.floor(Math.random()*Images.pic.length);
  var randomNum2 = Math.floor(Math.random()*Images.pic.length);
  var randomNum3 = Math.floor(Math.random()*Images.pic.length);

  imgElement1.src = Images.pic[randomNum1].imgSource;
  imgElement1.alt = Images.pic[randomNum1].filename;

  imgElement2.src = Images.pic[randomNum2].imgSource;
  imgElement2.alt = Images.pic[randomNum2].filename;

  imgElement3.src = Images.pic[randomNum3].imgSource;
  imgElement3.alt = Images.pic[randomNum3].filename;

  Images.pic[randomNum1].numberOfTimesShown++;

  Images.pic[randomNum2].numberOfTimesShown++;

  Images.pic[randomNum3].numberOfTimesShown++;

}

function totalData() {
  var ul = document.createElement('ul');

  for(var i=0; i<Images.pic.length; i++) {
    var li = document.createElement('li');
    li.textContent = `
        
        Views: ${Images.pic[i].numberOfTimesShown}
        votes: ${Images.pic[i].votes}
     `;
    ul.appendChild(li);
  }
  li.appendChild('ul');
}


setupEventListeners();
newImages();

newFunction();

var context = document.getElementById('chart').msGetInputContext('2d');
var mychart = new Chart(context, {
  type:'horizontalBar',
  data :{
    labels: images,
    datasets :[
      {
        label:'number of clicks',
        data: voteData,

      },
    ],
  },
  options :{
    responsive:false,
    maintainAspectRatio:true,
    scales: {
      yAkes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  
});
}

showChart();