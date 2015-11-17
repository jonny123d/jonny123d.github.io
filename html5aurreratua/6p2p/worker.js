 var num = 2227644437; 
 //var num = 37; 
var erloju ;
function isLehena(n) {
	var i = 2;
	var count=0;
	var aldiro= Math.floor(num/20);//Zenbaki itzela eta lehena bada ere, ez du 20 mezu baino gehiago erakutsiko console.log-en
	if (n == 2) 
	{
		postMessage(num+" Zenbaki lehena da");
		return true;
	}
	for (; i < n; ++i) {
		if (n % i == 0) {
		     	postMessage(i);
			return false;
		}
		count++;
		if (count % aldiro == 0)//ez kargatu gehiegi bestela worker-a bera blokeatuko jaku// 
		{
			console.log("Kalkulatzen:" + i);
		}
	}
 	clearInterval(erloju);	
	postMessage(num+" Zenbaki lehena da");
	return true;
}

isLehena(num);
