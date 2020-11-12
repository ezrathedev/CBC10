const request = 'http://my-website.com/about/info?userid=1&page=3';
const myUrl = new URL(request);
console.log(myUrl.href);
console.log(myUrl.host); // .local
console.log(myUrl.pathname); // pathname
console.log(myUrl.searchParams.get('userid'));
console.log(myUrl.searchParams.has('page'));
