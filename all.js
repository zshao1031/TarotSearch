//alert('切換頁面啦！');

let majorArcanaData = [
        {
            "id":"00",
            "nameTC":"愚人",
            "nameEn":"The Fool",  
        },
        {
            "id":"01",
            "nameTC":"魔術師",
            "nameEn":"The Magician",  
        },
        {
            "id":"02",
            "nameTC":"女祭司",
            "nameEn":"The High Priestess",  
        },
        {
            "id":"03",
            "nameTC":"皇后",
            "nameEn":"The Empress",  
        },
        {
            "id":"04",
            "nameTC":"皇帝",
            "nameEn":"The Emperor",  
        },
        {
            "id":"05",
            "nameTC":"教皇",
            "nameEn":"The Hierophant",  
        },
        {
            "id":"06",
            "nameTC":"戀人",
            "nameEn":"The Lovers",  
        },
        {
            "id":"07",
            "nameTC":"戰車",
            "nameEn":"The Chariot",  
        },
        {
            "id":"08",
            "nameTC":"力量",
            "nameEn":"Strength",  
        },
        {
            "id":"09",
            "nameTC":"隱者",
            "nameEn":"The Hermit",  
        },
        {
            "id":"10",
            "nameTC":"命運之輪",
            "nameEn":"The Wheel of Fortune",  
        },
        {
            "id":"11",
            "nameTC":"正義",
            "nameEn":"The Justice",  
        },
        {
            "id":"12",
            "nameTC":"倒吊人",
            "nameEn":"The Hanged Man",  
        },
        {
            "id":"13",
            "nameTC":"死神",
            "nameEn":"Death",  
        },
        {
            "id":"14",
            "nameTC":"節制",
            "nameEn":"Temperance",  
        },
        {
            "id":"15",
            "nameTC":"惡魔",
            "nameEn":"The Devil",  
        },
        {
            "id":"16",
            "nameTC":"高塔",
            "nameEn":"The Tower",  
        },
        {
            "id":"17",
            "nameTC":"星星",
            "nameEn":"The Star",  
        },
        {
            "id":"18",
            "nameTC":"月亮",
            "nameEn":"The Moon",  
        },
        {
            "id":"19",
            "nameTC":"太陽",
            "nameEn":"The Sun",  
        },
        {
            "id":"20",
            "nameTC":"審判",
            "nameEn":"Judement",  
        },
        {
            "id":"21",
            "nameTC":"世界",
            "nameEn":"The World",  
        },
    ];
  
let minorArcanaWandsData = [
        {
            "id":"wandsAce",
            "nameTC":"權杖王牌",
            "nameEn":"Ace of Wands",  
        },
        {
            "id":"wandsTwo",
            "nameTC":"權杖二",
            "nameEn":"Two of Wands",  
        },
        {
            "id":"wandsThree",
            "nameTC":"權杖三",
            "nameEn":"Three of Wands",  
        },
        {
            "id":"wandsFour",
            "nameTC":"權杖四",
            "nameEn":"Four of Wands",  
        },
        {
            "id":"wandsFive",
            "nameTC":"權杖五",
            "nameEn":"Five of Wands",  
        },
        {
            "id":"wandsSix",
            "nameTC":"權杖六",
            "nameEn":"Six of Wands",  
        },
        {
            "id":"wandsSeven",
            "nameTC":"權杖七",
            "nameEn":"Seven of Wands",  
        },
        {
            "id":"wandsEight",
            "nameTC":"權杖八",
            "nameEn":"Eight of Wands",  
        },
        {
            "id":"wandsNine",
            "nameTC":"權杖九",
            "nameEn":"Nine of Wands",  
        },
        {
            "id":"wandsTen",
            "nameTC":"權杖十",
            "nameEn":"Ten of Wands",  
        },
        {
            "id":"wandsPage",
            "nameTC":"權杖侍從",
            "nameEn":"Page of Wands",  
        },
        {
            "id":"wandsKnight",
            "nameTC":"權杖騎士",
            "nameEn":"Knight of Wands",  
        },
        {
            "id":"wandsQueen",
            "nameTC":"權杖皇后",
            "nameEn":"Queen of Wands",  
        },
        {
            "id":"wandsKing",
            "nameTC":"權杖國王",
            "nameEn":"King of Wands",  
        },
    ];

