# 需求分析

## 同类型产品对比

主要对比element-ui/antd/iVew，没有将vant纳入范围是因为这是个移动端的UI库

组件/功能 | [Element](https://element.eleme.cn/#/zh-CN/component/layout) | [antd](https://ant.design/components/layout-cn/) | [iView](http://v1.iviewui.com/components/grid)
-|:-:|:-:|:-:
基础支持 |  |  |
国际化 | √ | √ | √
定制主题 | √ | √ | √
字体 | √ | × | √
基础组件 |||
[栅格](https://ant.design/components/grid-cn/) | √ | √ | √
[布局](https://ant.design/components/layout-cn/) | √ | √ | √
弹出框 | √ | √ | √
按钮 | √ | √ | √
icon | √ | √ | √
导航组件 |||
[固钉](https://ant.design/components/affix-cn/) | × | √ | √
[分割线](https://ant.design/components/divider-cn/) | √ | √ | √
[面包屑](https://ant.design/components/breadcrumb-cn/) | √ | √ | √
[导航菜单](https://ant.design/components/menu-cn/) | √ | √ | √
[分页](https://ant.design/components/pagination-cn/) | √| √ | √
[页头](https://ant.design/components/page-header-cn/) | √ | √ | ×
[步骤条](https://ant.design/components/steps-cn/) | √ | √ | √
[标签页](https://www.iviewui.com/components/tabs) | √ | √ | √
[徽标](https://www.iviewui.com/components/badge) | √ | √ | √
[锚点](https://www.iviewui.com/components/anchor#Anchor_props) | × | √ | √
表单|||
[自动完成](https://ant.design/components/auto-complete-cn/) | √ | √ | √
[输入框](https://ant.design/components/input-cn/) | √ | √ | √
数字输入框 | √ | √ | √
滑动输入条 | √ | √ | √
单选框 | √ | √ | √
多选框 | √ | √ | √
开关 | √ | √ | √
选择器 | √ | √ | √
[级联选择](https://ant.design/components/cascader-cn/) | √ | √ | √
树选择器| × | √ | ×
日期选择| √ | √ | √
时间选择| √ | √ | √
评分 | √ | √ | √
穿梭框 | √ | √ | √
选择器 | √ | × | √
表单 | √ | √ | √
上传 | √ | √ | √
数据展示|||
头像| √ | √ | √
评论| × | √ | ×
折叠面板| √ | √ | √
走马灯| √ | √ | √
卡片| √ | √ | √
日历| √ | √ | ×
空状态| × | × | √
气泡卡片| √ | √ | √
统计数据| × | √ | ×
文字提示tooltip| √ | √ | √
loading| √ | √ | √
tab| √ | √ | √
时间轴| √ | √ | √
表格| √ | √ | √
树形控件| √ | √ | √
反馈|||
警告提示| √ | √ | √
进度条| √ | √ | √
全局提示| √ | √ | √
抽屉| √ | √ | √
全局提示| √ | √ | √
通知| √ | √ | √
结果| × | √ | ×
骨架屏| × | √ | ×
其他|||
回到顶部| × | √ | √
无限滚动| √ | × | √
图片| √ | × | ×
进度环| × | × | √

## 关于颜色

1. 主色
2. 辅助色(成功、警告、失败)
3. 中性色(标题，正文等层次结构)

## 字体

1. 大概就是12px,14px,16px,20px,24px这样+2/+4上升的情况
2. 行高基本就是1.5(antd定的最细)
