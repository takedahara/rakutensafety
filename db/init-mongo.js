db = db.getSiblingDB('shelter');

db.createCollection('shelter_info');
db.createCollection('people_info');
db.createCollection('users');

db.people_info.insertMany([
    {
      rakutenId: "r11223",
      name: "松本太郎",
      birthDate: new Date("1992-04-12"),
      gender: "男性",
      medicinePerDay: { medicine1: 1, medicine2: 0, medicine3: 0 },
      shelterId: 1
    },
    {
      rakutenId: "r44556",
      name: "井上花子",
      birthDate: new Date("1987-09-22"),
      gender: "女性",
      medicinePerDay: { medicine1: 2, medicine2: 0, medicine3: 0 },
      shelterId: 2
    },
    {
      rakutenId: "r77889",
      name: "高橋一郎",
      birthDate: new Date("1995-02-28"),
      gender: "男性",
      medicinePerDay: { medicine1: 0, medicine2: 2, medicine3: 0 },
      shelterId: 1
    },
    {
      rakutenId: "r99012",
      name: "佐々木花子",
      birthDate: new Date("1990-07-15"),
      gender: "女性",
      medicinePerDay: { medicine1: 0, medicine2: 0, medicine3: 1 },
      shelterId: 3
    },
    {
      rakutenId: "r55667",
      name: "山本健太",
      birthDate: new Date("1988-03-20"),
      gender: "男性",
      medicinePerDay: { medicine1: 0, medicine2: 0, medicine3: 3 },
      shelterId: 2
    },
    {
      rakutenId: "r33445",
      name: "石田陽子",
      birthDate: new Date("1993-11-30"),
      gender: "女性",
      medicinePerDay: { medicine1: 2, medicine2: 0, medicine3: 0 },
      shelterId: 3
    },
    {
      rakutenId: "r55668",
      name: "佐藤次郎",
      birthDate: new Date("1994-05-01"),
      gender: "男性",
      medicinePerDay: { medicine1: 1, medicine2: 0, medicine3: 0 },
      shelterId: 1
    },
    {
      rakutenId: "r55669",
      name: "村上真由美",
      birthDate: new Date("1986-08-17"),
      gender: "女性",
      medicinePerDay: { medicine1: 0, medicine2: 3, medicine3: 0 },
      shelterId: 1
    }, 
  {
      rakutenId: "r55670",
      name: "渡辺裕子",
      birthDate: new Date("1990-10-10"),
      gender: "女性",
      medicinePerDay: { medicine1: 0, medicine2: 1, medicine3: 0 },
      shelterId: 1
    },
    {
      rakutenId: "r55671",
      name: "高木亮介",
      birthDate: new Date("1989-01-14"),
      gender: "男性",
      medicinePerDay: { medicine1: 0, medicine2: 0, medicine3: 2 },
      shelterId: 2
    },
    {
      rakutenId: "r55672",
      name: "松本幸子",
      birthDate: new Date("1992-12-25"),
      gender: "女性",
      medicinePerDay: { medicine1: 0, medicine2: 0, medicine3: 1 },
      shelterId: 1
    }
  ])

db.shelter_info.insertMany([
    {
      id: 1,
      name: "避難所A",
      location: "市区町村X",
      prefecture: "Tokyo",
      capacity: 100,
      food: 20,
      water: 30,
      medicines: {
        medicine1: 30,  // 在庫の数値
        medicine2: 20,
        medicine3: 10,
      }
    },
    {
      id: 2,
      name: "避難所B",
      location: "市区町村Y",
      prefecture: "Osaka",
      capacity: 150,
      food: 50,
      water: 60,
      medicines: {
        medicine1: 40,
        medicine2: 30,
        medicine3: 20,
      }
    },
    {
      id: 3,
      name: "避難所C",
      location: "市区町村Z",
      prefecture: "Aichi",
      capacity: 200,
      food: 70,
      water: 80,
      medicines: {
        medicine1: 50,
        medicine2: 40,
        medicine3: 30,
      }
    },
    {
      id: 4,
      name: "避難所D",
      location: "市区町村W",
      prefecture: "Tokyo",
      capacity: 120,
      food: 40,
      water: 50,
      medicines: {
        medicine1: 35,
        medicine2: 25,
        medicine3: 15,
      }
    },
    {
      id: 5,
      name: "避難所E",
      location: "市区町村V",
      prefecture: "Osaka",
      capacity: 180,
      food: 60,
      water: 70,
      medicines: {
        medicine1: 45,
        medicine2: 35,
        medicine3: 25,
      }
    },
    {
      id: 6,
      name: "避難所F",
      location: "市区町村U",
      prefecture: "Aichi",
      capacity: 220,
      food: 80,
      water: 90,
      medicines: {
        medicine1: 55,
        medicine2: 45,
        medicine3: 35,
      }
    }
])


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


