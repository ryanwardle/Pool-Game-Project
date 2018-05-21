let sprites = {};
let assetsStillLoading = 0;

function assetsStillLoadingLoop(callback){
  if (assetsStillLoading) {
    requestAnimationFrame(assetsStillLoadingLoop.bind(this,callback));
  }else {
    callback();
  }
}



function loadAssets(callback){

  function loadSprite(filename){
    assetsStillLoading++

    let spriteImage = new Image();
    spriteImage.src = "./assets/sprites/" + filename;

    spriteImage.onload = function(){
      assetsStillLoading--;
    }

    return spriteImage;
  }
  sprites.background = loadSprite('spr_background4.png');
  sprites.stick = loadSprite('spr_stick.png');
  sprites.yellowBall = loadSprite('spr_yellowBall2.png')

  assetsStillLoadingLoop(callback);
}
