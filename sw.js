/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/learning/开关电源/【开关电源】学习1——buck/1663506637120.png","8e50e1a9a14c0174f21513f95808f075"],["/2022/learning/开关电源/【开关电源】学习1——buck/index.html","f0e7ab8aaeb725baad832107e1db33fc"],["/2022/learning/开关电源/【开关电源】学习2——boost/index.html","364884a2ace389d8c74064621b08157e"],["/2022/learning/开关电源/【开关电源】学习3——VMC反馈/index.html","e229778a279d131d62174021bfb08528"],["/2022/learning/开关电源/【开关电源】学习3——buck-boost/index.html","1b8e209378e8c9cdd9833e47fe0fa05c"],["/2022/learning/开关电源/【开关电源】进阶1——稳定性判断/index.html","b48d29675bf819deb9c15c7642b85644"],["/2022/learning/开关电源/【开关电源】选型和使用/index.html","bd8db38cda83c5d2fe6ea1d8ef87e0d7"],["/2022/library/frontend/【hexo】博客部署/index.html","ee7c0a8f85feb6869d458737e52d06e0"],["/2022/library/frontend/【markdown】编写文档/index.html","b89365b1a6e547a50a11b33353c3dc05"],["/2022/library/frontend/【vue】搭建网页/index.html","ecdc9e80fae7fea3869b3a2c52a79adb"],["/2022/library/inte/【css】学习/index.html","d838304cba3f1ba0ce86d8375ffa18f2"],["/2022/library/inte/【钢琴】织体类型/index.html","8e3d9afc273706835311ea4d41451675"],["/2022/library/python/【nuitka】打包python为exe/index.html","6bcb8b3b6863c8fae8fa066ae5540d0b"],["/2022/library/python/【psutil】检测电脑网速等/index.html","cc464f6f7807ed3fc4587634fad4dcb8"],["/2022/library/python/【pybluez】python控制PC蓝牙/index.html","118e5c54f24cf08f8266d0f98bfcfdcd"],["/2022/library/python/【pyinstaller】打包python为exe/index.html","a5e6a261d9237e0e92c2bb637d964927"],["/2022/library/python/【pyqt】编写可视化界面/index.html","f32d96bc515ded949f03c5a1ba2aaa9c"],["/2022/library/python/【win32gui】控制win系统/index.html","095d6ac8d8b937ccf31122cabca1534f"],["/2022/library/嵌入式/【git】学习/index.html","7defed70719dbed7445888283b181856"],["/2022/library/嵌入式/【linux】常用指令/index.html","e51dfd70fd9f911f9d12bfcce2e7f7b3"],["/2022/library/嵌入式/模块/【模块】OLED/index.html","413376f999ac82ca82655f51f4687c47"],["/2022/library/嵌入式/模块/【模块】陀螺仪/index.html","dd52b29d80ad353021d3ecba2367bed9"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/index.html","55cfed93e93379429e9802c00694dfcc"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/index.html","9cd07698e287469391da0422bb02070f"],["/2022/library/嵌入式/硬件/【硬件知识】芯片熟悉/index.html","2831c2f5ed2af7f24d0e09d75a82302d"],["/2022/library/嵌入式/硬件/【硬件知识】选型/index.html","f21f8f186fab442a676284a918839786"],["/2022/library/嵌入式/积累/【嵌入式积累】阅读寄存器手册/index.html","e9bbfe02dcbc787b3412916bd6f05a1d"],["/2022/library/嵌入式/算法/【控制算法】学习/index.html","f26b05349fa9f58f965e5561fd8a6c76"],["/2022/library/嵌入式/算法/【滤波算法】学习/index.html","209fd23b94e86b7dbb4d3ecc7fe16c9d"],["/2022/library/嵌入式/语言/【python】进阶总结/index.html","0857cd1f2ff6c9231a3ede8d3cc6a5fc"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】i2c通信（mpu6050）/index.html","c24808774c6b522a57258ffd978d8518"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】pwm波/index.html","2bf398ff51a9486e2f3d29c3c88f968b"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】spi通信（nrf24l01）/index.html","e9638b0271ab39fbea4053cbec052ad5"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】串口通信/index.html","dce034dd380e035e5e130f239b8e3c9d"],["/2022/library/嵌入式/软件/开发板上手/【V831】开发板上手/index.html","2a753b27949436e6443c9cc07359a5fe"],["/2022/library/嵌入式/软件/开发板上手/【k210】开发板上手/index.html","a1847a4d290fb648d1c2c3d528db26d9"],["/2022/library/快捷键和常用指令/【cmd】常用指令/index.html","e0fcfba19fc2633c3289bcb76720d506"],["/2022/library/快捷键和常用指令/【pip】【conda】常用指令/index.html","ce778ee1a5d14bde78479590add452ef"],["/2022/library/快捷键和常用指令/【pycharm】快捷键/index.html","44ba8298a7defa3a6b02778d87912ac1"],["/2022/library/快捷键和常用指令/【win】快捷键/index.html","6e52d419e13960642b4d164a1656f0c0"],["/2022/library/快捷键和常用指令/免费下载视频/index.html","978842622248c4484218779dc1458fec"],["/2022/library/数学建模/数据处理/index.html","e83652d6e77ab975999ab54beb17b2de"],["/2022/library/数学建模/线性规划和整数规划/index.html","3d46dfb0b35131ae9b4253dca0b0aa7b"],["/2022/library/深度学习/【深度学习】基础知识：×NN都有些啥/index.html","63937a27ec9b9d72998bff44aafa6cb5"],["/2022/library/深度学习/代码/【numpy】语法基础/index.html","af54239c3751e6a4a2da99d3dde1718d"],["/2022/library/深度学习/代码/【torch】语法基础/index.html","81956fbadb3c8f082eabb49c21dfe920"],["/2022/library/深度学习/工具/【深度学习工具】onnx学习/index.html","dff5fe05c42147e4574ead41ba973bc1"],["/2022/library/深度学习/工具/【深度学习工具】tensorboard学习/index.html","bb4232159c786867517c0f10c93c371c"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/index.html","3f47e050ac85b2268c5a5ef1fe8de82d"],["/2022/library/经验积累/【经验积累】网址整理/index.html","903b97a64fd0a3d50e128151888893ac"],["/2022/library/经验积累/【经验积累】论文搜集/index.html","2940a26ac184184e2155204164f2e035"],["/2022/library/课内知识/【FPGA】仿真和烧录/index.html","6438998f1969a29889628e3dd05a7634"],["/2022/library/课内知识/【matlab】学习/index.html","a90eb6c19c41ea69c75726b0d41ced1d"],["/2022/library/课内知识/【verilog】学习/index.html","3309223f66c32f569f8a01d988d0ac78"],["/2022/library/课内知识/【常用数学公式】总结/index.html","af843ff75fde27721769f59f5d2c23c1"],["/2022/others/Write-blog-using-markdown/index.html","5fe48c0069762dbc739c28afbcaf6b57"],["/2022/others/古诗/古诗/index.html","ad5106e00d98f520b408005ed0ce10dc"],["/2022/others/能力年表/index.html","85739bc8cb3209181680f4ab58d10743"],["/2022/solved/github的github.io项目打不开/index.html","18890cfc377bffc444da9722c3deccbf"],["/2022/solved/hexo部署报错spawn failed/index.html","52c55d20c556d77edf372bc45513a279"],["/2022/solved/modelsim的-novopt优化相关报错/index.html","5d8645464cf921b85739596e5f1a321d"],["/2022/solved/npm install 报错/index.html","d5c635474289cb0cd6b604f98d9619d2"],["/2022/solved/pycharm修改快捷键/index.html","acb9538b04ebe1c2feb3b0838d034519"],["/2022/solved/pycharm内无法打开cmd/index.html","be57ab237024221054a8e3239d370330"],["/2022/solved/从regedit改变键盘映射关系/index.html","ec717cf33a6dae351252b69b67eed40d"],["/2022/solved/右键新建菜单管理/index.html","578632cc0298db3818a3f2495f12b808"],["/2022/solved/执行make menuconfig时报错/index.html","7180275b264c0cefa29f2f16dce0e594"],["/2022/solved/报错binsh 1 bc not found/index.html","acdacb38dce8d3a1167894487e4324e6"],["/2022/solved/报错binsh 1 cc not found/index.html","c06a1cd00af51c84d88f2796a94f9378"],["/2022/solved/报错binsh python not found/index.html","d6087ba59709d8cfb7e9fa44a7dbf34e"],["/2022/solved/未整理/index.html","edfd28870a9bf6b63d48ebe0344a1317"],["/2022/solved/树莓派域名解析暂时失败/index.html","b5d1c9bf8f31739834e37a83eeb73c67"],["/2022/solved/树莓派配置python环境/index.html","1d9a82a5bb4c6214ed9fedb36221544e"],["/2022/solved/网盘挂载Alist+RaiDrive/index.html","f6f675d92f9e3ca34b82a21a3feda31a"],["/2022/solved/设置软件开机自启动/index.html","2d460f321862d9abdfcf67e87e7e6112"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118074452.png","221e63aa60efa77dca50740ce9b88380"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118457009.png","5c1577c940dd443631045f45787e487d"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667226872521.png","ec7a6051752cb193ae983fb81d135fce"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667264387582.png","57b13f83c9dfd506e6ccb81743f74963"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667265226170.png","600b87f6ea78e46e19929200a8190875"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667292838757.png","f9c6a5975d54d8b975e9de23dc891c00"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667293450480.png","57c9efd9a2a4ae995517991ff7abdf32"],["/2022/work/nerf/【nerf】Block-NeRF笔记/index.html","85cd816384d2b2c6f96c7e57d5f5637b"],["/2022/work/nerf/【nerf】Point-NeRF笔记/index.html","469274adda2702d375880900dffb4c17"],["/2022/work/nerf/【nerf】nerf-pytorch/index.html","6ced7e94a8d35cc8df815d50b026e515"],["/2022/work/nerf/【nerf】汇总笔记/index.html","0bc31ec84c60018cc8267c316a2fa553"],["/2022/work/nerf/【nerf】记录/index.html","f15f9900563363c2ebbb819e851a8446"],["/2022/work/前端/【前端】记录/index.html","bd8cec03b49bdeaa89078a9f8f90e5df"],["/2022/work/前端/【博客】记录/index.html","8c0b374b0c0a253384754bae56b35716"],["/2022/work/嵌入式项目/bard/【bard】Linux迷你电脑/index.html","66c4f26fbba07cb87bdb16f9880525f8"],["/2022/work/嵌入式项目/【祖传板子】记录/index.html","ba2e941dea80f1bf29e6001fbcbfe2b6"],["/2022/work/嵌入式项目/【航模】记录/index.html","72de5c0ca6e5c7e6bf308d8f2f07324a"],["/2022/work/忆阻器/【忆阻器】记录/index.html","29a900b9264a40c4062ffad87a1f8092"],["/2022/一下都是0/index.html","306d631b7ef195f08ae0378feaab9f8f"],["/2023/learning/开关电源/【开关电源】理解/1663634083260.png","7b1a889ee96c83e170023666681c9131"],["/2023/learning/开关电源/【开关电源】理解/index.html","253e02da5026d9e2d5a21932cf67d686"],["/2023/library/frontend/【adb】电脑连接控制手机/index.html","6098ba8f104662ed2e2cc202e8916b2f"],["/2023/library/frontend/【app inventor】拖动滑块写手机app/index.html","483f7bd177b71b0ebc10efea3e272680"],["/2023/library/frontend/【auto.js】手机自动化控制/index.html","ef04fc60fa6029d6fa152e05cbb0f144"],["/2023/library/inte/【latex】学习/index.html","b153517713ff39bf1779c78381b08156"],["/2023/library/python/【pyautogui】控制键鼠/index.html","8ec1344a825aed6b94426b013ce5090d"],["/2023/library/python/【pyserial】读取串口/index.html","56ce873069f5239c81ed013eeeb71c16"],["/2023/library/python/【python基础】常用内部库/index.html","98e0ce733cdbb980c151831e82d9c856"],["/2023/library/python/【python基础】常用外部库/index.html","f6f297c81c0d3b794c45a4817e4d0834"],["/2023/library/python/【python基础】有趣外部库/index.html","a9bbf45bd1d0ce53cc742a7584ea2304"],["/2023/library/嵌入式/模块/【模块】GPS模块/index.html","56b5908b1e9a435e9d878171e127e470"],["/2023/library/嵌入式/模块/【模块】amg8833/index.html","eb83632cc37dea377f9cde88ea8f81c2"],["/2023/library/嵌入式/模块/【模块】as5600/index.html","fe1e5e9793d02e3bb6eba37c1e3a8640"],["/2023/library/嵌入式/模块/【模块】数码管/index.html","4b5ec7261e46fa7e646a54511cb19acc"],["/2023/library/嵌入式/模块/【模块】电容触摸按键/index.html","f2e35ebb3da7fea20a947f1aceb4dacc"],["/2023/library/嵌入式/模块/【模块】蓝牙/index.html","545c04ea3073fa752b716f14e5c357ca"],["/2023/library/嵌入式/模块/【模块】蜂鸣器/index.html","b1240ac085c4d7942e779e570cc8a543"],["/2023/library/嵌入式/模块/【模块】超声波测距/index.html","86a3fdb722e057ebc2b10092cb3e5d12"],["/2023/library/嵌入式/硬件/【硬件知识】三极管/index.html","21071e863f0aa171352f6b70a55a5e2f"],["/2023/library/嵌入式/积累/【嵌入式积累】常用官网/index.html","39e64ee8e10216bfde5c85526efe1ce9"],["/2023/library/嵌入式/积累/【嵌入式积累】控制入门/index.html","d2f1af0402d2b239f93852f83b9e96a8"],["/2023/library/嵌入式/软件/【HAL库】笔记/【HAL库】ADC采样/index.html","a9543c69bcee1df09219cbfa9f0a28de"],["/2023/library/嵌入式/软件/【HAL库】笔记/【HAL库】USB/index.html","cea5ece1bba545891317873d4499372a"],["/2023/solved/chatgpt您所在的地区无法访问/index.html","ae8823609b065267320ce45e0fbc264d"],["/2023/solved/环境变量配置理解/index.html","d616e55c77a54d1a484e752a0a9cc58f"],["/2023/work/chatgpt微信机器人/index.html","f5745db4329fdcec13b389265ec67773"],["/2023/work/mine/电脑外接摇杆/index.html","ed6e67446adea60a96d6019ad2dd8a87"],["/2023/work/mine/网速显示助手/index.html","7267580bcb4ac28cf1f25d74ae5f5866"],["/2023/work/mine/蓝牙调试助手/index.html","69554544ca582c2dfd437067564a4ab2"],["/2023/work/nerf/【nerf】最新阅读记录/index.html","409e0d0f5bc65551dc2e900b49cff6f9"],["/2023/work/python/羊了个羊自动化/index.html","279b42ba9c31fbc0764edd9dc41a0749"],["/2023/work/忆阻器/【忆阻器】python平衡车/index.html","2eed11ecc65f6ab9fa1ad9b422fc31a9"],["/2023/work/忆阻器/【忆阻器】算法部分/index.html","4abc9a3c180186051402a87726a6c028"],["/about/index.html","fe5a57959916e4ffacbc2241297a5baf"],["/archives/2022/09/index.html","69359c8e2292c28f871ae08491f6e6a7"],["/archives/2022/09/page/2/index.html","603a81f5a1bbfa0128e5d3c1948ca764"],["/archives/2022/10/index.html","bae35ab8d976aedf856ef17d45cd5026"],["/archives/2022/10/page/2/index.html","c262fcb14b60ce00b73e9fb2a4fb2cfb"],["/archives/2022/11/index.html","0b3ddc529213b411740add167b1a51b6"],["/archives/2022/11/page/2/index.html","9d8733566f029db8770d1181b86bf684"],["/archives/2022/12/index.html","8cc44a826e603c2123a1ba6ed2eea8ad"],["/archives/2022/12/page/2/index.html","812d12301ad069bff9123c2686f54f37"],["/archives/2022/12/page/3/index.html","6a35f170631588dcbc4da75e71f838d3"],["/archives/2022/12/page/4/index.html","91fc429808b65889efb2136b1caaf632"],["/archives/2022/index.html","170ba2bef906c4901e958d801c823beb"],["/archives/2022/page/2/index.html","7a875e49c2f218e5f09cef8b93ce0eff"],["/archives/2022/page/3/index.html","53cc1cb7717c00463f180afd23a47bdd"],["/archives/2022/page/4/index.html","5b77762f1e5fe2627b664d05dabcacea"],["/archives/2022/page/5/index.html","57392508aaf12af729bf066d4cfd21f5"],["/archives/2022/page/6/index.html","181a9b877079fad1499451e295d81fd0"],["/archives/2022/page/7/index.html","faf21c24dc62120e1f1216e17efc574f"],["/archives/2022/page/8/index.html","b4d28a6ab85dcfb8110f68eda07983f0"],["/archives/2022/page/9/index.html","b29a6ab1d844978c86a8db6d0b9a8fa1"],["/archives/2023/01/index.html","9fe3f36dbcd79d1c7d4d8098f3f8dad8"],["/archives/2023/01/page/2/index.html","35af8bc63c7ea5a7b11a98d5c5f7b959"],["/archives/2023/01/page/3/index.html","3f7d6245df9949a8e17e20adf1a78cba"],["/archives/2023/01/page/4/index.html","781fd21fa169f7a2fd4edf7fc028c1d2"],["/archives/2023/index.html","d247c44d2faebbaaa9ca21cde09805a4"],["/archives/2023/page/2/index.html","6f750806cc81a696cac61b62000e78ee"],["/archives/2023/page/3/index.html","b4595ffc4604b9304422c2f9f6ab8c7a"],["/archives/2023/page/4/index.html","0c2747a9e593176f4921c503b18a643d"],["/archives/index.html","63065527e7bfb26b0461ffad06b888d9"],["/archives/page/10/index.html","cdf9bdf612e20019bbda3d01014d3653"],["/archives/page/11/index.html","f5b7f8260b2174a01081ba71f56fe307"],["/archives/page/12/index.html","1797e4a7375b874758ed86e7705ee1ea"],["/archives/page/2/index.html","9e3d003ab1e1a31c27df6a86a80f0590"],["/archives/page/3/index.html","3456a996a841303217a4bb7726caf678"],["/archives/page/4/index.html","24f7beb6f668ba0a25f8eb599d2cbc48"],["/archives/page/5/index.html","9ba9867f8e5a17181ea9a3e10d0ce189"],["/archives/page/6/index.html","a87d2c1dd2359d58117cafecb5748d7f"],["/archives/page/7/index.html","0dde6a783729f765748b34144f6d3659"],["/archives/page/8/index.html","c7ab4f65c96c9cd2a89b8f67e4d481d5"],["/archives/page/9/index.html","32bfe016b55739b2714b61d38fa3359e"],["/baidu_verify_code-ZFSCabM1PJ.html","811b17520af649527c01b9d634ff4698"],["/css/main.css","2c220fda6c5bc244bb046f9108c09c38"],["/css/spoiler.css","eb373af0627ede298867ffc0045da62e"],["/failed/【硬件知识】vco压控振荡器.html","ff19554f94306c2f2e5d53405536cf1e"],["/failed/【硬件知识】vco压控振荡器/1665803607390.png","3df26768c0d97b3acbb64c7f4738f15c"],["/failed/【硬件知识】vco压控振荡器/1665803663941.png","38d29c573fc0aab159543ee6f3d6b31d"],["/failed/【硬件知识】vco压控振荡器/1665803862765.png","f7e2165483ca1f224fc47019c9d85839"],["/failed/【硬件知识】vco压控振荡器/1665803865723.png","3da7b08b88d8795e53d03a47e1926277"],["/failed/【硬件知识】vco压控振荡器/1665803871404.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/1665803883747.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/clip_image001.gif","ba898c600ecfdb213d2223a0f783c808"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803844893.gif","fb05fad8f7ca3e4d9e40000a9ab1dc09"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803856973.gif","e1a4cd1747beecc7d92124979531824c"],["/failed/【硬件知识】vco压控振荡器/clip_image002.gif","0c0f42f02d474126082016d250804bc4"],["/failed/【硬件知识】vco压控振荡器/clip_image003.gif","1f489bb3e02d4993cdd501f7ec773812"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803844893.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803856973.gif","09cde39109369f9185d1cf128c6d7c2d"],["/failed/【硬件知识】vco压控振荡器/clip_image004.gif","32873c471ff1058abf9d6d09ca5e45f0"],["/failed/【硬件知识】vco压控振荡器/clip_image005.jpg","ea2dddfe9b1da4f406ee36b37c99e72e"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803844893.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803856973.gif","b0138096b0fc7682435ad07aeaf159ce"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803982819.gif","6540947f9843ab822d3e8eeb7ef621e6"],["/failed/【硬件知识】vco压控振荡器/clip_image006.gif","6290aa2f8360b2a4f05e4c09e4d6bc80"],["/failed/【硬件知识】vco压控振荡器/clip_image008-1665803856973.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image008.gif","113b77d852979982495a775ea4d973d1"],["/failed/【硬件知识】vco压控振荡器/clip_image008.jpg","aad87f9838e93808a0caed1ece93ffac"],["/failed/【硬件知识】vco压控振荡器/clip_image009.gif","fd6cf84a1333733613c80d5599c0fbdb"],["/failed/【硬件知识】vco压控振荡器/clip_image010.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image011.jpg","fa6d15386072d8a691d18f9c3a53b426"],["/failed/【硬件知识】vco压控振荡器/clip_image013.jpg","cea0cb9334e0d5f1b84beb2fcd8b1245"],["/failed/【硬件知识】vco压控振荡器/clip_image015.jpg","660345ebf2132d1bcdd9a7455529093a"],["/failed/【硬件知识】vco压控振荡器/clip_image017.jpg","29517d76c214adc17343771d2d804679"],["/google41a28d5f2878fa02.html","9a6927955ca9ee1a1fc4063384d9cfb9"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/tou.png","578463708d7de56a1c4e6331831b3e2e"],["/index.html","b13622aa42146807846d3761ac70ad21"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/code-unfold.js","e079f1fdb88a9edcd745220494218e88"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","97606f901b6e488587ad5c49aa367604"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mylibrary/css/float.css","cdbac345702861ab8bc216cce4c42f2e"],["/mylibrary/css/hide.css","422efad1ef274ab2e3f40a3ea7901dff"],["/mylibrary/css/load.css","6d50cdf2a383a63226dff450728bfb64"],["/mylibrary/css/neon.css","b831fd4435ff79121c53d17c81abe5ee"],["/mylibrary/css/round.css","46aeda732bd6ba180802339644cfa43a"],["/mylibrary/css/shake.css","9c63ff6f48cbc5196d8611e9a0390473"],["/mylibrary/css/shiny.css","7eb0c2d9ce1db40284d972783fa97f3d"],["/mylibrary/index.html","af8b3e45c56e1fc539d03a7de7556551"],["/mypage/css/style.css","43a329db359b1c21a9d3cdc8a7127fb3"],["/mypage/font/LigatureSymbols-2.05.eot","5b46f67c079e0599f89aae807cdad560"],["/mypage/font/LigatureSymbols-2.05.svg","f4be952f02a00bd7b464568304b12842"],["/mypage/font/LigatureSymbols-2.05.ttf","48ae0b91a8d6e1feb2c15961a338dad8"],["/mypage/font/LigatureSymbols-2.05.woff","f974884f441019724c351f85478b3938"],["/mypage/font/README.html","9db3e7da38a8940e711799ced8b57a83"],["/mypage/index.html","0db763acd314b4a7abe2bd31fe78a6af"],["/page/10/index.html","1e7fca2d4531a46d5116cceb9ca1dd42"],["/page/11/index.html","2530b5c433af822c8f78457a4796a292"],["/page/12/index.html","fb910cfd1d30f6c07b812289a95b95ae"],["/page/2/index.html","4868f12283af3beb54815c8350b537a7"],["/page/3/index.html","8bd42708b153064565d80062abf02701"],["/page/4/index.html","1ac7e0da94ae0c328117b1f2ebe98451"],["/page/5/index.html","8e13f597f49952c9a738a4f1cbb0fb4a"],["/page/6/index.html","3dc1a5a1ef8edd84f8a4e546426184c7"],["/page/7/index.html","95d67812d47d09b1ae72e680f4afa5b2"],["/page/8/index.html","4efbab84a79519f530f7ca74fbc543c0"],["/page/9/index.html","b9c4dac7782794dcd5e891f5cdb242f3"],["/sw-register.js","64c5453854880f1ba68707a039e1f2d2"],["/tags/ADC采样/index.html","28785729e83a55321b48641b6752594d"],["/tags/Block-NeRF/index.html","3333b078aae5fcef750c70082902a9f9"],["/tags/FPGA/index.html","e88b96eef44a6fbb92a698a2ad98ab5c"],["/tags/GPS/index.html","15a97ffb2292fae44b4b67e74446d7b9"],["/tags/HAL库/index.html","2c51094650338a26449b0864ef03b982"],["/tags/H桥/index.html","816238c030ecc21f562e78fdac097e3c"],["/tags/OLED/index.html","73d0649feea06af96e1c4e55dccb5f37"],["/tags/PCB/index.html","1212983f5e81ede48d044287b2767ef2"],["/tags/Point-NeRF/index.html","cb6d1c8e0edc009e065c3f7784fd89ed"],["/tags/USB/index.html","1a5ae036c3e2c1539207ed0fd25281be"],["/tags/V831/index.html","c00f7070f6429f32dfe57c468ba3ac61"],["/tags/adb/index.html","09b5d1f209076affc74f17afe61d54cb"],["/tags/amg8833/index.html","94876a37829dce2bb0881718e9ce2c91"],["/tags/auto-js/index.html","58a74cd820de966466089cb7a0a8d395"],["/tags/bard/index.html","c4a2c38eae2f64136d2956fd477c96d2"],["/tags/chatgpt/index.html","0d2496b4d1f2e6bbf71fdfd53887a5bd"],["/tags/cmd/index.html","47315277cec73007ddce7722cbf126e3"],["/tags/conda/index.html","bcb00a80bb1099a93bdc1c1df9e0d816"],["/tags/css/index.html","23cad990dd5909c6fd83dd906e35c2dd"],["/tags/frontend/index.html","4553baa03147cdb40fd1f907fd32024c"],["/tags/git/index.html","e17481327b4612ac631161133dc49801"],["/tags/github/index.html","ef7eb0c4d5433649b063069d8abde01e"],["/tags/hexo/index.html","33bc103543cf0d027cbb557414b84a5d"],["/tags/i2c/index.html","9b90ac34ba4e9573caa4aa913c1fd3d1"],["/tags/index.html","92b0eae2c4089956a16426e095f05046"],["/tags/inte/index.html","8a19a7d30d75a973db6faf539a198aee"],["/tags/k210/index.html","02d9be470354beeb09d6b91da6e06ff8"],["/tags/learning/index.html","58e0e11bd5df593166ca5aa41b326479"],["/tags/library/index.html","f5309a1e7108f13c63088e42708ba71c"],["/tags/library/page/2/index.html","c32630750c0716d044e2855b812f617c"],["/tags/library/page/3/index.html","c19416f6be450dd77e1ff4995927460c"],["/tags/library/page/4/index.html","41b4165874a0b0d9b8206c2652551f7f"],["/tags/library/page/5/index.html","322355924bf126c7308edb3fa4c9426c"],["/tags/library/page/6/index.html","d61dce2183d8ec3cf659f46da687991c"],["/tags/library/page/7/index.html","a1376a2a5e86e704bb77e3c736575df2"],["/tags/like/index.html","df3ff5b87e32d464081473c175cd7e78"],["/tags/linux/index.html","73cfa546413074709c293cb433f66ac2"],["/tags/make/index.html","bcd9e14178db859f82b88a3f8d019181"],["/tags/matlab/index.html","ffd4ab6ec95c79d166d3be52b1e6554d"],["/tags/mine/index.html","9d74cbbf0fe0313ee612a712b26cd4e8"],["/tags/modelsim/index.html","0fb3194705eef3be3eaca692812c53b2"],["/tags/nerf/index.html","04e946c3827e4698bdb20f55d71a7d5f"],["/tags/nrf24l01/index.html","2dfbc0a1399453ca929c89cf7c5eacfb"],["/tags/nuitka/index.html","919c836096f90bd9266c942fc1d771ab"],["/tags/numpy/index.html","8689716461ccc6771a7261ddb7588b5c"],["/tags/onnx/index.html","1af621f009811db0ba3f6e12e9753fff"],["/tags/pip/index.html","b55e89067e9be5e199c8eb030e9d08ae"],["/tags/psutil/index.html","8967512fe470e5110eda106e3a99cb5e"],["/tags/pyautogui/index.html","15dc7bc6e5e543176340617bdf76beb8"],["/tags/pybluez/index.html","fc78e37ec5e417300dce1d33fa871d4c"],["/tags/pycharm/index.html","b2d73d6e6262a27c3a69c81530105ad5"],["/tags/pyinstaller/index.html","29f257b2857e275fa01bbc78cded1f4e"],["/tags/pyqt/index.html","ce623b61d4e8fe3208424c665b439239"],["/tags/pyserial/index.html","3068eaa9d3925bcd592e613e7b0eddf0"],["/tags/python/index.html","5563912080cd5abe44f8d805135903d7"],["/tags/python/page/2/index.html","2c8c0a57f8a30a55b8631508bcddc0fe"],["/tags/regedit/index.html","412aa0711e42920f85b684634b96a2af"],["/tags/solved/index.html","444ef0db088400022bd4d951e549b59d"],["/tags/solved/page/2/index.html","8f90777a2e8d7aa81f22d16f3fd4b131"],["/tags/spi通信/index.html","8ccffd62c7cb8d950457b427ecbc9f8c"],["/tags/stm/index.html","38814014e4a7e22fbdf12cff64cc35f9"],["/tags/stm32cubemx/index.html","b393c5d00e29920a7ece46578bc82c11"],["/tags/tensorboard/index.html","8a287a44a9e460c4cde1e9f190117a37"],["/tags/torch/index.html","e1bff295a2f2b70e28b9eb0fe2ab522a"],["/tags/typora/index.html","3c37ce7a94a2c5081e4052bd93c77042"],["/tags/ubuntu/index.html","7eeba89561afb353e836b3fa8c4fa81c"],["/tags/verilog/index.html","e244b8a5300619f7c98326325b3a3545"],["/tags/vue/index.html","80ef36ac8db87135cd55f3c724b5f3c2"],["/tags/win32gui/index.html","48d268cf8f4717e5167359a99c1cb86d"],["/tags/windows/index.html","a5fbb036987a5241fa42c849edf2d819"],["/tags/work/index.html","3e98da9559c764c7d94973bb82b41c6b"],["/tags/work/page/2/index.html","7888953c43a4a622027e68211aaec3ef"],["/tags/work/page/3/index.html","e6cfa8b2b4394c16aae7d763637acf78"],["/tags/下载视频/index.html","75b4fff13c80af2eae2a6a6846e08bd8"],["/tags/串口/index.html","57da679777f178a379a874861d6f8bb3"],["/tags/代码/index.html","c71427029f96707addd5647f387a3ca7"],["/tags/全志F1C200s/index.html","e35b88209f1aae3cab71ba68d1dadff4"],["/tags/公式/index.html","3b5f798c67aca81a11d1f2e63b4debbd"],["/tags/前端/index.html","1610994ceeedada96b4f2b443094817a"],["/tags/博客/index.html","965488ec16522d631776b611bba05183"],["/tags/嵌入式/index.html","196492361cdc53ae032e1faff78d316f"],["/tags/嵌入式/page/2/index.html","3be77e162dfd5bd3167c6cac194f668d"],["/tags/嵌入式/page/3/index.html","5ec5a19876bc05786b760e5ce2417084"],["/tags/嵌入式积累/index.html","b88fa1c21e9f3a4edccc259ac26c25d2"],["/tags/开关电源/index.html","1e2bb2fdcf0fc069fa238cbb5a0a2aff"],["/tags/开发板/index.html","a087bb2b78f3b36095bdfff714e2d6b9"],["/tags/忆阻器/index.html","b641f23d9c6e140f6e31b90fd05df23c"],["/tags/快捷键和常用指令/index.html","4f8c9330f16d55dd437336b7d417efe2"],["/tags/手机/index.html","66329b064dbd67e4fcc3b2e8362b505e"],["/tags/打包/index.html","d88a7589c0b656eaf0dcfc330ec86890"],["/tags/控制/index.html","2394d42efdc4e5bf8bf3583ce4ef854b"],["/tags/数学建模/index.html","100991903d9a2fc006cd60ee8cbf690c"],["/tags/数据处理/index.html","fd185204cc5d90eaf092e023b472a8ec"],["/tags/数码管/index.html","66fd43d90bbf6f041f8f6b0214e47fa8"],["/tags/整数规划/index.html","216b6401413918b499b2480014de5590"],["/tags/树莓派/index.html","95e23a814412ad4506c1af459f4df63c"],["/tags/模块/index.html","1b5b913040bbd80d5d234b589935bb92"],["/tags/测距/index.html","b39ec92f3e3e3adb659e0820fd2eefde"],["/tags/深度学习/index.html","60b53e75c1f512b9d9cee9cef06f3a1f"],["/tags/深度学习工具/index.html","130614d277c0ec3d58850e97b7783fdb"],["/tags/滤波/index.html","afe3434551f1cd4c881cad59146eead9"],["/tags/理工方向/index.html","5612c0f867ecde7c934dce1b76691a6a"],["/tags/电容触摸按键/index.html","3d176b8c7206e820399052a56d54dcef"],["/tags/硬件/index.html","2603094b16340f38ed259b30e9f9242a"],["/tags/硬件知识/index.html","3b7368284d44b017f09679d99dee68c4"],["/tags/积累/index.html","486c0f3e42f283e1bb361d705e7ce359"],["/tags/算法/index.html","da190fbf683be66b088e9fc1c1eb4708"],["/tags/线性规划/index.html","ac513c97347e1f2751066a49ebfaf84d"],["/tags/经验积累/index.html","0e72a4fe1f4a75ab23846f1e512b38e8"],["/tags/编码器/index.html","aa919bba500721ee157b937bb10ab9f7"],["/tags/网址整理/index.html","79e64e561dda08bc4a9ab8c82b9ee349"],["/tags/网盘/index.html","323309ae20829956eca4f7ec181210e9"],["/tags/航模/index.html","eae6e03a4bc381ca229b0ac0076ea52c"],["/tags/芯片/index.html","0eb22781690a5fe1e9d2def91626cf33"],["/tags/蓝牙/index.html","5d37291240b1e47c12d509f3a5fb335b"],["/tags/蜂鸣器/index.html","5d6eb636f156e742b4eaf9a7374aa991"],["/tags/论文搜集/index.html","ff8bd5e1787dde1ef1dd797f12f85281"],["/tags/语言/index.html","64090e4eaede010274d68baa1e4d3860"],["/tags/课内知识/index.html","c835d0af1836d456ada559e4f8f09b03"],["/tags/贝叶斯/index.html","29dad4010372416d69a865c2cec38431"],["/tags/超声波/index.html","220aec0602f330d0d4fa376a3feab291"],["/tags/软件/index.html","0a8644916298d4356a06869d026246c3"],["/tags/选型/index.html","f4dbe5da111d465286f051910173018d"],["/tags/通信/index.html","16a640dddbc230963855b6352683c6e7"],["/tags/钢琴/index.html","8934dddefc180639c79581031bd1393d"],["/tags/键盘/index.html","1bd4290d87f3b9ad0b1fcc1dced325b7"],["/tags/陀螺仪/index.html","d86224c4313c9fac113af7b265e35212"],["/tear/index.html","f510f1a198589cd8946351ba2b14f9af"],["/tear/index1.html","fa0ce0ca4f1b2d830ffb36459a5d65d7"]];
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
