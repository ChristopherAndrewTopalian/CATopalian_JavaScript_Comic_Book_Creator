// textureForward.js

let whichNumber2 = 0;

function textureForward(whichArray, whichId, whichType, whichFolder, whichSubFolder, whichSubFolder2)
{
    whichArray = eval(whichArray);

    if (whichNumber2 < whichArray.length)
    {
        let theImage = ge(whichId);

        if (whichType == "arrayOnly")
        {
            //theImage.src = whichFolder + whichArray[whichNumber2];

            cl("src/media/texture/" + whichFolder + "\/" + whichSubFolder + "\/" + whichSubFolder2 + "\/" + whichArray[whichNumber2]);

            //theImage.src = "src/media/texture/" + whichFolder + "\/" + whichSubFolder + "\/" + whichSubFolder2 + "\/" + whichArray[whichNumber2];

            theImage.src = whichArray[whichNumber2];
        }
        if (whichType == "arrayOfObjects")
        {
            //theImage.src = whichFolder + whichArray[whichNumber2].name;

            //theImage.src = "src/media/texture/" + whichFolder + "\/" + whichSubFolder + "\/" + whichSubFolder2 + "\/" + whichArray[whichNumber2].name;

            theImage.src = whichArray[whichNumber2].name;

            //adjust size, because each image needs to be centered from the previous one
            theImage.style.width = whichArray[whichNumber2].sizeX;

            theImage.style.left = whichArray[whichNumber2].theX;

            theImage.style.top = whichArray[whichNumber2].theY;
        }

        whichNumber2 += 1;

    }
    if (whichNumber2 == whichArray.length)
    {
        whichNumber2 = 0;
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

