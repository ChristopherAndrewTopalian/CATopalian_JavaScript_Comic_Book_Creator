// menuPlayMovie.js

function menuPlayMovie()
{
    let menuId = 'menuPlayMovieId';

    // if the menu exists, remove it
    if (ge(menuId))
    {
        ge(menuId).remove();
    }

    //-//

    let mainDiv = ce("div");
    mainDiv.id = menuId;
    mainDiv.title = menuId;
    mainDiv.style.position = "absolute";
    mainDiv.style.left = 250 + "px";
    mainDiv.style.top = 25 + "px";
    mainDiv.style.minWidth = 200 + "px";
    mainDiv.style.zIndex = 10;
    mainDiv.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    mainDiv.style.float = "left";
    mainDiv.style.overflowY = "auto";
    mainDiv.style.height = 100 + "px";
    mainDiv.style.padding = 10 + "px";
    mainDiv.style.borderRadius = 5 + "px";
    ba(mainDiv);

    //-//

    makeElementDraggable(mainDiv);

    //-//

    let theCloseX = ce("button");
    theCloseX.textContent = "X";
    theCloseX.className = "ourButton";
    theCloseX.onclick = function()
    {
        ge("menuPlayMovieId").remove();
    } ;
    mainDiv.append(theCloseX);

    //-//

    let subDiv = ce("div");
    subDiv.style.color = "rgb(70, 70, 70)";
    subDiv.title = "menuPlayMovieId()";
    mainDiv.append(subDiv);

    //-//

    let titleDiv = ce("div");
    titleDiv.textContent = "TV - Video";
    titleDiv.style.color = "rgb(255, 255, 255)";
    mainDiv.append(titleDiv);

    //-//

    let playMovieButton = ce("button");
    playMovieButton.textContent = "Play Movie";
    playMovieButton.onclick = function()
    {
        ge("tvMovies").style.visibility = "visible";

        ge("prop_tv_screen_dark").style.visibility = "hidden";

        movieStart('tvMovies');
    };

    playMovieButton.className = "ourButton";
    mainDiv.append(playMovieButton);

    //-//

    let pauseMovieButton = ce("button");
    pauseMovieButton.textContent = "Pause Movie";
    pauseMovieButton.onclick = function()
    {
        movieStop('tvMovies');
    };
    pauseMovieButton.className = "ourButton";
    mainDiv.append(pauseMovieButton);

    //-//

    let theBr = ce("br");
    mainDiv.append(theBr);

    //-//

    let playGifButton = ce("button");
    playGifButton.textContent = "Play Gifs";
    playGifButton.onclick = function()
    {
        textureTimerRepeat(gifsLand, 'prop_tv_screen_dark', 5000);

       //textureTimerRepeat(gifsLand, 'prop_tv_screen_dark', 'src/media/texture/gif/', 5000);
    };
    playGifButton.className = "ourButton";
    mainDiv.append(playGifButton);

    //-//

    let stopGifButton = ce("button");
    stopGifButton.textContent = "Repeat this Gif";
    stopGifButton.onclick = function()
    {
        clearInterval(textureTimerRepeatTimer);
    };
    stopGifButton.className = "ourButton";
    mainDiv.append(stopGifButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

