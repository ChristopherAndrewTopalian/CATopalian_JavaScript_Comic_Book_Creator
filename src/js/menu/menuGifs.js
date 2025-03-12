// menuGifs.js

function menuGifs()
{
    let theMenuId = "menuGif";

    // if the menu exists, remove it
    if (ge(theMenuId))
    {
        ge(theMenuId).remove();
    }

    let mainDiv = ce("div");
    mainDiv.style.position = "absolute";
    mainDiv.style.left = 325 + "px";
    mainDiv.style.top = 100 + "px";
    mainDiv.style.width = 500 + "px";
    mainDiv.id = "menuBackgroundId";
    mainDiv.style.zIndex = 10;
    mainDiv.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    mainDiv.style.float = "left";
    mainDiv.style.overflowY = "auto";
    mainDiv.style.height = 100 + "px";
    mainDiv.style.padding = 10 + "px";
    mainDiv.style.borderRadius = 5 + "px";
    mainDiv.className = "scrolling";
    mainDiv.id = theMenuId;
    ba(mainDiv);

    //-//

    makeElementDraggable(mainDiv);

    //-//

    let theCloseX = ce("button");
    theCloseX.textContent = "X";
    theCloseX.className = "ourButton";
    theCloseX.onclick = function()
    {
        ge(theMenuId).remove();
    };
    mainDiv.append(theCloseX);

    //-//

    let subDiv = ce("div");
    subDiv.style.color = "rgb(70, 70, 70)";
    subDiv.title = theMenuId + "()";
    mainDiv.append(subDiv);

    //-//

    let titleDiv = ce("div");
    titleDiv.textContent = "Gif Backgrounds";
    titleDiv.style.color = "rgb(255, 255, 255)";
    mainDiv.append(titleDiv);

    //-//

    let treesBlowingButton = ce("button");
    treesBlowingButton.textContent = "Trees Blowing";
    treesBlowingButton.className = "ourButton";
    treesBlowingButton.onclick = function()
    {
        if (ge('gifBackground'))
        {
            ge('gifBackground').remove();
        }
        let theImage = ce('img');
        theImage.id = 'gifBackground';
        theImage.src = bgGifs[fibn(bgGifs, 'Trees Blowing')].theUrl;
        theImage.style.position = 'absolute';
        theImage.style.left = 300 + 'px';
        theImage.style.top = 0 + 'px';
        theImage.style.width = 400 + 'px';
        ba(theImage);
        makeElementDraggable(theImage);
    };
    mainDiv.append(treesBlowingButton);

    //-//

    let beachWavesButton = ce("button");
    beachWavesButton.textContent = "Beach Waves";
    beachWavesButton.className = "ourButton";
    beachWavesButton.onclick = function()
    {
        if (ge('gifBackground'))
        {
            ge('gifBackground').remove();
        }
        let theImage = ce('img');
        theImage.id = 'gifBackground';
        theImage.src = bgGifs[fibn(bgGifs, 'Beach Waves')].theUrl;
        theImage.style.position = 'absolute';
        theImage.style.left = 300 + 'px';
        theImage.style.top = 0 + 'px';
        theImage.style.width = 400 + 'px';

        ba(theImage);
        makeElementDraggable(theImage);
    };
    mainDiv.append(beachWavesButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

