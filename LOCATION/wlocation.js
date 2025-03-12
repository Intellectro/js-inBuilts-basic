console.log('window location '+ window.location.href); // returns the full location of the page
console.log('window location hostname '+ window.location.hostname); //returns the domain name or port
console.log('window location pathname '+ window.location.pathname); // returns the pathname of the page{{mainly the folder and the file}}
console.log('window location port '+ window.location.port); // 5500 or 80 for http or 443 for https
console.log('window location protocol '+ window.location.protocol); //http or https\

document.querySelector('.redirect').addEventListener('click', redirectbrowser);

function redirectbrowser(){
    window.location.assign('../FLAT/flat.html');
}