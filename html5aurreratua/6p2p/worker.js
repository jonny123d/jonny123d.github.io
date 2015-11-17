
self.onmessage = function(event){
	n = event.data;
	console.log("Sartu da n: " + n);
	
    var i = 2;
	if (n == 2) return true;
	for (; i < n; ++i) {
		if (n % i == 0) {
			postMessage(i);
			//document.getElementById("irteera").innerHTML += i;
		       	return false;
		}
		 //console.log("Kalkulatzen:" + i);
	}
 	//clearInterval(erloju);	
	//document.getElementById("irteera").innerHTML += i;
	postMessage(i);
	return true;
};
