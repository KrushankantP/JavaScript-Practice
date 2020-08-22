
// 1. You.toggleClass()
//use a jQuery class selector and featuredArticle variable to toggle the 'featured' class!
var featuredArticle;

featuredArticle = $('.featured');
featuredArticle.toggleClass('featured');

// 2. Toggling Class
// remove the class 'featured' from Article #2 and add it to Article #3!
// You must use jQuery's toggleClass method!

var article2, article3;


article2 = $('.featured');
article3 = article2.next();
article2.toggleClass('featured');
article3.toggleClass('featured');

// 3. Changing Attributes:

// set the href of the <a> in the first nav item to "#1".
// You must use jQuery's attr() method!

var navList;

navList = $('.nav-list');
firstItem = navList.children().first(); // selected first children of navList and stored in 'firstItem'
link = firstItem.find('a'); // in firstItem  finded 'a' tag and stored in 'link' variable;
link.attr('href', '#1'); // added HTML Attribute called href to the 'a' tag.

/* 4. Modifiying CSS
change the font-size of all the article-items to 20px!
You must use jQuery's css() method
*/
var articleItems;

articleItems = $('.article-item');
articleItems.css('font-size', '20px');

/*
5. Collecting Values
use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.

* */
$('#input').on('change', function() {
    var val, h1;
    val = $('#input').val();
    h1= $('.articles').children('h1');
    h1.text(val);
});

// 6. Removing DOM Elements
// Remove the <ul> from the first article item
var articleItems, ul;

articleItems =$('.article-item');
ul = articleItems.find('ul');
ul.remove();


// 7. iterating with each Quiz
/*use jQuery's each() method to iterate through the <p>s,
calculate the length of each one, and add each length to the end of each <p>.

Also, make sure you don't change the text inside each <p> except to add the length, otherwise your
length numbers won't be correct!
*/

function numberAdder() {
 var text, number;
 text =$(this).text();
 number =text.length;
 $(this).text(text+" " +number);

}

$('p').each(numberAdder());



