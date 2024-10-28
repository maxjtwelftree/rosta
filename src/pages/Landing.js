import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiArrowRight, 
  FiUsers, 
  FiClock, 
  FiShield, 
  FiPieChart, 
  FiTrendingUp,
  FiZap,
  FiCheckCircle,
} from 'react-icons/fi';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

// Constants
const trustLogos = [
  "Crown Casino",
  "ALH Group",
  "Merivale",
  "The Star",
  "Event Hospitality",
  "Accor Hotels"
];

const features = [
  {
    title: "AI-Powered Automation",
    description: "Smart algorithms that learn and adapt to your business needs",
    icon: <FiZap className="text-3xl" />
  },
  {
    title: "Real-Time Adaptability",
    description: "Instant updates and flexible shift management",
    icon: <FiClock className="text-3xl" />
  },
  {
    title: "Compliance Built-in",
    description: "Australian labour law compliance automatically enforced",
    icon: <FiShield className="text-3xl" />
  }
];

const marketStats = [
  { 
    value: "4M+", 
    label: "People employed in target industries",
    description: "Across hospitality and retail sectors"
  },
  { 
    value: "60%", 
    label: "Time saved on scheduling",
    description: "Compared to traditional methods"
  },
  { 
    value: "$10k", 
    label: "Annual savings per location",
    description: "Through optimized workforce management"
  },
  { 
    value: "100%", 
    label: "Compliance rate",
    description: "With Australian labour laws"
  }
];

const benefits = [
  {
    title: "Automated Intelligence",
    description: "Our AI handles the complexity of scheduling, learning from your business patterns and staff preferences.",
    icon: <FiPieChart className="text-3xl" />
  },
  {
    title: "Real-Time Collaboration",
    description: "Teams can instantly communicate, swap shifts, and update availability in real-time.",
    icon: <FiUsers className="text-3xl" />
  },
  {
    title: "Data-Driven Insights",
    description: "Make informed decisions with comprehensive analytics and forecasting.",
    icon: <FiTrendingUp className="text-3xl" />
  }
];

const pricingPlans = [
  {
    name: "Starter",
    price: "499",
    period: "per month",
    description: "Perfect for small businesses",
    features: [
      "Up to 50 employees",
      "Basic AI scheduling",
      "Real-time updates",
      "Mobile app access",
      "Email support"
    ],
    highlighted: false
  },
  {
    name: "Professional",
    price: "999",
    period: "per month",
    description: "Ideal for growing businesses",
    features: [
      "Up to 200 employees",
      "Advanced AI optimization",
      "Shift swapping",
      "Analytics dashboard",
      "Priority support",
      "Custom integrations"
    ],
    highlighted: false
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large organizations",
    features: [
      "Unlimited employees",
      "Full AI capabilities",
      "Custom features",
      "API access",
      "24/7 support",
      "Dedicated account manager"
    ],
    highlighted: false
  }
];

function Landing() {
  const navigate = useNavigate();  // Add this hook

  const handleGetStarted = () => {
    navigate('/dashboard');  // This will navigate to the dashboard route
  };
  
  // Enhanced floating background
  const FloatingBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black opacity-40" />
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            background: i % 2 === 0 
              ? 'radial-gradient(circle at center, rgba(124, 58, 237, 0.03) 0%, rgba(124, 58, 237, 0) 70%)'
              : 'radial-gradient(circle at center, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 70%)',
            width: `${Math.random() * 50 + 30}vw`,
            height: `${Math.random() * 50 + 30}vw`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 1,
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <FloatingBackground />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center relative px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.img
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={logo}
            alt="Rosta"
            className="w-24 mx-auto mb-8"
          />
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl font-bold mb-6 tracking-tight"
          >
            Staff Rostering,{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Reimagined
            </span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Australia's leading AI-powered staff rostering platform for hospitality and retail
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={handleGetStarted}  
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300"
            >
              Get Started 
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Trust Logos Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-16 px-4 border-t border-zinc-800/50"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-400 mb-8">Trusted by leading hospitality and retail brands</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
            {trustLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-500 font-medium"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
        className="py-32 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {marketStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="bg-zinc-900/30 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                  {stat.value}
                </div>
                <div className="text-white/80 font-medium mb-2">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
        className="py-32 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200"
            >
              Why Choose Rosta
            </motion.h2>
            <motion.p 
              className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Streamline your workforce management with powerful AI-driven tools
            </motion.p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="bg-gradient-to-b from-zinc-900/50 to-black/50 p-8 rounded-2xl border border-zinc-800/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-purple-400 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
        className="py-32 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to manage your workforce effectively
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="bg-gradient-to-b from-zinc-900/50 to-black/50 p-8 rounded-2xl border border-zinc-800/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
        className="py-32 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
              Choose the perfect plan for your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className={`relative bg-gradient-to-b ${
                  plan.highlighted 
                    ? 'from-zinc-900/80 to-black border-purple-500/50' 
                    : 'from-zinc-900/50 to-black border-zinc-800/50'
                } p-8 rounded-2xl border hover:border-purple-500/50 transition-all duration-300`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>

                {/* Pricing */}
                <div className="flex items-baseline mb-8">
                  {plan.price === "Custom" ? (
                    <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                      {plan.price}
                    </span>
                  ) : (
                    <>
                      <span className="text-2xl">$</span>
                      <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                        {plan.price}
                      </span>
                    </>
                  )}
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>

                {/* Plan Description */}
                <p className="text-gray-400 mb-8">{plan.description}</p>

                {/* Features List */}
                <ul className="mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center mb-2 text-gray-400">
                      <FiCheckCircle className="text-purple-400 mr-2" /> {feature}
                    </li>
                  ))}
                </ul>

                {/* Call to Action */}
                <button
                  className={`w-full py-3 rounded-full font-medium ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  } transition-all duration-300`}
                >
                  {plan.price === "Custom" ? "Contact Us" : "Choose Plan"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-32 px-4 relative overflow-hidden"
      >
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200"
          >
            Ready to transform your workforce management?
          </motion.h2>
          <motion.p 
            className="text-gray-400 mb-12 text-xl leading-relaxed"
          >
            Join leading Australian businesses in revolutionizing their staff rostering
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-b from-zinc-900/50 to-black/50 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 mx-auto border border-zinc-800/50 hover:border-purple-500/50 transition-all duration-300"
          >
            Get Started <FiArrowRight />
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}

export default Landing;
