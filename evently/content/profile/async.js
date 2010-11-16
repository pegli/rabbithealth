function(cb, e, params) {
    var userCtx = $$("#account").userCtx;
    var info = $$("#account").info;

    var db = $.couch.db(info.authentication_db);
    var userDocId = "org.couchdb.user:"+userCtx.name;
    db.openDoc(userDocId, {
        success : function(userDoc) {
            var profile = userDoc["rabbithealth.profile"];
            cb(profile);
        }
    });
}
