let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// to find out how many items
console.log (secretMessage.length);
// to remove the last item/string
secretMessage.pop();
console.log (secretMessage.length);
// to add to the end of the array
secretMessage.push('to', 'Program');
console.log(secretMessage);

// to change a word in the array
secretMessage[7]= 'right' // or secretMessage.splice(7, 1, 'right')
console.log(secretMessage);

// to remove first item
console.log(secretMessage.slice(1)); // or secretMessage.shift();

// to add a word to the beginning 
secretMessage.splice(0, 0, 'Programming'); // or secretMessage.unshift('Programming') if at the beginning of the array 
console.log(secretMessage);

// replace a number of strings with one string 
secretMessage.splice(7, 5, 'know');
console.log(secretMessage.join());
