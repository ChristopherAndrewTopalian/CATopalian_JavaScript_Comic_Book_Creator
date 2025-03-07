// makeBgChooserButton.js

function makeBgChooserButton(whichX, whichY, whichId)
{
    let chooserId = whichId;

    if (ge(chooserId))
    {
        ge(chooserId).remove();
    }

    let mainDiv = ce('div');
    mainDiv.style.zIndex = 1000;
    //mainDiv.style.position = 'fixed';
    //mainDiv.style.left = whichX + 'px';
    //mainDiv.style.top = whichY + 'px';
    mainDiv.id = chooserId;
    mainDiv.style.overflowY = 'scroll';
    mainDiv.title = whichId;
    mainDiv.style.width = 100 + 'px';
    ge('inputContainer').append(mainDiv);

    //-//

    let bgInput = ce('input');
    bgInput.type = 'file';
    bgInput.multiple = true;
    // bgInput.id = chooserId;
    bgInput.onchange = function(event)
    {
        bgFiles = event.target.files;

        if (bgFiles && bgFiles.length > 0)
        {
            // remove any existing character
            if (ge('bg'))
            {
                ge('bg').remove();
            }

            //-//

            // make character
            let theBg = ce('img');
            theBg.id = 'bg';
            theBg.style.width = 700 + 'px';

            theBg.src = URL.createObjectURL(bgFiles[Math.floor(Math.random() * bgFiles.length)]);

            //theBg.style.position = 'absolute';

            //theBg.style.left = Math.floor(Math.random() * 500) + 'px';
            //theBg.style.top = Math.floor(Math.random() * 100) + 'px';
            //theBg.style.height = '500px';
            ba(theBg);
        }
    }
    mainDiv.append(bgInput);

    //-//

    let randomButton = ce('button');
    randomButton.textContent = 'Random';
    randomButton.onclick = function()
    {
        // remove any existing character
        if (ge('bg'))
        {
            ge('bg').remove();
        }

        // make bg
        let theBg = ce('img');
        theBg.src = URL.createObjectURL(bgFiles[Math.floor(Math.random() * bgFiles.length)]);
        theBg.id = 'bg';
        theBg.style.width = 700 + 'px';
        ba(theBg);
    };
    mainDiv.append(randomButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

