import actionsFactory from './actionsFactory';

/* eslint-disable no-param-reassign */
export default (types, mutations, apis) => Object.keys(types).reduce((actions, method) => {
  const actionName = types[method];

  if (apis[method]) {
    actions[actionName] = actionsFactory[method](apis[method], mutations);
  } else { // we don't support that type
    actions[actionName] = () => {
      throw new Error(`Action ${method} is not available. Check whether you provided api call`);
    };
  }

  return actions;
}, {});
