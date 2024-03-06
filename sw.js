/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","765a296aea92f0febb3e0907ed589ade"],["/archives/2022/09/index.html","0988098eb14c4997fed1eb8cc7e1eea3"],["/archives/2022/09/page/2/index.html","bb3bd5f49a99f6d31b599e3a52231055"],["/archives/2022/10/index.html","c8ad0f98ff7aa5a7f30a831aef996744"],["/archives/2022/10/page/2/index.html","7222c3a561f2f12c5ac4540867907560"],["/archives/2022/11/index.html","2d6c735b2847b29d29ac090a0d184412"],["/archives/2022/11/page/2/index.html","a34e329de361bc9514117fc767c71653"],["/archives/2022/12/index.html","3530e71f6f72c71f15ca4ea611fed601"],["/archives/2022/12/page/2/index.html","01fc00139c55578fa7e3600420b4399d"],["/archives/2022/12/page/3/index.html","a553aa459b3f44f54ecba8f8f72bf0ba"],["/archives/2022/12/page/4/index.html","f50f5a1d6a2237e963a318071c02aadb"],["/archives/2022/index.html","bde8b74b251158415639f02958b706bc"],["/archives/2022/page/2/index.html","384cc1d4bfca9e631d52c5359950d707"],["/archives/2022/page/3/index.html","e463c075217e69e6ef8eef4efa054a00"],["/archives/2022/page/4/index.html","7d86f8cf7de05a0abc54af2f3f2b93bf"],["/archives/2022/page/5/index.html","fa1a9fa5ea65a8acaf86c6836f1431cd"],["/archives/2022/page/6/index.html","61492d8825c161b230093930a46ce9fa"],["/archives/2022/page/7/index.html","7b86ffc39e38a29af6263ad5a6c771cf"],["/archives/2022/page/8/index.html","287cbd22c83bf36cee8b1e57b33a27ab"],["/archives/2022/page/9/index.html","05ba95db24c8c3ec72f54fa17dc76c40"],["/archives/2023/01/index.html","8417b1ff550c8e14dd6fb5539f65bacc"],["/archives/2023/01/page/2/index.html","9af907097a7040780a2ecebf56e25dac"],["/archives/2023/01/page/3/index.html","9cdb6fa29d54929d85b366ce91023617"],["/archives/2023/02/index.html","3087bddb35792e1e9da6491858f2f074"],["/archives/2023/03/index.html","8e1de0acb1c505c05269c2a683e1c9f1"],["/archives/2023/04/index.html","83fb35f3dc0801262400194de03a4fb7"],["/archives/2023/05/index.html","7e07ddf2050d8232a1623bd63c52fc9c"],["/archives/2023/06/index.html","1e67b1a6a997d16708ab643a02c78c71"],["/archives/2023/07/index.html","5e060b027fc3a9c870ca0c60e6713d16"],["/archives/2023/08/index.html","af76a8e24bf3a287a9a6492d72ba92ff"],["/archives/2023/08/page/2/index.html","b4784edd9eae9aedce1b7fe0ba1d4e5e"],["/archives/2023/09/index.html","67349c11c1699c57157539494d78d675"],["/archives/2023/09/page/2/index.html","2d173a7efbc86e3fce57c734e4e39d98"],["/archives/2023/10/index.html","6fe75d92a03bc8fb22f8428fa7c2ab4d"],["/archives/2023/11/index.html","dfa7e503d1caa79a391233c6e3157280"],["/archives/2023/index.html","383defa366329ef3fd3c132edea4747d"],["/archives/2023/page/2/index.html","9cf65ed487892869c745825912ab6258"],["/archives/2023/page/3/index.html","3ea2e924bdaa59a9d27c96fae7adbc7e"],["/archives/2023/page/4/index.html","47bc4d6ed1dce97658393dd0f3cc12e1"],["/archives/2023/page/5/index.html","e5ea426f16b383b9caac1d4147198323"],["/archives/2023/page/6/index.html","de0417307c3fe9dffa6ab3964c29add9"],["/archives/2023/page/7/index.html","a5e6d60cdb6febbab800fb89f3519d75"],["/archives/2023/page/8/index.html","e98eba7e097817c3d7d6abcef6b9a798"],["/archives/2023/page/9/index.html","1a46d2b2e1c59842a3c96f65a944e0d0"],["/archives/2024/03/index.html","8c86f33e78b89fd191406c5e13fc1f02"],["/archives/2024/index.html","999e26d0194d66377eb10fd15b620c72"],["/archives/index.html","3d0b115625c2c11dd1e1233bbd891255"],["/archives/page/10/index.html","a1cd67b47d1b72fbe5cc4ab5daf2e82b"],["/archives/page/11/index.html","c11c1e80655343ca1ce025073d2cd030"],["/archives/page/12/index.html","f46f03421ac653d7097a61c3789e18df"],["/archives/page/13/index.html","cc0f1693f52c579aa920290b4962d3e0"],["/archives/page/14/index.html","0728d1432e77b1b912d537b91b0484c9"],["/archives/page/15/index.html","1256bea8a6ce0f37221607a981b3a9b2"],["/archives/page/16/index.html","975d9273828ffcdbe202f6a93090b609"],["/archives/page/17/index.html","fa4cd00f449cd68fc794fe2764053210"],["/archives/page/18/index.html","7ade2179f21747b13b95b496210df0a9"],["/archives/page/2/index.html","86082c18d32a31bcbc340d80e48bd5e6"],["/archives/page/3/index.html","b1bc536b24b4f13ef37a33df87bde72d"],["/archives/page/4/index.html","c1784b14f45fabd2c2f0eb9372b10a6a"],["/archives/page/5/index.html","203d04bf0c68c443b0c88a7b5f440017"],["/archives/page/6/index.html","c4f4ed35d01880f167a4e5f03b7cdf4a"],["/archives/page/7/index.html","93a46221576ab2e0ed8ba5089f99511d"],["/archives/page/8/index.html","dd812a391a0f2cd552edd5e21066f583"],["/archives/page/9/index.html","ecd7d4b84d2767abfb6f6bfc8331563f"],["/baidu_verify_code-ZFSCabM1PJ.html","59691fb6ab4f7ee7daeab2939a6a6f65"],["/css/main.css","43a4df139e7b27f0cd77beb5c7b771e9"],["/css/spoiler.css","eb373af0627ede298867ffc0045da62e"],["/failed/【硬件知识】vco压控振荡器.html","0e6ee58153a67c773306f298ec01f790"],["/failed/【硬件知识】vco压控振荡器/1665803607390.png","3df26768c0d97b3acbb64c7f4738f15c"],["/failed/【硬件知识】vco压控振荡器/1665803663941.png","38d29c573fc0aab159543ee6f3d6b31d"],["/failed/【硬件知识】vco压控振荡器/1665803862765.png","f7e2165483ca1f224fc47019c9d85839"],["/failed/【硬件知识】vco压控振荡器/1665803865723.png","3da7b08b88d8795e53d03a47e1926277"],["/failed/【硬件知识】vco压控振荡器/1665803871404.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/1665803883747.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/clip_image001.gif","ba898c600ecfdb213d2223a0f783c808"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803844893.gif","fb05fad8f7ca3e4d9e40000a9ab1dc09"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803856973.gif","e1a4cd1747beecc7d92124979531824c"],["/failed/【硬件知识】vco压控振荡器/clip_image002.gif","0c0f42f02d474126082016d250804bc4"],["/failed/【硬件知识】vco压控振荡器/clip_image003.gif","1f489bb3e02d4993cdd501f7ec773812"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803844893.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803856973.gif","09cde39109369f9185d1cf128c6d7c2d"],["/failed/【硬件知识】vco压控振荡器/clip_image004.gif","32873c471ff1058abf9d6d09ca5e45f0"],["/failed/【硬件知识】vco压控振荡器/clip_image005.jpg","ea2dddfe9b1da4f406ee36b37c99e72e"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803844893.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803856973.gif","b0138096b0fc7682435ad07aeaf159ce"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803982819.gif","6540947f9843ab822d3e8eeb7ef621e6"],["/failed/【硬件知识】vco压控振荡器/clip_image006.gif","6290aa2f8360b2a4f05e4c09e4d6bc80"],["/failed/【硬件知识】vco压控振荡器/clip_image008-1665803856973.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image008.gif","113b77d852979982495a775ea4d973d1"],["/failed/【硬件知识】vco压控振荡器/clip_image008.jpg","aad87f9838e93808a0caed1ece93ffac"],["/failed/【硬件知识】vco压控振荡器/clip_image009.gif","fd6cf84a1333733613c80d5599c0fbdb"],["/failed/【硬件知识】vco压控振荡器/clip_image010.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image011.jpg","fa6d15386072d8a691d18f9c3a53b426"],["/failed/【硬件知识】vco压控振荡器/clip_image013.jpg","cea0cb9334e0d5f1b84beb2fcd8b1245"],["/failed/【硬件知识】vco压控振荡器/clip_image015.jpg","660345ebf2132d1bcdd9a7455529093a"],["/failed/【硬件知识】vco压控振荡器/clip_image017.jpg","29517d76c214adc17343771d2d804679"],["/google41a28d5f2878fa02.html","ca52cb4571d814389c1e5d6117736857"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/tou.png","578463708d7de56a1c4e6331831b3e2e"],["/index.html","3329e5fbd576a9472e103e5e9c7c913b"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/code-unfold.js","e079f1fdb88a9edcd745220494218e88"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","97606f901b6e488587ad5c49aa367604"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/library/CV/【CV】基础/index.html","eb9d0831207aabed5b831bf1666e73d9"],["/library/CV/【CV】数据集/index.html","f93ed7e1d60867c73f26992d6821f705"],["/library/CV/【CV】经典模型和论文/index.html","5f4a08ac3bd638bfe096be54af231b1a"],["/library/CV/【CV】综述/index.html","e0bab1c480fd4f7585cf2ca6200f3bc2"],["/library/CV/【IQA】图像评估/index.html","529d91c7990d0e361e38308d29c659eb"],["/library/CV/【经验】训练网络/index.html","055a61ddcdd3869267b67b45d5bd400b"],["/library/CV/学习/【学习】attention基础结构/index.html","fa5bcc99490ad74c5d833b618d9ff193"],["/library/frontend/【/index.html","68fb984948b1123f8e8fe7191fbaef43"],["/library/frontend/【adb】电脑连接控制手机/index.html","44bb865c5a3d921e532f238211a77564"],["/library/frontend/【app inventor】拖动滑块写手机app/index.html","fe6803e43ae59c458f4b4180792f99c4"],["/library/frontend/【auto.js】手机自动化控制/index.html","00bf1c872509bc2bf6f5f8f82564c0b5"],["/library/frontend/【hexo】博客部署/index.html","1404c4479c55f5909963d6330055b0ab"],["/library/frontend/【markdown】编写文档/index.html","48123d9fcacbcbc654dba353513b1578"],["/library/frontend/【vue】搭建网页/index.html","00c610b30347d321063800a1ce3498dc"],["/library/inte/windows的linux子系统wsl/index.html","e00d7c224022efff8ee4948436ec8761"],["/library/inte/【css】学习/index.html","6d9bae7a2e0f17614199ff400cc2b127"],["/library/inte/【latex】学习/index.html","7fc64a57bebcac8deda5975794f3799c"],["/library/inte/【钢琴】织体类型/index.html","78a8ca196abd9485ac72681207a83ea3"],["/library/inte/网盘挂载Alist+RaiDrive/index.html","2f69382d7bf10439d7b110f8c315a783"],["/library/math/【math】傅里叶变换/index.html","5fd14fb12678b651583e0f2def7bd29e"],["/library/math/【math】高斯积分(Gaussian Quadrature)/index.html","ef7d6f517ec15e3263dc497677856719"],["/library/math/线性规划和整数规划/index.html","a45351fe6998312c11cdf05932539193"],["/library/python/【CV2】图像处理/index.html","a4e36f70ac8f3a87b014e97e9c828c0c"],["/library/python/【cProfile】【torch Profiler】代码运行性能测试/index.html","f04dcd8d316ed8bba107cba186a0553f"],["/library/python/【itertools】计算排列组合/index.html","0f0f928fe6b5e37cd458692129cbcaa8"],["/library/python/【matplotlib】数据可视化/index.html","5546853f27a7980fea0f87fc0d052651"],["/library/python/【nuitka】打包python为exe/index.html","44aac21046e6d867145b53df1adbb44e"],["/library/python/【numpy】数据处理/index.html","542fb4410d7f781778efb862c5fc7eb1"],["/library/python/【pandas】数据处理/index.html","78b60f74d822f100c8deaa5f40352343"],["/library/python/【pip】【conda】常用指令/index.html","efe5338e5388142f01e1e3b9374f134e"],["/library/python/【psutil】检测电脑网速等/index.html","ae080ce7871e57be1fa9e065aed17ce3"],["/library/python/【pyautogui】控制键鼠/index.html","0d00f96a51a477c0c388e34a03b30863"],["/library/python/【pybluez】python控制PC蓝牙/index.html","dc2694effbe7b0afc6c9208df572fb0f"],["/library/python/【pygame】2D游戏/index.html","100faa507f5257d55d9967665450cac8"],["/library/python/【pyinstaller】打包python为exe/index.html","f8154224a748f40b27de153919276869"],["/library/python/【pyqt】编写可视化界面/index.html","cb8c12864cbd2a23ffaf17c0eb4166bc"],["/library/python/【pyserial】读取串口/index.html","49e89d638008e2d2031c674273b61352"],["/library/python/【python】基础语法/index.html","4ccf01e989b9c648264a3a391ed7b7ee"],["/library/python/【python】有趣外部库/index.html","74417eafd44fb245e2a2fe7ef53ed184"],["/library/python/【python基础】常用内部库/index.html","7931f4e87eb9b6e2894f612426dd65f4"],["/library/python/【python常用】常用库的pip安装/index.html","1552d381a8760059e8f7c42f69f2b85a"],["/library/python/【request】网络请求/index.html","9663a668bbfddf38b26df00248bd4b12"],["/library/python/【tensorboard】可视化log日志/index.html","ed9c47effadb3ef74ef9f0da2401324b"],["/library/python/【timeit】获取时间/index.html","4c73756e6b488a79a1849ec521313d4f"],["/library/python/【torch】机器学习库/index.html","c303d5dbc13131480c04ddd63f460909"],["/library/python/【tqdm】显示进度条/index.html","3e145c4a6eb959d76c1d3e665a7f57b9"],["/library/python/【ursina】3D游戏/index.html","912f7993341e9bdf1a04cd782bb9a622"],["/library/python/【win32gui】控制win系统/index.html","58b7c142cdfcf6524a3538f0120ba451"],["/library/python/【winsound】控制电脑蜂鸣器/index.html","696b3d08390f9a4fdc2e3b6765152240"],["/library/嵌入式/worked/【沁恒】样品试用/index.html","9925b168bb2dcd02e80a7c4eb8bff866"],["/library/嵌入式/【git】学习/index.html","5e0db845a2cbe974c02a10004db2526c"],["/library/嵌入式/【linux】常用指令/index.html","3fb1791a93c2cf705e36181788c4b53d"],["/library/嵌入式/其他/PCB作画规则/index.html","5ec9c5c5fac446d3663501177bef94d1"],["/library/嵌入式/其他/犀牛建模/index.html","5e52a70eebf53ba2e1339219012ea094"],["/library/嵌入式/模块/【模块】GPS模块/index.html","0bd6278441738e1042ab014bbde0ed97"],["/library/嵌入式/模块/【模块】OLED/index.html","faa660f1eb1a60e513017731b18bd79d"],["/library/嵌入式/模块/【模块】amg8833/index.html","47d63c0b9a86a90cfe75d048067fffa0"],["/library/嵌入式/模块/【模块】as5600/index.html","ce99358e537b8f0328596611e285fbdf"],["/library/嵌入式/模块/【模块】数码管/index.html","dc36f5a146e4a9a7768056ff5333dd2a"],["/library/嵌入式/模块/【模块】电容触摸按键/index.html","840afafa5516ae1f095abfe3685094a8"],["/library/嵌入式/模块/【模块】蓝牙/index.html","815f62c651c9863e63507c7c6342ca8e"],["/library/嵌入式/模块/【模块】蜂鸣器/index.html","db48c0ac60baec1c74d748d31a9797a7"],["/library/嵌入式/模块/【模块】超声波测距/index.html","76e3ab739df54ee4597e90d394919825"],["/library/嵌入式/模块/【模块】陀螺仪/index.html","0e9bcb056af435b4d8b9af5eb48daf45"],["/library/嵌入式/硬件/【开关电源】学习——buck和boost等/index.html","758841ea9655b96a9b4591c6c2cdbb92"],["/library/嵌入式/硬件/【开关电源】选型和使用/index.html","f189d6e07814114192c6397c3126b31e"],["/library/嵌入式/硬件/【硬件知识】H桥驱动/index.html","1daa054947b49ddd5fa76d6d37862332"],["/library/嵌入式/硬件/【硬件知识】三极管/index.html","e3be66e7033c7978284836976fe50c44"],["/library/嵌入式/硬件/【硬件知识】无刷电机和电调/index.html","ea5e731af8d6ae4dc60943cae49d1ba9"],["/library/嵌入式/硬件/【硬件知识】模拟电路pwm/index.html","79910b1e581d4bf9008d941340a8bd6d"],["/library/嵌入式/硬件/【硬件知识】芯片熟悉/index.html","d83a072c005f17b43bba8506594d4213"],["/library/嵌入式/硬件/【硬件知识】运放运算电路/index.html","22eacb823439d1f9bdb8114217338a09"],["/library/嵌入式/硬件/【硬件知识】连接器/index.html","bb1d8e8396932ee49f571baecf471cde"],["/library/嵌入式/硬件/【硬件知识】选型/index.html","6c05b50e2066fe238931f3583c422a18"],["/library/嵌入式/积累/【嵌入式积累】基础知识/index.html","5c10a89e3c9609e64dfe5a9ca5b6a8b2"],["/library/嵌入式/积累/【嵌入式积累】常用官网/index.html","66c6a60402ee588bd8e34ffbd5a1548f"],["/library/嵌入式/积累/【嵌入式积累】控制入门/index.html","c7d47a4b499f1cee506701683d398ad1"],["/library/嵌入式/积累/【嵌入式积累】阅读寄存器手册/index.html","ebee434bea2ae55df19f6c95bc0d6b2d"],["/library/嵌入式/算法/【控制算法】学习/index.html","9ba3cf6f5cd473448c029d9df895473a"],["/library/嵌入式/算法/【滤波算法】学习/index.html","7c9cc1654583ccf22dcb729503c0bb25"],["/library/嵌入式/语言/【python】进阶总结/index.html","3eaf71fd058dfacbe938f1d2338aa765"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】ADC采样/index.html","ef2cb13938da06313487b122b9e79ab6"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】USB/index.html","5d26de2171cdac158f4ca859f0a737e2"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】i2c通信（mpu6050）/index.html","b5127d1f0cc182031b7826e47ac6f620"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】pwm波/index.html","774bb3c6d317b4996fe851d8a3340ed3"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】spi通信（nrf24l01）/index.html","bb9f213427590befae675f2fbd899660"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】串口通信/index.html","9b0ce6095ffc76df82ae548c212ff75a"],["/library/嵌入式/软件/开发板上手/【V831】开发板上手/index.html","c3e65f54ecebfe61212dfb864a9d006d"],["/library/嵌入式/软件/开发板上手/【k210】开发板上手/index.html","c28c79afa6a007976901e1958b9d27c1"],["/library/快捷键和常用指令/【cmd】常用指令/index.html","3c385d25d75196d404fa9fc8003a1a86"],["/library/快捷键和常用指令/【pycharm】快捷键/index.html","6a423cb0af2d13a05a34baaf5308e41b"],["/library/快捷键和常用指令/【win】快捷键/index.html","8212dc7aea41c960493c49efea384e04"],["/library/快捷键和常用指令/【清理内存】常用文件/index.html","c2cf87d83baa14838ce9150fce2aa3ce"],["/library/快捷键和常用指令/免费下载视频/index.html","95a8737c3bd075f91ac28b116165f280"],["/library/深度学习/【深度学习】基础知识：×NN都有些啥/index.html","aecf9588f6339f0a55c4fa8aafcb1ee9"],["/library/深度学习/代码/【numpy】语法基础/index.html","9371fcdb8701f0f8d505caf1c05a5684"],["/library/深度学习/代码/【torch】语法基础/index.html","342683ed858f71f8f93e5a853de88689"],["/library/深度学习/工具/【深度学习工具】onnx学习/index.html","8d2d343ef5a4a237c27f532ffa46e237"],["/library/深度学习/工具/【深度学习工具】tensorboard学习/index.html","3b2b8f38fb1d638c237efe1640b6c0ce"],["/library/深度学习/算法/【算法】贝叶斯优化/index.html","c00d4a63d344250ca9a6b48016940a28"],["/library/经验积累/【经验积累】导师选择/index.html","009f40c1951aa686f3e85151ac2bfc62"],["/library/经验积累/【经验积累】开源协议/index.html","dfc12b79c7f90104f8c0bdfc2ab44388"],["/library/经验积累/【经验积累】网址整理/index.html","9d67fe8d7a55034c025c2f526cbf7d56"],["/library/经验积累/【经验积累】论文搜集/index.html","6baccae26f268c5e001ca725949d4633"],["/library/经验积累/大学毕业选择/index.html","90b01aaf75352dfc5674ebfa3944fe5c"],["/library/课内知识/【FPGA】仿真和烧录/index.html","d526814a7924be5e591abbdffadeab41"],["/library/课内知识/【Project】项目管理/index.html","56f4a3df52173d02177bad122925a5d8"],["/library/课内知识/【analog ic design】学习/index.html","d3b14fa9f8bd9a0ecb452e03721b373f"],["/library/课内知识/【matlab】学习/index.html","9727dd992334e714fc1b4929b3d25dc8"],["/library/课内知识/【verilog】学习/index.html","128f0b1bfe811f4b7d6d02a88f938603"],["/library/课内知识/【zemax】光学设计eda/index.html","6e1bffb480deb1f9e212782a459f2f92"],["/library/课内知识/【常用数学公式】总结/index.html","081140fe3028a0eb18006ac9601f629a"],["/mylibrary/css/float.css","d47fd0f572e511142a5b340724b02004"],["/mylibrary/css/hide.css","4f66f62409599368c8e817142bbf59e2"],["/mylibrary/css/load.css","9d83fb4ef590b65392ea2c6fdc2ab5b2"],["/mylibrary/css/neon.css","1c850493d2d1fd5e84c95ccc78e67841"],["/mylibrary/css/round.css","f076be1e0e4104578b26389759ba2663"],["/mylibrary/css/shake.css","7670d2625aefa38148043200f3491eec"],["/mylibrary/css/shiny.css","cf7831b2e0bc57234db180120beb7b49"],["/mylibrary/index.html","cb1dfa76cba490111d38dd724cb5f574"],["/mypage/css/style.css","755d2df1e7cb51ff53e07aa7cb5dabf2"],["/mypage/font/LigatureSymbols-2.05.eot","5b46f67c079e0599f89aae807cdad560"],["/mypage/font/LigatureSymbols-2.05.svg","f4be952f02a00bd7b464568304b12842"],["/mypage/font/LigatureSymbols-2.05.ttf","48ae0b91a8d6e1feb2c15961a338dad8"],["/mypage/font/LigatureSymbols-2.05.woff","f974884f441019724c351f85478b3938"],["/mypage/font/README.html","7a0300aca1c2be2b62bcba0b06d47dee"],["/mypage/index.html","60f273228faa7215dcf92d5ad39b6675"],["/others/Write-blog-using-markdown/index.html","69a7c8be9c0cfba0550288cf2f2b8e18"],["/others/chatgpt/index.html","61dcc20c47348a2e4701d9a52807bd0c"],["/others/little/nus soc sws/index.html","ec95a1316106a960129210e2a488430c"],["/others/little/粤港澳6日游/index.html","5a94c0060d16b434790ee0aa1ca6693e"],["/others/古诗/古诗/index.html","0bfa239776859f1cab7b5bee0f41933d"],["/others/能力年表/index.html","b1f7a19c6224a1cf4eca35bd1e58bd09"],["/page/10/index.html","1751900ae24934afe62950b66dc2d359"],["/page/11/index.html","0ab999e23e58f3e8462cd9d947bf36c8"],["/page/12/index.html","ddaf92f2fd726b83f6e96aea83ccb94f"],["/page/13/index.html","3a6d51df15e83e8dd83ccf8e0e495e3c"],["/page/14/index.html","edd529bc530c8d803cdb8507a9713083"],["/page/15/index.html","49410199b2e8b17ba605b63e6c4b2694"],["/page/16/index.html","ee32c4826ded5419e91ceb20ddf6241d"],["/page/17/index.html","9e55e14c924ae631ed206fefb53bbe5d"],["/page/18/index.html","8ae876677b7d01c7d9ed88b5549b4c26"],["/page/2/index.html","e1b505f5d9e1494a4d9befdd78319149"],["/page/3/index.html","048f88876135d64950f8b094849fb87d"],["/page/4/index.html","96d6eab25df81a4ec59767ae3e485bf0"],["/page/5/index.html","588f279a1d6d8bad3dfff38c66805ef1"],["/page/6/index.html","f498015d2d6763483d6039ecd3a99f1d"],["/page/7/index.html","44b87fbabb9835e1ea380d17ab38684a"],["/page/8/index.html","af4716d94e79e4cd797bfcce5a45ffb0"],["/page/9/index.html","a44578b440b1c0f33376838a97800593"],["/solved/chatgpt您所在的地区无法访问/index.html","d487146e466c5401bc2dac8b570b48bb"],["/solved/github的github.io项目打不开/index.html","d02e2cc6fb4ef1ada2717c302f268ea4"],["/solved/hexo部署报错spawn failed/index.html","dfa59da7af2fc866085808082537b690"],["/solved/modelsim的-novopt优化相关报错/index.html","85301793af8f8579f02caa7c24857a83"],["/solved/npm install 报错/index.html","90fab02cbda667f9499f03c20f0101d9"],["/solved/pycharm修改快捷键/index.html","25dd18656534c112e763d2f86a7c0573"],["/solved/pycharm内无法打开cmd/index.html","738ca6605fb574be1c97f41d04bed63b"],["/solved/worked/chatgpt微信机器人/index.html","f90688aa37bdbbf6b374f93d50c11ac7"],["/solved/从regedit改变键盘映射关系/index.html","f0278e03a3dfb30c6e3689ce2c6bed6f"],["/solved/双拼输入法/index.html","511bb03fd3fbb316cc3fef4c52a64dac"],["/solved/右键新建菜单管理/index.html","ea78537f2b59c5ab8f4e622c5aef6f19"],["/solved/执行make menuconfig时报错/index.html","aa260344b0cfe9131103e1bc5692eb3f"],["/solved/报错binsh 1 bc not found/index.html","76867b2c274e2642715f9d99ffaafe25"],["/solved/报错binsh 1 cc not found/index.html","31e4d6f6c9f5909ee43c66f8ef7baf11"],["/solved/报错binsh python not found/index.html","a6c9dc1b3280a6cafdff3f6cb3b1b1ab"],["/solved/未整理/index.html","e154c3fb37c69d7bcaece625bf105465"],["/solved/树莓派域名解析暂时失败/index.html","a7b7601583fe2cda58f63be4e1a5e6d6"],["/solved/树莓派配置python环境/index.html","95ae978e33763865bc37e4058282755c"],["/solved/环境变量配置理解/index.html","3821471e196cc0435d7615078a67a829"],["/solved/设置软件开机自启动/index.html","1b60ed98b9299ff3d21bc6fba63b8e70"],["/sw-register.js","a35bb52373f958df6e3f2b9da7c35872"],["/tags/ADC采样/index.html","5e001f8aba769e38915a563bd4367e29"],["/tags/Block-NeRF/index.html","6acdd34c5c84c6b4dbaebb45364177b3"],["/tags/CV/index.html","865e38bad5f96398d79bcc2acebda2cd"],["/tags/FPGA/index.html","5cce72271612ae64b1792f778305ed85"],["/tags/GPS/index.html","4416c291b1451e7ce5906e66c8df49a6"],["/tags/HAL库/index.html","637efb45f6e9a71b3b0a40a20c49d859"],["/tags/H桥/index.html","5d18fda0d204f24f19c6c1e93a0a2bab"],["/tags/INN/index.html","4102cbfbe2138d774f28816487ab47a2"],["/tags/INR/index.html","2aed996a258e6daf3f23c767ac2d8ad0"],["/tags/JIIF/index.html","402715c4fdfecb64ccbd409e063a0b0e"],["/tags/OLED/index.html","65c775c5f5e5ea916f2e5d37a2ac27b1"],["/tags/Point-NeRF/index.html","aed062d7360afbbad8f8eb27f0463433"],["/tags/USB/index.html","ea67c59db93cb07af95f98e0d3bf88ab"],["/tags/V831/index.html","e49921579fe3757f4c4da10fe17b6d5e"],["/tags/adb/index.html","738c16876dc12b89b25115124313144f"],["/tags/amg8833/index.html","d21992254c3dd5abfa361db9edf795ef"],["/tags/auto-js/index.html","2f66d39e5bae3f54c695b6e4f80604fd"],["/tags/bard/index.html","aff6b66b08e3a0116c0a43fa16054b6d"],["/tags/chatgpt/index.html","2dbe788eb0cfd72de36a3eebc08899d6"],["/tags/cmd/index.html","3137fbb0d88ca74a62b2eaf7d3d89411"],["/tags/conda/index.html","8279ebcfe410400c86ba22b781df8dc5"],["/tags/css/index.html","ee6be1547984d79719626fe009b98847"],["/tags/frontend/index.html","4c01e671c305638c1a6df24bd4e02a0a"],["/tags/git/index.html","aa0f9258ab3e101f0cccc7b8b24f6dff"],["/tags/github/index.html","8a80ede5d806714022757bc5408f49af"],["/tags/gpt/index.html","73113c68f40760f88760a01868639c9c"],["/tags/hexo/index.html","728bf6611005fa53b92f3c776254a658"],["/tags/i2c/index.html","4059645f73eabcc00128b1bdf1c30001"],["/tags/index.html","6d94ef71c29c138c528c95961228b577"],["/tags/inte/index.html","06d3c34011e7202290d540d7c1aede0e"],["/tags/k210/index.html","e3544d06824268aaf4e4a77580df1173"],["/tags/library/index.html","ee359dfeefbfc78195cd6590b02c0fbd"],["/tags/library/page/10/index.html","34d5c09e4425b3d310e31923cecb3b04"],["/tags/library/page/2/index.html","780494c2cfcc0067c5e79575b34d7e24"],["/tags/library/page/3/index.html","80c32c672459c70b51c83f942b6c28c0"],["/tags/library/page/4/index.html","e06a5f244fb81b1956ef4eebf68844ec"],["/tags/library/page/5/index.html","621355d4c2c53c40813e63db579f2cba"],["/tags/library/page/6/index.html","ff3d5f6cc167c2cd3bbb1240039f827a"],["/tags/library/page/7/index.html","0fb6ce51dc313afe176c25ccc2b6907b"],["/tags/library/page/8/index.html","b51987220b43bc3c171e29601c1b2296"],["/tags/library/page/9/index.html","321996ae568c507cdc5c136177dab86e"],["/tags/like/index.html","329b92c1fc1e5e9fba114c4521322ad9"],["/tags/linux/index.html","2b345582a6ab094fdcf9982e6a2832fd"],["/tags/little/index.html","30dd11d976fa0be42f13aece848c1c9d"],["/tags/make/index.html","8f7171754dbbb678fdeb451d6c58520a"],["/tags/math/index.html","8420447726176acf8dd24a2de1e89133"],["/tags/matlab/index.html","f3fcb3bc17d5e2c1ccea5c110609d0c3"],["/tags/mine/index.html","1eb47c7abdb8a6dd06799fb311a2c542"],["/tags/modelsim/index.html","98bceef13e910e21da266a9b9bac161a"],["/tags/nerf/index.html","9e26a0a19468f89bf70dd708cf60fc48"],["/tags/nerf/page/2/index.html","ce67e623a4b750004cab451816ad3c84"],["/tags/nrf24l01/index.html","9dc50fb2ffc74a83431538933aa18904"],["/tags/nuitka/index.html","4cf734f7f0b7db2f666227c4ed1ff793"],["/tags/numpy/index.html","ced78d671a38cc95760c4a11fc8364c2"],["/tags/onnx/index.html","658bae8edcff132b5524011c564036f5"],["/tags/pcb/index.html","d0a36636100d7342e57938bfba184441"],["/tags/pip/index.html","aa6464503ae42c933c133c42dc73d37d"],["/tags/psutil/index.html","418456c487ca707c3737540d44879698"],["/tags/pyautogui/index.html","987a1cbb22d2da16e8f2f70ad3b35aef"],["/tags/pybluez/index.html","8c06b37e009a228ee69445100cd6e498"],["/tags/pycharm/index.html","d4cfe6aa2c3b684899d7bc249158e3ef"],["/tags/pyinstaller/index.html","ecdc40d2e2c4b7f5e171fba80d5b5df2"],["/tags/pyqt/index.html","60198c5b7a2b6f3a2bd86b858cc35e7f"],["/tags/pyserial/index.html","dba5006d83cca2a6b20beb24892c0a57"],["/tags/python/index.html","545a0bbd67ba1925ecaff0006518ea62"],["/tags/python/page/2/index.html","00781c94290b5b7314236322e19e2319"],["/tags/python/page/3/index.html","adc0e3e7ec28b83310bebb4fd65c33ac"],["/tags/python/page/4/index.html","2bcc66deb309b9f5877520a26ff28003"],["/tags/regedit/index.html","4bbb28c5a52dd1133a407b9f2fdfd257"],["/tags/solved/index.html","32425939d55da0c11247010855692c18"],["/tags/solved/page/2/index.html","981b4c0734abccae65ac5502f53fe37e"],["/tags/spi通信/index.html","196958c1a9b6199ca86467a4e0d72739"],["/tags/stm/index.html","e443bf615c2cf569de8069e38f4b8ec9"],["/tags/stm32cubemx/index.html","f9607306e8128212f7be32991ac30a58"],["/tags/tensorboard/index.html","c928570899eef77ad8e528d5eabcf6ad"],["/tags/torch/index.html","1a60fd43404c25bde0aa59cee4530ea8"],["/tags/typora/index.html","833041ce1da651f635620acc4a306406"],["/tags/ubuntu/index.html","823c3ceaadee95ba956f05bfcb19c144"],["/tags/verilog/index.html","9fdef97162ea64c57f36928563294b47"],["/tags/vue/index.html","74c204a385d453bdf05f16008f4b5770"],["/tags/win32gui/index.html","ba04f569363b1a9a8803d9d130a3608f"],["/tags/windows/index.html","553be8ddfdbef47a9f874a75fb8b9abe"],["/tags/work/index.html","9317d35c712004fda85346576833f0b5"],["/tags/work/page/2/index.html","705e46cced4dbfbea0b1c26eed7dcef0"],["/tags/work/page/3/index.html","b89f99d61c6b96a158ffc57904f1fb2f"],["/tags/work/page/4/index.html","4846e73fcd96c99a3a5bfc0f7db25abc"],["/tags/work/page/5/index.html","5178a3fbfcbf85e65ec6c5f979f45e50"],["/tags/worked/index.html","f91e76d92f22fcc6b4daf337f04c0017"],["/tags/下载视频/index.html","95e079a89d9d3d8f92fced7e7a63ae69"],["/tags/串口/index.html","3548a82899ea1fc39ed7ef346a2cb85e"],["/tags/代码/index.html","0226957c4b07f33f5c4e0c944a312b4d"],["/tags/光学/index.html","99bf903e40368da13db7a2fab89bae28"],["/tags/全志F1C200s/index.html","b7ac9b5aab2a09a7bbfdbd0439ad3d35"],["/tags/公式/index.html","8db56487ff2348bfe04230a75de2bc2a"],["/tags/前端/index.html","3ab32618f576d13fd48e61ebe1e90d1c"],["/tags/博客/index.html","e2175112ef2e0a5a6a41c9fd2993e7ed"],["/tags/国产/index.html","3957527f5cf64ba41ed85d54114fded7"],["/tags/多光谱/index.html","39becd04a77c8305b214691d40927132"],["/tags/大学/index.html","394e1961cef4b20931f3c563bfbffdbd"],["/tags/嵌入式/index.html","5b8e90aef9030bc6dcdec16a7fda8c1c"],["/tags/嵌入式/page/2/index.html","5925c31dd88f5e7084cebc11228e750d"],["/tags/嵌入式/page/3/index.html","8a8872037a25206840e2af6a74f647c7"],["/tags/嵌入式/page/4/index.html","2b853075f70dd92d06c380537dd10519"],["/tags/嵌入式/page/5/index.html","48596b5f5b1a79d12be36284acae4665"],["/tags/嵌入式积累/index.html","76596ba80d3af3de34264cec79dc1d90"],["/tags/开关电源/index.html","150a4b0b7f31c18eaf8f5cc84bebc968"],["/tags/开发板/index.html","b20ceae2c07fa1199bf47aa8c68f6947"],["/tags/开源/index.html","634785b2cc05359acf6036ed11d94a63"],["/tags/忆阻器/index.html","0892980fde29642c29914b555034d407"],["/tags/快捷键和常用指令/index.html","0bc86fe7804db333a3fd3a4bbfc18a52"],["/tags/手机/index.html","57632e7b07f5e58c34d4b298bf01d387"],["/tags/打包/index.html","c62669c01304691cdbd76f5605194996"],["/tags/控制/index.html","99387eef84042a24e54303c8e6827d2a"],["/tags/数据处理/index.html","d8f37e10775fa6062782244b014c9bfa"],["/tags/数码管/index.html","3fd2992774d32e18eee64c55d70e0e1b"],["/tags/整数规划/index.html","5469add8d39f6fb29d0c75b5d380157d"],["/tags/新加坡/index.html","a17dc017e91b31fafeafb2c0a0bf56cf"],["/tags/旅行/index.html","05fe8d2a6ce4845cef4c9ce109f91d3f"],["/tags/机器学习/index.html","627e2e22c0f94894cf6ad45f93699731"],["/tags/机械加工/index.html","4852f458b3a53bcd54f8c0561533022d"],["/tags/树莓派/index.html","74c0f8293a0f2182d7b88b7f28e20068"],["/tags/模块/index.html","6cfbd70cfb5932f96317ae9a399b4f6a"],["/tags/沁恒/index.html","b294d4d671916af669e67d14a8102db4"],["/tags/测距/index.html","a892d68fdc0744ed29b2ded107200248"],["/tags/深度学习/index.html","e3184a104caa4771cff797a55ce16038"],["/tags/深度学习工具/index.html","2d2e2cfedbe79fac0e80c4bc0a2a3ef2"],["/tags/滤波/index.html","83ba83b7ed7590f8c808a325dd816bfd"],["/tags/理工方向/index.html","fe933e34b453f6abbf1f2d1985b92514"],["/tags/生涯规划/index.html","a140e396d5446e06b68e85f9654a8861"],["/tags/电容触摸按键/index.html","364fa087c48c85a103ebf24015db41e9"],["/tags/硬件/index.html","f16ab53fced6f26f3a5df5a8fa5a6e82"],["/tags/硬件知识/index.html","aafd8f4f3aede3a5557c98e483d4a451"],["/tags/积累/index.html","e824825864c750944c80c7638494deaf"],["/tags/算法/index.html","8d4e1445cbf7bcaf703dba05a6fde8ef"],["/tags/线性规划/index.html","0bbe3d523ebdb5e23eaca066c065c0c6"],["/tags/经验/index.html","14993873730e8c7607ee0684bddc120e"],["/tags/经验积累/index.html","0163890bcfed3fada70ded5f95027138"],["/tags/编码器/index.html","14b35dcfed52360ea54e56dfd4c064cd"],["/tags/网址整理/index.html","b9d08ba3cba06211cc00642b6be03f06"],["/tags/航模/index.html","6458a7942488d6098b29f03c9968e20c"],["/tags/芯片/index.html","e8d9241f2ffe28f6bba803370270f118"],["/tags/蓝牙/index.html","c12e1e60e0cd0edcf42e769d5befc246"],["/tags/蜂鸣器/index.html","6503840dbe57a374dbb6573ed8ba2fb8"],["/tags/论文搜集/index.html","13e337eb21b7b968cd41dfbd2a501fe9"],["/tags/语言/index.html","c41614c9292c54131da2adda0f0cabf7"],["/tags/课内知识/index.html","0638af7c621980d8f7838f0d9ddc3146"],["/tags/贝叶斯/index.html","e4e4ba42e073671fe3ce2735a8ca5b73"],["/tags/超声波/index.html","706c19e67dc9763d15300f6867bcf298"],["/tags/软件/index.html","72ce934749b6366f9772015b9074ae14"],["/tags/输入法/index.html","625b11da7cdf9644e48ae9a1e31dce91"],["/tags/运放/index.html","c60bacfaad35dd7afd27606c28d67343"],["/tags/选型/index.html","1771164303989640b414e292eba64180"],["/tags/通信/index.html","7c3a8d6fa44de940dc590a37fb56078e"],["/tags/钢琴/index.html","be954d66235b9cfb537d5442b3d3ecdb"],["/tags/键盘/index.html","50e67c492ef6e656f948263cffef0374"],["/tags/陀螺仪/index.html","5fc1c0d8188f15b00b571cba77655643"],["/tear/index.html","a1a36977ac35b43dacf16fc899185896"],["/tear/index1.html","ca91f99863a2c82df4fb35edc730015b"],["/undefined/一下都是0/index.html","0ca22b3608e1037e335bfc225173ade8"],["/work/CV/【INN】积分网络/index.html","0db9ae271155dc744dfc489b7230583b"],["/work/CV/【JIIF】多光谱融合/index.html","432ca7a3bcc1b8c31361bc888ab08141"],["/work/CV/【LD】大模型做pansharpening/index.html","3cd000fffae09dafb9bf42853d91a903"],["/work/mine/gpt本地部署/index.html","0613e164034dc92f46f0920a7161c59b"],["/work/mine/控制电脑风扇/index.html","b9363e5b2036bd00f187d36467e8fc21"],["/work/mine/电脑外接摇杆/index.html","12ede880cfb73f4335424146f4b91501"],["/work/nerf/【nerf】Block-NeRF笔记/1667118074452.png","221e63aa60efa77dca50740ce9b88380"],["/work/nerf/【nerf】Block-NeRF笔记/1667118457009.png","5c1577c940dd443631045f45787e487d"],["/work/nerf/【nerf】Block-NeRF笔记/1667226872521.png","ec7a6051752cb193ae983fb81d135fce"],["/work/nerf/【nerf】Block-NeRF笔记/1667264387582.png","57b13f83c9dfd506e6ccb81743f74963"],["/work/nerf/【nerf】Block-NeRF笔记/1667265226170.png","600b87f6ea78e46e19929200a8190875"],["/work/nerf/【nerf】Block-NeRF笔记/1667292838757.png","f9c6a5975d54d8b975e9de23dc891c00"],["/work/nerf/【nerf】Block-NeRF笔记/1667293450480.png","57c9efd9a2a4ae995517991ff7abdf32"],["/work/nerf/【nerf】Block-NeRF笔记/index.html","e147c5fadcfe5e3189ac44d4b7d38c2a"],["/work/nerf/【nerf】Point-NeRF笔记/index.html","c535bea686b1338b9678fab64c9f635e"],["/work/nerf/【nerf】nerf-pytorch/index.html","178750b6fa2539f4317984562f185d10"],["/work/nerf/【nerf】最新阅读记录/index.html","c45a85054fa1e8aaf5ed81d5cedd8801"],["/work/nerf/【nerf】汇总笔记/index.html","bfcdc78a0b3dcf314e418dde598db514"],["/work/nerf/【nerf】记录/index.html","f5d1ddbfae97a835fb37eaed369aec29"],["/work/python/文件内容检索/index.html","c40b3edbe81e97de8ecf5389a7ac656e"],["/work/python/游戏AI/index.html","b4be28b90f879f135e1e8db72c93c2cf"],["/work/python/网速显示助手/index.html","e3139394d3d044618c1ce2af985cffba"],["/work/python/羊了个羊自动化/index.html","b3b205e37f625549e5f7ccbd136c27f4"],["/work/python/蓝牙调试助手/index.html","3566485f137555bc99919962a4f768cc"],["/work/【生涯规划】保研/index.html","d31cc0be653519666a34b31c5c938a3a"],["/work/【生涯规划】文书/index.html","ba2c421f790f8536c2709b431c5f2bd9"],["/work/【生涯规划】留学/index.html","01183a0fa075c94e36aa380ead7c5181"],["/work/前端/【前端】记录/index.html","0b551b33939660f517992e9e5b796214"],["/work/前端/【博客】记录/index.html","23793f33f7f4371c3bf46bea15835583"],["/work/嵌入式项目/bard/【bard】Linux迷你电脑/index.html","292795ce08c0a19fc44e0fed08f6a700"],["/work/嵌入式项目/【usb-hub】记录/index.html","c3c1223a7594eaeb14839f92a96386c3"],["/work/嵌入式项目/【加热台】记录/index.html","3bda443cd71eab804e4d5f8a1b7b2fda"],["/work/嵌入式项目/【四旋翼飞行器】记录/index.html","6633b65e5de3262dfb3bd559e3c1217c"],["/work/嵌入式项目/【生日贺卡板】记录/index.html","ce2b59cadeee7b167c06d0c2f78b5623"],["/work/嵌入式项目/【祖传板子】记录/index.html","985d6fc9180c6af16f8654ecd6f4b904"],["/work/嵌入式项目/【自制无刷电调】原理/index.html","b2083ad8f5809e311d9d5c6459967fc3"],["/work/嵌入式项目/【航模】记录/index.html","36e4eadc17aa2da99b37341c5796c05a"],["/work/忆阻器/【忆阻器】python平衡车/index.html","939fffc4d878f6593a5fd763b023c7a9"],["/work/忆阻器/【忆阻器】平衡车专利申请/index.html","306ed9042408bb775b4ce565c1f5ce5b"],["/work/忆阻器/【忆阻器】算法部分/index.html","49b02f1ebc31c7145c919870356c377c"],["/work/忆阻器/【忆阻器】记录/index.html","e9dbc564f479acb479e8cba3f634116e"],["/work/玩别人的开源项目/尝试过的开源项目/index.html","6e837296f8474e6efbd5e157479f3581"]];
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
