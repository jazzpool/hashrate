const hashrate = require('../index');

describe('Hashrate', () => {

    it('hashrateToString', ()=> {
        expect(hashrate.hashrateToString(1000000000000000)).toEqual('1.00PH');
        expect(hashrate.hashrateToString(1000000000000)).toEqual('1.00TH');
        expect(hashrate.hashrateToString(1000000000)).toEqual('1.00GH');
        expect(hashrate.hashrateToString(1000000)).toEqual('1.00MH');
        expect(hashrate.hashrateToString(1200)).toEqual('1.20KH');
    });

    it('getEstimatedMinigTime', ()=> {
        expect(hashrate.getEstimatedMinigTime(9683851, 1000000000000)).toEqual(41591.823344336895);
    });

    it('getLuck', ()=> {
        expect(hashrate.getLuck(9683851, 1000000000000, 86400, 1)).toEqual(0.48138684426315853);
    })

    it('getPower', ()=> {
        expect(hashrate.getPower(0)).toEqual(0);
        expect(hashrate.getPower(1000)).toEqual(1);
        expect(hashrate.getPower(10000000)).toEqual(2);
        expect(hashrate.getPower(10000000000)).toEqual(3);
    })
});