// 聖杯牌資料
let minorArcanaCupsData = [
        {
            "id":"cupsAce",
            "nameTC":"聖杯王牌",
            "nameEn":"Ace of Cups",  
        },
        {
            "id":"cupsTwo",
            "nameTC":"聖杯二",
            "nameEn":"Two of Cups",  
        },
        {
            "id":"cupsThree",
            "nameTC":"聖杯三",
            "nameEn":"Three of Cups",  
        },
        {
            "id":"cupsFour",
            "nameTC":"聖杯四",
            "nameEn":"Four of Cups",  
        },
        {
            "id":"cupsFive",
            "nameTC":"聖杯五",
            "nameEn":"Five of Cups",  
        },
        {
            "id":"cupsSix",
            "nameTC":"聖杯六",
            "nameEn":"Six of Cups",  
        },
        {
            "id":"cupsSeven",
            "nameTC":"聖杯七",
            "nameEn":"Seven of Cups",  
        },
        {
            "id":"cupsEight",
            "nameTC":"聖杯八",
            "nameEn":"Eight of Cups",  
        },
        {
            "id":"cupsNine",
            "nameTC":"聖杯九",
            "nameEn":"Nine of Cups",  
        },
        {
            "id":"cupsTen",
            "nameTC":"聖杯十",
            "nameEn":"Ten of Cups",  
        },
        {
            "id":"cupsPage",
            "nameTC":"聖杯侍從",
            "nameEn":"Page of Cups",  
        },
        {
            "id":"cupsKnight",
            "nameTC":"聖杯騎士",
            "nameEn":"Knight of Cups",  
        },
        {
            "id":"cupsQueen",
            "nameTC":"聖杯皇后",
            "nameEn":"Queen of Cups",  
        },
        {
            "id":"cupsKing",
            "nameTC":"聖杯國王",
            "nameEn":"King of Cups",  
        },
    ];

// 寶劍牌資料
let minorArcanaSwordsData = [
        {
            "id":"swordsAce",
            "nameTC":"寶劍王牌",
            "nameEn":"Ace of Swords",  
        },
        {
            "id":"swordsTwo",
            "nameTC":"寶劍二",
            "nameEn":"Two of Swords",  
        },
        {
            "id":"swordsThree",
            "nameTC":"寶劍三",
            "nameEn":"Three of Swords",  
        },
        {
            "id":"swordsFour",
            "nameTC":"寶劍四",
            "nameEn":"Four of Swords",  
        },
        {
            "id":"swordsFive",
            "nameTC":"寶劍五",
            "nameEn":"Five of Swords",  
        },
        {
            "id":"swordsSix",
            "nameTC":"寶劍六",
            "nameEn":"Six of Swords",  
        },
        {
            "id":"swordsSeven",
            "nameTC":"寶劍七",
            "nameEn":"Seven of Swords",  
        },
        {
            "id":"swordsEight",
            "nameTC":"寶劍八",
            "nameEn":"Eight of Swords",  
        },
        {
            "id":"swordsNine",
            "nameTC":"寶劍九",
            "nameEn":"Nine of Swords",  
        },
        {
            "id":"swordsTen",
            "nameTC":"寶劍十",
            "nameEn":"Ten of Swords",  
        },
        {
            "id":"swordsPage",
            "nameTC":"寶劍侍從",
            "nameEn":"Page of Swords",  
        },
        {
            "id":"swordsKnight",
            "nameTC":"寶劍騎士",
            "nameEn":"Knight of Swords",  
        },
        {
            "id":"swordsQueen",
            "nameTC":"寶劍皇后",
            "nameEn":"Queen of Swords",  
        },
        {
            "id":"swordsKing",
            "nameTC":"寶劍國王",
            "nameEn":"King of Swords",  
        },
    ];

// 星幣牌資料
let minorArcanaPentaclesData = [
        {
            "id":"pentaclesAce",
            "nameTC":"星幣王牌",
            "nameEn":"Ace of Pentacles",  
        },
        {
            "id":"pentaclesTwo",
            "nameTC":"星幣二",
            "nameEn":"Two of Pentacles",  
        },
        {
            "id":"pentaclesThree",
            "nameTC":"星幣三",
            "nameEn":"Three of Pentacles",  
        },
        {
            "id":"pentaclesFour",
            "nameTC":"星幣四",
            "nameEn":"Four of Pentacles",  
        },
        {
            "id":"pentaclesFive",
            "nameTC":"星幣五",
            "nameEn":"Five of Pentacles",  
        },
        {
            "id":"pentaclesSix",
            "nameTC":"星幣六",
            "nameEn":"Six of Pentacles",  
        },
        {
            "id":"pentaclesSeven",
            "nameTC":"星幣七",
            "nameEn":"Seven of Pentacles",  
        },
        {
            "id":"pentaclesEight",
            "nameTC":"星幣八",
            "nameEn":"Eight of Pentacles",  
        },
        {
            "id":"pentaclesNine",
            "nameTC":"星幣九",
            "nameEn":"Nine of Pentacles",  
        },
        {
            "id":"pentaclesTen",
            "nameTC":"星幣十",
            "nameEn":"Ten of Pentacles",  
        },
        {
            "id":"pentaclesPage",
            "nameTC":"星幣侍從",
            "nameEn":"Page of Pentacles",  
        },
        {
            "id":"pentaclesKnight",
            "nameTC":"星幣騎士",
            "nameEn":"Knight of Pentacles",  
        },
        {
            "id":"pentaclesQueen",
            "nameTC":"星幣皇后",
            "nameEn":"Queen of Pentacles",  
        },
        {
            "id":"pentaclesKing",
            "nameTC":"星幣國王",
            "nameEn":"King of Pentacles",  
        },
    ];


    
