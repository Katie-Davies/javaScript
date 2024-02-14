# This is all new learning of JS.

 Console.log - is made to log or print messages to the console

 Methods- return information about an object, they are called by appending an instance with a fullstop "." then the method name and then brackets 
 example Math.random(); 

 property- is information about the data/instance 
 Example: 
 let message = "goodnight"
 console.log (message.length);
// will print 9

 ## Types of Data: 
  Primitive data-
  String = "Katie"
  number = 123
  boolean = true or false
    null (represents the intentional absence of a value) = let x = null; 
  undefined = no value is declared
  
  
  object = 
    
## Arithmetic operators:
+ add
- sub
* mult
/ div
% modulo - remainder

## Assignment operators:
+= add assignment
-= sub assignment
*= mult
/= div 

## String interpolation- 
let age= 33;
//as a concatenation 
"Tommy is " + age + "years olf."
//as a interpolation
``` `Tommy is ${age} years old`;

## Variables:

let - the variable can be reassigned(changed)
const- can not be changed 
example: 
let myAge= 33
myAge = 24; 


## Conditional Statements 
if, else if, else  - else if must always come in the middle and you can have as many as you like
An if statement has 3 parts: the if keyword, a condition wrapped in parentheses (), and a code block wrapped in curly braces {}. 
if (conditionGoesHere) {
  // Code for if statement
} else {
  // Code for else statement
}

### comparison operators
    Less than: <
    Greater than: >
    Less than or equal to: <=
    Greater than or equal to: >=
    Is equal to: ===
    Is not equal to: !==


### logical operators 
    the **and** operator (&&)
    the **or** operator (||)
    the **not** operator, otherwise known as the **bang** operator (!)
Examples :
```
if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}
**both must be true to execute go**
if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}
**only one needs to be true to execute**
```

The ! not operator reverses, or negates, the value of a boolean:
```
let excited = true;
console.log(!excited); // Prints false

let sleepy = false;
console.log(!sleepy); // Prints true
```

### truthy vs falsy values

So which values are falsy— or evaluate to false when checked as a condition? The list of falsy values includes:

0
Empty strings like "" or ''
null which represent when there is no value at all
undefined which represent when a declared variable lacks a value
NaN, or Not a Number


example:
```
let tool = '';
```
// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || "pen"

console.log(``` `The ${writingUtensil} is mightier than the sword.`);

will return The pen is mightier than the sword. As tool is false as there is no value. 

however if 

let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || "pen"

console.log(``` `The ${writingUtensil} is mightier than the sword.`);

will return The marker is mightier than the sword. As tool is true, there is a value in the string. 

###ternary operators
```
let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
```
We can use a ternary operator to perform the same functionality:
```
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
```
In the example above:

The condition, isNightTime, is provided before the ?.
Two expressions follow the ? and are separated by a colon :.
If the condition evaluates to true, the first expression executes.
If the condition evaluates to false, the second expression executes.
Like if...else statements, ternary operators can be used for conditions which evaluate to true or false.

## Switch statement

instead of writing else if each time for each condition write like this: 
```let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
```
The switch keyword initiates the statement and is followed by ( ... ), which contains the value that each case will compare. In the example, the value or expression of the switch statement is groceryItem.
Inside the block, { ... }, there are multiple cases. The case keyword checks if the expression matches the specified value that comes after it. The value following the first case is 'tomato'. If the value of groceryItem equalled 'tomato', that case‘s console.log() would run.

The break keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block. Note: Without break keywords, the first matching case will run, but so will every subsequent case regardless of whether or not it matches—including the default. This behavior is different from if/else conditional statements that execute only one block of code.
At the end of each switch statement, there is a default statement. If none of the cases are true, then the code in the default statement will run.



# Function
A function is a reusable block of code that groups together a sequence of statements to perform a specific task.
