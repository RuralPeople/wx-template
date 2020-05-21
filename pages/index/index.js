const app = getApp();
Page({
    data: {
        CustomBar: app.globalData.CustomBar,
        selectIndex: null,
        time: '12:01',
        date: '2018-12-25',
        imgList: [],
        viewList: [
            {
                name: "输入框",
                type: 'TYPE_INPUT_TEXT'
            }, {
                name: "时间选择框",
                type: 'TYPE_TIMESTAMP_TEXT'
            }, {
                name: "日期选择框",
                type: 'TYPE_DATE_TEXT'
            }, {
                name: "下拉选择框",
                type: 'TYPE_SELECT'
            }, {
                name: "图片上传",
                type: 'TYPE_PIC'
            }],
        dataList: [{
            "id": "0",
            "readOnly": false,
            "label": "23213",
            "type": "TYPE_INPUT_TEXT",
            "defaultValue": "",
            "help": "21312312",
            "required": false
        }]
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
        // var paraBuff = {
        //     "survey": {"0":"你好"},
        //     "mouldid": "2",
        //     "surveyuser": "222"
        // }
        // paraBuff = JSON.stringify(paraBuff)
        // wx.request({
        //     url: "http://140.143.247.239:8180/fw3/ws/addSuryveyInfo",
        //     method: "GET",
        //     data: {
        //         key: 1,
        //         para: paraBuff
        //     },
        //     header: {
        //         "zy-user-token": "QaOlf2cChXt42Zf3JtAXJQ=="
        //     },
        //     success: function (res) {
        //         if (res.data.code == 0) {
        //             console.log(res.data.data)
        //         } else {
        //             console.log(res.data.msg)
        //         }
        //     },
        //     fail: function (err) {
        //         console.log(err)
        //     }
        // })
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
        if (view_type == 'TYPE_TIMESTAMP_TEXT') {
            wx.navigateTo({
                url: '/pages/editTimeView/editTimeView'
            })
        }
        if (view_type == 'TYPE_DATE_TEXT') {
            wx.navigateTo({
                url: '/pages/editDateView/editDateView'
            })
        }
        if (view_type == 'TYPE_PIC') {
            wx.navigateTo({
                url: '/pages/edituploadpic/edituploadpic'
            })
        }
    },
    onLoad: function () {
        var that = this
        var paraBuff = {
            "pageindex": 1,
            "pagesize": 20,
            "queryparameters": {}
        }
        paraBuff = JSON.stringify(paraBuff)
        wx.request({
            url: "http://140.143.247.239:8180/fw3/ws/querySuryveyMould",
            method: "GET",
            data: {
                key: 1,
                para: paraBuff
            },
            header: {
                "zy-user-token": "QaOlf2cChXt42Zf3JtAXJQ=="
            },
            success: function (res) {
                if (res.data.code == 0) {
                    for (let i = 0; i < 2; i++) {
                        console.log(res.data.data.list[i])
                        // that.setData({
                        //     dataList:res.data.data.list[i]
                        // })
                    }


                } else {
                    console.log(res.data.msg)
                }
            },
            fail: function (err) {
                console.log(err)
            }
        })
    },

    onShow() {

    },
    btnSave(e) {
        //更新上传模版
        if (this.data.dataList.length != 0) {
            for (var index in this.data.dataList) {
                this.data.dataList[index].id = index
            }
            var paraBuff = {
                "mould": this.data.dataList
            }
            paraBuff = JSON.stringify(paraBuff)
            wx.request({
                url: "http://140.143.247.239:8180/fw3/ws/addSuryveyMould",
                method: "GET",
                data: {
                    key: 1,
                    para: paraBuff
                },
                header: {
                    "zy-user-token": "QaOlf2cChXt42Zf3JtAXJQ=="
                },
                success: function (res) {
                    if (res.data.code == 0) {
                        console.log(res.data.data)
                    } else {
                        console.log(res.data.msg)
                    }
                },
                fail: function (err) {
                    console.log(err)
                }
            })
        }
    },
    PickerChange(e) {
        this.setData({
            selectIndex: e.detail.value
        })
    },
    TimeChange(e) {
        this.setData({
            time: e.detail.value
        })
    },
    DateChange(e) {
        this.setData({
            date: e.detail.value
        })
    }, ChooseImage() {
        wx.chooseImage({
            count: 4, //默认9
            sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album'], //从相册选择
            success: (res) => {
                if (this.data.imgList.length != 0) {
                    this.setData({
                        imgList: this.data.imgList.concat(res.tempFilePaths)
                    })
                } else {
                    this.setData({
                        imgList: res.tempFilePaths
                    })
                }
            }
        });
    },
    ViewImage(e) {
        wx.previewImage({
            urls: this.data.imgList,
            current: e.currentTarget.dataset.url
        });
    },
    DelImg(e) {
        wx.showModal({
            title: '提示',
            content: '确定要删除吗？',
            cancelText: '再看看',
            confirmText: '再见',
            success: res => {
                if (res.confirm) {
                    this.data.imgList.splice(e.currentTarget.dataset.index, 1);
                    this.setData({
                        imgList: this.data.imgList
                    })
                }
            }
        })
    },
})
