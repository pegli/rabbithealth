function(cb, e, params) {
    var form = $(this), app = $$(form).app, docid = params && params.id;
    app.db.openDoc(docid, {
        success : function(doc) {
        cb(doc);
    },
    error : function(code) {
        if (code == 404) {
            cb({});
        }
    }
    });
};
