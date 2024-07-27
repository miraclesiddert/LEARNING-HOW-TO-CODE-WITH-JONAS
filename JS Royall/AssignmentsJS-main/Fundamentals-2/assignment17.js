'use strict';
//Basic Array Operations (Methods)

/*
1.Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at 
least 2 or 3 neighbours. Store the array into a variable called neighbours.

2. At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it 
to the end of the neighbours array.

3. Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.

4. If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central 
european country :D'.

5. Change the name of one of your neighbouring countries. To do that, find the index of the country in the 
neighbours array, and then use that index to change the array at that index position. For example, you can search 
for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
 */

const neighbours = ['Canada', 'Mexico', 'Russia'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if(!neighbours.includes['Utopia']){
    console.log('Probably not a central european country :D');
}

console.log(neighbours.indexOf('Mexico'));
neighbours[1] = 'Sweden';
console.log(neighbours);