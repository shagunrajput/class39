class Form{
    constructor(){
        this.input=createInput("name");
        this.button= createButton("play");
        this.title=createElement('h2');
        this.greeting=createElement('h3');
    }


    hideElements(){
    this.button.hide();
    this.input.hide();
    this.greeting.hide();

    }
    display(){
        
       this.title.html("car racing game");
        this.title.position(displayWidth/2-50,0);

        
        this.input.position(displayWidth/2-40,displayHeight/2-80);

        
        this.button.position(displayWidth/2+30,displayHeight/2);

        

        this.button.mousePressed(()=>{
           this.input.hide();
            this.button.hide();

            player.name=this.input.value();

        myplayercount=myplayercount+1;
        player.index=myplayercount;
        player.update();
        player. updateCount(myplayercount);

       this.greeting.html("Hello "+player.name);
        this.greeting.position(displayWidth/2-70,displayHeight/4);
        })

    }
}