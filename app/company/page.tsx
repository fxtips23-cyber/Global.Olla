import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/ui/PageHero";

export const metadata: Metadata = { title: "Company", description: "Learn about Olla Trade — our mission, promotions, affiliate program, and how to contact us." };

const links=[{icon:"🏢",title:"About Us",sub:"Our story and mission",href:"/company/about"},{icon:"🤝",title:"Partner / Affiliate",sub:"Earn with Olla Trade",href:"/company/affiliate"},{icon:"🎁",title:"Promotions",sub:"Active bonuses",href:"/company/promotions"},{icon:"📞",title:"Contact Us",sub:"Get in touch",href:"/company/contact"},{icon:"❓",title:"Get Help",sub:"FAQs and support",href:"/company/help"},{icon:"📝",title:"Complaints",sub:"Complaint process",href:"/company/complaints"},{icon:"📃",title:"Legal Documents",sub:"All policies",href:"/company/legal"}];

export default function CompanyPage() {
  return (
    <>
      <PageHero badge="Company" title="Olla Trade Company" subtitle="Learn about our mission, meet our team, and find all the resources you need." breadcrumbs={[{label:"Company"}]} />
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {links.map(l=>(
              <Link key={l.title} href={l.href} className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#00CC44]/30 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="text-3xl mb-4">{l.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#00AA38] transition-colors">{l.title}</h3>
                <p className="text-xs text-gray-400">{l.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
