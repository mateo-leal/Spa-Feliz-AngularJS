'use strict';

/**
 * @ngdoc filter
 * @name spafelizApp.filter:currencyFormat.filter
 * @function
 * @description
 * # currencyFormat.filter
 * Filter in the spafelizApp.
 */
angular.module('spafelizApp')
  .filter('currencyFormat', currencyFormatFilter);

  function currencyFormatFilter() {
    return function (input) {
      return 'COP ' + input.toLocaleString();
    };
  }
