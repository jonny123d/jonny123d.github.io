
onmessage = function(e) {
	n=e.data;

	var i = 2;
	if (n == 2) 
	{
		postMessage([true, n]);
		close();
	}
	for (; i < n; ++i) {
		if (n % i == 0) {	
			postMessage([false, n]);
			close();
		}
	}

	postMessage([true, n]);
};
