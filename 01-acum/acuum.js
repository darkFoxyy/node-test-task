
var input = 'rsdjk'

var i = 1;
const result = []
const arr = Array.from(input)

arr.forEach(element => {
    var str = element.repeat(i)
    const upp = str.charAt(0).toUpperCase() + str.slice(1)
    result.push(upp)
    i += 1
});

console.log(result)