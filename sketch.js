var database;
var mygamestate=0;
var myplayercount=0;
var form,player,game;
var allPlayers;
var car1,car2,car3,car4,cars;
var track,car1Img,car2Img,car3Img,car4Img;

function preload(){
car1Img = loadImage("images/car1.png");
car2Img = loadImage("images/car2.png");
car3Img = loadImage("images/car3.png");
car4Img = loadImage("images/car4.png");
track = loadImage("images/track.jpg");

}

function setup(){
    createCanvas(displayWidth-40,displayHeight-30);

    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
  if(myplayercount===4){
    game.update(1);


  }  
 if(mygamestate===1){
    clear();
    game.play();



 }
 
 if(mygamestate===2){

game.end();

 }

 

 //drawSprites();
}


