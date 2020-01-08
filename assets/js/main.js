function myFunction()
{
	var parameter = location.search.substring(1);
	x = decode(parameter);
	window.location.replace(x);
	return false;
}
