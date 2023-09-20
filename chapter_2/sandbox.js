// LESSON-1 Variables

    console.log(1);  // shows '1' value in browser console
    // alert('Hello World!')  // shows alert message in browser window

    let age = 25;  // Declare variables. Use 'let' for changeable variables.
    let year = 2019;
    console.log("Your age is: " + age, '\nThe year is: ' + year);

    age = 30  // Assign the new value to a variable
    console.log("Now your age is:", age)

    const points = 100;  // 'const' is NOT changeable

    // points = 50; 
    // This will get error message. Overriding CONST is NOT allowed.

    console.log('Points:', points);

    var score = 75;
    console.log('Score:', score);


// LESSON-2 Strings

    console.log('hello, world');

    let email = 'mario@thenetninja.co.uk';
    console.log('e-mail:', email);

    // string concatenation
    let firstName = 'Brandon';
    let lastName = 'Sanderson';

    let fullName = firstName + ' ' + lastName;
    console.log(fullName);

    // getting characters
    console.log('Character:', fullName[0]);

    // string length
    console.log('Length:', fullName.length);

    // string methods
    console.log('toUpperCase() method:', fullName.toUpperCase());
    let result = fullName.toLowerCase();
    console.log('toLowerCase() method:', result + ';', 'Initial variable is not altered:', fullName);

    let index = email.indexOf('@');
    console.log('indexOf() method:', index);


// LESSON-3 Common string methods

    let email3 = 'mario@thenetninja.co.uk';
    let result3_1 = email3.lastIndexOf('n');  // method shows position of the last 'n' character
    let result3_2 = email3.slice(0,5);  // method returns 'mario' (index 0 to 5)
    let result3_3 = email3.substr(4,10);  // method returns 10 characters from position 4 (index 4 to 14)
    let result3_4 = email3.replace('n', 'w');  // method replaces the first occurrence 
    console.log(result3_1 + '\n' + result3_2 + '\n' + result3_3 + '\n' + result3_4);


// LESSON-4 Numbers

    let radius = 10;
    const pi = 3.14;
    console.log(radius, pi);

    // math operators +, -, *, /, **(power of), %(remainder)
    console.log(10 / 2);

    let result4 = radius % 3;  // reminder of 10 divided by 3
    console.log(result4)

    result4 = pi * radius**2
    console.log(result4)

    // order of operation - B (brackets) I (indices **) D (division) M (multiplication) A (addition) S (subtraction) 

    // B I D M A S
    result4 = 5 * (10 - 3) ** 2
    console.log(result4)

    let likes = 10;
    likes += 10; // increase by + any value
    likes += 1;
    console.log(likes);

    likes++; // increase by +1 in JS
    console.log(likes);

    likes--; // decrease by -1 in JS
    console.log(likes);

    likes *= 2;
    console.log(likes);

    likes /= 2;
    console.log(likes);

    // NaN - not a number. When trying to do calculation that doesn't result in a number.
    console.log(5 / 'hello');

    result4 = 'the blog has ' + likes + ' likes';
    console.log(result4);


