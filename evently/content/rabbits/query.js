function() {
    var name = $$("#account").userCtx.name;
    
    return {
        "view" : "rabbit-by-guardian",
        "startkey" : [name],
        "endkey" : [name, {}]
    };
}
