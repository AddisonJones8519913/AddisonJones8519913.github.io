$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
  createPlatform(500, 600, 100, 10);
  createPlatform(800,300,100,10);
  createPlatform(700, 700, 200, 10);
  createPlatform(900,900, 200, 10);
  createPlatform(1000,200,100,10);
  createPlatform(1000,400,100,10);
  createPlatform(800,500,100,10);



    // TODO 3 - Create Collectables
  createCollectable('kennedi', 850, 250);
  createCollectable('steve', 550, 550);
  createCollectable('max',850,450);



    
    // TODO 4 - Create Cannons
 createCannon( "bottom" ,350, 1000);
createCannon("top", 950,1000);
createCannon("left",200,1000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
