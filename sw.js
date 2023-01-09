/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/learning/开关电源/【开关电源】学习1——buck/1663506637120.png","8e50e1a9a14c0174f21513f95808f075"],["/2022/learning/开关电源/【开关电源】学习1——buck/1663507058896.png","4d8882df5c227127a8bcf8db25063cd2"],["/2022/learning/开关电源/【开关电源】学习1——buck/1663582916508.png","f7fd2765312cd0c65679effef1c1b46c"],["/2022/learning/开关电源/【开关电源】学习1——buck/1663632762752.png","b56aa45e619a0a411fd1791a3a28ace8"],["/2022/learning/开关电源/【开关电源】学习1——buck/1663760481426.png","618f26cc158fc16981dd41ae514a3764"],["/2022/learning/开关电源/【开关电源】学习1——buck/index.html","b717d96a58ce1a8f6fadc077e45faaac"],["/2022/learning/开关电源/【开关电源】学习2——boost/1663597318714.png","47bd3d0509ef32d05139ab0045289760"],["/2022/learning/开关电源/【开关电源】学习2——boost/index.html","08978c83fb7ab1f5eb98679826daae1e"],["/2022/learning/开关电源/【开关电源】学习3——VMC反馈/index.html","51da3f8401b3b9d49543b5e829c8ee55"],["/2022/learning/开关电源/【开关电源】学习3——buck-boost/1663599045317.png","db7c286c722f9f19f1648e96a61936b0"],["/2022/learning/开关电源/【开关电源】学习3——buck-boost/index.html","f243e036d0b923e5b31f507169a42b2f"],["/2022/learning/开关电源/【开关电源】理解/1663634083260.png","7b1a889ee96c83e170023666681c9131"],["/2022/learning/开关电源/【开关电源】理解/index.html","161fc2764cf9ca6c60336e1a7654dbe7"],["/2022/learning/开关电源/【开关电源】进阶1——稳定性判断/index.html","f19be81db1f5c879c18b3137e8db4a23"],["/2022/learning/开关电源/【开关电源】选型和使用/index.html","2dd8c45d7aae010f3ef34db75e02b8c9"],["/2022/library/frontend/【hexo】学习/1663226540949.png","a1caf41266643ffc4e359e081c132beb"],["/2022/library/frontend/【hexo】学习/1663427142344.png","fc516ac0838c2f1be2343e49860cab83"],["/2022/library/frontend/【hexo】学习/1663507479006.png","a0471f7e563765de0b7231bfe54f7dac"],["/2022/library/frontend/【hexo】学习/1663655817135.png","e1a3c2971865c9df5fc58879ffa2d01b"],["/2022/library/frontend/【hexo】学习/index.html","89b077f2a45e4b61ce411f0733a0bdd6"],["/2022/library/frontend/【typora】学习/index.html","4d70de19ade742e1efd30a50a660e622"],["/2022/library/frontend/【typora】学习/v2-e006224a3066540d792b5ecb950aab50_1440w.jpg","ae30c50045fbd7770213d615ef482ff8"],["/2022/library/frontend/【vue】学习/download.html","518877c560713c9740d6be481bce39ae"],["/2022/library/frontend/【vue】学习/index.html","b2d94efd666e88f469204e395862be03"],["/2022/library/frontend/【博客】搭建记录/index.html","efc505251b10a28f5b4aed9692814496"],["/2022/library/inte/【css】学习/index.html","056b3c87b7be6e11132f33f9e51c2513"],["/2022/library/inte/【latex】学习/2018041621294865.png","6f077ea9fc5c8a5265909192838fedd3"],["/2022/library/inte/【latex】学习/20180416213036844.png","cf8397f2944159f69623ed2574ac93fe"],["/2022/library/inte/【latex】学习/20180416213119987.png","d38af3df52cbbdbc443dd2add6d26ca8"],["/2022/library/inte/【latex】学习/20180416213126857.png","e23a42706b3d6f36130417920343ab3b"],["/2022/library/inte/【latex】学习/index.html","580975d126a9d4e24c34a9b3dbac91dd"],["/2022/library/inte/【钢琴】织体类型/1666968516628.png","847154f1f5d8d1f02e722c21f7dc4eff"],["/2022/library/inte/【钢琴】织体类型/1667918446434.png","4b590d362fb1199378795754ddc87ef6"],["/2022/library/inte/【钢琴】织体类型/index.html","549db6cfa0bbef661687bb986e608ad1"],["/2022/library/python/【nuitka】打包python为exe/index.html","f3e57ca6b482ec520cba3a472ce864a3"],["/2022/library/python/【psutil】检测电脑网速等/index.html","7c43a96eb33ce0169f23c1763bd600e4"],["/2022/library/python/【pybluez】python控制PC蓝牙/index.html","80bebd47a297244d979ec8c4e0ff007e"],["/2022/library/python/【pyinstaller】打包python为exe/index.html","d2480651a8405601efda9d6c3f35c91c"],["/2022/library/python/【pyqt】学习/index.html","52bf5a2f53f55e74ce1985c9ee559688"],["/2022/library/python/【win32gui】控制win系统/index.html","265fa405cacbf5c335a084b4b6b5ddda"],["/2022/library/嵌入式/【git】学习/index.html","1f75210aee4a8687af4ddd52604b955d"],["/2022/library/嵌入式/【linux】常用指令/index.html","486ebaa50d2cb8f33decfc7971324dc5"],["/2022/library/嵌入式/模块/【模块】OLED/index.html","3673da25e3f03658c0d10b28cf83be31"],["/2022/library/嵌入式/模块/【模块】陀螺仪/index.html","3525fb75cee1842ac8512df6522f888e"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/clip_image002-1665804664642.png","d05548e400e3d365d689c758dc7c2a90"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/clip_image002-1665804668891.png","8713e2180007528a632b7cdbc88e17ac"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/clip_image002.jpg","0fd920144ec253011b05fa9463f1985e"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/clip_image002.png","243e29a00c08ecccc64ea5b0d8f1f030"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/index.html","19698084be907410acbafddc8e6eaaf3"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803600516.png","d02fbbe7943a202428ceef1ca50a5c8d"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803607390.png","3df26768c0d97b3acbb64c7f4738f15c"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803617793.png","3df26768c0d97b3acbb64c7f4738f15c"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803634716.png","441a3a852dac9db3f5bbf538e97e06e3"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803663941.png","38d29c573fc0aab159543ee6f3d6b31d"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803667431.png","38d29c573fc0aab159543ee6f3d6b31d"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803862765.png","f7e2165483ca1f224fc47019c9d85839"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803865723.png","3da7b08b88d8795e53d03a47e1926277"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803871404.png","9601e1216b6e8246b7f1b1887108f8ab"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/1665803883747.png","9601e1216b6e8246b7f1b1887108f8ab"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image001.gif","ba898c600ecfdb213d2223a0f783c808"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image002-1665803844893.gif","fb05fad8f7ca3e4d9e40000a9ab1dc09"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image002-1665803856973.gif","e1a4cd1747beecc7d92124979531824c"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image002.gif","0c0f42f02d474126082016d250804bc4"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image003.gif","1f489bb3e02d4993cdd501f7ec773812"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image004-1665803844893.gif","560b736f1eb0faacf034adab49d2c620"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image004-1665803856973.gif","09cde39109369f9185d1cf128c6d7c2d"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image004.gif","32873c471ff1058abf9d6d09ca5e45f0"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image005.jpg","ea2dddfe9b1da4f406ee36b37c99e72e"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image006-1665803844893.gif","eaa063e3d871f7c40777c68c475fed91"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image006-1665803856973.gif","b0138096b0fc7682435ad07aeaf159ce"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image006-1665803982819.gif","6540947f9843ab822d3e8eeb7ef621e6"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image006.gif","6290aa2f8360b2a4f05e4c09e4d6bc80"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image008-1665803856973.gif","560b736f1eb0faacf034adab49d2c620"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image008.gif","113b77d852979982495a775ea4d973d1"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image008.jpg","aad87f9838e93808a0caed1ece93ffac"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image009.gif","fd6cf84a1333733613c80d5599c0fbdb"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image010.gif","eaa063e3d871f7c40777c68c475fed91"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image011.jpg","fa6d15386072d8a691d18f9c3a53b426"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image013.jpg","cea0cb9334e0d5f1b84beb2fcd8b1245"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image015.jpg","660345ebf2132d1bcdd9a7455529093a"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/clip_image017.jpg","29517d76c214adc17343771d2d804679"],["/2022/library/嵌入式/硬件/【硬件知识】vco压控振荡器/index.html","2aa483a91f1b292add1cd3f457ff79b8"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131552729.png","75acd9fc1668bbfebefd6ee208a0aa74"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131555323.png","75acd9fc1668bbfebefd6ee208a0aa74"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131686170.png","d69dc3e1daa1e8468206f55dbfb434c3"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131711842.png","50e82f1823ac8f06e3bf764ffe9560e4"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131737857.png","9bcc111c160798e1c00de21c318f71f8"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131783587.png","354d4fbf7b113c461f592f2248d4c29f"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/1670131825005.png","420cd24dc270086e8991011f908ffe29"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/index.html","a81a8582a46509cb69e888192dfffa41"],["/2022/library/嵌入式/硬件/【硬件知识】芯片熟悉/index.html","f61a61dd9f4ba8198b63882477371278"],["/2022/library/嵌入式/硬件/【硬件知识】选型/1665935986042.png","8770ec634a84589688edda3f78de1946"],["/2022/library/嵌入式/硬件/【硬件知识】选型/index.html","8ad6bae6edca8d22d48ba83d6afef543"],["/2022/library/嵌入式/积累/【嵌入式积累】阅读寄存器手册/index.html","2a1efbd86807205622001f690adaf6b3"],["/2022/library/嵌入式/算法/【控制算法】学习/index.html","de56a50f98bcfb9111cd8229dab7c36b"],["/2022/library/嵌入式/算法/【滤波算法】学习/index.html","6905075aa0715b425c6eb60d0df770e6"],["/2022/library/嵌入式/语言/【python】进阶总结/index.html","76981f874a31aefa4bd934a9da444a47"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】i2c通信（mpu6050）/index.html","b1f71592f6bf1432c3f9fe01030e5fd0"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】pwm波/index.html","601ce318dd726a9fb692dd5acbbbf268"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】spi通信（nrf24l01）/index.html","c0854f473fdff04b6e7f973d641e2f37"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】串口通信/index.html","f06e62d290d0a6846646ff4102a812db"],["/2022/library/嵌入式/软件/开发板上手/【V831】开发板上手/index.html","122887edff5521c73c9acace0d4ae93f"],["/2022/library/嵌入式/软件/开发板上手/【k210】开发板上手/index.html","9a19138f716fc91e12bd801f17d941fe"],["/2022/library/快捷键和常用指令/【cmd】常用指令/index.html","af2564cad2f42c7579dd93d518d25b47"],["/2022/library/快捷键和常用指令/【pip】【conda】常用指令/index.html","378c56c1c366900ab9edd313e3d0dcc8"],["/2022/library/快捷键和常用指令/【pycharm】快捷键/index.html","e2a780335afeac50fb17f52338b93af1"],["/2022/library/快捷键和常用指令/【win】快捷键/index.html","f2de98a8c22d44b3142f8d8ecd20603f"],["/2022/library/快捷键和常用指令/免费下载视频/index.html","9c08207da406bdb8cd767c1b4685a639"],["/2022/library/数学建模/数据处理/index.html","03d322256074277e5afeaa3bbfea5111"],["/2022/library/数学建模/线性规划和整数规划/index.html","d55e53760fca372502692816caf484d9"],["/2022/library/深度学习/【深度学习】基础知识：×NN都有些啥/index.html","899982192507ec225e67b81b5d043299"],["/2022/library/深度学习/代码/【numpy】语法基础/index.html","1e20d3d62014ffa0b5c0a8b0401a1866"],["/2022/library/深度学习/代码/【torch】语法基础/index.html","a58f8416a0d4a1b5efbc5e8b4b83004b"],["/2022/library/深度学习/工具/【深度学习工具】onnx学习/index.html","848d77b1681aa43aa117f7f52578a348"],["/2022/library/深度学习/工具/【深度学习工具】tensorboard学习/index.html","d2f88f7e8d64eae8a4e4e3f1da0b7d00"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/20190123102311588.png","ecd311bfb9d0bb3a4600fa915ca4724b"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/20190123102425330.png","185aa1eb346c06c79434abc5d219c69a"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/index.html","09e156675b1c802ebc9c88c2ee0a88ea"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/tt0.top-284371.gif","67646fb39542ace8ce2628bed493c979"],["/2022/library/经验积累/【经验积累】网址整理/index.html","32b55f2416a77fb0e35968bcb9f9044f"],["/2022/library/经验积累/【经验积累】论文搜集/index.html","5aa92a13168481c9626793b4f2716e2c"],["/2022/library/课内知识/【FPGA】仿真和烧录/index.html","01f2cecac4ffed0f76516c283f572f7f"],["/2022/library/课内知识/【matlab】学习/index.html","1a5b38760353652f17aa849534a850e0"],["/2022/library/课内知识/【verilog】学习/2305487-20210316195006605-973494686.png","c44b53656d81edac532917ae21e43a06"],["/2022/library/课内知识/【verilog】学习/index.html","e3361489527d10bd069d78d446ee0b8d"],["/2022/library/课内知识/【常用数学公式】总结/1670057171754.png","66c6f23ee349c4f1bb91a05ab6d984d8"],["/2022/library/课内知识/【常用数学公式】总结/index.html","d794f31fab7765fd2ba5e1036c392ee5"],["/2022/others/Write-blog-using-markdown/index.html","c58e37a21e012e18f18e43700a20de34"],["/2022/others/古诗/古诗/index.html","b1f4d9f432f3a7168715d0b8117a0556"],["/2022/others/能力年表/index.html","e803099685f3b87d9c5a04e7a7f22451"],["/2022/solved/github的github.io项目打不开/index.html","07280d2dfbe0fb766de8492d624251f2"],["/2022/solved/hexo部署报错spawn failed/index.html","d85a7ebeca0d20e7b9000a1583604b67"],["/2022/solved/modelsim的-novopt优化相关报错/index.html","2bb505971773641434e38964551f3251"],["/2022/solved/npm install 报错/1671205482714.png","dd319d6caeb7486e40c39f1507b3e6c5"],["/2022/solved/npm install 报错/1671205487909.png","dd319d6caeb7486e40c39f1507b3e6c5"],["/2022/solved/npm install 报错/index.html","f7d9dfd7eae5a13b8784fafdb3494ae4"],["/2022/solved/pycharm修改快捷键/1668304724550.png","22682fd6b614b99d048605ec3fc85099"],["/2022/solved/pycharm修改快捷键/index.html","b9c9c2c1bd20decb1d901cd1c9cd9c61"],["/2022/solved/pycharm内无法打开cmd/index.html","fe4e5c6a246944728d8e08ca77cc358b"],["/2022/solved/从regedit改变键盘映射关系/1669721677084.png","72ee8a7f108bd0244aa4145769b003b7"],["/2022/solved/从regedit改变键盘映射关系/1669721822415.png","e6d19538db0e0dcefcbb0e2bef43dc88"],["/2022/solved/从regedit改变键盘映射关系/index.html","19a9138c9f0d753c81183472d2a18838"],["/2022/solved/右键新建菜单管理/index.html","5e106bdabd496f7e6ae491badf82aff5"],["/2022/solved/执行make menuconfig时报错/index.html","4e510544ed55d2f9d5fed6fd28e09bd5"],["/2022/solved/报错binsh 1 bc not found/index.html","27048212b9cbcd44f7871f96a685d3e2"],["/2022/solved/报错binsh 1 cc not found/index.html","5f41c0f7de5c4cba259b84d2c1922011"],["/2022/solved/报错binsh python not found/index.html","fb810a9b3a7fad8aa07d92c2e483b848"],["/2022/solved/未整理/index.html","56d2cfd35f72abf8ca230e538110fa50"],["/2022/solved/树莓派域名解析暂时失败/index.html","7e624633e37db45d745d10fca618d111"],["/2022/solved/树莓派配置python环境/index.html","ad1e510cea13be3f15d9ca637702bbd8"],["/2022/solved/网盘挂载Alist+RaiDrive/index.html","a4312d0ac7d548cf8d6e1276600d733b"],["/2022/solved/设置软件开机自启动/index.html","e4b54043b6db072e15fa4815d21b69a0"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118074452-1667297751590.png","221e63aa60efa77dca50740ce9b88380"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118074452.png","221e63aa60efa77dca50740ce9b88380"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118457009-1667297751590.png","5c1577c940dd443631045f45787e487d"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118457009.png","5c1577c940dd443631045f45787e487d"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667226872521-1667297751588.png","ec7a6051752cb193ae983fb81d135fce"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667226872521.png","ec7a6051752cb193ae983fb81d135fce"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667264387582-1667297751590.png","57b13f83c9dfd506e6ccb81743f74963"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667264387582.png","57b13f83c9dfd506e6ccb81743f74963"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667265226170-1667297751590.png","600b87f6ea78e46e19929200a8190875"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667265226170.png","600b87f6ea78e46e19929200a8190875"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667292838757-1667297751590.png","f9c6a5975d54d8b975e9de23dc891c00"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667292838757.png","f9c6a5975d54d8b975e9de23dc891c00"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667293450480-1667297751590.png","57c9efd9a2a4ae995517991ff7abdf32"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667293450480.png","57c9efd9a2a4ae995517991ff7abdf32"],["/2022/work/nerf/【nerf】Block-NeRF笔记/index.html","5317f610c2d84a68c2f3be8334a12ffe"],["/2022/work/nerf/【nerf】Point-NeRF笔记/0b4e1994da04413a8866105b4989f8b8.png","d0f1d27bb090bf3c33540b180698c41b"],["/2022/work/nerf/【nerf】Point-NeRF笔记/1658128325205.png","b048922781d5aba77d19ef20b404d40e"],["/2022/work/nerf/【nerf】Point-NeRF笔记/1658194855269.png","62b433413622e8f3869c3169e910ba72"],["/2022/work/nerf/【nerf】Point-NeRF笔记/226855a91dd34416a673c90889d9125c.png","cd3eb2acd1e6bf054bb4721eaaf6b0b1"],["/2022/work/nerf/【nerf】Point-NeRF笔记/3dcafd31179c4dd8a339eb27f08c2848.png","31e48f38ffc4301d2e9d828a1567c8ed"],["/2022/work/nerf/【nerf】Point-NeRF笔记/41f23bb937554eef9bc59be5e35edece.png","9f12b05323f80cab2c38a24bf1ec0ebd"],["/2022/work/nerf/【nerf】Point-NeRF笔记/46ccd8a5c7fb4d90b4fea699c8abad94.png","16ccbcc52586bcfa171a952775f174f7"],["/2022/work/nerf/【nerf】Point-NeRF笔记/47ec1ea670d34d728fa6d1920fa98b75.png","60dc2887bf395ab3c1e763da69a51a9a"],["/2022/work/nerf/【nerf】Point-NeRF笔记/4c08bf3e7c3e4e7cb892f82bf872bb4b.png","c262265d65df56fc78299615ef65f9d6"],["/2022/work/nerf/【nerf】Point-NeRF笔记/5c3babb1708240a88a300e628a460368.png","5d5f7a85463d02f9efaf8283ab440c4b"],["/2022/work/nerf/【nerf】Point-NeRF笔记/b62693bf6f524fdb945fc84cfdfd8003.png","1b47f19451e1bcecaf0e885057cbcd3c"],["/2022/work/nerf/【nerf】Point-NeRF笔记/beb43ab7eedb4ce9b744cc7ca46b9448.png","a556c57e731513afccaf55e13b119380"],["/2022/work/nerf/【nerf】Point-NeRF笔记/c6e8f9d76fae4b99958d395917458a66.png","325197e008d25fd21c1e67ebe2be226a"],["/2022/work/nerf/【nerf】Point-NeRF笔记/d39620fc168844918a7c2942bcaede4a.png","81b19e32b4b1748602e143d22c4817be"],["/2022/work/nerf/【nerf】Point-NeRF笔记/f4e73e69a8714652a345e08ece53b59b.png","835da5f34875484dac1b71e245cbfdc5"],["/2022/work/nerf/【nerf】Point-NeRF笔记/gif-1667309947220.gif","a8cd0a12f9acde3c1620d3eaf31b3919"],["/2022/work/nerf/【nerf】Point-NeRF笔记/gif-1667309947223.gif","95fb73ac89ac6c3d84d5e4caf34ee3bb"],["/2022/work/nerf/【nerf】Point-NeRF笔记/gif-1667310098644.gif","a8cd0a12f9acde3c1620d3eaf31b3919"],["/2022/work/nerf/【nerf】Point-NeRF笔记/gif-1667310098652.gif","95fb73ac89ac6c3d84d5e4caf34ee3bb"],["/2022/work/nerf/【nerf】Point-NeRF笔记/gif.gif","7f3733e9b830cc67f2c6388dcb2205af"],["/2022/work/nerf/【nerf】Point-NeRF笔记/index.html","7a532394003a30c206ca34280bcd3915"],["/2022/work/nerf/【nerf】nerf-pytorch/index.html","7cb5930fe51eb3213b72d45b03f89562"],["/2022/work/nerf/【nerf】汇总笔记/1664429458270.png","825aa4007beb45aeb378d542825b6806"],["/2022/work/nerf/【nerf】汇总笔记/3c7ca874aed3436b88ba51edf0749e61.png","1611172fd9c3e23f3a139d965af1d67e"],["/2022/work/nerf/【nerf】汇总笔记/index.html","3cff090361f2b17b7a1c0705df3172de"],["/2022/work/nerf/【nerf】记录/index.html","314888de3763fbdb1d412503cc73332e"],["/2022/work/前端/【前端】记录/index.html","82cbfb1ac043157b926bad77fbfba64c"],["/2022/work/嵌入式项目/bard/【bard】Linux迷你电脑/index.html","ffa5bb58851b9fa4791b1074949e5058"],["/2022/work/嵌入式项目/bard/【bard】Linux迷你电脑/v2-5443f85fbc97f22e41c10a20a9760742_1440w.jpg","b67e2f438efd9fd26b4d935fabaafcaf"],["/2022/work/嵌入式项目/bard/【bard】记录/index.html","4e45180c16088372fd199c837dca4089"],["/2022/work/嵌入式项目/【祖传板子】记录/index.html","537e2bd36a799dbf0e8a42bfe0da2973"],["/2022/work/嵌入式项目/【航模】记录/index.html","a55d95f3def01e406019c9438eb8124c"],["/2022/work/忆阻器/【忆阻器】记录/index.html","fba412c04fefde0fd5478ee55ff0b69c"],["/2022/一下都是0/index.html","c48058a193b074829f122539dd524e86"],["/2023/library/嵌入式/模块/【模块】amg8833/index.html","777faa9ed665d2e424ef912c47eed374"],["/2023/library/嵌入式/模块/【模块】as5600/index.html","b24dd4b76ba3d706c3ac493dab52e35f"],["/2023/library/嵌入式/模块/【模块】数码管/index.html","077d01335017ab712c12b6e9a57bea87"],["/2023/library/嵌入式/模块/【模块】超声波测距/index.html","ca72bcd72285240faf1267f90ab37395"],["/2023/library/嵌入式/积累/【嵌入式积累】控制入门/index.html","1f10e87def153489292087d36492afba"],["/2023/solved/chatgpt您所在的地区无法访问/index.html","91fa28b318178ad8d29e18fcfa162e82"],["/2023/work/chatgpt微信机器人/index.html","ac7bcfa88cb7bc6f28ddbd64e0f91613"],["/2023/work/忆阻器/【忆阻器】算法部分/index.html","5badcca3e3cbc55f6f88515903ca2341"],["/about/index.html","5ad632b19f0490ec2c8e74d5d340de08"],["/archives/2022/09/index.html","a6f18153eff93f5bb092182ce63c2631"],["/archives/2022/09/page/2/index.html","70d73fbbc8d6abc2b972f49a69512c40"],["/archives/2022/10/index.html","06778acedb65da4e874d85125a7c4c69"],["/archives/2022/10/page/2/index.html","84ce579c1443244ff5d5f3e1ba2655e9"],["/archives/2022/11/index.html","067adab51bed7c478b7b376f1a13d410"],["/archives/2022/11/page/2/index.html","cbc8fa6e89d1d596bf12ca34ce234b59"],["/archives/2022/12/index.html","d061fe435883353e867b566e2ca0a641"],["/archives/2022/12/page/2/index.html","b8e77b4294fa0e4e5f6cb61c782ca9ad"],["/archives/2022/12/page/3/index.html","ad8fbdcdc3f1aa14751e5addb9112ce6"],["/archives/2022/12/page/4/index.html","30e71e70f1fb75374c8dcd321d725769"],["/archives/2022/index.html","fcb9296d2e766d309f068dc7c097fa1a"],["/archives/2022/page/2/index.html","2d828dbaedb4e948c7f888c9b4acb77b"],["/archives/2022/page/3/index.html","bf36d431211bb8d937686d2562199198"],["/archives/2022/page/4/index.html","dd2852e7fe66262c1465217becb08a9a"],["/archives/2022/page/5/index.html","98627d0d1afd8ae8927a5168307953b1"],["/archives/2022/page/6/index.html","4ce68f9c46f1f2e9c2b6eb28dc75f3e6"],["/archives/2022/page/7/index.html","d6fb53197f73b7ea1265364743143d00"],["/archives/2022/page/8/index.html","6018bbf6fc604a40e3dcf72b09ac086a"],["/archives/2022/page/9/index.html","3984a73c5452a4c19bb872ccac98cfa5"],["/archives/2023/01/index.html","ea14963f767fb369c3c04473bd5297af"],["/archives/2023/index.html","641d0c7a993daf1bea0195e57bdac661"],["/archives/index.html","0a9445ebd6abe7320bb888a68a6ef8df"],["/archives/page/10/index.html","226a64ff8ca2c2e40cc7494cc3229514"],["/archives/page/2/index.html","64ba01b2a770ded0eb3ef14cba666cb7"],["/archives/page/3/index.html","4f524620e7005efe6afd856e27b78820"],["/archives/page/4/index.html","ad9985c73ff4bcd41d96ad855c055cfa"],["/archives/page/5/index.html","31aed25be1755fdd361bb517e2b60285"],["/archives/page/6/index.html","f314086b56df406d806cc6885c0d106e"],["/archives/page/7/index.html","cd585237d92d89de9af30a3c9e101fa1"],["/archives/page/8/index.html","58a8d93d56cf96347d3b3563dc1deafa"],["/archives/page/9/index.html","da80551312da5c02800623f6e9a0bd2d"],["/baidu_verify_code-ZFSCabM1PJ.html","cb8ed884566581868e23a82cf0613fe3"],["/css/main.css","b1fe01560f40b7645a09dcbaff75950c"],["/css/spoiler.css","eb373af0627ede298867ffc0045da62e"],["/google41a28d5f2878fa02.html","22b81bf77bfb91e9b39397d73576c974"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/tou.png","578463708d7de56a1c4e6331831b3e2e"],["/index.html","e7849204f80146cfceffd3d03555599f"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/code-unfold.js","e079f1fdb88a9edcd745220494218e88"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","97606f901b6e488587ad5c49aa367604"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mylibrary/css/float.css","6fcae0420836bf4e82c0bb66c732e859"],["/mylibrary/css/hide.css","93db40b26e7a8f1410247b42462920ee"],["/mylibrary/css/load.css","c408939776a14fb9f0ee7151f2577de1"],["/mylibrary/css/neon.css","615f7a88596e6869f9736e062425ba13"],["/mylibrary/css/round.css","e3e7832bcaabee12ad06276c68e9000f"],["/mylibrary/css/shake.css","757f386c9743b85799506499a4ad4e94"],["/mylibrary/css/shiny.css","0a62dd8ad2181e1b57b794d44bede3a1"],["/mylibrary/index.html","d386b774526f2fc29519ea3258edc19b"],["/mypage/css/style.css","f7bc446f3eacc58a971e328a7f51375d"],["/mypage/font/LigatureSymbols-2.05.eot","5b46f67c079e0599f89aae807cdad560"],["/mypage/font/LigatureSymbols-2.05.svg","f4be952f02a00bd7b464568304b12842"],["/mypage/font/LigatureSymbols-2.05.ttf","48ae0b91a8d6e1feb2c15961a338dad8"],["/mypage/font/LigatureSymbols-2.05.woff","f974884f441019724c351f85478b3938"],["/mypage/font/README.html","d954c0ae2068d75b2b2bf3cce70fbb36"],["/mypage/index.html","b0f4271436d0f717535418c2b3b4ef42"],["/page/10/index.html","47fa2c40b637b9ebe445ddad98afc10e"],["/page/2/index.html","62ecbc83191adecaa35c53824dd32bf1"],["/page/3/index.html","40ebb89beb821bad453f5553a150edbd"],["/page/4/index.html","ed740768a58239d48a09a22608ed5c08"],["/page/5/index.html","261b48c2a68a98edb30c2e52965b2a60"],["/page/6/index.html","929f910069a802dd6337f2fed8930c03"],["/page/7/index.html","0398b59d3793f57f70eaf5338ede9d31"],["/page/8/index.html","ae8480e38f8f7d9c3f3cdf5ad79d8ee9"],["/page/9/index.html","ebd44384b8a6377232a7b8605be6d98d"],["/sw-register.js","d0fe2247b21576bb3831829531965651"],["/tags/Block-NeRF/index.html","7b188d4a1ef33839c18c118fd06e1f38"],["/tags/FPGA/index.html","2528e9634a68da0d0b3b240774989f4d"],["/tags/HAL库/index.html","e172af89e21547b1c5cb1ba4fb207c56"],["/tags/H桥/index.html","8c82f2c3cafbed95468146cd3508bdc4"],["/tags/OLED/index.html","175d737bab7c1e36cfabb877e01b7a37"],["/tags/Point-NeRF/index.html","dcb3704eb678fe23d1775ad1243d5ac6"],["/tags/V831/index.html","09df0a25b2afe41969b2ce749d1bfdfe"],["/tags/amg8833/index.html","1e8447c1afa107307d28ffd4461904eb"],["/tags/bard/index.html","65158eb8b9a57c9a7661854e4c978232"],["/tags/chatgpt/index.html","b17e03cb01195b6fd00444f2df1be872"],["/tags/cmd/index.html","997f6717055b273120df22bb44d31222"],["/tags/conda/index.html","d13a3fa35483ed05f8be3c5504a1f91a"],["/tags/css/index.html","d888bf43742d7c822764218f61dede6d"],["/tags/git/index.html","69dbde9267c1e325120171773e38bbb1"],["/tags/github/index.html","e88bb778620c687f41df25779c52bfda"],["/tags/hexo/index.html","6eb9fcc295a5ce6cb83ccfbcb17bc0bd"],["/tags/i2c/index.html","b654e6352e23a85aa2b8079320a650f8"],["/tags/index.html","5748287a245379aa039a48379281fca8"],["/tags/inte/index.html","25b3a3e6a65b10217918e8173dc20c90"],["/tags/k210/index.html","eb3301c8765c768ef03a463e84776df3"],["/tags/latex/index.html","37dbebd556a8908c854fc6cac98f6c1a"],["/tags/learning/index.html","fd981198e3778ca7e0f0e0734493675f"],["/tags/library/index.html","a4ef771612df7587ec67b6bc31d6bdfa"],["/tags/library/page/2/index.html","18d319429b6f8d5c2373814d4caa71b9"],["/tags/library/page/3/index.html","f698712750d4f5982250212578a63fb9"],["/tags/library/page/4/index.html","8759e5545f5eac622eba9413640c1d12"],["/tags/library/page/5/index.html","070066ba849ed9c709801afc98841f35"],["/tags/like/index.html","290c59cee281552995a854ab6ecc43b2"],["/tags/linux/index.html","3a046ed9be5af5e28f4cbc0b3d46bd70"],["/tags/make/index.html","fd8626e3ef5e4349d7c0dbee4cf1fd97"],["/tags/matlab/index.html","6173fa7003ec38182d7b526993ea1592"],["/tags/modelsim/index.html","457b2739046c76f4da2a6270ecef78c9"],["/tags/nerf/index.html","04c94d8bde9cf9c2387061a9899a6efb"],["/tags/nrf24l01/index.html","7199a92a1dcd1d53933a0be372bafd57"],["/tags/nuitka/index.html","444d4e58200735ee86ecb1f495cecb59"],["/tags/numpy/index.html","32cdebd73174dfa92d3e05a20eb756ac"],["/tags/onnx/index.html","15dc555453ac415c9acecbe8691203ce"],["/tags/pcb/index.html","df59dab096ae1658851b075d1e11fd7f"],["/tags/pip/index.html","32a237c5017955c21805cb48bfae2593"],["/tags/psutil/index.html","de9882395bbde4e5ab33aae4f74e1b89"],["/tags/pybluez/index.html","cc78fbf405fd66cb89fa7e90e7eeb9b4"],["/tags/pycharm/index.html","8fcf179e2a676084f88de1a6138666c0"],["/tags/pyinstaller/index.html","c4c40c8f7457b9c6a57de20d7e5315ef"],["/tags/pyqt/index.html","5b3f701a8b789356b6d40b79eb9f019e"],["/tags/python/index.html","50070a8efb4d094d0933d5a054a9b7d1"],["/tags/regedit/index.html","3fb3db80a15f3284bf13a9fc12df3cea"],["/tags/solved/index.html","db255b9c6efaa65d7b4e0039f9127709"],["/tags/solved/page/2/index.html","ece27eada041dd2753063d7ccdb5bbfa"],["/tags/spi通信/index.html","9babd1b0244b45dc5237c1425c3512d2"],["/tags/stm/index.html","ca8310ade17194c2aaed1f6f60c67546"],["/tags/stm32cubemx/index.html","41175d808c48395c72cdc840b38b0d6c"],["/tags/tensorboard/index.html","af5ba4c1d85960192f433cce53b0df59"],["/tags/torch/index.html","86a21f39027afe85b1f191f8b71ae16c"],["/tags/typora/index.html","41b4deb805b999d71641b93d7f019f24"],["/tags/ubuntu/index.html","f885076987b3e73943b2a3cfcb5a10dc"],["/tags/vco/index.html","0ac092609c5acaa1a0ecc277530b0990"],["/tags/verilog/index.html","ba8634f94a63ae911e308990089cc92c"],["/tags/win32gui/index.html","334016ef8a70b2691768d1dc27b2961e"],["/tags/windows/index.html","47425508ea848ced5945533c459d35b8"],["/tags/work/index.html","fa30de550c6a4ac93bddda7c560b4139"],["/tags/work/page/2/index.html","42f924f979edda925de5601ed89921f3"],["/tags/下载视频/index.html","a62eabcf9763ed78114c54f5d0cbf147"],["/tags/代码/index.html","b67170fac384e49564b0b20a4f57dd4c"],["/tags/全志F1C200s/index.html","e78f6788f370f3d37b7d1b305569e3a0"],["/tags/公式/index.html","ec7838cc40bf7d46ff86609b6d7434d7"],["/tags/前端/index.html","1c560c64f4968743116f3004205c4547"],["/tags/博客/index.html","e3486cd10553c776e5e69288958f813e"],["/tags/压控振荡器/index.html","33993183d8512b6237d5ad09ab2b3550"],["/tags/寄存器/index.html","bc8a897e5f50e646786172f52f5f60c1"],["/tags/嵌入式/index.html","8c47dbeafc44ef0cd051e9d8d0fbe2e3"],["/tags/嵌入式/page/2/index.html","b4570f467348863fe0b83b9b1187ef54"],["/tags/嵌入式/page/3/index.html","ddf36f3a858d0f00cda3cfd47a7201c8"],["/tags/嵌入式积累/index.html","84975c6166e448bd670b1738c0be4a6a"],["/tags/开关电源/index.html","e9dc5155d9f31afc6f88c551684c7ecb"],["/tags/开发板/index.html","407eb5ea4705eae234d444c5bac516e5"],["/tags/忆阻器/index.html","810810a44cdedbe5be2b20fa41c87fdf"],["/tags/快捷键和常用指令/index.html","72007d0be0c1fcea7a45d96d50780d98"],["/tags/打包/index.html","aed83b4f5d64637d47dbe8a683a28da0"],["/tags/控制/index.html","822c4010a0dd012df0dfe0908f2ded94"],["/tags/数学建模/index.html","38e2aaf41c0e817574eaaff95d7f7b31"],["/tags/数据处理/index.html","a22291c695d4ab45be074398a60508ea"],["/tags/数码管/index.html","f63e702995ddbf56996f71ed953d27b3"],["/tags/整数规划/index.html","6bd29f1be1b434e5aebeeca3d6a5248c"],["/tags/树莓派/index.html","28f9b48acda4d8eee913c51147942416"],["/tags/模块/index.html","69e9540315f302e49190fb3b4323e9e7"],["/tags/测距/index.html","c1361288a7cfdbcec1dea680b19bdd87"],["/tags/深度学习/index.html","6e4d28498ff9ce0b8bfe6bafd9b17929"],["/tags/深度学习工具/index.html","6d1915dd4a01a5cb6d275436585490c6"],["/tags/滤波/index.html","1bfb6fc20f0de6c4a3f109f62aab26da"],["/tags/理工方向/index.html","3e0368b0973262306ca5ffe4e2c91ba8"],["/tags/硬件/index.html","a8083c0f12d22feaaff64aafa0956d6d"],["/tags/硬件知识/index.html","6d88a5f448371eb2fab60818d8f6efc9"],["/tags/积累/index.html","34a3ead063e041c29c3ca48a548af6f1"],["/tags/算法/index.html","7460ad9d9392ff1f743612a76213d2cc"],["/tags/线性规划/index.html","4758edcc996fbe2752b94cc847cbbf2f"],["/tags/经验积累/index.html","61d96d2d9856f895dbe02e611526ab2c"],["/tags/编码器/index.html","a4695b7f8c1be6ad9d47bfee5aefaa43"],["/tags/网址整理/index.html","8ec280b77289488fa8a957d61ed779bc"],["/tags/网盘/index.html","368cc54ab7afceb09f9865f92e746c00"],["/tags/航模/index.html","9f07666dd54047bcc18c87a143462d4f"],["/tags/芯片/index.html","863e185abb37802ddc169c6d58d541b6"],["/tags/蓝牙/index.html","42dc7cca615802c581a2091f8fc6d69f"],["/tags/论文搜集/index.html","59cfda01bfe6cf6128b5698fdcf50abb"],["/tags/语言/index.html","8ae3005d840c62eed5a3b501fa326f1e"],["/tags/课内知识/index.html","c4d003c9ee1d358a8f693ad11e188b1c"],["/tags/贝叶斯/index.html","b79489f95f9535a10b8a44651be3d374"],["/tags/超声波/index.html","5dd3a557633fc70cb911afae2a8db611"],["/tags/软件/index.html","151159b38dfe71a519f05e9c5494dcb8"],["/tags/选型/index.html","0a37d76ea8393269f9160a703a85643c"],["/tags/通信/index.html","2374c9359f49505f30351db85e377e89"],["/tags/钢琴/index.html","ab6ae811aafd98caeeaa55a717e368b7"],["/tags/键盘/index.html","61bf2f9efee539f0b01d52cf4fa90dae"],["/tags/陀螺仪/index.html","0cc7714ff8c46ebf69e0e4bc6890bdff"],["/tear/index.html","0b08c5ca69ad904e4c2cd79287e0a0bc"],["/tear/index1.html","eec1e5c114911e4b8813f274d97b27cd"]];
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
