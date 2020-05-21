Component({
    options: {
        addGlobalClass: true,
        index: null,
    },
    data: {},
    methods: {
      PickerChange(e) {
        console.log(e);
        this.setData({
          index: e.detail.value
        })
      },
    }
})