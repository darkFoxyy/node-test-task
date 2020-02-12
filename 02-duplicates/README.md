Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
```js
    findDuplicates("abcde") -> 0 # no characters repeats more than once
    findDuplicates("aabbcde") -> 2 # 'a' and 'b'
    findDuplicates("aabBcde") -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
    findDuplicates("indivisibility") -> 1 # 'i' occurs six times
    findDuplicates("Indivisibilities") -> 2 # 'i' occurs seven times and 's' occurs twice
    findDuplicates("aA11") -> 2 # 'a' and '1'
    findDuplicates("ABBA") -> 2 # 'A' and 'B' each occur twice
```