function isAlphabet( x)
{
	return ( (x >= 'A' && x <= 'Z') ||
			(x >= 'a' && x <= 'z') );
}
function swap(str,a,b)
{
	var c="";
	for(var i=0;i<str.length;i++)
	{
		if(i==a)
		c= c+ str[b];
		else
			if(i==b)
				c=c+str[a];
			else
			c=c+str[i];
			
	}
	return c;
}
	

function reverse( str)
{
	var r = str.length - 1, l = 0;

	while (l < r)
	{
		if (!isAlphabet(str[l]))
			l++;
		else if(!isAlphabet(str[r]))
			r--;

		else 
		{
			str=swap(str,l, r);
			l++;
			r--;
		}
	}
	console.log("Output string: "+ str +"<br>");
}


	var str= "a!b.c.d,e'f,gh";
	console.log( "Input string: " + str +"");
	reverse(str);
