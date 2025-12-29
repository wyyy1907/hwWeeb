import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// 解决方案数据
const solutionData = [
  {
    id: 1,
    name: "智能园区网络解决方案",
    description: "华为智能园区网络解决方案基于AI驱动的意图网络架构，为企业提供超宽、极简、安全、智能的园区网络，支持无线优先、全光联接、统一管理，助力企业数字化转型。",
    benefits: [
      "提升员工体验：Wi-Fi 6高速接入，无缝漫游，保障关键业务应用",
      "简化运维管理：AI智能运维，自动故障检测与修复，降低70%运维成本",
      "增强安全防护：从边缘到云端的全栈安全防护，保障数据和业务安全",
      "加速业务创新：开放API，支持第三方应用集成，快速响应业务需求"
    ],
    components: [
      "AirEngine Wi-Fi 6接入点：提供高速、稳定的无线连接",
      "CloudEngine系列交换机：支持全光网络和软件定义网络",
      "iMaster NCE-Campus：AI驱动的园区网络控制器",
      "eSight：统一网络管理平台",
      "HiSec Engine：智能安全引擎"
    ],
    applicationScenarios: [
      "大型企业总部和分支机构网络",
      "金融机构和政府办公园区",
      "教育园区和医疗机构",
      "商业综合体和产业园区"
    ],
    customerCase: {
      company: "某世界500强制造企业",challenge: "传统园区网络架构复杂，运维成本高，难以满足移动办公和智能制造需求",
      solution: "部署华为智能园区网络解决方案，实现无线优先、全光网络、AI运维",
      result: "网络部署时间缩短60%，运维成本降低70%，员工满意度提升85%"
    },
    performanceData: [
      { name: '传统方案', value: 100 },
      { name: '华为方案', value: 185 }
    ],
    timelineData: [
      { month: '1月', efficiency: 40, cost: 100 },
      { month: '2月', efficiency: 60, cost: 90 },
      { month: '3月', efficiency: 80, cost: 80 },
      { month: '4月', efficiency: 90, cost: 70 },
      { month: '5月', efficiency: 95, cost: 65 },
      { month: '6月', efficiency: 100, cost: 60 },
    ],
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Huawei%20intelligent%20campus%20network%20solution%2C%20modern%20office%20building%20with%20network%20infrastructure%2C%20professional%20IT%20environment&sign=9ff6ceb77bc19c85748a3a1c976ab6d2"
  },
  {
    id: 2,
    name: "企业分支SD-WAN解决方案",
    description: "华为企业分支SD-WAN解决方案通过集中管理和智能选路，帮助企业分支机构实现广域网的智能互联与优化，提升业务体验，降低网络成本，简化运维管理。",
    benefits: [
      "优化业务体验：应用级智能选路，保障关键业务的带宽和质量",
      "降低网络成本：灵活使用Internet、4G/5G等多种链路，降低专线依赖",
      "简化运维管理：集中化管理平台，实现零配置部署和可视化运维",
      "增强安全防护：集成加密、防火墙等安全功能，保障分支数据安全"
    ],
    components: [
      "NetEngine AR系列路由器：支持SD-WAN功能的多业务网关",
      "iMaster NCE-SD-WAN：集中管理控制系统",
      "WAN Optimization：广域网优化组件",
      "Security Module：集成安全模块"
    ],
    applicationScenarios: [
      "连锁企业分支机构互联",
      "金融网点网络",
      "零售门店网络",
      "制造业分厂和仓库网络"
    ],
    customerCase: {
      company: "某大型连锁零售企业",
      challenge: "全国500+门店网络管理复杂，专线成本高，无法保障移动支付和视频监控业务质量",
      solution: "部署华为SD-WAN解决方案，使用Internet+4G混合链路，实现智能选路",
      result: "网络成本降低40%，业务开通时间从7天缩短到4小时，关键业务体验提升90%"
    },
    performanceData: [
      { name: '传统方案', value: 100 },
      { name: '华为方案', value: 160 }
    ],
    timelineData: [
      { month: '1月', efficiency: 35, cost: 100 },
      { month: '2月', efficiency: 55, cost: 85 },
      { month: '3月', efficiency: 75, cost: 75 },
      { month: '4月', efficiency: 85, cost: 65 },
      { month: '5月', efficiency: 90, cost: 60 },
      { month: '6月', efficiency: 95, cost: 55 },
    ],
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Huawei%20SD-WAN%20solution%20for%20enterprise%20branches%2C%20network%20diagram%20with%20multiple%20branch%20offices%2C%20professional%20IT%20infrastructure&sign=6ecddb9b412980fdc82ad7486208c61d"
  },
  {
    id: 3,
    name: "数据中心网络解决方案",
    description: "华为数据中心网络解决方案基于新一代Clos架构，提供超高带宽、超低延迟、超高可靠性的网络基础设施，支持云计算、大数据、AI等新兴业务的快速部署和弹性扩展。",
    benefits: [
      "超高带宽：400GE接口，单框交换容量高达57.6Tbps",
      "超低延迟：端到端延迟低至微秒级，满足AI和高性能计算需求",
      "超高可靠：多重冗余设计，故障恢复时间小于50ms",
      "弹性扩展：模块化设计，支持横向和纵向扩展，应对业务增长"
    ],
    components: [
      "CloudEngine 16800/12800系列核心交换机",
      "CloudEngine 8800/6800系列汇聚交换机",
      "CloudEngine 5800系列接入交换机",
      "iMaster NCE-Fabric：数据中心网络控制器",
      "CE1800V：虚拟交换机"
    ],
    applicationScenarios: [
      "大型互联网数据中心",
      "企业私有云和混合云",
      "金融数据中心",
      "AI计算中心和高性能计算集群"
    ],
    customerCase: {
      company: "某领先云服务提供商",
      challenge: "传统数据中心网络架构无法满足云计算业务的弹性扩展需求，性能瓶颈明显",
      solution: "部署华为CloudEngine系列交换机，构建Spine-Leaf架构的数据中心网络",
      result: "网络容量提升5倍，业务部署时间从数天缩短到数小时，TCO降低30%"
    },
    performanceData: [
      { name: '传统方案', value: 100 },
      { name: '华为方案', value: 200 }
    ],
    timelineData: [
      { month: '1月', efficiency: 45, cost: 100 },
      { month: '2月', efficiency: 65, cost: 90 },
      { month: '3月', efficiency: 85, cost: 80 },
      { month: '4月', efficiency: 100, cost: 75 },
      { month: '5月', efficiency: 115, cost: 70 },
      { month: '6月', efficiency: 130, cost: 65 },
    ],
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Huawei%20data%20center%20network%20solution%2C%20modern%20data%20center%20with%20servers%20and%20network%20equipment%2C%20professional%20IT%20infrastructure&sign=d690dc6f5dd8180c8353d9a458d5670b"
  }
];

