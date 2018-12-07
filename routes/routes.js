var express = require('express');
var router = express.Router();
// Import libraries
var Web3            = require('web3'),
    contract        = require("truffle-contract"),
    path            = require('path')
MyContractJSON  = require('../public/javascripts/build/contracts/Election.json');


/* GET home page. */
router.post('/authenticate-controller', function(req, res, next) {
// // Setup RPC connection
//     var provider    = new Web3.providers.HttpProvider("http://localhost:8545");
//
//
// // Read JSON and attach it to ganache-cli (Provider)
//     var MyContract = contract(MyContractJSON);
//     MyContract.setProvider(provider);
//
// // Use Truffle as usual
//     MyContract.deployed().then(function(instance) {
//         return instance.myFunction.call(arg1, arg2, {from: '0x************************'})
//
//     }).then(function(result) {
//         console.log(result);
//
//     }, function(error) {
//         console.log(error);
//     });

  res.render('votingPage');
});

router.get('/admin', function(req, res, next) {
    res.render('adminPage');
});

module.exports = router;
