/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","5b555b3ca355f5d476d08cc725c86df9"],["/archives/2022/09/index.html","6c4b53f69acdc019edb88ea36c38af2f"],["/archives/2022/09/page/2/index.html","e5063f5d2f620085a5fd7c6220258d91"],["/archives/2022/10/index.html","99ab02df0db9c72dba93bd49fbb35d0e"],["/archives/2022/10/page/2/index.html","334da2f9e6b5e3bcaf0ca84aae56c7ac"],["/archives/2022/11/index.html","8de896d422ba3ec2a13dca334e5dd12f"],["/archives/2022/11/page/2/index.html","17e4fa07c5be6da6aeb5906bcc6e36d0"],["/archives/2022/12/index.html","ce2c501b618929200af866d195caad5f"],["/archives/2022/12/page/2/index.html","c4869a6688c841a5affb947a6060ea2d"],["/archives/2022/12/page/3/index.html","abcb7423694fdfd9a09063bd509158c7"],["/archives/2022/12/page/4/index.html","220bad0127fc47ee3e4124bfd716b6e9"],["/archives/2022/index.html","e703e259da30a748a0fe50be1f6f94de"],["/archives/2022/page/2/index.html","a0593ddf18b7644ed66091cdc5a85558"],["/archives/2022/page/3/index.html","c634a24f913ea0d14d9f7abf9b2aed66"],["/archives/2022/page/4/index.html","adedb7220cfe2f5a9de790eed718d953"],["/archives/2022/page/5/index.html","1f8ff4245152f8add28afd23ddba0211"],["/archives/2022/page/6/index.html","177fedf38a95faf75da0901944d52b94"],["/archives/2022/page/7/index.html","7f9574ed2c200c0c2c3a2ef2858d92ce"],["/archives/2022/page/8/index.html","15eaaf06b022843d06bc4dd9789ce394"],["/archives/2022/page/9/index.html","85ff2276f1c872960a91d98fa227c9c4"],["/archives/2023/01/index.html","b6b254c7dbee160757ab5673940cf989"],["/archives/2023/01/page/2/index.html","52c7ccf8b1a89d3f2be18ef9146d9182"],["/archives/2023/01/page/3/index.html","390d8cc7aff7065d22023b7d7c3d2a86"],["/archives/2023/01/page/4/index.html","2ba76d5782f8588ba72ed09a3a197b11"],["/archives/2023/02/index.html","7f073129e99406d02ee9d505efd506dc"],["/archives/2023/03/index.html","e87d7f5e409077a9e08a2e2054495941"],["/archives/2023/04/index.html","59e06b74d62eed2f90ba5dcb3f7c6c2a"],["/archives/2023/05/index.html","949dc7bb2eaae7933fb75d175abdc04b"],["/archives/2023/06/index.html","c741a70eb23d76ccdfcaf909ef98eab4"],["/archives/2023/07/index.html","d1ce146128efa57c82456c44685129d4"],["/archives/2023/08/index.html","f7986c4f72bb08e40d79a11508049c4e"],["/archives/2023/08/page/2/index.html","01250cc2a1ab3813fb945c65dbea9fd0"],["/archives/2023/09/index.html","32b33abb94ce04c822dee1a260bdda84"],["/archives/2023/index.html","9e3b0c1262441920cb5eced49a019e3c"],["/archives/2023/page/2/index.html","9f1d68d29ac5c10a6d8827a31a29dbcf"],["/archives/2023/page/3/index.html","9a02c9b4821f7497f8e2dccf98599c4d"],["/archives/2023/page/4/index.html","f382dd8461a92dd7d3cea44352ba7eb8"],["/archives/2023/page/5/index.html","909570b873d987cbe524b155b5d227de"],["/archives/2023/page/6/index.html","ce3a3d7f5adbb37c0f759c86879c3180"],["/archives/2023/page/7/index.html","18ad479424caa5494d5c3fd21f9ce689"],["/archives/2023/page/8/index.html","b84780b4f84094a10ece7049b151ac96"],["/archives/index.html","7ecb3bd1955d0a92c8d2af409d466f41"],["/archives/page/10/index.html","7ff387afd1e76e2c7be46b9969a92337"],["/archives/page/11/index.html","dbe407aa4adf3df360590b404abb036a"],["/archives/page/12/index.html","2e9d847336c1dfd622bca5eb329e0970"],["/archives/page/13/index.html","86c7f4c7484ac701c33b71504f860800"],["/archives/page/14/index.html","fcd332c411883b7ef688ffe9a09df99c"],["/archives/page/15/index.html","24d9492dc34df2afa20bbb0acf9e556d"],["/archives/page/16/index.html","9d6d5ed7d6ab40765986649bdc695ddd"],["/archives/page/2/index.html","3358b7b4072efb80edce92d56a4b7e9e"],["/archives/page/3/index.html","ee1e16ba9ccab1b47fe96b88009e7b06"],["/archives/page/4/index.html","c42f844ae6f10f58a7d1273e867f3237"],["/archives/page/5/index.html","cecb86724ae0918140c58b3fc06210ae"],["/archives/page/6/index.html","468c4bb7a18e89d90fec70646594060f"],["/archives/page/7/index.html","91fde3067f5ec5523c04a4ca562f492c"],["/archives/page/8/index.html","c5a30ff1c086aaefda766eb798c08b30"],["/archives/page/9/index.html","7829f736d014398f3fbccccd6f4c253b"],["/baidu_verify_code-ZFSCabM1PJ.html","3385a1bf977f171e5ffdae075b9ccd8d"],["/css/main.css","d4ec0a385b5c262782ad1c643c11acc4"],["/css/spoiler.css","eb373af0627ede298867ffc0045da62e"],["/failed/【硬件知识】vco压控振荡器.html","e7d6b06b2de158c38047667d8eebe020"],["/failed/【硬件知识】vco压控振荡器/1665803607390.png","3df26768c0d97b3acbb64c7f4738f15c"],["/failed/【硬件知识】vco压控振荡器/1665803663941.png","38d29c573fc0aab159543ee6f3d6b31d"],["/failed/【硬件知识】vco压控振荡器/1665803862765.png","f7e2165483ca1f224fc47019c9d85839"],["/failed/【硬件知识】vco压控振荡器/1665803865723.png","3da7b08b88d8795e53d03a47e1926277"],["/failed/【硬件知识】vco压控振荡器/1665803871404.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/1665803883747.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/clip_image001.gif","ba898c600ecfdb213d2223a0f783c808"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803844893.gif","fb05fad8f7ca3e4d9e40000a9ab1dc09"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803856973.gif","e1a4cd1747beecc7d92124979531824c"],["/failed/【硬件知识】vco压控振荡器/clip_image002.gif","0c0f42f02d474126082016d250804bc4"],["/failed/【硬件知识】vco压控振荡器/clip_image003.gif","1f489bb3e02d4993cdd501f7ec773812"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803844893.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803856973.gif","09cde39109369f9185d1cf128c6d7c2d"],["/failed/【硬件知识】vco压控振荡器/clip_image004.gif","32873c471ff1058abf9d6d09ca5e45f0"],["/failed/【硬件知识】vco压控振荡器/clip_image005.jpg","ea2dddfe9b1da4f406ee36b37c99e72e"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803844893.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803856973.gif","b0138096b0fc7682435ad07aeaf159ce"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803982819.gif","6540947f9843ab822d3e8eeb7ef621e6"],["/failed/【硬件知识】vco压控振荡器/clip_image006.gif","6290aa2f8360b2a4f05e4c09e4d6bc80"],["/failed/【硬件知识】vco压控振荡器/clip_image008-1665803856973.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image008.gif","113b77d852979982495a775ea4d973d1"],["/failed/【硬件知识】vco压控振荡器/clip_image008.jpg","aad87f9838e93808a0caed1ece93ffac"],["/failed/【硬件知识】vco压控振荡器/clip_image009.gif","fd6cf84a1333733613c80d5599c0fbdb"],["/failed/【硬件知识】vco压控振荡器/clip_image010.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image011.jpg","fa6d15386072d8a691d18f9c3a53b426"],["/failed/【硬件知识】vco压控振荡器/clip_image013.jpg","cea0cb9334e0d5f1b84beb2fcd8b1245"],["/failed/【硬件知识】vco压控振荡器/clip_image015.jpg","660345ebf2132d1bcdd9a7455529093a"],["/failed/【硬件知识】vco压控振荡器/clip_image017.jpg","29517d76c214adc17343771d2d804679"],["/google41a28d5f2878fa02.html","3d6d8a75a079dcd20f85287e7fef82cb"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/tou.png","578463708d7de56a1c4e6331831b3e2e"],["/index.html","eefdd2abc5d2bb95bd23e0fadb6c48ba"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/code-unfold.js","e079f1fdb88a9edcd745220494218e88"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","97606f901b6e488587ad5c49aa367604"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/learning/开关电源/【开关电源】学习1——buck/1663506637120.png","8e50e1a9a14c0174f21513f95808f075"],["/learning/开关电源/【开关电源】学习1——buck/index.html","9ec7d0a7ba00540019335e038390a51c"],["/learning/开关电源/【开关电源】学习2——boost/index.html","4bc1ba4c45e72acc18c434568e5b01cf"],["/learning/开关电源/【开关电源】学习3——VMC反馈/index.html","d27060cea76800bcbbcb294f37c99be7"],["/learning/开关电源/【开关电源】学习3——buck-boost/index.html","311c0a955df6e48101b149f2873ec55d"],["/learning/开关电源/【开关电源】理解/1663634083260.png","7b1a889ee96c83e170023666681c9131"],["/learning/开关电源/【开关电源】理解/index.html","715a3b88f0b594798984392b1f98deac"],["/learning/开关电源/【开关电源】进阶1——稳定性判断/index.html","a9c76f453cb14f51149936a805a388a6"],["/learning/开关电源/【开关电源】选型和使用/index.html","1afd4ccb0eb22be35fc88cfbb6d716ed"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/library/CV/【CV】基础/index.html","740cdf492b0498e3ac5c6e748081d826"],["/library/CV/【CV】数据集/index.html","a7fa43446f212d346ed0d7f7078cd74c"],["/library/CV/【CV】经典论文/index.html","1e4ca46ec81522975464c8435c89aa78"],["/library/CV/【Transformer】attention基础结构/index.html","62dec2ae854d7d4bfc8df70bce7f2816"],["/library/frontend/【adb】电脑连接控制手机/index.html","e8c29e8f45cc475cf89fbe8c9c7e2983"],["/library/frontend/【app inventor】拖动滑块写手机app/index.html","0e98b4df9082c72ee5ff85d0646cc8f1"],["/library/frontend/【auto.js】手机自动化控制/index.html","800e3e78e0d00825a49e438483db6cbc"],["/library/frontend/【hexo】博客部署/index.html","879f3a593a3334de5c81dd1a991df73d"],["/library/frontend/【markdown】编写文档/index.html","c38addcc59e0aa00d7296fd44d2643ea"],["/library/frontend/【vue】搭建网页/index.html","53573b23574fd1167cd0db5b1ce9f59e"],["/library/inte/windows的linux子系统wsl/index.html","ea9784f80d1ffb49fc9be89b041baee8"],["/library/inte/【css】学习/index.html","35be5bd0df6bad499aebf0396c06e620"],["/library/inte/【latex】学习/index.html","e06a019e2a217e3f97643570c3cbdc37"],["/library/inte/【钢琴】织体类型/index.html","8fbcb62d811e6301f0cf7787290d36dc"],["/library/inte/网盘挂载Alist+RaiDrive/index.html","44a1ca6aca1bfcf3d8dd341691f1f9b5"],["/library/math/【math】傅里叶变换/index.html","e339c0e0833d2e316d50b5be8bb4f673"],["/library/math/【math】高斯积分(Gaussian Quadrature)/index.html","f2445ddf1885f8431a068c828170ef9a"],["/library/math/线性规划和整数规划/index.html","b04f12121b814c699424ae2241ea1cba"],["/library/python/【CV2】图像处理/index.html","3afc15f0e7a0f6ab42f58638aefb9936"],["/library/python/【itertools】计算排列组合/index.html","6b2680476b8a76af5e4df45458092e43"],["/library/python/【matplotlib】数据可视化/index.html","187a087116806fefcd570c8804ea7a20"],["/library/python/【nuitka】打包python为exe/index.html","770a4f96852512a290bd242b6bec9028"],["/library/python/【numpy】数据处理/index.html","142a42adcddc74b2a0dea29d0cce14a1"],["/library/python/【pandas】数据处理/index.html","ae6659897fa8f46678e34162006cf6eb"],["/library/python/【pip】【conda】常用指令/index.html","f3408943b24dcc334e09e1c1248bd88e"],["/library/python/【psutil】检测电脑网速等/index.html","9354453ed13fbc8647cd191b934eac74"],["/library/python/【pyautogui】控制键鼠/index.html","ca02725c4f8dcc32d68e4ad25d1764bb"],["/library/python/【pybluez】python控制PC蓝牙/index.html","e011ee42f5bb53e3ef259a850a4f0690"],["/library/python/【pygame】2D游戏/index.html","71a61326c989fc9c7abfef109d4b23b2"],["/library/python/【pyinstaller】打包python为exe/index.html","5c9641d4745f0b7fe62eadf79a416e2a"],["/library/python/【pyqt】编写可视化界面/index.html","7c3a0851cfe6ffcacf4f705d9d8397a1"],["/library/python/【pyserial】读取串口/index.html","079abf51fe05f0d24804feb33a619164"],["/library/python/【python】基础语法/index.html","3a4ddb49b4fd478c9d15c425991500b4"],["/library/python/【python】有趣外部库/index.html","e643c12fcb20636b01b4b7c0946b5333"],["/library/python/【python基础】常用内部库/index.html","a0bd7949d46d8ff622ca45ea3dd16443"],["/library/python/【python常用】常用库的pip安装/index.html","7dfceab0dff84b153f2aeb66791eb56d"],["/library/python/【request】网络请求/index.html","54c50432cf0e243f5b8d316451e9b3af"],["/library/python/【timeit】获取时间/index.html","0babdb3a64ffb12c74f0eebc9eee8e07"],["/library/python/【torch】机器学习库/index.html","59556d68f47cbe040cb524d6d64937e9"],["/library/python/【tqdm】显示进度条/index.html","94591d24f3f30204b2f917d56704d773"],["/library/python/【ursina】3D游戏/index.html","7911742a1211bb05ea41681b63b430c0"],["/library/python/【win32gui】控制win系统/index.html","fc80feffdc10903a453417458bafe689"],["/library/嵌入式/【git】学习/index.html","6930213ddaa7dbffb882607118bfbb77"],["/library/嵌入式/【linux】常用指令/index.html","4546d0d2835d4095452c901af5f59b7e"],["/library/嵌入式/其他/PCB作画规则/index.html","9f113403fdb626794d4ea66c56327b7a"],["/library/嵌入式/其他/犀牛建模/index.html","7ca66084549aeb3f8c55e559a40d3677"],["/library/嵌入式/模块/【模块】GPS模块/index.html","1fefe8de3c1aa1810df251b5ed9e9e71"],["/library/嵌入式/模块/【模块】OLED/index.html","e99055ac4a1b68ae95551fac52fba167"],["/library/嵌入式/模块/【模块】amg8833/index.html","c9d835e9d2a84bddd638cd36e6f54a22"],["/library/嵌入式/模块/【模块】as5600/index.html","66f73c7c6f044b48abcba5536415d1dd"],["/library/嵌入式/模块/【模块】数码管/index.html","defcae0c679dfaa299c7d7d2a6d241ae"],["/library/嵌入式/模块/【模块】电容触摸按键/index.html","dc19b1da643afc1a7289ecae1670b1ca"],["/library/嵌入式/模块/【模块】蓝牙/index.html","b5aa79959ff42f9dc6878ca8750177d9"],["/library/嵌入式/模块/【模块】蜂鸣器/index.html","00c5ebcecccaeaff4a70816ac746d825"],["/library/嵌入式/模块/【模块】超声波测距/index.html","42c851c246463bda3ba4d868b6882b77"],["/library/嵌入式/模块/【模块】陀螺仪/index.html","479eaa3a5addcfd9d38368f05d24463c"],["/library/嵌入式/硬件/【硬件知识】H桥驱动/index.html","7e117f34e4771e5a62278ec3b0bf5213"],["/library/嵌入式/硬件/【硬件知识】三极管/index.html","84d44c5e42270eb58d5f1f2f3b8ff96c"],["/library/嵌入式/硬件/【硬件知识】无刷电机和电调/index.html","3d36cc2a47cbeb207f7e16bbef9e78b2"],["/library/嵌入式/硬件/【硬件知识】模拟电路pwm/index.html","ae08b393df3489db8aed13e60a7feb25"],["/library/嵌入式/硬件/【硬件知识】芯片熟悉/index.html","e71ca7d14ff7919db3eaa4976ab7ad8c"],["/library/嵌入式/硬件/【硬件知识】运放运算电路/index.html","74f90875ebc8570d4b178faa80759e8b"],["/library/嵌入式/硬件/【硬件知识】选型/index.html","f4740c1b92f6496a9ead35e99229a48f"],["/library/嵌入式/积累/【嵌入式积累】基础知识/index.html","a41b76a51da45d89bf6a24f266a85e83"],["/library/嵌入式/积累/【嵌入式积累】常用官网/index.html","5f67282557a645263ce52b0e14909480"],["/library/嵌入式/积累/【嵌入式积累】控制入门/index.html","f08cd351ca0269464fb7133ccf4e3cdf"],["/library/嵌入式/积累/【嵌入式积累】阅读寄存器手册/index.html","10d5185dfd84cac8d075606985d428e1"],["/library/嵌入式/算法/【控制算法】学习/index.html","f355451a1c0c6555e17aebdbe0cae4ba"],["/library/嵌入式/算法/【滤波算法】学习/index.html","a253acc76ed67a010b855c71d4897b7f"],["/library/嵌入式/语言/【python】进阶总结/index.html","5b2238f1e35de8e583d444b2b751ee81"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】ADC采样/index.html","5b381cbb7a13ad0e0f78f240d4cbedf3"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】USB/index.html","5c4ae94fcbe33d0d56a16a347c7d2a52"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】i2c通信（mpu6050）/index.html","56b287aa80715b41d63a0401ffe4331f"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】pwm波/index.html","4bc9d5316971618470e57f087ef20862"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】spi通信（nrf24l01）/index.html","9c47930c807be7364fa5b688d93ac8c8"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】串口通信/index.html","4804c405ccc13b20ca9329fa1cb09c5e"],["/library/嵌入式/软件/开发板上手/【V831】开发板上手/index.html","256e05cde02748d30b51a4a9e06f1fbe"],["/library/嵌入式/软件/开发板上手/【k210】开发板上手/index.html","7657a69171f60658e117669ec7fea92c"],["/library/快捷键和常用指令/【cmd】常用指令/index.html","f69b1cbfba466fbe70bb5e618b24b8f1"],["/library/快捷键和常用指令/【pycharm】快捷键/index.html","c98eee4cf48edb4a0d7f957197cdfb1c"],["/library/快捷键和常用指令/【win】快捷键/index.html","bb44f94632b7a88bcef0296341ba43cc"],["/library/快捷键和常用指令/免费下载视频/index.html","29cd0b58d4176e4ffe719de360b60cfa"],["/library/深度学习/【深度学习】基础知识：×NN都有些啥/index.html","d778f803ddd6a8c9bdfd41460615d924"],["/library/深度学习/代码/【numpy】语法基础/index.html","df2d51e6a5ae078aee70672245cb61ed"],["/library/深度学习/代码/【torch】语法基础/index.html","1a4a06bd06943dee9cef1b720448751f"],["/library/深度学习/工具/【深度学习工具】onnx学习/index.html","7da9fef66eeff5fdebdba5b8928634ba"],["/library/深度学习/工具/【深度学习工具】tensorboard学习/index.html","e28f3fdfeafd7128e1a5ce6441feb5e7"],["/library/深度学习/算法/【算法】贝叶斯优化/index.html","0ecf49514106ec18a61aae4461406bd2"],["/library/经验积累/【经验积累】网址整理/index.html","0e3d5e9c6c46b6db4fd1a2059cd74c66"],["/library/经验积累/【经验积累】论文搜集/index.html","853338bd192d4b841733e5163980b6a2"],["/library/经验积累/大学毕业选择/index.html","1365585126babcde4bf1261087204471"],["/library/课内知识/【FPGA】仿真和烧录/index.html","9a5107bc80bbd7417de974442ff97d9e"],["/library/课内知识/【matlab】学习/index.html","91af04dfacffb1799d983140014e1292"],["/library/课内知识/【verilog】学习/index.html","efef31b3023dd687f556a2cba746da42"],["/library/课内知识/【常用数学公式】总结/index.html","8de3bb6f51d0ecaed36edae546df4f65"],["/little/name/index.html","bd21cb5fdc1ce3b9429b50087dc78a2c"],["/little/留学小记/index.html","41a681e18ce1e12cb4d25d74cc762eaa"],["/mylibrary/css/float.css","a7893851cfc8dabd525c7f53e3b4b095"],["/mylibrary/css/hide.css","cd3fe68a54444523c22f1e939f990e1c"],["/mylibrary/css/load.css","ca16c1ad494ef85b176a101c1c12afd8"],["/mylibrary/css/neon.css","3f3e5abe1783a9d15c1464dc419749cc"],["/mylibrary/css/round.css","53fe57ed5d40f82397de8db838ff64d6"],["/mylibrary/css/shake.css","8b601d5da4f01c2e1f2862df27ace910"],["/mylibrary/css/shiny.css","a7a5d33849a83a296b33a2706570bcd0"],["/mylibrary/index.html","b06bd09d46cf6a7778cecf4401752976"],["/mypage/css/style.css","aa20a5fd3b273024267df9c3b0a8c315"],["/mypage/font/LigatureSymbols-2.05.eot","5b46f67c079e0599f89aae807cdad560"],["/mypage/font/LigatureSymbols-2.05.svg","f4be952f02a00bd7b464568304b12842"],["/mypage/font/LigatureSymbols-2.05.ttf","48ae0b91a8d6e1feb2c15961a338dad8"],["/mypage/font/LigatureSymbols-2.05.woff","f974884f441019724c351f85478b3938"],["/mypage/font/README.html","952ca4fe7ad3ee8503f01754b5047720"],["/mypage/index.html","5ecc024ad4deed973b258aa45c59facc"],["/others/Write-blog-using-markdown/index.html","bfe4ff1a70a8748efbd545d3ec330941"],["/others/chatgpt/index.html","92cf7354210f52c193382a02f2da934f"],["/others/古诗/古诗/index.html","1b5231d1779a42b355a54f2994a6e621"],["/others/能力年表/index.html","c73edf22d57cb1cfeaecd8e202a54738"],["/page/10/index.html","e5687e36ae6534c41d94b6eafd4452b0"],["/page/11/index.html","c1a2c728e5ae6e65faa7a65da10aa0d6"],["/page/12/index.html","205a3093fea141abbca011baf865fe4b"],["/page/13/index.html","7f6d74a0460a3e12b1a0eba2b0c9ea59"],["/page/14/index.html","bfcee2aa87871884061fd8dd996f723c"],["/page/15/index.html","2aa4b36acfbfddfc5738e8da95e8eb86"],["/page/16/index.html","5577b812f982cd847e5513f3cfb8342f"],["/page/2/index.html","857fc15843af966b3d7a13d02a4db0fd"],["/page/3/index.html","7aaa3bbf876f6f911309649d8c523e9a"],["/page/4/index.html","e09d0c5226e7be6dc991961fb0fe180c"],["/page/5/index.html","324b0a5b670fc3d55f1a5bd32717fd9a"],["/page/6/index.html","ebeac86dc7d57a86747d3d2241a2742a"],["/page/7/index.html","2d9aeee7d8d394519698f4d988949398"],["/page/8/index.html","9a89e73c271f1a1c0e1d06c60010d340"],["/page/9/index.html","fb4c9fda9b5ca68bdf57bad1e0280c94"],["/solved/chatgpt您所在的地区无法访问/index.html","afb2e148f6e026fe671f98d1fefd5c2e"],["/solved/github的github.io项目打不开/index.html","07b9a360e433dbc5ca9b51bc6a4f4b18"],["/solved/hexo部署报错spawn failed/index.html","a47da8db04fddf36c5a0e4b16fddb846"],["/solved/modelsim的-novopt优化相关报错/index.html","4c1164a6b7b6723371b5fc27418af85b"],["/solved/npm install 报错/index.html","0e45e3668c47c31ff6231ff971c63c01"],["/solved/pycharm修改快捷键/index.html","6020b4ce8d25395b55d24413fca73a76"],["/solved/pycharm内无法打开cmd/index.html","3d0c1fc3199e1480ab2766ddeb9f7681"],["/solved/worked/chatgpt微信机器人/index.html","b5d5e89794391e752d838eec8f53ed9b"],["/solved/从regedit改变键盘映射关系/index.html","490929b5fcc3d0b51df7e60f0546f7be"],["/solved/双拼输入法/index.html","e5f8f2967823c238e7133d2461504b3e"],["/solved/右键新建菜单管理/index.html","67e0f51b95be35b8b64552edd8f663e4"],["/solved/执行make menuconfig时报错/index.html","3340d95c50cb2e24a77cda0b46224d1e"],["/solved/报错binsh 1 bc not found/index.html","120c587487c99b26ee8e4531db41cef4"],["/solved/报错binsh 1 cc not found/index.html","05d2d23a77f6c9a6a46a22ca1498b783"],["/solved/报错binsh python not found/index.html","5426b6eec7950f777ebea0b1c7e0bb8a"],["/solved/未整理/index.html","f67ab1627781bc8c845267e265a1aefd"],["/solved/树莓派域名解析暂时失败/index.html","385147bae5f982508593d48cd6d7c32d"],["/solved/树莓派配置python环境/index.html","6d8482fb1d92c21d3f3de4af24492cb9"],["/solved/环境变量配置理解/index.html","960e3a3c3ddde81b4f570d03531d26a4"],["/solved/设置软件开机自启动/index.html","5e9e4a7cdc8c211a3d0c0f56078ad864"],["/sw-register.js","dbea73d6bee004cd17e9cae7be24f71d"],["/tags/ADC采样/index.html","65d910a81d4868fa01680725174af594"],["/tags/Block-NeRF/index.html","e34ccff07eeee2d6e728b637fab5f67b"],["/tags/CV/index.html","57252cbac3cbe5c63f7119ded8c758ad"],["/tags/FPGA/index.html","6d2e8b3244ad318319e493c5ebed6f3c"],["/tags/GPS/index.html","116b4a186c63d7b094cc66368e8ee599"],["/tags/HAL库/index.html","914352cbf93ef507a223ea7531114b23"],["/tags/H桥/index.html","863edaaf40d9d9e84b55d4b273503ae3"],["/tags/INN/index.html","0623a3a13c3c287cd3384e6fdc233dd7"],["/tags/JIIF/index.html","ce1c75999183dd07628463e61d5ebcba"],["/tags/OLED/index.html","ae670f78055961612115ea89548a7339"],["/tags/Point-NeRF/index.html","ea061841e0128afee05e3ff44c99d892"],["/tags/USB/index.html","e25a07803dcfba1c9279dbe8951306da"],["/tags/V831/index.html","7fc6adaf8aeb9b49086887f7720971a7"],["/tags/adb/index.html","29e378b444263e49f4f68562a1677dfc"],["/tags/amg8833/index.html","f1e33972a8cca141e995a46d17eeb0fd"],["/tags/auto-js/index.html","82b8df2e0a8e44e1dd29715cb8450e01"],["/tags/bard/index.html","e274bb93e68488eaf683b2f05a4c840a"],["/tags/chatgpt/index.html","0bfaf9d9212387ec581b2d8af087bad2"],["/tags/cmd/index.html","0da2f1d47b5005c8e152e870f2c99239"],["/tags/conda/index.html","424664c1e87a3f61441223200e7ddef1"],["/tags/css/index.html","705c27ed8a76682e5229199fde4f2555"],["/tags/frontend/index.html","224bf5f7587161a0473059c230310d2c"],["/tags/git/index.html","a29d2dcb55bec16fd135425895e7dabc"],["/tags/github/index.html","0078350ee76cd1e340be0b4a4b9b848f"],["/tags/hexo/index.html","63a5c505a539f91cfc2c13675c82fdda"],["/tags/i2c/index.html","12a61ec6544e966b5c6da03ca061955e"],["/tags/index.html","e761bd86b5e9ed8a65cb766674e29a23"],["/tags/inte/index.html","ed25051c59db6ff2ba0654384c000b5a"],["/tags/k210/index.html","6290d2cd738d84fc6c8defe8a6bbf0a7"],["/tags/learning/index.html","c0ef7446b57691dd706167ae0f59e46d"],["/tags/library/index.html","1a63aee6bf8770dc945a93aaf19745bc"],["/tags/library/page/2/index.html","dab64d2f9c54a0ab9e36a74eebe8ed65"],["/tags/library/page/3/index.html","5488540e1e1a2122f6080848aad4693c"],["/tags/library/page/4/index.html","2a970fbee8a49179535be084d384176b"],["/tags/library/page/5/index.html","d7c196ee755bc22a4c84fa8e51424c2c"],["/tags/library/page/6/index.html","eec0ecaf1fc449f96b69cc5f1f5ea649"],["/tags/library/page/7/index.html","911304ac2322190063b3cb8beaaa14e2"],["/tags/library/page/8/index.html","a7a5b4994b7d36687f4877371aeaea77"],["/tags/library/page/9/index.html","866c1e7d8a7113dfe3f20684eb8586c3"],["/tags/like/index.html","5049b9340dfc571c542e5b1208e4061e"],["/tags/linux/index.html","8e19f094d73dd9151554b2372a4db5b3"],["/tags/little/index.html","08e73653cba393b9f553b63e040924e0"],["/tags/make/index.html","37d2ac027924a526b7f6ace690f49237"],["/tags/math/index.html","57f36a1a0c50943d69ba0fc10243f80f"],["/tags/matlab/index.html","5a97418e854c2c5987168a1ed699e43d"],["/tags/mine/index.html","9e27e9ab14e3d9e8a45acccbe5171033"],["/tags/modelsim/index.html","a90fce79805e699cd7ffbb00e5e5a595"],["/tags/nerf/index.html","4680994f34ae08cf5b207e9c67a7815e"],["/tags/nrf24l01/index.html","4cd61790255b5f06b4eac426f3e5a362"],["/tags/nuitka/index.html","b4c6627f06a6bd7fbd75584f792795a4"],["/tags/numpy/index.html","b24b6966788da89a191124797b5b8e2a"],["/tags/onnx/index.html","0c4c663876a08f2c8c6cce11097708cb"],["/tags/pcb/index.html","75ee7565fe8437fa9c89bd35858c1952"],["/tags/pip/index.html","016dc815ae652db83b22092914e893e1"],["/tags/psutil/index.html","a92d2f0eb5e89aeb991d9687e5292f1c"],["/tags/pyautogui/index.html","6a2e091a0b6161375951100822465c18"],["/tags/pybluez/index.html","30fc67b29770ff3e6f6f5f296428b8aa"],["/tags/pycharm/index.html","7dd78fd3519288d24ec90ef00cd2fe89"],["/tags/pyinstaller/index.html","d9a61eaeab3847b34e9e0485454107a8"],["/tags/pyqt/index.html","e11062397208cfca840aaeb3aaf3beca"],["/tags/pyserial/index.html","7267145ffa02b088c1ce0cb28f827be2"],["/tags/python/index.html","1a0c04331eea0da9b63d2ccff6b0aa39"],["/tags/python/page/2/index.html","cc1565f3cda8b0513e90da512593e2ea"],["/tags/python/page/3/index.html","48589b471415d82a82fda9732da882cb"],["/tags/python/page/4/index.html","fc798494bc1b28d6db019fb241361b20"],["/tags/regedit/index.html","77402b34c3c25c3056d24ba660ae3df6"],["/tags/solved/index.html","e111e26ebe2fe793cf0034d7c714375b"],["/tags/solved/page/2/index.html","c21e8724f4a3f53067c9f03e05fa439f"],["/tags/spi通信/index.html","6df0f0c28f637ce465d9fcb19200e520"],["/tags/stm/index.html","fe51775b8987149727e66e29f1f199da"],["/tags/stm32cubemx/index.html","f438005f43d1dea53ae315b86a5e09c1"],["/tags/tensorboard/index.html","d97effe5ae8202736cb009425a1d0969"],["/tags/torch/index.html","2239f79330c0a83a7801bc2f556af261"],["/tags/typora/index.html","94f67daf266883df20bff20e69baca1a"],["/tags/ubuntu/index.html","099db1507e6f865f4126b62610cf6941"],["/tags/verilog/index.html","048a3c5f872cb8213b4e9b567a707d26"],["/tags/vue/index.html","8105886a162289fb896ed19a089a85d0"],["/tags/win32gui/index.html","f442753d9ccf35485a0ff6676f315cf4"],["/tags/windows/index.html","5b379295662f77b0531962fd74cddefd"],["/tags/work/index.html","1ca07f28299db56f156e858489d9dc10"],["/tags/work/page/2/index.html","96c05fbfbe1298beea945c7f749d9333"],["/tags/work/page/3/index.html","e4ba33cb227e8bf021e92e67319184f1"],["/tags/work/page/4/index.html","29d9ef4c336bc1a231d904f12467b9d1"],["/tags/下载视频/index.html","de967f0c1cab238e3124fa618d6440ba"],["/tags/串口/index.html","4231481c051235ae0a42a3f78e5b4d87"],["/tags/代码/index.html","23862df153bc3deedd57ec23b7224e9d"],["/tags/全志F1C200s/index.html","56fff54c9d7e7fde965ee3378edee809"],["/tags/公式/index.html","f32fba68f7b905845cde69aed532663b"],["/tags/前端/index.html","b24758b7f1e26005b71f8129e075a4c2"],["/tags/博客/index.html","c738826f6a5014b89d67c8dbf22391a6"],["/tags/国产/index.html","e3ad2491a254c829d018611b5536496a"],["/tags/多光谱/index.html","ae619b209247f6435633f7c0f4199536"],["/tags/大学/index.html","107fd9e73d2198a4bbeb28725283fd28"],["/tags/嵌入式/index.html","b75922dffdce0ca0710d917678ed1e94"],["/tags/嵌入式/page/2/index.html","add0f5fb4a62ca4ef12f7306f8e922bd"],["/tags/嵌入式/page/3/index.html","dcf90d523b0882e59295a3c1ff2cbcc4"],["/tags/嵌入式/page/4/index.html","7e614377c0f5ce048aa10a1e190fee0c"],["/tags/嵌入式积累/index.html","c22f516b6e1ff79a185790e922040946"],["/tags/开关电源/index.html","9e4a08ef5e40ea683a228b117f29f2ba"],["/tags/开发板/index.html","32e8fe1b2a956782a8f956b30a061a46"],["/tags/开源/index.html","79cc191a3d8feb4363963622b9b39462"],["/tags/忆阻器/index.html","0aaa87a746f66937c4e4c5f82a130557"],["/tags/快捷键和常用指令/index.html","9ea4fd00919e80b12b824edf82265a4e"],["/tags/手机/index.html","fb14da5f94b1a5f9d7322b680f89361d"],["/tags/打包/index.html","0597b4d3142d89f36402c2a4995bdfd5"],["/tags/控制/index.html","690a77cc47bb38452a06d8accf841b05"],["/tags/数据处理/index.html","f2c76f98f6cedbb8bd4403ca936a071b"],["/tags/数码管/index.html","cff1562a402e7f2264db1181a6654630"],["/tags/整数规划/index.html","cf5418f7172ef5ff6b21e7b671613ac6"],["/tags/新加坡/index.html","7f21331bc88b23190650ef9b7cf7f865"],["/tags/机器学习/index.html","3bb11d0295753fbb912b310c6ddca438"],["/tags/机械加工/index.html","6789c547e3e5654a31e7f420ab1b22dc"],["/tags/树莓派/index.html","3139d70a5eff51f161e3ab14fe5fd5db"],["/tags/模块/index.html","c65bee25e22b948c552486852a2686bc"],["/tags/沁恒/index.html","f2b57abef5e9aaa426182d67dfb405bc"],["/tags/测距/index.html","8f16a86595846bbc0ec60a232e84c951"],["/tags/深度学习/index.html","104cb4416159468ee0f40e3d19451cd2"],["/tags/深度学习工具/index.html","e313ccd05a0f7cfcaa9272284ecdce3f"],["/tags/游戏/index.html","4050071500dbda1d90217888ca4d9a31"],["/tags/滤波/index.html","c86566f06efffa71421a828d43d4f607"],["/tags/理工方向/index.html","01b608ca7b7e752efda1a1a325dcbec3"],["/tags/电容触摸按键/index.html","053a79b8dd221a7d19797b533f780938"],["/tags/硬件/index.html","b8f2d15e24c92a80f19327e5683c0583"],["/tags/硬件知识/index.html","c0ec2d31b86e067f2f674a325c9f82b7"],["/tags/积累/index.html","2e808a50494fa6ec8327baeae8add8ac"],["/tags/算法/index.html","d5d79daedbe85bc4c1fffe8df0fa71bd"],["/tags/线性规划/index.html","5c26a8b353f815537d8dd3ed3cdaf080"],["/tags/经验积累/index.html","440871322ed92ca14754ec834f83667a"],["/tags/编码器/index.html","d8449175ba2b8d47ba0effcc37860a17"],["/tags/网址整理/index.html","1032d19827ad1c8f4fd6b4c7c213cff5"],["/tags/航模/index.html","a4d2ce1f4fe305246baca2c8db8d842f"],["/tags/芯片/index.html","9f869e99a59bbd690e1e59540d0fefa6"],["/tags/蓝牙/index.html","cacd8bd78324b1e7e60b26144cb72a7d"],["/tags/蜂鸣器/index.html","b40401951932cf63131aebc4aad8dc8d"],["/tags/论文搜集/index.html","39c1863b7b27650aa6fe618e32b74f17"],["/tags/语言/index.html","9e8b6c3290bf3d59087c442ba1d3239e"],["/tags/课内知识/index.html","4c7d5ab21d532892085c470e4bef179e"],["/tags/贝叶斯/index.html","7b3d951782763f616a751bc947233073"],["/tags/超声波/index.html","2017b9896f9733f438448adcfa1ada66"],["/tags/软件/index.html","7fd7692b1865dd1bfb0f7ca834b5c3ef"],["/tags/输入法/index.html","bf51d3c0b79bc411ca3c13d75436cc62"],["/tags/运放/index.html","2710c5b0aafc5728d275cfacc486c8cc"],["/tags/选型/index.html","26893b1c47fc5056b441923776c7ebe4"],["/tags/通信/index.html","ea9933ab7eca841c05baf76b5de29825"],["/tags/钢琴/index.html","e147bc53879cea2d14e66b8fbe635ef0"],["/tags/键盘/index.html","a9a98db2eece9c633e8222ca9d4c2877"],["/tags/陀螺仪/index.html","5088013ff57611622128581e432b609c"],["/tear/index.html","f313775d4579bc929b6bed3e1a370daa"],["/tear/index1.html","50f90d560ac0a2b2fb293c8cbdf07d65"],["/undefined/一下都是0/index.html","74eb047c0ba8fa731d4c774b0db4c676"],["/work/CV/【INN】积分网络/index.html","dbec558610e7efa916b7a474214e79a2"],["/work/CV/【IQA】图像评估/index.html","53fd18278ecb9ea9c198d5834d3c65fa"],["/work/CV/【JIIF】多光谱融合/index.html","a5d79583c146f1ce98d8f8a0dda06138"],["/work/mine/电脑外接摇杆/index.html","d2eef2a069192fb7c51b8e35ba370034"],["/work/nerf/【nerf】Block-NeRF笔记/1667118074452.png","221e63aa60efa77dca50740ce9b88380"],["/work/nerf/【nerf】Block-NeRF笔记/1667118457009.png","5c1577c940dd443631045f45787e487d"],["/work/nerf/【nerf】Block-NeRF笔记/1667226872521.png","ec7a6051752cb193ae983fb81d135fce"],["/work/nerf/【nerf】Block-NeRF笔记/1667264387582.png","57b13f83c9dfd506e6ccb81743f74963"],["/work/nerf/【nerf】Block-NeRF笔记/1667265226170.png","600b87f6ea78e46e19929200a8190875"],["/work/nerf/【nerf】Block-NeRF笔记/1667292838757.png","f9c6a5975d54d8b975e9de23dc891c00"],["/work/nerf/【nerf】Block-NeRF笔记/1667293450480.png","57c9efd9a2a4ae995517991ff7abdf32"],["/work/nerf/【nerf】Block-NeRF笔记/index.html","084505b4f8d3b69158751143af3c3fbd"],["/work/nerf/【nerf】Point-NeRF笔记/index.html","13551db2f65ea9892965f87a60c8e14a"],["/work/nerf/【nerf】nerf-pytorch/index.html","20b557b87758b00b73b652f671dfcbc9"],["/work/nerf/【nerf】最新阅读记录/index.html","34f599b7849ba6cea29b87d3496e5424"],["/work/nerf/【nerf】汇总笔记/index.html","88618a9a03d4c03e535a1ab7e783731e"],["/work/nerf/【nerf】记录/index.html","d23e4f2988d80f7b86af3ea2333b6a4e"],["/work/python/游戏AI/index.html","38eee6e2d165ceab4a02b68788174540"],["/work/python/窗口互联游戏/index.html","1274a74e8145476b104ce17a87e061cb"],["/work/python/网速显示助手/index.html","2e0dd028659f5082ffeff790795c954a"],["/work/python/羊了个羊自动化/index.html","844f93eb712390b3382e2ff3da25b8c5"],["/work/python/蓝牙调试助手/index.html","11052b265954b5466f78ed90df299719"],["/work/前端/【前端】记录/index.html","19275112ee0fd1693b1890993a1c8f6d"],["/work/前端/【博客】记录/index.html","a269f57fc0c125ee65f4f1d73c409a82"],["/work/嵌入式项目/bard/【bard】Linux迷你电脑/index.html","ae8a2efde929bb5e2134ff30558bb862"],["/work/嵌入式项目/【加热台】记录/index.html","71061d424d2cf33a5e604eb3373e1f22"],["/work/嵌入式项目/【四旋翼飞行器】记录/index.html","b77c5f79ffd2219be9e45d6e9189869e"],["/work/嵌入式项目/【沁恒】样品试用/index.html","9cc8cc954886490f3149bcdf7d186608"],["/work/嵌入式项目/【生日贺卡板】记录/index.html","abe3fccfa57d65b2edd8f313c7f8e8bb"],["/work/嵌入式项目/【祖传板子】记录/index.html","bed6805bcf090c4e8c460bee00890007"],["/work/嵌入式项目/【自制无刷电调】原理/index.html","79ba9e423d89c34faeaa713028d47fc7"],["/work/嵌入式项目/【航模】记录/index.html","28214a9e3377d34af80915a4152c6c04"],["/work/忆阻器/【忆阻器】python平衡车/index.html","22cb2acc0d7448b9badef025f4c5cd92"],["/work/忆阻器/【忆阻器】算法部分/index.html","ca0337f5e430164a8e47211dddd1f4cf"],["/work/忆阻器/【忆阻器】记录/index.html","4e222f0f2df19b85e64646ec9b1fc128"],["/work/玩别人的开源项目/大一尝试过的开源项目/index.html","a35528593941a3047f66d6e4f151c2b4"],["/work/生涯规划/index.html","75b7542791b057dac148a6d2db7c7e81"]];
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
