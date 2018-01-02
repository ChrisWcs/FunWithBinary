import { valueOfBinary } from './util';

describe('Testing valueOfBinary function', () => {
    it('basic test 1 == 1', () => {
        let num = [1];
        expect(valueOfBinary(num)).toEqual(1);
    });

    it('basic test 0 == 0', () => {
        let num = [0];
        expect(valueOfBinary(num)).toEqual(0);
    });

    it('basic test 01 == 1', () => {
        let num = [0, 1];
        expect(valueOfBinary(num)).toEqual(1);      
    });

    it('basic test 11 == 3', () => {
        let num = [1, 1];
        expect(valueOfBinary(num)).toEqual(3);      
    });

    it('basic test 10 == 2', () => {
        let num = [1, 0];
        expect(valueOfBinary(num)).toEqual(2);      
    });

    it('basic test 1000 == 8', () => {
        let num = [1, 0, 0, 0];
        expect( valueOfBinary(num) ).toEqual(8);      
    });

    it('basic test 1000 0000 == 128', () => {
        let num = [1, 0, 0, 0, 0, 0, 0, 0];
        expect( valueOfBinary(num) ).toEqual(128);      
    });
});