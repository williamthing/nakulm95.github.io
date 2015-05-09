(function() {
    $(document).ready(function() {
        contentLoad();
    });

   function contentLoad() {
        loadContent(function(pages) {
            console.log(pages);
        });
    }

    function loadContent(callback) {
        var request = $.ajax({
            url: '/?test=',
            data: {query: 'SELECT * FROM forum' },
            type: 'GET'
        });

        request.done(function(res, error) {
            if(!res || res === null || res.status === 'failure') {
                callback({error: 'bad request'});
            } else {
                callback(res);
            }
        });

        request.fail(function(data, error) {
            callback({error: 'db down'});
        });
    }
})();
