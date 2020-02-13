const fs = require('fs')
const path = require('path')
const util = require('util');

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

var arr = []

const reader = util.promisify(fs.readdir);
const file = util.promisify(fs.readFile)

const req = async (nextPath) => {
    const a = await reader(nextPath,{ withFileTypes: true })

//console.log(a)   
for( const element of a){

    console.log(element)
    
    
    if (element.isFile()) {
        const data = await file(`${nextPath}/${element.name}`)
            
        const json = data.toString()
            if (isValidJson(json)) {
                arr.push({ path: `${nextPath}/${element.name}` })
            }      
           // console.log(arr)
    }
    if (element.isDirectory()) {
        const tarr = arr.concat(req(`${nextPath}/${element.name}`))
       // console.log(tarr)
        arr = tarr
      }
    
}
return arr
}

;(async () =>{
const h = await req(initialPath)
console.log(h)
})()