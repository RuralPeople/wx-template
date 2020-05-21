// pages/editDateView/editDateView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title_str: "",
    placeholder_str: "",
    bean: {
      id: "",
      readOnly: false,
      label: "",
      type: "TYPE_DATE_TEXT",
      defaultValue: "",
      help: "",
      required: false,
    }
  },
  get_input_title: function (e) {
    this.setData({
      title_str: e.detail.value
    })
  },
  btnCancel(e) {
    wx.navigateBack()
  },
  btnSave(e) {
    this.data.bean.label = this.data.title_str
    this.data.bean.help = this.data.placeholder_str
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
    var list = prevPage.data.dataList
    list.push(this.data.bean)
    prevPage.setData({
      dataList: list
    });
    wx.navigateBack({
      delta: 1
    })
  },
})