// LESSON-5 String concatenation

    // template strings
    const title = 'Best reads of 2019';
    const author = 'Mario';
    const likes5 = 30;

    // concatenation way
    let result5 = 'The blog called ' + title + ' by ' + author + ' has ' + likes5 + ' likes';
    console.log(result5);

    // template string way (template literal)
    result5 = `The blog called ${title} by ${author} has ${likes5} likes`;  // `` backticks
    console.log(result5);

    // creating html template
    let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes5} likes</span>
    `;
    console.log(html);


// LESSON-6 Arrays

    let ninjas = ['shaun', 'ryu', 'chun-li'];
    console.log(ninjas);
    console.log(ninjas[1]);

    ninjas[1] = 'ken';
    console.log(ninjas[1]);

    let ages = [20, 25, 30, 35];
    console.log(ages[2]); // Output is the third element

    let random = ['shaun', 'crystal', 30, 20];
    console.log(random);

    console.log(ninjas.length);  // Output the number of elements inside of array

    // Array methods
    let result6 = ninjas.join(', ');
    console.log(result6);

    result6 = ninjas.indexOf('chun-li');
    console.log(result6);

    result6 = ninjas.concat(['ken', 'crystal']);
    console.log(result6);

    result6 = ninjas.push('ken');  // PUSH method !!ALTERS!! original value. It's called a destructive method for changing the value.
    console.log(result6);  // Add element to the array and return the length of the array after the element is added.
    console.log(ninjas);  // Return the number of elements and the list of elements

    result6 = ninjas.pop();  // POP is also a destructive method, it takes off the last element.
    console.log(result6);  // Return the value of popped element
    console.log(ninjas);  // Return the number of elements and the list of elements


// LESSON-7 Null and Undefined dta types 

    // 'Null' is intentional lack of value, but 'Undefined' is not.

    let age7;  // Value is not assigned
    console.log(age7, age7 + 3, `the age is ${age7}`);  
    
    // 1st argument 'age7' returns 'undefined';
    // 2nd arg. 'age7 + 3' returns 'NaN' (not a number);
    // 3rd arg. returns 'the age is undefined'.

    age7 = null;  // Intentionally assigned 'null'
    console.log(age7, age7 + 3, `the age is ${age7}`);
    
    // 1st argument 'age7' returns 'null';
    // 2nd arg. returns '3'. Null takes 0 value in formula;
    // 3rd arg. returns 'the age is null'.


// LESSON-8 Booleans

    // booleans & comparisons
    console.log(true, false, "true", 'false');

    // methods can return booleans
    let email8 = 'luigi@thenetninja.co.uk';
    let names = ['mario', 'luigi', 'toad'];

    let result8 = email8.includes('@');  // Look if a certain character appears in a string. If it does, it returns True, otherwise False.
    console.log(result8);  // True

    result8 = email8.includes('!');
    console.log(result8);  // False

    result8 = names.includes('luigi');
    console.log(result8);  // True

    result8 = names.includes('oscar');
    console.log(result8);  // False

    // comparison operators
    let age8 = 25;
    console.log(age8 == 25);  // Check if ${age8} is equal to 25 and return True.
    console.log(age8 == 30);  // False
    console.log(age8 != 30);  // Check if ${age8} is not equal to 30 and return True
    console.log(age8 != 25);  // False
    console.log(age8 > 20);  // True
    console.log(age8 < 20);  // False
    console.log(age8 <= 25);  // True
    console.log(age8 >= 25);  // True

    // '==' is known as Abstract Equality or Loose Equality, as a value's type is not considered when we perform the comparison.

    let name = 'shaun';
    console.log(name == 'shaun');  // True
    console.log(name == 'Shaun');  // False
    console.log(name > 'crystal');  // True. 'shaun' stars with 's' which is greater in the alphabet than 'c'.
    console.log(name > 'Shaun');  // True. !!Lowercase letters age greater than the uppercase.
    console.log(name > 'tom');  // False. 'T' is subsequent letter in the alphabet and is greater than 's'.
    console.log(name > 'Tom');  // True. Any lowercase letter is greater than any subsequent uppercase letter.


// LESSON-9 Loose & Strict comparison

    let age9 = 25;

    // loose comparison (different types can still be equal)

    // JS is converting string to a number before it evaluates it

    console.log(age9 == 25);  // True
    console.log(age9 == '25');  // True
    console.log(age9 != 25);  // False
    console.log(age9 != '25');  // False

    // strict comparison (different types cannot be equal)

    // '===' is a strict comparison, we check is age the same value and type.

    console.log(age9 === 25);  // True
    console.log(age9 === '25');  // False
    console.log(age9 !== 25);  // False
    console.log(age9 !== '25');  // True


// LESSON-10 Type conversion (Number, String, Boolean)

    // Explicit type conversion is when we explicitly convert the types
    let score10 = '100';
    console.log(score10 + 1);  // Returns concatenation 1001

    score10 = Number(score10);  // String is converted to number
    console.log(score10 + 1);  // Returns  101
    console.log(typeof score10);  // Check variable type
    
    let result10 = Number('hello');
    console.log(result10);  // Returns NaN (Not a Number)

    result10 = String(50);
    console.log(result10, typeof result10);  // Returns 50 String

    result10 = Boolean(100);  // Positive, negative values are True, 0 is False
    console.log(result10, typeof result10);  // Returns True 'boolean'

    result10 = Boolean('100');  // Strings of all length are Truthy value
    console.log(result10, typeof result10);  // Returns True 'boolean'

    result10 = Boolean('');  // Strings of no length are Falsy value
    console.log(result10, typeof result10);  // Returns False 'boolean'

    // Implicit type conversion is what JS does behind the scene (like changing string to number in loose comparison, Lesson-9)


// CONTROL FLOW

// LESSON-11 For loops

    for(let i = 0; i < 5; i++){
        console.log('in loop:', i + 1);
    } 
    console.log('For loop finished');

    // 'i = 0' is an initialization variable which is a counter and it keeps track of how many times we cycle through the loop and how many times we run the code inside the loop.

    // 'i < 5' is condition going to evaluate True or False. If this condition is True the code inside the curly brackets will execute. 

    // 'i++' is a final expression and this is going to execute every time at the end of the code block. Every time we loop through the code we're going to add 1 to 'i'.

    // No ';' at the end for the loops

    const names11 = ['shaun', 'mario', 'luigi'];

    for(let i = 0; i < names11.length; i++){
        //console.log(names11[i]);
        let html = `<div>${names11[i]}</div>`;
        console.log(html);
    }
    console.log('For loop finished');


// LESSON-12 While loops

    let i_12 = 0;
    const names12 = ['shaun', 'mario', 'luigi']

    while(i_12 < 5){
        console.log('in loop:', i_12 + 1);
        i_12++;
    } 
    console.log('While loop finished');

    i_12 = 0;
    while(i_12 < names12.length){
        console.log(names12[i_12]);
        i_12++;
    }
    console.log('While loop finished');

    i_12 = 0;
    while(i_12 < names12.length){
        let html = `<div>${names12[i_12]}</div>`;
        i_12++;
        console.log(html);
    }
    console.log('While loop finished');

    // Do while loop is an extension to while loop. It allows to run code at least once even if the while condition is not met.

    i_12 = 5;

    do{
        console.log('val of i is:', i_12);
        i_12++;
    } while(i_12 < 5);

    console.log('Do while loop finished');


// LESSON-13 Conditional statements

    // If statements
    const age_13 = 25;

    if(age_13 > 20){
        console.log('You are over 20 years old');
    }
    
    const ninjas_13 = ['shaun', 'ryu', 'chun-li', 'yoshi'];

    if(ninjas_13.length > 3){
        console.log('Thats\'s a lot of ninjas');
    }

    // Else statements
    let password = 'p@ssword';

    if(password.length >= 12){
        console.log('That password is mighty long!');
    } else if(password.length >= 8){
        console.log('That password is long enough');
    } else {
        console.log('Your password is not long enough!');
    }

    // Logical operators - OR (||), AND (&&)
    password = 'p@ss12'

    if(password.length >= 12 && password.includes('@')){
        console.log('That password is mighty strong!');
    } else if(password.length >= 8 || password.includes('@') && password.length >= 5){
        console.log('That password is strong enough');
    } else {
        console.log('Your password is not strong enough!');
    }

    // Logical NOT (!)
    let user_13 = false;

    if(!user_13){  // '!' changes evaluation of user, but does not change the value.
        console.log('You must be logged in to continue');
    }


// LESSON-14 Break and Continue

    const scores_14 = [50, 25, 0, 30, 100, 20, 10];

    for(let i = 0; i < scores_14.length; i++){

        if(scores_14[i] === 0){
            continue;
        }
        console.log('Your score:', scores_14[i]);

        if(scores_14[i] === 100){
            console.log('Congrats, you got the top score!')
            break;
        }

    }


// LESSON-15 SWITCH statements

    const grade = 'a';

    switch(grade){
        case 'A':
            console.log('You got an A!');
            break;
        case 'B':
            console.log('You got an B!');
            break;
        case 'C':
            console.log('You got an C!');
            break;
        case 'D':
            console.log('You got an D!');
            break;
        case 'E':
            console.log('You got an E!');
            break;
        default:
            console.log('Not a valid grade');
    }

    // SWITCH statements use strict equality (===) to check!! 


// LESSON-16 Variables & Block Scope

    // Global scope variables. Can be accessed anywhere in the file.

    let age_16 = 30;
    let name_16 = '';
    console.log('Before code blocks:', age_16, name_16);

    if(true){
        // Global scope. Accessed anywhere.
        age_16 = 40;
        console.log('Inside 1st code blok:', age_16, name_16);
    }

    if(true){
        // Local scope. Can be accessed only within local block.
        let age_16 = 50;
        let name_16 = 'shaun';
        console.log('Inside 2nd code block:', age_16, name_16);

        if(true){
            // Another local scope. Access within current block only.
            let age_16 = 60;

            // VAR ignores block scope!! Can be accessed anywhere.
            var test = 'hello';
            
            // If nested block than taking most recently defined value
            console.log('Inside 3rd code block:', age_16, name_16);
        }
    }

    console.log('After code blocks:', age_16, name_16, test);  // Global scope


// FUNCTIONS

// LESSON-17 Function declaration and expression

    // Hoisting in JS is a term that loosely describes how our functions are effectively hoisted to the top of a file before the rest of our JS actually runs. In essence they're all declared before the rest of our JS. It DOES this with function DECLARATIONS but it DOES NOT do this with function EXPRESSIONS.

    // Any variable set equal to something whether it's a function, or a number, or something else, is known as an EXPRESSION.

    greet();  // Function invoked before it was declared. Example of hoisting. 

    function greet(){  // Function declaration. CAN be hoisted!!
        console.log('Hello there!');
    }

    const speak = function(){  // Function expression. CAN NOT be hoisted!!
        console.log('Have a good day!');
    };  // Semicolon ';' is put at the end of an expression

    speak();  // Calling or invoking the function

    // Function expression if preferable code practice due to avoid bug and unexpected behavior


// LESSON-18 Arguments & Parameters

    const name_18 = '';

    const speak_18 = function(name_18 = 'everyone', time = 'time'){

        // 'name_18', 'time' are Local variables that can be used only inside of this code block. Those are called Parameters!!

        console.log(`Have a good ${time} ${name_18}!`);  // Template string
    };

    console.log(name_18);  // Variable 'name_18' can not be accessed outside the code block

    speak_18('Bob', 'evening');  // 'Bob', 'evening' are called Arguments!!

    speak_18();  // If no arguments passed function uses default parameters

    speak_18('Shaun');  // If passed one argument, it will override the default value.


// LESSON-19 Returning values

    // Regular function

    const calcAreaReg = function(radius){
        return 3.14 * radius ** 2;
    };

    const areaReg = calcAreaReg(5);
    console.log('Area is:', areaReg);

    // Arrow functions is addition to JS and they offer a cleaner and shorter way to write functions.

    const calcAreaArr = radius => 3.14 * radius ** 2;  // use '()' if parameter > 1
    
    // Arrow functions RETURN the value by default, no return keyword needed

    const areaArr = calcAreaReg(6);
    console.log('Area is:', areaArr);


// LESSON-20 Practice arrow functions

    // 1st example

    const greet_20 = function(){  // Regular function
        return 'Some random text';
    };
    console.log(greet_20());

    const greet_20Arr = () => 'Some random text';  // Arrow function
    console.log(greet_20Arr());

    // 2nd example

    const billReg = function(products, tax){  // Regular function
        let total = 0;
        for(let i = 0; i < products.length; i++){
            total += products[i] + products[i] * tax;
            console.log(`${i+1}) ${total}`);
        }
        return total;
    };
    console.log(billReg([10,15,30], 0.20));

    const billArr = (products, tax) => {  // Arrow function
        let total = 0;
        for(let i = 0; i < products.length; i++){
            total += products[i] + products[i] * tax;
            console.log(`${i+1}) ${total}`);
        }
        return total;        
    };
    console.log(billArr([15,20,35], 0.20));


// LESSON-21 Functions & Methods

    // functions is a block of code to do something that can be invoked and run at any point in our code

    const greet_21 = () => 'Hello there!';
    let resultFunction = greet_21();
    console.log(resultFunction);

    // method is a function that is invoked using '.' notation and which is associated with an object or data type (like a string)

    let resultMethod = name.toUpperCase();
    console.log(resultMethod);


// LESSON-22 Callbacks & forEach

    // When we pass a function to the function as an argument it is called a callback function

    // This function returns value which is passed as an argument to the function below
    const myFunc = callbackFunc => {  
        let value = 50;
        callbackFunc(value);
    };

    myFunc(function(value){  // regular function
        console.log(value);
    });
    
    myFunc(value => {        // arrow function
        console.log(value);
    });


    // Callback function using forEach method

    let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

    // 'forEach' is a built-in method which iterates over an array. This method expects as an argument a callback function.

    // Callback function inside the forEach method iterates for each array element

    people.forEach(function(){
        console.log('something');  // this should give (5) something
    });

    // We can take parameters inside of a callback function. The first one 'mario' is whatever the value is at the time that we're iterating over. Every time we fire the function for each individual element we get that element as our first parameter. 

    people.forEach(function(person){
        console.log(person);  // this log out array elements one by one
    });

    // All we're doing is iterating this array using forEach method and firing a callback function which we pass through as a parameter or an argument rather to the forEach method for each individual item in the array and we get access to that person in the array each tie around.

    people.forEach(person => {  // regular function converted to arrow function
        console.log(person);
    });

    // We can also take second optional parameter that is index of the element

    people.forEach((person, index) => {  // regular function converted to arrow function
        console.log(`${index}) ${person}`);
    });

    // We can define a callback function and then pass it in to the forEach method or whatever method we're using. 

    const logPerson = (person, index) => {
        console.log(`${index} - hello ${person}`);
    };

    people.forEach(logPerson);


// LESSON-23 Passing callback function to html

    const ul = document.querySelector('.people');  // get a reference to the 'ul'
    const people_23 = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
    let html_23 = ``;  // create empty template string

    people.forEach(person => {

        html_23 += `<li style="color: brown">${person}</li>`;  // create html template

        // For each person we're adding this template on to the html. Each time we're firing callback function we're adding this on to the html.
    });

    console.log(html_23);
    ul.innerHTML = html_23;  // put array elements to html
