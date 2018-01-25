# cheatsheet-generator
Devote on easily generating terminal's command lines, programming paragraphs, service's config files, etc.

Here's the original idea recorded in my note (mandarine):

Javascript做一个像 http://vimconfig.com/ 一样的cheatsheet网页，可以为各种各样的命令行工具生成全句。
做成chrome插件会比较方便。

算法简单化，为每个命令行程序建立一个数组，依照原本规则按顺序排列，客户选好内容后，依序连结成一句命令即可。

难点在于管道，具有复杂的逻辑和奇妙的运用。需要有经验才能做好。不过也可以借此机会学习一下。

界面一定要简洁美观新潮互动性强，尽量单页化显示，即不跳转也不需要滚动来查看或操作，最后手机也能看。

可以的话尽量附上相应效果图或选择性附加说明。如ssh user@ip,则显示说明这样是通过选择用户名和ip连结， ssh -i path ip, 则是用密钥文件链接等。然后附上代表性的结果截图。

——————————-
延伸的话，可以做python和js和sql语句和css等的cheatsheet generator。不需要html的因为市面上太多了。
比如python的连结文件操作，则只需要用户选择读取文件的路径和打开方式等，就自动生成一段标准读取代码。
最实用的是生成数据库连接代码，可以选择各种各样的连结数据库方式。这样的话极大降低数据库学习门槛和未来遗忘时的找回成本。

以后可以做成cli命令行程序或vim插件等，无缝融合到编程过程中。

这样傻瓜式的cao z 实际上没有阻碍编程的学习反而是极大推进了。因为减少了不少网上搜索结果的时间，而且图像化和动态化（用户选填过程动态生成过程）也更增进了新手对这个命令的理解，为了用的多了记得住了，自然而然为了提升速度就离开cheatsheet直接敲写了。



———————————————
当务之急其实是做vimrc, zshrc, bash_profile, nginx, shadowsocks等配置文件


------------------------------
其实还可以反解析，即输入命令行，然后反解析为页面上的选项按钮。


