// scene.js

let THE_SCENE;

function scene(whichArray)
{
    eraseAll();

    //-//

    for (let x = 0; x < whichArray.length; x++)
    {
        // if file type is png, webp, jpg, jpeg, or gif
        if (whichArray[x].type == "png" || whichArray[x].type == "webp" || whichArray[x].type == "jpg" ||
        whichArray[x].type == "jpeg" || 
        whichArray[x].type == "gif")
        {
            // create an image
            let theImage = ce("img");

            // backgroundSize set to cover
            theImage.style.backgroundSize = "cover";

            // if array has theId
            if (whichArray[x].theId)
            {
                // set the id
                theImage.id = whichArray[x].theId;
            }

            // if array has theOpacity
            if (whichArray[x].theOpacity)
            {
                // set the opacity
                theImage.style.opacity = whichArray[x].theOpacity;
            }

            // if array has texture
            if (whichArray[x].texture)
            {
                // set texture src
                theImage.src = whichArray[x].texture;
            }

            // if array has theIdToMove
            if (whichArray[x].theIdToMove)
            {
                // assign idToMove to what is specified in the array at entry 0
                idToMove = whichArray[0].theIdToMove;
            }

            // if array has className
            if (whichArray[x].className)
            {
                // set className
                theImage.className = whichArray[x].className;
            }

            // position style set to absolute
            theImage.style.position = "absolute";

            //----//

            // if array has theX
            if (whichArray[x].theX)
            {
                // set left position
                theImage.style.left = whichArray[x].theX;
            }

            //----//

            // if array has theY
            if (whichArray[x].theY)
            {
                // set top position
                theImage.style.top = whichArray[x].theY;
            }

            //----//

            // WIDTH
            // if array has sizeX
            if (whichArray[x].sizeX)
            {
                // set width
                theImage.style.width = whichArray[x].sizeX;
            }

            //----//

            // HEIGHT
            // if array has sizeY
            if (whichArray[x].sizeY)
            {
                // set height
                theImage.style.height = whichArray[x].sizeY;
            }

            // flipHorizontal
            // if array has flipHorizontal
            if (whichArray[x].flipHorizontal)
            {
                // if flipHorizontal is true
                if (whichArray[x].flipHorizontal == true)
                {
                    // flip image horizontal
                    theImage.style.transform = "scaleX(-1)";
                }
            }

            // flipVertical
            // if array has flipVertical
            if (whichArray[x].flipVertical)
            {
                // if flipVertical is true
                if (whichArray[x].flipVertical == true)
                {
                    // flip image vertical
                    theImage.style.transform = "scaleY(-1)";
                }
            }

            //----//

            // If we want to use more than one, we separate them with a space

            // For example:
            // element.style.webkitTransform = "rotate(-2deg) translateX(100px)";

            // ROTATION
            // if array has rotationAmount
            if (whichArray[x].rotationAmount)
            {
                // if rotationAmount is not null
                if (whichArray[x].rotationAmount != null)
                {
                    // rotate image
                    theImage.style.rotate = whichArray[x].rotationAmount;
                }
            }

            //----//

            // zIndex
            // if array has theLayer
            if (whichArray[x].theLayer)
            {
                // set zIndex
                theImage.style.zIndex = whichArray[x].theLayer;
            }

            // objectFit
            // if array has kind
            if (whichArray[x].kind)
            {
                // set the objectFit
                theImage.style.objectFit = whichArray[x].kind;
            }

            // when object is right clicked
            // open menu options on right click
            theImage.oncontextmenu = function()
            {
                clickSound();

                // opens menu panel
                menuOptions(whichArray[x].theId);

                // if array has theId
                if (whichArray[x].theId)
                {
                    // set idToMove to theId
                    idToMove = whichArray[x].theId;
                }

                // menuAnimationsJustArray('animationsAll');

                // menuAnimationsArrayOfObjectsHere(animationsArrayOfObjects, "animation");

                // updateFilters(whichArray);

                // update rotationInput value
                ge('rotationInput').value = parseFloat(ge(theImage.id).style.rotate);

                // update sizeInput value
                ge('sizeInput').value = parseFloat(ge(theImage.id).style.width);

                // update zIndex value
                ge('zIndexInput').value = parseFloat(ge(theImage.id).style.zIndex);

                ge('posXInput').value = parseFloat(ge(theImage.id).style.left, 10);

                // update posYInput value
                ge('posYInput').value = parseFloat(ge(theImage.id).style.top, 10);

                ge('opacityInput').value = parseFloat(window.getComputedStyle(ge(theImage.id)).getPropertyValue('opacity'));

                // cl(parseFloat(ge(theImage.id).style.rotate));
            };

            ba(theImage);

            //-//

            // make all elements draggable
            makeElementDraggable(theImage);

            //-//

            // apply filters
            // filtersSet(x, whichArray);

            //-//

            currentScene = whichArray;
        }

        //-//

        // if file type is .mp4
        if (whichArray[x].type == "mp4")
        {
            // type of element to create
            let theMovieDiv = ce("div");

            // id
            theMovieDiv.id = whichArray[x].theId + "div";

            // class
            theMovieDiv.className = whichArray[x].className;

            // position type
            theMovieDiv.style.position = "absolute";

            // x
            theMovieDiv.style.left = whichArray[x].theX;

            // y
            theMovieDiv.style.top = whichArray[x].theY;

            //theMovieDiv.style.width = whichArray[x].sizeX;

            //theMovieDiv.style.backgroundSize = "cover";

            // layer
            theMovieDiv.style.zIndex = whichArray[x].theLayer;

            // video
            theMovieDiv.innerHTML = '<video width =  \''+whichArray[x].sizeX+'\' height = "100%" loop id =\''+whichArray[x].theId+'\' style = "background-size: cover;" muted><source src= \''+whichArray[x].theUrl+'\' type = "video\/mp4"><\/video> ';

            //theMovieDiv.innerHTML = '<video width="300" height = "30%" controls id =\''+whichArray[x].name+'\' style = "background-size: cover;"><source src= \''+whichArray[x].theUrl+'\' type="video\/mp4"><\/video> ';

            // when right clicked
            theMovieDiv.oncontextmenu = function()
            {
                playSound(sfx[3], 0.1);

                menuOptions(whichArray[x].theId);

                idToMove = whichArray[x].theId;
            };

            // add element to document
            ba(theMovieDiv);

            makeElementDraggable(theMovieDiv);
        }

        if (whichArray[x].type == 'div')
        {
            let theDiv = ce("div");
            theDiv.id = whichArray[x].theId;
            ba(theDiv);

            //-//

            // make video draggable
            makeElementDraggable(theDiv);
        }
    }

    //-//

    // if tv elements exist
    if (ge('tv_container') && 
        ge('prop_tv_001') &&
        ge('prop_tv_screen_dark'))
    {
        //ge('tv_container').append(ge('prop_tv_001'));

        //ge('tv_container').append(ge('prop_tv_screen_dark'));

        //ge('prop_tv_screen_dark').style.objectFit = 'contain';

        ge('prop_tv_screen_dark').style.height = '130px';
    }

    // make scene description info box
    makeDescription(whichArray);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

