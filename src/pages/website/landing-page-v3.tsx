import React from "react";
import {
  MessageCircle,
  User,
  Shield,
  Check,
  ArrowRight,
  GraduationCap,
  Stethoscope,
  Dumbbell,
  Home,
  Users,
  Briefcase,
  Lock,
  Award,
  Sparkles,
  Star,
  Quote,
  MoreVertical,
  Phone,
  Video,
  Mic,
  Paperclip,
  CheckCheck,
  Clock,
  Zap,
  CheckCircle2,
  TrendingUp,
  AlertCircle,
  Ghost,
  Search,
  BrainCircuit,
} from "lucide-react";
import male1 from "../../assets/human-face/male-1.png";
import male2 from "../../assets/human-face/male-2.png";
import male3 from "../../assets/human-face/male-3.png";

// --- Reusable Components (Light Theme) ---

const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="text-center max-w-3xl mx-auto mb-16">
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
      {title}
    </h2>
    {subtitle && <p className="text-lg text-slate-600">{subtitle}</p>}
  </div>
);

// --- Navbar (Light) ---
const Navbar = () => (
  <nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-tr from-violet-600 to-fuchsia-600 rounded-lg flex items-center justify-center text-white font-bold shadow-md shadow-violet-200">
          <Sparkles className="w-4 h-4" />
        </div>
        <span className="self-center text-xl font-bold whitespace-nowrap text-slate-900 tracking-tight">
          Exabloom
        </span>
      </div>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button className="text-slate-600 hover:text-violet-600 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-4 transition-colors">
          Login
        </button>
        <button className="text-white bg-violet-600 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  </nav>
);

