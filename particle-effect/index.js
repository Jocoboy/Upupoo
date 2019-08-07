$(document).ready(function () {
    for (let i = 0; i < 12; i++) {
        let ring_nth = "ring-" + (i + 1);
        $(".container").append("<div></div>").children(":last").addClass("ring").addClass(ring_nth);
        for (let j = 0; j < 36; j++) {
            let box_nth = "box-" + (j + 1);
            $("." + ring_nth).append("<div></div>").children(":last").addClass("box").addClass(box_nth);
            let ball_nth = "ball-" + (j + 1);
            $("." + ring_nth + " ." + box_nth).append("<div></div>").children().addClass("ball").addClass(ball_nth);
        }
    }
})