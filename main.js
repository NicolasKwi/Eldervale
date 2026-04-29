let last = Date.now();
function loop() {
  const dt = (Date.now() - last) / 1000;
  last = Date.now();
  ECS.update(dt);
  combatUpdate();
  updateSystems(dt);
  requestAnimationFrame(loop);
}
loop();
