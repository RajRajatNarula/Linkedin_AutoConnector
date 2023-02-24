function stopautoconnect()
{
    //To stop the process once stop button is pressed
	clearInterval(interval);
	console.log("Pressed Stop")
}

export {stopautoconnect};