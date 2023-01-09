/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/learning/开关电源/【开关电源】学习1——buck/1663506637120.png","8e50e1a9a14c0174f21513f95808f075"],["/2022/learning/开关电源/【开关电源】学习1——buck/1663507058896.png","4d8882df5c227127a8bcf8db25063cd2"],["/2022/learning/开关电源/【开关电源】学习1——buck/1663582916508.png","f7fd2765312cd0c65679effef1c1b46c"],["/2022/learning/开关电源/【开关电源】学习1——buck/1663632762752.png","b56aa45e619a0a411fd1791a3a28ace8"],["/2022/learning/开关电源/【开关电源】学习1——buck/1663760481426.png","618f26cc158fc16981dd41ae514a3764"],["/2022/learning/开关电源/【开关电源】学习1——buck/index.html","8445b2b7a900922a5d1320df2b0e9daf"],["/2022/learning/开关电源/【开关电源】学习2——boost/1663597318714.png","47bd3d0509ef32d05139ab0045289760"],["/2022/learning/开关电源/【开关电源】学习2——boost/index.html","af7f012a4a7a2918a055426c24b19217"],["/2022/learning/开关电源/【开关电源】学习3——VMC反馈/index.html","c0d028ef439873130c7382c86168eb57"],["/2022/learning/开关电源/【开关电源】学习3——buck-boost/1663599045317.png","db7c286c722f9f19f1648e96a61936b0"],["/2022/learning/开关电源/【开关电源】学习3——buck-boost/index.html","4af3dc75d11a55dd14b8b8cc7fc6b271"],["/2022/learning/开关电源/【开关电源】理解/1663634083260.png","7b1a889ee96c83e170023666681c9131"],["/2022/learning/开关电源/【开关电源】理解/index.html","86cc8ae265fd1f57a13e1d7bc892015c"],["/2022/learning/开关电源/【开关电源】进阶1——稳定性判断/index.html","7bfc44b9e8718c84e8ba6fd1a9121bcd"],["/2022/learning/开关电源/【开关电源】选型和使用/index.html","38cc97bbafca43e4701de266fd956780"],["/2022/library/frontend/【hexo】学习/1663226540949.png","a1caf41266643ffc4e359e081c132beb"],["/2022/library/frontend/【hexo】学习/1663427142344.png","fc516ac0838c2f1be2343e49860cab83"],["/2022/library/frontend/【hexo】学习/1663507479006.png","a0471f7e563765de0b7231bfe54f7dac"],["/2022/library/frontend/【hexo】学习/1663655817135.png","e1a3c2971865c9df5fc58879ffa2d01b"],["/2022/library/frontend/【hexo】学习/index.html","b00198c350a11eaaea09f1cc7f6d2895"],["/2022/library/frontend/【typora】学习/index.html","0cc26dc13509782528f776ab0286e9b4"],["/2022/library/frontend/【typora】学习/v2-e006224a3066540d792b5ecb950aab50_1440w.jpg","ae30c50045fbd7770213d615ef482ff8"],["/2022/library/frontend/【vue】学习/download.html","acf05cde8580ef82382c8ecdbd7292c0"],["/2022/library/frontend/【vue】学习/index.html","b464428a6c9d9a25d7c30c689e7eec12"],["/2022/library/frontend/【博客】搭建记录/index.html","aa74a1aac100481aa095cf29cce2c239"],["/2022/library/inte/【css】学习/index.html","875a71b48b8e7bab9769a55da8b2625f"],["/2022/library/inte/【latex】学习/2018041621294865.png","6f077ea9fc5c8a5265909192838fedd3"],["/2022/library/inte/【latex】学习/20180416213036844.png","cf8397f2944159f69623ed2574ac93fe"],["/2022/library/inte/【latex】学习/20180416213119987.png","d38af3df52cbbdbc443dd2add6d26ca8"],["/2022/library/inte/【latex】学习/20180416213126857.png","e23a42706b3d6f36130417920343ab3b"],["/2022/library/inte/【latex】学习/index.html","af8cd2d1b2e658d0148f17531292430f"],["/2022/library/inte/【钢琴】织体类型/1666968516628.png","847154f1f5d8d1f02e722c21f7dc4eff"],["/2022/library/inte/【钢琴】织体类型/1667918446434.png","4b590d362fb1199378795754ddc87ef6"],["/2022/library/inte/【钢琴】织体类型/index.html","87cb02d0f9db022fe409288c6187894e"],["/2022/library/python/【nuitka】打包python为exe/index.html","1537e4fd5fd4861d780d59215849a113"],["/2022/library/python/【psutil】检测电脑网速等/index.html","33d11f1c5520f263503aca2f0caaba14"],["/2022/library/python/【pybluez】python控制PC蓝牙/index.html","bdd644d55184c72205338391936f3e37"],["/2022/library/python/【pyinstaller】打包python为exe/index.html","7553b2fb3697499f9dba29552f6a840c"],["/2022/library/python/【pyqt】学习/index.html","826e61bb488a4d7bba98c16da05f6ab4"],["/2022/library/python/【win32gui】控制win系统/index.html","4888824829ff9d32cb7f9f2cac1bddb9"],["/2022/library/嵌入式/【git】学习/index.html","78b061a0c95e8371aa0e60ba29637d8e"],["/2022/library/嵌入式/【linux】常用指令/index.html","ab5f0c0771aaafcbcf75a64086cc1299"],["/2022/library/嵌入式/模块/【模块】OLED/index.html","03f02120cd1f5bc4e15a2957c4c1db77"],["/2022/library/嵌入式/模块/【模块】陀螺仪/index.html","aa29e8b97b81f15cab1065d4f1ebbe16"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/clip_image002-1665804664642.png","d05548e400e3d365d689c758dc7c2a90"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/clip_image002-1665804668891.png","8713e2180007528a632b7cdbc88e17ac"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/clip_image002.jpg","0fd920144ec253011b05fa9463f1985e"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/clip_image002.png","243e29a00c08ecccc64ea5b0d8f1f030"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/index.html","2b9055af23408df675321d354a7f2ea2"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803600516.png","d02fbbe7943a202428ceef1ca50a5c8d"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803607390.png","3df26768c0d97b3acbb64c7f4738f15c"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803617793.png","3df26768c0d97b3acbb64c7f4738f15c"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803634716.png","441a3a852dac9db3f5bbf538e97e06e3"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803663941.png","38d29c573fc0aab159543ee6f3d6b31d"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803667431.png","38d29c573fc0aab159543ee6f3d6b31d"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803862765.png","f7e2165483ca1f224fc47019c9d85839"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803865723.png","3da7b08b88d8795e53d03a47e1926277"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803871404.png","9601e1216b6e8246b7f1b1887108f8ab"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803883747.png","9601e1216b6e8246b7f1b1887108f8ab"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image001.gif","ba898c600ecfdb213d2223a0f783c808"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image002-1665803844893.gif","fb05fad8f7ca3e4d9e40000a9ab1dc09"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image002-1665803856973.gif","e1a4cd1747beecc7d92124979531824c"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image002.gif","0c0f42f02d474126082016d250804bc4"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image003.gif","1f489bb3e02d4993cdd501f7ec773812"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image004-1665803844893.gif","560b736f1eb0faacf034adab49d2c620"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image004-1665803856973.gif","09cde39109369f9185d1cf128c6d7c2d"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image004.gif","32873c471ff1058abf9d6d09ca5e45f0"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image005.jpg","ea2dddfe9b1da4f406ee36b37c99e72e"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image006-1665803844893.gif","eaa063e3d871f7c40777c68c475fed91"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image006-1665803856973.gif","b0138096b0fc7682435ad07aeaf159ce"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image006-1665803982819.gif","6540947f9843ab822d3e8eeb7ef621e6"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image006.gif","6290aa2f8360b2a4f05e4c09e4d6bc80"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image008-1665803856973.gif","560b736f1eb0faacf034adab49d2c620"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image008.gif","113b77d852979982495a775ea4d973d1"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image008.jpg","aad87f9838e93808a0caed1ece93ffac"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image009.gif","fd6cf84a1333733613c80d5599c0fbdb"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image010.gif","eaa063e3d871f7c40777c68c475fed91"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image011.jpg","fa6d15386072d8a691d18f9c3a53b426"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image013.jpg","cea0cb9334e0d5f1b84beb2fcd8b1245"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image015.jpg","660345ebf2132d1bcdd9a7455529093a"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image017.jpg","29517d76c214adc17343771d2d804679"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/index.html","f7e21b201b07d3aa378a7c4ab809cd14"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131552729.png","75acd9fc1668bbfebefd6ee208a0aa74"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131555323.png","75acd9fc1668bbfebefd6ee208a0aa74"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131686170.png","d69dc3e1daa1e8468206f55dbfb434c3"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131711842.png","50e82f1823ac8f06e3bf764ffe9560e4"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131737857.png","9bcc111c160798e1c00de21c318f71f8"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131783587.png","354d4fbf7b113c461f592f2248d4c29f"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131825005.png","420cd24dc270086e8991011f908ffe29"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/index.html","02845bdcbff9b98c990cea5387de7f6b"],["/2022/library/嵌入式/硬件/【硬件知识】芯片熟悉/index.html","db13f21ca1a93961d381215b1c30e6da"],["/2022/library/嵌入式/硬件/【硬件知识】选型/1665935986042.png","8770ec634a84589688edda3f78de1946"],["/2022/library/嵌入式/硬件/【硬件知识】选型/index.html","8a3e8e35d491dda12e17c6e65b97ce1e"],["/2022/library/嵌入式/积累/【嵌入式积累】阅读寄存器手册/index.html","4dbe2ffb3a96428df54b969bc242dfe1"],["/2022/library/嵌入式/算法/【控制算法】学习/index.html","591e81f1d19c064e34e2db17984f5158"],["/2022/library/嵌入式/算法/【滤波算法】学习/index.html","a2e16f71dfb112420a7d34b105cd135e"],["/2022/library/嵌入式/语言/【python】进阶总结/index.html","7c85e9697b94f57e9d0f06ee6f22dd2c"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】i2c通信（mpu6050）/index.html","a161c281febf7b870d05a60cf0387cff"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】pwm波/index.html","13b288516246dc89a04eed957ad58a0f"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】spi通信（nrf24l01）/index.html","404b5758ab7ccf68fcc30dbf8df6eee0"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】串口通信/index.html","a6a83764ced0b81be6da3850fdb9ac63"],["/2022/library/嵌入式/软件/开发板上手/【V831】开发板上手/index.html","359ee4a8d2c67be85eff776314c3484e"],["/2022/library/嵌入式/软件/开发板上手/【k210】开发板上手/index.html","9bc77fe599dbf25c6de9b7a60ab377cb"],["/2022/library/快捷键和常用指令/【cmd】常用指令/index.html","68026434e26ff831fac81048c358ca21"],["/2022/library/快捷键和常用指令/【pip】【conda】常用指令/index.html","c749a34ebb814276ce980381192945d0"],["/2022/library/快捷键和常用指令/【pycharm】快捷键/index.html","4e66377c9c6c4499a685634d59a19881"],["/2022/library/快捷键和常用指令/【win】快捷键/index.html","8519aaff93ccf9736c528e73fd7949ed"],["/2022/library/快捷键和常用指令/免费下载视频/index.html","a3f7c173353849547c7d225583cdb07c"],["/2022/library/数学建模/数据处理/index.html","d3d4aaba884c330f3e2465980f9c1a2e"],["/2022/library/数学建模/线性规划和整数规划/index.html","8cdd204e256e1658187815f12b0c179e"],["/2022/library/深度学习/【深度学习】基础知识：×NN都有些啥/index.html","9bf4a4b6ba63e769fbbc6b2ee9e02eb1"],["/2022/library/深度学习/代码/【numpy】语法基础/index.html","7283fceaa921ec46a47bc99913a20d3f"],["/2022/library/深度学习/代码/【torch】语法基础/index.html","4334e7937f37b0ea185dfab686a845cf"],["/2022/library/深度学习/工具/【深度学习工具】onnx学习/index.html","03cf3129f10d2ec50360b552071128ab"],["/2022/library/深度学习/工具/【深度学习工具】tensorboard学习/index.html","4f0ce1daaffd1c7c0323c384c81c2630"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/20190123102311588.png","ecd311bfb9d0bb3a4600fa915ca4724b"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/20190123102425330.png","185aa1eb346c06c79434abc5d219c69a"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/index.html","2a29a3f57b9ebf9ad8b4cc8bc1559e2e"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/tt0.top-284371.gif","67646fb39542ace8ce2628bed493c979"],["/2022/library/经验积累/【经验积累】网址整理/index.html","3b4f030c1e3435c2dfdbde60a91ac9f0"],["/2022/library/经验积累/【经验积累】论文搜集/index.html","0aa990b44389714c42e7ad38dacf68f7"],["/2022/library/课内知识/【FPGA】仿真和烧录/index.html","3d6a2a3fabbc00e4fb7f1eded60f065a"],["/2022/library/课内知识/【matlab】学习/index.html","79b30bf720411ff37e8fe88ca7380da0"],["/2022/library/课内知识/【verilog】学习/2305487-20210316195006605-973494686.png","c44b53656d81edac532917ae21e43a06"],["/2022/library/课内知识/【verilog】学习/index.html","59f1191923868f5b5c169aa8d6c8a0fa"],["/2022/library/课内知识/【常用数学公式】总结/1670057171754.png","66c6f23ee349c4f1bb91a05ab6d984d8"],["/2022/library/课内知识/【常用数学公式】总结/index.html","c5322abd7cf23e173d2707e7f1aea842"],["/2022/others/Write-blog-using-markdown/index.html","29ee5c2504cdb3ea1db1b76a9bc15fca"],["/2022/others/古诗/古诗/index.html","3c1fcc0f18e3430231adfe98fdd84d8e"],["/2022/others/能力年表/index.html","ea703f15bd1b280ac01a13154b41cdbd"],["/2022/solved/github的github.io项目打不开/index.html","52dd6752f524a74efc34179b3c289f9c"],["/2022/solved/hexo部署报错spawn failed/index.html","eedb3055137d7b4fb5c507733e984c9d"],["/2022/solved/modelsim的-novopt优化相关报错/index.html","6c25772688d7179d4f71eb043e1fc6bf"],["/2022/solved/npm install 报错/1671205482714.png","dd319d6caeb7486e40c39f1507b3e6c5"],["/2022/solved/npm install 报错/1671205487909.png","dd319d6caeb7486e40c39f1507b3e6c5"],["/2022/solved/npm install 报错/index.html","910fcd86047c7a6ef61d938a1f8166d5"],["/2022/solved/pycharm修改快捷键/1668304724550.png","22682fd6b614b99d048605ec3fc85099"],["/2022/solved/pycharm修改快捷键/index.html","cea10b9d68c2e02e2935c5bee4c1397d"],["/2022/solved/pycharm内无法打开cmd/index.html","df6fcd668a308e7b4adfa33675105b77"],["/2022/solved/从regedit改变键盘映射关系/1669721677084.png","72ee8a7f108bd0244aa4145769b003b7"],["/2022/solved/从regedit改变键盘映射关系/1669721822415.png","e6d19538db0e0dcefcbb0e2bef43dc88"],["/2022/solved/从regedit改变键盘映射关系/index.html","b17f7d698d195293f62afc8b1d63410d"],["/2022/solved/右键新建菜单管理/index.html","8bc820930d1483fda1c1d19dfb42ed22"],["/2022/solved/执行make menuconfig时报错/index.html","870d405d009fd89c224c49735eaa9f6c"],["/2022/solved/报错binsh 1 bc not found/index.html","8037ee5477dbc54522968180fe17d262"],["/2022/solved/报错binsh 1 cc not found/index.html","3e575a287db107862e01d3db73e985a8"],["/2022/solved/报错binsh python not found/index.html","daa4fe883da50e23791adb87872c6366"],["/2022/solved/未整理/index.html","56b62893f1d96f35d8d6ba1e5b258f57"],["/2022/solved/树莓派域名解析暂时失败/index.html","42da3b3e56fa07216b01f0a6d4301902"],["/2022/solved/树莓派配置python环境/index.html","fdd1783db2d607e8a6c21f699b0e6134"],["/2022/solved/网盘挂载Alist+RaiDrive/index.html","70e05e826e552ff9abaf0af020a788fb"],["/2022/solved/设置软件开机自启动/index.html","131f094bff136e23801f426f0c00d677"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118074452-1667297751590.png","221e63aa60efa77dca50740ce9b88380"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118074452.png","221e63aa60efa77dca50740ce9b88380"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118457009-1667297751590.png","5c1577c940dd443631045f45787e487d"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118457009.png","5c1577c940dd443631045f45787e487d"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667226872521-1667297751588.png","ec7a6051752cb193ae983fb81d135fce"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667226872521.png","ec7a6051752cb193ae983fb81d135fce"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667264387582-1667297751590.png","57b13f83c9dfd506e6ccb81743f74963"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667264387582.png","57b13f83c9dfd506e6ccb81743f74963"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667265226170-1667297751590.png","600b87f6ea78e46e19929200a8190875"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667265226170.png","600b87f6ea78e46e19929200a8190875"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667292838757-1667297751590.png","f9c6a5975d54d8b975e9de23dc891c00"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667292838757.png","f9c6a5975d54d8b975e9de23dc891c00"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667293450480-1667297751590.png","57c9efd9a2a4ae995517991ff7abdf32"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667293450480.png","57c9efd9a2a4ae995517991ff7abdf32"],["/2022/work/nerf/【nerf】Block-NeRF笔记/index.html","70b50aab115b68d625f2572b8666930f"],["/2022/work/nerf/【nerf】Point-NeRF笔记/0b4e1994da04413a8866105b4989f8b8.png","d0f1d27bb090bf3c33540b180698c41b"],["/2022/work/nerf/【nerf】Point-NeRF笔记/1658128325205.png","b048922781d5aba77d19ef20b404d40e"],["/2022/work/nerf/【nerf】Point-NeRF笔记/1658194855269.png","62b433413622e8f3869c3169e910ba72"],["/2022/work/nerf/【nerf】Point-NeRF笔记/226855a91dd34416a673c90889d9125c.png","cd3eb2acd1e6bf054bb4721eaaf6b0b1"],["/2022/work/nerf/【nerf】Point-NeRF笔记/3dcafd31179c4dd8a339eb27f08c2848.png","31e48f38ffc4301d2e9d828a1567c8ed"],["/2022/work/nerf/【nerf】Point-NeRF笔记/41f23bb937554eef9bc59be5e35edece.png","9f12b05323f80cab2c38a24bf1ec0ebd"],["/2022/work/nerf/【nerf】Point-NeRF笔记/46ccd8a5c7fb4d90b4fea699c8abad94.png","16ccbcc52586bcfa171a952775f174f7"],["/2022/work/nerf/【nerf】Point-NeRF笔记/47ec1ea670d34d728fa6d1920fa98b75.png","60dc2887bf395ab3c1e763da69a51a9a"],["/2022/work/nerf/【nerf】Point-NeRF笔记/4c08bf3e7c3e4e7cb892f82bf872bb4b.png","c262265d65df56fc78299615ef65f9d6"],["/2022/work/nerf/【nerf】Point-NeRF笔记/5c3babb1708240a88a300e628a460368.png","5d5f7a85463d02f9efaf8283ab440c4b"],["/2022/work/nerf/【nerf】Point-NeRF笔记/b62693bf6f524fdb945fc84cfdfd8003.png","1b47f19451e1bcecaf0e885057cbcd3c"],["/2022/work/nerf/【nerf】Point-NeRF笔记/beb43ab7eedb4ce9b744cc7ca46b9448.png","a556c57e731513afccaf55e13b119380"],["/2022/work/nerf/【nerf】Point-NeRF笔记/c6e8f9d76fae4b99958d395917458a66.png","325197e008d25fd21c1e67ebe2be226a"],["/2022/work/nerf/【nerf】Point-NeRF笔记/d39620fc168844918a7c2942bcaede4a.png","81b19e32b4b1748602e143d22c4817be"],["/2022/work/nerf/【nerf】Point-NeRF笔记/f4e73e69a8714652a345e08ece53b59b.png","835da5f34875484dac1b71e245cbfdc5"],["/2022/work/nerf/【nerf】Point-NeRF笔记/gif-1667309947220.gif","a8cd0a12f9acde3c1620d3eaf31b3919"],["/2022/work/nerf/【nerf】Point-NeRF笔记/gif-1667309947223.gif","95fb73ac89ac6c3d84d5e4caf34ee3bb"],["/2022/work/nerf/【nerf】Point-NeRF笔记/gif-1667310098644.gif","a8cd0a12f9acde3c1620d3eaf31b3919"],["/2022/work/nerf/【nerf】Point-NeRF笔记/gif-1667310098652.gif","95fb73ac89ac6c3d84d5e4caf34ee3bb"],["/2022/work/nerf/【nerf】Point-NeRF笔记/gif.gif","7f3733e9b830cc67f2c6388dcb2205af"],["/2022/work/nerf/【nerf】Point-NeRF笔记/index.html","ace0a60b864867c4f3214976a264e3fe"],["/2022/work/nerf/【nerf】nerf-pytorch/index.html","81c3027b08c4ae62f29c14751e596ed9"],["/2022/work/nerf/【nerf】汇总笔记/1664429458270.png","825aa4007beb45aeb378d542825b6806"],["/2022/work/nerf/【nerf】汇总笔记/3c7ca874aed3436b88ba51edf0749e61.png","1611172fd9c3e23f3a139d965af1d67e"],["/2022/work/nerf/【nerf】汇总笔记/index.html","0f761daef1d087ad1153a5d18ff747c2"],["/2022/work/nerf/【nerf】记录/index.html","d5176cc49092cdd3bd51bcf44ad393c4"],["/2022/work/前端/【前端】记录/index.html","8c7020c7ac9bee37f49299fa2f164924"],["/2022/work/嵌入式项目/bard/【bard】Linux迷你电脑/index.html","c83dcba715ff518c6952c484cf8b78b4"],["/2022/work/嵌入式项目/bard/【bard】Linux迷你电脑/v2-5443f85fbc97f22e41c10a20a9760742_1440w.jpg","b67e2f438efd9fd26b4d935fabaafcaf"],["/2022/work/嵌入式项目/bard/【bard】记录/index.html","741a091c6eb74d60650221fa8ae5f20f"],["/2022/work/嵌入式项目/【祖传板子】记录/index.html","688db25461dd10d8a48492ce61b8242e"],["/2022/work/嵌入式项目/【航模】记录/index.html","c553884f59ccb6ebda6c7e504f16008f"],["/2022/work/忆阻器/【忆阻器】记录/index.html","e08919e9e4c07643e3aee71bc17b7210"],["/2022/一下都是0/index.html","8c710a4f0ef1f1880b42c21c8892a994"],["/2023/library/嵌入式/模块/【模块】amg8833/index.html","a56c5269ef531d243a3956ff3c7f1e3f"],["/2023/library/嵌入式/模块/【模块】as5600/index.html","fe9749efdad6117e90e88f86d3d04d10"],["/2023/library/嵌入式/模块/【模块】数码管/index.html","13ed3268431e15cf74d0a96086120a75"],["/2023/library/嵌入式/模块/【模块】超声波测距/index.html","5b91925c32dfdd9984793616cb0c63a4"],["/2023/library/嵌入式/积累/【嵌入式积累】控制入门/index.html","14735c37e744e18f4726815d52d67496"],["/2023/solved/chatgpt您所在的地区无法访问/index.html","882d7a9b99137962bdb577bbd071b238"],["/2023/work/chatgpt微信机器人/index.html","6dcd3542e271370ffd443694ec041fd8"],["/2023/work/忆阻器/【忆阻器】算法部分/index.html","fd183c22b87f344319b3725de84cc443"],["/about/index.html","8e5e5eb8e8946b7e6273a91305ea3755"],["/archives/2022/09/index.html","ab9ce91c98bb160afa3ab728af34487f"],["/archives/2022/09/page/2/index.html","141fb3e0af0d4213669a24618cb802c0"],["/archives/2022/10/index.html","1d286edff364dd5b2de7d27f888ed674"],["/archives/2022/10/page/2/index.html","5614b528baf1511b76c8aa25995dc3fa"],["/archives/2022/11/index.html","c26d38f916348c1d31e438c81b22db27"],["/archives/2022/11/page/2/index.html","0b4f883a85af1b9362e190d059a88cc0"],["/archives/2022/12/index.html","69e94dd0e1d1b6e7bffcc83ed28b7392"],["/archives/2022/12/page/2/index.html","bccf0d6ae0de6a82635b98069681ab5c"],["/archives/2022/12/page/3/index.html","ede1e5336279ab1013c89efdaf8cc9c2"],["/archives/2022/12/page/4/index.html","5fce40d10ed853db64e4cffa9d322d46"],["/archives/2022/index.html","0acd04aacbcc082811bcf565b231a4fc"],["/archives/2022/page/2/index.html","84aa4de68e96949a69e8198062fcf3b5"],["/archives/2022/page/3/index.html","569aa4faee01ba69bd05a2be03fea60a"],["/archives/2022/page/4/index.html","be8ea14c8ad139d30b8d659b2e5fb905"],["/archives/2022/page/5/index.html","625e2464de47710ad9ccdb958d4c164a"],["/archives/2022/page/6/index.html","320b1381c47dee87bbbdbbe1a49e61f8"],["/archives/2022/page/7/index.html","87095f398cf7c78baed9f5492ff4a4b0"],["/archives/2022/page/8/index.html","4d45235584550ae4745654ab0d3b3b16"],["/archives/2022/page/9/index.html","0688b8dacbfb812ea42f3faa833010dd"],["/archives/2023/01/index.html","9dda85f3ceeb5584b3ca343810a3893e"],["/archives/2023/index.html","34dea1bd2b66e34cb4d4975a705f75b1"],["/archives/index.html","b72d424a264f69d4140c8eafe8a0d66c"],["/archives/page/10/index.html","5884a45c4fdc0149b0e48f349489b9ee"],["/archives/page/2/index.html","849ce9ec416923568ecc99ea7453a65b"],["/archives/page/3/index.html","2ae43bb15139a479c45611d8bd5f98cc"],["/archives/page/4/index.html","011b3b4b656f74b07ce315323ac8bb5e"],["/archives/page/5/index.html","e4adbb641eaa794bdddf1f583a733dc2"],["/archives/page/6/index.html","7ab7c8f90cdb0845b5a1476e577d199a"],["/archives/page/7/index.html","3ae406bfe96b93d20d821cb2153e18d4"],["/archives/page/8/index.html","52b46234374a2f237e7cf2e96af40ce3"],["/archives/page/9/index.html","2294d808ffff063fe24d5f9d618d9860"],["/baidu_verify_code-ZFSCabM1PJ.html","2720322954309d0674e12ee88dc4abb2"],["/css/main.css","9d470bb68d44a8b45f7191753ec4df9c"],["/css/spoiler.css","eb373af0627ede298867ffc0045da62e"],["/google41a28d5f2878fa02.html","815be54ee3613801fe879178c8cf0230"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/tou.png","578463708d7de56a1c4e6331831b3e2e"],["/index.html","792bc50f4739129db472c7f5d777efea"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/code-unfold.js","e079f1fdb88a9edcd745220494218e88"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","97606f901b6e488587ad5c49aa367604"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mylibrary/css/float.css","c2b1dfc6adaa0c1386f20b1e1eda9b08"],["/mylibrary/css/hide.css","d9777127f3c386e3ef0e7c705850c970"],["/mylibrary/css/load.css","b68c4b6ae2abae1d167679b0953c965d"],["/mylibrary/css/neon.css","f6ef4fb8ea457912b0b2d1f3550062c9"],["/mylibrary/css/round.css","f12789d92e2c9b7457604eaec2888daa"],["/mylibrary/css/shake.css","a7a28a24e79d0fdf78e1836605a1755f"],["/mylibrary/css/shiny.css","441e4af10180831e8f929ac737fb30f5"],["/mylibrary/index.html","a6777acc3b5eae5861838c9734b94cb0"],["/mypage/css/style.css","fbe491f66eb940007e329e1df90ce850"],["/mypage/font/LigatureSymbols-2.05.eot","5b46f67c079e0599f89aae807cdad560"],["/mypage/font/LigatureSymbols-2.05.svg","f4be952f02a00bd7b464568304b12842"],["/mypage/font/LigatureSymbols-2.05.ttf","48ae0b91a8d6e1feb2c15961a338dad8"],["/mypage/font/LigatureSymbols-2.05.woff","f974884f441019724c351f85478b3938"],["/mypage/font/README.html","2990124ebaf096a22d74d4988e4fcf19"],["/mypage/index.html","07621d0cdbd318445d0ae735a56793af"],["/page/10/index.html","eaae824ea4ad506e43d834bb92860e3b"],["/page/2/index.html","93fc541a082ab06b47fb5ed77cb29449"],["/page/3/index.html","b368468f2dba507e43c569769bcd7b11"],["/page/4/index.html","855d581691e09f2e4e170d4b1da5250a"],["/page/5/index.html","ef456e5778aca67b17835cf9e7494878"],["/page/6/index.html","8799e7e6be42edb52bb19ce25a674c5e"],["/page/7/index.html","c9ff9811a491a765374d77387dbe4150"],["/page/8/index.html","83ddfdb7e95068379e84c7d9d0ba769b"],["/page/9/index.html","cb5d1dff828058a04eff2989395c3362"],["/sw-register.js","3045a1452c412c5a5c80f6bd9a1dd464"],["/tags/Block-NeRF/index.html","3a529d64c61465b46ed2a80fa8b1af82"],["/tags/FPGA/index.html","ce815efb44ed12e9799aa17bc6513e84"],["/tags/HAL库/index.html","9b901f3e7bcab318e7896f8c6fd9d149"],["/tags/H桥/index.html","27d1e3dc42e4dfebdbd35ecd86478bbf"],["/tags/OLED/index.html","0dbec9a6703cb3e8f4ed163476b983fe"],["/tags/Point-NeRF/index.html","543daacd67afde6815e19f46e5a61880"],["/tags/V831/index.html","69338d931adde1467462c0b6bd0b139f"],["/tags/amg8833/index.html","0926faf1a6f877da1bd3a2917f23213e"],["/tags/bard/index.html","c14b80d9ee08a0574d40b7087718d39a"],["/tags/chatgpt/index.html","998c597988bde10ce4daff16b3bd4e39"],["/tags/cmd/index.html","aeddcdb9212dd82cac8218debc69b856"],["/tags/conda/index.html","83bfa9c2dfd2551fb10d4462a2dae865"],["/tags/css/index.html","418503c8ed98ab42e27100776caa6a79"],["/tags/git/index.html","c160a6edd79e64ad95d8dd9787e4c116"],["/tags/github/index.html","a7ebdb844f44071006a894d7efbc35f3"],["/tags/hexo/index.html","6eccc240ee74c2cb9f8c6f4370ddbb67"],["/tags/i2c/index.html","4c968ad0e4105711c61870f99904f470"],["/tags/index.html","32bfccdc8b5fcdff1cea7b46bf0c4560"],["/tags/inte/index.html","27d1a4a4c2db4318c60d709b5e16e7a7"],["/tags/k210/index.html","8399ee79e6b3d7044034385231fa2cef"],["/tags/latex/index.html","524544758fe93b058da78061117da872"],["/tags/learning/index.html","4c01516b956bd35deca3a2bca46ab3ef"],["/tags/library/index.html","9db5048c84ddc5f259f7523886e0ccb4"],["/tags/library/page/2/index.html","c46d35e108edfaf50349429d2a50c921"],["/tags/library/page/3/index.html","111cc651acbe360476ecdcbdc1f94be0"],["/tags/library/page/4/index.html","9df8f8923bcb32e0facdc844e44308ba"],["/tags/library/page/5/index.html","ba429c7595547b1e864b0b682b40516d"],["/tags/like/index.html","10176430e368bc3087cc8d617a2ed054"],["/tags/linux/index.html","92f0a5933adcd87044b949db09ee3fd0"],["/tags/make/index.html","3bdc802e00ec4d0fb72082db9b318df7"],["/tags/matlab/index.html","2a777e1f0d26831970b299b44c3e284d"],["/tags/modelsim/index.html","e0b5677715c19ad3646c4259d53555af"],["/tags/nerf/index.html","9c739a3947cce58ece8c80d5bd009312"],["/tags/nrf24l01/index.html","88ab84fe60ce842b5f62856e3b60673f"],["/tags/nuitka/index.html","cb28f4eb331648d90f9140983d9d5107"],["/tags/numpy/index.html","72e01e928c345b804ea48dd05f2114c9"],["/tags/onnx/index.html","ec3951fe1d929ee95df940b567352f15"],["/tags/pcb/index.html","f6c0a741875d33cb4a677d4989b69593"],["/tags/pip/index.html","e0a8ee1db18a7ee37cf4b60d7472dbe0"],["/tags/psutil/index.html","ee87ebc9a0590ee7b8e9cb748af2efcd"],["/tags/pybluez/index.html","cfeb8ff8bb08a4beb08341dbd79726e5"],["/tags/pycharm/index.html","45648a827fe129994a3360b9666afd45"],["/tags/pyinstaller/index.html","885be6e9cd005931dc16980b87d518ea"],["/tags/pyqt/index.html","bb8d809360672150fb716b12f6dc765e"],["/tags/python/index.html","db0a2eb5e7bf1a6c593f1bef01d9f3c7"],["/tags/regedit/index.html","1c66baeeab3d948d02437a5493a98d34"],["/tags/solved/index.html","479c0254f696fa74bd4e607b8965915c"],["/tags/solved/page/2/index.html","82af60043e7aa5e53930dfb6fbcdf1d0"],["/tags/spi通信/index.html","a6aec392a75fda675b17c7a1572413c8"],["/tags/stm/index.html","e1fe47d66ce2e433ce1f6285e6c1e924"],["/tags/stm32cubemx/index.html","4f148991f788ed7fded57af57d2eedbe"],["/tags/tensorboard/index.html","6afb878c0778a0797a444220377f3502"],["/tags/torch/index.html","a945c0f46cac2552905da4b56219cfbf"],["/tags/typora/index.html","8e5fd65303f4390fe590a0bb4a158b03"],["/tags/ubuntu/index.html","2fb8c58e4e3fcd855e5cfb7cf9ed26b5"],["/tags/vco/index.html","cdbec4421e68b2037bfb06bf8cacc83c"],["/tags/verilog/index.html","6c98704cc9fa02d9b7755651d33715ed"],["/tags/win32gui/index.html","908051428e54043c1f5a3c8b28916f67"],["/tags/windows/index.html","7531230b6f3fc069ab9dafbb3d72992a"],["/tags/work/index.html","543687efc68b54e7b9c65d91cc85a03d"],["/tags/work/page/2/index.html","58b0bf47653d7b2e7546856deb8ada36"],["/tags/下载视频/index.html","74f0a94968524acc911a32eb12432574"],["/tags/代码/index.html","8d73899ab134b5d104af06d1d6565067"],["/tags/全志F1C200s/index.html","29157b24217e5097c8e6e051b0bf8deb"],["/tags/公式/index.html","da5083c38c46dbd8ca84f3e2c2d652ba"],["/tags/前端/index.html","64a8bc3f0db959a6fde18bbf3d64de24"],["/tags/博客/index.html","9d82d1f5a16361c85b614010de541997"],["/tags/压控振荡器/index.html","1c4c52113f1b758b11b8f07d03b769ff"],["/tags/寄存器/index.html","f77495b2e276630e0a028bc4e1ad8b30"],["/tags/嵌入式/index.html","6dcd5f9447cd19b6e7ffa4b6243ab6e8"],["/tags/嵌入式/page/2/index.html","160e08ee808abea2b5a0f6f8d052f232"],["/tags/嵌入式/page/3/index.html","6086be487d8ec41eb6097c8f0c63991a"],["/tags/嵌入式积累/index.html","2e70a523641deb9f940d9a2264223620"],["/tags/开关电源/index.html","b01120ee2abac9e5c89dfd1bfbf2f8ea"],["/tags/开发板/index.html","6ad9614aceaa1f552c63526764419e67"],["/tags/忆阻器/index.html","49ec88164619d916beb2d38a754e7fef"],["/tags/快捷键和常用指令/index.html","97c888474335e1a0406bcd7e191c242e"],["/tags/打包/index.html","ca770674e1768ea0e4d4d21dd0b584a8"],["/tags/控制/index.html","55e8b34883c0628560aaac78c722f7fd"],["/tags/数学建模/index.html","9cebc41b774909ab624d6661d9f5643e"],["/tags/数据处理/index.html","e6346d54b49df8b44d5c236605fb60f7"],["/tags/数码管/index.html","87fa215755374d7cc4e734d7534c03f2"],["/tags/整数规划/index.html","a699335f764b0d5787507773bdc71c89"],["/tags/树莓派/index.html","ef93d652646efa477d1e616df6d849f7"],["/tags/模块/index.html","da8fce576fda849570f6eb3f88e3aa77"],["/tags/测距/index.html","4f5d1d334bfc3527cbc0a9dfb39f1642"],["/tags/深度学习/index.html","bd7a98b560e015944ae0b47c0954ad5f"],["/tags/深度学习工具/index.html","28d280e10fb473271bcd75298bd614da"],["/tags/滤波/index.html","4b0b12f6d6f363e561a15ae3e4490300"],["/tags/理工方向/index.html","211657089cceacdaa3ff2d656ec39dfb"],["/tags/硬件/index.html","97f78d613fa721a44f64936e4ba75e59"],["/tags/硬件知识/index.html","313543b47eaa76ceb9ebb943351ee761"],["/tags/积累/index.html","c8e73adfd60430ca09c56ab8412c4d4e"],["/tags/算法/index.html","8f0430975f968ba070bf06b1d7a308b6"],["/tags/线性规划/index.html","28ad3141a7cfa8161ed5b3835b2ee7da"],["/tags/经验积累/index.html","9d364892ed973f9e7369b4527648c08b"],["/tags/编码器/index.html","4312f2d3a796177a9f922c68f6d3290a"],["/tags/网址整理/index.html","94e2c70ba88aa31867bcacf985a02b23"],["/tags/网盘/index.html","97cf2bd690771dd483c2c1b4cbb6ea9c"],["/tags/航模/index.html","75631908ef89647064cb2d437e1588ae"],["/tags/芯片/index.html","10726c83d1e0b731766d85d5e1bca22b"],["/tags/蓝牙/index.html","0bc436ba3a117c92be667f55254511b2"],["/tags/论文搜集/index.html","e3710a25c747fb6a394308761950dfb2"],["/tags/语言/index.html","d9359d419190ce5a7a189fb9c4c7d624"],["/tags/课内知识/index.html","1744406fe178cae89898e91e2c2dc6eb"],["/tags/贝叶斯/index.html","cba68ed56e00c885d3b55dd6287ee997"],["/tags/超声波/index.html","0c82a9efcfb2fa6d943cd74437e6d20a"],["/tags/软件/index.html","029df2b4503597c822d02ee0bb4483e4"],["/tags/选型/index.html","ed2e4b87817204b5703fa71aa8868796"],["/tags/通信/index.html","03dc76055907dd60d03e0f97a4ab4254"],["/tags/钢琴/index.html","ffedcfafa44e724f2b3546f69b4cb92a"],["/tags/键盘/index.html","4126013b59c11c412e618102c939537d"],["/tags/陀螺仪/index.html","0bc8d53fa9c9e58cb83fa4d1d1ad8eed"],["/tear/index.html","f7985bdb737c085402a65ccfe7e96739"],["/tear/index1.html","abe5e4121f96f6d92d2486cc58dcd93f"]];
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