// --- Hero Section (Light Mode + WhatsApp Light UI) ---
const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white overflow-hidden">
      {/* Background Gradients (Subtle for Light Mode) */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet-100/50 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-fuchsia-100/40 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-sm shadow-sm hover:border-violet-200 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600"></span>
            </span>
            Trusted by 500+ Singapore SMBs
          </div>

          <h1 className="text-5xl md:text-6xl/tight font-extrabold text-slate-900 tracking-tight">
            The AI Admin That Speaks{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600">
              Singlish
            </span>{" "}
            & Closes Sales <span className="text-orange-500">24/7</span>.
          </h1>

          <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
            Automate WhatsApp appointments, answer FAQs, and qualify leads
            instantly. Trusted by Singapore's top Tuition Centres, Clinics, and
            Gyms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group inline-flex justify-center items-center py-4 px-8 text-base font-bold text-white rounded-xl bg-violet-600 hover:bg-violet-700 transition-all shadow-lg shadow-violet-200 hover:shadow-xl hover:shadow-violet-300 hover:-translate-y-1">
              <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Test the Singlish Demo
            </button>
            <button className="inline-flex justify-center items-center py-4 px-8 text-base font-semibold text-slate-700 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-all shadow-sm hover:border-slate-300">
              Check Grant Eligibility
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-wrap gap-6 text-xs font-medium text-slate-500 uppercase tracking-wider">
            <span className="flex items-center gap-1">
              <Check className="w-3 h-3 text-violet-600" /> No Code Required
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-3 h-3 text-violet-600" /> PDPA Secure
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-3 h-3 text-violet-600" /> Setup in 24 Hours
            </span>
          </div>
        </div>

        {/* Right Content: WhatsApp Mockup (Light Mode) */}
        <div className="relative lg:h-[650px] w-full flex items-center justify-center perspective-1000">
          {/* Soft Shadow behind phone */}
          <div className="absolute w-[300px] h-[500px] bg-violet-200/50 blur-[60px] rounded-full top-20"></div>

          {/* Phone Frame */}
          <div className="relative w-[340px] h-[640px] bg-white border-[8px] border-slate-900 rounded-[3rem] shadow-2xl overflow-hidden ring-1 ring-slate-900/5 rotate-y-12 transform transition-transform hover:rotate-0 duration-700 ease-out">
            {/* WHATSAPP LIGHT HEADER (Classic Green) */}
            <div className="bg-[#008069] px-4 py-3 pt-10 flex items-center gap-3 shadow-md z-20 relative text-white">
              <div className="w-6">
                <ArrowRight className="rotate-180 w-5 h-5" />
              </div>
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-xs text-[#008069] font-bold shrink-0">
                EB
              </div>
              <div className="flex-1">
                <div className="text-white text-sm font-semibold leading-none mb-1">
                  Exabloom AI
                </div>
                <div className="text-emerald-100 text-[11px]">
                  Business Account
                </div>
              </div>
              <div className="flex gap-4">
                <Video className="w-5 h-5" />
                <Phone className="w-5 h-5" />
                <MoreVertical className="w-5 h-5" />
              </div>
            </div>

            {/* WHATSAPP LIGHT CHAT AREA */}
            <div className="relative h-full bg-[#EFEAE2] p-4 pt-4 space-y-3 font-sans text-[13px] pb-24">
              {/* Doodle Background Pattern */}
              <div className="absolute inset-0 opacity-[0.4] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat z-0 pointer-events-none mix-blend-multiply"></div>

              {/* Timestamp */}
              <div className="flex justify-center mb-4 relative z-10">
                <span className="bg-white/90 shadow-sm text-slate-500 px-3 py-1 rounded-lg text-[10px] uppercase">
                  Today
                </span>
              </div>

              {/* AI Message (White Bubble) */}
              <div className="flex justify-start relative z-10">
                <div className="bg-white text-slate-900 px-3 py-1.5 rounded-lg rounded-tl-none max-w-[85%] shadow-sm relative">
                  <span className="block mb-1 font-medium text-slate-900">
                    Welcome to Tuition Centre SG! 👋
                  </span>
                  How can I help you today?
                  <span className="text-slate-400 text-[10px] float-right mt-2 ml-2">
                    10:23 AM
                  </span>
                </div>
              </div>

              {/* User Message (Light Green Bubble) */}
              <div className="flex justify-end relative z-10">
                <div className="bg-[#d9fdd3] text-slate-900 px-3 py-1.5 rounded-lg rounded-tr-none max-w-[85%] shadow-sm">
                  Hi cher, I looking for P6 Math tuition. Still got slot?
                  <div className="flex items-end justify-end gap-1 mt-1">
                    <span className="text-slate-500 text-[10px]">10:24 AM</span>
                    <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
                  </div>
                </div>
              </div>

              {/* AI Message */}
              <div className="flex justify-start relative z-10">
                <div className="bg-white text-slate-900 px-3 py-1.5 rounded-lg rounded-tl-none max-w-[85%] shadow-sm">
                  Got got! Saturday 10am still have 2 slots left.
                  <br />
                  <br />
                  You want to book a trial class ($50) or sign up for the full
                  term package (10% off)?
                  <span className="text-slate-400 text-[10px] float-right mt-2 ml-2">
                    10:24 AM
                  </span>
                </div>
              </div>

              {/* Suggestion Chips */}
              <div className="flex gap-2 flex-wrap pt-2 relative z-10">
                <button className="px-3 py-1.5 bg-white border border-slate-200 text-[#008069] text-xs rounded-full font-medium shadow-sm hover:bg-slate-50">
                  Book Trial Class
                </button>
                <button className="px-3 py-1.5 bg-white border border-slate-200 text-[#008069] text-xs rounded-full font-medium shadow-sm hover:bg-slate-50">
                  See Package Rates
                </button>
              </div>
            </div>

            {/* WHATSAPP LIGHT INPUT */}
            <div className="absolute bottom-0 w-full bg-[#F0F2F5] px-2 py-2 flex items-center gap-2 z-20 pb-6 border-t border-slate-200">
              <div className="text-slate-500 p-1">
                <span className="text-xl">+</span>
              </div>
              <div className="bg-white flex-1 rounded-lg h-9 px-3 flex items-center text-slate-400 text-sm justify-between shadow-sm">
                <span>Message</span>
                <Paperclip className="w-4 h-4 opacity-50" />
              </div>
              <div className="w-9 h-9 bg-[#008069] rounded-full flex items-center justify-center shadow-sm">
                <Mic className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Floating Revenue Card */}
          <div className="absolute top-1/2 -right-4 lg:-right-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-2xl animate-bounce duration-[3000ms] border border-white/50">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 p-2 rounded-full">
                <Check className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">
                  Revenue Secured
                </p>
                <p className="text-sm font-bold text-slate-900">$2,450 Today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Logo Ticker (Light) ---
const LogoTicker = () => {
  const brands = [
    "Math Mastery Tuition",
    "Smile Dental SG",
    "FitLion Gym",
    "PropNex Agents Group",
    "MindChamps (Franchise)",
    "The Learning Lab",
    "Healthway Medical",
    "Anytime Fitness (CBD)",
    "ERA Realty Team",
  ];

  return (
    <section className="py-10 bg-white border-y border-slate-100 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Powering Singapore's Fastest Growing Brands
        </p>
      </div>
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
      <div className="flex overflow-hidden group">
        <div className="flex space-x-16 animate-scroll whitespace-nowrap py-2">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-default"
            >
              <div className="w-6 h-6 bg-slate-200 rounded-sm"></div>
              <span className="text-xl font-bold text-slate-600">{brand}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
        .animate-scroll { animation: scroll 40s linear infinite; }
      `}</style>
    </section>
  );
};

// --- Feature Cards (Light) ---
const FeatureCard = ({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) => (
  <div className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
      <Icon className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

const Industries = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader
        title="Built for High-Volume Singapore Businesses"
        subtitle="From tuition centres to enterprise - our AI adapts to your industry's unique needs."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          icon={GraduationCap}
          title="Tuition & Education"
          desc="Never miss a parent enquiry. Handle trial bookings and schedule changes automatically."
        />
        <FeatureCard
          icon={Stethoscope}
          title="Medical & Dental"
          desc="Fill every appointment slot. Remind patients and handle rescheduling on autopilot."
        />
        <FeatureCard
          icon={Dumbbell}
          title="Gyms & Wellness"
          desc="Manage waitlists instantly. Answer membership questions while you sleep."
        />
        <FeatureCard
          icon={Home}
          title="Real Estate & Auto"
          desc="Qualify buyers before you call. Filter serious leads from window shoppers."
        />
        <FeatureCard
          icon={Users}
          title="MICE & Events"
          desc="Handle 5,000 attendee questions without hiring temporary staff."
        />
        <FeatureCard
          icon={Briefcase}
          title="Finance & Enterprise"
          desc="Bank-grade security & compliance. Automate routine client servicing."
        />
      </div>
    </div>
  </section>
);

const GlassCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-white rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden relative ${className}`}
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 opacity-20"></div>
    {children}
  </div>
);

const SmartInboxSimulation = () => {
  const ResolvedRow = ({
    initial,
    name,
    msg,
  }: {
    initial: string;
    name: string;
    msg: string;
  }) => (
    <div className="p-3 md:p-4 rounded-xl border border-slate-100 bg-slate-50 flex items-center gap-3 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0">
        {initial}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-0.5">
          <span className="text-xs font-bold text-slate-700">{name}</span>
          <span className="text-[10px] text-slate-400">Just Now</span>
        </div>
        <div className="text-[11px] text-slate-600 truncate">{msg}</div>
      </div>
      <div className="shrink-0 hidden sm:block">
        <span className="flex items-center gap-1 text-emerald-600 text-[10px] font-medium bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">
          <Check className="w-3 h-3" /> Resolved
        </span>
      </div>
      <div className="shrink-0 sm:hidden">
        <Check className="w-4 h-4 text-emerald-500" />
      </div>
    </div>
  );

  return (
    // Changed height to be responsive (shorter on mobile)
    <GlassCard className="p-0 overflow-hidden h-[380px] md:h-[450px] flex flex-col w-full">
      <div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500 absolute top-0 animate-ping"></div>
          </div>
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
            Inbox
          </span>
        </div>
        <div className="text-[10px] font-medium text-slate-500 bg-white px-2 py-1 rounded border border-slate-200 shadow-sm">
          3 Auto-Resolved • 1 Action
        </div>
      </div>

      {/* Added more padding (p-4) to ensure shadows inside don't get clipped */}
      <div className="p-4 space-y-3 flex-1 overflow-y-auto flex flex-col justify-center">
        <ResolvedRow initial="JD" name="John Doe" msg="How much for P6 Math?" />
        <ResolvedRow
          initial="AL"
          name="Alice Lim"
          msg="Where is your location?"
        />
        <ResolvedRow initial="BT" name="Bob Tan" msg="Can reschedule to 5pm?" />

        {/* Active Card */}
        <div className="relative group mt-2 mx-1">
          <div className="bg-white p-4 md:p-5 rounded-xl border border-orange-200 ring-2 ring-orange-500 shadow-lg flex items-center gap-3 z-10 scale-[1.00] md:scale-[1.02] animate-glow-pulse">
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-xs font-bold text-orange-600 shrink-0 border border-orange-100">
              SK
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-bold text-slate-900">
                  Sarah Koh
                </span>
                <span className="text-[10px] text-slate-400">Just Now</span>
              </div>
              <div className="text-xs text-slate-600 font-medium truncate">
                I want to sign up for 3 kids. Group discount?
              </div>
            </div>
            <div className="shrink-0">
              {/* Mobile optimized badge */}
              <span className="hidden sm:flex items-center gap-1 text-orange-600 text-[10px] font-bold bg-orange-50 px-3 py-1.5 rounded-full border border-orange-200 shadow-sm">
                <AlertCircle className="w-3 h-3" /> ACTION NEEDED
              </span>
              <AlertCircle className="w-5 h-5 text-orange-500 sm:hidden" />
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 10px 15px -3px rgba(249, 115, 22, 0.1), 0 4px 6px -2px rgba(249, 115, 22, 0.05); border-color: rgba(249, 115, 22, 1); }
          50% { box-shadow: 0 20px 25px -5px rgba(249, 115, 22, 0.25), 0 8px 10px -6px rgba(249, 115, 22, 0.1); border-color: rgba(249, 115, 22, 0.6); }
        }
        .animate-glow-pulse { animation: glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>
    </GlassCard>
  );
};

export const StepSection = () => (
  <section className="py-32 bg-slate-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-24">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
          How Exabloom Turns{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
            Chats into Revenue
          </span>
        </h2>
        <p className="text-lg text-slate-600">
          Most chatbots just answer questions. Ours is a trained sales admin
          that works 24/7.
        </p>
      </div>

      <div className="space-y-32">
        {/* --- STEP 1: INTELLIGENT CAPTURE (FIXED CONNECTOR LINE) --- */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* LEFT: VISUALIZATION */}
          <div className="order-2 lg:order-1 relative flex justify-center lg:justify-end pr-0 lg:pr-12">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-violet-200/40 to-fuchsia-200/40 rounded-full blur-[80px] -z-10"></div>

            {/* The Composition Container - This is the relative parent for positioning */}
            <div className="relative w-full max-w-[500px] h-[520px] flex items-center justify-center">
              {/* --- FLOATING ELEMENT 1: ANALYSIS HUD (Positioned bottom-left of phone) --- */}
              <div className="absolute left-0 md:-left-8 bottom-12 z-40 animate-in slide-in-from-left duration-1000 w-[220px]">
                {/* The HUD Card */}
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl border-2 border-violet-100 shadow-[0_20px_50px_rgba(124,58,237,0.15)] p-4 relative">
                  <div className="absolute -top-3 -right-3 bg-violet-600 rounded-full p-1.5 shadow-lg shadow-violet-200">
                    <BrainCircuit className="w-4 h-4 text-white" />
                  </div>

                  <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-2">
                    <Sparkles className="w-3.5 h-3.5 text-violet-600" />
                    <span className="text-[10px] font-bold text-violet-700 uppercase tracking-wider">
                      Analysis Complete
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">Intent</span>
                      <span className="font-bold text-slate-900 bg-green-50 text-green-700 px-2 py-0.5 rounded border border-green-100">
                        Purchase 🔥
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">Product</span>
                      <span className="font-bold text-slate-900">P6 Math</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">Pain Point</span>
                      <span className="font-bold text-slate-900">
                        Weak in problem sum
                      </span>
                    </div>
                    <div className="mt-2 pt-2 border-t border-slate-50">
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-full w-[92%]"></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-[9px] text-slate-400">
                          Match Probability
                        </span>
                        <span className="text-[9px] font-bold text-violet-600">
                          92%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- SVG CONNECTOR LINE (Absolutely positioned to connect HUD to message) --- */}
              <svg
                className="absolute z-30 pointer-events-none hidden md:block"
                style={{
                  left: "180px", // Start from right edge of HUD card
                  bottom: "180px", // Align with middle of HUD card
                  width: "120px",
                  height: "140px",
                }}
                viewBox="0 0 120 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Curved path from HUD (bottom-left) to message bubble (top-right) */}
                <path
                  d="M 0 120 C 40 120, 60 60, 80 40 Q 100 20, 115 25"
                  stroke="#a78bfa"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  fill="none"
                />
                {/* End circle at the message */}
                <circle cx="115" cy="25" r="4" fill="#a78bfa" />
                {/* Start circle at the HUD */}
                <circle cx="0" cy="120" r="4" fill="#a78bfa" />
              </svg>

              {/* --- FLOATING ELEMENT 2: Hot Lead Badge (Top Right) --- */}
              <div className="absolute right-4 top-8 z-30 animate-bounce duration-[3000ms]">
                <div className="bg-white px-3 py-1.5 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 flex items-center gap-2 transform rotate-6">
                  <span className="text-lg">🔥</span>
                  <span className="text-[10px] font-bold text-slate-700">
                    Hot Lead Detected
                  </span>
                </div>
              </div>

              {/* --- FLOATING ELEMENT 3: Lead Score (Bottom Right) --- */}
              <div className="absolute right-0 bottom-32 z-30 animate-bounce duration-[4000ms] delay-700">
                <div className="bg-white px-3 py-2 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 flex items-center gap-2 transform -rotate-3">
                  <div className="bg-orange-100 p-1.5 rounded-md">
                    <TrendingUp className="w-3.5 h-3.5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-400 uppercase font-bold">
                      Lead Score
                    </div>
                    <div className="text-xs font-black text-slate-800">
                      High Priority
                    </div>
                  </div>
                </div>
              </div>

              {/* The Phone */}
              <div className="bg-white border-[6px] border-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden h-[480px] w-[280px] flex flex-col relative z-20 ring-1 ring-black/5 transform rotate-[-2deg]">
                {/* Header */}
                <div className="bg-[#008069] h-14 shrink-0 flex items-center px-4 gap-3 text-white shadow-sm">
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                    U
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] font-bold">Unknown Number</div>
                    <div className="text-[9px] opacity-80">+65 9123 4567</div>
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 bg-[#EFEAE2] p-3 flex flex-col relative">
                  {/* Doodle BG */}
                  <div className="absolute inset-0 opacity-[0.4] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat z-0 mix-blend-multiply"></div>

                  <div className="flex justify-center mb-4 relative z-10">
                    <span className="bg-white/80 backdrop-blur-[2px] px-2 py-0.5 rounded shadow-sm text-[9px] font-bold text-slate-500 uppercase">
                      Today
                    </span>
                  </div>

                  {/* User Message - Target for Connector */}
                  <div className="flex justify-start relative z-10 mb-4 group">
                    <div className="relative">
                      {/* Visual Anchor Point for connector line */}
                      <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-violet-500 rounded-full hidden md:block shadow-md border-2 border-white"></div>

                      <div className="bg-white px-3 py-2 rounded-lg rounded-tl-none shadow-sm text-[12px] leading-snug text-slate-800 max-w-[220px] border border-transparent group-hover:border-violet-200 transition-colors">
                        <span className="text-[9px] font-bold text-orange-500 block mb-0.5">
                          New Lead
                        </span>
                        Hi! I looking for P6 Math tuition for my son. He is
                        quite weak in problem sums.
                        <span className="text-[9px] text-slate-400 block text-right mt-1">
                          10:23 AM
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* AI Status - Bottom */}
                  <div className="mt-auto relative z-10 mb-2">
                    <div className="flex items-center gap-2 mb-2 ml-1">
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                      <span className="text-[9px] text-slate-500 font-medium italic">
                        AI is matching intent...
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-bold mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600"></span>
              </span>
              Step 1: The Hook
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              It doesn't just "Reply". <br />
              <span className="text-violet-600">It Profiles the Customer.</span>
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Exabloom reads between the lines. It instantly identifies
              high-intent leads, detecting the specific service they need
              (Singlish included).
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center mt-0.5 shrink-0">
                  <BrainCircuit className="w-3.5 h-3.5 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Sentiment Analysis
                  </h4>
                  <p className="text-sm text-slate-500 mt-0.5">
                    Detects urgency and frustration levels instantly.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center mt-0.5 shrink-0">
                  <Search className="w-3.5 h-3.5 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Product Matching
                  </h4>
                  <p className="text-sm text-slate-500 mt-0.5">
                    Maps vague queries like "maths help" to your exact
                    SKU/Package.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* --- STEP 2: FRICTIONLESS ACTION --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-bold mb-6">
              <Zap className="w-3 h-3" />
              Step 2: The Action
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Zero-Friction <br />
              <span className="text-teal-600">Calendar Sync.</span>
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Stop the "What time you free?" ping-pong. Exabloom checks your
              real-time availability and locks in the appointment directly
              within WhatsApp.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-500" />
                Syncs with Google Calendar & Outlook
              </li>
              <li className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-500" />
                Double-booking protection
              </li>
            </ul>
          </div>

          <div className="order-2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-teal-100 to-emerald-100 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

            {/* The Container - Split clearly into two */}
            <div className="grid grid-cols-2 gap-4 relative">
              {/* Visual Connector Arrow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-lg border border-slate-100">
                <ArrowRight className="w-5 h-5 text-teal-600 animate-pulse" />
              </div>

              {/* LEFT: Phone UI */}
              <div className="bg-white rounded-[2rem] border-[6px] border-slate-900 overflow-hidden shadow-xl h-[340px] relative">
                {/* WhatsApp Header */}
                <div className="bg-[#008069] h-12 flex items-center px-3 gap-2">
                  <ArrowRight className="w-4 h-4 text-white rotate-180" />
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-[8px] font-bold text-[#008069]">
                    EB
                  </div>
                  <div className="flex-1 text-white text-[10px] font-bold">
                    Exabloom AI
                  </div>
                  <Video className="w-3 h-3 text-white" />
                  <Phone className="w-3 h-3 text-white" />
                </div>
                {/* Chat Area */}
                <div className="bg-[#EFEAE2] h-full p-3 space-y-3">
                  <div className="bg-white p-2 rounded-lg rounded-tl-none shadow-sm text-[10px] text-slate-800 max-w-[90%]">
                    I checked the schedule. We have a slot on{" "}
                    <strong>Thursday at 3 PM</strong>.
                  </div>
                  <div className="bg-[#d9fdd3] p-2 rounded-lg rounded-tr-none shadow-sm text-[10px] text-slate-800 self-end ml-auto max-w-[80%]">
                    Okay, book that slot!
                  </div>
                  <div className="flex justify-center my-2">
                    <span className="text-[8px] font-bold text-slate-500 bg-slate-200/50 px-2 py-0.5 rounded-full">
                      Creating Booking...
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT: Desktop Calendar UI */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden h-[340px] flex flex-col relative -mt-6 mb-6 rotate-1">
                {/* Calendar Header */}
                <div className="h-8 border-b border-slate-100 flex items-center px-3 gap-2 bg-slate-50">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  </div>
                  <div className="text-[10px] text-slate-500 font-bold ml-2">
                    Google Calendar
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="flex-1 p-3 relative bg-white">
                  <div className="grid grid-cols-1 gap-6">
                    {/* 2 PM Slot */}
                    <div className="flex gap-2">
                      <span className="text-[9px] text-slate-400 w-6 pt-1">
                        2 PM
                      </span>
                      <div className="flex-1 h-12 border-t border-slate-100"></div>
                    </div>

                    {/* 3 PM Slot - THE HIGHLIGHT */}
                    <div className="flex gap-2 relative">
                      <span className="text-[9px] text-slate-900 font-bold w-6 pt-1">
                        3 PM
                      </span>
                      <div className="flex-1 h-14 border-t border-slate-100 relative">
                        <div className="absolute top-1 left-0 right-0 bg-blue-500 rounded px-2 py-1.5 shadow-md shadow-blue-200 border-l-4 border-blue-700 animate-in fade-in zoom-in duration-700">
                          <div className="text-[9px] font-bold text-white">
                            Trial Class: Math
                          </div>
                          <div className="text-[8px] text-blue-100 flex items-center gap-1 mt-0.5">
                            <div className="w-1 h-1 rounded-full bg-green-400"></div>{" "}
                            Confirmed
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4 PM Slot */}
                    <div className="flex gap-2">
                      <span className="text-[9px] text-slate-400 w-6 pt-1">
                        4 PM
                      </span>
                      <div className="flex-1 h-12 border-t border-slate-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- STEP 3: THE RESULT (UPDATED) --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Added px-2 and py-4 to wrapper to prevent glow clipping on mobile */}
          <div className="order-2 lg:order-1 relative group px-2 py-4 md:p-0">
            <div className="absolute -inset-4 bg-gradient-to-bl from-orange-100 to-amber-100 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <SmartInboxSimulation />
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold mb-6">
              <User className="w-3 h-3" />
              Step 3: The Result
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              It Filters the Noise. <br />
              <span className="text-orange-600">You Close the Deals.</span>
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Exabloom handles 90% of the repetitive "FAQ" work automatically.
              You only get notified when a high-value customer needs that final
              human touch to close the sale.
            </p>
            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex items-start gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">
                  Save 15+ Hours Per Week
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  Never answer "What are your opening hours?" again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Testimonials (Light) ---
const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Lim",
      role: "Centre Manager, Math A+ Academy",
      content:
        "I was skeptical if AI could handle 'Singlish'. But when I saw it reply 'Can, no problem!' to a parent, I was sold. It saves me 3 hours every night.",
      stars: 5,
      highlight: "Saves 3 hours/day",
      image: male1,
    },
    {
      name: "Dr. James Tan",
      role: "Owner, Orchard Dental",
      content:
        "The biggest issue was no-shows. Exabloom sends reminders and if a patient replies 'cannot make it', it automatically offers the next slot.",
      stars: 5,
      highlight: "Reduced no-shows by 40%",
      image: male2,
    },
    {
      name: "Derrick Ng",
      role: "Head Coach, Iron Fitness",
      content:
        "My staff used to hate replying to 'how much?' messages. Now Exabloom handles the FAQs and only passes ready-to-pay leads to us.",
      stars: 5,
      highlight: "2x Conversion Rate",
      image: male3,
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-100/50 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          title="Don't Just Take Our Word For It"
          subtitle="Join 500+ Singaporean businesses who switched to autopilot."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-orange-400 fill-orange-400"
                  />
                ))}
              </div>
              <div className="mb-6 relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-violet-100 fill-violet-100 z-0" />
                <p className="text-slate-600 relative z-10 leading-relaxed text-sm">
                  "{review.content}"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-violet-500/20"
                />
                <div>
                  <div className="font-bold text-slate-900 text-sm">
                    {review.name}
                  </div>
                  <div className="text-xs text-slate-500">{review.role}</div>
                </div>
              </div>
              <div className="mt-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                {review.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Helper: A Slimmer Phone Frame Component ---
