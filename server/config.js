/**
 * 獎品設置
 * type: 唯一標識，0是默認特別獎的佔位符，其它獎品不可使用
 * count: 獎品數量
 * title: 獎品描述
 * text: 獎品標題
 * img: 圖片地址
 */
const prizes = [
    {
      "type": 11,
      "count": 1,
      "text": "王龍贊助",
      "title": "茅台生肖酒 一支",
      "img": "../img/gift.png"
    },
    {
      "type": 10,
      "count": 2,
      "text": "馬寶君贊助",
      "title": "3D震動潔膚儀",
      "img": "../img/gift.png"
    },
    {
      "type": 10,
      "count": 2,
      "text": "馬寶君贊助",
      "title": "聲波振動離子導入儀",
      "img": "../img/gift.png"
    },
    {
      "type": 9,
      "count": 1,
      "text": "張樂烽贊助",
      "title": "榮耀平板電腦",
      "img": "../img/gift.png"
    },
    {
      "type": 8,
      "count": 5,
      "text": "陳日飆贊助",
      "title": "華為WATCH智能手錶",
      "img": "../img/gift.png"
    },
    {
      "type": 7,
      "count": 5,
      "text": "蔡惠青贊助",
      "title": "巴寶莉女神香水禮盒",
      "img": "../img/gift.png"
    },
    {
      "type": 7,
      "count": 30,
      "text": "蔡惠青贊助",
      "title": "一家親酵素",
      "img": "../img/gift.png"
    },
    {
      "type": 6,
      "count": 10,
      "text": "唐建銘贊助",
      "title": "紅葡萄酒",
      "img": "../img/gift.png"
    },
    {
      "type": 5,
      "count": 10,
      "text": "盧騰光贊助",
      "title": "白葡萄酒",
      "img": "../img/gift.png"
    },
    {
      "type": 4,
      "count": 1,
      "text": "路遙贊助",
      "title": "THC可持續研學所免費SCI論文諮詢 1000小時",
      "img": "../img/gift.png"
    },
    {
      "type": 3,
      "count": 1,
      "text": "黎璇贊助",
      "title": "用友CRM系統 一年使用期",
      "img": "../img/gift.png"
    },
    {
      "type": 2,
      "count": 50,
      "text": "李建贊助",
      "title": "茶葉",
      "img": "../img/gift.png"
    },
    {
      "type": 1,
      "count": 60,
      "text": "曾許贊助",
      "title": "家裡香 文昌雞",
      "img": "../img/gift.png"
    }
];

/**
 * 一次抽取的獎品個數與prizes對應
 */
// const EACH_COUNT = [60, 50, 1, 1, 10, 10, 30, 5, 5, 1, 2, 2, 1];
const EACH_COUNT = [1, 2, 2, 1, 5, 5, 10, 10, 10, 1, 1, 10, 12]
/**
 * 卡片公司名稱標識
 */
const COMPANY = " ";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
