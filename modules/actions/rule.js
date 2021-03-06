import * as constants from '../constants';

/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {string} field
 */
export const setField = (config, path, field) => ({
  type: constants.SET_FIELD,
  path: path,
  field: field,
  config: config
});

/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {string} operator
 */
export const setOperator = (config, path, operator) => ({
  type: constants.SET_OPERATOR,
  path: path,
  operator: operator,
  config: config
});

/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {integer} delta
 * @param {*} value
 */
export const setValue = (config, path, delta, value) => ({
  type: constants.SET_VALUE,
  path: path,
  delta: delta,
  value: value,
  config: config
});

/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {string} name
 * @param {*} value
 */
export const setOperatorOption = (config, path, name, value) => ({
  type: constants.SET_OPERATOR_OPTION,
  path: path,
  name: name,
  value: value,
  config: config
});

/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {integer} delta
 * @param {string} name
 * @param {*} value
 */
export const setValueOption = (config, path, delta, name, value) => ({
  type: constants.SET_VALUE_OPTION,
  path: path,
  delta: delta,
  name: name,
  value: value,
  config: config
});
