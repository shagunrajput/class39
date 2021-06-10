class Player{

    constructor(){
        this.index=null;
         this.distance=0;
         this.name=null;

    }

    getCount(){
        var playercountref= database.ref('playerCount');
        playercountref.on("value",function(data){
            myplayercount=data.val();
        }
        )
    }

    updateCount (count){
        database.ref('/').update({
            playerCount:count
        })
    

    }

    update(){

        var playerIndex="Players/player"+this.index;
        database.ref(playerIndex).set({
        Name:this.name,
                Distance:this.distance

        })
    }

    static getPlayerInfo(){
    var playerInfoRef=database.ref("Players");
    playerInfoRef.on("value",(data)=>{
   allPlayers=data.val()     
    })

    }

}