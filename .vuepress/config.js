module.exports = {
    lang: 'zh-cmn-Hans',
    title: '活力农场',
    description: '活力农场，勤劳用心养殖，提供可靠质量产品，过上幸福健康生活',
    port: 3000,
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    head: [
        ['link', {rel: 'icon', href: `/favicon.ico`}],
        ['meta', {name: 'keywords', content: '自然干净,蓝天绿草,健康活力,原生态农场'}],
    ],
    // 主题相关配置
    themeConfig: {
        // 导航栏链接
        nav: [
            {text: '主页', link: '/'},
            {text: '走地鸡', link: '/chicken'},
            {text: '游水鸭', link: '/duck'},
            // {text: '牛逼牛', link: '/ox'}
        ]
    },
    // 插件相关
    plugins: [
        ['@vuepress/medium-zoom', true]
    ]
}
