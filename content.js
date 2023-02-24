import { autoconnect} from "./autoconnect.js";
import { stopautoconnect } from "./stopautoconnect.js";

//Declaring variable buttonpressed that will get value from page when we press connect button
let buttonpressed=document.getElementById("clicker")
var interval;
var count=0
buttonpressed.addEventListener('click',async () => {

	//This will query all the tabs that are matching the specified properties 
	let [tab]=await chrome.tabs.query({ active: true, currentWindow: true });

	//If innerhtml of button is Connect it will change innerhtml to stop and will execute the scipt autoconnect on the target specified
	if(buttonpressed.innerHTML=='Connect')
	{
		buttonpressed.innerHTML='Stop';
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			function: autoconnect
		});
	}
	// If the innerhtml is Stop it will change innerhtml to Connect and will stop the script running by calling stopautoconnect function
	else{
		buttonpressed.innerHTML='Connect'
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			function: stopautoconnect
		});
	}

});
