// menuDropDownMenu.js

function menuDropDownMenu(whichArray, whichId, menuName, whichSound, theX, theY)
{
    let theSelect = ce("select");
    theSelect.style.position = "fixed";
    theSelect.style.left = theX + "px";
    theSelect.style.top = theY + "px";
    theSelect.style.zIndex = 1000000;
    theSelect.className = "ourDropDown";
    theSelect.title = "menuDropDownMenu()";
    ba(theSelect);

    for (let x = 0; x < whichArray.length; x++)
    {
        let theOption = ce("option");
        theOption.text = whichArray[x].name;
        theOption.className = "tags";

        theOption.setAttribute("title", ""+whichArray[x].words+"");

        theOption.onclick = function()
        {
            playSound(whichSound, 1.0);

            comicBubbleTargetIdArrayOfObjects(whichId, greetings, x);
        };

        theSelect.append(theOption);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

