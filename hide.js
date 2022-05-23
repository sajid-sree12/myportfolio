/*function myFunction1() {


    document.getElementById("div1").style.display = "block";
    document.getElementById("div2").style.display = "none";

    document.getElementById("div3").style.display = "none";


    document.getElementById("div4").style.display = "none";


}

function myFunction2() {

    document.getElementById("div1").style.display = "none";


    document.getElementById("div2").style.display = "block";
    document.getElementById("div3").style.display = "none";

    document.getElementById("div4").style.display = "none";


}

function myFunction3() {

    document.getElementById("div1").style.display = "none";

    document.getElementById("div2").style.display = "none";

    document.getElementById("div3").style.display = "block";

    document.getElementById("div4").style.display = "none";


}

function myFunction4() {

    document.getElementById("div1").style.display = "none";

    document.getElementById("div2").style.display = "none";

    document.getElementById("div3").style.display = "none";

    document.getElementById("div4").style.display = "block";


}*/
/*var divs = ["Section1", "Section2", "Section3", "Section4"];
var visibleId = null;

function show(id) {
    if (visibleId !== id) {
        visibleId = id;
    }
    hide();
}

function hide() {
    var div, i, id;
    for (i = 0; i < divs.length; i++) {
        id = divs[i];
        div = document.getElementById(id);
        if (visibleId === id) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}*/
jQuery(function() {
    jQuery('.nav-link').click(function() {
        jQuery('.targetDiv').hide();
        jQuery('#div' + $(this).attr('id')).show();
    });
});

jQuery(function() {
    jQuery('.btn').click(function() {
        jQuery('.sbtn').hide();
        jQuery('#btn' + $(this).attr('target')).show();
    });
});