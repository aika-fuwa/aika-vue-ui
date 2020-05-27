### 初次下载项目
1. 到项目中点击【clone and download】，推荐使用https进行clone
2. 拉取到本地后可以查看本地和远程分支
   查看远程本地分支: git branch -av
   切换分支: git checkout branch_name
3. 必需的情况下可以新建自己的分支，必需填写相关分支的description
4. 在新建好分支后，必须在群里通知相关人并描述创建该分支的目的
5. 其他人通过fetch来获取相关更新的信息
   git fetch workflow
6. 不推荐直接merge代码，建议在本地git pull远程对应的分支/主干代码，确保不存在冲突后再提交到对应到分支或主干
7. 不允许直接提交到master，先提交到自己的分支，需code_review之后才可合入

### 提交代码流程
1. 本地fork的代码库中新建需要做的分支
    git checkout branch_name
2. 修改完代码后，先add提交到暂存区和commit到版本区后才可以进行pull代码
3. add到暂存区后，建议git status查看下状态
4. commit 中的信息应当尽可能详细且精准，能够直接描述相关的改动和相关修复问题
   commit信息的前缀应当包含以下几种信息
    feat: 新feature
    fix: 修复bug
    docs: 文档修改
    style: 代码格式或样式修改
    refactor: 重构代码
    optimize：优化代码（不要在新增功能或修复bug的时候填写）
    perf：性能优化
    test：增加测试
    chore：构建工具或辅助工具改动
    re_back：回退
    build：打包
    types：修改声明文件
5. 提交完毕后，在github使用PR
   点击new pull request 
6. 群里其他人对PR进行merge或close操作
7. 有时候可能是在之前对commit上进行修改，可以使用ammend
    git commit -am 'something'
8. 有时候可能需要修改之前提交对commit信息，但这时候必须先把自己当前的操作存放到暂存区
   然后将当前git到HEAD移动到指定的commit中进行修改
    git rebase xxxxx^ --interactive
   找到需要修改的commit，将首行pick改为edit
9. 将HEAD移动到最新的commit
    git rebase -continue
10. 提交之前，先pull一次需要提交到的对应分支的代码，确保没有任何冲突及相关问题再提交，如果有问题进行提交，请群里通知

### 常用git命令
1. git配置user信息
    git config --global user.name 'your_name'
    git config --global user.email 'your_email@domain.com'
2. 显示config配置,--list
    git config --list --local / --global / system
3. 查看状态
    git status
4. 回退到某个版本
    git reset --hard commit-id
5. 查看日志
    git log
   显示最近n次的log
    git log -n2
6. 查看远程和本地分支
    git branch -av
7. 切换分支
    git checkout branch_name
8. 删除本地分支
    git branch -d branchName
9. 删除远程分支 (禁止删除远程分支，分支应当保留，不管有没有用)
    git branch -d -r branchName
10. 查看工作区和暂存区HEAD代码到区别
    git diff
11. 将当前提交放到上一次的commit中
    git commit --amend
12. 将远程注册的最新内容拉取到本地，fetch需要检查之后再觉得是否合入到工作区分支中
    git fetch
    








