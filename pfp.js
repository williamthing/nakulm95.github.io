(function() {
    $(document).ready(function() {
        contentLoad();
        
    });

   function contentLoad() {
        loadContent(function(pages) {
          console.log(pages);
          for(var i = 0; i < pages.length; i++) {
            console.log(pages[i].yes);
            $("#yes" + i).innerHTML = pages[i].yes;
            $("#no" + i).innerHTML = pages[i].no;
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