const PhoneFrame = ({
  children,
  headerTitle,
  headerColor = "bg-[#008069]",
  status,
}: {
  children: React.ReactNode;
  headerTitle: string;
  headerColor?: string;
  status?: string;
}) => (
  <div className="relative mx-auto w-full max-w-[300px] bg-white border-[8px] border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden h-[600px] flex flex-col">
    {/* Notch/Top Bar */}
    <div
      className={`${headerColor} text-white px-4 py-3 pt-6 flex items-center gap-2 shadow-sm shrink-0 z-10`}
    >
      <div className="w-4">
        <ArrowRight className="rotate-180 w-4 h-4" />
      </div>
      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">
        {headerTitle.charAt(0)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[12px] font-bold leading-tight truncate">
          {headerTitle}
        </div>
        <div className="text-[9px] opacity-80 truncate">{status}</div>
      </div>
      <div className="flex gap-2 opacity-80 shrink-0">
        <Video className="w-4 h-4" />
        <Phone className="w-4 h-4" />
      </div>
    </div>
    {/* Screen Content */}
    <div className="flex-1 bg-[#EFEAE2] relative flex flex-col p-3 overflow-hidden font-sans">
      {/* WhatsApp Doodle BG Pattern opacity */}
      <div className="absolute inset-0 opacity-[0.4] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat z-0 pointer-events-none mix-blend-multiply"></div>
      <div className="relative z-10 flex flex-col h-full">{children}</div>
    </div>
  </div>
);

// --- Helper: Chat Bubble ---
const ChatBubble = ({
  text,
  time,
  isUser = false,
  isRead = false,
  color = "default",
}: {
  text: string;
  time: string;
  isUser?: boolean;
  isRead?: boolean;
  color?: "default" | "red" | "green";
}) => {
  let bgClass = "bg-white";
  if (isUser) bgClass = "bg-[#d9fdd3]";
  if (color === "red") bgClass = "bg-red-50 border border-red-100";

  return (
    <div
      className={`flex w-full mb-3 ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[85%] px-3 py-2 rounded-lg shadow-sm text-[12px] leading-snug text-slate-800 relative ${bgClass} ${
          isUser ? "rounded-tr-none" : "rounded-tl-none"
        }`}
      >
        {text}
        <div className="flex items-center justify-end gap-1 mt-1 opacity-60">
          <span className="text-[9px]">{time}</span>
          {isUser && (
            <CheckCheck
              className={`w-3 h-3 ${
                isRead ? "text-blue-500" : "text-slate-400"
              }`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const ComparisonSection = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
          The 5-Minute Rule
        </h2>
        <p className="text-lg text-slate-600">
          Customers buy from whoever replies first.{" "}
          <br className="hidden md:block" />
          See what happens when a lead messages you at 9 PM.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start max-w-5xl mx-auto">
        {/* --- LEFT: OLD WAY (The Ghosting) --- */}
        <div className="flex flex-col items-center">
          <div className="mb-6 flex flex-col items-center">
            <span className="text-red-500 font-bold text-sm tracking-wider uppercase mb-2">
              Your Competitor
            </span>
            <h3 className="text-2xl font-bold text-slate-900">Manual Reply</h3>
          </div>

          <PhoneFrame
            headerTitle="Competitor Tuition"
            status="last seen yesterday"
          >
            {/* 1. Customer asks */}
            <div className="flex justify-center mb-4">
              <span className="bg-white/60 px-2 py-0.5 rounded text-[10px] text-slate-500 font-medium shadow-sm">
                YESTERDAY
              </span>
            </div>
            <ChatBubble
              isUser
              text="Hi, do you have slots for P6 Math?"
              time="9:00 PM"
              isRead={false}
            />

            {/* THE PAINFUL DIVIDER (RE-DESIGNED FOR VISIBILITY) */}
            <div className="my-10 relative py-2 flex items-center justify-center animate-pulse">
              {/* The Dashed Line */}
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-dashed border-red-300"></div>
              </div>
              {/* The Badge */}
              <div className="relative z-10 bg-red-100 px-4 py-2 rounded-full border-2 border-white shadow-md flex flex-col items-center">
                <div className="flex items-center gap-1.5 text-red-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    12 Hours Later
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Admin replies too late */}
            <div className="flex justify-center mb-4">
              <span className="bg-white/60 px-2 py-0.5 rounded text-[10px] text-slate-500 font-medium shadow-sm">
                TODAY
              </span>
            </div>
            <ChatBubble text="Hi! Yes we do. Want to book?" time="9:05 AM" />

            {/* 3. The Ghosting */}
            <ChatBubble
              isUser
              text="Sorry, I already booked with another centre."
              time="9:10 AM"
              isRead={true}
            />

            {/* Stamp */}
            <div className="mt-auto mb-12 self-center rotate-[-12deg] border-[6px] border-red-500/30 px-6 py-3 rounded-2xl bg-red-50/90 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-red-600 font-black text-2xl uppercase">
                <Ghost className="w-8 h-8" /> Lead Lost
              </div>
            </div>
          </PhoneFrame>
        </div>

        {/* --- RIGHT: EXABLOOM WAY (The Win) --- */}
        <div className="flex flex-col items-center relative">
          {/* Recommended Badge - Repositioned for slimmer phone */}
          <div className="absolute top-1/2 -right-6 md:-right-8 lg:-right-10 translate-y-24 rotate-90 md:rotate-0 z-20">
            <div className="bg-violet-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-violet-200 animate-bounce whitespace-nowrap">
              Recommended
            </div>
          </div>

          <div className="mb-6 flex flex-col items-center">
            <span className="text-violet-600 font-bold text-sm tracking-wider uppercase mb-2">
              Exabloom AI
            </span>
            <h3 className="text-2xl font-bold text-slate-900">Instant Reply</h3>
          </div>

          <PhoneFrame
            headerTitle="Exabloom Centre"
            status="online"
            headerColor="bg-violet-600"
          >
            {/* 1. Customer asks */}
            <div className="flex justify-center mb-4">
              <span className="bg-white/60 px-2 py-0.5 rounded text-[10px] text-slate-500 font-medium shadow-sm">
                TODAY
              </span>
            </div>
            <ChatBubble
              isUser
              text="Hi, do you have slots for P6 Math?"
              time="9:00 PM"
              isRead={true}
            />

            {/* 2. AI INSTANTLY REPLIES */}
            <ChatBubble
              text="Yes! 👋 Saturday 10am is available. I can book it for you now?"
              time="9:00 PM"
            />

            {/* 3. Customer is happy */}
            <ChatBubble
              isUser
              text="Great! Can confirm."
              time="9:01 PM"
              isRead={true}
            />

            {/* 4. AI Closes */}
            <ChatBubble text="Done! See you Saturday. 🎉" time="9:01 PM" />

            {/* Stamp */}
            <div className="mt-auto mb-12 self-center rotate-[-12deg] border-[6px] border-emerald-500/30 px-6 py-3 rounded-2xl bg-emerald-50/90 backdrop-blur-sm shadow-xl">
              <div className="flex items-center gap-1 text-emerald-600 font-black text-2xl uppercase">
                <Check className="w-8 h-8" /> Sale Closed
              </div>
            </div>
          </PhoneFrame>
        </div>
      </div>
    </div>
  </section>
);

// --- Pricing (Light) ---
const PricingSection = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader title="Enterprise Power. SME Pricing." />
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Grant Card */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-green-100 hover:border-green-200 transition-all relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              PSG Grant / IMDA Pre-Approved
            </h3>
            <p className="text-slate-600 mb-6">
              Get up to{" "}
              <span className="font-bold text-green-600">
                50% funding support
              </span>
              . We handle the paperwork.
            </p>

            <ul className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <Check className="w-4 h-4 text-green-500" /> Pre-approved vendor
                - faster approval
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <Check className="w-4 h-4 text-green-500" /> We assist with
                grant application
              </li>
            </ul>
          </div>
        </div>

        {/* Security Card */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-violet-100 hover:border-violet-200 transition-all relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-violet-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center mb-6 text-violet-600">
              <Lock className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Bank-Grade Security
            </h3>
            <p className="text-slate-600 mb-6">
              Your data is protected with enterprise-level security standards.
            </p>

            <ul className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <Shield className="w-4 h-4 text-violet-600" /> PDPA Compliant
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <Shield className="w-4 h-4 text-violet-600" /> Official WhatsApp
                Business API
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FooterCTA = () => (
  <section className="py-24 bg-violet-600 relative overflow-hidden">
    <div className="absolute inset-0 bg-violet-800/20 pattern-dots"></div>
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-fuchsia-400/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-50%] right-[-20%] w-[800px] h-[800px] bg-indigo-400/20 rounded-full blur-[120px]"></div>
    </div>

    <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
        Your New Best Employee is Ready to Start.
      </h2>
      <p className="text-violet-100 text-lg mb-10">
        Join 500+ Singapore businesses automating their customer conversations.
      </p>

      <div className="flex flex-col items-center gap-4">
        <button className="py-4 px-10 bg-white text-violet-900 font-bold text-lg rounded-full hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1 flex items-center gap-2">
          Start Your Free Trial
          <ArrowRight className="w-5 h-5" />
        </button>
        <p className="text-violet-200 text-sm">
          No credit card required. Setup in minutes.
        </p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-50 py-12 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-gradient-to-tr from-violet-600 to-fuchsia-600 rounded flex items-center justify-center text-white text-xs font-bold">
          E
        </div>
        <span className="text-slate-600 font-semibold">Exabloom</span>
      </div>
      <div className="text-slate-500 text-sm">
        © 2024 Exabloom Pte Ltd. All rights reserved.
      </div>
    </div>
  </footer>
);

export default function ExabloomLandingPageV3() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white selection:bg-violet-100 selection:text-violet-900">
      <Navbar />
      <Hero />
      <LogoTicker />
      <Industries />
      <StepSection />
      <Testimonials />
      <ComparisonSection />
      <PricingSection />
      <FooterCTA />
      <Footer />
    </div>
  );
}
