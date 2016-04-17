function unhide(showDivName, hideDivName1, hideDivName2, hideDivName3) {
	document.getElementById(showDivName).style.display = "block";
	document.getElementById(hideDivName1).style.display = "none";
	document.getElementById(hideDivName2).style.display = "none";
	document.getElementById(hideDivName3).style.display = "none";

	if (showDivName == "summaryDiv") {
		document.getElementById('summary').className += " currentTab";
		document.getElementById('experience').className -= " currentTab";
		document.getElementById('education').className -= " currentTab";
		document.getElementById('portfolio').className -= " currentTab";
	} else if (showDivName == "experienceDiv") {
		document.getElementById('experience').className += " currentTab";
		document.getElementById('summary').className -= " currentTab";
		document.getElementById('education').className -= " currentTab";
		document.getElementById('portfolio').className -= " currentTab";
	} else if (showDivName == "skillsDiv") {
		document.getElementById('education').className += " currentTab";
		document.getElementById('summary').className -= " currentTab";
		document.getElementById('experience').className -= " currentTab";
		document.getElementById('portfolio').className -= " currentTab";
	} else if (showDivName == "portfolioDiv") {
		document.getElementById('portfolio').className += " currentTab";
		document.getElementById('summary').className -= " currentTab";
		document.getElementById('experience').className -= " currentTab";
		document.getElementById('education').className -= " currentTab";
	}
}