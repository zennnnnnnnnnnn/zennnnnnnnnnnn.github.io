/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","e4bf14252aaa815c95ba93ef617786f7"],["/archives/2022/09/index.html","eb7a2acde6789f8dc8df23ce6a3a1dda"],["/archives/2022/09/page/2/index.html","e014c5ce04ecec9d52ee20d7b9242937"],["/archives/2022/10/index.html","12a12597865df55762d82276b1895e7b"],["/archives/2022/10/page/2/index.html","2f9fbb927191c799cf6eecdf07ffe64b"],["/archives/2022/11/index.html","f8acad8407b84cb9a81f7d5f3470a14c"],["/archives/2022/11/page/2/index.html","320928006991df2673171a194f6e54a6"],["/archives/2022/12/index.html","b970a46dcd48771451ed7d24aeba6cbf"],["/archives/2022/12/page/2/index.html","3ddff220621d85192127f311b4c8555a"],["/archives/2022/12/page/3/index.html","c90229bfbe6b299f0fa774872d5bfc7d"],["/archives/2022/12/page/4/index.html","83f9cae95b1d485e718d31fcf1c09870"],["/archives/2022/index.html","2e5186a1ba2ee834e0e649b1dbefbf2c"],["/archives/2022/page/2/index.html","1888c80a311f3118573fec9f41a96745"],["/archives/2022/page/3/index.html","bedca606ea716e3e8fc8fc8eb2e1e19a"],["/archives/2022/page/4/index.html","fb53e23235f77cbee6617c4b53a29224"],["/archives/2022/page/5/index.html","cc150bda7a8658fb45886beefd373b0f"],["/archives/2022/page/6/index.html","fd6b4b4489475b4f29cbc844bc3df8b7"],["/archives/2022/page/7/index.html","9abd7ae41c20857446e2a3eac7be63eb"],["/archives/2022/page/8/index.html","103c547bed5c02441f28f99f8d7dbb1a"],["/archives/2022/page/9/index.html","4d62a1210277bff3f231478062df0d9a"],["/archives/2023/01/index.html","2cbeaf744ca17386aedf499714791e91"],["/archives/2023/01/page/2/index.html","405af6a6117ad2aba991b772435453c8"],["/archives/2023/01/page/3/index.html","26922b4ac9b0b3973d2b39bfa91c808b"],["/archives/2023/01/page/4/index.html","d38dd19890422dff7b2e1c03cf966325"],["/archives/2023/02/index.html","89a85ca53d3ed995cd9ad9c6a3f77f26"],["/archives/2023/03/index.html","bf0e74866873eee6fa90972d2f8302e2"],["/archives/2023/04/index.html","bce4a844fc791e8092010d2b60830fc6"],["/archives/2023/05/index.html","97c821f8ede03428e6984477b737778d"],["/archives/2023/06/index.html","2fc0fb93030bbd7673c8e8a762584693"],["/archives/2023/07/index.html","8f87e86e59118805ad11291ad168fe95"],["/archives/2023/08/index.html","ad7a5af9e5fe4e031c153ce4062abc10"],["/archives/2023/08/page/2/index.html","da8ff1cb892192fcf99552a063312ef2"],["/archives/2023/09/index.html","188ea0ded89a6e161723f14a868fe677"],["/archives/2023/09/page/2/index.html","7af679bb1d27298eca8fa910ec4eb8e3"],["/archives/2023/10/index.html","186cd66fe6c5f9604024ffa76a213664"],["/archives/2023/index.html","5b79818b49685ee5c4651a8c98f97e23"],["/archives/2023/page/2/index.html","cceea91597a74a6ec2046c52b2aed6a5"],["/archives/2023/page/3/index.html","3a322d9875560e27e44a8d78f052e867"],["/archives/2023/page/4/index.html","d351fe270f53bf73f4a01d40f395bab5"],["/archives/2023/page/5/index.html","cf6d04b8ae3666f7bf5ed52a55ba7a5c"],["/archives/2023/page/6/index.html","28bdef960e78a6574c590b57319a707d"],["/archives/2023/page/7/index.html","b2f7948ff3a14a069e26c08555602890"],["/archives/2023/page/8/index.html","cf06215b12daa68cf37966eeacd6ec5a"],["/archives/2023/page/9/index.html","9b1b508dc6de0418d23f066814c8fd1a"],["/archives/index.html","66e409a2219c7c93c05d49a9db5ac300"],["/archives/page/10/index.html","ad718d8e479431359ded6dfdacd2139e"],["/archives/page/11/index.html","3b27b01cf3b529ae0a6a0e07add122ac"],["/archives/page/12/index.html","e0bad3ef34bea27e9b7a3e87697cb97b"],["/archives/page/13/index.html","65ca089e49f1fab6ac9c346568433944"],["/archives/page/14/index.html","c7a3e06c9f08fc2590e5c18621f25622"],["/archives/page/15/index.html","0a9f7027fa1659ada46b64fadab1816f"],["/archives/page/16/index.html","0c55433fcb99b26f99b35832bbef67bd"],["/archives/page/17/index.html","62d6d110785b923b053fb8025d4a0a7a"],["/archives/page/2/index.html","3592bb98fd178280071d6c5ff3d92968"],["/archives/page/3/index.html","159bec9aec3fdf44dff250341555b744"],["/archives/page/4/index.html","cd1f20b211726a450bdad6b12f4c80f9"],["/archives/page/5/index.html","2fda3e577cc52cdd60c6bd8d108aa72d"],["/archives/page/6/index.html","6e9c8758b3df4cfcc2457c14085eb5f7"],["/archives/page/7/index.html","d5ebbe1f1e923e0ee73a2507079de40f"],["/archives/page/8/index.html","f637f3ed4c8cf78d91cebad130dc081b"],["/archives/page/9/index.html","2cabf130bf1980ba6f166f63cbf42397"],["/baidu_verify_code-ZFSCabM1PJ.html","5e5d0a07933024eebd7e255674539da7"],["/css/main.css","8f47b9adc43c4cf090b45c950e97a1d9"],["/css/spoiler.css","eb373af0627ede298867ffc0045da62e"],["/failed/【硬件知识】vco压控振荡器.html","d8c4390c8de4a7d108ccc83398356c17"],["/failed/【硬件知识】vco压控振荡器/1665803607390.png","3df26768c0d97b3acbb64c7f4738f15c"],["/failed/【硬件知识】vco压控振荡器/1665803663941.png","38d29c573fc0aab159543ee6f3d6b31d"],["/failed/【硬件知识】vco压控振荡器/1665803862765.png","f7e2165483ca1f224fc47019c9d85839"],["/failed/【硬件知识】vco压控振荡器/1665803865723.png","3da7b08b88d8795e53d03a47e1926277"],["/failed/【硬件知识】vco压控振荡器/1665803871404.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/1665803883747.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/clip_image001.gif","ba898c600ecfdb213d2223a0f783c808"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803844893.gif","fb05fad8f7ca3e4d9e40000a9ab1dc09"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803856973.gif","e1a4cd1747beecc7d92124979531824c"],["/failed/【硬件知识】vco压控振荡器/clip_image002.gif","0c0f42f02d474126082016d250804bc4"],["/failed/【硬件知识】vco压控振荡器/clip_image003.gif","1f489bb3e02d4993cdd501f7ec773812"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803844893.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803856973.gif","09cde39109369f9185d1cf128c6d7c2d"],["/failed/【硬件知识】vco压控振荡器/clip_image004.gif","32873c471ff1058abf9d6d09ca5e45f0"],["/failed/【硬件知识】vco压控振荡器/clip_image005.jpg","ea2dddfe9b1da4f406ee36b37c99e72e"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803844893.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803856973.gif","b0138096b0fc7682435ad07aeaf159ce"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803982819.gif","6540947f9843ab822d3e8eeb7ef621e6"],["/failed/【硬件知识】vco压控振荡器/clip_image006.gif","6290aa2f8360b2a4f05e4c09e4d6bc80"],["/failed/【硬件知识】vco压控振荡器/clip_image008-1665803856973.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image008.gif","113b77d852979982495a775ea4d973d1"],["/failed/【硬件知识】vco压控振荡器/clip_image008.jpg","aad87f9838e93808a0caed1ece93ffac"],["/failed/【硬件知识】vco压控振荡器/clip_image009.gif","fd6cf84a1333733613c80d5599c0fbdb"],["/failed/【硬件知识】vco压控振荡器/clip_image010.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image011.jpg","fa6d15386072d8a691d18f9c3a53b426"],["/failed/【硬件知识】vco压控振荡器/clip_image013.jpg","cea0cb9334e0d5f1b84beb2fcd8b1245"],["/failed/【硬件知识】vco压控振荡器/clip_image015.jpg","660345ebf2132d1bcdd9a7455529093a"],["/failed/【硬件知识】vco压控振荡器/clip_image017.jpg","29517d76c214adc17343771d2d804679"],["/google41a28d5f2878fa02.html","9b9961e9d1a7ddfc86432e961be0e776"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/tou.png","578463708d7de56a1c4e6331831b3e2e"],["/index.html","c062617addce12b3ac212d799a271870"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/code-unfold.js","e079f1fdb88a9edcd745220494218e88"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","97606f901b6e488587ad5c49aa367604"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/learning/开关电源/【开关电源】学习1——buck/1663506637120.png","8e50e1a9a14c0174f21513f95808f075"],["/learning/开关电源/【开关电源】学习1——buck/index.html","0abc9d1c482afe6e0ab62595620e85a5"],["/learning/开关电源/【开关电源】学习2——boost/index.html","06b3898907c0285b9a171cb1863e1ff2"],["/learning/开关电源/【开关电源】学习3——VMC反馈/index.html","1a9270a24cd84c3f682c0e06e9f40fff"],["/learning/开关电源/【开关电源】学习3——buck-boost/index.html","73f1e647193e6eef5616cfd1335172a5"],["/learning/开关电源/【开关电源】理解/1663634083260.png","7b1a889ee96c83e170023666681c9131"],["/learning/开关电源/【开关电源】理解/index.html","77414d75c82e1343c61bc4f391bff9db"],["/learning/开关电源/【开关电源】进阶1——稳定性判断/index.html","2d6c318bed74e201c28b15e98dd17f08"],["/learning/开关电源/【开关电源】选型和使用/index.html","4ce9f598af7a5d54c908575d5cdcfccf"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/library/CV/【CV】基础/index.html","26242d5a90a5a3615bd470997490d5b9"],["/library/CV/【CV】数据集/index.html","434154ac5f7bcd96c23636918afc624d"],["/library/CV/【CV】经典论文/index.html","70b91f1feca2958529e509fd56b641cb"],["/library/CV/【IQA】图像评估/index.html","914b46b8454dcfa2aac0e523369125a5"],["/library/CV/【Transformer】attention基础结构/index.html","8a42989508c4f2c3f30da3e480a1ffba"],["/library/CV/【经验】基础/index.html","248e26c8fdcdc24ad1aac8e3b81fc9ac"],["/library/CV/【经验】训练网络/index.html","7456ff27f56c98a8437b85c60c766c77"],["/library/frontend/【/index.html","43c0fbeec2bf319775262ea0875a3f66"],["/library/frontend/【adb】电脑连接控制手机/index.html","ec85240bf65ee77580bee5dde8776f36"],["/library/frontend/【app inventor】拖动滑块写手机app/index.html","14c42f512c64ba21dbbe9995eebe3a1b"],["/library/frontend/【auto.js】手机自动化控制/index.html","2b6a2a1edd6d226c7990c5bc2e7b8f86"],["/library/frontend/【hexo】博客部署/index.html","444754648d6e6b8bbe421d2a4fd70bf2"],["/library/frontend/【markdown】编写文档/index.html","24cd61659300a20b8f41f4305dc137da"],["/library/frontend/【vue】搭建网页/index.html","ba43cae45e2d49f2040f5928eaee6dc4"],["/library/inte/windows的linux子系统wsl/index.html","60519079cbd5de82455ec8974f3755c5"],["/library/inte/【css】学习/index.html","744c4bfa152c2bfb6eaf481d3ddf1374"],["/library/inte/【latex】学习/index.html","eda0a1532538e309f022c2ff8f48bcfd"],["/library/inte/【钢琴】织体类型/index.html","ef8a6fe79141d3686567abad4c20d933"],["/library/inte/网盘挂载Alist+RaiDrive/index.html","b1f4fe36276d362c9e7ea71273be5651"],["/library/math/【math】傅里叶变换/index.html","aff03f31453d86ec36a1c24a93c24919"],["/library/math/【math】高斯积分(Gaussian Quadrature)/index.html","7c25cef779874da1a4e271088a6ccdf1"],["/library/math/线性规划和整数规划/index.html","943aa0925037f1ac765ee097017c0283"],["/library/python/【CV2】图像处理/index.html","000db3e01327552677e7322de102e553"],["/library/python/【itertools】计算排列组合/index.html","3f50619d7598d02d1f69551718889120"],["/library/python/【matplotlib】数据可视化/index.html","64ecfd5574444b7e23101c701408c17f"],["/library/python/【nuitka】打包python为exe/index.html","4a587363dd287a30604f4efd033bfdf3"],["/library/python/【numpy】数据处理/index.html","3024eeb45c013a16ace20e4497bffab3"],["/library/python/【pandas】数据处理/index.html","1454156b52871043187dd6744c471d1c"],["/library/python/【pip】【conda】常用指令/index.html","feb6fa966bf04d18b987f723127b727f"],["/library/python/【psutil】检测电脑网速等/index.html","38afa4fbeae1a8bbc3b6ae0759fabe8f"],["/library/python/【pyautogui】控制键鼠/index.html","3897a3f94158063e2d9008fc5ef014d1"],["/library/python/【pybluez】python控制PC蓝牙/index.html","600e4d466ee621bf015190d6bd7dd112"],["/library/python/【pygame】2D游戏/index.html","2e6e541667b0ec1637b7d71f5bbd9427"],["/library/python/【pyinstaller】打包python为exe/index.html","1472e3b487c8368b7943105888b36c82"],["/library/python/【pyqt】编写可视化界面/index.html","889cea439b156ddef5008ffdfd784bb9"],["/library/python/【pyserial】读取串口/index.html","7e8c7ea859cc4c1d2db9694d79d6bd40"],["/library/python/【python】基础语法/index.html","be7ad9b00f13948c6f5ec1d556357074"],["/library/python/【python】有趣外部库/index.html","286582a93dc21e139d7c858e75ccfdfd"],["/library/python/【python基础】常用内部库/index.html","06134d528111ab835cad94d22fa578cd"],["/library/python/【python常用】常用库的pip安装/index.html","dc8b59bded7188e4656b1edc65254e0b"],["/library/python/【request】网络请求/index.html","2103a1f857a2781b375d22a3cb0fe2b1"],["/library/python/【timeit】获取时间/index.html","4038ab9bd9400777020bfbd7ae5800d4"],["/library/python/【torch】机器学习库/index.html","93362fdc98a8f78777e52580bd251f38"],["/library/python/【tqdm】显示进度条/index.html","838676651e08f24ceb2f17d7a1d083c7"],["/library/python/【ursina】3D游戏/index.html","34ee6453dfc4306e9ed5f9798b2ac43b"],["/library/python/【win32gui】控制win系统/index.html","8cc06666f284a45fda4c1352f0eb54ea"],["/library/嵌入式/worked/【沁恒】样品试用/index.html","cfc030b82b5bfeb2b87e664786691922"],["/library/嵌入式/【git】学习/index.html","6953fe2d5989d8e37414a704576be455"],["/library/嵌入式/【linux】常用指令/index.html","088c97c47389f56bcfbe27e1e36e3765"],["/library/嵌入式/其他/PCB作画规则/index.html","b862dbc9a534d6f69d31a5ba53721569"],["/library/嵌入式/其他/犀牛建模/index.html","00624bdb29ecd3fad2ebfa780be65df6"],["/library/嵌入式/模块/【模块】GPS模块/index.html","88889211705023bcab6af83429c73357"],["/library/嵌入式/模块/【模块】OLED/index.html","1e41534a060662aeb1dcf88604f24f50"],["/library/嵌入式/模块/【模块】amg8833/index.html","9bd0b9e771088b742576a9df1e6bf08f"],["/library/嵌入式/模块/【模块】as5600/index.html","c0dedea49adf59acc70ceb1aa9839c84"],["/library/嵌入式/模块/【模块】数码管/index.html","acd57474f56678ba4ea811b4f556e103"],["/library/嵌入式/模块/【模块】电容触摸按键/index.html","0fc1313a8df87e603334d7f067ffe425"],["/library/嵌入式/模块/【模块】蓝牙/index.html","f94294bc8e691b7e131add45d45b7fa2"],["/library/嵌入式/模块/【模块】蜂鸣器/index.html","d9e255d727d6fce674dbcc6432a898e9"],["/library/嵌入式/模块/【模块】超声波测距/index.html","b6c4aa6ac140d6441b1b7bb8ca9850f9"],["/library/嵌入式/模块/【模块】陀螺仪/index.html","19407d3d88dfd16f11fb1e7ed971386c"],["/library/嵌入式/硬件/【硬件知识】H桥驱动/index.html","c3e1b090d9138ad201e2e0bd11a714ee"],["/library/嵌入式/硬件/【硬件知识】三极管/index.html","a155e35fb508f3be30aec1e54679ebd0"],["/library/嵌入式/硬件/【硬件知识】无刷电机和电调/index.html","76567ca06dc176e05490021039a0161d"],["/library/嵌入式/硬件/【硬件知识】模拟电路pwm/index.html","0e48565425847edf84d78b75efe42972"],["/library/嵌入式/硬件/【硬件知识】芯片熟悉/index.html","5e711da9f7eb75246d54d38c5092be3d"],["/library/嵌入式/硬件/【硬件知识】运放运算电路/index.html","e6e231390509d25f3a2b220ab1fbaa2e"],["/library/嵌入式/硬件/【硬件知识】连接器/index.html","06d668af686f3db99527d5acd5f1c4fb"],["/library/嵌入式/硬件/【硬件知识】选型/index.html","5adf28624ddc4352c996c3560bb73c2a"],["/library/嵌入式/积累/【嵌入式积累】基础知识/index.html","772dc4109c1361da9a6659b3c5d87b4f"],["/library/嵌入式/积累/【嵌入式积累】常用官网/index.html","5b7d0302dc6540eed762a9d1ebeb48ea"],["/library/嵌入式/积累/【嵌入式积累】控制入门/index.html","817d442aef7715f40d6272ff91e6dc7d"],["/library/嵌入式/积累/【嵌入式积累】阅读寄存器手册/index.html","8babf27bb8b87baccf545426fcef651e"],["/library/嵌入式/算法/【控制算法】学习/index.html","67eb1c1027bbd6693ad3d96dd9adfa7f"],["/library/嵌入式/算法/【滤波算法】学习/index.html","a5db2e64012627f8331ba85a382cee39"],["/library/嵌入式/语言/【python】进阶总结/index.html","1830a941556d21862bf7553319d219c8"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】ADC采样/index.html","068cb7d86de19fbe9aff0b9e45502247"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】USB/index.html","1125e235152868120bb7bd780346052d"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】i2c通信（mpu6050）/index.html","aa0831bdc9b66e648164b129a0e83f65"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】pwm波/index.html","4543e755362f688464943ca935f4c4b9"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】spi通信（nrf24l01）/index.html","e254b0bb4d72bd3d41846882b7d54442"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】串口通信/index.html","6227a3eac3945afda0250fde1590c184"],["/library/嵌入式/软件/开发板上手/【V831】开发板上手/index.html","b445d3011634baf14ef998cd016e8444"],["/library/嵌入式/软件/开发板上手/【k210】开发板上手/index.html","3709cd83b77fe899dcbbff17226b0626"],["/library/快捷键和常用指令/【cmd】常用指令/index.html","2111864ee0276869bd84ea6a94833ccb"],["/library/快捷键和常用指令/【pycharm】快捷键/index.html","9b3915e48a0d20ce6f25901c0e30ebdf"],["/library/快捷键和常用指令/【win】快捷键/index.html","9d0e3d69e33c55c5f66dd05d8950ac8d"],["/library/快捷键和常用指令/【清理内存】常用文件/index.html","e6c55de1da6ebbf0b52f2174b9e66a8d"],["/library/快捷键和常用指令/免费下载视频/index.html","c6a2aacd5748aeb02944988599692c9a"],["/library/深度学习/【深度学习】基础知识：×NN都有些啥/index.html","b0499ab21ed5bb861e7f74365bb450a8"],["/library/深度学习/代码/【numpy】语法基础/index.html","787b1c6cfeee4e0e4ee9c1d40e154019"],["/library/深度学习/代码/【torch】语法基础/index.html","be493550e22a8cb0d264cdc1f529164a"],["/library/深度学习/工具/【深度学习工具】onnx学习/index.html","dace761b0f88f728764f5ab9a66894b1"],["/library/深度学习/工具/【深度学习工具】tensorboard学习/index.html","76a8eec54e56918ee05d785d9aa05967"],["/library/深度学习/算法/【算法】贝叶斯优化/index.html","72d27ac06a0521b20a66f6769f757427"],["/library/经验积累/【经验积累】导师选择/index.html","40367db2577289bb1715199fee00ed65"],["/library/经验积累/【经验积累】开源协议/index.html","6f149296d2f1d29302987f198b151ca7"],["/library/经验积累/【经验积累】网址整理/index.html","def0508566c9f9d5927c32aaab3a19e1"],["/library/经验积累/【经验积累】论文搜集/index.html","665d81f89c0c45057bd4969cd2b05116"],["/library/经验积累/大学毕业选择/index.html","419e3ac02ab796e548879903663426d0"],["/library/课内知识/【FPGA】仿真和烧录/index.html","56012e77beda691dd56ff9d232bcf5af"],["/library/课内知识/【matlab】学习/index.html","d5c128f22b463d4591f0ce570451cee6"],["/library/课内知识/【verilog】学习/index.html","f697dbc866725a6f1d900225ea1829b2"],["/library/课内知识/【常用数学公式】总结/index.html","1b8e79dbcc94aec38e12525eb4acd273"],["/little/name/index.html","c3a7fa77543e7bef99b19230f088c465"],["/little/留学小记/index.html","7e48acf4cb5356782a6a966bb71c2f71"],["/little/粤港澳6日游/index.html","b2445c06d17e2721e09375f0b62458b8"],["/mylibrary/css/float.css","c9962348e32fa0db9c888f1e0cd50239"],["/mylibrary/css/hide.css","187e49145a4a739826cbacdddc6f09d3"],["/mylibrary/css/load.css","cde62d1c5b165a87d9c9376f8fe783af"],["/mylibrary/css/neon.css","c9e1bb30d8ec15ab8fbae8f99668e99b"],["/mylibrary/css/round.css","0158f356726d6fab0c47c7759ecc73f1"],["/mylibrary/css/shake.css","0543c338f8f13d973b878347922b9e9d"],["/mylibrary/css/shiny.css","12f7b3879af957b76c8f3bf208ca53bf"],["/mylibrary/index.html","257249ff1b2cd695cbe9fdadb0710ddf"],["/mypage/css/style.css","8ffff8f7d9a48a428f0011ab7fbcae19"],["/mypage/font/LigatureSymbols-2.05.eot","5b46f67c079e0599f89aae807cdad560"],["/mypage/font/LigatureSymbols-2.05.svg","f4be952f02a00bd7b464568304b12842"],["/mypage/font/LigatureSymbols-2.05.ttf","48ae0b91a8d6e1feb2c15961a338dad8"],["/mypage/font/LigatureSymbols-2.05.woff","f974884f441019724c351f85478b3938"],["/mypage/font/README.html","5ccfaac2d9c6a5d435575700a1d7d668"],["/mypage/index.html","bb393333ef7c4157d6f10b87cf8cb94a"],["/others/Write-blog-using-markdown/index.html","ee043e522c94352ec4d1657d6c166406"],["/others/chatgpt/index.html","d576f72cfd3bfbedf3a4af67c49d0751"],["/others/古诗/古诗/index.html","bf1d7b5760b2071fefdb33bbdde5ef83"],["/others/能力年表/index.html","3ef6036631bc5e46842b6d30d5609f35"],["/page/10/index.html","aa50f99da3468771f4e285f66b9593c2"],["/page/11/index.html","d43a4ec932d177a5a72f0106bcc3abd7"],["/page/12/index.html","21d94e39a09ef09c143f0c8a89bf550a"],["/page/13/index.html","ce334f7fd48a1bfef026315c12d95d35"],["/page/14/index.html","fb95bfde3f1d2e8191f3275ea9537889"],["/page/15/index.html","94d3c25a0efff4eec3aa3fd7520bea35"],["/page/16/index.html","4f1ef10f2ca276d1372d70321300aba1"],["/page/17/index.html","17e5665fecff8062e49f30f8d60e640c"],["/page/2/index.html","425fb5e483b182546de5dba37d9309f4"],["/page/3/index.html","1ed3a857d35b083e443b4a9201075d60"],["/page/4/index.html","4827f3a838b931b3971b9b0e578eed94"],["/page/5/index.html","c685df2d3f07f4832bdfd6ac87c36657"],["/page/6/index.html","86e2214c9cb01e2a408e8fef63b890e3"],["/page/7/index.html","7403a5da344b9984711ca05617b353c9"],["/page/8/index.html","f61f49e45b84b527da5d963767601219"],["/page/9/index.html","43514b7b13eb114cdb9b366d8cb6b2a4"],["/solved/chatgpt您所在的地区无法访问/index.html","b0db781da7cc0d6b4374e364ba09072d"],["/solved/github的github.io项目打不开/index.html","77d7f802e2a0887a0152e447f9c10823"],["/solved/hexo部署报错spawn failed/index.html","640df8696d20f3941c79d51502e95abb"],["/solved/modelsim的-novopt优化相关报错/index.html","4cacda260b9b87ee31218465ce4f368f"],["/solved/npm install 报错/index.html","d35abc32769b02aff6c79e6c93ead826"],["/solved/pycharm修改快捷键/index.html","66c4e876e4ff7e2871e87f0fd55686d5"],["/solved/pycharm内无法打开cmd/index.html","a531b2dfbbaa90bffaec97e50bb67f3a"],["/solved/worked/chatgpt微信机器人/index.html","3531cf76511bacb62bf1682b39fdf4ab"],["/solved/从regedit改变键盘映射关系/index.html","a6fe0dd1213d026520b3deeef69cb3de"],["/solved/双拼输入法/index.html","6e97017eb3b4a89aa4a17070ad80a798"],["/solved/右键新建菜单管理/index.html","d6a9342b5aa3bba9b01484d15a61d389"],["/solved/执行make menuconfig时报错/index.html","e7dbf4c47a4df6704857c036b1dc659f"],["/solved/报错binsh 1 bc not found/index.html","3a5d5bde8ec95ab177fdf8f53da7536f"],["/solved/报错binsh 1 cc not found/index.html","75f9f044892e68f9544d071b3d590cca"],["/solved/报错binsh python not found/index.html","99f26ed988f0aaa80bcdcd785ac367be"],["/solved/未整理/index.html","c325006bdd4e4d2c1b276be538adf418"],["/solved/树莓派域名解析暂时失败/index.html","c114a45b594285b2bbdf06d4c3c5fef9"],["/solved/树莓派配置python环境/index.html","92790d6f6f7c68df25d1eba95b70a96d"],["/solved/环境变量配置理解/index.html","49bf17093683478d8ea1bb6e4754957d"],["/solved/设置软件开机自启动/index.html","a6fc590923274de9df06a4a2b64b0e7a"],["/sw-register.js","f956531d18c77fcd71be56ea82018822"],["/tags/ADC采样/index.html","e85f390d2430208062ac403bebaa0ab7"],["/tags/Block-NeRF/index.html","9d8794572774816b92b9c3c3435a80ad"],["/tags/CV/index.html","beeaa9fc295469038e225c448292a134"],["/tags/FPGA/index.html","134005a7f012ec8dcc92aff509b3ac42"],["/tags/GPS/index.html","02983c6fd57c5ca4867e48f32cb07d55"],["/tags/HAL库/index.html","0b482c33e74336298d22fe4e1f7274fc"],["/tags/H桥/index.html","191041588160f59b207aeb12b13fa56e"],["/tags/INN/index.html","5c9c5e25b291ff63e3cfe2e1a564dfaa"],["/tags/JIIF/index.html","1dcc9d771189d049c5e2e97c241da968"],["/tags/OLED/index.html","47251e6ae9cb3ca401b479a4c11ecce3"],["/tags/Point-NeRF/index.html","fbce5da2c636b07ec592f5646d5f5235"],["/tags/USB/index.html","8d8a084ef2f2d29ab813cc666e16cfae"],["/tags/V831/index.html","4f8ca0673669690183fdd8696da07552"],["/tags/adb/index.html","a421b7075a3408e761ab9f5cbcdf0bd0"],["/tags/amg8833/index.html","0a0fd6f2e21ec7a8a08bcf19bc7fcf3c"],["/tags/auto-js/index.html","1114799ec1dca07deba484d1b3c9b3ec"],["/tags/bard/index.html","3a3b178f5114af7ebf2d0861f39ccafe"],["/tags/chatgpt/index.html","7878364c7232f4e391f09d16f50740ef"],["/tags/cmd/index.html","7280013bacee0b77fa6255c626493292"],["/tags/conda/index.html","0166c6f5d7be0d29307bbc03d2fe2ba7"],["/tags/css/index.html","d7f6f5aea3fa391eb546e067ed30fb97"],["/tags/frontend/index.html","9213f821926611e2cd05692b5a455a03"],["/tags/git/index.html","beb7ca8e8103d19e1163fc48fe263bf1"],["/tags/github/index.html","86d02ebc7c6a82aa45384b2976cd4721"],["/tags/hexo/index.html","21052f0bc97c1760d45bbd25119f5786"],["/tags/i2c/index.html","5b08387cdbcefda72e5ccf389d33cd43"],["/tags/index.html","2b699cb624b5caa6db8796e9aca6f4d6"],["/tags/inte/index.html","e1409e9bdadd631843a8389ca3553af0"],["/tags/k210/index.html","10f88677cfeb23296b726aaee3d9aa21"],["/tags/learning/index.html","10345f94289bdfa4ab761f571c3ea49c"],["/tags/library/index.html","ac520756f88b3312679a768319bdbec7"],["/tags/library/page/10/index.html","03d8f6ae199d7f6ac22a5767818af56d"],["/tags/library/page/2/index.html","031a44e77839378a63f8bd683e46289f"],["/tags/library/page/3/index.html","989cbd2bc6d558d0e46fdc26b168558d"],["/tags/library/page/4/index.html","db97df3f4ca7a01363797ed14e56daef"],["/tags/library/page/5/index.html","8f58ee778f39e02d65e4e4e85f619169"],["/tags/library/page/6/index.html","21587672455e510771cf27ab32f9c4ac"],["/tags/library/page/7/index.html","ee9a2e02837157d5928376de15fecd35"],["/tags/library/page/8/index.html","62de264190ff4b3762fbc14c615a302c"],["/tags/library/page/9/index.html","d37d04941cd3d35cb1d7ea49802dd766"],["/tags/like/index.html","d61e6d1fd530b1e45fde0759f980b91b"],["/tags/linux/index.html","6937028d00bed9d286b8c342f1d4df8b"],["/tags/little/index.html","24f6283f189b2747a44b2d23155c62f8"],["/tags/make/index.html","a8a08a0ee68a34e4955a68ea6d0fbef6"],["/tags/math/index.html","09fc8a70f1abfd312e1b89b82d622c48"],["/tags/matlab/index.html","32054278a473918b75c8dcde044dcb01"],["/tags/mine/index.html","8a0d1812033533da8bda7e1bc6a9d3f6"],["/tags/modelsim/index.html","2bb7d8aa5937d7c1cf8d1412ec568f86"],["/tags/nerf/index.html","26b860423c2374ed936306b75cde53b4"],["/tags/nerf/page/2/index.html","22b78102b4ce34e9d6c45d9a28c2f401"],["/tags/nrf24l01/index.html","fc1a19e110c7128df068417ddc0c8764"],["/tags/nuitka/index.html","6a3f2081ca3ef7fc600754af54de59d5"],["/tags/numpy/index.html","b97a638848dc2f205266398e71080f40"],["/tags/onnx/index.html","210157b97edd3a8e5c804f5e38ac4cfc"],["/tags/pcb/index.html","00c8da415e5c2e05816780e40f92d1e3"],["/tags/pip/index.html","96ba24abf03018d55338e68b1037b1cd"],["/tags/psutil/index.html","7ff993a36af507529ca6d2b9e4566776"],["/tags/pyautogui/index.html","1975188a7fa23e44563935b30cc09cc6"],["/tags/pybluez/index.html","f5660a3664353ea99a4c341eab148481"],["/tags/pycharm/index.html","34d8985d2f82be8c34b9411c1f38901d"],["/tags/pyinstaller/index.html","e5b2b78613792a12c240fcc0ce589933"],["/tags/pyqt/index.html","604ea5e2686b75de277f81a15e41f28a"],["/tags/pyserial/index.html","5a0e6a72687e1f46273775dd1db57286"],["/tags/python/index.html","89f8f595c0f7a8c6da8f5b1a7a771f42"],["/tags/python/page/2/index.html","f3e92688f2c3b779edf918e196942387"],["/tags/python/page/3/index.html","18051f8607823031520c4b2347432582"],["/tags/python/page/4/index.html","78d140628e54a2cdf96ed04b5a1ba3f1"],["/tags/regedit/index.html","c2330e6727871b3c6ae4b6f385ea82e8"],["/tags/solved/index.html","8e625539e33e65f6eba09efa68742b14"],["/tags/solved/page/2/index.html","1dc5389fabed8afaddcdd053552c9a67"],["/tags/spi通信/index.html","b6b7c29e8916e7f8b9ba60b93cd5aac9"],["/tags/stm/index.html","870023f134836a5d624b66303bde30c5"],["/tags/stm32cubemx/index.html","75b24118239afa29f2358776e4b16076"],["/tags/tensorboard/index.html","c17e096591d1f854e48bc0e602c4e483"],["/tags/torch/index.html","b98585a855f249664298392da5dbfe8d"],["/tags/typora/index.html","e394862b885f47560aed235b1784b2a2"],["/tags/ubuntu/index.html","eb1390c6537981dbb7f5b303616706bf"],["/tags/verilog/index.html","e648d756dfec100b49059868e7aa1428"],["/tags/vue/index.html","7bdd62f0fe84a01fa7a1df59598770bf"],["/tags/win32gui/index.html","aeeb1301b2540a6fa7ab629f8cddca0c"],["/tags/windows/index.html","9daa58fb15ed3a4d7f578cb35448c1f4"],["/tags/work/index.html","ca3440730365702964195fad37195ee0"],["/tags/work/page/2/index.html","e3c7e3596213b595d8f0ecd89b36fdee"],["/tags/work/page/3/index.html","de85f04198911e781cc75c491c8f5b77"],["/tags/work/page/4/index.html","be69e439e087a6381967744a5d3a4c5b"],["/tags/worked/index.html","43d17995c13dcf6cf546e5a20c80cccb"],["/tags/下载视频/index.html","b9a23339b28d6a3181f2c11eff1b36e3"],["/tags/串口/index.html","89df3ea1d410961976de44cf55dad3b0"],["/tags/代码/index.html","bf8f2e449700a5a347d17bde9b46012c"],["/tags/全志F1C200s/index.html","0377b55297ba178d2b0a711ff397d4b2"],["/tags/公式/index.html","bf697638fe2ca2009cc6e667d04a32fb"],["/tags/前端/index.html","7a3ed74156d315d453d9e4d5c7babf89"],["/tags/博客/index.html","72fef5c7534455069382d236049cd056"],["/tags/国产/index.html","dcad7df599476798216b8a3da919b0b6"],["/tags/多光谱/index.html","5666d58225838c21cd9883c7a2abce43"],["/tags/大学/index.html","d4920c0f436f4ee88fb54ea744fab5c8"],["/tags/嵌入式/index.html","ab1d8a159759b43a1fbe3bb23de7983b"],["/tags/嵌入式/page/2/index.html","079b3e65522e77bfdbd84dfdb02de33b"],["/tags/嵌入式/page/3/index.html","3b224caf6180804af4a1782ceb668606"],["/tags/嵌入式/page/4/index.html","4df6036dac06f6581ac812db692b346c"],["/tags/嵌入式/page/5/index.html","2dfa3551d1734aab5bd0ff230d883fe2"],["/tags/嵌入式积累/index.html","499307319f259470c159292bb330deaa"],["/tags/开关电源/index.html","138bf6121b6a6fc3c9c2f13b200c8273"],["/tags/开发板/index.html","352a1418f9aba1975ab8a086f7087d3a"],["/tags/开源/index.html","15721aadaf91d3c51b3a877f9420f6ce"],["/tags/忆阻器/index.html","b56a5d7412213406fe14560dc51d8655"],["/tags/快捷键和常用指令/index.html","3ba78adb68d664717c4782ded06a72f7"],["/tags/手机/index.html","e9d2b6b181c95d2decf996df7839aeb6"],["/tags/打包/index.html","e61fa9d9bda04b708b5e01491324eb10"],["/tags/控制/index.html","31de9189d15195e124c61ffa43453c00"],["/tags/数据处理/index.html","b071f0533f32a05387f70d4a87e0e2f7"],["/tags/数码管/index.html","7a0c3080bd7bdd9e478f51fc07361467"],["/tags/整数规划/index.html","91504012f6c73d50dc6bd4c4707fb3e8"],["/tags/新加坡/index.html","2ebc1cf71db004e13fe53bdbc08fd78b"],["/tags/机器学习/index.html","adbb6f1d097da1c0307281e086fd32ca"],["/tags/机械加工/index.html","2fe84de1ee6529755cf4bc6c8f1dd567"],["/tags/树莓派/index.html","75f4a221c515a6947a556a2da7a3f991"],["/tags/模块/index.html","78bab051ffd7e6cb7b770146225c1fe5"],["/tags/沁恒/index.html","34f27fbd195801924d9ad0ce4343099d"],["/tags/测距/index.html","8cfd2f0d4cd67320790f9ce27bf022fa"],["/tags/深度学习/index.html","c92ff94142363c80e6ec6eb4fbee9cbe"],["/tags/深度学习工具/index.html","884a9908dfdbc3fd2eb8147012bc3ec9"],["/tags/游戏/index.html","1f18a452510877802af18160a30f2c8b"],["/tags/滤波/index.html","57e484d58269f53ec7e49a8acae23c2d"],["/tags/理工方向/index.html","541144a622565d3119451205771e25d9"],["/tags/电容触摸按键/index.html","e9befc32ab0dbedd78b03d09bcf46171"],["/tags/硬件/index.html","f51128a5f65ce2fc7fd901b5b34c80f5"],["/tags/硬件知识/index.html","0f0b5f9dcb4934a923f581948f49d631"],["/tags/积累/index.html","eaa05b955df960887a1d0b57fbeed968"],["/tags/算法/index.html","bf67e200c874d47068b1eec817466e09"],["/tags/线性规划/index.html","12d125b8029b82432405cd5baf87b33e"],["/tags/经验/index.html","b3bc1b59b4759d09b6f222230d69b5f5"],["/tags/经验积累/index.html","6933c08a5318cda45b35fd864071b156"],["/tags/编码器/index.html","713a60160fd6597dcc17195ddc036183"],["/tags/网址整理/index.html","0deab5847893cdcd7f123ace59c16773"],["/tags/航模/index.html","73c1c898340a2abfcfddd071db1eff95"],["/tags/芯片/index.html","461ec14d9be9bcf244494f6eea523e8b"],["/tags/蓝牙/index.html","1e71f077ba7744d336de5fccd54284fb"],["/tags/蜂鸣器/index.html","3c6ccf8a17f5212dc9a09a2593eb7423"],["/tags/论文搜集/index.html","94823506719d6c7ddf8c58aa20570a28"],["/tags/语言/index.html","a9c3cb81704274e66a9a065db76289d6"],["/tags/课内知识/index.html","3aae81b3999c2dc0adb5593c3b6b221c"],["/tags/贝叶斯/index.html","82fb0c0ea503c405bb7b7b47cb1befc8"],["/tags/超声波/index.html","04cbd2b9d5120f0337a00e81cb7b5a4e"],["/tags/软件/index.html","153a5376387df54d85aaacba272cdb03"],["/tags/输入法/index.html","591291fd8b34b88f6a0d753422c03a5e"],["/tags/运放/index.html","a11752f8dc0d5c87fa50655d11b434f2"],["/tags/选型/index.html","ae05c87b599274540c22daa0e72f883e"],["/tags/通信/index.html","c3b876aa1c6f21fdaaef7adc3760d842"],["/tags/钢琴/index.html","88187db2024c8c73ce05bc89dddd2dd4"],["/tags/键盘/index.html","b33b5112a63f6dea761c7c540bc1d705"],["/tags/陀螺仪/index.html","e5332c9fbf20e20a8d434a02a6a23dae"],["/tear/index.html","3784921dbd3171ba760b9b489b27d4fe"],["/tear/index1.html","3516e103f268216a0392f497e3aed8a3"],["/undefined/name/index.html","144c314062dd116b24ea9f1b7d766cc3"],["/undefined/一下都是0/index.html","3e7b1ef386605262372d3d401aa5b6a3"],["/work/CV/【INN】积分网络/index.html","32e1a588b638adb27fba9f71db9a5427"],["/work/CV/【JIIF】多光谱融合/index.html","c585fd15d622421e080382579ac89118"],["/work/mine/电脑外接摇杆/index.html","ab7e50679e802b57f0861b8d7288ddfe"],["/work/nerf/【nerf】Block-NeRF笔记/1667118074452.png","221e63aa60efa77dca50740ce9b88380"],["/work/nerf/【nerf】Block-NeRF笔记/1667118457009.png","5c1577c940dd443631045f45787e487d"],["/work/nerf/【nerf】Block-NeRF笔记/1667226872521.png","ec7a6051752cb193ae983fb81d135fce"],["/work/nerf/【nerf】Block-NeRF笔记/1667264387582.png","57b13f83c9dfd506e6ccb81743f74963"],["/work/nerf/【nerf】Block-NeRF笔记/1667265226170.png","600b87f6ea78e46e19929200a8190875"],["/work/nerf/【nerf】Block-NeRF笔记/1667292838757.png","f9c6a5975d54d8b975e9de23dc891c00"],["/work/nerf/【nerf】Block-NeRF笔记/1667293450480.png","57c9efd9a2a4ae995517991ff7abdf32"],["/work/nerf/【nerf】Block-NeRF笔记/index.html","317f5a414079748855f6168b1b0464a0"],["/work/nerf/【nerf】Point-NeRF笔记/index.html","9bb679b72fd03ab85fa3783bd1d91a4e"],["/work/nerf/【nerf】nerf-pytorch/index.html","558513b6b3f24ccc9995a275341e243a"],["/work/nerf/【nerf】最新阅读记录/index.html","c735e3310498d7cea49bb866310b69fa"],["/work/nerf/【nerf】汇总笔记/index.html","942c06a469ea653de54e170197acf5f1"],["/work/nerf/【nerf】记录/index.html","7004465fa94cbd9e5de7d40e0b141aa0"],["/work/python/游戏AI/index.html","1378b99f04cc9c2de8077bdef52c90fc"],["/work/python/窗口互联游戏/index.html","f451fd69248f5f162012278f4e39507a"],["/work/python/网速显示助手/index.html","7766b1d601dccdaaf3a3892d8681963c"],["/work/python/羊了个羊自动化/index.html","974c85114de5702905a16a66e109de04"],["/work/python/蓝牙调试助手/index.html","be048915961bc3c8cc2b41d9d7d1ed62"],["/work/前端/【前端】记录/index.html","5931214b7d5930bee5a95b29d5242fe9"],["/work/前端/【博客】记录/index.html","e931b05cb76de8493b968fa333c0285f"],["/work/嵌入式项目/bard/【bard】Linux迷你电脑/index.html","59f8558888220af98be90de8366002a3"],["/work/嵌入式项目/【usb-hub】记录/index.html","bbc9a1cf34d0f2031d3dfc7280cf85dc"],["/work/嵌入式项目/【加热台】记录/index.html","d5747c935ff904da90c682600ad7a930"],["/work/嵌入式项目/【四旋翼飞行器】记录/index.html","13bac6e35c5f7e73801864daab256d01"],["/work/嵌入式项目/【生日贺卡板】记录/index.html","104667822d09a9f7ebb3b1bac8ad955f"],["/work/嵌入式项目/【祖传板子】记录/index.html","06df46b2c666a0c9aa61c44248f8dd7e"],["/work/嵌入式项目/【自制无刷电调】原理/index.html","5843f5cdf59d96bcfb7f4698786566cc"],["/work/嵌入式项目/【航模】记录/index.html","4fcd9229b024ce14d5c325d5783065ef"],["/work/忆阻器/【忆阻器】python平衡车/index.html","0ef07b825736a74f393658c6e1b18872"],["/work/忆阻器/【忆阻器】算法部分/index.html","dcb5b9a7c75f34db69930292f0e35b6f"],["/work/忆阻器/【忆阻器】记录/index.html","2b0b6f8e2528bbace33c86674fc43e07"],["/work/玩别人的开源项目/尝试过的开源项目/index.html","8a863449646024dc0f5e4fdc9123edd9"],["/work/生涯规划/index.html","dfd77d2f59e4b3dab5cf42cad940e5f5"]];
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
