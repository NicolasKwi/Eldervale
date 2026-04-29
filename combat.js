function combatUpdate() {
  const enemies = ECS.query('enemy');
  enemies.forEach(e => {
    if (Math.random() < 0.01) {
      e.components.hp = 0;
      score += 10;
    }
  });
}
