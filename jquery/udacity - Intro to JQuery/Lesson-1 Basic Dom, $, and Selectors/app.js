// 1. Select by Tags :
//use a jQuery tag selector to grab all of the <li>s on the page!

var listElements;

listElements = $('li');

console.log(listElements);

// 2. Select By Class :
// use a jQuery class selector to grab all of the elements of class 'article-item' on the page!

var articleItems;

articleItems = $('.article-item');

console.log(articleItems);

//3. Select by IDs :
//use a jQuery class selector to grab all the element with id 'nav' on the page!

var nav;
nav = $('#nav');
console.log(nav);


/*4. Filters :
use articleList and DOM navigation methods to collect articleList's
sibling <h1> (var h1), children (var kids), and parent <div>s (var parents).

You must use articleList to navigate to the element(s)!
*/

var articleList, h1, kids, parents;

articleList = $('.article-list');

h1 =articleList.siblings('h1');

kids = articleList.find('*');

parents = articleList.parents('div');

console.log(h1, kids, parents);

