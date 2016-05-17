

validateIPfromRange('127.0.0.1', '127.0.0.1', '127.0.0.255');


function validateIPfromRange(ip, startRange, endRange) {

    var ipAdressV4 = new SncIPAddressV4(ip);
    var startIP = new SncIPAddressV4(startRange);
    var endIP = new SncIPAddressV4(endRange);
    var range = new SncIPRangeV4(startIP, endIP);
    if (range.contains(ipAdressV4)){
        return gs.log('yes access allowed.')
}
    else{
        return gs.log('no, no access')
}  
    
}
