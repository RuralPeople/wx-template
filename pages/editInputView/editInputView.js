Page({
    data: {
        title_str: "",
        placeholder_str: "",
        bean: {
            id: "",
            readOnly: false,
            label: "",
            type: "TYPE_INPUT_TEXT",
            defaultValue: "",
            help: "",
            required: false,
        }
    },

    onLoad: function (options) {

    },
    get_input_title: function (e) {
        this.setData({
            title_str: e.detail.value
        })
    },
    get_input_placeholder: function (e) {
        this.setData({
            placeholder_str: e.detail.value
        })
    },

    btn_cancel(e) {

    },
    btn_save(e) {



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