
var timer;
var total=1;
var count=0;

var Game = {

    preload : function() {

    	game.load.image('pbub','c1.png');
    	game.load.image('abub','cd1.png');
    	game.load.image('bbub','p4.png');
        game.load.image('cbub','r2.png');
        game.load.image('dbub','pi2.png');
        game.load.image('ebub','w1.png');

    	game.load.image('background','back_' + game.rnd.integerInRange(1,4)+'.jpg');
    
    	game.load.image('bbub','speech-balloon-orange-b-icon.png');

        },

    create : function() {    

    	timer=game.time.create(false);
    timer.loop(1000,updateCounter,this);
        timer.start();


    function updateCounter()
    {
        total++;
        if(total==16)
        {
            
           // game_music.stop();
       // alert("SORRY!! YOU LOST :(");
    game.state.start('Game_Over');
    total = 1;
    }
}

        var bg = game.add.tileSprite(0, 0, 800, 600, 'background');
        var delay = 0;

// for random images including POS

        for(var j=0; j< 7; j++)
        {
        	var pbubble = game.add.sprite(0 + (game.world.randomX), game.rnd.integerInRange(400,600), 'pbub');

       pbubble.scale.set(game.rnd.realInRange(0.5, 1));

        var abubble = game.add.sprite(0 + (game.world.randomX), 200, 'abub');

        abubble.scale.set(game.rnd.realInRange(0.5, 1));

        var bbubble = game.add.sprite(0 + (game.world.randomX), 300, 'bbub');

        bbubble.scale.set(game.rnd.realInRange(0.5, 1));

        var cbubble = game.add.sprite(0 + (game.world.randomX), game.rnd.integerInRange(100,600), 'cbub');

       cbubble.scale.set(game.rnd.realInRange(0.5, 1));

       var dbubble = game.add.sprite(0 + (game.world.randomX), 500, 'dbub');

        dbubble.scale.set(game.rnd.realInRange(0.5, 1));

        var ebubble = game.add.sprite(0 + (game.world.randomX), 550, 'ebub');

        ebubble.scale.set(game.rnd.realInRange(0.5, 1));


        var speed = game.rnd.between(8000, 10000);

        game.add.tween(abubble).to({ y: -100 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        game.add.tween(pbubble).to({ y: -130 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        game.add.tween(bbubble).to({ y: -80}, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        game.add.tween(cbubble).to({ y: -150 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        game.add.tween(dbubble).to({ y: -60 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        game.add.tween(ebubble).to({ y: -30 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        delay += 50;

        bbubble.inputEnabled = true;

        bbubble.input.useHandCursor = true;

		bbubble.events.onInputDown.add(destroySprite, this);
        }


// for POS only
		for(var i=0; i < 3; i++)
		{
			var bbubble = game.add.sprite(0 + (game.world.randomX), 470, 'bbub');

        bbubble.scale.set(game.rnd.realInRange(0.5, 1));

        game.add.tween(bbubble).to({ y: -100 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        delay += 30;

        bbubble.inputEnabled = true;

        bbubble.input.useHandCursor = true;

		bbubble.events.onInputDown.add(destroySprite, this);

		}


// for POS only

    	for (var k = 0; k < 3; k++)
    	{
        var bbubble = game.add.sprite(0 + (game.world.randomX), 600, 'bbub');

        bbubble.scale.set(game.rnd.realInRange(0.5, 1));
     
        game.add.tween(bbubble).to({ y: -50 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        delay += 100;

        bbubble.inputEnabled = true;

        bbubble.input.useHandCursor = true;

		bbubble.events.onInputDown.add(destroySprite, this);
    	}

function destroySprite (bbubble) {

    bbubble.destroy();
       count++;
       if(count==10)
    {
       //alert("CONGRATS!! YOU WON :)");
        game.state.start('Game_Over');
        total=1;
    }

    }
},

    update: function() {

     game.add.text(32, 32, "CLICK 10 POS MACHINES IN 15 SECS", { font: "16px sans-serif", fill: "#FFFFFF"});
    game.debug.text('TIME IN SECONDS: ' + total,32,32);
    game.debug.text('POS BURST: ' +count,32,580);
    	
    },

   

};
