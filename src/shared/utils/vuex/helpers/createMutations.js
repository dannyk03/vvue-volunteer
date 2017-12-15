import mutationsFactory from './mutationsFactory';

export default types => Object.keys(types).reduce((mutations, method) => {
  if (!mutationsFactory[method]) throw new Error(`Method ${method} is not defined in available mutations`);

  mutations[types[method]] = mutationsFactory[method]; //eslint-disable-line

  return mutations;
}, {});
