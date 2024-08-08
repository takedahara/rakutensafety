db = db.getSiblingDB('shelter');

db.createCollection('users');

db.users.insertMany([
    {
        rakutenid: "r11223",
        password: "pass1234"
    },
    {
        rakutenid: "r44556",
        password: "pass1234"
    },
    {
        rakutenid: "r77889",
        password: "pass1234"
    },
    {
        rakutenid: "r99012",
        password: "pass1234"
    },
    {
        rakutenid: "r55667",
        password: "pass1234"
    },
    {
        rakutenid: "r33445",
        password: "pass1234"
    }
])