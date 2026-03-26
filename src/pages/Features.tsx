import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart3, Mail, Shield, ArrowRight, Sparkles, Phone, Upload, FileSearch, Clock, Brain, Link2, Rss, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BrandSettingsIllustration = () => (
  <div className="relative">
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
      {/* Panel header */}
      <div className="bg-slate-50 border-b border-slate-100 px-5 py-3 flex items-center justify-between">
        <p className="text-xs font-semibold text-slate-700">Profile Settings</p>
        <div className="flex items-center gap-2">
          <div className="h-5 px-3 rounded bg-[#0F2745] flex items-center">
            <span className="text-white text-[9px] font-semibold">Save Changes</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 divide-x divide-slate-100">
        {/* Left — settings fields */}
        <div className="p-4 space-y-4">
          {/* Logo upload */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Agency Logo</p>
            <div className="border-2 border-dashed border-slate-200 rounded-lg p-3 flex items-center gap-3 bg-slate-50">
              <div className="w-10 h-10 rounded bg-[#0F2745]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-[8px] font-bold text-[#0F2745] uppercase">Logo</span>
              </div>
              <div>
                <p className="text-[10px] font-medium text-slate-700">shield-insurance-logo.png</p>
                <p className="text-[9px] text-slate-400">Click to replace</p>
              </div>
            </div>
          </div>
          {/* Agency name */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Agency Name</p>
            <div className="border border-slate-200 rounded-md px-2.5 py-1.5 bg-white">
              <p className="text-[11px] text-slate-800">Shield Insurance Group</p>
            </div>
          </div>
          {/* Assistant name */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Assistant Name</p>
            <div className="border border-slate-200 rounded-md px-2.5 py-1.5 bg-white">
              <p className="text-[11px] text-slate-800">Parker</p>
            </div>
          </div>
          {/* Vanity URL */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Your Intake URL</p>
            <div className="border border-slate-200 rounded-md overflow-hidden flex text-[10px]">
              <span className="bg-slate-50 px-2 py-1.5 text-slate-400 border-r border-slate-200 whitespace-nowrap">.com/</span>
              <span className="px-2 py-1.5 text-[#0F2745] font-semibold">shieldinsurance</span>
            </div>
            <p className="text-[9px] text-amber-600 mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
              soloinsureai.com/shieldinsurance is live
            </p>
          </div>
          {/* Calendly */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Scheduling</p>
            <div className="flex items-center gap-2 border border-amber-200 bg-amber-50 rounded-md px-2.5 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
              <p className="text-[10px] text-amber-700 font-medium">Calendly connected</p>
            </div>
          </div>
        </div>
        {/* Right — live preview */}
        <div className="p-4 bg-slate-50/50">
          <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-2.5">Client Preview</p>
          <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
            {/* Mini browser bar */}
            <div className="bg-slate-100 px-2 py-1 flex items-center gap-1.5 border-b border-slate-200">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-300" />
              </div>
              <div className="flex-1 bg-white rounded px-2 py-0.5 text-[8px] text-slate-400 font-mono">
                soloinsureai.com/shieldinsurance
              </div>
            </div>
            {/* Mini client intake page */}
            <div className="bg-[#0F2745] px-3 py-2.5 flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[7px] font-bold text-white">SIG</span>
              </div>
              <div>
                <p className="text-white text-[9px] font-semibold leading-tight">Parker</p>
                <p className="text-white/60 text-[7px] leading-tight">Shield Insurance Group</p>
              </div>
            </div>
            <div className="px-3 py-3 space-y-2">
              <div className="bg-white rounded-xl rounded-bl-sm border border-slate-100 px-2.5 py-1.5 shadow-sm max-w-[85%]">
                <p className="text-[9px] text-slate-700 leading-snug">Welcome! I'm Parker with Shield Insurance Group. How can I help you with your coverage needs today?</p>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#0F2745] rounded-xl rounded-br-sm px-2.5 py-1.5 max-w-[75%]">
                  <p className="text-[9px] text-white leading-snug">I just bought a house and need to bundle my home and auto insurance.</p>
                </div>
              </div>
            </div>
            <div className="px-2 py-2 border-t border-slate-100 bg-white flex items-center gap-1.5">
              <div className="flex-1 bg-slate-50 rounded-full px-2 py-1 border border-slate-200">
                <p className="text-[8px] text-slate-400">Type your response…</p>
              </div>
              <div className="w-5 h-5 rounded-full bg-[#0F2745] flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white fill-current" viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
              </div>
            </div>
          </div>
          <p className="text-[9px] text-slate-400 text-center mt-2">Clients see your brand — never SoloInsureAI</p>
        </div>
      </div>
    </div>
    <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
  </div>
);

const ChatModeScreenshot = () => (
  <div className="relative">
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-slate-50">
      {/* App header */}
      <div className="bg-[#0F2745] px-4 py-3 flex items-center gap-3">
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">SIG</span>
        </div>
        <div>
          <p className="text-white text-xs font-semibold leading-tight">Parker</p>
          <p className="text-white/60 text-[10px] leading-tight">Shield Insurance Group · Intake Assistant</p>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="text-white/60 text-[10px]">Online</span>
        </div>
      </div>
      {/* Chat messages */}
      <div className="px-4 py-4 space-y-3 bg-slate-50">
        {/* AI bubble */}
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">P</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[78%]">
            <p className="text-xs text-slate-700 leading-relaxed">Hi! I'm Parker, your virtual intake assistant with Shield Insurance Group. I'll help gather some information about your coverage needs.</p>
          </div>
        </div>
        {/* AI bubble */}
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">P</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[78%]">
            <p className="text-xs text-slate-700 leading-relaxed">What's bringing you in today — are you looking for new coverage, reviewing an existing policy, or have you had a recent life change?</p>
          </div>
        </div>
        {/* Client bubble */}
        <div className="flex justify-end">
          <div className="bg-[#0F2745] rounded-2xl rounded-br-sm px-3 py-2 max-w-[72%]">
            <p className="text-xs text-white leading-relaxed">We just had a baby and I want to make sure our life insurance and home coverage are adequate. We also have a rental property that might not be covered.</p>
          </div>
        </div>
        {/* AI bubble */}
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">P</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[78%]">
            <p className="text-xs text-slate-700 leading-relaxed">Congratulations on the new addition! Let's make sure you and your family are properly protected. Who is your current insurance carrier?</p>
          </div>
        </div>
        {/* Typing indicator */}
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
      {/* Input bar */}
      <div className="px-3 py-3 bg-white border-t border-slate-100 flex items-center gap-2">
        <div className="flex-1 bg-slate-50 rounded-full px-4 py-2 border border-slate-200">
          <p className="text-[11px] text-slate-400">Type your response…</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#0F2745] flex items-center justify-center flex-shrink-0">
          <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
        </div>
      </div>
    </div>
    <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
  </div>
);

const IntakeSummaryScreenshot = () => (
  <div className="relative">
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
      {/* Email header */}
      <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-slate-100 flex items-center justify-center">
            <span className="text-[9px] font-bold text-slate-400 uppercase">Logo</span>
          </div>
          <div>
            <p className="text-xs font-bold text-[#0F2745] uppercase tracking-wider leading-tight">Shield Insurance Group</p>
            <p className="text-[10px] text-slate-400 leading-tight">New Client Intake — March 12, 2026</p>
          </div>
        </div>
        <span className="text-[10px] bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-2.5 py-0.5 font-medium">New</span>
      </div>
      {/* Coverage details table */}
      <div className="px-6 pt-4 pb-3">
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">Coverage Details</p>
        <div className="rounded-lg border border-slate-100 overflow-hidden text-[11px]">
          {[
            ['Client', 'Maria Chen'],
            ['Email', 'maria.chen@email.com'],
            ['Phone', '(407) 555-0198'],
            ['Location', 'Orlando, FL'],
            ['Lines Needed', 'Homeowners / Auto / Umbrella'],
            ['Coverage Need', 'Bundle home + auto — new home purchase, current carrier State Farm'],
            ['Desired Outcome', 'Competitive quote with better coverage and multi-policy discount'],
          ].map(([label, value], i) => (
            <div key={label} className={`flex ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
              <span className="w-[36%] px-3 py-1.5 text-slate-500 font-medium flex-shrink-0">{label}</span>
              <span className="px-3 py-1.5 text-slate-800">{value}</span>
            </div>
          ))}
        </div>
      </div>
      {/* AI context notes */}
      <div className="px-6 pb-5">
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">AI Coverage Insights</p>
        <div className="rounded-lg border border-amber-100 bg-amber-50 px-4 py-3 space-y-1.5">
          {[
            'No umbrella policy mentioned — with new home + rental property, recommend $1M umbrella as minimum',
            'Rental property likely unlisted on current policy — potential coverage gap if not endorsed or separately insured',
            'New home purchase triggers opportunity to review replacement cost vs. market value for dwelling coverage',
            'Multi-policy bundle typically saves 15-25% — run State Farm comparison against top 3 carriers',
          ].map((note) => (
            <div key={note} className="flex gap-2">
              <span className="text-amber-500 font-bold text-[10px] flex-shrink-0 mt-0.5">•</span>
              <p className="text-[10px] text-amber-900 leading-snug">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
  </div>
);

const MarketingKitIllustration = () => (
  <div className="relative">
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5">
      {/* Social card mock — horizontal layout */}
      <div className="flex" style={{ height: 210 }}>
        {/* White logo zone */}
        <div className="w-[36%] bg-white flex flex-col items-center justify-center p-5 gap-3 border-r border-slate-100">
          <div className="w-16 h-16 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center leading-tight">Your<br/>Logo</span>
          </div>
          <p className="text-[8px] font-semibold text-[#0F2745] uppercase tracking-widest text-center leading-tight">
            Shield Insurance<br/>Group
          </p>
        </div>
        {/* Navy content zone */}
        <div className="flex-1 bg-[#0F2745] flex flex-col justify-center px-6 py-5">
          <p style={{ fontFamily: 'Georgia, serif' }} className="text-white font-bold text-sm leading-snug mb-2.5">
            Life changes fast. Make sure your coverage keeps up.
          </p>
          <p className="text-[10px] text-white/50 mb-4 tracking-wide">Home · Auto · Life · Commercial</p>
          <div className="border-t border-white/20 pt-3">
            <p className="text-[9px] text-white/40 mb-1">Get your free coverage review at:</p>
            <p className="text-[11px] text-white font-semibold">soloinsureai.com/shieldinsurance</p>
          </div>
        </div>
      </div>
      {/* Bottom strip — color theme + label */}
      <div className="bg-slate-50 border-t border-slate-100 px-5 py-3 flex items-center gap-3">
        <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Color theme</span>
        <div className="flex gap-1.5">
          {['#0F2745','#1C1C1E','#1A4731','#6B1E2E','#334155'].map(c => (
            <div key={c} className="w-4 h-4 rounded-full border-2 border-white shadow-sm ring-1 ring-slate-200" style={{ background: c }} />
          ))}
          <div className="w-4 h-4 rounded-full border-2 border-white shadow-sm ring-1 ring-slate-200 bg-amber-500 relative">
            <span className="absolute -top-1 -right-1 text-[6px] bg-white text-slate-500 rounded-full px-[2px] font-bold leading-none" style={{ paddingTop: 1 }}>B</span>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
  </div>
);

const Features = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Page header */}
        <div className="text-center mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t('features.hero.title')}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('features.hero.subtitle')}
          </p>
        </div>

        {/* Feature 1 — AI Client Intake — text left, visual right */}
        <div id="ai-intake" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              {t('features.intake.title')}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              {t('features.intake.subtitle')}
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              {(['f1','f2','f3','f4','f5','f6'] as const).map(k => (
                <li key={k} className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> {t(`features.intake.${k}`)}</li>
              ))}
            </ul>
          </div>
          <ChatModeScreenshot />
        </div>

        {/* Feature 2 — Coverage Summary & AI Insights — visual left, text right */}
        <div id="coverage-summary" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div className="order-2 md:order-1">
            <IntakeSummaryScreenshot />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              {t('features.summary.title')}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              {t('features.summary.subtitle')}
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              {(['f1','f2','f3','f4','f5'] as const).map(k => (
                <li key={k} className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> {t(`features.summary.${k}`)}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature 3 — AI Phone Intake — text left, visual right */}
        <div id="phone-intake" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              <Phone className="h-3 w-3" />
              {t('features.phone.badge')}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              {t('features.phone.title')}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              {t('features.phone.subtitle')}
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              {(['f1','f2','f3','f4','f5'] as const).map(k => (
                <li key={k} className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> {t(`features.phone.${k}`)}</li>
              ))}
            </ul>
          </div>
          {/* Phone illustration */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
              <div className="bg-[#0F2745] px-5 py-4 text-center">
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-2">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <p className="text-white text-sm font-semibold">Your AI Intake Line</p>
                <p className="text-white/50 text-xs mt-0.5">(407) 555-0200</p>
              </div>
              <div className="px-5 py-4 space-y-3">
                {/* Simulated transcript */}
                <div className="flex gap-2 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#0F2745]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[7px] font-bold text-[#0F2745]">AI</span>
                  </div>
                  <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                    <p className="text-[11px] text-slate-700 leading-relaxed">"Hi, I'm Parker with Shield Insurance Group. I'll gather some information to help your agent prepare a coverage review. What can we help you with today?"</p>
                  </div>
                </div>
                <div className="flex gap-2 items-start justify-end">
                  <div className="bg-[#0F2745] rounded-lg px-3 py-2">
                    <p className="text-[11px] text-white leading-relaxed">"We just had a baby and I'm worried our life insurance isn't enough. We also bought a rental property last month that might not be on our policy."</p>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[7px] font-bold text-slate-500">C</span>
                  </div>
                </div>
                <div className="flex gap-2 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#0F2745]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[7px] font-bold text-[#0F2745]">AI</span>
                  </div>
                  <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                    <p className="text-[11px] text-slate-700 leading-relaxed">"Congratulations! Those are important coverage changes. Let me get the details so your agent can review everything..."</p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-[10px] text-slate-500 font-medium">Call in progress — 3:12</span>
                </div>
                <span className="text-[9px] bg-purple-50 text-purple-700 border border-purple-200 rounded-full px-2 py-0.5 font-medium">Phone Call</span>
              </div>
            </div>
            <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
          </div>
        </div>

        {/* Feature 4 — Document Intelligence — visual left, text right */}
        <div id="document-intelligence" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div className="order-2 md:order-1">
            {/* Document Intelligence illustration */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
                <div className="bg-white px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileSearch className="h-4 w-4 text-[#0F2745]" />
                    <p className="text-xs font-semibold text-slate-700">Document Intelligence</p>
                  </div>
                  <span className="text-[9px] bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-2 py-0.5 font-medium">3 of 4 received</span>
                </div>
                <div className="px-5 py-3 space-y-2.5">
                  {[
                    { name: 'Declarations_Page_Home.pdf', status: 'ready', summary: 'Dwelling coverage $320K, liability $100K. No umbrella endorsement. Wind/hail deductible 2%. Renewal: Aug 2026.' },
                    { name: 'Auto_Policy_Summary.pdf', status: 'ready', summary: '2 vehicles, liability 100/300/100. No uninsured motorist. Comprehensive $500 deductible. Multi-car discount applied.' },
                    { name: 'Claims_History_CLUE.pdf', status: 'ready', summary: 'One water damage claim ($8,200) in 2024. No auto claims in 5 years. Loss-free discount eligible on auto.' },
                  ].map((doc) => (
                    <div key={doc.name} className="border border-slate-100 rounded-lg overflow-hidden">
                      <div className="flex items-center gap-2 px-3 py-2 bg-slate-50">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                        <p className="text-[10px] font-medium text-slate-700 flex-1">{doc.name}</p>
                        <span className="text-[9px] text-amber-600 font-medium">Ready</span>
                      </div>
                      <div className="px-3 py-2">
                        <p className="text-[10px] text-slate-500 leading-relaxed">{doc.summary}</p>
                      </div>
                    </div>
                  ))}
                  <div className="border border-dashed border-slate-200 rounded-lg px-3 py-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
                    <p className="text-[10px] text-slate-400">Life Insurance Policy — awaiting upload</p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              <Upload className="h-3 w-3" />
              {t('features.docs.badge')}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              {t('features.docs.title')}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              {t('features.docs.subtitle')}
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              {(['f1','f2','f3','f4','f5','f6'] as const).map(k => (
                <li key={k} className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> {t(`features.docs.${k}`)}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature 5 — AI Intelligence Brief — text left, visual right */}
        <div id="intelligence-brief" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              <Brain className="h-3 w-3" />
              {t('features.brief.badge')}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              {t('features.brief.title')}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              {t('features.brief.subtitle')}
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              {(['f1','f2','f3','f4','f5'] as const).map(k => (
                <li key={k} className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> {t(`features.brief.${k}`)}</li>
              ))}
            </ul>
          </div>
          {/* Intelligence Brief illustration */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
              <div className="bg-white px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-[#0F2745]" />
                  <p className="text-xs font-semibold text-slate-700">AI Intelligence Brief</p>
                </div>
                <span className="text-[9px] bg-[#0F2745]/8 text-[#0F2745] rounded-full px-2 py-0.5 font-semibold uppercase tracking-wide">Pro+</span>
              </div>
              <div className="px-5 py-4 space-y-3">
                {/* Coverage gap flags */}
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Coverage Gap Flags</p>
                  <div className="space-y-1.5">
                    {[
                      { flag: 'Umbrella', note: 'No umbrella policy — with $320K home, rental property, and 2 vehicles, recommend minimum $1M umbrella for liability protection' },
                      { flag: 'Rental', note: 'Rental property not listed on any current policy — landlord coverage or DP-3 policy needed to avoid total gap in protection' },
                    ].map((item) => (
                      <div key={item.flag} className="flex gap-2 items-start bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
                        <span className="text-[9px] font-semibold text-amber-700 bg-amber-100 rounded px-1.5 py-0.5 flex-shrink-0 mt-px">{item.flag}</span>
                        <p className="text-[10px] text-amber-900 leading-snug">{item.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Bundling analysis */}
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Bundling Analysis</p>
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
                    <p className="text-[10px] text-slate-600 leading-snug">Home + auto bundle at current coverage levels typically yields 15-25% savings. Adding umbrella to bundle increases discount at most carriers. Current State Farm policy may lack competitive pricing on home given recent water claim — run Progressive, Travelers, and Hartford comparisons.</p>
                  </div>
                </div>
                {/* Life event flag */}
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Life Event Implications</p>
                  <div className="bg-red-50 border border-red-100 rounded-lg px-3 py-2 flex items-start gap-2">
                    <Clock className="h-3.5 w-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-[10px] text-red-800 leading-snug font-medium">New baby — review life insurance beneficiaries and coverage amount. Current policy details needed to assess adequacy for growing family.</p>
                  </div>
                </div>
                {/* Suggested questions */}
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Suggested Follow-Up</p>
                  <div className="space-y-1">
                    {[
                      'Is the rental property currently occupied by tenants, and do they carry renter\'s insurance?',
                      'What is the current life insurance face amount, and does the employer offer group coverage?',
                      'Are there any scheduled personal property items (jewelry, electronics) that need endorsement?',
                    ].map((q) => (
                      <div key={q} className="flex gap-2 items-start">
                        <span className="text-[#0F2745] font-bold text-[10px] flex-shrink-0 mt-0.5">?</span>
                        <p className="text-[10px] text-slate-600 leading-snug">{q}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
          </div>
        </div>

        {/* Feature 6 — Brand Settings — text left, visual right */}
        <div id="brand-settings" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              {t('features.brand.title')}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              {t('features.brand.subtitle')}
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              {(['f1','f2','f3','f4','f5','f6'] as const).map(k => (
                <li key={k} className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> {t(`features.brand.${k}`)}</li>
              ))}
            </ul>
          </div>
          <BrandSettingsIllustration />
        </div>

        {/* Feature 7 — Marketing Kit — visual left, text right */}
        <div id="marketing-kit" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div className="order-2 md:order-1">
            <MarketingKitIllustration />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              <Sparkles className="h-3 w-3" />
              {t('features.marketing.badge')}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              {t('features.marketing.title')}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              {t('features.marketing.subtitle')}
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              {(['f1','f2','f3','f4','f5','f6'] as const).map(k => (
                <li key={k} className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> {t(`features.marketing.${k}`)}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature 7 — Integrations — text left, visual right */}
        <div id="integrations" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              {t('features.integrations.title')}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              {t('features.integrations.subtitle')}
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              {(['1','2','3','4'] as const).map(n => (
                <li key={n} className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> <strong>{t(`features.integrations.f${n}.label`)}</strong>{t(`features.integrations.f${n}.text`)}</li>
              ))}
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> {t('features.integrations.f5')}</li>
            </ul>
          </div>
          {/* Integrations illustration */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
              <div className="bg-slate-50 border-b border-slate-100 px-5 py-3 flex items-center gap-2">
                <Link2 className="h-4 w-4 text-[#0F2745]" />
                <p className="text-xs font-semibold text-slate-700">Integrations</p>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#ff7a59]/10 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-[#ff7a59]">HS</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-800">HubSpot CRM</p>
                      <p className="text-[10px] text-green-700">Connected · Syncing contacts</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-[10px] font-medium text-green-700">Active</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-purple-600">Z</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-800">Zapier Webhook</p>
                      <p className="text-[10px] text-purple-700">→ Google Sheets · Last sync 2m ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-[10px] font-medium text-green-700">200</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-blue-600">Cal</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-800">Calendly</p>
                      <p className="text-[10px] text-slate-500">Connected · Policy review invites</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-[10px] font-medium text-green-700">Active</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
          </div>
        </div>

        {/* Feature 8 — AI Blog Generation — visual left, text right */}
        <div id="blog-generation" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div className="order-2 md:order-1">
            {/* Blog illustration */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
                <div className="bg-slate-50 border-b border-slate-100 px-5 py-3 flex items-center gap-2">
                  <Rss className="h-4 w-4 text-[#0F2745]" />
                  <p className="text-xs font-semibold text-slate-700">Blog Post Generator</p>
                </div>
                <div className="p-5 space-y-3">
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
                    <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Topic</p>
                    <p className="text-xs text-slate-800">Why You Need an Umbrella Policy Before It's Too Late</p>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white border border-slate-100 rounded-lg px-3 py-2">
                      <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Generated Title</p>
                      <p className="text-xs text-slate-800 font-medium">Why Every Homeowner Needs an Umbrella Policy — And What Happens Without One</p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-lg px-3 py-2">
                      <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Social Teaser</p>
                      <p className="text-[10px] text-slate-600">Your auto and home policy might not be enough. Here's why an umbrella policy could save you from financial disaster. 🛡️ #Insurance #Coverage #Protection</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[9px] bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-2 py-0.5">umbrella policy</span>
                      <span className="text-[9px] bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-2 py-0.5">liability coverage</span>
                      <span className="text-[9px] bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-2 py-0.5">insurance tips</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              <Rss className="h-3 w-3" />
              {t('features.blog.badge')}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              {t('features.blog.title')}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              {t('features.blog.subtitle')}
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              {(['f1','f2','f3','f4','f5'] as const).map(k => (
                <li key={k} className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> {t(`features.blog.${k}`)}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature 9 — Conversation Transcripts — text left */}
        <div id="transcripts" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              {t('features.transcripts.title')}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              {t('features.transcripts.subtitle')}
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              {(['f1','f2','f3','f4'] as const).map(k => (
                <li key={k} className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> {t(`features.transcripts.${k}`)}</li>
              ))}
            </ul>
          </div>
          {/* Transcript illustration */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
              <div className="bg-slate-50 border-b border-slate-100 px-5 py-3 flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-[#0F2745]" />
                <p className="text-xs font-semibold text-slate-700">Conversation Transcript</p>
                <span className="text-[9px] bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-2 py-0.5 ml-auto font-medium">Web Chat</span>
              </div>
              <div className="px-5 py-4 space-y-3">
                <div className="flex gap-2 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#0F2745]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[7px] font-bold text-[#0F2745]">AI</span>
                  </div>
                  <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                    <p className="text-[11px] text-slate-700 leading-relaxed">"Welcome! I'm here to help gather some information for your insurance agent. What coverage are you looking for today?"</p>
                  </div>
                </div>
                <div className="flex gap-2 items-start justify-end">
                  <div className="bg-[#0F2745] rounded-lg px-3 py-2">
                    <p className="text-[11px] text-white leading-relaxed">"We just had a baby and I'm worried our life insurance isn't enough. We also bought a rental property last month."</p>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[7px] font-bold text-slate-500">C</span>
                  </div>
                </div>
                <div className="flex gap-2 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#0F2745]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[7px] font-bold text-[#0F2745]">AI</span>
                  </div>
                  <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                    <p className="text-[11px] text-slate-700 leading-relaxed">"Congratulations on your growing family! Let's make sure you're properly covered. Do you have your current policy details handy?"</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
          </div>
        </div>

        {/* Supporting features row */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20 pt-4 border-t border-gray-100">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <BarChart3 className="h-4 w-4 text-primary" />
                {t('features.admin.title')}
              </CardTitle>
              <CardDescription>
                {t('features.admin.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {(['f1','f2','f3','f4'] as const).map(k => (
                  <li key={k}>• {t(`features.admin.${k}`)}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Mail className="h-4 w-4 text-primary" />
                {t('features.email.title')}
              </CardTitle>
              <CardDescription>
                {t('features.email.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {(['f1','f2','f3'] as const).map(k => (
                  <li key={k}>• {t(`features.email.${k}`)}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Shield className="h-4 w-4 text-primary" />
                {t('features.security.title')}
              </CardTitle>
              <CardDescription>
                {t('features.security.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {(['f1','f2','f3','f4'] as const).map(k => (
                  <li key={k}>• {t(`features.security.${k}`)}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t('features.cta.title')}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('features.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#waitlist"
              className="bg-[#0F2745] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0C2038] transition inline-flex items-center justify-center"
            >
              {t('features.cta.waitlist')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <Link
              to="/pricing"
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors inline-flex items-center justify-center px-6 py-3"
            >
              {t('features.cta.pricing')}
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
