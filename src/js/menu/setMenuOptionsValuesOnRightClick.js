// setMenuOptionsValuesOnRightClick.js

function setMenuOptionsValuesOnRightClick(whichId)
{
    // sizeTextarea
    ge("sizeTextarea").value = ge(whichId).style.width;

    // sizeSlider
    ge("sizeSlider").value = ge(whichId).style.width;

    //-//

    // rotateTextarea
    ge("rotateTextarea").value = 0;

    // rotateSlider
    ge("rotateSlider").value = 0;

    //-//

    ge("positionXTextarea").value = whichArray[x].posX;

    ge("positionSliderX").value = whichArray[x].posX;

    //-//

    ge("positionYTextarea").value = whichArray[x].posY;

    ge("positionSliderY").value = whichArray[x].posY;

    //-//

    // contrast textarea value
    ge("contrastTextarea").value = whichArray[x].theContrast;

    // contrast slider value
    ge("contrastSlider").value = whichArray[x].theContrast;

    //-//

    // brightness textarea value
    ge("brightnessTextarea").value = whichArray[x].theBrightness;

    // brightness slider value
    ge("brightnessSlider").value = whichArray[x].theBrightness;

    //-//

    // hue textarea value
    ge("hueSetTextarea").value = whichArray[x].theHue;

    // hue slider value
    ge("hueSetSlider").value = whichArray[x].theHue;

    //-//

    // saturate textarea value
    ge("saturateTextarea").value = whichArray[x].theSaturation;

    // saturate slider value
    ge("saturateSlider").value = whichArray[x].theSaturation;

    //-//

    // grayscale textarea value
    ge("grayScaleTextarea").value = whichArray[x].theGrayscale;

    // grayscale slider value
    ge("grayScaleSlider").value = whichArray[x].theGrayscale;

    //-//

    // invert textarea value
    ge("invertTextarea").value = whichArray[x].theInvert;

    // invert slider value
    ge("invertSlider").value = whichArray[x].theInvert;

    //-//

    // blur textarea value
    ge("blurTextarea").value = whichArray[x].theBlur;

    // blur slider value
    ge("blurSlider").value = whichArray[x].theBlur;

    //-//

    // sepia textarea value
    ge("sepiaTextarea").value = whichArray[x].theSepia;

    // sepia slider value
    ge("sepiaSlider").value = whichArray[x].theSepia;

    //-//

    // set the opacity value of the text area to the current value width of the object
    ge("opacityTextarea").value = whichArray[x].theOpacity;

    //set the value of the positionX slider to the current position of the object
    ge("opacitySlider").value = whichArray[x].theOpacity;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

