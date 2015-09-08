---
layout: post
title: HBuilder安装sass插件
tags: sass,IDE
---
HBuilder是一个基于Eclipse开发的前端IDE，默认集成了一些优秀的插件，美中不足的是自带插件对sass支持不是很好，所以只能自己动手安装第三方插件啦。

##安装Ruby和NodeJs

由于sass插件的运行需要[Ruby](https://www.ruby-lang.org/zh_cn/downloads/),下载解压后将“X:\ruby\bin”路径设为环境变量（X为目录所在磁盘）,
又由于安装sass要用到gem命令，所以先安装[NodeJs](http://nodejs.cn/download/),下载后默认安装就可以。

##安装sass

打开CMD，输入：`gem install sass`，如果出现：`Could not find a valid gem 'sass' (>= 0) in any repository`，那是由于被墙了，
需要添加一个国内源：`gem sources -a http://ruby.taobao.org`，再执行：`gem install sass`。等待安装结束。

##HBuildre配置

打开HBuildre，点击`工具--预编译器设置--新建`文件后缀填写：`.scss`(注意点号)，再点击智能完成。
预编译器命令参数填写：`--no-cache %FileName% ../css/%FileBaseName%.css`

关于预编译器命令参数，SASS提供四个编译风格的选项：

-nested：嵌套缩进的css代码，它是默认值。
-expanded：没有缩进的、扩展的css代码。
-compact：简洁格式的css代码。
-compressed：压缩后的css代码。