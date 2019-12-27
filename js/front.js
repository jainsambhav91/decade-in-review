$(function () {

    // ---------------------------------------------- //
    // Navbar
    // ---------------------------------------------- //

    $(document).scroll(function () {
        if ($(window).scrollTop() >= $('header').offset().top) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });

    // ---------------------------------------------- //
    // Scroll Spy
    // ---------------------------------------------- //

    $('body').scrollspy({
        target: '.navbar',
        offset: 80
    });

    // ---------------------------------------------- //
    // Preventing URL update on navigation link click
    // ---------------------------------------------- //

    $('.navbar-nav a, #scroll-down').bind('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    $(document).scroll(function () {

        if ($(window).scrollTop() < 2527) {
            document.getElementById("yearnum").innerHTML = '2010';
        } else if ($(window).scrollTop() < (2527 + 1 * 1850)) {
            // $('#yearnum').slideUp(200);
            document.getElementById("yearnum").innerHTML = '2011';
            // $('#yearnum').fadeIn(200);
        } else if ($(window).scrollTop() < (2527 + 2 * 1850)) {
            // $('#yearnum').slideUp(200);
            document.getElementById("yearnum").innerHTML = '2012';
            // $('#yearnum').fadeIn(200);
        } else if ($(window).scrollTop() < (2527 + 3 * 1850)) {
            // $('#yearnum').slideUp(200);
            document.getElementById("yearnum").innerHTML = '2013';
            // $('#yearnum').fadeIn(200);
        } else if ($(window).scrollTop() < (2527 + 4 * 1850)) {
            // $('#yearnum').slideUp(200);
            document.getElementById("yearnum").innerHTML = '2014';
            // $('#yearnum').fadeIn(200);
        } else if ($(window).scrollTop() < (2527 + 5 * 1850)) {
            // $('#yearnum').slideUp(200);
            document.getElementById("yearnum").innerHTML = '2015';
            // $('#yearnum').fadeIn(200);
        } else if ($(window).scrollTop() < (2527 + 6 * 1850)) {
            // $('#yearnum').slideUp(200);
            document.getElementById("yearnum").innerHTML = '2016';
            // $('#yearnum').fadeIn(200);
        } else if ($(window).scrollTop() < (2527 + 7 * 1850)) {
            // $('#yearnum').slideUp(200);
            document.getElementById("yearnum").innerHTML = '2017';
            // $('#yearnum').fadeIn(200);
        } else if ($(window).scrollTop() < (2527 + 8 * 1850)) {
            // $('#yearnum').slideUp(200);
            document.getElementById("yearnum").innerHTML = '2018';
            // $('#yearnum').fadeIn(200);
        } else if ($(window).scrollTop() < (2527 + 9 * 1850)) {
            // $('#yearnum').slideUp(200);
            document.getElementById("yearnum").innerHTML = '2019';
            // $('#yearnum').fadeIn(200);
        }

        console.log($(window).scrollTop());
        // console.log(document.getElementById("_48").offsetTop);
        // console.log($("#result").offset().top);

        // console.log($('.row').scrollTop());
        // console.log($('#_48').contentWindow.pageYOffset);
        // document.getElementById("yearP").innerHTML = '2011';
        if ($("#_48").scrollTop < 80) {
            //change yes to no
            document.getElementById("yearP").innerHTML = '2011';
            // $('#yearP').innerHTML = '2011'
            // $('#yearP').html('2011');
        }
    });

});

d3.csv("/data/topOne_final_links.csv").then(function (data) {
    var frame = d3.select('#result');

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    for (let i = 0; i < data.length; i++) {
        if (i % 4 == 0) {
            $("#result")
                .append('<div class="row overflow-hidden" id="_' + i + '"><div class="col-2  months">' + data[i].month + data[i].year + '</div><div class="col-2 img-div art-div text-center"><div class="img-box"><img class="ppl-image" src="' + data[i].img + '" data-toggle="tooltip" data-html="true"  title="<b>' + data[i].name2 + '</b><hr>' + data[i].desc + '"></div></div><div class="col-2 img-div tech-div text-center"><div class="img-box" data-toggle="tooltip" data-html="true"  title="<b>' + data[i + 1].name2 + '</b><hr>' + data[i + 1].desc + '"><img class="ppl-image" src="' + data[i + 1].img + '"></div></div><div class="col-2  img-div oped-div text-center"><div class="img-box"><img class="ppl-image" src="' + data[i + 2].img + '" data-toggle="tooltip" data-html="true" title="<b>' + data[i + 2].name2 + '</b><hr>' + data[i + 2].desc + '"></div></div><div class="col-2 img-div world-div text-center"><div class="img-box"><img class="ppl-image" src="' + data[i + 3].img + '" data-toggle="tooltip" data-html="true" title="<b>' + data[i + 3].name2 + '</b><hr>' + data[i + 3].desc + '"></div></div><div class="col-2 event"><p class="eventP">' + data[i + 3].event + '</p></div></div>');
        }

    }

    $(".months").each(function () {
        var yr = this.innerHTML.slice(-2);
        var mn = this.innerHTML.substring(0, 3).toUpperCase()
        this.innerHTML = mn + " '" + yr + ' <i class="fa fa-angle-double-right"></i>';
    });

    $(".eventP").each(function () {
        if (!this.innerHTML) {
            this.parentElement.remove();
        }
    })
})

// ---------------------------------------------- //
// Get image and description from Wikipedia API
// ---------------------------------------------- //


// var apiFirstHalf = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages%7Cpageterms&generator=prefixsearch&redirects=1&formatversion=2&piprop=thumbnail&pithumbsize=250&pilimit=20&wbptterms=description&gpssearch="

// var apiSecondHalf = "&gpslimit=1"

// let api_requests = [];

// d3.csv("/data/topOne_final.csv").then(function (data) {

//     for (var i = 0; i < data.length; i++) {
//         // console.log(data[i]);
//         var name = data[i].name2.trim().replace(" ", "+").replace(" ", "+").replace(" ", "+")
//         data[i].api_url = apiFirstHalf + name + apiSecondHalf;
//         api_requests.push(findImage(data[i].api_url));
//     }

//     console.log(api_requests);
//     Promise.all(api_requests)
//         .then((results) => {
//             console.log(results);
//             for (let i = 0; i < results.length; i++) {
//                 // console.log(results);

//                 if (i % 4 == 0) {
//                     $("#result")
//                         .append('<div class="row image-row" id="' + i + '"><div class="col-2 text-center"></div><div class="col-2 text-center"><img src="' + results[i].img + '" height="200"></div><div class="col-2 text-center"><img src="' + results[i + 1].img + '" height="200"></div><div class="col-2 text-center"><img src="' + results[i + 2].img + '" height="200"></div><div class="col-2 text-center"><img src="' + results[i + 3].img + '" height="200"></div></div>');
//                 }
//             }
//         })
//         .catch((err) => console.log(err))

//     async function findImage(url) {
//         let response = await fetch(url);
//         let json = await response.json();
//         let imageURL = null;
//         let description = null;
//         try {
//             imageURL = json.query.pages[0].thumbnail.source;
//             description = json.query.pages[0].terms.description[0]
//             // console.log(imageURL)
//         } catch (error) {
//             console.log('no image found for ' + url)
//         }
//         return ({
//             img: imageURL,
//             desc: description
//         });
//     }
// });