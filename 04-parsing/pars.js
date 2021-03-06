const fs = require('fs')


const data = fs.readFile('contacts.csv', (err, data) => { // If it's running from folder 04-parsing, else there should be it's full path 
    const content = data.toString()
    const rows = content.split('\r\n')

    const contacts = new Map

    rows.forEach(row => {
        const data = row.split(',')

        if (data[1]) {
            const object = {
                name: data[4],
                phones: []
            }

            contacts.set(data[1], object)
        }
    });

    contacts.delete('location_id')

    const phones = fs.readFile('phones.csv', (err, data) => {
        const content = data.toString()
        const rows = content.split('\r\n')

        const keys = new Set()
        rows.forEach(row => {
            const data = row.split(',')
            const object = contacts.get(data[2])

            if (object) {
                const phone = {}

                phone[data[9]] = data[8]
                object.phones.push(phone)

                keys.add(data[2])

                contacts.set(data[2], object)
            }
        });
        const contactsForJson = []

        keys.forEach(key => {
            const object = {}
            object[key] = contacts.get(key)
            contactsForJson.push(object)
        })

        const jsonObject = JSON.stringify(contactsForJson, null, 2)
        fs.writeFileSync('data.json', jsonObject)
    })
})


