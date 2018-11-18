module.exports = {
    title: '活力农场',
    description: '活力农场，勤劳用心养殖，提供可靠质量产品，过上幸福健康生活',
    port: 3000,
    head: [
        ['link', {rel: 'icon', href: `/favicon.ico`}],
    ],
    // 主题相关配置
    themeConfig: {
        // 导航栏链接
        nav: [
            // {text: '指南', link: '/'},
            {text: '走地鸡', link: '/chicken'},
            // {text: '游水鸭', link: '/duck'},
            // {text: '牛逼牛', link: '/ox'}
        ],
        sidebar: 'auto'
    }
}