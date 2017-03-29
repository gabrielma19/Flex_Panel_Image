/**
 * Run callback after window loads.
 * @param {function} callback
 */
function initialize(callback) {
  window.addEventListener('load', callback);
}