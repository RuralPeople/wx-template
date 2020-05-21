// pages/editTimeView/editTimeView.js
Page({


  data: {
    title_str: "",
    placeholder_str: "",
    bean: {
      id: "",
      readOnly: false,
      label: "",
      type: "TYPE_TIMESTAMP_TEXT",
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