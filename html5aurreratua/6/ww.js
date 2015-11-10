onmessage = function(n)
{
    var i = 2;
	if (n == 1 || n == 2)
	{
		postMessage(true);
	}
	else
	{
		var lehena = true;
		for (; i < n; ++i)
		{
			if (n % 100 == 0)
				postMessage(n);
			if (n % i == 0)
			{
				lehena = false;
				break;
			}
		}
		postMessage(lehena);
	}
};

