var data = {
      //云开发环境id
      env: 'cloud1-1gjzw5ez07a52837',
      //分享配置
      share_title: '书旯嘿邮',
      share_img: '/images/poster.jpg', //可以是网络地址，本地文件路径要填绝对位置
      share_poster:'https://mmbiz.qpic.cn/mmbiz_jpg/nJPznPUZbhpA064Cl78xxvzBYTDa6O1Kl7RY1K6TerBaXcUf5AoN6x7s8q7xHgeu0Cl5qarPzE6ibbQZasWRErg/640',//必须为网络地址
      //客服联系方式
      kefu: {
            weixin: 'i1vyyyyyy_0fflin3',
            qq: '1258294332',
            gzh: 'https://mmbiz.qpic.cn/mmbiz_png/nJPznPUZbhpKCwnibUUqnt7BQXr3MbNsasCfsBd0ATY8udkWPUtWjBTtiaaib6rTREWHnPYNVRZYgAesG9yjYOG7Q/640', //公众号二维码必须为网络地址
            phone: '18383227812' //如果你不设置电话客服，就留空
      },
      //默认启动页背景图，防止请求失败完全空白 
      //可以是网络地址，本地文件路径要填绝对位置
      bgurl: '/images/start.jpg',
      //校区
      campus: [{
                  name: '沙河校区',
                  id: 0
            },
            {
                  name: '西土城校区',
                  id: 1
            },
           
      ],
      //年级
      grade: [{
                  name: '大一',
                  id: -1
            },
            {
                  name: '大二',
                  id: 0
            },
            {
                  name: '大三',
                  id: 1
            },
            {
                  name: '大四',
                  id: 2
            },
            {
                  name: '研一',
                  id: 3
            },
            {
                  name: '研二',
                  id: 4
            },
            {
                  name: '研三',
                  id: 5
            },
            {
                  name: '其他',
                  id: 6
            }
      ],
      //配置学院，建议不要添加太多，不然前端不好看
      college: [{
                  name: '信通',
                  id: -1,
                  nickname: '信息与通信工程学院',
                  branch: [{name:"通信工程",id:-1}, {name:"电子信息工程",id:0}, {name:"空间信息与数字技术",id:1},{name:"通用",id:2}],
            },
            {
                  name: '计科',
                  id: 0,
                  nickname: '计算机学院（国家示范性软件学院）',
                  branch: [{name:"计算机科学与技术",id:-1}, {name:"网络工程",id:0}, {name:"数据科学与大数据技术",id:1}, {name:"软件工程",id:2},{name:"通用",id:3}]
            },
            {
                  name: '电子',
                  id: 1,
                  nickname: '电子工程学院',
                  branch: [{name:"电子科学与技术",id:-1}, {name:"电子信息科学与技术",id:0}, {name:"光电信息科学与工程",id:1}, {name:"电磁场与无线技术",id:2},{name:"通用",id:3}]
            },
            {
                  name: '网安',
                  id: 2,
                  nickname: '网络空间安全学院',
                  branch: [{name:"信息安全",id:-1}, {name:"网络空间安全",id:0}, {name:"密码科学与技术",id:1},{name:"通用",id:2}]
            },
            {
                  name: 'AI',
                  id: 3,
                  nickname: '人工智能学院',
                  branch: [{name:"智能科学与技术",id:-1}, {name:"信息工程",id:0}, {name:"人工智能",id:1}, {name:"测控技术与仪器",id:2},{name:"通用",id:3}]
            },
            {
                  name: '数媒',
                  id: 4,
                  nickname: '数字媒体与设计艺术学院',
                  branch: [{name:"工业设计",id:-1}, {name:"数字媒体技术",id:1}, {name:"数字媒体艺术",id:2}, {name:"网络与新媒体",id:3}, {name:"智能交互设计",id:4},{name:"通用",id:5}]
            },
            {
                  name: '邮政',
                  id: 5,
                  nickname: '现代邮政学院（自动化学院）',
                  branch: [{name:"邮政工程",id:-1}, {name:"邮政管理",id:0}, {name:"电子商务",id:1}, {name:"机械工程",id:2}, {name:"物流工程",id:3},{name:"通用",id:4}]
            },
            {
                  name: '经管',
                  id: 6,
                  nickname: '经济管理学院',
                  branch: [{name:"工程管理",id:-1}, {name:"信息管理与信息系统",id:0}, {name:"工商管理",id:1}, {name:"市场营销",id:2}, {name:"会计学",id:3}, {name:"经济学",id:4}, {name:"国际经济与贸易",id:5}, {name:"公共事业管理",id:6}, {name:"大数据应用与管理",id:7}, {name:"金融科技",id:8},{name:"通用",id:9}]
            },
            {
                  name: '人文',
                  id: 7,
                  nickname: '人文学院',
                  branch: [{name:"英语",id:-1}, {name:"日语",id:0}, {name:"法学",id:1}, {name:"汉语言",id:2},{name:"通用",id:3}]
            },
            {
                  name: '理院',
                  id: 8,
                  nickname: '理学院',
                  branch: [{name:"数学与应用数学",id:-1}, {name:"信息与计算科学",id:0}, {name:"应用物理学",id:1}, {name:"材料科学与工程",id:2},{name:"通用",id:3}]
            },
            {
                  name: '国院',
                  id: 9,
                  nickname: '国际学院',
                  branch: [{name:"电信工程及管理",id:-1}, {name:"物联网工程",id:0}, {name:"电子商务及法律",id:1},{name:"通用",id:2}]
            },
            {
                  name: '文学类',
                  id: 10,
                  nickname: '文学类',
                  branch: [{name:"外国文学",id:-1},{name:"国内文学",id:0}]
            },
            {
                  name: '杂志类',
                  id: 11,
                  nickname: '杂志类',
                  branch: [{name:"科技",id:-1},{name:"人文",id:0},{name:"其他",id:1}]
            },
            {
                  name: '技术类',
                  id: 12,
                  nickname: '技术类',
                  branch: [{name:"开发",id:-1},{name:"安全",id:0},{name:"人工智能",id:1},{name:"其他",id:2}]
            },
      ],
      
}
//下面的就别动了
function formTime(creatTime) {
      let date = new Date(creatTime),
            Y = date.getFullYear(),
            M = date.getMonth() + 1,
            D = date.getDate(),
            H = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds();
      if (M < 10) {
            M = '0' + M;
      }
      if (D < 10) {
            D = '0' + D;
      }
      if (H < 10) {
            H = '0' + H;
      }
      if (m < 10) {
            m = '0' + m;
      }
      if (s < 10) {
            s = '0' + s;
      }
      return Y + '-' + M + '-' + D + ' ' + H + ':' + m + ':' + s;
}

function days() {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      if (month < 10) {
            month = '0' + month;
      }
      if (day < 10) {
            day = '0' + day;
      }
      let date = year + "" + month + day;
      return date;
}
function getCity(e) {
      return data.grade[e];
}
function getCo(e) {
      return data.college[e];
}
function getMa() {
      return getMa().branch;
}
module.exports = {
      data: JSON.stringify(data),
      formTime: formTime,
      days: days,
      getCity: getCity,
      getCo: getCo,
      getMa: getMa
}