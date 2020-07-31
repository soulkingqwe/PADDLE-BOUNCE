var imgball,ball,imgpaddle,paddle;
function preload() {
  /* preload your images here of the ball and the paddle */
  imgpaddle = loadImage("paddle.png");
  imgball = loadImage("ball.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */

  /* give the ball an initial velocity of 9 in the X direction */
  paddle = createSprite(380,200,10,10);
  paddle.addImage("pad",imgpaddle);
  ball = createSprite(100,200,10,10);
  ball.addImage("b",imgball);
  ball.velocityY = 6;
  ball.velocityX = 4;

}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites();
  /* create Edge Sprites here */
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  paddle.bounceOff(edges);

  if(keyDown("UP_ARROW"))
  {
     /* what should happen when you press the UP Arrow Key */
     paddle.velocityY = -5;  
  }
  
  if(keyDown("DOWN_ARROW")){
  /* should happen when you press the UP Arrow Key */
    paddle.velocityY  = 5;
  }

  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]); 
  ball.bounceOff(paddle,randomVelocity);


  drawSprites();
  
}

function randomVelocity()
{
 ball.velocityX = random(-6,6);
 ball.velocityY = random(-6,6);
  
}

