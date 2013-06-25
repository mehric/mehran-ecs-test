var fs = require('fs');
var outfile = "prime.txt";
var sieve = [], c, i, j, primes = "";
var prime = 2;

for (c = 1; c <= 100;) {
    if (!sieve[prime]) {
        primes = primes + prime + ",";
        c++;
    }

    for (j = prime << 1; j <= prime * prime ; j += prime) {
        sieve[j] = true;
    }

    prime++;
}

primes = primes.substring(0, primes.length - 1);

fs.writeFileSync(outfile, primes);
console.log("Script: " + __filename + "\nWrote: " + primes + "To: " + outfile);