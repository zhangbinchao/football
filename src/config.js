﻿const config = {
  // 数据源的编码方式。
  // 默认为GBK,按需可修改为UTF-8等。
  // 如果输入的数据是用Excel编写的csv文件，那么大概率应该使用GBK。
  encoding: "gbk",

  // 每个时间节点最多显示的条目数。
  max_number: 20,

  // 控制是否显示顶部附加信息文字。
  showMessage: true,

  // !!!请确保打开此项时，使用的是标准日期格式！!!(即：YYYY-MM-DD HH:MM)
  // 时间自动排序。
  // 如果关闭，排序顺序为csv表格的时间字段自上而下的出现顺序。
  // 如果你的日期格式为标准的日期格式，则可以无视数据排序，达到自动按照日期顺序排序的效果。
  // 开启auto_sort可以实现时间的自动补间。
  auto_sort: false,
  timeFormat: "%Y-%m-%d",

  // 倒序，使得最短的条位于最上方
  reverse: false,

  // 类型根据什么字段区分？如果是name，则关闭类型显示
  divide_by: "type",

  // 颜色根据什么字段区分？
  divide_color_by: "type",

  // 字段的值与其对应的颜色值
  color: {
    '魔法师': "#17C",
  },

  // 颜色绑定增长率
  changeable_color: false,

  // 附加信息内容。
  itemLabel: "领头羊",
  typeLabel: "领跑轮数",
  // 榜首项目信息的水平位置 。
  item_x: 250,

  // 时间点间隔时间。
  interval_time: 0.5,

  // 上方文字水平高度。
  text_y: -50,

  // 右侧文字横坐标
  text_x: 1200,
  // 偏移量
  offset: 250,

  // 长度小于display_barInfo的bar将不显示barInfo。
  display_barInfo: 0,

  // 使用计数器
  // 注意！使用计时器和使用类型目前不能兼容，即不能同时开启！
  // 计数器会出现在右上角，记录着当前榜首的持续时间。
  use_counter: true,
  // 每个时间节点对于计数器的步长。
  // 比如时间节点日期的间隔可能为1周（七天），那么step的值就应该为7。
  step: 1,

  // 格式化数值
  // 这里控制着数值的显示位数。主要靠修改中间的数字完成，如果为1则为保留一位小数。
  format: ".0f",

  // 图表左右上下间距。
  // 注意，left_margin不包括左侧的label，修改数值较小会导致左侧label不显示
  left_margin: 250,
  right_margin: 150,
  top_margin: 180,
  bottom_margin: 0,

  // 是否开启时间标签。
  dateLabel_switch: true,
  // 时间标签坐标。建议x：1000 y：-50开始尝试，默认位置为x:null,y:null
  dateLabel_x: null,
  dateLabel_y: null,

  // 允许大于平均值的条消失时上浮。
  allow_up: false,

  // 设置动画效果，如果为true，则新进入的条目从0开始。
  enter_from_0: false,

  // 如果所有数字都很大，导致拉不开差距则开启此项使得坐标原点变换为（最小值）*2-（最大值）
  big_value: true,

  // 如果要使用半对数坐标，则开启此项
  use_semilogarithmic_coordinate: false,

  // barinfo太长？也许可以试试这个
  long: false,

  // 延迟多少个时间节点开始
  wait: 2,

  // 单独控制交换动画速度倍率
  update_rate: 1,

  // 开启匀速动画效果
  // animation:'linear',
  showLabel: true,

  // label x轴位置
  labelx: -55,

  use_img: true,

  // 图片路径，本地图片或者网上图片。
  imgs: {
    '塞维利亚': ' https://tp.13322.com/pic/team/images2/2013121170049.jpg',
    '巴塞罗那': 'https://tp.13322.com/pic/team/images2/2013121165828.jpg',
    '莱万特': 'https://tp.13322.com/pic/team/images2/2013121172935.jpg',
    '皇家马德里': ' https://tp.13322.com/pic/team/images2/2013121203540.jpg',
    '韦斯卡': 'https://tp.13322.com/pic/team/images2/2013121184603.jpg',
    '毕尔巴鄂竞技': 'http://tp.13322.com/pic/team/images2/2013121171136.jpg',
    '皇家社会': ' https://tp.13322.com/pic/team/images2/201325150748.jpg',
    '塞尔塔': 'https://tp.13322.com/pic/team/images2/2013121173813.jpg',
    '巴伦西亚': 'https://tp.13322.com/pic/team/images2/20132793701.jpg',
    '西班牙人': ' https://tp.13322.com/pic/team/images2/20140818190012.png',
    '马德里竞技': 'https://tp.13322.com/pic/team/images2/2013121173159.jpg',
    '瓦拉多利德': 'https://tp.13322.com/pic/team/images2/2013121211657.jpg',
    '赫罗纳': ' https://tp.13322.com/pic/team/images2/2013121182143.jpg',
    '比利亚雷亚尔': ' https://tp.13322.com/pic/team/images2/2013121225846.jpg',
    '埃瓦尔': 'https://tp.13322.com/pic/team/images2/2013121203913.jpg',
    '莱加内斯': 'https://tp.13322.com/pic/team/images2/2013121193524.jpg',
    '赫塔菲': 'https://tp.13322.com/pic/team/images2/20140818185717.png',
    '巴列卡诺': ' https://tp.13322.com/pic/team/images2/2013121174250.jpg',
    '皇家贝蒂斯': ' https://tp.13322.com/pic/team/images2/2013121212319.jpg',
    '阿拉维斯': 'https://tp.13322.com/pic/team/images2/2013121204602.jpg',
  },

  // 全局背景颜色
  background_color: "#FFF",

  // 矩形柱是否为圆角矩形
  rounded_rectangle: true,

  // 是否显示x轴轴线
  show_x_tick: true
};