	 function Time() {
	 	var date = new Date();
	 	var Hour = date.getHours();
	 	if (Hour < 10) {
	 		Hour = "0" + Hour;
	 	}
	 	if (Hour == 00) {
	 		Hour = 12
	 	}
	 	var Minute = date.getMinutes();
	 	if (Minute < 10) {
	 		Minute = "0" + Minute;
	 	}
	 	var Second = date.getSeconds();
	 	if (Second < 10) {
	 		Second = "0" + Second;
	 	}
	 	var meridian = "AM";
	 	if (Hour > 12 && Minute > 0) {
	 		Hour = Hour - 12;
	 		meridian = "PM";
	 	}
	 	if (Hour === 0 ) {
	 		Hour = 12;
	 	}
	 	var clockDiv = document.getElementById('clock');
	 	clockDiv.innerHTML = (Hour + ":" + Minute + ":" + Second + " " + meridian);
	 	//document.body.innerHTML = (Hour + ":" + Minute + ":" + Second);
	 	
	}
	setInterval (Time, 1000);
