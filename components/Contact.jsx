import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [fieldErrors, setFieldErrors] = useState({})
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const errors = {}
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email'
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    }
    
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    
    if (!validateForm()) {
      setResult("Please fix the errors above")
      return
    }
    
    setIsSubmitting(true)
    setResult("Sending...")
    
    const submitData = new FormData(event.target)
    submitData.append("access_key", "3c46d685-81de-4116-a0fc-e25987e8c2cf")
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData
      })
      
      const data = await response.json()
      
      if (data.success) {
        setResult("success")
        // Reset form with animation
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' })
          setResult("")
        }, 3000)
      } else {
        setResult("error")
        console.log("Error", data)
      }
    } catch (error) {
      setResult("error")
      console.log("Network error", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='contact' 
      className='w-full px-[12%] py-16 scroll-mt-20 bg-gradient-to-br from-gray-50 to-white 
      dark:from-gray-900 dark:to-black relative overflow-hidden'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5 dark:opacity-10'>
        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600'></div>
      </div>

      <div className='relative z-10'>
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className='text-center mb-2 text-lg font-ovo text-gray-600 dark:text-gray-300'
        >
          Connect with me
        </motion.h4>

        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-center text-5xl font-ovo text-gray-900 dark:text-white"
        >
          Get in Touch
        </motion.h2>

        <motion.p 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-600 dark:text-gray-300'
        > 
          I'd love to hear from you! If you have any questions, comments, or feedback, 
          please use the form below.
        </motion.p>  

        <motion.form 
          onSubmit={onSubmit} 
          className='max-w-2xl mx-auto'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        > 
          <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
              <motion.div variants={inputVariants}>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Your Name
                </label>
                <input 
                  id="name"
                  name='name'
                  type='text' 
                  placeholder='Enter your name' 
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full p-4 outline-none border-2 rounded-xl transition-all duration-300
                    ${fieldErrors.name 
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                      : 'border-gray-200 dark:border-gray-600 focus:border-rose-500 dark:focus:border-rose-400 bg-gray-50 dark:bg-gray-700'
                    }`}
                  aria-describedby={fieldErrors.name ? "name-error" : undefined}
                />
                {fieldErrors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {fieldErrors.name}
                  </p>
                )}
              </motion.div>

              <motion.div variants={inputVariants}>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Your Email
                </label>
                <input 
                  id="email"
                  name='email'
                  type='email' 
                  placeholder='Enter your email' 
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-4 outline-none border-2 rounded-xl transition-all duration-300
                    ${fieldErrors.email 
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                      : 'border-gray-200 dark:border-gray-600 focus:border-rose-500 dark:focus:border-rose-400 bg-gray-50 dark:bg-gray-700'
                    }`}
                  aria-describedby={fieldErrors.email ? "email-error" : undefined}
                />
                {fieldErrors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {fieldErrors.email}
                  </p>
                )}
              </motion.div>
            </div>

            <motion.div variants={inputVariants} className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Your Message
              </label>
              <textarea 
                id="message"
                name='message'
                rows='6' 
                placeholder='Enter your message' 
                required
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full p-4 outline-none border-2 rounded-xl transition-all duration-300 resize-none
                  ${fieldErrors.message 
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                    : 'border-gray-200 dark:border-gray-600 focus:border-rose-500 dark:focus:border-rose-400 bg-gray-50 dark:bg-gray-700'
                  }`}
                aria-describedby={fieldErrors.message ? "message-error" : undefined}
              />
              {fieldErrors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {fieldErrors.message}
                </p>
              )}
            </motion.div>

            <motion.div variants={inputVariants} className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                type='submit'
                className='py-4 px-12 w-max flex items-center justify-center gap-3 bg-gradient-to-r from-rose-500 to-blue-500 
                text-white rounded-xl font-semibold text-[13px] hover:shadow-xl transition-all duration-300 
                hover:scale-105 whitespace-nowrap hover:from-rose-600 hover:to-blue-600 transform mx-auto 
                disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none'
              > 
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Submitting...
                  </>
                ) : result === "success" ? (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-5 h-5 bg-white rounded-full flex items-center justify-center"
                    >
                      <svg className="w-3 h-3 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    Sent Successfully!
                  </>
                ) : (
                  <>
                    Submit Now
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} alt='right arrow' className='w-4'/>
                    </motion.span>
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {result && result !== "success" && !isSubmitting && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mt-4 p-3 rounded-lg ${
                      result === "error" 
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' 
                        : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                    }`}
                  >
                    {result === "error" ? "⚠️ Failed to send message. Please try again." : result}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact 