// makeTilesDifferentTexturesArrayOfObjects.js

// make Tiles by specifying the amount of rows and columns for a Background
function makeTilesDifferentTexturesArrayOfObjects(whichArray, whichFolder, whichSubFolder, whichTexture, rows, columns, xPos, yPos, sizeX, sizeY)
{
    // eraseDivs("backgroundTile");

    // makes sure it doesn't exceed how many are in the array
    //if (columns < whichArray.length)
    //{
    //    columns = whichArray.length-1;
    //}

    let tileCounter = 0;

    whichArray = eval(whichArray);

    //let thePath = "src/media/texture/background/" + whichFolder + "/" + whichSubFolder + "/" + whichTexture;

    //let thePath = "src/media/texture/background/" + whichFolder + "/" + whichSubFolder + "/";

    //let thePath = "src/media/texture/background/woods/autumn/woods_001.jpg";

    // rows
    for (let j = 0; j < rows; j++)
    {
        // correct x position by subtracting the sizeX
        xPos -= whichArray[j].sizeX;

        // columns
        for (let x = 0; x < columns; x++)
        {
            // add the sizeX to xPos
            xPos = xPos + whichArray[x].sizeX;

            let makeTile = ce("img");
            makeTile.src = whichArray[x].name;
            makeTile.style.position = "absolute";
            makeTile.style.left = xPos;
            makeTile.style.top = yPos;
            makeTile.style.width = whichArray[x].sizeX;
            makeTile.style.height = whichArray[x].sizeY;
            makeTile.style.color = "rgb(255, 255, 255)";
            makeTile.style.zIndex = "2";
            makeTile.style.fontFamily = "tahoma";
            makeTile.style.fontWeight = "bold";
            makeTile.style.fontSize = "25px";
            makeTile.style.textAlign = "center";
            makeTile.style.background = "rgb(0, 0, 0)";

            makeTile.style.color = 'rgb(255, 255, 255)';

            makeTile.id = "backgroundTiles";

            //makeTile.style.borderStyle = "solid";
            //makeTile.style.borderWidth = 1 + "px";

            ba(makeTile);

            tileCounter += 1;
        }
        yPos += whichArray[j].sizeY;
        xPos += whichArray[j].sizeX;
        xPos -= xPos;
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

