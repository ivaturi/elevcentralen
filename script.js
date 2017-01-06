// ==UserScript==
// @name        Elevcentral navigation
// @namespace   abhi
// @include     https://elevcentralen.se/en/Education/Questions/B
// @version     1
// @grant       none
// ==/UserScript==

$("body").keydown(function(e){
    console.log("Keydown catcher active")
    // Navigate to next question on right arrow
    if(e.keyCode==39){
	$(".btn-primary > .fa-arrow-right").parent().click()
	console.log("Moving to next question")
    }
    // Navigate to previous question on left arrow
    if(e.keyCode==37){
	$(".btn-primary > .fa-arrow-left").parent().click()
	console.log("Moving to previous question")
    }
    // Navigate to results if 'r' is pressed
    if(e.keyCode==82){
	$(".btn-primary > .fa-bar-chart-o").parent().click()
	console.log("Launching results")
    }
    // Navigate to overview if 'o' is pressed
    if(e.keyCode==79){
	$(".btn-primary > .fa-sitemap").parent().click()
	console.log("Launching overview")
    }
});
