import type { Metadata } from "next";
import PageHero from "../../components/ui/PageHero";
import { IconPhone, IconMail, IconMapPin } from "../../components/ui/Icons";

export const metadata: Metadata = { title: "Contact Us", description: "Get in touch with Olla Trade support. Phone, email, and office address for all enquiries." };

export default function ContactPage() {
  return (
    <>
      <PageHero badge="Get in Touch" title="Contact Us" subtitle="Our support team is available 24/5 to assist you with any questions about your account, trading, or promotions." breadcrumbs={[{ label: "Company", href: "/company" }, { label: "Contact Us" }]} />
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              {[
                { Icon: IconPhone,  title: "Phone Support (24/5)", items: ["+44 7418 641736"] },
                { Icon: IconMail,   title: "Email",                items: ["info@ollatrade.com", "cst@ollatrade.com"] },
                { Icon: IconMapPin, title: "Registered Address",   items: ["Olla Trade Ltd.", "Grace Complex, The Valley", "AI 2640, Anguilla", "Reg. No. A000001849"] },
              ].map((c) => (
                <div key={c.title} className="bg-white rounded-xl border border-gray-100 p-5 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg border border-gray-200 bg-[#F5F7FA] text-gray-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <c.Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">{c.title}</div>
                    {c.items.map((i) => <div key={i} className="text-[13px] text-gray-700">{i}</div>)}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-7">
              <h3 className="text-[15px] font-bold text-[#111827] mb-5">Send Us a Message</h3>
              <div className="space-y-4">
                {["Full Name","Email Address","Subject"].map((f)=>(
                  <div key={f}>
                    <label className="text-[11px] font-semibold text-gray-400 mb-1 block uppercase tracking-wider">{f}</label>
                    <input type="text" placeholder={f} className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] text-gray-700 focus:outline-none focus:border-[#00CC44] transition-colors" />
                  </div>
                ))}
                <div>
                  <label className="text-[11px] font-semibold text-gray-400 mb-1 block uppercase tracking-wider">Message</label>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] text-gray-700 focus:outline-none focus:border-[#00CC44] transition-colors resize-none" />
                </div>
                <button className="w-full bg-[#00CC44] hover:bg-[#00DD4A] text-black font-bold py-3 rounded-lg text-[13px] transition-colors">Send Message</button>
                <p className="text-[11px] text-gray-400 text-center">We typically respond within 24 business hours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
