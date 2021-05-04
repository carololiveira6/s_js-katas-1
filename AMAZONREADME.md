# Activity: JavaScript Katas (loops and functions)

### Overview ###

A [kata](https://en.wikipedia.org/wiki/Kata_(programming)) is an individual exercise where you practice a programming skill through repetition. Today you will practice using JavaScript loops, conditionals, and expressions through a series of katas.

To start, go fork then clone [https://github.com/erics273/js__loop__function__katas](https://github.com/erics273/js_loop_function_katas).

Fill in the missing code inside the katas1.js file for each function. Use a `for` or `while` loop inside each function.  Identify the correct numbers in your loop and add each 
number to the empty 'numbers' array, which will be returned in the last line of the function.

### Example ###

```js
function oneThroughFive() {
    const numbers = [];

    // Your code goes below

    return numbers;
}
```

To test your functions, you will need to call them. Following the above example, 
we would write `oneThroughFive()` to call the function oneThroughFive. To see 
what this function returns in the console, we can write `console.log(oneThroughFive())`.
So for the example above, the final function and subsequent function call would look
like this:

```js
function oneThroughFive() {
    const numbers = [];
    for (let counter = 1; counter <= 5; counter++) {
        numbers.push(counter)
    }
    return numbers;
}

console.log(oneThroughFive())
```


### Katas

1.  Return the numbers from 1 to 20. (1, 2, 3,..., 19, 20)
2.  Return the even numbers from 1 to 20. (2, 4, 6,...18,20)
3.  Return the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
4.  Return the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
5.  Return all numbers up to 100 that are perfect squares. (1, 4, 9, ..., 81, 100)
6.  Return the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
7.  Return the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
8.  Return the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
9.  Return the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
10. Return the numbers that are perfect squares, counting down from 100. (100, 81, 64, ..., 4, 1)
