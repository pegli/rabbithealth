function(e) {
    var attname = $(e.target).data("attname"),
        params = e.data.args[0],
        app = $$(this).app;
    
    if (confirm('Delete this photo?')) {
        app.db.openDoc(params.id, {
            success : function(doc) {
                $.ajax({
                    type : "DELETE",
                    url : app.db.uri + $.couch.encodeDocId(doc._id) + '/' + attname + '?rev='+ doc._rev,
                    success : function(r) {
                        document.location.href = '#/rabbit/photos/' + doc._id + '/' + doc._rev;
                    }
                });
            }
        });
    }
    return false;
}