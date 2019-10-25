import Mock from 'mockjs';
// const Mock = require('mockjs')
Mock.setup({
    timeout: 0 - 300
})
const Random = Mock.Random;
// Line 数据
let line = []
for (let i = 0; i < 12; i++) {
    let data = Mock.mock({
        date: i + 1,
        money: Random.integer(100, 99999)

    })
    line.push(data);
}
//Bar 
let bar = [];
let job = ['前端','后台','运维']
for(let i=0;i<4;i++ ){
    for(let j =0;j<3;j++){
        bar.push(Mock.mock({
            year:2016+i,
            job:job[j],
            num:Random.float(3.2,20.8,1,2)
        }))
    }
}
//pie 
let pie =[]
let pieKind = ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'] 
for(let i=0;i<5;i++){
    pie.push(Mock.mock({
        name:pieKind[i],
        value:Random.integer(300,2000)
    }))
}
let echartsData = {
    line,
    bar,
    pie
}
Object.keys(echartsData).map(item => {
    // console.log(item,echartsData[item])
    Mock.mock(`/api/chart/${item}`, echartsData[item])
})
// Mock.mock('/api/chart/line','get',arr)
Mock.mock('/api/users/checkUser', 'post', {
    success: 1
})