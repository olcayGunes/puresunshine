'use client';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Authorized Reseller',
    description: 'We support you to grow your business by selling your products as an authorized seller on Amazon.',
    icon: '🏢'
  },
  {
    title: 'Fulfillment of Orders',
    description: 'We handle the fulfillment and delivery of the orders to customers through Amazon FBA.',
    icon: '📦'
  },
  {
    title: 'Customer Satisfaction',
    description: 'We maximize customer satisfaction with fast delivery and 24/7 customer support.',
    icon: '⭐'
  },
  {
    title: 'Brand Representation',
    description: 'We represent your brand in the best way possible on Amazon with excellent customer relationship management.',
    icon: '🎯'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            What We Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We provide comprehensive Amazon marketplace solutions to help your brand succeed
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="flex flex-col items-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 