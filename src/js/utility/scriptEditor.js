// scriptEditor.js

function evaluateJS()
{
    // Grab the element
    let codeElement = ge("theCode");

    // Grab the text. (Use .value if it's a <textarea>. Use .innerText if it's a <div>)
    let rawCode = codeElement.value !== undefined ? codeElement.value : codeElement.innerText;

    try
    {
        // Wrap the script in our safe sandbox and execute it
        let result = new Function(rawCode)();

        // Optional: If the script returns something, log it so you know it worked!
        if (result !== undefined)
        {
            console.log("Comic Script Executed Successfully. Result: ", result);
        }
        else
        {
            console.log("Comic Script Executed Successfully.");
        }
    } 
    catch (error)
    {
        // Catch any typos the user makes in their comic script
        console.error("Comic Script Error: ", error.message);
        
        // Optional: Alert the user so they know their script failed
        // alert("Warning: Your comic script has an error -> " + error.message);
    }
}

function makeScriptEditor()
{
    let mainDiv = ce("div");
    mainDiv.id = "mainDivId";
    mainDiv.style.position = 'absolute';
    mainDiv.style.left = 300 + 'px';
    mainDiv.style.top = 0 + 'px';
    mainDiv.style.zIndex = 2000;
    ba(mainDiv);

    //-//

    let closeButton = ce("button");
    closeButton.textContent = "X";
    closeButton.onclick = function()
    {
        ge("mainDivId").remove();
    };
    mainDiv.append(closeButton);

    //-//

    let runButton = ce("button");
    runButton.textContent = "Run"
    runButton.title = "Activate"
    runButton.onclick = function()
    {
        evaluateJS();
    };
    mainDiv.append(runButton);

    //-//

    let subDiv = ce("textarea");
    subDiv.id = "theCode";
    subDiv.contentEditable = true;
    subDiv.className = "theTextAreaStyle";
    subDiv.style.width = '400px';
    subDiv.style.height = '100px';
    subDiv.style.padding = '20px';
    subDiv.style.resize = 'both';
    mainDiv.append(subDiv);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

