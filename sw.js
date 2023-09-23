/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","5b555b3ca355f5d476d08cc725c86df9"],["/archives/2022/09/index.html","675db5901979cdc9c1a5d51a5e57bef1"],["/archives/2022/09/page/2/index.html","762e92ea36a99d25f91f5efd012ea616"],["/archives/2022/10/index.html","41d4b231291e9dfd77ca5508cf2a48fb"],["/archives/2022/10/page/2/index.html","2d1ceeeb5b44c4e676caf5b16a9a2e53"],["/archives/2022/11/index.html","c1c593ba4395455f7c4f93ec72980951"],["/archives/2022/11/page/2/index.html","bd5ffc62e70955d475df6225eaa3bc11"],["/archives/2022/12/index.html","77cc37431454479836b51f713187775d"],["/archives/2022/12/page/2/index.html","63c22c0ddf6954d15c6a830ebbce2b83"],["/archives/2022/12/page/3/index.html","1be4c7366df8d48828e24441b30a5b3c"],["/archives/2022/12/page/4/index.html","0a2fbaa4137818b8622992d27562ba5d"],["/archives/2022/index.html","76d79be72c925e7fbf576bf94a59a035"],["/archives/2022/page/2/index.html","b5908543654188fb5c5c776509d2d949"],["/archives/2022/page/3/index.html","d8fb7b205249e20ca2c200bf64830b2c"],["/archives/2022/page/4/index.html","ed3090ad666ee96433e3423b6d75501d"],["/archives/2022/page/5/index.html","10a8ad72b3dfc7a2665a15292b2063d4"],["/archives/2022/page/6/index.html","9074f6f991ec1a90e6dcd05996d1c52b"],["/archives/2022/page/7/index.html","2b3eb7656c16a6f292e74944ace8ab06"],["/archives/2022/page/8/index.html","c8216c7a8338566b6be344c677fe8b75"],["/archives/2022/page/9/index.html","fd96d2a605b3ed3552fc9e9ccfed3391"],["/archives/2023/01/index.html","8631f7d184a4937b69896088c51ecbc4"],["/archives/2023/01/page/2/index.html","5af64a8fd675e33da4122393364b2589"],["/archives/2023/01/page/3/index.html","3bb4a0750134d16b6b1d225bf3c88b23"],["/archives/2023/01/page/4/index.html","0a5347150311319746a3aa1ebda684aa"],["/archives/2023/02/index.html","e1267ae7819552ded202e4aa94735599"],["/archives/2023/03/index.html","a01fc94f2d74ac1a84c4920839a73e8b"],["/archives/2023/04/index.html","91d8906450e8429fe5b1bd2251f1be9f"],["/archives/2023/05/index.html","9fec3168de09e3db285700d4423af59b"],["/archives/2023/06/index.html","8cbcfccbb168fa5ac9893b769f9d8cf9"],["/archives/2023/07/index.html","ba1553e84d52f1213b31c311d7370577"],["/archives/2023/08/index.html","6575cd2a1cf7ebcd6ac65b3092ab15e5"],["/archives/2023/08/page/2/index.html","9fca56150323d11127bf7a55d7214e16"],["/archives/2023/09/index.html","1c87f98fc9579266bec1a4ece3fae195"],["/archives/2023/index.html","702abf511b00524af75bdfb38dba10d6"],["/archives/2023/page/2/index.html","af3d37a9e440952eb79e837806efda0e"],["/archives/2023/page/3/index.html","21ab1be8488b94976930b97aa6b4b284"],["/archives/2023/page/4/index.html","0bc03ee17220f0d3bdc0b61a3f08c04d"],["/archives/2023/page/5/index.html","56c74e2e2d4d85c955563202176bc3f5"],["/archives/2023/page/6/index.html","fa3e8c52935ad3d2a0ec8396ad3b15d7"],["/archives/2023/page/7/index.html","a7387f71803c23b99fb5e0f990419ecd"],["/archives/2023/page/8/index.html","c631b12cda7949781b2bcbb91cdb3cf0"],["/archives/index.html","7509a8960d2dc2db0970a66017d4094d"],["/archives/page/10/index.html","5ed850ca27e1d7542f6dad7cb19c1504"],["/archives/page/11/index.html","80e30d070bc5a2b7325780cce9250f63"],["/archives/page/12/index.html","9e0fb000e70f70d6dae68d406677bc35"],["/archives/page/13/index.html","c841fff0b0e7a96a9d9effb3aa593538"],["/archives/page/14/index.html","7c79002eaf7304b492fef92d379fe931"],["/archives/page/15/index.html","fb1130502620c599dc90b7877d3202de"],["/archives/page/16/index.html","2487c0340c38e2f62ee2b317ef0be4eb"],["/archives/page/2/index.html","712fde34def5472ad00e74da587551de"],["/archives/page/3/index.html","97b12f46aeb83e995158085d6bddd9ed"],["/archives/page/4/index.html","8266e816dc951a859f3675bafbb46b49"],["/archives/page/5/index.html","0a679e44f9f049ae4804c06a513cf6ae"],["/archives/page/6/index.html","61de989fb6ac02b15676f18a3efa1d22"],["/archives/page/7/index.html","9f234adacf8256d76eef9abb07d94c1f"],["/archives/page/8/index.html","56bee5cef1bee817fa272156bb6755c6"],["/archives/page/9/index.html","c57853d740e07ce7c56f66678c473b40"],["/baidu_verify_code-ZFSCabM1PJ.html","3385a1bf977f171e5ffdae075b9ccd8d"],["/css/main.css","7bb4db83bd2aefe1d7352c35dc867c55"],["/css/spoiler.css","eb373af0627ede298867ffc0045da62e"],["/failed/【硬件知识】vco压控振荡器.html","e7d6b06b2de158c38047667d8eebe020"],["/failed/【硬件知识】vco压控振荡器/1665803607390.png","3df26768c0d97b3acbb64c7f4738f15c"],["/failed/【硬件知识】vco压控振荡器/1665803663941.png","38d29c573fc0aab159543ee6f3d6b31d"],["/failed/【硬件知识】vco压控振荡器/1665803862765.png","f7e2165483ca1f224fc47019c9d85839"],["/failed/【硬件知识】vco压控振荡器/1665803865723.png","3da7b08b88d8795e53d03a47e1926277"],["/failed/【硬件知识】vco压控振荡器/1665803871404.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/1665803883747.png","9601e1216b6e8246b7f1b1887108f8ab"],["/failed/【硬件知识】vco压控振荡器/clip_image001.gif","ba898c600ecfdb213d2223a0f783c808"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803844893.gif","fb05fad8f7ca3e4d9e40000a9ab1dc09"],["/failed/【硬件知识】vco压控振荡器/clip_image002-1665803856973.gif","e1a4cd1747beecc7d92124979531824c"],["/failed/【硬件知识】vco压控振荡器/clip_image002.gif","0c0f42f02d474126082016d250804bc4"],["/failed/【硬件知识】vco压控振荡器/clip_image003.gif","1f489bb3e02d4993cdd501f7ec773812"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803844893.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image004-1665803856973.gif","09cde39109369f9185d1cf128c6d7c2d"],["/failed/【硬件知识】vco压控振荡器/clip_image004.gif","32873c471ff1058abf9d6d09ca5e45f0"],["/failed/【硬件知识】vco压控振荡器/clip_image005.jpg","ea2dddfe9b1da4f406ee36b37c99e72e"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803844893.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803856973.gif","b0138096b0fc7682435ad07aeaf159ce"],["/failed/【硬件知识】vco压控振荡器/clip_image006-1665803982819.gif","6540947f9843ab822d3e8eeb7ef621e6"],["/failed/【硬件知识】vco压控振荡器/clip_image006.gif","6290aa2f8360b2a4f05e4c09e4d6bc80"],["/failed/【硬件知识】vco压控振荡器/clip_image008-1665803856973.gif","560b736f1eb0faacf034adab49d2c620"],["/failed/【硬件知识】vco压控振荡器/clip_image008.gif","113b77d852979982495a775ea4d973d1"],["/failed/【硬件知识】vco压控振荡器/clip_image008.jpg","aad87f9838e93808a0caed1ece93ffac"],["/failed/【硬件知识】vco压控振荡器/clip_image009.gif","fd6cf84a1333733613c80d5599c0fbdb"],["/failed/【硬件知识】vco压控振荡器/clip_image010.gif","eaa063e3d871f7c40777c68c475fed91"],["/failed/【硬件知识】vco压控振荡器/clip_image011.jpg","fa6d15386072d8a691d18f9c3a53b426"],["/failed/【硬件知识】vco压控振荡器/clip_image013.jpg","cea0cb9334e0d5f1b84beb2fcd8b1245"],["/failed/【硬件知识】vco压控振荡器/clip_image015.jpg","660345ebf2132d1bcdd9a7455529093a"],["/failed/【硬件知识】vco压控振荡器/clip_image017.jpg","29517d76c214adc17343771d2d804679"],["/google41a28d5f2878fa02.html","3d6d8a75a079dcd20f85287e7fef82cb"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/tou.png","578463708d7de56a1c4e6331831b3e2e"],["/index.html","8561d1342ee06d424763f2e2bb7a44f3"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/code-unfold.js","e079f1fdb88a9edcd745220494218e88"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","97606f901b6e488587ad5c49aa367604"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/mylibrary/css/float.css","c525bcaca168ce4751ad2cd3bec61845"],["/mylibrary/css/hide.css","bf3254a37d705fd3b566383f42da07b7"],["/mylibrary/css/load.css","9c51ed86b3cc0e0af3222c783f9fea86"],["/mylibrary/css/neon.css","8d233c4621cb4c0bda68585cde7c6f9c"],["/mylibrary/css/round.css","ebd73a5c5d2726891a02588fc9f07222"],["/mylibrary/css/shake.css","52dce07a5d334bbfe55a197b48d14475"],["/mylibrary/css/shiny.css","317bc4102116d7d36d36cdfba15f4326"],["/mylibrary/index.html","b06bd09d46cf6a7778cecf4401752976"],["/mypage/css/style.css","c8110fe712bd8edac9df3e48184753d6"],["/mypage/font/LigatureSymbols-2.05.eot","5b46f67c079e0599f89aae807cdad560"],["/mypage/font/LigatureSymbols-2.05.svg","f4be952f02a00bd7b464568304b12842"],["/mypage/font/LigatureSymbols-2.05.ttf","48ae0b91a8d6e1feb2c15961a338dad8"],["/mypage/font/LigatureSymbols-2.05.woff","f974884f441019724c351f85478b3938"],["/mypage/font/README.html","952ca4fe7ad3ee8503f01754b5047720"],["/mypage/index.html","5ecc024ad4deed973b258aa45c59facc"],["/page/10/index.html","c55a8ca263320b4a17e58234cfc197b8"],["/page/11/index.html","b642dc7bd7e1ee2e531c3bb613891440"],["/page/12/index.html","41f5f191740af79c8571aca4a165c6cb"],["/page/13/index.html","d0d7bbfce6d6eca277a92594ff9bc98c"],["/page/14/index.html","977fd7dc5c71cdedd203a2dc6570e40d"],["/page/15/index.html","1ba6796351c6c4d7bd3f05ced24d7025"],["/page/16/index.html","c84e9451b68da5e4208cb87bed3549e1"],["/page/2/index.html","889ca07d75acff8fb6f9938ac7e20057"],["/page/3/index.html","5d774f898a135db390700c5791be4321"],["/page/4/index.html","f99670db4d1ca997f3109bb166578ccf"],["/page/5/index.html","453368dc8e1c27c9d4a91ed1a339f2a7"],["/page/6/index.html","195bda50172377af52362d592e1dbb61"],["/page/7/index.html","31d7835dcbbac6d4cd11b8ac998ae820"],["/page/8/index.html","9e30914ef2a7f6d8b8b1abc04aad0fa7"],["/page/9/index.html","7d89cf15541e065a1b39a7c00c7db075"],["/sw-register.js","83a39b8933c33051520c553bff381918"],["/tags/ADC采样/index.html","40285595d51bfe654a1b4deb9b748226"],["/tags/Block-NeRF/index.html","00527d80dca8c92b2abed5159ec7522b"],["/tags/CV/index.html","1e8a77df77c9ed6947c3f6c7db4d5d4b"],["/tags/FPGA/index.html","a0794e9cd7b2eba40703a688344b704c"],["/tags/GPS/index.html","eba3ad1e46228eb796268368a4dddef6"],["/tags/HAL库/index.html","e1edf01dc60e365fc4c87104024923eb"],["/tags/H桥/index.html","84a2fb68e626af73d5c3a93e14348e2a"],["/tags/INN/index.html","61448b49842c31ea1479a28fa99d0a7d"],["/tags/JIIF/index.html","08ce427c96bfc559c7324436c31f91ea"],["/tags/OLED/index.html","1181fd2ddfc460df96bd4701bf8f5e1a"],["/tags/Point-NeRF/index.html","1d4af9a7143c35da2bf1ada0a47b02e1"],["/tags/USB/index.html","56348a05cc875a19c5fcd6398b6290c3"],["/tags/V831/index.html","a9c4c7f5df553a91c1e986363c6bbd96"],["/tags/adb/index.html","5515bd5018afb3bad9f416813f924ef5"],["/tags/amg8833/index.html","0299dc5d1f31fd2a127ffb2157cf1325"],["/tags/auto-js/index.html","b4a456f367c61622aa3898cd20f90d36"],["/tags/bard/index.html","9332126436cb7efda70bb6997e349699"],["/tags/chatgpt/index.html","0ce52857422f5703197787e3e7db2750"],["/tags/cmd/index.html","ee76b69a78f6a4ad5f1557ad7a580ac7"],["/tags/conda/index.html","1807fc918020c95a6161aa8eacf03d23"],["/tags/css/index.html","fff87897f765491300c2e6e33e10707a"],["/tags/frontend/index.html","baa28efc39d5f8bd7d4a1c496e309dcf"],["/tags/git/index.html","7015cb32f3d25256e1fb2c662f85d429"],["/tags/github/index.html","438ae749e624bfa65fcb31293a64aa0a"],["/tags/hexo/index.html","fd9225c4bea354d9460c4c15131d19ee"],["/tags/i2c/index.html","9d8f021b748bb1fbf75045b7187bc9bf"],["/tags/index.html","e761bd86b5e9ed8a65cb766674e29a23"],["/tags/inte/index.html","e44612887641d487e33f0f641f8f3344"],["/tags/k210/index.html","78c1fbcbcbcb0826daa104123623e27c"],["/tags/learning/index.html","6f8acf53e161700e74c4bd9206abe8fe"],["/tags/library/index.html","5bfe44dccef9eaf8c201622a45250dfb"],["/tags/library/page/2/index.html","90ac9ad908f9f4bc0e68dca29e02b8c7"],["/tags/library/page/3/index.html","fb5bbf408dc0641da094f2e6f7e08d53"],["/tags/library/page/4/index.html","8a3acc21130e56241577390a5062c862"],["/tags/library/page/5/index.html","b7d49b7578ac94c39602f79ce1837cbb"],["/tags/library/page/6/index.html","4dc5c043830d3f5d1bbcd30e0012244d"],["/tags/library/page/7/index.html","fa02b1985bc560cad82dac9c2cf01a6b"],["/tags/library/page/8/index.html","300ff6bae266e0ef189d643a45bce6d1"],["/tags/library/page/9/index.html","b7320ec4e454e46dddbc93669216ee59"],["/tags/like/index.html","563b42854f5c253bebcf7e86a3121596"],["/tags/linux/index.html","42f974787dfdcccf903702361517b2e3"],["/tags/little/index.html","c484bc4e7e6be7bc5617bf4464619251"],["/tags/make/index.html","68e4f663fa62c28f149b284b623f67fb"],["/tags/math/index.html","c75692e98cce2cf526645c5e1d6f592f"],["/tags/matlab/index.html","a742ec74ac86dccb8c66362e2e1cb065"],["/tags/mine/index.html","5c4f1a0049cd8130156e16a6bcad477e"],["/tags/modelsim/index.html","3eb11dfdaa3108ae6d258274df70bf39"],["/tags/nerf/index.html","6932c1267703679677ee62cc47bb7bb4"],["/tags/nrf24l01/index.html","066a1c68b06afde3b5aabd1f308dd44c"],["/tags/nuitka/index.html","c84b3d8cad8b73b30d01ead74ad3289f"],["/tags/numpy/index.html","92f9cd81570ef32ec35b987c9ebabc2f"],["/tags/onnx/index.html","3611f8aeebe891fa4dabd0e607bc46fa"],["/tags/pcb/index.html","062600f05197a732f8f848ce9f9a30f3"],["/tags/pip/index.html","37fdeca17ffda055c22ad3ff5e490353"],["/tags/psutil/index.html","801a7bd3618dce3c34273ef14f746409"],["/tags/pyautogui/index.html","c8018b6114e3e233da179590f2d90a3b"],["/tags/pybluez/index.html","8960d2550851e47f1c639122be8fa957"],["/tags/pycharm/index.html","3cd92e7c05c1c3bdd16b4f148839823f"],["/tags/pyinstaller/index.html","1560580912f0aea48ef1e8e0c1ad7b51"],["/tags/pyqt/index.html","c74f55d680b180286d6478c6cfa8bec4"],["/tags/pyserial/index.html","8b359ed6b6a7523fd175ead355ab9e4e"],["/tags/python/index.html","2d4fe403c1aaf3de438808fb4e44ccae"],["/tags/python/page/2/index.html","2368d3daf5c0e540c68a29d45ceaf85a"],["/tags/python/page/3/index.html","5828237f86dc5645ebd706db1cd0af21"],["/tags/python/page/4/index.html","40cf25856bb1e654acfb4b46709dfc57"],["/tags/regedit/index.html","1f0a259b2901f42732e780b10bfa0973"],["/tags/solved/index.html","c66377cc4b07f237ac756b4f539d5549"],["/tags/solved/page/2/index.html","1efd4788ad92ede65e25f3c36eff3d6d"],["/tags/spi通信/index.html","a9b4c696a905e1b5da51a5ad7627462c"],["/tags/stm/index.html","de45e3f8da3aa93ba82b8874c09108ca"],["/tags/stm32cubemx/index.html","ab9b78a5a5064e25bec7932211a7e2b7"],["/tags/tensorboard/index.html","e13b8bce1181456ca433e8e80e219a6a"],["/tags/torch/index.html","c3f9a4d75d0981c11f0770d0cbcf3644"],["/tags/typora/index.html","cae8bd877ccd41999d87bdf895349d93"],["/tags/ubuntu/index.html","6112161163b099e9765549094fe75c82"],["/tags/verilog/index.html","b251c41f2ba7538808114fbf9bbcc19b"],["/tags/vue/index.html","cb0bed6cd874bb5bfabd72b69cbceefd"],["/tags/win32gui/index.html","cd6b5f8e637ce0e5a12232d79ee849f9"],["/tags/windows/index.html","dbdf4fc11792fd8862273ba34bc7d317"],["/tags/work/index.html","0ef20ac0f2f1d571c348377a1c72eb20"],["/tags/work/page/2/index.html","a0d9f9ec7287e169ed25725fe61e9130"],["/tags/work/page/3/index.html","06d89f04e8716e9a743b7d8fe3d34148"],["/tags/work/page/4/index.html","7a2b75ce83793e20bcc188338bd8b408"],["/tags/下载视频/index.html","5c5176f1867b265b8c1970425323525b"],["/tags/串口/index.html","51e164b30f55a78c5f56c32004d837a1"],["/tags/代码/index.html","24a3fecc79b6360e505a09f54c9a6839"],["/tags/全志F1C200s/index.html","ff74ad32652b290c56dd5b2eb9ff50fa"],["/tags/公式/index.html","9b5c373cd9ca463e649c518aabcd812d"],["/tags/前端/index.html","abdad646c5c788b6a320150f29e08a90"],["/tags/博客/index.html","5520a84f75969f18fce9be90a216b60d"],["/tags/国产/index.html","b42a80934f779e94d73a0ed968803fb0"],["/tags/多光谱/index.html","568b36ffde11b849530642d8475e8e29"],["/tags/大学/index.html","e15e8f24a2805888a5b10e5061395c2d"],["/tags/嵌入式/index.html","054e925a9333eda3dd6f5d8ae0f60bea"],["/tags/嵌入式/page/2/index.html","bec4332301cf843fc399b12dac3b4641"],["/tags/嵌入式/page/3/index.html","3b9da985f3ef5d7a51323c81bdd2874e"],["/tags/嵌入式/page/4/index.html","bca686cda45f83936ba94eeee43394ed"],["/tags/嵌入式积累/index.html","06af585e3ad29bf7222722cc8a910bd3"],["/tags/开关电源/index.html","749309b1a65b1d20a2ba740fab5aae2c"],["/tags/开发板/index.html","9e467a60505db45b65e619f9a93f51a1"],["/tags/开源/index.html","a423a6d88827ba979584bbd8b006e166"],["/tags/忆阻器/index.html","407fd60f87eda281a19675c080ce5eac"],["/tags/快捷键和常用指令/index.html","feb265dbaba0d09475d63b49ca05bd4d"],["/tags/手机/index.html","85b860f06173a6bac9e5a74df6f56f09"],["/tags/打包/index.html","bb2b1624f5065f6847e7233c2f09e118"],["/tags/控制/index.html","418566b38e997814864e65484b0c840e"],["/tags/数据处理/index.html","3810f5451103f5cf2845c34a4d66b4fd"],["/tags/数码管/index.html","8470ec6d55c6346f5671c3a8a4b14e27"],["/tags/整数规划/index.html","de9e727533b7d7ffb5ccb401f77c88b6"],["/tags/新加坡/index.html","0bad60cdbb97944150161ccd073cfb7e"],["/tags/机器学习/index.html","6a396fab4b88a8950113e0351fd987ef"],["/tags/机械加工/index.html","b2ebfe19d0a9caf7796ff3eda554ceb6"],["/tags/树莓派/index.html","cb7e856f19e93cfc6448b9c323a7ab31"],["/tags/模块/index.html","ea3cd208504f3efb36afc90fe0442f66"],["/tags/沁恒/index.html","620c14f4fd4d5a6872d35babb48fffa9"],["/tags/测距/index.html","dba7b040b2f0764d60c654966635c63b"],["/tags/深度学习/index.html","03faf2c302f0d526f3a9d4bdc4a72f93"],["/tags/深度学习工具/index.html","6b9b48e97b7bddab4fd25ac1564e2df0"],["/tags/游戏/index.html","a0e107d9d347839844a0fe63730f0c92"],["/tags/滤波/index.html","117160d289672b4ece31a5c06ae0b4ac"],["/tags/理工方向/index.html","fc7734a2af98df9fc3a06c9225196f6a"],["/tags/电容触摸按键/index.html","abc491e0655be37f31cd6895c184a4b0"],["/tags/硬件/index.html","ad59d6e547e8c93b8a3d956c8530e007"],["/tags/硬件知识/index.html","b023db044bc9d9f8b5eca9ca4ef1660e"],["/tags/积累/index.html","441f940eae7ad96bfe54b0a94da1521b"],["/tags/算法/index.html","3b2d465de11b4c03798d73d07f464251"],["/tags/线性规划/index.html","7f5fad5296810e5f597744e87d5c5aa7"],["/tags/经验积累/index.html","47e0a7bbe5300719ac47b772d6903c4d"],["/tags/编码器/index.html","727c4140c16f0231e7591359cc622e8c"],["/tags/网址整理/index.html","9392518e04be317517c15741a63b7858"],["/tags/航模/index.html","cc01fb53ec5a7c46ce118e7c95043f91"],["/tags/芯片/index.html","e8540a9f03c865c7801614c3e46de9fc"],["/tags/蓝牙/index.html","f6f1c8b1f77afca1b89b12277c701b14"],["/tags/蜂鸣器/index.html","e08fd015dae3c10550a19b1ac511f3fd"],["/tags/论文搜集/index.html","6e439e1f60d66b7d6e68c58a30dde166"],["/tags/语言/index.html","bb1cc4752aa0ac118332e9bc0a734e5d"],["/tags/课内知识/index.html","1ae6bef38448ea75c2abcc23a516de95"],["/tags/贝叶斯/index.html","716fcfe2db12a755cb0613f983cebe7c"],["/tags/超声波/index.html","fce3a5f2f8d98c89245ada91ab274089"],["/tags/软件/index.html","e522806c66a7ba3b95c89c6a40204dcf"],["/tags/输入法/index.html","d28babdc77b23dd5f92537d710cad6b8"],["/tags/运放/index.html","6bda88e7fbacf46e71ef0268b341688f"],["/tags/选型/index.html","6f0f0c809e66a7bd33e265701419c5af"],["/tags/通信/index.html","387d53f56f26fd1fdba71cd44e9ee125"],["/tags/钢琴/index.html","f5c5ecdc173970a625cec45e96ea6a2e"],["/tags/键盘/index.html","4aeed417e196989521257f1ee51f13de"],["/tags/陀螺仪/index.html","9c2bd1b902551a62541f95952e2cc823"],["/tear/index.html","f313775d4579bc929b6bed3e1a370daa"],["/tear/index1.html","50f90d560ac0a2b2fb293c8cbdf07d65"],["/undefined/一下都是0/index.html","d115f6d4759890b5e53da398664b5aab"],["/zh-cn/learning/开关电源/【开关电源】学习1——buck/1663506637120.png","8e50e1a9a14c0174f21513f95808f075"],["/zh-cn/learning/开关电源/【开关电源】学习1——buck/index.html","e7a11c719420ec42364f64322e493424"],["/zh-cn/learning/开关电源/【开关电源】学习2——boost/index.html","b315c50bb8c5ead707ef24e8a2166dce"],["/zh-cn/learning/开关电源/【开关电源】学习3——VMC反馈/index.html","1a287313828fb2c9f038372f396aaaa8"],["/zh-cn/learning/开关电源/【开关电源】学习3——buck-boost/index.html","ca3c269de788d25b40717f8351a76c03"],["/zh-cn/learning/开关电源/【开关电源】理解/1663634083260.png","7b1a889ee96c83e170023666681c9131"],["/zh-cn/learning/开关电源/【开关电源】理解/index.html","4bdea97b0daf574fc96acaab54c08b86"],["/zh-cn/learning/开关电源/【开关电源】进阶1——稳定性判断/index.html","30003f43ac90a04bca36a8f97b4eb309"],["/zh-cn/learning/开关电源/【开关电源】选型和使用/index.html","78d03051f1fbb8df0c53c1a90159cbca"],["/zh-cn/library/CV/【CV】基础/index.html","7b0dfcf80a9d13dc19ffebc61878d590"],["/zh-cn/library/CV/【CV】数据集/index.html","a79befa3fe883fbdaaa15a6a8ceda972"],["/zh-cn/library/CV/【CV】经典论文/index.html","9a1e0139ac428f4206fa43d85db1d886"],["/zh-cn/library/CV/【Transformer】attention基础结构/index.html","f5db762b6dfd05dcbc37896bd587ab1e"],["/zh-cn/library/frontend/【adb】电脑连接控制手机/index.html","9457c3864db33af94e4e1915d9c644f9"],["/zh-cn/library/frontend/【app inventor】拖动滑块写手机app/index.html","5dad35d61bd465941537e8c0b7ee95b6"],["/zh-cn/library/frontend/【auto.js】手机自动化控制/index.html","5fae2311913415c2f4e915e5a770b767"],["/zh-cn/library/frontend/【hexo】博客部署/index.html","3132acde5c5599269d7be3428babf6e7"],["/zh-cn/library/frontend/【markdown】编写文档/index.html","e583c7db74d87f6f96a9d84a9fca9b3a"],["/zh-cn/library/frontend/【vue】搭建网页/index.html","ce1a58f669108ba7d6db2d36cea11618"],["/zh-cn/library/inte/windows的linux子系统wsl/index.html","97f179e44662931e190a89c01d8599ee"],["/zh-cn/library/inte/【css】学习/index.html","3e2fdda3eeb0839978ae226d55c703ba"],["/zh-cn/library/inte/【latex】学习/index.html","90fc12b32758814881a81b0dff3220ba"],["/zh-cn/library/inte/【钢琴】织体类型/index.html","25d00ca76f413a16e01180a11b3b61e3"],["/zh-cn/library/inte/网盘挂载Alist+RaiDrive/index.html","33894a6a04e32035f464006594e95e0f"],["/zh-cn/library/math/【math】傅里叶变换/index.html","9c6711cf822cd363e621a741b82ce19b"],["/zh-cn/library/math/【math】高斯积分(Gaussian Quadrature)/index.html","4cbd42a87e0d0d59485bf31738536f09"],["/zh-cn/library/math/线性规划和整数规划/index.html","ba2aa3b430848147dcc21b501099ed80"],["/zh-cn/library/python/【CV2】图像处理/index.html","1adeadfdd4e19d320557f79b1e82349d"],["/zh-cn/library/python/【itertools】计算排列组合/index.html","9ceca770f19670bfd3a7490ed069f6e7"],["/zh-cn/library/python/【matplotlib】数据可视化/index.html","cb6abee39457a2041c89aaca22011567"],["/zh-cn/library/python/【nuitka】打包python为exe/index.html","9a311fe12ebf9678c7a4d2b41204575e"],["/zh-cn/library/python/【numpy】数据处理/index.html","9e21a5758aec4b80a639662747a7034e"],["/zh-cn/library/python/【pandas】数据处理/index.html","ec5b688829856dc4209ed4e29798e560"],["/zh-cn/library/python/【pip】【conda】常用指令/index.html","0e9a6ae279b34771579d662d1381147d"],["/zh-cn/library/python/【psutil】检测电脑网速等/index.html","3d839e3ae76d4a85ae432c1e136c2443"],["/zh-cn/library/python/【pyautogui】控制键鼠/index.html","b333d77642f50710e0b2249a16928c46"],["/zh-cn/library/python/【pybluez】python控制PC蓝牙/index.html","7b363221d7cdb9f96d4b00f15c6bb59d"],["/zh-cn/library/python/【pygame】2D游戏/index.html","e0730b7ac6c11649a51506a9d0967345"],["/zh-cn/library/python/【pyinstaller】打包python为exe/index.html","6b4d58c31bac763f135f195d3102f331"],["/zh-cn/library/python/【pyqt】编写可视化界面/index.html","c623eec37f5ab791e6149f4a1bb64164"],["/zh-cn/library/python/【pyserial】读取串口/index.html","c1b5bf9691c1d00c1b2a158690b44723"],["/zh-cn/library/python/【python】基础语法/index.html","9b1665e4a8cb4a9ad7ef6be9dccec585"],["/zh-cn/library/python/【python】有趣外部库/index.html","071537ad5ba4307ffa22bce2ce376f57"],["/zh-cn/library/python/【python基础】常用内部库/index.html","3835e1dc0384114c8b3d69c141db1189"],["/zh-cn/library/python/【python常用】常用库的pip安装/index.html","dc32ade782041853d64b067df3bb538d"],["/zh-cn/library/python/【request】网络请求/index.html","6da91222836de3b2661c1f2ebff0c8c3"],["/zh-cn/library/python/【timeit】获取时间/index.html","2b6886089a93462bf9a2d28405ac856a"],["/zh-cn/library/python/【torch】机器学习库/index.html","d7be7efcaf945f65f1e48782d5db44ae"],["/zh-cn/library/python/【tqdm】显示进度条/index.html","b92a674bc2c9b1ee0b96c645e0a35ea8"],["/zh-cn/library/python/【ursina】3D游戏/index.html","72285000771faab0bcf9beacf7e72e0e"],["/zh-cn/library/python/【win32gui】控制win系统/index.html","13aa5510fbead1a20a16a85325487747"],["/zh-cn/library/嵌入式/【git】学习/index.html","65aaa494aea0520ee35df4fac62f0d7f"],["/zh-cn/library/嵌入式/【linux】常用指令/index.html","2b827319e3b871b562335a305db29add"],["/zh-cn/library/嵌入式/其他/PCB作画规则/index.html","c73840f239de12d05648d9b3171ef016"],["/zh-cn/library/嵌入式/其他/犀牛建模/index.html","c2851f6910b74e552d52ab08d7eaa2bb"],["/zh-cn/library/嵌入式/模块/【模块】GPS模块/index.html","300b65acee0448fe80737d833ce6b39f"],["/zh-cn/library/嵌入式/模块/【模块】OLED/index.html","9f17ba252e1c1633a9801f48f9737365"],["/zh-cn/library/嵌入式/模块/【模块】amg8833/index.html","840863d572c29a890f7e6f5f10d24cec"],["/zh-cn/library/嵌入式/模块/【模块】as5600/index.html","c02e93f611130a08c33612cb1aedbdc4"],["/zh-cn/library/嵌入式/模块/【模块】数码管/index.html","8bb66cb10c726fca1b13279baa80fd4a"],["/zh-cn/library/嵌入式/模块/【模块】电容触摸按键/index.html","4e8634e1f64e9040270c05ee06f1c9c5"],["/zh-cn/library/嵌入式/模块/【模块】蓝牙/index.html","cf48422b9ab8009507547314fbb557c8"],["/zh-cn/library/嵌入式/模块/【模块】蜂鸣器/index.html","7b145d8a0a99ec7ab709153be3c63553"],["/zh-cn/library/嵌入式/模块/【模块】超声波测距/index.html","c772b4af565b2e6386db72bbd135019e"],["/zh-cn/library/嵌入式/模块/【模块】陀螺仪/index.html","b61766f5de9085ed301ae1733d8c01c4"],["/zh-cn/library/嵌入式/硬件/【硬件知识】H桥驱动/index.html","3c8d096173a4efd91d3a66a3267e7bb8"],["/zh-cn/library/嵌入式/硬件/【硬件知识】三极管/index.html","8540adb868db9d1c106bea58886ffc6a"],["/zh-cn/library/嵌入式/硬件/【硬件知识】无刷电机和电调/index.html","a4e7666aef90228b31ac608e75db28fd"],["/zh-cn/library/嵌入式/硬件/【硬件知识】模拟电路pwm/index.html","5d9c5a149cf340c4e37dea83e6562858"],["/zh-cn/library/嵌入式/硬件/【硬件知识】芯片熟悉/index.html","22b442127a2a77e1c4ad4358e23be458"],["/zh-cn/library/嵌入式/硬件/【硬件知识】运放运算电路/index.html","d94385304a00c430eeb0a11e1ea42582"],["/zh-cn/library/嵌入式/硬件/【硬件知识】选型/index.html","8f24a848c2249b8b307f93db77c54e91"],["/zh-cn/library/嵌入式/积累/【嵌入式积累】基础知识/index.html","83e6d764c76d2f0923ea06d282e942f0"],["/zh-cn/library/嵌入式/积累/【嵌入式积累】常用官网/index.html","63e67c26bf6d17ba8ff87043258118ad"],["/zh-cn/library/嵌入式/积累/【嵌入式积累】控制入门/index.html","5f0ba5312ceace07d3bab0f07389ddcb"],["/zh-cn/library/嵌入式/积累/【嵌入式积累】阅读寄存器手册/index.html","1c1fca20cefb60430346e1c891fa43ce"],["/zh-cn/library/嵌入式/算法/【控制算法】学习/index.html","567eddcf85dc7cecc5fb0434023f1e85"],["/zh-cn/library/嵌入式/算法/【滤波算法】学习/index.html","f6c3a2c376f740865cb2e6cfe0acff05"],["/zh-cn/library/嵌入式/语言/【python】进阶总结/index.html","3beaa80d6cb2caa5d140ecc88dfc0d2d"],["/zh-cn/library/嵌入式/软件/【HAL库】笔记/【HAL库】ADC采样/index.html","ed2f766327bbcbbdc91fdf1e9ad490f3"],["/zh-cn/library/嵌入式/软件/【HAL库】笔记/【HAL库】USB/index.html","38324a75d8498dfe3f9fb390cff6e0b8"],["/zh-cn/library/嵌入式/软件/【HAL库】笔记/【HAL库】i2c通信（mpu6050）/index.html","bd383143e34af8193cf070a59e1b031d"],["/zh-cn/library/嵌入式/软件/【HAL库】笔记/【HAL库】pwm波/index.html","8182a859d3275dc8f6d92b0da277bfc6"],["/zh-cn/library/嵌入式/软件/【HAL库】笔记/【HAL库】spi通信（nrf24l01）/index.html","ad7b273a4be2eff80cdf63bf7eef9b94"],["/zh-cn/library/嵌入式/软件/【HAL库】笔记/【HAL库】串口通信/index.html","b18c88a7c0157fcdb9934410dd59aaf9"],["/zh-cn/library/嵌入式/软件/开发板上手/【V831】开发板上手/index.html","49b6016cfd94629264d3f32430d5a9d3"],["/zh-cn/library/嵌入式/软件/开发板上手/【k210】开发板上手/index.html","de8ba51b36966093b522cd9af430f6bf"],["/zh-cn/library/快捷键和常用指令/【cmd】常用指令/index.html","fd1da8013344322b2265a943ef2ceeec"],["/zh-cn/library/快捷键和常用指令/【pycharm】快捷键/index.html","84e0798d861c96437f65b15e974cb56b"],["/zh-cn/library/快捷键和常用指令/【win】快捷键/index.html","2e407493ebe62b89b5eb1cd121288a4c"],["/zh-cn/library/快捷键和常用指令/免费下载视频/index.html","26d84d6712e4fca27e349fc0546e4ed5"],["/zh-cn/library/深度学习/【深度学习】基础知识：×NN都有些啥/index.html","b1bc944d66a1a21004533be3448b8e58"],["/zh-cn/library/深度学习/代码/【numpy】语法基础/index.html","8d9d55187c2a2c6f1cca286146a507ae"],["/zh-cn/library/深度学习/代码/【torch】语法基础/index.html","1a1b6e794a024674406428829e2869dc"],["/zh-cn/library/深度学习/工具/【深度学习工具】onnx学习/index.html","041f28174f18d059b15ff6bd32774adc"],["/zh-cn/library/深度学习/工具/【深度学习工具】tensorboard学习/index.html","b443c1eae7ad139457c40f40a142a43a"],["/zh-cn/library/深度学习/算法/【算法】贝叶斯优化/index.html","976a263bcbd2c8daf530cce66de87d24"],["/zh-cn/library/经验积累/【经验积累】网址整理/index.html","47bfe964185caa1da37767a23f1efb9a"],["/zh-cn/library/经验积累/【经验积累】论文搜集/index.html","6868d2c89170c3042c19e7ee585b646f"],["/zh-cn/library/经验积累/大学毕业选择/index.html","1027695291a646a7c77b64f67a6047a5"],["/zh-cn/library/课内知识/【FPGA】仿真和烧录/index.html","20c062b4fa958be1a4603bbb88112635"],["/zh-cn/library/课内知识/【matlab】学习/index.html","c59803385031bc207ea46924f475d363"],["/zh-cn/library/课内知识/【verilog】学习/index.html","a10fed65c09d5d16fc69db3c4c0241af"],["/zh-cn/library/课内知识/【常用数学公式】总结/index.html","76361c5621d9c23482f33b7ffac5760a"],["/zh-cn/little/name/index.html","31acc86ed9133888baec32462d9d1d4f"],["/zh-cn/little/留学小记/index.html","80076496dcfb005d017d3339fc9a33e3"],["/zh-cn/others/Write-blog-using-markdown/index.html","a5079fdb955b45de5e21905a460ec5fc"],["/zh-cn/others/chatgpt/index.html","7e8469094601e6f3d220317dfdeff9d5"],["/zh-cn/others/古诗/古诗/index.html","540601af9a8ecfce327436fee481aff8"],["/zh-cn/others/能力年表/index.html","38d56eb3275145188b875c0a99d61264"],["/zh-cn/solved/chatgpt您所在的地区无法访问/index.html","61337a54e78eeed18935add070868570"],["/zh-cn/solved/github的github.io项目打不开/index.html","ae11f5da3556773d3e65e1a4989e9359"],["/zh-cn/solved/hexo部署报错spawn failed/index.html","4586254da9b2b51cf020d77ee100eff2"],["/zh-cn/solved/modelsim的-novopt优化相关报错/index.html","be454b151c68602ae1ea32c8d578313d"],["/zh-cn/solved/npm install 报错/index.html","78f41ec3069dbc51d4d2c79b44f0ba05"],["/zh-cn/solved/pycharm修改快捷键/index.html","84a8afdfbc50c64f2183eea61ed9306f"],["/zh-cn/solved/pycharm内无法打开cmd/index.html","88c3198e32081fb5dafb98c4ac933eb3"],["/zh-cn/solved/worked/chatgpt微信机器人/index.html","466f0cac3c669c7e305a5a20f004fceb"],["/zh-cn/solved/从regedit改变键盘映射关系/index.html","d26e3023b2987a49e6b452fb45cea20d"],["/zh-cn/solved/双拼输入法/index.html","dc6c10e6a25f1ec52d7290e9459a0665"],["/zh-cn/solved/右键新建菜单管理/index.html","3528523aea3c8bf74f36a4e82ada9a17"],["/zh-cn/solved/执行make menuconfig时报错/index.html","d1aba01f47be996f25093e66f1cdfb5d"],["/zh-cn/solved/报错binsh 1 bc not found/index.html","3c95f5fea89716f460db6da98fe18910"],["/zh-cn/solved/报错binsh 1 cc not found/index.html","1aff0acb7970e4bec0650ee58ac4b278"],["/zh-cn/solved/报错binsh python not found/index.html","79796e3289da72dd71b2e3a0d5e471e0"],["/zh-cn/solved/未整理/index.html","d7a4eae217deb90802014036f5e9d177"],["/zh-cn/solved/树莓派域名解析暂时失败/index.html","4ae873c2a87b542bee6df3eb4c5d6603"],["/zh-cn/solved/树莓派配置python环境/index.html","7bbba18c920f153ff3def1db8eb30e7c"],["/zh-cn/solved/环境变量配置理解/index.html","1103ef09247b737765ac567adae1d8b8"],["/zh-cn/solved/设置软件开机自启动/index.html","e5b801c86ef8f9debf4e288effb0eb29"],["/zh-cn/work/CV/【INN】积分网络/index.html","d43d97b3dc0b692e340185d84d59731f"],["/zh-cn/work/CV/【IQA】图像评估/index.html","7cf3c2be2f12f6470b5fe51d360b22be"],["/zh-cn/work/CV/【JIIF】多光谱融合/index.html","b767bdc3772e7aca6f699f64bebe0931"],["/zh-cn/work/mine/电脑外接摇杆/index.html","b3e20ab2e073b2f9eb11e71c6be6f87e"],["/zh-cn/work/nerf/【nerf】Block-NeRF笔记/1667118074452.png","221e63aa60efa77dca50740ce9b88380"],["/zh-cn/work/nerf/【nerf】Block-NeRF笔记/1667118457009.png","5c1577c940dd443631045f45787e487d"],["/zh-cn/work/nerf/【nerf】Block-NeRF笔记/1667226872521.png","ec7a6051752cb193ae983fb81d135fce"],["/zh-cn/work/nerf/【nerf】Block-NeRF笔记/1667264387582.png","57b13f83c9dfd506e6ccb81743f74963"],["/zh-cn/work/nerf/【nerf】Block-NeRF笔记/1667265226170.png","600b87f6ea78e46e19929200a8190875"],["/zh-cn/work/nerf/【nerf】Block-NeRF笔记/1667292838757.png","f9c6a5975d54d8b975e9de23dc891c00"],["/zh-cn/work/nerf/【nerf】Block-NeRF笔记/1667293450480.png","57c9efd9a2a4ae995517991ff7abdf32"],["/zh-cn/work/nerf/【nerf】Block-NeRF笔记/index.html","5554abbb61da5deab6fc004619fd3bca"],["/zh-cn/work/nerf/【nerf】Point-NeRF笔记/index.html","aa702e848ac65e11ca4939e7d729503e"],["/zh-cn/work/nerf/【nerf】nerf-pytorch/index.html","5d0b1d7c9af33e8232ad0599b363ebad"],["/zh-cn/work/nerf/【nerf】最新阅读记录/index.html","c0ab7fd9a30b019451cea735dcf16cc8"],["/zh-cn/work/nerf/【nerf】汇总笔记/index.html","26c26f00d80301df6beb2748cbedc4ed"],["/zh-cn/work/nerf/【nerf】记录/index.html","28731754a5f2149f2284efa81e0be0ad"],["/zh-cn/work/python/游戏AI/index.html","d73deb9d7f8f7c173d385d8801848763"],["/zh-cn/work/python/窗口互联游戏/index.html","abc199539b47bf69408a55f8bcaaadd0"],["/zh-cn/work/python/网速显示助手/index.html","cd7ece42b1ad2d72f7c308d052d4151f"],["/zh-cn/work/python/羊了个羊自动化/index.html","1c66adab929c562a474589ddc3059cad"],["/zh-cn/work/python/蓝牙调试助手/index.html","02a992e9ca19760602e4080d656501d8"],["/zh-cn/work/前端/【前端】记录/index.html","a90eb683394043fe9d7118c47da25ac9"],["/zh-cn/work/前端/【博客】记录/index.html","a728884792aa9b57011ec3fd3ac1f9b0"],["/zh-cn/work/嵌入式项目/bard/【bard】Linux迷你电脑/index.html","5df1f658a740525d5873f75433762bf8"],["/zh-cn/work/嵌入式项目/【加热台】记录/index.html","fff5b7c07125b596994003d16c2562b2"],["/zh-cn/work/嵌入式项目/【四旋翼飞行器】记录/index.html","a7274c5b5b7ebde1e83efa9c21df8444"],["/zh-cn/work/嵌入式项目/【沁恒】样品试用/index.html","00a2b854c4762e47ee97c09c952d4960"],["/zh-cn/work/嵌入式项目/【生日贺卡板】记录/index.html","65c06b453c8b3ffae415eed5f75c2925"],["/zh-cn/work/嵌入式项目/【祖传板子】记录/index.html","414cb52dfcf143d5a4e141ace9a67d3f"],["/zh-cn/work/嵌入式项目/【自制无刷电调】原理/index.html","6ab96e442ddbc09b8bc892829d3d5b3a"],["/zh-cn/work/嵌入式项目/【航模】记录/index.html","5f7de8c86abc8bf08d25fb1ea68320d1"],["/zh-cn/work/忆阻器/【忆阻器】python平衡车/index.html","4c5f7ac43df0b5ae38b1b317b474c09d"],["/zh-cn/work/忆阻器/【忆阻器】算法部分/index.html","33ce979ce4f0b59c12dbd4e064563009"],["/zh-cn/work/忆阻器/【忆阻器】记录/index.html","277d92f7d93bc6c46b9389ad8509510e"],["/zh-cn/work/玩别人的开源项目/大一尝试过的开源项目/index.html","4e9faf27d312b6d355d1bcb18cafe446"],["/zh-cn/work/生涯规划/index.html","8b912fb705f0816f6e8f59b7acb185d2"]];
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
