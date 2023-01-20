$(function () {


    $('#searchInput').on('change paste keyup', function () {

        console.log('search input a changé : ' + $(this).val());

        if ($(this).val() == '') {
            $('#jeux').html('');
        }
        /**
         * Si la value est > à 3 chars, on recherche
         */

        if ( $(this).val().length >= 3 ) {

            $.get(
                'http://localhost/MVC-course/api/jeux/search/' + $(this).val(),
                false,
                function (response) {

                    console.log(response);

                    $('#jeux').html('');

                    response.forEach(jeu => {

                        $('#jeux').append('<div class="card"><div class="card-body">' + jeu.jeux_id + ': ' + jeu.jeux_nom + '</div></div>');

                    });
                },
                'json'
            );
        }

    });

    



});



/*
$(function() {
    $.get(
        'http://localhost/videoclub/api/movies/',
        false,
        function (res) {
            $('#films').html('');
            res.forEach(movie => {
                    var card =
                        '<div class="card">' +
                        '<div class="card-body">' +
                        movie.id + ': ' + movie.title +
                        '</div>' +
                        '</div>';
                    $('#films').append(card);
            })
        },
        'json'
    );
    $.get(
        'http://localhost/videoclub/api/categories/',
        false,
        function(res) {
            res.forEach(category => {
                console.log(category);
                $('#selectCategories').append('<option value="'+ category.id +'">'+ category.title +'</option>');
            });
        },
        'json'
    );
    $('#selectCategories').on('change', function() {
        console.log('la categorie a été changée');
        $.get(
            'http://localhost/videoclub/api/movies/category/'+$(this).val(),
            false,
            function(res) {
                $('#films').html('');
                res.forEach(movie => {
                    var card =
                        '<div class="card">' +
                        '<div class="card-body">' +
                        movie.id + ': ' + movie.title +
                        '</div>' +
                        '</div>';
                    $('#films').append(card);
                });
            },
            'json'
        );
    });
    $('#todos-load-btn').on('click', function () {
        console.log('Le bouton a été cliqué');
        $.get(
            'http://localhost/videoclub/api/categories',
            false,
            function(res) {
                res.forEach(r => {
                    console.log(res)
                    var card =
                        '<div class="card">' +
                        '<div class="card-body">' +
                        r.id + ': ' + r.title +
                        '</div>' +
                        '</div>';
                    $('#todolist').append(card);
                });
            },
            'json'
        );
    });
}) */