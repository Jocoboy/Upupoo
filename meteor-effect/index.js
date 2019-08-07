$(document).ready(function () {
    for (let i = 0; i < 20; i++) {
        let top = getRandom(40, 30) + "%";
        let left = getRandom(25, 25) + "%";
        let delay = getRandom(6) + "s";
        $(".wrapper").append("<div></div>").children(":last").addClass("meteor").css({
            "top": top,
            "left": left,
            "animation-delay": delay
        });
    }
})

// Get random number among [offset, offset+length-1].
function getRandom(length, offset = 0) {
    return Math.floor(Math.random() * length) + offset;
}