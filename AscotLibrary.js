//Function 1: Get the ID of an element and aply changes with switch.

/*IMPORTANT: When calling the function, should use (this.id). 
Example: 
<p onclick(thid.id)> Example </p>
*/

function idGet(ElementID)
{
	switch (ElementID)
	{
		case "test1": //change that line to the id you'll compare to
		console.log("Test 1"); //change that line to your code
		break;
		
		case "test2": //
		console.log("Test 2"); //
		break;
		
		case "test3": //
		console.log("Test 3");//
		break;
		
		/*....*/
	}
}

//Function 2: Check if a number is even or odd.

function evenOrOdd ()
{
	var number = document.getElementById("input").value;
	if ((number % 2) == 0)
	{
		console.log("It's even");
	}
	else 
	{
		console.log("It's odd");
	}
}
