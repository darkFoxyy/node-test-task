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

        const contactsForJson = []
        const keys = new Set()
        rows.forEach(row => {
            const data = row.split(',')
            const object = contacts.get(data[2])

            if (object && !keys.has(data[2])) {
                const phone = {}

                phone[data[9]] = data[8]
                object.phones.push(phone)

                const key = {}
                key[data[2]] = object

                keys.add(data[2])

                contactsForJson.push(key)
            }
        });
        const jsonObject = JSON.stringify(contactsForJson, null, 2)
        fs.writeFileSync('data.json', jsonObject)
    })
})


