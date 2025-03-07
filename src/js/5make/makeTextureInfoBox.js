// makeTextureInfoBox.js

function makeTextureInfoBox()
{
    let sectionId = 'textureInfo';

    //-//

    if (ge(sectionId))
    {
        ge(sectionId).remove();
    }

    //-//

    let mainDiv = ce('div');
    mainDiv.id = sectionId;
    mainDiv.style.position = "fixed";
    mainDiv.style.left = 500 + "px";
    mainDiv.style.top = 0 + "px";
    mainDiv.style.zIndex = 10000;
    ba(mainDiv);

    //-//

    let summaryContainer = ce('summary');
    mainDiv.append(summaryContainer);

    //-//

    let detailsContainer = ce('details');
    detailsContainer.textContent = 'Texture Info';
    summaryContainer.append(detailsContainer);

    //-//

    let textureInfo = ce("textarea");
    textureInfo.id = 'textBoxTextureChosen';
    textureInfo.style.width = 273 + "px";
    textureInfo.style.height = 75 + "px";
    textureInfo.style.backgroundColor = "rgb(0, 0, 0)";
    textureInfo.style.color = "rgb(255, 255, 255)";
    textureInfo.title = 'makeTextureInfoBox()';
    textureInfo.className = "quickOptionsButtons";

    detailsContainer.append(textureInfo);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

