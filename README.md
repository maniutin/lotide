# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@nick.maniutin/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head(array): returns the first element of an array
* tail(array): returns all elements except the head
* middle(array): returns the middle (s) of an array
* flatten(array): takes in an array of arrays and returns a single array
* findKeyByValue(object, value): scans the object and returns the first key which contains the value
* findKey(object, callback): traverses the object and return the first key for which the callback returns a truthy value.If no key is found, it returns undefined
* eqArrays(array1,array2): compares two arrays
* countOnly(allItems,itemsToCount): takes in an array and returns an object with the appropriate counts
* countLetters(sentence): counts specified letter in a string
* letterPositions(sentence): returns all the indicies in the string where each character is found
* assertObjectsEqual(actual, expected): asserts comparison of two objects
* assertEqual(actual, expected): asserts two values
* assertArraysEqual(actual,expected): asserts comparison of two arrays
* without(source, itemsToRemove): returns a subset of a given array, removes unwanted elements
* takeUntil(array, callback): returns a slice of the array taken from the beginning until the callback function returns a truthy value
* map(array, callback): returns a new array based on the results of the callback
* eqObjects(object1, object2): compares two objects