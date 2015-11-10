var i = 2;
if (n == 1 || n == 2)
{
	postMessage(true);
	terminate();
}
for (; i < n; ++i)
{
	if (n % 100 == 0)
		postMessage(n);
	if (n % i == 0)
	{
		postMessage(false);
		terminate();
	}
}
postMessage(true);
terminate();
