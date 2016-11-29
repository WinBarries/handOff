<!DOCTYPE html>
<html>
<!--
    Students will use this template as a starting point for their programming project.
    It can also be used as a starting point for any JavaScript project.
-->
<head>

    <script>
       
        function convert() {
            var myText = "";
            var wordArray = new Array();


            try {
                //users will be instructed to enter english word
                var myStringText = window.prompt("Please enter some text.", "Put text here.");

                //breakup text into an array of letters.
                var letterArray = myStringText.split("");

                for (i = 0; i < letterArray.length; i++) {
                    myText = myText + GetAsciiCode(letterArray[i]) + ",";
                }

                ShowOnScreen(myText);
            }
            catch (err) {
                alert(err);
            }

        }

        function GetAsciiCode(letter) {
            //Using switch case for each ascii letter.

            var asciiCode;

            switch (letter) {
                case "a":
                    asciiCode = "97";
                    break;
                case "b":
                    asciiCode = "98";
                    break;
                case "c":
                    asciiCode = "99";
                    break;
                case "d":
                    asciiCode = "100";
                    break;
                case "e":
                    asciiCode = "101";
                    break;
                case "f":
                    asciiCode = "102";
                    break;
                case "g":
                    asciiCode = "103";
                    break;
                case "h":
                    asciiCode = "104";
                    break;
                case "i":
                    asciiCode = "105";
                    break;
                case "j":
                    asciiCode = "106";
                    break;
                case "k":
                    asciiCode = "107";
                    break;
                case "l":
                    asciiCode = "108";
                    break;
                case "m":
                    asciiCode = "109";
                    break;
                case "n":
                    asciiCode = "110";
                    break;
                case "o":
                    asciiCode = "111";
                    break;
                case "p":
                    asciiCode = "112";
                    break;
                case "q":
                    asciiCode = "113";
                    break;
                case "r":
                    asciiCode = "114";
                    break;
                case "s":
                    asciiCode = "115";
                    break;
                case "t":
                    asciiCode = "116";
                    break;
                case "u":
                    asciiCode = "117";
                    break;
                case "v":
                    asciiCode = "118";
                    break;
                case "w":
                    asciiCode = "119";
                    break;
                case "x":
                    asciiCode = "120";
                    break;
                case "y":
                    asciiCode = "121";
                    break;
                case "z":
                    asciiCode = "122";
                    break;
                default:
                    asciiCode = "0";
                    break;
            }

            return asciiCode;
        }
        /*
			The following is a function provided by the instructor that will display your
			results on the screen
		*/
        function ShowOnScreen(myText) {
            document.getElementById("DisplayResultsArea").innerHTML = myText;
        }

    </script>
</head>
<body>
    <!-- This code sets the "style" of every button in the body of this HTML documment.
        In this case, we just set the width.
        -->
    <style type="text/css">
        button {
            width: 200px;
        }
    </style>
    <!--
        This code creates a button that you can use to execute your JavaScript code.
        You can copy and paste it to create as many buttons as you like.
        Just change the button text from "Do It" to something that describes your program.
        Then, change the function call to whatever function you with to call.
    
    <button onclick="myFunction()">Do It</button></br> -->
    <button onclick="convert()">Convert Text to ASCII values</button></br>
    <!--
        This code creates a display area for results. It is popoulated by the function "ShowOnScreen", above.
    -->
    <p id="DisplayResultsArea" style="font-family:courier;color:blue;margin-left:20px;"></p>
</body>
</html>
