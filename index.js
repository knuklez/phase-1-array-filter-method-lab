//const matchingDriver = (name, string) => drivers.filter

/*function findMatching(drivers, name){
    for(const driversName of drivers){
        if(driversName === name)
        return name}
    
}*/

/*function findMatching(collection, name){
  for(const driver of collection){
      if(collection.name === name){
        return name
        //console.log(findMatching)
        //return name
  }
}
}*/
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

/*const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function findMatching(collection, name){
    for(const driver of collection){
        if(driver.name === name){return name
    }
 }
}

function findMatching(drivers, name){
    for(const driversName of drivers){
        if(driversName === name)
        return name}
    
}
const findMatching = drivers.filter((driver, name) => {
  return driver.name === name})
*/
/*const findMatching = drivers.filter((driver, name) => {
  if (driver.name === name)
  return name;
});/*
*/
/*const findMatching = drivers.filter((driver, name) => {
  if (driver.name === name)
  return name;
});
 */

/*const findMatching = drivers.filter((driver, name) => {
  if (driver[0] === name)
  return name;
});

*/

/*function findMatching(drivers, name){
  
  return drivers.filter(driver => driver === name)

}
*/
//case sensitivity not established

/*function findMatching(drivers, name){
  
  return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())

}
*/
//string1.toUpperCase() === string2.toUpperCase()


/*const findMatching = (drivers, name) =>  {
  return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
}
*/
//const findMatching = (drivers, name) => {return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())}

const findMatching = (drivers, name) => drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())

//const fuzzyMatch = (drivers, name) => {return drivers.filter(driver => driver.startsWith() === name)}

//const fuzzyMatch = (drivers, name) => drivers.filter(driver => driver.startsWith() === name)

const fuzzyMatch = (drivers, name) => drivers.filter(driver => driver.startsWith(name[0]))

//const matchName = (drivers, name) => drivers.filter(driver => drivers.name === name)

const matchName = (drivers, name) => drivers.filter(driver => driver.name === name)


