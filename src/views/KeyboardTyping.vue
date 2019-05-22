<template>
    <my-page title="键盘指法练习" :page="page">
        <div class="common-container container">
            <div id="container">
                <div id="content">
                    <div id="keyboard">
                        <div id="art_text" class="line line-top">
                            <div class="key b_on">
                                <ul>
                                    <li>a</li>
                                </ul>
                            </div>
                            <div class="key b_alt">
                                <ul><li>s</li></ul></div>
                            <div class="key b_alt"><ul><li>d</li></ul></div>
                            <div class="key b_alt"><ul><li>f</li></ul></div>
                            <div class="key b_alt"><ul><li>g</li></ul>
                            </div>
                        </div>
                        <div class="line">
                            <div id="a_96" class="key b1"><ul><li>~</li><li>`</li></ul></div>
                            <div id="a_49" class="key b1"><ul><li>!</li><li>1</li></ul></div>
                            <div id="a_50" class="key b2"><ul><li>@</li><li>2</li></ul></div>
                            <div id="a_51" class="key b1"><ul><li>#</li><li>3</li></ul></div>
                            <div id="a_52" class="key b2"><ul><li>$</li><li>4</li></ul></div>
                            <div id="a_53" class="key b2"><ul><li>%</li><li>5</li></ul></div>
                            <div id="a_54" class="key b2"><ul><li>^</li><li>6</li></ul></div>
                            <div id="a_55" class="key b2"><ul><li>&amp;</li><li>7</li></ul></div>
                            <div id="a_56" class="key b1"><ul><li>*</li><li>8</li></ul></div>
                            <div id="a_57" class="key b2"><ul><li>(</li><li>9</li></ul></div>
                            <div id="a_48" class="key b1"><ul><li>)</li><li>0</li></ul></div>
                            <div id="a_45" class="key b1"><ul><li>—</li><li>-</li></ul></div>
                            <div id="a_61" class="key b1"><ul><li>+</li><li>=</li></ul></div>
                            <div id="a_8" class="key key-backspace"><ul><li>Backspace</li></ul></div>
                        </div>
                        <div class="line">
                            <div id="a_9" class="key key-tab"><div class="key-text">Tab</div></div>
                            <div id="a_113" class="key b1"><ul><li>Q</li></ul></div>
                            <div id="a_119" class="key b2"><ul><li>W</li></ul></div>
                            <div id="a_101" class="key b1"><ul><li>E</li></ul></div>
                            <div id="a_114" class="key b2"><ul><li>R</li></ul></div>
                            <div id="a_116" class="key b2"><ul><li>T</li></ul></div>
                            <div id="a_121" class="key b2"><ul><li>Y</li></ul></div>
                            <div id="a_117" class="key b2"><ul><li>U</li></ul></div>
                            <div id="a_105" class="key b1"><ul><li>I</li></ul></div>
                            <div id="a_111" class="key b2"><ul><li>O</li></ul></div>
                            <div id="a_112" class="key b1"><ul><li>P</li></ul></div>
                            <div id="a_91" class="key b1"><ul><li>{</li><li>[</li></ul></div>
                            <div id="a_93" class="key b1"><ul><li>}</li><li>]</li></ul></div>
                            <div id="a_92" class="key key-tab"><ul><li>|</li><li>&#92;</li></ul></div>
                        </div>
                        <div class="line">
                            <div id="a_20" class="key key-lock"><ul><li>Caps Lock</li></ul></div>
                            <div id="a_97" class="key b1"><ul><li>A</li></ul></div>
                            <div id="a_115" class="key b2"><ul><li>S</li></ul></div>
                            <div id="a_100" class="key b1"><ul><li>D</li></ul></div>
                            <div id="a_102" class="key b2"><ul><li>F</li><li class="fj">&nbsp;</li></ul></div>
                            <div id="a_103" class="key b2"><ul><li>G</li></ul></div>
                            <div id="a_104" class="key b2"><ul><li>H</li></ul></div>
                            <div id="a_106" class="key b2"><ul><li>J</li><li class="fj">&nbsp;</li></ul></div>
                            <div id="a_107" class="key b1"><ul><li>K</li></ul></div>
                            <div id="a_108" class="key b2"><ul><li>L</li></ul></div>
                            <div id="a_59" class="key b1"><ul><li>:</li><li>;</li></ul></div>
                            <div id="a_39" class="key b1"><ul><li>"</li><li>'</li></ul></div>
                            <div id="a_13" class="key key-enter"><ul><li>Enter</li></ul></div>
                        </div>
                        <div class="line">
                            <div id="a_991" class="key b_shift"><ul><li>Shift</li></ul></div>
                            <div id="a_122" class="key b1"><ul><li>Z</li></ul></div>
                            <div id="a_120" class="key b2"><ul><li>X</li></ul></div>
                            <div id="a_99" class="key b1"><ul><li>C</li></ul></div>
                            <div id="a_118" class="key b2"><ul><li>V</li></ul></div>
                            <div id="a_98" class="key b2"><ul><li>B</li></ul></div>
                            <div id="a_110" class="key b2"><ul><li>N</li></ul></div>
                            <div id="a_109" class="key b2"><ul><li>M</li></ul></div>
                            <div id="a_44" class="key b1"><ul><li>&lt;</li><li>,</li></ul></div>
                            <div id="a_46" class="key b2"><ul><li>&gt;</li><li>.</li></ul></div>
                            <div id="a_47" class="key b1"><ul><li>?</li><li>/</li></ul></div>
                            <div id="a_992" class="key key-shift"><ul><li>Shift</li></ul></div>
                        </div>
                        <div class="line">
                            <div class="key key-ctrl-left"><ul><li>Ctrl</li></ul></div>
                            <div class="key key-win"><ul></ul></div>
                            <div class="key b_alt"><ul><li>Alt</li></ul></div>
                            <div id="a_32" class="key b_space"><ul><li>&nbsp;</li></ul></div>
                            <div class="key b_alt"><ul><li>Alt</li></ul></div>
                            <div class="key key-win"><ul></ul></div>
                            <div class="key key-mouse"><ul></ul></div>
                            <div class="key key-ctrl-right"><ul><li>Ctrl</li></ul></div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
            <ul class="info-list">
                <li class="item">
                    <ui-icon class="icon" value="access_time" />
                    时间：{{ result.time }}</li>
                <li class="item">
                    <ui-icon class="icon" value="access_time" />
                    速度：{{ result.speed }} KMP</li>
                <li class="item">
                    <ui-icon class="icon" value="check_circle" />
                    正确率：{{ result.right }} %</li>
                <li class="item">
                    <ui-icon class="icon" value="access_time" />
                    进度：{{ result.progress }} %</li>
            </ul>
            <select class="select" id="jump_menu">
                <option value="#">☆☆☆ 选择练习课程 ☆☆☆</option>
                <option value="1" selected="">1.键盘布局(KeyBoard Layout)
                </option>
                <option value="2">2.手指分区练习
                </option>
                <option value="3">3.键位纠错练习
                </option>
                <option value="4">4.键位课程一：asdf jkl；
                </option>
                <option value="5">5.键位课程二：e i
                </option>
                <option value="6">6.键位课程三：r u
                </option>
                <option value="7">7.键位课程四：g h
                </option>
                <option value="8">8.键位课程五：C ,
                </option>
                <option value="9">9.键位课程六：y t
                </option>
                <option value="10">10.键位课程七：m v
                </option>
                <option value="11">11.键位课程八：b n
                </option>
                <option value="12">12.键位课程九：o w
                </option>
                <option value="13">13.键位课程十：p q z
                </option>
                <option value="14">14.键位课程11：x .
                </option>
                <option value="15">15.键位课程13:0-9
                </option>
                <option value="16">16.键位课程12：Capital-大写
                </option>
                <option value="17">17.键位课程14：英文标点符号
                </option>
            </select>
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    import data from '../util/data'
    
    var key_data = key_data1;

    //CapsLock状态
    var _capslk			= 0;		//Caps Lock状态
    var art_line		= 1;		//当前显示数组
    var art_num			= 0;		//当前数组中自己个字
    var last_code		= 0;		//最后一个错误code
    var start_time		= 0;		//开始时间
    var time_cha		= 0;		//时间差毫秒数
    var typing_num		= 0; 		//打字总数
    var all_num			= 0; 		//打字总数
    var error_num		= 0; 		//错误字数
    var right_num		= '--';		//初始正确率
    var jindu			= 0;		//初始进度
    var sudu_num		= '--';		//初始速度
    var _jishi			= null;		//计时标记
    //charCodeAt(0)


    export default {
        data () {
            return {
                result: {
                    time: '0分0秒',
                    speed: '--',
                    right: '--',
                    progress: 0
                },
                page: {
                    menu: [
                        // {
                        //     type: 'icon',
                        //     icon: 'apps',
                        //     href: 'https://app.yunser.com/',
                        //     target: '_blank',
                        //     title: '应用'
                        // }
                    ]
                }
            }
        },
        mounted() {
            let _this = this

            //计时
            function jishi(){
                if(start_time >0){
                    time_cha	= get_time()-start_time;
                    sudu_num	= Math.round(typing_num/time_cha*60000);
                }
                if(typing_num >0){
                    right_num	= Math.round((1-error_num/typing_num)*10000)/100;
                    jindu		= Math.round((typing_num-error_num)/all_num*10000)/100;
                }
                _this.result.time = get_date(time_cha)
                _this.result.speed = sudu_num
                _this.result.right = right_num
                _this.result.progress = jindu

                _jishi	= setTimeout(jishi, 100);
            }

            function setData(idx) {
                key_data = window['key_data' + idx];

                $('#keyboard').find('.on').removeClass('on');
                $('#keyboard').find('.error').removeClass('error');

                //alert(key_data);
                if(key_data !=''){
                    show_key();
                    jishi();
                    for(var i=1; i<key_data.length; i++){
                        all_num	+=key_data[i].length;
                    }
                }
            }
            
            


            

            //格式化时间
            function get_date(time){
                var t	= new Date(time);
                return t.getMinutes()+'分'+t.getSeconds()+'秒';
            }

            //获取时间戳
            function get_time(){
                var t		= new Date();
                return t.getTime();
            }

            //显示键盘按键
            function show_key(){
                if(key_data[art_line]){
                    var key_code	= key_data[art_line].charCodeAt(art_num);
                    show_text();
                    set_on(key_code,'on',1);
                    set_shift(key_code);		//设置SHIFT
                }else{
                    clearTimeout(_jishi);
                    var art_text	= document.getElementById('art_text');
                    art_text.style.paddingLeft = '0px';
                    art_text.innerHTML='<h3>O(∩_∩)O哈哈~ 恭喜你已经完成本次测试！</h3>';
                    document.getElementById('jindu').innerHTML = '进度：100 %';
                }
            }

            //设置shift状态
            function set_shift(code){
                var left	= /^(126|33|64|35|36|37|81|87|69|82|84|65|83|68|70|71|90|88|67|86|66)$/;
                var right	= /^(94|38|42|40|41|95|43|89|85|73|79|80|123|125|124|72|74|75|76|58|34|78|77|60|62|63)$/;
                set_on('991',null);
                set_on('992',null);
                if(code >=97 && code <=122){
                    //小写字母
                    if(_capslk ==1){
                        code -=32;
                        if(left.test(code)){
                            set_on('992','on',1);
                        }else if(right.test(code)){
                            set_on('991','on',1);
                        }
                    }
                }else if(code >=65 && code <=90){
                    //大写字母
                    if(_capslk !=1){
                        if(left.test(code)){
                            set_on('992','on',1);
                        }else if(right.test(code)){
                            set_on('991','on',1);
                        }
                    }
                }else{
                    if(left.test(code)){
                        set_on('992','on',1);
                    }else if(right.test(code)){
                        set_on('991','on',1);
                    }
                }
            }

            //显示文本
            function show_text(){
                if(key_data[art_line]){
                    var art_text	= document.getElementById('art_text');
                    art_text.style.paddingLeft = Math.round((990-key_data[art_line].length*65)/2)+'px';
                    var data_html	= '';
                    for(var i=0; i<key_data[art_line].length; i++){
                        data_html += '<div class="key '+(i==art_num ? 'on':'alt')+'"><ul><li>'+key_data[art_line].substr(i,1)+'</li></ul></div>';
                    }
                    art_text.innerHTML = data_html;
                }
            }

            //获取按键Code
            function checkKey(evt) {
                if(key_data[art_line]){
                    var code =  get_keyCode(evt);
                    var key_code	= key_data[art_line].charCodeAt(art_num);
                    //计时
                    if(start_time ==0){
                        start_time	= get_time();
                    }
                    set_on(last_code,null);
                    last_code	= 0;
                    typing_num++;
                    if(code == key_code){
                        //正确
                        set_on(code,null);
                        if(art_num < key_data[art_line].length-1){
                            art_num++;
                        }else{
                            art_num=0;
                            art_line++;
                        }
                    }else{
                        //错误
                        error_num++;
                        if(code_code(code) != code_code(key_code)){
                            last_code	= code;
                            set_on(code,'err',1);
                        }
                    }
                    show_key();
                }
                return false;
            }


            //检查键盘按下
            function checkDown(evt){
                var evt = evt ? evt : (window.event ? window.event : null);
                var code = evt.which ? evt.which :evt.keyCode;
                if(code == 8 || code == 9|| code == 32){
                    //禁止BackSpace Tab 空格
                    checkKey(evt);
                    return false;
                }
                if(code == 20){
                    if(_capslk == 1){
                        _capslk = 0;
                        set_on(20,null);
                    }else{
                        _capslk = 1;
                        set_on(20,'on',1)
                    }
                }
            }

            //获取按键code，并设置CapsLock状态
            function get_keyCode(evt){
                var evt = evt ? evt : (window.event ? window.event : null);
                var code = evt.which ? evt.which :evt.keyCode;
                var valueShift　= evt.shiftKey ? evt.shiftKey:((code　== 　16 ) ? true : false );
                //设置CapsLock状态
                if((code >=65 && code <=90 && !valueShift)||(code >=97 && code <=122 && valueShift)){
                    _capslk	= 1;
                    set_on(20,'on',1);
                }else if((code >=65 && code <=90)||(code >=97 && code <=122)){
                    _capslk	= 0;
                    set_on(20,null);
                }
                return code;
            }

            //设置按键颜色
            function set_on(key_code,on,keep){
                key_code	= code_code(key_code);
                var a = document.getElementById('a_'+key_code);
                var $a = $('#a_' + key_code);
                if(on == 'on' ||on == 'err'){
                    if(a){
                        if(on == 'on'){
                            if (!$a.hasClass('.on')) {
                                $a.addClass('on');
                            }
                        }else{
                            if (!$a.hasClass('.error')) {
                                $a.addClass('error');
                            }
                        }
                        if(!keep){
                            setTimeout(function(){set_on(key_code,null)},150);
                        }
                    }
                }else{
                    $a.removeClass('on');
                    if (a) {
                        $a.removeClass('error');
                    }
                }
                return true;
            }

            //将两键位code转换为一个
            function code_code(key_code){
                if(key_code >=65 && key_code <=90){
                    key_code += 32;
                }
                var replace_1	= new Array(126	,33	,64	,35	,36	,37	,94	,38	,42	,40	,41	,95	,43	,60	,62	,63	,58	,34	,123,125,124)
                var replace_2	= new Array(96	,49	,50	,51	,52	,53	,54	,55	,56	,57	,48	,45	,61	,44	,46	,47	,59	,39	,91	,93	,92);
                for(var i=0; i<replace_1.length; i++){
                    key_code = key_code == replace_1[i] ? replace_2[i]:key_code;
                }
                return key_code;
            }

            //跳转菜单
            function MM_jumpMenu(obj){ //v3.0
                document.location = obj.value;
            }

            $('#jump_menu').on('change', function (event) {
                //MM_jumpMenu(this);
                setData(this.value);
            });

            $(document).on('keydown', function (event) {
                return checkDown(event);
            });

            $(document).on('keypress', function (event) {
                return checkKey(event);
            });
            //onkeydown="" onkeypress="return checkKey(event)"

            setData(1);
        }
    }
</script>

<style lang="scss">
@import '../scss/var';

#container {
    width: 990px;
    margin: 0 auto;
}

/*键位练习*/
#keyboard {
    margin-bottom: 10px;
    border: none;
    overflow: hidden;
    .line {
        padding-left: 5px;
        overflow: hidden;
    }
    .line-top {
        height: 60px;
        padding-left: 333px;
        margin-bottom: 24px;
    }
    .key {
        float: left;
        height: 58px;
        width: 65px;
        padding: 2px;
        background-color: #fff;
        margin-right: 0px;
        ul {
            display: block;
            height: 53px;
            padding: 8px 0px 0px 0px;
            color: #aaa;
            font: bold 9pt arial;
            text-decoration: none;
            text-align: center;
            background: #eff0f2;
            border: 1px solid #ccc;
            border-radius: 4px;
            border-top: 1px solid #f5f5f5;
        }
        li {
            line-height: 19px;
            font-weight: 400;
            font-size: 16px;
        }
        &.error ul {
            color: #fff;
            background-color: #f00;
        }
    }
    .fj {
        width: 20px;
        height: 4px;
        margin: 8px auto;
        background-color: #ccc;
        border-radius: 2px;
    }

    .key-text {
        line-height: 38px;
    }

    .key-backspace {
        width: 130px;
    }
    .key-tab {
        width: 97px;
    }
    .key-lock {
        width: 119px;
    }
    .key-enter {
        width: 140px;
    }
    .key-win {
        width: 65px;
    }
    .key-mouse {
        width: 65px;
    }
    .key-shift {
        width: 162px;
    }
    .key-ctrl-right {
        width: 120px;
    }
    .b_space {
        width: 409px;
    }
    .b_alt {
        width: 65px;
    }
}








#keyboard .b_shift li,
#keyboard .b_tab li,
#keyboard .b_alt li,
#keyboard .b_back li,
#keyboard .key-ctrl-left li,
#keyboard .b_lock li,
#keyboard .key-win li,
#keyboard .b_enter li,
#keyboard .b_mouse li {
    line-height: 38px !important;
}

#keyboard .on .fj,
#keyboard .error .fj {
    background-color: #fff;
}

#keyboard .line div ul li.enter_ico {
    background: url("/static/img/key_info_ico.gif") no-repeat 30px -82px;
    padding-left: 25px;
}

#keyboard .key.on ul {
    color: #fff;
    background-color: #09c;
}

#keyboard .line .b2 ul {
    border-color: #7C8DDB;
}

.info-list {
    position: absolute;
    left: 16;
    bottom: 16px;
    .item {
        margin-top: 8px;
    }
    .icon {
        position: relative;
        top: 7px;
    }
}
.select {
    position: absolute;
    right: 16px;
    bottom: 16px;
}
</style>
