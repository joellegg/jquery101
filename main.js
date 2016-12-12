console.log('hello, results.name.first');


$('h1').html('Hello, friendly friends')


//append
let foods = ['apple', 'bannana', 'carrot', 'coconut', 'turkey'];


for (let i = 0; i < foods.length; i++) {
    $('ul').append(`<li>${foods[i]}</li>`);
}

// <div class="foods"><ul>...</ul></div>
$('ul').wrap('<div class="foods"></div>');

$('input:text').val('Tomato');

$('input:submit').click(function() {
    console.log($('input:text').val())
})

// xmlhttprequest
$.getJSON('https://randomuser.me/api/?nat=us', function (data) {
    console.log(data);
    console.log(data.results[0].name.first, data.results[0].name.last);
    $('h1').first().html(data.results[0].name.first + " " + data.results[0].name.last);
});
