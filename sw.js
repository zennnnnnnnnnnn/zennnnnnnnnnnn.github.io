/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","0f340f8b52ce32c6a3c4b6754a5512ef"],["/archives/2022/09/index.html","3f14ff345f8279436c06a6a460312b7b"],["/archives/2022/09/page/2/index.html","1046cf1a079eabd853223cbe17c2ffbc"],["/archives/2022/10/index.html","e20d6332c0f63895e3382ae51839ad51"],["/archives/2022/10/page/2/index.html","f1fbb69c85b3b23e28fe9437ef6936e4"],["/archives/2022/11/index.html","c7d1d51070494d85217c92c6f3481578"],["/archives/2022/11/page/2/index.html","f5f02d6c88e46cc5bba5604e70cda7e7"],["/archives/2022/12/index.html","ccd67e73952e6f00cdce1e1a20eedda3"],["/archives/2022/12/page/2/index.html","2974d99ac44dab7d827d7398af77eaaa"],["/archives/2022/12/page/3/index.html","0758728ae7810a5a22a44d409a7e13af"],["/archives/2022/12/page/4/index.html","1ae21e32a3b0bc32329cea17f5a3a420"],["/archives/2022/index.html","625f9ee7aaf836e8797a803d50b39672"],["/archives/2022/page/2/index.html","cefe91dbb88e9c63c47a23e0e16fcec2"],["/archives/2022/page/3/index.html","e971653b6cfe2e63cae666dd5bcf2e92"],["/archives/2022/page/4/index.html","cfd630b09f951fbb6f4324c2ab086baa"],["/archives/2022/page/5/index.html","c2855dd1b208ac4c6b0104ef1d45ba3b"],["/archives/2022/page/6/index.html","0f3ff65be6b10036eb187a0f8cdd5188"],["/archives/2022/page/7/index.html","ffc5864125abb242e06ccce1475eb46a"],["/archives/2022/page/8/index.html","6c4de0b2c321a91b1b72cb7b1c155a8a"],["/archives/2022/page/9/index.html","6f99090d31cfddfa9f938bb2c688b57b"],["/archives/2023/01/index.html","ac8b731a2d1b4819f33ee9b6ab760d0d"],["/archives/2023/01/page/2/index.html","0780b6f4053abaf0bbf41b47d74d0abb"],["/archives/2023/01/page/3/index.html","9912825fe99e850b49b4854e267a4fd9"],["/archives/2023/02/index.html","4cffcb2aaa92122a5108d27b57e0b1f0"],["/archives/2023/03/index.html","692bde5713c343350c6cdc4569502967"],["/archives/2023/04/index.html","4fd0d86876c74880902a395bf6a6b443"],["/archives/2023/05/index.html","20c00b76379e6329c9f92f40eaf73b3b"],["/archives/2023/06/index.html","d84086dba347b36a2360975887f73b30"],["/archives/2023/07/index.html","36c15f70f791cd66d2f2be6fcd96e59b"],["/archives/2023/08/index.html","ffa42f806f04c17c332468989c6934d0"],["/archives/2023/08/page/2/index.html","9fa7ce8c8c5de7cd24b7b39016682292"],["/archives/2023/09/index.html","fac55964bf7beb99a33731645639d77c"],["/archives/2023/09/page/2/index.html","05256ef208ecc4b48001cf8f6b7054a8"],["/archives/2023/10/index.html","674b07e2e414c42d03d8136c555a90cd"],["/archives/2023/11/index.html","661542e261b926d5538caf6f27a1fceb"],["/archives/2023/index.html","169f61c14ac88398ddec9bc1e51327b5"],["/archives/2023/page/2/index.html","233412d66379c4c074c855dbe2cd8f52"],["/archives/2023/page/3/index.html","15bbe593cd6e539f2f880a36af16969b"],["/archives/2023/page/4/index.html","92a341514e3589c9331b5bc0240ec448"],["/archives/2023/page/5/index.html","f02a167fd3a6ad062d77e872135b1517"],["/archives/2023/page/6/index.html","963b6a1f1cf81be18e57b03f6e8f4af4"],["/archives/2023/page/7/index.html","cd321a8ad7fae4e5bbf6ae11b5367637"],["/archives/2023/page/8/index.html","622a8fd92e4e42edccdc917edef0deba"],["/archives/2023/page/9/index.html","5a70e7018aa4e75ce1dc9f9a3d37e241"],["/archives/2024/03/index.html","676765b9edbc13832f3c2e305056fb4b"],["/archives/2024/04/index.html","c2c40792dd4bba255e1aaf3096f9dfa3"],["/archives/2024/05/index.html","beb33d02624c379077f3979abd388c09"],["/archives/2024/06/index.html","5d2884433a57869ba605ceb8fe945fb2"],["/archives/2024/07/index.html","3a5a346c022196759eff7a44c5b2a374"],["/archives/2024/08/index.html","5b2d8bacb13b45f7650d5e7bf42b8f0d"],["/archives/2024/08/page/2/index.html","f3bd5524d8e34b8ecf53e9c9122d89ec"],["/archives/2024/09/index.html","7b5bcc60c1f7d29d1b53523a728910c1"],["/archives/2024/10/index.html","50c59022d9d51d67e77cca3915c2316d"],["/archives/2024/11/index.html","69528f02daa76fd59c4a20d7957e7fae"],["/archives/2024/index.html","95463e8bd0895c3363fe93eb65da1c78"],["/archives/2024/page/2/index.html","6a0dd53f3b484e86af8d61994415ae84"],["/archives/2024/page/3/index.html","bdb4d0909e6bd6d8b0f766c878fe3b57"],["/archives/2024/page/4/index.html","4852bd1571cdc5cb1b0781565ed345b5"],["/archives/2024/page/5/index.html","24e1170d211113b3662ab78e99b8a3bc"],["/archives/index.html","571a871ee6f61a388cebdd1dc29c20d5"],["/archives/page/10/index.html","5ca2e42472b7fba54771c7a856405946"],["/archives/page/11/index.html","0538de02c2cd2409dd8d3b442b93f207"],["/archives/page/12/index.html","0cce13de16d4cc3963ac681203b18bad"],["/archives/page/13/index.html","c50d77145ea91f9c755a640c30435aef"],["/archives/page/14/index.html","54b307d2a4cc59f31ca06fb4a355c3fd"],["/archives/page/15/index.html","2e62ccce89b262aec93500a83f89cb95"],["/archives/page/16/index.html","52b8ddf531a0d5535207d535474eaf44"],["/archives/page/17/index.html","d47b04fb352787ac25cc0df7c4cff5a4"],["/archives/page/18/index.html","1499ca8900d92ca1447b609d378d23a2"],["/archives/page/19/index.html","420c219d7d485899ce3019e08f37c69a"],["/archives/page/2/index.html","56e2b4954b5b0618959a42c437530383"],["/archives/page/20/index.html","0d4225473e61301b68571d3ff2dbc2de"],["/archives/page/21/index.html","8eae2ea95d517a087b7040604cefa68c"],["/archives/page/22/index.html","74b054c88a6ec5bc5f8457cd8e3ba3cf"],["/archives/page/3/index.html","8ada99325ed80ca7518c85ae9673308d"],["/archives/page/4/index.html","c437587fa869bd351117dd333c7f98e7"],["/archives/page/5/index.html","90556ba9dce317432c5168f5c6689c8b"],["/archives/page/6/index.html","7eb7f9f6636dfed7b8d9c99b8b608dc8"],["/archives/page/7/index.html","33f8063229ecbe630c545c1fa8783d7f"],["/archives/page/8/index.html","97331bb93c0e1c8859670581a928ca0e"],["/archives/page/9/index.html","a5434b0c02f0f4ad7ca413740e2a1f2e"],["/baidu_verify_code-ZFSCabM1PJ.html","eec0360af8c38cfb233341d39b4d9074"],["/css/main.css","6b784a5f5eefb7e4c277f32a2c2f59bd"],["/css/spoiler.css","eb373af0627ede298867ffc0045da62e"],["/failed/【硬件知识】vco压控振荡器.html","dcae7112074a9ffd96b9839e38500279"],["/failed/【硬件知识】vco压控振荡器/1665803607390.png","3df26768c0d97b3acbb64c7f4738f15c"],["/failed/【硬件知识】vco压控振荡器/1665803663941.png","38d29c573fc0aab159543ee6f3d6b31d"],["/failed/【硬件知识】vco压控振荡器/1665803862765.png","f7e2165483ca1f224fc47019c9d85839"],["/failed/【硬件知识】vco压控振荡器/1665803865723.png","3da7b08b88d8795e53d03a47e1926277"],["/failed/【硬件知识】vco压控振荡器/1665803871404.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/1665803883747.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/clip_image001.gif","ba898c600ecfdb213d2223a0f783c808"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803844893.gif","fb05fad8f7ca3e4d9e40000a9ab1dc09"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803856973.gif","e1a4cd1747beecc7d92124979531824c"],["/failed/【硬件知识】vco压控振荡器/clip_image002.gif","0c0f42f02d474126082016d250804bc4"],["/failed/【硬件知识】vco压控振荡器/clip_image003.gif","1f489bb3e02d4993cdd501f7ec773812"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803844893.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803856973.gif","09cde39109369f9185d1cf128c6d7c2d"],["/failed/【硬件知识】vco压控振荡器/clip_image004.gif","32873c471ff1058abf9d6d09ca5e45f0"],["/failed/【硬件知识】vco压控振荡器/clip_image005.jpg","ea2dddfe9b1da4f406ee36b37c99e72e"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803844893.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803856973.gif","b0138096b0fc7682435ad07aeaf159ce"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803982819.gif","6540947f9843ab822d3e8eeb7ef621e6"],["/failed/【硬件知识】vco压控振荡器/clip_image006.gif","6290aa2f8360b2a4f05e4c09e4d6bc80"],["/failed/【硬件知识】vco压控振荡器/clip_image008-1665803856973.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image008.gif","113b77d852979982495a775ea4d973d1"],["/failed/【硬件知识】vco压控振荡器/clip_image008.jpg","aad87f9838e93808a0caed1ece93ffac"],["/failed/【硬件知识】vco压控振荡器/clip_image009.gif","fd6cf84a1333733613c80d5599c0fbdb"],["/failed/【硬件知识】vco压控振荡器/clip_image010.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image011.jpg","fa6d15386072d8a691d18f9c3a53b426"],["/failed/【硬件知识】vco压控振荡器/clip_image013.jpg","cea0cb9334e0d5f1b84beb2fcd8b1245"],["/failed/【硬件知识】vco压控振荡器/clip_image015.jpg","660345ebf2132d1bcdd9a7455529093a"],["/failed/【硬件知识】vco压控振荡器/clip_image017.jpg","29517d76c214adc17343771d2d804679"],["/google41a28d5f2878fa02.html","c59c1df304014f9cb42a17d043a07039"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/tou.png","578463708d7de56a1c4e6331831b3e2e"],["/index.html","d81614a231516ea6910cb11ce95345a9"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/code-unfold.js","e079f1fdb88a9edcd745220494218e88"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","97606f901b6e488587ad5c49aa367604"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/library/CV/【CV】基础/index.html","0e29d035ec80ad3685b7a4b847bf962f"],["/library/CV/【CV】数据集/index.html","9806d027f1a674795e18fb7ddec9806f"],["/library/CV/【CV】经典模型和论文/index.html","bff9c36376383a0e23cce1d0bd27fefa"],["/library/CV/【CV】综述/index.html","29209e70398640d0d64b2ece8209c892"],["/library/CV/【IQA】图像评估/index.html","710ca89babf6098f5c8f657ab951c647"],["/library/CV/【diffusion】扩散模型/index.html","c6943bf31f9fc6f82fa675148184835f"],["/library/CV/【fine-tuning微调】综述/index.html","3458f5deb5278ce96ad33d549d857305"],["/library/CV/【pansharpening】综述/index.html","137e3c9cf6a16994a3940b1165aa924f"],["/library/CV/【经验】训练网络/index.html","3576281fa6204fbb98baffb80d59d9c3"],["/library/CV/学习/【学习】attention基础结构/index.html","d7eff7ce29f165c60d7b0f225178d044"],["/library/frontend/【/index.html","d822d50a047505b366196cb26f4afd49"],["/library/frontend/【adb】电脑连接控制手机/index.html","a54e7b422390b25de504e8b15b1f095b"],["/library/frontend/【app inventor】拖动滑块写手机app/index.html","db72f30ae382e78f350dbf7f13031e87"],["/library/frontend/【auto.js】手机自动化控制/index.html","38680504b800c6ffbd0b0a3e058e6256"],["/library/frontend/【hexo】博客部署/index.html","762b859a0273abb283cd230704d814b1"],["/library/frontend/【markdown】编写文档/index.html","8141c83a9c33b20d6daa960a3779e806"],["/library/frontend/【vue】搭建网页/index.html","b60c5725ff4bd560d510e489265a1e32"],["/library/inte/3D打印模型上色/index.html","6c6215eaa7ea86cf1015912831e08e87"],["/library/inte/windows的linux子系统wsl/index.html","11db9ba7a30e0e9c1bd9a496da71da7a"],["/library/inte/【css】学习/index.html","481edc5cf7756ad6739a13f87316ee1f"],["/library/inte/【latex】学习/index.html","570f9efd53d3263f366749dd72853806"],["/library/inte/【星际酒馆】积累/index.html","06af040556ddb1e45b310826d03e5477"],["/library/inte/【钢琴】织体类型/index.html","f7d1c04a37a955a785b8b4790456a4c7"],["/library/inte/印刷纸张类型/index.html","82a6ae7c5a818fbed149ac4d270835e8"],["/library/inte/有趣的搞钱方法/index.html","81ab08adedff497139ba60f1295a736a"],["/library/inte/没能实现的伟大计划/index.html","3d8e18db8476a21df510a8f1b7ddbfc2"],["/library/inte/网盘挂载Alist+RaiDrive/index.html","1c4e7f6dd827b09eb1a778c3c0abfcf4"],["/library/math/【math】傅里叶变换/index.html","0622d055e6ae36450ff74e84f4999fbd"],["/library/math/【math】格林函数 Green's function/index.html","b657d1f2d922bdc16366189a720c0b04"],["/library/math/【math】洛伦兹互易定理 Lorentz reciprocity/index.html","1dc1bb2348f866a574d516f9649a4bd8"],["/library/math/【math】高斯积分(Gaussian Quadrature)/index.html","9eec32a9a150fd1be1255f415f72b99d"],["/library/math/线性规划和整数规划/index.html","f612af6ffacb0d7c882e1ae5ed8c1a13"],["/library/python/【CV2】图像处理/index.html","e4f60427cdfa9969d16e3870b51fb91e"],["/library/python/【cProfile】【torch Profiler】代码运行性能测试/index.html","affbfdd208f76e124a4b6ea06ad6a982"],["/library/python/【itertools】计算排列组合/index.html","3fb9bcafe70a5c632379f6f246d60008"],["/library/python/【matplotlib】数据可视化/index.html","f338e7634677c4b9c7d1b718f6817593"],["/library/python/【nuitka】打包python为exe/index.html","e867ee0ac79a471b77065bfc5552dd42"],["/library/python/【numpy】数据处理/index.html","d3d33aab601c3ccdfa557ccb98934db5"],["/library/python/【pandas】数据处理/index.html","c8f0282cf656c8ffbf0c9a8f1dd15e9a"],["/library/python/【pip】【conda】常用指令/index.html","0d30cbc92a0db6af2f44d495f3e6b0fb"],["/library/python/【psutil】检测电脑网速等/index.html","0229976936efcdc4ebdf7da2056d2ceb"],["/library/python/【pyautogui】控制键鼠/index.html","825e2464e14c87683303b47f71870c0d"],["/library/python/【pybluez】python控制PC蓝牙/index.html","c136240428797c6ea98c9e533e1911b9"],["/library/python/【pygame】2D游戏/index.html","64e665aa7ff87fcb8a29daabc7a605aa"],["/library/python/【pyinstaller】打包python为exe/index.html","45ad0a3d863a020e22ef6c7e5c54e211"],["/library/python/【pyqt】编写可视化界面/index.html","dbe2e0c0610dfc7dbd6b17b5f75b8406"],["/library/python/【pyserial】读取串口/index.html","f9290cb85f7cbf1f00136aaf22cc38dc"],["/library/python/【python】基础语法/index.html","d9fc0fed262a64ab2b4559bd389d79d3"],["/library/python/【python】有趣外部库/index.html","7c8d39f0c19e2a9f3c783631e82d97bf"],["/library/python/【python基础】常用内部库/index.html","2971f46d17077a9b9ee227f2fb410710"],["/library/python/【python常用】常用库的pip安装/index.html","e78608e9ed8cc63365f694320b6f88d4"],["/library/python/【request】网络请求/index.html","7b9e2e48bd67ce0efde18a9bb5d1bec9"],["/library/python/【tensorboard】可视化log日志/index.html","4e4bc302e8f5392fcf17371f10a3ce51"],["/library/python/【timeit】获取时间/index.html","56fafbbf9f4aef1aa0c50b86e20980f1"],["/library/python/【torch】机器学习库/index.html","b0d3bacaec8fefd65884a47bfb55675d"],["/library/python/【tqdm】显示进度条/index.html","9acbd906def8355f745a8a7d4b7c9541"],["/library/python/【ursina】3D游戏/index.html","f2f9fb785b5e58893bc31ae33673970e"],["/library/python/【win32gui】控制win系统/index.html","c79cfc0ff1e41bf9572e76ea1fe660b6"],["/library/python/【winsound】控制电脑蜂鸣器/index.html","b0059f39e6065aa594a374f645cea623"],["/library/嵌入式/worked/【沁恒】样品试用/index.html","36d5a745a20815b924358a3216306b41"],["/library/嵌入式/【git】学习/index.html","94fbdbcaea3403cd099234acd01c1a96"],["/library/嵌入式/【linux】常用指令/index.html","891b694e92c5b346f0f63a1e0ed56852"],["/library/嵌入式/其他/PCB作画规则/index.html","33189f4685ea06ba8a1bbe8839409757"],["/library/嵌入式/其他/犀牛建模/index.html","ff0f9782269d700dbab89dfec982ad21"],["/library/嵌入式/模块/【模块】GPS模块/index.html","85ef92043ea4326a660c4c4b3b6ef770"],["/library/嵌入式/模块/【模块】OLED/index.html","eb7210d2d34e258b9e93b579ec4488e0"],["/library/嵌入式/模块/【模块】amg8833/index.html","81ca4c9850a7161ff447fa08682e48bb"],["/library/嵌入式/模块/【模块】as5600/index.html","7d4f5f6409312900075ee8552b13cce8"],["/library/嵌入式/模块/【模块】数码管/index.html","88105931ae4d2fce77fbf17de7caf884"],["/library/嵌入式/模块/【模块】电容触摸按键/index.html","abdcd496a11b04b08ede2841c4484cb0"],["/library/嵌入式/模块/【模块】蓝牙/index.html","825c13b92b21be2b4b66e4131a5b65cd"],["/library/嵌入式/模块/【模块】蜂鸣器/index.html","06c52d77d1020ef742ad6f527b178937"],["/library/嵌入式/模块/【模块】超声波测距/index.html","a713033337196a3b000a71455778cb7d"],["/library/嵌入式/模块/【模块】陀螺仪/index.html","6cf65fbe4114136bcd10d4339b684501"],["/library/嵌入式/硬件/【开关电源】学习——buck和boost等/index.html","5033dec88e44c56039376a90c234fa4b"],["/library/嵌入式/硬件/【开关电源】选型和使用/index.html","66ab22c1a43240a4a8d94a42b88a35c4"],["/library/嵌入式/硬件/【硬件知识】H桥驱动/index.html","b87013304cd36ee98d63ff3cd9f14423"],["/library/嵌入式/硬件/【硬件知识】三极管/index.html","4f82f984f78d5cf9b7c25801842e36ca"],["/library/嵌入式/硬件/【硬件知识】无刷电机和电调/index.html","aa3d52e76011dd18ae2f72350b4eddad"],["/library/嵌入式/硬件/【硬件知识】模拟电路pwm/index.html","2656b3b659feae1e2a146f9a72edb000"],["/library/嵌入式/硬件/【硬件知识】芯片熟悉/index.html","d7330437d22e05872a528a1ab7164da4"],["/library/嵌入式/硬件/【硬件知识】运放运算电路/index.html","0290ef5375dd41f8ee5bbfce89eeb7e3"],["/library/嵌入式/硬件/【硬件知识】连接器/index.html","2daab72b05c2e22c305b3a701fd1d299"],["/library/嵌入式/硬件/【硬件知识】选型/index.html","24d73b5ce59ce16c57258313398a254e"],["/library/嵌入式/积累/【嵌入式积累】基础知识/index.html","88f2929abf21076279ebbdccefbd67c5"],["/library/嵌入式/积累/【嵌入式积累】常用官网/index.html","abcf01a88d5fb46abe99b127cc9d48a5"],["/library/嵌入式/积累/【嵌入式积累】控制入门/index.html","badeb8ec52970fa7a6eb980724600abc"],["/library/嵌入式/积累/【嵌入式积累】设计注意事项/index.html","2b89b9d1e92be82a6015dab230b8086d"],["/library/嵌入式/积累/【嵌入式积累】阅读寄存器手册/index.html","2411d4b68b891e7e93436de8908ac607"],["/library/嵌入式/算法/【控制算法】学习/index.html","a62ab46b112e0e540e7333d13a04cdd1"],["/library/嵌入式/算法/【滤波算法】学习/index.html","3a9fb400a4ccdaa7041f788b3e63e493"],["/library/嵌入式/语言/【python】进阶总结/index.html","aa5931cb7027c7291e6462a1e85a5f4a"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】ADC采样/index.html","60308ff5e5dbcbea440dae2938bf85fd"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】USB/index.html","830fd838825c62b34321e5ec9890f8b6"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】i2c通信（mpu6050）/index.html","247bbfc0423778b57bcd4ad70718dda9"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】pwm波/index.html","709dead87afab2b08ca186f288a5c150"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】spi通信（nrf24l01）/index.html","4649a549fccea062f06973ecd6c55d67"],["/library/嵌入式/软件/【HAL库】笔记/【HAL库】串口通信/index.html","a15ad1d3598e9a5e046ee6c06c58472e"],["/library/嵌入式/软件/开发板上手/【V831】开发板上手/index.html","179ac516c181ce716bf6e8d8ac423632"],["/library/嵌入式/软件/开发板上手/【k210】开发板上手/index.html","d194ba4eb198175f44923827186a5ce3"],["/library/忆阻器/【忆阻器】综述/index.html","1d81e80a3687ee205f338294ad69726a"],["/library/快捷键和常用指令/【cmd】常用指令/index.html","c3880fdd524cdbd5acd3fa4c22119e1c"],["/library/快捷键和常用指令/【pycharm】快捷键/index.html","b86abe020bcdc02dfb843f4ff5f0db4e"],["/library/快捷键和常用指令/【win】快捷键/index.html","0ac10e45581b91a4a65d99e9d97f78b4"],["/library/快捷键和常用指令/【清理内存】常用文件/index.html","69778e018684d05489aeb63c35785d23"],["/library/快捷键和常用指令/免费下载视频/index.html","acb0d3cc01fb0bbcbf848ad98c59a5bd"],["/library/旅行/勇闯nus/index.html","ddffb814585ebc755c0b75014a4c2ccc"],["/library/旅行/土耳其特种兵/index.html","006147989de16879e71729e96def551a"],["/library/旅行/探秘阿联酋/index.html","8054b711a2491b2177f7ece40c24c7c2"],["/library/旅行/粤港澳6日游/index.html","1daa6d4c4834e74c17441f3b53ef9855"],["/library/深度学习/【深度学习】基础知识：×NN都有些啥/index.html","bc081925f95b232dd6517ba8aeaa66f5"],["/library/深度学习/代码/【numpy】语法基础/index.html","b342b64fb4a981bf45c2aa7b9d271d9c"],["/library/深度学习/代码/【torch】语法基础/index.html","459492542639203211c66657cbae361e"],["/library/深度学习/工具/【深度学习工具】onnx学习/index.html","b5fa059604c8c1437ae697ab9390e017"],["/library/深度学习/工具/【深度学习工具】tensorboard学习/index.html","41986f55415c82e08bab547d2deedc52"],["/library/深度学习/算法/【算法】贝叶斯优化/index.html","c77d3511044a51fbc69308946bf44540"],["/library/经验积累/【经验积累】导师选择/index.html","0cfec642af0effb9cc28b2ed6622e109"],["/library/经验积累/【经验积累】开源协议/index.html","33873f6c2fdbba317092a6e9ad32801c"],["/library/经验积累/【经验积累】网址整理/index.html","2152e3be9f9a195a1b8c1366c5fea2e2"],["/library/经验积累/【经验积累】论文搜集/index.html","1a6320307f05c33a0259f824ef64e2a4"],["/library/经验积累/【经验积累】论文水平/index.html","b9c41e8aa031f12a29cbbba77651c90b"],["/library/经验积累/大学毕业选择/index.html","ec3f74d3836e954898b4cbdff945dd93"],["/library/经验积累/挂arxiv流程/index.html","842dbf7b02cab319a272f1b0b2254747"],["/library/课内知识/【FPGA】仿真和烧录/index.html","63c14cabb363c9e074a942d88c5df58a"],["/library/课内知识/【Project】项目管理/index.html","691c395e2dac45ca27ee084c32c1b139"],["/library/课内知识/【SPM】学习/index.html","19e21b8e593d7c8cce587798bbf179ec"],["/library/课内知识/【VLSI】学习/index.html","b71e9a8fc7fd2aca6c34d136b9723b7b"],["/library/课内知识/【WSN】学习/index.html","338fd2161fffccecbb98bee5551afabc"],["/library/课内知识/【analog ic design】学习/index.html","4144c8ab0da1bf93606703b75692198f"],["/library/课内知识/【matlab】学习/index.html","e222ca5ad2cd54d99c518e048e590c39"],["/library/课内知识/【verilog】学习/index.html","ac7e77fb4ceb4ccdc37bcd1a0c5fb037"],["/library/课内知识/【zemax】光学设计eda/index.html","22e46a6ae6f16c4a3a45dcc5cde5d730"],["/library/课内知识/【光学】汇总学习/index.html","5ec3cc2faeddbc53be1575539d2d31d0"],["/library/课内知识/【固半】学习/index.html","b434584f3f3b5147a98ae9b22c598676"],["/library/课内知识/【常用数学公式】总结/index.html","2d299d511eeefff9fc8a69b1cd6414da"],["/library/课内知识/【量子力学】学习/index.html","2a117d2ccd8cedeb1b8411e8401bc1c5"],["/mylibrary/css/float.css","7d93899e79faa4405590e035e789f639"],["/mylibrary/css/hide.css","9fc7252762e93b32ab03ff1fec5e5141"],["/mylibrary/css/load.css","d91c0ff119dfc4a90bcfed9cc06c7881"],["/mylibrary/css/neon.css","1f22538f22806952076b48a912116cec"],["/mylibrary/css/round.css","5abac42062d3ed9229e3cb2b1a8c45f4"],["/mylibrary/css/shake.css","a154adefecb6a3a7e995d1a0d9aae505"],["/mylibrary/css/shiny.css","738730c9c7ae0c3c7dd523e5ab12d444"],["/mylibrary/index.html","e5904432e924cc954d08e4a37ee113b9"],["/mypage/css/style.css","17605a14aae99769e154af837959d499"],["/mypage/font/LigatureSymbols-2.05.eot","5b46f67c079e0599f89aae807cdad560"],["/mypage/font/LigatureSymbols-2.05.svg","f4be952f02a00bd7b464568304b12842"],["/mypage/font/LigatureSymbols-2.05.ttf","48ae0b91a8d6e1feb2c15961a338dad8"],["/mypage/font/LigatureSymbols-2.05.woff","f974884f441019724c351f85478b3938"],["/mypage/font/README.html","fa7a52e62898ba29bc0242a2159d6e36"],["/mypage/index.html","cba9492575ae865cbd1c36eaf4cde422"],["/others/Write-blog-using-markdown/index.html","4953761bd59c71097c0aaa2492fd9058"],["/others/chatgpt/index.html","d030f49616f7511b0740ecb10774ce41"],["/others/古诗/古诗/index.html","61f2a331577e00ea3703a26097d901cb"],["/others/玩过的游戏/index.html","612bb63edade433b9fab55bf7d158512"],["/others/能力年表/index.html","71f90534ec769544861634c347fe903b"],["/page/10/index.html","8441c1947e5748f1cdffccac71fb34df"],["/page/11/index.html","773131eec2c121bf9bfcc05a14db55b6"],["/page/12/index.html","dad9d46d4e90e6bc852b727873a15b90"],["/page/13/index.html","447fa6629ceea235057e06d1fcb45559"],["/page/14/index.html","319e11daafd62917da079c357a6c4630"],["/page/15/index.html","d7cc79c4ca741a98d52fba535a5aeeeb"],["/page/16/index.html","e81d18e2df1581749d4937507b653eb4"],["/page/17/index.html","a48b3367a221087fd3e7be8d08a01987"],["/page/18/index.html","42b38ae1898ef7171265dbf4c6eefd1b"],["/page/19/index.html","502c2899d984a29a546e9ed4c91f5791"],["/page/2/index.html","0216768e78e569c49d85d4a48b0cc191"],["/page/20/index.html","3d812badbf4d1806d394c01835a231bf"],["/page/21/index.html","50c21692fb743f5189bfe58645aac949"],["/page/22/index.html","a14d1492c8d78a474165e72a2c0d9083"],["/page/3/index.html","c1960aad767e945d4b950988876ad8b3"],["/page/4/index.html","fea084c9569c9f077d4dd36a9886842d"],["/page/5/index.html","bd812afc6193a8c807f498d30061acf7"],["/page/6/index.html","aaa364ddc14561274b6d5bb46cf4f731"],["/page/7/index.html","d465371975c91f5f872cc4f0d1516b94"],["/page/8/index.html","ba35e87edb57dae91a666887f12f9ba4"],["/page/9/index.html","d5cbf6e9165b335043f9e67e2322a620"],["/solved/chatgpt您所在的地区无法访问/index.html","97a42b2d6d8d6b4b710f45ca2cc162f4"],["/solved/github的github.io项目打不开/index.html","4364c6cd7099a1ca6df029e898a8167e"],["/solved/hexo部署报错spawn failed/index.html","a04405eca7ec406339f51ece5e3cca6f"],["/solved/modelsim的-novopt优化相关报错/index.html","b28b5a8a08beec26dedc2088905ba3d3"],["/solved/npm install 报错/index.html","6c5d353c841cfd0b83a6c6a7af814e9e"],["/solved/pycharm修改快捷键/index.html","388ca0364d088328ad99b24e42b3ed7b"],["/solved/pycharm内无法打开cmd/index.html","fcd948d7e45dd80e9fd30adbb5615ba6"],["/solved/从regedit改变键盘映射关系/index.html","5cee33d424ac67a62eb2eec8888beb49"],["/solved/双拼输入法/index.html","412fb831bef8dc3827be3b9cd73b0d53"],["/solved/右键新建菜单管理/index.html","bce0a12c86b66deb57619712a027beaf"],["/solved/执行make menuconfig时报错/index.html","805633002b211cf85c166e2610e99f4a"],["/solved/报错binsh 1 bc not found/index.html","ad29210fe052a3e39a0f15a6877f0bbf"],["/solved/报错binsh 1 cc not found/index.html","a91dc1aa34862075c6313143b0fc79f3"],["/solved/报错binsh python not found/index.html","94776d13e4107534a3c16fe1a0104cb2"],["/solved/未整理/index.html","bdef678ca47b1e0d839cfedd89615f18"],["/solved/树莓派域名解析暂时失败/index.html","ef11ba78f464aff40ebe59f285f31052"],["/solved/树莓派配置python环境/index.html","3e314f43e5788b13d219b52fc7d1f2ff"],["/solved/环境变量配置理解/index.html","38ea8a32d8c6500ac11eabe4a2073faa"],["/solved/设置软件开机自启动/index.html","421030e9c30a192f60db274f3d6df98e"],["/solved/隐藏windows安全系统图标/index.html","967b6d5211667b9b0625ebb0c826d1f9"],["/sw-register.js","333ba479991559a9ded2f8c88e7f161d"],["/tags/ADC采样/index.html","5a74feb5c92de3afb669c66e6b70b5f0"],["/tags/Block-NeRF/index.html","21c87e234b1296c2efc8bc7dacb72289"],["/tags/CV/index.html","a965717ecd814b456b0f908e34c1157f"],["/tags/CV/page/2/index.html","2ff18d23cf76dc5ad4d284a8f8b12993"],["/tags/FPGA/index.html","5e315eeeeb2b6befb826102d9767e428"],["/tags/GPS/index.html","e28ff5721b75d2880ae185e4a452736e"],["/tags/HAL库/index.html","ab9a4bc1ab6b09b9f5589281ac4dab1a"],["/tags/H桥/index.html","4af902a85f297995b5152d14bccd275c"],["/tags/INN/index.html","de022406724c19f928bd550b46d758d8"],["/tags/INR/index.html","8baf4970ded550be3396d86bb6f21cda"],["/tags/JIIF/index.html","1a7f3fbd96a837f1aab610b8251030d1"],["/tags/OLED/index.html","f3bdd4be7e12bd2600708577d1fded2f"],["/tags/Point-NeRF/index.html","c8174c129f2ea0a8c627fc0c9c47a47a"],["/tags/USB/index.html","d46d6de57c6bb10f918f1e27505c1b87"],["/tags/V831/index.html","cec18c23214962b63bfab0eeac57145f"],["/tags/adb/index.html","e8a4c686b832c098ae1430df544717fb"],["/tags/amg8833/index.html","c27d57aed4f25065e854b4238525f42f"],["/tags/auto-js/index.html","651f91760907bf340b2ddaf776b5f32a"],["/tags/bard/index.html","f6f10e7969549897c4656af6b0d5a716"],["/tags/bibtex/index.html","a039a2c797b1b72189efb14bda6cda5c"],["/tags/chatgpt/index.html","4f4143e18cdae38a1686b2fa9f5a1273"],["/tags/cmd/index.html","2a04fd922ede1a38d6da78acc7fb8dd6"],["/tags/conda/index.html","16563509e524b0a4bff65f2dfa624466"],["/tags/css/index.html","d3fdd9b82ace179d661badfcbc8160c2"],["/tags/fine-tuning/index.html","ca83357b6029acccb16e958f8d4e2878"],["/tags/frontend/index.html","6bf959902adb8e8a4f674ebf4725e998"],["/tags/git/index.html","73c344635e8538d27a37236a7d360f3c"],["/tags/github/index.html","4cceeceb4d350441e0e23c2e304c4c9d"],["/tags/gpt/index.html","84fa168b339ca96dd83431fc1c9968e7"],["/tags/hexo/index.html","772e820fee8af5fcc67fa8de77f814d7"],["/tags/i2c/index.html","856ceccd0e7efd6fb269158a36a0950d"],["/tags/index.html","c7f04aa7e41553b4c554a131456e4f69"],["/tags/inte/index.html","cb4c94b53f13120ee95a2b87c1cead10"],["/tags/k210/index.html","980e4419229b6cf03910c39c2ffea2b9"],["/tags/library/index.html","b20600f218c80e620164a933c9312a3a"],["/tags/library/page/10/index.html","78bce9027cddeb5cd0bb526c6ae299f1"],["/tags/library/page/11/index.html","bf734fd86ce6fb843e2f99127fc6a825"],["/tags/library/page/12/index.html","e27dd7c3053eed58aa024b82db06afbb"],["/tags/library/page/13/index.html","5965c945541f8d6d45aeeac4bc85ca11"],["/tags/library/page/2/index.html","0a52a92e557a20b2bb563a22098ec61c"],["/tags/library/page/3/index.html","debdd0d6c3626932251c2ac22c23d7dc"],["/tags/library/page/4/index.html","ec64a04fd170ae0313faa7dce6d4a13a"],["/tags/library/page/5/index.html","30b2f599853b4ba3a2a707c2e7201cf1"],["/tags/library/page/6/index.html","d0b3dae1b2d298c00d43260ef7e33f9d"],["/tags/library/page/7/index.html","3a0166680060f5656e79421de0badbf3"],["/tags/library/page/8/index.html","fe30ba2d1a350bd233b8d812966ce80f"],["/tags/library/page/9/index.html","418b00571e786077fdc6af6b02be2565"],["/tags/like/index.html","f1826593df4300569bf33eafe0176c37"],["/tags/linux/index.html","f63064e03dbc3a26916e43c28d70d03c"],["/tags/little/index.html","4ebedd4724ddbcab0f08a8f956d55ade"],["/tags/make/index.html","fdf1bb86a4e4b72170742cb036d99155"],["/tags/math/index.html","0703990e5a0bb7d2471a736f2cef6c73"],["/tags/matlab/index.html","c119ad2b0bfe7a5457e7778439a46af6"],["/tags/mine/index.html","9f246fcd841b58e25924636ab24c868f"],["/tags/modelsim/index.html","d6b4cde3c433a7ad316d654d372770e4"],["/tags/nerf/index.html","620a2e28e6cfa2ffe952b8db6e182db7"],["/tags/nerf/page/2/index.html","01d8ec91898fe6baab383e31f6941ec7"],["/tags/nrf24l01/index.html","d09a373463c5561c994d3c7c419195e1"],["/tags/nuitka/index.html","304e52582b0b756a9b31eb980e0fc0db"],["/tags/numpy/index.html","2cc2d1d9a2f626edcd81926d78b4c0dc"],["/tags/onnx/index.html","8c999c17eb20b2b6d0e35e7f2b470a0a"],["/tags/others/index.html","7eecddc05d05b02fb3931ba4f3695b50"],["/tags/pansharpening/index.html","8e948fd38cce6ad3957751dc2f9e2d26"],["/tags/pcb/index.html","fc6d400a5ee237a2f73fcf653c466eb4"],["/tags/pip/index.html","d463442f270974c26546fc7b313bd359"],["/tags/psutil/index.html","0fda0f096589a01aee24a15389f259d5"],["/tags/pyautogui/index.html","d3ebbba9ba230f3a8c0296ceebb24084"],["/tags/pybluez/index.html","5611ee2117da2c8ee84d274770411ab7"],["/tags/pycharm/index.html","a28ca3d8f5a302acab0947a6101d6059"],["/tags/pyinstaller/index.html","faea98d130677784d37b8d2e134b189e"],["/tags/pyqt/index.html","b675799dc6cdb7e4657357567138f97d"],["/tags/pyserial/index.html","75301b8daad401993969f359e4cd4121"],["/tags/python/index.html","7dbc430d7aa8735f1524b7966925eff3"],["/tags/python/page/2/index.html","7bd20f1d4d4b1e8e3aeb8e8db8bb9ad8"],["/tags/python/page/3/index.html","64b65e622f32dc2773e0da74ad5569c4"],["/tags/python/page/4/index.html","c551c235b21f2b406a0cfe2999338fcd"],["/tags/references/index.html","b36155f6734351ae6d1414c783a2c630"],["/tags/regedit/index.html","b0b82d446d8f2542d83a2e716eaecaac"],["/tags/solved/index.html","a93333dc7cf36222fa62bbeefde1eee4"],["/tags/solved/page/2/index.html","414b07a69c1ab636b2b7288eb479e62e"],["/tags/spi通信/index.html","264365d2397bd8cb46b30dec8b46a5e2"],["/tags/stm/index.html","d77beb563ee6374ce56096ba3ab38781"],["/tags/stm32cubemx/index.html","cfd34c039d135c57cf1e9be4e24af9a1"],["/tags/tensorboard/index.html","062104e7b989d70fd4a1f1010c4e17e3"],["/tags/torch/index.html","8ae91694081c99c774b93b2244a94d1d"],["/tags/typora/index.html","80ac80443df5c5e4b808152b611a4812"],["/tags/ubuntu/index.html","341ca660023db0eb588a6fdc4c780c3f"],["/tags/verilog/index.html","765b9f55eee94c8ab8bb2126e136ba9b"],["/tags/vue/index.html","d718ba5c64bbe30d7556479f9be135d5"],["/tags/win32gui/index.html","3263492daeba24ad6069bf959a12f8c5"],["/tags/windows/index.html","21980b7f5b7c9f21b69c5e59899ae5b0"],["/tags/work/index.html","181e8d35f7eab70f5c76d9e783655cf0"],["/tags/work/page/2/index.html","6a0c606985743b3221b6392828dc8293"],["/tags/work/page/3/index.html","9c880e95d6797f2032f227f6905c398c"],["/tags/work/page/4/index.html","501caad46af632af4cc9ae6037a6b276"],["/tags/work/page/5/index.html","c818d44e5c02d193cfb46b21d043970c"],["/tags/work/page/6/index.html","d6bdf19a233d6f40abebb78ccdf227a5"],["/tags/work/page/7/index.html","2de77e0bf6efbfbbc492e033e3155d00"],["/tags/worked/index.html","343e2d3faecdff02f19c2eaefbf4584a"],["/tags/下载视频/index.html","ddf1eac4a9e01a094e504f26d27ea12f"],["/tags/串口/index.html","59123ae47b064fbed53569da1e577fc3"],["/tags/代码/index.html","d1cb7cf06e16ee93328ae6396b3a5029"],["/tags/保研复习/index.html","3b3444a21a96c175a034c2e234febbd0"],["/tags/光/index.html","f29e3283b9ca3c74ea5b6e2d963808f0"],["/tags/光子神经网络/index.html","062a22132783cfc22f22c81f86a126f3"],["/tags/光子计算/index.html","47866912e481bcb3bf0f8e572eda8513"],["/tags/光学/index.html","8ba457569604b017750aef5448489c17"],["/tags/光计算/index.html","1ed67651447db1aec292ec74ff277da0"],["/tags/全志F1C200s/index.html","ed6f5bf0208db71b7731163205c16d68"],["/tags/公式/index.html","9253ec939220cda813eec3e3de6fe7ff"],["/tags/前端/index.html","9d6daab6e75502bc4e782901c36c7ab6"],["/tags/博客/index.html","5cf21d234770ddf2c2d3ff30548615d7"],["/tags/国产/index.html","3b73f5ba37f75d8da7e1a91c3afdc6e1"],["/tags/多光谱/index.html","f5eca7c418e33ba8c4417feda7ef71bf"],["/tags/大学/index.html","73fbfc6a454a1c8c561f1699e88d70ac"],["/tags/嵌入式/index.html","07e31da4f92b7bbba8d4a453509b57fb"],["/tags/嵌入式/page/2/index.html","726aa904468d02e8b88815fc8147052d"],["/tags/嵌入式/page/3/index.html","b417e8a15b6ba7b91a6de03726c6bf12"],["/tags/嵌入式/page/4/index.html","4c951e8541b1cc49381f5a9ad2bca428"],["/tags/嵌入式/page/5/index.html","226ae614c58fef1f60173e13cd13550a"],["/tags/嵌入式积累/index.html","03bfa66cf68ba802eff277fc400cca73"],["/tags/开关电源/index.html","900bc9ad283a50dced807cdfb602b13d"],["/tags/开发板/index.html","a3bd9bec28359fe5975bdb08209373d4"],["/tags/开源/index.html","343a87a4ef233d6808915d65651bd0f3"],["/tags/忆阻器/index.html","1153197a61007ee7b604655bcf99c368"],["/tags/快捷键和常用指令/index.html","65c8204b58074267490fbfdc189f5bee"],["/tags/手机/index.html","cd735eab5a35c22642353e9e6edc3864"],["/tags/打包/index.html","6c0303bd176c740268afa24bd27ca1d8"],["/tags/控制/index.html","580e82365a1287caa68fa0a484966c2b"],["/tags/数据处理/index.html","bf6aa6140b75730dbe08dbaac717f419"],["/tags/数码管/index.html","64bccbcfbdf5791717eec6668f4aab19"],["/tags/整数规划/index.html","b1c7492e2961d7bea1cc87e1ecee9d23"],["/tags/旅行/index.html","0ed95a08717fe4062670b265833ceb93"],["/tags/星际酒馆/index.html","f7578636d92f5be9f908765c551e7ff1"],["/tags/机器学习/index.html","084db6ea560ce824c8a0ebb45a1e735f"],["/tags/机械加工/index.html","d516d7f1fc7eab199dcca89bbcb4ad9b"],["/tags/树莓派/index.html","9579c64b7fc6d97867861d680d270b7f"],["/tags/模块/index.html","0cd616b540400d2710bb646d869243d8"],["/tags/沁恒/index.html","ff0052d0276b487ce267ac4f673e113e"],["/tags/测距/index.html","8a95aa02345a95859cb381456f56dd7c"],["/tags/深度学习/index.html","410f55907dc1acb4c3f629ed5304c61d"],["/tags/深度学习工具/index.html","22d735773e83a5d87a6f80bca2139077"],["/tags/游戏/index.html","4fd9cdb155fa598295c607fa5d6436ef"],["/tags/滤波/index.html","7360c918883d7d37d6f86a661445f14d"],["/tags/理工方向/index.html","1222bb1672d60ba3e51819a1d1fdc213"],["/tags/生涯规划/index.html","174738afc0fc5e706bf9b33a514ccb59"],["/tags/电容触摸按键/index.html","30ad1b63e5ccbe28229c90a521ea679b"],["/tags/硬件/index.html","9732685f2a195f8dc33b0440134c5a11"],["/tags/硬件知识/index.html","586b3aa9d8708fb073330d6e6739bff0"],["/tags/神经网络/index.html","6ac47b4b2e823cee8f3aed4fcc408f8e"],["/tags/积累/index.html","4e34275e1dcebffc3f800ab764d6d071"],["/tags/算法/index.html","66325751fbba0fcc127c681fc8e895f8"],["/tags/线性规划/index.html","92e418affd4c4107e96a6a93bc4c278e"],["/tags/经验/index.html","46a1357741dfeebb87e0385f74212f45"],["/tags/经验积累/index.html","2a2fb9c69ed3baf99e3b147566bbe032"],["/tags/综述/index.html","4dcd934624e7cecc5d923c4651c23a83"],["/tags/编码器/index.html","5b85b48e591cc11ea5b8999aab35f571"],["/tags/网址整理/index.html","bbe7db460f2125aab7dea392a5712988"],["/tags/航模/index.html","c28057c52da277534da87b2a9d63d7e5"],["/tags/芯片/index.html","9f34fb6d221786526a4eda6f1212fc05"],["/tags/蓝牙/index.html","8e34aabedc3c9c10da83704f6ba17712"],["/tags/蜂鸣器/index.html","815235688945cfb1fec193f1788aca4f"],["/tags/论文搜集/index.html","8316759904bdefd43471972f45407994"],["/tags/语言/index.html","0346337ea822b381bc9d200156669619"],["/tags/课内知识/index.html","3fb3b391605199dd3461235ea7978ffa"],["/tags/课内知识/page/2/index.html","7837d9e74a34032ec67eedc691d02d76"],["/tags/贝叶斯/index.html","790654014664c1d7dbf909ca4ea48dc5"],["/tags/超声波/index.html","7b98583fb15dc87609dcc6db8ace89ef"],["/tags/软件/index.html","32dbfe6828bbb5006291bf71db0f3f25"],["/tags/输入法/index.html","2d5cc27a854f1ade500fd7128ee1c283"],["/tags/运放/index.html","9e63560d96c9252cb277e8dc396e6cc9"],["/tags/选型/index.html","1c8abe536afb7c84eb3f3a857cc5a0ba"],["/tags/通信/index.html","f6266b69d5d7b445b9c2fe587c15610d"],["/tags/量子力学/index.html","70e69bcdf0b8638dc4b7c858d7b746e3"],["/tags/钢琴/index.html","80357f42d97511b005328e84062d4fbe"],["/tags/键盘/index.html","1344a66f9bff99d074598bf3741a8b92"],["/tags/陀螺仪/index.html","868d0058a89541b354617418ded091cb"],["/tear/index.html","8fd1cdca14a802648241b91949375fca"],["/tear/index1.html","fed8d98128859df02179b60fb69f93bc"],["/undefined/一下都是0/index.html","08d68e9642c37120f86c71e4e330293c"],["/undefined/论文总结模板/index.html","c3874635819eae05767448eb4d788621"],["/work/CV/【INN】积分网络/index.html","e9f1b822beff4512c48b2ff398bfe0fc"],["/work/CV/【JIIF】多光谱融合/index.html","979ca06884e637c517c3517f619ce7bb"],["/work/CV/【LD】大模型做pansharpening/index.html","b358a6fb5d98661dc1e413f7511af28a"],["/work/mine/gpt本地部署/index.html","83b4ebe6f619720d9aeb663adfadb828"],["/work/mine/word生成PPT/index.html","a1458d2fd7c6f1a1a41e567746fbc3cd"],["/work/mine/控制电脑风扇/index.html","8f5546aa98d377d339a2a6c8de606131"],["/work/mine/电脑外接摇杆/index.html","2d19cd18929a32542b8e8f74caa4cd72"],["/work/nerf/【nerf】Block-NeRF笔记/1667118074452.png","221e63aa60efa77dca50740ce9b88380"],["/work/nerf/【nerf】Block-NeRF笔记/1667118457009.png","5c1577c940dd443631045f45787e487d"],["/work/nerf/【nerf】Block-NeRF笔记/1667226872521.png","ec7a6051752cb193ae983fb81d135fce"],["/work/nerf/【nerf】Block-NeRF笔记/1667264387582.png","57b13f83c9dfd506e6ccb81743f74963"],["/work/nerf/【nerf】Block-NeRF笔记/1667265226170.png","600b87f6ea78e46e19929200a8190875"],["/work/nerf/【nerf】Block-NeRF笔记/1667292838757.png","f9c6a5975d54d8b975e9de23dc891c00"],["/work/nerf/【nerf】Block-NeRF笔记/1667293450480.png","57c9efd9a2a4ae995517991ff7abdf32"],["/work/nerf/【nerf】Block-NeRF笔记/index.html","12babc2f9487e967b2415aa35e4f700d"],["/work/nerf/【nerf】Point-NeRF笔记/index.html","8aea3dab6383b8b577f375b01a18892c"],["/work/nerf/【nerf】nerf-pytorch/index.html","6656f7217ec69719d621f979cf86df4e"],["/work/nerf/【nerf】最新阅读记录/index.html","6a6a8bd06666a97ee0ced793032b91bb"],["/work/nerf/【nerf】汇总笔记/index.html","ac23e73aa3d33e0c4ecc35ce61b796fd"],["/work/nerf/【nerf】记录/index.html","9d859bf492aa958ec60d0e337104852a"],["/work/python/chatgpt微信机器人/index.html","59cfd3316294199d0eb198a73cea3711"],["/work/python/文件内容检索/index.html","85ce15c6611b2f716c132afc15fcd76a"],["/work/python/游戏AI/index.html","8ae8939fff913901ffad251943ea2e5e"],["/work/python/网速显示助手/index.html","7a6c5d6e2e141eba3cae0f4da2087f82"],["/work/python/羊了个羊自动化/index.html","38666aa8726e850b17f06d480569a688"],["/work/python/蓝牙调试助手/index.html","df6f1927dc1f6f59f20f46053749d01a"],["/work/python/调用simpletex公式识别api/index.html","23003a17583a8549745cffb89f98cb78"],["/work/【生涯规划】保研/index.html","e97be9714b13633fb1b2ae765845b1a3"],["/work/【生涯规划】文书/index.html","0b6c07652a4905767c313531ddc30972"],["/work/【生涯规划】留学/index.html","c5dc25bf0dcfcc148f228aa10b0918ba"],["/work/【职业规划】/index.html","60f0dd6afc80dd6c3544fccda7c131d3"],["/work/光计算/【光子神经网络】MVM综述/index.html","5d9d88d616484b394a43b64ed97ebc15"],["/work/光计算/【光子神经网络】TDONN/index.html","db96b4ee3dbab342bad5523f8cf74686"],["/work/光计算/【光子神经网络】太极-Ⅱ/index.html","f51ccd8d9961d08d2cda88e7e974070b"],["/work/光计算/【光计算基础】MZI/index.html","59942aacce22e73c5141b3646f234cb2"],["/work/光计算/【光计算基础】光频梳/index.html","9a774eb85a8b6358f58e55cf7a6fc396"],["/work/光计算/【光计算基础】微环谐振器/index.html","01a2a883f0d80a6ff21c4a563790567d"],["/work/光计算/【科研基础】references/index.html","fdc815429d336d4a611b68d4333e42f9"],["/work/光计算/【科研基础】光学论文期刊/index.html","898a2a7e4cdabb65375a37b74008f866"],["/work/光计算/【科研基础】最新论文资讯获取途径/index.html","66e2ae860b60b97ef8894e429ea0345b"],["/work/光计算/光电神经网络现状/index.html","96d77e43564f63414a25821e43328678"],["/work/前端/【前端】记录/index.html","a0a0a5f651669e91a334c0de6b82b12a"],["/work/前端/【博客】记录/index.html","c809cb2ae0163b4e3983f478c172a237"],["/work/嵌入式项目/bard/【bard】Linux迷你电脑/index.html","9bba6b0b679c72dd0001bfe266ad1d47"],["/work/嵌入式项目/【usb-hub】记录/index.html","4e8384f9a701b0fbb145ebe9c94366db"],["/work/嵌入式项目/【加热台】记录/index.html","962a975a3f24367f261638f85a7a7a09"],["/work/嵌入式项目/【四旋翼飞行器】记录/index.html","b7b3a3669f8dc691e59a4a2abf3eab05"],["/work/嵌入式项目/【生日贺卡板】记录/index.html","01417fb9194ec14827943b90fe30e70a"],["/work/嵌入式项目/【祖传板子】记录/index.html","fa261e06b71248dd9791ae783f05e3fd"],["/work/嵌入式项目/【自制无刷电调】原理/index.html","4455d7bf4761835e356e3f75b11ea4da"],["/work/嵌入式项目/【航模】记录/index.html","154d36562e9417532763a28d28a01fbb"],["/work/忆阻器/【忆阻器】python平衡车/index.html","1ab077448c12d70d9f1f5235ea95031c"],["/work/忆阻器/【忆阻器】平衡车专利申请/index.html","5d6c6dfd93ee91472aa3daf565df6673"],["/work/忆阻器/【忆阻器】总体学习/index.html","93ac12b29060d74a4731cacc0d00dc53"],["/work/忆阻器/【忆阻器】算法部分/index.html","066bed7f8db528bfd6e93ce31de0743f"],["/work/忆阻器/【忆阻器】记录/index.html","67eb85d6111d21fbae245fb69f482520"],["/work/玩别人的开源项目/尝试过的开源项目/index.html","3131c04313afc086c70ce054d15c3d46"]];
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
