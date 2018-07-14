;(function(root, factory){

    if( typeof module !== 'undefined' && module.exports){
        module.exports = factory();
    }else{
        root.hashrate = factory();
    }

})(this, function () {

    /*
        @ hashrate <String> or <Number>
        count of shares
    */
    function hashrateToString(hashrate) {
        let i = -1;
        const byteUnits = ['KH', 'MH', 'GH', 'TH', 'PH'];

            do {
                hashrate = hashrate / 1000;
                i++;
            } while (hashrate >= 1000);

        return hashrate.toFixed(2) + byteUnits[i];
    };

    /**
     * @ difficulty <Number>
     * @ hashrate <Number>
     * return time of block create <ms>
    */
    function getEstimatedMinigTime(difficulty, hashrate) {
        return difficulty * 2 ** 32 / hashrate;
    }

    /*
    @ diff <Number> 
    @ hashrate <Number>
    */
    function getLuck(diff, hashrate, period, blocks) {
        return getEstimatedMinigTime(diff * (blocks || 1), hashrate) / period || 0;
    };

    function getPower(hashrate) {
        let i = 0;
        while(hashrate >= 1000) {
            hashrate = hashrate / 1000;
            i++;
        }
        return i;
    };
    

    return {
        hashrateToString: hashrateToString,
        getEstimatedMinigTime: getEstimatedMinigTime,
        getLuck: getLuck,
        getPower: getPower,
    };
})