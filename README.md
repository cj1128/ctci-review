<div align="center">
  <h1>
    Cracking the Coding Interview in JavaScript
  </h1>

  <img src="./cover.jpg" width="400">

</div>

## Intro

As a software developer, to be honest, I don't think mastering algorithm details or capable of coding in a white board matters that much. Engineers are supposed to stand on the shoulders of giants. We know what weapons we have and we wisely choose what to use. We don't have to know how to manufacture them.

However, we all have to do something we don't like. This is the cruel truth of life. Sometimes we have to be what others want us to be. So, here comes this repo. I am gonna solve all the questions in this book and write the process.

## Run Tests

`yarn test -g [grep]`.

## Questions

### 1.1 Is Unique

> Implement an algorithm to determine if a string has all unique characters. What if you can't use additional data structures?

Need to pay attention to string encoding, js can't handle non-BMP unicode strings out of the box.

- O(N): Use a Set
- O(NLogN): Sort and one traversal

### 1.2 Check Permutation

Like always, we need to pay attention to encoding when we handle strings.

> Given two strings, write a method to decide if one is a permutation of the other.

O(NLogN): First check lengths of strings, if equal, sort and compare
O(N): First check lengths of strings, then compare the character counts

### 1.3 URLify

> Write a method to replace all spaces in a string with '%20'

O(N): Juse use an regexp.

### 1.4 Palindrome Permuatation

> Given a string, write a function to check if it is a permutation of a palindrome.

O(N): Count characters, there should be no odd or only one odd count of characters.

### 1.5 One Away

> There are three types of edits that can be performed on strings: insert a character, remove a character or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

O(min(Length)): First, we compare the lengths. Then iterate the short string and compare characters.

### 1.6 String Compression

> Implement a method to perform basic string compression using the counts of repeated characters. For example, the string `aabcccccaaa` would become `a2b1c5a3`. If the compressed string would not become smaller than the original string, the method should return the original string. You can assume the string has only uppercase and lowercase letters.

O(N): Just one traversal

### 1.7 Rotate Matrix

> Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate this image by 90 degress. Can you do this in place?

O(N^2): Go through the matrix diagonally. For each item, calculate the next position and move it.

### 1.8 Zero Matrix

> Write an algorithm such that if an element in a MxN matrix is 0, its entire row and column are set to 0.

O(NxM): Two traversals. First we mark, then we zero out.

### 1.9 String Rotation

> Assume you have a method isSubstring which checks if one string is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring(e.g., 'waterbottle' is a rotation of 'erbottlewat').

O(N): If s2 is a rotation of s1, it must be a substring if s1+s1.
