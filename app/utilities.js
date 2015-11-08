'use strict';

/**
 * A simple function to remove duplicated values from an array
 * @param array
 * @returns {Array.<T>|*}
 */
var uniqueArray = function(array) {
    var uniqueArray = {}; //Start with an empty object, as we iterate over the array, the unique properties will be added
    return array
        .sort(function(itemA, itemB) {
            return itemA-itemB;
        })
        .filter(function(item) {
            var value = false;
            if(uniqueArray.hasOwnProperty(item) || typeof item != 'number'){
                value = false;
            }else{
                uniqueArray[item] = true;
                value = true;
            }
        return value;
    });
};

exports.uniqueArray = uniqueArray; //Export the uniqueArray function