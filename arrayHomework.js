<!DOCTYPE html>
<html>
	<!-- 
		Students will use this template as a starting point for their programming project. 
		It can also be used as a starting point for any JavaScript project.
	-->
<head>

	  
	<script>
		//This is the basic format for a function.
		function myFunction()
		{
			//put your code in here.
			var myStringText = window.prompt("Please enter some text.","Put text here.");
			ShowOnScreen(myStringText);
		}

		function doArray()
		{
			var myText = "";
			var wordArray = new Array();
      
      //users will be instructed to enter english word
			var myStringText = window.prompt("Please enter some text.", "Put text here.");
			
			try{
			
				wordArray[0] = "Now";
				wordArray[1] = "is";
				wordArray[2] = "the";
				wordArray[3] = "time";
				
				for(i=0;i<wordArray.length;i++)
				{
					myText = myText + wordArray[i] + " ";
				}
				
				ShowOnScreen(myText);
			}
			catch(err)
			{
				alert(err);
			}
			
		}
		
		/*
			The following is a function provided by the instructor that will display your 
			results on the screen
		*/
		function ShowOnScreen(myText)
		{
			document.getElementById("DisplayResultsArea").innerHTML=myText;
		}

	</script>
</head>

<body>
	<!-- This code sets the "style" of every button in the body of this HTML documment.
		In this case, we just set the width.
		-->
	<style type="text/css">  
		button {width:200px}  
	  </style>  

	<!--
		This code creates a button that you can use to execute your JavaScript code.   
		You can copy and paste it to create as many buttons as you like.
		Just change the button text from "Do It" to something that describes your program.
		Then, change the function call to whatever function you with to call.
	-->
	<button onclick="myFunction()">Do It</button></br>
	<button onclick="doArray()">Array</button></br>
	<!--
		This code creates a display area for results. It is popoulated by the function "ShowOnScreen", above.
	-->

	<p id="DisplayResultsArea"  style="font-family:courier;color:blue;margin-left:20px;"></p>
</body>
</html>
