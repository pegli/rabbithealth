function(e) {
    var userCtx = $$("#account").userCtx;
    var info = $$("#account").info;
    var widget = $(this);

    var db = $.couch.db(info.authentication_db);
    var userDocId = "org.couchdb.user:"+userCtx.name;
    db.openDoc(userDocId, {
        success : function(userDoc) {
            var profile = userDoc["rabbithealth.profile"];
            if (profile) {
                $("input[name=first_name]").val(profile.first_name);
                $("input[name=family_name]").val(profile.family_name);
                $("input[name=street1]").val(profile.street1);
                $("input[name=street2]").val(profile.street2);
                $("input[name=city]").val(profile.city);
                $("input[name=state]").val(profile.state);
                $("input[name=postal_code]").val(profile.postal_code);
                $("input[name=email]").val(profile.email);
            }
        }
    });
}
