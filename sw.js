/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/learning/开关电源/【开关电源】学习1——buck/1663506637120.png","8e50e1a9a14c0174f21513f95808f075"],["/2022/learning/开关电源/【开关电源】学习1——buck/1663507058896.png","4d8882df5c227127a8bcf8db25063cd2"],["/2022/learning/开关电源/【开关电源】学习1——buck/1663582916508.png","f7fd2765312cd0c65679effef1c1b46c"],["/2022/learning/开关电源/【开关电源】学习1——buck/1663632762752.png","b56aa45e619a0a411fd1791a3a28ace8"],["/2022/learning/开关电源/【开关电源】学习1——buck/1663760481426.png","618f26cc158fc16981dd41ae514a3764"],["/2022/learning/开关电源/【开关电源】学习1——buck/index.html","e3bee18cb4d1e443f40a10ac1872f99b"],["/2022/learning/开关电源/【开关电源】学习2——boost/1663597318714.png","47bd3d0509ef32d05139ab0045289760"],["/2022/learning/开关电源/【开关电源】学习2——boost/index.html","ea3c1a3d659fd0b4f155aa4c439d95c0"],["/2022/learning/开关电源/【开关电源】学习3——VMC反馈/index.html","1451b5f54e34ec4d5c1e25d6e131355d"],["/2022/learning/开关电源/【开关电源】学习3——buck-boost/1663599045317.png","db7c286c722f9f19f1648e96a61936b0"],["/2022/learning/开关电源/【开关电源】学习3——buck-boost/index.html","048f5c6c7c49c836b8bb8eb439cc5dc7"],["/2022/learning/开关电源/【开关电源】理解/1663634083260.png","7b1a889ee96c83e170023666681c9131"],["/2022/learning/开关电源/【开关电源】理解/index.html","11319d2d5bacad61139ee9e6df62fd18"],["/2022/learning/开关电源/【开关电源】进阶1——稳定性判断/index.html","35cef405221b34535a81d8e0ff8202db"],["/2022/learning/开关电源/【开关电源】选型和使用/index.html","1a0ccd58e835b96fdb6d5f13b2f0bcbb"],["/2022/library/frontend/【hexo】博客部署/index.html","4476a9143d3ff0e38f88e4b185853f56"],["/2022/library/frontend/【typora】学习/index.html","749ece77df535a3f047bfb4d076f1bf9"],["/2022/library/frontend/【typora】学习/v2-e006224a3066540d792b5ecb950aab50_1440w.jpg","ae30c50045fbd7770213d615ef482ff8"],["/2022/library/frontend/【vue】学习/download.html","acf05cde8580ef82382c8ecdbd7292c0"],["/2022/library/frontend/【vue】学习/index.html","02ee5e1ca6ad5f7fb8d309d2368ad057"],["/2022/library/frontend/【博客】搭建记录/index.html","a9fa17446a8b5b0098ae077078115750"],["/2022/library/inte/【css】学习/index.html","db8eed11dcb0fb318115665830c8da62"],["/2022/library/inte/【latex】学习/2018041621294865.png","6f077ea9fc5c8a5265909192838fedd3"],["/2022/library/inte/【latex】学习/20180416213036844.png","cf8397f2944159f69623ed2574ac93fe"],["/2022/library/inte/【latex】学习/20180416213119987.png","d38af3df52cbbdbc443dd2add6d26ca8"],["/2022/library/inte/【latex】学习/20180416213126857.png","e23a42706b3d6f36130417920343ab3b"],["/2022/library/inte/【latex】学习/index.html","b064bc6c16ea19ba885fc9b7ddd28ba5"],["/2022/library/inte/【钢琴】织体类型/1666968516628.png","847154f1f5d8d1f02e722c21f7dc4eff"],["/2022/library/inte/【钢琴】织体类型/1667918446434.png","4b590d362fb1199378795754ddc87ef6"],["/2022/library/inte/【钢琴】织体类型/index.html","26541e665b4b3e102d45b5371d3ee5ca"],["/2022/library/python/【nuitka】打包python为exe/index.html","11458dc1ffca25ff7a5067c225e475d9"],["/2022/library/python/【psutil】检测电脑网速等/index.html","c64b9669efa6519ff2dc7bdb4cbc5f43"],["/2022/library/python/【pybluez】python控制PC蓝牙/index.html","455b66a2935b40be934fdabd76ac6dd6"],["/2022/library/python/【pyinstaller】打包python为exe/index.html","5844f466dbae5e9d434004b6a89c2801"],["/2022/library/python/【pyqt】编写可视化界面/index.html","02d38e97cadfd306b2ecd8b7c19a74b5"],["/2022/library/python/【win32gui】控制win系统/index.html","18455298c848e2f46000bb3cd961d091"],["/2022/library/嵌入式/【git】学习/index.html","d66440d6f74c3bf305f7fa044dd215e4"],["/2022/library/嵌入式/【linux】常用指令/index.html","7ed68531ac10656459af75a1f71d60cb"],["/2022/library/嵌入式/模块/【模块】OLED/index.html","8509bf87dc6ccf469937e41c1d068a52"],["/2022/library/嵌入式/模块/【模块】陀螺仪/index.html","4d9ffad65105310b307bd18152b109c2"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/clip_image002-1665804664642.png","d05548e400e3d365d689c758dc7c2a90"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/clip_image002-1665804668891.png","8713e2180007528a632b7cdbc88e17ac"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/clip_image002.jpg","0fd920144ec253011b05fa9463f1985e"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/clip_image002.png","243e29a00c08ecccc64ea5b0d8f1f030"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/index.html","f47d5e2028048439fcb3bcbcad924e53"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803600516.png","d02fbbe7943a202428ceef1ca50a5c8d"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803607390.png","3df26768c0d97b3acbb64c7f4738f15c"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803617793.png","3df26768c0d97b3acbb64c7f4738f15c"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803634716.png","441a3a852dac9db3f5bbf538e97e06e3"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803663941.png","38d29c573fc0aab159543ee6f3d6b31d"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803667431.png","38d29c573fc0aab159543ee6f3d6b31d"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803862765.png","f7e2165483ca1f224fc47019c9d85839"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803865723.png","3da7b08b88d8795e53d03a47e1926277"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803871404.png","9601e1216b6e8246b7f1b1887108f8ab"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803883747.png","9601e1216b6e8246b7f1b1887108f8ab"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image001.gif","ba898c600ecfdb213d2223a0f783c808"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image002-1665803844893.gif","fb05fad8f7ca3e4d9e40000a9ab1dc09"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image002-1665803856973.gif","e1a4cd1747beecc7d92124979531824c"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image002.gif","0c0f42f02d474126082016d250804bc4"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image003.gif","1f489bb3e02d4993cdd501f7ec773812"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image004-1665803844893.gif","560b736f1eb0faacf034adab49d2c620"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image004-1665803856973.gif","09cde39109369f9185d1cf128c6d7c2d"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image004.gif","32873c471ff1058abf9d6d09ca5e45f0"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image005.jpg","ea2dddfe9b1da4f406ee36b37c99e72e"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image006-1665803844893.gif","eaa063e3d871f7c40777c68c475fed91"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image006-1665803856973.gif","b0138096b0fc7682435ad07aeaf159ce"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image006-1665803982819.gif","6540947f9843ab822d3e8eeb7ef621e6"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image006.gif","6290aa2f8360b2a4f05e4c09e4d6bc80"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image008-1665803856973.gif","560b736f1eb0faacf034adab49d2c620"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image008.gif","113b77d852979982495a775ea4d973d1"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image008.jpg","aad87f9838e93808a0caed1ece93ffac"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image009.gif","fd6cf84a1333733613c80d5599c0fbdb"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image010.gif","eaa063e3d871f7c40777c68c475fed91"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image011.jpg","fa6d15386072d8a691d18f9c3a53b426"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image013.jpg","cea0cb9334e0d5f1b84beb2fcd8b1245"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image015.jpg","660345ebf2132d1bcdd9a7455529093a"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image017.jpg","29517d76c214adc17343771d2d804679"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/index.html","6720d4869aa8214432ecdc94a870e886"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131552729.png","75acd9fc1668bbfebefd6ee208a0aa74"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131555323.png","75acd9fc1668bbfebefd6ee208a0aa74"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131686170.png","d69dc3e1daa1e8468206f55dbfb434c3"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131711842.png","50e82f1823ac8f06e3bf764ffe9560e4"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131737857.png","9bcc111c160798e1c00de21c318f71f8"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131783587.png","354d4fbf7b113c461f592f2248d4c29f"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131825005.png","420cd24dc270086e8991011f908ffe29"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/index.html","2f68755e8d687ea81972d1138a09763f"],["/2022/library/嵌入式/硬件/【硬件知识】芯片熟悉/index.html","a8dc2d7d4835263967f4b3793377573e"],["/2022/library/嵌入式/硬件/【硬件知识】选型/1665935986042.png","8770ec634a84589688edda3f78de1946"],["/2022/library/嵌入式/硬件/【硬件知识】选型/index.html","f171dc1eac52c5d054b09482d126a1f5"],["/2022/library/嵌入式/积累/【嵌入式积累】阅读寄存器手册/index.html","9758ee24d41a99eabc5af9905dd10575"],["/2022/library/嵌入式/算法/【控制算法】学习/index.html","cd58ec42569001889c7d50624a3383b1"],["/2022/library/嵌入式/算法/【滤波算法】学习/index.html","ee76ea9fdd4b051ced709be055d1882a"],["/2022/library/嵌入式/语言/【python】进阶总结/index.html","52ca12baadaf3cc56244a814fc4c1abf"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】i2c通信（mpu6050）/index.html","6ee21149c57d2e601a6b741e97101d43"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】pwm波/index.html","59b65ba8d796477c804cde4e63cf13d9"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】spi通信（nrf24l01）/index.html","24d4f23f004b7051dac4be0bc5fd9de2"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】串口通信/index.html","f3f4cd4764c4b53b329f6730d8a3938d"],["/2022/library/嵌入式/软件/开发板上手/【V831】开发板上手/index.html","4341b5cd64a6450fc9cf72866c498de4"],["/2022/library/嵌入式/软件/开发板上手/【k210】开发板上手/index.html","640928ac866e51761e81a143418670bf"],["/2022/library/快捷键和常用指令/【cmd】常用指令/index.html","39917c7db3ab1d98317ca189eac9fb01"],["/2022/library/快捷键和常用指令/【pip】【conda】常用指令/index.html","8aecba0dd8a63b05182971d48de6560d"],["/2022/library/快捷键和常用指令/【pycharm】快捷键/index.html","c6f345d58c8fc5d9a949e73c18c809b0"],["/2022/library/快捷键和常用指令/【win】快捷键/index.html","ae12cabb79eefb120122dd45a2ce3f4a"],["/2022/library/快捷键和常用指令/免费下载视频/index.html","0896bb38d41ff8f9a3bf82e0247d403e"],["/2022/library/数学建模/数据处理/index.html","53477e102ebf9ea474b2b3702f9bb117"],["/2022/library/数学建模/线性规划和整数规划/index.html","5c7a2cc9786a3d181438391e21f11c2f"],["/2022/library/深度学习/【深度学习】基础知识：×NN都有些啥/index.html","a01d955614fb33274344d96f0cff4e11"],["/2022/library/深度学习/代码/【numpy】语法基础/index.html","42554126e0558629911018f0d987c3b0"],["/2022/library/深度学习/代码/【torch】语法基础/index.html","aea96da62675df8611c232f02fe80c28"],["/2022/library/深度学习/工具/【深度学习工具】onnx学习/index.html","338c20e3b3dd78a25ec97b3d2f440081"],["/2022/library/深度学习/工具/【深度学习工具】tensorboard学习/index.html","1800bd256ac3b984b3d605fc6b9d58c7"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/20190123102311588.png","ecd311bfb9d0bb3a4600fa915ca4724b"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/20190123102425330.png","185aa1eb346c06c79434abc5d219c69a"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/index.html","f69c8dceecfc64664ae5e1865ad2af57"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/tt0.top-284371.gif","67646fb39542ace8ce2628bed493c979"],["/2022/library/经验积累/【经验积累】网址整理/index.html","421f7600abeb3d2ed4f2ffd009fa5b7a"],["/2022/library/经验积累/【经验积累】论文搜集/index.html","b955e6eadd5d622cbeee9ee9876b5230"],["/2022/library/课内知识/【FPGA】仿真和烧录/index.html","595a415cd007b16c6e410dafac7f9281"],["/2022/library/课内知识/【matlab】学习/index.html","29770778bb7733b44cdb7b7c94a1348a"],["/2022/library/课内知识/【verilog】学习/2305487-20210316195006605-973494686.png","c44b53656d81edac532917ae21e43a06"],["/2022/library/课内知识/【verilog】学习/index.html","cb997a2b6c757ba4324a1b54660283c8"],["/2022/library/课内知识/【常用数学公式】总结/1670057171754.png","66c6f23ee349c4f1bb91a05ab6d984d8"],["/2022/library/课内知识/【常用数学公式】总结/index.html","b3aff2c89723a7cdc5c2494d9fea0089"],["/2022/others/Write-blog-using-markdown/index.html","81b0dc887266e60bf6a348a6c779f006"],["/2022/others/古诗/古诗/index.html","38f60786c6d85477dafe7b54ebc4bc80"],["/2022/others/能力年表/index.html","846624e4522e15b784f1b1dba58771d3"],["/2022/solved/github的github.io项目打不开/index.html","37e7f8bae209b476f9d4149514c3fea2"],["/2022/solved/hexo部署报错spawn failed/index.html","a6490e2061adacee0e80a75e8743de24"],["/2022/solved/modelsim的-novopt优化相关报错/index.html","d6caed98fd72f2bd8cf044d18de2fbf9"],["/2022/solved/npm install 报错/1671205482714.png","dd319d6caeb7486e40c39f1507b3e6c5"],["/2022/solved/npm install 报错/1671205487909.png","dd319d6caeb7486e40c39f1507b3e6c5"],["/2022/solved/npm install 报错/index.html","5505b4a69ad8771865c634dc68d51f80"],["/2022/solved/pycharm修改快捷键/1668304724550.png","22682fd6b614b99d048605ec3fc85099"],["/2022/solved/pycharm修改快捷键/index.html","d6e444c29b780bb3c15a4c599ee45ffe"],["/2022/solved/pycharm内无法打开cmd/index.html","4bf129ca3b5f7dfcc779d196e94099e5"],["/2022/solved/从regedit改变键盘映射关系/1669721677084.png","72ee8a7f108bd0244aa4145769b003b7"],["/2022/solved/从regedit改变键盘映射关系/1669721822415.png","e6d19538db0e0dcefcbb0e2bef43dc88"],["/2022/solved/从regedit改变键盘映射关系/index.html","635efad95eb9e6a2ddb52755c89cf0ef"],["/2022/solved/右键新建菜单管理/index.html","9ef801c11eed99517f84866d98444a7d"],["/2022/solved/执行make menuconfig时报错/index.html","695298c28ad16ffc835dc0385354142b"],["/2022/solved/报错binsh 1 bc not found/index.html","df979eed1c7ea959fd7e7696e63ba3de"],["/2022/solved/报错binsh 1 cc not found/index.html","bd93f3a365e6a45706ab58dc19ffd2aa"],["/2022/solved/报错binsh python not found/index.html","62c2be35ef1fbc58138ccadd3f5e38c4"],["/2022/solved/未整理/index.html","1ecd4da34f7a753ea2de8f664f05b145"],["/2022/solved/树莓派域名解析暂时失败/index.html","b7f59722d9bc565f8e7342ed26545268"],["/2022/solved/树莓派配置python环境/index.html","c2d9717a9531a870ff8f06e34f35f106"],["/2022/solved/网盘挂载Alist+RaiDrive/index.html","1d5f55296bc89390b9b822429db04512"],["/2022/solved/设置软件开机自启动/index.html","32924c8ea3ff909d2bbefabbad0f5344"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118074452-1667297751590.png","221e63aa60efa77dca50740ce9b88380"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118074452.png","221e63aa60efa77dca50740ce9b88380"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118457009-1667297751590.png","5c1577c940dd443631045f45787e487d"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118457009.png","5c1577c940dd443631045f45787e487d"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667226872521-1667297751588.png","ec7a6051752cb193ae983fb81d135fce"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667226872521.png","ec7a6051752cb193ae983fb81d135fce"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667264387582-1667297751590.png","57b13f83c9dfd506e6ccb81743f74963"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667264387582.png","57b13f83c9dfd506e6ccb81743f74963"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667265226170-1667297751590.png","600b87f6ea78e46e19929200a8190875"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667265226170.png","600b87f6ea78e46e19929200a8190875"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667292838757-1667297751590.png","f9c6a5975d54d8b975e9de23dc891c00"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667292838757.png","f9c6a5975d54d8b975e9de23dc891c00"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667293450480-1667297751590.png","57c9efd9a2a4ae995517991ff7abdf32"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667293450480.png","57c9efd9a2a4ae995517991ff7abdf32"],["/2022/work/nerf/【nerf】Block-NeRF笔记/index.html","65a85f2266934fc54ee63c5d9d4911e5"],["/2022/work/nerf/【nerf】Point-NeRF笔记/0b4e1994da04413a8866105b4989f8b8.png","d0f1d27bb090bf3c33540b180698c41b"],["/2022/work/nerf/【nerf】Point-NeRF笔记/1658128325205.png","b048922781d5aba77d19ef20b404d40e"],["/2022/work/nerf/【nerf】Point-NeRF笔记/1658194855269.png","62b433413622e8f3869c3169e910ba72"],["/2022/work/nerf/【nerf】Point-NeRF笔记/226855a91dd34416a673c90889d9125c.png","cd3eb2acd1e6bf054bb4721eaaf6b0b1"],["/2022/work/nerf/【nerf】Point-NeRF笔记/3dcafd31179c4dd8a339eb27f08c2848.png","31e48f38ffc4301d2e9d828a1567c8ed"],["/2022/work/nerf/【nerf】Point-NeRF笔记/41f23bb937554eef9bc59be5e35edece.png","9f12b05323f80cab2c38a24bf1ec0ebd"],["/2022/work/nerf/【nerf】Point-NeRF笔记/46ccd8a5c7fb4d90b4fea699c8abad94.png","16ccbcc52586bcfa171a952775f174f7"],["/2022/work/nerf/【nerf】Point-NeRF笔记/47ec1ea670d34d728fa6d1920fa98b75.png","60dc2887bf395ab3c1e763da69a51a9a"],["/2022/work/nerf/【nerf】Point-NeRF笔记/4c08bf3e7c3e4e7cb892f82bf872bb4b.png","c262265d65df56fc78299615ef65f9d6"],["/2022/work/nerf/【nerf】Point-NeRF笔记/5c3babb1708240a88a300e628a460368.png","5d5f7a85463d02f9efaf8283ab440c4b"],["/2022/work/nerf/【nerf】Point-NeRF笔记/b62693bf6f524fdb945fc84cfdfd8003.png","1b47f19451e1bcecaf0e885057cbcd3c"],["/2022/work/nerf/【nerf】Point-NeRF笔记/beb43ab7eedb4ce9b744cc7ca46b9448.png","a556c57e731513afccaf55e13b119380"],["/2022/work/nerf/【nerf】Point-NeRF笔记/c6e8f9d76fae4b99958d395917458a66.png","325197e008d25fd21c1e67ebe2be226a"],["/2022/work/nerf/【nerf】Point-NeRF笔记/d39620fc168844918a7c2942bcaede4a.png","81b19e32b4b1748602e143d22c4817be"],["/2022/work/nerf/【nerf】Point-NeRF笔记/f4e73e69a8714652a345e08ece53b59b.png","835da5f34875484dac1b71e245cbfdc5"],["/2022/work/nerf/【nerf】Point-NeRF笔记/gif-1667309947220.gif","a8cd0a12f9acde3c1620d3eaf31b3919"],["/2022/work/nerf/【nerf】Point-NeRF笔记/gif-1667309947223.gif","95fb73ac89ac6c3d84d5e4caf34ee3bb"],["/2022/work/nerf/【nerf】Point-NeRF笔记/gif-1667310098644.gif","a8cd0a12f9acde3c1620d3eaf31b3919"],["/2022/work/nerf/【nerf】Point-NeRF笔记/gif-1667310098652.gif","95fb73ac89ac6c3d84d5e4caf34ee3bb"],["/2022/work/nerf/【nerf】Point-NeRF笔记/gif.gif","7f3733e9b830cc67f2c6388dcb2205af"],["/2022/work/nerf/【nerf】Point-NeRF笔记/index.html","f4545cdcc1cd40d41699122d4d5b0240"],["/2022/work/nerf/【nerf】nerf-pytorch/index.html","590cf8672c482a1858bc951c5889ed91"],["/2022/work/nerf/【nerf】汇总笔记/1664429458270.png","825aa4007beb45aeb378d542825b6806"],["/2022/work/nerf/【nerf】汇总笔记/3c7ca874aed3436b88ba51edf0749e61.png","1611172fd9c3e23f3a139d965af1d67e"],["/2022/work/nerf/【nerf】汇总笔记/index.html","6204eed1d31db5ef50c22c4ede0286b1"],["/2022/work/nerf/【nerf】记录/index.html","a5fa3d6c793e58b922739180facd553f"],["/2022/work/前端/【前端】记录/index.html","a770dcb1f7cd0f058a2529c1b8af3109"],["/2022/work/嵌入式项目/bard/【bard】Linux迷你电脑/index.html","a4abefd01b8cd46949a5ee660a0acfcf"],["/2022/work/嵌入式项目/bard/【bard】Linux迷你电脑/v2-5443f85fbc97f22e41c10a20a9760742_1440w.jpg","b67e2f438efd9fd26b4d935fabaafcaf"],["/2022/work/嵌入式项目/【祖传板子】记录/index.html","20c05836f4351bb51269c24e4b5868dc"],["/2022/work/嵌入式项目/【航模】记录/index.html","ce8e0c84181696463bf4d260795c33ec"],["/2022/work/忆阻器/【忆阻器】记录/index.html","e0c2a220330b5c80c15b3da773002bd0"],["/2022/一下都是0/index.html","458a743061f6aa26afd8b81d6d7f92c9"],["/2023/library/frontend/【app inventor】拖动滑块写手机app/index.html","36bc873c762a4dfe96a3431ec054d578"],["/2023/library/python/【pyautogui】控制键鼠/index.html","1c1e0a7d120578866bc2b697e7a26f6b"],["/2023/library/python/【pyserial】读取串口/index.html","efd24ccd406275b01687913f79f200b1"],["/2023/library/嵌入式/模块/【模块】amg8833/index.html","83fe56a52113ff199239916bb1b4b6ff"],["/2023/library/嵌入式/模块/【模块】as5600/index.html","6afbe68180600ceb3f92b6803e7346a7"],["/2023/library/嵌入式/模块/【模块】数码管/index.html","f2efae31346a6fa5d886363c881d7fe0"],["/2023/library/嵌入式/模块/【模块】电容触摸按键/index.html","a19911ab19ea86b38f858873c3c01df4"],["/2023/library/嵌入式/模块/【模块】蓝牙/index.html","3701fa9d1108af2886373ae92c934cbe"],["/2023/library/嵌入式/模块/【模块】蜂鸣器/index.html","b8f799360466255b7beef318e1830f26"],["/2023/library/嵌入式/模块/【模块】超声波测距/index.html","fbb83dff828164b7b04af5ed0de49607"],["/2023/library/嵌入式/硬件/【硬件知识】三极管/index.html","5aef4d4cf3d2a1513d7e2abe4eb9f1bc"],["/2023/library/嵌入式/积累/【嵌入式积累】常用官网/index.html","af57c6c9881a6beeda8f1f6b1b85182a"],["/2023/library/嵌入式/积累/【嵌入式积累】控制入门/index.html","42b6f3e2a0ca60d62c813e250e90a6c8"],["/2023/library/嵌入式/软件/【HAL库】笔记/【HAL库】ADC采样/index.html","ad6f9627d942792c0573f8c041e1f2a1"],["/2023/library/嵌入式/软件/【HAL库】笔记/【HAL库】USB/index.html","201ae641936dfbc7952bf61feeb20cfe"],["/2023/solved/chatgpt您所在的地区无法访问/index.html","7088cba650dd0ab3ba2ae29f89a0fe02"],["/2023/work/chatgpt微信机器人/index.html","b61a91041d472d02ad8f6095614da49c"],["/2023/work/mine/电脑外接摇杆/index.html","7596dd07d6f920162ff6dd6c12753a55"],["/2023/work/mine/网速显示助手/index.html","fb47accff08209b3d77fdddd72e005cd"],["/2023/work/mine/蓝牙调试助手/index.html","73312117b4c1ee91dff4a01713aaa572"],["/2023/work/忆阻器/【忆阻器】算法部分/index.html","c7d792da467855d0b415f1b3e0fadca6"],["/about/index.html","98dd37cfcdd472317a29ec72becc8104"],["/archives/2022/09/index.html","af5e77a96dc082c13319c3d60dafa3cd"],["/archives/2022/09/page/2/index.html","f67fac820134c1e6a3c8305d9a9b86a3"],["/archives/2022/10/index.html","0a4ccae28cf1819412efdf54199d5658"],["/archives/2022/10/page/2/index.html","4a5b4a6f17fa1e0a45dfc3939c36523b"],["/archives/2022/11/index.html","0d667e04b2535989df8f89574670a0b7"],["/archives/2022/11/page/2/index.html","7770abce44cf0195ad55e4cd4e9de91e"],["/archives/2022/12/index.html","b366af2b35f14dbd7441bc022ca71a85"],["/archives/2022/12/page/2/index.html","5dd76d480b8154a975651536e750a2fe"],["/archives/2022/12/page/3/index.html","b0a134e120474ca15275c62efbf0741d"],["/archives/2022/12/page/4/index.html","2fe8ded942e70e598df3488c0d95836a"],["/archives/2022/index.html","59a0eaa5a716bfdbf663339357db40d7"],["/archives/2022/page/2/index.html","6a6a448d58aefc279483ab3914e78e59"],["/archives/2022/page/3/index.html","39a37359e4a3c2450636b5431e57b3fc"],["/archives/2022/page/4/index.html","640496640bb19a0e527870434ef3137d"],["/archives/2022/page/5/index.html","fb847e76e8bdcc8d2a050d9ebe17d62f"],["/archives/2022/page/6/index.html","1bd7182d8f30320a9c3be9c52e638e94"],["/archives/2022/page/7/index.html","bc83af7e2153df12b57afae6e5246278"],["/archives/2022/page/8/index.html","dce06c90dd0aac66faec8ca622ea30fa"],["/archives/2022/page/9/index.html","69e2cac22fb24b57f8b13700362ed664"],["/archives/2023/01/index.html","5295016324d53eb276fe222b7174de5f"],["/archives/2023/01/page/2/index.html","b67097766ff6b99bff894ad1747b84e3"],["/archives/2023/01/page/3/index.html","14d869552ae4bb15614fb96a04921fd1"],["/archives/2023/index.html","f1ae307d867d45b529bce7f1d96f579f"],["/archives/2023/page/2/index.html","60a1509a82aaec3eede1904fd1a43c10"],["/archives/2023/page/3/index.html","2d09df9e4817b37823ad4a34cb2e7e6c"],["/archives/index.html","0656fc3b7c9dd3dd7aa28c14301c3ef4"],["/archives/page/10/index.html","ebfaee9037710ca1dc82c6ca1b41fe64"],["/archives/page/11/index.html","ee4b91e3e94f28424a86acc36d23f246"],["/archives/page/2/index.html","8bce75a96041eb6614f04c9adc12724f"],["/archives/page/3/index.html","ddc1cf794f7bafd6d931919405148d45"],["/archives/page/4/index.html","57b44e83e3d90f27608e56128ee84361"],["/archives/page/5/index.html","cae84004308bcfbe9602da4e0fc96cd7"],["/archives/page/6/index.html","4aec8535cf7bed3f32c3e5df2c07dfd0"],["/archives/page/7/index.html","1e640a4fefd9312d1a9f7ff977b38b6d"],["/archives/page/8/index.html","eb6b51849104990a696a530415ec7fca"],["/archives/page/9/index.html","07b65ef24c5e524114799b69350c6bfe"],["/baidu_verify_code-ZFSCabM1PJ.html","b2a01e1a29cb15ad3dfd4d71ab2343db"],["/css/main.css","ea2730c30182d5a9a48cecab066adbea"],["/css/spoiler.css","eb373af0627ede298867ffc0045da62e"],["/google41a28d5f2878fa02.html","dc4ada97bf058fae777efbde5e330981"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/tou.png","578463708d7de56a1c4e6331831b3e2e"],["/index.html","3e87417d66b4006f97a9f9f4235af6c4"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/code-unfold.js","e079f1fdb88a9edcd745220494218e88"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","97606f901b6e488587ad5c49aa367604"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mylibrary/css/float.css","9d08d0d2daa932c413d36e4aa16bfa0e"],["/mylibrary/css/hide.css","c38a1baeb0e02ca1d0c713e3601e1a66"],["/mylibrary/css/load.css","0e5ad89bb6e90251348602313c9977c5"],["/mylibrary/css/neon.css","31651196e8ce565358bd5d9cc246b8d4"],["/mylibrary/css/round.css","8aa0d39a5d48803895bced120613f489"],["/mylibrary/css/shake.css","7e5992614c1eceab21e06b643f8e93c9"],["/mylibrary/css/shiny.css","9272a27fc5397b1571a0068d6022c923"],["/mylibrary/index.html","2c80d555a1de7e36ef68979532a18e9c"],["/mypage/css/style.css","cd61c2385abad1ccbce831db56219786"],["/mypage/font/LigatureSymbols-2.05.eot","5b46f67c079e0599f89aae807cdad560"],["/mypage/font/LigatureSymbols-2.05.svg","f4be952f02a00bd7b464568304b12842"],["/mypage/font/LigatureSymbols-2.05.ttf","48ae0b91a8d6e1feb2c15961a338dad8"],["/mypage/font/LigatureSymbols-2.05.woff","f974884f441019724c351f85478b3938"],["/mypage/font/README.html","9eaf4396ef8071c53edab7a9fa75a9e0"],["/mypage/index.html","cec7a35aa48dcf6cfa24397d5d656e86"],["/page/10/index.html","278f701c0f06e346bb20c85accd63575"],["/page/11/index.html","ba90fd28eb491594768734e6a027077a"],["/page/2/index.html","99349fb7db44a161fad25282f0bb9e13"],["/page/3/index.html","2decc55f314d009226970e1738ee0706"],["/page/4/index.html","e9f74fb21c883e1ad157c555f80fd297"],["/page/5/index.html","dd13f2c8e8b823f793c7dfda2d91e157"],["/page/6/index.html","6ae31815fbc9587b8c91f82efcf039cc"],["/page/7/index.html","3fb83eb368272c9cfdc79ef796070823"],["/page/8/index.html","fb72fb1c83aa9ce98441d4f4291f2d1e"],["/page/9/index.html","4e58318ecc70770f96428b0435528de7"],["/sw-register.js","f9921fe6135252c3247375254d163d06"],["/tags/ADC采样/index.html","44aa7db2ccf297f37800e6d539f5fc8a"],["/tags/Block-NeRF/index.html","918d764713f2f44bce69086f10b82c50"],["/tags/FPGA/index.html","b4d08d5069dc9eab29f7d194c4dcbe5c"],["/tags/HAL库/index.html","d106f9a8642d79e964da0fe38dbe367c"],["/tags/H桥/index.html","a22f87c679eaea4b9ba15902f0896669"],["/tags/OLED/index.html","400ad5c6e0665628fa3f7a6f76fe1d4b"],["/tags/Point-NeRF/index.html","1cfddc272ec58a487c5d18c9bc10a1bb"],["/tags/USB/index.html","733c6f870baf73309795c2d0002fbb37"],["/tags/V831/index.html","5991dcaef5239985d3b3427e70732566"],["/tags/amg8833/index.html","c25afdf367b51b342be4edf7f26f1404"],["/tags/bard/index.html","84c9b358d5ddb119db301dc9631b0eb0"],["/tags/chatgpt/index.html","4815d536fab4d446595d343b4c1a3c9c"],["/tags/cmd/index.html","e8e017fbe3713ca1a041c5f320320004"],["/tags/conda/index.html","0ba0c162ca66f14ccf3b68715253dce1"],["/tags/css/index.html","8d260cc23bbc28fa94649a19daf8ebd3"],["/tags/frontend/index.html","23d7fcb6a50b478dc2284b567bc12ad3"],["/tags/git/index.html","c88c52ae5b46944ff2a1fbd8af382677"],["/tags/github/index.html","eeb15fa63ed82b0d28a66b5f5e9fad99"],["/tags/hexo/index.html","7cab1b921f95ae0f96683556c29688b3"],["/tags/i2c/index.html","25dace718606723fda83f83bf5863861"],["/tags/index.html","63643cc3d37240cbdf8e3aeedb922a41"],["/tags/inte/index.html","deee7266cc9eabd5afd64e27c1bdad33"],["/tags/k210/index.html","533fc8813f47e64540bcc2401a550e0b"],["/tags/latex/index.html","2745195a58671d1ca9686b3cb25a5d3c"],["/tags/learning/index.html","ffebeccdfc3e32743b8a6de1975d8c5c"],["/tags/library/index.html","e4e7806e420425035fa5c8eafda996a6"],["/tags/library/page/2/index.html","12a2abf1de33451c07415cf71a80d5c1"],["/tags/library/page/3/index.html","bbbcf923f7ffa1d4e18cd9d1eb24c197"],["/tags/library/page/4/index.html","32cf26c8689e5496ad41444b0be7b768"],["/tags/library/page/5/index.html","b4b7a522d62fa3f01adc97ca87abc026"],["/tags/library/page/6/index.html","b08eae2af54fbef8c14a8592ee03b3fa"],["/tags/library/page/7/index.html","22c6e8accca20ae603a2ae10412531a4"],["/tags/like/index.html","133dbea0a1b800833a1041b635f19af0"],["/tags/linux/index.html","9cdd136a0ec2ae135651608b568405a6"],["/tags/make/index.html","56a636b3b5a25d9a6d788dc18f7c8202"],["/tags/matlab/index.html","cc5af996bdfb9aa641a354293c744a4e"],["/tags/mine/index.html","a8db086bc02f9fb1ea6bcd85b4fb14a9"],["/tags/modelsim/index.html","77ed63ec25f032d09e32ee0c864822ca"],["/tags/nerf/index.html","b46ffc028d7d51e97bc387d442a30107"],["/tags/nrf24l01/index.html","1bb7129327d3dc2c512d970310e338d4"],["/tags/nuitka/index.html","c8a180423c24ed96060f14781f611e1a"],["/tags/numpy/index.html","4fa3c026fd43437c68f6976dc6a19172"],["/tags/onnx/index.html","408368f57d9b6748a15a9f799a0fcbf9"],["/tags/pcb/index.html","4fc01cf9e4e0cd02f272e986af0ae985"],["/tags/pip/index.html","e52365452829655086dc0bc02129d643"],["/tags/psutil/index.html","f7992c8e12bab657b79d198b67673026"],["/tags/pyautogui/index.html","8072b417f7b4482208a7c7ef675df024"],["/tags/pybluez/index.html","ddbd9d45caf083ad0c5104f55e97316f"],["/tags/pycharm/index.html","9680abfed3f59cc8fcfdd6aea0a95675"],["/tags/pyinstaller/index.html","abc7152baf259d31a8103913ff9804ae"],["/tags/pyqt/index.html","9891b020e6f4890071cef5429391772a"],["/tags/pyserial/index.html","1b7738db04b47ebd2a5288a327bf811b"],["/tags/python/index.html","22419232b23b624bd758f23b01f7ee07"],["/tags/python/page/2/index.html","4527229309e5dcf445b69f495bceae7b"],["/tags/regedit/index.html","9af099a791ffb8e73c8366acddb993b7"],["/tags/solved/index.html","47e7ea782c2a0568ed957a09a3521c95"],["/tags/solved/page/2/index.html","25257415e04d237f4e9cf71bfef02165"],["/tags/spi通信/index.html","d30eeacd5b4ed1b8cfccabf0e8a1da68"],["/tags/stm/index.html","109ad56c673ce829f9a6fe0598ac01b1"],["/tags/stm32cubemx/index.html","696beadebc15dee19f208b6777ff3c60"],["/tags/tensorboard/index.html","7b772eb5904a055e048bd92ebeab9741"],["/tags/torch/index.html","de67ae8d03e2ca2392d4b1dfa6a59dd9"],["/tags/typora/index.html","ec8dcdfb7b93745c91c81e975567220d"],["/tags/ubuntu/index.html","d1a2ea173cf12276872bb1fd07df154e"],["/tags/vco/index.html","577272b604d584af51a434e8cc9e754f"],["/tags/verilog/index.html","1c75dbc26514111947591b7022f1162b"],["/tags/vue/index.html","faa0f014af334b51446481882da66fde"],["/tags/win32gui/index.html","260756b847f05d5b6b6b2109edbb0dd6"],["/tags/windows/index.html","fc0c06160790dafe99828ff16c95ac55"],["/tags/work/index.html","f9ffcfd708db6ae0718da241f49638a7"],["/tags/work/page/2/index.html","0b36edefd982830619ba8cadbf3d3cee"],["/tags/下载视频/index.html","8352d59f000ca10674787d4743d5956b"],["/tags/串口/index.html","d128c2f041e20c5e385624f692fc4851"],["/tags/代码/index.html","05ba442ce1214a71c2dab336597e63dd"],["/tags/全志F1C200s/index.html","51e2e33265dc96d8d0c548cf062a4b85"],["/tags/公式/index.html","8fa54d8bb5852192d27e98d6328fd3f8"],["/tags/前端/index.html","e30ac0991327d845965a2ec989d29dd3"],["/tags/博客/index.html","e702c10874091eac93a9471747da7876"],["/tags/压控振荡器/index.html","a89542a99ac64c748ed1589123fa4ed4"],["/tags/寄存器/index.html","5469ec099bffc22d31db11e8db92d4b9"],["/tags/嵌入式/index.html","65a7278d0257dedb4bda50eb18d0de01"],["/tags/嵌入式/page/2/index.html","d0cef235b5373cf27a9f5d2327611fc1"],["/tags/嵌入式/page/3/index.html","a6229bca505b249a0d9898068fce3508"],["/tags/嵌入式积累/index.html","c9094805772c5df2ecfe5ddf2e8210a0"],["/tags/开关电源/index.html","a28da53f2a2b7395bea521352247ff92"],["/tags/开发板/index.html","8e2d176f61751f6154c1d73e915226a0"],["/tags/忆阻器/index.html","67681180523aafb081c0fb8d4567beee"],["/tags/快捷键和常用指令/index.html","efe282e657bae22e0eba673b2cfc9b33"],["/tags/打包/index.html","fcd27019a25c1c42f25c873ec4afe975"],["/tags/控制/index.html","b74414edaa30061309e3a9f311b58e3c"],["/tags/数学建模/index.html","9a2f22213bba22f5ec5ba9dc08431bba"],["/tags/数据处理/index.html","154f19af09915bbc8d54fca5dc1a1dfe"],["/tags/数码管/index.html","d6dda1a46b6ed13493f7c12f64589699"],["/tags/整数规划/index.html","c74e210a36ed6f02fa28473d41981051"],["/tags/树莓派/index.html","cb531c327251b93f2260ce8cbc8a35d8"],["/tags/模块/index.html","31e028fd80e97854eeee18c31f86fcdf"],["/tags/测距/index.html","c267c9e57b7f2590dc91906c655dba3c"],["/tags/深度学习/index.html","1700eaf625dcc258b591b378d314dcca"],["/tags/深度学习工具/index.html","1761dedad4a59e82dbd55b06fe8235e8"],["/tags/滤波/index.html","d0edd469a34b5b501afe3a40a30417e4"],["/tags/理工方向/index.html","c4b1b6743994702ea7e46172cd102d4a"],["/tags/电容触摸按键/index.html","fcc39c83d758076c12b8450947bfce9f"],["/tags/硬件/index.html","b40c12154bd31425284795e71bf92e8c"],["/tags/硬件知识/index.html","bf19cc26a00bcb7ffe01b11cce923aba"],["/tags/积累/index.html","115c749731da3cb7702a4445dfca9d4e"],["/tags/算法/index.html","f3b6da10931d9ba6033f421c2927c354"],["/tags/线性规划/index.html","cdc91fa185e4f3307a9f005cc3c00203"],["/tags/经验积累/index.html","595875b679b655e145d29aaca9b1c1d2"],["/tags/编码器/index.html","a84e2e09b52b841c52a6267b237523c3"],["/tags/网址整理/index.html","3ce376583373b64d7eb5e42b53a22d7e"],["/tags/网盘/index.html","bff9cb15028b8e9c32eee7f6e688b6c3"],["/tags/航模/index.html","dcc3b55e090e5ec8d1473d1ef7355ca3"],["/tags/芯片/index.html","11549e10f61ceed7b99d458cc0251045"],["/tags/蓝牙/index.html","aab5b28ab4e3d35b34c30a665030f84f"],["/tags/蜂鸣器/index.html","200942bc696bb0cd767f584ccfb8dceb"],["/tags/论文搜集/index.html","6ae4979277433e7b8673add31bd8af1c"],["/tags/语言/index.html","eb3f9cb5dd23c650db24e4b8937db3d8"],["/tags/课内知识/index.html","ca712ee673174a156a122c74030681dd"],["/tags/贝叶斯/index.html","072861d1a87c2eee712d2fb4ad3e9af7"],["/tags/超声波/index.html","0b1dbe4e7c3075a5b8d7f0cb71e0c841"],["/tags/软件/index.html","cb622eee32c918871cf60bdd7e5efbf1"],["/tags/选型/index.html","20b8062b793b95004a35dc632b38ce5b"],["/tags/通信/index.html","61d9bfe734651f769997ee2ff7fb788d"],["/tags/钢琴/index.html","316f92d35d21f6215971afe5b1f085fa"],["/tags/键盘/index.html","7c9416f381b3af26b60922953465c27e"],["/tags/陀螺仪/index.html","2440d3a568dddf6b74d68267397c819d"],["/tear/index.html","459b87f9a05afb460f319be568aac084"],["/tear/index1.html","4debfe9e5c14e4a2f93458fb64d9799a"]];
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
