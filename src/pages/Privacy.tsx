const Privacy = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: March 2026</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              SoloInsureAI ("we," "our," or "us"), a product of SoloSolutionsAI, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our client intake automation service for insurance professionals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-2">2.1 Insurance Agent Information</h3>
            <p className="text-muted-foreground mb-4">
              When you create an account, we collect: name, email address, agency name, office location, phone number, lines of business, and optional agency logo.
            </p>
            <h3 className="text-xl font-semibold mb-2">2.2 Client Intake Information</h3>
            <p className="text-muted-foreground mb-4">
              Information submitted by clients through intake forms including: name, contact information, coverage needs, current carrier details, policy expiration dates, and any additional information provided in the intake.
            </p>
            <h3 className="text-xl font-semibold mb-2">2.3 Uploaded Documents</h3>
            <p className="text-muted-foreground">
              When a client uploads documents at the request of their agent, we collect the document files, file names, file types, and file sizes. Documents may include current policies, declarations pages, claims history, property photos, or other insurance-related materials. Providing documents is entirely voluntary.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use collected information to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Provide and maintain our service</li>
              <li>Process client intake submissions and route them to the appropriate agent</li>
              <li>Send email notifications about new intake submissions</li>
              <li>Generate AI-powered summaries of client intakes</li>
              <li>Analyze uploaded documents using AI to produce structured summaries, helping agents identify coverage gaps and prepare quotes more efficiently</li>
              <li>Improve and personalize our service</li>
              <li>Respond to customer service requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational security measures to protect your information. All data is encrypted in transit using SSL/TLS and at rest. We use secure cloud infrastructure and follow industry best practices for data protection.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
            <p className="text-muted-foreground mb-4">
              We retain agent account information for as long as your account is active. Client intake submissions are retained unless you request deletion.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Uploaded Documents:</strong> Client-uploaded documents and their AI-generated summaries are automatically deleted from our system 30 days after upload. SoloInsureAI is designed as a pass-through service, not a permanent document repository.
            </p>
            <p className="text-muted-foreground">
              <strong>Right to Deletion:</strong> Clients may request immediate deletion of their uploaded documents at any time by contacting <a href="mailto:privacy@soloinsureai.com" className="text-primary hover:underline">privacy@soloinsureai.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. AI Processing & Third-Party Services</h2>
            <p className="text-muted-foreground mb-4">We use third-party services including email delivery providers, cloud hosting services, and AI processing services.</p>
            <p className="text-muted-foreground mb-4"><strong>AI Document Analysis:</strong> Uploaded documents are processed by AI solely to generate structured summaries. AI summaries do not constitute insurance advice or coverage recommendations.</p>
            <p className="text-muted-foreground mb-4"><strong>No Human Review:</strong> No employee, contractor, or representative of SoloInsureAI views uploaded documents. All processing is automated.</p>
            <p className="text-muted-foreground"><strong>AI Provider Data Practices:</strong> Our AI provider does not retain, store, or use your documents or data to train AI models.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Export your data</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. GDPR Compliance</h2>
            <p className="text-muted-foreground">For users in the EEA, we comply with GDPR. We process your data based on legitimate interests, contractual necessity, or your consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground">Our service is not intended for individuals under 18 years of age.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
            <p className="text-muted-foreground">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground">If you have questions about this Privacy Policy, contact us at:</p>
            <p className="text-muted-foreground mt-2">Email: <a href="mailto:sean@solosolutionsai.com" className="text-primary hover:underline">sean@solosolutionsai.com</a></p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
