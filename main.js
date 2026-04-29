$(document).ready(function() {
    $(function () {
    var flame = $("#flame");
    var txt = $("h1");

    flame.on({
        click: function () {
        flame.removeClass("burn").addClass("puff");
        $(".smoke").each(function () {
            $(this).addClass("puff-bubble");
        });
        $("#glow").remove();
        txt.hide().html("Happy Birthday,the beautiful girl in the world. Make a wish before your happy day starts running out of time. There's not much I want to say here, but I hope everything you want will come true, and God will make things easier for you. I love you, My Star 🌟").delay(750).fadeIn(300);
        $("#candle").animate(
            {
            opacity: ".5"
            },
            100
        );
        }
    });
});});

