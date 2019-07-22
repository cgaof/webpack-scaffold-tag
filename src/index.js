
import Js2WordCloud from './src/main';
window.onload = function () {
  var arrList = ['冠心病', '心绞痛', '心肌梗塞', '心律失常', '高血压', '高血脂', '高血黏度等', '脑血管疾病', '脑血栓', '脑栓塞', '脑淤血', '脑萎缩', '脑中风后遗症', '如', '偏瘫', '麻木', '失语', '因血管损伤','引起的失聪', '半身不遂', '四肢无力', '视线模糊', '高温环境','出现头痛','头晕','口渴','多汗','四肢无力发酸','注意力不集中','动作不协调等症状','轻症中暑症状','出头晕','口渴外往往有面色潮红','大量出汗','皮肤灼热','等表现','或出现','四肢湿冷','面色苍白','血压下降','脉搏增快', '阿米巴痢疾', '便秘', '便血', '肠道蛔虫', '肠梗阻', '大肠癌', '胆石症', '呃逆症', '副伤寒', '腹膜炎', '腹泻', '肝脓肿','肝硬化','急性阑尾炎','急性胃炎', '慢性腹泻', '十二指肠炎', '食道癌', '食管异物', '食物中毒', '胃肠功能紊乱','胃下垂','胃潴留','消化道出血','小肠损伤','血吸虫肠病', '乙型肝炎','脂肪肝'];
  var arr1 = [];
  for (var i = 0; i < arrList.length; i++) {
    arr1[i] = [arrList[i], Math.floor(Math.random() * 100 + 1 )];
  }
  var option = {
    tooltip: {
      show: true,
      formatter: function (item) {
        return item[0] + ': 价值¥' + item[1] + '<br>' + '词云图'
      },
    },
    imageShape: '../images/womanIcon.png', // 图片形状
    // backgroundColor: '#000', // canvas 背景
    list: arr1, // 数据
    color: 'random-dark', // 字体颜色
    ellipticity: 1,
    minRotation: -1.57080,
    maxRotation: -1.57080,
    rotateRatio: .4,
    fontSizeFactor: 150,   // 当词云值相差太大，可设置此值进字体行大小微调，默认0.1
    maxFontSize: 25,  // 最大fontSize，用来控制weightFactor，默认60
    minFontSize: 10,
    gridSize: 1,
    ratationSteps: 2,
    rotationRation: .5,
    shuffle: 30,
    fontWeight: 'bold',
    // color: '#15a4fa',
    // shape: 'circle',
    // cardioid: 'diamond'
    // cardioid: 'square'
  }
  var wc = new Js2WordCloud(document.getElementById('container'))
  wc.setOption(option)
  window.onresize = function () {
    wc.resize()
  }
}