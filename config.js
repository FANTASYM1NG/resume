var app = new Vue({
  el: '#page',
  data: {
    网页名称: '袁铭的个人简历',
    姓名: '袁铭',
    号码: '18601723549',
    邮箱: 'about_you123@126.com',
    个人网页: 'https://fantasym1ng.github.io/resume/',
    地址: '上海',
    职业: '中国联通产品运营',
    头像地址: 'images/user.png',
    
    工作经历: [
      {
        职业名称: '中国联通产品运营',
        公司名称: '中国联通',
        时间: '2018 - 现在',
        介绍: '主要负责物联网产品的运营管理工作'
      }
    ],
    /** 教育经历*/
    教育经历: [
      {
        学段: '大学',
        学校名称: '北京邮电大学',
        时间: '2014 - 2018',
        介绍: '就读于经济管理学院信息管理与信息系统专业'
      }
    ],

    我的能力: [
      {
        名称: 'office软件',
        图标: '学校名称',
        介绍: '熟练掌握'
      },
      {
        名称: 'Python',
        图标: '学校名称',
        介绍: '大学期间自学Python进行数据爬取'
      },
      {
        名称: '乒乓球',
        图标: '学校名称',
        介绍: '平时喜欢打乒乓'
      }
    ],
    /** 我的技能*/
    我的技能: [
      {
        名称: 'office软件',
        进度: 80,
      },
      {
        名称: 'Python',
        进度: 70
      },
      {
        名称: '乒乓球',
        进度: 70
      }
    ],
    /** 我的作品*/
    我的作品: [
      {
        名称: '个人简历设计',
        地址: 'www.baidu.com',
        图片: 'images/pic.jpg',
        简介: '个人简历设计'
      }
    ]
  },
  mounted () {
    document.title = this.网页名称
  }
})