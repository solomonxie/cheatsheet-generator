# Update log
This project is no longer actively developed, by the reason of that, the developer has no longer found meaning in making this educational tool. 

The fact is, organizing terminal command's options and pair with GUIdoes not help linux beginnners to learn commands well. 

Alternatively, it can be learned with basic Man-Pages, or even better one TLDR pages , or it can be put into snippet tools for more practical use. Either of the two ways can be helping beginners more into it.

On the other hand, I myself is a beginner as well and can't be too certain about this conclusion too. 
Therefore this repo won't be removed as one day it might be found a good thought for starters. 

## cheatsheet-generator

Devote on easily generating terminal's command lines, programming paragraphs, service's config files, etc.

Here's the original idea recorded in my note (mandarin):

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


## Update

为每个命令创建一个JSON文件，所有的功能、格式都在这里面定义，然后程序就能够根据这个JSON生成任意命令的组合。所以创建一个cheatsheet只需要创建一个JSON即可。

比如ffmpeg编辑视频`ffmpeg.json`：
```json
{
    "split-video": {
        "format": "ffmpeg -i <FILE> -ss <START> -t <DURATION> -vcodec copy -acodec copy <OUTPUT>",
        "options": [
            {"-i": "~/sample.mp4"},
            {"-ss": "00:00:00"},
            {"-t": "00:00:00"},
            {"-vcodec": "copy"},
            {"-acodec": "copy"},
            {"": "~/output.mp4"}
        ]
    },
    "convert-video": {
        "format": "ffmpeg -i <FILE> ...",
        "options": []
    }
}
```

程序直接把每种功能全列出来，然后用户选择其中一种，选择options，并且填入对应的内容即可生成一句完整的命令，复制出来到终端执行就行了。