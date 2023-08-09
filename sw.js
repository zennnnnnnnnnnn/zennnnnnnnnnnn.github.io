/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/learning/开关电源/【开关电源】学习1——buck/1663506637120.png","8e50e1a9a14c0174f21513f95808f075"],["/2022/learning/开关电源/【开关电源】学习1——buck/index.html","ff1c091ee3686ae09b5fda45f8a3dac4"],["/2022/learning/开关电源/【开关电源】学习2——boost/index.html","32abb3df1604772e3729eeea8251c36a"],["/2022/learning/开关电源/【开关电源】学习3——VMC反馈/index.html","9e9fceb32ab044d65e2d4cd0e5d57398"],["/2022/learning/开关电源/【开关电源】学习3——buck-boost/index.html","7db23741030331b875359e990ad006fb"],["/2022/learning/开关电源/【开关电源】进阶1——稳定性判断/index.html","0121b12db80f050a061fdfeba061d2ac"],["/2022/learning/开关电源/【开关电源】选型和使用/index.html","6d1b9dfd26b06571924065806ae9c9e4"],["/2022/library/frontend/【hexo】博客部署/index.html","ac06ec89c4cb15a417a3038bbe0cc173"],["/2022/library/frontend/【markdown】编写文档/index.html","ec0aee5dba93d7619ee4c16ae52a9d63"],["/2022/library/frontend/【vue】搭建网页/index.html","fcf50f02648c1281017a44e324a33db0"],["/2022/library/inte/【css】学习/index.html","8dcc23bb7e1ea4743196e7d41efe9483"],["/2022/library/inte/【钢琴】织体类型/index.html","ba8e95511c0f60851d1af102d1c20e56"],["/2022/library/inte/网盘挂载Alist+RaiDrive/index.html","b6ec70a7e36433b1f7ae787fe877854d"],["/2022/library/math/线性规划和整数规划/index.html","520b2071c3bcc010469a46aa5f5bb3eb"],["/2022/library/python/【nuitka】打包python为exe/index.html","a9ba63ce6c7f9edc194c751784c8ab6d"],["/2022/library/python/【psutil】检测电脑网速等/index.html","6d66d55ebd79ceadc389215660be127c"],["/2022/library/python/【pybluez】python控制PC蓝牙/index.html","496478c106e6652e9a500656d4b65703"],["/2022/library/python/【pyinstaller】打包python为exe/index.html","f5927ea92926cd3b6234846b90054fcc"],["/2022/library/python/【pyqt】编写可视化界面/index.html","f4b79f349cacba67e91c356c7c8228b9"],["/2022/library/python/【win32gui】控制win系统/index.html","0f3ed68c01dfc90b1890d4e52d5dde88"],["/2022/library/python/数据处理/index.html","e7001439a36a3521b5ed6b5afee6a7c7"],["/2022/library/嵌入式/【git】学习/index.html","bbfb173991c82adda73946ab244bf547"],["/2022/library/嵌入式/【linux】常用指令/index.html","13f0f0263a4dd0972cd65424fe841559"],["/2022/library/嵌入式/模块/【模块】OLED/index.html","640660c5afaddcac7f14f1b7d47e5e27"],["/2022/library/嵌入式/模块/【模块】陀螺仪/index.html","8a3685555755e4e7a191dacc52dd8125"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/index.html","ba76dbe8b312fb3f7cd8c3689ba06b04"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/index.html","fff250590ea0e6b01fe63d103451733a"],["/2022/library/嵌入式/硬件/【硬件知识】芯片熟悉/index.html","a07b4a326cad75df822492fcfffae85b"],["/2022/library/嵌入式/硬件/【硬件知识】选型/index.html","0b31ab5b1180f355cf17ac3bb2de5945"],["/2022/library/嵌入式/积累/【嵌入式积累】阅读寄存器手册/index.html","c75d680c0f63cd71435a9b69796dfae9"],["/2022/library/嵌入式/算法/【控制算法】学习/index.html","290d7abe4d40ea8d1c9128eac24cdb40"],["/2022/library/嵌入式/算法/【滤波算法】学习/index.html","bcdf364ddb3bd4417c44811260ac268c"],["/2022/library/嵌入式/语言/【python】进阶总结/index.html","33b6ebc611d1bd99db2402dd77b0fa4a"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】i2c通信（mpu6050）/index.html","0287c537fb1fd22e37904595809325d8"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】pwm波/index.html","65e848d4b225ac4fab3776e26937cc73"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】spi通信（nrf24l01）/index.html","0efa8e2cebdababf562f1ce45e974e97"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】串口通信/index.html","4e7729b5f8b71854df341367e1efa53a"],["/2022/library/嵌入式/软件/开发板上手/【V831】开发板上手/index.html","e0659cec375c037ecf2750e1d635da08"],["/2022/library/嵌入式/软件/开发板上手/【k210】开发板上手/index.html","5c6ef94606067c1c61ef26b9aeee2ec6"],["/2022/library/快捷键和常用指令/【cmd】常用指令/index.html","bb0e8ee5854e7d58b3369ab48dd265ac"],["/2022/library/快捷键和常用指令/【pip】【conda】常用指令/index.html","847f81036b732559f79062b066b3ac24"],["/2022/library/快捷键和常用指令/【pycharm】快捷键/index.html","90e3480b4b40cde42d10e1ceff619336"],["/2022/library/快捷键和常用指令/【win】快捷键/index.html","67bd7a5cb781c410ecf8bc9642e3444f"],["/2022/library/快捷键和常用指令/免费下载视频/index.html","2971b0280ead7be5b28c9276ef4f65bc"],["/2022/library/深度学习/【深度学习】基础知识：×NN都有些啥/index.html","b828d50650a69b7f4202fd2f8dad9943"],["/2022/library/深度学习/代码/【numpy】语法基础/index.html","d21a97e481cb02b0540c722b1d2291d2"],["/2022/library/深度学习/代码/【torch】语法基础/index.html","bc6aa0d14ec88cf6a8c7e0dd03dd43bc"],["/2022/library/深度学习/工具/【深度学习工具】onnx学习/index.html","24e097f4974260808aef716f80edd77a"],["/2022/library/深度学习/工具/【深度学习工具】tensorboard学习/index.html","9f5d486db9459107ed69bf1b8b7246d3"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/index.html","f30881e765b9ac608c37aef713a6e8a0"],["/2022/library/经验积累/【经验积累】网址整理/index.html","4dca88dca2f506b0b1ff20e766d3225e"],["/2022/library/经验积累/【经验积累】论文搜集/index.html","2cf22a5242c6c5f5b21f96d49f2766d7"],["/2022/library/课内知识/【FPGA】仿真和烧录/index.html","490071b728f565ed2d23929bb6834a3f"],["/2022/library/课内知识/【matlab】学习/index.html","714065abad5824506b80203850d0880a"],["/2022/library/课内知识/【verilog】学习/index.html","3d0e070dbc52f4e53592c7447f2cd84f"],["/2022/library/课内知识/【常用数学公式】总结/index.html","0f05b0f28e6fcc96e65e7198573a19ce"],["/2022/others/Write-blog-using-markdown/index.html","dda555924ea498284015d1bf8590556d"],["/2022/others/古诗/古诗/index.html","206ce99f713ab35eb34b97f94a7c9009"],["/2022/others/能力年表/index.html","685f07a1096b1795ecaa453163e0fe3e"],["/2022/solved/github的github.io项目打不开/index.html","847cb97aedf0b6dea5084e61e27b16cd"],["/2022/solved/hexo部署报错spawn failed/index.html","0ac5d4f268532619e651eecf31c83583"],["/2022/solved/modelsim的-novopt优化相关报错/index.html","f5e03b05684864d09a58aca3de187748"],["/2022/solved/npm install 报错/index.html","6a79fe5945c34edb08038ab73569155c"],["/2022/solved/pycharm修改快捷键/index.html","d85e15c7c68aa1470822c3a1efafc769"],["/2022/solved/pycharm内无法打开cmd/index.html","3831624403d9a686720ddce6920cf7e8"],["/2022/solved/从regedit改变键盘映射关系/index.html","c487e0aaf3688deb52d5c3eeee0ebf71"],["/2022/solved/右键新建菜单管理/index.html","59c41b0873504a044c7b998307708b99"],["/2022/solved/执行make menuconfig时报错/index.html","cc24dd992939a7c563f87fd8432d77bf"],["/2022/solved/报错binsh 1 bc not found/index.html","d67e525fdcfb0b42f6d9d7ce88d8b80d"],["/2022/solved/报错binsh 1 cc not found/index.html","637bb4afcb2251f1d0e51472bf0306e1"],["/2022/solved/报错binsh python not found/index.html","fde2300da42fb9c17c35206b6236fc68"],["/2022/solved/未整理/index.html","2aca39599f448fde90120ce1544a52d7"],["/2022/solved/树莓派域名解析暂时失败/index.html","49dabd02afe06995112d660f9ef3ca52"],["/2022/solved/树莓派配置python环境/index.html","f18a04e59f5f5b8ec2a48d3f2f8ffc3f"],["/2022/solved/设置软件开机自启动/index.html","94864f4965e138482a92492c0927324d"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118074452.png","221e63aa60efa77dca50740ce9b88380"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118457009.png","5c1577c940dd443631045f45787e487d"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667226872521.png","ec7a6051752cb193ae983fb81d135fce"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667264387582.png","57b13f83c9dfd506e6ccb81743f74963"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667265226170.png","600b87f6ea78e46e19929200a8190875"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667292838757.png","f9c6a5975d54d8b975e9de23dc891c00"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667293450480.png","57c9efd9a2a4ae995517991ff7abdf32"],["/2022/work/nerf/【nerf】Block-NeRF笔记/index.html","de5d66a77b64a239edaa87eeb26dbb2e"],["/2022/work/nerf/【nerf】Point-NeRF笔记/index.html","8618f07034238f53e4414cd48e342266"],["/2022/work/nerf/【nerf】nerf-pytorch/index.html","0aa40970e9b3539171e0aaa6b5059eb9"],["/2022/work/nerf/【nerf】汇总笔记/index.html","d3a506cedb08fcc05deecff4dbf345a1"],["/2022/work/nerf/【nerf】记录/index.html","239b3b1acb65dd651b88d1e2044a3c2f"],["/2022/work/前端/【前端】记录/index.html","7846da6d5a4ec5306b64bdcf2d23e31c"],["/2022/work/前端/【博客】记录/index.html","4da029eacc468335b9bf098ce4d7bf5e"],["/2022/work/嵌入式项目/bard/【bard】Linux迷你电脑/index.html","6e19b73917934144945ceb4ec34fcadb"],["/2022/work/嵌入式项目/【祖传板子】记录/index.html","df88c95f3b07db62a7a5f8f0a4633dd2"],["/2022/work/嵌入式项目/【航模】记录/index.html","5b995adb7ee43b25411f65af278f5167"],["/2022/work/忆阻器/【忆阻器】记录/index.html","d7d837d419e85b135dd9a1f4b749b429"],["/2022/一下都是0/index.html","ed6e64368bd60d74f756f96d54ed7b16"],["/2023/learning/开关电源/【开关电源】理解/1663634083260.png","7b1a889ee96c83e170023666681c9131"],["/2023/learning/开关电源/【开关电源】理解/index.html","fbc01f3045e0d0b703791be5dba47019"],["/2023/library/frontend/【adb】电脑连接控制手机/index.html","02726af27273a245b23bfc19ac36860b"],["/2023/library/frontend/【app inventor】拖动滑块写手机app/index.html","3458d6369886990fca4aa0ea5f52f364"],["/2023/library/frontend/【auto.js】手机自动化控制/index.html","f8399cca3a52b76498923eea2a3f5022"],["/2023/library/inte/windows的linux子系统wsl/index.html","241c7fa92f134d8e34ed1f510f252851"],["/2023/library/inte/【latex】学习/index.html","cdf2422f14b4751a1965526656fa0d7b"],["/2023/library/math/【math】高斯积分(Gaussian Quadrature)/index.html","255798b4b712467e25ca71b4b023f329"],["/2023/library/python/【pyautogui】控制键鼠/index.html","146f78553f636acd83c45e3d3fa85e97"],["/2023/library/python/【pyserial】读取串口/index.html","69c976c908d4321d7e7e6b6130492a54"],["/2023/library/python/【python】基础语法/index.html","a896855487fd92c602c709a5c9d89fa5"],["/2023/library/python/【python】有趣外部库/index.html","6cf50084f47307c2495f9d72f92e6d1a"],["/2023/library/python/【python基础】常用内部库/index.html","fd621fc99ba421ad9e336ab6dc972060"],["/2023/library/python/【python基础】常用外部库/index.html","5f714335391f2ff78d977d758be07fc4"],["/2023/library/python/【python基础】有趣外部库1——/index.html","eff65ffec86638c6af841802ec935bb2"],["/2023/library/python/【python基础】有趣外部库2——游戏/index.html","caf0b96aed9daad94c54819450ab9b07"],["/2023/library/python/【python基础】机器学习库/index.html","e2dc70c394a41403a51c4965f18b2be9"],["/2023/library/python/【python常用】常用库的pip安装/index.html","b1fec9a0614312fdc27d11d1009b680e"],["/2023/library/嵌入式/模块/【模块】GPS模块/index.html","fa902b20306f97d7c07a2b751728bde9"],["/2023/library/嵌入式/模块/【模块】amg8833/index.html","203a0bfd3750e733395f91e1ceaec4a2"],["/2023/library/嵌入式/模块/【模块】as5600/index.html","ce514ae97bd6032d24d9328beff70b7c"],["/2023/library/嵌入式/模块/【模块】数码管/index.html","7787ad223106517c1786e5b23b04a59e"],["/2023/library/嵌入式/模块/【模块】电容触摸按键/index.html","88ca6eb40cbe94f1299b8483a3f00375"],["/2023/library/嵌入式/模块/【模块】蓝牙/index.html","331861ab5fd13ad4dd43804a176d185e"],["/2023/library/嵌入式/模块/【模块】蜂鸣器/index.html","3053b8fb01a0b544535c2fcaa750975a"],["/2023/library/嵌入式/模块/【模块】超声波测距/index.html","09644b917a045cf41c320d0d066a6422"],["/2023/library/嵌入式/硬件/【硬件知识】三极管/index.html","02819b8bc9dc0031821ae89344220089"],["/2023/library/嵌入式/硬件/【硬件知识】运放运算电路/index.html","f6ad1f547f9cacce6a619fed4db1d317"],["/2023/library/嵌入式/积累/【嵌入式积累】常用官网/index.html","5ef91e74bf5d3fe3fccd0a8fbb001ec1"],["/2023/library/嵌入式/积累/【嵌入式积累】控制入门/index.html","45f68a6c12c58187e7b17c1dab2f450b"],["/2023/library/嵌入式/软件/【HAL库】笔记/【HAL库】ADC采样/index.html","d271dde48b3eb897acb8526b680573e2"],["/2023/library/嵌入式/软件/【HAL库】笔记/【HAL库】USB/index.html","b0fa6a57bdf286b220b1b4a5c67b4c5d"],["/2023/little/name/index.html","f3af34e632f6bee740e14ebf6d81a691"],["/2023/little/留学小记/index.html","056a18ab725cea1565f11165a2609a4e"],["/2023/others/chatgpt/index.html","f40cfd460c66b76d533a6ab692bb6258"],["/2023/solved/chatgpt您所在的地区无法访问/index.html","5d355f6d5c28d70995a783e0ac87878c"],["/2023/solved/环境变量配置理解/index.html","f98b948f7c3933a810bb48087e6d226b"],["/2023/work/JIIF/【JIIF】多光谱融合/index.html","7e360de5f5a49bc503479e017424b52c"],["/2023/work/mine/电脑外接摇杆/index.html","61d4b3f23a1a3a878b94edb24fe3288a"],["/2023/work/nerf/【nerf】最新阅读记录/index.html","fbe9f0880af19b3b4acb1abf663cdb55"],["/2023/work/python/游戏AI/index.html","0cb13911c74946ba6fa7ad87211688f5"],["/2023/work/python/窗口互联游戏/index.html","201db192e753dc8bfa63fcd951f80bf0"],["/2023/work/python/网速显示助手/index.html","c1e5ab57cbb7f2cf3ba9e8c3a54f9759"],["/2023/work/python/羊了个羊自动化/index.html","a1875c562ff703b84239255af074e121"],["/2023/work/python/蓝牙调试助手/index.html","cd540b77f79fa2c0f2bc6486dfbd84cf"],["/2023/work/嵌入式项目/【加热台】记录/index.html","3347d9acc160322f9fcb0152259cc6af"],["/2023/work/嵌入式项目/【四旋翼飞行器】记录/index.html","470736f6369fb614971021d27cd8705a"],["/2023/work/嵌入式项目/【沁恒】样品试用/index.html","6ad1e7149c8724518fc660986d113513"],["/2023/work/嵌入式项目/【生日贺卡板】记录/index.html","1d88a8b08061ebfa591281495decbcf1"],["/2023/work/嵌入式项目/【自制无刷电调】原理/index.html","4f851a30548335acb869ea9f62acc106"],["/2023/work/忆阻器/【忆阻器】python平衡车/index.html","6da9f16c5899647dc25c3d2fd615566b"],["/2023/work/忆阻器/【忆阻器】算法部分/index.html","8497916e437a783d398b8fbc8636330c"],["/2023/work/玩别人的开源项目/chatgpt微信机器人/index.html","1a753a28e630ee07f50f5b76a80a6b26"],["/2023/work/玩别人的开源项目/大一尝试过的开源项目/index.html","1ee33ee26a593e6e39d04ba88ce60cf4"],["/about/index.html","a43163093351ed409ef3cd693c5b2501"],["/archives/2022/09/index.html","2c465848c2215044ccb1033397cad4a8"],["/archives/2022/09/page/2/index.html","b2d9539d18eef843e6b054568a7c5045"],["/archives/2022/10/index.html","6a545f50867cbd21e7bafe58e52c510f"],["/archives/2022/10/page/2/index.html","5ecd75d24a724d8082e547eae7801579"],["/archives/2022/11/index.html","5c46bca14e2ef436b02bfad96e35a866"],["/archives/2022/11/page/2/index.html","5c8dd917f82300b1740d4ce8c7003821"],["/archives/2022/12/index.html","337e6d69597e2d7b3e09b6b155ea7599"],["/archives/2022/12/page/2/index.html","9d4768abd62707f46914442835a772ce"],["/archives/2022/12/page/3/index.html","5b54b72bbe061442e4cb4edbbf1da6f7"],["/archives/2022/12/page/4/index.html","67a484b5f80681f28afb55abfd9e0a94"],["/archives/2022/index.html","e29b5e81edd726f720a1fcef53db37d0"],["/archives/2022/page/2/index.html","e7136fd8f5692955ed0ebfd3b769207e"],["/archives/2022/page/3/index.html","48736231d3d22325f2d8f90aeddab8da"],["/archives/2022/page/4/index.html","990242aeb6aa704c2e593a313e47d079"],["/archives/2022/page/5/index.html","2fd6c0bed4b0e8a659541d6b7b403d10"],["/archives/2022/page/6/index.html","938296153204b85c11d9ab521590cf56"],["/archives/2022/page/7/index.html","4d2554f3e49d6dcb29d67fa588643fc1"],["/archives/2022/page/8/index.html","10162a46e6664aaac4068b937c927c3a"],["/archives/2022/page/9/index.html","61a1a3ebd2336e535ef951b75575a5b4"],["/archives/2023/01/index.html","8cd1df20f76eeb179d774159eb09969f"],["/archives/2023/01/page/2/index.html","36a38d6faf1d244d38304252f99a6b4e"],["/archives/2023/01/page/3/index.html","637322b100d4e797561fba3656972ef9"],["/archives/2023/01/page/4/index.html","c157c97ae4fdd413c5639afe63cb28e3"],["/archives/2023/02/index.html","8a8c35155c486cddf50cd1fd778cf212"],["/archives/2023/03/index.html","15a367e093fb990001a647f98245a03f"],["/archives/2023/04/index.html","d21fa331f63c8d782151ebb088acaef2"],["/archives/2023/05/index.html","7c0c90b6f8ad9d1222bebe9243b8c175"],["/archives/2023/06/index.html","0b4cfcd64fda9f60b5da29c46e2b8317"],["/archives/2023/07/index.html","ae01a13627ec41b73fb91e9b946c7ab6"],["/archives/2023/08/index.html","a8629eee283ece636be1d26be1040f38"],["/archives/2023/index.html","8bc87a992847b5006b8cf799b976ce61"],["/archives/2023/page/2/index.html","7975c3a660154635b8b19a19fcdba059"],["/archives/2023/page/3/index.html","1059095f16ae561ecded7c2b92deadae"],["/archives/2023/page/4/index.html","cc7bd45d1fb3422cd5e6547aa5e82121"],["/archives/2023/page/5/index.html","e133458ff8fce2433742e4420bb6064a"],["/archives/2023/page/6/index.html","2b3013268db9300bbcf19669f157cfec"],["/archives/index.html","a2861a083c96eb3b903dd57757ce68ca"],["/archives/page/10/index.html","260e9ea711a6f7248ae0d14169d93869"],["/archives/page/11/index.html","c00003b460f571c98b26a1af3cb82f48"],["/archives/page/12/index.html","312ff30ef4685b01fdb599e9c4b3c373"],["/archives/page/13/index.html","7a5f90b154894af04d1d724f21e984fc"],["/archives/page/14/index.html","91dc0f6c02e852406e2b4bdf29cd760c"],["/archives/page/2/index.html","7b91a49c017fa9985047166151bd0dad"],["/archives/page/3/index.html","0def66815ccdae56fcf12e5ed8026188"],["/archives/page/4/index.html","d676593c0a307f9884a68bb9e754d453"],["/archives/page/5/index.html","6d81037a6bbd0ef1d91a18974b3d5c6c"],["/archives/page/6/index.html","0b04302284b4f91252700291f5467309"],["/archives/page/7/index.html","ab924765ab3dbfdd109727daace7b0ec"],["/archives/page/8/index.html","5a1585455201d665339375b0e4d66cc8"],["/archives/page/9/index.html","e4a79dc425ab92ae3b24019df7745c43"],["/baidu_verify_code-ZFSCabM1PJ.html","3ff67b28bb3876c953845fd4f8719b41"],["/css/main.css","e11ba3282c6ec5c3d5f79b609f3c1354"],["/css/spoiler.css","eb373af0627ede298867ffc0045da62e"],["/failed/【硬件知识】vco压控振荡器.html","e3f83d3d65a2f29959e19dba19df0b45"],["/failed/【硬件知识】vco压控振荡器/1665803607390.png","3df26768c0d97b3acbb64c7f4738f15c"],["/failed/【硬件知识】vco压控振荡器/1665803663941.png","38d29c573fc0aab159543ee6f3d6b31d"],["/failed/【硬件知识】vco压控振荡器/1665803862765.png","f7e2165483ca1f224fc47019c9d85839"],["/failed/【硬件知识】vco压控振荡器/1665803865723.png","3da7b08b88d8795e53d03a47e1926277"],["/failed/【硬件知识】vco压控振荡器/1665803871404.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/1665803883747.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/clip_image001.gif","ba898c600ecfdb213d2223a0f783c808"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803844893.gif","fb05fad8f7ca3e4d9e40000a9ab1dc09"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803856973.gif","e1a4cd1747beecc7d92124979531824c"],["/failed/【硬件知识】vco压控振荡器/clip_image002.gif","0c0f42f02d474126082016d250804bc4"],["/failed/【硬件知识】vco压控振荡器/clip_image003.gif","1f489bb3e02d4993cdd501f7ec773812"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803844893.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803856973.gif","09cde39109369f9185d1cf128c6d7c2d"],["/failed/【硬件知识】vco压控振荡器/clip_image004.gif","32873c471ff1058abf9d6d09ca5e45f0"],["/failed/【硬件知识】vco压控振荡器/clip_image005.jpg","ea2dddfe9b1da4f406ee36b37c99e72e"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803844893.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803856973.gif","b0138096b0fc7682435ad07aeaf159ce"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803982819.gif","6540947f9843ab822d3e8eeb7ef621e6"],["/failed/【硬件知识】vco压控振荡器/clip_image006.gif","6290aa2f8360b2a4f05e4c09e4d6bc80"],["/failed/【硬件知识】vco压控振荡器/clip_image008-1665803856973.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image008.gif","113b77d852979982495a775ea4d973d1"],["/failed/【硬件知识】vco压控振荡器/clip_image008.jpg","aad87f9838e93808a0caed1ece93ffac"],["/failed/【硬件知识】vco压控振荡器/clip_image009.gif","fd6cf84a1333733613c80d5599c0fbdb"],["/failed/【硬件知识】vco压控振荡器/clip_image010.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image011.jpg","fa6d15386072d8a691d18f9c3a53b426"],["/failed/【硬件知识】vco压控振荡器/clip_image013.jpg","cea0cb9334e0d5f1b84beb2fcd8b1245"],["/failed/【硬件知识】vco压控振荡器/clip_image015.jpg","660345ebf2132d1bcdd9a7455529093a"],["/failed/【硬件知识】vco压控振荡器/clip_image017.jpg","29517d76c214adc17343771d2d804679"],["/google41a28d5f2878fa02.html","9576fa3dfcae0aaafdc44db1f922c47c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/tou.png","578463708d7de56a1c4e6331831b3e2e"],["/index.html","cfe668e3f442e04d0aca0b5edf0ce1b6"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/code-unfold.js","e079f1fdb88a9edcd745220494218e88"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","97606f901b6e488587ad5c49aa367604"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mylibrary/css/float.css","77ed5a80eff50692ff1cfe2f2e3f0fe6"],["/mylibrary/css/hide.css","7b543f7fa9b50e29223df8c92ce8e847"],["/mylibrary/css/load.css","e1836d05708536b00264f3bce8b2a6dd"],["/mylibrary/css/neon.css","63d532d8a2f54930d9f881210f724323"],["/mylibrary/css/round.css","0a6b0e9c409e270014213fd2245a2dac"],["/mylibrary/css/shake.css","1c5433c26bd98e17690c623f04d44c58"],["/mylibrary/css/shiny.css","400168c9850e6d2461a05c9885161738"],["/mylibrary/index.html","3ef6a5e9b12f4bc8b7acc002301eb600"],["/mypage/css/style.css","431e2c8e3f90ee44a234d444bf659b1c"],["/mypage/font/LigatureSymbols-2.05.eot","5b46f67c079e0599f89aae807cdad560"],["/mypage/font/LigatureSymbols-2.05.svg","f4be952f02a00bd7b464568304b12842"],["/mypage/font/LigatureSymbols-2.05.ttf","48ae0b91a8d6e1feb2c15961a338dad8"],["/mypage/font/LigatureSymbols-2.05.woff","f974884f441019724c351f85478b3938"],["/mypage/font/README.html","bba1656a7c4605e4fe7fe52f879472a2"],["/mypage/index.html","3a72cb50e40447bc7b7af5773f358ccd"],["/page/10/index.html","b06df3d9ab9689d50951a1a1e4223966"],["/page/11/index.html","f2d61926886c46a1b83850394942dffa"],["/page/12/index.html","9602073e3221c809eba2c0d31249e749"],["/page/13/index.html","4d493d6d3802469ddeb26ce3a5e048f2"],["/page/14/index.html","88abc785b4f002fc804c1215d247ca75"],["/page/2/index.html","7ac7ee4feb899c250dc4e41687ff704a"],["/page/3/index.html","b860bf11b5ddb580aa229b1b8bb8fc02"],["/page/4/index.html","98b8467462fcadefe29d6e09ac1e0b9d"],["/page/5/index.html","aa4be23faad390cbb2ab32e87d7a2d67"],["/page/6/index.html","3eb41433dd80740083875129f9f29134"],["/page/7/index.html","8b0686afcb9129fe50bc5a4df1d1fc09"],["/page/8/index.html","36bb1948dbdcf2adcbdd86426550341d"],["/page/9/index.html","086be3b281cd1e366927afafae4cb473"],["/sw-register.js","b74127d6b7a5ec4fbb693de006484ebe"],["/tags/ADC采样/index.html","1847fac3c76ac2e9202b9f8153bf2c9f"],["/tags/Block-NeRF/index.html","5801f7cee626157f236d85617a3ee283"],["/tags/FPGA/index.html","db530bd4ad1c90ce4f698cd35c058469"],["/tags/GPS/index.html","ae7bf28aa8a48498143b55a53d4f7760"],["/tags/HAL库/index.html","ed644904a95bb00e028bcdddd22c1c1f"],["/tags/H桥/index.html","60719b681928a387505d4f4ae2fed83f"],["/tags/JIIF/index.html","ff1b9a303bcccb610ceb13c3842255f2"],["/tags/OLED/index.html","bffe7c3a415b195b49ef95b349d560a3"],["/tags/Point-NeRF/index.html","0f054e3f90e62b01c274a6727ef60723"],["/tags/USB/index.html","90ab97eb006e4e5dee146a530b678522"],["/tags/V831/index.html","066825b4e009def0d7da9421e2c10feb"],["/tags/adb/index.html","671fd04ba66b2929579f97ed7b86f3b0"],["/tags/amg8833/index.html","c681b3011b910dedae2b940f13194c5b"],["/tags/auto-js/index.html","c3a32344d15f302575a622ac921290e3"],["/tags/bard/index.html","f4fe08d18decac72bf79a1d90d90ec11"],["/tags/chatgpt/index.html","e1ba4eba05adb2d31792dc86da5bbc58"],["/tags/cmd/index.html","294a73450149b5e644d8fa3da2735cdf"],["/tags/conda/index.html","8f39006f8bdf9e062bf5919576242169"],["/tags/css/index.html","7280e9c421a5204e41981770ae237f7a"],["/tags/frontend/index.html","4c2a7bfae91f33e4cbc851c1bf2ce846"],["/tags/git/index.html","a399793f6806ffbb290935bc9d07e1db"],["/tags/github/index.html","fdbd139e79ba03d50891771894cf43d2"],["/tags/hexo/index.html","ad9849ec4acd873e6d9a2b4596b7ed2f"],["/tags/i2c/index.html","808fc6fbabacffb91c2fba9309e299db"],["/tags/index.html","59a6b1c7b8ba87ff17734264ba281b2a"],["/tags/inte/index.html","e5fff9430cdb3cb679a3bcfce990db42"],["/tags/k210/index.html","c711196c3a7179433f91ca89c666f357"],["/tags/learning/index.html","0823cd413f468bc527476e2e7ed50e1b"],["/tags/library/index.html","ef91eaf8d1c9cd2e8d52f151af85889f"],["/tags/library/page/2/index.html","e8cbdc916be2ac42a7942227f52bf93c"],["/tags/library/page/3/index.html","cbce210b53f346a724538653b10a1797"],["/tags/library/page/4/index.html","1afa9c1b1de60f41672cadbddae05edf"],["/tags/library/page/5/index.html","1541f6fbfadb7aeffe7b966e60b24dec"],["/tags/library/page/6/index.html","422f4e1367a5491d3f256be25047b69d"],["/tags/library/page/7/index.html","539ce0702aacb3e768ffcff198b94b73"],["/tags/library/page/8/index.html","99ef10a77840364d7f879ec9ea420269"],["/tags/like/index.html","218a57dd2f1c18d0ef48cc41b15f8041"],["/tags/linux/index.html","2053be88a7c1fb8cb3a4dde14e906366"],["/tags/little/index.html","b8d9c955a4bbdc3ca1f15e2470c0e67e"],["/tags/make/index.html","0deee40d4852e5d8624fc301127ea859"],["/tags/math/index.html","2114bc478d7253ee687304803f14de4a"],["/tags/matlab/index.html","3ca15a55d56f99f4767155925bddcf7f"],["/tags/mine/index.html","33442362baf6ed56b8768fc6c4cacd5e"],["/tags/modelsim/index.html","91b8239859f5711b48b58aae23ee2947"],["/tags/nerf/index.html","cbf76d9294c422d5f5762b42d32355f3"],["/tags/nrf24l01/index.html","e9063d6aad2b7ee9ff4c122c7959bc52"],["/tags/nuitka/index.html","b94118956236bd28c471f33d7026051b"],["/tags/numpy/index.html","bcb93c4e2f7274a245622ef943e66ed8"],["/tags/onnx/index.html","7b97b147e0174d0e74df97d9772c6898"],["/tags/pcb/index.html","0e2b19d5dce10495dfaf2e075b5a0c7d"],["/tags/pip/index.html","64be4a91b2f14bd559329a80a4a69553"],["/tags/psutil/index.html","1e181bd2ef8f7185592c2d575705fcd4"],["/tags/pyautogui/index.html","3f251227c31d3dbcd334d280ff33b725"],["/tags/pybluez/index.html","9d12adcbfe961979d33dcb5add201665"],["/tags/pycharm/index.html","e4b66a260bf9507ac85952077825e42a"],["/tags/pyinstaller/index.html","2efcba8bc92b02091d01b6641b793f9e"],["/tags/pyqt/index.html","7b30e151655197e79e6635246de2b71e"],["/tags/pyserial/index.html","eff1c83ca0f8b0f74c43cc4f8f8f4eb8"],["/tags/python/index.html","54f1ff9e7b9c892e7b9a6db5ae202b2f"],["/tags/python/page/2/index.html","7c2baf376b40d57ee0e3bb8e1d8b6e27"],["/tags/python/page/3/index.html","127a438b09586a1336ec65a7576271e2"],["/tags/regedit/index.html","01a6569323bb4dcedf6558ca6bb25489"],["/tags/solved/index.html","4bafc234923b6a7be2534df90badd543"],["/tags/solved/page/2/index.html","d47ed0ab0becd757b3f10538ece6edc2"],["/tags/spi通信/index.html","3e01614a2315debf8310c87d086e5fe5"],["/tags/stm/index.html","2c0f1ea151afd6bbe65b69953828283f"],["/tags/stm32cubemx/index.html","b386d9fd3a43b7425a2bd2d7e3aa8c7f"],["/tags/tensorboard/index.html","c45ba85155168ef57f29b50b46e149c5"],["/tags/torch/index.html","a34ee292d0852a78af07e29786d01f3f"],["/tags/typora/index.html","b054aa1181d2e4c6dd42c5e617cc42ed"],["/tags/ubuntu/index.html","47683353d40821a67625d4e9132a7af5"],["/tags/verilog/index.html","d21b9ac6ad4114fdf419c8cbf6ac6946"],["/tags/vue/index.html","0df47d5db05d8cd3c05c2e67b4e9868d"],["/tags/win32gui/index.html","07bb9d1ddc66510c7a39ff10a6a4ba48"],["/tags/windows/index.html","e65ca95390c349f5f12e5e43b141cbd7"],["/tags/work/index.html","d422c908370155b1e493701de418669f"],["/tags/work/page/2/index.html","7db48b60579ad52494a06a52626118f6"],["/tags/work/page/3/index.html","aa2f5248403d52763baada362ba0a649"],["/tags/work/page/4/index.html","18e1a0f216250070649d4a4c5b3b4c70"],["/tags/下载视频/index.html","f3ba64d4e19e04f794ba808c69b1c7ac"],["/tags/串口/index.html","8c1234bf268f8fe1116d0d6821d4f08a"],["/tags/代码/index.html","62ff0c5eae07bbdf33cfa2cec22643e9"],["/tags/全志F1C200s/index.html","0b0819dde73d863ddc26f902fef147dc"],["/tags/公式/index.html","fe90b853b92d112cae154de7aad71048"],["/tags/前端/index.html","aea1dbe4acd9c9ff67e87b29d82489b4"],["/tags/博客/index.html","5a82808797ea781fa7cbdf44a3c2b676"],["/tags/国产/index.html","ed0ccc463ffb7c6428252af5a1ce71de"],["/tags/多光谱/index.html","2e588040f0412da8b10828850cc701b6"],["/tags/嵌入式/index.html","a88abea7f5355dd9db8310acbad9fe92"],["/tags/嵌入式/page/2/index.html","eb3e902e9b532a96d25f4a10de5a39e0"],["/tags/嵌入式/page/3/index.html","63531c83a6e4015227bf433927c45c68"],["/tags/嵌入式/page/4/index.html","84ae371ff1655a9d9730740edfe40faf"],["/tags/嵌入式积累/index.html","f5bd34d67cd6345a4712d1700f19da93"],["/tags/开关电源/index.html","441dc3bb7f69cae3cd6ff054f3532af9"],["/tags/开发板/index.html","0d64cf211ea9f45c5c3d84c0edfa304d"],["/tags/开源/index.html","cfefa64a7fc883b8f052cd9112e0cc16"],["/tags/忆阻器/index.html","8012e9f12cf664f043e9d589cabe9f77"],["/tags/快捷键和常用指令/index.html","2de0e7255def0f0f99cbdf74955ad20d"],["/tags/手机/index.html","8e9369ff786bb6c55d70b057c7453034"],["/tags/打包/index.html","4e0a437baf78abe27472c5e4b05c8833"],["/tags/控制/index.html","73fceb283bd099f999039428c6e8b0c9"],["/tags/数学建模/index.html","38351639d25762c0fb4c70ecf12ffccf"],["/tags/数据处理/index.html","e1a4ffa81a93006949bc1a16809619dd"],["/tags/数码管/index.html","109e01f3714b5daf0de4725e52c8ce59"],["/tags/整数规划/index.html","f71187ce3e0929a1fe248863d3ee00f0"],["/tags/新加坡/index.html","24ac7641abc8142a93b114652aff274d"],["/tags/机器学习/index.html","9537865c20cd0d0006122c0072a91b1f"],["/tags/树莓派/index.html","a85173c45e7eca3ebe8fedadf84d6fcd"],["/tags/模块/index.html","ca84ce89343bf528eaa5094a519a34c7"],["/tags/沁恒/index.html","baec725627409d64ebd79b03aa6aee2f"],["/tags/测距/index.html","8d26168d8a6e8a4c877f476a8eb3978c"],["/tags/深度学习/index.html","f16ed2001a888eab62314d36baed3b09"],["/tags/深度学习工具/index.html","436dcffef66a485ca581cbaf1b2c695c"],["/tags/游戏/index.html","d9754a4e95793b9e75d6f58bceadd978"],["/tags/滤波/index.html","3d8a5eebe286e42380a8e8b4100d871d"],["/tags/理工方向/index.html","c05b609b0109717d91ff3769efd6c3eb"],["/tags/电容触摸按键/index.html","b4662f6ee49b2873dd8d54df18a2577a"],["/tags/硬件/index.html","57d2f51aad901180930de2d32b952a51"],["/tags/硬件知识/index.html","cb593219a1ea5d1bef574763f575b6d1"],["/tags/积累/index.html","e3721ab2670ab8ffd74ef98539567346"],["/tags/算法/index.html","68cbcb630f4e86cfeedfc3e51fdbdf07"],["/tags/线性规划/index.html","d4189881a2245c746cb1c83395b75cf0"],["/tags/经验积累/index.html","f34ca95e3a43aa1dc28adf31a4c707b4"],["/tags/编码器/index.html","b26ded63eac0888ca4b87f05c7a64b06"],["/tags/网址整理/index.html","a03225e44e5998501683a241000702cd"],["/tags/航模/index.html","4b35552da8edc93c547937fa973640db"],["/tags/芯片/index.html","e29e05e90ef9ae345f5ff4defcfaff46"],["/tags/蓝牙/index.html","ad9a28d6021f8eb760bc1590ed1702b9"],["/tags/蜂鸣器/index.html","27db497b8c631635f6b2633ea30e9f4c"],["/tags/论文搜集/index.html","1908d2b93a6effe4fdf70c193dcddaab"],["/tags/语言/index.html","c838a07aefcb14dee717229423167208"],["/tags/课内知识/index.html","67e2f1cead23b8741793f403e9190c53"],["/tags/贝叶斯/index.html","f70e8c4b39843dfeb254df0334199166"],["/tags/超声波/index.html","f39c81ba0e4a6858bb312b5a58d16dae"],["/tags/软件/index.html","f991c722fcca6d7461e5b953ff06ff7d"],["/tags/运放/index.html","0ba099b9136a7d8284b813fcd3a82330"],["/tags/选型/index.html","16512e90dc187600c6a9b554abc965b3"],["/tags/通信/index.html","f5750cc16f5079020a8695f5d6e77060"],["/tags/钢琴/index.html","144f3b0c789c4b2efd21659f6f92de29"],["/tags/键盘/index.html","19e6264b89fd647cf4b22118e88616d3"],["/tags/陀螺仪/index.html","25eb32cd2a71f61c0b32037227f15d2e"],["/tear/index.html","a074dcd4c001273e4d0960502b76a2cd"],["/tear/index1.html","d44fb73d0c744fb2dcc4333ee710c81b"]];
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
