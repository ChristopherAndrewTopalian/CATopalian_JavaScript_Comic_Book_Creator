// scriptEditor.js

function evaluateJS()
{
    let theText = ge("theCode");

    let result = eval(ge("theCode").textContent);
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
    // checkmark for run symbol
    runButton.textContent = "O"
    runButton.title = "Activate"
    runButton.onclick = function()
    {
        evaluateJS();
    };
    mainDiv.append(runButton);

    //-//

    let subDiv = ce("div");
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
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

