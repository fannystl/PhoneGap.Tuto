var HomeView = function (store) {
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('keyup', '.search-key', this.findByName);
    };

    this.render = function () {
        var html =
                "<div class='header'><h1>Home</h1></div>" +
                "<div class='search-view'>" +
                "<input class='search-key' type='search'/>" +
                "<ul class='employee-list'></ul>" +
                "</div>";
        this.el.html(html);
        return this;
    }

    this.findByName = function () {
        store.findByName($('.search-key').val(), function (employees) {
            $('.employee-list').empty();
            for (var i = 0; i < employees.length; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
        });
    }


    this.initialize();

}