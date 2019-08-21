	
  var imageTemplate = document.getElementById("image-template").innerHTML;
 
  var template = Handlebars.compile(imageTemplate);

var x1,x2,x3,x4,x5;

 var imagesStatic = [
  	{image:"../images/abstract2Layers.jpg"},
  	{image:"../images/flyingSaucer.jpg"},
  	{image:"../images/flyingSaucerPeople.jpg"},

  ];

x1=Math.floor(Math.random() * imagesStatic.length);
x2=Math.floor(Math.random() * imagesStatic.length);
x3=Math.floor(Math.random() * imagesStatic.length);
x4=Math.floor(Math.random() * imagesStatic.length);
x5=Math.floor(Math.random() * imagesStatic.length);



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


images=shuffle(imagesStatic);





  var imageData = template({images});

 document.getElementById('imageDiv').innerHTML += imageData;