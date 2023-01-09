/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/learning/开关电源/【开关电源】学习1——buck/1663506637120.png","8e50e1a9a14c0174f21513f95808f075"],["/2022/learning/开关电源/【开关电源】学习1——buck/1663507058896.png","4d8882df5c227127a8bcf8db25063cd2"],["/2022/learning/开关电源/【开关电源】学习1——buck/1663582916508.png","f7fd2765312cd0c65679effef1c1b46c"],["/2022/learning/开关电源/【开关电源】学习1——buck/1663632762752.png","b56aa45e619a0a411fd1791a3a28ace8"],["/2022/learning/开关电源/【开关电源】学习1——buck/1663760481426.png","618f26cc158fc16981dd41ae514a3764"],["/2022/learning/开关电源/【开关电源】学习1——buck/index.html","402358c97477add0b3e46302845fccfc"],["/2022/learning/开关电源/【开关电源】学习2——boost/1663597318714.png","47bd3d0509ef32d05139ab0045289760"],["/2022/learning/开关电源/【开关电源】学习2——boost/index.html","df523a0316a4a952200da28a0267671d"],["/2022/learning/开关电源/【开关电源】学习3——VMC反馈/index.html","af73a247d9b322bac72e05c2c144ee8f"],["/2022/learning/开关电源/【开关电源】学习3——buck-boost/1663599045317.png","db7c286c722f9f19f1648e96a61936b0"],["/2022/learning/开关电源/【开关电源】学习3——buck-boost/index.html","63c4cb0ba2ce3303d94468004dc711ba"],["/2022/learning/开关电源/【开关电源】理解/1663634083260.png","7b1a889ee96c83e170023666681c9131"],["/2022/learning/开关电源/【开关电源】理解/index.html","7482ae8ca34f7a705c7f01da02a3248e"],["/2022/learning/开关电源/【开关电源】进阶1——稳定性判断/index.html","e8ab202c01dbea1880797e978f4c5068"],["/2022/learning/开关电源/【开关电源】选型和使用/index.html","bab1cd36f3a10e4c595b85a9f71441be"],["/2022/library/frontend/【hexo】学习/1663226540949.png","a1caf41266643ffc4e359e081c132beb"],["/2022/library/frontend/【hexo】学习/1663427142344.png","fc516ac0838c2f1be2343e49860cab83"],["/2022/library/frontend/【hexo】学习/1663507479006.png","a0471f7e563765de0b7231bfe54f7dac"],["/2022/library/frontend/【hexo】学习/1663655817135.png","e1a3c2971865c9df5fc58879ffa2d01b"],["/2022/library/frontend/【hexo】学习/index.html","a2f4757fb311eb4fce0a7d81dc100e41"],["/2022/library/frontend/【typora】学习/index.html","aa60534c8175411650234afa424bc311"],["/2022/library/frontend/【typora】学习/v2-e006224a3066540d792b5ecb950aab50_1440w.jpg","ae30c50045fbd7770213d615ef482ff8"],["/2022/library/frontend/【vue】学习/download.html","acf05cde8580ef82382c8ecdbd7292c0"],["/2022/library/frontend/【vue】学习/index.html","a44ad8307d28571f62496f5022149108"],["/2022/library/frontend/【博客】搭建记录/index.html","581c3ed0f21f3009842edaa7196e6690"],["/2022/library/inte/【css】学习/index.html","b2ef4bae96ae750953bd72e2e91b8574"],["/2022/library/inte/【latex】学习/2018041621294865.png","6f077ea9fc5c8a5265909192838fedd3"],["/2022/library/inte/【latex】学习/20180416213036844.png","cf8397f2944159f69623ed2574ac93fe"],["/2022/library/inte/【latex】学习/20180416213119987.png","d38af3df52cbbdbc443dd2add6d26ca8"],["/2022/library/inte/【latex】学习/20180416213126857.png","e23a42706b3d6f36130417920343ab3b"],["/2022/library/inte/【latex】学习/index.html","fc868ae64af47f0f2d9e6421d23f7547"],["/2022/library/inte/【钢琴】织体类型/1666968516628.png","847154f1f5d8d1f02e722c21f7dc4eff"],["/2022/library/inte/【钢琴】织体类型/1667918446434.png","4b590d362fb1199378795754ddc87ef6"],["/2022/library/inte/【钢琴】织体类型/index.html","7c01b5ad5e7d400e67e128d3b186392e"],["/2022/library/python/【nuitka】打包python为exe/index.html","4decdefc5bc260c2e6f980498be006f7"],["/2022/library/python/【psutil】检测电脑网速等/index.html","bcb0754fc79bfbafc75debd99943d545"],["/2022/library/python/【pybluez】python控制PC蓝牙/index.html","3219ef6727d455a2a7caaf2bb7ce7d77"],["/2022/library/python/【pyinstaller】打包python为exe/index.html","469986ddd5d5cb999d11e45b38123816"],["/2022/library/python/【pyqt】学习/index.html","330dbb4ddc2f3a4e2ed43e4cdbda0577"],["/2022/library/python/【win32gui】控制win系统/index.html","e9b14bfc584c53a265bc575540c2394d"],["/2022/library/嵌入式/【git】学习/index.html","a48a5e0d35741123a2c6a38e6d709904"],["/2022/library/嵌入式/【linux】常用指令/index.html","776da3d487d53fbcda217940812dc3be"],["/2022/library/嵌入式/模块/【模块】OLED/index.html","33c3ca9a9ac792eb5a2d6926df283b72"],["/2022/library/嵌入式/模块/【模块】陀螺仪/index.html","c13ba4032a7ee693379882908d227fb2"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/clip_image002-1665804664642.png","d05548e400e3d365d689c758dc7c2a90"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/clip_image002-1665804668891.png","8713e2180007528a632b7cdbc88e17ac"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/clip_image002.jpg","0fd920144ec253011b05fa9463f1985e"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/clip_image002.png","243e29a00c08ecccc64ea5b0d8f1f030"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/index.html","008bd7dd98b68597a41be274be3407ce"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803600516.png","d02fbbe7943a202428ceef1ca50a5c8d"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803607390.png","3df26768c0d97b3acbb64c7f4738f15c"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803617793.png","3df26768c0d97b3acbb64c7f4738f15c"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803634716.png","441a3a852dac9db3f5bbf538e97e06e3"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803663941.png","38d29c573fc0aab159543ee6f3d6b31d"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803667431.png","38d29c573fc0aab159543ee6f3d6b31d"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803862765.png","f7e2165483ca1f224fc47019c9d85839"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803865723.png","3da7b08b88d8795e53d03a47e1926277"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803871404.png","9601e1216b6e8246b7f1b1887108f8ab"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803883747.png","9601e1216b6e8246b7f1b1887108f8ab"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image001.gif","ba898c600ecfdb213d2223a0f783c808"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image002-1665803844893.gif","fb05fad8f7ca3e4d9e40000a9ab1dc09"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image002-1665803856973.gif","e1a4cd1747beecc7d92124979531824c"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image002.gif","0c0f42f02d474126082016d250804bc4"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image003.gif","1f489bb3e02d4993cdd501f7ec773812"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image004-1665803844893.gif","560b736f1eb0faacf034adab49d2c620"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image004-1665803856973.gif","09cde39109369f9185d1cf128c6d7c2d"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image004.gif","32873c471ff1058abf9d6d09ca5e45f0"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image005.jpg","ea2dddfe9b1da4f406ee36b37c99e72e"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image006-1665803844893.gif","eaa063e3d871f7c40777c68c475fed91"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image006-1665803856973.gif","b0138096b0fc7682435ad07aeaf159ce"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image006-1665803982819.gif","6540947f9843ab822d3e8eeb7ef621e6"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image006.gif","6290aa2f8360b2a4f05e4c09e4d6bc80"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image008-1665803856973.gif","560b736f1eb0faacf034adab49d2c620"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image008.gif","113b77d852979982495a775ea4d973d1"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image008.jpg","aad87f9838e93808a0caed1ece93ffac"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image009.gif","fd6cf84a1333733613c80d5599c0fbdb"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image010.gif","eaa063e3d871f7c40777c68c475fed91"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image011.jpg","fa6d15386072d8a691d18f9c3a53b426"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image013.jpg","cea0cb9334e0d5f1b84beb2fcd8b1245"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image015.jpg","660345ebf2132d1bcdd9a7455529093a"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image017.jpg","29517d76c214adc17343771d2d804679"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/index.html","1ea4c83f2c2d1bc4c68af884b45e54e7"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131552729.png","75acd9fc1668bbfebefd6ee208a0aa74"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131555323.png","75acd9fc1668bbfebefd6ee208a0aa74"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131686170.png","d69dc3e1daa1e8468206f55dbfb434c3"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131711842.png","50e82f1823ac8f06e3bf764ffe9560e4"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131737857.png","9bcc111c160798e1c00de21c318f71f8"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131783587.png","354d4fbf7b113c461f592f2248d4c29f"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131825005.png","420cd24dc270086e8991011f908ffe29"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/index.html","3836e5cb2029493ca64bbfe7c4e42950"],["/2022/library/嵌入式/硬件/【硬件知识】芯片熟悉/index.html","fee8c67955cf90cdec57534827835f57"],["/2022/library/嵌入式/硬件/【硬件知识】选型/1665935986042.png","8770ec634a84589688edda3f78de1946"],["/2022/library/嵌入式/硬件/【硬件知识】选型/index.html","d0aa025411f216ddc25e454a07487510"],["/2022/library/嵌入式/积累/【嵌入式积累】阅读寄存器手册/index.html","0f19331cf8594f5a39e2b02561c994c5"],["/2022/library/嵌入式/算法/【控制算法】学习/index.html","fce95d1783c200ed1b34865296738c8d"],["/2022/library/嵌入式/算法/【滤波算法】学习/index.html","0e607514921a55ca9be8d343c584f09d"],["/2022/library/嵌入式/语言/【python】进阶总结/index.html","811860328d56e3cb1b668d1c20f86217"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】i2c通信（mpu6050）/index.html","37f7fe8656f98b3dfc15183dd56817be"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】pwm波/index.html","416a66d62a5834dcc74804e93c23395e"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】spi通信（nrf24l01）/index.html","3ec220c15e10840ce4ec9463f2a88acc"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】串口通信/index.html","7d10d6ca1c2697bfb6fd62d8d97dbd87"],["/2022/library/嵌入式/软件/开发板上手/【V831】开发板上手/index.html","cf653828426ba330bb1154cffb153268"],["/2022/library/嵌入式/软件/开发板上手/【k210】开发板上手/index.html","20ee5cf96e279771d9b93c58f3731653"],["/2022/library/快捷键和常用指令/【cmd】常用指令/index.html","14b2893a927d4fa2948116cb55bd4fe8"],["/2022/library/快捷键和常用指令/【pip】【conda】常用指令/index.html","2e7272ad63e39a4cb62b428cc62d64e8"],["/2022/library/快捷键和常用指令/【pycharm】快捷键/index.html","202863615afe52c537709402a10d5801"],["/2022/library/快捷键和常用指令/【win】快捷键/index.html","09c27815a0158713b3a03266ef85edc2"],["/2022/library/快捷键和常用指令/免费下载视频/index.html","e8a06dbe6f9cbb15993f1851b28caa32"],["/2022/library/数学建模/数据处理/index.html","b79f2a33ca6883ba6204a4a25892b7b0"],["/2022/library/数学建模/线性规划和整数规划/index.html","3a675616805b47e577122be878d30d37"],["/2022/library/深度学习/【深度学习】基础知识：×NN都有些啥/index.html","7f9e08de35b804f608204205252677b5"],["/2022/library/深度学习/代码/【numpy】语法基础/index.html","1a1639552b92e36ae4ef2561134449eb"],["/2022/library/深度学习/代码/【torch】语法基础/index.html","daa28fa3ae2ddaf61951fcb265142820"],["/2022/library/深度学习/工具/【深度学习工具】onnx学习/index.html","b1867550070f6ef05b2c1b4dd1682807"],["/2022/library/深度学习/工具/【深度学习工具】tensorboard学习/index.html","062b1b12a398b91356d6f709e1e90cf7"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/20190123102311588.png","ecd311bfb9d0bb3a4600fa915ca4724b"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/20190123102425330.png","185aa1eb346c06c79434abc5d219c69a"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/index.html","0d0ae48573520780584b6b79a1e670c3"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/tt0.top-284371.gif","67646fb39542ace8ce2628bed493c979"],["/2022/library/经验积累/【经验积累】网址整理/index.html","a5d1ba98f8abf5be38996ad1ae7137b1"],["/2022/library/经验积累/【经验积累】论文搜集/index.html","93c8683a08051386d33075ae06840f3a"],["/2022/library/课内知识/【FPGA】仿真和烧录/index.html","512fd315d992e72432e906646b4811d6"],["/2022/library/课内知识/【matlab】学习/index.html","961060a8a29c8d427f9195590b39b288"],["/2022/library/课内知识/【verilog】学习/2305487-20210316195006605-973494686.png","c44b53656d81edac532917ae21e43a06"],["/2022/library/课内知识/【verilog】学习/index.html","5d738c7790234011e8d9fa51252abdc5"],["/2022/library/课内知识/【常用数学公式】总结/1670057171754.png","66c6f23ee349c4f1bb91a05ab6d984d8"],["/2022/library/课内知识/【常用数学公式】总结/index.html","8624689b6e281d08e434e4eb35a99f47"],["/2022/others/Write-blog-using-markdown/index.html","6aaada21fb709859c9e7368c815aabd8"],["/2022/others/古诗/古诗/index.html","fd0a67f234f919b355ebdfb96404bfe6"],["/2022/others/能力年表/index.html","56ccef562078e5de60c5c423caf34e7f"],["/2022/solved/github的github.io项目打不开/index.html","dd05f4866f79d462a1907e1dbaa578f1"],["/2022/solved/hexo部署报错spawn failed/index.html","466b28ddbfe8f0b02ba9596b23e1dcc0"],["/2022/solved/modelsim的-novopt优化相关报错/index.html","0758b40a82373b09e41ede60da28c4e8"],["/2022/solved/npm install 报错/1671205482714.png","dd319d6caeb7486e40c39f1507b3e6c5"],["/2022/solved/npm install 报错/1671205487909.png","dd319d6caeb7486e40c39f1507b3e6c5"],["/2022/solved/npm install 报错/index.html","581f05efd866424a67a54a0214e99ae9"],["/2022/solved/pycharm修改快捷键/1668304724550.png","22682fd6b614b99d048605ec3fc85099"],["/2022/solved/pycharm修改快捷键/index.html","465a07f544332b28f657ebe589fe53c4"],["/2022/solved/pycharm内无法打开cmd/index.html","19efa27856f069be0ff88352251fb2a2"],["/2022/solved/从regedit改变键盘映射关系/1669721677084.png","72ee8a7f108bd0244aa4145769b003b7"],["/2022/solved/从regedit改变键盘映射关系/1669721822415.png","e6d19538db0e0dcefcbb0e2bef43dc88"],["/2022/solved/从regedit改变键盘映射关系/index.html","95823e125faa2b56ecc4f7e520843768"],["/2022/solved/右键新建菜单管理/index.html","dad10c024daa99b93414cc384ecf50db"],["/2022/solved/执行make menuconfig时报错/index.html","59616d6cd2d208292c36c02701131178"],["/2022/solved/报错binsh 1 bc not found/index.html","96c9c9dea411c3a07e27d36b4299595e"],["/2022/solved/报错binsh 1 cc not found/index.html","4a4827823a550029d6c19b0ae85e8c1d"],["/2022/solved/报错binsh python not found/index.html","6f50464a986c5420a35b157e2d5be2d0"],["/2022/solved/未整理/index.html","d358a2965a2815951f5d037f04b86db2"],["/2022/solved/树莓派域名解析暂时失败/index.html","73149c9a045c1a504ef4fa598a58b057"],["/2022/solved/树莓派配置python环境/index.html","a0b48a08e30415f206726ea8262991b0"],["/2022/solved/网盘挂载Alist+RaiDrive/index.html","f6289951d83da8062336e15cf188c765"],["/2022/solved/设置软件开机自启动/index.html","1f3268666dd31cf923329f7aac609c46"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118074452-1667297751590.png","221e63aa60efa77dca50740ce9b88380"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118074452.png","221e63aa60efa77dca50740ce9b88380"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118457009-1667297751590.png","5c1577c940dd443631045f45787e487d"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118457009.png","5c1577c940dd443631045f45787e487d"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667226872521-1667297751588.png","ec7a6051752cb193ae983fb81d135fce"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667226872521.png","ec7a6051752cb193ae983fb81d135fce"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667264387582-1667297751590.png","57b13f83c9dfd506e6ccb81743f74963"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667264387582.png","57b13f83c9dfd506e6ccb81743f74963"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667265226170-1667297751590.png","600b87f6ea78e46e19929200a8190875"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667265226170.png","600b87f6ea78e46e19929200a8190875"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667292838757-1667297751590.png","f9c6a5975d54d8b975e9de23dc891c00"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667292838757.png","f9c6a5975d54d8b975e9de23dc891c00"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667293450480-1667297751590.png","57c9efd9a2a4ae995517991ff7abdf32"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667293450480.png","57c9efd9a2a4ae995517991ff7abdf32"],["/2022/work/nerf/【nerf】Block-NeRF笔记/index.html","5e851fdf08ae04963813ef70ee82d5ce"],["/2022/work/nerf/【nerf】Point-NeRF笔记/0b4e1994da04413a8866105b4989f8b8.png","d0f1d27bb090bf3c33540b180698c41b"],["/2022/work/nerf/【nerf】Point-NeRF笔记/1658128325205.png","b048922781d5aba77d19ef20b404d40e"],["/2022/work/nerf/【nerf】Point-NeRF笔记/1658194855269.png","62b433413622e8f3869c3169e910ba72"],["/2022/work/nerf/【nerf】Point-NeRF笔记/226855a91dd34416a673c90889d9125c.png","cd3eb2acd1e6bf054bb4721eaaf6b0b1"],["/2022/work/nerf/【nerf】Point-NeRF笔记/3dcafd31179c4dd8a339eb27f08c2848.png","31e48f38ffc4301d2e9d828a1567c8ed"],["/2022/work/nerf/【nerf】Point-NeRF笔记/41f23bb937554eef9bc59be5e35edece.png","9f12b05323f80cab2c38a24bf1ec0ebd"],["/2022/work/nerf/【nerf】Point-NeRF笔记/46ccd8a5c7fb4d90b4fea699c8abad94.png","16ccbcc52586bcfa171a952775f174f7"],["/2022/work/nerf/【nerf】Point-NeRF笔记/47ec1ea670d34d728fa6d1920fa98b75.png","60dc2887bf395ab3c1e763da69a51a9a"],["/2022/work/nerf/【nerf】Point-NeRF笔记/4c08bf3e7c3e4e7cb892f82bf872bb4b.png","c262265d65df56fc78299615ef65f9d6"],["/2022/work/nerf/【nerf】Point-NeRF笔记/5c3babb1708240a88a300e628a460368.png","5d5f7a85463d02f9efaf8283ab440c4b"],["/2022/work/nerf/【nerf】Point-NeRF笔记/b62693bf6f524fdb945fc84cfdfd8003.png","1b47f19451e1bcecaf0e885057cbcd3c"],["/2022/work/nerf/【nerf】Point-NeRF笔记/beb43ab7eedb4ce9b744cc7ca46b9448.png","a556c57e731513afccaf55e13b119380"],["/2022/work/nerf/【nerf】Point-NeRF笔记/c6e8f9d76fae4b99958d395917458a66.png","325197e008d25fd21c1e67ebe2be226a"],["/2022/work/nerf/【nerf】Point-NeRF笔记/d39620fc168844918a7c2942bcaede4a.png","81b19e32b4b1748602e143d22c4817be"],["/2022/work/nerf/【nerf】Point-NeRF笔记/f4e73e69a8714652a345e08ece53b59b.png","835da5f34875484dac1b71e245cbfdc5"],["/2022/work/nerf/【nerf】Point-NeRF笔记/gif-1667309947220.gif","a8cd0a12f9acde3c1620d3eaf31b3919"],["/2022/work/nerf/【nerf】Point-NeRF笔记/gif-1667309947223.gif","95fb73ac89ac6c3d84d5e4caf34ee3bb"],["/2022/work/nerf/【nerf】Point-NeRF笔记/gif-1667310098644.gif","a8cd0a12f9acde3c1620d3eaf31b3919"],["/2022/work/nerf/【nerf】Point-NeRF笔记/gif-1667310098652.gif","95fb73ac89ac6c3d84d5e4caf34ee3bb"],["/2022/work/nerf/【nerf】Point-NeRF笔记/gif.gif","7f3733e9b830cc67f2c6388dcb2205af"],["/2022/work/nerf/【nerf】Point-NeRF笔记/index.html","1639f28cd439d2ba1fe9365ab48e292b"],["/2022/work/nerf/【nerf】nerf-pytorch/index.html","96245b9b2c7bd814ca6d2d7fe5450362"],["/2022/work/nerf/【nerf】汇总笔记/1664429458270.png","825aa4007beb45aeb378d542825b6806"],["/2022/work/nerf/【nerf】汇总笔记/3c7ca874aed3436b88ba51edf0749e61.png","1611172fd9c3e23f3a139d965af1d67e"],["/2022/work/nerf/【nerf】汇总笔记/index.html","5d443c86a2905514022292d590dc6c95"],["/2022/work/nerf/【nerf】记录/index.html","2d7fe7c326337d09916e7205f2d7ad4b"],["/2022/work/前端/【前端】记录/index.html","b3b80d15fdd12a0d4b1a3a021fdb5957"],["/2022/work/嵌入式项目/bard/【bard】Linux迷你电脑/index.html","e794f726b46cad20db9bda491a981290"],["/2022/work/嵌入式项目/bard/【bard】Linux迷你电脑/v2-5443f85fbc97f22e41c10a20a9760742_1440w.jpg","b67e2f438efd9fd26b4d935fabaafcaf"],["/2022/work/嵌入式项目/bard/【bard】记录/index.html","21d9e5095f57e5abc68750777fbc8bc5"],["/2022/work/嵌入式项目/【祖传板子】记录/index.html","10a5990031369711a451abafac1c6640"],["/2022/work/嵌入式项目/【航模】记录/index.html","6ca2ababfc67beb6b9ad23cd4cd88a60"],["/2022/work/忆阻器/【忆阻器】记录/index.html","bc3d74280357f8119056cd4f6e252061"],["/2022/一下都是0/index.html","e596ff15ae3051fefa962629b6adbc63"],["/2023/library/嵌入式/模块/【模块】amg8833/index.html","62bad58bfd260290ef9b5cafeb7f66f1"],["/2023/library/嵌入式/模块/【模块】as5600/index.html","fd3dee14bd1ea039ed49ee67f7a4feb7"],["/2023/library/嵌入式/模块/【模块】数码管/index.html","98b111c7513459f9054e37a4cc33fd8c"],["/2023/library/嵌入式/模块/【模块】超声波测距/index.html","f8ffb572c828fed611e0d1b493e5a56b"],["/2023/library/嵌入式/积累/【嵌入式积累】控制入门/index.html","700103e8aa279cf07d7a51800d11cfc6"],["/2023/solved/chatgpt您所在的地区无法访问/index.html","eb197fb7fac43432df5baab83996a195"],["/2023/work/chatgpt微信机器人/index.html","971a5aebefa7ff45d1f16df6eb55b709"],["/2023/work/忆阻器/【忆阻器】算法部分/index.html","e6fc62b50dccc9d7ae8ea1cae422c9ba"],["/about/index.html","d0256c6444584276cbf39b2d254dcbce"],["/archives/2022/09/index.html","a419650df403c53208a5499f218036bc"],["/archives/2022/09/page/2/index.html","a9878f48730f8631b663b5885a091d28"],["/archives/2022/10/index.html","7c4af4097b87d444f7d5551f317b7312"],["/archives/2022/10/page/2/index.html","e385588159d04e25fdc5c23725cee1b6"],["/archives/2022/11/index.html","7efee9d204ef88065339fc495a9e8908"],["/archives/2022/11/page/2/index.html","bd68cec6ae9e76c41267f86becb600cc"],["/archives/2022/12/index.html","2da72001c7dd2edbbdca2f38d8c4a3e1"],["/archives/2022/12/page/2/index.html","44ddbe2bfa06a359e2ea996d894b6573"],["/archives/2022/12/page/3/index.html","2ca589221c48efd4c6cb5bdff5513897"],["/archives/2022/12/page/4/index.html","d2f7f200fa4dfd233f0cc80eac3ac4bc"],["/archives/2022/index.html","e9bdf0006af069b2a1f12f4d27394b54"],["/archives/2022/page/2/index.html","09fb6a0e604e26041c4a8ecfcd1c2956"],["/archives/2022/page/3/index.html","b98bd681e6c8cf24b9e9e85acff4e774"],["/archives/2022/page/4/index.html","114b8e96c8a407adbc759a314de5f0b9"],["/archives/2022/page/5/index.html","b0da41d173617285f1e3a9f7d2d5bdae"],["/archives/2022/page/6/index.html","7a72f9eb00424c1fd0e8a9a78db64722"],["/archives/2022/page/7/index.html","87b825973c38f3a993afdd62bf49707a"],["/archives/2022/page/8/index.html","4a3d52893171a4bc3aed2a5369e288f9"],["/archives/2022/page/9/index.html","f77472136702eaf3ef69ebf9bbf70f9c"],["/archives/2023/01/index.html","c37fffa1ceb5bb2995e7d8cc65a1f9ea"],["/archives/2023/index.html","d7e9229162f2c4d9f207b6b7fc09a500"],["/archives/index.html","35775da4320f9f2fbe5ee68a865ab3b4"],["/archives/page/10/index.html","6ec3040a85b7caceb3f4caf59237e6e8"],["/archives/page/2/index.html","ec7ceb53098889c44b79dd055c8979a8"],["/archives/page/3/index.html","a6b3bf1d2c625d4488f1749037aeaaad"],["/archives/page/4/index.html","6f64a2983f5f929880e807437bcdfb43"],["/archives/page/5/index.html","335728304a325804abc9dad21e638f52"],["/archives/page/6/index.html","d1601bab54674b24c1e1273a147ce0ed"],["/archives/page/7/index.html","c6dff74bad7a75e981f4a218a4bbec07"],["/archives/page/8/index.html","c3a585b5edd74560ac8b0019004848e4"],["/archives/page/9/index.html","efed4d64cd2685bbb860a20024141559"],["/baidu_verify_code-ZFSCabM1PJ.html","6371ac29dcb1ac47316f04a6654f2b38"],["/css/main.css","8d603b2a1c7829ccd3a8290b0376f6e6"],["/css/spoiler.css","eb373af0627ede298867ffc0045da62e"],["/google41a28d5f2878fa02.html","82b993b05c383ac3e91891534e67088b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/tou.png","578463708d7de56a1c4e6331831b3e2e"],["/index.html","8ef8cfbec6aa0ca6a0d06e6c3d58d319"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/code-unfold.js","e079f1fdb88a9edcd745220494218e88"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","97606f901b6e488587ad5c49aa367604"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mylibrary/css/float.css","96c43fec5fac77ee3d464cd9b6525105"],["/mylibrary/css/hide.css","a1e30400a14be303cdbd62a507bd8be7"],["/mylibrary/css/load.css","d651569daef06074e9d22847e990bd39"],["/mylibrary/css/neon.css","965cfee4ed5eb4c0f4ac5df817406595"],["/mylibrary/css/round.css","dd90bfc2608859d1826dd5fdd684836c"],["/mylibrary/css/shake.css","5662a01e9a39a54774fc26f9811449ff"],["/mylibrary/css/shiny.css","fbafbcbf85703f2aef86c6b87e61de88"],["/mylibrary/index.html","8589a5c3f49edbc5ecd78ee345bd054f"],["/mypage/css/style.css","89d6284331f5094d246e5bff3bd470e0"],["/mypage/font/LigatureSymbols-2.05.eot","5b46f67c079e0599f89aae807cdad560"],["/mypage/font/LigatureSymbols-2.05.svg","f4be952f02a00bd7b464568304b12842"],["/mypage/font/LigatureSymbols-2.05.ttf","48ae0b91a8d6e1feb2c15961a338dad8"],["/mypage/font/LigatureSymbols-2.05.woff","f974884f441019724c351f85478b3938"],["/mypage/font/README.html","492e4d32be4808461029ba62df4678b6"],["/mypage/index.html","63592fdb98249dc9cca29f59d3609cda"],["/page/10/index.html","9110b89fde4fefc294dc30994ec37a09"],["/page/2/index.html","61f5ea63c7b7b661895efc9787f79740"],["/page/3/index.html","7ce0c480691252af73510d3c7528e416"],["/page/4/index.html","5ccebc740a889c460ce09bcf829432e4"],["/page/5/index.html","2c4e9bfbadb43cb1c974ead0ff8db3ba"],["/page/6/index.html","7445f04f9b58f82816eabfd54b877efd"],["/page/7/index.html","5fd7585e25754019378e7672663e3189"],["/page/8/index.html","9aec6847cc6800f59da5643da971aa49"],["/page/9/index.html","340cdaf2c3bb0d06f7194fe0f56fc663"],["/sw-register.js","1f8e830cc48d2cc7f54f5ab315fe84f6"],["/tags/Block-NeRF/index.html","64c23047e783a143a3e9939c99d3bd64"],["/tags/FPGA/index.html","e5ac0331e066df9c5cde72f79056cb30"],["/tags/HAL库/index.html","174a8cc3db76b89d897d29394cb2eff4"],["/tags/H桥/index.html","3bcecd7e4e185c33925ce303791d2a35"],["/tags/OLED/index.html","67839340c1f9d0e2ebf746b6b551ac25"],["/tags/Point-NeRF/index.html","4f24228027381983ac3ec3eb36159a23"],["/tags/V831/index.html","f22dd344bc7f2fec5618340a6be94984"],["/tags/amg8833/index.html","3f64efc84bb07de55ab26cf59fc5e2ce"],["/tags/bard/index.html","afa1ba74cb211d238d491e71b0abdce5"],["/tags/chatgpt/index.html","fe79f61be3342c77edfdf21fe9ac03e7"],["/tags/cmd/index.html","d769e79510ed1c3b88afc35795f1763c"],["/tags/conda/index.html","5e33b9f1a9493f53da67916d5db06882"],["/tags/css/index.html","60aa9c1219740d6bd7490c59bcf76287"],["/tags/git/index.html","eb0faabba0b17e5eabf72ac1e31ce956"],["/tags/github/index.html","b9c48c4960271f72fb8d5a6b476b5e43"],["/tags/hexo/index.html","78a5923a25a525f6a2382ee34879b320"],["/tags/i2c/index.html","835e44ce85170e31f882068d6d85959c"],["/tags/index.html","9e0295367199875bd932d036ecde6625"],["/tags/inte/index.html","cfb55ac2325dece87db4ff22fa5ee9e4"],["/tags/k210/index.html","38a7992f9ed499ea2e35b97561c8b193"],["/tags/latex/index.html","c7884135dfc907c9824197f8f4accd95"],["/tags/learning/index.html","e6c34a85e5e892c4c01e794b5fbd2ad1"],["/tags/library/index.html","6988afcf74879b15d0fefb6f349670b4"],["/tags/library/page/2/index.html","3b5ff22a1b0b693e0ef6a8b4acfe3b87"],["/tags/library/page/3/index.html","3e4de8e51d585320a5c19b53dadec029"],["/tags/library/page/4/index.html","396e717b6ea065ac982fef9607fbed18"],["/tags/library/page/5/index.html","afd1c3a4611a928b89a6e7209f7055c1"],["/tags/like/index.html","259650850304c912e2994ac3dd74ffac"],["/tags/linux/index.html","feda0cdcb8296a732df8f7be2e43b0f3"],["/tags/make/index.html","3e000bae19be3ad12b5f7e852fbaec2d"],["/tags/matlab/index.html","3c6698ae27ea01d0a8bbc46b1c35f51e"],["/tags/modelsim/index.html","7428684bca7108fc989d2ec25f2f6196"],["/tags/nerf/index.html","46703e822bcdc9d5a1aa66c17fd282f5"],["/tags/nrf24l01/index.html","0d76d25f0a12c498171db8ecbd33fc04"],["/tags/nuitka/index.html","8d91d7e998aedb5489631fa8f781c72b"],["/tags/numpy/index.html","f82600c3f4f5900536b02b16ea2699a1"],["/tags/onnx/index.html","d166fe18fa2fc2fd60d8dcb35ae6fdd5"],["/tags/pcb/index.html","8b5644076564bb96d5b447519f52d889"],["/tags/pip/index.html","1973d9fb706bd28f6f22ce782b27a716"],["/tags/psutil/index.html","84aaeb815bc991ebfef11d4e37d7d1f0"],["/tags/pybluez/index.html","2f5e0fde715742bf667e349c4d2ee588"],["/tags/pycharm/index.html","a3de19f9dbcb3093a6a24621092ae482"],["/tags/pyinstaller/index.html","b8030dcf8c034694a24a714f2a51d4af"],["/tags/pyqt/index.html","135e9a8c6f57d3b483b6387b99634e8b"],["/tags/python/index.html","f0ac10148578786cf9eb46f7224e84b3"],["/tags/regedit/index.html","624b4a81dde84a0bdd484b2294ac9a5f"],["/tags/solved/index.html","266a37a30e8422c77a5f898b12de54c2"],["/tags/solved/page/2/index.html","9de006132a25bdef4713a51e34e1c0d5"],["/tags/spi通信/index.html","749afa287a1dc8b254f137b7f1058142"],["/tags/stm/index.html","bb12c5798fc6265c3e7766aa936eccea"],["/tags/stm32cubemx/index.html","6ee8e9b74510877445f334a39a3a7096"],["/tags/tensorboard/index.html","4e5e1212a9f58c8f3fba3153ba4f4910"],["/tags/torch/index.html","8623fee45765d7a74e0c113bea303c4a"],["/tags/typora/index.html","5f6034b3e5d6f560a0f63d61b70d8ff4"],["/tags/ubuntu/index.html","640cafcb18cfea7833744263e4de2eed"],["/tags/vco/index.html","1306f0fea0130090ee780ea4b1762155"],["/tags/verilog/index.html","ba9d10b25eb4812e09c82af4338dd880"],["/tags/win32gui/index.html","1d93c4889263e05d7ae88445161fb406"],["/tags/windows/index.html","bff6dfcc08907466914192308f5c17d2"],["/tags/work/index.html","48b9da11430acc5e373559a46d4ee5fc"],["/tags/work/page/2/index.html","da97fc5835262142521feccd7230ce05"],["/tags/下载视频/index.html","4b86d00ea781110488f1d51571610d0c"],["/tags/代码/index.html","3b42a9e2253e0bb946f81253dfa4452f"],["/tags/全志F1C200s/index.html","287ed38354bac5ae0cdf3451276abec7"],["/tags/公式/index.html","cab0de95987f9cf3cbd15854509a80d5"],["/tags/前端/index.html","701b83c7ac16bfaeef8bb16ed873eaac"],["/tags/博客/index.html","8f47ecdb8d3386f26d14d0b49d249fc6"],["/tags/压控振荡器/index.html","008327dc078df9f7acd590e257ae5935"],["/tags/寄存器/index.html","1bd7e61980e14ce18b980d4adc55224f"],["/tags/嵌入式/index.html","71eceb0fe2fd26fa5b237c43f7d8f3cd"],["/tags/嵌入式/page/2/index.html","ad54290c370f3b68ad00e57cae309185"],["/tags/嵌入式/page/3/index.html","96d0fe4920111bbc585afa43436353a8"],["/tags/嵌入式积累/index.html","a617401be22978eb4662db7805ce945e"],["/tags/开关电源/index.html","40fc902c0591a7d8e168e289376f2d4b"],["/tags/开发板/index.html","fbeb4283ffa4f90ea93c238d9ac3e6b2"],["/tags/忆阻器/index.html","f2d425cf18cd63443228aacb2b15a7d2"],["/tags/快捷键和常用指令/index.html","220546b613a2fad46b9d2492f9b6dc8b"],["/tags/打包/index.html","818240d3b1046cf917b9f2070a80ee90"],["/tags/控制/index.html","c4df2b598479d3d7a83ef04630ec6bd0"],["/tags/数学建模/index.html","7229ac9c8b8eef83715eb7b8b7a867fe"],["/tags/数据处理/index.html","412de916cef4c853764ab53398882971"],["/tags/数码管/index.html","33b9e134c315198daff121e001e574c9"],["/tags/整数规划/index.html","dbe8d544396588bafa01298c67c097f5"],["/tags/树莓派/index.html","ca3f78ca57d16d95b58b313d74e12878"],["/tags/模块/index.html","c3d54a07b56c47a238022e9bd5e94143"],["/tags/测距/index.html","3485c2569a098b17ccf5230b81c82d73"],["/tags/深度学习/index.html","68d2fc60bef74d6ee2c5d4cd081d5bc8"],["/tags/深度学习工具/index.html","02c89f94b9f6625ff9e034ac4c492372"],["/tags/滤波/index.html","54df17229fb905b0db5b2adb85968d4a"],["/tags/理工方向/index.html","a4d4d98e81166f8e93c3f121e1b09674"],["/tags/硬件/index.html","fdd3b484991c03d84ce8b8862bb6eb6f"],["/tags/硬件知识/index.html","00f01cff03f662a4095455625d44cf18"],["/tags/积累/index.html","ba5c560b609f3d2d3a8c688696a925ef"],["/tags/算法/index.html","91249c25ef67309f2e3454a5c05491e3"],["/tags/线性规划/index.html","8748ccf4c03b3fb59464dedf3829e016"],["/tags/经验积累/index.html","410fde6c33da95ee79d2ffafc2a02fca"],["/tags/编码器/index.html","7ace51a183e2ec4c20201d033bac343e"],["/tags/网址整理/index.html","13c77a0ea41744c67e9889e9f0f03dbf"],["/tags/网盘/index.html","19310a425a2d5b8091697c2dd45a4fcc"],["/tags/航模/index.html","7eb5aeb94848fcfeb56dfbcd0122c2e8"],["/tags/芯片/index.html","d855f9476b7933cf1e352b45766a91e8"],["/tags/蓝牙/index.html","6224be38cd64c7868e37971d0e5986fc"],["/tags/论文搜集/index.html","29b163259a54e9b5bdfd15f1e4ac1cd7"],["/tags/语言/index.html","caaaeb235bef0ddf94ad359eed348199"],["/tags/课内知识/index.html","4e2e3268801f1faea18a0d52fd313dc6"],["/tags/贝叶斯/index.html","9ac7ee2d1191e9f777eab888c54f32bb"],["/tags/超声波/index.html","bbc538325ea3133e2981cf14441a7beb"],["/tags/软件/index.html","464ad1769c67a9c67b53ba53ecb01cbf"],["/tags/选型/index.html","9f1e936c024f8a73d2a1d904d2a2ba73"],["/tags/通信/index.html","d57f9bd12f68d3ba44b9891b962f3528"],["/tags/钢琴/index.html","95a65142840625dea254d0624e44f194"],["/tags/键盘/index.html","e61c0612900f9df53638d0f140333230"],["/tags/陀螺仪/index.html","a9dc255d4ce4a03211d41d74e78ee5b8"],["/tear/index.html","3eb47749e6ce467e4300e9fd6ab59f21"],["/tear/index1.html","00fdd57ae2c34b8c5395dfd2f57f9b87"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
