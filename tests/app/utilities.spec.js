'use strict';

var expect = require('chai').expect;
var utilities = require('../../app/utilities');

/**
 * uniqueArray Test Spec
 */

describe('Unique Array Utility Test Suite', function () {
    describe('Positive cases', function () {
        describe('The uniqueArray function', function () {
            it('given correct values should return an array object ', function(done){
                expect(utilities.uniqueArray([ 0, 1, 1, 13, 2, 3, 13, 5, 5, 5, 8, 13, 21, 34 ])).to.be.instanceof(Array);
                done();
            });
            it('given correct values in integer format should return an array with no duplicates sorted in ascending order ', function(done){
                expect(utilities.uniqueArray([ 0, 1, 1, 13, 2, 3, 13, 5, 5, 5, 8, 13, 21, 34])).to.deep.equal([0, 1, 2, 3, 5, 8, 13, 21, 34]);
                done();
            });
            it('given correct values also containing non integers should return an array with no duplicates sorted in ascending order and non integer values ignored', function(done){
                expect(utilities.uniqueArray([ 0, 1, {objectTest: '00'}, 1, '13', 2, '3', '13', 5, 5, '5', true, '8', '13', false, '21', '34']))
                    .to.deep.equal([0, 1, 2, 5]);
                done();
            });
        });
        describe('Negative cases', function () {
            describe('The uniqueArray function', function () {
                it('given values in string format should return an empty array', function(done){
                    expect(utilities.uniqueArray([ '0', '1', '1', '13', '2', '3'])).to.deep.equal([]);
                    expect(utilities.uniqueArray([ '0', '1', '1', '13', '2', '3'])).to.be.empty;
                    done();
                });
                it('given values in boolean format should return an empty array', function(done){
                    expect(utilities.uniqueArray([ true, false, true, false ])).to.deep.equal([]);
                    expect(utilities.uniqueArray([ true, false, true, false ])).to.be.empty;
                    done();
                });
                it('given values in object format should return an empty array', function(done){
                    expect(utilities.uniqueArray([ {objectTest: '00'}, {objectTest: 0}, {objectTest: true} ])).to.deep.equal([]);
                    expect(utilities.uniqueArray([ {objectTest: '00'}, {objectTest: 0}, {objectTest: true} ])).to.be.empty;
                    done();
                });
            });
        });
    })
});