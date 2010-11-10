function() {
    var userCtx = $$("#account").userCtx,
        guardian = userCtx && userCtx.name;
      
    return {
        "guardian" : guardian
    }
}