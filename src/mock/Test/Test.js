export default {
    url: '/aa/bb', // 当为完整链接，则不加config中的前缀
    type: 'get',
    // mock: true, // 判断此链接是否需要单独控制mock，不写默认为true
    template: {
        code: '1',
        msg: '调用接口成功',
        result: [
            {
               id: 1,
               name: '@cname'
            }
        ]
    }
}