/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/learning/开关电源/【开关电源】学习1——buck/1663506637120.png","8e50e1a9a14c0174f21513f95808f075"],["/2022/learning/开关电源/【开关电源】学习1——buck/index.html","d7e10b7c67a2c5ff10ad3550889d490b"],["/2022/learning/开关电源/【开关电源】学习2——boost/index.html","87808a94ee264edd8b1de5d9cd44f157"],["/2022/learning/开关电源/【开关电源】学习3——VMC反馈/index.html","c6b8ad481025c20332c197bb2a166d30"],["/2022/learning/开关电源/【开关电源】学习3——buck-boost/index.html","49880c0d3bbaf8077316434a77aa51b5"],["/2022/learning/开关电源/【开关电源】进阶1——稳定性判断/index.html","2b728729b46d036ad3e69dc1c6a2b3fd"],["/2022/learning/开关电源/【开关电源】选型和使用/index.html","dc78d0fc7239415219a1829ea2443c0d"],["/2022/library/frontend/【hexo】博客部署/index.html","5dcd0836151d7e261cfc7f4b0f17381e"],["/2022/library/frontend/【markdown】编写文档/index.html","c1439a31d15657c7c4323cf9056bdab8"],["/2022/library/frontend/【vue】搭建网页/index.html","37e5529d49cfad9ceac9706b85597a5d"],["/2022/library/inte/【css】学习/index.html","5dbdc33766c0237157b55bf2b9088b19"],["/2022/library/inte/【钢琴】织体类型/index.html","d24bc414afd90efd4db092a07d91f7d5"],["/2022/library/python/【nuitka】打包python为exe/index.html","64999509c6060cbcc426affa665386c7"],["/2022/library/python/【psutil】检测电脑网速等/index.html","2f19f770fe027079b34f3eb5dc880f75"],["/2022/library/python/【pybluez】python控制PC蓝牙/index.html","ddf1afff2b3ecd786c1d17334bf6e396"],["/2022/library/python/【pyinstaller】打包python为exe/index.html","431b2d917d5a6f640f3e2d7096d74251"],["/2022/library/python/【pyqt】编写可视化界面/index.html","b5b954206e9218b5a48663a9334c4f0e"],["/2022/library/python/【win32gui】控制win系统/index.html","b185672be2a1b1db75fba22b77448cce"],["/2022/library/嵌入式/【git】学习/index.html","ffde341d6f5e17e52df8a95ea7fba816"],["/2022/library/嵌入式/【linux】常用指令/index.html","f8ea63a293fba40038a8115ddbe8baad"],["/2022/library/嵌入式/模块/【模块】OLED/index.html","2b69cef26e57fadd633d06c8cfe232db"],["/2022/library/嵌入式/模块/【模块】陀螺仪/index.html","dcd754f681f9a8848a35700c9506c9dd"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/index.html","c27fee7b22dd42d8b9647223f9d71f06"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/index.html","d03bc815a095ab254a150344a5c88116"],["/2022/library/嵌入式/硬件/【硬件知识】芯片熟悉/index.html","bfaaa129036e348b2a0ef233e9d9b9fd"],["/2022/library/嵌入式/硬件/【硬件知识】选型/index.html","c16887cd5750fe381ea8a94dd9602b49"],["/2022/library/嵌入式/积累/【嵌入式积累】阅读寄存器手册/index.html","6c85f1f5182f930b18549c434c82cde9"],["/2022/library/嵌入式/算法/【控制算法】学习/index.html","6e74b2f88bbab41b9ed3818a4e7a515d"],["/2022/library/嵌入式/算法/【滤波算法】学习/index.html","99bca503a03adccb8c045753d68fa052"],["/2022/library/嵌入式/语言/【python】进阶总结/index.html","dc939b15c5a2eefbbb9825dadb9c43d4"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】i2c通信（mpu6050）/index.html","030c0067a044fd593f7ef50d2cb56acb"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】pwm波/index.html","daac8e62680872fe493db2e85565e9f2"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】spi通信（nrf24l01）/index.html","15f0e34e1fc49848bc1aff3e874e6744"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】串口通信/index.html","3dcfcdef26e0f4c5c62c69c6eacf3a65"],["/2022/library/嵌入式/软件/开发板上手/【V831】开发板上手/index.html","747f8fc24c414f1bc4d7fa95676401d8"],["/2022/library/嵌入式/软件/开发板上手/【k210】开发板上手/index.html","fafb9d57ad102ff6766d234ccde87331"],["/2022/library/快捷键和常用指令/【cmd】常用指令/index.html","ac2e37de0bd4d38c858ba507237896f0"],["/2022/library/快捷键和常用指令/【pip】【conda】常用指令/index.html","ad7c4f5afde848fe0555dc6c568c684a"],["/2022/library/快捷键和常用指令/【pycharm】快捷键/index.html","27f47d49b875b4d0c149d61d0b652d07"],["/2022/library/快捷键和常用指令/【win】快捷键/index.html","c78eafc479adeef104dfb90a7af6c3a7"],["/2022/library/快捷键和常用指令/免费下载视频/index.html","3454c7f0a7edd353f02768398709ad44"],["/2022/library/数学建模/数据处理/index.html","c5bb99c7606830d913559e32aeed7e0a"],["/2022/library/数学建模/线性规划和整数规划/index.html","77170ebc9c18314487682e866282b537"],["/2022/library/深度学习/【深度学习】基础知识：×NN都有些啥/index.html","3a43b3c088d4e73bf33a2b11f80c44dc"],["/2022/library/深度学习/代码/【numpy】语法基础/index.html","e41b37241e816ecdfb8d95016fb95e5d"],["/2022/library/深度学习/代码/【torch】语法基础/index.html","47075c956652348f997ab3a493e9c4d2"],["/2022/library/深度学习/工具/【深度学习工具】onnx学习/index.html","14ff36ed3ea11c6a6e95438a1d996b9a"],["/2022/library/深度学习/工具/【深度学习工具】tensorboard学习/index.html","ed5429b0eb901d7ef82b80fd08f09244"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/index.html","356d7cd8d1bbd008ed08c3dc102f8740"],["/2022/library/经验积累/【经验积累】网址整理/index.html","0900ba07f6467bf55649ec80ef1988f0"],["/2022/library/经验积累/【经验积累】论文搜集/index.html","4aa412516802a6d2d3fc5608571b095b"],["/2022/library/课内知识/【FPGA】仿真和烧录/index.html","21758c8b34f025dbc8ce13082039e59f"],["/2022/library/课内知识/【matlab】学习/index.html","f081daa397c1676df483b2e63bb2696f"],["/2022/library/课内知识/【verilog】学习/index.html","75aef5890c1d20d2c855df6ed5d7c677"],["/2022/library/课内知识/【常用数学公式】总结/index.html","9c43ae091a88080983d599a5efcc45c3"],["/2022/others/Write-blog-using-markdown/index.html","8ec251d4cc549949d7ea4a61aea67b83"],["/2022/others/古诗/古诗/index.html","dd57c5a4f61cfed73210084e874e19f8"],["/2022/others/能力年表/index.html","bffe4087a80b623fe5cbfea63bb730b1"],["/2022/solved/github的github.io项目打不开/index.html","f67079cac899d25fbb3a8beb249143a0"],["/2022/solved/hexo部署报错spawn failed/index.html","df7437ba2c153b3793789559dbf8270e"],["/2022/solved/modelsim的-novopt优化相关报错/index.html","2b38b125381cb1677e938ffb25a5c4c3"],["/2022/solved/npm install 报错/index.html","292eee53bed433d14b3c779136ec0346"],["/2022/solved/pycharm修改快捷键/index.html","5c7780907584e6e6f21266822de7df5f"],["/2022/solved/pycharm内无法打开cmd/index.html","bf595e24c053efdc7dc3f58806f24d40"],["/2022/solved/从regedit改变键盘映射关系/index.html","faa3b1c5db93c161fc4de31461c0174f"],["/2022/solved/右键新建菜单管理/index.html","2598621b2a72c068bac14c9b70c357e0"],["/2022/solved/执行make menuconfig时报错/index.html","a541b7a7aa73076b86904a3c0998c25c"],["/2022/solved/报错binsh 1 bc not found/index.html","8cc65a331bed9589a1433791c1c3657c"],["/2022/solved/报错binsh 1 cc not found/index.html","b169524233b9758f9b4a4d90641a41bf"],["/2022/solved/报错binsh python not found/index.html","1e105667bcfe6b6367b8f6f7e99faec2"],["/2022/solved/未整理/index.html","01130cb44ab4a82c440884a6cf908ffc"],["/2022/solved/树莓派域名解析暂时失败/index.html","152ce72c89c6acd471def1de8bef6654"],["/2022/solved/树莓派配置python环境/index.html","00a1b41070d86af753df80fcc6e6d528"],["/2022/solved/网盘挂载Alist+RaiDrive/index.html","71bf9ef8e76aadd1180ab317199215c6"],["/2022/solved/设置软件开机自启动/index.html","f476345e484a071f3182525e353853cf"],["/2022/work/nerf/【nerf】Block-NeRF笔记/index.html","8811100c8562e99e5533f9eb658037ea"],["/2022/work/nerf/【nerf】Point-NeRF笔记/index.html","57899b91e5a7c5361908ee31da0df9f9"],["/2022/work/nerf/【nerf】nerf-pytorch/index.html","30abb8a722cedac75c15e79e22b16ac0"],["/2022/work/nerf/【nerf】汇总笔记/index.html","5ffdf38b10bc82f262c48373916729db"],["/2022/work/nerf/【nerf】记录/index.html","0a359939f497be0e81c23c25957aae49"],["/2022/work/前端/【前端】记录/index.html","1a0cb9e3a70727a5769ba242be561ba6"],["/2022/work/前端/【博客】记录/index.html","f706389d0d10e375755ccdaf7726b2ae"],["/2022/work/嵌入式项目/bard/【bard】Linux迷你电脑/index.html","d9c92d9d0f955c69eaf2fb92b275b2d5"],["/2022/work/嵌入式项目/【祖传板子】记录/index.html","6766d1ca0bd0298092a0257dc141dfc3"],["/2022/work/嵌入式项目/【航模】记录/index.html","787be849d4d0c681ade09050ab999b4a"],["/2022/work/忆阻器/【忆阻器】记录/index.html","1fd140f049eb3814117db17cccb4a6af"],["/2022/一下都是0/index.html","8aa9356b1a213032d22813fe3fd064e4"],["/2023/learning/开关电源/【开关电源】理解/1663634083260.png","7b1a889ee96c83e170023666681c9131"],["/2023/learning/开关电源/【开关电源】理解/index.html","b22ad8fc474e82416338f605120e435b"],["/2023/library/frontend/【app inventor】拖动滑块写手机app/index.html","da0167ce91733ee7a981c9e7aabae172"],["/2023/library/frontend/【auto.js】手机自动化控制/index.html","baeb21b30e3a12bea16ca5b8812129a1"],["/2023/library/inte/【latex】学习/index.html","7295f1f59de15de74377da11dcdd1790"],["/2023/library/python/【pyautogui】控制键鼠/index.html","05da1e0aa9a4e88388d00fa9505ec25b"],["/2023/library/python/【pyserial】读取串口/index.html","38eeb42e1d14f1c3326939825e067583"],["/2023/library/python/【python基础】操作文件/index.html","8532381cb49a4327d4d2214f4c533181"],["/2023/library/嵌入式/模块/【模块】amg8833/index.html","ce67f417d4f2c75a16638e9ffa2a9e49"],["/2023/library/嵌入式/模块/【模块】as5600/index.html","df5843e3fc6e7ad1b70cc461d8630c33"],["/2023/library/嵌入式/模块/【模块】数码管/index.html","8a748d8e9906e4e1fbc71a449b8b2766"],["/2023/library/嵌入式/模块/【模块】电容触摸按键/index.html","e11ff4ec5cf3612037ce158ffa5677d5"],["/2023/library/嵌入式/模块/【模块】蓝牙/index.html","008e3be031622da0fcf09ee2c2272561"],["/2023/library/嵌入式/模块/【模块】蜂鸣器/index.html","128b034cd08249b5539214b5880ff2ad"],["/2023/library/嵌入式/模块/【模块】超声波测距/index.html","fda26419bc8c5446aa154ee2f3680e5d"],["/2023/library/嵌入式/硬件/【硬件知识】三极管/index.html","38e08aa129b14bd6f69c1ea991060f56"],["/2023/library/嵌入式/积累/【嵌入式积累】常用官网/index.html","ba75aa5c38629feec6833ef26a063d4b"],["/2023/library/嵌入式/积累/【嵌入式积累】控制入门/index.html","b99559db66feb785a61abb782fc399b2"],["/2023/library/嵌入式/软件/【HAL库】笔记/【HAL库】ADC采样/index.html","8766338ea0884f4ef1e6b23636902d9c"],["/2023/library/嵌入式/软件/【HAL库】笔记/【HAL库】USB/index.html","4a2445ba785d82a7c1cf65655be87826"],["/2023/solved/chatgpt您所在的地区无法访问/index.html","873b3d0eb619338a00bd5f05047cbf0b"],["/2023/work/chatgpt微信机器人/index.html","315eab61fe7bc1f948ec633e2722ae1f"],["/2023/work/mine/电脑外接摇杆/index.html","a35bfb1605ce051a19e28cf2ba7e5d21"],["/2023/work/mine/网速显示助手/index.html","aaf29864075c4750e2f0a9a048335bef"],["/2023/work/mine/蓝牙调试助手/index.html","bd7a39be7df89e3dadb450644ed96f28"],["/2023/work/忆阻器/【忆阻器】算法部分/index.html","a3b8a4859cd0cde471a56c62f295b7de"],["/about/index.html","afa7a85a86d5abab5dad0d9c2c394e68"],["/archives/2022/09/index.html","cb694c93d383611abf0e67a0bfb63e43"],["/archives/2022/09/page/2/index.html","57e4a2921831cc25f2969d00c51f3438"],["/archives/2022/10/index.html","4c580ced0d47e85e29593e0ba46977f5"],["/archives/2022/10/page/2/index.html","35aa23ce67284aa51e530d25b7707765"],["/archives/2022/11/index.html","2837382dbe09f1a094945b48256309bb"],["/archives/2022/11/page/2/index.html","6fa68c8364aa7cac7fc7af8a5609c2f7"],["/archives/2022/12/index.html","edbcb8639347bac2ee2ea3f83f0918e6"],["/archives/2022/12/page/2/index.html","03c2af977cd6b6383e0d5c9128d59b1e"],["/archives/2022/12/page/3/index.html","64edf80d8c237e8b375a732b2636ca23"],["/archives/2022/12/page/4/index.html","0a91f23f2045594709fb449f74e1bd94"],["/archives/2022/index.html","24e8a5d95da1421dffa1b138f5d66552"],["/archives/2022/page/2/index.html","201219f9c9dfb770004af30171fc19bc"],["/archives/2022/page/3/index.html","f7a2706f64029b2199ae212104602168"],["/archives/2022/page/4/index.html","301136e65a149b2946e6959bb3f90b47"],["/archives/2022/page/5/index.html","45716c8bf5b71ecf7874999cce4a244c"],["/archives/2022/page/6/index.html","25924341e40925194e1ee7046e6bdf67"],["/archives/2022/page/7/index.html","165bffe478837db3edf66b50fba66a86"],["/archives/2022/page/8/index.html","1088b03439a8d8a42477e90fa1add9f5"],["/archives/2022/page/9/index.html","e082a2b3e28c597598b0dedc0881f114"],["/archives/2023/01/index.html","44a37338bf7871eeb8b37c38dc627942"],["/archives/2023/01/page/2/index.html","f46ca1919d3b7eee62b43b274eb8ad84"],["/archives/2023/01/page/3/index.html","8d8cc4f8eafa60ebb6742d98f1f53c7b"],["/archives/2023/index.html","a42aea0f802b848e1fc32a957672be25"],["/archives/2023/page/2/index.html","7d5c03c2b6f3204bc1d230afdf797798"],["/archives/2023/page/3/index.html","72fd0412d96caf4a3fdc73ead6542b9c"],["/archives/index.html","3c5068d44ad21f745c844133e672e35c"],["/archives/page/10/index.html","e37eed4d4997125547578e154429ea17"],["/archives/page/11/index.html","e7f61c7b22a87380ef84ec8d9142fa11"],["/archives/page/2/index.html","951ebaf2558477f9b2ad4a9d6df97b49"],["/archives/page/3/index.html","3f7d91fc3ef8bb8d8524bb7ad124e61e"],["/archives/page/4/index.html","9f98a90f37b851e1c57973121dfae9ce"],["/archives/page/5/index.html","49e35edf53a3103483bead5892898ea7"],["/archives/page/6/index.html","37ba46c15d07dd4cd1f762333f21be35"],["/archives/page/7/index.html","2b04147d4d3e089ca0e88519357b7f5d"],["/archives/page/8/index.html","312536359818c907bcd794a010060c55"],["/archives/page/9/index.html","1ae18bf34e966e3d9d188d47d4d706d4"],["/baidu_verify_code-ZFSCabM1PJ.html","b1f7a2538fd812e35a1f84a7e0485b11"],["/css/main.css","bcf93d9dab7428ee686b2b7f3cc68c84"],["/css/spoiler.css","eb373af0627ede298867ffc0045da62e"],["/google41a28d5f2878fa02.html","c22c0027a79d429b50e7facc564df0db"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/tou.png","578463708d7de56a1c4e6331831b3e2e"],["/index.html","4bc7132a7849ff6d741a0a5a8b8970a0"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/code-unfold.js","e079f1fdb88a9edcd745220494218e88"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","97606f901b6e488587ad5c49aa367604"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mylibrary/css/float.css","aa4b4c590fb67e7f0e6a088d2494df82"],["/mylibrary/css/hide.css","7a6161264e8391de4c3d1cb148b91a51"],["/mylibrary/css/load.css","a0957c42cbdefd9b101191b2c5bdc635"],["/mylibrary/css/neon.css","0c237ab1481e0387b483cdbcc25424a5"],["/mylibrary/css/round.css","48ceccc7c2c2dd168e0d1533ce3da840"],["/mylibrary/css/shake.css","ec4f0b196c784154941d01f9c972f815"],["/mylibrary/css/shiny.css","5627417b62392f8961c41e4e5fc22968"],["/mylibrary/index.html","82f0e8ab5db739c09159c30a459a5174"],["/mypage/css/style.css","6a049b910eae9c25f688146010ba73ac"],["/mypage/font/LigatureSymbols-2.05.eot","5b46f67c079e0599f89aae807cdad560"],["/mypage/font/LigatureSymbols-2.05.svg","f4be952f02a00bd7b464568304b12842"],["/mypage/font/LigatureSymbols-2.05.ttf","48ae0b91a8d6e1feb2c15961a338dad8"],["/mypage/font/LigatureSymbols-2.05.woff","f974884f441019724c351f85478b3938"],["/mypage/font/README.html","77a24498cdd4d56f44eac877b16af5d6"],["/mypage/index.html","91128c654ead31ad052adfe546ee1fb9"],["/page/10/index.html","f1c813fa5121c508c79dcd882ceac978"],["/page/11/index.html","c78e029c013986b55635db58680a2216"],["/page/2/index.html","dbd6b096210cb804def03d20b69e7605"],["/page/3/index.html","2bbe6dc4c624dc1d0d697fbc3e6c195e"],["/page/4/index.html","e61c6d4f7f0a16e2c1c76d05c6f14e04"],["/page/5/index.html","7e20de1ef9fa6a404a324a6d11058370"],["/page/6/index.html","0ed1f62b903df7c081b369b269dc45de"],["/page/7/index.html","18527c9a76ad960ada73873f8afa15c7"],["/page/8/index.html","3f3d173b79739e495c66faf64d8cfed3"],["/page/9/index.html","5ac118a58d99b653ee8510e7ccbda5d0"],["/sw-register.js","1b18d93bdaa5f4c4b63ebc9718ab775a"],["/tags/ADC采样/index.html","31bec79858142eee2701945175aa7994"],["/tags/Block-NeRF/index.html","31927a1d70fe6914c8e5912f05bcb5b3"],["/tags/FPGA/index.html","a195ed133f334d54256aaabd628824bb"],["/tags/HAL库/index.html","ff08c29ed2604d77b217fb08eebae961"],["/tags/H桥/index.html","eab53a6134fd789efdacc7425562c94b"],["/tags/OLED/index.html","0c22f69d704fe10bcd6554da14c16d0f"],["/tags/Point-NeRF/index.html","34919c3dda65ed9913d78dcac341dc65"],["/tags/USB/index.html","4808226112b3863205c5b19fe181edb5"],["/tags/V831/index.html","cdf80c9781449ee56a712a3d56f20faa"],["/tags/amg8833/index.html","ac6d9a58c554ad4f342d031ba75046fd"],["/tags/bard/index.html","a8c62aa6caebe70558d596b81dad59df"],["/tags/chatgpt/index.html","2175eddedd9dd00ef3ddcc3ab056b2c9"],["/tags/cmd/index.html","5d7ec31c014f65a7063417f52948eeaa"],["/tags/conda/index.html","0d3ac16c0150be04fbbf604ac22e00ef"],["/tags/css/index.html","686322a33bb7be994262060716d8942f"],["/tags/frontend/index.html","c1a2f099dd5975c211db744dd1e715e4"],["/tags/git/index.html","70d934eaea5f137fde09c0fb98defa9e"],["/tags/github/index.html","ccc0246fd480e81276c21632376f9565"],["/tags/hexo/index.html","570a636ea1f51272ad4b12cb84102179"],["/tags/i2c/index.html","2614d8bacd25e1b0b9d3d526bdabc5bd"],["/tags/index.html","533b4e0231cd8c9a50a151250d4e39bc"],["/tags/inte/index.html","48b71b3e7d1e63af70b978906e98f916"],["/tags/k210/index.html","34564e0086173b58487897d61ab86f3e"],["/tags/learning/index.html","cb6005c57dc44c5776a3c1792f5c128d"],["/tags/library/index.html","ee90fc46950584df4966e325fc7e7726"],["/tags/library/page/2/index.html","0bd0afaf97082f7159297451e76c301f"],["/tags/library/page/3/index.html","a97ef1944a82addef49629d606880c95"],["/tags/library/page/4/index.html","a3c1ff81cf69aeff08dc1eb916f44356"],["/tags/library/page/5/index.html","b49bae3bb89eb67f39ca4aecaa89580c"],["/tags/library/page/6/index.html","04f8cebfb3107259977e51f24343234b"],["/tags/like/index.html","3f90277306ae0abc9e8fb721c9df4ce5"],["/tags/linux/index.html","a99b642bf95a7e682be43401fa844b63"],["/tags/make/index.html","65185ef8b73e5dbdcd1f454119b8551c"],["/tags/matlab/index.html","32934d0035ee6ea46db67b1c608a9833"],["/tags/mine/index.html","95d3e144940c8538cad78c97cc9b05df"],["/tags/modelsim/index.html","fa4515c8caa2e4d7392290f752ed9e53"],["/tags/nerf/index.html","a426449cfd34ab17ac7fb2ea3840da90"],["/tags/nrf24l01/index.html","c5267f1cbca94e2cbe888b47629d5d42"],["/tags/nuitka/index.html","c16dea1ae58af0ff7aa70f2d10f4095f"],["/tags/numpy/index.html","106c56ff1df8d3e55e1250a723a01875"],["/tags/onnx/index.html","34bab1a9dadf78b365e1150b3745985a"],["/tags/pcb/index.html","2f55a547fe4fbb6d68452e773eb74d5d"],["/tags/pip/index.html","9b08ea57bd660614bad3edae3bbffc41"],["/tags/psutil/index.html","43a307075a28d151eff63f7b4fa2ef72"],["/tags/pyautogui/index.html","dd690ff8b1d03b895a3f460198cdcbee"],["/tags/pybluez/index.html","f60eb3f175d20e7cdcdab5e40b9c6cd9"],["/tags/pycharm/index.html","3594d42361c2274a3ea55b3989901e4c"],["/tags/pyinstaller/index.html","27db30834e158d8f4dee557e8c2af0de"],["/tags/pyqt/index.html","124ece2f8c9f506b15438019dfa0e331"],["/tags/pyserial/index.html","2de5d85163f2f2a873ee36aa6607a736"],["/tags/python/index.html","9c3c6711cb8aaecfe72fb606f5f839af"],["/tags/python/page/2/index.html","5ba008428ef244d0014967d2d7b34188"],["/tags/regedit/index.html","0bfb471f102a1b35c6f744bcc5978116"],["/tags/solved/index.html","7d48b6dae0160ddb22dd16b5d5f335ec"],["/tags/solved/page/2/index.html","b02e7ca822da82f3e22e30fbd6181883"],["/tags/spi通信/index.html","bc9edeef9889c6760ad0670f587ef2c7"],["/tags/stm/index.html","650396f3e7f99ecb91d77924b92791b4"],["/tags/stm32cubemx/index.html","fd9853aeb380cb530bcf4d1635bfad47"],["/tags/tensorboard/index.html","2aa06ffba4ae536e5299c0c4d7c22688"],["/tags/torch/index.html","581c4bfdc62ebbcf2ea276042c06ffea"],["/tags/typora/index.html","ada56b842385043a547509b3e68680a1"],["/tags/ubuntu/index.html","8473e761626c0641cf867a838957d7d7"],["/tags/verilog/index.html","b9007df9212cf92205bcffb63a2c7b68"],["/tags/vue/index.html","076f71950f4497493a8a27e2d159408c"],["/tags/win32gui/index.html","bffd834bc9f67e44d31d7c2ceab9876f"],["/tags/windows/index.html","9bf224f98b8f84af204225c6417bb3c4"],["/tags/work/index.html","c19399f969b7e88fff57921596ff990b"],["/tags/work/page/2/index.html","4f78b70191ccc6b5a263de88fbbde1b8"],["/tags/下载视频/index.html","da3129ad98be2503ff2ede09347e7e60"],["/tags/串口/index.html","94c2bca8ef2354d7397745bcf192903f"],["/tags/代码/index.html","46f55b9efeb7822758b47aa8c7ba2c2a"],["/tags/全志F1C200s/index.html","021acc9997a9c1e6b554313adbf62b25"],["/tags/公式/index.html","f76b7690e38e12ffbfb6736336f341ef"],["/tags/前端/index.html","49ff8c365b2d600502d8d38aaaa75204"],["/tags/博客/index.html","98e5e28e99daf2e7f4ecba3f81931929"],["/tags/嵌入式/index.html","465d0d04d048800191dddea568d778e8"],["/tags/嵌入式/page/2/index.html","0e35939bc261cd45d22801a15458314c"],["/tags/嵌入式/page/3/index.html","0b4901d36bbb3cccf485973c6699faca"],["/tags/嵌入式积累/index.html","b23dd2b5259d9e7dbde4c2d1f0d3fdab"],["/tags/开关电源/index.html","d03231cbaadaf4169429204a7655c751"],["/tags/开发板/index.html","6a26d9d93305137e0cf939b3dfb702de"],["/tags/忆阻器/index.html","9a43f2f220f379dfc685551b20d343eb"],["/tags/快捷键和常用指令/index.html","c5374293745f4b6bc66516432b180628"],["/tags/打包/index.html","348640191d65a6cd658c0251c3aab235"],["/tags/控制/index.html","eae3f1867dc27f8541063494715a6795"],["/tags/数学建模/index.html","8fa72c3f7f3561f404209171490ae321"],["/tags/数据处理/index.html","d15df0bc2ccfc5d5cb94a500e7149226"],["/tags/数码管/index.html","44e09a27ac917d80e27394a9cd8e2f1a"],["/tags/整数规划/index.html","b2de58c96e80f5b9d46abe00fbc3f141"],["/tags/树莓派/index.html","745ea339e1f3aa6acfa6c3519a438fe3"],["/tags/模块/index.html","6ac8a80d31b9bf762a3ab2a2e99f1f46"],["/tags/测距/index.html","35c41882e48e1030907eaf3655bb4a82"],["/tags/深度学习/index.html","e9b9ea52d56bcb45c41b3c1a33480d78"],["/tags/深度学习工具/index.html","2118c0f4965d3400735a4ab5e9649b0f"],["/tags/滤波/index.html","85d8a8792c20ebf4ba74b193a653277c"],["/tags/理工方向/index.html","dd079b1fd39b9332fe622b655ca3c9f3"],["/tags/电容触摸按键/index.html","bf07ae0fa9650c64c99723fca0918260"],["/tags/硬件/index.html","21a979d52b02ac1d2cbb3b276b364727"],["/tags/硬件知识/index.html","ae12f52edb820db38a545bf02dd5afb5"],["/tags/算法/index.html","eb4b368daf5e7927793d5cbb9a4586d1"],["/tags/线性规划/index.html","abff6ebacf957604686f8da20c6fd664"],["/tags/经验积累/index.html","db923a86008738cf3f0d319ead77c2fb"],["/tags/编码器/index.html","d2a05ff1a7e1306d33cb71a924e15b09"],["/tags/网址整理/index.html","179868920d5cef78665ebd11c6f7c21b"],["/tags/网盘/index.html","606acecdc006931ad52eee3c38cab327"],["/tags/航模/index.html","fbef61175bf67817c2465d184a2213a5"],["/tags/芯片/index.html","1d52fca25a42b289f9b1c24a7364a437"],["/tags/蓝牙/index.html","c1c243f89265251816c3a01a93e20737"],["/tags/蜂鸣器/index.html","e90246acf24568243fe3ce6235edf276"],["/tags/论文搜集/index.html","48e0170b236012944422946af8169d6e"],["/tags/语言/index.html","de5a00819d98de351f34712d907b7926"],["/tags/课内知识/index.html","bbb314eba7e1602381780cd4ce565ccb"],["/tags/贝叶斯/index.html","65681b005473527309af2a6912c74284"],["/tags/超声波/index.html","8166c92cceb4d077d1d0b1158aaa5945"],["/tags/软件/index.html","e57e71a037994a802f307a4f919fcbb3"],["/tags/选型/index.html","6aca6b7dc86c9f9d2c8b61b184960f62"],["/tags/通信/index.html","f7f9986c2a6fe9e095592f56bdd5531c"],["/tags/钢琴/index.html","0bf800e55b254b00623d60b1940dfa07"],["/tags/键盘/index.html","6470e299cb96c21f18fc406a44e1ee9e"],["/tags/陀螺仪/index.html","d35d98155e1a07deb457b6e9cd78adf0"],["/tear/index.html","4295f063feb2e85cb529a365f1855ba7"],["/tear/index1.html","8a8070ef6aeaaa86fb7d58c4b21db43d"]];
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
