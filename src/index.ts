
//PICK in typescript
//Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).
// Imagine you have a User model with several properties, but for a user profile display, you only need a subset of these properties.
//It can be used in both type and interface

/*interface User {
    id: string ;
    name : string ,
    age : number,
    email: string,
    password : string,
}
 type User1 = {
    id: string ;
    name : string ,
    age : number,
    email: string,
    password : string,
}
 type UpdateProps = Pick<User , 'name'|'age'|'email'>
type UpdateProps1 = Pick<User1 , 'name'|'age'|'email'>

function updateUser(updatedProps:UpdateProps){
     //hit the database to update the user properties

}*/
//--------------------------------------------------------------------------------------//
/*Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.

Specifically useful when you want to do updates*/

/*
interface User {
    id: string ;
    name : string ,
    age : number,
    email: string,
    password : string,
}

type UpdateProps = Pick<User , 'name'|'age'|'email'>

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps:UpdatePropsOptional){
    //hit the database to update the user properties

}

updateUser({
    name:"shatadal"
})
*/

//-------------------------------------------------------------------------------------//
//READONLY
//When you have a configuration object that should not be altered after initialization,
// making it Readonly ensures its properties cannot be changed.
// This is compile time checking, not runtime (unlike const)
/*interface Config{
    readonly endpoint:string ,
    readonly apikey : string

}

const config:Readonly<Config> ={
    endpoint : "",
    apikey : "fsfsf"
}*/

/*config.apikey = "newkey"; //error due to usage of readonly property above */

//-------------------------------------------------------------------------------------------------//
//Record
// Record let’s you give a cleaner type to objects

/*interface User{//// Define a type 'Users' using the 'Record' utility type, which creates
    // an object type with string keys and 'User' as the value type
    id:string ,
    name :string
}

type Users = Record<string,User>;
//// Declare a constant 'users' of type 'Users', which is an object where each key is a string and each value is a 'User' object
const users:Users = {
    'abc123':{id:"fasda",name : "ereerewrw"},//// First key-value pair: key is 'abc123', value is a User object with id "fasda" and name "ereerewrw"
    'xyz789' : {id:"ihdoshdf",name:"jbkuisdusad"}

}

console.log(users['abc123']);*/
//=-------------------------------------------------------------------//
/*interface User {
    id: string;
    name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, User>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }*/
//--------------------------------------------------------------------------------------------------//
//EXCLUDE
// In a function that can accept several types of inputs but you want to exclude specific types from being passed to it.
type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK

//------------------------------------------------------//









