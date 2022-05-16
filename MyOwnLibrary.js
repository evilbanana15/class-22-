function bounceOff(object1,object2)
{
  if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
  object2.x-object1.x <object2.width/2 + object1.width/2)
  {
    object1.velocityX = object1.velocityX *(-1);
   object2.velocityX = object2.velocityX *(-1);
  }
   
 if (object2.y- object1.y<object2.height/2 + object1.height/2&&
  object1.y-object2.y<object2.height/2 + object1.height/2)
  {
    object1.velocityY = object1.velocityY *(-1);
    object2.velocityY = object2.velocityY *(-1);
  }
   
}

function isTouching(gameObject1, gameObject2)
{
  if(gameObject1.x - gameObject2.x < gameObject2.width/2 + gameObject1.width/2 &&
    gameObject2.x - gameObject1.x < gameObject2.width/2 + gameObject1.width/2 &&
    gameObject1.y - gameObject2.y < gameObject2.height/2 + gameObject1.height/2&&
    gameObject2.y - gameObject1.y < gameObject2.height/2 + gameObject1.height/2)
  {
    return true;
  }
  else
  {
    return false;

  }
}