//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    name:'御天传奇OL',
    games:[
      {
        name:'御天传奇OL',
        people:'51',
      },
      {
        name: '封神单机',
        people: '50',
      },
      {
        name: '神域之门',
        people: '48',
      },
      {
        name: '热血三国无双',
        people: '256',
      }
    ],
    advs:[
      {},
      {}
    ],
    othergames:[
      {
        name: '街头漂移',
        people: '21',
      },
      {
        name: '开心王者鲲',
        people: '34',
      },
      {
        name: '七彩飞刀',
        people: '15',
      },
      {
        name: '六角连连线',
        people: '22',
      },
      {
        name: '加一消消乐',
        people: '89',
      },
      {
        name: '星球飞刀手',
        people: '50',
      },
      {
        name: '急速冲击',
        people: '79',
      },
      {
        name: '王者打僵尸',
        people: '68',
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  createGame(){
    let ytcq = {
      name:'御天传奇OL',
      people:'51'
    }
    let tableID = '45566'
    let Games = new wx.BaaS.TableObject(tableID)
    let game = Games.create()

    game.set(ytcq).save().then(res => {
      console.log(res.data)
    },err => {

    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
