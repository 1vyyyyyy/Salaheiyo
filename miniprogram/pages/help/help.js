var app = getApp();
var db = wx.cloud.database();

Page({
      /**
       * 页面的初始数据
       */
      data: {
            list: [{
                  title: '该程序是做什么的？',
                  id: 0,
                  des: ['来自北京邮电大学',
                        '书旯嘿邮————北邮人的二手书自主交易平台'
                  ],
                  check: true,
            }, {
                  title: '该程序收费吗？',
                  id: 1,
                  des: ['本程序是完全的公益项目，永久承诺不收取任何中介费，您可以随心所欲的发布自己的书籍和购买'],
                  check: false,
            }, {
                  title: '为什么要留下联系方式？',
                  id: 2,
                  des: ['本程序交易完全由交易双方沟通。', '除非程序出现问题导致交易故障，平台不参与任何交易'],
                  check: false,
            }, ]
      },
      onReady() {},

      show(e) {
            var that = this;
            let ite = e.currentTarget.dataset.show;
            let list = that.data.list;
            if (!ite.check) {
                  list[ite.id].check = true;
            } else {
                  list[ite.id].check = false;
            }
            that.setData({
                  list: list
            })
      },
      //跳转页面
      go(e) {
            wx.navigateTo({
                  url: e.currentTarget.dataset.go
            })
      },
      onLoad() {

      },

})