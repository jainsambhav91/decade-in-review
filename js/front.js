$(function () {

    $(document).scroll(function () {

        // console.log(document.getElementById("_48").offsetTop);
        console.log($("#result").offset().top);

        // console.log($('.row').scrollTop());
        // console.log($('#_48').contentWindow.pageYOffset);

        if ($("#_48").scrollTop < 80) {
            //change yes to no
            // document.getElementById("yearP").innerHTML = '2011';
            // $('#yearP').innerHTML = '2011'
            $('#yearP').html('2011');
        }
    });

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

});



d3.csv("/data/topOne_final_links.csv").then(function (data) {
    var frame = d3.select('#result');

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    for (let i = 0; i < data.length; i++) {
        if (i % 4 == 0) {
            $("#result")
                .append('<div class="row" id="_' + i + '"><div class="col-2  months">' + data[i].month + ", " + data[i].year + '</div><div class="col-2 img-div art-div text-center"><div class="img-box"><img class="ppl-image" src="' + data[i].img + '" data-toggle="tooltip" data-html="true"  title="<b>' + data[i].name2 + '</b><hr>' + data[i].desc + '"></div></div><div class="col-2 img-div  text-center"><div class="img-box" data-toggle="tooltip" data-html="true"  title="<b>' + data[i + 1].name2 + '</b><hr>' + data[i + 1].desc + '"><img class="ppl-image" src="' + data[i + 1].img + '"></div></div><div class="col-2  img-div text-center"><div class="img-box"><img class="ppl-image" src="' + data[i + 2].img + '" data-toggle="tooltip" data-html="true" title="<b>' + data[i + 2].name2 + '</b><hr>' + data[i + 2].desc + '"></div></div><div class="col-2 img-div world-div text-center"><div class="img-box"><img class="ppl-image" src="' + data[i + 3].img + '" data-toggle="tooltip" data-html="true" title="<b>' + data[i + 3].name2 + '</b><hr>' + data[i + 3].desc + '"></div></div><div class="col-2 event"><p class="eventP">' + data[i + 3].event + '</p></div></div>');
        }

    }

    $(".months").each(function () {
        // this.innerHTML = this.innerHTML.substring(0, 3).toUpperCase()
    });

    $(".eventP").each(function () {
        if (!this.innerHTML) {
            this.remove();
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