var input= ['SncIPRangeV4', 'GlideIPAddressUtil','SncIPAddressV4','SncIPAuthenticator'];
gs.print(input.length)
for (i = 0; i < input.length; i++) { 
   getFunction(input[i])
}


function getFunction(x){
gs.print('script ' + x)
var getMethods =GlideEvaluator.evaluateString(x);
gs.print("Object: " + getMethods); 
// returns the object 
for ( var objectName in getMethods) {       
  gs.print(objectName); // returns available methods
  }
}