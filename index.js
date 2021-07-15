var body = document.getElementsByTagName("BODY")[0];
var header = document.getElementsByTagName("header")[0];
var themeChoserTab = document.getElementById("themeChoser");
var themeToggler = document.getElementById("themeToggler");
var screen = document.getElementsByClassName("screen")[0];
var keypad = document.getElementsByClassName("keypad")[0];
var num_keys = document.getElementsByClassName("num-key");
var small_num_keys = document.getElementsByClassName("small-num-key");
var equalsKey = document.getElementById("equalsKey");
var calcScreen = document.getElementById("calcScreen");

function applyFirstTheme() {
    var mainBg = "hsl(222, 26%, 31%)"; 
    var toggleAndKeypadBg = "hsl(223, 31%, 20%)";
    var screenBg = "hsl(224, 36%, 15%)";

    var keyBlueBg = "hsl(225, 21%, 49%)";
    var keyBlueShadow = "0px 4px 0px 0px hsl(224, 28%, 35%)";

    var keyAndToggleRedBg = "hsl(6, 63%, 50%)";
    var keyRedShadow = "0px 4px 0px 0px hsl(6, 70%, 34%)";

    var keyGrayishOrangeBg = "hsl(30, 25%, 89%)";
    var keyOrangeShadow = "0px 4px 0px 0px hsl(28, 16%, 65%)";

    var grayishBlueText = "hsl(221, 14%, 31%)";

    body.style.background = mainBg;
    header.style.color = "white";
    themeChoserTab.style.background = toggleAndKeypadBg;
    screen.style.background = screenBg;
    screen.style.color = "white";
    keypad.style.background = toggleAndKeypadBg;
    themeToggler.style.background = keyAndToggleRedBg;

    for (var i=0; i<num_keys.length; i++) {
        num_keys[i].style.background = keyGrayishOrangeBg;
        num_keys[i].style["box-shadow"] = keyOrangeShadow;
        num_keys[i].style.color = grayishBlueText;
    }

    for (var i=0; i<small_num_keys.length; i++) {
        small_num_keys[i].style.background = keyBlueBg; 
        small_num_keys[i].style["box-shadow"] = keyBlueShadow;
        small_num_keys[i].style.color = "white";
    }

    equalsKey.style.background = keyAndToggleRedBg;
    equalsKey.style["box-shadow"] = keyRedShadow;
} 

function applySecondTheme() {
    var mainBg = "hsl(0, 0%, 90%)"; 
    var toggleAndKeypadBg = "hsl(0, 5%, 81%)";
    var screenBg = "hsl(0, 0%, 93%)";

    var keyCyanBg = "hsl(185, 42%, 37%)";
    var keyCyanShadow = "0px 4px 0px 0px hsl(185, 58%, 25%)";

    var keyAndToggleOrangeBg = "hsl(25, 98%, 40%)";
    var keyOrangeShadow = "0px 4px 0px 0px hsl(25, 99%, 27%)";

    var keyGrayishYellowBg = "hsl(45, 7%, 89%)";
    var keyGrayishOrangeShadow = "0px 4px 0px 0px hsl(35, 11%, 61%)";

    var grayishYellowText = "hsl(60, 10%, 19%)";

    body.style.background = mainBg;
    header.style.color = grayishYellowText;
    themeChoserTab.style.background = toggleAndKeypadBg;
    screen.style.background = screenBg;
    screen.style.color = grayishYellowText;
    keypad.style.background = toggleAndKeypadBg;
    themeToggler.style.background = keyAndToggleOrangeBg;

    for (var i=0; i<num_keys.length; i++) {
        num_keys[i].style.background = keyGrayishYellowBg;
        num_keys[i].style["box-shadow"] = keyGrayishOrangeShadow;
        num_keys[i].style.color = grayishYellowText;
    }

    for (var i=0; i<small_num_keys.length; i++) {
        small_num_keys[i].style.background = keyCyanBg; 
        small_num_keys[i].style["box-shadow"] = keyCyanShadow;
        small_num_keys[i].style.color = "white";
    }

    equalsKey.style.background = keyAndToggleOrangeBg;
    equalsKey.style["box-shadow"] = keyOrangeShadow;
} 

function applyThirdTheme() {
    var mainBg = "hsl(268, 75%, 9%)"; 
    var toggleAndKeypadBg = "hsl(268, 71%, 12%)";

    var keyVioletBg = "hsl(281, 89%, 26%)";
    var keyMagentaShadow = "0px 4px 0px 0px hsl(285, 91%, 52%)";

    var keyAndToggleCyanBg = "hsl(176, 100%, 44%)";
    var keyCyanShadow = "0px 4px 0px 0px hsl(177, 92%, 70%)";

    var keyDarkVioletBg = "hsl(268, 47%, 21%)";
    var keyDarkMagentaShadow = "0px 4px 0px 0px hsl(290, 70%, 36%)";

    var yellowText = "hsl(52, 100%, 62%)";
    var darkBlueText = "hsl(290, 70%, 36%)";

    body.style.background = mainBg;
    header.style.color = yellowText;
    themeChoserTab.style.background = toggleAndKeypadBg;
    screen.style.background = toggleAndKeypadBg;
    screen.style.color = yellowText;
    keypad.style.background = toggleAndKeypadBg;
    themeToggler.style.background = keyAndToggleCyanBg;

    for (var i=0; i<num_keys.length; i++) {
        num_keys[i].style.background = keyDarkVioletBg;
        num_keys[i].style["box-shadow"] = keyDarkMagentaShadow;
        num_keys[i].style.color = yellowText;
    }

    for (var i=0; i<small_num_keys.length; i++) {
        small_num_keys[i].style.background = keyVioletBg; 
        small_num_keys[i].style["box-shadow"] = keyMagentaShadow;
        small_num_keys[i].style.color = "white";
    }

    equalsKey.style.background = keyAndToggleCyanBg;
    equalsKey.style["box-shadow"] = keyCyanShadow;
    equalsKey.style.color = darkBlueText;
} 

function switchThemes(event) {
    event.preventDefault();
    console.log("I'm here", event);
    var xPosition = event.clientX - themeChoserTab.getBoundingClientRect().left - (themeToggler.clientWidth / 2);

    //themeToggler.style.marginLeft = xPosition + "px";
    console.log(xPosition);

    if (xPosition < 15) { 
        themeToggler.style.marginLeft = "0px";
        applyFirstTheme();
    }
    else if (xPosition < 33) {
        themeToggler.style.marginLeft = "17px";
        applySecondTheme();
    }
    else {
        themeToggler.style.marginLeft = "35px";
        applyThirdTheme();
    }

}

////////// Calc functions /////////////////



if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    themeToggler.style.marginLeft = "0px";
    applyFirstTheme();
} else {
    themeToggler.style.marginLeft = "17px";
    applySecondTheme();
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (e.matches) {
        themeToggler.style.marginLeft = "0px";
        applyFirstTheme();
    } else {
        themeToggler.style.marginLeft = "17px";
        applySecondTheme();
    }
});








