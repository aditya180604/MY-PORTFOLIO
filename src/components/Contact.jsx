import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    permission: false
  });
  
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  // Input Change Handler
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error once user starts editing
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: null }));
    }
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Must be at least 10 characters';
    }
    if (!formData.permission) {
      newErrors.permission = 'Permission required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('loading');

    try {
      // Configured Web3Forms access key
      const accessKey = "d039244f-8712-4020-bb24-a4956ff596fd";

      if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE" || !accessKey) {
        // Simulation mode: perfect fallback for testing
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', message: '', permission: false });
      } else {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            email: formData.email,
            message: formData.message,
            subject: "New Message from Portfolio Website"
          })
        });

        const data = await response.json();
        if (data.success) {
          setStatus('success');
          setFormData({ firstName: '', lastName: '', email: '', message: '', permission: false });
        } else {
          setStatus('error');
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  // WhatsApp Direct Send Handler
  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const email = formData.email;
    const message = formData.message;

    const text = `Hi Aditya, my name is ${fullName} (${email}). I visited your portfolio website and am interested in your work.\n\nMessage: ${message}`;
    const url = `https://wa.me/919392584546?text=${encodeURIComponent(text)}`;
    
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900">
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>
 
      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-[#10b981] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between min-h-[500px]"
        >
          <div className="text-xs font-bold tracking-[0.2em] mb-12 md:mb-16 uppercase opacity-90">
            Reach Us
          </div>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center py-12 px-6 w-full"
              >
                <div className="w-20 h-20 rounded-full bg-white text-[#10b981] flex items-center justify-center mb-6 shadow-[0_10px_30px_rgba(255,255,255,0.35)]">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black mb-3">Message Sent!</h3>
                <p className="text-md text-emerald-50 max-w-md mb-8 leading-relaxed font-medium">
                  Thank you for reaching out. Your message has been sent successfully. I will get back to you shortly!
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 rounded-full border border-white text-white font-bold hover:bg-white hover:text-[#10b981] transition-all duration-300 shadow-md"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-12 md:gap-16 w-full"
              >
                <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
                  {/* Left Column */}
                  <div className="flex-1 flex flex-col gap-10">
                    <div className="relative">
                      <input 
                        type="text" 
                        id="firstName" 
                        placeholder="First Name" 
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-b pb-3 text-lg focus:outline-none transition-colors placeholder-white font-medium rounded-none ${
                          errors.firstName ? 'border-red-300 focus:border-red-200' : 'border-white/40 focus:border-white'
                        }`}
                      />
                      {errors.firstName && (
                        <span className="absolute left-0 bottom-[-22px] text-[10px] text-red-100 font-bold uppercase tracking-wider">
                          {errors.firstName}
                        </span>
                      )}
                    </div>
                    
                    <div className="relative">
                      <input 
                        type="text" 
                        id="lastName" 
                        placeholder="Last Name" 
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                      />
                    </div>
                    
                    <div className="relative">
                      <input 
                        type="email" 
                        id="email" 
                        placeholder="Email" 
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-b pb-3 text-lg focus:outline-none transition-colors placeholder-white font-medium rounded-none ${
                          errors.email ? 'border-red-300 focus:border-red-200' : 'border-white/40 focus:border-white'
                        }`}
                      />
                      {errors.email && (
                        <span className="absolute left-0 bottom-[-22px] text-[10px] text-red-100 font-bold uppercase tracking-wider">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="flex-1 flex flex-col">
                    <div className="relative h-full flex flex-col">
                      <textarea 
                        id="message" 
                        placeholder="Type your message here" 
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full h-full min-h-[120px] bg-transparent border-b pb-3 text-lg focus:outline-none transition-colors placeholder-white font-medium resize-none rounded-none ${
                          errors.message ? 'border-red-300 focus:border-red-200' : 'border-white/40 focus:border-white'
                        }`}
                      ></textarea>
                      {errors.message && (
                        <span className="absolute left-0 bottom-[-22px] text-[10px] text-red-100 font-bold uppercase tracking-wider">
                          {errors.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row gap-12 mt-4">
                  {/* Left text */}
                  <div className="flex-1 flex flex-col gap-2 relative">
                    <div className="flex items-start gap-4 text-sm font-medium text-white/90">
                      <input 
                        type="checkbox" 
                        id="permission" 
                        checked={formData.permission}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer" 
                        style={{ accentColor: "white" }}
                      />
                      <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                        I give permission to contact me at this email address.
                      </label>
                    </div>
                    {errors.permission && (
                      <span className="absolute left-8 bottom-[-22px] text-[10px] text-red-100 font-bold uppercase tracking-wider">
                        {errors.permission}
                      </span>
                    )}
                  </div>

                  {/* Right text & button */}
                  <div className="flex-1 flex flex-col gap-8 text-xs text-white/70 font-medium">
                    <p className="leading-relaxed max-w-[400px]">
                      This site is protected by reCAPTCHA and the Google <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a> and <a href="#" className="underline hover:text-white transition-colors">Terms of Service</a> apply.
                    </p>
                    
                    {status === 'error' && (
                      <div className="text-red-200 text-xs font-bold uppercase tracking-wide">
                        ⚠️ Error submitting message. Please check connection and try again.
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                      <p className="max-w-[250px] leading-relaxed">
                        For information on how to unsubscribe, please review our <a href="#" className="underline hover:text-white transition-colors">privacy policy</a>.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <button 
                          type="button" 
                          onClick={handleWhatsAppSend}
                          className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(37,211,102,0.4)] transition-all duration-300 whitespace-nowrap self-stretch sm:self-auto cursor-pointer"
                        >
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.166.001 6.141 1.233 8.377 3.469 2.235 2.235 3.466 5.211 3.466 8.378 0 6.537-5.325 11.863-11.863 11.863-2.022-.001-4.004-.518-5.764-1.503L0 24zm6.208-3.791c1.666.989 3.315 1.503 5.594 1.504 5.431 0 9.851-4.42 9.852-9.853 0-2.631-1.025-5.105-2.887-6.967C16.96 3.031 14.485 2.03 11.859 2.03c-5.434 0-9.852 4.419-9.853 9.852 0 2.203.567 4.363 1.639 6.223l-.99 3.616 3.71-.973zm11.393-7.234c-.266-.134-1.58-.78-1.828-.869-.247-.089-.427-.134-.607.135-.179.268-.696.87-.852 1.048-.158.179-.315.201-.581.067-.266-.134-1.127-.415-2.147-1.326-.79-.705-1.324-1.577-1.48-1.846-.155-.269-.016-.414.118-.548.121-.12.266-.313.4-.469.133-.156.177-.268.266-.447.089-.179.045-.335-.022-.469-.067-.134-.607-1.462-.832-2.001-.219-.527-.459-.454-.627-.463-.162-.008-.348-.01-.534-.01-.186 0-.489.07-.746.348-.256.277-1.002.978-1.002 2.388 0 1.41 1.025 2.77 1.168 2.96.143.19 2.017 3.08 4.886 4.318.682.295 1.214.471 1.629.603.686.219 1.311.188 1.803.115.549-.081 1.58-.646 1.801-1.238.22-.592.22-1.1.155-1.206-.067-.107-.247-.179-.513-.312z" />
                          </svg>
                          WhatsApp
                        </button>
                        
                        <button 
                          type="submit" 
                          disabled={status === 'loading'}
                          className="px-8 py-3 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-[#10b981] transition-all duration-300 group whitespace-nowrap self-stretch sm:self-auto disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                          {status === 'loading' ? 'Sending...' : 'Send Email'}
                          {status !== 'loading' && (
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default Contact;
