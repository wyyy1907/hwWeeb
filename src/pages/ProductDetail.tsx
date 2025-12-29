import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';

// 产品数据
const productData = [
  {
    id: 1,
    name: "CloudEngine 16800系列交换机",
    description: "华为CloudEngine 16800系列交换机是面向数据中心和园区网络的高性能核心交换机，采用创新的CLOS多级多平面交换架构，提供超大带宽和低延迟转发能力。",
    features: [
      "超大容量：单槽位支持48 x 400GE端口，整机支持高达576 x 400GE端口",
      "超低延迟：端口到端口转发延迟低至500ns",
      "超高密度：单框最大支持17.28Tbps交换容量",
      "智能运维：支持iFIT秒级故障定位和Telemetry实时流量监控",
      "开放生态：支持OpenFlow、NETCONF/YANG等开放协议"
    ],
    specifications: {
      "交换容量": "57.6Tbps/框",
      "包转发率": "23,040Mpps/框",
      "端口密度": "最大576 x 400GE或1,728 x 100GE",
      "冗余设计": "主控、电源、风扇全冗余",
      "功耗": "≤12kW/框",
      "工作温度": "0℃~45℃"
    },
    applicationScenarios: [
      "大型数据中心核心交换",
      "超大规模园区网络核心",
      "金融、政府等高可靠网络场景",
      "云服务提供商骨干网络"
    ],
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Huawei%20network%20switch%20CloudEngine%2016800%2C%20professional%20network%20equipment%2C%20modern%20design&sign=099db328d2daf6c168f3df7bcbae1151"
  },
  {
    id: 2,
    name: "NetEngine AR系列路由器",
    description: "华为NetEngine AR系列路由器是企业级多业务路由器，支持SD-WAN，为分支机构提供安全可靠的广域网连接，集成路由、交换、安全、语音等多种功能于一体。",
    features: [
      "多业务融合：集成路由、交换、安全、语音、视频等多种功能",
      "SD-WAN就绪：支持应用级智能选路和广域网优化",
      "安全增强：内置防火墙、VPN、入侵防御等安全功能",
      "高可靠性：支持VRRP、BFD等协议，确保业务不中断",
      "简易运维：支持零配置部署和可视化管理"
    ],
    specifications: {
      "转发性能": "100Mbps~10Gbps",
      "接口类型": "GE/10GE、Serial、E1、ADSL、GPON等",
      "扩展槽位": "1~4个",
      "电源": "AC/DC可选，支持冗余",
      "功耗": "30W~300W",
      "工作温度": "-5℃~55℃"
    },
    applicationScenarios: [
      "企业分支机构互联",
      "中小企业总部网络",
      "远程办公和移动接入",
      "金融网点和零售门店网络"
    ],
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Huawei%20router%20NetEngine%20AR%2C%20enterprise%20networking%20equipment%2C%20professional%20product%20shot&sign=83f134be749531e6e97fd3900a91f0be"
  },
  {
    id: 3,
    name: "AirEngine Wi-Fi 6系列",
    description: "华为AirEngine Wi-Fi 6系列是基于Wi-Fi 6技术的高性能无线接入点，支持1024-QAM、OFDMA、MU-MIMO等新技术，提供高速、稳定的无线连接体验。",
    features: [
      "超高速率：单AP最大速率可达10.75Gbps",
      "大容量接入：单AP支持1024个并发用户",
      "低延迟：空口延迟低至10ms，满足VR/AR等业务需求",
      "智能漫游：支持毫秒级快速漫游，确保业务不中断",
      "AI增强：内置AI芯片，支持智能射频调优和故障自愈"
    ],
    specifications: {
      "无线标准": "802.11ax (Wi-Fi 6)，向下兼容802.11a/b/g/n/ac",
      "频段": "2.4GHz和5GHz双频，支持双5GHz",
      "天线": "内置智能天线阵列，支持Beamforming",
      "接口": "1~4个千兆以太网口，可选万兆接口",
      "PoE供电": "支持802.3af/at/bt",
      "工作温度": "-10℃~50℃"
    },
    applicationScenarios: [
      "大型企业办公区",
      "高密度场馆（会议中心、展览馆等）",
      "教育机构（学校、图书馆等）",
      "医疗场所（医院、诊所等）"
    ],
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Huawei%20wireless%20access%20point%20AirEngine%20Wi-Fi%206%2C%20modern%20network%20device&sign=1b987134fd6e55c17366a072c970263d"
  }
];

