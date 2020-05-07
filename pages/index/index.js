const app = getApp();
Page({
  data: {
    CustomBar: app.globalData.CustomBar,
    viewList:["输入框","滑块框","事件选择框","日期选择框","图片上传"]
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  onLoad: function () {

  },
})
