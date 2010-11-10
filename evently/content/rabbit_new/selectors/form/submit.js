function() {
  var form = $(this), f = form.serializeObject();

  // auto fields
  f.created_ts = Math.round(new Date().getTime() / 1000);
  
  // parse out date objects
  var birth = new Date(f.birth_date);
  f.birth_date = [birth.getFullYear(), birth.getMonth(), birth.getDate()];
  
  $$(this).app.db.saveDoc(f, {
    success : function() {
      $("#navigation").trigger("rabbits");
    }
  });

  return false;
};
