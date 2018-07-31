var app = getApp()
Page({
    data: {
        navLeftItems: [],
        navRightItems: [],
        curNav: 1,
        activeCategoryId: 0,
        curIndex: 0
        
    },
    onLoad: function() {

        var that = this
        
        wx.request({
          url: 'https://api.it120.cc/' + app.globalData.subDomain + '/shop/goods/category/all',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                that.setData({
                    navLeftItems: res.data,
                    navRightItems: res.data
                })
            }
        })
    },

    //事件处理函数
    switchRightTab: function(e) {
        let id = e.target.dataset.id,
			index = parseInt(e.target.dataset.index);
		this.setData({
			curNav: id,
			curIndex: index
		})
    }

})


