(function() {
    $(document).ready(function() {
        contentLoad();
    });

    function contentLoad() {
      console.log("gg");
      dbQuery('SELECT * FROM forum', loadContent);
    }

    function loadContent() {
      console.log("g1");
    }
})();
