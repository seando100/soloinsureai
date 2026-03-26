import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MessageSquare, FileText, Sparkles, Phone, Clock, UserX, ArrowRight, Check, Lock, Globe, Mail, Zap, Upload, Briefcase, Heart, ChevronRight, Brain } from 'lucide-react';

// ─── Hero Illustration ────────────────────────────────────────────────────────

const HeroIllustration = () => (
  <div className="relative" aria-hidden="true">
    {/* Main chat panel */}
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-slate-50">
      <div className="bg-[#0F2745] px-4 py-3 flex items-center gap-3">
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">SIG</span>
        </div>
        <div>
          <p className="text-white text-xs font-semibold leading-tight">Parker</p>
          <p className="text-white/75 text-[10px] leading-tight">Shield Insurance Group · Insurance Assistant</p>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="text-white/75 text-[10px]">Online</span>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3 bg-slate-50">
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">P</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[80%]">
            <p className="text-xs text-slate-700 leading-relaxed">Hi! I'm Parker with Shield Insurance Group. I'll help gather some details about your coverage needs — it only takes a few minutes.</p>
          </div>
        </div>
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">P</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[80%]">
            <p className="text-xs text-slate-700 leading-relaxed">What brings you in today?</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-[#0F2745] rounded-2xl rounded-br-sm px-3 py-2 max-w-[72%]">
            <p className="text-xs text-white leading-relaxed">We just bought a new home and I'm wondering about bundling our home and auto insurance. We're currently with State Farm.</p>
          </div>
        </div>
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">P</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[80%]">
            <p className="text-xs text-slate-700 leading-relaxed">Congratulations on the new home! Let's make sure you're fully covered. Can you tell me a bit about the property — single family, condo, or townhome?</p>
          </div>
        </div>
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">P</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2.5 shadow-sm border border-slate-100">
            <div className="flex gap-1 items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 py-3 bg-white border-t border-slate-100 flex items-center gap-2">
        <div className="flex-1 bg-slate-50 rounded-full px-4 py-2 border border-slate-200">
          <p className="text-[11px] text-slate-500">Type your response…</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#0F2745] flex items-center justify-center flex-shrink-0">
          <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z" /></svg>
        </div>
      </div>
    </div>

    {/* Floating notification card */}
    <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl border border-slate-200 p-3.5 w-64 ring-1 ring-slate-900/5">
      <div className="flex items-start gap-2.5">
        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Mail className="w-4 h-4 text-amber-600" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-slate-800 leading-tight">New inquiry received</p>
          <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">Maria Chen · Home + Auto Bundle · Current: State Farm</p>
          <div className="mt-2 bg-amber-50 border border-amber-100 rounded-md px-2 py-1">
            <p className="text-[10px] text-amber-800 leading-snug font-medium">AI: Coverage gap likely — no umbrella policy, rental property unlisted</p>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const Index = () => {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, vertical: 'SoloInsureAI' }),
      });
    } catch {}
    setSubmitted(true);
  };

  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1.5 rounded-full uppercase tracking-widest">
                  <Zap className="h-3 w-3" />
                  {t('index.badge')}
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#F59E0B] px-3 py-1.5 rounded-full uppercase tracking-widest">
                  {t('index.coming')}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
                {t('index.hero.title')}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                {t('index.hero.subtitle')}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="#waitlist"
                  className="bg-[#0F2745] text-white px-7 py-3.5 rounded-md text-sm font-medium hover:bg-[#0C2038] transition inline-flex items-center gap-2"
                >
                  {t('index.hero.cta')}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/features"
                  className="text-sm font-medium text-slate-500 hover:text-slate-900 transition"
                >
                  {t('index.hero.features')}
                </Link>
              </div>
              <p className="mt-3 text-xs text-slate-500">{t('index.hero.subtext')}</p>
            </div>
            <div className="relative lg:pl-8">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Trust bar ────────────────────────────────────────────────────── */}
      <section className="border-y border-slate-100 bg-slate-50/60 py-4">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { icon: Lock,         label: t('index.trust.encrypted')   },
              { icon: Globe,        label: t('index.trust.bilingual')   },
              { icon: Phone,        label: t('index.trust.channels')    },
              { icon: Mail,         label: t('index.trust.alerts')      },
              { icon: Zap,          label: t('index.trust.setup')       },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-slate-500">
                <Icon className="h-3.5 w-3.5 text-[#0F2745]/60 flex-shrink-0" />
                <span className="text-xs font-medium whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Pain section ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#0F2745]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">{t('index.pain.title')}</h2>
            <p className="text-lg text-white/75 max-w-2xl mx-auto">
              {t('index.pain.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: t('index.pain.1.title'),
                body: t('index.pain.1.body'),
              },
              {
                icon: Clock,
                title: t('index.pain.2.title'),
                body: t('index.pain.2.body'),
              },
              {
                icon: UserX,
                title: t('index.pain.3.title'),
                body: t('index.pain.3.body'),
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white/8 border border-white/10 rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-white/70" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/65 text-sm mt-10">
            {t('index.pain.footer')}
          </p>
        </div>
      </section>

      {/* ── 4. Feature highlights ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{t('index.features.title')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('index.features.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: t('index.features.intake.title'),
                body: t('index.features.intake.body'),
                link: '/features#ai-intake',
              },
              {
                icon: Phone,
                title: t('index.features.phone.title'),
                badge: 'Pro+',
                body: t('index.features.phone.body'),
                link: '/features#phone-intake',
              },
              {
                icon: FileText,
                title: t('index.features.summary.title'),
                body: t('index.features.summary.body'),
                link: '/features#coverage-summary',
              },
              {
                icon: Upload,
                title: t('index.features.docs.title'),
                badge: 'Pro+',
                body: t('index.features.docs.body'),
                link: '/features#document-intelligence',
              },
              {
                icon: Brain,
                title: t('index.features.brief.title'),
                badge: 'Pro+',
                body: t('index.features.brief.body'),
                link: '/features#intelligence-brief',
              },
              {
                icon: Sparkles,
                title: t('index.features.marketing.title'),
                badge: 'Pro',
                body: t('index.features.marketing.body'),
                link: '/features#marketing-kit',
              },
            ].map(({ icon: Icon, title, badge, body, link }) => (
              <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md hover:border-slate-300 transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-[#0F2745]" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-base font-semibold">{title}</h3>
                  {badge && (
                    <span className="text-[10px] font-semibold text-[#0F2745] bg-[#0F2745]/8 px-2 py-0.5 rounded-full uppercase tracking-wide">{badge}</span>
                  )}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{body}</p>
                <Link to={link} className="text-xs font-semibold text-[#0F2745] hover:underline inline-flex items-center gap-1">
                  {t('index.features.learnMore')} <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. How It Works ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{t('index.howItWorks.title')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('index.howItWorks.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 relative">
            {/* Connecting line — desktop only */}
            <div className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-slate-200" />
            {[
              {
                number: '01',
                icon: Zap,
                title: t('index.howItWorks.step1.title'),
                description: t('index.howItWorks.step1.description'),
              },
              {
                number: '02',
                icon: MessageSquare,
                title: t('index.howItWorks.step2.title'),
                description: t('index.howItWorks.step2.description'),
              },
              {
                number: '03',
                icon: FileText,
                title: t('index.howItWorks.step3.title'),
                description: t('index.howItWorks.step3.description'),
              },
            ].map(({ number, icon: Icon, title, description }) => (
              <div key={number} className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-5 shadow-sm relative z-10">
                  <Icon className="h-6 w-6 text-[#0F2745]" />
                </div>
                <div className="text-xs font-bold text-slate-300 mb-2 tracking-widest">{number}</div>
                <h3 className="text-base font-semibold mb-3">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Dual-Benefit Section ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {t('index.dual.title')}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('index.dual.subtitle')}
            </p>
          </div>

          {/* Process flow infographic */}
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-8 md:gap-y-0">

            {/* ── Step 1: Client Reaches Out ── */}
            <div className="flex md:justify-end">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-4 w-4 text-[#0F2745]" />
                  </div>
                  <span className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider">{t('index.dual.forYou')}</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">{t('index.dual.step1.agent.title')}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{t('index.dual.step1.agent.body')}</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#0F2745] flex items-center justify-center shadow-lg ring-4 ring-[#0F2745]/10">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <p className="text-xs font-bold text-[#0F2745] mt-3 text-center">{t('index.dual.step1.label')}</p>
              <div className="hidden md:block w-px h-8 bg-slate-200 mt-3" />
            </div>
            <div className="flex md:justify-start">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-4 w-4 text-amber-600" />
                  </div>
                  <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">{t('index.dual.forClients')}</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">{t('index.dual.step1.client.title')}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{t('index.dual.step1.client.body')}</p>
              </div>
            </div>

            {/* ── Step 2: AI Intake Conversation ── */}
            <div className="flex md:justify-end">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-4 w-4 text-[#0F2745]" />
                  </div>
                  <span className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider">{t('index.dual.forYou')}</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">{t('index.dual.step2.agent.title')}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{t('index.dual.step2.agent.body')}</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#0F2745] flex items-center justify-center shadow-lg ring-4 ring-[#0F2745]/10">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <p className="text-xs font-bold text-[#0F2745] mt-3 text-center">{t('index.dual.step2.label')}</p>
              <div className="hidden md:block w-px h-8 bg-slate-200 mt-3" />
            </div>
            <div className="flex md:justify-start">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-4 w-4 text-amber-600" />
                  </div>
                  <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">{t('index.dual.forClients')}</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">{t('index.dual.step2.client.title')}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{t('index.dual.step2.client.body')}</p>
              </div>
            </div>

            {/* ── Step 3: Agent Reviews ── */}
            <div className="flex md:justify-end">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-4 w-4 text-[#0F2745]" />
                  </div>
                  <span className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider">{t('index.dual.forYou')}</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">{t('index.dual.step3.agent.title')}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{t('index.dual.step3.agent.body')}</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#0F2745] flex items-center justify-center shadow-lg ring-4 ring-[#0F2745]/10">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <p className="text-xs font-bold text-[#0F2745] mt-3 text-center">{t('index.dual.step3.label')}</p>
              <div className="hidden md:block w-px h-8 bg-slate-200 mt-3" />
            </div>
            <div className="flex md:justify-start">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-4 w-4 text-amber-600" />
                  </div>
                  <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">{t('index.dual.forClients')}</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">{t('index.dual.step3.client.title')}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{t('index.dual.step3.client.body')}</p>
              </div>
            </div>

            {/* ── Step 4: First Consultation ── */}
            <div className="flex md:justify-end">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-4 w-4 text-[#0F2745]" />
                  </div>
                  <span className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider">{t('index.dual.forYou')}</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">{t('index.dual.step4.agent.title')}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{t('index.dual.step4.agent.body')}</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#0F2745] flex items-center justify-center shadow-lg ring-4 ring-[#0F2745]/10">
                <ChevronRight className="h-6 w-6 text-white" />
              </div>
              <p className="text-xs font-bold text-[#0F2745] mt-3 text-center">{t('index.dual.step4.label')}</p>
            </div>
            <div className="flex md:justify-start">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-4 w-4 text-amber-600" />
                  </div>
                  <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">{t('index.dual.forClients')}</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">{t('index.dual.step4.client.title')}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{t('index.dual.step4.client.body')}</p>
              </div>
            </div>
          </div>

          {/* Bottom tagline + link */}
          <p className="text-center text-sm text-slate-500 mt-14 mb-4">
            {t('index.dual.tagline')}
          </p>
          <div className="text-center">
            <Link to="/benefits" className="text-sm font-semibold text-[#0F2745] hover:underline inline-flex items-center gap-1">
              {t('index.dual.seeAll')} <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. Pricing preview ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{t('index.pricing.title')}</h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              {t('index.pricing.subtitle')}
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="rounded-xl border border-slate-200 bg-white p-8">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">{t('index.pricing.starter')}</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold tracking-tight">$49</span>
                <span className="text-slate-500 mb-1">{t('index.pricing.month')}</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">{t('index.pricing.starter.limit')}</p>
              <ul className="space-y-2.5 mb-8">
                {[
                  t('index.pricing.starter.f1'),
                  t('index.pricing.starter.f2'),
                  t('index.pricing.starter.f3'),
                  t('index.pricing.starter.f4'),
                  t('index.pricing.starter.f5'),
                  t('index.pricing.starter.f6'),
                ].map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className="block text-center border border-[#0F2745] text-[#0F2745] px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0F2745] hover:text-white transition">
                {t('index.hero.cta')}
              </a>
            </div>
            {/* Pro */}
            <div className="rounded-xl border-2 border-[#0F2745] bg-white p-8 relative">
              <div className="absolute -top-3 left-6">
                <span className="bg-[#0F2745] text-white text-xs font-semibold px-3 py-1 rounded-full">{t('index.pricing.mostPopular')}</span>
              </div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">{t('index.pricing.pro')}</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold tracking-tight">$79</span>
                <span className="text-slate-500 mb-1">{t('index.pricing.month')}</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">{t('index.pricing.pro.limit')}</p>
              <ul className="space-y-2.5 mb-8">
                {[
                  t('index.pricing.pro.f1'),
                  t('index.pricing.pro.f2'),
                  t('index.pricing.pro.f3'),
                  t('index.pricing.pro.f4'),
                  t('index.pricing.pro.f5'),
                ].map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className="block text-center bg-[#0F2745] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0C2038] transition">
                {t('index.hero.cta')}
              </a>
            </div>
            {/* Pro+ */}
            <div className="rounded-xl border border-slate-200 bg-white p-8">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">{t('index.pricing.proPlus')}</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold tracking-tight">$119</span>
                <span className="text-slate-500 mb-1">{t('index.pricing.month')}</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">{t('index.pricing.proPlus.limit')}</p>
              <ul className="space-y-2.5 mb-8">
                {[
                  t('index.pricing.proPlus.f1'),
                  t('index.pricing.proPlus.f2'),
                  t('index.pricing.proPlus.f3'),
                  t('index.pricing.proPlus.f4'),
                  t('index.pricing.proPlus.f5'),
                ].map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className="block text-center border border-[#0F2745] text-[#0F2745] px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0F2745] hover:text-white transition">
                {t('index.hero.cta')}
              </a>
            </div>
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            {t('index.pricing.trial')} <Link to="/pricing" className="text-[#0F2745] hover:underline font-medium">{t('index.pricing.compare')}</Link>
          </p>
        </div>
      </section>

      {/* ── 8. Waitlist / Contact ──────────────────────────────────────────── */}
      <section id="waitlist" className="py-20 md:py-28 bg-slate-50 border-y border-slate-100">
        <div className="max-w-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{t('index.waitlist.title')}</h2>
            <p className="text-lg text-slate-600">
              {t('index.waitlist.subtitle')}
            </p>
          </div>
          {submitted ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4"><Check className="h-6 w-6 text-green-600" /></div>
              <h3 className="text-xl font-semibold mb-2">{t('index.waitlist.success.title')}</h3>
              <p className="text-slate-600">{t('index.waitlist.success.body')}</p>
            </div>
          ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">{t('index.waitlist.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 focus:border-[#F59E0B]"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">{t('index.waitlist.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 focus:border-[#F59E0B]"
                  placeholder="jane@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="lines" className="block text-sm font-medium text-slate-700 mb-1">{t('index.waitlist.lines')}</label>
              <input
                type="text"
                id="lines"
                name="lines"
                className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 focus:border-[#F59E0B]"
                placeholder={t('index.waitlist.linesPlaceholder')}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">{t('index.waitlist.message')}</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 focus:border-[#F59E0B]"
                placeholder={t('index.waitlist.messagePlaceholder')}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#0F2745] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0C2038] transition"
            >
              {t('index.waitlist.submit')}
            </button>
            <p className="text-xs text-slate-500 text-center">
              {t('index.waitlist.disclaimer')}
            </p>
          </form>
          )}
        </div>
      </section>

      {/* ── 9. Closing CTA ──────────────────────────────────────────────────── */}
      <section className="bg-[#0F2745]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            {t('index.closing.title')}
          </h2>
          <p className="text-lg text-white/75 max-w-xl mx-auto mb-8">
            {t('index.closing.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#waitlist"
              className="bg-white text-[#0F2745] px-8 py-3.5 rounded-md text-sm font-semibold hover:bg-slate-100 transition inline-flex items-center gap-2"
            >
              {t('index.closing.cta')}
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/pricing"
              className="text-white/70 hover:text-white text-sm font-medium transition"
            >
              {t('index.closing.pricing')}
            </Link>
          </div>
          <p className="mt-4 text-white/65 text-xs">{t('index.closing.coming')}</p>
        </div>
      </section>
    </>
  );
};

export default Index;
