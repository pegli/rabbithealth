function(doc) {
    if (doc.t_ == "rabbit" && doc.guardian) {
        emit([doc.guardian, doc.name], doc);
    }
}