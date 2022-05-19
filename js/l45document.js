let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL;

val = document.links; //HTML Collection
// val = document.links[3];
// val = document.links[3].id; // for id
// val = document.links[3].className; // for classname // string
val = document.links[3].classList; // DOMTokenList
val = document.links[3].classList[0];
val = document.links[3].classList[1];


val = document.forms; // HTMLCollection
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].className;
val = document.forms[0].classList[0];
val = document.forms[0].action;
val = document.forms[0].method;


val = document.images; // HTMLCollection
val = document.images[0];
val = document.images[0].id;
val = document.images[0].className;
val = document.images[0].classList; //DOMTokenList
val = document.images[0].classList[0];
val = document.images[0].alt;
val = document.images[0].src;
val = document.images[0].getAttribute('type');
val = document.images[0].getAttribute('src');


console.log(val);