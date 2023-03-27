/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/learning/开关电源/【开关电源】学习1——buck/1663506637120.png","8e50e1a9a14c0174f21513f95808f075"],["/2022/learning/开关电源/【开关电源】学习1——buck/index.html","7f07fb14c7f17c0c12971799e096bb65"],["/2022/learning/开关电源/【开关电源】学习2——boost/index.html","fb551e57f43578f3630d9feddcd6eb89"],["/2022/learning/开关电源/【开关电源】学习3——VMC反馈/index.html","eabb45c6a19567fbdd981d0b1a35945c"],["/2022/learning/开关电源/【开关电源】学习3——buck-boost/index.html","a28c5791ed89275c47c7b35d7126c7e0"],["/2022/learning/开关电源/【开关电源】进阶1——稳定性判断/index.html","d8fee5313a34750babfb68909a9f1410"],["/2022/learning/开关电源/【开关电源】选型和使用/index.html","713505fcfc27d4e570eb0b213b18e54d"],["/2022/library/frontend/【hexo】博客部署/index.html","3e166488461d536ed0aae1cdd046cdf4"],["/2022/library/frontend/【markdown】编写文档/index.html","e494a89758b06bc54946b392d605d505"],["/2022/library/frontend/【vue】搭建网页/index.html","33881a8b314184086c1d2ae3f0c5dd2b"],["/2022/library/inte/【css】学习/index.html","339e441af39fabc8fd6d76cf13219a8a"],["/2022/library/inte/【钢琴】织体类型/index.html","8dd20b2bec9e35edccb85fed4ad5f912"],["/2022/library/python/【nuitka】打包python为exe/index.html","aba55bccf82d9343c46a607008a6694b"],["/2022/library/python/【psutil】检测电脑网速等/index.html","13283d671d94130b51f2cfac3e21dda7"],["/2022/library/python/【pybluez】python控制PC蓝牙/index.html","cc62ab7554b2a5d76a7df1aed2a8e8c6"],["/2022/library/python/【pyinstaller】打包python为exe/index.html","afeb64b09c84da765000fbd8480cbc8e"],["/2022/library/python/【pyqt】编写可视化界面/index.html","a9ef9e1d51232428f77604acc8c89a38"],["/2022/library/python/【win32gui】控制win系统/index.html","ce5cfb29a69bc147b4e94071f8d0d65c"],["/2022/library/嵌入式/【git】学习/index.html","e0b982172069aed521849cefc28e8c7e"],["/2022/library/嵌入式/【linux】常用指令/index.html","8a2093a404f694c589804dd9bcb67eee"],["/2022/library/嵌入式/模块/【模块】OLED/index.html","f6eaf6f6cab88e6840c180123636b609"],["/2022/library/嵌入式/模块/【模块】陀螺仪/index.html","59939fab66de509f8db8009f12fa48f9"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/index.html","f08171e167f65050c15ac693fcb00d3f"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/index.html","e157719e0df5cf4adcb09e771c8e48f4"],["/2022/library/嵌入式/硬件/【硬件知识】芯片熟悉/index.html","5a3cf5a097296a102c64ac054f3f285b"],["/2022/library/嵌入式/硬件/【硬件知识】选型/index.html","af3a37eb593afaf9aa3c34af23ec4747"],["/2022/library/嵌入式/积累/【嵌入式积累】阅读寄存器手册/index.html","75d3bc3b5a37ec52dbd9fa1e7aec5317"],["/2022/library/嵌入式/算法/【控制算法】学习/index.html","fba3c5564a5fcabddd5cf63e811b1d50"],["/2022/library/嵌入式/算法/【滤波算法】学习/index.html","19d89889a8f4f637786ad5b860ba9060"],["/2022/library/嵌入式/语言/【python】进阶总结/index.html","d1c52fd59eb40f8a457c244906f403e2"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】i2c通信（mpu6050）/index.html","68e6d6b3bb37775c260824ee87019cff"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】pwm波/index.html","575ba2d794b6c0ce3f904472cae2a7b4"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】spi通信（nrf24l01）/index.html","df893b81b5f175167f5bcd4e87900686"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】串口通信/index.html","3ee30d4f8a64f78b122324b812c3d030"],["/2022/library/嵌入式/软件/开发板上手/【V831】开发板上手/index.html","d7b070472588c95aee63d5335c8ba9f3"],["/2022/library/嵌入式/软件/开发板上手/【k210】开发板上手/index.html","c3d6738750bb2ac4243e4e280ba59acf"],["/2022/library/快捷键和常用指令/【cmd】常用指令/index.html","911c3c5662ed00dfd98d4dd7c7d10776"],["/2022/library/快捷键和常用指令/【pip】【conda】常用指令/index.html","9d2b415e33e34f8aa44706e3dc9f4918"],["/2022/library/快捷键和常用指令/【pycharm】快捷键/index.html","b4856f39edf26aa496f6ccf6a163155e"],["/2022/library/快捷键和常用指令/【win】快捷键/index.html","1fe6557daaf0d7400e6cb49d26521a87"],["/2022/library/快捷键和常用指令/免费下载视频/index.html","eaae6558fd3c0650e9a7d77afa5a93d9"],["/2022/library/数学建模/数据处理/index.html","d145b83737059efce9e4afb23127acc1"],["/2022/library/数学建模/线性规划和整数规划/index.html","f1cb2537af4f9bb00dd5981d49116ad0"],["/2022/library/深度学习/【深度学习】基础知识：×NN都有些啥/index.html","25b72d1415daa770d5d672dfb6b1f52d"],["/2022/library/深度学习/代码/【numpy】语法基础/index.html","e82649afcb9b3dd51916c040951da30b"],["/2022/library/深度学习/代码/【torch】语法基础/index.html","a392b2b7f061989e9d2a0ec8924e7227"],["/2022/library/深度学习/工具/【深度学习工具】onnx学习/index.html","34867a440854506689dd24f35ea5be89"],["/2022/library/深度学习/工具/【深度学习工具】tensorboard学习/index.html","91aad2724353f75a58af5148287f10ff"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/index.html","78d1807749b139907a9896f8cd6940fe"],["/2022/library/经验积累/【经验积累】网址整理/index.html","50fcf8d9195c95b905a6e0166a77f1d6"],["/2022/library/经验积累/【经验积累】论文搜集/index.html","abe8eb9b1d5ce506b8c197abd5905231"],["/2022/library/课内知识/【FPGA】仿真和烧录/index.html","0bd9d032643e9b446c3780048c1b02ae"],["/2022/library/课内知识/【matlab】学习/index.html","1d800be061cb9445addfa76025c17f53"],["/2022/library/课内知识/【verilog】学习/index.html","5fd5aa53051f18c682d12d9ed8cb0976"],["/2022/library/课内知识/【常用数学公式】总结/index.html","b8cb22c53d5bf9fe6b120bac137f0195"],["/2022/others/Write-blog-using-markdown/index.html","8ac958563977960744a94c22c1e359d6"],["/2022/others/古诗/古诗/index.html","ef93ff97f44c3948ab2924e2d5872d0e"],["/2022/others/能力年表/index.html","bc64ec229e3ad74584d11397324ffcc2"],["/2022/solved/github的github.io项目打不开/index.html","b1524125e7b45959b35669044118dd5f"],["/2022/solved/hexo部署报错spawn failed/index.html","bfadc988bc4250c779e2b33963ff33f1"],["/2022/solved/modelsim的-novopt优化相关报错/index.html","cc31a95efb6f274251f77b6bb5853456"],["/2022/solved/npm install 报错/index.html","bc59e39f45a5e915ea53dd0aebffd7cf"],["/2022/solved/pycharm修改快捷键/index.html","85bf93eaa3fda1581dc76e99fbfbb0d7"],["/2022/solved/pycharm内无法打开cmd/index.html","e3dee264defeb743ffd040974a1aac1f"],["/2022/solved/从regedit改变键盘映射关系/index.html","6d6c127bdb4913945b6e94514e2c7d05"],["/2022/solved/右键新建菜单管理/index.html","bc84aa8cb63f4c18d49d724a3dcfad29"],["/2022/solved/执行make menuconfig时报错/index.html","60e1e8e172a0a874f08d12a6a6355761"],["/2022/solved/报错binsh 1 bc not found/index.html","e06dfb6c697b243b229cb170b383c00b"],["/2022/solved/报错binsh 1 cc not found/index.html","76b24f4510f8f2436d674fd5e0fd8b1e"],["/2022/solved/报错binsh python not found/index.html","514e48f31869dee4cfb8bb9e1697a2d5"],["/2022/solved/未整理/index.html","5975887c2a252b3a43fba5fd20090e90"],["/2022/solved/树莓派域名解析暂时失败/index.html","2d0cafe0b8245fcfabe24e2d2f6dab8e"],["/2022/solved/树莓派配置python环境/index.html","27a22e26ec7efe9e8d8deb75ea45df19"],["/2022/solved/网盘挂载Alist+RaiDrive/index.html","d9480bb5ab83d12089b692a9550e0c2b"],["/2022/solved/设置软件开机自启动/index.html","4cef8096d0321f8466609a24c8ebd13d"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118074452.png","221e63aa60efa77dca50740ce9b88380"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118457009.png","5c1577c940dd443631045f45787e487d"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667226872521.png","ec7a6051752cb193ae983fb81d135fce"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667264387582.png","57b13f83c9dfd506e6ccb81743f74963"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667265226170.png","600b87f6ea78e46e19929200a8190875"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667292838757.png","f9c6a5975d54d8b975e9de23dc891c00"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667293450480.png","57c9efd9a2a4ae995517991ff7abdf32"],["/2022/work/nerf/【nerf】Block-NeRF笔记/index.html","04f33a4c402e2fae69122c384cc5602f"],["/2022/work/nerf/【nerf】Point-NeRF笔记/index.html","75ad224d41a2803f7c14195f6e08d5b7"],["/2022/work/nerf/【nerf】nerf-pytorch/index.html","d59453c300799c61784a83c88805342a"],["/2022/work/nerf/【nerf】汇总笔记/index.html","b1b89d5ce491c2cf02fdd199586eb452"],["/2022/work/nerf/【nerf】记录/index.html","fe56ff27dd823f9c4a31136698c2d5f3"],["/2022/work/前端/【前端】记录/index.html","fb58d7d52ea6bcd0a9d61679033eb555"],["/2022/work/前端/【博客】记录/index.html","ad513182dce0bb1a2417dd961bb08122"],["/2022/work/嵌入式项目/bard/【bard】Linux迷你电脑/index.html","8cd938ae842bf15935041f14d8cbbb8b"],["/2022/work/嵌入式项目/【祖传板子】记录/index.html","90624693402212f243809a468fbd755c"],["/2022/work/嵌入式项目/【航模】记录/index.html","c41e62c7d8c417ac66df5811dfb19fbe"],["/2022/work/忆阻器/【忆阻器】记录/index.html","ce9b6a35bb686eaf197a4d2bea31aef4"],["/2022/一下都是0/index.html","15716c0988beaf7f209ff1f5a542dcfe"],["/2023/learning/开关电源/【开关电源】理解/1663634083260.png","7b1a889ee96c83e170023666681c9131"],["/2023/learning/开关电源/【开关电源】理解/index.html","3021a0bacaf187e7c181b4e63a027a9e"],["/2023/library/frontend/【adb】电脑连接控制手机/index.html","71370c33ad379f1413c786a32528b69f"],["/2023/library/frontend/【app inventor】拖动滑块写手机app/index.html","0ee17df7c37a4874492cf888eb411b1e"],["/2023/library/frontend/【auto.js】手机自动化控制/index.html","9bd490f2ade3c00c3d2bc23ff43c3d19"],["/2023/library/inte/【latex】学习/index.html","99df1dab9213d8f6588547cf4801dafe"],["/2023/library/python/【pyautogui】控制键鼠/index.html","35e59a8bae87340d01e495993e154562"],["/2023/library/python/【pyserial】读取串口/index.html","1118f084adfad178898a809ce175f200"],["/2023/library/python/【python基础】常用内部库/index.html","e4c85bbd6cd7d0515d774e1a93a979d6"],["/2023/library/python/【python基础】常用外部库/index.html","26a4e95128be5724a9c64648c7f71b60"],["/2023/library/python/【python基础】有趣外部库/index.html","bc8ecdb7a38da8456c636506ed383100"],["/2023/library/python/【python基础】机器学习库/index.html","98bab31e2d3ae90778357ead2e3ad045"],["/2023/library/python/【python常用】常用库的pip安装/index.html","d7dc6e09d0888a9c990f3145a48b7ab3"],["/2023/library/嵌入式/模块/【模块】GPS模块/index.html","4d7c22b7d6cf510e557a39897ce7bcfc"],["/2023/library/嵌入式/模块/【模块】amg8833/index.html","8c2de4c88e7d6d1bb15dc496ef836e5c"],["/2023/library/嵌入式/模块/【模块】as5600/index.html","6a47dce686fdbd9f7df6b53e4d790e07"],["/2023/library/嵌入式/模块/【模块】数码管/index.html","c4f22d54861ae08db520cc482aac2764"],["/2023/library/嵌入式/模块/【模块】电容触摸按键/index.html","ee569e03ba228bd44620364f4b34ad75"],["/2023/library/嵌入式/模块/【模块】蓝牙/index.html","e39ab5b8de91d5bfff68e31d73d49f6a"],["/2023/library/嵌入式/模块/【模块】蜂鸣器/index.html","8a63d05cc29f978820607c06734809b3"],["/2023/library/嵌入式/模块/【模块】超声波测距/index.html","1e4e67bad7a73edb9eb94fcc22c14f47"],["/2023/library/嵌入式/硬件/【硬件知识】三极管/index.html","ecdc51ade510f9ad8e11cb99309380b8"],["/2023/library/嵌入式/积累/【嵌入式积累】常用官网/index.html","bdcd5fe832e767c9660cd21602634569"],["/2023/library/嵌入式/积累/【嵌入式积累】控制入门/index.html","8db4f3475a746722e46d690df657f804"],["/2023/library/嵌入式/软件/【HAL库】笔记/【HAL库】ADC采样/index.html","52f993ebc25dbeab2a384575810fea29"],["/2023/library/嵌入式/软件/【HAL库】笔记/【HAL库】USB/index.html","b5865d97f338b8ab54204cedb19536a7"],["/2023/others/chatgpt/index.html","97d6795e7d60658a52a821fcff90ea8c"],["/2023/solved/chatgpt您所在的地区无法访问/index.html","e7b8732d956d4f1b584600d9249afed7"],["/2023/solved/环境变量配置理解/index.html","0c391efe211bcdf7d844221d070e4d86"],["/2023/work/JIIF/【JIIF】多光谱融合/index.html","43241b87091121edb70e74aedbf16bdc"],["/2023/work/chatgpt微信机器人/index.html","0f2ab597f6c0d0385e475c046f930e42"],["/2023/work/mine/电脑外接摇杆/index.html","e58db7fa9dfb6ae50dbcaa79864e98f1"],["/2023/work/mine/网速显示助手/index.html","bd212896075757f707a82364de2c9d96"],["/2023/work/mine/蓝牙调试助手/index.html","a22bf2f5d67d3ed690789f476bb0d6a8"],["/2023/work/nerf/【nerf】最新阅读记录/index.html","5e9dd2ab2f9742e105fff5e09902471f"],["/2023/work/python/羊了个羊自动化/index.html","b3441ed771e3fa44d95938d4b95e6826"],["/2023/work/嵌入式项目/【沁恒】样品试用/index.html","c214bd874ec02a26ce8dbcf8d7f5bffd"],["/2023/work/忆阻器/【忆阻器】python平衡车/index.html","506f5a40ec0c53955ab08f784add4fd3"],["/2023/work/忆阻器/【忆阻器】算法部分/index.html","a3933a2ed068372557afd0131a627f55"],["/about/index.html","96e75b8498b832d43404c0382b551e28"],["/archives/2022/09/index.html","0dbe0465c3eaff67c618a9065e2c4a67"],["/archives/2022/09/page/2/index.html","07d0d83999b61704049b73e469cdbc8d"],["/archives/2022/10/index.html","eb0de55907b524df59dfe1a822ea24ad"],["/archives/2022/10/page/2/index.html","dcfcc0de35db9ed02d7de0a14a719f81"],["/archives/2022/11/index.html","5ca6899c7c6e39618eba7b355d8e6aa3"],["/archives/2022/11/page/2/index.html","8a2eb2d467adf41084b167a9b0f7481c"],["/archives/2022/12/index.html","f65763ac2c4f3fbdeaf6376655e4eb7f"],["/archives/2022/12/page/2/index.html","9c05e67c0af8679aea112dd560f75d09"],["/archives/2022/12/page/3/index.html","dcbed0ae87bc0c24de19ccecccec952f"],["/archives/2022/12/page/4/index.html","6ac5417216d49f5e68e094585ff9c3be"],["/archives/2022/index.html","a92b7895bcc1b2ab922f9ee73480a561"],["/archives/2022/page/2/index.html","eea8e152972cd698d8115cc2d16a0b55"],["/archives/2022/page/3/index.html","17a225fddb6ff37d5e77bce030062399"],["/archives/2022/page/4/index.html","f8a4a62bb27f2ed09446023215a86138"],["/archives/2022/page/5/index.html","8f0f36ad9839a3891621931a7b0eeeed"],["/archives/2022/page/6/index.html","77ec8b4a5b01f22211d9fa05f9cd60ad"],["/archives/2022/page/7/index.html","339910b71226c6f5c4f24e8f9bc74edc"],["/archives/2022/page/8/index.html","0276598b64df345069a849edeeb7c4e5"],["/archives/2022/page/9/index.html","2dd9e189c736747a1c6e266acb38f0a5"],["/archives/2023/01/index.html","5c266eb8ea67cc132181f75a669f6c89"],["/archives/2023/01/page/2/index.html","5be49daa225f472ea9d42052358f366d"],["/archives/2023/01/page/3/index.html","d1f6118db43346dee9175059d0fd7784"],["/archives/2023/01/page/4/index.html","748ceda9e96db14dbf6f302220e83ed3"],["/archives/2023/02/index.html","ce094df388b4e88d27209f7589cb6969"],["/archives/2023/03/index.html","65e187a40c7ed9f643a3f8abf7f3809f"],["/archives/2023/index.html","44ef9b059c2d65d36715dac45b205ad8"],["/archives/2023/page/2/index.html","5b5cc6dadc890c964adb4b77d95738d3"],["/archives/2023/page/3/index.html","5caf29f22f0bfa999840d3201a3e8568"],["/archives/2023/page/4/index.html","7e36fa790ebfc0d592b3efb25248607c"],["/archives/index.html","54d32fed2047d35001ab61820e209f0a"],["/archives/page/10/index.html","b66ffbf672a6163c4884d79bde1af886"],["/archives/page/11/index.html","d911422d8ad4cce0f4a053069e59a070"],["/archives/page/12/index.html","904c3ea6de7be1b38abfb037e1645436"],["/archives/page/13/index.html","4da7524ba2c28226ddf4e37b1290135f"],["/archives/page/2/index.html","a5ae07f8711a5dcd01d291f30faa5973"],["/archives/page/3/index.html","e2075bc44a01cd171ff150b5702f5f2a"],["/archives/page/4/index.html","3a8509727ac075148ea5100d566a7c28"],["/archives/page/5/index.html","552c770ec7571aef039fe0e39a3dd2a1"],["/archives/page/6/index.html","096eb22dc4bfa45cf270e192d00b83e1"],["/archives/page/7/index.html","d8f87f3adce147ce31378ce6f98b8d29"],["/archives/page/8/index.html","0af45e920783a0d48bf224fae79b8992"],["/archives/page/9/index.html","41050c17cfb9a1057545a13c17b4b0d1"],["/baidu_verify_code-ZFSCabM1PJ.html","27b9971d407d54dd23dafa6cd4c15066"],["/css/main.css","735790a728739908c73669b16728473c"],["/css/spoiler.css","eb373af0627ede298867ffc0045da62e"],["/failed/【硬件知识】vco压控振荡器.html","0eed9d28e1ac56ae53a50d1efe1e59ed"],["/failed/【硬件知识】vco压控振荡器/1665803607390.png","3df26768c0d97b3acbb64c7f4738f15c"],["/failed/【硬件知识】vco压控振荡器/1665803663941.png","38d29c573fc0aab159543ee6f3d6b31d"],["/failed/【硬件知识】vco压控振荡器/1665803862765.png","f7e2165483ca1f224fc47019c9d85839"],["/failed/【硬件知识】vco压控振荡器/1665803865723.png","3da7b08b88d8795e53d03a47e1926277"],["/failed/【硬件知识】vco压控振荡器/1665803871404.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/1665803883747.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/clip_image001.gif","ba898c600ecfdb213d2223a0f783c808"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803844893.gif","fb05fad8f7ca3e4d9e40000a9ab1dc09"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803856973.gif","e1a4cd1747beecc7d92124979531824c"],["/failed/【硬件知识】vco压控振荡器/clip_image002.gif","0c0f42f02d474126082016d250804bc4"],["/failed/【硬件知识】vco压控振荡器/clip_image003.gif","1f489bb3e02d4993cdd501f7ec773812"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803844893.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803856973.gif","09cde39109369f9185d1cf128c6d7c2d"],["/failed/【硬件知识】vco压控振荡器/clip_image004.gif","32873c471ff1058abf9d6d09ca5e45f0"],["/failed/【硬件知识】vco压控振荡器/clip_image005.jpg","ea2dddfe9b1da4f406ee36b37c99e72e"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803844893.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803856973.gif","b0138096b0fc7682435ad07aeaf159ce"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803982819.gif","6540947f9843ab822d3e8eeb7ef621e6"],["/failed/【硬件知识】vco压控振荡器/clip_image006.gif","6290aa2f8360b2a4f05e4c09e4d6bc80"],["/failed/【硬件知识】vco压控振荡器/clip_image008-1665803856973.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image008.gif","113b77d852979982495a775ea4d973d1"],["/failed/【硬件知识】vco压控振荡器/clip_image008.jpg","aad87f9838e93808a0caed1ece93ffac"],["/failed/【硬件知识】vco压控振荡器/clip_image009.gif","fd6cf84a1333733613c80d5599c0fbdb"],["/failed/【硬件知识】vco压控振荡器/clip_image010.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image011.jpg","fa6d15386072d8a691d18f9c3a53b426"],["/failed/【硬件知识】vco压控振荡器/clip_image013.jpg","cea0cb9334e0d5f1b84beb2fcd8b1245"],["/failed/【硬件知识】vco压控振荡器/clip_image015.jpg","660345ebf2132d1bcdd9a7455529093a"],["/failed/【硬件知识】vco压控振荡器/clip_image017.jpg","29517d76c214adc17343771d2d804679"],["/google41a28d5f2878fa02.html","fff56aad9c0d813782bc37b01f99fd9f"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/tou.png","578463708d7de56a1c4e6331831b3e2e"],["/index.html","39f26422f94f72a73c2a6691513b4c3a"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/code-unfold.js","e079f1fdb88a9edcd745220494218e88"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","97606f901b6e488587ad5c49aa367604"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mylibrary/css/float.css","224d87c1158bdea165bed7de976d2abe"],["/mylibrary/css/hide.css","a26f29fba5a9e8ea2db4aa6085c8b6b8"],["/mylibrary/css/load.css","5e07716a8e65dda47fde05c1b1a8bd36"],["/mylibrary/css/neon.css","2962e90a175c16f7ea482b2b3b918332"],["/mylibrary/css/round.css","5d420e535de5f043ae3b21e8a1ce7f89"],["/mylibrary/css/shake.css","b27a98e71fa2f6a57ddd1764f9af1f5b"],["/mylibrary/css/shiny.css","bc3c45927844602267b950217a53eef9"],["/mylibrary/index.html","d0da974d3d804eaba79a4b751c9c2f86"],["/mypage/css/style.css","7d93dbaa09c7fb2a9fff90b57dc16917"],["/mypage/font/LigatureSymbols-2.05.eot","5b46f67c079e0599f89aae807cdad560"],["/mypage/font/LigatureSymbols-2.05.svg","f4be952f02a00bd7b464568304b12842"],["/mypage/font/LigatureSymbols-2.05.ttf","48ae0b91a8d6e1feb2c15961a338dad8"],["/mypage/font/LigatureSymbols-2.05.woff","f974884f441019724c351f85478b3938"],["/mypage/font/README.html","620e02f5b23f13f4f9e5ec23040f76a6"],["/mypage/index.html","c2470bb63b4f9fb42a5a3a47b9bbb832"],["/page/10/index.html","e3ccff7ecb2ffcaea6681ec2a7b43c66"],["/page/11/index.html","1f38da30d225e440abacbf3d9bc7d473"],["/page/12/index.html","b81d3af01940758660ab02759fd365e2"],["/page/13/index.html","8c91e0fb9e9d4a373c3e2bbcd6c8b759"],["/page/2/index.html","341235105b2db484210a7fcd215128a9"],["/page/3/index.html","ff3f032f12b1e42f5dbba8a26f5acda8"],["/page/4/index.html","a8927a7695ca099e2cf2018d23c15296"],["/page/5/index.html","41ab8ce405eb93be6102ed639dbdb78f"],["/page/6/index.html","3dbc46469d6a2d0d907b62e6938816ab"],["/page/7/index.html","bcb4b0d0d59aff2db2506b5a98dd6bce"],["/page/8/index.html","deb9dd1b27b1e29659e0c625c2f4097c"],["/page/9/index.html","548c77d80abd11fcfe950376f12f4caf"],["/sw-register.js","a7139be363e00a25363e7077f66b4daa"],["/tags/ADC采样/index.html","bcd364d2bcb9649a1ea65279d4ec72cb"],["/tags/Block-NeRF/index.html","5e0c45629ae3a8bdbdd18e6b84333b6c"],["/tags/FPGA/index.html","e3e2ef1a25b6711604606bfa0d62d666"],["/tags/GPS/index.html","96cd6e9bb4ce11ceee2ed264f55f025e"],["/tags/HAL库/index.html","742dbb5674af56702c94413e617efbd9"],["/tags/H桥/index.html","ee1d20acd0fa84629f1b6e51c492e64e"],["/tags/JIIF/index.html","c374f6945fe6479d18580e9b76484bfe"],["/tags/OLED/index.html","658d0736716bf57ec99186e30765da19"],["/tags/Point-NeRF/index.html","8ee95468055b555b9268004cd99e30bf"],["/tags/USB/index.html","a92ab5d5b40bb736ecbf25b2e7489d64"],["/tags/V831/index.html","9c35c8d824a13eb423d376a8df6a8cfb"],["/tags/adb/index.html","271f8296fa4296f151ca4888475b2d95"],["/tags/amg8833/index.html","ef91f69fb743313de24566b80dad2c25"],["/tags/auto-js/index.html","b82bcbe8d296cf6415fe7fad6b1ff112"],["/tags/bard/index.html","771eae4b29d9b320e6b95f5b38c9fbdf"],["/tags/chatgpt/index.html","96b27b1dbcae846adfc39c0cffded44c"],["/tags/cmd/index.html","43fd373de1862d6eb900ed0e95bc33c8"],["/tags/conda/index.html","f518bde193407dd0df5c6c517107a729"],["/tags/css/index.html","9b88dd007fda70ba493c7e4226986f64"],["/tags/frontend/index.html","454078a7e869a2ece35bde445e1f8d98"],["/tags/git/index.html","5968ea812ffd8cfe82aca1ccf33dde0a"],["/tags/github/index.html","c7c9b24a75c8793b407bdf7d18092afd"],["/tags/hexo/index.html","b7bf6a6b3b342b2af942caef1364c78b"],["/tags/i2c/index.html","fbac2d6a01a8034d8766c04e2caa4057"],["/tags/index.html","83a401e6ed513d370556c45853a584a2"],["/tags/inte/index.html","a56fc8a377eb871193df0edbfc39a7d8"],["/tags/k210/index.html","26b01ea47a4d9cd5d09169949cbaf5d5"],["/tags/learning/index.html","b183c7aff250c87e82801870cdb2f0ce"],["/tags/library/index.html","a974fead173d6b99db5970c5890a92f3"],["/tags/library/page/2/index.html","e16e4d5ba8714ebab27772cd0ce3a508"],["/tags/library/page/3/index.html","02be3e0270462354e45cc07b1f7ef8b2"],["/tags/library/page/4/index.html","2040c800143728685a1b74ab074b21a6"],["/tags/library/page/5/index.html","6f5921844a0b099d669e273262d76dfc"],["/tags/library/page/6/index.html","90a277334f27c46a58e76cc25e085d6c"],["/tags/library/page/7/index.html","38d355650c671e061976131bddc55009"],["/tags/like/index.html","953cfb14e48529c2c6281b7dbdacca3a"],["/tags/linux/index.html","a843e3fd13c271ebca79913e5098e495"],["/tags/make/index.html","d6298d20e41de11ad577d33bc2df6583"],["/tags/matlab/index.html","d059e09d3307615b5a8a187f02a1c333"],["/tags/mine/index.html","0843d566223ae59483f88df94b67d5e2"],["/tags/modelsim/index.html","afdd53e05b43e8f59257664bb1791a1c"],["/tags/nerf/index.html","a713ba91345473296cadbc904ad06c27"],["/tags/nrf24l01/index.html","259607f371165d79c6dffbb5f635f505"],["/tags/nuitka/index.html","d2ad2455dc1d574fee6bca3b0dee832a"],["/tags/numpy/index.html","be80e2a610ce14d96ff28229aa409af5"],["/tags/onnx/index.html","7dac53ae9fb946d844d19de70b28ed83"],["/tags/pcb/index.html","0448a1446e550d401c8e28552cf73477"],["/tags/pip/index.html","db7adb8fbe7fdaeee9d5dee1f0119f12"],["/tags/psutil/index.html","4662656f372d6b2a4750d62addf9bf51"],["/tags/pyautogui/index.html","0fa25a1605d1a03698caa616c5866d52"],["/tags/pybluez/index.html","b5730cd120ebfcf7b7b51492126c37b4"],["/tags/pycharm/index.html","498ea611089e0ff0872afb245ab34f5e"],["/tags/pyinstaller/index.html","a3a3d199c6bb43251fa136e0a6d88ac9"],["/tags/pyqt/index.html","6659653901c8dc0526847eb42c742379"],["/tags/pyserial/index.html","0593bcd89a86bd1ff3cfc83a2b81a517"],["/tags/python/index.html","9aec49cd20b29bf68ac1a4cd0575f572"],["/tags/python/page/2/index.html","f4ac034e687d04865ef3d37d74daa55e"],["/tags/regedit/index.html","08998e0db94fe5f9a7dd663a48bcbf40"],["/tags/solved/index.html","08687c48906417c9d5d9c0ce833a20f6"],["/tags/solved/page/2/index.html","cd64dc65fd651b05f15d1b619a307022"],["/tags/spi通信/index.html","89664072f1fb80a84bbde163032b6c41"],["/tags/stm/index.html","bb8cb285f99e758f08cc8a1f971fe726"],["/tags/stm32cubemx/index.html","56bebd2505d433638281aaa11fdfa316"],["/tags/tensorboard/index.html","181c5b7229169276b1adccdd604afbf7"],["/tags/torch/index.html","bc6380ef023b22dea9e0ab573cb0db86"],["/tags/typora/index.html","a7279dec4ed646781b87823754e7f213"],["/tags/ubuntu/index.html","1385c28b5334b83ec6c368418b077d98"],["/tags/verilog/index.html","c84b9d905f7466b840e389c666a9e6e7"],["/tags/vue/index.html","114210102780f3c7a73935d083fde131"],["/tags/win32gui/index.html","f84473599122b5062ca43ec0fe3cf079"],["/tags/windows/index.html","9e8470ce169006e57e9f8a103c819166"],["/tags/work/index.html","f2024e7b293612dbf4378c0c78f6c2a8"],["/tags/work/page/2/index.html","2cdc9f141ce4d4fcce1948ebce39be2a"],["/tags/work/page/3/index.html","61f4c5b5d165645c6740f2438c3ceadb"],["/tags/下载视频/index.html","b7c82a58f0f627c94e9d14593ac9bde8"],["/tags/串口/index.html","329014c705925ab7b2dba1a0180350bb"],["/tags/代码/index.html","ca1bab0d432d8c8cdcfb9ee64d004eec"],["/tags/全志F1C200s/index.html","af6b8e273f43aeb533a0aba95fdd4cf4"],["/tags/公式/index.html","06f3bc3b539ed278964c7ee2605c347f"],["/tags/前端/index.html","4929213627df52ee71667db1cab2a266"],["/tags/博客/index.html","4b0acea341215f55ad9df2ba46ea61ec"],["/tags/国产/index.html","3fb8edb7c66efeecfdcd77cb155d956f"],["/tags/多光谱/index.html","8e601ca9e424807525af12a586bcc217"],["/tags/嵌入式/index.html","05ce762c276e9439bc43578ee677dff8"],["/tags/嵌入式/page/2/index.html","e3fa6759d9a4d6202372ca917a1602d7"],["/tags/嵌入式/page/3/index.html","d14585f7158fa039f4790f368694d5e9"],["/tags/嵌入式积累/index.html","0d412adda40761e3e080b9638c61353f"],["/tags/开关电源/index.html","7c7dbe668a1b15c2e1a3a21d1f3f4d11"],["/tags/开发板/index.html","bcb7bb8c4663317cd2a58b359d3aac99"],["/tags/忆阻器/index.html","877d3919188ecbe991a14e3ef1da2c7f"],["/tags/快捷键和常用指令/index.html","7e3bd41eded71b6a743b49d31ec1e5c3"],["/tags/手机/index.html","ea4a7bc6b89f5cb1d62f125732ef2a9e"],["/tags/打包/index.html","f4e935eeb37b60621ef2ba5fabbd56c5"],["/tags/控制/index.html","ac49a2e036befdbacd80722ba6166ab6"],["/tags/数学建模/index.html","87b8bdad73f94ca5a3c81afda3619057"],["/tags/数据处理/index.html","3977fae92958a001ab74e9a76664bf90"],["/tags/数码管/index.html","7977460b97b2f9344ed6406f70d35fd7"],["/tags/整数规划/index.html","0e36cd5417d3a4a23bbb61343558a2da"],["/tags/机器学习/index.html","f69afacf935e9a4203052cce66e92248"],["/tags/树莓派/index.html","eefba82be3d47b8c2ea39e79c26319a8"],["/tags/模块/index.html","1223c8855a4d7a35d8a7d370f39f5166"],["/tags/沁恒/index.html","21901128c87c0d57e49378b05c140893"],["/tags/测距/index.html","0f739cec04659ef3d329ffcbfb03396d"],["/tags/深度学习/index.html","0f734e5097b2aa8408c941940c1e6e26"],["/tags/深度学习工具/index.html","4cad3c777a8412c1fc6900cd85a1411a"],["/tags/滤波/index.html","e021ccc720929e9980fa0757b3329186"],["/tags/理工方向/index.html","af4f5f7578a6ece63bb8500d9ae5a8f8"],["/tags/电容触摸按键/index.html","4200da51f1f6f35de3ddd389e34e2700"],["/tags/硬件/index.html","ad8965b85c829727e94d4ceeb5d985d3"],["/tags/硬件知识/index.html","0b05be737feb761e1fc540e25f45efa3"],["/tags/积累/index.html","3edd328570d6bf2f21424fdf52554b6a"],["/tags/算法/index.html","4303dfb50a9db63f3d67afb251110c08"],["/tags/线性规划/index.html","f85c596abb2e5e387b8fefbe5d3cdef9"],["/tags/经验积累/index.html","97271119734c9f8b828464d54507640a"],["/tags/编码器/index.html","98002430072c4b6ad335da2cf3a84c59"],["/tags/网址整理/index.html","a89e5d9d1f1df7852596e426be394e6f"],["/tags/网盘/index.html","14985b0f1f79e0ed60429ba89261077e"],["/tags/航模/index.html","6af18ac7b547e2d1e755ae2fb5942ebc"],["/tags/芯片/index.html","dbcb4226c0fbd719c8689d6f38656838"],["/tags/蓝牙/index.html","413f07fc2506e34a0d0a147712175985"],["/tags/蜂鸣器/index.html","e5b0d7cdf3b50176fe94ec91edefec1d"],["/tags/论文搜集/index.html","534761372e04aa41ecf47c9c220ed662"],["/tags/语言/index.html","ad26c8b428f3e4378ea68e16fef59444"],["/tags/课内知识/index.html","dbd41da79c986b8228e7773488f219c9"],["/tags/贝叶斯/index.html","cb4afccd74e5ec197dc0e41bb91ca859"],["/tags/超声波/index.html","2e9747d99c7c0bc7a5b562f5de815b81"],["/tags/软件/index.html","676c650105d6088d4acbf86e1f495c88"],["/tags/选型/index.html","d5caf991016e0c2885e9efe131aafa01"],["/tags/通信/index.html","af2c0063a53a62cceabf139c22ea2df8"],["/tags/钢琴/index.html","7af694619036553fb59a0a18fdf3a037"],["/tags/键盘/index.html","e9877b2dafb6445e8893b85b4c96356b"],["/tags/陀螺仪/index.html","09669a2c5c9e38d3a0d388adff55956f"],["/tear/index.html","9ad95466b74d39b574b41733ff976750"],["/tear/index1.html","bc17ea9c018a31a77268867684344954"]];
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
