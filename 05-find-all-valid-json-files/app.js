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

    if(element.isFile())
    pathes.push(`${nextPath}/${element.name}`)

    if (element.isDirectory()) {
      await req(`${nextPath}/${element.name}`)
      }
    
}

}

;(async () =>{
const h = await req(initialPath)
for( const element of pathes){
    const data = await file(element)
    const json = data.toString()
            if (isValidJson(json)) {
                arr.push({ path: element })
            }      
}
console.log(arr)
})()