function(data) {
    return {
        rabbits : data.rows.map(function(r) {
            var out = r.value || {};
            out.id = r.id;
            out.gender = (r.value.gender && r.value.gender == "m") ? "male" : "female";

            // add first image attachment as thumbnail; TODO improve!
            for (var att in r.value._attachments) {
                out.thumbnail = '/healthdb/' + r.id + '/' + att;
                break;
            }
            return out;
        })
    }
}