const hashrate = require('../index');

describe('Hashrate', () => {

    it('hashrateToString', ()=> {
        expect(hashrate.hashrateToString(1000000000000000)).toEqual('1.00 PH');
        expect(hashrate.hashrateToString(1000000000000)).toEqual('1.00 TH');
        expect(hashrate.hashrateToString(1000000000)).toEqual('1.00 GH');
        expect(hashrate.hashrateToString(1000000)).toEqual('1.00 MH');
        expect(hashrate.hashrateToString(1200)).toEqual('1.20 KH');
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

    it('getMaxPower', ()=> {
        expect(hashrate.getMaxPower([0, 10, 100])).toEqual(0);
        expect(hashrate.getMaxPower([1000, 2000, 10000000])).toEqual(2);
    })

    it('getPowerStr', ()=> {
        expect(hashrate.getPowerStr(0)).toEqual('H');
        expect(hashrate.getPowerStr(2)).toEqual('MH');
    })

    it('hashrateValueToPower', ()=> {
        expect(hashrate.hashrateValueToPower(1, 0)).toEqual(1);
        expect(hashrate.hashrateValueToPower(2000, 1)).toEqual(2);
    })

    it('hashratePowerStr', ()=> {
        expect(hashrate.hashratePowerStr(1, 0)).toEqual('1.00 H');
        expect(hashrate.hashratePowerStr(2000, 1)).toEqual('2.00 KH');
    })
});