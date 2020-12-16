
$( document ).ready(function() {

let quotes = ["The darkest hour is just before the dawn.",     
              
"Enjoy the little things in life, for one day you may look back and realize they were the big things.",
              
"People who wonder if the glass is half empty or full miss the point. The glass is refillable.",
              
"Sometimes later becomes never. Do it now.",
              
"The harder you work for something, the greater you'll feel when you achieve it.", 
              
"You learn more from failure than from success. Don't let it stop you. Failure builds character.",
              
"When you reach the end of your rope, tie a knot in it and hang on."];


$("button").click(function() {

var random = Math.floor(Math.random() * quotes.length); 
    
$(".quotes").text(quotes[random] + ""); 
});

});

