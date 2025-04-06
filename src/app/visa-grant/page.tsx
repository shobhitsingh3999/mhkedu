"use client"

// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, Download, Printer, ZoomIn, ZoomOut, X } from 'lucide-react';

// export default function VisaGrantsPage() {
//   const [currentDoc, setCurrentDoc] = useState(0);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [zoomLevel, setZoomLevel] = useState(1);
  
//   const documents = [
//     {
//       id: 1,
//       name: "Kashvi's Visa Grant",
//       date: "27 March 2024",
//       country: "FIJI"
//     },
//     {
//       id: 2,
//       name: "Shruti's Visa Grant",
//       date: "27 March 2025",
//       country: "FIJI"
//     },
//     {
//       id: 3,
//       name: "Kaushal's Visa Grant",
//       date: "14 January 2025",
//       country: "FIJI"
//     },
//     {
//       id: 4,
//       name: "Agustin's Visa Grant",
//       date: "12 February 2025",
//       country: "CHILE"
//     },
//     {
//       id: 5,
//       name: "Shartika's Visa Grant",
//       date: "04 February 2025",
//       country: "FIJI"
//     },
//     {
//       id: 6,
//       name: "Drisha's Visa Grant",
//       date: "04 February 2025",
//       country: "FIJI"
//     },
//     {
//       id: 7,
//       name: "Ahliya's Visa Grant",
//       date: "10 May 2024",
//       country: "FIJI"
//     },
//     {
//       id: 8,
//       name: "Marion's Visa Grant",
//       date: "02 January 2025",
//       country: "FIJI"
//     }
//   ];

//   const nextDocument = () => {
//     setCurrentDoc((prev) => (prev + 1) % documents.length);
//   };

//   const prevDocument = () => {
//     setCurrentDoc((prev) => (prev - 1 + documents.length) % documents.length);
//   };

//   const zoomIn = () => {
//     setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
//   };

//   const zoomOut = () => {
//     setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
//   };

//   const toggleFullscreen = () => {
//     setIsFullscreen(!isFullscreen);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen py-6 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row items-center justify-between mb-6">
//           <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">Australian Student Visa Grants</h1>
//           <div className="flex items-center space-x-2">
//             <span className="text-sm md:text-base text-gray-600">All documents are issued by the Department of Home Affairs</span>
//           </div>
//         </div>
        
//         {/* Document viewer and controls */}
//         <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
//           {/* Top control bar */}
//           <div className="flex items-center justify-between bg-gray-800 text-white px-4 py-3">
//             <div className="flex items-center space-x-2">
//               <span className="font-medium text-sm md:text-base">Document {currentDoc + 1} of {documents.length}</span>
//               <span className="text-gray-400 hidden sm:inline">|</span>
//               <span className="text-sm md:text-base hidden sm:inline">{documents[currentDoc].name}</span>
//             </div>
//             <div className="flex items-center space-x-2 md:space-x-4">
//               <button 
//                 className="p-1 rounded hover:bg-gray-700 focus:outline-none"
//                 onClick={zoomIn}
//                 title="Zoom In"
//               >
//                 <ZoomIn size={18} />
//               </button>
//               <button 
//                 className="p-1 rounded hover:bg-gray-700 focus:outline-none"
//                 onClick={zoomOut}
//                 title="Zoom Out"
//               >
//                 <ZoomOut size={18} />
//               </button>
//               <button 
//                 className="p-1 rounded hover:bg-gray-700 focus:outline-none"
//                 onClick={toggleFullscreen}
//                 title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
//               >
//                 {isFullscreen ? <X size={18} /> : <Printer size={18} />}
//               </button>
//               <button 
//                 className="p-1 rounded hover:bg-gray-700 focus:outline-none hidden sm:block"
//                 title="Download"
//               >
//                 <Download size={18} />
//               </button>
//             </div>
//           </div>
          
//           {/* Document view */}
//           <div className="relative bg-gray-300 flex justify-center overflow-auto" style={{ 
//             height: isFullscreen ? 'calc(100vh - 56px)' : '70vh',
//             maxHeight: isFullscreen ? 'none' : '80vh'
//           }}>
//             <button 
//               onClick={prevDocument}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10 focus:outline-none"
//               aria-label="Previous document"
//             >
//               <ChevronLeft size={24} />
//             </button>
            
