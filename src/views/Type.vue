<template>
    <my-page title="打字练习" :page="page">
        <div class="btns">
            <ui-raised-button class="btn" primary label="开始练习" @click="start" v-if="!typing" />
            <ui-raised-button class="btn" secondary label="结束" @click="end" v-if="typing" />
            <ui-raised-button class="btn" label="选择文章" @click="toggleDrawer" />
        </div>
        <div class="result-box">
            <ul class="result-list">
                <li class="item">用时：{{ result.time }}</li>
                <li class="item">正确率：{{ result.rate }}</li>
                <li class="item">速度：{{ result.speed }} 字/分</li>
            </ul>
        </div>
        <div id="divMain" class="divMain">
            <textarea id="txtInput" onkeyup="changeText();"></textarea>
            <textarea class="article-tex" id="divText2"></textarea>
            <!-- <div id="divText" class="text" onclick="getObj('txtInput').focus();">在文字出现以前，人们就已经学会了计数，并且能够阅读没有话语的故事。人类很早就能用图形来表达自己的思想。大约在公元前3400年，美索不达米亚的工匠就依据自己的爱好再现了日常生活的场景。与此同时，在埃及，这种用刀雕刻出来的装饰清晰地表明了没有语言对叙事的影响。由于缺乏文字的记录，古埃及学的专家们至今无法确定正在交战的这两个部落的身份，以及这场战争的来龙去脉。大约公元前3300年，在美索不达米亚平原，出现了一些黏土或石质的小书板。一个数字由一道刻痕标示，后面还有人名、动物名或食物名，这样的名词是由一个图形或一个图形符号来表示的。同时，图形符号变成了概念符号。这种苏美尔文字反映了它们所表达的社会象征。埃及最早的文字大约出现在公元前3150年。这是一个用于祈祷的大型工具的碎片，也许是用来给神像的眼睛上粉的。它纪念了一位国王的胜利，国王在这里变成了一头践踏敌人的公牛。埃及的文字从一开始就是包含了三种符号的严密体系，其中某些符号还注了音。当时的人们创造这些符号，也许是为了记下一些很难用一幅简单的图形表示出来的专有名词。一只隼站在住着一条眼镜蛇的宫殿的围墙上，这种庄严的组合就是一个简单的专有名词。蛇，是用来指代一个国王名字的形象，因为国王名字的发音与蛇的发音相同。象形文字及其复杂的符号，与日常生活的要求是不相符的。于是从一开始就有一种简化的文字与之共存，这种文字能用墨水和毛笔很快地在各种各样的材料上书写下来，这种文字逐渐失去了其图形特征，离象形文字的模型越来越远。楔形文字这个词来自拉丁语的“楔子”，它并不是符号演变的开端，而是一个成果。起初，物体都是按照它们呈现出来的形态被描画下来，例如麦穗。有时是概括性的，例如用动物的头来指代动物本身，或者是象征性的，例如用女性的简化符号来指代一个妇女。但由于这种文字是写在黏土上的，所以它很快就会变形。象形文字的文本可以在几个方向上进行书写，这些文字首要的作用是写在一些纪念物上，所以它们的顺序要符合纪念物的形状和装饰。在埃及，文字与图形之间是没有界限的，比方说，这座高官的塑像以一条竖立在篮子中的蛇作为装饰，而这也可以作为一段铭文来解释。篮子意味着女主人。两臂表示食品。蛇则令人联想到一位女神——食物女神，雕像底座的文字也同时提到了这位女神的名字。这些象形文字都采用古埃及绘画的一般方法，它们只能通过缩减尺寸与图形符号区别开，因此象形文字也是真正的艺术品。装饰这个寺庙墙壁的碑文，表明了古埃及文字对美学原则的严格遵循。象形文字的排列和形状主要是为了让人悦目。而且埃及文字用来做装饰也是很常见的，同时还保留了其最初的目的，也就是使它所记载的信息能够永远流传。古埃及象形文字对后世的影响非常大，今天的我们就是继承了他们的成果。归根结底，我们今天的纸张和钢笔都只不过是从古埃及书记员的工具演化而来的。<br>							</div> -->
            <span class="span1"></span>
            <span class="span2"></span>
        </div>
        <ui-drawer class="drawer-box" right :open="drawerVisible" @close="toggleDrawer()">
            <ui-appbar title="文章">
                <ui-icon-button icon="close" @click="toggleDrawer" slot="left" />
                <ui-icon-button icon="add" @click="toggleEdit" slot="right" />
            </ui-appbar>
            <ui-list>
                <ui-list-item
                    :title="article.title"
                    v-for="article, index in articles"
                    @click="selectArticle(article)"
                    :key="article.id">
                    <ui-icon value="delete" slot="right" title="删除" @click.stop="removeArticle(index)" />    
                </ui-list-item>
            </ui-list>
        </ui-drawer>
        <ui-drawer class="drawer-box" right :open="editVisible" @close="toggleEdit()">
            <ui-appbar title="添加文章">
                <ui-icon-button icon="close" @click="toggleEdit" slot="left" />
                <ui-icon-button icon="check" @click="finish" slot="right" />
            </ui-appbar>
            <div class="body">
                <ui-text-field v-model="title" label="标题" />
                <br>
                <textarea class="content" v-model="content" placeholder="内容"></textarea>
            </div>
        </ui-drawer>
    </my-page>
