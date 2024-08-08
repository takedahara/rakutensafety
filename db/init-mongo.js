db = db.getSiblingDB('shelter');

db.createCollection('shelter_info');
db.createCollection('people_info');
db.createCollection('users');

db.people_info.insertMany([
    {
      "rakutenId": "r11223",
      "name": "松本太郎",
      "birthDate": new Date("1992-04-12"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 1, "medicine2": 0, "medicine3": 0 },
      "shelterId": 11
    },
    {
      "rakutenId": "r44556",
      "name": "井上花子",
      "birthDate": new Date("1987-09-22"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 0 },
      "shelterId": 12
    },
    {
      "rakutenId": "r77889",
      "name": "高橋一郎",
      "birthDate": new Date("1995-02-28"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 2, "medicine3": 0 },
      "shelterId": 13
    },
    {
      "rakutenId": "r99012",
      "name": "佐々木花子",
      "birthDate": new Date("1990-07-15"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 0, "medicine3": 1 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55667",
      "name": "山本健太",
      "birthDate": new Date("1988-03-20"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 0, "medicine3": 3 },
      "shelterId": 15
    },
    {
      "rakutenId": "r33445",
      "name": "石田陽子",
      "birthDate": new Date("1993-11-30"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 0 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55668",
      "name": "佐藤次郎",
      "birthDate": new Date("1994-05-01"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 1, "medicine2": 0, "medicine3": 0 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55669",
      "name": "村上真由美",
      "birthDate": new Date("1986-08-17"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 3, "medicine3": 0 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55670",
      "name": "渡辺裕子",
      "birthDate": new Date("1990-10-10"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 0 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55671",
      "name": "高木亮介",
      "birthDate": new Date("1989-01-14"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 0, "medicine3": 2 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55672",
      "name": "松本幸子",
      "birthDate": new Date("1992-12-25"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 0, "medicine3": 1 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55673",
      "name": "中村俊介",
      "birthDate": new Date("1991-01-01"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 1, "medicine3": 0 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55674",
      "name": "小林恵美",
      "birthDate": new Date("1988-02-22"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 2, "medicine3": 1 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55675",
      "name": "加藤一",
      "birthDate": new Date("1994-03-03"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 1, "medicine2": 0, "medicine3": 2 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55676",
      "name": "斎藤明",
      "birthDate": new Date("1995-04-04"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 0, "medicine3": 1 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55677",
      "name": "田中優子",
      "birthDate": new Date("1989-05-05"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 3, "medicine3": 2 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55678",
      "name": "杉本大輔",
      "birthDate": new Date("1990-06-06"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 1, "medicine3": 3 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55679",
      "name": "山田さくら",
      "birthDate": new Date("1987-07-07"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 1, "medicine2": 2, "medicine3": 0 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55680",
      "name": "松井康平",
      "birthDate": new Date("1991-08-08"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 2 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55681",
      "name": "渡辺裕太",
      "birthDate": new Date("1992-09-09"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 0, "medicine3": 0 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55682",
      "name": "長谷川花子",
      "birthDate": new Date("1989-10-10"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 2, "medicine3": 1 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55683",
      "name": "村上達也",
      "birthDate": new Date("1990-11-11"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 1, "medicine2": 0, "medicine3": 3 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55684",
      "name": "佐々木和也",
      "birthDate": new Date("1993-12-12"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 1, "medicine3": 0 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55685",
      "name": "高橋美咲",
      "birthDate": new Date("1987-01-13"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 2, "medicine3": 1 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55686",
      "name": "小川洋子",
      "birthDate": new Date("1994-02-14"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 1, "medicine2": 3, "medicine3": 0 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55687",
      "name": "近藤秀樹",
      "birthDate": new Date("1992-03-15"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 2 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55688",
      "name": "吉田陽子",
      "birthDate": new Date("1991-04-16"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 3 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55689",
      "name": "伊藤智子",
      "birthDate": new Date("1993-05-17"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 1, "medicine2": 2, "medicine3": 0 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55690",
      "name": "佐藤隆",
      "birthDate": new Date("1988-06-18"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 0, "medicine3": 1 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55691",
      "name": "石井菜穂子",
      "birthDate": new Date("1989-07-19"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 2 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55692",
      "name": "山下優",
      "birthDate": new Date("1992-08-20"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 3, "medicine3": 0 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55693",
      "name": "佐藤梨花",
      "birthDate": new Date("1990-09-21"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 1, "medicine2": 2, "medicine3": 3 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55694",
      "name": "松井和也",
      "birthDate": new Date("1987-10-22"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 0, "medicine3": 1 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55695",
      "name": "田中桃子",
      "birthDate": new Date("1991-11-23"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 2, "medicine3": 1 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55696",
      "name": "杉山裕太",
      "birthDate": new Date("1994-12-24"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 1, "medicine3": 3 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55697",
      "name": "中野美咲",
      "birthDate": new Date("1988-01-25"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 1, "medicine2": 3, "medicine3": 0 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55698",
      "name": "木村洋介",
      "birthDate": new Date("1990-02-26"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 0, "medicine3": 2 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55699",
      "name": "藤田佳子",
      "birthDate": new Date("1992-03-27"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 1, "medicine3": 0 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55700",
      "name": "鈴木康平",
      "birthDate": new Date("1987-04-28"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 1, "medicine2": 0, "medicine3": 3 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55701",
      "name": "松田美保",
      "birthDate": new Date("1988-05-29"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 2, "medicine3": 1 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55702",
      "name": "渡辺太郎",
      "birthDate": new Date("1991-06-30"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 1, "medicine3": 2 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55703",
      "name": "小野美咲",
      "birthDate": new Date("1993-07-31"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 3 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55704",
      "name": "松本洋平",
      "birthDate": new Date("1989-08-01"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 1, "medicine2": 3, "medicine3": 0 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55705",
      "name": "佐々木美和",
      "birthDate": new Date("1990-09-02"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 2, "medicine3": 1 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55706",
      "name": "中村裕太",
      "birthDate": new Date("1987-10-03"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 0, "medicine3": 2 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55707",
      "name": "斎藤恵美",
      "birthDate": new Date("1992-11-04"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 1, "medicine3": 0 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55708",
      "name": "伊藤大輔",
      "birthDate": new Date("1991-12-05"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 3, "medicine3": 1 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55709",
      "name": "田中恵子",
      "birthDate": new Date("1993-01-06"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 1, "medicine2": 0, "medicine3": 2 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55710",
      "name": "山本俊介",
      "birthDate": new Date("1988-02-07"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55711",
      "name": "杉本和子",
      "birthDate": new Date("1990-03-08"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55712",
      "name": "鈴木智子",
      "birthDate": new Date("1992-04-09"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55713",
      "name": "長谷川裕太",
      "birthDate": new Date("1987-05-10"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55714",
      "name": "吉田花子",
      "birthDate": new Date("1989-06-11"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55715",
      "name": "村上和也",
      "birthDate": new Date("1991-07-12"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 3, "medicine3": 0 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55716",
      "name": "加藤美咲",
      "birthDate": new Date("1993-08-13"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 1, "medicine2": 0, "medicine3": 2 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55717",
      "name": "石井洋介",
      "birthDate": new Date("1987-09-14"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 1, "medicine3": 0 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55718",
      "name": "中野洋平",
      "birthDate": new Date("1992-10-15"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 3, "medicine3": 1 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55719",
      "name": "小林美和",
      "birthDate": new Date("1991-11-16"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55720",
      "name": "渡辺恵美",
      "birthDate": new Date("1988-12-17"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55721",
      "name": "斎藤太郎",
      "birthDate": new Date("1993-01-18"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55722",
      "name": "山田花子",
      "birthDate": new Date("1991-02-19"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55723",
      "name": "杉山大輔",
      "birthDate": new Date("1990-03-20"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55724",
      "name": "鈴木洋子",
      "birthDate": new Date("1989-04-21"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55725",
      "name": "中村美保",
      "birthDate": new Date("1992-05-22"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55726",
      "name": "加藤太郎",
      "birthDate": new Date("1990-06-23"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55727",
      "name": "長谷川美和",
      "birthDate": new Date("1987-07-24"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55728",
      "name": "村上洋介",
      "birthDate": new Date("1993-08-25"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55729",
      "name": "松田優子",
      "birthDate": new Date("1991-09-26"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55730",
      "name": "斎藤大輔",
      "birthDate": new Date("1990-10-27"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55731",
      "name": "伊藤恵子",
      "birthDate": new Date("1988-11-28"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55732",
      "name": "石井太郎",
      "birthDate": new Date("1992-12-29"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55733",
      "name": "松井花子",
      "birthDate": new Date("1987-01-30"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55734",
      "name": "小林洋子",
      "birthDate": new Date("1993-02-31"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55735",
      "name": "鈴木太郎",
      "birthDate": new Date("1991-03-01"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55736",
      "name": "田中花子",
      "birthDate": new Date("1990-04-02"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55737",
      "name": "山本優子",
      "birthDate": new Date("1988-05-03"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55738",
      "name": "中村太郎",
      "birthDate": new Date("1992-06-04"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55739",
      "name": "斎藤花子",
      "birthDate": new Date("1987-07-05"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55740",
      "name": "伊藤大輔",
      "birthDate": new Date("1993-08-06"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55741",
      "name": "鈴木恵子",
      "birthDate": new Date("1991-09-07"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55742",
      "name": "田中太郎",
      "birthDate": new Date("1988-10-08"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55743",
      "name": "山田恵子",
      "birthDate": new Date("1990-11-09"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55744",
      "name": "中村洋介",
      "birthDate": new Date("1992-12-10"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55745",
      "name": "斎藤美和",
      "birthDate": new Date("1988-01-11"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55746",
      "name": "鈴木洋平",
      "birthDate": new Date("1993-02-12"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55747",
      "name": "伊藤太郎",
      "birthDate": new Date("1991-03-13"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55748",
      "name": "田中花子",
      "birthDate": new Date("1990-04-14"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55749",
      "name": "山本大輔",
      "birthDate": new Date("1992-05-15"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55750",
      "name": "中村優子",
      "birthDate": new Date("1988-06-16"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55751",
      "name": "斎藤洋介",
      "birthDate": new Date("1993-07-17"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55752",
      "name": "鈴木恵美",
      "birthDate": new Date("1991-08-18"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55753",
      "name": "伊藤洋平",
      "birthDate": new Date("1990-09-19"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55754",
      "name": "田中和子",
      "birthDate": new Date("1992-10-20"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55755",
      "name": "山本太郎",
      "birthDate": new Date("1991-11-21"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55756",
      "name": "中村花子",
      "birthDate": new Date("1988-12-22"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55757",
      "name": "斎藤美保",
      "birthDate": new Date("1993-01-23"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55758",
      "name": "鈴木太郎",
      "birthDate": new Date("1991-02-24"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55759",
      "name": "伊藤恵子",
      "birthDate": new Date("1990-03-25"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55760",
      "name": "田中洋介",
      "birthDate": new Date("1992-04-26"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55761",
      "name": "山本大輔",
      "birthDate": new Date("1988-05-27"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55762",
      "name": "中村優子",
      "birthDate": new Date("1993-06-28"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55763",
      "name": "斎藤洋平",
      "birthDate": new Date("1991-07-29"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55764",
      "name": "鈴木美和",
      "birthDate": new Date("1990-08-30"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55765",
      "name": "伊藤恵美",
      "birthDate": new Date("1992-09-31"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55766",
      "name": "田中太郎",
      "birthDate": new Date("1988-10-01"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55767",
      "name": "山本花子",
      "birthDate": new Date("1990-11-02"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55768",
      "name": "中村太郎",
      "birthDate": new Date("1992-12-03"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55769",
      "name": "斎藤恵美",
      "birthDate": new Date("1988-01-04"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55770",
      "name": "伊藤美和",
      "birthDate": new Date("1993-02-05"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55771",
      "name": "鈴木恵子",
      "birthDate": new Date("1991-03-06"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55772",
      "name": "田中花子",
      "birthDate": new Date("1990-04-07"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55773",
      "name": "山本太郎",
      "birthDate": new Date("1992-05-08"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55774",
      "name": "中村優子",
      "birthDate": new Date("1991-06-09"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55775",
      "name": "斎藤洋介",
      "birthDate": new Date("1988-07-10"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55776",
      "name": "鈴木恵美",
      "birthDate": new Date("1993-08-11"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55777",
      "name": "伊藤太郎",
      "birthDate": new Date("1991-09-12"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55778",
      "name": "田中洋介",
      "birthDate": new Date("1990-10-13"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55779",
      "name": "山本恵美",
      "birthDate": new Date("1992-11-14"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55780",
      "name": "中村太郎",
      "birthDate": new Date("1991-12-15"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55781",
      "name": "斎藤美和",
      "birthDate": new Date("1988-01-16"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55782",
      "name": "鈴木太郎",
      "birthDate": new Date("1993-02-17"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55783",
      "name": "伊藤花子",
      "birthDate": new Date("1991-03-18"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55784",
      "name": "田中洋子",
      "birthDate": new Date("1990-04-19"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55785",
      "name": "山本大輔",
      "birthDate": new Date("1992-05-20"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55786",
      "name": "中村優子",
      "birthDate": new Date("1991-06-21"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55787",
      "name": "斎藤洋介",
      "birthDate": new Date("1988-07-22"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55788",
      "name": "鈴木恵子",
      "birthDate": new Date("1993-08-23"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55789",
      "name": "伊藤太郎",
      "birthDate": new Date("1991-09-24"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55790",
      "name": "田中恵美",
      "birthDate": new Date("1990-10-25"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55791",
      "name": "山本美和",
      "birthDate": new Date("1992-11-26"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55792",
      "name": "中村大輔",
      "birthDate": new Date("1991-12-27"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55793",
      "name": "斎藤洋子",
      "birthDate": new Date("1988-01-28"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55794",
      "name": "鈴木太郎",
      "birthDate": new Date("1993-02-29"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55795",
      "name": "伊藤恵子",
      "birthDate": new Date("1991-03-30"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 14
    },
    {
      "rakutenId": "r55796",
      "name": "田中美和",
      "birthDate": new Date("1990-04-31"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 15
    },
    {
      "rakutenId": "r55797",
      "name": "山本洋子",
      "birthDate": new Date("1992-05-01"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 11
    },
    {
      "rakutenId": "r55798",
      "name": "中村太郎",
      "birthDate": new Date("1991-06-02"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 2, "medicine2": 0, "medicine3": 1 },
      "shelterId": 12
    },
    {
      "rakutenId": "r55799",
      "name": "斎藤美和",
      "birthDate": new Date("1988-07-03"),
      "gender": "女性",
      "medicinePerDay": { "medicine1": 3, "medicine2": 2, "medicine3": 0 },
      "shelterId": 13
    },
    {
      "rakutenId": "r55800",
      "name": "伊藤太郎",
      "birthDate": new Date("1993-08-04"),
      "gender": "男性",
      "medicinePerDay": { "medicine1": 0, "medicine2": 1, "medicine3": 3 },
      "shelterId": 14
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
    },
    {
        id: 7,
        name: "避難所G",
        location: {
          latitude: 33.5904,
          longitude: 130.4017
        },
        prefecture: "Fukuoka",
        capacity: 220,
        food: 80,
        water: 90,
        medicines: {
          medicine1: 55,
          medicine2: 45,
          medicine3: 35,
        }
      },
      {
        id: 8,
        name: "避難所H",
        location: {
          latitude: 33.5904,
          longitude: 130.40
        },
        prefecture: "Fukuoka",
        capacity: 220,
        food: 60,
        water: 70,
        medicines: {
          medicine1: 25,
          medicine2: 25,
          medicine3: 35,
        }
      },
      {
        id: 9,
        name: "避難所I",
        location: {
          latitude: 36.0824,
          longitude: 140.11
        },
        prefecture: "Ibaraki",
        capacity: 220,
        food: 60,
        water: 70,
        medicines: {
          medicine1: 25,
          medicine2: 25,
          medicine3: 35,
        }
      },
      {
        id: 10,
        name: "避難所J",
        location: {
          latitude: 36.1115,
          longitude: 140.10
        },
        prefecture: "Ibaraki",
        capacity: 220,
        food: 60,
        water: 70,
        medicines: {
          medicine1: 25,
          medicine2: 25,
          medicine3: 35,
        }
      },
      {
        id: 11,
        name: "ゆきぞの幼稚園",
        location: {
          latitude: 33.56688096396577,
          longitude: 130.25876939232614
        },
        prefecture: "Fukuoka",
        capacity: 300,
        food: 100,
        water: 200,
        medicines: {
          medicine1: 1125,
          medicine2: 1115,
          medicine3: 1115
        }
      },
      {
        id: 12,
        name: "福岡市産学連携交流センター",
        location: {
          latitude: 33.594665653867814,
          longitude:  130.22881975281615
        },
        prefecture: "Fukuoka",
        capacity: 50,
        food: 200,
        water: 100,
        medicines: {
          medicine1: 1110,
          medicine2: 1150,
          medicine3: 1100
        }
      },
      {
        id: 13,
        name: "福岡県立玄洋高等学校",
        location: {
          latitude: 33.588744366491184,
          longitude: 130.25305663554784
        },
        prefecture: "Fukuoka",
        capacity: 100,
        food: 300,
        water: 400,
        medicines: {
          medicine1: 1135,
          medicine2: 1105,
          medicine3: 2510
        }
      },
      {
        id: 14,
        name: "福岡市立元岡小学校",
        location: {
          latitude: 33.59006258040641,
          longitude:  130.23972834105672
        },
        prefecture: "Fukuoka",
        capacity: 200,
        food: 100,
        water: 20,
        medicines: {
          medicine1: 1115,
          medicine2: 1115,
          medicine3: 9015
        }
      },
      {
        id: 15,
        name: "元岡幼稚園",
        location: {
          latitude: 33.586679317560694,
          longitude:  130.21715275752996
        },
        prefecture: "Fukuoka",
        capacity: 100,
        food: 10,
        water: 200,
        medicines: {
          medicine1: 1120,
          medicine2: 1150,
          medicine3: 1110
        }
      },
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