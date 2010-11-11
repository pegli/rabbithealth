function() {
    var userCtx = $$("#account").userCtx,
        guardian = userCtx && userCtx.name,
        rabbit = $$(this).app.require("data/rabbit");

    return {
        "guardian" : guardian,
        "breeds" : rabbit.breeds,
        "markings": rabbit.markings,
        "eyecolors": rabbit.eyecolors
    }
}