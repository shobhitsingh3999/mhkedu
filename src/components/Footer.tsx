"use client";

// import { Canvas } from "@react-three/fiber";
// import { Float, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

function Logo3D() {
  return (
    <></>
    // <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
    //   <ambientLight intensity={0.5} />
    //   <pointLight position={[10, 10, 10]} />
    //   <Float
    //     speed={4}
    //     rotationIntensity={1}
    //     floatIntensity={2}
    //   >
    //     <group>
    //       {/* Main torusKnot */}
    //       <mesh scale={1.2}>
    //         <torusKnotGeometry args={[0.8, 0.3, 128, 16]} />
    //         <meshStandardMaterial
    //           color="#4F46E5"
    //           metalness={0.8}
    //           roughness={0.2}
    //         />
    //       </mesh>
          
    //       {/* Inner rotating sphere */}
    //       <mesh scale={0.4}>
    //         <sphereGeometry args={[1, 32, 32]} />
    //         <meshStandardMaterial
    //           color="#818CF8"
    //           metalness={0.8}
    //           roughness={0.2}
    //           opacity={0.6}
    //           transparent
    //         />
    //       </mesh>
          
    //       {/* Outer rotating rings */}
    //       <group rotation={[Math.PI / 4, 0, 0]}>
    //         <mesh scale={1.5}>
    //           <torusGeometry args={[1, 0.1, 16, 32]} />
    //           <meshStandardMaterial
    //             color="#C7D2FE"
    //             metalness={0.8}
    //             roughness={0.2}
    //             opacity={0.4}
    //             transparent
    //           />
    //         </mesh>
    //       </group>
          
    //       <group rotation={[0, Math.PI / 4, 0]}>
    //         <mesh scale={1.6}>
    //           <torusGeometry args={[1, 0.1, 16, 32]} />
    //           <meshStandardMaterial
    //             color="#6366F1"
    //             metalness={0.8}
    //             roughness={0.2}
    //             opacity={0.3}
    //             transparent
    //           />
    //         </mesh>
    //       </group>
    //     </group>
    //   </Float>
    //   <OrbitControls
    //     enableZoom={false}
    //     enablePan={false}
    //     minPolarAngle={Math.PI / 2.5}
    //     maxPolarAngle={Math.PI / 1.5}
    //   />
    // </Canvas>
  );
}

const footerLinks = {
  company: [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Blog", href: "#" }
  ],
  services: [
    { name: "Web Development", href: "#" },
    { name: "Mobile Apps", href: "#" },
    { name: "Cloud Solutions", href: "#" },
    { name: "AI Integration", href: "#" }
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "White Papers", href: "#" },
    { name: "API Reference", href: "#" }
  ]
};

const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, href: "#" },
  { icon: <Twitter className="h-5 w-5" />, href: "#" },
  { icon: <Instagram className="h-5 w-5" />, href: "#" },
  { icon: <Linkedin className="h-5 w-5" />, href: "#" },
  { icon: <Github className="h-5 w-5" />, href: "#" }
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="h-24 w-24 mb-6">
              <Logo3D />
            </div>
            <p className="text-gray-300 mb-8 max-w-md">
              Transforming businesses through innovative digital solutions. We help companies
              embrace the future of technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/20 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-6">Services</h3>
              <ul className="space-y-4">
                {footerLinks.services.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-6">Resources</h3>
              <ul className="space-y-4">
                {footerLinks.resources.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 StartPro. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
    </footer>
  );
} 