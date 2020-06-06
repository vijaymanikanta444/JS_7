    // console.log('hello world');
    // console.error('error');
    // console.warn('error');


// string, numbers, boolean, null, undefined

        // const name = 'john';
        // const age = 30;
        // const rating = 4.5;
        // const isCool = true;
        // const x = null;
        // const y = undefined;
        // let z;


        // console.log(typeof name);
        // console.log(typeof age);
        // console.log(typeof rating);
        // console.log(typeof isCool);
        // console.log(typeof x);
        // console.log(typeof y);
        // console.log(typeof z);


// concatenation
        //  console.log('my name is ' + name + ' and i am ' + age); 

        // const hello =  `my name is ${name} and i am ${age} years old`;

        // console.log(hello)

        // const s = 'hello World'

        // console.log(s.length);
        // console.log(s.toUpperCase());
        // console.log(s.toLowerCase());
        // console.log(s.substring(0,5));
        // console.log(s.substring(0,5).toUpperCase());
        // console.log(s.split(' '));

//arrays

        // const numbers = new Array (1,2,3,4,5);

        // console.log(numbers);

        // const fruits = ['apples', 'oranges', 'pears'];

        // fruits[3] = 'grapes';

        // fruits.push('mangoes'); /* assign to last value */

        // fruits.unshift('pine'); /* assign to first value*/

        // fruits.pop(); /* deletes last value */

        // console.log(fruits[3]);

        // console.log(Array.isArray(fruits));

        // console.log(Array.isArray('fruits'));

        // console.log(fruits.indexOf('oranges'));

        // console.log(fruits);

// objects

        // const person = {
        //     firstName: 'vijay',
        //     lastName: 'manikanta',
        //     age: 23,
        //     hobbies : ['sports', 'movies','photography'],
        //     address: {
        //         street: 'green park road',
        //         city: 'anakapalli',
        //         state: 'AP'
        //     }
        // }


        // console.log(person);

        // console.log(person.firstName, person.lastName);

        // console.log(person.hobbies[1]);

        // const {firstName, lastName} = person; /* pulling the value */

        // person.email = 'vijayakp444@gmail.com'; /* assigning value to object */


        // const {firstName, lastName, address: {city}} = person;

        // console.log(firstName);

        // console.log(city);

        // console.log(person);


//Array of todos

        // const todos = [
        //     {
        //         id: 1,
        //         text: 'Take Out Trash',
        //         iscompleted: true
        //     },
        //     {
        //         id: 2,
        //         text: 'meeting with boss',
        //         iscompleted: true
        //     },
        //     {
        //         id: 3,
        //         text: 'doctor appointment',
        //         iscompleted: false
        //     },
        // ];

        // console.log(todos);
        // console.log(todos[1]);
        // console.log(todos[1].text);
        // console.log(todos[1].text.split(' '));

        // const todoJSON = JSON.stringify(todos);
        // console.log(todoJSON);



        //for
        // for(let i = 0; i < 10; i++){
        //     console.log(i);
        //     console.log(`for loop number : ${i}`);
        //     console.log(i, `for loop number : ${i}`);
        // }


        //while
        //  let i = 0;
        //  while(i < 10) {
        //     console.log(`while loop number : ${i}`);
        //     i++;
        //  }



        // for(let i = 0; i < todos.length; i++){
        //         console.log(todos[i].text);
        //     }


        // for(todo of todos){
        //     console.log(todo.text);
        // }


// foreach

        // todos.forEach(function(todo){
        //     console.log(todo.id);
        //     console.log(todo.text);
        //     console.log(todo.iscompleted);
        // });

//map


        // const todoText = todos.map(function(todo){
        //     return todo.text
        //     });


        // console.log(todoText);

//filter
        // const todoCompleted = todos.filter(function(todo){
        //         return todo.iscompleted === true;
        //         }).map(function(todo){
        //             return todo.text;
        //         });


        //     console.log(todoCompleted);

//conditions

        // const x = '10';

        // if (x == 10){  /* doesnot veriffy data type */
        //     console.log('x is 10');
        // }else if( x > 10){
        //   console.log('x is greater than 10');
        // } else if( x < 10) {
        //     console.log('x is less than 10');
        // } else {
        //     console.log('x is not 10');
        // }



        // if (x === 10){  /* verifies data type too */
        //     console.log('x is 10');
        // }


        // const x = 4;
        // const y = 10;

        // if(x > 5 || y > 10 ) {
        //     console.log('x is greater than 5 or y is greater than 10');
        // } else {
        //     console.log(' x is not greater than 5 and y is not greater than 10');
        // };


        // const x = 6;
        // const y = 11;

        // if(x > 5 && y > 10 ) {
        //     console.log('x is greater than 5 and y is greater than 10');
        // };

//ternary operator

        // const x = 10;
        // /* xis greaterthan 10  then 'red' else 'blue'*/
        // const color = x > 10 ? 'red' : 'blue';

        // console.log(color);

// switch

        // const x = 2;
        // /* xis greaterthan 10  then 'red' else 'blue'*/
        // const color = x > 10 ? 'red' : 'blue';

        // switch(color){
        //     case'red' :
        //     console.log('color is red'); 
        //     break;
        //     case'blue' :
        //     console.log('color is blue'); 
        //     break;
        //     default :
        //     console.log('color is not red or blue'); 
        //     break;
        // }


// function

        // function addnums(num1=10, num2=20){
        //     console.log(num1 + num2);
        // }

        //  addnums(2,3);


        // function addnums(num1=10, num2=20){
        //     return num1 + num2;
        // }

        //  console.log(addnums(2,3));


        // const  addnums = (num1=10, num2=20) => console.log(num1 + num2);
        // addnums(2,3);

        // const  addnums = (num1=10, num2=20) => num1 + num2;
        // console.log(addnums(2,6));

// constructor function

        // function Person(firstName, lastName, dob) {
        //     this.firstName = firstName;
        //     this.lastName = lastName;
        //     this.dob = new Date(dob);
        // }

        // Person.prototype.getBirthYear = function(){
        //     return this.dob.getFullYear();
        // }

        // Person.prototype.getFullName = function(){
        //     return `${this.firstName} ${this.lastName}`;
        // } 


// Class Function
        // class Person {
        //     constructor (firstName, lastName, dob) {
        //         this.firstName = firstName;
        //         this.lastName = lastName;
        //         this.dob = new Date(dob);  
        //     }

        //     getBirthYear() {
        //         return this.dob.getFullYear();
        //     }

        //     getFullName() {
        //         return `${this.firstName} ${this.lastName}`;
        //     }
        // }

//instantiate object
        // const person1 = new Person('harish', 'saragadam', '5-5-1991');
        // const person2 = new Person('vijay', 'manikanta', '03-31-1998');


        // console.log(person2);
        // console.log(person2.dob.getFullYear());
        // console.log(person2.getBirthYear()); 
        // console.log(person2.getFullName());      



















/*multi 
        line
        comments*/