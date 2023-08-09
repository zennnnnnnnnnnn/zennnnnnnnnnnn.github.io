/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/learning/开关电源/【开关电源】学习1——buck/1663506637120.png","8e50e1a9a14c0174f21513f95808f075"],["/2022/learning/开关电源/【开关电源】学习1——buck/index.html","4915ecaf0d4c7a2003a675b522f202db"],["/2022/learning/开关电源/【开关电源】学习2——boost/index.html","ea2974a78a6ef927c4d04e1b249159ad"],["/2022/learning/开关电源/【开关电源】学习3——VMC反馈/index.html","a97e4e76405f2b76616520cde06a9607"],["/2022/learning/开关电源/【开关电源】学习3——buck-boost/index.html","f207e640136653a728e4a52afb5d22cf"],["/2022/learning/开关电源/【开关电源】进阶1——稳定性判断/index.html","0a669a7c4cd8ef736c91f13bc96b6021"],["/2022/learning/开关电源/【开关电源】选型和使用/index.html","918a590ecd0b01b5795b612ac5697780"],["/2022/library/frontend/【hexo】博客部署/index.html","2b9b9eb90c09b07d581dbab8589ad834"],["/2022/library/frontend/【markdown】编写文档/index.html","9cdedc95d096092e118f98d8fef682d3"],["/2022/library/frontend/【vue】搭建网页/index.html","c55e13a9e89e3d24f167919c17265d40"],["/2022/library/inte/【css】学习/index.html","f4268ff9b275b674f3da2701bdd06bf1"],["/2022/library/inte/【钢琴】织体类型/index.html","c3f713469e1ffbdd16d0fb91168b13ba"],["/2022/library/inte/网盘挂载Alist+RaiDrive/index.html","a75e00d87b95eed75d388992ed715eeb"],["/2022/library/math/线性规划和整数规划/index.html","3201cdc222f66cef9583b680e2e7e8d8"],["/2022/library/python/【nuitka】打包python为exe/index.html","03a3066baa94a8fa19aac2841af7fded"],["/2022/library/python/【psutil】检测电脑网速等/index.html","104d5e7581ad4e43f4d95597e9257a6f"],["/2022/library/python/【pybluez】python控制PC蓝牙/index.html","e03b50fce59916695ec83c4f943f5b57"],["/2022/library/python/【pyinstaller】打包python为exe/index.html","16dc7c130a808041c784a401302ab719"],["/2022/library/python/【pyqt】编写可视化界面/index.html","0897f347a8145e4e4edc3d841d64744d"],["/2022/library/python/【win32gui】控制win系统/index.html","35762d763b44428c5fb25369d470a259"],["/2022/library/python/数据处理/index.html","4df0c2eb426eb04f3c46c0c13f28a9ae"],["/2022/library/嵌入式/【git】学习/index.html","101fe94fa25013720d3018e4885bfcac"],["/2022/library/嵌入式/【linux】常用指令/index.html","1a6a1f7ea16140b6c9550bca39a93bc5"],["/2022/library/嵌入式/模块/【模块】OLED/index.html","89611df2389ba4e1ac82267bcc71942c"],["/2022/library/嵌入式/模块/【模块】陀螺仪/index.html","81ce5b9cf9426a7392d55a4b72244ef9"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/index.html","a58bc7f89f188c9d7ee12b69cd88e8e7"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/index.html","4dac06acf8e9f24c6fab70c0f20834c3"],["/2022/library/嵌入式/硬件/【硬件知识】芯片熟悉/index.html","cc24eee8d78f204628112787e8721c83"],["/2022/library/嵌入式/硬件/【硬件知识】选型/index.html","6325a368d3075e2c5fc68b7b84cc6b5d"],["/2022/library/嵌入式/积累/【嵌入式积累】阅读寄存器手册/index.html","25ef0c614b4d91188a10051456ddcc3e"],["/2022/library/嵌入式/算法/【控制算法】学习/index.html","12d5a187ba96e28939c8e56eea4e4d63"],["/2022/library/嵌入式/算法/【滤波算法】学习/index.html","5bee42248c1c7c51ba265e27bc961c36"],["/2022/library/嵌入式/语言/【python】进阶总结/index.html","fa7a0ec021c1fa28f5b1a2951138c722"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】i2c通信（mpu6050）/index.html","3d63a26aa049546c7e96edaaed9083b4"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】pwm波/index.html","f2b2e4debef69bad0725d2f2ce194286"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】spi通信（nrf24l01）/index.html","dcabc084aa378b2d04bcee2535522c8d"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】串口通信/index.html","ed2023669b453622c8441ec09cc3e742"],["/2022/library/嵌入式/软件/开发板上手/【V831】开发板上手/index.html","81f2c57741b25156013e4c7b37ee114a"],["/2022/library/嵌入式/软件/开发板上手/【k210】开发板上手/index.html","5dd58c8d7bb8aae48acfbcbe0957aa55"],["/2022/library/快捷键和常用指令/【cmd】常用指令/index.html","67c13fb3b9770ce404e8aaae7020f63a"],["/2022/library/快捷键和常用指令/【pip】【conda】常用指令/index.html","1e10029a30d618d9f2ad5c308443702e"],["/2022/library/快捷键和常用指令/【pycharm】快捷键/index.html","ce108c8c3983942113ea14c469fc6b65"],["/2022/library/快捷键和常用指令/【win】快捷键/index.html","b4f42a0869cf089165072c2dc3075a6a"],["/2022/library/快捷键和常用指令/免费下载视频/index.html","adc720664fc40f8a2c5f553078ef5ab5"],["/2022/library/深度学习/【深度学习】基础知识：×NN都有些啥/index.html","1b46eb5f9360861e8a6fc0ab8a744234"],["/2022/library/深度学习/代码/【numpy】语法基础/index.html","b7acafd9c1e47c478ea7cf68ac842adc"],["/2022/library/深度学习/代码/【torch】语法基础/index.html","86597dc89afc75af55a786b884d6e59e"],["/2022/library/深度学习/工具/【深度学习工具】onnx学习/index.html","b2ce53b05b1fc0935a3a41cc82d883c9"],["/2022/library/深度学习/工具/【深度学习工具】tensorboard学习/index.html","99e1183834aabf4b273fe03ee15dc5a4"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/index.html","afe1161becca0d06b9c28b01ea224848"],["/2022/library/经验积累/【经验积累】网址整理/index.html","2b313dc054382faa2469ac8923e66766"],["/2022/library/经验积累/【经验积累】论文搜集/index.html","ef33600de28d13b28dc8f933df8b5776"],["/2022/library/课内知识/【FPGA】仿真和烧录/index.html","2b7acc1059e39e8a8a3f53e07952b07c"],["/2022/library/课内知识/【matlab】学习/index.html","97a02053e232f0ca5828d434f4d6b37e"],["/2022/library/课内知识/【verilog】学习/index.html","1a1fc550f8d5c794e5c9b9b66672c0e8"],["/2022/library/课内知识/【常用数学公式】总结/index.html","282ec973cb6736bb28a48367f60846c7"],["/2022/others/Write-blog-using-markdown/index.html","716f9324975e83faee5a93d20357e7a3"],["/2022/others/古诗/古诗/index.html","175c6b3797bab60e336c775aa8cbcc7f"],["/2022/others/能力年表/index.html","db23afcb41e3d48d91d361576313fb90"],["/2022/solved/github的github.io项目打不开/index.html","15dcc1d373891a758c47237e9ce4295c"],["/2022/solved/hexo部署报错spawn failed/index.html","09e9cdb883fb395189ad042ed364d6e4"],["/2022/solved/modelsim的-novopt优化相关报错/index.html","f340541c7b33d36bda005a8980ba2a3f"],["/2022/solved/npm install 报错/index.html","18fc1d5d45754c0c2c12aeff64ebed1b"],["/2022/solved/pycharm修改快捷键/index.html","421b21cb7ae274c2f9b157bade5dfb69"],["/2022/solved/pycharm内无法打开cmd/index.html","9b5add87604f33398881ee99780e2950"],["/2022/solved/从regedit改变键盘映射关系/index.html","3060f364ad1bdee3f5ccf7a66d165036"],["/2022/solved/右键新建菜单管理/index.html","4e64ec8c095919a1dbb8124e146bd1f3"],["/2022/solved/执行make menuconfig时报错/index.html","700712f5baad0aec4d4d7e4d757abce5"],["/2022/solved/报错binsh 1 bc not found/index.html","653c99599026d4c768e8a66101b296ee"],["/2022/solved/报错binsh 1 cc not found/index.html","1c6b53d8bfdde829150d8004cce4cf8a"],["/2022/solved/报错binsh python not found/index.html","227b338af4be9e5220d8435f2eda389f"],["/2022/solved/未整理/index.html","d6f98564246a00ea094f41894aa1e5fd"],["/2022/solved/树莓派域名解析暂时失败/index.html","af16727d726f1ecf3d2f9f369a6f3f1a"],["/2022/solved/树莓派配置python环境/index.html","3cd6e4190698c0d37d3576941453a8c5"],["/2022/solved/设置软件开机自启动/index.html","e080d461b160e36c72ea7539b4e60b3b"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118074452.png","221e63aa60efa77dca50740ce9b88380"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118457009.png","5c1577c940dd443631045f45787e487d"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667226872521.png","ec7a6051752cb193ae983fb81d135fce"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667264387582.png","57b13f83c9dfd506e6ccb81743f74963"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667265226170.png","600b87f6ea78e46e19929200a8190875"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667292838757.png","f9c6a5975d54d8b975e9de23dc891c00"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667293450480.png","57c9efd9a2a4ae995517991ff7abdf32"],["/2022/work/nerf/【nerf】Block-NeRF笔记/index.html","c46145b01ae23de7718669bee8e36ec0"],["/2022/work/nerf/【nerf】Point-NeRF笔记/index.html","ccdd79f3723c60b7cb2094f66ded17ac"],["/2022/work/nerf/【nerf】nerf-pytorch/index.html","01b11c44e61303ed14d3206d05d162dc"],["/2022/work/nerf/【nerf】汇总笔记/index.html","9d39a236a78590717c836559f9becf06"],["/2022/work/nerf/【nerf】记录/index.html","ead297e41e775275cd0357b6158fbeb4"],["/2022/work/前端/【前端】记录/index.html","0f36ee1cfb130c0cd4e042351b3b8bcb"],["/2022/work/前端/【博客】记录/index.html","40aba0f0a4cb3c330ab8d3f396a4811f"],["/2022/work/嵌入式项目/bard/【bard】Linux迷你电脑/index.html","9e8aeea09fa613d1a6abdb3c3cd63451"],["/2022/work/嵌入式项目/【祖传板子】记录/index.html","740af132251a219365b9a971ed6b73ae"],["/2022/work/嵌入式项目/【航模】记录/index.html","51cc606a472bc0c7206f824bd89ef892"],["/2022/work/忆阻器/【忆阻器】记录/index.html","d2590e0b39a85a91ba057f7f18ab13a6"],["/2022/一下都是0/index.html","cea847e589fcb982bf5ab13fb1f38f66"],["/2023/learning/开关电源/【开关电源】理解/1663634083260.png","7b1a889ee96c83e170023666681c9131"],["/2023/learning/开关电源/【开关电源】理解/index.html","b1544e73f18b3d041d249fd1a219ff3b"],["/2023/library/frontend/【adb】电脑连接控制手机/index.html","a37c890ec7fa68c890cc3972ec314d6a"],["/2023/library/frontend/【app inventor】拖动滑块写手机app/index.html","b539aa9137d48a480d2086e36e5a04e8"],["/2023/library/frontend/【auto.js】手机自动化控制/index.html","0a088c102ed55f8734f9a049ecaa69a4"],["/2023/library/inte/windows的linux子系统wsl/index.html","7512dd1cb118337ffbf108c576c133a2"],["/2023/library/inte/【latex】学习/index.html","df31766693ed228251d71f03612502b8"],["/2023/library/math/【math】高斯积分(Gaussian Quadrature)/index.html","5defb35ba1f70c5e632dd9f3e6217a56"],["/2023/library/python/【pyautogui】控制键鼠/index.html","8801119d83e3ac25cfaa9f088883c6c2"],["/2023/library/python/【pyserial】读取串口/index.html","42c184a2b5f6d57fa2d2d3bfe9eeafea"],["/2023/library/python/【python】基础语法/index.html","b132b26032a922f9cd96d0d252e91eed"],["/2023/library/python/【python】有趣外部库/index.html","2868420cde3655839bee8bd56b15dc95"],["/2023/library/python/【python基础】常用内部库/index.html","02772a7569c6f387fb9c369b5c56750f"],["/2023/library/python/【python基础】常用外部库/index.html","e0e37c5ee20f8ef0e6446797b7414d7b"],["/2023/library/python/【python基础】有趣外部库1——/index.html","bae5fe224889ec46ad2e226dcbccaa8e"],["/2023/library/python/【python基础】有趣外部库2——游戏/index.html","70aac2368b28243d8368cde07791da20"],["/2023/library/python/【python基础】机器学习库/index.html","ee604cd177a900b99466f84d57f61c31"],["/2023/library/python/【python常用】常用库的pip安装/index.html","7c757a23db0ccf885645360caf455db4"],["/2023/library/嵌入式/模块/【模块】GPS模块/index.html","ee10bebc9cc494fc2b5b1ba985e60656"],["/2023/library/嵌入式/模块/【模块】amg8833/index.html","706ae1521976bb820d57e54d87bd9570"],["/2023/library/嵌入式/模块/【模块】as5600/index.html","84f080b10b3c9c86a5788ab0dc5f48ba"],["/2023/library/嵌入式/模块/【模块】数码管/index.html","dd13fa1ba37f55ed8d8804818b9bb6bb"],["/2023/library/嵌入式/模块/【模块】电容触摸按键/index.html","05677b7fbcca2124b457a84ff18c89b6"],["/2023/library/嵌入式/模块/【模块】蓝牙/index.html","d5b97c81f15e38a8213fd7b0e49d501e"],["/2023/library/嵌入式/模块/【模块】蜂鸣器/index.html","382e977293264a4871daffcb762f1a3c"],["/2023/library/嵌入式/模块/【模块】超声波测距/index.html","f74609b4032b53525aebccbe7ac77e43"],["/2023/library/嵌入式/硬件/【硬件知识】三极管/index.html","654254177a1769e70221d621a62d8934"],["/2023/library/嵌入式/硬件/【硬件知识】运放运算电路/index.html","3fdcdb2c8caf3b3426794226c1036db6"],["/2023/library/嵌入式/积累/【嵌入式积累】常用官网/index.html","5eb36d487baa2ae6d04746fdc089ccac"],["/2023/library/嵌入式/积累/【嵌入式积累】控制入门/index.html","f6c43a0e77bce03e4ea8569f31bc0531"],["/2023/library/嵌入式/软件/【HAL库】笔记/【HAL库】ADC采样/index.html","f10e8674d4a320a7c40f7102ec28b7ec"],["/2023/library/嵌入式/软件/【HAL库】笔记/【HAL库】USB/index.html","6676f7da259ecc8b338aed23a9e4b65a"],["/2023/little/name/index.html","b056467471d9bdb9c5243b9c8cf5c038"],["/2023/little/留学小记/index.html","89e120e384aec3bdce4d2fc3201865fa"],["/2023/others/chatgpt/index.html","69e709091a04a87ce928d4570dbb087c"],["/2023/solved/chatgpt您所在的地区无法访问/index.html","caf374b3f29ce8d086e2459c362586f4"],["/2023/solved/环境变量配置理解/index.html","721bd3b6c229d58201bba67165a5ca52"],["/2023/work/JIIF/【JIIF】多光谱融合/index.html","c73083908a93a30540815bb5caa62fda"],["/2023/work/mine/电脑外接摇杆/index.html","d328a1d02fe890758cdfd4a2bb2021de"],["/2023/work/nerf/【nerf】最新阅读记录/index.html","c3c87e893e48a8c972f947e8bd40a734"],["/2023/work/python/游戏AI/index.html","d1dd828b98fcc5db35445f7c4c464b7d"],["/2023/work/python/窗口互联游戏/index.html","8db2022c546c5cf5a91c638cc8c11f83"],["/2023/work/python/网速显示助手/index.html","b75a4e96808e633b305969b1576e5029"],["/2023/work/python/羊了个羊自动化/index.html","7543493518944c6e6815e03ea6adbb22"],["/2023/work/python/蓝牙调试助手/index.html","123c74593c0bba7763e5e1ff84608a04"],["/2023/work/嵌入式项目/【加热台】记录/index.html","47346a6f9093064e0ebb99a8fd67fa6e"],["/2023/work/嵌入式项目/【四旋翼飞行器】记录/index.html","136dc129b8ec035ee3d9d84451ea22db"],["/2023/work/嵌入式项目/【沁恒】样品试用/index.html","f3a0c15bc3c4a8bec115c8fbcb4cf5ce"],["/2023/work/嵌入式项目/【生日贺卡板】记录/index.html","e566d90948245af98211ea0f5593c495"],["/2023/work/嵌入式项目/【自制无刷电调】原理/index.html","2f5f5df1413661aff286075d86d493d0"],["/2023/work/忆阻器/【忆阻器】python平衡车/index.html","36d93187355c90db1208a32addc94255"],["/2023/work/忆阻器/【忆阻器】算法部分/index.html","5e16d49407a907a930e55f4f475015ea"],["/2023/work/玩别人的开源项目/chatgpt微信机器人/index.html","60e44ae31fbe2ab3d71434b6c3692290"],["/2023/work/玩别人的开源项目/大一尝试过的开源项目/index.html","97bac071b6aed6fc1609e65931344320"],["/about/index.html","666fb8b84a9f2bdf213115cdd8ffa0a1"],["/archives/2022/09/index.html","58230aa8debf9fae7167370217016df0"],["/archives/2022/09/page/2/index.html","38002545ee19d36415a5221f96f7ed0d"],["/archives/2022/10/index.html","759cffe9824b53cfbdccc110131433e7"],["/archives/2022/10/page/2/index.html","073cd13c9b3fb0a5731638dcb7fcef08"],["/archives/2022/11/index.html","435092b618c1970343bee01e475addea"],["/archives/2022/11/page/2/index.html","5927e24810b3ff79638eac5a9dc1c411"],["/archives/2022/12/index.html","c3924a42897d86ae9e60f147ba4e0fd5"],["/archives/2022/12/page/2/index.html","d1e70877b40286a45faa284eab764b89"],["/archives/2022/12/page/3/index.html","ed4cf0e08f7c24cc4e9107f9357913df"],["/archives/2022/12/page/4/index.html","6b64caea154eb7e24c739bef91b2abc8"],["/archives/2022/index.html","081129084fc2d5d43f61fa9364437197"],["/archives/2022/page/2/index.html","6fe2040fddafda88c1f0687640ee5863"],["/archives/2022/page/3/index.html","0b11f4bb62c371792892fea70535f083"],["/archives/2022/page/4/index.html","fcbf5572474685a7aba5175dcccf3bc0"],["/archives/2022/page/5/index.html","76d5e3a42077efafe02b7d20f2b239d2"],["/archives/2022/page/6/index.html","6fcd8e22c219587223b2d595a34531ad"],["/archives/2022/page/7/index.html","c4538efa3327699d3828bb7e45cfb881"],["/archives/2022/page/8/index.html","0a8a1d20d08161f6e8ecb6d42c9e9bb4"],["/archives/2022/page/9/index.html","edb37d44f50b093a416ca37f3f3d1fa3"],["/archives/2023/01/index.html","c10db090380e4097aa70062dd8db9811"],["/archives/2023/01/page/2/index.html","9e9ac6e31fdbe69c05f2ae9e012eb0d5"],["/archives/2023/01/page/3/index.html","3d7d167e712765e8a288ccac5de828f1"],["/archives/2023/01/page/4/index.html","d8a81288a215bdc7a9a710e3ce68bdef"],["/archives/2023/02/index.html","c4669e438d49b1a9c938b68a7335ac68"],["/archives/2023/03/index.html","dfdf620e6d65c9330b791c6aec6fef9a"],["/archives/2023/04/index.html","81494e755e203c75234485811c21914e"],["/archives/2023/05/index.html","e100b11fd089d8799617b7c7e61416a1"],["/archives/2023/06/index.html","ebeee6f7b443e0606aaa035b9fce847d"],["/archives/2023/07/index.html","00a05ce2b12773d21ff463ba9fda822f"],["/archives/2023/08/index.html","2849e2242a59627bfd2ab5ab9c60d61f"],["/archives/2023/index.html","2cd06bf9fa52e52212b56931ec341d65"],["/archives/2023/page/2/index.html","77699c2edf4c29300f1eee8ad14a4b23"],["/archives/2023/page/3/index.html","eb595ec9b5410c6a5b5aca101d153cda"],["/archives/2023/page/4/index.html","6b66b63a051730a30b74bd5f7f89cb7e"],["/archives/2023/page/5/index.html","1bdc1db39ee8cf898e2ebb3ee2165ebb"],["/archives/2023/page/6/index.html","a8bcce0b503bb52d8d1ab2b91cd1882b"],["/archives/index.html","4a455c8dc5f89337599b33deebc96546"],["/archives/page/10/index.html","234476a5b6b07d5f8eaf15005442f9d2"],["/archives/page/11/index.html","7c50395d8dcb553989b529dbd19c4654"],["/archives/page/12/index.html","c6ff7eb11e3acdbaad7be2c1adfac8e8"],["/archives/page/13/index.html","eb28ed389143d046d2c449caa9dd12d9"],["/archives/page/14/index.html","f574e7b31b76615caf59453fe1494d2b"],["/archives/page/2/index.html","4e28f4abda752884ee7755ba1d527d66"],["/archives/page/3/index.html","c5ff40b12b1738f3cb2988dba67ab679"],["/archives/page/4/index.html","7ed21735bc0f19e58042cba5ee22ba33"],["/archives/page/5/index.html","251e5402ac674553039d583c3f28bb5b"],["/archives/page/6/index.html","15e552317e774978c80a2c56e75a9e1a"],["/archives/page/7/index.html","b8abe229b8a6c4318c97fe388e6473a8"],["/archives/page/8/index.html","69a074cf5e127f2490d0b2cd9937436a"],["/archives/page/9/index.html","cd55bdb1a45a83fa75a97e5d81a51e50"],["/baidu_verify_code-ZFSCabM1PJ.html","e1584532792bef5f77445b4c5492a96f"],["/css/main.css","f390742a0c9aec280e361af9dce1dcba"],["/css/spoiler.css","eb373af0627ede298867ffc0045da62e"],["/failed/【硬件知识】vco压控振荡器.html","f1986ee14b1bcec3987bb3bb05afd4e2"],["/failed/【硬件知识】vco压控振荡器/1665803607390.png","3df26768c0d97b3acbb64c7f4738f15c"],["/failed/【硬件知识】vco压控振荡器/1665803663941.png","38d29c573fc0aab159543ee6f3d6b31d"],["/failed/【硬件知识】vco压控振荡器/1665803862765.png","f7e2165483ca1f224fc47019c9d85839"],["/failed/【硬件知识】vco压控振荡器/1665803865723.png","3da7b08b88d8795e53d03a47e1926277"],["/failed/【硬件知识】vco压控振荡器/1665803871404.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/1665803883747.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/clip_image001.gif","ba898c600ecfdb213d2223a0f783c808"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803844893.gif","fb05fad8f7ca3e4d9e40000a9ab1dc09"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803856973.gif","e1a4cd1747beecc7d92124979531824c"],["/failed/【硬件知识】vco压控振荡器/clip_image002.gif","0c0f42f02d474126082016d250804bc4"],["/failed/【硬件知识】vco压控振荡器/clip_image003.gif","1f489bb3e02d4993cdd501f7ec773812"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803844893.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803856973.gif","09cde39109369f9185d1cf128c6d7c2d"],["/failed/【硬件知识】vco压控振荡器/clip_image004.gif","32873c471ff1058abf9d6d09ca5e45f0"],["/failed/【硬件知识】vco压控振荡器/clip_image005.jpg","ea2dddfe9b1da4f406ee36b37c99e72e"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803844893.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803856973.gif","b0138096b0fc7682435ad07aeaf159ce"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803982819.gif","6540947f9843ab822d3e8eeb7ef621e6"],["/failed/【硬件知识】vco压控振荡器/clip_image006.gif","6290aa2f8360b2a4f05e4c09e4d6bc80"],["/failed/【硬件知识】vco压控振荡器/clip_image008-1665803856973.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image008.gif","113b77d852979982495a775ea4d973d1"],["/failed/【硬件知识】vco压控振荡器/clip_image008.jpg","aad87f9838e93808a0caed1ece93ffac"],["/failed/【硬件知识】vco压控振荡器/clip_image009.gif","fd6cf84a1333733613c80d5599c0fbdb"],["/failed/【硬件知识】vco压控振荡器/clip_image010.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image011.jpg","fa6d15386072d8a691d18f9c3a53b426"],["/failed/【硬件知识】vco压控振荡器/clip_image013.jpg","cea0cb9334e0d5f1b84beb2fcd8b1245"],["/failed/【硬件知识】vco压控振荡器/clip_image015.jpg","660345ebf2132d1bcdd9a7455529093a"],["/failed/【硬件知识】vco压控振荡器/clip_image017.jpg","29517d76c214adc17343771d2d804679"],["/google41a28d5f2878fa02.html","adf50e0cb2fc6710c75dcebe75a176cf"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/tou.png","578463708d7de56a1c4e6331831b3e2e"],["/index.html","b35084ccc83635d04ca1fab30a7cde95"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/code-unfold.js","e079f1fdb88a9edcd745220494218e88"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","97606f901b6e488587ad5c49aa367604"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mylibrary/css/float.css","aa9b5ec6c590f58aec8f88d3fee92ea5"],["/mylibrary/css/hide.css","51061edbb83214e59540fae2ba4c60ac"],["/mylibrary/css/load.css","aa462e2385505a971aa9452ecfdd2ffd"],["/mylibrary/css/neon.css","b11dd88136dc02ed1a2b344bd8de996e"],["/mylibrary/css/round.css","3bf7656d871f5d0f4cdf915551b16cba"],["/mylibrary/css/shake.css","8e73005d439768cef0402cb7899fbe8c"],["/mylibrary/css/shiny.css","317eb81e6c10302f0b2ef0b90d01686a"],["/mylibrary/index.html","1ecf31a8555942d475827b76a8f290c0"],["/mypage/css/style.css","78cea0eef3639ce135f54cdd17103ba0"],["/mypage/font/LigatureSymbols-2.05.eot","5b46f67c079e0599f89aae807cdad560"],["/mypage/font/LigatureSymbols-2.05.svg","f4be952f02a00bd7b464568304b12842"],["/mypage/font/LigatureSymbols-2.05.ttf","48ae0b91a8d6e1feb2c15961a338dad8"],["/mypage/font/LigatureSymbols-2.05.woff","f974884f441019724c351f85478b3938"],["/mypage/font/README.html","224e53279de4021bf31ba8a929e95c92"],["/mypage/index.html","2259d117fe1b0f64a756ae938e480f3e"],["/page/10/index.html","2aca2057c7a2cadc8d83a6ddb0e22994"],["/page/11/index.html","4d39113614658fdb752416e65231e31f"],["/page/12/index.html","1b02ca68fa19a153a1b3e1c611a2f580"],["/page/13/index.html","90328f6ea4022096f015590b1545bd87"],["/page/14/index.html","8dc79622abb16adb27121aaa33268ffd"],["/page/2/index.html","59df5deb6f9f51967edbfae6dee9933c"],["/page/3/index.html","fd2d6a4ed3e0735112b098976927f463"],["/page/4/index.html","afc9ac96929fa3ecfa559e345fc2d7bf"],["/page/5/index.html","7a688308212a486932762d3780ac40e3"],["/page/6/index.html","f91bafc30cdf388b2ad5f0a0cf725f6b"],["/page/7/index.html","108af7b8e48d47e052400d7261ca0312"],["/page/8/index.html","2e3e1b91fe775067416e0f82caf33462"],["/page/9/index.html","b9e6d928dc6847ed84cd90e3aec8e9d5"],["/sw-register.js","2d8663e352369128540122d60239d856"],["/tags/ADC采样/index.html","ea180fc089878b5b4370ab5236939773"],["/tags/Block-NeRF/index.html","c70a84f56cd579872945cdb55d8db9db"],["/tags/FPGA/index.html","acb24d70798d356390badd389929a2c6"],["/tags/GPS/index.html","b06bb7b2ff35208ac470f5096dbf1930"],["/tags/HAL库/index.html","58f3bbc84a6bad6869b6648cc345c550"],["/tags/H桥/index.html","8d4ca6571aeeb2922eaf8ead17f44c61"],["/tags/JIIF/index.html","fd0174753b7aa8086c329917f0eb8d79"],["/tags/OLED/index.html","01266ed1d082c6d914edd00b87b803f9"],["/tags/Point-NeRF/index.html","5c392e6c0d014700de19c99be5e9d471"],["/tags/USB/index.html","5b2c98b417ec6c453886dbafb45160c0"],["/tags/V831/index.html","1138735d1dce6ca7ac774cbc5bafbc1f"],["/tags/adb/index.html","68d2ede6143c344aab26304e004e2f0b"],["/tags/amg8833/index.html","cccd00cc93015d368241120c0dc81d57"],["/tags/auto-js/index.html","598817ac1d03302303fd40096d035339"],["/tags/bard/index.html","23f57533b76040bdb0add86e6747392d"],["/tags/chatgpt/index.html","bb1d0082f83db14710d3902199d2a4a7"],["/tags/cmd/index.html","99ed6a3c5141e0898ed875f9aa4d3ec9"],["/tags/conda/index.html","d2bf5c93d30c039202853d6618c6a479"],["/tags/css/index.html","0f6152e048cdd9dcb535db4367f2f739"],["/tags/frontend/index.html","0a70f8f4a1f335bad3d19a77da163a06"],["/tags/git/index.html","96cc90fe83633315b38ab2a75dcdac15"],["/tags/github/index.html","199fefd0c5b154c713238701de944fdf"],["/tags/hexo/index.html","1e9b230d8f22879e2119a2d1d2264541"],["/tags/i2c/index.html","5fe753e64250d601dd5ad700c4501e04"],["/tags/index.html","66fe8b7a2a67ce24cc26110d86a972e7"],["/tags/inte/index.html","1d344cdee42895ed71e879fa41c77278"],["/tags/k210/index.html","98b6c86d59a95766720dedab5a362089"],["/tags/learning/index.html","3a520094803794cb42d99c2ac2e92abc"],["/tags/library/index.html","bceeacd9f1392c60baca12f4e2d143de"],["/tags/library/page/2/index.html","5a535b5ac52499677da32d58f6795d4b"],["/tags/library/page/3/index.html","63ee094a2fa08b22d5031613504b2ac6"],["/tags/library/page/4/index.html","27382f238b193976781b3b8f34a2bcd6"],["/tags/library/page/5/index.html","dd017a2d1f7d4d2a84e1fed2001bd4c2"],["/tags/library/page/6/index.html","9481e176c5d753e4a6526996009c1eaf"],["/tags/library/page/7/index.html","6836c764109e9b2bf24f6b582996062d"],["/tags/library/page/8/index.html","f285f0186c6db568d2338379fba72cbd"],["/tags/like/index.html","d7d03b71b09d76c41c778393b45073aa"],["/tags/linux/index.html","f2e4d7d62a36f1debd16f402b50b8839"],["/tags/little/index.html","3b21cc832a16ce6ab96b71d6a77ac8bf"],["/tags/make/index.html","a290ba53a48a229e03bc9daf7251ec1c"],["/tags/math/index.html","745482c8ffee351b704a7b2b915da67f"],["/tags/matlab/index.html","03b82097d08e785eae4eb8aa9d790e34"],["/tags/mine/index.html","a8c10be81afaf41a510711a2d6ec0857"],["/tags/modelsim/index.html","1ef4a9eeaf2cfc45946a0416ccd1bd96"],["/tags/nerf/index.html","540add652885f718868a670ea71e3e50"],["/tags/nrf24l01/index.html","b172b2fbd4e1741ac9029531f8ef6f0b"],["/tags/nuitka/index.html","98fdcac24919c1435698b305d9f8c65f"],["/tags/numpy/index.html","d9654b17ec106d3bbd33a5a655ad0dbe"],["/tags/onnx/index.html","6cb40b74f88473bf699bdfa26c6fbe55"],["/tags/pcb/index.html","b68111a02381b609ad332ea2bc3b3997"],["/tags/pip/index.html","891d00fe6aca8c21681e4487a7ede5b9"],["/tags/psutil/index.html","8903dcf60260eac7b6dcdfc1960ea50a"],["/tags/pyautogui/index.html","5218fd2eb2d2fecf2e5fd5f88f9df4dd"],["/tags/pybluez/index.html","c4ac36c75ac648dee3e26713276c6cb6"],["/tags/pycharm/index.html","6b91a5e247add5e4daf7e138b2463787"],["/tags/pyinstaller/index.html","a0892af504fd713b4c73ba2f5ca5e60d"],["/tags/pyqt/index.html","e95988d79f71185eeb87434b38bc8fda"],["/tags/pyserial/index.html","f1e9c13ec11126539005c743599998e7"],["/tags/python/index.html","4e9562aa0122f52658513d48a318ded6"],["/tags/python/page/2/index.html","3964140cf30a4b63f3b95106ce1fba92"],["/tags/python/page/3/index.html","5b5f94f8602ee2ecf2291b3fe41d9ffc"],["/tags/regedit/index.html","ee98737df51bd12fcf1a10d52b68eb1b"],["/tags/solved/index.html","8fd67e8da68afb929bd345c5ca6e6db5"],["/tags/solved/page/2/index.html","8ff832ce8ca065b9a56173d3cb98e85d"],["/tags/spi通信/index.html","4df25767ec447a063cc10643d7901d14"],["/tags/stm/index.html","817e1a76994f1d5e7995ee35317f3c4d"],["/tags/stm32cubemx/index.html","d964ae8e7df4b2c2b9b624404902b6ab"],["/tags/tensorboard/index.html","3491b2d871570d352d130b8e8a3705dc"],["/tags/torch/index.html","0943232e58fe4e57e753f037fb2b7e3c"],["/tags/typora/index.html","3f0b8cd78ec13910ecaddbce4309d81e"],["/tags/ubuntu/index.html","c3897f76188c4ab40d99d59782580872"],["/tags/verilog/index.html","15a60809a0abf19859c7e84a90fddf12"],["/tags/vue/index.html","944735f55deae6dc816fa2f979e330b2"],["/tags/win32gui/index.html","ac930bd40882655bf6655af3f98cb839"],["/tags/windows/index.html","23a4a0b553b23bafb2b4787dfca2f5cd"],["/tags/work/index.html","2f94b3880c3159219e4b5b55f218d905"],["/tags/work/page/2/index.html","34e327b9be1d4e8c7d146d6e240b53eb"],["/tags/work/page/3/index.html","f937af9b80dddab038e8aaba76d25e6b"],["/tags/work/page/4/index.html","12e994e1d0ec33ca1d1fcf4cfa8f43a5"],["/tags/下载视频/index.html","b5410e9cddb7636fef7d91e523bac4f9"],["/tags/串口/index.html","1fba0674d04c27ca8e132d151e2cbbd9"],["/tags/代码/index.html","d8248305d8366709abba5d6e8df55dac"],["/tags/全志F1C200s/index.html","148a746b95f722b9d4a432642df51310"],["/tags/公式/index.html","3c4e0993c439f66ae5c5b94a4fad2448"],["/tags/前端/index.html","cc26432947c51c0698ea724609c30d51"],["/tags/博客/index.html","98163c5728e07761cc8d4ddc5148b06d"],["/tags/国产/index.html","89f649f16b56ae4bc1c285e9cce08252"],["/tags/多光谱/index.html","54237b64d09248547ab0ac71ad77d600"],["/tags/嵌入式/index.html","75e29890fac8d16eee196946bc6d3014"],["/tags/嵌入式/page/2/index.html","634788390c3b8efe9b7f9dfdf69e13d9"],["/tags/嵌入式/page/3/index.html","fc73c692971694f71f5f62fee65da320"],["/tags/嵌入式/page/4/index.html","e04e916e04725a764a12830c582ebff7"],["/tags/嵌入式积累/index.html","db1a93af723b57ddcd7857627da59c98"],["/tags/开关电源/index.html","f637f5797d2432afdc5fbbc89be1d4ad"],["/tags/开发板/index.html","ffa8d6fbf7590b8b8d8a9eb9d1d97687"],["/tags/开源/index.html","c21bab7b6ae7b8ec745b37f777420183"],["/tags/忆阻器/index.html","8dd44ea4d3af96bdd8cffa8d432b6386"],["/tags/快捷键和常用指令/index.html","7511c5e8cf0028d644e8ec668296b955"],["/tags/手机/index.html","166c56624e9a972f3d2a2e28c2d3f50d"],["/tags/打包/index.html","7f6a11911608acc8f7d93720feed5465"],["/tags/控制/index.html","569ad8555e78d774295a12f58028849f"],["/tags/数学建模/index.html","c60f0bd58b40e260201c862b309ff8ec"],["/tags/数据处理/index.html","91c20f1c9f3fe3b5521f7fe307e3a84c"],["/tags/数码管/index.html","bff720f55002f38c7e5978d1bd2395a8"],["/tags/整数规划/index.html","6aa079908a87edeb858d6d9118641586"],["/tags/新加坡/index.html","5ebf102ffc84c9fe0c4bacbcddb6d1b5"],["/tags/机器学习/index.html","0a6082595deee25ea0a036d3155ff251"],["/tags/树莓派/index.html","9276adcd69153f3a59fb4c0e34e188ac"],["/tags/模块/index.html","5a895b543419a6d55500a370b4a40598"],["/tags/沁恒/index.html","a9284f05c689153a4b92b7dcb56193ea"],["/tags/测距/index.html","cbef273005eec5a68a1d9bf0346b0065"],["/tags/深度学习/index.html","bd6fb85bf3378fe7d3149ebfe6bb4500"],["/tags/深度学习工具/index.html","93411491503026fd7403dd3d2a57ead0"],["/tags/游戏/index.html","4cbac3fa34f581ca98b45e37ef468834"],["/tags/滤波/index.html","5fe503b330e1490e1d1385717379b8c0"],["/tags/理工方向/index.html","bd66697d21c4be6dc2c1fbc0f0d88ca6"],["/tags/电容触摸按键/index.html","54359575628adff645890034a64be676"],["/tags/硬件/index.html","f2ba7a9ea7ab23754dae967a3cfc5a91"],["/tags/硬件知识/index.html","98e8fc669711c09cb52748830de41fe9"],["/tags/积累/index.html","1e452845e1337acdce44bdb2c8c161bf"],["/tags/算法/index.html","fccd0808abcfff607a89251d40538160"],["/tags/线性规划/index.html","4434354794ede41862be9342d3fa3f75"],["/tags/经验积累/index.html","b29fe66e32e2a3c182c1005d2dae2773"],["/tags/编码器/index.html","06e3fa1fc736d2afc2a650da6ca6c32f"],["/tags/网址整理/index.html","621c5dde817374b7b0a61e5bfe0c74c4"],["/tags/航模/index.html","048f985503323b37c695314b41fd4c49"],["/tags/芯片/index.html","322bd6c119b3a5a8c61ddfe237c7cb12"],["/tags/蓝牙/index.html","138b05182de85eb7d9d53122539cc073"],["/tags/蜂鸣器/index.html","0ae6bfd47fbe8564880b9bd8ff86ba1c"],["/tags/论文搜集/index.html","c290ae1e0d21188013a759301a6a38e7"],["/tags/语言/index.html","dfba97dce3e0b5bcdb55ef8cf6ecabd6"],["/tags/课内知识/index.html","8fec152c14c919240b3a2355391c3270"],["/tags/贝叶斯/index.html","d6d47137cd06f210c03f3a1308dcfd58"],["/tags/超声波/index.html","de909432e33c9850cb8c3c22471313a3"],["/tags/软件/index.html","970c5ddb0ab1a47f84a959252968a261"],["/tags/运放/index.html","30165b27c77122e27bb896950c557d7c"],["/tags/选型/index.html","ee70f8bc699a8b7e506ea2ac88dc3be7"],["/tags/通信/index.html","80ccbded2fb93acd8d54762810b7ec69"],["/tags/钢琴/index.html","940597d82e6e0a7f4761444973e6e714"],["/tags/键盘/index.html","37b6e2240076f5035c46cea0b3c342f4"],["/tags/陀螺仪/index.html","9c772316df76c9b0b60de895b926906c"],["/tear/index.html","e5ad65a312960f9f11194cc546ab94f1"],["/tear/index1.html","7ae5d5e01c107b1ef35333175bd2a3bd"]];
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
