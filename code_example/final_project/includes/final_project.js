$(document).ready(function() {
    // BEGIN BUTTON
    $( "#begin" ).click(function() {
        $( "#begin_quiz" ).hide();
        $( "#quiz" ).fadeIn();
    });
    // ALL HINTS
    $( "#hint_1" ).mouseover(function() {
        $( "#hint_1" ).hide();
        $( "#hint_1_text ").fadeIn();
    });
    $( "#hint_1_text" ).mouseleave(function() {
        $( "#hint_1_text ").fadeOut();
        $( "#hint_1" ).delay(397).fadeIn();
    });
    $( "#hint_2" ).mouseover(function() {
        $( "#hint_2" ).hide();
        $( "#hint_2_text ").fadeIn();
    });
    $( "#hint_2_text" ).mouseleave(function() {
        $( "#hint_2_text ").fadeOut();
        $( "#hint_2" ).delay(397).fadeIn();
    });
    $( "#hint_3" ).mouseover(function() {
        $( "#hint_3" ).hide();
        $( "#hint_3_text ").fadeIn();
    });
    $( "#hint_3_text" ).mouseleave(function() {
        $( "#hint_3_text ").fadeOut();
        $( "#hint_3" ).delay(397).fadeIn();
    });
    $( "#hint_4" ).mouseover(function() {
        $( "#hint_4" ).hide();
        $( "#hint_4_text ").fadeIn();
    });
    $( "#hint_4_text" ).mouseleave(function() {
        $( "#hint_4_text ").fadeOut();
        $( "#hint_4" ).delay(397).fadeIn();
    });
    $( "#hint_5" ).mouseover(function() {
        $( "#hint_5" ).hide();
        $( "#hint_5_text ").fadeIn();
    });
    $( "#hint_5_text" ).mouseleave(function() {
        $( "#hint_5_text ").fadeOut();
        $( "#hint_5" ).delay(397).fadeIn();
    });
});

// FIXME --- not pushing name though
var name = document.getElementById("player").value;
document.getElementById("welcome").innerHTML = ("<br />Welcome " + name + "! Good luck!");

// BEGIN BUTTON
var begin = document.getElementById("begin");

var submit = document.getElementById("submit");

console.log(name);
