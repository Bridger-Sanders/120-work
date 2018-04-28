 var sun = {
     size: 0,
 };

 var star = {
     x: 0,
     y: 0,
     size: 0,
 };

 var planetSize = 20;
 
 var r = 0;
 var g = 0;
 var b = 0;

function setup(){
    createCanvas( 1366, 650 );
}

function draw(){
    //background black to yellow
    r = map( mouseX, 126, 1366, 0, 255 );
    g = map( mouseX, 126, 1366, 0, 255 );
    background( r, g, 0 );

    //random stars
    star.x = random( 0, width );
    star.y = random( 0, height );
    star.size = random( 2, 4);
    fill( 255 );
    rect( star.x, star.y, star.size, star.size );

    //sun
    sun.size = random( ( planetSize * 109 ) - 10, planetSize * 109 );
    noStroke();
    fill( 255, 255, 0 );
    ellipse( -900, height/2, sun.size, sun.size );

    //space walls
    let mercuryWall = width - 1100;
    let venusWall = width - 1050;
    let earthWall = width - 1000;
    let marsWall = width - 950;
    let jupiterWall = width - 775;
    let saturnWall = width - 525;
    let uranusWall = width - 350;
    let neptuneWall = width -250;

    //space constrains
    let mec = constrain(mouseX, mercuryWall, width);
    let vec = constrain(mouseX, venusWall, width);
    let eac = constrain(mouseX, earthWall, width);
    let mac = constrain(mouseX, marsWall, width);
    let juc = constrain(mouseX, jupiterWall, width);
    let sac = constrain(mouseX, saturnWall, width);
    let urc = constrain(mouseX, uranusWall, width);
    let nec = constrain(mouseX, neptuneWall, width);

    //jupiter
    noStroke();
    fill( 233, 150, 122 );
    ellipse( juc, mouseY, planetSize * 11.21, planetSize * 11.21 );

    //saturn
    noStroke();
    fill( 255, 160, 122 );
    ellipse( sac, mouseY, planetSize * 9.45, planetSize * 9.45 );

    //uranus
    noStroke();
    fill( 65, 105, 225 );
    ellipse( urc, mouseY, planetSize * 4.01, planetSize * 4.01 );
       
    //neptune
    noStroke();
    fill( 72, 61, 139 );
    ellipse( nec, mouseY, planetSize * 3.88, planetSize * 3.88 );

    //earth
    noStroke();
    fill( 25, 25, 112 );
    ellipse( eac, mouseY, planetSize, planetSize );

    //venus
    noStroke();
    fill( 255, 140, 0 );
    ellipse( vec, mouseY, planetSize * 0.949 , planetSize * 0.949 );

    //mars
    noStroke();
    fill( 165, 42, 42 );
    ellipse( mac, mouseY, planetSize * 0.532, planetSize * 0.532 );

    //mercury
    noStroke();
    fill( 210, 180, 140 );
    ellipse( mec, mouseY, planetSize * 0.383, planetSize * 0.383 );
}