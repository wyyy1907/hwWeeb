import React, { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function TechnicalSupport() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('knowledge');
  const [searchQuery, setSearchQuery] = useState('');

  // 模拟知识库数据
  const knowledgeBase = [
    {
      id: 1,
      title: "CloudEngine交换机初始化配置指南",
      category: "交换机",
      views: 1254,
      date: "2023-11-15",
      content: "本文档详细介绍了华为CloudEngine系列交换机的初始化配置步骤，包括基本设置、网络参数配置、用户管理等内容。"
    },
    {
      id: 2,
      title: "NetEngine路由器故障排查手册",
      category: "路由器",
      views: 987,
      date: "2023-10-22",
      content: "本手册提供了华为NetEngine系列路由器常见故障的排查方法和解决方案，帮助用户快速定位和解决网络问题。"
    },
    {
      id: 3,
      title: "AirEngine Wi-Fi 6部署最佳实践",
      category: "无线产品",
      views: 1563,
      date: "2023-09-30",
      content: "本文档介绍了华为AirEngine Wi-Fi 6系列产品的部署最佳实践，包括网络规划、安装调试、优化配置等内容。"
    },
    {
      id: 4,
      title: "SD-WAN网络设计与实施指南",
      category: "解决方案",
      views: 1125,
      date: "2023-08-18",
      content: "本指南详细介绍了华为SD-WAN解决方案的设计原则、实施步骤和验证方法，帮助企业构建高效、可靠的广域网。"
    }
  ];

  // 模拟软件下载数据
  const softwareDownloads = [
    {
      id: 1,
      name: "CloudEngine交换机软件V200R022C00",
      version: "V200R022C00",
      size: "356 MB",
      date: "2023-11-10",
      downloads: 2854
    },
    {
      id: 2,
      name: "NetEngine路由器软件V300R021C10",
      version: "V300R021C10",
      size: "428 MB",
      date: "2023-10-25",
      downloads: 1987
    },
    {
      id: 3,
      name: "AirEngine Wi-Fi软件V200R020C00",
      version: "V200R020C00",
      size: "275 MB",
      date: "2023-09-15",
      downloads: 3256
    },
    {
      id: 4,
      name: "iMaster NCE-Campus控制器软件V300R022C00",
      version: "V300R022C00",
      size: "1.2 GB",
      date: "2023-08-28",
      downloads: 1873
    }
  ];

  // 模拟常见问题
  const faqs = [
    {
      question: "如何重置CloudEngine交换机到出厂设置？",
      answer: "要重置CloudEngine交换机到出厂设置，请通过Console口登录交换机，然后执行命令'reset saved-configuration'，确认后重启设备即可。注意：重置操作会清除所有配置，请提前备份重要数据。"
    },
    {
      question: "NetEngine路由器出现广域网连接不稳定怎么办？",
      answer: "NetEngine路由器广域网连接不稳定可能由多种原因引起，建议检查物理链路状态、配置是否正确、接口是否有错误计数，也可以尝试升级软件版本或联系华为技术支持获取帮助。"
    },
    {
      question: "AirEngine AP无法正常注册到AC怎么办？",
      answer: "AirEngine AP无法正常注册到AC的常见原因包括：AC和AP之间网络不通、AC上没有添加AP的配置、AP软件版本与AC不兼容等。建议检查网络连通性、确认AC配置、验证软件版本兼容性。"
    },
    {
      question: "如何获取华为网络设备的维保服务？",
      answer: "您可以通过华为官方网站、华为企业业务APP或联系当地华为销售代表获取华为网络设备的维保服务。华为提供多种维保方案，包括标准维保、增强维保和高级维保，满足不同客户的需求。"
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

      {/* 技术支持页面主体内容 */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* 页面标题 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              技术支持中心
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              华为网络设备为您提供全方位的技术支持服务，包括知识库、软件下载、文档中心、常见问题解答等，
              帮助您快速解决问题，保障网络系统稳定运行。
            </p>
          </motion.div>

          {/* 快速支持入口 */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow">
                <div className="h-16 w-16 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-headset text-red-600 dark:text-red-400 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">联系技术支持</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  7×24小时专业技术支持，快速响应和解决您的网络问题
                </p>
                <button className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                  立即联系
                </button>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow">
                <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-file-alt text-blue-600 dark:text-blue-400 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">文档中心</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  访问产品手册、技术文档、配置指南等全面的技术资料
                </p>
                <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  浏览文档
                </button>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow">
                <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-tools text-green-600 dark:text-green-400 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">服务请求</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  提交服务请求，获取设备维修、替换、升级等专业服务
                </p>
                <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  提交请求
                </button>
              </div>
            </motion.div>
          </section>

          {/* 搜索栏 */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8"
            >
              <div className="relative max-w-3xl mx-auto">
                <input
                  type="text"
                  placeholder="搜索知识库、文档、软件..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-400"
                />
                <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  搜索
                </button>
              </div>
            </motion.div>
          </section>

          {/* 内容标签页 */}
          <section className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
              {/* 标签页导航 */}
              <div className="border-b border-gray-200 dark:border-gray-700 flex overflow-x-auto no-scrollbar">
                {[
                  { id: 'knowledge', label: '知识库', icon: 'book' },
                  { id: 'software', label: '软件下载', icon: 'download' },
                  { id: 'faq', label: '常见问题', icon: 'question-circle' },
                  { id: 'training', label: '培训视频', icon: 'play-circle' },
                  { id: 'certification', label: '认证信息', icon: 'certificate' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-6 py-4 whitespace-nowrap transition-colors ${
                      activeTab === tab.id
                        ? 'text-red-600 dark:text-red-400 border-b-2 border-red-600 dark:border-red-400'
                        : 'text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400'
                    }`}
                  >
                    <i className={`fas fa-${tab.icon} mr-2`}></i>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* 标签页内容 */}
              <div className="p-8">
                {activeTab === 'knowledge' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">知识库文章</h2>
                    <div className="space-y-6">
                      {knowledgeBase.map((article) => (
                        <div
                          key={article.id}
                          className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white hover:text-red-600 dark:hover:text-red-400 cursor-pointer">
                              {article.title}
                            </h3>
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs rounded-full">
                              {article.category}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">{article.content}</p>
                          <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center">
                              <i className="fas fa-eye mr-1"></i>
                              <span>{article.views} 次浏览</span>
                            </div>
                            <span>{article.date}</span>
                            <button className="text-red-600 dark:text-red-400 hover:underline flex items-center">
                              阅读全文 <i className="fas fa-arrow-right ml-1"></i>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 flex justify-center">
                      <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        查看更多文章
                      </button>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'software' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">软件下载</h2>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th className="text-left py-4 px-4 font-semibold text-gray-600 dark:text-gray-300">软件名称</th>
                            <th className="text-left py-4 px-4 font-semibold text-gray-600 dark:text-gray-300">版本</th>
                            <th className="text-left py-4 px-4 font-semibold text-gray-600 dark:text-gray-300">大小</th>
                            <th className="text-left py-4 px-4 font-semibold text-gray-600 dark:text-gray-300">发布日期</th>
                            <th className="text-left py-4 px-4 font-semibold text-gray-600 dark:text-gray-300">下载次数</th>
                            <th className="text-left py-4 px-4 font-semibold text-gray-600 dark:text-gray-300">操作</th>
                          </tr>
                        </thead>
                        <tbody>
                          {softwareDownloads.map((software) => (
                            <tr key={software.id} className="border-b border-gray-200 dark:border-gray-700">
                              <td className="py-4 px-4 text-gray-800 dark:text-white">{software.name}</td>
                              <td className="py-4 px-4 text-gray-600 dark:text-gray-300">{software.version}</td>
                              <td className="py-4 px-4 text-gray-600 dark:text-gray-300">{software.size}</td>
                              <td className="py-4 px-4 text-gray-600 dark:text-gray-300">{software.date}</td>
                              <td className="py-4 px-4 text-gray-600 dark:text-gray-300">{software.downloads}</td>
                              <td className="py-4 px-4">
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center">
                                  <i className="fas fa-download mr-2"></i> 下载
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-8 flex justify-center">
                      <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        查看更多软件
                      </button>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'faq' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">常见问题解答</h2>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div 
                          key={index} 
                          className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                        >
                          <button className="w-full px-6 py-4 text-left font-semibold text-gray-800 dark:text-white bg-gray-50 dark:bg-gray-900 flex justify-between items-center">
                            <span>{faq.question}</span>
                            <i className="fas fa-chevron-down text-gray-500 dark:text-gray-400 transition-transform transform rotate-180"></i>
                          </button>
                          <div className="px-6 py-4 bg-white dark:bg-gray-800">
                            <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 flex justify-center">
                      <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        查看更多问题
                      </button>
                    </div>
                  </motion.div>
                )}

                {['training', 'certification'].map((tab) => (
                  activeTab === tab && (
                    <motion.div
                      key={tab}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-center py-16"
                    >
                      <div className="max-w-md mx-auto">
                        <div className="h-20 w-20 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mx-auto mb-6">
                          <i className={`fas fa-${tab === 'training' ? 'play-circle' : 'certificate'} text-gray-400 text-3xl`}></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                          {tab === 'training' ? '培训视频' : '认证信息'}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                          {tab === 'training' 
                            ? '华为网络设备提供丰富的培训视频资源，帮助您快速掌握产品使用和维护技能。' 
                            : '华为认证体系为您的职业发展提供有力支持，证明您在网络技术领域的专业能力。'
                          }
                        </p>
                        <Link 
                          to={tab === 'training' ? '/training-certification' : '/training-certification'}
                          className="inline-block px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                        >
                          {tab === 'training' ? '浏览培训视频' : '了解认证体系'}
                        </Link>
                      </div>
                    </motion.div>
                  )
                ))}
              </div>
            </div>
          </section>

          {/* 联系支持 */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">需要更多技术支持？</h3>
                  <p className="mb-6">
                    我们的技术专家团队随时为您提供帮助，解决您在使用过程中遇到的任何问题。
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-3 bg-white text-red-600 rounded-md font-medium hover:bg-gray-100 transition-colors">
                      在线咨询专家
                    </button>
                    <button className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors">
                      提交服务请求
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