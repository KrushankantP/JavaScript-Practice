//All promise object has 2 methods "Then" and "Catch"
// then() method allow us to add an event handler for the case that the promise is fulfilled.
//then() into than method we pass in a call back function which will always have as an argument the result of the successful promise.
//for example here we are passing callback function in then() that will fulfill the resolve and return the value.


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

getIDs
.then(IDs=>{
    console.log(IDs);
    return getRecipe(IDs[2]);
})
.then(recipe => {
    console.log(recipe);
    return getRelated('Krushankant Patel');
})

.then(recipe=>{
    console.log(recipe);
})
    .catch(error=>{
        console.log('Error!!');
    });
