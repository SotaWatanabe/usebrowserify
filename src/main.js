module.exports = function CheckTx() {
    var obj = document.document.getElementById('id_textBox1');
    console.log(obj)
    //console.log('ok')
    var api = require('etherscan-api').init('BFVFPXF9FKURZ4955WRM8ADNASU9Z82EDN');
    // console.log('ok2')
    // var res = api.proxy.eth_getTransactionByHash('**')
    // console.log('ok3')
    // res.then( (x) => console.log(x) )
    // console.log('ok4')
}