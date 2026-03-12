import { Link } from 'react-router-dom';
import { MessageSquare, FileText, Phone, ArrowRight, Briefcase, Heart, ChevronRight, Globe, Clock, Upload, Shield, Brain, Sparkles } from 'lucide-react';

// Reusable benefit card components
const AgentCard = ({ title, body }: { title: string; body: string }) => (
  <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
        <Briefcase className="h-4 w-4 text-[#0F2745]" />
      </div>
      <span className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider">For You</span>
    </div>
    <p className="text-sm font-semibold text-slate-800 mb-1">{title}</p>
    <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
  </div>
);

const ClientCard = ({ title, body }: { title: string; body: string }) => (
  <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
        <Heart className="h-4 w-4 text-amber-600" />
      </div>
      <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">For Clients</span>
    </div>
    <p className="text-sm font-semibold text-slate-800 mb-1">{title}</p>
    <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
  </div>
);

const StepIcon = ({ icon: Icon, label, showLine = true }: { icon: React.ElementType; label: string; showLine?: boolean }) => (
  <div className="flex flex-col items-center">
    <div className="w-14 h-14 rounded-full bg-[#0F2745] flex items-center justify-center shadow-lg ring-4 ring-[#0F2745]/10">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <p className="text-xs font-bold text-[#0F2745] mt-3 text-center">{label}</p>
    {showLine && <div className="hidden md:block w-px h-8 bg-slate-200 mt-3" />}
  </div>
);

