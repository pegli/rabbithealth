function() {
    var form = $(this),
    f = form.serializeObject(),
    userCtx = $$("#account").userCtx,
    username = userCtx.name;
    
    $("ul.errors > li").remove();
    
    var hasError = false;
    if (f.first_name.length < 1) {
        hasError = true;
        $("ul.errors").append("<li>First name is required</li>");
    }
    if (f.email.length < 1) {
        hasError = true;
        $("ul.errors").append("<li>Email address is required</li>");
    }
    if (f.postal_code.length < 1) {
        hasError = true;
        $("ul.errors").append("<li>Postal code is required</li>");
    }
    if (hasError) return false;
    
    
    // store the user profile on the user account document
    $.couch.userDb(function(db) {
        var userDocId = "org.couchdb.user:"+username;
        db.openDoc(userDocId, {
            success : function(userDoc) {
                userDoc["rabbithealth.profile"] = f;
                db.saveDoc(userDoc, {
                    success : function() {
                        form.trigger("profile");
                    }
                });
            },
            failure : function() {
                // TODO error messaging?
            }
        });
    });
    return false;
}