//             <div className="flex items-center justify-center p-6 min-h-full">
//               <div 
//                 className="transform transition-transform duration-200 max-w-full"
//                 style={{ transform: `scale(${zoomLevel})` }}
//               >
//                 {/* Using the actual document images */}
//                 <img 
//                   src={`/grants/${currentDoc + 1}.png`} 
//                   alt={documents[currentDoc].name}
//                   className="max-h-full object-contain shadow-xl border border-gray-200"
//                   style={{ 
//                     maxWidth: '100%', 
//                     height: 'auto',
//                     transformOrigin: 'center'
//                   }}
//                 />
//               </div>
//             </div>
            
//             <button 
//               onClick={nextDocument}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10 focus:outline-none"
//               aria-label="Next document"
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>
          
//           {/* Document info bar */}
//           <div className="bg-gray-100 border-t border-gray-300 px-4 py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center">
//             <div>
//               <h2 className="font-medium text-gray-800">{documents[currentDoc].name}</h2>
//               <p className="text-sm text-gray-600">Grant Date: {documents[currentDoc].date}</p>
//             </div>
//             <div className="mt-2 sm:mt-0">
//               <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//                 Student Visa (Subclass 500)
//               </span>
//               <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                 {documents[currentDoc].country}
//               </span>
//             </div>
//           </div>
//         </div>
        
//         {/* Document thumbnails */}
//         <div className="mt-8">
//           <h2 className="text-xl font-semibold mb-4">All Documents</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
//             {documents.map((doc, index) => (
//               <div 
//                 key={index}
//                 onClick={() => setCurrentDoc(index)}
//                 className={`
//                   cursor-pointer rounded-lg overflow-hidden border-2 transition
//                   ${currentDoc === index ? 'border-blue-500 shadow-md' : 'border-gray-200 hover:border-gray-300'}
//                 `}
//               >
//                 <div className="bg-white">
//                   <div className="h-36 md:h-40 lg:h-44 bg-gray-200 flex items-center justify-center relative overflow-hidden">
//                     {/* Using actual thumbnails */}
//                     <img 
//                       src={`/grants/${index + 1}.png`} 
//                       alt={doc.name}
//                       className="w-full h-full object-cover"
//                     />
//                     {currentDoc === index && (
//                       <div className="absolute inset-0 bg-blue-500 bg-opacity-10 border-4 border-blue-500"></div>
//                     )}
//                   </div>
//                   <div className="p-2">
//                     <p className="text-xs font-medium truncate">{doc.name}</p>
//                     <p className="text-xs text-gray-500 truncate">{doc.date}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Eye, Download, Calendar, Flag } from 'lucide-react';
import FooterSection from '@/components/FooterSection';