const Benefits = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Better for You. Better for Clients.
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            When your intake runs smarter, everyone wins. You reclaim your time and walk into every
            consultation prepared. Your clients get the responsive, professional experience they
            deserve — from the very first interaction.
          </p>
        </div>
      </section>

      {/* ── The Journey ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">The Intake Journey</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Follow a client from first contact to first consultation — and see how every step creates value for both sides.
            </p>
          </div>

          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-8 md:gap-y-0">

            {/* Step 1: Client Reaches Out */}
            <div className="flex md:justify-end">
              <AgentCard
                title="Never miss a new prospect"
                body="Intake runs 24/7 — nights, weekends, holidays. Every prospect is captured the moment they reach out. No more lost leads to voicemail or after-hours gaps."
              />
            </div>
            <StepIcon icon={Phone} label="Client Reaches Out" />
            <div className="flex md:justify-start">
              <ClientCard
                title="Get help the moment you need coverage"
                body="No voicemail, no waiting until Monday. Reach out at 9pm after closing on your new home and get an immediate, professional response. Your coverage journey starts on your schedule."
              />
            </div>

            {/* Step 2: AI Conversation */}
            <div className="flex md:justify-end">
              <AgentCard
                title="Every detail captured automatically"
                body="Structured intake with all the facts you need — no scribbled notes, no missed details, no 15-minute fact-finding calls. Every answer organized and ready for review."
              />
            </div>
            <StepIcon icon={MessageSquare} label="AI Conversation" />
            <div className="flex md:justify-start">
              <ClientCard
                title="Explain your situation once — conversationally"
                body="No intimidating forms. A warm, helpful conversation that feels like talking to a real person — in English or Spanish. Share your coverage needs at your own pace."
              />
            </div>

            {/* Step 3: Agent Reviews */}
            <div className="flex md:justify-end">
              <AgentCard
                title="Walk into every consultation fully prepared"
                body="AI-generated coverage brief with gap analysis, bundling opportunities, and cross-sell flags — before you ever pick up the phone. Know the client, the risks, and the right questions."
              />
            </div>
            <StepIcon icon={FileText} label="Agent Reviews" />
            <div className="flex md:justify-start">
              <ClientCard
                title="Your agent already understands your coverage needs"
                body="No repeating yourself. No starting from zero. Your first real conversation starts where it should — with quotes, options, and recommendations."
              />
            </div>

            {/* Step 4: First Consultation */}
            <div className="flex md:justify-end">
              <AgentCard
                title="More time for what matters"
                body="Spend your time on coverage recommendations and relationship building — not copying intake notes from voicemail or chasing down basic policy details. Focus on serving your clients."
              />
            </div>
            <StepIcon icon={ChevronRight} label="First Consultation" showLine={false} />
            <div className="flex md:justify-start">
              <ClientCard
                title="A faster path to the right coverage"
                body="From 'I need insurance' to a prepared consultation — faster than you thought possible. The experience of a large agency with the personal touch of an independent agent."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Additional Benefits ── */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">Every Feature, Two Winners</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Beyond the intake journey, every capability in SoloInsureAI creates a ripple effect — making your agency more efficient and your clients' experience more professional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Bilingual */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Globe className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">Bilingual Intake</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">For You</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Serve Spanish-speaking clients without hiring bilingual staff or paying for translation services.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">For Clients</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Communicate in the language you're most comfortable in — from the very first interaction.</p>
                </div>
              </div>
            </div>

            {/* Phone Intake */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">AI Phone Intake</h3>
                <span className="text-[10px] font-semibold text-[#0F2745] bg-[#0F2745]/8 px-2 py-0.5 rounded-full uppercase tracking-wide">Pro+</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">For You</p>
                  <p className="text-sm text-slate-500 leading-relaxed">A dedicated phone line that handles intake calls 24/7. Same structured summary, zero phone tag.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">For Clients</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Prefer talking over typing? Call anytime and speak naturally — no hold music, no phone trees.</p>
                </div>
              </div>
            </div>

            {/* Document Intelligence */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Upload className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">Document Intelligence</h3>
                <span className="text-[10px] font-semibold text-[#0F2745] bg-[#0F2745]/8 px-2 py-0.5 rounded-full uppercase tracking-wide">Pro+</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">For You</p>
                  <p className="text-sm text-slate-500 leading-relaxed">AI analyzes uploaded declarations pages, policy summaries, and claims reports — extracting key details and coverage gaps before you review.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">For Clients</p>
                  <p className="text-sm text-slate-500 leading-relaxed">A simple, secure way to share what's needed. Clear checklist, encrypted upload, no confusion.</p>
                </div>
              </div>
            </div>

            {/* Triage & Urgency */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">Triage & Urgency Detection</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">For You</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Color-coded aging, coverage urgency flags, and life event alerts so you prioritize what matters most.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">For Clients</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Time-sensitive needs get flagged and fast-tracked. Your closing deadline or coverage lapse gets the attention it deserves.</p>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">Privacy & Security</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">For You</p>
                  <p className="text-sm text-slate-500 leading-relaxed">End-to-end encryption, industry-standard data protection, and 30-day document retention with deletion rights.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">For Clients</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Your information is protected from the start. No human sees your data — fully automated, fully encrypted.</p>
                </div>
              </div>
            </div>

            {/* Website Widget */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">Website Widget</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">For You</p>
                  <p className="text-sm text-slate-500 leading-relaxed">One line of code embeds intake directly on your WordPress or any website. Capture leads where they already are.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">For Clients</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Start your intake without leaving your agent's website. No new tabs, no separate portals, no friction.</p>
                </div>
              </div>
            </div>

            {/* AI Intelligence Brief */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Brain className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">AI Intelligence Brief</h3>
                <span className="text-[10px] font-semibold text-[#0F2745] bg-[#0F2745]/8 px-2 py-0.5 rounded-full uppercase tracking-wide">Pro+</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">For You</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Every intake generates a deep-dive analysis — coverage gap flags, bundling opportunities, life event implications, and the follow-up questions that matter most.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">For Clients</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Your agent spots potential gaps across all your policies — not just the one you called about. Nothing falls through the cracks.</p>
                </div>
              </div>
            </div>

            {/* Marketing Kit */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">Marketing Kit</h3>
                <span className="text-[10px] font-semibold text-[#0F2745] bg-[#0F2745]/8 px-2 py-0.5 rounded-full uppercase tracking-wide">Pro</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">For You</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Generate branded social posts and visual cards for Facebook, Instagram, LinkedIn, and Nextdoor in seconds — no designer, no copywriter needed.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">For Clients</p>
                  <p className="text-sm text-slate-500 leading-relaxed">Find your agent where you already browse — on social media, local directories, and community boards. One click starts your intake.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Bottom Line ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            The Real Difference
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Solo insurance agents don't have CSRs handling phones, intake coordinators, or 24/7 call centers.
            Your clients don't know that — and with SoloInsureAI, they'll never need to. Every interaction
            feels like a large agency with the personal attention only an independent agent can provide.
          </p>
          <p className="text-sm text-slate-400 mb-10">
            Great client relationships start before the first consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/#waitlist"
              className="bg-[#0F2745] text-white px-8 py-3.5 rounded-md text-sm font-semibold hover:bg-[#0C2038] transition inline-flex items-center gap-2"
            >
              Join the Waitlist
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/features"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition"
            >
              See all features →
            </Link>
          </div>
          <p className="mt-3 text-xs text-slate-400">14-day free trial · Cancel anytime</p>
        </div>
      </section>
    </>
  );
};

export default Benefits;
