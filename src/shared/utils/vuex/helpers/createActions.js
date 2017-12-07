import actionsFactory from './actionsFactory';

export default (types, mutations, apis, methods) => methods.reduce((actions, method) => {
  actions[types[method]] = actionsFactory[method](apis[method], mutations); // eslint-disable-line

  return actions;
}, {});