</template>

<script>
    /* eslint-disable */
    function getObj(a) {
        return document.getElementById(a)
    }
    window.getObj = getObj

    export default {
        data () {
            return {
                typing: false,
                drawerVisible: false,
                editVisible: false,
                title: '',
                content: '',
                result: {
                    time: '46分22秒',
                    rate: '100%',
                    speed: '0'
                },
                articles: [
                    {
                        id: '1',
                        title: 'Source',
                        content: `A summary of the physical and chemical nature of life must begin, not on the Earth, but in the Sun; in fact, at the Sun's very center. It is here that is to be found the source of the energy that the Sun constantly pours out into space as light and heat. This energy is librated at the center of the Sun as billions upon billions of nuclei of hydrogen atoms collide with each other and fuse together to form nuclei of helium, and in doing so, release some of the energy that is stored in the nuclei of atoms. The output of light and heat of the Sun requires that some 600 million tons of hydrogen be converted into helium in the Sun every second. This the Sun has been doing for several thousands of millions of year. the nuclear energy is released at the Sun's center as high-energy gamma radiation, a form of electromagnetic radiation like light and radio waves, only of very much shorter wavelength. This gamma radiation is absorbed by atoms inside the Sun to be reemitted at slightly longer wavelengths. This radiation , in its turn is absorbed and reemitted. As the energy filters through the layers of the solar interior, it passes through the X-ray part of the spectrum eventually becoming light. At this stage, it has reached what we call the solar surface, and can escape into space without being absorbed further by solar atoms. A very small fraction of the Sun's light and heat is emitted in such directions that after passing unhindered through interplanetary space, it hits the Earth.`
                    },
                    {
                        id: '2',
                        title: 'Challenge',
                        content: 'When I was ten years old, I began to chat with foreigners. But I was very shy. Gradually, I became more and more confident with foreigners’ help.   The following year, I went to Yangzhou with two foreigners. I became their guide. First, we came into the Shouxi River. They wanted to look around the river by boat. I told them the price. Then we got into the boat. When we looked out at the sight, we all felt very beautiful. After that, they went to buy souvenirs. The sellers couldn’t speak English. Though it was very hard, I tried my best to listen to their words carefully and translate the sentences. They bought some souvenirs with my help. Next, we went to a small zoo, and we took some photos. There were not many animals. When we felt hungry, we went out and had lunch. After lunch, we visited some old houses. They learned more about Chinese history. This wasn’t only a big challenge but also an unforgettable challenge. This opportunity made me confident and brave. I hope I can catch many opportunities in the future, then I can speak English, because I think practice makes perfect.'
                    },
                    {
                        id: '3',
                        title: 'Go Out To Travel',
                        content: 'I went to three cities to play during last summer holidays. They are Beijing, Dalian and HuHehot.   I went to Beijing more than eight times. Beijing is the capital of China. It’s a big city. I am very familiar with Beijing. It takes an hour and forty minutes from Nantong to Beijing by plane. There are many tall buildings in Beijing. It’s a modern city. My family visited the Great Wall, the Summer Palace, the Palace Museum, the Beihai Park, the Space Museum, etc. I went to the countryside of Beijing to go boating and fishing. It was very interesting. I went shopping in WangFuJing. I bought lots of souvenirs and other things. I like eating Beijing snacks. They are delicious. Don’t miss Beijing Duck. It is really nice.   Dalian is a beautiful city. Dalian is close to Beijing. I spent 5o minutes on the plane. Dalian is near the sea. I smelled the salt in the air. The roads are clean. There are lots of trees and flowers near the roads. There are many esplanades and Japanese buildings. There are some fountains in one of the esplanades. Some people flew kites and walked on the esplanades. We went to see the beach and the sea. The sea is blue. There were many swimmers in the sea. I lay on the beach to see the sky. Dalian is a very nice place to live in.   Huhehot is in Inner Mongol. There are lots of large grasslands. The grasslands are endless. The sky is bright blue. There were a lot of horses and sheep. They were running or eating grass. I rode a horse on the grassland. I picked some colourful flowers. We drank tea with milk. There is a small desert, it was very hot when I walked on it. The sand could sing.   These trips helped me open my eyes. I enjoyed my day.'
                    },
                    {
                        id: '4',
                        title: 'My Dreams',
                        content: 'I want to be a teacher when I listen to my teacher carefully. I think I can be a teacher when I grow up. I can help many students learn things well. I can play with my students, too. So we are good friends.   I want to be a doctor when I see many doctors save their patients. To be a doctor is really great. I think I can be a doctor when I grow up. Then I can help many people out of danger. I will be the happiest girl in the world.   I want to be a reporter when I watch TV every evening. We can get lots of important information from them. They make the world smaller and also make us happy. I would like to be a reporter when I grow up. And I can learn a lot about China and the other countries around the world. I can meet many superstars as well.   I have lots of dreams. I think my dreams can come true one day, because there’s an old saying "where there is a will, there is a way."'
                    },
                    {
                        id: '5',
                        title: '百家姓',
                        content: '赵钱孙李，周吴郑王。冯陈褚卫，蒋沈韩杨。朱秦尤许，何吕施张。孔曹严华，金魏陶姜。戚谢邹喻，柏水窦章。云苏潘葛，奚范彭郎。鲁韦昌马，苗凤花方。俞任袁柳，酆鲍史唐。费廉岑薛，雷贺倪汤。滕殷罗毕，郝邬安常。乐于时傅，皮卞齐康。伍余元卜，顾孟平黄。和穆萧尹，姚邵堪汪。祁毛禹狄，米贝明臧。计伏成戴，谈宋茅庞。熊纪舒屈，项祝董粱。杜阮蓝闵，席季麻强。贾路娄危，江童颜郭。梅盛林刁，钟徐邱骆。高夏蔡田，樊胡凌霍。虞万支柯，咎管卢莫。经房裘缪，干解应宗。丁宣贲邓，郁单杭洪。包诸左石，崔吉钮龚。程嵇邢滑，裴陆荣翁。荀羊於惠，甄魏家封。芮羿储靳，汲邴糜松。井段富巫，乌焦巴弓。牧隗山谷，车侯宓蓬。全郗班仰，秋仲伊宫。宁仇栾暴，甘钭厉戎。祖武符刘，景詹束龙。叶幸司韶，郜黎蓟薄。印宿白怀，蒲台从鄂。索咸籍赖，卓蔺屠蒙。池乔阴郁，胥能苍双。闻莘党翟，谭贡劳逄。姬申扶堵，冉宰郦雍。却璩桑桂，濮牛寿通。边扈燕冀，郏浦尚农。温别庄晏，柴翟阎充。慕连茹习，宦艾鱼容。向古易慎，戈廖庚终。暨居衡步，都耿满弘。匡国文寇，广禄阙东。殴殳沃利，蔚越夔隆。师巩厍聂，晁勾敖融。冷訾辛阚，那简饶空。曾毋沙乜，养鞠须丰。巢关蒯相，查后荆红。游竺权逯，盖後桓公。万俟司马，上官欧阳。夏侯诸葛，闻人东方。赫连皇甫，尉迟公羊。澹台公冶，宗政濮阳。淳于单于，太叔申屠。公孙仲孙，轩辕令狐。钟离宇文，长孙慕容。鲜于闾丘，司徒司空。亓官司寇，仉督子车。颛孙端木，巫马公西。漆雕乐正，壤驷公良。拓拔夹谷，宰父谷粱。晋楚闫法，汝鄢涂钦。段干百里，东郭南门。呼延归海，羊舌微生。岳帅缑亢，况后有琴。梁丘左丘，东门西门。商牟佘佴，伯赏南宫。墨哈谯笪，年爱阳佟。第五言福，百家姓终。'
                    },
                    {
                        id: '6',
                        title: '常用 1500 字',
                        content: '的一是在了不和有大这主中人上为们地个用工时要动国产以我到他会作来分生对于学下级就年阶义发成部民可出能方进同行面说种过命度革而多子后自社加小机也经力线本电高量长党得实家定深法表着水理化争现所二起政三好十战无农使性前等反体合斗路图把结第里正新开论之物从当两些还天资事队批如应形想制心样干都向变关点育重其思与间内去因件日利相由压员气业代全组数果期导平各基或月毛然问比展那它最及外没看治提五解系林者米群头意只明四道马认次文通但条较克又公孔领军流入接席位情运器并飞原油放立题质指建区验活众很教决特此常石强极土少已根共直团统式转别造切九你取西持总料连任志观调七么山程百报更见必真保热委手改管处己将修支识病象几先老光专什六型具示复安带每东增则完风回南广劳轮科北打积车计给节做务被整联步类集号列温装即毫知轴研单色坚据速防史拉世设达尔场织历花受求传口断况采精金界品判参层止边清至万确究书术状厂须离再目海交权且儿青才证低越际八试规斯近注办布门铁需走议县兵固除般引齿千胜细影济白格效置推空配刀叶率述今选养德话查差半敌始片施响收华觉备名红续均药标记难存测士身紧液派准斤角降维板许破述技消底床田势端感往神便贺村构照容非搞亚磨族火段算适讲按值美态黄易彪服早班麦削信排台声该击素张密害侯草何树肥继右属市严径螺检左页抗苏显苦英快称坏移约巴材省黑武培著河帝仅针怎植京助升王眼她抓含苗副杂普谈围食射源例致酸旧却充足短划剂宣环落首尺波承粉践府鱼随考刻靠够满夫失包住促枝局菌杆周护岩师举曲春元超负砂封换太模贫减阳扬江析亩木言球朝医校古呢稻宋听唯输滑站另卫字鼓刚写刘微略范供阿块某功套友限项余倒卷创律雨让骨远帮初皮播优占死毒圈伟季训控激找叫云互跟裂粮粒母练塞钢顶策双留误础吸阻故寸盾晚丝女散焊功株亲院冷彻弹错散商视艺灭版烈零室轻血倍缺厘泵察绝富城冲喷壤简否柱李望盘磁雄似困巩益洲脱投送奴侧润盖挥距触星松送获兴独官混纪依未突架宽冬章湿偏纹吃执阀矿寨责熟稳夺硬价努翻奇甲预职评读背协损棉侵灰虽矛厚罗泥辟告卵箱掌氧恩爱停曾溶营终纲孟钱待尽俄缩沙退陈讨奋械载胞幼哪剥迫旋征槽倒握担仍呀鲜吧卡粗介钻逐弱脚怕盐末阴丰编印蜂急拿扩伤飞露核缘游振操央伍域甚迅辉异序免纸夜乡久隶缸夹念兰映沟乙吗儒杀汽磷艰晶插埃燃欢铁补咱芽永瓦倾阵碳演威附牙芽永瓦斜灌欧献顺猪洋腐请透司危括脉宜笑若尾束壮暴企菜穗楚汉愈绿拖牛份染既秋遍锻玉夏疗尖殖井费州访吹荣铜沿替滚客召旱悟刺脑措贯藏敢令隙炉壳硫煤迎铸粘探临薄旬善福纵择礼愿伏残雷延烟句纯渐耕跑泽慢栽鲁赤繁境潮横掉锥希池败船假亮谓托伙哲怀割摆贡呈劲财仪沉炼麻罪祖息车穿货销齐鼠抽画饲龙库守筑房歌寒喜哥洗蚀废纳腹乎录镜妇恶脂庄擦险赞钟摇典柄辩竹谷卖乱虚桥奥伯赶垂途额壁网截野遗静谋弄挂课镇妄盛耐援扎虑键归符庆聚绕摩忙舞遇索顾胶羊湖钉仁音迹碎伸灯避泛亡答勇频皇柳哈揭甘诺概宪浓岛袭谁洪谢炮浇斑讯懂灵蛋闭孩释乳巨徒私银伊景坦累匀霉杜乐勒隔弯绩招绍胡呼痛峰零柴簧午跳居尚丁秦稍追梁折耗碱殊岗挖氏刃剧堆赫荷胸衡勤膜篇登驻案刊秧缓凸役剪川雪链渔啦脸户洛孢勃盟买杨宗焦赛旗滤硅炭股坐蒸凝竟陷枪黎救冒暗洞犯筒您宋弧爆谬涂味津臂障褐陆啊健尊豆拔莫抵桑坡缝警挑污冰柬嘴啥饭塑寄赵喊垫康遵牧遭幅园腔订香肉弟屋敏恢忘衣孙龄岭骗休借丹渡耳刨虎笔稀昆浪萨茶滴浅拥穴覆伦娘吨浸袖珠雌妈紫戏塔锤震岁貌洁剖牢锋疑霸闪埔猛诉刷狠忽灾闹乔唐漏闻沈熔氯荒茎男凡抢像浆旁玻亦忠唱蒙予纷捕锁尤乘乌智淡允叛畜俘摸锈扫毕璃宝芯爷鉴秘净蒋钙肩腾枯抛轨堂拌爸循诱祝励肯酒绳穷塘燥泡袋朗喂铝软渠颗惯贸粪综墙趋彼届墨碍启逆卸航雾冠丙街莱贝辐肠付吉渗瑞惊顿挤秒悬姆烂森糖圣凹陶词迟蚕亿矩'
                    },
                    {
                        id: '7',
                        title: '最早的文字',
                        content: '在文字出现以前，人们就已经学会了计数，并且能够阅读没有话语的故事。人类很早就能用图形来表达自己的思想。大约在公元前3400年，美索不达米亚的工匠就依据自己的爱好再现了日常生活的场景。与此同时，在埃及，这种用刀雕刻出来的装饰清晰地表明了没有语言对叙事的影响。由于缺乏文字的记录，古埃及学的专家们至今无法确定正在交战的这两个部落的身份，以及这场战争的来龙去脉。大约公元前3300年，在美索不达米亚平原，出现了一些黏土或石质的小书板。一个数字由一道刻痕标示，后面还有人名、动物名或食物名，这样的名词是由一个图形或一个图形符号来表示的。同时，图形符号变成了概念符号。这种苏美尔文字反映了它们所表达的社会象征。埃及最早的文字大约出现在公元前3150年。这是一个用于祈祷的大型工具的碎片，也许是用来给神像的眼睛上粉的。它纪念了一位国王的胜利，国王在这里变成了一头践踏敌人的公牛。埃及的文字从一开始就是包含了三种符号的严密体系，其中某些符号还注了音。当时的人们创造这些符号，也许是为了记下一些很难用一幅简单的图形表示出来的专有名词。一只隼站在住着一条眼镜蛇的宫殿的围墙上，这种庄严的组合就是一个简单的专有名词。蛇，是用来指代一个国王名字的形象，因为国王名字的发音与蛇的发音相同。象形文字及其复杂的符号，与日常生活的要求是不相符的。于是从一开始就有一种简化的文字与之共存，这种文字能用墨水和毛笔很快地在各种各样的材料上书写下来，这种文字逐渐失去了其图形特征，离象形文字的模型越来越远。楔形文字这个词来自拉丁语的“楔子”，它并不是符号演变的开端，而是一个成果。起初，物体都是按照它们呈现出来的形态被描画下来，例如麦穗。有时是概括性的，例如用动物的头来指代动物本身，或者是象征性的，例如用女性的简化符号来指代一个妇女。但由于这种文字是写在黏土上的，所以它很快就会变形。象形文字的文本可以在几个方向上进行书写，这些文字首要的作用是写在一些纪念物上，所以它们的顺序要符合纪念物的形状和装饰。在埃及，文字与图形之间是没有界限的，比方说，这座高官的塑像以一条竖立在篮子中的蛇作为装饰，而这也可以作为一段铭文来解释。篮子意味着女主人。两臂表示食品。蛇则令人联想到一位女神——食物女神，雕像底座的文字也同时提到了这位女神的名字。这些象形文字都采用古埃及绘画的一般方法，它们只能通过缩减尺寸与图形符号区别开，因此象形文字也是真正的艺术品。装饰这个寺庙墙壁的碑文，表明了古埃及文字对美学原则的严格遵循。象形文字的排列和形状主要是为了让人悦目。而且埃及文字用来做装饰也是很常见的，同时还保留了其最初的目的，也就是使它所记载的信息能够永远流传。古埃及象形文字对后世的影响非常大，今天的我们就是继承了他们的成果。归根结底，我们今天的纸张和钢笔都只不过是从古埃及书记员的工具演化而来的。'
                    },
                    {
                        id: '8',
                        title: '咖啡文化',
                        content: '在中国，人们越来越爱喝咖啡。随之而来的“咖啡文化”充满生活的每个时刻。无论在家里、还是在办公室、或是各种社交场合，人们都在品着咖啡：它逐渐与时尚、现代生活联系在一起。遍布各地的咖啡屋成为人们交谈、听音乐、休息的好地方，咖啡逐渐发展为一种文化。无论是新鲜研磨的咖啡豆，还是刚刚冲好的热咖啡，都散发出馥郁的香气，令人沉醉。品味这一沉醉的方式很多：意大利特浓咖啡、卡布其顿咖啡、拉泰、风味咖啡；它们为北京、上海以及中国其他大城市经常光顾咖啡屋的人们提供了各种选择。中国人也逐渐喜欢自己做咖啡了。用焙炒过的咖啡豆和渗滤壶、滤纸做一杯新鲜的咖啡，也别有一番滋味。随着咖啡这一有着悠久历史饮品的广为人知，咖啡正在被越来越多的中国人所接受。有数据表明，中国的咖啡消费量正逐年上升，而有望成为世界重要的咖啡消费国。而今，出产在中国自己土地上的云南咖啡，以其高贵的品质，低廉的价格，将推动这一潮流，引导这一时尚，成为中国人自己的咖啡品牌，从而拥有中国自己独特的咖啡文化。曾听说法国一度由于咖啡缺货而少喝了咖啡，马上就见打盹的人多起来。说来好象夸张，但法国人嗜咖啡倒是千真万确。1991年“海湾战争”爆发，法国也是参战国之一，国内部分老百姓担心战争影响日用品供应，纷纷跑到超级市场抢购。此事连电视台也惊动了，当镜头对着满抱“紧缺物资”的顾客时，却发现他们拿得最多的竟是咖啡和糖。此事一度成为当时的大笑话。法国人喝咖啡讲究的似乎不在于味道，而是环境和情调，大多不愿闭门“独酌”，偏偏要在外面凑热闹，即使一小杯的价钱足够在家里煮上一壶。他们也不是匆匆喝了拉倒，而是慢慢的品，细细的尝，读书看报，高谈阔论，一喝就是大半天。法国人养成这种喝咖啡的习惯，自觉不自觉的表达着一种优雅的韵味，一种浪漫情调，一种享受生活的写意感。可以说这是一种传统独特的咖啡文化。正因为如此，法国让人歇脚喝咖啡的地方可说遍布大街小巷，马路旁、广场边、河岸上、游船上、甚至艾非尔铁塔上。而形式、风格、大小不拘一格，有咖啡店、馆、厅、室。而最大众化、充满浪漫情调的，还是那些露天咖啡座，那几乎是法国人的生活的写照。难怪注重品味的法国人有一个传统说法，在塞纳河边叫人换一个咖啡馆也许比换一种宗教还难!一个地道咖啡馆，常客不仅决不轻易改变自己的咖啡馆，连来咖啡馆的时间和坐在哪张咖啡桌上的习惯都是固定不变的。这种忠诚的关系当然也体现在好客不倦的主人，不用招呼，熟知自己常客脾气和嗜好的老侍应生就会端来他最喜欢的那种咖啡，配上一盘特色点心，甚至还会随手带来他最爱看的报刊，不必说谢谢，这些在一个正宗的咖啡馆里都是理所当然的。'
                    },
                ],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/type/help',
                            title: '帮助'
                        }
                    ]
                }
            }
        },
        mounted() {
            let _this = this
            this.articles = this.$storage.get('articles', this.articles)

            _this.autoRun = null;
            _this.time = 0;
            _this.numAll = 0;

            function changeText() {
                clearText();
                var a = getObj('txtInput').value;
                a = a.replace(/\r\n/g, '\n');
                var b = getObj('divText').value;
                b = b.replace(/  /g, ' ');
                b = b.replace(/   /g, ' ');
                b = b.replace(/\r/g, '');
                b = b.replace(/\n/g, '');
                b = b.replace(/&nbsp;/g, ' ');
                b = b.replace(/<BR>/g, '\n');
                b = b.replace(/<br>/g, '\n');
                var c = 18;
                var d = 0;
                var e = 0;
                var f = 0;
                var g = null;
                for (var i = 0; i < b.length; i++) {
                    if (i >= a.length + f) {
                        break
                    }
                    var color = '#7dc67d';
                    if (a.charAt(i - f) != b.charAt(i)) {
                        e++;
                        color = '#f06c79'
                    }
                    if (g && g.color != color) {
                        addSpan(g);
                        g = null
                    }
                    if (b.charAt(i) == '\n' || b.charAt(i) == '\r') {
                        if (b.charAt(i) == '\n') {
                            c += 60;
                            d = 0;
                            addSpan(g);
                            g = null
                        }
                        continue
                    }
                    var j = b.charCodeAt(i) > 255 ? 24 : 13.1;
                    if (!g) {
                        g = new Object();
                        g.top = c;
                        g.left = d;
                        g.color = color;
                        g.height = 24;
                        g.width = j
                    } else {
                        g.width += j
                    }
                    d += j;
                    if (d > getObj('divText').scrollWidth - j) {
                        c += 60;
                        d = 0;
                        addSpan(g);
                        g = null;
                        if (b.charAt(i + 1) == ' ' || b.charAt(i + 1) == '\n') {
                            i++;
                            f++
                        }
                    }
                }
                if (g) {
                    addSpan(g);
                    g = null
                }
                _this.result.rate = Math.round(100 - (e / a.length) * 100) + '%'
                _this.result.speed = Math.round(a.length / _this.time * 60) + '字 / 分'
            }

            window.changeText = changeText

            function addSpan(a) {
                if (!a) {
                    return
                }
                var b = document.createElement('span');
                b.style.position = 'absolute';
                b.style.width = a.width + 'px';
                b.style.height = a.height + 'px';
                b.style.top = a.top + 'px';
                b.style.left = a.left + 'px';
                b.style.zIndex = 1;
                b.style.backgroundColor = a.color;
                getObj('divMain').appendChild(b)
            }

            function clearText() {
                var a = getObj('divMain');
                var b = a.getElementsByTagName('span');
                while (b.length > 0) {
                    a.removeChild(b[0])
                }
            }
            _this.clearText = clearText
            function btnStartClick() {
                if (_this.autoRun) {
                    window.clearInterval(_this.autoRun)
                }
                var b = getObj('txtInput');
                var c = getObj('divText');
                if (!_this.typing) {
                    _this.typing = true
                    clearText();
                    b.style.height = Math.max(500, c.offsetHeight) + 'px';
                    b.value = '';
                    b.disabled = false;
                    b.focus();
                    _this.result.time = '0 秒'
                    _this.result.rate = '100%'
                    _this.result.speed = ' - '
                    
                    _this.numAll = 0;
                    let numError = 0;
                    let numInput = 0;
                    _this.time = 0;
                    _this.autoRun = window.setInterval(timer, 1000)
                } else {
                    _this.typing = false
                    // alert('您的成绩为：' + _this.result.speed + '字/分')
                }
            }
            this._start = btnStartClick
            this._end = btnStartClick

            function timer() {
                _this.time++;
                var a = '';
                var b = Math.floor(_this.time / 60);
                if (b > 0) {
                    a += b + '分'
                }
                
                _this.result.time = a + (_this.time - b * 60) + '秒'
                var c = getObj('txtInput').value;
                c = c.replace(/\r\n/g, '\n');
                _this.result.speed = Math.round(c.length / _this.time * 60)
            }

            this.setText(this.articles[0].content)
        },
        methods: {
            toggleEdit() {
                this.editVisible = !this.editVisible
            },
            finish() {
                this.articles.unshift({
                    id: '' + new Date().getTime(),
                    title: this.title,
                    content: this.content
                })
                this.$storage.set('articles', this.articles)
                this.editVisible = false
            },
            // TODO 只能删除自己添加的文章！
            removeArticle(index) {
                this.articles.splice(index, 1)
                this.$storage.set('articles', this.articles)
            },
            setText(b) {
                let _this = this
                b = b.replace(/\r/g, '');
                b = b.replace(/–/g, '-');
                b = b.replace(/\n/g, '<br>');
                getObj('divText').value = b
                b = b.replace(/  /g, ' ');
                b = b.replace(/   /g, ' ');
                c
                _this.numAll = b.length;
                _this.clearText();
                _this.result.time = '0 秒'
                _this.result.rate = '100%'
                _this.result.speed = ' - '

                getObj('txtInput').value = '';
                getObj('txtInput').disabled = true;
                if (_this.autoRun) {
                    window.clearInterval(_this.autoRun)
                }
            },
            toggleDrawer() {
                this.drawerVisible = !this.drawerVisible
            },
            selectArticle(article) {
                this.setText(article.content)
            },
            start() {
                this._start()
            },
            end() {
                this._end()
            }
        }
    }
