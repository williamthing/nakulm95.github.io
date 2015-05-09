(function() {
    $(document).ready(function() {
        contentLoad();
        
    });

   function contentLoad() {
        loadContent(function(pages) {
          console.log(pages);
          for(int i = 0; i < pages.length; i++) {
            $("#yes" + i).innerHTML = parseInt($("#yes" + i).innerHTML) + 1;
            $("#no" + i).innerHTML = parseInt($("#no" + i).innerHTML) + 1;
          }
        });
    }

    function loadContent(callback) {
        var request = $.ajax({
            data: {query: 'SELECT * FROM topics' },
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
