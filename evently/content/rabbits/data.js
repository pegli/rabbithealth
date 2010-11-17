function(data) {
    return {
        rabbits : data.rows.map(function(r) {
            var out = r.value || {};
            out._id = r.value._id;
            out._rev = r.value._rev;
            out.gender = (r.value.gender && r.value.gender == "m") ? "male" : "female";

            // add first image attachment as thumbnail; TODO improve!
            for (var att in r.value._attachments) {
                out.thumbnail = '/healthdb/' + r.value._id + '/' + att;
                break;
            }
            return out;
        })
    }
}