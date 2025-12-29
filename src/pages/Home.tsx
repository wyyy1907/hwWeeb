import React, { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// 华为网络设备企业官网设计方案
export default function HuaweiNetworkDevices() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  
  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ${theme}`}>
      {/* 1. 品牌战略分析 - 关键品牌传递要素 */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <div className="h-10 w-10 rounded-md bg-red-600 flex items-center justify-center text-white font-bold text-xl mr-3">
              华
            </div>
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">华为网络设备</h1>
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {['首页', '产品', '解决方案', '服务', '关于我们'].map((item, index) => (
              <motion.a 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-gray-600 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                href={`#${['home', 'products', 'solutions', 'services', 'about'][index]}`}
                onClick={() => setActiveSection(['home', 'products', 'solutions', 'services', 'about'][index])}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200"
            >
              {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
            </button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              联系我们
            </motion.button>
          </div>
        </div>
      </header>

      {/* 2. 企业资料收集框架 - 英雄区域 */}
      <section id="home" className="py-20 bg-gradient-to-b from-red-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6">
                构建全联接世界的<br />
                <span className="text-red-600">智能网络基础设施</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                华为网络设备致力于为全球企业提供安全可靠、高性能的网络解决方案，
                助力企业数字化转型，共建智能未来。
              </p>
               <div className="flex flex-wrap gap-4">
                 <motion.a 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors inline-flex items-center justify-center"
                   href="/product/1"
                 >
                   探索产品
                 </motion.a>
                 <motion.a 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors inline-flex items-center justify-center"
                   href="/solution/1"
                 >
                   查看解决方案
                 </motion.a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Huawei%20network%20equipment%20data%20center%2C%20servers%20and%20network%20switches%20in%20a%20modern%20data%20center%2C%20clean%20and%20professional&sign=cc8c4e88bff6dd292a66b4d3179d529c" 
                  alt="华为网络设备数据中心" 
                  className="w-full h-auto"
                />
              </div>
              {/* 品牌核心价值标记 */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <i className="fas fa-bolt text-blue-600 dark:text-blue-400"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">技术领先</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">持续创新的核心技术</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <i className="fas fa-shield-alt text-green-600 dark:text-green-400"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">可靠安全</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">值得信赖的网络保障</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. 用户体验与视觉设计 - 品牌价值展示 */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
            >
              华为网络设备的核心优势
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              我们凭借卓越的技术实力和创新能力，为全球客户提供领先的网络基础设施解决方案
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* 品牌传递要素卡片 */}
            {[
              {
                title: "技术领先性",
                description: "拥有业界领先的研发团队和持续创新能力，不断突破技术瓶颈，引领行业发展方向。",
                icon: "microchip",
                color: "blue"
              },
              {
                title: "可靠性与安全性",
                description: "严格的质量控制体系和安全标准，确保产品在各种复杂环境下稳定运行，保障企业网络安全。",
                icon: "shield-alt",
                color: "green"
              },
              {
                title: "智能化与自动化",
                description: "融合AI技术，提供智能化网络管理和自动化运维能力，大幅提升网络效率和降低运维成本。",
                icon: "robot",
                color: "purple"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`h-14 w-14 rounded-full bg-${item.color}-100 dark:bg-${item.color}-900/50 flex items-center justify-center mb-6`}>
                  <i className={`fas fa-${item.icon} text-${item.color}-600 dark:text-${item.color}-400 text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 产品与解决方案呈现 */}
      <section id="products" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
            >
              核心产品与解决方案
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              华为网络设备提供全方位的产品系列和定制化解决方案，满足不同行业客户的多样化需求
            </motion.p>
          </div>

          {/* 产品分类标签 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {['全部产品', '交换机', '路由器', '无线产品', '安全产品', '数据中心'].map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full border ${index === 0 ? 'border-red-600 bg-red-600 text-white' : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'} transition-colors`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* 产品展示 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "CloudEngine 16800系列交换机",
                description: "面向数据中心和园区网络的高性能核心交换机，提供超大带宽和低延迟转发能力。",
                image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Huawei%20network%20switch%20CloudEngine%2016800%2C%20professional%20network%20equipment%2C%20modern%20design&sign=d5cecc716f449e36202b4a01d6e8f0f8"
              },
              {
                name: "NetEngine AR系列路由器",
                description: "企业级多业务路由器，支持SD-WAN，为分支机构提供安全可靠的广域网连接。",
                image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Huawei%20router%20NetEngine%20AR%2C%20enterprise%20networking%20equipment%2C%20professional%20product%20shot&sign=5fd6f77fba40c86af2e94aaa7429f3c5"
              },
              {
                name: "AirEngine Wi-Fi 6系列",
                description: "基于Wi-Fi 6技术的高性能无线接入点，提供高速、稳定的无线连接体验。",
                image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Huawei%20wireless%20access%20point%20AirEngine%20Wi-Fi%206%2C%20modern%20network%20device&sign=23f965a90ae29eefe7e883d624405972"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                   <div className="flex justify-between items-center">
                     <Link to={`/product/${index + 1}`} className="text-red-600 dark:text-red-400 font-semibold flex items-center">
                       了解详情
                       <i className="fas fa-arrow-right ml-2"></i>
                     </Link>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
             <Link to="/product/1" className="inline-block px-8 py-3 border border-red-600 text-red-600 dark:text-red-400 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
              查看全部产品</Link>
          </motion.div>
        </div>
      </section>

      {/* 5. 客户服务体系设计 */}
      <section id="services" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
            >
              全方位客户服务支持
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              华为网络设备致力于为客户提供全生命周期的服务支持，确保网络系统稳定运行
            </motion.p>
          </div>

          {/* 客户服务模块 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "技术支持",
                description: "7x24小时专业技术支持，快速响应和解决网络问题",
                icon: "headset",
                color: "blue"
              },
              {
                title: "培训认证",
                description: "提供全面的产品培训和专业认证服务，提升团队能力",
                icon: "graduation-cap",
                color: "green"
              },
              {
                title: "维保服务",
                description: "灵活的维保方案，确保设备长期稳定运行和价值最大化",
                icon: "tools",
                color: "orange"
              },
              {
                title: "智能客服",
                description: "AI驱动的智能客服系统，提供快速准确的自助服务体验",
                icon: "robot",
                color: "purple"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className={`h-14 w-14 rounded-full bg-${service.color}-100 dark:bg-${service.color}-900/50 flex items-center justify-center mb-6`}>
                  <i className={`fas fa-${service.icon} text-${service.color}-600 dark:text-${service.color}-400 text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                 <Link to={index === 0 ? "/technical-support" : 
                          index === 1 ? "/training-certification" : 
                          index === 2 ? "/product/1" : 
                          "/technical-support"} 
                    className="text-gray-800 dark:text-white font-medium flex items-center">
                  了解更多 <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* 服务请求快速入口 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">需要技术支持？</h3>
                <p className="mb-6">我们的技术专家团队随时为您提供帮助，解决您在使用过程中遇到的任何问题</p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-white text-red-600 rounded-md font-medium hover:bg-gray-100 transition-colors">
                    提交服务请求
                  </button>
                  <button className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors">
                    联系客服专家
                  </button>
                </div>
              </div>
              <div className="hidden md:block flex justify-end">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Huawei%20technical%20support%20team%20working%20on%20network%20solutions%2C%20professional%20engineers%20in%20office&sign=119efb654398a596946aa165091ba1f8" 
                  alt="华为技术支持团队" 
                  className="h-64 w-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. 设计成果交付 - 网站地图与底部导航 */}
      <footer className="bg-gray-900 text-gray-300 py-16">
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
                                group.title === "产品与解决方案" && link === "交换机" ? "/product/1" :
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