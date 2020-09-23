/*

-	In ES or ES2017, something called Async/Await was introduced to javascript language in order to make it a lot easier for us developers to consume promise.
-	And to be clear Async/await was designed for us to consume promises and not to produce them.
-	Asynchronous function one that basically keeps running in the background,
-	This Async function then return a promise but more on that bit later.
-	Inside Async function we can have one or more Await expressions.
-	It allow us to consume promises but without all the callbacks that we have with the call back and to some degree, also in promises with the then and catch methods
* */

const getIDs = new Promise((resolve, reject)=> {

    setTimeout(()=>{
        resolve([532,883,432,974]);
    },1500);
});

const getRecipe = recID =>{
    return new Promise((resolve, reject)=>{
        setTimeout(ID=>{
            const recipe = {title: 'Fresh tomato pasta', publisher:'Krushankant'};
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID);
    });
}

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe ={title: 'Italian Pizza', publisher: 'Krushankant'};
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    });
};


// Using Async and Await to consume promises.

async function getRecipesAW(){
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const related = await getRelated('Krushankant Patel')
    console.log(related);

    return recipe;
}
getRecipesAW().then(result => console.log (`${result} is the best ever!`));

