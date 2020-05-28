# 分支管理规范与发包管理

## 分支命名及功能

- master 主分支，主版本所在
- dev 新版本的公用开发分支
- feature-something feature开发分支，合入dev后可删除
- fix-something 本地bug修复，合入dev后可删除
- x.x-release 发版分支，发版后过一定时间后可删
- x.x-fix-something/issueId 某版本的bug修复分支
- x.x-stable 某版本的稳定分支

## 工作流

### 日常提交

1. 日常开发时，在自己的分支上随意commit与push。一个feature开发完毕后准备合入dev分支。
2. 合入之前可以用rebase -i整理下自己的commit，[随便找了个相关文章，可以看看](https://juejin.im/entry/5ae9706d51882567327809d0)。合入完毕后git push，如果基准有修改的情况可能需要git push -f(此命令只能在自己的开发分支上搞)
3. 将自己分支合入dev时在github上提一个pull request，有1人review后再合入。

### 其他注意事项

- 本地分支合入其他分支时也需要用git rebase。个人经验是，比如我要合并origin/dev分支了，先git stash，然后git rebase origin/dev，然后apply stash。

### 版本开发流程

1. 总结需求得出要开发的feature
2. 分配feature，分配需注意容易引起冲突的公用文件修改最好先做
3. 基于latest版本拉出dev分支
4. 基于dev分支拉出feature分支
5. 开发feature
6. 开发完毕后先合下dev分支
7. 整理下本地commit
8. 合入dev分支
9. 所有feature开发完毕后基于dev分支新建x.x-release分支，并在x.x-release分支上发包
10. x.x-release合并master
11. 版本稳定之后新建x.x-stable(如0.1.8-stable)分支，之前的release分支此时可删掉

### BUG修复

#### 发版前BUG

1. 新建fix-something分支
2. 修改bug
3. 合入dev(需至少1人review)

#### 线上BUG

1. 基于bug版本的release/stable分支新拉x.x-fix-something的分支，如果是issue则填上issue的id
2. 修复bug
3. 基于bug版本新拉出x.x-release分支(版本号应为新的小版本号)
4. 将bug分支xx.x-fix-something合入到x.x-release(需至少1人review)
5. 发布x.x-relase，删除x.x-fix-something分支
