//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto:"学习中..................",
    array: ['中国', '美国', '英国', '日本'],
    index: "",
    number:0,
    num:"请选择数字",
    arraynum:[],
    numTextColor:"#00d8a0"
  },

  bindPickerChange: function (e) {
    console.log(e.detail.value)
    index: e.detail.value
    this.setData({
      index: e.detail.value
    })
  },

  picknum:function(a){
    console.log(a.detail.value)
   this.setData({
     num : this.data.arraynum[a.detail.value] ,
     numTextColor:"#ff22ff"
   })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var arr = new Array(100)
    for (var i = 1; i < arr.length + 1; i++) {
      arr[i - 1] = i;
    }
    this.setData({
      arraynum: arr
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
