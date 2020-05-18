// pages/editSelectView/editSelectView.js
Page({
    data: {
        optionList: [""],
        bean: {
            id: "",
            readOnly: false,
            label: "",
            type: "TYPE_SELECT",
            defaultValue: "",
            help: "",
            required: false,
            select_options: [],
        }
    },
    onLoad: function (options) {

    },
    addOption: function (e) {
        let list = this.data.optionList;
        list.push("")
        this.setData({
            optionList: list
        })
    },
    delOption: function (e) {
        let id = e.currentTarget.dataset.id
        let list = this.data.optionList;
        list.splice(id, 1)
        this.setData({
            optionList: list
        })
    },
    getInputVal: function (e) {
        var nowIdx = e.currentTarget.dataset.idx //当前的id
        var val = e.detail.value;//获取输入的值
        var oldVal = this.data.optionList;
        oldVal[nowIdx] = val;//修改对应索引值的内容
        this.setData({
            optionList: oldVal
        })
    },
    option_title: function (e) {
        var title = e.detail.value;
        this.data.bean.label = title
    },
    btnSave: function (e) {
        this.data.bean.select_options = this.data.optionList
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
    btnCancel: function (e) {
        wx.navigateBack()
    }
})