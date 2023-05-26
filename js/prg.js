$(document).ready(function(){
    $("#s #ssssss #ss2 .bun2").hide();
    $("#s #ssssss #ss2 .bun3").hide();
    $(".li2").hide();
    $(".li3").hide();

    // let n;
    // n = $("#s #ssssss #ss2 .butt button").index() + 1;

    $("#s #ssssss #ss2 .butt button").click(function(){
        let n;
        n = $(this).index() + 1;
        console.log("click n :"+n);
        $("#s #ssssss #ss2 .butt button:nth-child("+ n +")").addClass("blueline bold");
        $("#s #ssssss #ss2 .butt button:nth-child("+ n +")").removeClass("gray");
        $("#s #ssssss #ss2 .butt button").not("#s #ssssss #ss2 .butt button:nth-child("+n+")").removeClass("blueline bold");
        $("#s #ssssss #ss2 .butt button").not("#s #ssssss #ss2 .butt button:nth-child("+n+")").addClass("gray");
        
        if(n==1){
            $("#s #ssssss #ss2 .bun1").show();
            $("#s #ssssss #ss2 .bun2").hide();
            $("#s #ssssss #ss2 .bun3").hide();
        }
        else if(n==2){
            $("#s #ssssss #ss2 .bun1").hide();
            $("#s #ssssss #ss2 .bun2").show();
            $("#s #ssssss #ss2 .bun3").hide();
        }
        else{
            $("#s #ssssss #ss2 .bun1").hide();
            $("#s #ssssss #ss2 .bun2").hide();
            $("#s #ssssss #ss2 .bun3").show();
        }
    })
    $("#sssss #bu button").click(function(){
        let k;
        k = $(this).index() +1;
        console.log("click k:"+k);
        $("#sssss #bu button:nth-child("+ k +")").addClass("blueline bold");
        $("#sssss #bu button:nth-child("+ k +")").removeClass("gray");
        $("#sssss #bu button").not("#sssss #bu button:nth-child("+k+")").removeClass("blueline bold");
        $("#sssss #bu button").not("#sssss #bu button:nth-child("+k+")").addClass("gray");

        if(k==1){
            $(".li1").show();
            $(".li2").hide();
            $(".li3").hide();
        }
        else if(k==2){
            $(".li1").hide();
            $(".li2").show();
            $(".li3").hide();
        }
        else{
            $(".li1").hide();
            $(".li2").hide();
            $(".li3").show();
        }
    })
    $('.subTitle').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        dots: true,
        draggable: false,
        arrows: false,
    })
});