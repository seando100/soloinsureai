import { useTranslation } from 'react-i18next';

const Terms = () => {
  const { t } = useTranslation();

  const linkify = (html: string) =>
    html
      .replace(/<a>/g, '<a href="mailto:privacy@solosolutionsai.com" class="text-primary hover:underline">')
      .replace(/<\/a>/g, '</a>');

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t('terms.title')}</h1>
        <p className="text-sm text-muted-foreground mb-8">{t('terms.lastUpdated')}</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s1.title')}</h2>
            <p className="text-muted-foreground">{t('terms.s1.text')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s2.title')}</h2>
            <p className="text-muted-foreground">{t('terms.s2.text')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s3.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s3.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {(['i1','i2','i3','i4','i5'] as const).map(k => (
                <li key={k}>{t(`terms.s3.${k}`)}</li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-4">{t('terms.s3.footer')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s4.title')}</h2>
            {(['1','2','3','4'] as const).map(n => (
              <div key={n}>
                <h3 className="text-xl font-semibold mb-2">{t(`terms.s4.${n}.title`)}</h3>
                <p className="text-muted-foreground mb-4">{t(`terms.s4.${n}.text`)}</p>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s5.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s5.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {(['i1','i2','i3','i4','i5','i6','i7','i8','i9','i10'] as const).map(k => (
                <li key={k}>{t(`terms.s5.${k}`)}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s6.title')}</h2>
            {(['1','2','3','4'] as const).map(n => (
              <div key={n}>
                <h3 className="text-xl font-semibold mb-2">{t(`terms.s6.${n}.title`)}</h3>
                <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: t(`terms.s6.${n}.text`) }} />
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s7.title')}</h2>
            <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: t('terms.s7.intro') }} />
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {(['i1','i2','i3','i4','i5','i6'] as const).map(k => (
                <li key={k} dangerouslySetInnerHTML={{ __html: t(`terms.s7.${k}`) }} />
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s8.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s8.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {(['i1','i2','i3','i4','i5'] as const).map(k => (
                <li key={k}>{t(`terms.s8.${k}`)}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s9.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s9.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              {(['i1','i2','i3','i4','i5'] as const).map(k => (
                <li key={k} dangerouslySetInnerHTML={{ __html: linkify(t(`terms.s9.${k}`)) }} />
              ))}
            </ul>
            <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('terms.s9.footer') }} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s10.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s10.p1')}</p>
            <p className="text-muted-foreground">{t('terms.s10.p2')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s11.title')}</h2>
            <p className="text-muted-foreground">{t('terms.s11.text')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s12.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s12.p1')}</p>
            <p className="text-muted-foreground">{t('terms.s12.p2')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s13.title')}</h2>
            <p className="text-muted-foreground">{t('terms.s13.text')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s14.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s14.p1')}</p>
            <p className="text-muted-foreground mb-4">{t('terms.s14.p2')}</p>
            <p className="text-muted-foreground">{t('terms.s14.p3')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s15.title')}</h2>
            <p className="text-muted-foreground">{t('terms.s15.text')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s16.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s16.p1')}</p>
            <p className="text-muted-foreground">{t('terms.s16.p2')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s17.title')}</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {(['entire','severability','waiver','assignment'] as const).map(k => (
                <li key={k} dangerouslySetInnerHTML={{ __html: t(`terms.s17.${k}`) }} />
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s18.title')}</h2>
            <p className="text-muted-foreground">{t('terms.s18.intro')}</p>
            <p className="text-muted-foreground mt-2" dangerouslySetInnerHTML={{ __html: t('terms.s18.email').replace(/<a>/g, '<a href="mailto:legal@solosolutionsai.com" class="text-primary hover:underline">').replace(/<\/a>/g, '</a>') }} />
            <p className="text-muted-foreground mt-2" style={{ whiteSpace: 'pre-line' }}>{t('terms.s18.address')}</p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Terms;