export default function VisaGrantsPage() {
  const [selectedDoc, setSelectedDoc] = useState<number | null>(null);
  
  const documents = [
    {
      id: 1,
      name: "Kashvi's Visa Grant",
      date: "27 March 2024",
      country: "FIJI",
      visaType: "Student Visa",
      visaSubclass: "Subclass 500",
      sector: "Vocational Education and Training",
      duration: "Over 2 years",
      ageGroup: "Under 18"
    },
    {
      id: 2,
      name: "Shruti's Visa Grant",
      date: "27 March 2025",
      country: "FIJI",
      visaType: "Student Visa",
      visaSubclass: "Subclass 500",
      sector: "Vocational Education and Training",
      duration: "2+ years",
      ageGroup: "16-18"
    },
    {
      id: 3,
      name: "Kaushal's Visa Grant",
      date: "14 January 2025",
      country: "FIJI",
      visaType: "Student Visa",
      visaSubclass: "Subclass 500",
      sector: "Vocational Education and Training",
      duration: "2+ years",
      ageGroup: "Under 18"
    },
    {
      id: 4,
      name: "Agustin's Visa Grant",
      date: "12 February 2025",
      country: "CHILE",
      visaType: "Student Visa",
      visaSubclass: "Subclass 500",
      sector: "Vocational Education and Training",
      duration: "18+ months",
      ageGroup: "18-25"
    },
    {
      id: 5,
      name: "Shartika's Visa Grant",
      date: "04 February 2025",
      country: "FIJI",
      visaType: "Student Visa",
      visaSubclass: "Subclass 500",
      sector: "Vocational Education and Training",
      duration: "18+ months",
      ageGroup: "Adult"
    },
    {
      id: 6,
      name: "Drisha's Visa Grant",
      date: "04 February 2025",
      country: "FIJI",
      visaType: "Student Visa",
      visaSubclass: "Subclass 500",
      sector: "Vocational Education and Training",
      duration: "18+ months",
      ageGroup: "Under 5"
    },
    {
      id: 7,
      name: "Ahliya's Visa Grant",
      date: "10 May 2024",
      country: "FIJI",
      visaType: "Student Visa",
      visaSubclass: "Subclass 500",
      sector: "Vocational Education and Training",
      duration: "2+ years",
      ageGroup: "16-18"
    },
    {
      id: 8,
      name: "Marion's Visa Grant",
      date: "02 January 2025",
      country: "FIJI",
      visaType: "Student Visa",
      visaSubclass: "Subclass 500",
      sector: "Vocational Education and Training",
      duration: "2+ years",
      ageGroup: "16-18"
    }
  ];

  const openDocument = (index: number) => {
    setSelectedDoc(index);
  };

  const closeDocument = () => {
    setSelectedDoc(null);
  };

  const nextDocument = () => {
    if (selectedDoc !== null) {
      setSelectedDoc((prev) => (prev === null ? 0 : (prev + 1) % documents.length));
    }
  };

  const prevDocument = () => {
    if (selectedDoc !== null) {
      setSelectedDoc((prev) => (prev === null ? 0 : (prev - 1 + documents.length) % documents.length));
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0F4C5C] py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-full bg-[url('https://cdn.pixabay.com/photo/2015/02/12/15/47/london-633880_1280.jpg')] bg-cover bg-center opacity-20" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              GLIMPSE OF<br />
              STUDENT VISA<br />
              GRANTS 2024 - 2025
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Explore our comprehensive guides to studying in top destinations around the world. 
              Find information on universities, courses, visas, and post-study opportunities.
            </p>
            <button className="px-6 py-3 bg-[#9FE870] text-[#0F4C5C] font-medium rounded-full hover:bg-[#8ed85f] transition-colors">
              Learn More About Student Visas
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">        
        <h2 className="text-2xl md:text-3xl font-bold text-[#0F4C5C] mb-8">Recent Student Visa Approvals</h2>
        
        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {documents.map((doc, index: number) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg cursor-pointer border border-gray-200"
              onClick={() => openDocument(index)}
            >
              {/* Card Image */}
              <div className="relative h-64 overflow-hidden bg-gray-200 border-b border-gray-200">
                <img 
                  src={`/grants/${doc.id}.png`} 
                  alt={doc.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-0 right-0 m-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Granted
                  </span>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{doc.name}</h3>
                
                <div className="flex flex-col space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={16} className="text-gray-400 mr-2" />
                    <span>{doc.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Flag size={16} className="text-gray-400 mr-2" />
                    <span>{doc.country}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{doc.visaType} {doc.visaSubclass}</span>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">{doc.ageGroup}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{doc.sector}</span>
                    <button 
                      className="flex items-center justify-center bg-blue-50 hover:bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full"
                    >
                      <Eye size={14} className="mr-1" />
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Document Viewer Modal */}
        {selectedDoc !== null && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}>
            <div className="relative bg-white rounded-lg max-w-5xl w-full max-h-[90vh] flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  {documents[selectedDoc].name}
                </h3>
                <div className="flex items-center space-x-2">
                  <button 
                    className="p-1 rounded-full hover:bg-gray-200 text-gray-500"
                    onClick={() => {}}
                    title="Download"
                  >
                    <Download size={20} />
                  </button>
                  <button 
                    className="p-1 rounded-full hover:bg-gray-200 text-gray-500"
                    onClick={closeDocument}
                    title="Close"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
              
              {/* Document View */}
              <div className="relative flex-grow overflow-auto bg-gray-100 flex items-center justify-center">
                <button 
                  onClick={prevDocument}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
                  aria-label="Previous document"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <div className="p-4 flex items-center justify-center">
                  <img 
                    src={`/grants/${documents[selectedDoc].id}.png`} 
                    alt={documents[selectedDoc].name}
                    className="max-w-full max-h-[70vh] object-contain shadow-lg"
                  />
                </div>
                
                <button 
                  onClick={nextDocument}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
                  aria-label="Next document"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              {/* Modal Footer */}
              <div className="px-4 py-3 bg-gray-50 rounded-b-lg border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {documents[selectedDoc].visaType}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {documents[selectedDoc].country}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    {documents[selectedDoc].ageGroup}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    {documents[selectedDoc].duration}
                  </span>
                </div>
                <div className="flex flex-col sm:items-end">
                  <span className="text-sm text-gray-500">
                    Grant Date: {documents[selectedDoc].date}
                  </span>
                  <span className="text-xs text-gray-500">
                    {documents[selectedDoc].sector} Sector
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}