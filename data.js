// 厦门美好咖啡节 38 家品牌数据（调研于 2026-11-18，小红书公开笔记 + 官方必喝清单）
// 字段：booth 摊位 / first 首进 / tags 类型标签 / honor 冠军头衔 / oneLiner 一句话
//       mustTry 官方主推 / signature 门店招牌（深挖）/ price 价格线索 / review 口碑 / caution 注意
const BRANDS = [
  {
    id: "hechuang", booth: "B1", name: "隔壁工坊精品咖啡", city: "中山", first: true,
    tags: ["手冲", "特调"], honor: "",
    oneLiner: "中山老厂房社区烘焙坊，庄园 SOE 小罐豆 + 东南亚风味特调",
    mustTry: "「南洋香水」套装（香茅·咖喱·青柠 + 咖喱费南雪）",
    signature: "埃塞三花 SOE 系列（花魁 11.0 / 阳光古姬 / 清欢瑰夏，小罐装送粗陶猪口杯）；油桃瑰夏（哥伦比亚岩峰庄园水洗，脆桃·白柚·蜂蜜）",
    price: "SOE 小罐装 50g/罐；消费+关注小红书送原创杯垫",
    review: "「一豆三喝」式 SOE 测评帖口碑稳定（56/38 赞）；国产庄园豆玩得认真的代表；厦门本地博主圈店名单第一位。",
    caution: "", xhs: "隔壁工坊 咖啡"
  },
  {
    id: "taitou", booth: "B2", name: "抬頭咖啡", city: "深圳", first: true,
    tags: ["特调"], honor: "",
    oneLiner: "深圳特调店，万象系咖啡节常客，豆卡与东方风味见长",
    mustTry: "SET A",
    signature: "秋日特调带龙井·青梅·黄皮层次（OLA 快闪款）；罗湖新店「抬头见囍」",
    price: "",
    review: "贵阳咖啡节被夸「有被深圳抬头惊喜到」；与中山 OLA 有深中联盟快闪。",
    caution: "", xhs: "抬头咖啡 深圳"
  },
  {
    id: "balang", booth: "B3", name: "巴浪树林咖啡馆", city: "重庆", first: false,
    tags: ["特调", "手冲", "冠军"], honor: "中国咖啡冲煮大赛全国总决赛冠军",
    oneLiner: "重庆黄泥磅冠军店，「冉家坝三巨头」之一，佛手柑 Dirty 出圈",
    mustTry: "特调 Set & 手冲咖啡",
    signature: "佛手柑 Dirty；「2019 春」（大红袍茶底+椰子花蜜，2019 年招牌至今）；无咖啡因也有 4 款（巧克力/抹茶拿铁/柠檬茶/树莓气泡水）",
    price: "喝手冲送陶瓷杯",
    review: "「搬到黄泥磅的冠军咖啡」47 赞；空间层次感（二楼窗景+布艺灯+店中花店）被称道；豆子精挑细选。",
    caution: "特调奶体偏厚，怕腻可选手冲。", xhs: "巴浪树林咖啡 重庆"
  },
  {
    id: "shouzuo", booth: "B4", name: "沈阳手作咖啡", city: "沈阳", first: true,
    tags: ["手冲", "豆子"], honor: "",
    oneLiner: "「世界咖啡博物馆」体系的烘焙厂牌，主打全球产区豆收藏",
    mustTry: "中国首发委内瑞拉咖啡豆",
    signature: "世界咖啡三十国套装；主理人自建咖啡博物馆、常年跑全国咖啡节",
    price: "三十国套装限时 7 折，送《世界咖啡博物馆》书 + 限定帆布包 + 咖啡杯",
    review: "小红书本店声量小（多为咖啡节摊位视角）；收豆党和收藏向值得蹲。",
    caution: "公开探店信息少，具体出品现场确认。", xhs: "沈阳手作咖啡"
  },
  {
    id: "sanhao", booth: "B5", name: "三號屋咖啡專門店", city: "沈阳", first: false,
    tags: ["手冲"], honor: "",
    oneLiner: "法兰绒手冲专门店，咖啡节里的「传统派清流」",
    mustTry: "小源 · 法兰绒手冲",
    signature: "法兰绒滤布手冲（哥斯达黎加黑蜜等庄园豆）；一豆两喝（热/冰同豆对比）；店里还有虹吸壶",
    price: "挂耳全场 10 元；满 100 送周边帆布袋",
    review: "「咖啡节上的清流，难得竟然是法兰绒手冲」117 赞；尔滨咖啡节「人超多的一家法兰绒手冲」；barista 讲解被赞。",
    caution: "", xhs: "三號屋咖啡 沈阳"
  },
  {
    id: "decade", booth: "B6", name: "DECADE CAFE", city: "天津", first: false,
    tags: ["意式", "特调"], honor: "",
    oneLiner: "天津唯一全国 Top100 咖啡馆，Dirty 稳定性的标杆",
    mustTry: "「橘子糖」",
    signature: "Dirty（连续五次出品味道不变的稳定度被专帖称赞）；点石成金拼配豆热拿铁；特调「四月是适合说谎的日子」",
    price: "",
    review: "「不愧是天津唯一一家全国前 100」155 赞；主理人是「相声世家」（77 赞）；五大道老店 + 黑胶墙，可以请店家放黑胶。",
    caution: "", xhs: "DECADE CAFE 天津"
  },
  {
    id: "anydoor", booth: "B7", name: "ANYDOOR COFFEE", city: "杭州", first: false,
    tags: ["特调"], honor: "",
    oneLiner: "杭州贵州风味特调专科，木姜子现象级出圈",
    mustTry: "贵州风味套组",
    signature: "「杀死凤梨」（现刮木姜子+凤梨，无糖浆版被称绝）；「捏爆番茄」（毛辣果/番茄汁/椰子水/TABASCO/埃塞冰滴）",
    price: "特调约 45 元（捏爆番茄，咖啡节档）",
    review: "贵阳美好咖啡节必喝榜第一名，「香气漂浮在咖啡表面，完全没有辣感只留清香」；「排队王 OPS 之外最大的惊喜」。",
    caution: "猎奇向，木姜子/番茄风格挑人，喜欢香料系的一定试。", xhs: "ANYDOOR咖啡 杭州"
  },
  {
    id: "trunk", booth: "B8", name: "+ Trunk Coffee 创刻咖啡", city: "深圳", first: true,
    tags: ["手冲", "豆子"], honor: "",
    oneLiner: "盲品定豆单玩法的手冲店，云南庄园豆深耕",
    mustTry: "手冲咖啡 & 咖啡豆",
    signature: "盲品定豆单；云南孟连天宇庄园微批次（萨奇姆/云南瑰夏）杯测会；CAFEEX 常客",
    price: "",
    review: "咖啡展老面孔，杯测会口碑好；沙尾总店还在（罗湖店已关）。",
    caution: "", xhs: "创刻咖啡 深圳"
  },
  {
    id: "dap", booth: "B9", name: "DaP Coffee", city: "杭州", first: true,
    tags: ["意式", "奶咖"], honor: "",
    oneLiner: "Parking 同门高端线 + 自有烘焙工厂，「勺子屹立不倒」的卡布名店",
    mustTry: "「天鹅绒」",
    signature: "天鹅绒（奶咖口感系招牌）；呱呱果（新晋招牌）；勺子屹立不倒的卡布奇诺",
    price: "",
    review: "「杭州那么多咖啡店，DaP 凭什么排第一」64 赞、杭州咖啡三巨头之一；评论区实锤：DaP 是 Parking 的高端品牌，店内有其研究室，豆子出自自家「东木」工厂。",
    caution: "周末排队，目的地型门店。", xhs: "DaP咖啡 杭州"
  },
  {
    id: "b251", booth: "B10", name: "2-5-1（251 Coffee & Blend）", city: "贵阳", first: true,
    tags: ["特调"], honor: "",
    oneLiner: "贵阳实验派，用鸡尾酒结构做咖啡，「咖啡店的下一种形态」",
    mustTry: "金木 Combo",
    signature: "解构瑰夏（最火，可请求试喝基底）；「黑沙滩」（黑糯米雪菲）；「露松」（绢豆腐奶盖，含酒）；菜单按 Irish/Punch/Fizz/Sour 鸡尾酒结构编排",
    price: "",
    review: "「当日 MVP」「我可能看到了咖啡店的下一种形态」93 赞；老板娘被夸人美心善（送小饼干）；店里养猫；「本地人想喝一直排不上队」。",
    caution: "含酒款对酒精敏感者先问清。", xhs: "251咖啡 贵阳"
  },
  {
    id: "gousen", booth: "B11", name: "Gousen Coffee Roaster（鄰居咖啡）", city: "杭州", first: true,
    tags: ["意式", "社区"], honor: "",
    oneLiner: "杭州唯二进全国 Top50 的社区咖啡标杆，前阿里咖啡师创立",
    mustTry: "巴拿马瑰夏 Combo",
    signature: "花生厚乳拿铁（爆款引流款）；肯尼亚 TOH 日晒手冲 40 元；店常驻两只比熊「煤煤」「大宝」",
    price: "美式 22 / 拿铁 25 / SOE 28-35 / 特调约 35 元（门店价）",
    review: "「杭州唯二挤进中国咖啡 top 前 50」415 赞、「当下最好的社区咖啡店」319 赞；精品不高价定位，小程序集点。",
    caution: "有老客评论觉得连锁化后不如首店时期。", xhs: "Gousen 咖啡 杭州"
  },
  {
    id: "guanghe", booth: "B12", name: "光合计划", city: "徐州", first: true,
    tags: ["特调", "空间"], honor: "",
    oneLiner: "徐州老平房文艺咖啡，安安静静的社区小店",
    mustTry: "火焰「鹅肝」巧克力",
    signature: "老平房改造 + 绿意小院，光影被称「随便一个角落都像电影画面」",
    price: "",
    review: "「来徐州一定会带朋友去的宝藏咖啡店」36 赞；火焰「鹅肝」巧克力为素的猎奇款。",
    caution: "体量小店，咖啡节摊位出品以现场为准。", xhs: "光合计划咖啡 徐州"
  },
  {
    id: "c666", booth: "B13", name: "666咖啡烘焙工厂", city: "中山", first: true,
    tags: ["手冲", "豆子", "冠军"], honor: "2026 Open deCata 世界杯测冠军",
    oneLiner: "杯测冠军的舌头选豆，中山小巷里的烘焙工厂",
    mustTry: "冲浪板庄园、努果庄园豆 & 特调",
    signature: "玻利维亚羊驼庄园 Mosto 水洗瑰夏；水洗埃塞哈露苏可；配柠檬焦糖布丁",
    price: "",
    review: "「隐藏在小巷里的咖啡工厂」探店帖持续有；大湾区咖啡圈常提的宝藏工厂店。",
    caution: "", xhs: "666咖啡 中山"
  },
  {
    id: "loiseau", booth: "B14", name: "L'OISEAU（르와조）", city: "韩国首尔", first: true,
    tags: ["手冲", "奶咖", "冠军"], honor: "2025 MOB 咖啡冲煮赛冠军",
    oneLiner: "全场唯一海外品牌，首尔三家店的精品手冲",
    mustTry: "精品咖啡 & 栗子奶油拿铁",
    signature: "栗子奶油拿铁；首尔 발산/역삼/마곡 三店",
    price: "",
    review: "深圳韩国咖啡节速通测评 94 赞里的熟面孔；中文社媒已有自发粉丝（「和르와조的第二次遇见」）。",
    caution: "语言可能不通，点单指菜单即可。", xhs: "L'OISEAU 咖啡"
  },
  {
    id: "chimizihe", booth: "B15", name: "AddictCoffee 痴谜者咖啡", city: "青岛", first: false,
    tags: ["特调"], honor: "",
    oneLiner: "青岛特调头牌，白房子设计出圈，咖啡师专业度「有种在沪的感觉」",
    mustTry: "「白房子三部曲」",
    signature: "凤梨园（燕麦奶系）、桃的背叛（清爽白桃）；子品牌 Baby ADDICT 刚发布",
    price: "定位偏高（「价格也不便宜」）",
    review: "「在青岛，特调选这家准没错」173 赞；门店设计帖 217 赞；咖啡师介绍被赞专业。",
    caution: "热门款可能排队。", xhs: "痴谜者咖啡 青岛"
  },
  {
    id: "bingjiang", booth: "B16", name: "北平冰匠", city: "北京", first: false,
    tags: ["非咖啡"], honor: "Gelato 世界杯中国区冠军（品牌宣传口径）",
    oneLiner: "老北京风味 Gelato，猎奇口味制造机",
    mustTry: "Gelato",
    signature: "铜锅涮肉味 Gelato；柚子佛手柑（中国区冠军口味）；一次可拼 6 球",
    price: "set 约 59 元（陆家嘴咖啡节档）",
    review: "口碑两极：西安面包节 6 球好评（34 赞）；但陆家嘴咖啡节有 47 赞避雷帖（59 元 set 被指质地差、一整坨冰、不让试吃，评论区共鸣不少），也有人力挺冠军口味。",
    caution: "建议单球试味再买 set，猎奇款（豆汁儿）慎选。", xhs: "北平冰匠"
  },
  {
    id: "yaya", booth: "B17", name: "Yayacoffee", city: "桂林", first: true,
    tags: ["意式", "特调"], honor: "",
    oneLiner: "桂林人气王，主理人「小李司机」宠粉出圈",
    mustTry: "「不管几岁皮一下万岁」& 玉香白葡萄",
    signature: "黄油咸 Dirty；桂花龙井拿铁",
    price: "",
    review: "桂林米粉咖啡节排队过长，主理人发帖《一杯咖啡而已｜不应该让大家排队》承诺返场驻场（653 赞）；「桂林市区探店」帖好评；老板被夸帅。",
    caution: "排队大户，错峰。", xhs: "Yaya咖啡 桂林"
  },
  {
    id: "holyshot", booth: "B18", name: "HOLY SHOT", city: "佛山", first: false,
    tags: ["特调"], honor: "",
    oneLiner: "佛山桂城特调代表，MINI COMBO 小杯量适合多摊作战",
    mustTry: "MINI COMBO",
    signature: "W·P·G combo；Pandan 斑兰特调",
    price: "",
    review: "「途径佛山都会想起的一家咖啡店」31 赞；佛山南海特调榜单常客；也有「中规中矩」的平价口碑，口味因人而异。",
    caution: "", xhs: "HOLY SHOT 佛山"
  },
  {
    id: "kuoye", booth: "B19", name: "阔也啡艇", city: "哈尔滨", first: true,
    tags: ["手冲", "豆子", "冠军"], honor: "2025 世界咖啡冲煮大赛中国区总冠军",
    oneLiner: "东北冠军自烘豆，头部咖啡节免费试饮通道常客",
    mustTry: "手冲咖啡 & 自烘咖啡豆",
    signature: "多产区精品豆；「经典水洗的优雅内核」「高地果脯甜韵」等豆单文案在圈内有名",
    price: "摊位常有免费试饮 + 挂耳礼包伴手礼（陆家嘴/天目里场先例）",
    review: "品牌介绍帖 38/35 赞；陆家嘴、天目里、贵阳咖啡节都有摊位且送试饮；厦门本地博主提前圈中。",
    caution: "", xhs: "阔也啡艇"
  },
  {
    id: "hechuang2", booth: "A1", name: "禾窗咖啡 VISTAV", city: "珠海", first: true,
    tags: ["奶咖", "出片"], honor: "",
    oneLiner: "澳门「窗台咖啡」何老师的珠海新店，拉花表演 + 甜筒拿铁",
    mustTry: "甜筒拿铁 & 咖啡特调",
    signature: "甜筒拿铁（现做甜筒约半小时一批）；窗口拉花；店里另有简餐蛋糕；豆子有发酵酒感",
    price: "买 set 送鸭舌帽",
    review: "「澳门窗台咖啡店的何老师来珠海了」180 赞；何老师本人被称又帅手又稳，排队 30-60 分钟常态（一杯 5 分钟工艺）。",
    caution: "甜筒现做等位久；打卡看到的「何老师」可能是员工（评论区吐槽）。", xhs: "禾窗咖啡 珠海"
  },
  {
    id: "angd", booth: "A2", name: "AndCoffee 啱D咖啡研究所", city: "广州/佛山", first: true,
    tags: ["意式"], honor: "",
    oneLiner: "十年冠军烘焙品牌，-86℃ 超低温「假 Dirty」原创者（海报亦写作「嗒D」）",
    mustTry: "「假 Dirty」",
    signature: "假 Dirty（-86℃ 冰杯 + 冰博克 + 咖啡泡泡，百香果酸甜）；荔湾无界咖啡节 D 区王牌",
    price: "买两杯送定制环保袋",
    review: "「超低温 Dirty 我能连喝三杯」「入口好清爽，有明显嘅百香果酸甜感」；广州 289 咖啡节打卡帖：tips 是唔好搅匀、大大啖饮。",
    caution: "喝法有讲究：不要搅匀，大口喝。", xhs: "啱D咖啡 广州"
  },
  {
    id: "xizi", booth: "A2", name: "西子咖啡", city: "咖啡节常客（城市未官宣）", first: true,
    tags: ["特调"], honor: "",
    oneLiner: "官宣海报未列、官方必喝清单新增的神秘牌，咖啡节实战胜率极高",
    mustTry: "「牧」",
    signature: "「山」系列（橙子·花香·酸奶的爽口款）；「牧」（「奶超香好嚼」）",
    price: "",
    review: "苏州万象咖啡节实喝帖：「山巨巨好喝」「喝了十几杯西子最爱」；杭州站（4 月）「随手选的第一家竟是最好喝的」。",
    caution: "公开信息少，摊位以现场菜单为准。", xhs: "西子咖啡 牧"
  },
  {
    id: "zhizhuo", booth: "A3", name: "执着咖啡 GINGER COFF", city: "佛山顺德", first: true,
    tags: ["特调", "空间"], honor: "",
    oneLiner: "顺德顶流，7.0 湖景旗舰店号称 300 万投入",
    mustTry: "「燃烧」",
    signature: "「燃烧」（「非常特别，值得一试」）；伦教映月湿地公园湖景店；只有咖啡/面包/蛋糕无简餐",
    price: "门店免费进店参观",
    review: "新店帖 144/105 赞；陈村油罐店刚结业（11 月初），情怀粉可来摊位补票；NICENESS 系咖啡节常客。",
    caution: "", xhs: "执着咖啡 顺德"
  },
  {
    id: "corner", booth: "A4", name: "CORNER 落角咖啡", city: "南昌", first: true,
    tags: ["特调"], honor: "",
    oneLiner: "南昌特调代表，葡萄×奶盖的清爽系",
    mustTry: "「夏畹」",
    signature: "椰云葡萄（上层奶盖+下层葡萄美式）；富士山下（咸柚子 Dirty）",
    price: "",
    review: "「南昌喝到近期最惊喜的一家」60 赞；苏州站实喝帖里被点名「corner 特调也很好喝」；卫东地铁口门店位置绝佳。",
    caution: "咸柚子 Dirty 口味挑人（有人喝不惯）。", xhs: "CORNER 落角 南昌"
  },
  {
    id: "kulipa", booth: "A5", name: "KuliPa Coffee", city: "深圳", first: true,
    tags: ["特调", "空间"], honor: "",
    oneLiner: "深圳南山木质系小店，咖啡师又潮又用心，宠物友好",
    mustTry: "时令创意特调主题",
    signature: "Set「未名月季」（花香清爽）+「玄米之神」（粮食香浑厚）；软着陆；葡萄冷萃",
    price: "",
    review: "深圳湾万象城咖啡节「遇见老朋友」162 赞：「每一组咖啡都会被咖啡师用心对待」；门店探店帖夸工作人员热情。",
    caution: "", xhs: "kulipa咖啡 深圳"
  },
  {
    id: "buff", booth: "A6", name: "CoffeeBuff", city: "青岛", first: false,
    tags: ["手冲", "特调", "冠军"], honor: "2020 世界咖啡冲煮大赛中国区冠军",
    oneLiner: "「青岛咖啡三巨头」之一，老厂房空间 + 严格禁拍的冠军店",
    mustTry: "咖啡节限定滴滤 Set",
    signature: "「绿鲤鱼与驴」特调 & 巧克力；现烘小众豆",
    price: "",
    review: "进「中国 100 咖啡指南」（青岛唯二）93 赞；「在青岛待一下午只喝这一杯」41 赞；也有零星「一般般」的声音，整体口碑强。",
    caution: "门店严格限制拍照（进门有提示）。", xhs: "CoffeeBuff 青岛"
  },
  {
    id: "sanmuyu", booth: "A7", name: "三木屿", city: "上海/深圳", first: false,
    tags: ["手冲", "特调", "冠军"], honor: "2021 中国咖啡冲煮大赛全国总冠军（张诗娓 Sherry）",
    oneLiner: "冠军主理人是小红书头部咖啡博主，风味地图系列出圈",
    mustTry: "风味地图系列特调",
    signature: "中国风味地图系列特调（西安站 72 赞）；手冲豆单；深圳华侨城新店刚开",
    price: "豆子两包 9 折、三包 85 折",
    review: "「三木屿来深圳啦」188 赞；乌镇戏剧节出摊偶遇明星喝手冲；Sherry 的科普内容（入行十年 QA 108 赞）圈粉无数。",
    caution: "", xhs: "三木屿咖啡"
  },
  {
    id: "marus", booth: "A8", name: "Marus Coffee 马路咖啡", city: "苏州", first: false,
    tags: ["意式", "冠军"], honor: "2025 WBC 世界亚军 · 2019/2023/2026 三届中国冠军（孙磊）",
    oneLiner: "本届冠军墙最厚的一家，孙磊老师将连续两天空降厦门现场",
    mustTry: "CBC 竞赛套餐（厦门站全新 Pop-Up 菜单 + 厦门限定首发 Combo）",
    signature: "CBC 冠军竞赛套餐；粉波旁 2.0 竞赛同款；苏州满星推荐店、连年百强榜",
    price: "竞赛套餐为高价档（参考：往站抽奖同款 6 份送）",
    review: "「苏州满星咖啡店推荐」155 赞；官方连发三波抽奖造势；「马路真的好喝」的评论高频出现。",
    caution: "孙磊空降的两天（官方抽奖帖预告「连续两天」）必是最长队，追星建议错峰或开局冲。", xhs: "马路咖啡 MARUS"
  },
  {
    id: "aloha", booth: "A9", name: "ALOHA COFFEE", city: "上海", first: true,
    tags: ["特调", "意式", "冠军"], honor: "2024 CBC 世界咖啡师大赛中国冠军",
    oneLiner: "上海梧桐区冠军店，「不是小甜水」的层次系特调",
    mustTry: "HUSH HUSH",
    signature: "Yum Yum Berry（钟汉良同款，现煮杨梅汁）；栗子泥杯面款；Dirty 油脂香出名",
    price: "特调 55-65 元（门店档）",
    review: "「糊涂啊，来上海你不喝 ALOHA」51 赞：「杯杯惊艳，有层次有韵味」；服务温柔被反复提及。",
    caution: "有评论说 Dirty 出品不太稳定；早到需等开门。", xhs: "ALOHA咖啡 上海"
  },
  {
    id: "m2m", booth: "A10", name: "M2M COFFEE", city: "南京", first: false,
    tags: ["手冲", "豆子", "冠军"], honor: "2019 世界咖啡冲煮大赛全球冠军 · 2016/18/19 中国区冠军团队",
    oneLiner: "「大陆第一厂牌」烘焙厂，冠军团队手冲本命",
    mustTry: "手冲咖啡",
    signature: "自烘豆与手冲；M2M 尝识学院（咖啡教育）；与 uniuni 同门",
    price: "",
    review: "烘焙工厂探店 Vlog「在大陆第一厂牌的工厂里血赚」；南京咖啡节「回到南京！秋天第一场美好咖啡节」。",
    caution: "", xhs: "M2M咖啡 南京"
  },
  {
    id: "gts", booth: "A11", name: "GTScoffee Roasters", city: "贵阳", first: true,
    tags: ["特调", "手冲"], honor: "",
    oneLiner: "贵阳自烘品牌，贵州风味特调专科，老板娘 IP 活跃",
    mustTry: "贵州酿造冷萃 & 老贵阳米花 & 小黑罐手冲",
    signature: "老贵阳米花 Dirty（「不是简单糖浆 dirty，好喝」）；埃塞手冲（干净）；蕾莉达小罐咖",
    price: "冷萃 27 / Dirty 37 元（宁波场档）",
    review: "贵阳门店探店 45 赞好评；跑遍全国咖啡节，「冠军严选咖啡店」72 赞。",
    caution: "上周宁波场有优惠规则吐槽帖（28 赞）：分两次点单不享优惠、赠品被拒；店家已回应（新兼职搞错流程+补偿），也有围观者认为顾客一方苛刻。点单前一次性问清规则即可。", xhs: "GTS咖啡 贵阳"
  },
  {
    id: "hugs", booth: "A12", name: "HUGS", city: "郑州", first: false,
    tags: ["特调"], honor: "",
    oneLiner: "郑州特调代表，2026 中国咖啡指南郑州仅两家上榜之一",
    mustTry: "「风味迁徙」Set A & Set B",
    signature: "H2O 二店（楷林广场，低保和冷色调空间）；秋冬国风特调系列",
    price: "人均 40 元左右",
    review: "「郑州高质咖啡店」101 赞、「南征北战的特调代表」；咖啡指南上榜帖 106 赞（评论区有人称野榜，口味见仁见智）。",
    caution: "", xhs: "HUGS咖啡 郑州"
  },
  {
    id: "something", booth: "A13", name: "Something For", city: "深圳", first: true,
    tags: ["意式", "连锁"], honor: "",
    oneLiner: "深圳「咖啡连锁四大天王」，波哥主理 9 年品牌",
    mustTry: "蓝鸳鸯 2.0",
    signature: "蓝鸳鸯系列（2.0 为最新版）；笔架山公园大店 + Brunch 餐厅；海滨栈道限定",
    price: "",
    review: "「深圳咖啡连锁四大天王」461 赞、开餐厅帖 481 赞；9 周年礼盒（9 款挂耳+限定杯）刚上线。",
    caution: "深圳门店遍地、稀缺性低；若喝过可把额度让给首进店。", xhs: "SomethingFor 咖啡 深圳"
  },
  {
    id: "parking", booth: "A14", name: "Parking Coffee", city: "杭州", first: false,
    tags: ["意式", "冠军"], honor: "2026 WBC 世界咖啡师大赛全球冠军（潘玮）",
    oneLiner: "现役世界第一，本届含金量顶点",
    mustTry: "巴拿马羊皮纸庄园波旁「冠军 Set · 一豆三喝」",
    signature: "冠军 Set（浓缩/奶咖/创意一豆三形态）；孩儿巷起家 + 新概念 Parking Box；买一送一活动期排队 2 小时起步",
    price: "冠军 Set 高价档（杭州门店同线 108 元档）",
    review: "夺冠新闻刷屏（51 赞）；「Parking coffee 还是太权威了」；「无意中在孩儿巷挖到冠军咖啡」。",
    caution: "有「108 的冠军咖啡普通人喝不出区别」讨论帖——抱着喝世界第一的心态买最值；开喝首日预计最长队。", xhs: "Parking Coffee 杭州"
  },
  {
    id: "bathe", booth: "A15", name: "BATHE 澡堂咖啡", city: "上海", first: false,
    tags: ["特调", "冠军"], honor: "2023 咖啡烈酒大赛中国区冠军",
    oneLiner: "上海浴室主题概念店，两套特调组玩法",
    mustTry: "「关于天气的四行诗」特调套组 & 「耳熟不详」特调套组",
    signature: "主题套组式特调；常与 o.p.s、树影等顶流联动（树影×BATHE 联名 53 赞）",
    price: "",
    review: "「上海知名浴室 Bathe」打卡帖稳定；「在上海最纯浴风的咖啡店」；厦门本地博主圈店第一梯队。",
    caution: "", xhs: "BATHE 澡堂咖啡"
  },
  {
    id: "cuiqu", booth: "A16", name: "萃趣 Quinn coffee", city: "广州", first: true,
    tags: ["意式", "冠军"], honor: "2025 世界咖啡拼豆师大赛冠军",
    oneLiner: "广州「白月光」，黄油 Dirty 与零下 86 度 Dirty 双杀",
    mustTry: "黄油 Dirty",
    signature: "黄油 Dirty；零下 86 度 Dirty；快萃（广州塔下摆摊招牌）；一豆两喝「熔岩可可」（日式深烘，黑巧烤榛子）",
    price: "",
    review: "「咖啡节喝到好喝的 combo」；广州塔摆摊快萃 41 赞；Q志祥（主理人）粉丝群稳定。",
    caution: "", xhs: "萃趣咖啡 广州"
  },
  {
    id: "lubao", booth: "A17", name: "Lu Bao 鹿包", city: "包头", first: true,
    tags: ["非咖啡", "出片"], honor: "",
    oneLiner: "韩系面包+咖啡，全场唯一草原风",
    mustTry: "蒙古草原奶皮子炒米罐子奶豆腐",
    signature: "香蕉丹麦（酥到掉渣）、碧根可巧可颂；整面镜子对镜拍出片",
    price: "人均 40 元左右",
    review: "包头探店 128/313 赞：「韩到心坎里」「碳水脑袋狂喜」。",
    caution: "本质是面包店，咖啡是配角。", xhs: "鹿包 包头"
  },
  {
    id: "jennyduo", booth: "A17+", name: "Jenny Duǒ 可丽饼", city: "无锡", first: true,
    tags: ["非咖啡"], honor: "",
    oneLiner: "韩式可丽饼排队王，饼皮厚实有嚼劲是护城河",
    mustTry: "香蕉巧克力酱可丽饼",
    signature: "芝士熏鸡肉酸奶油（咸口必冲）；焦糖烤布蕾（招牌）；火腿款（晋江面包节「封神」）",
    price: "",
    review: "福州糯叽叽节「吃完念叨了三天」；晋江面包节 74 赞「狠狠拿捏」；「每种食材的本味都在」。",
    caution: "排队大户；有无锡门店避雷帖（3 赞小样本，个体体验）。", xhs: "Jenny Duo 可丽饼"
  }
];