// 雷諾曼牌資料
let lenormandData = [
        {
            "id":"1",
            "nameTC":"騎士",
            "nameEn":"Rider",  
        },
        {
            "id":"2",
            "nameTC":"幸運草",
            "nameEn":"Clover",  
        },
        {
            "id":"3",
            "nameTC":"船",
            "nameEn":"Ship",  
        },
        {
            "id":"4",
            "nameTC":"房子",
            "nameEn":"House",  
        },
        {
            "id":"5",
            "nameTC":"樹",
            "nameEn":"Tree",  
        },
        {
            "id":"6",
            "nameTC":"雲",
            "nameEn":"Clouds",  
        },
        {
            "id":"7",
            "nameTC":"蛇",
            "nameEn":"Snake",  
        },
        {
            "id":"8",
            "nameTC":"棺材",
            "nameEn":"Coffin",  
        },
        {
            "id":"9",
            "nameTC":"花束",
            "nameEn":"Bouquet",  
        },
        {
            "id":"10",
            "nameTC":"鐮刀",
            "nameEn":"Scythe",  
        },
        {
            "id":"11",
            "nameTC":"鞭子",
            "nameEn":"Whip",  
        },
        {
            "id":"12",
            "nameTC":"小鳥",
            "nameEn":"Birds",  
        },
        {
            "id":"13",
            "nameTC":"小孩",
            "nameEn":"Child",  
        },
        {
            "id":"14",
            "nameTC":"狐狸",
            "nameEn":"Fox",  
        },
        {
            "id":"15",
            "nameTC":"熊",
            "nameEn":"Bear",  
        },
        {
            "id":"16",
            "nameTC":"星星",
            "nameEn":"Stars",  
        },
        {
            "id":"17",
            "nameTC":"送子鳥",
            "nameEn":"Stork",  
        },
        {
            "id":"18",
            "nameTC":"狗",
            "nameEn":"Dog",  
        },
        {
            "id":"19",
            "nameTC":"高塔",
            "nameEn":"Tower",  
        },
        {
            "id":"20",
            "nameTC":"花園",
            "nameEn":"Garden",  
        },
        {
            "id":"21",
            "nameTC":"高山",
            "nameEn":"Mountain",  
        },
        {
            "id":"22",
            "nameTC":"道路",
            "nameEn":"Crossroads",  
        },
        {
            "id":"23",
            "nameTC":"老鼠",
            "nameEn":"Mice",  
        },
        {
            "id":"24",
            "nameTC":"愛心",
            "nameEn":"Heart",  
        },
        {
            "id":"25",
            "nameTC":"戒指",
            "nameEn":"Ring",  
        },
        {
            "id":"26",
            "nameTC":"書本",
            "nameEn":"Book",  
        },
        {
            "id":"27",
            "nameTC":"信件",
            "nameEn":"Letter",  
        },
        {
            "id":"28",
            "nameTC":"男人",
            "nameEn":"Man",  
        },
        {
            "id":"29",
            "nameTC":"女人",
            "nameEn":"Woman",  
        },
        {
            "id":"30",
            "nameTC":"百合花",
            "nameEn":"Lily",  
        },
        {
            "id":"31",
            "nameTC":"太陽",
            "nameEn":"Sun",  
        },
        {
            "id":"32",
            "nameTC":"月亮",
            "nameEn":"Moon",  
        },
        {
            "id":"33",
            "nameTC":"鑰匙",
            "nameEn":"Key",  
        },
        {
            "id":"34",
            "nameTC":"魚",
            "nameEn":"Fish",  
        },
        {
            "id":"35",
            "nameTC":"船錨",
            "nameEn":"Anchor",  
        },
        {
            "id":"36",
            "nameTC":"十字架",
            "nameEn":"Cross",  
        },
    ];

