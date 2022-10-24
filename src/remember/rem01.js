let mouseoverEvent = new MouseEvent("mouseover", {
	view: window,
	bubbles: true,
	cancelable: true,
});
let body = document.querySelector("body");
body.dispatchEvent(mouseoverEvent);

// const text = '{"name":"John", "birth":"1986-12-14", "link":"dette er et link <a href=\'test.dk\'>New York</a>"}';
// const obj = JSON.parse(text);
// console.log(obj.link);

// https://www.npmjs.com/package/html-react-parser
