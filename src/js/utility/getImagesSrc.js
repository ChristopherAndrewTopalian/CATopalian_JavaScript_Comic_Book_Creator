javascript:(
/*
// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// sizeGet.js
*/
function()
{
    let theImages = document.images;

    function ourFunction()
    {
        let theResult = "";

        for (let x = 0; x < theImages.length; x++ )
        {
            theResult += "texture:" + theImages[x].src;
            theResult += "\n\n";
            theResult += theImages[x].style.top;
            theResult += "\n\n";
            //cl(theImages[x].src);
        }
        // cl(theResult);
    }

    ourFunction();

}());

