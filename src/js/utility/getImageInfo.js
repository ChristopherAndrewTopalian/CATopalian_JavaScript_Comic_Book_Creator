// getImageInfo.js

function getImageInfo()
{
    let theImages = document.images;

    let theResult = "";

    for (let x = 0; x < theImages.length; x++ )
    {
        theResult += "{"
        theResult += "\n\n";
        theResult += "texture:" + theImages[x].src + ",";
        theResult += "\n\n";
        theResult += "sizeX: " + theImages[x].style.width + ",";
        theResult += "\n";
        theResult += "theX: " + theImages[x].style.left + ",";
        theResult += "\n";
        theResult += "theY: " + theImages[x].style.top + ",";
        theResult += "\n\n";
        theResult += "theLayer: " + theImages[x].style.zIndex;
        theResult += "\n\n";
        theResult += "},";
        theResult += "\n\n";
        //cl(theImages[x].src);
    }

    theResult += "];";

    //cl(theResult);

    ge("data").value = theResult;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

