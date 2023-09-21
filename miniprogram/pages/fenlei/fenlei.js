const db = wx.cloud.database()
const $ = db.command.aggregate
const { getCity, getCo } = require("../../config.js");
const config = require("../../config.js");
Page({
	data: {
		tabs: [],
		tabCur: 0, //默认选中
		lefts: [],
		leftCur: 0,
		rights: [],
		majs: [],
		majCur: 0
	},
	onLoad: function (options) {
		db.collection('publish').aggregate()
			.group({
				_id: '$gradeid'
			})
			.sort({
				gradesort: 1,
			})
			.end()
			.then(res => {
				console.log('年级', res)
				this.setData({
					tabs: res.list
				})
				this.college(res.list[0]._id)
			})
	},

	college() {
		let gradeid = this.data.tabs[this.data.tabCur]._id
		db.collection('publish').aggregate()
			.match({
				gradeid
			})
			.group({
				_id: '$collegeid'
			})
			.sort({
				collegesort: -1
			})
			.end()
			.then(res => {
				console.log(gradeid + '', res)
				this.setData({
					lefts: res.list
				})
				this.bookinfo()
			})
	},
	
	bookinfo() {
		let gradeid = this.data.tabs[this.data.tabCur]._id
		let collegeid = this.data.lefts[this.data.leftCur]._id
		db.collection('publish')
			.where({
				gradeid,
				collegeid
			}).get()
			.then(res => {
				console.log(gradeid + collegeid + '', res)
				this.setData({
					rights: res.data
				})
			})
	},

	bookinfo1() {
		let gradeid = this.data.tabs[this.data.tabCur]._id
		let collegeid = this.data.lefts[this.data.leftCur]._id
		let majorid = this.data.majs[this.data.majCur]._id
		db.collection('publish')
			.where({
				gradeid,
				collegeid,
				majorid
			}).get()
			.then(res => {
				console.log(gradeid + collegeid + '' + majorid, res)
				this.setData({
					majs: res.data
				})
			})
	},
	//顶部选择分类条目
	tabSelect(e) {
		this.setData({
			tabCur: e.currentTarget.dataset.id,
			scrollLeft: (e.currentTarget.dataset.id - 2) * 200
		}, success => {
			this.college()
		})
	},
	detail(e) {
		let that = this;
		wx.navigateTo({
			  url: '/pages/detail/detail?scene=' + e.currentTarget.dataset.id,
		})
  	},
  //左侧条目选择
  
	switchLeftTab(e) {
		let index = e.target.dataset.index;
		this.setData({
			leftCur: index,
		}, success => {
			this.bookinfo()
		})
	},
})