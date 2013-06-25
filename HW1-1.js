var fs = require('fs');
var outfile = "prime.txt";
var sieve = [], i, j, primes = "";

for (i = 2; i <= 100; ++i) {
    if (!sieve[i]) {
        primes = primes + i;
        if (i < 100)
            primes = primes + ",";

        for (j = i << 1; j <= 100; j += i) {
            sieve[j] = true;
        }
    }
}

fs.writeFileSync(outfile, primes);
console.log("Script: " + __filename + "\nWrote: " + primes + "To: " + outfile);