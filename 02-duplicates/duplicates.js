var input = 'abcdaABCdhswksrtuub'

const dublicates = []

var lower = input.toLowerCase()
var arr = lower.split('')
arr = arr.sort()

for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) dublicates.push(arr[i])
}

y = Array.from(new Set(dublicates))
x = Array.from(new Set(arr))
console.log(x.length - y.length, y)


