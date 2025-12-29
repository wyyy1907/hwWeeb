import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';

export default function AboutUs() {
  const { theme, toggleTheme } = useTheme();

  // 模拟公司发展历程数据
  const companyHistory = [
    {
      year: "1987",
      event: "华为公司成立，专注于电信设备的研发和生产"
    },
    {
      year: "1995",
      event: "推出C&C08数字程控交换机，开始在国内市场取得突破"
    },
    {
      year: "2000",
      event: "开始国际化战略，进入中东、非洲等海外市场"
    },
    {
      year: "2005",
      event: "成为全球领先的电信设备供应商之一"
    },
    {
      year: "2010",
      event: "推出面向企业市场的网络设备产品线"
    },
    {
      year: "2015",
      event: "发布NFV和SDN解决方案，引领网络技术变革"
    },
    {
      year: "2020",
      event: "推出全系列Wi-Fi 6产品，引领无线网络技术演进"
    },
    {
      year: "2023",
      event: "持续创新，构建智能、安全、高效的全联接网络解决方案"
    }
  ];

  // 模拟企业文化数据
  const corporateCulture = [
    {
      title: "核心价值观",
      content: "以客户为中心，以奋斗者为本，长期艰苦奋斗，坚持自我批判",
      icon: "heart"
    },
    {
      title: "企业使命",
      content: "把数字世界带入每个人、每个家庭、每个组织，构建万物互联的智能世界",
      icon: "globe"
    },
    {
      title: "企业愿景",
      content: "成为行业领导者，为客户创造价值，为社会做出贡献",
      icon: "trophy"
    },
    {
      title: "创新理念",
      content: "保持开放进取的心态，不断挑战自我，追求卓越",
      icon: "lightbulb"
    }
  ];

  // 模拟全球市场分布数据
  const globalMarkets = [
    {
      region: "中国",
      percentage: 35
    },
    {
      region: "欧洲",
      percentage: 25
    },
    {
      region: "亚太",
      percentage: 20
    },
    {
      region: "中东非洲",
      percentage: 10
    },
    {
      region: "美洲",
      percentage: 10
    }
  ];

  // 模拟新闻动态数据
  const newsList = [
    {
      id: 1,
      title: "华为发布新一代CloudEngine 16800系列数据中心交换机",
      date: "2023-12-15",
      category: "产品发布",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Huawei%20new%20product%20launch%20event%2C%20CloudEngine%2016800%20switch%2C%20professional%20technology%20event&sign=aaef3e023140d4655ab3dcfd6cf8be54"
    },
    {
      id: 2,
      title: "华为网络设备助力全球最大数据中心建设",
      date: "2023-11-28",
      category: "成功案例",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Huawei%20data%20center%20success%20case%2C%20large%20data%20center%20with%20servers%2C%20professional%20IT%20infrastructure&sign=63b9e2c59823c70bd6cd75904263b880"
    },
    {
      id: 3,
      title: "华为网络设备荣获\"年度最佳网络解决方案提供商\"奖项",
      date: "2023-10-18",
      category: "荣誉奖项",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Huawei%20network%20equipment%20award%2C%20business%20award%20ceremony%2C%20professional%20event&sign=e5ed3ca1a215d068150adeac8c11b43d"
    }
  ];

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
              <a 
                key={index}
                className="text-gray-600 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                href={['/', '/product/1', '/solution/1', '/technical-support', '/about-us'][index]}
              >
                {item}
              </a>
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

      {/* 关于我们页面主体内容 */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* 英雄区域 */}
          <section className="mb-16">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Huawei%20headquarters%20building%2C%20modern%20technology%20company%20campus%2C%20professional%20business%20environment&sign=1324373808d618b2d3c416a39f01fbdf" 
                alt="华为总部" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent flex items-end">
                <div className="p-8 md:p-12">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold text-white mb-4"
                  >
                    关于华为网络设备
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-gray-200 max-w-2xl"
                  >
                    华为是全球领先的信息与通信技术解决方案供应商，致力于构建更美好的全联接世界。
                    华为网络设备为全球企业客户提供创新、可靠、安全的网络基础设施解决方案。
                  </motion.p>
                </div>
              </div>
            </div>
          </section>

          {/* 公司简介 */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  公司简介
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  华为创立于1987年，是全球领先的信息与通信技术（ICT）解决方案供应商，专注于ICT领域，坚持稳健经营、持续创新、开放合作，
                  在电信运营商、企业、终端和云计算等领域构筑了端到端的解决方案优势，为运营商客户、企业客户和消费者提供有竞争力的ICT解决方案、
                  产品和服务，并致力于实现未来信息社会、构建更美好的全联接世界。
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  华为网络设备是华为企业业务的核心组成部分，提供包括交换机、路由器、无线产品、安全产品、数据中心网络等全系列产品和解决方案，
                  服务于全球170多个国家和地区的企业客户，帮助客户实现数字化转型，提升业务效率和竞争力。
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">1987</h3>
                    <p className="text-gray-600 dark:text-gray-300">公司成立</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">170+</h3>
                    <p className="text-gray-600 dark:text-gray-300">服务国家和地区</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">19.7万</h3>
                    <p className="text-gray-600 dark:text-gray-300">员工数量</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">25%</h3>
                    <p className="text-gray-600 dark:text-gray-300">研发投入占比</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-xl overflow-hidden shadow-lg"
                >
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Huawei%20network%20equipment%20R%26D%20center%2C%20professional%20engineers%20working%20on%20network%20technology&sign=8e8ae1a7f4d947d7eedec9e9e04f0616" 
                    alt="华为研发中心" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="rounded-xl overflow-hidden shadow-lg mt-8"
                >
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Huawei%20network%20equipment%20production%20line%2C%20modern%20manufacturing%20facility%2C%20professional%20technology%20factory&sign=b5a85bde3bf72bab29f79a375615a1f7" 
                    alt="华为生产基地" 
                    className="w-full h-full object-cover"
                  />
                </motion.div></div>
            </motion.div>
          </section>

          {/* 发展历程 */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                发展历程
              </h2>
              
              <div className="relative">
                {/* 时间轴中心线 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
                
                {/* 时间轴事件 */}
                {companyHistory.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className={`relative mb-12 flex ${index % 2 === 0 ? 'justify-end md:pr-12 md:text-right' : 'justify-start md:pl-12'}`}
                  >
                    {/* 时间点 */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-red-600 border-4 border-white dark:border-gray-900"></div>
                    
                    {/* 事件内容 */}
                    <div className={`w-full md:w-1/2 p-4`}>
                      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                        <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">{item.year}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{item.event}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* 企业文化 */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                企业文化
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {corporateCulture.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center"
                  >
                    <div className="h-16 w-16 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center mx-auto mb-6">
                      <i className={`fas fa-${item.icon} text-red-600 dark:text-red-400 text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* 全球市场分布 */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                全球市场分布
              </h2>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="h-64 w-full bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <img 
                        src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=World%20map%20with%20Huawei%20global%20market%20distribution%2C%20professional%20business%20visualization&sign=19ff76163b4e3777f63a14afa587a815" 
                        alt="华为全球市场分布" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">区域市场占比</h3>
                    <div className="space-y-4">
                      {globalMarkets.map((market, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600 dark:text-gray-300">{market.region}</span>
                            <span className="text-gray-800 dark:text-white font-medium">{market.percentage}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div 
                              className="bg-red-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${market.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 text-center">
                      <p className="text-gray-600 dark:text-gray-300">
                        华为网络设备服务于全球170多个国家和地区的企业客户，
                        帮助客户实现数字化转型，构建智能、高效、安全的网络基础设施。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* 新闻动态 */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                  新闻动态
                </h2>
                <a href="#" className="text-red-600 dark:text-red-400 hover:underline flex items-center">
                  查看全部 <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {newsList.map((news) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * news.id }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                          {news.category}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{news.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{news.title}</h3>
                      <button className="text-red-600 dark:text-red-400 hover:underline flex items-center">
                        阅读全文 <i className="fas fa-arrow-right ml-1"></i>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* 加入我们 */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">加入华为网络设备团队</h3>
                  <p className="mb-6">
                    我们提供具有竞争力的薪酬待遇和广阔的发展空间，欢迎有才华、有激情的人才加入我们，
                    共同推动网络技术创新，构建更美好的全联接世界。
                  </p>
                  <button className="px-6 py-3 bg-white text-red-600 rounded-md font-medium hover:bg-gray-100 transition-colors">
                    查看职位空缺
                  </button>
                </div>
                <div className="hidden md:block flex justify-end">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Huawei%20team%20collaboration%2C%20professional%20IT%20engineers%20working%20together%20in%20office&sign=a5d23882893eb6b14e0163bff71ae098" 
                    alt="华为团队" 
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
                      <a href={group.title === "关于华为" && link === "关于我们" ? "/about-us" : 
                               group.title === "产品与解决方案" ? "/product/1" :
                               group.title === "服务与支持" && link === "技术支持" ? "/technical-support" :
                               group.title === "服务与支持" && link === "培训认证" ? "/training-certification" :
                               "#"} 
                        className="text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
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