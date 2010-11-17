function(cb, e, params) {
    var widget = $(this), app = $$(widget).app, docid = params && params.id, docrev = params && params.rev;
    app.db.openDoc(docid, {
        success : function(doc) {
            var data = {};
            data._id = docid;
            data._rev = docrev;
            data.attachments = [];
            for (var a in doc._attachments) {
                data.attachments.push({
                    uri: [app.db.uri, $.couch.encodeDocId(docid), a].join('/')
                });
            }
            cb(data);
        }
    });    
}