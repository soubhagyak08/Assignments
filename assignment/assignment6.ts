//check if a number is prime
// Prime numbers must be greater than 1
function isPrime(n: number): boolean {
  if (n <= 1) {
    return false;
  }

// for above - if (n <= 1) → immediately returns false because 1 and negatives are not 
 //prime.

  // Check divisors from 2 to n-1

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false; // Found a divisor, not prime
    }
  }

  // For above checks every number less than n to see if it divides evenly.

  return true; // No divisors found, prime

  // for above - If any divisor is found, return false

}
console.log("n = 7 ->", isPrime(7));   // true
console.log("n = 25 is", isPrime(25)); // false
console.log("n = 1 its", isPrime(1));   // false


