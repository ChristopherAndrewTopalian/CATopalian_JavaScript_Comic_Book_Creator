// setMenuOptionsValues.js

function setMenuOptionsValues(whichArray, x)
{
    // sizeTextarea
    if (ge('sizeTextarea'))
    {
        ge("sizeTextarea").value = whichArray[x].sizeX;
    }

    // sizeSlider
    if (ge('sizeSlider'))
    {
        ge("sizeSlider").value = whichArray[x].sizeX;
    }

    //-//

    // rotateTextarea
    if (ge('rotateTextarea'))
    {
        ge("rotateTextarea").value = whichArray[x].rotationAmount.replace("deg", "");
    }

    // rotateSlider
    if (ge('rotateSlider'))
    {
        ge("rotateSlider").value = whichArray[x].rotationAmount.replace("deg", "");
    }

    //-//

    if (ge('positionXTextarea'))
    {
        ge("positionXTextarea").value = whichArray[x].posX;
    }

    if (ge('positionSliderX'))
    {
        ge("positionSliderX").value = whichArray[x].posX;
    }

    //-//

    if (ge('positionYTextarea'))
    {
        ge("positionYTextarea").value = whichArray[x].posY;
    }

    if (ge('positionSliderY'))
    {
        ge("positionSliderY").value = whichArray[x].posY;
    }

    //-//

    // contrast textarea value
    if (ge('contrastTextarea'))
    {
        ge("contrastTextarea").value = whichArray[x].theContrast;
    }

    // contrast slider value
    if (ge('contrastSlider'))
    {
        ge("contrastSlider").value = whichArray[x].theContrast;
    }

    //-//

    // brightness textarea value
    if (ge('brightnessTextarea'))
    {
        ge("brightnessTextarea").value = whichArray[x].theBrightness;
    }

    // brightness slider value
    if (ge('brightnessSlider'))
    {
        ge("brightnessSlider").value = whichArray[x].theBrightness;
    }

    //-//

    // hue textarea value
    if (ge('hueSetTextarea'))
    {
        ge("hueSetTextarea").value = whichArray[x].theHue;
    }

    // hue slider value
    if (ge('hueSetSlider'))
    {
        ge("hueSetSlider").value = whichArray[x].theHue;
    }

    //-//

    // saturate textarea value
    if (ge('saturateTextarea'))
    {
        ge("saturateTextarea").value = whichArray[x].theSaturation;
    }

    // saturate slider value
    if (ge('saturateSlider'))
    {
        ge("saturateSlider").value = whichArray[x].theSaturation;
    }

    //-//

    // grayscale textarea value
    if (ge('grayScaleTextarea'))
    {
        ge("grayScaleTextarea").value = whichArray[x].theGrayscale;
    }

    // grayscale slider value
    if (ge('grayScaleSlider'))
    {
        ge("grayScaleSlider").value = whichArray[x].theGrayscale;
    }

    //-//

    // invert textarea value
    if (ge('invertTextarea'))
    {
        ge("invertTextarea").value = whichArray[x].theInvert;
    }

    // invert slider value
    if (ge('invertSlider'))
    {
        ge("invertSlider").value = whichArray[x].theInvert;
    }

    //-//

    // blur textarea value
    if (ge('blurTextarea'))
    {
        ge("blurTextarea").value = whichArray[x].theBlur;
    }

    // blur slider value
    if (ge('blurSlider'))
    {
        ge("blurSlider").value = whichArray[x].theBlur;
    }

    //-//

    // sepia textarea value
    if (ge('sepiaTextarea'))
    {
        ge("sepiaTextarea").value = whichArray[x].theSepia;
    }

    // sepia slider value
    if (ge('sepiaSlider'))
    {
        ge("sepiaSlider").value = whichArray[x].theSepia;
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

