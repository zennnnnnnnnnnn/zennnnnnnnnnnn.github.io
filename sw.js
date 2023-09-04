/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/learning/开关电源/【开关电源】学习1——buck/1663506637120.png","8e50e1a9a14c0174f21513f95808f075"],["/2022/learning/开关电源/【开关电源】学习1——buck/index.html","b4fb335925dbe1ddd7208d9850df9bd2"],["/2022/learning/开关电源/【开关电源】学习2——boost/index.html","dc041b8b25fd6cb1e37bc1bdee6282c0"],["/2022/learning/开关电源/【开关电源】学习3——VMC反馈/index.html","027513363c3ea99c5b00ff5f0e591bc2"],["/2022/learning/开关电源/【开关电源】学习3——buck-boost/index.html","8eb15f531558e4ca8d4f80bbaf315fe7"],["/2022/learning/开关电源/【开关电源】进阶1——稳定性判断/index.html","2c89c876eedff2ed753e072050b54473"],["/2022/learning/开关电源/【开关电源】选型和使用/index.html","9b34e6edf30d5a63d972512ecba79bdf"],["/2022/library/frontend/【hexo】博客部署/index.html","5237a7a115da4262b302813dc748f4ab"],["/2022/library/frontend/【markdown】编写文档/index.html","9fc641d779398a554278fdaaf96ed8f3"],["/2022/library/frontend/【vue】搭建网页/index.html","d022db793c552115c690520fc84701b7"],["/2022/library/inte/【css】学习/index.html","3c45e01e22d00fd043be249ebfbca122"],["/2022/library/inte/【钢琴】织体类型/index.html","31f79fa5e5f645a75ff64955af2126fb"],["/2022/library/inte/网盘挂载Alist+RaiDrive/index.html","f0544cdb1e26578455810dbfe4b33d82"],["/2022/library/math/线性规划和整数规划/index.html","8f935e1216e7bd840ff6da8c63767be6"],["/2022/library/python/【nuitka】打包python为exe/index.html","54ebcd59f764d6a5314f33bf659d8cba"],["/2022/library/python/【pandas】数据处理/index.html","87c986f6487167c76584ac6b078a6a75"],["/2022/library/python/【psutil】检测电脑网速等/index.html","891fe1f5273c78e53dda4ee65d4853ce"],["/2022/library/python/【pybluez】python控制PC蓝牙/index.html","c371f18649dda948553f3bd9f3d2a4d5"],["/2022/library/python/【pyinstaller】打包python为exe/index.html","07bad7631f22617deff910b2dc454d3c"],["/2022/library/python/【pyqt】编写可视化界面/index.html","984c6fcbbc3a20f70e5f6d373cdb07f2"],["/2022/library/python/【win32gui】控制win系统/index.html","b4241d690ee3a3569aa04cfb44a7b10c"],["/2022/library/嵌入式/【git】学习/index.html","9e6e9c85b196494160e3843b531453e0"],["/2022/library/嵌入式/【linux】常用指令/index.html","7fb05497c20f206ca95b88c82a52b978"],["/2022/library/嵌入式/模块/【模块】OLED/index.html","e03052d2e6e072524a5c005f2bb4dd7b"],["/2022/library/嵌入式/模块/【模块】陀螺仪/index.html","6087a58b297291612fd212ec5bfe52b1"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/index.html","5383d2583388237f85bfcface842d0af"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/index.html","ab18e22f98b34bd2d2347ebb59538683"],["/2022/library/嵌入式/硬件/【硬件知识】芯片熟悉/index.html","d04707bb46dbb1a8440df82d8c41b89a"],["/2022/library/嵌入式/硬件/【硬件知识】选型/index.html","9ae05b1b97b1e4d601f7cb27eb3f5fa5"],["/2022/library/嵌入式/积累/【嵌入式积累】阅读寄存器手册/index.html","7ed61065e3837745e78fe922f46fda61"],["/2022/library/嵌入式/算法/【控制算法】学习/index.html","59a4bb6d102e0d372b8a96e9ce8078cb"],["/2022/library/嵌入式/算法/【滤波算法】学习/index.html","4ff802c657df9b94679beabb6cf4fec1"],["/2022/library/嵌入式/语言/【python】进阶总结/index.html","a1b0af6dee7c2265e53cbd7ec2cb9341"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】i2c通信（mpu6050）/index.html","0b1c5f2cb1a21fdf53386bd5c527eea5"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】pwm波/index.html","787d759b092922b2f8f863237d0053c1"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】spi通信（nrf24l01）/index.html","c4a303db5c1dd1487cffa3cf8678d4f6"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】串口通信/index.html","d78dce654505b851348df5d67bd7ef99"],["/2022/library/嵌入式/软件/开发板上手/【V831】开发板上手/index.html","1b36343e4ebb60dc676c612ca9d12792"],["/2022/library/嵌入式/软件/开发板上手/【k210】开发板上手/index.html","046f7bc4c6152db5ffb9b45e3eeb8b31"],["/2022/library/快捷键和常用指令/【cmd】常用指令/index.html","368fa2d04a9d373a1206af13e474dd85"],["/2022/library/快捷键和常用指令/【pip】【conda】常用指令/index.html","40cd4e5446226780924462f14ca0fc98"],["/2022/library/快捷键和常用指令/【pycharm】快捷键/index.html","e820b5ea3572f85397cfd5c1cc0bdac1"],["/2022/library/快捷键和常用指令/【win】快捷键/index.html","96e5115b6ee3cd527693e37ef647af5f"],["/2022/library/快捷键和常用指令/免费下载视频/index.html","78d1d2d7695fd4423be7c27899a4d220"],["/2022/library/深度学习/【深度学习】基础知识：×NN都有些啥/index.html","995814a67dffe1f3544ef57203523e69"],["/2022/library/深度学习/代码/【numpy】语法基础/index.html","adefb807edd39f25c421cf4418c46229"],["/2022/library/深度学习/代码/【torch】语法基础/index.html","c109ee8ec787169eec52ddef41919c1b"],["/2022/library/深度学习/工具/【深度学习工具】onnx学习/index.html","95244eaba93b1f59875c84f2e56f26cd"],["/2022/library/深度学习/工具/【深度学习工具】tensorboard学习/index.html","86c668ddd91f37b673412f627dc06c88"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/index.html","e907c9c96531c12f1167469e85e2e6b3"],["/2022/library/经验积累/【经验积累】网址整理/index.html","1db489c432a420781a025b6fb21bf664"],["/2022/library/经验积累/【经验积累】论文搜集/index.html","7ac64f26360601de4b0d038c1c82d00b"],["/2022/library/课内知识/【FPGA】仿真和烧录/index.html","171b010b363581334a8961603e363db0"],["/2022/library/课内知识/【matlab】学习/index.html","b7eb044bdebd401c78b59ba6add844ef"],["/2022/library/课内知识/【verilog】学习/index.html","5a2a828f4a64bade4eb5c71cf5b3a92a"],["/2022/library/课内知识/【常用数学公式】总结/index.html","2b2e72cdb0900a7d325250d7aa435a1c"],["/2022/others/Write-blog-using-markdown/index.html","a2c3654e9f97f65b14c67d6c2084ac4c"],["/2022/others/古诗/古诗/index.html","4c08f8a9cbd964cfdab0eaa7f940a2bb"],["/2022/others/能力年表/index.html","4b12a841b48a90c9738028f9ba3f5c2d"],["/2022/solved/github的github.io项目打不开/index.html","becb9a93d3acafb1e9b3cdc5b2cd43a6"],["/2022/solved/hexo部署报错spawn failed/index.html","3eb40cf4d078eb86db52fc158a9490ca"],["/2022/solved/modelsim的-novopt优化相关报错/index.html","a5a49a2fa832bc831f40e3f137c65367"],["/2022/solved/npm install 报错/index.html","998557787c3537dffc00a39f3c20bebc"],["/2022/solved/pycharm修改快捷键/index.html","6426b7406ebd445055ee98d7dc3e2a13"],["/2022/solved/pycharm内无法打开cmd/index.html","2c657d28dde0211b2cdd7d3dbf94d048"],["/2022/solved/从regedit改变键盘映射关系/index.html","8e6a71b620b359bf832931b7f735cada"],["/2022/solved/右键新建菜单管理/index.html","9e8a21f8b4bfd7c9c691d95bb0d714f1"],["/2022/solved/执行make menuconfig时报错/index.html","ae277114adc17247e150c0429e4e2def"],["/2022/solved/报错binsh 1 bc not found/index.html","690f638af750815d0a25082580f63434"],["/2022/solved/报错binsh 1 cc not found/index.html","8d808ba6e941245ee981248c695efab2"],["/2022/solved/报错binsh python not found/index.html","d95834f588ab25cf23a385e421437f41"],["/2022/solved/未整理/index.html","53d6545bbe0cd335e7c4f9332761e309"],["/2022/solved/树莓派域名解析暂时失败/index.html","5b470349de1c4bd8f041ee274aea49f4"],["/2022/solved/树莓派配置python环境/index.html","4317b765dd06ea773617777086e4566d"],["/2022/solved/设置软件开机自启动/index.html","ffeb86fd927a0465098048bbd5fc048d"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118074452.png","221e63aa60efa77dca50740ce9b88380"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118457009.png","5c1577c940dd443631045f45787e487d"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667226872521.png","ec7a6051752cb193ae983fb81d135fce"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667264387582.png","57b13f83c9dfd506e6ccb81743f74963"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667265226170.png","600b87f6ea78e46e19929200a8190875"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667292838757.png","f9c6a5975d54d8b975e9de23dc891c00"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667293450480.png","57c9efd9a2a4ae995517991ff7abdf32"],["/2022/work/nerf/【nerf】Block-NeRF笔记/index.html","61cef98341ddaa227e36b4099f8813bc"],["/2022/work/nerf/【nerf】Point-NeRF笔记/index.html","2dfe3706820de2e39fbb58ad46ec6b40"],["/2022/work/nerf/【nerf】nerf-pytorch/index.html","4f208f034ac3667a6524d41a16f8e2c5"],["/2022/work/nerf/【nerf】汇总笔记/index.html","cfa8aa754dae5b320fbcb0e87b818c3c"],["/2022/work/nerf/【nerf】记录/index.html","0737edb9eaf70df15263cd00535adfc2"],["/2022/work/前端/【前端】记录/index.html","e6f6b9542eee517331f29337199d058f"],["/2022/work/前端/【博客】记录/index.html","89262848fe1e1821b0da6c8747b0892f"],["/2022/work/嵌入式项目/bard/【bard】Linux迷你电脑/index.html","59ef8a1d73c6609fd19f4205a10fc0d6"],["/2022/work/嵌入式项目/【祖传板子】记录/index.html","877305778c6811c3d6c2eba04754d14f"],["/2022/work/嵌入式项目/【航模】记录/index.html","ff4f66e1fa596c378e8c569255a5ecb5"],["/2022/work/忆阻器/【忆阻器】记录/index.html","ff1baae6d24c85ab6ba12887abe2131b"],["/2022/一下都是0/index.html","5e803044de45d6050044e4fcd9e7991f"],["/2023/learning/开关电源/【开关电源】理解/1663634083260.png","7b1a889ee96c83e170023666681c9131"],["/2023/learning/开关电源/【开关电源】理解/index.html","64770d41d1ec60e9fff00fc80ebc40ea"],["/2023/library/frontend/【adb】电脑连接控制手机/index.html","e86cecfc98afe493259217948a2c8e4f"],["/2023/library/frontend/【app inventor】拖动滑块写手机app/index.html","27ac61f60948edb5b1962ebb64a75c95"],["/2023/library/frontend/【auto.js】手机自动化控制/index.html","3d6aebe0a874b080663d6dbeb0bd80f5"],["/2023/library/inte/windows的linux子系统wsl/index.html","fa272b9b68fddd9eec399ac236a7e8f0"],["/2023/library/inte/【latex】学习/index.html","7bd488a2f76770422396ac36911156e6"],["/2023/library/math/【math】高斯积分(Gaussian Quadrature)/index.html","e33b50e22662d5e84afb35973696e418"],["/2023/library/python/【CV2】图像处理/index.html","b52a27b603436fdbbeeeec9fdd6ee0c7"],["/2023/library/python/【itertools】计算排列组合/index.html","541933e76001fc709f3a15d37c3b10ee"],["/2023/library/python/【matplotlib】数据可视化/index.html","9a27d3b72b28d8c5f1f5d4b8accb79b0"],["/2023/library/python/【numpy】数据处理/index.html","76c410318144f743530639f865ab7214"],["/2023/library/python/【pyautogui】控制键鼠/index.html","d46c03118db02c46f1bce4714a51db65"],["/2023/library/python/【pygame】2D游戏/index.html","458f4af749a8a0a477cb1db5ebad0cbe"],["/2023/library/python/【pyserial】读取串口/index.html","0aa58b1e64d695e45ed004b0be933072"],["/2023/library/python/【python】基础语法/index.html","80ad6885af5408abb55a961a72ab5dad"],["/2023/library/python/【python】有趣外部库/index.html","a322e7530effadb6a1e11266b233a94d"],["/2023/library/python/【python基础】常用内部库/index.html","e6a0b56b6628d77c064b0ef68ec66457"],["/2023/library/python/【python常用】常用库的pip安装/index.html","7079cf736253d548f03c50f8f284e24d"],["/2023/library/python/【request】网络请求/index.html","a0b209f8306caaa7b2129c8acf1ee612"],["/2023/library/python/【timeit】获取时间/index.html","51ca540154f85d3bb341d6b8cecc8393"],["/2023/library/python/【torch】机器学习库/index.html","a40f34b838fd73f63ce95926eb4151ef"],["/2023/library/python/【tqdm】显示进度条/index.html","d6fa59d86812c37d1581db0b97248c2d"],["/2023/library/嵌入式/其他/PCB作画规则/index.html","640112e7f895563525aba6b3795ae7fb"],["/2023/library/嵌入式/其他/犀牛建模/index.html","a4bb5a2e38575979c6a97ab9de518a71"],["/2023/library/嵌入式/模块/【模块】GPS模块/index.html","7750d6f7abddcadc711ba7a1d49a5950"],["/2023/library/嵌入式/模块/【模块】amg8833/index.html","2efc90758075596259517caca3a80ffa"],["/2023/library/嵌入式/模块/【模块】as5600/index.html","1429d5100bec420cafe880b589452d5a"],["/2023/library/嵌入式/模块/【模块】数码管/index.html","d5a270c9af239fe7f4dc4dec838da7e3"],["/2023/library/嵌入式/模块/【模块】电容触摸按键/index.html","52467f5508bc4fca901128479202243c"],["/2023/library/嵌入式/模块/【模块】蓝牙/index.html","b9b6e11e7bb6c6bb10549d97df2b765a"],["/2023/library/嵌入式/模块/【模块】蜂鸣器/index.html","3cc3920630ce79bf8216df95163eb93e"],["/2023/library/嵌入式/模块/【模块】超声波测距/index.html","b375774965d31fac4605c78ce6c7b329"],["/2023/library/嵌入式/硬件/【硬件知识】三极管/index.html","20f4d1cdad9c8164ffe5d1d9fc96d797"],["/2023/library/嵌入式/硬件/【硬件知识】模拟电路pwm/index.html","7552e65ae00e531ea4ba795a81aa2a72"],["/2023/library/嵌入式/硬件/【硬件知识】运放运算电路/index.html","85238dc48bbeae3e8cd13466ec3fd13d"],["/2023/library/嵌入式/积累/【嵌入式积累】常用官网/index.html","cef99f7ebacac122191de07abed79d93"],["/2023/library/嵌入式/积累/【嵌入式积累】控制入门/index.html","b3f493915e9f16a54e302703b705a5f5"],["/2023/library/嵌入式/软件/【HAL库】笔记/【HAL库】ADC采样/index.html","0e3d52636a1618a5abc3357ae740fd63"],["/2023/library/嵌入式/软件/【HAL库】笔记/【HAL库】USB/index.html","7d9dc4a21168be7ad3c46c888328d1e8"],["/2023/library/经验积累/大学毕业选择/index.html","235b2ff36a91717c3dfcf12575b99b3d"],["/2023/little/name/index.html","e20749fb27d84cb7c74b9851687831ff"],["/2023/little/留学小记/index.html","97256365bbc39ab045e14c8d1f7c1aa8"],["/2023/others/chatgpt/index.html","f8995f3d971994573a36b8f3f39bb7ba"],["/2023/solved/chatgpt您所在的地区无法访问/index.html","9216488cf08a8b4a47a39eaadb9a67ab"],["/2023/solved/双拼输入法/index.html","3b99ff5f23c58a4e2b87df2ccc80572d"],["/2023/solved/环境变量配置理解/index.html","463e8a04c7c6690349d5428c4ded95d5"],["/2023/work/CV/【INN】积分网络/index.html","83fe4dad7ed7eea1f6f62480c4f46692"],["/2023/work/CV/【JIIF】多光谱融合/index.html","5010e66fd99f2f6042acda3775e2d1a2"],["/2023/work/mine/电脑外接摇杆/index.html","14811a72fbf0b9336aa171d835ed33c9"],["/2023/work/nerf/【nerf】最新阅读记录/index.html","339d9e0f82e26210fd8d39679dd2ad7c"],["/2023/work/python/游戏AI/index.html","b69e7a9630ef32f94b070adc58843f21"],["/2023/work/python/窗口互联游戏/index.html","b14e5327a1b3d17595d59988b7197899"],["/2023/work/python/网速显示助手/index.html","ba6aef290f768eef4d969f1cc57177e6"],["/2023/work/python/羊了个羊自动化/index.html","945209b264b14d005e40dd9c84f41189"],["/2023/work/python/蓝牙调试助手/index.html","6b52e8479e57101a3c1565401788770a"],["/2023/work/嵌入式项目/【加热台】记录/index.html","cfaa77c47c907f00fce6822d14bc8933"],["/2023/work/嵌入式项目/【四旋翼飞行器】记录/index.html","ce363259c5980ef94aa6fb8cd07929d2"],["/2023/work/嵌入式项目/【沁恒】样品试用/index.html","cae6f469a9e6e6559284f83b7367c7e5"],["/2023/work/嵌入式项目/【生日贺卡板】记录/index.html","bfedfee8291e3a036d44a8e5beafd265"],["/2023/work/嵌入式项目/【自制无刷电调】原理/index.html","9bf3b072825b1d335e70ac92baa5c24b"],["/2023/work/忆阻器/【忆阻器】python平衡车/index.html","37013f1ab6f98959fc345fae3a4670e2"],["/2023/work/忆阻器/【忆阻器】算法部分/index.html","d96021606914922d4d7dadd3975d372d"],["/2023/work/玩别人的开源项目/chatgpt微信机器人/index.html","8728d6c12da8b63c31ff8d20c197818e"],["/2023/work/玩别人的开源项目/大一尝试过的开源项目/index.html","722cd3b63bd8b031ee3b0c619938c17d"],["/2023/work/生涯规划/index.html","793ebef77d52bd8b30fd9cd185a17d5d"],["/about/index.html","18451dad3c31e1ea9edc9580b22968b6"],["/archives/2022/09/index.html","d93b70650201c7fa0777b1276b5d7d4f"],["/archives/2022/09/page/2/index.html","e195ccf4af2458f733b14d951640d23e"],["/archives/2022/10/index.html","9d6a30345dc88b5f2f07a855f0e50122"],["/archives/2022/10/page/2/index.html","308fc7df75449f968c6354c0023c811a"],["/archives/2022/11/index.html","b8a471563f8664b078f5d37747a910e1"],["/archives/2022/11/page/2/index.html","1609942db4118bed731e72c3a4e49de5"],["/archives/2022/12/index.html","b0987d0c6cb4e41ee5f226ca981a96c4"],["/archives/2022/12/page/2/index.html","73a401597122c0a5df0f070f5bea4d78"],["/archives/2022/12/page/3/index.html","f3ba21d98a280c6b92355976c3c0209b"],["/archives/2022/12/page/4/index.html","dca157686881c13c9965b7529e257398"],["/archives/2022/index.html","88873e7e5e07028980d9bffd129aa802"],["/archives/2022/page/2/index.html","a88212db7d5c1dd538b2cacf2980bcce"],["/archives/2022/page/3/index.html","03b8faec36f1b7a468f2062075b0deb8"],["/archives/2022/page/4/index.html","d17525c150e803930075e7b7688fbfb6"],["/archives/2022/page/5/index.html","cdf5f2d9e800c2bbdd5699772ac9e616"],["/archives/2022/page/6/index.html","80db66969f8e235fb69cb66eb7a363c6"],["/archives/2022/page/7/index.html","ebafd53db5db3a24a45e93e29164217a"],["/archives/2022/page/8/index.html","f5e9ce6e7e0f822ddb90fe5d26952bb0"],["/archives/2022/page/9/index.html","ef9807ef364dc9fdd8fa47755c6fc9b3"],["/archives/2023/01/index.html","36e9c5a4ff357e4e9fe4e8d10f874cc1"],["/archives/2023/01/page/2/index.html","3e0d56b05739af09fcea5eda7326fcb1"],["/archives/2023/01/page/3/index.html","d4ee4e4d5c258a2ba9e1239a13f86a60"],["/archives/2023/01/page/4/index.html","d59db9d8d705fb8d32920ae2ef035195"],["/archives/2023/02/index.html","8801ac9b6af67d6e75ecd9a297c550c3"],["/archives/2023/03/index.html","9203b7433511b8d2ee5ede7d95745155"],["/archives/2023/04/index.html","2bf6bb2c331ac0cd88bff8ee82a56518"],["/archives/2023/05/index.html","bcddd76c390c482de19786a9534ac825"],["/archives/2023/06/index.html","5a1f27836e9e0feb46f0ba6ed84ffdb4"],["/archives/2023/07/index.html","0d025a6c6b5565b910431ef7ab75fbd1"],["/archives/2023/08/index.html","facd3e0906db923555a2d734963ae2fd"],["/archives/2023/08/page/2/index.html","686b6ded2ed7d07eaceee1f58fc254b1"],["/archives/2023/09/index.html","dd146caeadbbb91061110e955b086372"],["/archives/2023/index.html","08520d20a9ad16ed9d3411e0cedd5db2"],["/archives/2023/page/2/index.html","02bf7cee08996d66d948ddc3c34b1efa"],["/archives/2023/page/3/index.html","5a616810070135d2d07d550d7b2f8135"],["/archives/2023/page/4/index.html","f4d9f62b4310a126f7a70d5738850341"],["/archives/2023/page/5/index.html","da0b96caafdffe0c7698ebc0e2d23c22"],["/archives/2023/page/6/index.html","8923acc1981361663a9ebc97ca050f48"],["/archives/2023/page/7/index.html","5b17271197462e2f85b34d83400a320b"],["/archives/index.html","6268d743705c109f20f2f221b1ba9cad"],["/archives/page/10/index.html","2548c0141f8ec4e2da8373c3a941ea88"],["/archives/page/11/index.html","436ec73cac4464bca08f5f17d95bfbfc"],["/archives/page/12/index.html","ad6992c2134302ee6a94c20ea2470489"],["/archives/page/13/index.html","eb1551c83e241cc1ceb218915cbfad9e"],["/archives/page/14/index.html","2ccfd39b47dc3e214a541b90f5091829"],["/archives/page/15/index.html","706b3ade0d534989757679877a8e8983"],["/archives/page/2/index.html","8eb0e8ea6bb8f73e1768f2ae2e4a0b19"],["/archives/page/3/index.html","870489ea2bbe5da1a38a99c223fdb418"],["/archives/page/4/index.html","7e20a410a1b2630e6b758d53ea238d8f"],["/archives/page/5/index.html","1758f86bd4b57f729409f5b94cf0bb43"],["/archives/page/6/index.html","3679860bfc5db225bc94dd1920d618ae"],["/archives/page/7/index.html","141f55c57a0480e72ccb55a16128bb69"],["/archives/page/8/index.html","d6d6cf091484c477f141b94611a68a12"],["/archives/page/9/index.html","d04f49d49cbc698ac00b43987bba7a3b"],["/baidu_verify_code-ZFSCabM1PJ.html","ca672c8db8e97619618c08a99dd043ee"],["/css/main.css","f246316b07f266999ff331c72da271c5"],["/css/spoiler.css","eb373af0627ede298867ffc0045da62e"],["/failed/【硬件知识】vco压控振荡器.html","0210332767b03793f3a35ea18f607d9f"],["/failed/【硬件知识】vco压控振荡器/1665803607390.png","3df26768c0d97b3acbb64c7f4738f15c"],["/failed/【硬件知识】vco压控振荡器/1665803663941.png","38d29c573fc0aab159543ee6f3d6b31d"],["/failed/【硬件知识】vco压控振荡器/1665803862765.png","f7e2165483ca1f224fc47019c9d85839"],["/failed/【硬件知识】vco压控振荡器/1665803865723.png","3da7b08b88d8795e53d03a47e1926277"],["/failed/【硬件知识】vco压控振荡器/1665803871404.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/1665803883747.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/clip_image001.gif","ba898c600ecfdb213d2223a0f783c808"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803844893.gif","fb05fad8f7ca3e4d9e40000a9ab1dc09"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803856973.gif","e1a4cd1747beecc7d92124979531824c"],["/failed/【硬件知识】vco压控振荡器/clip_image002.gif","0c0f42f02d474126082016d250804bc4"],["/failed/【硬件知识】vco压控振荡器/clip_image003.gif","1f489bb3e02d4993cdd501f7ec773812"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803844893.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803856973.gif","09cde39109369f9185d1cf128c6d7c2d"],["/failed/【硬件知识】vco压控振荡器/clip_image004.gif","32873c471ff1058abf9d6d09ca5e45f0"],["/failed/【硬件知识】vco压控振荡器/clip_image005.jpg","ea2dddfe9b1da4f406ee36b37c99e72e"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803844893.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803856973.gif","b0138096b0fc7682435ad07aeaf159ce"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803982819.gif","6540947f9843ab822d3e8eeb7ef621e6"],["/failed/【硬件知识】vco压控振荡器/clip_image006.gif","6290aa2f8360b2a4f05e4c09e4d6bc80"],["/failed/【硬件知识】vco压控振荡器/clip_image008-1665803856973.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image008.gif","113b77d852979982495a775ea4d973d1"],["/failed/【硬件知识】vco压控振荡器/clip_image008.jpg","aad87f9838e93808a0caed1ece93ffac"],["/failed/【硬件知识】vco压控振荡器/clip_image009.gif","fd6cf84a1333733613c80d5599c0fbdb"],["/failed/【硬件知识】vco压控振荡器/clip_image010.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image011.jpg","fa6d15386072d8a691d18f9c3a53b426"],["/failed/【硬件知识】vco压控振荡器/clip_image013.jpg","cea0cb9334e0d5f1b84beb2fcd8b1245"],["/failed/【硬件知识】vco压控振荡器/clip_image015.jpg","660345ebf2132d1bcdd9a7455529093a"],["/failed/【硬件知识】vco压控振荡器/clip_image017.jpg","29517d76c214adc17343771d2d804679"],["/google41a28d5f2878fa02.html","6f0a8562ec6d6a218a2b2cd774006331"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/tou.png","578463708d7de56a1c4e6331831b3e2e"],["/index.html","97aee16581641f29f9813bc0fe585d8a"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/code-unfold.js","e079f1fdb88a9edcd745220494218e88"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","97606f901b6e488587ad5c49aa367604"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mylibrary/css/float.css","7e9f362af8480ac7d586487a0a3c2181"],["/mylibrary/css/hide.css","1a2496d847d9c6a11955793049741a24"],["/mylibrary/css/load.css","038f9f9a3d1523ed3645a89d06edc01b"],["/mylibrary/css/neon.css","8d8b3fe4c75eab7fbb957572d4bdb0d0"],["/mylibrary/css/round.css","39c9846bdc455a476436566b41ba7141"],["/mylibrary/css/shake.css","88f6a3b5313be3c68ac5a3c5c2472333"],["/mylibrary/css/shiny.css","969e6d2aecb7915657fff0a688e2d377"],["/mylibrary/index.html","aedb8740c7657c5c8e7291cfbb85f719"],["/mypage/css/style.css","f92169066d6cb70306bb9159e41ec613"],["/mypage/font/LigatureSymbols-2.05.eot","5b46f67c079e0599f89aae807cdad560"],["/mypage/font/LigatureSymbols-2.05.svg","f4be952f02a00bd7b464568304b12842"],["/mypage/font/LigatureSymbols-2.05.ttf","48ae0b91a8d6e1feb2c15961a338dad8"],["/mypage/font/LigatureSymbols-2.05.woff","f974884f441019724c351f85478b3938"],["/mypage/font/README.html","81b2f2bdde4a9dc99d32dd4bde66f086"],["/mypage/index.html","65970bbeb6702f3cd678507f593cce49"],["/page/10/index.html","7df784f629ecab577de6195766a8aa0a"],["/page/11/index.html","f7eadf3e12a1e9d6323bd2ed6eba5895"],["/page/12/index.html","93cd469577f08e3a45abd57f60a5680b"],["/page/13/index.html","e147d3ed069afa270648637d19c91e57"],["/page/14/index.html","d23652f404584e0aafc470364001006f"],["/page/15/index.html","a1ce3c5ebbdda963bfc96d42be5f24b0"],["/page/2/index.html","a4fa6135631cad802c9be40914ae364c"],["/page/3/index.html","c8b3b085eaacbce4a24734427af4b141"],["/page/4/index.html","25178bc47204975ce52d6f0f6de0fbd8"],["/page/5/index.html","2cb4da35b95f13b0ebbbdd6a7e565f6a"],["/page/6/index.html","fb39377834f8e4d2df2efe17c73c89fc"],["/page/7/index.html","d4063fb8df80bc9b02a74ed37dc80ea7"],["/page/8/index.html","2ce8644978f6edd7db7e7a37772f7655"],["/page/9/index.html","9fc8f0a5dbf55934f4cfb672d3d6c57e"],["/sw-register.js","d7f2ad791984677e4e2af7cc1910d735"],["/tags/ADC采样/index.html","c77b9d74b5ff4447ddc90d505b661099"],["/tags/Block-NeRF/index.html","fc47100c791db0d9b206d9407a0f7243"],["/tags/CV/index.html","1f0f85fbc8b14e0a0066b5413fb1515f"],["/tags/FPGA/index.html","8cde5b6ac4e86a8f75ad28eacfc9abd9"],["/tags/GPS/index.html","b538cf2153943f582957b88495b178b0"],["/tags/HAL库/index.html","6826078de0ca4ec8175be8fd6eea806e"],["/tags/H桥/index.html","a4b652029e752e61119fc008ae5ea48b"],["/tags/INN/index.html","e8fbb740d694d7bf89501b8e2ab1e5d0"],["/tags/JIIF/index.html","f2637b2243a16f2fe2d35af978ac3ed3"],["/tags/OLED/index.html","94fd525573f315fc59f4d8557388972e"],["/tags/Point-NeRF/index.html","a807a75e613d9a33571631a27f3d5074"],["/tags/USB/index.html","472d7ce65503f5c5256d5d6dded934f4"],["/tags/V831/index.html","cfeab216383ab178336ec01506d9b45c"],["/tags/adb/index.html","06d8a0e4d9332498600e9c8086729e31"],["/tags/amg8833/index.html","5d04dc036fd8c342aae4886f51253ddc"],["/tags/auto-js/index.html","bb9695374be30da7b3551cc1a2bdc6c0"],["/tags/bard/index.html","8204a3c3e608cc7b37f2b0397b3e5263"],["/tags/chatgpt/index.html","09c65568144f6403f80ce7a418c0d295"],["/tags/cmd/index.html","bfb89f509db5fee8250f705d2bc181df"],["/tags/conda/index.html","ae5059321128046073b3ada148b39fa6"],["/tags/css/index.html","dcb6a096acdbd9b67f2aa7a925b94d9b"],["/tags/frontend/index.html","4863667a1d2d346dd48a6ae9070a1162"],["/tags/git/index.html","997502a7a29eea8c6f3986e1ba17f8f3"],["/tags/github/index.html","d7151a6b18b01e7919951fdd4dff9caf"],["/tags/hexo/index.html","4c967a52ade511efd651cffc8614c008"],["/tags/i2c/index.html","2a1e8e0eed2d1b3026c315f4a9b59534"],["/tags/index.html","d927986fc7102fdff341c114c7b9b051"],["/tags/inte/index.html","10a695be39542760c5db73568bf1c0c0"],["/tags/k210/index.html","a8511a27cfe30792a1bb0b0df9193c3a"],["/tags/learning/index.html","ae69ac12bf75ff0017f078ceef0797e4"],["/tags/library/index.html","47b3a2bf7306afbc961979df016dd085"],["/tags/library/page/2/index.html","a8d5c8dc83fe41cf96f34b71ba7e9a0f"],["/tags/library/page/3/index.html","27bb48291fd6eb32b1b25bf68a9f610c"],["/tags/library/page/4/index.html","ff04aa3cbbfeb69831a2115c4fcea633"],["/tags/library/page/5/index.html","9a85db8b61db17e41b6c621ce6193d88"],["/tags/library/page/6/index.html","fef9519d39151c7e4b23ff4370e279b8"],["/tags/library/page/7/index.html","0c37f3dcb19855cb875064bf9d793891"],["/tags/library/page/8/index.html","5cdb134c8871312e5f7400e49887cb21"],["/tags/library/page/9/index.html","26350dbc892be99301bd17681fb9689a"],["/tags/like/index.html","29ebea1e5a6c53b89150c68d8ab888a2"],["/tags/linux/index.html","fe98c7a2d2f5f4e8fd7475ea02a4485f"],["/tags/little/index.html","750126277e8a1b49341ef18160793d61"],["/tags/make/index.html","8083a83df3fc1d1e5518030635ecb974"],["/tags/math/index.html","91be2083587903f0eb015690da49f2dd"],["/tags/matlab/index.html","2e45599c7e2d563a360378e55cd840bc"],["/tags/mine/index.html","bfda9c0b4b761131bf34999a25ee145e"],["/tags/modelsim/index.html","e80c9cc8169052ee91e20ba931830a82"],["/tags/nerf/index.html","36d6f0a30c7d620308aed70876f88d3b"],["/tags/nrf24l01/index.html","ce551a566bb31cd46738a3286c503ce5"],["/tags/nuitka/index.html","d4d835d0fdf9938d5af9fc8aa33a9142"],["/tags/numpy/index.html","ca5544b2af0afbc199bc3abe264cd11b"],["/tags/onnx/index.html","12eb88cebe469709fcb241d49d75d1e3"],["/tags/pcb/index.html","7d58904fb1b5dac1fdba5d2bf2bac310"],["/tags/pip/index.html","f81341158ba60c630581e049824d8425"],["/tags/psutil/index.html","6d0e66d02cfe954a3b284b2b9428b18c"],["/tags/pyautogui/index.html","ecf6111050933bea45d90be41499fb0b"],["/tags/pybluez/index.html","12d872a1f4d2840f3bcc03b9ed8d7dac"],["/tags/pycharm/index.html","304fd3cd64fc3e6f0ad49d09a75a5776"],["/tags/pyinstaller/index.html","cd488f4061d61ae2f59afafea281109a"],["/tags/pyqt/index.html","a1bf7f0d3dfc9ea2f4b3d82007166095"],["/tags/pyserial/index.html","0e1d46f518f6b769d11db4f8da21cd99"],["/tags/python/index.html","3952ff0abd6c9f3c4c9425cafbb37969"],["/tags/python/page/2/index.html","a20f21121359a0a3ffe2d28eff5807ec"],["/tags/python/page/3/index.html","5423cb50b4b64108e2b5fbfae873a479"],["/tags/regedit/index.html","2049ec635a2efa367752089b0473da50"],["/tags/solved/index.html","495bca60c0423f3cc9082ef23983745d"],["/tags/solved/page/2/index.html","b6ab02af7a0b99e98a03963fdfb65801"],["/tags/spi通信/index.html","fe7a8c2ffac1bb9006f6fde55f83052f"],["/tags/stm/index.html","bd5aa154ffb02e392a8a5dace1ff93ff"],["/tags/stm32cubemx/index.html","7a72f23934c6e5b7bf2f4b2283939a71"],["/tags/tensorboard/index.html","8dd813e1076fc8628a8804edb48f2741"],["/tags/torch/index.html","c74e551bd9cfc66d6f51b6c2b12417be"],["/tags/typora/index.html","b2b081dc32d6bd10f58d5b9d8087705c"],["/tags/ubuntu/index.html","d36a0b79ef5a44b313ecb49818b748a7"],["/tags/verilog/index.html","476e3b1f9d6122745eb05433a90a983f"],["/tags/vue/index.html","99f1b1acd42adda0aba4a7d4297c4af3"],["/tags/win32gui/index.html","9f63f67e29c475a6f37a5dfc513629a0"],["/tags/windows/index.html","911280e296ba4795c1974a2ecb9f5697"],["/tags/work/index.html","2f898e6bac5811f95b461e825296fbc8"],["/tags/work/page/2/index.html","d8301839951dfb4e0491d1e18eab1feb"],["/tags/work/page/3/index.html","6820e21d253cbc73decbdc4207bef2d6"],["/tags/work/page/4/index.html","e2420a546c0d1d6c443810e6ad48a86f"],["/tags/下载视频/index.html","7901e86b5e2fc2c4703c5c8937ad7a1f"],["/tags/串口/index.html","97e5424ed6d342d6fe85d8f4a4901588"],["/tags/代码/index.html","fee2d836f6f199f778d1466797de13b9"],["/tags/全志F1C200s/index.html","d738dca0a2e562358e98338767e18b03"],["/tags/公式/index.html","fea03da0a0b3173e2b3256a6d9bbfc36"],["/tags/前端/index.html","9eb7e9036228360d7729b2e3bd4180e3"],["/tags/博客/index.html","2e6fc02cd50c0a7be45932da50f126a6"],["/tags/国产/index.html","5089f5a21a2b41d9205cdfefff90892f"],["/tags/多光谱/index.html","9a7e59f5fbff9facb6e73fd320e6b5be"],["/tags/大学/index.html","9bcb708ecd8d79802ffb8abcaf84bc82"],["/tags/嵌入式/index.html","a64a6016ecba716ab43c10fc26db6c91"],["/tags/嵌入式/page/2/index.html","9d8aa5f8357706331474065d4f35f122"],["/tags/嵌入式/page/3/index.html","ee60aefd972272f451a231048b2af251"],["/tags/嵌入式/page/4/index.html","f0f366cbf18c0fb56ebeac761e62eb20"],["/tags/嵌入式积累/index.html","3894f6b13e310542a8ec8a80ce375099"],["/tags/开关电源/index.html","5f16192095da59fbe8658cec5c7226ae"],["/tags/开发板/index.html","bce901ecc8afe654453964558a4f6539"],["/tags/开源/index.html","32bf9e075d125a7b0e184abc1d4d810a"],["/tags/忆阻器/index.html","8fc113b945d8abe8bea9020710108c72"],["/tags/快捷键和常用指令/index.html","1adf52ba34c3f3bbd2b4e854fa1e758d"],["/tags/手机/index.html","0465a5e0e0a7751dbf7b9b76f880055a"],["/tags/打包/index.html","1c2719a6796cdfa20e29ba01f238b93e"],["/tags/控制/index.html","03559a9a7540b70d969132329fe64e23"],["/tags/数据处理/index.html","58c3ac6cba6e3a7cd364d6fc50572bef"],["/tags/数码管/index.html","5426339cb24f26d0cde6d54021dcd31a"],["/tags/整数规划/index.html","8594cb7455b74766af51c7e971441e10"],["/tags/新加坡/index.html","ade66ac896db681e23d88061009ea102"],["/tags/机器学习/index.html","b79e3e9a4facbc0fdb3f5130477e12b4"],["/tags/机械加工/index.html","5d3cbc2d954dacb37f0f6749f5e200aa"],["/tags/树莓派/index.html","3e8bda85a04e7ecc6c381b05aad303d4"],["/tags/模块/index.html","a50c7b7cdc16328e548c96c2ab1fbb63"],["/tags/沁恒/index.html","a877b6facbfcb4261d7633ff539616ab"],["/tags/测距/index.html","64e7463b157c6fee528420bfec7231d6"],["/tags/深度学习/index.html","fb7e069ba6d4ec8c25127f5241992a25"],["/tags/深度学习工具/index.html","ff8ca97e211383c237a0cf65a000930a"],["/tags/游戏/index.html","76a86e787c791294b40de721e99ba842"],["/tags/滤波/index.html","6ebde86f22abc7eadbbc431af4de96da"],["/tags/理工方向/index.html","9f6781733f0f4985b5823c0fb239c722"],["/tags/电容触摸按键/index.html","107b4c68c8f1857b312107567d558e15"],["/tags/硬件/index.html","71f395cc940a9b27624828f6a41b0b7f"],["/tags/硬件知识/index.html","27ad4d9f5ce44d77de24888278bef59f"],["/tags/积累/index.html","1b5cf247b2c3146b0330c172b8200f22"],["/tags/算法/index.html","e9e5ca898c65c89fbcbc4ddca0861552"],["/tags/线性规划/index.html","06eef130f776fda338e1eac229ddaa61"],["/tags/经验积累/index.html","ad0d7e37e8460d762bcec69890828297"],["/tags/编码器/index.html","076bb029336f5b6301a5112bc083b352"],["/tags/网址整理/index.html","2884a204b436f1e211c890b7cb4e6c2e"],["/tags/航模/index.html","e3874f97b035b398b40938e249b63ea2"],["/tags/芯片/index.html","15c50736d44166d922c1fb6560cbb3a3"],["/tags/蓝牙/index.html","00573362310ff8602a88f4e90f31dc30"],["/tags/蜂鸣器/index.html","c837e2e0db24f35de32b6a59c96dd41f"],["/tags/论文搜集/index.html","7173f05e834e6a7917261313316bebb1"],["/tags/语言/index.html","68541fd68d8a2f3e2857580c2ee681c4"],["/tags/课内知识/index.html","de31e607f32a443ca04035abdf6439a3"],["/tags/贝叶斯/index.html","e7c3acfa77e0722512504088aff36a32"],["/tags/超声波/index.html","1d4b587e68e86f03922fa5c8fbe0c7c5"],["/tags/软件/index.html","c5b385f442ef43c903caedd9564bba44"],["/tags/输入法/index.html","a41143705e49aa9b9a92fcda36d3a58b"],["/tags/运放/index.html","ce7f9d0ba345b27fb4462f2475fe11e0"],["/tags/选型/index.html","46d1205bae5eeafec363b63e37a12e03"],["/tags/通信/index.html","d837469917534152c769178f3a328efd"],["/tags/钢琴/index.html","00a411eb9c170dd9a998295540a87b3f"],["/tags/键盘/index.html","7f3d1cde3a6743ade46e317167ae60c5"],["/tags/陀螺仪/index.html","b8e8304b74b4920814c1548c21c9fe0c"],["/tear/index.html","0b3f8debe7bc19c4fbeef97cf773423a"],["/tear/index1.html","cfb65d88599fde76cc2187597f01d764"]];
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
