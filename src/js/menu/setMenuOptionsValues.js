// setMenuOptionsValues.js

function setMenuOptionsValues(whichArray, x)
{
    // zIndex
    if (ge('zIndexInput'))
    {
        ge('zIndexInput').value = whichArray[x].theLayer;
    }

    // size
    if (ge('sizeInput'))
    {
        ge("sizeInput").value = whichArray[x].sizeX;
    }

    // sizeSlider
    if (ge('sizeSlider'))
    {
        ge("sizeSlider").value = whichArray[x].sizeX;
    }

    //-//

    // rotationInput
    if (ge('rotationInput'))
    {
        ge("rotationInput").value = whichArray[x].rotationAmount.replace("deg", "");
    }

    // rotateSlider
    if (ge('rotateSlider'))
    {
        ge("rotateSlider").value = whichArray[x].rotationAmount.replace("deg", "");
    }

    //-//

    if (ge('posXInput'))
    {
        ge("posXInput").value = whichArray[x].posX;
    }

    if (ge('posXSlider'))
    {
        ge("posXSlider").value = whichArray[x].posX;
    }

    //-//

    if (ge('posYInput'))
    {
        ge("posYInput").value = whichArray[x].posY;
    }

    if (ge('posYSlider'))
    {
        ge("posYSlider").value = whichArray[x].posY;
    }

    if (ge('opacityInput'))
    {
        ge('opacityInput').value = whichArray[x].theOpacity;
    }

    if (ge('opacitySlider'))
    {
        ge('opacitySlider').value = whichArray[x].theOpacity;
    }

    //-//

    // contrast textarea value
    if (ge('contrastInput'))
    {
        ge("contrastInput").value = whichArray[x].theContrast;
    }

    // contrast slider value
    if (ge('contrastSlider'))
    {
        ge("contrastSlider").value = whichArray[x].theContrast;
    }

    //-//

    // brightness textarea value
    if (ge('brightnessInput'))
    {
        ge("brightnessInput").value = whichArray[x].theBrightness;
    }

    // brightness slider value
    if (ge('brightnessSlider'))
    {
        ge("brightnessSlider").value = whichArray[x].theBrightness;
    }

    //-//

    // hue textarea value
    if (ge('hueSetInput'))
    {
        ge("hueSetInput").value = whichArray[x].theHue;
    }

    // hue slider value
    if (ge('hueSetSlider'))
    {
        ge("hueSetSlider").value = whichArray[x].theHue;
    }

    //-//

    // saturate textarea value
    if (ge('saturateInput'))
    {
        ge("saturateInput").value = whichArray[x].theSaturation;
    }

    // saturate slider value
    if (ge('saturateSlider'))
    {
        ge("saturateSlider").value = whichArray[x].theSaturation;
    }

    //-//

    // grayscale textarea value
    if (ge('grayScaleInput'))
    {
        ge("grayScaleInput").value = whichArray[x].theGrayscale;
    }

    // grayscale slider value
    if (ge('grayScaleSlider'))
    {
        ge("grayScaleSlider").value = whichArray[x].theGrayscale;
    }

    //-//

    // invert textarea value
    if (ge('invertInput'))
    {
        ge("invertInput").value = whichArray[x].theInvert;
    }

    // invert slider value
    if (ge('invertSlider'))
    {
        ge("invertSlider").value = whichArray[x].theInvert;
    }

    //-//

    // blur textarea value
    if (ge('blurInput'))
    {
        ge("blurInput").value = whichArray[x].theBlur;
    }

    // blur slider value
    if (ge('blurSlider'))
    {
        ge("blurSlider").value = whichArray[x].theBlur;
    }

    //-//

    // sepia textarea value
    if (ge('sepiaInput'))
    {
        ge("sepiaInput").value = whichArray[x].theSepia;
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

