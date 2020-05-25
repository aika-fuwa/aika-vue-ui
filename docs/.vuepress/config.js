module.exports = {
    title: 'Aika Vue UI',
    base: '/aika-vue-ui/',
    description: '一个超可爱的Vue组件库',
    port: '8888',
    plugins: [
        'vuepress-plugin-typescript',
        {
            tsLoaderOptions: {
                // ts-loader 的所有配置项
            },
        },
    ],
    themeConfig: {
        logo: '/assets/logo.jpeg',
        nav: [ // 导航栏
            { text: '首页', link: '/' },
            { text: '组件', link: '/component/introduction' },
            {
                text: '语言',
                items: [
                    { text: '中文', link: '/language/chinese/' },
                    { text: 'English', link: '/language/english/' }
                ]
            },
            { text: 'GitHub', link: 'https://github.com/aika-fuwa/aika-vue-ui' },
        ],
        sidebarDepth: 0,
        sidebar: { // 侧边栏
            '/component/': [
                {
                    title: '开发指南',
                    collapsable: false,
                    children: [
                        'introduction', 'install',
                    ]
                },
                {
                    title: '组件',
                    collapsable: false,
                    children: [
                        'button',
                    ]
                },
            ]
        }
    }
}