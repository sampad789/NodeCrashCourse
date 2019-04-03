const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// serialized url 
console.log(myUrl.href);

// HOST (root Domain)
console.log(myUrl.host);

// Host name (doesn't get the port if there is )
console.log(myUrl.hostname)

//Path name 
console.log(myUrl.pathname);

// Serialized Query 
console.log(myUrl.search);

// Params object 
console.log(myUrl.searchParams);
//Add Param 
myUrl.searchParams.append('abc', 123)
console.log(myUrl.searchParams);

// Loop through the params 
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));