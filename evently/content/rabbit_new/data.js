function(doc) {
    var userCtx = $$("#account").userCtx,
        guardian = userCtx && userCtx.name,
        dates = $$(this).app.require("lib/dates"),
        rabbit = $$(this).app.require("data/rabbit");

    var birthDate = dates.arrayToDate(doc.birth_date);
    
    $.extend(doc, {
        "guardian" : guardian,
        "birth_date" : $.datepicker.formatDate("mm/dd/yy", birthDate),
        "all_breeds" : rabbit.breeds,
        "all_markings": rabbit.markings,
        "all_eyecolors": rabbit.eyecolors
    });

    return doc; 
}