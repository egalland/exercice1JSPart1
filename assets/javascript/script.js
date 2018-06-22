// DECLARATION ET RECUPERATION DES VARIABLES
var image = document.getElementById('image1');
// FONCTION LORSQU'ON MET LA SOURIS SUR L'IMAGE
function mouseOver() {
  image.setAttribute('src', 'assets/images/image1_2.jpg');
}
// FONCTION LORSQU'ON SORT LA SOURIS DE L'IMAGE
function mouseOut() {
  image.setAttribute('src', 'assets/images/image1.jpg');
}
