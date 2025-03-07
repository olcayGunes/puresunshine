'use client';
import { motion } from 'framer-motion';

const reasons = [
  {
    title: "Best Representation",
    description: "With our experienced Amazon team, we provide the best customer relationship support. Your brand is represented in the best way on Amazon.",
    icon: "🏆"
  },
  {
    title: "Large Customer Network",
    description: "We connect your brand with customers in the world's largest marketplace and expand your customer portfolio.",
    icon: "🌐"
  },
  {
    title: "Fast Delivery",
    description: "With Amazon FBA, we provide the best customer experience by delivering your products to customers in the fastest way possible.",
    icon: "🚚"
  },
  {
    title: "No Drudgery",
    description: "We take care of all the drudgery, so you can focus on what matters most: growing your business.",
    icon: "✨"
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose Pure Sunshine
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We're committed to helping your brand succeed on Amazon through our comprehensive services and expertise
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex items-start space-x-4"
            >
              <div className="text-4xl">{reason.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 