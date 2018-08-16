; (function (root, factory) {

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory();
    } else {
        root.hashrate = factory();
    }

})(this, function () {

    var HASHARATES = ['H', 'KH', 'MH', 'GH', 'TH', 'PH'];
    var SOLUTIONS = ['Sol', 'KSol', 'MSol', 'GSol', 'TSol', 'PSol'];
    var MULTIPLIER = {
            'H':1,
            'KH':1000,
            'MH':1000000,
            'GH':1000000000,
            'TH':1000000000000,
            'PH':1000000000000000,
            'SOL':1,
            'KSOL':1000,
            'MSOL':1000000,
            'GSOL':1000000000,
            'TSOL':1000000000000,
            'PSOL':1000000000000000,
            undefined: 1,
    };

    /**
     * conver string hashrate to number
     * @param {String} hashrate
     * @returns Hashrate in number
     */
    function hashrateToNumber(hashrateStr) {
        var reggroup = hashrateStr.match(/^(\d*[\.,]?\d*)\s*([A-Za-z]*H|[A-Za-z]*Sol)/i);
        if(reggroup === null){
            throw new Error('incorrect input data')
        }
        return Number(reggroup[1].replace(/,/, '.')) * MULTIPLIER[reggroup[2].toUpperCase()];
    };

    /**
     * @param {number} hashrate
     * @param {boolean} [delimiter=false]
     * @param {string} type
     * @returns Hashrate in string
     */
    function hashrateToString(hashrate, delimiter, type) {
        return hashratePowerStr(hashrate, getPower(hashrate), delimiter, type);
    };

    /**
     * @param {number} difficulty
     * @param {number} hashrate
     * @returns {number} time of block creation
    */
    function getEstimatedMinigTime(difficulty, hashrate) {
        return difficulty * Math.pow(2, 32) / hashrate;
    }

    /**
     * @param {number} diff
     * @param {number} hashrate
     * @param {number} period
     * @param {number} [blocks=1]
     * @returns {number} luck
     */
    function getLuck(diff, hashrate, period, blocks) {
        return getEstimatedMinigTime(diff * (blocks || 1), hashrate) / period || 0;
    };

    /**
     * Returns power of hashrate value.
     * Ex.:
     * hashrate < 1000 => power = 0
     * hashrate >= 1000 && < 1000000 => power = 1
     * hashrate >= 1000000 && < 1000000000 => power = 2
     * @param {number} hashrate
     * @returns {number} Power value for hashrate
     */
    function getPower(hashrate) {
        var i = 0;
        while (hashrate >= 1000) {
            hashrate = hashrate / 1000;
            i++;
        }
        return i;
    };

    /**
     * @param {number[]} hashrates array of hashrates
     * @returns {number} Max power of hashrates
     */
    function getMaxPower(hashrates) {
        var i = 0;
        for (var j = 0; j < hashrates.length; j++) {
            i = Math.max(i, getPower(hashrates[j]));
        }
        return i;
    };

    /**
     * Returns power in string.
     * Ex.:
     * power === 0 => H
     * power === 1 => KH
     * power === 2 => MH
     * @param {number} power Power value
     * @returns {string} Power in string
     */
    function getPowerStr(power, type) {
        type = type || 'hash';
        return (type === 'hash' ? HASHARATES : SOLUTIONS)[power];
    };

    /**
     * @param {number} hashrate
     * @param {number} power
     * @returns {number} The hashrate given to the power
     */
    function hashrateValueToPower(hashrate, power) {
        return hashrate / Math.pow(1000, power);
    };

    /**
     * @param {number} hashrate
     * @param {number} power
     * @param {boolean} [delimiter=false]
     * @param {string} type
     * @returns {string} Combination of hashrateValueToPower and getPowerStr
     */
    function hashratePowerStr(hashrate, power, delimiter, type) {
        return hashrateValueToPower(hashrate, power).toFixed(2) + (delimiter ? ' ' : '') + getPowerStr(power, type);
    }


    return {
        hashrateToNumber: hashrateToNumber,
        hashrateToString: hashrateToString,
        getEstimatedMinigTime: getEstimatedMinigTime,
        getLuck: getLuck,
        getPower: getPower,
        getMaxPower: getMaxPower,
        getPowerStr: getPowerStr,
        hashrateValueToPower: hashrateValueToPower,
        hashratePowerStr: hashratePowerStr,
    };
})