import transform from 'lodash/transform';
import isObject from 'lodash/isObject';
import isEqual from 'lodash/isEqual';
/**
 * Deep diff between two object, using lodash
 * @param  {Object} object Object compared
 * @param  {Object} base   Object to compare with
 * @return {Object}        Return a new object who represent the diff
 */
const changes = (object, base) => transform(object, (result, value, key) => {
  if (!isEqual(value, base[key])) {
    result[key] = (isObject(value) && isObject(base[key])) ? changes(value, base[key]) : value; // eslint-disable-line
  }
});

export default (object, base) => changes(object, base);
