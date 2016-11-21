
if (confirm('Do you want to collect RFC data?')) {
    main();
} else {
    // Do nothing!
}

function main() {
	
	//Ready Queue
	var criticalTicketR = document.getElementById('queue_1').getElementsByClassName('ec');
	var warnTicketR = document.getElementById('queue_1').getElementsByClassName('ew');
	var warningTicketR = document.getElementById('queue_1').getElementsByClassName('eok');

	//Work Queue
	var criticalTicket = document.getElementById('queue_2').getElementsByClassName('ec');
	var warnTicket = document.getElementById('queue_2').getElementsByClassName('ew');
	var warningTicket = document.getElementById('queue_2').getElementsByClassName('eok');

	var Ticket;
	var Ticket = [];
	for(var i = 0; i < criticalTicket.length; i++) {Ticket.push(criticalTicket[i]);}
	for(var i = 0; i < warnTicket.length; i++) {Ticket.push(warnTicket[i]);}
	for(var i = 0; i < warningTicket.length; i++) {Ticket.push(warningTicket[i]);}	
	for(var i = 0; i < criticalTicketR.length; i++) {Ticket.push(criticalTicketR[i]);}
	for(var i = 0; i < warnTicketR.length; i++) {Ticket.push(warnTicketR[i]);}
	for(var i = 0; i < warningTicketR.length; i++) {Ticket.push(warningTicketR[i]);}

	var eachTicket = [];
	for(var i = 0; i<Ticket.length; i++) { eachTicket.push(Ticket[i]); }

	var formattedRows = [];
	//var forEachTicket = []
	for(var i=0; i<eachTicket.length; i++) {
		var Ticket = [];
		 Ticket.push(getClient(eachTicket[i]));
		Ticket.push(getTicketNo(eachTicket[i]));
		Ticket.push(getTicketCreated(eachTicket[i]));
		Ticket.push(getLastUpdate(eachTicket[i]));
		Ticket.push(doneOnTicket(eachTicket[i]));
		Ticket.push(beDone(eachTicket[i]));
		Ticket.push(owner(eachTicket[i]));
		formattedRows.push(Ticket);
		//forEachTicket = [];
	}

	//Download the file.
	download_csv(formattedRows);


function download_csv(data) {
	var csv = 'Client,Ticket Number,Ticket Created Date,Last updated Date By Engineer,Has been done,To Be done, Engineer\n';
	data.forEach(function(forEachTicket) {

		csv += forEachTicket.join(",");
		csv += "\n";
	});

	console.log(csv);
	var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-7,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'handoff.csv'
    hiddenElement.click();
}

function getClient(forEachTicket) {
	return forEachTicket.getElementsByClassName('radar_left')[0].getElementsByTagName('a')[1].innerHTML.toString();
	//return Ticket.getElementsByTagName('a')[1].innerHTML.toString();
}

function getTicketNo(forEachTicket) {
	return forEachTicket.getElementsByTagName('a')[5].innerHTML.toString().match(/\d+/)[0];
}

function getTicketCreated(forEachTicket) {
	return forEachTicket.getElementsByTagName('nobr')[1].innerHTML.toString().slice(0,-9) + "/2016";
}

function getLastUpdate(forEachTicket) {
	return forEachTicket.getElementsByTagName('nobr')[2].innerHTML.toString().slice(0,-9) + "/2016";
}	

function doneOnTicket(forEachTicket) {
	return "Follow Up";
}

function beDone(forEachTicket) {
	return "Follow up";
}

function owner(forEachTicket) {
	return forEachTicket.getElementsByTagName('td')[8].innerHTML.trim();
}	

}
