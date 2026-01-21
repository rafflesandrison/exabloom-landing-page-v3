import React, { useState } from 'react';
import { 
  CheckCircle2, 
  MessageSquare, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Clock, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronUp,
  Star,
  Smartphone,
  ArrowRight
} from 'lucide-react';

// --- Shared Components ---

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' }) => {
  const baseStyles = "px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[#1e1b4b] text-white hover:bg-[#312e81] shadow-lg shadow-indigo-500/30",
    secondary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 shadow-lg shadow-blue-500/30",
    outline: "border-2 border-slate-200 text-slate-700 hover:border-indigo-600 hover:text-indigo-600 bg-transparent"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-20 px-4 md:px-8 relative overflow-hidden ${className}`}>
    {children}
  </section>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold mb-6 border border-indigo-100">
    {children}
  </span>
);

// --- Sub-Sections ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">E</div>
            <span className="font-bold text-2xl text-slate-900 tracking-tight">Exabloom</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Case Studies</a>
            <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Blog</a>
            <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Pricing</a>
            <Button variant="primary" className="!py-2 !px-4 !text-sm">Book a Demo</Button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4 shadow-xl absolute w-full">
          <a href="#" className="block text-slate-600 font-medium">Case Studies</a>
          <a href="#" className="block text-slate-600 font-medium">Blog</a>
          <Button variant="primary" className="w-full">Book a Demo</Button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <Section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <Badge>AI-Driven Lead Management</Badge>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          AI Sales Assistant <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
            Selling For You 24/7
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
          Grow your business and revenue, not your headcount. Automate lead qualification, follow-ups, and bookings with a human-like touch.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button variant="secondary" className="flex items-center justify-center gap-2">
            Start Your Demo <ArrowRight size={18} />
          </Button>
          <Button variant="outline">View Case Studies</Button>
        </div>

        {/* Dashboard Mockup with Glow */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-2xl"></div>
          <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
             {/* Mock UI for visual representation */}
             <div className="bg-slate-50 border-b border-slate-200 p-3 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
             </div>
             <div className="grid grid-cols-12 h-[400px] md:h-[600px] bg-white">
                <div className="col-span-3 border-r border-slate-100 p-4 hidden md:block">
                    <div className="h-8 w-3/4 bg-slate-100 rounded mb-4"></div>
                    <div className="space-y-3">
                        {[1,2,3,4,5].map(i => <div key={i} className="h-12 w-full bg-slate-50 rounded-lg"></div>)}
                    </div>
                </div>
                <div className="col-span-12 md:col-span-9 p-8 flex flex-col items-center justify-center bg-slate-50/50">
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                            <BarChart3 size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">$320M+ Generated</h3>
                        <p className="text-slate-500">Revenue generated for our customers</p>
                    </div>
                    {/* Simulated Chat Interface */}
                    <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-slate-200 p-4 space-y-3">
                        <div className="flex justify-end"><div className="bg-blue-600 text-white p-3 rounded-l-xl rounded-tr-xl text-sm">Hello! I'm interested in your enterprise plan.</div></div>
                        <div className="flex justify-start"><div className="bg-slate-100 text-slate-800 p-3 rounded-r-xl rounded-tl-xl text-sm">Hi there! I can definitely help with that. Are you available for a quick demo this Tuesday?</div></div>
                        <div className="flex justify-end"><div className="bg-blue-600 text-white p-3 rounded-l-xl rounded-tr-xl text-sm">Yes, 2 PM works.</div></div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Logos = () => {
  const logos = ["Tree Art", "EduEdge", "Learning Journey", "Futurum Academy", "NCBT First", "Heuristics Hub"];
  return (
    <div className="py-10 border-y border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">Trusted by industry leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, idx) => (
            <div key={idx} className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <div className="w-6 h-6 bg-slate-300 rounded-full"></div>
                {logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ValueProp = () => {
  const features = [
    { title: "Lead Qualification", icon: <CheckCircle2 className="text-green-500" /> },
    { title: "Instant Reactivation", icon: <Zap className="text-yellow-500" /> },
    { title: "Autopilot Booking", icon: <Clock className="text-blue-500" /> },
    { title: "24/7 Response", icon: <MessageSquare className="text-purple-500" /> }
  ];

  return (
    <Section className="bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            An AI Sales Assistant Who Costs <span className="text-indigo-600">10x Less</span> & Never Gives Up
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Exabloom's AI engages leads instantly, nurtures them through intelligent conversation, and books meetings directly into your calendar. No sick days, no training required.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-md transition-all">
                {f.icon}
                <span className="font-semibold text-slate-800">{f.title}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <Button variant="primary">See How It Works</Button>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
            <div className="relative border-8 border-slate-900 rounded-[3rem] h-[600px] w-[320px] bg-slate-800 shadow-2xl overflow-hidden">
                <div className="absolute top-0 w-full h-8 bg-slate-900 flex justify-center z-20">
                    <div className="w-32 h-6 bg-black rounded-b-2xl"></div>
                </div>
                {/* Chat Screen */}
                <div className="bg-slate-900 h-full w-full pt-12 px-4 pb-4 flex flex-col">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                        <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">AI</div>
                        <div>
                            <div className="text-white font-semibold">Sales Assistant</div>
                            <div className="text-green-400 text-xs">Online</div>
                        </div>
                    </div>
                    <div className="flex-1 space-y-4 overflow-hidden">
                        <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none text-slate-200 text-sm">
                            Hi John! I noticed you were looking at our pricing page. Do you have any questions?
                        </div>
                        <div className="self-end bg-indigo-600 p-3 rounded-2xl rounded-tr-none text-white text-sm ml-auto w-fit">
                            Is there a discount for annual billing?
                        </div>
                        <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none text-slate-200 text-sm">
                            Yes! You get 2 months free with annual billing. Would you like me to send the updated quote?
                        </div>
                        <div className="self-end bg-indigo-600 p-3 rounded-2xl rounded-tr-none text-white text-sm ml-auto w-fit">
                            That sounds great. Let's do it.
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

const Comparison = () => {
    return (
        <Section className="bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Closing Sales is Getting Harder Than Ever</h2>
                    <p className="text-slate-600">Manual follow-ups are slow, expensive, and inconsistent. See the difference automation makes.</p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                    <div className="grid md:grid-cols-2">
                        {/* Old Way */}
                        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100 bg-slate-50/50">
                            <h3 className="text-xl font-bold text-slate-500 mb-6 flex items-center gap-2">
                                <X className="text-red-500" /> Traditional Process
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-slate-600">
                                    <span className="w-2 h-2 mt-2 bg-red-400 rounded-full flex-shrink-0"></span>
                                    <span>Delayed responses lose 70% of leads.</span>
                                </li>
                                <li className="flex gap-3 text-slate-600">
                                    <span className="w-2 h-2 mt-2 bg-red-400 rounded-full flex-shrink-0"></span>
                                    <span>Hiring & training staff is costly & slow.</span>
                                </li>
                                <li className="flex gap-3 text-slate-600">
                                    <span className="w-2 h-2 mt-2 bg-red-400 rounded-full flex-shrink-0"></span>
                                    <span>Reps give up after 1-2 follow-ups.</span>
                                </li>
                                <li className="flex gap-3 text-slate-600">
                                    <span className="w-2 h-2 mt-2 bg-red-400 rounded-full flex-shrink-0"></span>
                                    <span>Inconsistent messaging across channels.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Exabloom Way */}
                        <div className="p-8 md:p-12 bg-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
                            <h3 className="text-xl font-bold text-indigo-900 mb-6 flex items-center gap-2">
                                <CheckCircle2 className="text-green-500" /> Exabloom AI
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-slate-700 font-medium">
                                    <CheckCircle2 size={18} className="text-indigo-500 mt-1 flex-shrink-0" />
                                    <span>Instant response 24/7/365.</span>
                                </li>
                                <li className="flex gap-3 text-slate-700 font-medium">
                                    <CheckCircle2 size={18} className="text-indigo-500 mt-1 flex-shrink-0" />
                                    <span>Pre-trained AI, ready on Day 1.</span>
                                </li>
                                <li className="flex gap-3 text-slate-700 font-medium">
                                    <CheckCircle2 size={18} className="text-indigo-500 mt-1 flex-shrink-0" />
                                    <span>Infinite follow-ups until conversion.</span>
                                </li>
                                <li className="flex gap-3 text-slate-700 font-medium">
                                    <CheckCircle2 size={18} className="text-indigo-500 mt-1 flex-shrink-0" />
                                    <span>Seamless CRM Integration.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

const Features = () => {
    const cards = [
        {
            title: "Guaranteed Results",
            desc: "We're confident in our transformation. See a significant increase in qualified leads.",
            icon: <BarChart3 className="text-white" size={24} />,
            color: "bg-blue-500"
        },
        {
            title: "No Training Required",
            desc: "Effortless setup. Our AI comes pre-trained on your industry data.",
            icon: <Zap className="text-white" size={24} />,
            color: "bg-purple-500"
        },
        {
            title: "90% Cheaper than Staff",
            desc: "Never worry about staff turnover, holidays, or missed opportunities.",
            icon: <Smartphone className="text-white" size={24} />,
            color: "bg-pink-500"
        },
        {
            title: "Integrates Everywhere",
            desc: "Connects effortlessly with your existing CRM and communication tools.",
            icon: <MessageSquare className="text-white" size={24} />,
            color: "bg-indigo-500"
        }
    ];

    return (
        <Section className="bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Exabloom AI Sales Assistant <span className="text-indigo-600">Advantage</span></h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, i) => (
                        <div key={i} className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                                {card.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

const Security = () => {
    return (
        <Section className="bg-[#1e1b4b] text-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Manage and monitor in one secure place</h2>
                <p className="text-indigo-200 mb-12">We ensure security and compliance. PDPA compliant and CREST certified.</p>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "CREST Security Certified", icon: <ShieldCheck size={32} /> },
                        { title: "No Training on Data", icon: <BarChart3 size={32} /> },
                        { title: "Secure Encryption (AES-256)", icon: <Zap size={32} /> }
                    ].map((item, i) => (
                        <div key={i} className="bg-indigo-900/50 backdrop-blur-sm p-8 rounded-2xl border border-indigo-800">
                            <div className="w-16 h-16 mx-auto bg-indigo-800 rounded-full flex items-center justify-center mb-4 text-indigo-300">
                                {item.icon}
                            </div>
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

const Testimonials = () => {
    const reviews = [
        { name: "Jack Wang", role: "CEO, Happy Tutors", text: "Before Exabloom, I was struggling to convert leads. Now I have a 30% increase in revenue within the first month.", image: "https://i.pravatar.cc/150?u=a" },
        { name: "Dr. Robin", role: "Founder, Dental Clinic", text: "I've tried several tools, but none compare. The results are remarkable. It revived leads I had given up on.", image: "https://i.pravatar.cc/150?u=b" },
        { name: "Carolyn Kan", role: "Founder, Carrie K.", text: "Handling leads was a major pain point. Exabloom came in and changed everything. It's intuitive and delivers consistent results.", image: "https://i.pravatar.cc/150?u=c" }
    ];

    return (
        <Section className="bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <Badge>Real People, Real Results</Badge>
                    <h2 className="text-4xl font-bold text-slate-900 mt-4">How Our Customers Transformed Their Businesses</h2>
                    <div className="flex justify-center items-center gap-2 mt-4">
                        <div className="flex text-yellow-400"><Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/></div>
                        <span className="text-slate-600 font-medium">5.0 Top Rated Service</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4 mb-6">
                                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-bold text-slate-900">{review.name}</h4>
                                    <p className="text-xs text-slate-500 uppercase">{review.role}</p>
                                </div>
                            </div>
                            <div className="flex text-yellow-400 mb-4"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/></div>
                            <p className="text-slate-600 italic leading-relaxed">"{review.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const questions = [
        "What services do you offer?",
        "How long does it take to complete a project?",
        "Can you help improve an existing website?",
        "Do you offer ongoing support?",
        "How much will my project cost?"
    ];

    return (
        <Section className="bg-white">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Frequently Asked <span className="text-indigo-600">Questions</span></h2>
                <div className="space-y-4">
                    {questions.map((q, i) => (
                        <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                            <button 
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex justify-between items-center p-5 bg-white hover:bg-slate-50 transition-colors text-left"
                            >
                                <span className="font-semibold text-slate-800">{q}</span>
                                {openIndex === i ? <ChevronUp className="text-indigo-600" /> : <ChevronDown className="text-slate-400" />}
                            </button>
                            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="p-5 pt-0 text-slate-600 bg-slate-50/50 border-t border-slate-100">
                                    Our AI solution is designed to integrate seamlessly into your workflow within days, providing instant ROI. Contact us for specific details tailored to your needs.
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-[#0f0e24] text-slate-400 py-16 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">E</div>
                        <span className="font-bold text-2xl text-white">Exabloom</span>
                    </div>
                    <p className="text-sm leading-relaxed">
                        Join hundreds of businesses converting 49% more qualified leads and seeing 3X increase in conversions.
                    </p>
                </div>
                
                <div>
                    <h4 className="text-white font-bold mb-6">Company</h4>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:text-white transition-colors">Case Study</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Book a Free Trial</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-white font-bold mb-6">Resources</h4>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Docs</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-white font-bold mb-6">Social Media</h4>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors text-white">
                            <span className="font-bold">in</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center">
                <p>&copy; 2024 Exabloom - All Rights Reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">Terms & Conditions</a>
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

// --- Main App Component ---

const ExabloomLanding = () => {
  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <Hero />
      <Logos />
      <ValueProp />
      <Comparison />
      <Features />
      <Security />
      <Testimonials />
      <FAQ />
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a href="#" className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer">
        <MessageSquare size={24} fill="white" />
      </a>
    </div>
  );
};

export default ExabloomLanding;