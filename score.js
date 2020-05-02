let needLevel = true;

function mickeyMouse(){
  floor.w -= 10;
  floor.speed += 1;
  needLevel = false;
}

function mickeyMouse2(){
  floor.w -= 20;
  floor.speed += 2;
  needLevel = false;
}

function mickeyMouse3(){
  floor.w -= 30;
  floor.speed += 3;
  needLevel = false;
}

function levelUp(){
  if(score == 3 && needLevel == true){
  mickeyMouse3();
} else if (score == 4){
  needLevel = true;
  // *******************************
} else if (score == 6 && needLevel == true){
  mickeyMouse2();
} else if (score == 7){
  needLevel = true;
  // ********************************
} else if (score == 9 && needLevel == true){
  mickeyMouse2();
} else if (score == 10){
  needLevel = true;
  // *********************************
} else if (score == 12 && needLevel == true){
  mickeyMouse2();
} else if (score == 13){
  needLevel = true;
  // ********************************
} else if (score == 15 && needLevel == true){
  mickeyMouse();
} else if (score == 16){
  needLevel = true;
  // *********************************
} else if (score == 18 && needLevel == true){
  mickeyMouse();
} else if (score == 19){
  needLevel = true;
  // ********************************
} else if (score == 21 && needLevel == true){
  mickeyMouse();
} else if (score == 22){
  needLevel = true;
  // *********************************
} else if (score == 24 && needLevel == true){
  mickeyMouse();
} else if (score == 25){
  needLevel = true;
  // ********************************
} else if (score == 27 && needLevel == true){
  mickeyMouse();
} else if (score == 28){
  needLevel = true;
  // *********************************
} else if (score == 30 && needLevel == true){
  mickeyMouse();
} else if (score == 31){
  needLevel = true;
  // ********************************
} else if (score == 33 && needLevel == true){
  mickeyMouse();
} else if (score == 34){
  needLevel = true;
  // *********************************
} else if (score == 36 && needLevel == true){
  mickeyMouse();
} else if (score == 37){
  needLevel = true;
  // ********************************
} else if (score == 39 && needLevel == true){
  mickeyMouse();
} else if (score == 40){
  needLevel = true;
  // *********************************
} else if (score == 42 && needLevel == true){
  mickeyMouse();
} else if (score == 43){
  needLevel = true;
  // ********************************
} else if (score == 45 && needLevel == true){
  winnerCondition();
}
}
