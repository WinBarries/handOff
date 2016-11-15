// ==UserScript==
// @name           Collect Avis RFC Data
// @description    Compiles are off the desired RFC data for page under the url 'https://ipcenter.avisbudget.com/IPcm/*'
// @version        1.0
// @copyright      2016+, Steven Vazquez
// @license        GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @include        https://ipcenter.avisbudget.com/IPcm/*
// ==/UserScript==
/////////////////////////////////////////////////////////////////////


/*
https://ipcenter.avisbudget.com/IPcm/index.htm?name=&rfcId=&ciName=&_statuses=1&client=18&workflow=16&implementationAfter=07%2F31%2F2016+00%3A00&owner=-1&initiator=-1&implementationBefore=08%2F02%2F2016+23%3A00&firstResult=0&pageSize=1000
*/

if (confirm('Do you want to collect RFC data?')) {
    main();
} else {
    // Do nothing!
}

//var formattedRows = [];
function main(){
	var oddRows = document.getElementsByClassName('radar_odd');
	var evenRows = document.getElementsByClassName('radar_even');

	var rows = [];
	// merge rows into one row array
	for(var i = 0; i < oddRows.length; i++){ rows.push(oddRows[i]); }
	for(var i = 0; i < evenRows.length; i++){ rows.push(evenRows[i]); }

	var formattedRows = [];
    var row = [];
	for(var i = 0; i < rows.length; i++){
		var dateStart = row.push(getDateStart(rows[i]));
		var dateEnd = row.push(getDateEnd(rows[i]));
        var chgNum = row.push(getChangeNumber(rows[i]));
        var desc = row.push(getDescription(rows[i]));
        var stat = row.push(getStatus(rows[i]));
		var link = row.push(getLink(rows[i]));
		formattedRows.push(row);
        row = []; // clear row for new data
	}
	//console.log(formattedRows);

    download_csv(formattedRows);
	//download("Avis_Report",formattedRows);
}

function download_csv(data) {
    var csv = 'Date Start,Date End,Change Number,Description,Approval Status,Link\n';
    data.forEach(function(row) {
            csv += row.join(',');
            csv += "\n";
    });
 
    console.log(csv);
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'AvisReport.csv'
    hiddenElement.click();
}

function getLink(row){
	return "https://ipcenter.avisbudget.com" + row.getElementsByTagName('A')[3].attributes['href'].value.toString();
}

function getDateStart(row){
	return row.getElementsByClassName("list-padding radar_left radar_text")[11].innerHTML.toString();
}

function getDateEnd(row){
	return row.getElementsByClassName("list-padding radar_left radar_text")[12].innerHTML.toString();
}

function getStatus(row){
	var status = row.getElementsByClassName("list-padding radar_left radar_text")[6].innerHTML.toString();
    if(status == "[External Approvals]")
        return "PENDING ABCR";
    else if(status == "[IPsoft Approval]")
        return "PENDING IPSOFT";
    else
        return "APPROVED";
    
}

function getDescription(row){
	var temp = row.getElementsByClassName("list-padding radar_left radar_text")[2].getElementsByTagName('a')[0].innerHTML.toString();
	var i = 0;
    
    // traverse string until '-' is found
    while(temp[i] != '-') { i++; }

    i = i + 2; // skip '-' and space
    
    // initialize string with beginning quotes in case description contains commas
    str = '"';
    
    // collect description
    while( i < temp.length ) { 
        str = str + temp[i]; 
        i++;
    }
    
    // close description with quote
    str = str + '"';
    
    return str.toString();
}

function getChangeNumber(row){
	var temp = row.getElementsByClassName("list-padding radar_left radar_text")[2].getElementsByTagName('a')[0].innerHTML.toString();

	// now temp is a string
	var index = 0;
	while(temp[index] != ':' && temp.includes("Request for Change")){
		console.log(index);
		index++;
	} // traverse until colon is spotted

	var changeNum = '';

	// get change number
	while(temp.charAt(index) != '-' && index < temp.length) {
	   changeNum = changeNum + temp[index];
	   index++;
	}

    //alert(changeNum.trim());
	return changeNum.trim();

}

/////////////////////////////////////////////////////////////////////
// Javascript Injection                                            //
/////////////////////////////////////////////////////////////////////
var script = document.createElement('script');
script.appendChild(document.createTextNode('('+ main +')();'));
(document.body || document.head || document.documentElement).appendChild(script);

