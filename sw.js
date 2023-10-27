/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","97fa590e4b753cae080a5f53506c9279"],["/archives/2022/09/index.html","bf7f5730bc87d8f58c6bf2e531619a88"],["/archives/2022/09/page/2/index.html","972480ebbcdf94fe1a6ce883bde70636"],["/archives/2022/10/index.html","3d27e9cee6200e57a2a0e2ed6344804f"],["/archives/2022/10/page/2/index.html","88279cffba03dc0dd93a338b3bca9685"],["/archives/2022/11/index.html","49a448e6fce0538d4cbbed526ba16385"],["/archives/2022/11/page/2/index.html","9ce8cf78f34aedda1c676447c8a9f054"],["/archives/2022/12/index.html","1e051ab1f46e523de6bc9a70bbc55558"],["/archives/2022/12/page/2/index.html","bc7a1c840b1a19b79dd123a6c7cbf4e8"],["/archives/2022/12/page/3/index.html","401c7db225608b63a4c1dc9a56bffb4f"],["/archives/2022/12/page/4/index.html","95f69ad1e41d14d009eae57f7d90e2f2"],["/archives/2022/index.html","0f6c52f8f83dedbc8fa0578ff9fc5cb8"],["/archives/2022/page/2/index.html","5757c83ad0b4c7ddee33ab6a0178ab35"],["/archives/2022/page/3/index.html","8f88368602b2f635285c539e14356125"],["/archives/2022/page/4/index.html","2943710b85bc97e1eb2106445004f97b"],["/archives/2022/page/5/index.html","d9602575dc0e76c40ef92fad6f51374c"],["/archives/2022/page/6/index.html","c81fe0c3d325a36ae0e194150a57cd3e"],["/archives/2022/page/7/index.html","c24806566ecf5d023b57255cb24517fb"],["/archives/2022/page/8/index.html","6fb6f05703b1d74ae3d3291c93ec0fa5"],["/archives/2022/page/9/index.html","42fa95c026751cfab1652e041911dc00"],["/archives/2023/01/index.html","7dd452cfbd07e671c34d20bad2f36201"],["/archives/2023/01/page/2/index.html","e5207954dda8b0e24538bc674bcc0df0"],["/archives/2023/01/page/3/index.html","4ec60617e7f9792c5b643da1e1839283"],["/archives/2023/01/page/4/index.html","70b09bd2939e5cdc18bb43e590c7a749"],["/archives/2023/02/index.html","8e68bb0304087a24bb874f6003df10da"],["/archives/2023/03/index.html","4c38836ff23288b469692493c2cb3621"],["/archives/2023/04/index.html","8780c5df5e58378c07fdee1df2ed5c12"],["/archives/2023/05/index.html","5368b2ff39ebb4df713f57391ed14904"],["/archives/2023/06/index.html","9a98905abd03d429efc97b51431f9de8"],["/archives/2023/07/index.html","824404ee56b721ef645532b80dca98e1"],["/archives/2023/08/index.html","a73dd200c0a7ed083c86029cdf4786f5"],["/archives/2023/08/page/2/index.html","7bb7b87e28ea251ab22beed9f4fc0602"],["/archives/2023/09/index.html","4f4825c7b027979f6e8761f1cc88f5d3"],["/archives/2023/09/page/2/index.html","8ba5f65b8466d8d260d7a8c0c1080dd3"],["/archives/2023/10/index.html","d13a125e1e125d87765f2c2d56bd9657"],["/archives/2023/index.html","4517b94892605adfcfb2c1f1458f95a1"],["/archives/2023/page/2/index.html","8c164ce8cf1e14d8fa5a796540bec2c4"],["/archives/2023/page/3/index.html","f6efc92813a71b0c278ba8d9d2549715"],["/archives/2023/page/4/index.html","afaaff2a2e5189774a3e04ead830c59c"],["/archives/2023/page/5/index.html","6e7dcfa608ec27c31c7a8f694a047d91"],["/archives/2023/page/6/index.html","7970b591ce87a124392eb6cdc89e2fc4"],["/archives/2023/page/7/index.html","a6dd0e94d92e542fa2b0b395210e5c1d"],["/archives/2023/page/8/index.html","206a73c4ac734fbe367e9bf98b2827a2"],["/archives/2023/page/9/index.html","5d5dfae5e0f3e6515b8ced2daa85fcdc"],["/archives/index.html","e39e4e0cbfb1ea087f4368ba5c542797"],["/archives/page/10/index.html","22f7090341477b290582eb7f1a178012"],["/archives/page/11/index.html","3d0c9328aefa74de0bae4c4733d792cc"],["/archives/page/12/index.html","c4c2a0651ca9a875dd5f9c82c6964df8"],["/archives/page/13/index.html","27d81662f459257d35c6c4232ea1b899"],["/archives/page/14/index.html","155d87392411ccb29fa399cdf3d7f25e"],["/archives/page/15/index.html","bde46e8458a77e0c623fef742e47f288"],["/archives/page/16/index.html","b5a89c5fb5088f4825becfec3598db13"],["/archives/page/17/index.html","aca7728b7d2f9a2b0bb08de344602e45"],["/archives/page/2/index.html","bc501b57951d17cfbf504067aa7bf406"],["/archives/page/3/index.html","3a465e1b67a74af1fb84427163287b59"],["/archives/page/4/index.html","00d29be39aee5f3c65fe8a34fb1c5d11"],["/archives/page/5/index.html","79fc2151652182e10d1f194be8b9bd57"],["/archives/page/6/index.html","36b6e1d1846b9737518811f7a58a24ed"],["/archives/page/7/index.html","c5c83a982fb7cee25a3dd437c0ccb338"],["/archives/page/8/index.html","a8550d3bac4977875c01f11ac89d6aa2"],["/archives/page/9/index.html","2393bea7bd6b555b20ae19c5df6f11de"],["/baidu_verify_code-ZFSCabM1PJ.html","dc90316223dc5ba244e8237d8db59bcd"],["/css/main.css","c02d0a6dcc3d467442dc85476f056789"],["/css/spoiler.css","eb373af0627ede298867ffc0045da62e"],["/failed/【硬件知识】vco压控振荡器.html","7f410e9624a2c00ec04d1ee7a3cd7c08"],["/failed/【硬件知识】vco压控振荡器/1665803607390.png","3df26768c0d97b3acbb64c7f4738f15c"],["/failed/【硬件知识】vco压控振荡器/1665803663941.png","38d29c573fc0aab159543ee6f3d6b31d"],["/failed/【硬件知识】vco压控振荡器/1665803862765.png","f7e2165483ca1f224fc47019c9d85839"],["/failed/【硬件知识】vco压控振荡器/1665803865723.png","3da7b08b88d8795e53d03a47e1926277"],["/failed/【硬件知识】vco压控振荡器/1665803871404.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/1665803883747.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/clip_image001.gif","ba898c600ecfdb213d2223a0f783c808"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803844893.gif","fb05fad8f7ca3e4d9e40000a9ab1dc09"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803856973.gif","e1a4cd1747beecc7d92124979531824c"],["/failed/【硬件知识】vco压控振荡器/clip_image002.gif","0c0f42f02d474126082016d250804bc4"],["/failed/【硬件知识】vco压控振荡器/clip_image003.gif","1f489bb3e02d4993cdd501f7ec773812"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803844893.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803856973.gif","09cde39109369f9185d1cf128c6d7c2d"],["/failed/【硬件知识】vco压控振荡器/clip_image004.gif","32873c471ff1058abf9d6d09ca5e45f0"],["/failed/【硬件知识】vco压控振荡器/clip_image005.jpg","ea2dddfe9b1da4f406ee36b37c99e72e"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803844893.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803856973.gif","b0138096b0fc7682435ad07aeaf159ce"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803982819.gif","6540947f9843ab822d3e8eeb7ef621e6"],["/failed/【硬件知识】vco压控振荡器/clip_image006.gif","6290aa2f8360b2a4f05e4c09e4d6bc80"],["/failed/【硬件知识】vco压控振荡器/clip_image008-1665803856973.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image008.gif","113b77d852979982495a775ea4d973d1"],["/failed/【硬件知识】vco压控振荡器/clip_image008.jpg","aad87f9838e93808a0caed1ece93ffac"],["/failed/【硬件知识】vco压控振荡器/clip_image009.gif","fd6cf84a1333733613c80d5599c0fbdb"],["/failed/【硬件知识】vco压控振荡器/clip_image010.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image011.jpg","fa6d15386072d8a691d18f9c3a53b426"],["/failed/【硬件知识】vco压控振荡器/clip_image013.jpg","cea0cb9334e0d5f1b84beb2fcd8b1245"],["/failed/【硬件知识】vco压控振荡器/clip_image015.jpg","660345ebf2132d1bcdd9a7455529093a"],["/failed/【硬件知识】vco压控振荡器/clip_image017.jpg","29517d76c214adc17343771d2d804679"],["/google41a28d5f2878fa02.html","dca253f597d1db930c8c0b8add6df082"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/tou.png","578463708d7de56a1c4e6331831b3e2e"],["/index.html","1f39e0af7d5882b89fc921e7a043ab88"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/code-unfold.js","e079f1fdb88a9edcd745220494218e88"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","97606f901b6e488587ad5c49aa367604"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/learning/开关电源/【开关电源】学习1——buck/1663506637120.png","8e50e1a9a14c0174f21513f95808f075"],["/learning/开关电源/【开关电源】学习1——buck/index.html","695e17377f8acfb9c9b53cf3d43a4b3c"],["/learning/开关电源/【开关电源】学习2——boost/index.html","6443ab4c63a5eadad4d4b5a5fb5ebb08"],["/learning/开关电源/【开关电源】学习3——VMC反馈/index.html","9e0a16d270b5f6c793f722cb49ca0d82"],["/learning/开关电源/【开关电源】学习3——buck-boost/index.html","97e82689f5d16681e80cceeecf7a04dc"],["/learning/开关电源/【开关电源】理解/1663634083260.png","7b1a889ee96c83e170023666681c9131"],["/learning/开关电源/【开关电源】理解/index.html","3af4b709c48efccb14630a75dfca4326"],["/learning/开关电源/【开关电源】进阶1——稳定性判断/index.html","1429231c8c39706cf01e585ed0145c98"],["/learning/开关电源/【开关电源】选型和使用/index.html","dfadd5fc26e2e0cdd33c1369b094ef26"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/library/CV/【CV】基础/index.html","5884bd9af44a6e1f3959f122386a9d1c"],["/library/CV/【CV】数据集/index.html","1233f55e5a478b65883aaefea6ac1b06"],["/library/CV/【CV】经典模型和论文/index.html","cdb61d06e20349d80e3ff386be6db185"],["/library/CV/【CV】综述/index.html","cb53f070f403f99a3568b2c3c4037246"],["/library/CV/【IQA】图像评估/index.html","2075a6260095084ff498b65dda112798"],["/library/CV/【经验】训练网络/index.html","72d7081b38f58043cdfedd3ce9aaa77d"],["/library/CV/学习/【学习】attention基础结构/index.html","ff830ddbe8e10a4828addf4f0a8f8510"],["/library/frontend/【/index.html","562d8a0a6307dfaae0261cc5996d9acd"],["/library/frontend/【adb】电脑连接控制手机/index.html","03389ba2e44ef85164160f45920c51e1"],["/library/frontend/【app inventor】拖动滑块写手机app/index.html","d60b7bb016ae5ed146626d2b4340f05d"],["/library/frontend/【auto.js】手机自动化控制/index.html","5c3759d6b1064c511a0d42feedf9de3d"],["/library/frontend/【hexo】博客部署/index.html","1583da2b6eb676c89f1437c6f88c970d"],["/library/frontend/【markdown】编写文档/index.html","57a3c2e6d930e34a4c14952680da24cd"],["/library/frontend/【vue】搭建网页/index.html","4d0e0f919d962bc1a46e88bf2b03de37"],["/library/inte/windows的linux子系统wsl/index.html","80ee199c68e9dfc55f4a6a2325809504"],["/library/inte/【css】学习/index.html","ad1c308a4db4c3b84db8f532c5e9783f"],["/library/inte/【latex】学习/index.html","ad1eb556d7e822bbcaf093d592c3028e"],["/library/inte/【钢琴】织体类型/index.html","5a3992ed8013774ae35d9ec5d2fb53e9"],["/library/inte/网盘挂载Alist+RaiDrive/index.html","0924a2215559c0b2ce43b25217a721de"],["/library/math/【math】傅里叶变换/index.html","6627c44e61b84175d6e3447c6dace8c6"],["/library/math/【math】高斯积分(Gaussian Quadrature)/index.html","88d0b229c08edc14abb45f86c490da14"],["/library/math/线性规划和整数规划/index.html","6da490b30ab71da54dd45a7bcc828dcd"],["/library/python/【CV2】图像处理/index.html","9f3b38c02e80f4647a9e4e50a863bc48"],["/library/python/【itertools】计算排列组合/index.html","cd2ed739b64a0717ca560d73db9b0361"],["/library/python/【matplotlib】数据可视化/index.html","c0b84031a78121318717cc19b470b2b4"],["/library/python/【nuitka】打包python为exe/index.html","6f461f443c6d4e939e268e1e46926526"],["/library/python/【numpy】数据处理/index.html","00c150cf81fddf064d176a45f012732d"],["/library/python/【pandas】数据处理/index.html","6911510f39b8580b335e5d316c2a304e"],["/library/python/【pip】【conda】常用指令/index.html","8a7f0b5cab926f78d37c910e8be04dd4"],["/library/python/【psutil】检测电脑网速等/index.html","8595aea84925e0442cb6f844b65ff8ad"],["/library/python/【pyautogui】控制键鼠/index.html","a66446e27fc1290acfd7cfc726a5f23f"],["/library/python/【pybluez】python控制PC蓝牙/index.html","1bce55d54ebdf8d82b85970961da892a"],["/library/python/【pygame】2D游戏/index.html","31285e977c09c5f155c91239acc55bf5"],["/library/python/【pyinstaller】打包python为exe/index.html","4e04c78518dc50bebbf17eab60623835"],["/library/python/【pyqt】编写可视化界面/index.html","06053586be8327c2baa8afa5408aa891"],["/library/python/【pyserial】读取串口/index.html","41e620da8a22dd73066c8bdcd66ae2c7"],["/library/python/【python】基础语法/index.html","d4e7719d9a0b12874dcd470cfaebfd03"],["/library/python/【python】有趣外部库/index.html","d5479892d7824b8496d397b6cb5ddb16"],["/library/python/【python基础】常用内部库/index.html","033375938c6e0139fc38996bb742425f"],["/library/python/【python常用】常用库的pip安装/index.html","a63d980979cfab08eff60ea22f3053d5"],["/library/python/【request】网络请求/index.html","cf50c95720cc67a090a9c9dad53438ad"],["/library/python/【timeit】获取时间/index.html","3f21f4fc52ef07a321333e8518fc5177"],["/library/python/【torch】机器学习库/index.html","49d13bd560a457b16da986fefb4d4265"],["/library/python/【tqdm】显示进度条/index.html","6c366f0d82be87ea05cb3ad5e41ae749"],["/library/python/【ursina】3D游戏/index.html","6d6ae1de955102380edbfcf8433dad01"],["/library/python/【win32gui】控制win系统/index.html","3dea78e0a88d22452ee50fb36d41957f"],["/library/嵌入式/worked/【沁恒】样品试用/index.html","0cd9eae8b8d95ca31dc4c481d32a341e"],["/library/嵌入式/【git】学习/index.html","2ec8a0862471ed60f2ffe782f3a2148a"],["/library/嵌入式/【linux】常用指令/index.html","b5b7f6317f61082d8bb9eec57f8986fc"],["/library/嵌入式/其他/PCB作画规则/index.html","c77b79a9911887e6070dab1d64b01c81"],["/library/嵌入式/其他/犀牛建模/index.html","b47516e3a5fb4059b6df6d7ea2112057"],["/library/嵌入式/模块/【模块】GPS模块/index.html","49d0f796a2b2bee13239c8d45fadda98"],["/library/嵌入式/模块/【模块】OLED/index.html","6bcbb2251530b85184de6e5de5522f05"],["/library/嵌入式/模块/【模块】amg8833/index.html","dea2b775118857e78dc7d4350a43deae"],["/library/嵌入式/模块/【模块】as5600/index.html","11f8ba729218fb8b2a0bf973e975d8c7"],["/library/嵌入式/模块/【模块】数码管/index.html","ce7db1fc114e5da9fe4fca04e5a8fcd7"],["/library/嵌入式/模块/【模块】电容触摸按键/index.html","0fed9ac1b9a30bcab2b7cd99b9ef643e"],["/library/嵌入式/模块/【模块】蓝牙/index.html","05e3cf8eb419ed6fb555e3405f6b3b42"],["/library/嵌入式/模块/【模块】蜂鸣器/index.html","a8ee9de7c425a4d1a0b700fb06521ace"],["/library/嵌入式/模块/【模块】超声波测距/index.html","37cab76b4fa4c0781f9a44862d345798"],["/library/嵌入式/模块/【模块】陀螺仪/index.html","4c9fb6c729cd19f17a03712c330f6d2b"],["/library/嵌入式/硬件/【硬件知识】H桥驱动/index.html","e3da2890fc6d6029ba843e93ea698cd2"],["/library/嵌入式/硬件/【硬件知识】三极管/index.html","1f593aed026ac60cb9ec4c92357ab592"],["/library/嵌入式/硬件/【硬件知识】无刷电机和电调/index.html","8fde0905276f59f9d4dc0e95516c66eb"],["/library/嵌入式/硬件/【硬件知识】模拟电路pwm/index.html","cac76650a31f59e31c3b4c502b858de4"],["/library/嵌入式/硬件/【硬件知识】芯片熟悉/index.html","d2e99a3cc7ebc3f661240e71623f9940"],["/library/嵌入式/硬件/【硬件知识】运放运算电路/index.html","7c5be9af157fa2c710e0ec3f03ffaa15"],["/library/嵌入式/硬件/【硬件知识】连接器/index.html","fd6868eaa50e11ae69ef87726c5302b1"],["/library/嵌入式/硬件/【硬件知识】选型/index.html","9863c9877f34eeac2fcd0d838403ffc3"],["/library/嵌入式/积累/【嵌入式积累】基础知识/index.html","55e44473f8c5d60dd4003cd34767628e"],["/library/嵌入式/积累/【嵌入式积累】常用官网/index.html","c76cc414088feec8c85d7d39fbe2c32f"],["/library/嵌入式/积累/【嵌入式积累】控制入门/index.html","f94740df299f1c85441b1d03945ef3fa"],["/library/嵌入式/积累/【嵌入式积累】阅读寄存器手册/index.html","9f463bceee17fe5666ae37902d776b74"],["/library/嵌入式/算法/【控制算法】学习/index.html","f765a5ac14a193958e21204fc924336f"],["/library/嵌入式/算法/【滤波算法】学习/index.html","7ab3ab8cffa5857c79b40e6f890138bb"],["/library/嵌入式/语言/【python】进阶总结/index.html","248497f5ec0295f37e1f63008355edaf"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】ADC采样/index.html","f01f3dedf8870a428722f60e59b9792c"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】USB/index.html","6e3f85f085b49455fffdd288f57459fd"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】i2c通信（mpu6050）/index.html","cecccf09f57f6ccee1f2a80eebfe9459"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】pwm波/index.html","dc6b36066ec15659e365dc7273ca84f0"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】spi通信（nrf24l01）/index.html","b8c9ae70e6e74ad1d419f59c9b75fcf0"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】串口通信/index.html","90f611b2e97b72a8c22455c07ee65d55"],["/library/嵌入式/软件/开发板上手/【V831】开发板上手/index.html","668654641b5a1bd2598659f86aef8035"],["/library/嵌入式/软件/开发板上手/【k210】开发板上手/index.html","4a80b4bc92dbc5e76042ffa72690b2e2"],["/library/快捷键和常用指令/【cmd】常用指令/index.html","1161e234e448830fa6d0cefdd8ccf006"],["/library/快捷键和常用指令/【pycharm】快捷键/index.html","a33c97f6cc9c4939fb9c48672fef6ac8"],["/library/快捷键和常用指令/【win】快捷键/index.html","d42b10e4741b57fd72673671a51fe39d"],["/library/快捷键和常用指令/【清理内存】常用文件/index.html","d14716f0f9d2a8d99c51cb5753963210"],["/library/快捷键和常用指令/免费下载视频/index.html","0d72a492e42a8dde8036113aa941d133"],["/library/深度学习/【深度学习】基础知识：×NN都有些啥/index.html","b43ff0e782b41758943db21c51727f56"],["/library/深度学习/代码/【numpy】语法基础/index.html","3cce7f7cf813c38b7857c7b3de5a4eb1"],["/library/深度学习/代码/【torch】语法基础/index.html","504d56d05670148e96204274942795eb"],["/library/深度学习/工具/【深度学习工具】onnx学习/index.html","ade4fc96a1f22124f75713b55a0635b3"],["/library/深度学习/工具/【深度学习工具】tensorboard学习/index.html","903c211f56cca32be9e1fc06d09a8e82"],["/library/深度学习/算法/【算法】贝叶斯优化/index.html","c5947213b2b86a5ab4ead7ec96252fcc"],["/library/经验积累/【经验积累】导师选择/index.html","1cebeaff228f9d5184ab4f1af46f2589"],["/library/经验积累/【经验积累】开源协议/index.html","7b12ce3a1e475b82c869c761bd0ec10e"],["/library/经验积累/【经验积累】网址整理/index.html","2304fcb8260e6833b67a6b7310531959"],["/library/经验积累/【经验积累】论文搜集/index.html","0ebf626c34d16a62a21b5e39c733b8b5"],["/library/经验积累/大学毕业选择/index.html","20852aad8e82f15f100f8f40d4b27e83"],["/library/课内知识/【FPGA】仿真和烧录/index.html","df9a38e19c5f0ac890b09a20ae809f3e"],["/library/课内知识/【matlab】学习/index.html","2e697a80469930187371da4e8ed4d29a"],["/library/课内知识/【verilog】学习/index.html","519997844a0f452219036bec9e016621"],["/library/课内知识/【zemax】光学设计eda/index.html","73ea932d924065783c768d035b0ad184"],["/library/课内知识/【常用数学公式】总结/index.html","ccf01ff407ff61a8935e18e12fcb6f5f"],["/little/name/index.html","4aa5a2003f77b4f6bcab5761db590b1a"],["/little/留学小记/index.html","3009f8548d005cf459bdeec40c492310"],["/little/粤港澳6日游/index.html","23bb6ee88e655bf8f2261ad78fea96d7"],["/mylibrary/css/float.css","9b9b0b897e3298f16087f5daac343b5b"],["/mylibrary/css/hide.css","7559b2d2e1deab4f249ba7cfbdec3ec6"],["/mylibrary/css/load.css","bc3ef001424364f717c829c79b870809"],["/mylibrary/css/neon.css","eaf00919d0c44b1e5ab568236da871cb"],["/mylibrary/css/round.css","6638ef3b696877015999820ad7d53c34"],["/mylibrary/css/shake.css","7a1e9fc41824e18095e6951dc7e00f6e"],["/mylibrary/css/shiny.css","d5b84b8c6f6b2b98600620cb89e0573e"],["/mylibrary/index.html","4ec3609a7200afc3af87e81e53513972"],["/mypage/css/style.css","613b095b36555e7996843a17f9403452"],["/mypage/font/LigatureSymbols-2.05.eot","5b46f67c079e0599f89aae807cdad560"],["/mypage/font/LigatureSymbols-2.05.svg","f4be952f02a00bd7b464568304b12842"],["/mypage/font/LigatureSymbols-2.05.ttf","48ae0b91a8d6e1feb2c15961a338dad8"],["/mypage/font/LigatureSymbols-2.05.woff","f974884f441019724c351f85478b3938"],["/mypage/font/README.html","50fc693865dd81abac26026e251844c3"],["/mypage/index.html","46004d68e41ace4dd5041d77ec820ed8"],["/others/Write-blog-using-markdown/index.html","50a9a773fe0370018c4214c1389d49df"],["/others/chatgpt/index.html","ca3fee864ebd5884911fdf18e0905c19"],["/others/古诗/古诗/index.html","f1c905001b1fdd120eedb0a9af2c63f1"],["/others/能力年表/index.html","caff5027be020bac2d21d63f79f5a7ef"],["/page/10/index.html","add6c4506d863622c4e227c7ae41cb1e"],["/page/11/index.html","1c33478923ff79172656dbc021e53463"],["/page/12/index.html","d1f410aac0c0da2c50118152269d0584"],["/page/13/index.html","ea30ab3f07333beea975e9d62fdafb46"],["/page/14/index.html","a8975bdedaf525291d76b9d6de3ae119"],["/page/15/index.html","bac642d021f92dc354183d1e2e7be4d0"],["/page/16/index.html","0756d2c853d4befc2b440276f193458a"],["/page/17/index.html","aee47cefaedee572346a0713028ce177"],["/page/2/index.html","2826f337cb1ec255444627d0a97abae0"],["/page/3/index.html","06037f82e4c44da665a9b32471d6f80c"],["/page/4/index.html","b3531312aa41fe4fc33e0535237dda0b"],["/page/5/index.html","ac83b3e9f2eaeec54b8728f1a5f60232"],["/page/6/index.html","9b300a77cd2cfd0800531774ecbe77ca"],["/page/7/index.html","1c7221036bcda2eaeb020b53002eaf11"],["/page/8/index.html","32e95ce3632d09f694ef0b8eafce2508"],["/page/9/index.html","1fdc8c2dda3422af3118bd32ceaaa749"],["/solved/chatgpt您所在的地区无法访问/index.html","c5c28aee3e680f92f6b59f5716e11379"],["/solved/github的github.io项目打不开/index.html","76884772e848998f49e8659452df0efa"],["/solved/hexo部署报错spawn failed/index.html","a089ccaac5c65e2d199b65ebd8726fba"],["/solved/modelsim的-novopt优化相关报错/index.html","c975a517c80d53c4d90754cfd2e8c09f"],["/solved/npm install 报错/index.html","27dbee21ccfc1b1b7384918cc39a9fc6"],["/solved/pycharm修改快捷键/index.html","5d1e9785ffe6c864c0a0478775ff04f2"],["/solved/pycharm内无法打开cmd/index.html","62e2e2caf829b31a26a28bf561db401b"],["/solved/worked/chatgpt微信机器人/index.html","eddea96e4a26ad907adf7dc1bd314d2b"],["/solved/从regedit改变键盘映射关系/index.html","45fb9ad6f97acc1f2625bc2eeda73813"],["/solved/双拼输入法/index.html","d054b629e55686a60f849f14f98e2e79"],["/solved/右键新建菜单管理/index.html","13687cf1a438190785f9ca67f0a23e06"],["/solved/执行make menuconfig时报错/index.html","fbf190dd480e127984db60a5388c4dd3"],["/solved/报错binsh 1 bc not found/index.html","f8f02487bfe1f9650d2c953a4d14cafa"],["/solved/报错binsh 1 cc not found/index.html","1d73eb685d08f7ac6c43365de3e7076e"],["/solved/报错binsh python not found/index.html","f78650886ffd685a4ace55a5f2af2c6b"],["/solved/未整理/index.html","2f32bba0704226f5d8c686f2fe7c4d0e"],["/solved/树莓派域名解析暂时失败/index.html","38a461905eaa3836da81bd42233e7497"],["/solved/树莓派配置python环境/index.html","54cc25c4ccdda7fc166a93a6380e2d01"],["/solved/环境变量配置理解/index.html","b5c7112540bb0ad1f07bd16c0456c39d"],["/solved/设置软件开机自启动/index.html","0664b5693e27fb2d96365beffee5ef61"],["/sw-register.js","cb65c8f1292d47ef4725a863bf25208c"],["/tags/ADC采样/index.html","f1c8c14dc2ed0044e3a4d84959a1c477"],["/tags/Block-NeRF/index.html","e78e76d45bd07b7c33356b2298ff5264"],["/tags/CV/index.html","c568cc8d3056a6467bcc7472fbe4560f"],["/tags/FPGA/index.html","21899571c0a9e5a8a3d1a110e6ff0f47"],["/tags/GPS/index.html","78eea962e46cea5165ee145be68b7cb0"],["/tags/HAL库/index.html","c793c9c93f409de6c83704ed343de414"],["/tags/H桥/index.html","50e150d39811e4226856f2dd2ba9717a"],["/tags/INN/index.html","fa4c446a513757e98a49583ada9bb1f3"],["/tags/INR/index.html","535323384646eeb1aa3cc08c6e32b515"],["/tags/JIIF/index.html","04c1c10f2a1bb1bed2825db4f80e102e"],["/tags/Linux/index.html","557a1a623514e934b2564d59913a8b4b"],["/tags/OLED/index.html","e9f906cc7373401ed4ab359e3f45ab33"],["/tags/Point-NeRF/index.html","170a56c353c20890d174189ff7dc7ce7"],["/tags/USB/index.html","4b124c9c8d92cfe8114388d18f6ce20d"],["/tags/V831/index.html","a8e6b5061292fae128f208e8143c3f29"],["/tags/adb/index.html","e79c96c3198e33e3c37410d7c4578d1c"],["/tags/amg8833/index.html","fb40bfbc34177a185c4cf57fc5c26555"],["/tags/auto-js/index.html","97571efd4075c8e89840604f18ab22cd"],["/tags/bard/index.html","084c9aacfd1e18e7ef680ccc4b47312a"],["/tags/chatgpt/index.html","4bac3bbbcf0f0a74337c3ac809a12854"],["/tags/cmd/index.html","44dbf049a81ced1fc5849fcd0f631fbf"],["/tags/conda/index.html","c1fba96ffa01cac62f5d0e16e772a370"],["/tags/css/index.html","9fcec10fe82134b56b321b8d5f39f9ca"],["/tags/frontend/index.html","6f24b94c2bfad0a410513ece9d043ebb"],["/tags/git/index.html","84b6fce3f96d14e9c7a35fe4df56ce8a"],["/tags/github/index.html","5f77fd63afcfd30212cfa38506564c97"],["/tags/hexo/index.html","cf3f53f04ef4105808cbb84e234b8b43"],["/tags/i2c/index.html","a442f9e10f4ea6bfbfd17c336d5702c7"],["/tags/index.html","ea5e6d8391d15c75c48757b5ea7ed951"],["/tags/inte/index.html","147260e04981a6c64e7b33706f9224f4"],["/tags/k210/index.html","d8aab1ecf48f5cf340d26f2869df221e"],["/tags/learning/index.html","bc38c0b75f5f15c3ee4ebb49f7f8a6a5"],["/tags/library/index.html","1a1c47575c20787ee44087107913abc5"],["/tags/library/page/10/index.html","db14bdc5d413d05a23699988e2f5d67c"],["/tags/library/page/2/index.html","fab46103078e8a4d663095ea45b65ebd"],["/tags/library/page/3/index.html","12705cdb5076afb914b3c0316ffcbb8a"],["/tags/library/page/4/index.html","8ebdc94e165cce5bee724d5aa6b65f79"],["/tags/library/page/5/index.html","d0278460b933623d042761df7d1a56c5"],["/tags/library/page/6/index.html","af3f3aa27bd976208d78b0cfe92e3d25"],["/tags/library/page/7/index.html","42cc6189fc4bb9d61f7434ac7a3ad809"],["/tags/library/page/8/index.html","87fbefbfe446e3e0db7f6b54390d0b35"],["/tags/library/page/9/index.html","ddf267634cd6da0ea1e5ccce9e90ca6e"],["/tags/like/index.html","eb0a1f5273bba6ea10e4c176f0b748d8"],["/tags/little/index.html","13e542854bdd87d1f8da0932aeadbbf6"],["/tags/make/index.html","78e9264353b6c143cf3d397b8136a969"],["/tags/math/index.html","2c8db8999247105db552230c9580c208"],["/tags/matlab/index.html","69b5dc94c0483adff01864598b4c8a60"],["/tags/mine/index.html","64a9c561f1e73b4c9be6f713013c0151"],["/tags/modelsim/index.html","f03172c43387a4fc57a52eabf59600ae"],["/tags/nerf/index.html","725dc0d861e152bf6199cf7a4981a44b"],["/tags/nerf/page/2/index.html","495de1247cc13576ed3f2d0142370289"],["/tags/nrf24l01/index.html","fc3ae34fd9ef1366681840bd35335d8e"],["/tags/nuitka/index.html","b7a44662725a17a7e0f60e935172733f"],["/tags/numpy/index.html","8bea5a3b7ee5548d371c9db95c76ee20"],["/tags/onnx/index.html","a5e9b12e9909856ec3830f6bf4e521e1"],["/tags/pcb/index.html","bb72c9105963afac2447ce9c5b30bc73"],["/tags/pip/index.html","4fe44657eb244742da78e615d682827c"],["/tags/psutil/index.html","bac06a627896e8ddab0f55defa83f855"],["/tags/pyautogui/index.html","ac7d127310caf9b485c1a5dbc054d9e2"],["/tags/pybluez/index.html","c627ac4e08402e15fe744245b8466b42"],["/tags/pycharm/index.html","82ca6ae0d8e3d61a94b021072a5e41dd"],["/tags/pyinstaller/index.html","8376a09314af1f06502447bd5a779b4d"],["/tags/pyqt/index.html","0f80e0bac77a4b413ab55c26def1a2e1"],["/tags/pyserial/index.html","31925ddf14e8311f96749bf4cbd609bb"],["/tags/python/index.html","440b0d1f9b8b59eb98669a08d72b3089"],["/tags/python/page/2/index.html","ffbde184a15ba88e28c0eba2195e3b74"],["/tags/python/page/3/index.html","0e3f6d5c27b5d5de11632a0250e8b02c"],["/tags/python/page/4/index.html","30f76e3f6779a1ced1704c49195c5cd5"],["/tags/regedit/index.html","ed6067138b5b0a428503ba48a1c7f92c"],["/tags/solved/index.html","e1e7e1ce851cc1f976696435c2f2216d"],["/tags/solved/page/2/index.html","ab4c800dd690a685a39f71ff23789619"],["/tags/spi通信/index.html","801027dd9cc63e37ad336e01db859c8b"],["/tags/stm/index.html","c77582910317370f6f5abef485bbeaa7"],["/tags/stm32cubemx/index.html","77e3e6eced994fabc7e3f2f52281c1db"],["/tags/tensorboard/index.html","de81db1af01f1263f96acbe63685091e"],["/tags/torch/index.html","4d3cb13617435e0fddaaa70cefc8625b"],["/tags/typora/index.html","473d7e07ad6567b23b3c3672bbf8a241"],["/tags/ubuntu/index.html","a21d79bc471e96cb588ce6a3710d9ce8"],["/tags/verilog/index.html","9ddb7ec6727061db4d6f29c65c7e2ad7"],["/tags/vue/index.html","c4bb8a3008951d541a3edb36b406fb43"],["/tags/win32gui/index.html","3f19207c246dd900f13680c340ce175d"],["/tags/windows/index.html","57e5ca917e14a26ac1be128ebda2cb5b"],["/tags/work/index.html","6de3544290e5c165afd864c07fbff557"],["/tags/work/page/2/index.html","f8391d13c19497a22d20ed4c05efe43d"],["/tags/work/page/3/index.html","0591d7bae8b217f11960fca02d6616fa"],["/tags/work/page/4/index.html","0044db7817860d3e9e374fb41af76eb1"],["/tags/work/page/5/index.html","6ec3f7c74b6cee9fbed3f3af15d35330"],["/tags/worked/index.html","5aa1334910391c0f2ffdd548816ff57b"],["/tags/下载视频/index.html","4ce48b8aeaee5eb2f57442d8ba3e70fd"],["/tags/串口/index.html","0fb52b95fc64f60b6f2f65281b8523fd"],["/tags/代码/index.html","878f0398af08827ba5682da741f69213"],["/tags/光学/index.html","dfd2499b1296cb35be2fd205400c60bf"],["/tags/全志F1C200s/index.html","b7f9e9d8256622a29930b18f207848e2"],["/tags/公式/index.html","a4f9bc37189d3bbc09a527a5b07a73da"],["/tags/前端/index.html","46854fff6b761dae6dc52d7f894852b1"],["/tags/博客/index.html","0bc7d907d7eeadea610897f3a97a464e"],["/tags/国产/index.html","620a553f89facbf93e19585dbfc61fc2"],["/tags/多光谱/index.html","fa31a4d42fbb4e382c74c0d7d146650b"],["/tags/大学/index.html","9465d4b3882b0895c78203a863b26bfb"],["/tags/嵌入式/index.html","22c7ecbaf3aa0a2089aa452daf01a50e"],["/tags/嵌入式/page/2/index.html","8deb974f6b79359264bfb0d44e4abc51"],["/tags/嵌入式/page/3/index.html","d9a6b3cf362f29a9713e214c11262a2d"],["/tags/嵌入式/page/4/index.html","9ed26f0bd6901c04bc14eabb4159cc3d"],["/tags/嵌入式/page/5/index.html","0f953223313f5077f21a98018eb8a0be"],["/tags/嵌入式积累/index.html","c6510c75bebb6529f97800b51a5aa25f"],["/tags/开关电源/index.html","6292e46ece9004db729f0ab64260c1dd"],["/tags/开发板/index.html","bcb6bae0dd0b887961da805d30ae0ff9"],["/tags/开源/index.html","2b4d50a2e984b0795d95454f0c1a51aa"],["/tags/忆阻器/index.html","805481e25dae95fc959ce954beb4474b"],["/tags/快捷键和常用指令/index.html","0558b238708eed611b2c1808cdd1a21f"],["/tags/手机/index.html","8f6a696bf9d4e8b6dda6282769de98f0"],["/tags/打包/index.html","188bad997243e108a102363b38623881"],["/tags/控制/index.html","ba7c3851473a1f976cc9548bf02de8f9"],["/tags/数据处理/index.html","a07cbb4e852b32586f2e01d05f2fa0ee"],["/tags/数码管/index.html","3de65da1fab8116aa42ab55d5dcbdeb1"],["/tags/整数规划/index.html","b129dccf636cbb9838506f02da490811"],["/tags/新加坡/index.html","43165043815d25971ce6861f33769b86"],["/tags/机器学习/index.html","a6ab608d7690cda49d57d9d702bb52e9"],["/tags/机械加工/index.html","b221dc4886faca7d9c6fad458e3b37d1"],["/tags/树莓派/index.html","80284efea25974fbd57cbdf18a568bb9"],["/tags/模块/index.html","9f6c8ded53e85fe13e00cd5be9b4f9eb"],["/tags/沁恒/index.html","bdb77fff403d4a80afa0372f23c41e30"],["/tags/测距/index.html","9bf82d101a0dad3902e2fca21529fec7"],["/tags/深度学习/index.html","b7ecf41a7b5cdd974c2f927a1582ce5f"],["/tags/深度学习工具/index.html","3a36a60a2e617a1abc986f04ff018cf0"],["/tags/滤波/index.html","42c426e0c62d9a978bab67a1cb35f5b1"],["/tags/理工方向/index.html","c152157f27cf00e43709340289f7b206"],["/tags/生涯规划/index.html","6a5acd146a8ca81b22fcac8762b62234"],["/tags/电容触摸按键/index.html","9748dc347fe6fd61c5e2459c14716e65"],["/tags/硬件/index.html","4e8cfb0b15dfa7a7e81d307e53d02746"],["/tags/硬件知识/index.html","363a540fb38dcecf32c38194674a7620"],["/tags/积累/index.html","607a28bcaa880bd318d07ae26ec858cf"],["/tags/算法/index.html","26e3f21a55d44e53cd4fd219944fc5b1"],["/tags/线性规划/index.html","f77618e413c3df18fb2bbb14c8d7325f"],["/tags/经验/index.html","7708a60f9b19aac0882f8d3a126006f0"],["/tags/经验积累/index.html","722d4148dc7f60b0cfe4cdaf0b7a4020"],["/tags/编码器/index.html","1dc2b42d37a0e37d233e7b81198bb1e8"],["/tags/网址整理/index.html","27588330a6c6734d251b9ef066bc33ed"],["/tags/航模/index.html","267a3b63a8507cc821a92d0d28f22b78"],["/tags/芯片/index.html","89003a8882a20296356700b29bbdcf3e"],["/tags/蓝牙/index.html","78b3049f4e02b4ca0ce3548ca55bc088"],["/tags/蜂鸣器/index.html","661d8f9a1f383fef48184a948d58cf8b"],["/tags/论文搜集/index.html","a5b983458735c494626872ee45ab27b1"],["/tags/语言/index.html","b0febc888d8d5cda3e1a4258ac2f9d6b"],["/tags/课内知识/index.html","9d07f457cea42963e15c14377df2c4c7"],["/tags/贝叶斯/index.html","797a87df829c250e22608ecedf6672f9"],["/tags/超声波/index.html","cd71353ef9317a64e787cfe647a374a4"],["/tags/软件/index.html","16bf1003ad792d3a3d1868356f32c391"],["/tags/输入法/index.html","f5c4512712784258cfa6759d18c63a80"],["/tags/运放/index.html","afccc810252e8c9816c2a2b54e922397"],["/tags/选型/index.html","9e648f1809872e5250670e10a2ff2248"],["/tags/通信/index.html","4756ef5207c7af7187c2dcf34a3a0ea5"],["/tags/钢琴/index.html","17c39d94504712f06d20587bb485283d"],["/tags/键盘/index.html","36e0fb8f5ca03edb7ddb71db5daeede9"],["/tags/陀螺仪/index.html","a9434e7cebefc2593eb6ef9b9844897d"],["/tear/index.html","a91ef6fbec2c70a0c418fbdd69034d33"],["/tear/index1.html","0534f63855d9843219089660411e1b94"],["/undefined/一下都是0/index.html","2dd248ae5c32ec7da1d5d700d71c1a41"],["/work/CV/【INN】积分网络/index.html","74b32beb744910d0ba127f0bc4e4d061"],["/work/CV/【JIIF】多光谱融合/index.html","7ac80bf0fac44ba43cc69cc99e03a6e7"],["/work/CV/【LD】大模型做pansharpening/index.html","b8550892a2190dcb8040a48ca0d7bbcc"],["/work/mine/电脑外接摇杆/index.html","0771f555a8cdd1f524508aca5ef63023"],["/work/nerf/【nerf】Block-NeRF笔记/1667118074452.png","221e63aa60efa77dca50740ce9b88380"],["/work/nerf/【nerf】Block-NeRF笔记/1667118457009.png","5c1577c940dd443631045f45787e487d"],["/work/nerf/【nerf】Block-NeRF笔记/1667226872521.png","ec7a6051752cb193ae983fb81d135fce"],["/work/nerf/【nerf】Block-NeRF笔记/1667264387582.png","57b13f83c9dfd506e6ccb81743f74963"],["/work/nerf/【nerf】Block-NeRF笔记/1667265226170.png","600b87f6ea78e46e19929200a8190875"],["/work/nerf/【nerf】Block-NeRF笔记/1667292838757.png","f9c6a5975d54d8b975e9de23dc891c00"],["/work/nerf/【nerf】Block-NeRF笔记/1667293450480.png","57c9efd9a2a4ae995517991ff7abdf32"],["/work/nerf/【nerf】Block-NeRF笔记/index.html","dec044d8a03539877408392ae49015e2"],["/work/nerf/【nerf】Point-NeRF笔记/index.html","4ddad77e66c31577e711d9a9273a8f02"],["/work/nerf/【nerf】nerf-pytorch/index.html","e3a893979ada32bdb97e94a1657a8414"],["/work/nerf/【nerf】最新阅读记录/index.html","d9456bed631eeeb4ba0b1952e09b236e"],["/work/nerf/【nerf】汇总笔记/index.html","d982da31b1d739abf5f115a7f9384b88"],["/work/nerf/【nerf】记录/index.html","dc9b87b9c7f2bdc941a6e0818a951101"],["/work/python/文件内容检索/index.html","d9cfed627ad211611679fb971f0d4a17"],["/work/python/游戏AI/index.html","08b87a1bfef2b9ca3e1b672f5ec73599"],["/work/python/网速显示助手/index.html","5f1d5ac4481761c39243c4d79688b143"],["/work/python/羊了个羊自动化/index.html","4fc991809c11e60b8cc34a822575a529"],["/work/python/蓝牙调试助手/index.html","213e45ec8aaf973d89237025bcbc910f"],["/work/【生涯规划】保研/index.html","1d257a3b5dbd6c4fc7811b67932d9ba4"],["/work/【生涯规划】文书/index.html","1df8fa3ebc16ee3fbf90eda6c7249b37"],["/work/前端/【前端】记录/index.html","245af06f4c8d320cc6103f019e50cfed"],["/work/前端/【博客】记录/index.html","52e6a6848fa5dc23158f46040d2baed7"],["/work/嵌入式项目/bard/【bard】Linux迷你电脑/index.html","f1b397018377519d69f52043ee62a351"],["/work/嵌入式项目/【usb-hub】记录/index.html","04d1899dc642c1f50ea6a37d4e9fdcca"],["/work/嵌入式项目/【加热台】记录/index.html","6dcd8ccfe071483fca298f3ca8a5c08f"],["/work/嵌入式项目/【四旋翼飞行器】记录/index.html","4b9a43298fbc51ad90fd47fcbd9428d4"],["/work/嵌入式项目/【生日贺卡板】记录/index.html","66bab8fc65fc114a849826d730ae6128"],["/work/嵌入式项目/【祖传板子】记录/index.html","26d42cacd4488c0982b071631f432e1f"],["/work/嵌入式项目/【自制无刷电调】原理/index.html","0d753af596e743d7d7e20d7ce03eeab8"],["/work/嵌入式项目/【航模】记录/index.html","94b87b1642d7b05758e70f0f3f2100a3"],["/work/忆阻器/【忆阻器】python平衡车/index.html","051eb19ce1ec9b923f715789c1fad2f1"],["/work/忆阻器/【忆阻器】算法部分/index.html","d5018b269cf767c5b7de0824be8a1876"],["/work/忆阻器/【忆阻器】记录/index.html","eb5e4fe37fd83bbc3f730fb228e3c3ee"],["/work/玩别人的开源项目/尝试过的开源项目/index.html","33e0785f3731fec637b2aaa373340b04"],["/work/生涯规划/index.html","f4850db7c23fd35f2d18a5bb2a7cbaec"]];
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
