import type { Metadata } from "next";
import PageHero from "../../components/ui/PageHero";

export const metadata: Metadata = { title: "Complaint Management", description: "Olla Trade formal complaint management policy and procedures for client disputes." };

export default function ComplaintManagementPage() {
  const sections=[{title:"Scope",body:"This Complaint Management Policy applies to all clients of Olla Trade Ltd. It sets out the procedures for submitting, acknowledging, investigating, and resolving formal complaints."},{title:"How to Submit a Complaint",body:"Complaints can be submitted via email to: complaints@ollatrade.com. Please include: your full name, account number, date of the issue, detailed description of the complaint, and copies of any relevant supporting documentation."},{title:"Acknowledgement",body:"We will acknowledge receipt of your complaint within 2 business days of receiving it. The acknowledgement will include a reference number and the name of the person handling your complaint."},{title:"Investigation",body:"We will investigate your complaint thoroughly and impartially. We aim to provide a full response within 10 business days. For complex complaints requiring further investigation, we may require up to 30 business days and will keep you informed of progress."},{title:"Resolution",body:"We will communicate our findings and proposed resolution in writing. Our response will explain our decision and the reasoning behind it. If your complaint is upheld, we will advise on the appropriate remedy."},{title:"Escalation",body:"If you are not satisfied with our final response, you may escalate the matter to the relevant regulatory authority or seek independent legal advice. The Company's registered address for regulatory purposes is: Grace Complex, The Valley, AI 2640, Anguilla."},{title:"Record Keeping",body:"All complaint records are maintained for a minimum of 5 years. We use complaint data to identify patterns and improve our services."},{title:"Contact",body:"Complaints Department: complaints@ollatrade.com | Phone: +447418641736 | Office: Apartment 25, Building 40, Tabyshaliev Street, Bishkek, Kyrgyzstan"}];
  return (
    <>
      <PageHero badge="Legal" title="Complaint Management" subtitle="Our formal complaint handling procedures and client dispute resolution process." breadcrumbs={[{label:"Legal"},{label:"Complaint Management"}]} />
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {sections.map(s=>(
              <div key={s.title} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
