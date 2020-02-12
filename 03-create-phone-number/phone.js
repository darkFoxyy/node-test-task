
const phone = (arr) => {
    if (arr.length !== 10) return console.log("Invalid number")

    const phone = arr.filter(x => (x === 0 || x === 1 || x === 2 || x === 3 || x === 4 || x === 5 || x === 6 || x === 7 || x === 8 || x === 9))

    if (phone.length !== arr.length) return console.log("Invalid digits")
    
    const str = phone.join('')
    console.log(`(${str.substr(0, 3)}) ${str.substr(3, 3)}-${str.substr(6, 4)}`)
}

const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

phone(number)