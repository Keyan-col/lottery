/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
    {
      "type": 11,
      "count": 1,
      "text": "王龙赞助",
      "title": "茅台生肖酒 一支",
      "img": "../img/gift.png"
    },
    {
      "type": 10,
      "count": 2,
      "text": "马宝君赞助",
      "title": "3D震动洁肤仪(2000HKD)",
      "img": "../img/gift.png"
    },
    {
      "type": 10,
      "count": 2,
      "text": "马宝君赞助",
      "title": "声波振动离子导入仪（价值2500HKD）",
      "img": "../img/gift.png"
    },
    {
      "type": 9,
      "count": 1,
      "text": "张乐烽赞助",
      "title": "荣耀平板电脑",
      "img": "../img/gift.png"
    },
    {
      "type": 8,
      "count": 5,
      "text": "陈日飙赞助",
      "title": "华为WATCH智能手表",
      "img": "../img/gift.png"
    },
    {
      "type": 7,
      "count": 5,
      "text": "蔡惠青赞助",
      "title": "巴寶莉女神香水礼盒",
      "img": "../img/gift.png"
    },
    {
      "type": 7,
      "count": 30,
      "text": "蔡惠青赞助",
      "title": "一家親酵素",
      "img": "../img/gift.png"
    },
    {
      "type": 6,
      "count": 10,
      "text": "唐建铭赞助",
      "title": "红葡萄酒",
      "img": "../img/gift.png"
    },
    {
      "type": 5,
      "count": 10,
      "text": "卢腾光赞助",
      "title": "白葡萄酒",
      "img": "../img/gift.png"
    },
    {
      "type": 4,
      "count": 1,
      "text": "路遥赞助",
      "title": "THC可持续研学所免费SCI论文咨询 1000小时",
      "img": "../img/gift.png"
    },
    {
      "type": 3,
      "count": 1,
      "text": "黎璇赞助",
      "title": "用友CRM系统 一年使用期",
      "img": "../img/gift.png"
    },
    {
      "type": 2,
      "count": 50,
      "text": "李建赞助",
      "title": "茶叶",
      "img": "../img/gift.png"
    },
    {
      "type": 1,
      "count": 60,
      "text": "曾许赞助",
      "title": "家里香 文昌鸡",
      "img": "../img/gift.png"
    }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
// const EACH_COUNT = [60, 50, 1, 1, 10, 10, 30, 5, 5, 1, 2, 2, 1];
const EACH_COUNT = [1, 2, 2, 1, 5, 5, 10, 10, 10, 1, 1, 10, 12]
/**
 * 卡片公司名称标识
 */
const COMPANY = " ";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
