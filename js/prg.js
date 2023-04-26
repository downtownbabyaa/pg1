$(document).ready(function(){
    $("#s #ssssss #ss2 .bun2").hide();
    $("#s #ssssss #ss2 .bun3").hide();

    // let n;
    // n = $("#s #ssssss #ss2 .butt button").index() + 1;

    $("#s #ssssss #ss2 .butt button").click(function(){
        let n;
        n = $(this).index() + 1;
        console.log("click n :"+n)
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
});