$(document).ready(function () {
    // 24 lines between circle-2 and circle-3
    for (let i = 0; i < 24; i++) {
        // let angle = -15 * i;
        let rotate = "c-line-rotate-" + (i + 1);
        $(".c-line-container").append("<div></div>").children(":last").addClass("c-line").addClass(rotate).css({
            // "top": 244 + 244 * Math.sin(angle * Math.PI / 180) + "px",
            // "left": 244 + 244 * Math.cos(angle * Math.PI / 180) + "px",
            // "transform": () => { return "rotateZ(" + angle + "deg)"; }
        })
    }
    // 6 rectangles between circle-3 and circle-4
    for (let i = 0; i < 6; i++) {
        let rectangle = "rectangle-" + (i + 1);
        $(".rectangle-container").append("<div></div>").children(":last").addClass(rectangle);
    }
    // 4 rhombuses in east
    for (let i = 3; i >= 0; i--) {
        let rhombus = "rhombus-" + (i + 1);
        $(".rhombus-container").prepend("<div></div>").children(":first").addClass(rhombus);
    }
    // Add 1 line to each rhombus
    for (let i = 0; i < 4; i++) {
        let rotate = "r-line-rotate-" + (i + 1);
        $(".r-line-container").append("<div></div>").children(":last").addClass("r-line").addClass(rotate);
    }
    // star in back of circle-4
    for (let i = 0; i < 6; i++) {
        let rotate = "star-back-rotate-" + (i + 1);
        $(".star-back").append("<div></div>").children(":last").addClass(() => { return i < 3 ? "triangle" : "triangle-small"; }).addClass(rotate);
    }
    // Add lines to star in back of circle-4
    for (let i = 0; i < 5; i++) {
        let rotate = "s-line-rotate-" + (i + 1);
        $(".s-line-container").append("<div></div>").children(":last").addClass("s-line").addClass(rotate);
    }
    // star in front of circle-4
    for (let i = 0; i < 6; i++) {
        let rotate = "star-front-rotate-" + (i + 1);
        $(".star-front").append("<div></div>").children(":last").addClass(() => { return i < 3 ? "triangle" : "triangle-small"; }).addClass(rotate);
    }
})