import type { Metadata } from "next";
import PageHero from "../../components/ui/PageHero";

export const metadata: Metadata = { title: "Complaints", description: "Learn how to submit a complaint to Olla Trade and our complaint handling process." };

export default function ComplaintsPage() {
  return (
    <>
      <PageHero badge="Client Services" title="Complaints" subtitle="We take all complaints seriously. If you are dissatisfied with any aspect of our service, please follow our complaint process." breadcrumbs={[{label:"Company"},{label:"Complaints"}]} />
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {[{title:"Step 1: Contact Support",body:"First, contact our customer support team directly. Many issues can be resolved quickly through our 24/5 support channels. Email: cst@ollatrade.com | Phone: +447418641736"},{title:"Step 2: Submit a Formal Complaint",body:"If your issue is not resolved to your satisfaction, you may submit a formal complaint in writing to complaints@ollatrade.com. Please include your full name, account number, description of the issue, and any supporting documentation."},{title:"Step 3: Complaint Review",body:"We will acknowledge your complaint within 2 business days and aim to provide a full response within 10 business days. Complex complaints may require additional time and we will keep you informed of progress."},{title:"Step 4: Final Response",body:"Once our investigation is complete, we will provide a final decision in writing. If you remain unsatisfied, you may escalate your complaint to the relevant regulatory authority or seek independent legal advice."}].map(s=>(
              <div key={s.title} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-[#0A0D14] rounded-xl p-6 text-white/60 text-sm leading-relaxed">
            <strong className="text-white">Complaint Contact:</strong> complaints@ollatrade.com | Please reference your account number in all complaint correspondence. Our Complaint Management Policy is available in our <a href="/legal/complaint-management" className="text-[#00CC44] hover:underline">Legal Documents</a> section.
          </div>
        </div>
      </section>
    </>
  );
}
