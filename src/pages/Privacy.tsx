import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t('privacy.title')}</h1>
        <p className="text-sm text-muted-foreground mb-8">{t('privacy.lastUpdated')}</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s1.title')}</h2>
            <p className="text-muted-foreground">{t('privacy.s1.p1')}</p>
            <p className="text-muted-foreground mt-4">{t('privacy.s1.p2')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s2.title')}</h2>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s2.1.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s2.1.text')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s2.2.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s2.2.text')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s2.3.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s2.3.text')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s2.4.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s2.4.text')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s2.5.title')}</h3>
            <p className="text-muted-foreground">{t('privacy.s2.5.text')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s3.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s3.text')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>{t('privacy.s3.ssn')}</strong></li>
              <li><strong>{t('privacy.s3.cc')}</strong></li>
              <li><strong>{t('privacy.s3.bank')}</strong></li>
              <li><strong>{t('privacy.s3.gov')}</strong></li>
            </ul>
            <p className="text-muted-foreground mt-4">{t('privacy.s3.footer')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s4.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s4.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {(['i1','i2','i3','i4','i5','i6','i7','i8','i9','i10','i11'] as const).map(k => (
                <li key={k}>{t(`privacy.s4.${k}`)}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s5.title')}</h2>
            <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: t('privacy.s5.intro') }} />
            {(['1','2','3','4','5','6'] as const).map(n => (
              <div key={n}>
                <h3 className="text-xl font-semibold mb-2">{t(`privacy.s5.${n}.title`)}</h3>
                <p className="text-muted-foreground mb-4">{t(`privacy.s5.${n}.text`)}</p>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s6.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s6.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {(['i1','i2','i3','i4','i5','i6','i7'] as const).map(k => (
                <li key={k}>{t(`privacy.s6.${k}`)}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s7.title')}</h2>
            {(['pro','client','docs','integration','deletion'] as const).map(k => (
              <p key={k} className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: t(`privacy.s7.${k}`) }} />
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s8.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s8.intro')}</p>
            {(['1','2','3','4','5','6'] as const).map(n => (
              <div key={n}>
                <h3 className="text-xl font-semibold mb-2">{t(`privacy.s8.${n}.title`)}</h3>
                <p className="text-muted-foreground mb-4">{t(`privacy.s8.${n}.text`)}</p>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s9.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s9.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {(['access','correction','deletion','portability','objection','restriction','withdrawal'] as const).map(k => (
                <li key={k} dangerouslySetInnerHTML={{ __html: t(`privacy.s9.${k}`) }} />
              ))}
            </ul>
            <p className="text-muted-foreground mt-4" dangerouslySetInnerHTML={{ __html: t('privacy.s9.footer').replace(/<a>/g, '<a href="mailto:privacy@solosolutionsai.com" class="text-primary hover:underline">').replace(/<\/a>/g, '</a>') }} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s10.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s10.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li dangerouslySetInnerHTML={{ __html: t('privacy.s10.ccpa') }} />
              <li dangerouslySetInnerHTML={{ __html: t('privacy.s10.other') }} />
            </ul>
            <p className="text-muted-foreground mt-4">{t('privacy.s10.footer')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s11.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s11.intro')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s11.1.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s11.1.p1')}</p>
            <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: t('privacy.s11.1.p2').replace(/<a>/g, '<a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">').replace(/<\/a>/g, '</a>') }} />
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s11.2.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s11.2.text')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s11.3.title')}</h3>
            <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: t('privacy.s11.3.text').replace(/<a>/g, '<a href="mailto:privacy@solosolutionsai.com" class="text-primary hover:underline">').replace(/<\/a>/g, '</a>') }} />
            <p className="text-muted-foreground">{t('privacy.s11.consent')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s12.title')}</h2>
            <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('privacy.s12.text').replace(/<a>/g, '<a href="mailto:privacy@solosolutionsai.com" class="text-primary hover:underline">').replace(/<\/a>/g, '</a>') }} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s13.title')}</h2>
            <p className="text-muted-foreground">{t('privacy.s13.text')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s14.title')}</h2>
            <p className="text-muted-foreground">{t('privacy.s14.intro')}</p>
            <p className="text-muted-foreground mt-2" dangerouslySetInnerHTML={{ __html: t('privacy.s14.email').replace(/<a>/g, '<a href="mailto:privacy@solosolutionsai.com" class="text-primary hover:underline">').replace(/<\/a>/g, '</a>') }} />
            <p className="text-muted-foreground mt-2" style={{ whiteSpace: 'pre-line' }}>{t('privacy.s14.address')}</p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