export default function ProductDetail() {
  const { id } = useParams();
  const { theme, toggleTheme } = useTheme();
  const product = productData.find(p => p.id === parseInt(id || '1')) || productData[0];
  
  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ${theme}`}>
      {/* 头部导航 */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-md bg-red-600 flex items-center justify-center text-white font-bold text-xl mr-3">
              华
            </div>
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">华为网络设备</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['首页', '产品', '解决方案', '服务', '关于我们'].map((item, index) => (
              <Link 
                key={index}
                className="text-gray-600 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                to={['/', '/product/1', '/solution/1', '/technical-support', '/about-us'][index]}
              >
                {item}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200"
            >
              {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
            </button>
            <button className="hidden md:block px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
              联系我们
            </button>
          </div>
        </div>
      </header>

      {/* 产品详情主体内容 */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* 面包屑导航 */}
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
            <Link to="/" className="hover:text-red-600 dark:hover:text-red-400">首页</Link>
            <i className="fas fa-chevron-right mx-2 text-xs"></i>
            <Link to="/product/1" className="hover:text-red-600 dark:hover:text-red-400">产品</Link>
            <i className="fas fa-chevron-right mx-2 text-xs"></i>
            <span className="text-gray-800 dark:text-white">{product.name}</span>
          </div>

          {/* 产品概览 */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <button className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                    联系销售
                  </button>
                  <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    下载 datasheet
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <i className="fas fa-truck text-red-600 dark:text-red-400 mr-3"></i>
                    <span className="text-gray-600 dark:text-gray-300">全球配送</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-headset text-red-600 dark:text-red-400 mr-3"></i>
                    <span className="text-gray-60:text-gray-600 dark:text-gray-300">7×24技术支持</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-shield-alt text-red-600 dark:text-red-400 mr-3"></i>
                    <span className="text-gray-600 dark:text-gray-300">3年质保</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-calendar-check text-red-600 dark:text-red-400 mr-3"></i>
                    <span className="text-gray-600 dark:text-gray-300">快速交付</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* 产品特性 */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8">
                产品特性
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
                  >
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                        <i className="fas fa-check text-red-600 dark:text-red-400"></i>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{feature}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* 技术规格 */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8">
                技术规格
              </h2>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <div key={index} className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4">
                      <span className="text-gray-600 dark:text-gray-300">{key}</span>
                      <span className="text-gray-800 dark:text-white font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* 应用场景 */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8">
                应用场景
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {product.applicationScenarios.map((scenario, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm flex items-center"
                  >
                    <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mr-4">
                      <i className="fas fa-building text-blue-600 dark:text-blue-400"></i>
                    </div>
                    <span className="text-gray-800 dark:text-white">{scenario}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* 相关解决方案 */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                  相关解决方案
                </h2>
                <Link to="/solution/1" className="text-red-600 dark:text-red-400 hover:underline">
                  查看全部 <i className="fas fa-arrow-right ml-1"></i>
                </Link>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * item }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="h-48 overflow-hidden">
                       <img 
                         src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Huawei%20network%20solution%20scenario%2C%20professional%20IT%20infrastructure%2C%20modern%20technology&sign=cb29537c17e112f348b5a5993bef4416" 
                         alt={`解决方案 ${item}`} 
                         className="w-full h-full object-cover"
                       />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {product.name} 应用方案 {item}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        基于{product.name}的完整解决方案，满足{product.applicationScenarios[item - 1]}的需求。
                      </p>
                      <div className="flex justify-between items-center">
                        <Link to={`/solution/${item}`} className="text-red-600 dark:text-red-400 font-semibold flex items-center">
                          了解详情 <i className="fas fa-arrow-right ml-1"></i>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* 联系咨询 */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">需要了解更多产品信息？</h3>
                  <p className="mb-6">
                    我们的产品专家团队随时为您提供详细的产品信息和技术咨询，帮助您选择最适合的解决方案。
                  </p>
                  <button className="px-6 py-3 bg-white text-red-600 rounded-md font-medium hover:bg-gray-100 transition-colors">
                    联系我们的专家
                  </button>
                </div>
                <div className="hidden md:block flex justify-end">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Huawei%20product%20specialist%20team%2C%20professional%20IT%20engineers%20in%20office&sign=7d463912f5067c424ca7c4001b167ca6" 
                    alt="华为产品专家团队" 
                    className="h-64 w-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </main>

      {/* 底部导航 */}
      <footer className="bg-gray-900 text-gray-300 py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* 公司信息 */}
            <div>
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-md bg-red-600 flex items-center justify-center text-white font-bold text-xl mr-3">
                  华
                </div>
                <h2 className="text-xl font-bold text-white">华为网络设备</h2>
              </div>
              <p className="mb-6">
                华为是全球领先的信息与通信技术解决方案供应商，致力于构建更美好的全联接世界。
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'linkedin', 'youtube'].map((social, index) => (
                  <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors">
                    <i className={`fab fa-${social}`}></i>
                  </a>
                ))}
              </div>
            </div>
            
            {/* 快速链接 */}
            {[
              {
                title: "产品与解决方案",
                links: ["交换机", "路由器", "无线产品", "安全产品", "数据中心", "云服务"]
              },
              {
                title: "服务与支持",
                links: ["技术支持", "培训认证", "维保服务", "文档中心", "软件下载", "服务请求"]
              },
              {
                title: "关于华为",
                links: ["公司简介", "企业文化", "新闻中心", "加入我们", "联系我们", "全球站点"]
              }
            ].map((group, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-white mb-6">{group.title}</h3>
                <ul className="space-y-3">
                  {group.links.map((link, i) => (
                    <li key={i}>
                      <Link to={group.title === "关于华为" && link === "关于我们" ? "/about-us" : 
                               group.title === "产品与解决方案" ? "/product/1" :
                               group.title === "服务与支持" && link === "技术支持" ? "/technical-support" :
                               group.title === "服务与支持" && link === "培训认证" ? "/training-certification" :
                               "#"} 
                        className="text-gray-400 hover:text-white transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} 华为技术有限公司. 保留一切权利.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">隐私政策</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">使用条款</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie 政策</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">法律声明</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}