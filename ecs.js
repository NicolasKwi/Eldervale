const ECS = {
  entities: [],
  add(id, components) {
    const entity = { id, components };
    this.entities.push(entity);
    return entity;
  },
  query(comp) {
    return this.entities.filter(e => e.components[comp]);
  },
  update(dt) {
    this.entities.forEach(e => {
      if (e.components.update) e.components.update(dt);
    });
  }
};
