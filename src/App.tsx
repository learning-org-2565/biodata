import React from 'react';
import { User, Briefcase, MapPin, GraduationCap, Users, Rocket } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="relative h-48 bg-gradient-to-r from-indigo-500 to-blue-600">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h1 className="text-3xl font-bold">Arun Ponugoti</h1>
              <p className="text-lg opacity-90">Senior DevOps Engineer</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Information */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2 text-indigo-700">
                <User size={20} /> Personal Information
              </h2>
              <div className="space-y-2">
                <p><span className="font-medium">Date of Birth:</span> October 19th, 1994 (6pm)</p>
                <p><span className="font-medium">Height:</span> 5' 10"</p>
                <p><span className="font-medium">Weight:</span> 72 kgs</p>
                <p><span className="font-medium">Blood Group:</span> O+ve</p>
                <p><span className="font-medium">Day:</span> Wednesday (బుధవారం)</p>
                <p><span className="font-medium">Zodiac:</span> Aries (మేష రాశి)</p>
                <p><span className="font-medium">Nakshatram:</span> Ashwini-1 (అశ్విని-1)</p>
                <p><span className="font-medium">Gothram:</span> Padicharla (పాడిచర్ల )</p>
                <p><span className="font-medium">Birth Place:</span> Devarakonda, NLG</p>
              </div>
            </section>

            {/* Professional Details */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2 text-indigo-700">
                <Briefcase size={20} /> Professional Details
              </h2>
              <div className="space-y-2">
                <p><span className="font-medium">Company:</span> CGI</p>
                <p><span className="font-medium">Current Package:</span> 15 LPA</p>
              </div>
            </section>

            {/* Education Details - Simple */}
            <section className="space-y-4 md:col-span-2">
              <h2 className="text-xl font-semibold flex items-center gap-2 text-indigo-700">
                <GraduationCap size={20} /> Education Details
              </h2>
              <div className="space-y-2">
                <p><span className="font-medium">Bachelor of Commerce (Computers):</span></p>
                <p>Sri Sai Degree & P.G. College</p>
                <p>Osmania University</p>
              </div>
            </section>

            {/* Career Ambition */}
            <section className="space-y-4 md:col-span-2 bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold flex items-center gap-2 text-indigo-700">
                <Rocket size={20} /> Career Ambition
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Startup:</span>
                  <a 
                    href="https://infrahm.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-800 underline decoration-2 decoration-blue-400 hover:decoration-blue-600 transition-colors"
                  >
                    infrahm.netlify.app
                  </a>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Pioneering the future of cloud infrastructure through innovative MLOps & AIOps solutions. 
                  Building a transformative platform that leverages cutting-edge AI technology to revolutionize 
                  cloud operations and deployment strategies.
                </p>
              </div>
            </section>

            {/* Family Details */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2 text-indigo-700">
                <Users size={20} /> Family Details
              </h2>
              <div className="space-y-2">
                <p><span className="font-medium">Father:</span> Ravinder Rao Ponugoti</p>
                <p><span className="font-medium">Mother:</span> Jaya Laxmi</p>
                <p><span className="font-medium">Siblings:</span> Younger Brother - Tharun Ponugoti</p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2 text-indigo-700">
                <MapPin size={20} /> Contact Details
              </h2>
              <div className="space-y-2">
                <p className="whitespace-pre-line">
                  2-2 Shettipally, Amangal,
                  RR District, Telangana - 509321
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
