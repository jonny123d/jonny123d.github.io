onmessage = function(e)
{
    var i = 2;
    var n = e.data;
    if (n == 1 || n == 2)
    {
        postMessage(true);
    }
    else
    {
        var lehena = true;
        for (; i < n; ++i)
        {
            if (i % 1000000 == 0)
                postMessage(i);
            if (n % i == 0)
            {
                lehena = false;
                break;
            }
        }
        postMessage(lehena);
    }
};
