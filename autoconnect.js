function autoconnect()
{
    // Declaring variable x that will keep count and will terminate the process once the value of x is equal to length of nodelist
    let x=0;

    try
    {
       // Declaring variable connections that will contain a nodelist extracted from the document using selector
        let connections=document.querySelectorAll('.artdeco-button--secondary')
        
        
        interval=setInterval(()=>
        {
            // Declaring variable buttonname that will contain the button text
            //If the buttonname is Connect then it will click it
            let buttonname=connections[x].children[0].innerHTML
            if(buttonname.match('Connect'))
            {
                connections[x].click();
                let sendafterconnect = [];
                setTimeout(() => {
                    // Declaring variable sendafterconnects that will contain a nodelist extracted from the document using selector
                    sendafterconnects=document.querySelectorAll('.artdeco-button--primary')
                    sendafterconnects.forEach(sendafterconnect => {
                        // After clicking connect button a send button appears before sending the next connect request
                        // Declaring variable sendname that will contain the button text
                        //If the buttonname is Send then it will click it
                        let sendbutton=sendafterconnect.children[0].innerHTML
                        if(sendbutton.match('Send'))
                        {
                            sendafterconnect.click();
                            return;
                        }
                        
                    })
                },2000);//Timeout is set as 2 seconds i.e send button will be clicked after 2 seconds of loading
            }
            x+=1;
            if(x==buttonname.length)
            {
                clearInterval(interval);
                console.log("All invitations from current page are sent");
            }
        },5000)//Interval is set as 5 seconds i.e this process will be repeated in every 5 seconds till the time all connection requests from the nodelist is send
    } 
    catch(err)
    {
        console.log("Error: "+err)
    }
}


export {autoconnect};

