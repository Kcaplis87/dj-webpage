
//-23% split1

//-37% split2
console.log($("#split1"));

$("#split1").animate({"left":"-23%"}, 2000);
$("#split2").animate({"right":"-37%"}, 2000, function() {
    $("#split-background").fadeIn();
});