// 饼图颜色
const COLORS = ['#8884d8', '#e74c3c'];

export default function SolutionDetail() {
  const { id } = useParams();
  const { theme, toggleTheme } = useTheme();
  const solution = solutionData.find(s => s.id === parseInt(id || '1')) || solutionData[0];
  
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

      {/* 解决方案详情主体内容 */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* 面包屑导航 */}
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
            <Link to="/" className="hover:text-red-600 dark:hover:text-red-400">首页</Link>
            <i className="fas fa-chevron-right mx-2 text-xs"></i>
            <Link to="/solution/1" className="hover:text-red-600 dark:hover:text-red-400">解决方案</Link>
            <i className="fas fa-chevron-right mx-2 text-xs"></i>
            <span className="text-gray-800 dark:text-white">{solution.name}</span>
          </div>

          {/* 解决方案概览 */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <img 
                  src={solution.image} 
                  alt={solution.name} 
                  className="w-full h-auto"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                  {solution.name}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  {solution.description}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <button className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                    申请方案演示
                  </button>
                  <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    下载方案白皮书
                  </button>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <i className="fas fa-users text-red-600 dark:text-red-400 mr-3"></i>
                  <span>已有 {Math.floor(Math.random() * 10000) + 5000} 家企业选择此方案</span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* 解决方案优势 */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8">
                方案优势
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {solution.benefits.map((benefit, index) => (
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
                      <p className="text-gray-600 dark:text-gray-300">{benefit}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* 解决方案组件 */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8">
                方案组件
              </h2>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                <div className="grid gap-4">
                  {solution.components.map((component, index) => (
                    <div key={index} className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mr-4 flex-shrink-0">
                        <i className="fas fa-microchip text-blue-600 dark:text-blue-400"></i>
                      </div>
                      <span className="text-gray-600 dark:text-gray-300">{component}</span>
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
                {solution.applicationScenarios.map((scenario, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
                  >
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-4 flex-shrink-0">
                        <i className="fas fa-building text-green-600 dark:text-green-400"></i>
                      </div>
                      <span className="text-gray-800 dark:text-white font-medium">{scenario}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* 客户案例 */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8">
                客户成功案例
              </h2>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 h-64 md:h-auto">
                    <img 
                      src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Huawei%20customer%20success%20story%2C%20happy%20business%20people%20in%20office%2C%20professional%20environment&sign=19d98e5de10051e867168cd6cacd02b7" 
                      alt={solution.customerCase.company} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-2/3">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                      {solution.customerCase.company}
                    </h3>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">挑战</h4>
                      <p className="text-gray-600 dark:text-gray-300">{solution.customerCase.challenge}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">解决方案</h4>
                      <p className="text-gray-600 dark:text-gray-300">{solution.customerCase.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">成果</h4>
                      <p className="text-gray-600 dark:text-gray-300">{solution.customerCase.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* 方案效果数据 */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8">
                方案效果数据
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* 性能对比 */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-6">性能对比</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={solution.performanceData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          fill="#8884d8"
                          paddingAngle={5}
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {solution.performanceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                {/* 效率与成本趋势 */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-6">效率与成本趋势</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={solution.timelineData}>
                        <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#444' : '#eee'} />
                        <XAxis dataKey="month" stroke={theme === 'dark' ? '#ccc' : '#666'} />
                        <YAxis stroke={theme === 'dark' ? '#ccc' : '#666'} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: theme === 'dark' ? '#333' : '#fff',
                            color: theme === 'dark' ? '#fff' : '#333',
                            border: `1px solid ${theme === 'dark' ? '#555' : '#ddd'}`
                          }} 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="efficiency" 
                          stroke="#e74c3c" 
                          strokeWidth={2} 
                          name="效率提升(%)"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="cost" 
                          stroke="#8884d8" 
                          strokeWidth={2} 
                          name="成本降低(%)"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
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
                  <h3 className="text-2xl font-bold mb-4">需要定制解决方案？</h3>
                  <p className="mb-6">
                    我们的解决方案专家团队可以根据您的具体需求，为您定制最适合的网络解决方案。
                  </p>
                  <button className="px-6 py-3 bg-white text-red-600 rounded-md font-medium hover:bg-gray-100 transition-colors">
                    联系解决方案专家
                  </button>
                </div>
                <div className="hidden md:block flex justify-end">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Huawei%20solution%20experts%20team%2C%20professional%20IT%20engineers%20working%20on%20network%20diagram&sign=10f7f1bfb1112e9186753c135825df7b" 
                    alt="华为解决方案专家团队" 
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