</script>

<style lang="scss" scoped>
.btns {
    .btn {
        margin-right: 8px;
        margin-bottom: 16px;
    }
}
.drawer-box {
    width: 400px;
    max-width: 300px;
    .body {
        position: absolute;
        top: 56px;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 16px;
        overflow: auto;
    }
    .content {
        width: 100%;
        height: 320px;
        padding: 16px;
    }
}
.result-list {
    display: flex;
    margin-bottom: 16px;
    .item {
        margin-right: 16px;
    }
}
/**/
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}
::-webkit-scrollbar-track {
    background: #e9e9e9;
}
::-webkit-scrollbar-thumb {
    background: #cecfbd;
}
::-webkit-scrollbar-thumb:window-inactive {
    background: #999;
}
/**/
.info-list {
    margin-top: 8px;
}
.info-list .info-item {
    margin-right: 16px;
}

.form-inline {
    margin-bottom: 16px;
}
.text-all {
    display: none;
}
.divMain {
    position: relative;
    height: 480px;
    width: 100%;
    // max-width: 800px;
    // margin: 16px auto;
    overflow-y: scroll;
    background-color: white;
    border: 2px solid #3eaef2;
}

.divMain textarea {
    word-break: break-all;
    word-wrap: break-word;
    width: 100%;
    word-spacing: normal;
    letter-spacing: 0px;
    margin: 0px;
    border: none;
    padding: 28px 0px 0px;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 1740px;
    overflow-y: hidden;
    color: rgb(51, 51, 51);
    line-height: 60px;
    font-family: Consolas;
    font-size: 24px;
    background-color: white;
}

.divMain .text {
    z-index: 2;
    word-spacing: 0px;
    letter-spacing: 0px;
    word-break: break-all;
    word-wrap: break-word;
    position: absolute;
    padding: 0px;
    margin: 0px;
    left: 0px;
    width: 100%;
    color: #333333;
    line-height: 60px;
    font-family: Consolas;
    font-size: 24px;
}
.article-tex {
    z-index: 2;
    word-spacing: 0px;
    letter-spacing: 0px;
    word-break: break-all;
    word-wrap: break-word;
    position: absolute;
    padding: 0px;
    margin: 0px;
    left: 0px;
    width: 100%;
    color: #333333;
    line-height: 60px;
    font-family: Consolas;
    font-size: 24px;
}
.divMain .span1 {
    position: absolute;
    width: 984px;
    height: 24px;
    top: 18px;
    left: 0px;
    z-index: 1;
    background-color: rgb(204, 204, 204);
}
.divMain .span2 {
    position: absolute;
    width: 532.4px;
    height: 24px;
    top: 78px;
    left: 0px;
    z-index: 1;
    background-color: rgb(204, 204, 204);
}

.dialogbox-back {
    z-index: 9999;
}


</style>
