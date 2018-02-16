function setup () {
    //create a x500 by y500 canvas to draw on
    createCanvas ( 500, 500 );
}

function draw () {
    //background spring green
    background ( 'rgb(0, 255, 127)' );

    translate( 0, 80);

    //jacket collar
    //black
    noStroke ();
    fill ( 0 );
    rect ( 180, 310, 140, 10 );
    //jacket
    noStroke ();
    fill ( 0 );
    rect ( 120, 320, 260, 100 );
    //jacket shoulders
    noStroke ();
    fill ( 0 );
    rect ( 110, 330, 280, 90 );
    //jacket outer shoulders
    noStroke ();
    fill ( 0 );
    rect ( 100, 350, 300, 70 );
    //tshirt
    //white
    noStroke ();
    fill ( 255 );
    rect ( 200, 320, 100, 100 );

    //back side of hair
    //saddle brown
    noStroke ();
    fill ( 'rgb(139, 69, 19)' );
    rect ( 140, 220, 220, 30 );
    //middle back side of hair
    noStroke ();
    fill ( 'rgb(139, 69, 19)' );
    rect ( 150, 250, 200, 30 );
    //lower back side of hair
    noStroke ();
    fill ( 'rgb(139, 69, 19)' );
    rect ( 160, 280, 180, 30 );

    //face 
    //wheat color
    noStroke ();
    fill ( 'rgb(245, 222, 179)' );
    rect ( 160, 40, 180, 200 );
    //upper 
    noStroke ();
    fill ( 'rgb(245, 222, 179)' );
    rect ( 170, 240, 160, 20 );
    //upper middle jaw
    noStroke ();
    fill ( 'rgb(245, 222, 179)' );
    rect ( 180, 260, 140, 20 );
    //middle jaw
    noStroke ();
    fill ( 'rgb(245, 222, 179)' );
    rect ( 190, 280, 120, 10 );
    //lower  jaw
    noStroke ();
    fill ( 'rgb(245, 222, 179)' );
    rect ( 200, 290, 100, 20 );
    //neck
    noStroke ();
    fill ( 'rgb(245, 222, 179)' );
    rect ( 210, 310, 80, 20 );

    //facial hair
    //saddle brown
    noStroke ();
    fill ( 'rgb(139, 69, 19)' );
    rect ( 240, 230, 20, 10 );
    //left side of mustache
    noStroke ();
    fill ( 'rgb(139, 69, 19)' );
    rect ( 230, 240, 10, 10 );
    //outer left side of mustache
    noStroke ();
    fill ( 'rgb(139, 69, 19)' );
    rect ( 220, 250, 10, 10 );
    //right side of mustache
    noStroke ();
    fill ( 'rgb(139, 69, 19)' );
    rect ( 260, 240, 10, 10 );
    //outer right side of mustache
    noStroke ();
    fill ( 'rgb(139, 69, 19)' );
    rect ( 270, 250, 10, 10 );
    //chin hair
    noStroke ();
    fill ( 'rgb(139, 69, 19)' );
    rect ( 240, 280, 20, 10 );
    //lower chin hair
    noStroke ();
    fill ( 'rgb(139, 69, 19)' );
    rect ( 230, 290, 40, 10 );
    //left chin hair
    noStroke ();
    fill ( 'rgb(139, 69, 19)' );
    rect ( 220, 280, 10, 10 );
    //right chin hair
    noStroke ();
    fill ( 'rgb(139, 69, 19)' );
    rect ( 270, 280, 10, 10 );


    //left eyebrow
    //saddle brown
    noStroke ();
    fill ( 'rgb(139, 69, 19)' );
    rect ( 190, 110, 50, 10 );
    //right eyebrow
    noStroke ();
    fill ( 'rgb(139, 69, 19)' );
    rect ( 260, 120, 50, 10 );

    //left eye
    //white
    noStroke ();
    fill ( 255 );
    rect ( 200, 130, 30, 20 );
    //left iris
    //medium sea green
    noStroke ();
    fill ( 'rgb(60, 179, 113)' );
    rect ( 210, 140, 10, 10 );
    //right eye
    //white
    noStroke ();
    fill ( 255 );
    rect ( 270, 130, 30, 20 );
    //right iris
    //medium sea green
    noStroke ();
    fill ( 'rgb(60, 179, 113)' );
    rect ( 280, 140, 10, 10 );
    
    //left nostril
    //tan
    noStroke ();
    fill ( 'rgb(210, 180, 140)' );
    rect ( 230, 210, 10, 10 );
    //bottom nose
    noStroke ();
    fill ( 'rgb(210, 180, 140)' );
    rect ( 240, 220, 20, 10 );
    //right nostril
    noStroke ();
    fill ( 'rgb(210, 180, 140)' );
    rect ( 260, 210, 10, 10 );
    //bridge
    noStroke ();
    fill ( 'rgb(210, 180, 140)' );
    rect ( 240, 170, 10, 40 );

    //lips
    //light salmon
    noStroke ();
    fill ( 'rgb(255, 160, 122)' );
    rect ( 240, 250, 20, 10 );

    //top of hair
    //saddle brown
    noStroke ();
    fill ( 'rgb(139, 69, 19)' );
    rect ( 200, 0, 100, 40 );
    //left side of hair
    noStroke ();
    fill ( 'rgb(139, 69, 19)' );
    rect ( 160, 10, 40, 40 );
    //middle outer left side of hair
    noStroke ();
    fill ( 'rgb(139, 69, 19)' );
    rect ( 130, 20, 40, 200 );
    //outer left side of hair
    noStroke ();
    fill ( 'rgb(139, 69, 19)' );
    rect ( 110, 30, 20, 180 );
    //right side of hair
    noStroke ();
    fill ( 'rgb(139, 69, 19)' );
    rect ( 300, 10, 40, 40 );
    //middle outer right side of hair
    noStroke ();
    fill ( 'rgb(139, 69, 19)' );
    rect ( 330, 20, 40, 200 );
    //outer right side of hair
    noStroke ();
    fill ( 'rgb(139, 69, 19)' );
    rect ( 370, 30, 20, 180 );

}
