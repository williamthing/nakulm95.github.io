(function() {
    $(document).ready(function() {
        contentLoad();
    });

    function contentLoad() {
      console.log("gg");
      dbQuery('select * from forum', loadContent);
    }

    function loadContent() {
      console.log("g1");
    }
})();
