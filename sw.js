/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/learning/开关电源/【开关电源】学习1——buck/1663506637120.png","8e50e1a9a14c0174f21513f95808f075"],["/2022/learning/开关电源/【开关电源】学习1——buck/index.html","a56791af2d5d1b40972fa329c0e6b7a8"],["/2022/learning/开关电源/【开关电源】学习2——boost/index.html","8b431593d971e3279867c7fed20dc8fc"],["/2022/learning/开关电源/【开关电源】学习3——VMC反馈/index.html","371b3da821b67fe9e55459bbfd49a5b4"],["/2022/learning/开关电源/【开关电源】学习3——buck-boost/index.html","7dbfa6fca4dc75bb4da935834fb3778d"],["/2022/learning/开关电源/【开关电源】进阶1——稳定性判断/index.html","34d4e3d82624344c58c5dd932c950362"],["/2022/learning/开关电源/【开关电源】选型和使用/index.html","27259e0738ba73ad6accff68b96a714f"],["/2022/library/frontend/【hexo】博客部署/index.html","4b385f6a2c7a1bcdef7d45d0261ef1fa"],["/2022/library/frontend/【markdown】编写文档/index.html","4c1908d959569a7ef306df5e797729d8"],["/2022/library/frontend/【vue】搭建网页/index.html","229eae3160fea6b79b23763777841f10"],["/2022/library/inte/【css】学习/index.html","32d6c9ba6f82c86363f52377e194dbac"],["/2022/library/inte/【钢琴】织体类型/index.html","02f602a9a19b904dab728e018c7091d6"],["/2022/library/python/【nuitka】打包python为exe/index.html","3a9a289e52dce74632ef68184e63b06d"],["/2022/library/python/【psutil】检测电脑网速等/index.html","3afd0f34147b644e212faee11c507b76"],["/2022/library/python/【pybluez】python控制PC蓝牙/index.html","3e0ff88a78a5ca0687fffe4456d0990c"],["/2022/library/python/【pyinstaller】打包python为exe/index.html","cc1b930b8c0f4b0aea5ebfec69a26942"],["/2022/library/python/【pyqt】编写可视化界面/index.html","b4273cf0408b482919a2fb1f661d8547"],["/2022/library/python/【win32gui】控制win系统/index.html","0751520d529c45ffb40c14ef399d5b6f"],["/2022/library/嵌入式/【git】学习/index.html","a4913186f9e33dd16a754ce277a38743"],["/2022/library/嵌入式/【linux】常用指令/index.html","5f1bd4787e616846f9f153bac2245ed8"],["/2022/library/嵌入式/模块/【模块】OLED/index.html","7ab535e83746163cec0593fd396b0a37"],["/2022/library/嵌入式/模块/【模块】陀螺仪/index.html","5136d890520452451ce735b17ef341a2"],["/2022/library/嵌入式/硬件/【硬件知识】H桥驱动/index.html","5b9051bb5a97acb575aba25d9c606fde"],["/2022/library/嵌入式/硬件/【硬件知识】无刷电机和电调/index.html","c8dca66d218efda40ad2575d070b57ef"],["/2022/library/嵌入式/硬件/【硬件知识】芯片熟悉/index.html","5c8a548789d56d95605e3e4232e00b90"],["/2022/library/嵌入式/硬件/【硬件知识】选型/index.html","1575a1547138a312215c20dd1ea14e0e"],["/2022/library/嵌入式/积累/【嵌入式积累】阅读寄存器手册/index.html","1e35bf24fdebee07161fed15bff497a0"],["/2022/library/嵌入式/算法/【控制算法】学习/index.html","e8672235225f91e425df8103d99d2726"],["/2022/library/嵌入式/算法/【滤波算法】学习/index.html","bee66b1e80ca12595be85e1d950be9de"],["/2022/library/嵌入式/语言/【python】进阶总结/index.html","b4a80f301850544c404db6f742093b58"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】i2c通信（mpu6050）/index.html","633cbedf7873bf0b0438c457137267dd"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】pwm波/index.html","ac282344049d2a45af03a90b681a21dd"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】spi通信（nrf24l01）/index.html","3d20bfb1d7c2c7591ee251f490c78508"],["/2022/library/嵌入式/软件/【HAL库】笔记/【HAL库】串口通信/index.html","26dbcfab6dcaf65fa3921105820b19c0"],["/2022/library/嵌入式/软件/开发板上手/【V831】开发板上手/index.html","0be65988d4c68db3386270361e44e9fd"],["/2022/library/嵌入式/软件/开发板上手/【k210】开发板上手/index.html","114a90aafc46e81995494e43a47b8167"],["/2022/library/快捷键和常用指令/【cmd】常用指令/index.html","ffd0f47cc358efd8e2a7810fe2973c9e"],["/2022/library/快捷键和常用指令/【pip】【conda】常用指令/index.html","82efc28bbc141a1e7d1a8df4fac3a6a8"],["/2022/library/快捷键和常用指令/【pycharm】快捷键/index.html","78d020a92a91a9ed8e209525cacd687e"],["/2022/library/快捷键和常用指令/【win】快捷键/index.html","f570ff6d844a363df19eb881e97e9caf"],["/2022/library/快捷键和常用指令/免费下载视频/index.html","699c3480fc72986df29f10aa8e4abb2b"],["/2022/library/数学建模/数据处理/index.html","4cb34f9ef11d1abde27942049eec13ed"],["/2022/library/数学建模/线性规划和整数规划/index.html","e90c491fdddb4aa52822126bcbe685da"],["/2022/library/深度学习/【深度学习】基础知识：×NN都有些啥/index.html","668091cedca0a69240758e7f92fe21aa"],["/2022/library/深度学习/代码/【numpy】语法基础/index.html","e662cd77e734ee8b360ec1a30d257607"],["/2022/library/深度学习/代码/【torch】语法基础/index.html","03ad0b2eac193119f31388f112eef5cb"],["/2022/library/深度学习/工具/【深度学习工具】onnx学习/index.html","98c8649bec36f46342853ee2e60d6f9a"],["/2022/library/深度学习/工具/【深度学习工具】tensorboard学习/index.html","cd59a77f160992af7162014f3920e1ba"],["/2022/library/深度学习/算法/【算法】贝叶斯优化/index.html","e9b5880ad969e75559896ffcac8438fb"],["/2022/library/经验积累/【经验积累】网址整理/index.html","90bd299f3de031239ecc946d366be0d2"],["/2022/library/经验积累/【经验积累】论文搜集/index.html","3fdb8b7d2b2f56e38795a1c206a9b2ac"],["/2022/library/课内知识/【FPGA】仿真和烧录/index.html","0a5af7516522839601ab3309f83dad11"],["/2022/library/课内知识/【matlab】学习/index.html","ce8bd00a61c27e3ada2d5ba0a6c9ca2a"],["/2022/library/课内知识/【verilog】学习/index.html","75693a3ad079dc0e96021c2ea41be24c"],["/2022/library/课内知识/【常用数学公式】总结/index.html","5ccf6b65b4e83f205355457430cd2046"],["/2022/others/Write-blog-using-markdown/index.html","3f970cccd22ec47eb3a3971bdff60af6"],["/2022/others/古诗/古诗/index.html","369850081328dfbbf328e84646a89050"],["/2022/others/能力年表/index.html","7427d48bafb859fda2b02801b378614c"],["/2022/solved/github的github.io项目打不开/index.html","e69216cc809aa7dcaa9eac65419682ba"],["/2022/solved/hexo部署报错spawn failed/index.html","39cb75133c1ce4f9c868af1a6c22a53a"],["/2022/solved/modelsim的-novopt优化相关报错/index.html","098c8e1772cb8bb581ce508d98d94407"],["/2022/solved/npm install 报错/index.html","b49507e98bab612fd65117c1ee3867eb"],["/2022/solved/pycharm修改快捷键/index.html","f271f54f89566c757f318c77c382a9a5"],["/2022/solved/pycharm内无法打开cmd/index.html","552e8af26bc48217ff9a8fc28603834b"],["/2022/solved/从regedit改变键盘映射关系/index.html","b238aa26d2852ff195497acb81e06f97"],["/2022/solved/右键新建菜单管理/index.html","21e905d177eaf865c9da71cb906a4847"],["/2022/solved/执行make menuconfig时报错/index.html","9996dbaa617a9256cf95fcabb3dae914"],["/2022/solved/报错binsh 1 bc not found/index.html","b7dbcfdb5e7bd94d55c2525c8d473094"],["/2022/solved/报错binsh 1 cc not found/index.html","54726a7f68cfeb6f18a340b88988909e"],["/2022/solved/报错binsh python not found/index.html","2ebee9802d2f9e02be02fb033b023d9d"],["/2022/solved/未整理/index.html","906abf0ea3182132f1347b085b216a52"],["/2022/solved/树莓派域名解析暂时失败/index.html","0910c19040a5199b03ee2e918164dae7"],["/2022/solved/树莓派配置python环境/index.html","96fdb761e3d7963527a06b7ca7e337df"],["/2022/solved/网盘挂载Alist+RaiDrive/index.html","9fdb28e36430703d3832ddc20d3c078b"],["/2022/solved/设置软件开机自启动/index.html","fe0a438ce009dfe7f2b8fcdc34990b85"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118074452.png","221e63aa60efa77dca50740ce9b88380"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667118457009.png","5c1577c940dd443631045f45787e487d"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667226872521.png","ec7a6051752cb193ae983fb81d135fce"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667264387582.png","57b13f83c9dfd506e6ccb81743f74963"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667265226170.png","600b87f6ea78e46e19929200a8190875"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667292838757.png","f9c6a5975d54d8b975e9de23dc891c00"],["/2022/work/nerf/【nerf】Block-NeRF笔记/1667293450480.png","57c9efd9a2a4ae995517991ff7abdf32"],["/2022/work/nerf/【nerf】Block-NeRF笔记/index.html","1c4bb7ff638df610d3d7ab5ce23f7304"],["/2022/work/nerf/【nerf】Point-NeRF笔记/index.html","267ff4f92f371cb30d4ae6221d1dcba6"],["/2022/work/nerf/【nerf】nerf-pytorch/index.html","0e502d794045e89e3a1e2afff2991628"],["/2022/work/nerf/【nerf】汇总笔记/index.html","5e537fba5f6cf69f93258326ab706083"],["/2022/work/nerf/【nerf】记录/index.html","eb8c8c77dd8fffab75930af849450f12"],["/2022/work/前端/【前端】记录/index.html","859f0e16912d467709dc358ac5c3fa83"],["/2022/work/前端/【博客】记录/index.html","35ab68d227a4cea53bef9d5b7378f6ff"],["/2022/work/嵌入式项目/bard/【bard】Linux迷你电脑/index.html","f223098e0a46ff8fe5ae06913a4fd93d"],["/2022/work/嵌入式项目/【祖传板子】记录/index.html","88660248ce658e0a95a2b2b058909edf"],["/2022/work/嵌入式项目/【航模】记录/index.html","74a0d597d1ee2fe1a702d96200fc2741"],["/2022/work/忆阻器/【忆阻器】记录/index.html","5c484f00c6c8382ecd2b3a69cf182576"],["/2022/一下都是0/index.html","a80dd62292611d22a3c68654b6daf868"],["/2023/learning/开关电源/【开关电源】理解/1663634083260.png","7b1a889ee96c83e170023666681c9131"],["/2023/learning/开关电源/【开关电源】理解/index.html","c982a385059bf734d83da3a8c6c12d7e"],["/2023/library/frontend/【adb】电脑连接控制手机/index.html","8e2747bba88cddf3fda07d6654045138"],["/2023/library/frontend/【app inventor】拖动滑块写手机app/index.html","fc0ced8c6c254633b640e2315d8eddd4"],["/2023/library/frontend/【auto.js】手机自动化控制/index.html","675dca352ddde276fcb7218b62989cff"],["/2023/library/inte/【latex】学习/index.html","64f0668d20df6236c470c3a6b85cf3f7"],["/2023/library/python/【pyautogui】控制键鼠/index.html","2286b664392265416e7efaf8b1a43fba"],["/2023/library/python/【pyserial】读取串口/index.html","f82abc08ce61d1b477331fa8cdf49e66"],["/2023/library/python/【python基础】常用内部库/index.html","03c08d076160fcbea72b18c7969ad456"],["/2023/library/python/【python基础】常用外部库/index.html","1cc9c6523d1b031bcfb25a7fe855a226"],["/2023/library/python/【python基础】有趣外部库/index.html","e933fd900c11ab31f092e8800c3fcb21"],["/2023/library/python/【python基础】机器学习库/index.html","bb87245a31177ed49c44f1c6b082b8c9"],["/2023/library/python/【python常用】常用库的pip安装/index.html","dee10aaf0cdebfd5c82643fd7e47a297"],["/2023/library/嵌入式/模块/【模块】GPS模块/index.html","ebf1e1a3bbe47ba7c735daa296e3a71b"],["/2023/library/嵌入式/模块/【模块】amg8833/index.html","206dfbc64048ce5062462bd8ce37fbdf"],["/2023/library/嵌入式/模块/【模块】as5600/index.html","245833aab0c3234db013c7917c382573"],["/2023/library/嵌入式/模块/【模块】数码管/index.html","f724f3f84236cba77a3efa4b43f4b536"],["/2023/library/嵌入式/模块/【模块】电容触摸按键/index.html","f08f4c41d7c0f09d66cce0ec436008f6"],["/2023/library/嵌入式/模块/【模块】蓝牙/index.html","0c752c39e42ac7c20796f21598a7e034"],["/2023/library/嵌入式/模块/【模块】蜂鸣器/index.html","cf154a4a567541a8d3fa1e3700f8a7a0"],["/2023/library/嵌入式/模块/【模块】超声波测距/index.html","6ac815f948309526afb46d27d8832ccb"],["/2023/library/嵌入式/硬件/【硬件知识】三极管/index.html","8c37cbb50430eda742d122128b973ec0"],["/2023/library/嵌入式/积累/【嵌入式积累】常用官网/index.html","324960851b193eb92f54962e5875ff0e"],["/2023/library/嵌入式/积累/【嵌入式积累】控制入门/index.html","ffa6d4876e2655c2c3c6087fecfff261"],["/2023/library/嵌入式/软件/【HAL库】笔记/【HAL库】ADC采样/index.html","69c742abf084fb606b50534a8c5409f6"],["/2023/library/嵌入式/软件/【HAL库】笔记/【HAL库】USB/index.html","427cff1a65f60665c4bf6bb40b136d39"],["/2023/others/chatgpt/index.html","4fa522ba2dcb33a1bd668319b8da4a12"],["/2023/solved/chatgpt您所在的地区无法访问/index.html","dda8a636d4b0e12374682ec28f69bb09"],["/2023/solved/环境变量配置理解/index.html","e31913782b73c8255638afe1df3f36ae"],["/2023/work/JIIF/【JIIF】多光谱融合/index.html","f7acc96e4ee36f63dd859c15476a1d6a"],["/2023/work/chatgpt微信机器人/index.html","91109d81c78d4fe9f2b402f0ec54abf6"],["/2023/work/mine/电脑外接摇杆/index.html","c493440b4d42313b8f27486a86eac23c"],["/2023/work/mine/网速显示助手/index.html","9f281d3826d136f1317e28d52ce5c587"],["/2023/work/mine/蓝牙调试助手/index.html","0e4c670250b203c4f91331aec3c8e68d"],["/2023/work/nerf/【nerf】最新阅读记录/index.html","451e65e83adfb690a2d82a8fe062ad2f"],["/2023/work/python/羊了个羊自动化/index.html","74f2a0bf2c555cd3be7bf67666440fb7"],["/2023/work/嵌入式项目/【沁恒】样品试用/index.html","35e619d17c40bdb01c53a36790df910f"],["/2023/work/忆阻器/【忆阻器】python平衡车/index.html","5d87c3256d05d7dbfc696fd8215ded47"],["/2023/work/忆阻器/【忆阻器】算法部分/index.html","e5d18a36ec9e1a6f1765cbd5ab79bef5"],["/about/index.html","7e2e901d2bd0e96c7cb28427561dcc03"],["/archives/2022/09/index.html","61d1713e5480810778117df05efef59f"],["/archives/2022/09/page/2/index.html","3d9a0d2088b7d49d653b4189fe78dde5"],["/archives/2022/10/index.html","e87324a070f2a859cadc2eec157b63b8"],["/archives/2022/10/page/2/index.html","91101724671f20e470513bdf7a2cedc7"],["/archives/2022/11/index.html","f5525c31f3dd447ab74e21c6e3ccc0f6"],["/archives/2022/11/page/2/index.html","115c62fc119c11deae373e0e0fa23e7c"],["/archives/2022/12/index.html","dfb3da7146b4ce369bd82d3106df5cfa"],["/archives/2022/12/page/2/index.html","7abf664be28f409d116e831792a1b0c5"],["/archives/2022/12/page/3/index.html","b9ed125c2cb61d0d58306dcf747bf074"],["/archives/2022/12/page/4/index.html","8804ee5bfa095b33f863e14e086d0fda"],["/archives/2022/index.html","8357601dcc69cec8925ff5546fc3e320"],["/archives/2022/page/2/index.html","3fed351bea6d7777ee0b095e0ecdb6e1"],["/archives/2022/page/3/index.html","0c1b5f9b0da230bb7abf09134cdcd8ea"],["/archives/2022/page/4/index.html","3b26c2f384c51755fabda7235eb86b0d"],["/archives/2022/page/5/index.html","3c60a6632c7ef7511c4203fa796457ea"],["/archives/2022/page/6/index.html","6deab68c6ff05d802b15cc769401df70"],["/archives/2022/page/7/index.html","e03ff75d8deaad15c9d5e536aff936f3"],["/archives/2022/page/8/index.html","3610cd7bc7d9f6337f63c79995ed31b5"],["/archives/2022/page/9/index.html","65f84b90fe97947f3088f0f61cd7c76a"],["/archives/2023/01/index.html","8d5c11970d6eb437f23f934390904f27"],["/archives/2023/01/page/2/index.html","0fb542fbde3f3feecc79a4f02ad3d332"],["/archives/2023/01/page/3/index.html","a9fd1534a437b64186c68cdc23645d52"],["/archives/2023/01/page/4/index.html","0908935873db3d7d12db4b710f773443"],["/archives/2023/02/index.html","ebeb362fc39932847966df0658e143c2"],["/archives/2023/03/index.html","9d51d796f6967e9e25b4fa4be6b2f2da"],["/archives/2023/index.html","4bcf957d5006e48844aeb397628ac7cf"],["/archives/2023/page/2/index.html","27f2ad689801cbd00c573db6c99a8dc2"],["/archives/2023/page/3/index.html","8ffbea941809aefafd80a70e8f24b7a4"],["/archives/2023/page/4/index.html","654a4a0c0dd4408718fac2b4599c165c"],["/archives/index.html","238d226ffe9011caeb2a73b6a4af6977"],["/archives/page/10/index.html","b3f94c1da6a41567f6a9273fe2188621"],["/archives/page/11/index.html","888c4422613ec862db8b4f8a6e712267"],["/archives/page/12/index.html","154cfc7acfbda0fbbb46328daa00eab2"],["/archives/page/13/index.html","4b49cbd897aeb69a293dfc01aec75d45"],["/archives/page/2/index.html","7bf7782a7db1de8fae5f130911113e96"],["/archives/page/3/index.html","7d98f8966ff6893e691efb2b5edc5f9a"],["/archives/page/4/index.html","a7d5c3e701dc2d08108f43f8f9475615"],["/archives/page/5/index.html","a97d453084ce10d749b2757db34d03af"],["/archives/page/6/index.html","dbf1f0b33ecaf917639084a212e0c012"],["/archives/page/7/index.html","2f1382cfc0343d67d5ad09e1b3ac8933"],["/archives/page/8/index.html","11555abb515d0566c62684583bcfa230"],["/archives/page/9/index.html","71110db4db997d7c22c22c9c36f3e647"],["/baidu_verify_code-ZFSCabM1PJ.html","0818fe6f29f2ec26203c2d68c01b8182"],["/css/main.css","908eaf77e304ce4049558d50a4d42dfc"],["/css/spoiler.css","eb373af0627ede298867ffc0045da62e"],["/failed/【硬件知识】vco压控振荡器.html","b472e13977b7f728ef4e65a1617256eb"],["/failed/【硬件知识】vco压控振荡器/1665803607390.png","3df26768c0d97b3acbb64c7f4738f15c"],["/failed/【硬件知识】vco压控振荡器/1665803663941.png","38d29c573fc0aab159543ee6f3d6b31d"],["/failed/【硬件知识】vco压控振荡器/1665803862765.png","f7e2165483ca1f224fc47019c9d85839"],["/failed/【硬件知识】vco压控振荡器/1665803865723.png","3da7b08b88d8795e53d03a47e1926277"],["/failed/【硬件知识】vco压控振荡器/1665803871404.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/1665803883747.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/clip_image001.gif","ba898c600ecfdb213d2223a0f783c808"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803844893.gif","fb05fad8f7ca3e4d9e40000a9ab1dc09"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803856973.gif","e1a4cd1747beecc7d92124979531824c"],["/failed/【硬件知识】vco压控振荡器/clip_image002.gif","0c0f42f02d474126082016d250804bc4"],["/failed/【硬件知识】vco压控振荡器/clip_image003.gif","1f489bb3e02d4993cdd501f7ec773812"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803844893.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803856973.gif","09cde39109369f9185d1cf128c6d7c2d"],["/failed/【硬件知识】vco压控振荡器/clip_image004.gif","32873c471ff1058abf9d6d09ca5e45f0"],["/failed/【硬件知识】vco压控振荡器/clip_image005.jpg","ea2dddfe9b1da4f406ee36b37c99e72e"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803844893.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803856973.gif","b0138096b0fc7682435ad07aeaf159ce"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803982819.gif","6540947f9843ab822d3e8eeb7ef621e6"],["/failed/【硬件知识】vco压控振荡器/clip_image006.gif","6290aa2f8360b2a4f05e4c09e4d6bc80"],["/failed/【硬件知识】vco压控振荡器/clip_image008-1665803856973.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image008.gif","113b77d852979982495a775ea4d973d1"],["/failed/【硬件知识】vco压控振荡器/clip_image008.jpg","aad87f9838e93808a0caed1ece93ffac"],["/failed/【硬件知识】vco压控振荡器/clip_image009.gif","fd6cf84a1333733613c80d5599c0fbdb"],["/failed/【硬件知识】vco压控振荡器/clip_image010.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image011.jpg","fa6d15386072d8a691d18f9c3a53b426"],["/failed/【硬件知识】vco压控振荡器/clip_image013.jpg","cea0cb9334e0d5f1b84beb2fcd8b1245"],["/failed/【硬件知识】vco压控振荡器/clip_image015.jpg","660345ebf2132d1bcdd9a7455529093a"],["/failed/【硬件知识】vco压控振荡器/clip_image017.jpg","29517d76c214adc17343771d2d804679"],["/google41a28d5f2878fa02.html","db8ebc2545069f2a2ea4915f5998641a"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/tou.png","578463708d7de56a1c4e6331831b3e2e"],["/index.html","b500a165f9a471dce0fa813c5420ad11"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/code-unfold.js","e079f1fdb88a9edcd745220494218e88"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","97606f901b6e488587ad5c49aa367604"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mylibrary/css/float.css","f81f191e7c8c78c2cd7601dcd3b29dfb"],["/mylibrary/css/hide.css","30db580210816b61a2c00badb87b7468"],["/mylibrary/css/load.css","4fb886248f56604fbec94b5c6a4d5a97"],["/mylibrary/css/neon.css","cc36fc3de90569f681e58da4c2ea5d12"],["/mylibrary/css/round.css","82954d73b8878a37de5c288f27216640"],["/mylibrary/css/shake.css","90675ddbf0d572f64d1d399938b6c5f0"],["/mylibrary/css/shiny.css","92177668c5f049c27646c9511b012d49"],["/mylibrary/index.html","9a0c923a9d24cdce4a0ed55a6df5d4cd"],["/mypage/css/style.css","c3dcfba7958ec9a4472de2cca64040f5"],["/mypage/font/LigatureSymbols-2.05.eot","5b46f67c079e0599f89aae807cdad560"],["/mypage/font/LigatureSymbols-2.05.svg","f4be952f02a00bd7b464568304b12842"],["/mypage/font/LigatureSymbols-2.05.ttf","48ae0b91a8d6e1feb2c15961a338dad8"],["/mypage/font/LigatureSymbols-2.05.woff","f974884f441019724c351f85478b3938"],["/mypage/font/README.html","610fca39f0470b9e42068567716e62a1"],["/mypage/index.html","3325c62def7c6760c4d9f307d896e534"],["/page/10/index.html","3f5b91cfd58fb4799910f859518347fb"],["/page/11/index.html","cc84a452e182765d9951f9237f7ff159"],["/page/12/index.html","c556310ba07fbec8c09176a007d6a4a1"],["/page/13/index.html","363222a15272ece5d4bba2cfc03c2ab7"],["/page/2/index.html","72d8edcf8c7056b1bf6ce6db125bd14e"],["/page/3/index.html","b34e740b8d09bbdf5397ebb2f6c3464b"],["/page/4/index.html","9c13828a5a4f56837497932dd827963d"],["/page/5/index.html","1addd157bf6c1ec9a8ee37e91d889bbb"],["/page/6/index.html","e3ce92a67ec7b661c3873d01fc31f056"],["/page/7/index.html","9290f8bd8cc395117b29967d970ac7a9"],["/page/8/index.html","df106065b4846485a5a11288da479bdb"],["/page/9/index.html","3d5f94b03da1561cf9a0e97a05ed7bcf"],["/sw-register.js","fe9d9864e1fa61b188179392db0ce0df"],["/tags/ADC采样/index.html","17f875f118eda8bfdafb297e16c4dedc"],["/tags/Block-NeRF/index.html","9acfdeb2dfccc8afccd544738db2a94c"],["/tags/FPGA/index.html","ad010f8cb3d4fc3bbcae433e14a10f66"],["/tags/GPS/index.html","d3d866c23153dcb10e6f714897493bd6"],["/tags/HAL库/index.html","41e600ee547372e57eada0e496064369"],["/tags/H桥/index.html","5a9d5ce795a1965c47d683a988da750b"],["/tags/JIIF/index.html","3313677349ae6588f3b79001e00b8fdd"],["/tags/OLED/index.html","8f89cba69408205df58c2d1d926eb090"],["/tags/Point-NeRF/index.html","8b2d2e24cedc3820c69acb0eb42de9aa"],["/tags/USB/index.html","d9dd4cdc20ec22529d02821e117c8901"],["/tags/V831/index.html","1bd69decd83f9843510f1ae0932b93f1"],["/tags/adb/index.html","664f74bf8ec66ab0e91da98069bd8d3a"],["/tags/amg8833/index.html","b68c95e66349beb698cee29a97a72260"],["/tags/auto-js/index.html","0cc3833882d7a300620298b68947e830"],["/tags/bard/index.html","f64f0dbdd4cebba94cc32af6a18ee51b"],["/tags/chatgpt/index.html","69124441a9313918e4f715a4602e8640"],["/tags/cmd/index.html","90eea2f2935bffca47f9dafd2bc3ffec"],["/tags/conda/index.html","9a9ad52eb9324c2aea7e93c02eae0b5a"],["/tags/css/index.html","0bd7e025f8fc1ce25939a76f3540db8c"],["/tags/frontend/index.html","d04903dff2c026e8d13eeb95617bb0cc"],["/tags/git/index.html","5d1527cd5570d90cfcb18709db6cffb8"],["/tags/github/index.html","253551c5fbe65e955a2c72c05f765469"],["/tags/hexo/index.html","1d59e5fdd4f28550261d6a698c356e1a"],["/tags/i2c/index.html","36ae7ee1150a1ecc7c02e2c379846dd8"],["/tags/index.html","e004bd63ca5f80db035d09b724c0402a"],["/tags/inte/index.html","38ed0cd4a5b93f20442e14f994b97a83"],["/tags/k210/index.html","e2d115e54f7ce779da0d1560870a6c01"],["/tags/learning/index.html","f53b0367a67c010e5aa483927d8dc2de"],["/tags/library/index.html","8238eefa91eac1b9ae997badd969ff2d"],["/tags/library/page/2/index.html","f659a749c688f7f24ee2ad1ac860f169"],["/tags/library/page/3/index.html","c1744b5022cf0e5887d9bd96ede20504"],["/tags/library/page/4/index.html","12d5f1219387293a530738f5af069180"],["/tags/library/page/5/index.html","ca61f511c2b17fb326a89b92b32fc003"],["/tags/library/page/6/index.html","f12d364b36d3b70af3cd6fb28c4ec1ec"],["/tags/library/page/7/index.html","7a2f82223af8443c5f8464c5a4070f32"],["/tags/like/index.html","c3e90fe6e970c6f1fab033acb8de0e72"],["/tags/linux/index.html","8f4791f858bfb4735061c4671e11bb71"],["/tags/make/index.html","9178c9f35b60dd3bfcd9d0ccc1424a55"],["/tags/matlab/index.html","cf1ff3ce2087065e1e4494afef063b76"],["/tags/mine/index.html","6ccad4f9b6c79735c557a5cccfdebda7"],["/tags/modelsim/index.html","174ec7e5c60da51be2f852c8703d3f49"],["/tags/nerf/index.html","959ac115973f15bead7830693f84dce8"],["/tags/nrf24l01/index.html","9caee6d3b67600d2a521fb2d78d3a4d0"],["/tags/nuitka/index.html","1012cf9ec3b0f789c039e243f59195d1"],["/tags/numpy/index.html","171debda18586d39c53111d1b15d93f2"],["/tags/onnx/index.html","26a6de14c7e1ffb9c141c04e313e0390"],["/tags/pcb/index.html","91a684206b23366f2da04a7852053796"],["/tags/pip/index.html","a675aaf31e7a43d702f4fd84810f8b0f"],["/tags/psutil/index.html","38611c49d147418f8cd407f507dd30fd"],["/tags/pyautogui/index.html","27ec391a57b57c534e8cd5c63046f1a6"],["/tags/pybluez/index.html","e04d23e6a82ebbd5bb20c75b8f2bf29b"],["/tags/pycharm/index.html","a29154e7c8509f57755117795539d52d"],["/tags/pyinstaller/index.html","32fc7841dff9b3580d1b01b288c4bffb"],["/tags/pyqt/index.html","15781cb96e07c8685d416a3578c5059c"],["/tags/pyserial/index.html","13f29c03cf58917a8d65acaba7128195"],["/tags/python/index.html","ed5ad4f00203e2ad21f09c8498026290"],["/tags/python/page/2/index.html","73948b73db1c5a21fe54c23f3830e5ee"],["/tags/regedit/index.html","0fece40f58d8326793c0d92cd3e7f5b8"],["/tags/solved/index.html","5a379e0ef6ff5e4782043fe2435d82ef"],["/tags/solved/page/2/index.html","74430fbc93b27e36d83371e36169eba6"],["/tags/spi通信/index.html","666d1c94282a98a6ffdbd4114ebf890a"],["/tags/stm/index.html","e6174e9b57aa54fe1de587a92011daa2"],["/tags/stm32cubemx/index.html","2ca185abab9314e08bff903c42e2cb53"],["/tags/tensorboard/index.html","a43b46a358d4317e7206d7481043caba"],["/tags/torch/index.html","47549f4b8649dac8e6f0b58d83119fa7"],["/tags/typora/index.html","62c4dd2ab781dd8b5c1550e1ccbf9e0c"],["/tags/ubuntu/index.html","e86ddf7e0ac55de8430b71cbb3ec0856"],["/tags/verilog/index.html","52d78682a080c6f553090cb0254dd523"],["/tags/vue/index.html","effb193e60c8cb518526516392e7204c"],["/tags/win32gui/index.html","2308bcf46d0471b5eee00b5285f9fcd1"],["/tags/windows/index.html","738f9e96d1a1dd3d812ab238b04d5742"],["/tags/work/index.html","39c4350e39595cfeb7b941a8a2896f01"],["/tags/work/page/2/index.html","334a1680522069737afaff3cf414adbc"],["/tags/work/page/3/index.html","05ab52cfbb823886b91244d8a972f93a"],["/tags/下载视频/index.html","61871f415bc892c823de3e117de59492"],["/tags/串口/index.html","775e9b58855e523796e52d88a24ebeb5"],["/tags/代码/index.html","351a21dc8d597a4adf52974adc84faa2"],["/tags/全志F1C200s/index.html","59512b4d4406a1e8e1596c403a90abb0"],["/tags/公式/index.html","9bc5dd71ed542d317176b0a43f8eb2f9"],["/tags/前端/index.html","11e411c167e7e64f34955092b0c1a8f0"],["/tags/博客/index.html","2ccb3d7125f012774dfa7ad5a6aabc7e"],["/tags/国产/index.html","621638809914aaa55b4873378837f14b"],["/tags/多光谱/index.html","16bb978e13597bdb21eda0b8659e6a08"],["/tags/嵌入式/index.html","fc17926ba1386b42d142e8adb8fabdca"],["/tags/嵌入式/page/2/index.html","da869c7e4e011c2b36367b6af069aeb8"],["/tags/嵌入式/page/3/index.html","7dacd926fea63f69ac1406dcaf82f90e"],["/tags/嵌入式积累/index.html","75dad83dcf3f8a60583a70dff2b67f6e"],["/tags/开关电源/index.html","eee624325d5bf6b337adae7d855e0110"],["/tags/开发板/index.html","bb83861f81d09e2d60e22feb53095beb"],["/tags/忆阻器/index.html","9fb776b64376d6abf6067be65772f2d5"],["/tags/快捷键和常用指令/index.html","9775fa4314359c00fbdf48ecb901219b"],["/tags/手机/index.html","d8e0e8b48d200c30cb985286c06fd9c5"],["/tags/打包/index.html","b1fab1f080480e270b71e6ce43ac4b91"],["/tags/控制/index.html","3a27e5e9f339b2846c62519806f0c245"],["/tags/数学建模/index.html","f3d605960d3dd16f2902a7f54aa6539e"],["/tags/数据处理/index.html","08d477ecfb83ff18c69f82562413e1dd"],["/tags/数码管/index.html","e903676beae906eb2485bb383d8ef021"],["/tags/整数规划/index.html","370242d79301edad0aed40ea31c10aaf"],["/tags/机器学习/index.html","40c6ccbb208e77e87cae1ff42c5b16a8"],["/tags/树莓派/index.html","e53fc5721d47bc5f6f8dac15f00dc606"],["/tags/模块/index.html","9dfffec1bbfc016f255d90b5a051266d"],["/tags/沁恒/index.html","590491a0fafb8cf583addf6b72485a2b"],["/tags/测距/index.html","2253d82538c6b4a57c908845e221f6e1"],["/tags/深度学习/index.html","85a1b32fd1cee6aa4f2ebae16c4e6283"],["/tags/深度学习工具/index.html","fecb49cb3acc14e6450ba440efee3da7"],["/tags/滤波/index.html","0c69d6eb43ed7c81cb87ba3b579ea6d8"],["/tags/理工方向/index.html","9c2a1aa76ddcfbdd38aed3bdc5908a8c"],["/tags/电容触摸按键/index.html","0452801eb1b2a3a7247bb70a983bc0c1"],["/tags/硬件/index.html","37bc68bd9d533716f7b1d3e487a260c2"],["/tags/硬件知识/index.html","cadd33bde211548100d3dec248964279"],["/tags/积累/index.html","e9d834664d917d43aba7a751a30fa502"],["/tags/算法/index.html","8c8fb7fbe437c3f3269690b76739cb85"],["/tags/线性规划/index.html","5a1d0d0ff24b73a00f3befe7eff04511"],["/tags/经验积累/index.html","28951bb1806d1a582f8d836ce44d0dca"],["/tags/编码器/index.html","3f708c219505121548b6c0a727902db1"],["/tags/网址整理/index.html","f1edb23e0271694f2191792b2cc61c8a"],["/tags/网盘/index.html","fc0826515f4143e41bec24130d97c0b6"],["/tags/航模/index.html","d22923b0562917f1a59f2132864979a5"],["/tags/芯片/index.html","d596210c2a732373c8b7f2b4d6a596a8"],["/tags/蓝牙/index.html","fb8ebfdafaa42581d2da8e2fc01e2c24"],["/tags/蜂鸣器/index.html","64d881752c38e1ebd0603744ce6ff193"],["/tags/论文搜集/index.html","d839b8ebb8cc5c77cb8abd4a6dbb7a87"],["/tags/语言/index.html","9078a6f761eb1034b088603a53cf85fb"],["/tags/课内知识/index.html","afea6d067858ceb917938ebba0815e08"],["/tags/贝叶斯/index.html","6f2e33d16031dc7593222d7313665fc2"],["/tags/超声波/index.html","b8221378575feb9943d982639441dbd1"],["/tags/软件/index.html","7090b41fa34615388d5c6854e87106ff"],["/tags/选型/index.html","e00c38cd1f4be4eb2a4ea402a688743d"],["/tags/通信/index.html","add2a065e2b4d47f69a29dfc52c6755b"],["/tags/钢琴/index.html","660170606b04ef7c0caca4adb7fc9255"],["/tags/键盘/index.html","b985e356c4bb718aec516dafeeb19566"],["/tags/陀螺仪/index.html","32fc41bc32f2b3c9caf37e54bf104049"],["/tear/index.html","8986479856471548c0916263ddb126f2"],["/tear/index1.html","adca73ccc1b99957dcbb9facc92811e6"]];
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
