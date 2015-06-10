var random = require ('./sim-0.26');

/* Demonstrate that random number streams can be seeded,
 * and multiple streams can be created in a single script. */
var stream1 = new random.Random(1234);
var stream2 = new random.Random(6789);
var stream3 = new random.Random(540);

console.log(stream1.random()); // returns 0.966453535715118 always
console.log(stream2.random()); // returns 0.13574991398490965 always
 // returns 0.13574991398490965 always


var x = [];
var y = [];
var mu = 540;
var sigma = 4;
var x_min = mu - 4*sigma;
var x_max = mu + 4*sigma;
var x_span = x_max - x_min;
var size   = 100;
var sample_size = 1000000;

for (i = 0; i < sample_size; i++){
   x[i] = stream3.normal(mu,sigma);
}

var j = x_min;
var step = x_span/size;
var k = 0;
while (j < x_max){
        y[k] = j;	
	j = j + step; 
	k++;
} 

var distrib = new Array ();

for (i = 0; i< 100; i ++){
	distrib[i] = 0;
} 

for (i = 0; i < sample_size; i++){

	for (j = 1; j < size ; j++ ){
		if (x[i] <  y[j]){
		   distrib [j-1] = distrib[j-1] +1;
			break;	
		}
        }
}

console.log (distrib);
