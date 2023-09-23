/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/learning/开关电源/【开关电源】学习1——buck/1663506637120.png","8e50e1a9a14c0174f21513f95808f075"],["/2022/learning/开关电源/【开关电源】学习1——buck/index.html","f5a47b5e4834cd31248aafbefc4a7cfc"],["/2022/learning/开关电源/【开关电源】学习2——boost/index.html","52dfe342bda8dbe8b300926c02f8b114"],["/2022/learning/开关电源/【开关电源】学习3——VMC反馈/index.html","b125b4b813989fca22577ed715573ee4"],["/2022/learning/开关电源/【开关电源】学习3——buck-boost/index.html","33d018f0ab97910747cad2b4bad93038"],["/2022/learning/开关电源/【开关电源】进阶1——稳定性判断/index.html","63b3b1672f524119b2745002f4f2035c"],["/2022/learning/开关电源/【开关电源】选型和使用/index.html","7c23a855a1ce6bc2a317ddc8886658db"],["/2022/library/frontend/【hexo】博客部署/index.html","724a8b2f707e69074190badb77ba0abb"],["/2022/library/frontend/【markdown】编写文档/index.html","e7e098b708d18842b6932af2d0e44588"],["/2022/library/frontend/【vue】搭建网页/index.html","6bd865d6623ff243b51aae295b956a60"],["/2022/library/inte/【css】学习/index.html","fa2ee9c3ce622f017e25c36aaa11cc32"],["/2022/library/inte/【钢琴】织体类型/index.html","d3fd90d27f3979030f267d9172ff7550"],["/2022/library/inte/网盘挂载Alist+RaiDrive/index.html","97cdf7cab7c4e162dadd31cb0fda9b34"],["/2022/library/math/线性规划和整数规划/index.html","026100fa2818fb6d400e930ffa37509a"],["/2022/library/python/【nuitka】打包python为exe/index.html","4d5224d1c8f6172864290b97140ff1e8"],["/2022/library/python/【pandas】数据处理/index.html","6c70ed5ab15410761e8360e7049da450"],["/2022/library/python/【pip】【conda】常用指令/index.html","e5b234715b4686ce52bb0f5d255247f0"],["/2022/library/python/【psutil】检测电脑网速等/index.html","34f7bc5b4b64cb12b6d9139cce8c00c3"],["/2022/library/python/【pybluez】python控制PC蓝牙/index.html","f1d911a82f1078e5a6449d2678701711"],["/2022/library/python/【pyinstaller】打包python为exe/index.html","4bc8ba4c2185e70a11e4abe85eee797e"],["/2022/library/python/【pyqt】编写可视化界面/index.html","fa6c86eb090bc4c28f05d842993345f7"],["/2022/library/python/【win32gui】控制win系统/index.html","e982d6452f7f6c6aad0e9fad3082e93e"],["/2022/library/嵌入式/【git】学习/index.html","3d102a3dbf6de960b3b570b5c489fb0b"],["/2022/library/嵌入式/【linux】常用指令/index.html","20099ed4655cf8298bf59c853a54aa54"],["/2022/library/嵌入式/模块/【模块】OLED/index.html","69e97f0516bf2be9a4b69a2741209150"],["/2022/library/嵌入式/模块/【模块】陀螺仪/index.html","23e4073bf8e13162b2fa10a74dd628fd"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/index.html","20fc58d2db93a30a353fafe9f10db95c"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/index.html","dae5f2c9e31c4cf3caa7a46543cfdec3"],["/2022/library/嵌入式/硬件/【硬件知识】芯片熟悉/index.html","52eaded0596c95c1e1a33cdd8faed4d9"],["/2022/library/嵌入式/硬件/【硬件知识】选型/index.html","27b971f168ed0bf742faa8b526480e55"],["/2022/library/嵌入式/积累/【嵌入式积累】阅读寄存器手册/index.html","b69a354798c59e2f0ae51d101d105f42"],["/2022/library/嵌入式/算法/【控制算法】学习/index.html","d2f6d646e07bf4b6a93e72bd1d7592a2"],["/2022/library/嵌入式/算法/【滤波算法】学习/index.html","11413383ce62d4525e3d72a5fc6783d1"],["/2022/library/嵌入式/语言/【python】进阶总结/index.html","77202dbe24ca801f573d8033349a8eb6"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】i2c通信（mpu6050）/index.html","35c87e92a1e455d4a0ec059596a9a4d5"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】pwm波/index.html","75502a577c54ee39288044dc2b3b9e4c"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】spi通信（nrf24l01）/index.html","bb50d49798a1aefec7eb1ea606915c8d"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】串口通信/index.html","db94d08d969ff73a87ea9d37445e1470"],["/2022/library/嵌入式/软件/开发板上手/【V831】开发板上手/index.html","4c3cef72c448e2aad1e26a7a6964028e"],["/2022/library/嵌入式/软件/开发板上手/【k210】开发板上手/index.html","d66b4da326c2e5f9c3fcd51f8669b2b0"],["/2022/library/快捷键和常用指令/【cmd】常用指令/index.html","8500e7befdf3f4e2593db10f37c7c1c6"],["/2022/library/快捷键和常用指令/【pycharm】快捷键/index.html","55113f5452f2ec98db5212caaad67c40"],["/2022/library/快捷键和常用指令/【win】快捷键/index.html","4f6ecae45a1d7c96c0f179dddfd534c3"],["/2022/library/快捷键和常用指令/免费下载视频/index.html","29f11f638742ed49ba0108d7eeb2ec43"],["/2022/library/深度学习/【深度学习】基础知识：×NN都有些啥/index.html","4db2f4d08fa5e2ae1c2eef3c8aab7a01"],["/2022/library/深度学习/代码/【numpy】语法基础/index.html","5e6da35f48a093b743ce715d23fbb0b6"],["/2022/library/深度学习/代码/【torch】语法基础/index.html","cc65838365e8f24a00b7a399935309bf"],["/2022/library/深度学习/工具/【深度学习工具】onnx学习/index.html","c40ffa1850ee81b2e2aaa9d35f592228"],["/2022/library/深度学习/工具/【深度学习工具】tensorboard学习/index.html","effeb316699a08c1dd5364b89fbcb49a"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/index.html","9e562defb5be0485b7af56532dd67e8b"],["/2022/library/经验积累/【经验积累】网址整理/index.html","ccf334f8a8149836ed71420e91317363"],["/2022/library/经验积累/【经验积累】论文搜集/index.html","d6089baa30554510947a75c3535f9f90"],["/2022/library/课内知识/【FPGA】仿真和烧录/index.html","f0184b8b9a3e1e7b47f8bc80cf83fdb3"],["/2022/library/课内知识/【matlab】学习/index.html","01085005db1b63915f7bedcca3f9eae3"],["/2022/library/课内知识/【verilog】学习/index.html","17f8592c100ce099c25201991f9fc9d6"],["/2022/library/课内知识/【常用数学公式】总结/index.html","03467471484aaec20e1372d387e820a9"],["/2022/others/Write-blog-using-markdown/index.html","51f4a0f9cc85ca1f851603421a6303f9"],["/2022/others/古诗/古诗/index.html","911fe94a78c90bbefae69cfd56678f0b"],["/2022/others/能力年表/index.html","a93b580210bcc79988fd1a3e13ec22f6"],["/2022/solved/github的github.io项目打不开/index.html","f6c17827966574cfc1dd775e7f4dec7b"],["/2022/solved/hexo部署报错spawn failed/index.html","55d2ba66f47a1399d6733595a99f31be"],["/2022/solved/modelsim的-novopt优化相关报错/index.html","b2453d221bb8b2ba253fd4ceb291552b"],["/2022/solved/npm install 报错/index.html","2b19009b20823af33401ab85673d1522"],["/2022/solved/pycharm修改快捷键/index.html","aff2b3635a4c256cecc92f4950a5087a"],["/2022/solved/pycharm内无法打开cmd/index.html","49f897b893759b4bd96bc5978d6619d0"],["/2022/solved/从regedit改变键盘映射关系/index.html","ca6e82226198e3405104d3aa65eab869"],["/2022/solved/右键新建菜单管理/index.html","51ae06b8839ad67d65487a1ee46e372c"],["/2022/solved/执行make menuconfig时报错/index.html","c9ba9024143f5fcc023ceb5ff1f5eebb"],["/2022/solved/报错binsh 1 bc not found/index.html","d0ec66aa4e98400dc67eb1650a4fab64"],["/2022/solved/报错binsh 1 cc not found/index.html","049727e0c8db6063e42e0f02bd7eda25"],["/2022/solved/报错binsh python not found/index.html","0450adb1bfc96314e1752192160a08a3"],["/2022/solved/未整理/index.html","88425696bea24e6630005b93a5e87d82"],["/2022/solved/树莓派域名解析暂时失败/index.html","0fdc2906270455a1fb4091207aeee45b"],["/2022/solved/树莓派配置python环境/index.html","5b39ccb925690c68d8e137d68a539d9f"],["/2022/solved/设置软件开机自启动/index.html","639dceed275731d9e9098a1fd931fb21"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118074452.png","221e63aa60efa77dca50740ce9b88380"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118457009.png","5c1577c940dd443631045f45787e487d"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667226872521.png","ec7a6051752cb193ae983fb81d135fce"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667264387582.png","57b13f83c9dfd506e6ccb81743f74963"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667265226170.png","600b87f6ea78e46e19929200a8190875"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667292838757.png","f9c6a5975d54d8b975e9de23dc891c00"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667293450480.png","57c9efd9a2a4ae995517991ff7abdf32"],["/2022/work/nerf/【nerf】Block-NeRF笔记/index.html","26202effb68c6ce6911aa59c6db023c3"],["/2022/work/nerf/【nerf】Point-NeRF笔记/index.html","8745051396f30df730acb3d0e28b1b3c"],["/2022/work/nerf/【nerf】nerf-pytorch/index.html","4974601e37983795bea045a2b5037bbf"],["/2022/work/nerf/【nerf】汇总笔记/index.html","9342be16ef440c26d88717cf5b99f8d9"],["/2022/work/nerf/【nerf】记录/index.html","3399021a3d9ee30e1d9be2c967066173"],["/2022/work/前端/【前端】记录/index.html","4e4a4480adf1dd967eda1a4d7de9f761"],["/2022/work/前端/【博客】记录/index.html","54df1e7a38ae56fd0a683664ab554f88"],["/2022/work/嵌入式项目/bard/【bard】Linux迷你电脑/index.html","04fdb5ca098f96eb89910e4893eb975a"],["/2022/work/嵌入式项目/【祖传板子】记录/index.html","742e883a4966b754a45abd1cc3c2b6a8"],["/2022/work/嵌入式项目/【航模】记录/index.html","b12c85fae6e06dc915b959221c7eceaa"],["/2022/work/忆阻器/【忆阻器】记录/index.html","352d852e42b985c6a27e433769830dff"],["/2022/一下都是0/index.html","bf521de376b78c3a0cb29ba7d081edd4"],["/2023/learning/开关电源/【开关电源】理解/1663634083260.png","7b1a889ee96c83e170023666681c9131"],["/2023/learning/开关电源/【开关电源】理解/index.html","20e9bf9243b05576ede06ac97af13323"],["/2023/library/CV/【CV】基础/index.html","2ec2a31f6f5bfe63ceb1de0009a44465"],["/2023/library/CV/【CV】数据集/index.html","ee6e317234e4418e4145e892c1660615"],["/2023/library/CV/【CV】经典论文/index.html","8a2e5c350b359976658974258df25f49"],["/2023/library/CV/【Transformer】attention基础结构/index.html","a4f798743b2ad138566809fda9b57e7b"],["/2023/library/frontend/【adb】电脑连接控制手机/index.html","7f682aae54c52c9163db1f461a35b911"],["/2023/library/frontend/【app inventor】拖动滑块写手机app/index.html","29e1abe67f23246045ebb0885b762566"],["/2023/library/frontend/【auto.js】手机自动化控制/index.html","e22f2e6a63bd72f94b65dc1fb7689dea"],["/2023/library/inte/windows的linux子系统wsl/index.html","c2d989bc4a6c2264a9ec736e4418ff8d"],["/2023/library/inte/【latex】学习/index.html","050b9f304a950ea9a9baf675c714bcd1"],["/2023/library/math/【math】傅里叶变换/index.html","a4ffec4772fa0e29c19b7deea9d5cad7"],["/2023/library/math/【math】高斯积分(Gaussian Quadrature)/index.html","0eeec54276c053e598640a2ddffb05a2"],["/2023/library/python/【CV2】图像处理/index.html","ecba31b1440ab45f4c19ef4b429d2686"],["/2023/library/python/【argsparse】用cmd传参/index.html","cfc9401fac8d433ea77c5360f53a4249"],["/2023/library/python/【itertools】计算排列组合/index.html","af16e1dcb0d04c7621b85c149e44f99f"],["/2023/library/python/【matplotlib】数据可视化/index.html","cc16fcbbc8b064040715687849cfae42"],["/2023/library/python/【numpy】数据处理/index.html","ba237b4d3c2acb351c7afc26182996d1"],["/2023/library/python/【pyautogui】控制键鼠/index.html","7b0fce7a63f64f06dda0d4403ee627e1"],["/2023/library/python/【pygame】2D游戏/index.html","c8b326f56c40e9a36a3194f9ef48014d"],["/2023/library/python/【pyserial】读取串口/index.html","cc1ca64ba938518057f5a32de66c4948"],["/2023/library/python/【python】基础语法/index.html","928740d1c30b6a4fd3087a483a19fac1"],["/2023/library/python/【python】有趣外部库/index.html","d9053acc4720e5553b92f7647b36df20"],["/2023/library/python/【python基础】常用内部库/index.html","b96955db8287fed931d8fa3c8d5fc2e5"],["/2023/library/python/【python常用】常用库的pip安装/index.html","36592d0ab52590b875b8748b8a64f885"],["/2023/library/python/【request】网络请求/index.html","65b4bd89eecc199e8d6d4cd8e88a0f59"],["/2023/library/python/【timeit】获取时间/index.html","4d9cb41d4feb6dac9540315ac2c594ee"],["/2023/library/python/【torch】机器学习库/index.html","dc1065c2581b5b4e8d767cf9750f7c45"],["/2023/library/python/【tqdm】显示进度条/index.html","4106489dff64431b47941ac79c5f9a8f"],["/2023/library/嵌入式/其他/PCB作画规则/index.html","de02df5a32e8bab0874d9fff99d6f385"],["/2023/library/嵌入式/其他/犀牛建模/index.html","c81699abc189f08b3e2cd3e71d87ed73"],["/2023/library/嵌入式/模块/【模块】GPS模块/index.html","d3e0fc67290ca6be7042942a5a89d00f"],["/2023/library/嵌入式/模块/【模块】amg8833/index.html","5cc23b1d32399789169321751b8ddee0"],["/2023/library/嵌入式/模块/【模块】as5600/index.html","7b41e028bf9998a90410badca2eb56b7"],["/2023/library/嵌入式/模块/【模块】数码管/index.html","f00f6a24f1eafbe0591e858fe54fa2bd"],["/2023/library/嵌入式/模块/【模块】电容触摸按键/index.html","6d8fc0535a4adaa2458a41608392733e"],["/2023/library/嵌入式/模块/【模块】蓝牙/index.html","41653311d7331d4462478287d9519065"],["/2023/library/嵌入式/模块/【模块】蜂鸣器/index.html","8824dfb731f38248d49b206e82fa898e"],["/2023/library/嵌入式/模块/【模块】超声波测距/index.html","4f65cf34b34ec10aac88e37d90e6c996"],["/2023/library/嵌入式/硬件/【硬件知识】三极管/index.html","81631214cc3b704096f86545f3340206"],["/2023/library/嵌入式/硬件/【硬件知识】模拟电路pwm/index.html","8aa4698fabf177296160b2c04c1ee448"],["/2023/library/嵌入式/硬件/【硬件知识】运放运算电路/index.html","2673fc7a4782498543ac961f3d752ddf"],["/2023/library/嵌入式/积累/【嵌入式积累】基础知识/index.html","03cd6a2beeb6f7c523be8df5c96fea67"],["/2023/library/嵌入式/积累/【嵌入式积累】常用官网/index.html","7264124154cdbbb2e4032938d4d70bdc"],["/2023/library/嵌入式/积累/【嵌入式积累】控制入门/index.html","43bb1fccf4559d1a0994286498a99a93"],["/2023/library/嵌入式/软件/【HAL库】笔记/【HAL库】ADC采样/index.html","9f2a02cbe034eb4d499ceb81885baecc"],["/2023/library/嵌入式/软件/【HAL库】笔记/【HAL库】USB/index.html","8d86cbff18fe4a10ae0b1573855067c8"],["/2023/library/经验积累/大学毕业选择/index.html","defd093fc43784cc2ed3f79495d2a769"],["/2023/little/name/index.html","9dee3d656675e7ba1ad81701e7680174"],["/2023/little/留学小记/index.html","27e158cbeeb5f5df971ae378419803b2"],["/2023/others/chatgpt/index.html","ec1c7e393e162d1fef4cd2e8570fa4a4"],["/2023/solved/chatgpt您所在的地区无法访问/index.html","7b8250629d9ba220074020405498e0d6"],["/2023/solved/worked/chatgpt微信机器人/index.html","7916a49ecdf6bc2034dd1a6228658730"],["/2023/solved/双拼输入法/index.html","c4ce417014bd76934aa6ef592b29c483"],["/2023/solved/环境变量配置理解/index.html","ec4907b3d9ab31fc2592d49d2d35b1e4"],["/2023/work/CV/【INN】积分网络/index.html","4a100309e7a169b8466d1598e27d254e"],["/2023/work/CV/【IQA】图像评估/index.html","2d856bfe6800b7c6638af2dbb72b27c7"],["/2023/work/CV/【JIIF】多光谱融合/index.html","c664467ec9a1b4d02cad83f3a179e266"],["/2023/work/mine/电脑外接摇杆/index.html","d1dbe4bd07f4ff319d0d6770736fdd05"],["/2023/work/nerf/【nerf】最新阅读记录/index.html","0e0fea9ab622aa1f39c367f0bc179e80"],["/2023/work/python/游戏AI/index.html","bbf695c40bd899c88793ee0ddf933527"],["/2023/work/python/窗口互联游戏/index.html","9eabb89351e32eafa7e9b70b7e46ac5c"],["/2023/work/python/网速显示助手/index.html","f8068d168b5cbc4e096397c14d29db46"],["/2023/work/python/羊了个羊自动化/index.html","a68bd117d3809c61bdaae1ff4fb31123"],["/2023/work/python/蓝牙调试助手/index.html","6d354d6ac89bb365aaeb1791ea2b4f06"],["/2023/work/嵌入式项目/【加热台】记录/index.html","06b53be8841be69e526604fce55596f0"],["/2023/work/嵌入式项目/【四旋翼飞行器】记录/index.html","08ffdf399cc502b47f18b78d892b6411"],["/2023/work/嵌入式项目/【沁恒】样品试用/index.html","ac82148acf3b4d88f232e69dbe33558d"],["/2023/work/嵌入式项目/【生日贺卡板】记录/index.html","005bfc8808ddbe4fec4ff89746ea0f19"],["/2023/work/嵌入式项目/【自制无刷电调】原理/index.html","9801602ad243f17a62f20483de83c008"],["/2023/work/忆阻器/【忆阻器】python平衡车/index.html","718f04d774c2f5b2a6b13c42fffcf2d9"],["/2023/work/忆阻器/【忆阻器】算法部分/index.html","011900bef7c3310ae2030f34aaae7ee9"],["/2023/work/玩别人的开源项目/大一尝试过的开源项目/index.html","c21e7b211787b38c516fdfbecd49531d"],["/2023/work/生涯规划/index.html","d6ccb37c04106858cd1b2b34813e37de"],["/about/index.html","f41bfc8fa0b5dbfdbdcc9cb333f37d5d"],["/archives/2022/09/index.html","dd422b90e6a526e6ce1c74d335cfea6c"],["/archives/2022/09/page/2/index.html","b5ae60747a070dae2a55d2555b891721"],["/archives/2022/10/index.html","71cdf8c596e4427a32cea208d92b8507"],["/archives/2022/10/page/2/index.html","703319100938601ea223a4146dd16b5c"],["/archives/2022/11/index.html","c279a2cf8c4fda728174e6853b190fdf"],["/archives/2022/11/page/2/index.html","44f999f20a8c44292c8aefe6701275b6"],["/archives/2022/12/index.html","6d4eb23229718093ab8dc3cdd6274d45"],["/archives/2022/12/page/2/index.html","28b3bf107d4e2b8300dab29715778a7a"],["/archives/2022/12/page/3/index.html","2fa1e2bebb311411e466b0c324aa79a5"],["/archives/2022/12/page/4/index.html","868c41e840e2e1c52e0395dd6f3841ae"],["/archives/2022/index.html","5583c01d7c32850d754fe1d847e8ddf4"],["/archives/2022/page/2/index.html","b5f926c614799c315818f74a2e98a496"],["/archives/2022/page/3/index.html","2809db092c407f6142fcc0c568a75e3b"],["/archives/2022/page/4/index.html","adb6e28e80326388c6e71102e789c5c6"],["/archives/2022/page/5/index.html","1e3f65fb06b6dd46fb240210e6d4d4b2"],["/archives/2022/page/6/index.html","2edea5d24a72db1c218ed99768eab756"],["/archives/2022/page/7/index.html","f20495d49f857511c26f571dd16f8420"],["/archives/2022/page/8/index.html","a56d43db350962935ffa0b0ffbc7f85f"],["/archives/2022/page/9/index.html","08496084db8d4f22e8bd6b1034d95977"],["/archives/2023/01/index.html","2c9e52e3dab10428e92c1a9c41b94cd1"],["/archives/2023/01/page/2/index.html","48935c323bf0a544ee025b7b2d840a4a"],["/archives/2023/01/page/3/index.html","bfed8d9ac97dbecc94c9c08125fb5198"],["/archives/2023/01/page/4/index.html","a7c8cead631dfc8851062f316b21a660"],["/archives/2023/02/index.html","81efa3c726c0217e5d1698e5bb2ee6c5"],["/archives/2023/03/index.html","08b451b2fb2c0e5ecb42e3af61f99261"],["/archives/2023/04/index.html","ccde0846d30c014764e4293b9f822ebe"],["/archives/2023/05/index.html","c81d84ab474e908aca57e5566ac07df3"],["/archives/2023/06/index.html","0890ca3c39eff9f8b498bec1caca0b90"],["/archives/2023/07/index.html","bf774f24fec889f0251e08122fe6335a"],["/archives/2023/08/index.html","3f2c7255683200e06fc7a58676731813"],["/archives/2023/08/page/2/index.html","c6ac63766f7388e3acdb359041842fe3"],["/archives/2023/09/index.html","35d0ea54fec0f6519cad51cd6f75308d"],["/archives/2023/index.html","35671e7047ffea2c2b40d48ee84c32ae"],["/archives/2023/page/2/index.html","3c63b3fee4827f0d53407b16cdaffd35"],["/archives/2023/page/3/index.html","07920c1e28de212ed028e68b557d2370"],["/archives/2023/page/4/index.html","b06525bd9c679d68ad685c4b5b540da7"],["/archives/2023/page/5/index.html","6b40a11e18c6bb75e3502dfeb123f7cf"],["/archives/2023/page/6/index.html","f637fe4300eb6ca954fb543ea53a2560"],["/archives/2023/page/7/index.html","706e8e6debcfbfbd2221f61560258ef6"],["/archives/2023/page/8/index.html","785960a8811c837eeb7628cd4df9f218"],["/archives/index.html","23a2b19490a8a35bba7c1c06c15e8cb9"],["/archives/page/10/index.html","375a3b3e4ad239d054e32820b0519936"],["/archives/page/11/index.html","73b8d31e26b175984619631ce9334999"],["/archives/page/12/index.html","f0cbb8784c6d93166aaa90dc17c52c1f"],["/archives/page/13/index.html","b554055a407acd7a52c464fbdfa9a500"],["/archives/page/14/index.html","e72a341553181240ad01a81984b9ff39"],["/archives/page/15/index.html","baa0e4f45b8f746a4271f78bda77c5bc"],["/archives/page/16/index.html","b28c74b15f53f5cafa84b212d939f9d6"],["/archives/page/2/index.html","270058aec32c655b4f8f36a01c943f0d"],["/archives/page/3/index.html","d2cbbd5f922d885e9988da185d4fba36"],["/archives/page/4/index.html","5db8e147b5630d8a9444349b76814b4b"],["/archives/page/5/index.html","94ae65ceb64ef86f3f4b6629c57850fe"],["/archives/page/6/index.html","228ad7a35f00d5181d2a3128db935ae9"],["/archives/page/7/index.html","4b268dd4b19657a18bc982c7b684fd28"],["/archives/page/8/index.html","84dea9f6133aad8bc05d353224fe002e"],["/archives/page/9/index.html","572600ca3977ac0af55ef7e35dc16a03"],["/baidu_verify_code-ZFSCabM1PJ.html","baca5b82af2d8b9584461fcf74a04cab"],["/css/main.css","c3ba5954e993182c5b10c3304f7fe5e5"],["/css/spoiler.css","eb373af0627ede298867ffc0045da62e"],["/failed/【硬件知识】vco压控振荡器.html","1fed79389e2a77a4c6fb3fad7b64c08d"],["/failed/【硬件知识】vco压控振荡器/1665803607390.png","3df26768c0d97b3acbb64c7f4738f15c"],["/failed/【硬件知识】vco压控振荡器/1665803663941.png","38d29c573fc0aab159543ee6f3d6b31d"],["/failed/【硬件知识】vco压控振荡器/1665803862765.png","f7e2165483ca1f224fc47019c9d85839"],["/failed/【硬件知识】vco压控振荡器/1665803865723.png","3da7b08b88d8795e53d03a47e1926277"],["/failed/【硬件知识】vco压控振荡器/1665803871404.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/1665803883747.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/clip_image001.gif","ba898c600ecfdb213d2223a0f783c808"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803844893.gif","fb05fad8f7ca3e4d9e40000a9ab1dc09"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803856973.gif","e1a4cd1747beecc7d92124979531824c"],["/failed/【硬件知识】vco压控振荡器/clip_image002.gif","0c0f42f02d474126082016d250804bc4"],["/failed/【硬件知识】vco压控振荡器/clip_image003.gif","1f489bb3e02d4993cdd501f7ec773812"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803844893.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803856973.gif","09cde39109369f9185d1cf128c6d7c2d"],["/failed/【硬件知识】vco压控振荡器/clip_image004.gif","32873c471ff1058abf9d6d09ca5e45f0"],["/failed/【硬件知识】vco压控振荡器/clip_image005.jpg","ea2dddfe9b1da4f406ee36b37c99e72e"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803844893.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803856973.gif","b0138096b0fc7682435ad07aeaf159ce"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803982819.gif","6540947f9843ab822d3e8eeb7ef621e6"],["/failed/【硬件知识】vco压控振荡器/clip_image006.gif","6290aa2f8360b2a4f05e4c09e4d6bc80"],["/failed/【硬件知识】vco压控振荡器/clip_image008-1665803856973.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image008.gif","113b77d852979982495a775ea4d973d1"],["/failed/【硬件知识】vco压控振荡器/clip_image008.jpg","aad87f9838e93808a0caed1ece93ffac"],["/failed/【硬件知识】vco压控振荡器/clip_image009.gif","fd6cf84a1333733613c80d5599c0fbdb"],["/failed/【硬件知识】vco压控振荡器/clip_image010.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image011.jpg","fa6d15386072d8a691d18f9c3a53b426"],["/failed/【硬件知识】vco压控振荡器/clip_image013.jpg","cea0cb9334e0d5f1b84beb2fcd8b1245"],["/failed/【硬件知识】vco压控振荡器/clip_image015.jpg","660345ebf2132d1bcdd9a7455529093a"],["/failed/【硬件知识】vco压控振荡器/clip_image017.jpg","29517d76c214adc17343771d2d804679"],["/google41a28d5f2878fa02.html","c00a643ebdd724f0068721c855dd6006"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/tou.png","578463708d7de56a1c4e6331831b3e2e"],["/index.html","9b8196f04d02f29ac71d97b9a3b08674"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/code-unfold.js","e079f1fdb88a9edcd745220494218e88"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","97606f901b6e488587ad5c49aa367604"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mylibrary/css/float.css","ea2fad2f7eac692d6ac8be363b8a4f2d"],["/mylibrary/css/hide.css","47d89f251b35c3ede09286a4b4ad329a"],["/mylibrary/css/load.css","6e278dc73d652968f6caf9731ff7cba7"],["/mylibrary/css/neon.css","87d49dfac9c0cb0d3e381afa33d57309"],["/mylibrary/css/round.css","f8fae5eff86d2071440cad50d5f1936a"],["/mylibrary/css/shake.css","6590ef1e362bc711aad3825d8c3887f2"],["/mylibrary/css/shiny.css","2c7997289055179dc3e78e8b81e76599"],["/mylibrary/index.html","cb6cb5033c4c02d9fa14cfde5802ef8e"],["/mypage/css/style.css","b679e2f1fb3c66ae4878edd6e9449fa3"],["/mypage/font/LigatureSymbols-2.05.eot","5b46f67c079e0599f89aae807cdad560"],["/mypage/font/LigatureSymbols-2.05.svg","f4be952f02a00bd7b464568304b12842"],["/mypage/font/LigatureSymbols-2.05.ttf","48ae0b91a8d6e1feb2c15961a338dad8"],["/mypage/font/LigatureSymbols-2.05.woff","f974884f441019724c351f85478b3938"],["/mypage/font/README.html","80181541a67c65acf9f3ec643fc9dbec"],["/mypage/index.html","83b1a6b8c1cf3c50574dfd011580854f"],["/page/10/index.html","f5c62a1f251d53b6444d96349da79a5d"],["/page/11/index.html","06f826ba892356630f0c36579e1aa21c"],["/page/12/index.html","4dc0fa36a49939caac186646bac73a3b"],["/page/13/index.html","e15d0190301b8bf47074d82d9741bb93"],["/page/14/index.html","060f27f348e1f41812cc5f26d23dbb6e"],["/page/15/index.html","fe85137d0253dd2bc128bff3c11036f3"],["/page/16/index.html","cd7ce111d87f22888239ce0c8fa7490b"],["/page/2/index.html","afe1b840c1e3773b1208e86682661944"],["/page/3/index.html","54776c0d1100f37c2e336b55d9dea2bc"],["/page/4/index.html","f1ef5e8e13c9ed2fa545b2249611a0f1"],["/page/5/index.html","b38f5459578188558f041471dbc1486a"],["/page/6/index.html","fccfb6b2563ef54b6ddb81a2153ad40b"],["/page/7/index.html","9667cabcb817ead0f47cf288ec1cc512"],["/page/8/index.html","5eed74e41050a6a7e210ae30094b41e8"],["/page/9/index.html","ef30a0e7147ad3df4581e4006080dfa2"],["/sw-register.js","176d2284e87d3ca2542d5ac4729f3e2e"],["/tags/ADC采样/index.html","19cb63abdc13db712d4461455ac1fafb"],["/tags/Block-NeRF/index.html","9d745967b2a0cf87a83f4ec9ed9cc6cc"],["/tags/CV/index.html","47609f985cedd19bc87155d1b6a2a754"],["/tags/FPGA/index.html","9ffa9d95e12dd5f260685c8a6b4a002c"],["/tags/GPS/index.html","aa81c2b72c9ccff97c3c5fed18532c1e"],["/tags/HAL库/index.html","cc3c85bd4820718f2b5efb5e7df87812"],["/tags/H桥/index.html","02f8a59df96f2c4663f5bcd4993673db"],["/tags/INN/index.html","358bcd0f7d548ffba5c786d3aca847e4"],["/tags/JIIF/index.html","1db1833b98f79615b52a6433f595f2b2"],["/tags/OLED/index.html","d88d0ddae8feb81db685c50b36cc59ae"],["/tags/Point-NeRF/index.html","9cfe64a062c9f78c4dd7a60a1e21cf2e"],["/tags/USB/index.html","c23316c141c6878f45d88b0147b3c52b"],["/tags/V831/index.html","a8ceee1068ad36b963c8f9967b87d568"],["/tags/adb/index.html","90f118c1f324cba2b39140418c4ad34c"],["/tags/amg8833/index.html","e1435f054a52eb4548408691bac349aa"],["/tags/auto-js/index.html","7810bc7e51f8c6f9320d13e2c67db1f8"],["/tags/bard/index.html","310af1edafc2242001ac823e408298f8"],["/tags/chatgpt/index.html","04fd1a7549c08407cf8b67ccb6e066a1"],["/tags/cmd/index.html","c27176930f2d88f3c809da8c852ca372"],["/tags/conda/index.html","5a2ca27f7df2d2aab11e4b86b2443cb8"],["/tags/css/index.html","71b75635d42f8b53529d7a25236f6b84"],["/tags/frontend/index.html","cfe9c47661325785506fec3d36230c8d"],["/tags/git/index.html","af153bfb948873d3ce03741efe4f2c07"],["/tags/github/index.html","e81fd41a15c5b20759f9d4a4409aa53e"],["/tags/hexo/index.html","1b913bbd6d93eab3353b0df6ab10f3e2"],["/tags/i2c/index.html","52119c2f06b1c6101636e7f2b5d09750"],["/tags/index.html","73b44115943bba7b4fe5e636cc12fb9b"],["/tags/inte/index.html","e263c4aaef7701e96f4027fb10fcd55b"],["/tags/k210/index.html","039db41bba7f7f7e0e08b70bb5f72cf4"],["/tags/learning/index.html","7814cb710bd305ae7aa8ef9443d152bc"],["/tags/library/index.html","95fde88cccf72ebc4da8e703660b2aa3"],["/tags/library/page/2/index.html","cab6547a5d064a252d9fcf330bb955e7"],["/tags/library/page/3/index.html","9b9984d10c6080ee87c9d80ac7e48346"],["/tags/library/page/4/index.html","d9066f97afdc6ea21c547b063dcea1da"],["/tags/library/page/5/index.html","86cf121dad6043ed3f54ca5215954ea6"],["/tags/library/page/6/index.html","1ebffbe0fe2e3822bdbec4bf2f9139c0"],["/tags/library/page/7/index.html","1efe5a214ce54a33e2358afacd34a874"],["/tags/library/page/8/index.html","4cab9036e71bd96abfc602c07c1fd805"],["/tags/library/page/9/index.html","70058b40f2a9416972fe7bba540a15cf"],["/tags/like/index.html","9032e53112eb0414019015457acb7beb"],["/tags/linux/index.html","69122afd521e798aa59fb514bc164725"],["/tags/little/index.html","cb2d3c85779ed3be55fe89e82b98b770"],["/tags/make/index.html","115ae4c332d271415ba917c6ed0388aa"],["/tags/math/index.html","6912fc788bae977ca470e512c723b33b"],["/tags/matlab/index.html","30d44a014f279085761f3344b9bcf9b9"],["/tags/mine/index.html","1257e82af00d39dcb33470d7474245de"],["/tags/modelsim/index.html","e42b3a24c879e4e01a4563e493f4fb89"],["/tags/nerf/index.html","00d37ec85768c9fa8696ec071cb98ef7"],["/tags/nrf24l01/index.html","c9e4b4de2d8485ce4f39d23c3e1baa3c"],["/tags/nuitka/index.html","681fc2bf778c5a64079f7a01e5021092"],["/tags/numpy/index.html","0642fbdeea3757fe432b8baf49feb82a"],["/tags/onnx/index.html","8edf6d4b2b5689d95ed01a4bffeb5635"],["/tags/pcb/index.html","3407429ff35f1576ce98253f2c030a15"],["/tags/pip/index.html","91c92904d93511dc483dd88258171577"],["/tags/psutil/index.html","dbd731163cf3a1acfc3bfac3a3c7f876"],["/tags/pyautogui/index.html","f3c274150868051a98656ee3e6537e26"],["/tags/pybluez/index.html","98dfe5668e412c1fafd95af6927a4987"],["/tags/pycharm/index.html","6e98c124bdd017848e8c9cdfae816f31"],["/tags/pyinstaller/index.html","2193f159a9e68ee094eec129889a4365"],["/tags/pyqt/index.html","21b3286c88661023373fd520335930d3"],["/tags/pyserial/index.html","0d711b5fec463b4b57b92f3d6d20dc4d"],["/tags/python/index.html","f1d137f775ae860126c433e1b76a66bf"],["/tags/python/page/2/index.html","cd25805e325430b32993ad862f672761"],["/tags/python/page/3/index.html","08884f8fbfaae3fa114ba6d8c465ddc2"],["/tags/python/page/4/index.html","f9e65a49ef7302f4b1917184f59b74de"],["/tags/regedit/index.html","05559a8baf556c3ab25ca3421ad6bcd5"],["/tags/solved/index.html","62e57ad3a7f119d3c35c45cb7cb3c9b7"],["/tags/solved/page/2/index.html","590548444c7c9b6add0b496874e3c207"],["/tags/spi通信/index.html","44936f7f7a5013fffa9c27ff9aaba337"],["/tags/stm/index.html","071df96876dae978a6b399069343c71a"],["/tags/stm32cubemx/index.html","69122e039b2823811df6c24446673728"],["/tags/tensorboard/index.html","8d1e4a2c7171e104d75ebb16daba4335"],["/tags/torch/index.html","1bfbbf79eae999365449e1330398bf79"],["/tags/typora/index.html","4994fb39cce4354b1149599184356fac"],["/tags/ubuntu/index.html","8a7159c44d8369bbed7b9e6ec0ec81d8"],["/tags/verilog/index.html","e508e99ecdb8b7ca61c7716c79e425e7"],["/tags/vue/index.html","6c35345e5db6c499bc80142213e60ccb"],["/tags/win32gui/index.html","ffe44eb84e044e0898524142b0d743fe"],["/tags/windows/index.html","505c791b000b6541c9917d28f9c93d33"],["/tags/work/index.html","432cc949cfca72a73395d8aa9b287074"],["/tags/work/page/2/index.html","4f54c83674c904945d00dd4654838d8d"],["/tags/work/page/3/index.html","b8e9b412e75982529877d0cbfc2656a2"],["/tags/work/page/4/index.html","9b59af6934b2ad092983eb5552a7c01e"],["/tags/下载视频/index.html","76c5c5a1113d8dcc877e5eeedc6e1e13"],["/tags/串口/index.html","04e5198641f6f59bbe03b987aa2f8c4b"],["/tags/代码/index.html","3717bc8515935ffd3381f5ed7267adc9"],["/tags/全志F1C200s/index.html","b2621e4c64c27bbe256ce48b545f5f16"],["/tags/公式/index.html","f72a6042b0cbf5805b31152348607187"],["/tags/前端/index.html","5ce0167cfb37426134afa0487817f712"],["/tags/博客/index.html","86e954f94ba972c246566180a970b005"],["/tags/国产/index.html","032f43430a35c013192fef197a13600d"],["/tags/多光谱/index.html","5bff4747b849b72ef98e0858e4037242"],["/tags/大学/index.html","25a54d7115cfe5e560d3aa447388a129"],["/tags/嵌入式/index.html","ff680fb2e615fbd2ed236a5d49a6d75d"],["/tags/嵌入式/page/2/index.html","b88599c529fb23567343b5e1fabe7dca"],["/tags/嵌入式/page/3/index.html","0183277b68451889f0a4c68559c8b89e"],["/tags/嵌入式/page/4/index.html","e9022f29bd5d75e4dd2baafbfe7e73d7"],["/tags/嵌入式积累/index.html","ec60809e8fe5f75e3f99448f7021cd00"],["/tags/开关电源/index.html","69b4c5ff4ef7fa40b2fceadc020cba34"],["/tags/开发板/index.html","48228704f1f8df015d982b1f76dde28c"],["/tags/开源/index.html","1901012615a30ea8e13357861f42f874"],["/tags/忆阻器/index.html","78e71b45615e19ce724449553d2d38c9"],["/tags/快捷键和常用指令/index.html","4b21fcdad2fa1cfd307cdf949468b280"],["/tags/手机/index.html","e5afacb14385d7234e56b45817035565"],["/tags/打包/index.html","49b17d22d7ac32b239cc00bd83bffe69"],["/tags/控制/index.html","7219ea252f99766d706ed6f961f448d1"],["/tags/数据处理/index.html","71fec3edc5f02cfc294f645e317879c1"],["/tags/数码管/index.html","d3d4a41febfaf0568710c712c10c5bc3"],["/tags/整数规划/index.html","ba9e884a6e95132bf5769258132a06c1"],["/tags/新加坡/index.html","1ee11c07f8edc56414b35f49a2f69f91"],["/tags/机器学习/index.html","41abc0013cbaf160170911363956fecd"],["/tags/机械加工/index.html","a4c5cf675c8e1f5d5438811121fb35e9"],["/tags/树莓派/index.html","6e97e2b3a293ea75a1b4f4f420384870"],["/tags/模块/index.html","d9a20f46fd2916d20919907fb0359a57"],["/tags/沁恒/index.html","86008d301759128cefd1e535bd346225"],["/tags/测距/index.html","9ef415529b59ae7206d4dca5b62901d3"],["/tags/深度学习/index.html","11e0f399b5f97860fda989b671e5b9db"],["/tags/深度学习工具/index.html","a10dda051a6f4430742b5eaa8fed0196"],["/tags/游戏/index.html","05075988764c5ba905c431e47da079e1"],["/tags/滤波/index.html","b0d93b15429e6e82874bda702814a2e6"],["/tags/理工方向/index.html","f7e26e1a7f755f253409523a2fe9e2b8"],["/tags/电容触摸按键/index.html","21ead0ee07bf991ecc33905c5df7bfa8"],["/tags/硬件/index.html","eb8b4d9299cb3bd3a59f8fec5f932bc4"],["/tags/硬件知识/index.html","a8013e2c97d5beffa16bb64df4d5d858"],["/tags/积累/index.html","d819d42a32cbd976bd106a15769a97ae"],["/tags/算法/index.html","2ceeabbc206a1ccecc9d41a0411f790d"],["/tags/线性规划/index.html","2bbaaeeea8b3336c533df4b83e497e44"],["/tags/经验积累/index.html","35bda362583c07fc97ee6ecc5f8b5ac2"],["/tags/编码器/index.html","c95d7742a819efdd066f855c1421ae28"],["/tags/网址整理/index.html","9c130eb8c1e5796d1e1c5d406b6bd973"],["/tags/航模/index.html","df1e63ba6d7598f2f731b2c74ff4546b"],["/tags/芯片/index.html","3e63f460b6afd98a52720989aa0b71b1"],["/tags/蓝牙/index.html","9f0d80911ce3d7704ebba2b567ef5b0c"],["/tags/蜂鸣器/index.html","9cd7202e6994311ae29929b2f2c08e71"],["/tags/论文搜集/index.html","e40371247272ac174c30a71e2f60dd9b"],["/tags/语言/index.html","181d9af882560a948c7057b07cbc89f1"],["/tags/课内知识/index.html","3298e51e4a75e132e871b14151e34e74"],["/tags/贝叶斯/index.html","9b8f57c151326023521d9109e3b5b632"],["/tags/超声波/index.html","b3f6264f0cd45a7ad17cfe9edbf485e7"],["/tags/软件/index.html","34d2c4800f479cd07ca6e4033805a80e"],["/tags/输入法/index.html","82bb93a1b7990aa03d07ed588f126fe8"],["/tags/运放/index.html","2272c86a8f7f13fc2aa8846cb81dcd6f"],["/tags/选型/index.html","8505f332e1677c236ee4795ef24a500c"],["/tags/通信/index.html","88bd270e5bf6730fde65557c5841834d"],["/tags/钢琴/index.html","4b6ca34ed1d6839ea0cdd5ab403ad1ff"],["/tags/键盘/index.html","acbdf3e9e6cad6ff37e0600a594dcff5"],["/tags/陀螺仪/index.html","a55c4c0af7f6527045d7a5a106ac94da"],["/tear/index.html","c0ffefbd5a496438a9d362269135ddb6"],["/tear/index1.html","d0da1aeb80e448fcf76cff587543c97f"]];
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
