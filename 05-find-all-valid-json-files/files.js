const fs = require('fs')
const path = require('path')

const initialPath = path.dirname('')

const pathes = []

function isValidJson(json) {
    try {
        JSON.parse(json)
        return true
    } catch (err) {
        return false
    }
}

const arr = []

const rec = async (nextPath) => new Promise((resolve) => {
    fs.readdir(nextPath, { withFileTypes: true }, (err, data) => {
        data.forEach(element => {
            if (element.isDirectory()) {
                resolve(rec(`${nextPath}/${element.name}`))
            }
            if (element.isFile()) {
                const valid = fs.readFile(`${nextPath}/${element.name}`, (err, data) => {
                    const json = data.toString()
                    if (isValidJson(json)) {
                       // console.log(arr)
                        arr.push({ path: `${nextPath}/${element.name}` })
                        return 1
                    }
                    return 0
                })
                console.log(arr)
            }
        });
    })

    resolve(arr)
})


    ; (async () => {
        await rec(initialPath).then((data) => {
            console.log(arr)
        })
        console.log(pathes)
    })()



