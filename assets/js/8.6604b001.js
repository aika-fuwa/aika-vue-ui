(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{366:function(e,t,a){"use strict";a.r(t);var v=a(24),s=Object(v.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"分支管理规范与发包管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支管理规范与发包管理"}},[e._v("#")]),e._v(" 分支管理规范与发包管理")]),e._v(" "),a("h2",{attrs:{id:"分支命名及功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支命名及功能"}},[e._v("#")]),e._v(" 分支命名及功能")]),e._v(" "),a("ul",[a("li",[e._v("master 主分支，主版本所在")]),e._v(" "),a("li",[e._v("dev 新版本的公用开发分支")]),e._v(" "),a("li",[e._v("feature-something feature开发分支，合入dev后可删除")]),e._v(" "),a("li",[e._v("fix-something 本地bug修复，合入dev后可删除")]),e._v(" "),a("li",[e._v("x.x-release 发版分支，发版后过一定时间后可删")]),e._v(" "),a("li",[e._v("x.x-fix-something/issueId 某版本的bug修复分支")]),e._v(" "),a("li",[e._v("x.x-stable 某版本的稳定分支")])]),e._v(" "),a("h2",{attrs:{id:"工作流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作流"}},[e._v("#")]),e._v(" 工作流")]),e._v(" "),a("h3",{attrs:{id:"日常提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日常提交"}},[e._v("#")]),e._v(" 日常提交")]),e._v(" "),a("ol",[a("li",[e._v("日常开发时，在自己的分支上随意commit与push。一个feature开发完毕后准备合入dev分支。")]),e._v(" "),a("li",[e._v("合入之前可以用rebase -i整理下自己的commit，"),a("a",{attrs:{href:"https://juejin.im/entry/5ae9706d51882567327809d0",target:"_blank",rel:"noopener noreferrer"}},[e._v("随便找了个相关文章，可以看看"),a("OutboundLink")],1),e._v("。合入完毕后git push，如果基准有修改的情况可能需要git push -f(此命令只能在自己的开发分支上搞)")]),e._v(" "),a("li",[e._v("将自己分支合入dev时在github上提一个pull request，有1人review后再合入。")])]),e._v(" "),a("h3",{attrs:{id:"其他注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他注意事项"}},[e._v("#")]),e._v(" 其他注意事项")]),e._v(" "),a("ul",[a("li",[e._v("本地分支合入其他分支时也需要用git rebase。个人经验是，比如我要合并origin/dev分支了，先git stash，然后git rebase origin/dev，然后apply stash。")])]),e._v(" "),a("h3",{attrs:{id:"版本开发流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本开发流程"}},[e._v("#")]),e._v(" 版本开发流程")]),e._v(" "),a("ol",[a("li",[e._v("总结需求得出要开发的feature")]),e._v(" "),a("li",[e._v("分配feature，分配需注意容易引起冲突的公用文件修改最好先做")]),e._v(" "),a("li",[e._v("基于latest版本拉出dev分支")]),e._v(" "),a("li",[e._v("基于dev分支拉出feature分支")]),e._v(" "),a("li",[e._v("开发feature")]),e._v(" "),a("li",[e._v("开发完毕后先合下dev分支")]),e._v(" "),a("li",[e._v("整理下本地commit")]),e._v(" "),a("li",[e._v("合入dev分支")]),e._v(" "),a("li",[e._v("所有feature开发完毕后基于dev分支新建x.x-release分支，并在x.x-release分支上发包")]),e._v(" "),a("li",[e._v("x.x-release合并master")]),e._v(" "),a("li",[e._v("版本稳定之后新建x.x-stable(如0.1.8-stable)分支，之前的release分支此时可删掉")])]),e._v(" "),a("h3",{attrs:{id:"bug修复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bug修复"}},[e._v("#")]),e._v(" BUG修复")]),e._v(" "),a("h4",{attrs:{id:"发版前bug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发版前bug"}},[e._v("#")]),e._v(" 发版前BUG")]),e._v(" "),a("ol",[a("li",[e._v("新建fix-something分支")]),e._v(" "),a("li",[e._v("修改bug")]),e._v(" "),a("li",[e._v("合入dev(需至少1人review)")])]),e._v(" "),a("h4",{attrs:{id:"线上bug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线上bug"}},[e._v("#")]),e._v(" 线上BUG")]),e._v(" "),a("ol",[a("li",[e._v("基于bug版本的release/stable分支新拉x.x-fix-something的分支，如果是issue则填上issue的id")]),e._v(" "),a("li",[e._v("修复bug")]),e._v(" "),a("li",[e._v("基于bug版本新拉出x.x-release分支(版本号应为新的小版本号)")]),e._v(" "),a("li",[e._v("将bug分支xx.x-fix-something合入到x.x-release(需至少1人review)")]),e._v(" "),a("li",[e._v("发布x.x-relase，删除x.x-fix-something分支")])])])}),[],!1,null,null,null);t.default=s.exports}}]);