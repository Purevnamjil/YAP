$(document).ready(function(){
    $(".menu > div >div > ul > li > a").click(function(){
        $(".toggler").prop("checked", false);
    });
})