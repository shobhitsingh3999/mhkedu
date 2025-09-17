// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function CertificateSection() {
//   return (
//     <section className="bg-black">
//       <div className="px-4 py-10 lg:pb-15 mx-auto max-w-7xl">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="rounded-3xl shadow-lg py-6 lg:py-8 px-6 lg:pl-10 lg:pr-0 grid lg:grid-cols-2 lg:gap-x-20 gap-y-6 bg-white"
//         >
//           {/* Content Section */}
//           <div className="flex flex-col justify-center lg:justify-start items-center lg:text-left lg:items-start text-center">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-bold text-black"
//             >
//               <p>
//                 Stand out with the{" "}
//                 <span 
//                   className="italic text-green-600"
//                   style={{ fontFamily: '"Chronicle Display Black", serif' }}
//                 >
//                   Vantage Certificate
//                 </span>
//               </p>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="text-base sm:text-lg lg:text-xl text-black mt-3 lg:mt-5 tracking-tight leading-relaxed"
//             >
//               <p>
//                 Earn the Vantage Certificate and elevate your profile with a 
//                 recruiter-reviewed resume, LinkedIn optimisation, and a mock 
//                 interview from an investment banking recruiter.
//               </p>
//             </motion.div>
//           </div>

//           {/* Image Section */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="relative h-64 sm:h-72 lg:h-80"
//           >
//             <Image
//               alt="LinkedIn Certificate Preview"
//               fill
//               className="object-contain"
//               sizes="(max-width: 768px) 100vw, 50vw"
//               src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop"
//               priority
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { motion } from "framer-motion";
// import { Shield, CheckCircle, ExternalLink } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function MigrationAgentSection() {
//   return (
//     <section className="bg-gradient-to-b from-slate-50 to-blue-50">
//       <div className="px-4 py-16 lg:py-20 mx-auto max-w-7xl">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="rounded-3xl shadow-xl py-8 lg:py-12 px-6 lg:px-10 grid lg:grid-cols-2 lg:gap-x-16 gap-y-8 bg-white border border-slate-100"
//         >
//           {/* Content Section */}
//           <div className="flex flex-col justify-center lg:justify-start items-center lg:text-left lg:items-start text-center">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="inline-flex items-center justify-center p-1 mb-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
//             >
//               <span className="px-4 py-2 rounded-full bg-white text-slate-800 text-sm font-medium tracking-wider uppercase flex items-center">
//                 <Shield className="w-4 h-4 mr-2 text-blue-600" />
//                 Registered & Certified
//               </span>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-bold text-slate-900 mb-6"
//             >
//               <p>
//                 Trusted{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
//                   Migration Agents
//                 </span>
//               </p>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed"
//             >
//               <p>
//                 Our team is fully registered with the Migration Agents Registration Authority (MARA) 
//                 under registration number <span className="font-semibold text-slate-900">1575606</span>, 
//                 ensuring you receive professional and compliant migration advice.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//               className="flex flex-col sm:flex-row gap-4 mb-8"
//             >
//               <div className="flex items-center text-slate-700">
//                 <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
//                 <span>MARA Registered</span>
//               </div>
//               <div className="flex items-center text-slate-700">
//                 <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
//                 <span>Professional Indemnity Insured</span>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               className="flex flex-col sm:flex-row gap-4"
//             >
//               <Button
//                 size="lg"
//                 className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white border-0 h-12 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
//               >
//                 Verify Our Registration
//                 <ExternalLink className="ml-2 h-4 w-4" />
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 h-12 px-6 rounded-full transition-all duration-300"
//               >
//                 Learn More About MARA
//               </Button>
//             </motion.div>
//           </div>

//           {/* Registration Badge Section */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="flex items-center justify-center"
//           >
//             <div className="relative">
//               {/* Main Badge */}
//               <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
//                 <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
//                   <Shield className="w-8 h-8 text-white" />
//                 </div>
                
//                 <h3 className="text-xl font-bold text-slate-900 mb-2">
//                   Migration Agents
//                 </h3>
//                 <p className="text-sm text-slate-600 mb-4">
//                   Registration Number
//                 </p>
//                 <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
//                   1575606
//                 </div>
                
//                 <div className="text-xs text-slate-500 border-t border-slate-200 pt-4">
//                   <p>www.mara.gov.au</p>
//                 </div>
//               </div>
              
//               {/* Decorative Elements */}
//               <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
//                 <CheckCircle className="w-4 h-4 text-white" />
//               </div>
              
//               {/* Background Glow Effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-2xl blur-xl -z-10 transform scale-110"></div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Image from "next/image";

export default function CertificateSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-white to-[#E5F9E0]/50"
          >
            <div className="p-8 md:p-10 grid lg:grid-cols-2 lg:gap-x-20 gap-y-8">
              {/* Content Section */}
              <div className="flex flex-col justify-center lg:justify-start items-center lg:text-left lg:items-start text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6 p-3 rounded-full bg-[#E5F9E0]/50"
                >
                  <Shield className="w-6 h-6 text-[#1A2B3C]/70" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-normal text-[#1A2B3C] mb-6"
                >
                  <p>
                    <span className="font-medium">Registered Migration Agent</span>{" "}
                    <span 
                      className="italic text-[#1A2B3C]"
                      style={{ fontFamily: '"Chronicle Display Black", serif' }}
                    >
                      (MARN: 1575606)
                    </span>
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-base sm:text-lg lg:text-xl text-[#1A2B3C]/80 leading-relaxed mb-6"
                >
                  <p>
                    Authorised by the Office of MARA to provide trusted and compliant 
                    Australian migration advice.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-sm font-medium text-[#1A2B3C]/70"
                >
                  <p>www.mara.gov.au</p>
                </motion.div>
              </div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative h-64 sm:h-72 lg:h-80 rounded-xl hover:bg-white/70 transition-colors duration-300 p-4"
              >
                <Image
                  alt="MARA Certificate Preview"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="/mara.png"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}