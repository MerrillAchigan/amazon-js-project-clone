import {formatCurrency} from '../../js/utils/money.js';

describe('test suite : formatCurrency', () => {
    it('converts cents into dollars', () =>{
        expect(formatCurrency(2075)).toEqual('20.75');
    });

    it('works eith 0', () =>{
        expect(formatCurrency(0)).toEqual('0.00');
    });
    it('round up to the nearest up', () =>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
})