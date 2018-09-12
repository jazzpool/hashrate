const hashrate = require('../index');

describe('Hashrate', () => {


    it('hashrateToNumber', () => {
        expect(hashrate.hashrateToNumber('1.00PH')).toEqual(1000000000000000);
        expect(hashrate.hashrateToNumber('1.00TH')).toEqual(1000000000000);
        expect(hashrate.hashrateToNumber('1.00GH')).toEqual(1000000000);
        expect(hashrate.hashrateToNumber('1.00MH')).toEqual(1000000);
        expect(hashrate.hashrateToNumber('1.20KH')).toEqual(1200);
        expect(hashrate.hashrateToNumber('1Psol')).toEqual(1000000000000000);
        expect(hashrate.hashrateToNumber('1Tsol')).toEqual(1000000000000);
        expect(hashrate.hashrateToNumber('1Gsol')).toEqual(1000000000);
        expect(hashrate.hashrateToNumber('1Msol')).toEqual(1000000);
        expect(hashrate.hashrateToNumber('1,2Ksol')).toEqual(1200);
    });

    it('hashrateToString', () => {
        expect(hashrate.hashrateToString(1000000000000000)).toEqual('1.00PH');
        expect(hashrate.hashrateToString(1000000000000)).toEqual('1.00TH');
        expect(hashrate.hashrateToString(1000000000)).toEqual('1.00GH');
        expect(hashrate.hashrateToString(1000000)).toEqual('1.00MH');
        expect(hashrate.hashrateToString(1200)).toEqual('1.20KH');
    });

    it('hashrateToString with delimiter', () => {
        expect(hashrate.hashrateToString(1000000, true)).toEqual('1.00 MH');
        expect(hashrate.hashrateToString(1200, true)).toEqual('1.20 KH');
    });

    it('hashrateToString with solutions', () => {
        expect(hashrate.hashrateToString(1000000, true, 'sol')).toEqual('1.00 MSol');
        expect(hashrate.hashrateToString(1200, true, 'sol')).toEqual('1.20 KSol');
    });

    it('getEstimatedMinigTime', () => {
        expect(hashrate.getEstimatedMinigTime(9683851, 1000000000000)).toEqual(41591.823344336895);
    });

    it('getLuck', () => {
        expect(hashrate.getLuck(9683851, 1000000000000, 86400, 1)).toEqual(0.48138684426315853);
    });

    it('getPower', () => {
        expect(hashrate.getPower(0)).toEqual(0);
        expect(hashrate.getPower(1000)).toEqual(1);
        expect(hashrate.getPower(10000000)).toEqual(2);
        expect(hashrate.getPower(10000000000)).toEqual(3);
    });

    it('getMaxPower', () => {
        expect(hashrate.getMaxPower([0, 10, 100])).toEqual(0);
        expect(hashrate.getMaxPower([1000, 2000, 10000000])).toEqual(2);
    });

    it('getPowerStr', () => {
        expect(hashrate.getPowerStr(0)).toEqual('H');
        expect(hashrate.getPowerStr(2)).toEqual('MH');
    });

    it('hashrateValueToPower', () => {
        expect(hashrate.hashrateValueToPower(1, 0)).toEqual(1);
        expect(hashrate.hashrateValueToPower(2000, 1)).toEqual(2);
    });

    it('hashratePowerStr', () => {
        expect(hashrate.hashratePowerStr(1, 0)).toEqual('1.00H');
        expect(hashrate.hashratePowerStr(2000, 1, true)).toEqual('2.00 KH');
    });

    it('hashesToSolsZec', () => {
        expect(hashrate.hashesToSolsZec(1000000)).toEqual(2);
        expect(hashrate.hashesToSolsZec(5000000)).toEqual(10);
    });

    it('hashrateToStringZec', () => {
        expect(hashrate.hashrateToStringZec(1000000)).toEqual('2.00Sol');
        expect(hashrate.hashrateToStringZec(5000000)).toEqual('10.00Sol');

        expect(hashrate.hashrateToStringZec(1000000, ' ')).toEqual('2.00 Sol');
        expect(hashrate.hashrateToStringZec(5000000, ' ')).toEqual('10.00 Sol');
    });

    // hashesToSolsZec
});