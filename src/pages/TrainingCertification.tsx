import React, { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function TrainingCertification() {
  const { theme, toggleTheme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('technical');
  const [activeLevel, setActiveLevel] = useState('all');

  // 模拟培训课程数据
  const trainingCourses = [
    {
      id: 1,
      title: "华为CloudEngine交换机技术与实践",
      category: "technical",
      level: "intermediate",
      duration: "3天",
      price: "¥2,980",
      students: 1254,
      rating: 4.8,
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Huawei%20network%20training%20course%20switch%20technology%2C%20professional%20IT%20training%20classroom&sign=1a2dba4977ff12e780edd648f8b0e03a"
    },
    {
      id: 2,
      title: "华为SD-WAN解决方案部署与维护",
      category: "solution",
      level: "advanced",
      duration: "4天",
      price: "¥3,680",
      students: 987,
      rating: 4.9,
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Huawei%20SD-WAN%20training%20course%2C%20network%20solution%20deployment%2C%20professional%20IT%20training&sign=c2dee9c4b1c68eace45d94c7ef24d0b1"
    },
    {
      id: 3,
      title: "华为Wi-Fi 6网络规划与优化",
      category: "technical",
      level: "intermediate",
      duration: "3天",
      price: "¥2,780",
      students: 1563,
      rating: 4.7,
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Huawei%20Wi-Fi%206%20training%20course%2C%20wireless%20network%20planning%2C%20professional%20IT%20training&sign=1fb1648c97652fcf7beaf3d64f9f5313"
    },
    {
      id: 4,
      title: "华为数据中心网络架构设计",
      category: "architecture",
      level: "advanced",
      duration: "5天",
      price: "¥4,280",
      students: 756,
      rating: 4.9,
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Huawei%20data%20center%20network%20training%20course%2C%20network%20architecture%20design%2C%20professional%20IT%20training&sign=9e3aa6c0d215cceb13f96a6f1d1fadc2"
    }
  ];

  // 模拟认证信息数据
  const certifications = [
    {
      id: 1,
      title: "HCIA - Datacom",
      level: "associate",
      description: "华为认证ICT工程师 - 数据通信，验证工程师掌握数据通信基础知识和华为设备配置技能。",
      requirements: "无前置要求",
      examCode: "H12-811",
      examPrice: "¥1,200",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Huawei%20HCIA%20certification%20logo%2C%20professional%20IT%20certification%20badge&sign=cf8a21ab9901d166d9742256eed31088"
    },
    {
      id: 2,
      title: "HCIP - Datacom Core Technology",
      level: "professional",
      description: "华为认证ICT高级工程师 - 数据通信核心技术，验证工程师掌握复杂网络设计和部署能力。",
      requirements: "HCIA-Datacom或同等知识水平",
      examCode: "H12-821",
      examPrice: "¥1,600",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Huawei%20HCIP%20certification%20logo%2C%20professional%20IT%20certification%20badge&sign=bca8d3b0e97872f2cfd9da1b4efb2151"
    },
    {
      id: 3,
      title: "HCIE - Datacom",
      level: "expert",
      description: "华为认证ICT专家 - 数据通信，验证专家级别的网络规划、设计、部署和优化能力。",
      requirements: "HCIP-Datacom或同等知识水平",
      examCode: "H12-831 + H12-832",
      examPrice: "¥4,800",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Huawei%20HCIE%20certification%20logo%2C%20expert%20IT%20certification%20badge&sign=fb3b9952cf45ef02374203c3f2520087"
    },
    {
      id: 4,
      title: "HCIA - SD-WAN",
      level: "associate",
      description: "华为认证ICT工程师 - SD-WAN，验证工程师掌握SD-WAN基础理论和华为SD-WAN产品配置。",
      requirements: "无前置要求，建议先获取HCIA-Datacom认证",
      examCode: "H12-611",
      examPrice: "¥1,200",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Huawei%20HCIA%20SD-WAN%20certification%20logo%2C%20professional%20IT%20certification%20badge&sign=64e85ac7b162e07c631801a6108f0e91"
    }
  ];

  // 模拟培训中心数据
  const trainingCenters = [
    {
      id: 1,
      name: "华为北京培训中心",
      address: "北京市海淀区中关村软件园",
      contact: "010-88888888",
      courses: 25,
      trainers: 15
    },
    {
      id: 2,
      name: "华为上海培训中心",
      address: "上海市浦东新区张江高科技园区",
      contact: "021-88888888",
      courses: 22,
      trainers: 12
    },
    {
      id: 3,
      name: "华为广州培训中心",
      address: "广州市天河区高新技术产业开发区",
      contact: "020-88888888",
      courses: 18,
      trainers: 10
    },
    {
      id: 4,
      name: "华为成都培训中心",
      address: "成都市高新区天府软件园",
      contact: "028-88888888",
      courses: 20,
      trainers: 11
    }
  ];

  // 根据筛选条件过滤课程
  const filteredCourses = trainingCourses.filter(course => {
    const categoryMatch = activeCategory === 'all' || course.category === activeCategory;
    const levelMatch = activeLevel === 'all' || course.level === activeLevel;
    return categoryMatch && levelMatch;
  });

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

      {/* 培训认证页面主体内容 */}
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
              培训与认证
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              华为网络设备提供全面的培训和认证体系，帮助您提升技术能力，获得行业认可，
              为您的职业发展提供有力支持。
            </p>
          </motion.div>

          {/* 培训认证导航 */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {[
                { id: 'training', label: '培训课程', icon: 'book-open' },
                { id: 'certification', label: '认证体系', icon: 'certificate' },
                { id: 'e-learning', label: '在线学习', icon: 'laptop' },
                { id: 'trainers', label: '讲师团队', icon: 'users' },
                { id: 'centers', label: '培训中心', icon: 'map-marker-alt' }
              ].map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full flex items-center ${
                    item.id === 'training' || item.id === 'certification'
                      ? 'bg-red-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm hover:shadow-md transition-shadow'
                  }`}
                >
                  <i className={`fas fa-${item.icon} mr-2`}></i>
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          </section>

          {/* 培训课程 */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
                培训课程
              </h2>
              
              {/* 筛选条件 */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">课程类别</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'all', label: '全部' },
                      { id: 'technical', label: '技术课程' },
                      { id: 'solution', label: '解决方案' },
                      { id: 'architecture', label: '架构设计' }
                    ].map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-4 py-2 rounded-full text-sm ${
                          activeCategory === category.id
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white'
                        }`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">难度级别</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'all', label: '全部' },
                      { id: 'beginner', label: '初级' },
                      { id: 'intermediate', label: '中级' },
                      { id: 'advanced', label: '高级' }
                    ].map((level) => (
                      <button
                        key={level.id}
                        onClick={() => setActiveLevel(level.id)}
                        className={`px-4 py-2 rounded-full text-sm ${
                          activeLevel === level.id
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white'
                        }`}
                      >
                        {level.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* 课程列表 */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredCourses.map((course) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * course.id }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6"><div className="flex justify-between items-start mb-3">
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          course.level === 'beginner' ? 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400' :
                          course.level === 'intermediate' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400' :
                          'bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400'
                        }`}>
                          {course.level === 'beginner' ? '初级' : 
                           course.level === 'intermediate' ? '中级' : '高级'}
                        </span>
                        <div className="flex items-center">
                          <i className="fas fa-star text-yellow-400 mr-1"></i>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{course.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{course.title}</h3>
                      <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300 mb-4">
                        <div className="flex items-center">
                          <i className="fas fa-clock mr-1"></i>
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <i className="fas fa-user mr-1"></i>
                          <span>{course.students} 人学习</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-red-600 dark:text-red-400 font-bold">{course.price}</span>
                        <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                          立即报名
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  查看全部课程
                </button>
              </div>
            </div>
          </section>

          {/* 认证体系 */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8">
              认证体系
            </h2>
            
            {/* 认证等级说明 */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "HCIA - 工程师",
                  description: "华为认证ICT工程师，面向ICT领域的入门级认证，验证对ICT基础知识和技能的掌握。",
                  color: "blue"
                },
                {
                  title: "HCIP - 高级工程师",
                  description: "华为认证ICT高级工程师，面向ICT领域的中级认证，验证对复杂技术和解决方案的掌握。",
                  color: "green"
                },
                {
                  title: "HCIE - 专家",
                  description: "华为认证ICT专家，面向ICT领域的高级认证，验证专家级别的规划、设计和优化能力。",
                  color: "purple"
                }
              ].map((level, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className={`bg-${level.color}-50 dark:bg-${level.color}-900/20 p-6 rounded-xl border border-${level.color}-200 dark:border-${level.color}-900/50`}
                >
                  <h3 className={`text-xl font-bold text-${level.color}-800 dark:text-${level.color}-300 mb-3`}>
                    {level.title}
                  </h3>
                  <p className={`text-${level.color}-700 dark:text-${level.color}-400`}>
                    {level.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* 认证列表 */}
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * cert.id }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                >
                  <div className="md:flex">
                    <div className="md:w-1/4 h-40 md:h-auto">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{cert.title}</h3>
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          cert.level === 'associate' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400' :
                          cert.level === 'professional' ? 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400' :
                          'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400'
                        }`}>
                          {cert.level === 'associate' ? '工程师' : 
                           cert.level === 'professional' ? '高级工程师' : '专家'}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{cert.description}</p>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">前置要求</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{cert.requirements}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">考试代码</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{cert.examCode}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-red-600 dark:text-red-400 font-bold">{cert.examPrice}</span>
                        <button className="px-4 py-2 border border-red-600 text-red-600 dark:text-red-400 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                          了解详情
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                查看全部认证
              </button>
            </div>
          </section>

          {/* 培训中心 */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8">
              培训中心分布
            </h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
              <div className="h-80 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                {/* 这里应该是地图组件，使用占位图代替 */}
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=China%20map%20with%20Huawei%20training%20centers%20locations%2C%20professional%20map%20visualization&sign=f992d1e635b3d29ae580b178ec131f50" 
                  alt="华为培训中心分布图" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trainingCenters.map((center) => (
                    <motion.div
                      key={center.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * center.id }}
                      viewport={{ once: true }}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                    >
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{center.name}</h3>
                      <div className="flex items-start mb-2">
                        <i className="fas fa-map-marker-alt text-red-600 dark:text-red-400 mt-1 mr-2"></i>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{center.address}</p>
                      </div>
                      <div className="flex items-center mb-2">
                        <i className="fas fa-phone text-gray-500 dark:text-gray-400 mr-2"></i>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{center.contact}</p>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="mr-4">{center.courses} 门课程</span>
                        <span>{center.trainers} 名讲师</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
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
                  <h3 className="text-2xl font-bold mb-4">需要定制培训方案？</h3>
                  <p className="mb-6">
                    我们可以根据您企业的具体需求，定制专属的培训方案，提升您团队的技术能力和业务水平。
                  </p>
                  <button className="px-6 py-3 bg-white text-red-600 rounded-md font-medium hover:bg-gray-100 transition-colors">
                    联系培训顾问
                  </button>
                </div>
                <div className="hidden md:block flex justify-end">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Huawei%20training%20consultant%20team%2C%20professional%20IT%20trainers%20in%20classroom&sign=60c5560eb0dd5bf448fb737869bccaf2" 
                    alt="华为培训顾问团队" 
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