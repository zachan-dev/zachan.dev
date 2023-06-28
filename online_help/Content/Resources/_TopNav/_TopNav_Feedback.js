function sendFeedback() {
	var feedbackVariables = document.getElementById("hp-feedback-variables");
	var productName = feedbackVariables.getAttribute("productName");
	var productVersion = feedbackVariables.getAttribute("productVersion");
	var commentsEmailAddress = feedbackVariables.getAttribute("commentsEmailAddress");
	var firstheading = '';
	var string = feedbackVariables.getAttribute("topicTitle");
    
	if (!/[^\u0000-\u00ff]/.test(string))
		firstheading = feedbackVariables.getAttribute("topicTitle");

	document.getElementById('hp-feedbackDiv').style.display = "block";
	
	var topicURL = document.URL;
	
	var emailBody = document.getElementById('hp-feedbackBody').innerHTML;
	emailBody += ' (topic ' + decodeURIComponent(topicURL) + ')' + encodeURIComponent('\n\n'); 
	document.getElementById('hp-feedbackOpen').href = 'mailto:' + commentsEmailAddress + '?subject=Feedback on ' + productName + " " + productVersion + ": " + firstheading + '&body=' + emailBody;
	
	dimDiv = document.getElementById('hp-feedbackDimmedDiv');
	dimDiv.style.display = "block";
	dimDiv.onclick = closeFeedback;	
}

function closeFeedback()
{
	document.getElementById('hp-feedbackDiv').style.display = "none";
	document.getElementById('hp-feedbackDimmedDiv').style.display = "none";	
}