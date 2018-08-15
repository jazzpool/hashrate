# hashrate [![Build Status](https://travis-ci.org/jazzpool/hashrate.svg?branch=master)](https://travis-ci.org/jazzpool/hashrate)

This is simple hashrate utils module for client and server side.

## Methods and usage

 - `hashrateToString(hashrate: number, delimeter: boolean = false, type: 'sol' | 'hash' = 'hash')` - converts hashrate number to readable string 
 - `getEstimatedMinigTime(difficulty: number, hashrate: number)` - returns estimated mining time for given difficulty and hashrate in seconds
 - `getLuck(diff: number, hashrate: number, period: number, blocks: number)` - returns calculated luck for given mining parameters
 - `getPower(hashrate: number)` - returns power of hashrate
 - `getMaxPower(hashrates: number[])` - returns max power of set of hashrates
 - `getPowerStr(power: number)` - returns string for power (1000 - KH, 100000000 - MH, etc)
 - `hashrateValueToPower`
 - `hashratePowerStr`
