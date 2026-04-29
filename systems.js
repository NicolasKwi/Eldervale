let wave = 1;
let waveTimer = 0;
let score = 0;
function updateSystems(dt) {
  waveTimer += dt;
  if (ECS.query('enemy').length === 0 && waveTimer > C.WAVE_TIME) {
    wave++;
    spawnWave(wave);
    waveTimer = 0;
  }
}
function spawnWave(n) {
  for (let i = 0; i < n * 2; i++) {
    ECS.add('mob' + i, {
      pos: {x: 100 + Math.random()*400, y: 100 + Math.random()*400},
      update: function(dt) {
        this.pos.x += (Math.random() - 0.5) * 2;
        this.pos.y += (Math.random() - 0.5) * 2;
      },
      render: 'goblin'
    });
  }
}
