const ctx = document.getElementById('c').getContext('2d');
const sprites = {};
function loadSprites() {
  ['grass','forest','hero','goblin'].forEach(name => {
    sprites[name] = new Image();
    sprites[name].src = 'sprites/' + name + '.png';
  });
}
function render() {
  ctx.clearRect(0, 0, 800, 600);
  ctx.fillStyle = '#222';
  ctx.fillRect(0, 0, 800, 600);
  ctx.fillStyle = '#4a7c59';
  ctx.fillRect(100, 100, 600, 400);
  ctx.drawImage(sprites.hero, 350, 250, 32, 32);
  ctx.fillStyle = '#fff';
  ctx.fillText('Score: ' + score + ' Wave: ' + wave, 10, 20);
}
loadSprites();
setInterval(render, 16);
