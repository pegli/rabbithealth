function(data) {
    var markdown = $$("#content").app.require("vendor/couchapp/lib/markdown");
    return {
        articles : data.rows.map(function(r) {
            var article = (r.value) || {};
            article.author = r.value && r.value.author;
            article.title = r.value && r.value.title;
            article.text = markdown.encode(r.value && r.value.text);
            article.post_date = new Date(r.value.posted[0], r.value.posted[1], r.value.posted[2], r.value.posted[3], r.value.posted[4], 0);
            return article;
        })
    }
};