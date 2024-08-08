/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d8e99a3242d284b8526b9e986f4ff968"],["/archives/2022/09/index.html","fcd2323fe9485db9e47e7ce091cb344e"],["/archives/2022/09/page/2/index.html","4dc4936c395caf3dd7d9476d2de77838"],["/archives/2022/10/index.html","187c2426d1fc0434dc5b62a621c30712"],["/archives/2022/10/page/2/index.html","967c98ef8887e91e24260e54f0710b8d"],["/archives/2022/11/index.html","162d096fc051b884a26f4d075f3d7d19"],["/archives/2022/11/page/2/index.html","2bfea9bb1f1e8918d84da0350cf1d3b4"],["/archives/2022/12/index.html","ae24061f96b0e48fe8305952ab61cdb6"],["/archives/2022/12/page/2/index.html","f9c546d313442558dd02585b0dd4430d"],["/archives/2022/12/page/3/index.html","e0331d662ff816d9eb58b4f30851993f"],["/archives/2022/12/page/4/index.html","a62d31ffd1bca49e4a19357cdb0871fa"],["/archives/2022/index.html","8f80c2cd066860c36ce16c71622bc13d"],["/archives/2022/page/2/index.html","82da2ee7b80e46592555b86c4f32f68f"],["/archives/2022/page/3/index.html","de6a1aba5bd2eb7b9aeb066ba23592ff"],["/archives/2022/page/4/index.html","45d209f685b0e399849be9a87950200d"],["/archives/2022/page/5/index.html","62dd0ff5eff9a6addeaf307b0df3061c"],["/archives/2022/page/6/index.html","295f8354316170da9b4b5e2873532b1f"],["/archives/2022/page/7/index.html","dbaf2e826ac11b3294c369a3752945e4"],["/archives/2022/page/8/index.html","d784bc50ecf0a5d20b9dbad55f0c6e46"],["/archives/2022/page/9/index.html","6695513eecd1484836fd3dea6c3fbea6"],["/archives/2023/01/index.html","d644f572018ca3b89b23cac1ddf884b7"],["/archives/2023/01/page/2/index.html","7d703fe49efb0c0f1710a07238d9ec84"],["/archives/2023/01/page/3/index.html","c050e494e726d0b0a3b398e680ee3474"],["/archives/2023/02/index.html","0169c3e59ef2ba0929d0c7248dae34cf"],["/archives/2023/03/index.html","888ecebb4f94968889fdc1c1f7b704fe"],["/archives/2023/04/index.html","0f2f061d7bb224197547027d62eff5a9"],["/archives/2023/05/index.html","c84760bd0cf5a32e7ed776f4f3e3ffce"],["/archives/2023/06/index.html","a80949df34a890c5a8d2d68bd0706aa7"],["/archives/2023/07/index.html","41906ea5cb4fc801c22e63f4accdf663"],["/archives/2023/08/index.html","d3f6551fdee3c815591a7b4d00f08e77"],["/archives/2023/08/page/2/index.html","8fb58d59a57fcf31a61fcb4a78b7de1d"],["/archives/2023/09/index.html","f36b96031dccac98633c187e021eb7c9"],["/archives/2023/09/page/2/index.html","713394b916affc90946b0a35f6cc2288"],["/archives/2023/10/index.html","4af295349d7cfba7297b5b64ef66eb6f"],["/archives/2023/11/index.html","5bf0f32eaf432cf7395214235f8d9b39"],["/archives/2023/index.html","41cc551c4e39f1b2a96b1bc27e818e88"],["/archives/2023/page/2/index.html","66bfa7c82eefded4a345592e548957c3"],["/archives/2023/page/3/index.html","5f8906ba596e5f4743d9fe392cb613d8"],["/archives/2023/page/4/index.html","eef65d58cfdbae08ebcb2557d5702b63"],["/archives/2023/page/5/index.html","cb9ea27c07c263db277cec30300de5a8"],["/archives/2023/page/6/index.html","2022a4e862cc3e10f282f68831a81e4d"],["/archives/2023/page/7/index.html","328794c55edead7ba32ee61ae7da196d"],["/archives/2023/page/8/index.html","0d50535dcff332824eeb2e0dc50025d4"],["/archives/2023/page/9/index.html","0d215ee31f89d3b631552349afa07a1c"],["/archives/2024/03/index.html","7cec11f528c88bce100492f96fccff15"],["/archives/2024/04/index.html","95b6d40e8b1bf5323efc2769d691f35c"],["/archives/2024/05/index.html","3170e75dc0f4fcc06a51f205133e4b3f"],["/archives/2024/06/index.html","af2f70f268875eeab85e3f26c19e0f2e"],["/archives/2024/07/index.html","9393750f5abcb8206f9df60582ec9f76"],["/archives/2024/08/index.html","1ebddd96dd534b5694a3bf779562b464"],["/archives/2024/index.html","7312c34b3ee9cb6db35c7d2a615b1e9b"],["/archives/2024/page/2/index.html","fa6cfc11acc3dada93d2903c3e617920"],["/archives/2024/page/3/index.html","d603fbd2d34442ac635bf00864a4954a"],["/archives/index.html","ad018adf68fb5ed4b005363b5b3afbab"],["/archives/page/10/index.html","c59ef50ce025eb29b3c9a65d5e9d3e99"],["/archives/page/11/index.html","4e80f3b693597b0946123bf4187dafa5"],["/archives/page/12/index.html","6fd9101497b39e9472c03ec3177338a1"],["/archives/page/13/index.html","8c7eb12fb09189b9e8974a980481247c"],["/archives/page/14/index.html","285494b334309c643536b5f685cae198"],["/archives/page/15/index.html","24c8688852e3af54c2846865a6e976df"],["/archives/page/16/index.html","e8747f0cc9f4d6da5f6b28d5970661d7"],["/archives/page/17/index.html","11e579372b43fed9c8f7cd55743e7964"],["/archives/page/18/index.html","58787d2b1e882fa078bc853382d7d765"],["/archives/page/19/index.html","9ea1d626c86b9ccf05524124562994af"],["/archives/page/2/index.html","4f69b58888a8506b3236f5c066d17628"],["/archives/page/20/index.html","bd97ef2162aca3eeeb9323b9089e2bb2"],["/archives/page/3/index.html","de4d9ab246f424340823ee1dcb89ac5f"],["/archives/page/4/index.html","034e8f6b570d9560e7fe3331aac7eef8"],["/archives/page/5/index.html","576802ac07ef98d4f237724603aed0d7"],["/archives/page/6/index.html","edcd8d65fa9a2c734f73410b1ad1fa2c"],["/archives/page/7/index.html","0f9e845d3ddb8be7bd24c33a5e05e7de"],["/archives/page/8/index.html","dc4909bb2fe3bd1deb47eb63ea2ab581"],["/archives/page/9/index.html","7472694c518ddb5bd872abcbe09239ee"],["/baidu_verify_code-ZFSCabM1PJ.html","f1e1a2b112e687627defe8d223405101"],["/css/main.css","23c4c1fd320a35a99174aef8cab22bf0"],["/css/spoiler.css","eb373af0627ede298867ffc0045da62e"],["/failed/【硬件知识】vco压控振荡器.html","3dcc04aee7e8ae820601b493803e925e"],["/failed/【硬件知识】vco压控振荡器/1665803607390.png","3df26768c0d97b3acbb64c7f4738f15c"],["/failed/【硬件知识】vco压控振荡器/1665803663941.png","38d29c573fc0aab159543ee6f3d6b31d"],["/failed/【硬件知识】vco压控振荡器/1665803862765.png","f7e2165483ca1f224fc47019c9d85839"],["/failed/【硬件知识】vco压控振荡器/1665803865723.png","3da7b08b88d8795e53d03a47e1926277"],["/failed/【硬件知识】vco压控振荡器/1665803871404.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/1665803883747.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/clip_image001.gif","ba898c600ecfdb213d2223a0f783c808"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803844893.gif","fb05fad8f7ca3e4d9e40000a9ab1dc09"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803856973.gif","e1a4cd1747beecc7d92124979531824c"],["/failed/【硬件知识】vco压控振荡器/clip_image002.gif","0c0f42f02d474126082016d250804bc4"],["/failed/【硬件知识】vco压控振荡器/clip_image003.gif","1f489bb3e02d4993cdd501f7ec773812"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803844893.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803856973.gif","09cde39109369f9185d1cf128c6d7c2d"],["/failed/【硬件知识】vco压控振荡器/clip_image004.gif","32873c471ff1058abf9d6d09ca5e45f0"],["/failed/【硬件知识】vco压控振荡器/clip_image005.jpg","ea2dddfe9b1da4f406ee36b37c99e72e"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803844893.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803856973.gif","b0138096b0fc7682435ad07aeaf159ce"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803982819.gif","6540947f9843ab822d3e8eeb7ef621e6"],["/failed/【硬件知识】vco压控振荡器/clip_image006.gif","6290aa2f8360b2a4f05e4c09e4d6bc80"],["/failed/【硬件知识】vco压控振荡器/clip_image008-1665803856973.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image008.gif","113b77d852979982495a775ea4d973d1"],["/failed/【硬件知识】vco压控振荡器/clip_image008.jpg","aad87f9838e93808a0caed1ece93ffac"],["/failed/【硬件知识】vco压控振荡器/clip_image009.gif","fd6cf84a1333733613c80d5599c0fbdb"],["/failed/【硬件知识】vco压控振荡器/clip_image010.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image011.jpg","fa6d15386072d8a691d18f9c3a53b426"],["/failed/【硬件知识】vco压控振荡器/clip_image013.jpg","cea0cb9334e0d5f1b84beb2fcd8b1245"],["/failed/【硬件知识】vco压控振荡器/clip_image015.jpg","660345ebf2132d1bcdd9a7455529093a"],["/failed/【硬件知识】vco压控振荡器/clip_image017.jpg","29517d76c214adc17343771d2d804679"],["/google41a28d5f2878fa02.html","f5bd501a5b4fb5abaf405f8afd7ad924"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/tou.png","578463708d7de56a1c4e6331831b3e2e"],["/index.html","692147e31d35ab5360b461aabe1d3d4a"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/code-unfold.js","e079f1fdb88a9edcd745220494218e88"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","97606f901b6e488587ad5c49aa367604"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/library/CV/【CV】基础/index.html","53b242e35b328eddeb74cd1507a2e61f"],["/library/CV/【CV】数据集/index.html","b953b84c8b74945a729fb2c6349e25a2"],["/library/CV/【CV】经典模型和论文/index.html","5ab502e79986b4250fbce130ecbd88f5"],["/library/CV/【CV】综述/index.html","9948dc1ea55402c431c63f7807c86f67"],["/library/CV/【IQA】图像评估/index.html","5adc7f3c5db1abc05351981961df553e"],["/library/CV/【fine-tuning微调】综述/index.html","bdec451d2cd1ad6031504afa3e2192d5"],["/library/CV/【pansharpening】综述/index.html","0732c87a30f07059763f812f74310346"],["/library/CV/【经验】训练网络/index.html","f7e437e02a315c4b1e100a1c87ad1e12"],["/library/CV/学习/【学习】attention基础结构/index.html","ba27045afabd9f3c2285bf9f0c69bca9"],["/library/frontend/【/index.html","8e3890bcc206c46fc9893075d8ff5320"],["/library/frontend/【adb】电脑连接控制手机/index.html","7cefbb702a4aad7e2eb6a3757bf1ee20"],["/library/frontend/【app inventor】拖动滑块写手机app/index.html","6b475c3d0c7a6f3d57157dbc2767df0f"],["/library/frontend/【auto.js】手机自动化控制/index.html","56484e3cd28f615e066003871f673d50"],["/library/frontend/【hexo】博客部署/index.html","55fb7afaf18682358efce8024bd0a7b2"],["/library/frontend/【markdown】编写文档/index.html","7b4d41b8cea3f3121c08c7ee89120499"],["/library/frontend/【vue】搭建网页/index.html","52f35420a666fbf7d21da6de8f3a5511"],["/library/inte/windows的linux子系统wsl/index.html","12fa2cbc437eb438d5366356464445e4"],["/library/inte/【css】学习/index.html","05d4a61932a6500cc07af5e07dd7550b"],["/library/inte/【latex】学习/index.html","d2072edec71c8f61a46ce7d35b53cc3d"],["/library/inte/【星际酒馆】积累/index.html","a8314aef4f8dca32cdbd8c9d62c40a31"],["/library/inte/【钢琴】织体类型/index.html","02e483e4f7e755d670c4c70f6c38b32c"],["/library/inte/网盘挂载Alist+RaiDrive/index.html","89bce79a9b721a35df026ac32f189a13"],["/library/math/【math】傅里叶变换/index.html","77472c1f016bc9ec8ae4f606d0201a29"],["/library/math/【math】高斯积分(Gaussian Quadrature)/index.html","b8eaa94b99da655468d3605147b11f86"],["/library/math/线性规划和整数规划/index.html","0b260470b45d27c77c87f9ea7b3eea46"],["/library/python/【CV2】图像处理/index.html","4c24c69e43fb7561d63f42c6f43feaed"],["/library/python/【cProfile】【torch Profiler】代码运行性能测试/index.html","5c6dd59e24ea0ae951d5bded8af9b705"],["/library/python/【itertools】计算排列组合/index.html","0a40083ff2bbf35bef3ea60b8cff0bbf"],["/library/python/【matplotlib】数据可视化/index.html","6c709971cdd071950977302e66907a8c"],["/library/python/【nuitka】打包python为exe/index.html","a1359a4e66bfbfc96c8cf984f50bb54d"],["/library/python/【numpy】数据处理/index.html","940f284b5e9a4232dd2e94d4a8f0c578"],["/library/python/【pandas】数据处理/index.html","8276708867559291ccdb8d948a35b6c5"],["/library/python/【pip】【conda】常用指令/index.html","dd0243fb6918c9acfa372688ac8e7467"],["/library/python/【psutil】检测电脑网速等/index.html","e3a97b50511db5d64da086017eda59bb"],["/library/python/【pyautogui】控制键鼠/index.html","0386d7c2fc15b77bdcb068c1f0fd6409"],["/library/python/【pybluez】python控制PC蓝牙/index.html","3809e2e199b81cc41565c18ef62063af"],["/library/python/【pygame】2D游戏/index.html","64390310473bb6ce535b6c90cc7baca9"],["/library/python/【pyinstaller】打包python为exe/index.html","aed239b010f2c8fed7485babb3fb81c0"],["/library/python/【pyqt】编写可视化界面/index.html","c74f48087faf536e5dcbb20e28fc613d"],["/library/python/【pyserial】读取串口/index.html","a58a94c383a94a3aea2c3a137e675c28"],["/library/python/【python】基础语法/index.html","58a376b559cc115260db509d7986c77c"],["/library/python/【python】有趣外部库/index.html","af6a47a1f7c5a9bac748b8e20e2ad39e"],["/library/python/【python基础】常用内部库/index.html","ac16606c702b15e9237184e2e64a7fb3"],["/library/python/【python常用】常用库的pip安装/index.html","d6d3c25c13f3afe6d184107322078a85"],["/library/python/【request】网络请求/index.html","04c20f061d3aef0f28434529bcb2f936"],["/library/python/【tensorboard】可视化log日志/index.html","74340d8ad8e7563f49850249d2d700a2"],["/library/python/【timeit】获取时间/index.html","21fde30996d01f1653b81c0737d2eb8e"],["/library/python/【torch】机器学习库/index.html","9852de1b5865a67e7d8fcb7d1b387a1c"],["/library/python/【tqdm】显示进度条/index.html","e5eb4ede04532d421e201c2985bd337d"],["/library/python/【ursina】3D游戏/index.html","ecc31a24fc8de073d6889e63906c1dcf"],["/library/python/【win32gui】控制win系统/index.html","d1113ca9320565453f695a6cbd96d41c"],["/library/python/【winsound】控制电脑蜂鸣器/index.html","c58958822a4872a69e11403ebe62186c"],["/library/嵌入式/worked/【沁恒】样品试用/index.html","c137e69c21d83dc493951631a11258d1"],["/library/嵌入式/【git】学习/index.html","8bc480872ce345ed5c7fdaafccb902fe"],["/library/嵌入式/【linux】常用指令/index.html","7c327efc503e7a188d86ad6af7fd7e77"],["/library/嵌入式/其他/PCB作画规则/index.html","eda7cf25eb55060197ce7d76a40fbd56"],["/library/嵌入式/其他/犀牛建模/index.html","b2590d9a36594fb1dcdb20099ebd070c"],["/library/嵌入式/模块/【模块】GPS模块/index.html","9d4b3e39c493b9191ae91602b1aa1ffa"],["/library/嵌入式/模块/【模块】OLED/index.html","cd02ee7a02906b1f48c2fdbf657d5755"],["/library/嵌入式/模块/【模块】amg8833/index.html","d40796c21f4df6c4df1ec3669ff44e14"],["/library/嵌入式/模块/【模块】as5600/index.html","7f61a852154f12e360b52461ef866f3c"],["/library/嵌入式/模块/【模块】数码管/index.html","17ced781ef86379e356fbb25d7babd1f"],["/library/嵌入式/模块/【模块】电容触摸按键/index.html","33d75ae6cd3a4a2c97602e4e4332d49e"],["/library/嵌入式/模块/【模块】蓝牙/index.html","8cb3613b87b1d95550e0debd6d05295d"],["/library/嵌入式/模块/【模块】蜂鸣器/index.html","2e330437ce2cf6fe16fad5801c1e0aa4"],["/library/嵌入式/模块/【模块】超声波测距/index.html","3c9839eb2ad152e5abd4c4a43d747338"],["/library/嵌入式/模块/【模块】陀螺仪/index.html","c287c2d9fdaafd9521afc245df7936a0"],["/library/嵌入式/硬件/【开关电源】学习——buck和boost等/index.html","96e4646de106876d4421a263c46e2c46"],["/library/嵌入式/硬件/【开关电源】选型和使用/index.html","6726d7fb6184de86ebda5a8db1e5a761"],["/library/嵌入式/硬件/【硬件知识】H桥驱动/index.html","05a7b9b9dc7f5d356b9dcdb7ea160ee0"],["/library/嵌入式/硬件/【硬件知识】三极管/index.html","6e85469c26eccce3f053918981405645"],["/library/嵌入式/硬件/【硬件知识】无刷电机和电调/index.html","a3aee46e24b71cfe01824443f63f28aa"],["/library/嵌入式/硬件/【硬件知识】模拟电路pwm/index.html","0217a8e5b71eaaa444c69ae38cc08d86"],["/library/嵌入式/硬件/【硬件知识】芯片熟悉/index.html","311d2d2c61d8898f081199bd2ea28cb9"],["/library/嵌入式/硬件/【硬件知识】运放运算电路/index.html","9028f55f427d2e18c0d12253cd5bc893"],["/library/嵌入式/硬件/【硬件知识】连接器/index.html","83f61bec62313d7bd26cf8717a1318f8"],["/library/嵌入式/硬件/【硬件知识】选型/index.html","86858e5569907e7f9e87c26a3f11e1e2"],["/library/嵌入式/积累/【嵌入式积累】基础知识/index.html","88ecd6502fce050a44d93c195636d6f7"],["/library/嵌入式/积累/【嵌入式积累】常用官网/index.html","f4f57a9f3e1bda71d8a965290e2d433f"],["/library/嵌入式/积累/【嵌入式积累】控制入门/index.html","f7e7501e3a1692a1d4252671c45d7de4"],["/library/嵌入式/积累/【嵌入式积累】设计注意事项/index.html","1e2334201474c8bf57f3a55a5e28698b"],["/library/嵌入式/积累/【嵌入式积累】阅读寄存器手册/index.html","73b492a7f83fa45cfccf4ae8e9052449"],["/library/嵌入式/算法/【控制算法】学习/index.html","c5d310ada57b4c446018126596919f8c"],["/library/嵌入式/算法/【滤波算法】学习/index.html","35f0a238fc7500d3879a761dda42f3e5"],["/library/嵌入式/语言/【python】进阶总结/index.html","1a2c85aa055f0898e9783529804f9d3a"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】ADC采样/index.html","0786a1e140a09332a9ae08371fedc81c"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】USB/index.html","2e2480363fe41603445cc6b0aee3909f"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】i2c通信（mpu6050）/index.html","958fd9422fca442c3643f479a55743d5"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】pwm波/index.html","6080c1409518035a32eb4cc0b74359fe"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】spi通信（nrf24l01）/index.html","dcfef236978c2c85c1a099b7fa33bbce"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】串口通信/index.html","4dfb7986daaaee018a47a47c482a8a19"],["/library/嵌入式/软件/开发板上手/【V831】开发板上手/index.html","344fd8f1cf3fb07150ed0b9a8b336c34"],["/library/嵌入式/软件/开发板上手/【k210】开发板上手/index.html","20f0af70511f35063b3836ca52693e4b"],["/library/忆阻器/【忆阻器】综述/index.html","9ba56ce281a98851ed7fa719873992bc"],["/library/快捷键和常用指令/【cmd】常用指令/index.html","8d901ea9571f1e9dcf32113c68dbcc62"],["/library/快捷键和常用指令/【pycharm】快捷键/index.html","3674d6c628690038dc98f1b382c7eff2"],["/library/快捷键和常用指令/【win】快捷键/index.html","de1f3d8fb5352cd9de018ed0aa5df8aa"],["/library/快捷键和常用指令/【清理内存】常用文件/index.html","5d62c83d24e2720ff67095f1a56c8bbc"],["/library/快捷键和常用指令/免费下载视频/index.html","fcacc4f782d4dcb8eb224c7114661850"],["/library/旅行/勇闯nus/index.html","a79448a04abcb2b65f45f92f2f5d4d94"],["/library/旅行/土耳其特种兵/index.html","b96caccfe50d522d48195f3caf4dbc7c"],["/library/旅行/探秘阿联酋/index.html","a470ba0a46d534f9523a4ac0c2d44961"],["/library/旅行/粤港澳6日游/index.html","89e791d66fbd482f0eb21c532de55e5b"],["/library/深度学习/【深度学习】基础知识：×NN都有些啥/index.html","9f054567c215347f41f58f7f10bf56e6"],["/library/深度学习/代码/【numpy】语法基础/index.html","48e518049643b4bae9293e4025dba9af"],["/library/深度学习/代码/【torch】语法基础/index.html","cf923a5dd81be6fbf25f1872640af619"],["/library/深度学习/工具/【深度学习工具】onnx学习/index.html","da51aecd1b9e9b4b8bd0a1a1167999d0"],["/library/深度学习/工具/【深度学习工具】tensorboard学习/index.html","eb8f8b90bbeaf447a8f67a5c51f21e6f"],["/library/深度学习/算法/【算法】贝叶斯优化/index.html","7abb6ff066b8c191647ee263f12b3d95"],["/library/经验积累/【经验积累】导师选择/index.html","5bdcaf7d1788e0f74c00543c4bda1fc7"],["/library/经验积累/【经验积累】开源协议/index.html","8d40b7844e3fe7dde7ee7853cb65d198"],["/library/经验积累/【经验积累】网址整理/index.html","05a2c9cb7ec2536a019ef2df99620e38"],["/library/经验积累/【经验积累】论文搜集/index.html","b56e8c1b9c5fa7a7056fdc8940ce2a8a"],["/library/经验积累/【经验积累】论文水平/index.html","015d49ff5dd29a47c7f1acbfface83be"],["/library/经验积累/大学毕业选择/index.html","33bb1a6d87a725674d241d08d408210f"],["/library/课内知识/【FPGA】仿真和烧录/index.html","95924c9c7c8aec5b8e66661f4aef034b"],["/library/课内知识/【Project】项目管理/index.html","15ffbc6dccc87c1b5fc9e45500655961"],["/library/课内知识/【SPM】学习/index.html","f0f35a8af3841fe2be814f8f5865a866"],["/library/课内知识/【VLSI】学习/index.html","46a887576e0ac60d6de02b8332e79981"],["/library/课内知识/【WSN】学习/index.html","8556e29be36b42807188a9363529f734"],["/library/课内知识/【analog ic design】学习/index.html","cfd82e1d39ef1e36481d8769f3911325"],["/library/课内知识/【matlab】学习/index.html","a3a99cbd895e040300b4194b0956d0ca"],["/library/课内知识/【verilog】学习/index.html","e59040ab3621b5382b880dfaf0081477"],["/library/课内知识/【zemax】光学设计eda/index.html","41fbf07ebe380f9f7a55cdc4e3b0724d"],["/library/课内知识/【光学】汇总学习/index.html","ee487f7ab960e75e468cf6902597ec42"],["/library/课内知识/【固半】学习/index.html","d7a9b15b9d2635b39428e0568820e539"],["/library/课内知识/【常用数学公式】总结/index.html","1c8dd2b5ff3b8336a77b0b44e7c6daeb"],["/library/课内知识/【量子力学】学习/index.html","7101d66db34a11027a0dcb654795e65d"],["/mylibrary/css/float.css","ff512584c0c94fc70fbcd062fdcd9ca1"],["/mylibrary/css/hide.css","f7dc895fef7895f96d49cefc1a804911"],["/mylibrary/css/load.css","7c05c12fd7810437a30add0529b739ba"],["/mylibrary/css/neon.css","6e49f4c38e3e372379c36f27f53a05e5"],["/mylibrary/css/round.css","74bd48f599ca5e488fdd918c5bd6e12c"],["/mylibrary/css/shake.css","73c8aaa920780af244976de2fa7cdd6e"],["/mylibrary/css/shiny.css","bbedfa40318c7b07d01a47c994640055"],["/mylibrary/index.html","f4b6f3e8204c8467dc1bb00e3408c7aa"],["/mypage/css/style.css","eff04baa175250288b55896a351a1ecd"],["/mypage/font/LigatureSymbols-2.05.eot","5b46f67c079e0599f89aae807cdad560"],["/mypage/font/LigatureSymbols-2.05.svg","f4be952f02a00bd7b464568304b12842"],["/mypage/font/LigatureSymbols-2.05.ttf","48ae0b91a8d6e1feb2c15961a338dad8"],["/mypage/font/LigatureSymbols-2.05.woff","f974884f441019724c351f85478b3938"],["/mypage/font/README.html","cd9a5925f60716b778b9bb55164ee6c7"],["/mypage/index.html","3b9d6368e84bd3d21c333d99381c11a1"],["/others/Write-blog-using-markdown/index.html","2af6ad2ff91d9e904bf98760b2a2e50f"],["/others/chatgpt/index.html","3e23d22ec21fd59fe2d1bce94f66d7fa"],["/others/古诗/古诗/index.html","1f77f4b5ff4325750d97d893c5afd991"],["/others/能力年表/index.html","5f095ba0985c8e06ce60df44ec7d15ce"],["/page/10/index.html","f578fac2b77404ec17caab7e02411e8b"],["/page/11/index.html","7db2f20ea9995bc71334ad5fede4e759"],["/page/12/index.html","f08144f226cbeb191d37c159b7436e32"],["/page/13/index.html","be8a3bae8d133a1c7e3ed01ccfe4e2d9"],["/page/14/index.html","1036d55879e0a112af181b8e4b8c9896"],["/page/15/index.html","61c3f84c0cacad648aede16e7c5605a0"],["/page/16/index.html","39f60dc6102cf2fd189b4f8d5879ad8f"],["/page/17/index.html","ab07323193268b5eb45ab019a510bb1f"],["/page/18/index.html","9919b73af367f64116c3f4974eb3116c"],["/page/19/index.html","8391044932fd51ad8666d163493eb0dc"],["/page/2/index.html","69750f9c175e50862d456d0cc3fe4d52"],["/page/20/index.html","7426c13024db978a7c67e80733b23845"],["/page/3/index.html","27ee171b4f1ea23033b0d4b19ec79557"],["/page/4/index.html","deca0af260b4d993ae0abb1e0fdd7546"],["/page/5/index.html","ce75d92e15d28d5a643d8ad0385ffa15"],["/page/6/index.html","693663177b4a50f471b4410d423d5562"],["/page/7/index.html","26a059d422503fd2ff73c595673d4f1c"],["/page/8/index.html","cc3f891f1245e9a751049860a0340bb9"],["/page/9/index.html","8e1827ba7d26b960eda80363d7a5aa1f"],["/solved/chatgpt您所在的地区无法访问/index.html","6cddf9c53fc6e46cf40dd41cbc382f6f"],["/solved/github的github.io项目打不开/index.html","64c81e2cb24e3eecdd1733ff8ccacd50"],["/solved/hexo部署报错spawn failed/index.html","4becbb21b6fed6c5c4764ed2204d7399"],["/solved/modelsim的-novopt优化相关报错/index.html","b70833cf9f1fdea1882dad79e2a20bbd"],["/solved/npm install 报错/index.html","2f2e2dfe173af32d0f1cba23080046eb"],["/solved/pycharm修改快捷键/index.html","0f0745bedf1975051b0f6d02276c6d02"],["/solved/pycharm内无法打开cmd/index.html","7c735c84cb0a563c66e2a00acb5b4807"],["/solved/从regedit改变键盘映射关系/index.html","d5dc179a9251e1c79a6a97a052a8d1f7"],["/solved/双拼输入法/index.html","90c7e9840c95d5b841c5d0c7c97da58f"],["/solved/右键新建菜单管理/index.html","8cc414b6ed54de54456ae48f097b7537"],["/solved/执行make menuconfig时报错/index.html","ea3dd9cafe025738ba0fe5c2d74ea555"],["/solved/报错binsh 1 bc not found/index.html","93b96ba5d55d872a030e6149cac81968"],["/solved/报错binsh 1 cc not found/index.html","f46a7923a35636767249291df9c76be7"],["/solved/报错binsh python not found/index.html","94873fdc8f7f5293f825cca667bc8100"],["/solved/未整理/index.html","c843a9a9d2402efcc634a16bdeee2e71"],["/solved/树莓派域名解析暂时失败/index.html","a1a7bacba88eaff708d7aaca8ada30d9"],["/solved/树莓派配置python环境/index.html","555405b3d864d369d616418e888707f9"],["/solved/环境变量配置理解/index.html","a154776c325c83664efa3276e9427580"],["/solved/设置软件开机自启动/index.html","c2b4fdc9d7ae5a1e391c009a644dc730"],["/sw-register.js","c36b529ea16ad35bf3c8c32459bb9159"],["/tags/ADC采样/index.html","b9602d66f7fc278954c140b3170aa663"],["/tags/Block-NeRF/index.html","52781ad15513b8194a50bd15cbfe33a5"],["/tags/CV/index.html","0e58c2ea058364e4298490b0fbf7c358"],["/tags/CV/page/2/index.html","aea50ce60a26ad5ae750adbe1babd8cb"],["/tags/FPGA/index.html","e8b584881ea8db8f8323753f49fb20f4"],["/tags/GPS/index.html","12f6fadb51fbef68e374be8d17bb0206"],["/tags/HAL库/index.html","41c72c78da6db77db958cef6eabfe44c"],["/tags/H桥/index.html","831cbc49198f8dc3c88108badbc4105f"],["/tags/INN/index.html","112c40ebe387a1cc40de710bfb74c188"],["/tags/INR/index.html","3a2544ae441adc73d0c87ded80a16cee"],["/tags/JIIF/index.html","e1ef0cdc56c97ac47aa7b7ba72ce2db3"],["/tags/OLED/index.html","635a584ea405b83f92167f7085ddcc1c"],["/tags/Point-NeRF/index.html","1194ea39270d8368187338d28c6d7fee"],["/tags/USB/index.html","8255ca25e72b53abcfb565a634273d6a"],["/tags/V831/index.html","99177154908a6e75667842ae94f60820"],["/tags/adb/index.html","28aeafdec349c156cd5fe3d631396218"],["/tags/amg8833/index.html","a1040028a99c43a7b61993b2350224e4"],["/tags/auto-js/index.html","ee13996480aa246fa5efdef508f4365b"],["/tags/bard/index.html","f647d94ae59ef35a7d866f481ae3a878"],["/tags/chatgpt/index.html","bc130bb40cf532f44bb704d266e616da"],["/tags/cmd/index.html","6e6b27bafca70907e0e18c8c475b72e1"],["/tags/conda/index.html","960378a9add5cf791116f830ef8fa22d"],["/tags/css/index.html","969ae1a45b8c1e44c729b9d00c2af541"],["/tags/fine-tuning/index.html","cd7ba090c74b4e5ea6e5eba1b52d3fbf"],["/tags/frontend/index.html","eca99aadf9f7484a79f7560ebc0ea188"],["/tags/git/index.html","f859d46506f89029c88c607d84eee824"],["/tags/github/index.html","0806974f4da4db8fb5e2d826cc4b4209"],["/tags/gpt/index.html","c3e23c9a6a1f5a1ed0ac3f29c32554e2"],["/tags/hexo/index.html","d8ada92fc984fbd305e600b04c829656"],["/tags/i2c/index.html","e423dba6eebbc6806599b54f05d72c8f"],["/tags/index.html","76187c49138b8a13539089ae9a74f0b6"],["/tags/inte/index.html","7ec9b8c100b701941648795b78214f07"],["/tags/k210/index.html","7e014a56a1167fe0c65bf478cd8ac59b"],["/tags/library/index.html","8eaf3d62ab784e7a448b7a22eb9bba7d"],["/tags/library/page/10/index.html","005eb7d654e07ab08cfa43c179383a3a"],["/tags/library/page/11/index.html","132faa563717b33732ae0fcc3e55ad00"],["/tags/library/page/12/index.html","c2df867f1e2f4b36241f7566bd9b625e"],["/tags/library/page/2/index.html","f258bf8401762d3efbfe5f42cc98a6eb"],["/tags/library/page/3/index.html","3e2806999864502fa022362155e77f0f"],["/tags/library/page/4/index.html","5faab05400a15ed196175580771be5e4"],["/tags/library/page/5/index.html","591d091bceca5fed52c9307fabaeab5e"],["/tags/library/page/6/index.html","4ae240606521bfaa878fd154bdc05f68"],["/tags/library/page/7/index.html","21574f357b864c1f00b2629cc0d38b14"],["/tags/library/page/8/index.html","4b7e11b0fdd1840dc599d32a9c881407"],["/tags/library/page/9/index.html","ae2116f9a3cd0e4e4eda74cf1a646af6"],["/tags/like/index.html","27dc09566a18e228c2b344f0fe97dad0"],["/tags/linux/index.html","5b5981dacbea51b302e52c2cae9bae6a"],["/tags/little/index.html","970f3d1dae03419762b18050349c3a1b"],["/tags/make/index.html","8ebfa87f1db715466b4fad5f9f03af30"],["/tags/math/index.html","1527f6805fc2a72c78414c036862c269"],["/tags/matlab/index.html","c9ac1c4cfe81558935e1a0489004f116"],["/tags/mine/index.html","c0b745620f9b85e14981ab0ce7ff2249"],["/tags/modelsim/index.html","f4f13d24dc4f53073163c87c3e7ab886"],["/tags/nerf/index.html","bc1a0a45898d805bc105ea7a26c617d7"],["/tags/nerf/page/2/index.html","141c9f563f3ccad582405271fad90b8a"],["/tags/nrf24l01/index.html","875e3a3a94b590485ea6823a8d8ccfb7"],["/tags/nuitka/index.html","ad0607ac056cbc82068042f74bdbf7a6"],["/tags/numpy/index.html","4357118bc310e3aea00ebd774bb2143b"],["/tags/onnx/index.html","0f63a96a61937647f829f7322a8138d7"],["/tags/pansharpening/index.html","1f8fdbe3328372ab47e31e115f8610d3"],["/tags/pcb/index.html","94b7a8cacaec3df3c6f84722a3d97533"],["/tags/pip/index.html","ccff0a64e2c43d2e7a32e4648fe870e3"],["/tags/psutil/index.html","538c59f9d1cba01bba4105e446a1cf5e"],["/tags/pyautogui/index.html","af0737c44a0eda65a9663a3830844226"],["/tags/pybluez/index.html","cc15e207e7ebc538160ba1fc71032383"],["/tags/pycharm/index.html","6a8d434cca3ee8c39b8d04a1db039167"],["/tags/pyinstaller/index.html","c165e589b7d541f0348bc8c2afdcd56f"],["/tags/pyqt/index.html","39a95b9b2fafed07770d436e7d051c36"],["/tags/pyserial/index.html","6c66132ee0ae787700d2abb1ce162269"],["/tags/python/index.html","b588a3b0cd384b028232dfc83721a536"],["/tags/python/page/2/index.html","f7a528adc9f152998f89b4e4445a2c91"],["/tags/python/page/3/index.html","637b122f372c4e10edc592bb4ef3013e"],["/tags/python/page/4/index.html","172fc1fc3866b1e9e8057be3dc08a3ba"],["/tags/regedit/index.html","36f96bea4a3bb2761b8f988cb5c0b0c1"],["/tags/solved/index.html","664f6141330f4ed8721d0f9bf37cf20d"],["/tags/solved/page/2/index.html","0cb8b7a9898e10989442440edbbfda2e"],["/tags/spi通信/index.html","6129c8c275fed3475dadeb675c8768f7"],["/tags/stm/index.html","b5c87b67bdb595d2b716580d0ba013a7"],["/tags/stm32cubemx/index.html","00ad6a9780d61578376e507d80699f48"],["/tags/tensorboard/index.html","2bfa9c81fe052da0edfc96a157a3e3be"],["/tags/torch/index.html","a5a82e0f22314ad7add5c8b5a5bd13b7"],["/tags/typora/index.html","c89c640a8abd00b62bdbdae439a76437"],["/tags/ubuntu/index.html","8a77f819661d5fb403ae39fa9752651f"],["/tags/verilog/index.html","cd8b8edb91ae582ebd686b16a9aff5af"],["/tags/vue/index.html","8978775d29b8ffc994ee1de0397af314"],["/tags/win32gui/index.html","8da4a546b25118f8680ff7370f7aeab5"],["/tags/windows/index.html","bd0a03c368a4eeefe85b2df3e2b3b599"],["/tags/work/index.html","350ad78e4df7ccd782ffbd34769f6c28"],["/tags/work/page/2/index.html","5476a915e80b30b1c016f5d15ebef536"],["/tags/work/page/3/index.html","ed5f56b5b468f049f06d45c70b1be589"],["/tags/work/page/4/index.html","296a3489c717fe660c871a737a95f5b3"],["/tags/work/page/5/index.html","0d3f5057fb26627cbc40510725a2f4f8"],["/tags/work/page/6/index.html","86f77f0328527be4677caee7b14ca5a7"],["/tags/worked/index.html","8eb7350ab0e51d33d19ac33332295b5f"],["/tags/下载视频/index.html","f505842a57a8d07285c62a1286140ab9"],["/tags/串口/index.html","2ffcdfadc48689d13db8d417a74f92f6"],["/tags/代码/index.html","25e908270ee10c0f15d060005baf65cb"],["/tags/保研复习/index.html","826a851d6f081e5376e32bb29ad25112"],["/tags/光/index.html","ce7679ccb77cb37e8569c36ca4260e6b"],["/tags/光子计算/index.html","69422238921419438cd56b53761c7b6a"],["/tags/光学/index.html","30699a65e8926f219d2996bbcb94050d"],["/tags/全志F1C200s/index.html","bd56dd74dfbb1bd63080c21f0fd85007"],["/tags/公式/index.html","9726dd1fad3c2ca1470baec028ccc00b"],["/tags/前端/index.html","ebbb176ff1d643f05a11a4bf48573ac8"],["/tags/博客/index.html","fd36cd6a74cb5b2d3e63d1c009727776"],["/tags/国产/index.html","2a441514f0b6340986137e2863bebc02"],["/tags/多光谱/index.html","0f8c4bad213580a2918431e1413c1c48"],["/tags/大学/index.html","dd437e8e5c2c492082b6e93e72501ffa"],["/tags/嵌入式/index.html","a3efa800201df5544efbef14a4d8748d"],["/tags/嵌入式/page/2/index.html","c4e4b39ba88955bafa17d8b0cef07e44"],["/tags/嵌入式/page/3/index.html","4049cce99eeb6d3a8b765b836d1d59ae"],["/tags/嵌入式/page/4/index.html","bed1579453c1c73820484353740691b1"],["/tags/嵌入式/page/5/index.html","a11da31c92602946ff8ca8dbc05f6d3f"],["/tags/嵌入式积累/index.html","dcaabb699c4e805798302f3f5370e28f"],["/tags/开关电源/index.html","ab2acc14a1055a1fabf8713aeb329f36"],["/tags/开发板/index.html","c275b0e1026511757764e6f0c4ace5ef"],["/tags/开源/index.html","c160f978603fe25120e1d68bf553b327"],["/tags/忆阻器/index.html","3ad67cfc814d2895c480412f9f873902"],["/tags/快捷键和常用指令/index.html","03a951dd7521749760c34c48d31ca072"],["/tags/手机/index.html","e16ce8d53c58498b8d0cce152690c102"],["/tags/打包/index.html","21954ff427c0422d4b347657468c9cb2"],["/tags/控制/index.html","16f9a61340c0ebf08770e05b4e2f2b61"],["/tags/数据处理/index.html","054ebaa5364e3ca9cefc1ddb418f3999"],["/tags/数码管/index.html","89278034e3ee55a07263fa191267e677"],["/tags/整数规划/index.html","2c8f6ad6a3612765e8a1272499fc38a7"],["/tags/旅行/index.html","0eadf94762a3ec9ee4ff136c961b4b22"],["/tags/星际酒馆/index.html","33945ecc71e488d21eba139ed94d3f14"],["/tags/机器学习/index.html","73e0c93333c3eb3761d3599b9f80c390"],["/tags/机械加工/index.html","16e4818b731d0bda2d95bb200bd22ee7"],["/tags/树莓派/index.html","f302de7955a6eababba192e4b0b5df29"],["/tags/模块/index.html","2029dabcf3923d77eaec1c6555b6cb1d"],["/tags/沁恒/index.html","ca0c4c440a6f2f648c4f82c8df20762c"],["/tags/测距/index.html","043f9ef4e51dfc9251141fef07134a1e"],["/tags/深度学习/index.html","4222b86364df320f05e76d256a64cf3e"],["/tags/深度学习工具/index.html","133202286aa3d2cf26c0972c571aea7d"],["/tags/游戏/index.html","eab882d826971263103c26da23c4090f"],["/tags/滤波/index.html","93e7092edebb526e814336c81afc8986"],["/tags/理工方向/index.html","771358164cc45ca97ddd0e947bb2d3dd"],["/tags/生涯规划/index.html","40a09576a29f1ac1102d8edbe3845a7e"],["/tags/电容触摸按键/index.html","ed983b9da709207f85f8233b07148ce9"],["/tags/硬件/index.html","17224a93bdad91f71a3e170041723e4d"],["/tags/硬件知识/index.html","b4b3011b0e794f0292466f516e8453b0"],["/tags/神经网络/index.html","b34b748e2f364f46918f69e242bcf033"],["/tags/积累/index.html","0a1547a5063bb64cde2ee8be2d448714"],["/tags/算法/index.html","883cde3d9ef0f9d5ac97dc2db3314ccf"],["/tags/线性规划/index.html","916a04ee54393df38ea49ab78cdb0d12"],["/tags/经验/index.html","950379363466a436a0b70219d9b55047"],["/tags/经验积累/index.html","daf1a2830eb72377bf21354b4d7658f9"],["/tags/综述/index.html","9b8f1637b429ba79361c6a96f9e9fcd1"],["/tags/编码器/index.html","4f7bd09c4bc80da5399432aab2dd96ec"],["/tags/网址整理/index.html","10904a3831f39027a843f6a3ab7c9f21"],["/tags/航模/index.html","5e9111b944526efc513aa0375b6a6611"],["/tags/芯片/index.html","636d934048d5c583b5b4a2bbf6c58b85"],["/tags/蓝牙/index.html","e456968ac9eb9903d36b4581eae798a6"],["/tags/蜂鸣器/index.html","dc4c9d88763c083fc760e6897dd188ff"],["/tags/论文搜集/index.html","6816e3e00a1ad233fcaeb8b412ff00a9"],["/tags/语言/index.html","c9e83bb3b1f88b7d484109cea7080508"],["/tags/课内知识/index.html","1ce2616ceed581a8653b3b51a62db6b5"],["/tags/课内知识/page/2/index.html","236ca950b976a34aaea8120780fe2fed"],["/tags/贝叶斯/index.html","ee3c9535ecb476f9d69753f65d190c80"],["/tags/超声波/index.html","a84d72c9ffba7e6c3c55681d79c3b1d7"],["/tags/软件/index.html","c6e75e81aad83fd7075ea0514df840c7"],["/tags/输入法/index.html","7f30e7fc4a85ee0145d00cbfdcb4dde2"],["/tags/运放/index.html","6dc6cf18968d9e26ec224c2bc7d9624e"],["/tags/选型/index.html","9dc54e48d104fde09c00af613e9ef06a"],["/tags/通信/index.html","59ed75139bfa0b70f1bb857550355764"],["/tags/量子力学/index.html","b3ec93b968df44441ec010014f97b554"],["/tags/钢琴/index.html","df3e980ace94a552fafae35f825adb25"],["/tags/键盘/index.html","d063d666bb2cfc8b31cd21d3a8198e98"],["/tags/陀螺仪/index.html","ae8f47947b7441dc3e5f0000fa74bd17"],["/tear/index.html","6c344cef0140ce83a43a094cde1a044f"],["/tear/index1.html","4e0f260cca8d5f4c133fe19588078a7d"],["/undefined/一下都是0/index.html","a323cea74d93a3cf704e177520f81206"],["/undefined/论文总结模板/index.html","67c00483f11144472d58f1fd1047874f"],["/work/CV/【INN】积分网络/index.html","a7f56b5b6bae3a943a4152d08ed53107"],["/work/CV/【JIIF】多光谱融合/index.html","ab557399c2c7e8ac3b26c9e9fd607b36"],["/work/CV/【LD】大模型做pansharpening/index.html","35b2539e3a580198be1d358c708b0e21"],["/work/mine/gpt本地部署/index.html","5919730dde23a12df6bddb0d6286e9d5"],["/work/mine/控制电脑风扇/index.html","a32a0dfd78062994d160eb08f1e7e359"],["/work/mine/电脑外接摇杆/index.html","7009f9a5296a784dd6789fe06d3437f5"],["/work/nerf/【nerf】Block-NeRF笔记/1667118074452.png","221e63aa60efa77dca50740ce9b88380"],["/work/nerf/【nerf】Block-NeRF笔记/1667118457009.png","5c1577c940dd443631045f45787e487d"],["/work/nerf/【nerf】Block-NeRF笔记/1667226872521.png","ec7a6051752cb193ae983fb81d135fce"],["/work/nerf/【nerf】Block-NeRF笔记/1667264387582.png","57b13f83c9dfd506e6ccb81743f74963"],["/work/nerf/【nerf】Block-NeRF笔记/1667265226170.png","600b87f6ea78e46e19929200a8190875"],["/work/nerf/【nerf】Block-NeRF笔记/1667292838757.png","f9c6a5975d54d8b975e9de23dc891c00"],["/work/nerf/【nerf】Block-NeRF笔记/1667293450480.png","57c9efd9a2a4ae995517991ff7abdf32"],["/work/nerf/【nerf】Block-NeRF笔记/index.html","9bf10fbbc8fbcbaa8fb8928cc574283a"],["/work/nerf/【nerf】Point-NeRF笔记/index.html","af36ef61752cc5e9d27da2cad8cefd8a"],["/work/nerf/【nerf】nerf-pytorch/index.html","e90a659d601b7b0bd91d87040f88ce8f"],["/work/nerf/【nerf】最新阅读记录/index.html","0ccefa292ed4c24c1a6ba2c65f485652"],["/work/nerf/【nerf】汇总笔记/index.html","7afd88a15a377402f5ab6583bc379add"],["/work/nerf/【nerf】记录/index.html","813bb34c0fa70c403fec3faa3575d465"],["/work/python/chatgpt微信机器人/index.html","4d289ff1ee144d08fe6d31a05ec4b93b"],["/work/python/文件内容检索/index.html","2a712f97878d20c78a6a000a012e85e4"],["/work/python/游戏AI/index.html","62898519469f006790988ba7eff43ef9"],["/work/python/网速显示助手/index.html","a959768ee4098885eaee31e72f6112e3"],["/work/python/羊了个羊自动化/index.html","a27deae2913b293d0eb80e85acffe7f2"],["/work/python/蓝牙调试助手/index.html","f1db22c2d435f83361b0b2c45d0f5e7d"],["/work/python/调用simpletex公式识别api/index.html","93efe1beccc32956bf5dcd2d5520e54d"],["/work/【生涯规划】保研/index.html","0c70e0496b61f617fb8bedbc7d1e7477"],["/work/【生涯规划】文书/index.html","678ffb482c4a72a5a6cbfc590736d823"],["/work/【生涯规划】留学/index.html","59a2c431d37572f2fe93f03862551c2e"],["/work/【职业规划】/index.html","9e74a2b596cdcde23dee8c311a237f15"],["/work/前端/【前端】记录/index.html","f4f2e5702b9ecdc7de20d5f19a6acfbd"],["/work/前端/【博客】记录/index.html","b76b3506bf1eba0ccdb1c7683b629450"],["/work/博士/【光子神经网络】TDONN/index.html","5254a69e868dde4eacb979441a79f39a"],["/work/博士/【光子神经网络】太极-Ⅱ/index.html","a08131c1fc3712b63e17dfb2925ad982"],["/work/嵌入式项目/bard/【bard】Linux迷你电脑/index.html","75677cbb519436bdddc06bb09240be94"],["/work/嵌入式项目/【usb-hub】记录/index.html","066915455cba5cd05a5ae24c8cf8ecdf"],["/work/嵌入式项目/【加热台】记录/index.html","0445196af74a389f24e1321425a3f91a"],["/work/嵌入式项目/【四旋翼飞行器】记录/index.html","ce695c049a2f0224a4287541ce57eee6"],["/work/嵌入式项目/【生日贺卡板】记录/index.html","e7d92a7556d8a6ecc7881fb9826f8993"],["/work/嵌入式项目/【祖传板子】记录/index.html","ac3fededc0bf209bb9c31361d500bf08"],["/work/嵌入式项目/【自制无刷电调】原理/index.html","64bd9139a481ad7f1d4df2d8eaafc0be"],["/work/嵌入式项目/【航模】记录/index.html","3e86d36a729b0ff1aa3a471724b31ec8"],["/work/忆阻器/【忆阻器】python平衡车/index.html","9bc5f7df262ced7c3d6a69da528f8887"],["/work/忆阻器/【忆阻器】平衡车专利申请/index.html","d0c231ea8b80d6731111587104469203"],["/work/忆阻器/【忆阻器】总体学习/index.html","8cca382891a006fff053611b63b1391c"],["/work/忆阻器/【忆阻器】算法部分/index.html","ad4f6b5236eda303f57ebc3149b23c18"],["/work/忆阻器/【忆阻器】记录/index.html","13d51856b3bf9fd5080a8099ae34be14"],["/work/玩别人的开源项目/尝试过的开源项目/index.html","a6e49f7e6ac334c2a8b4fa6315cf5f34"]];
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
