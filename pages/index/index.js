const app = getApp();
Page({
    data: {
        CustomBar: app.globalData.CustomBar,
        viewList: [
            {
                name: "输入框",
                type: 'TYPE_INPUT_TEXT'
            }, {
                name: "时间选择框",
                type: 'TYPE_SELECT_TIME'
            }, {
                name: "日期选择框",
                type: 'TYPE_TIMESTAMP_TEXT'
            }, {
                name: "下拉选择框",
                type: 'TYPE_SELECT'
            }, {
                name: "图片上传",
                type: 'TYPE_PIC'
            }],
        dataList: []
        /**
         id: "",
         readOnly: false,
         label: "",
         type: "",
         defaultValue: "",
         help: "",
         required: false,
         select_options: [],
         minPics: 1,
         maxPics: 1,
         */
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
    selectView(e) {
        this.hideModal()
        let view_type = e.currentTarget.dataset.viewType
        if (view_type == 'TYPE_INPUT_TEXT') {
            wx.navigateTo({
                url: '/pages/editInputView/editInputView'
            })
        }
        if (view_type == 'TYPE_SELECT') {
            wx.navigateTo({
                url: '/pages/editSelectView/editSelectView'
            })
        }
    },
    onLoad: function () {

    },

    onShow() {
        //更新上传模版

    }

})
