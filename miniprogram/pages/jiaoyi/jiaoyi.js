const app = getApp();
const config = require("../../config.js");
Page({
    go(e) {
        if (e.currentTarget.dataset.status == '1') {
              if (!app.openid) {
                    wx.showModal({
                          title: '温馨提示',
                          content: '该功能需要注册方可使用，是否马上去注册',
                          success(res) {
                                if (res.confirm) {
                                      wx.navigateTo({
                                            url: '/pages/login/login',
                                      })
                                }
                          }
                    })
                    return false
              }
        }
        wx.navigateTo({
              url: e.currentTarget.dataset.go
        })
  },
}
)