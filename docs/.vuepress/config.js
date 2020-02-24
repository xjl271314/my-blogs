module.exports = {
  title: 'Blogs',
  description: '个人博客网站',
  dest: './dist',
  base: '/blogs/',
  repo: '',
  head: [
    ['link', { rel: 'icon', href: `/images/favicon.png` }],
    ['meta', { name: 'theme-color', content: '#00adb5' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#00adb5' }],
    ['meta', {name:'description', itemprop: 'description', content: '常用的js方法，js_tricks' }],
    ['meta', { itemprop: 'name', content: 'js_trick' }],
    ['meta', { itemprop: 'image', content: '/js_tricks/images/favicon.png' }],
  ],
  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2, 3] },
    config: md => {
      md.use(require('markdown-it-include'), './')
    }
  },
  themeConfig: {
    nav: [
      { text: 'css tricks', link: '' },
      { text: 'blog', link: '' },
      { text: 'GitHub', link: '' },
    ],
    sidebar: [
      '/dom/',
      '/bom/',
      {
        title: "js基础知识",
        collapsable: true,
        children: [
          "/javascript/script",
          "/javascript/noscript",
          "/javascript/scriptsort",
          "/javascript/strict",
          "/javascript/var",
          "/javascript/type",
          "/javascript/null",
          "/javascript/number",
          "/javascript/tostring",
          "/javascript/object",
          "/javascript/array",
          "/javascript/not",
          "/javascript/for-in",
          "/javascript/with",
          "/javascript/arguments",
          "/javascript/env",
          "/javascript/rubbish",
          "/javascript/regexp",
          "/javascript/function",
          "/javascript/url",
          "/javascript/math",
          "/javascript/oop",
          "/javascript/form",
          "/javascript/canvans",
          "/javascript/webgl",
          "/javascript/html5",
          "/javascript/cros",
          "/javascript/eventloop",
          "/javascript/copy",
          "/javascript/ajax",
          "/javascript/throtte"
        ]
      },
      '/es/',
      '/css/',
      '/http/',
      '/webmodule/',
      '/safe/',
      {
        title: "移动端知识",
        collapsable: true,
        children: [
          "/mobile/meta",
          "/mobile/tips"
        ]
      },
      {
        title: "React",
        collapsable: true,
        children: [
          "/react/lifestyle",
          "/react/redux",
          "/react/hooks",
          "/react/aria",
          "/react/codesplit",
          "/react/ref",
          "/react/hoc",
          "/react/jsx",
          "/react/portal",
          "/react/syntheticEvent"
        ]
      },
      {
        title: "Vue",
        collapsable: true,
      },
      {
        title: "数据库相关",
        collapsable: true,
      },
      {
        title: "开放性问题",
        collapsable: true,
        children: [
          "/open/font",
          "/open/px",
          "/open/module",
        ]
      }
    ]
  }
}
