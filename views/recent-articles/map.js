function(doc) {
  if (doc.posted) {
    emit(doc.posted, doc);
  }
};