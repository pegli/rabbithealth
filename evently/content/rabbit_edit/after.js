function(doc) {
    // jqueryui
    $("button, input:submit").button();
    $(".datepicker").datepicker({
        changeMonth: true,
        changeYear: true
    });

    // set multi-controls
    $("input[name='gender'][value='"+doc.gender+"']").attr("checked", true);
    $("input[name='eye_color'][value='"+doc.eye_color+"']").attr("checked", true);
    if (doc.mixed == true) {
        $("input[name='mixed']").attr("checked", true);
    }
    (doc.markings || []).forEach(function(marking){
        $("input[name='markings'][value='"+marking+"']").attr("checked", true);
    });
    $("select[name='breed']").val(doc.breed);
}