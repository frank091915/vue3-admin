// 导入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random

// mock新闻数据，包括新闻标题title、内容content、创建时间createdTime
function produceNewsData() {
  const newsList = []
  for (let i = 0; i < 20; i++) {
    const newNewsObject = {
      //  Random.ctitle( min, max) 随机产生一个中文标题，长度默认在3-7之间
      title: Random.ctitle(),
      // Random.cparagraph(min, max) 随机生成一个中文段落，段落里的句子个数默认3-7个
      content: Random.cparagraph(),
      // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd
      createdTime: Random.date()
    }
    newsList.push(newNewsObject)
  }
  return newsList
}

// 拦截该url，就可以返回newsList
Mock.mock('/api/sys/login', 'post', produceNewsData)
