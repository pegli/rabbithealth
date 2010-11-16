function() {
    var form = $(this),
      f = form.serializeObject(),
      db = $$(this).app.db,
      dates = $$(this).app.require("lib/dates");

    // TODO validation!
    
    // parse out date objects
    f.birth_date = dates.dateToArray(new Date(f.birth_date));
    
    // fixup array fields
    if (!(f.markings instanceof Array)) {
        f.markings = [ f.markings ];
    }

    // remove empty rev and id
    if (!f._id || 0 === f._id.length) delete f._id;
    if (!f._rev || 0 === f._rev.length) delete f._rev;
    
    // auto fields
    f.last_update = Math.round(new Date().getTime() / 1000);

    db.saveDoc(f, {
        success : function() {
            document.location.href = "#/rabbits";
        }
    });

    return false;
};
