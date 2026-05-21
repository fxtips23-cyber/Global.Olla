import type { Metadata } from "next";
import PageHero from "../../../components/ui/PageHero";

export const metadata: Metadata = { title: "Cookies Policy", description: "Learn how Olla Trade uses cookies on its website and how you can manage your cookie preferences." };

export default function CookiesPage() {
  const types=[{name:"Essential Cookies",desc:"Required for the website to function properly. These cannot be disabled. They enable core functions such as security, account access, and form submissions."},{name:"Analytics Cookies",desc:"Help us understand how visitors use our website by collecting anonymous usage data. This allows us to improve the user experience."},{name:"Functional Cookies",desc:"Remember your preferences such as language settings, and provide enhanced functionality."},{name:"Marketing Cookies",desc:"Used to track visitors across websites and display relevant advertisements. These are optional and can be disabled."}];
  return (
    <>
      <PageHero badge="Privacy" title="Cookies Policy" subtitle="How Olla Trade uses cookies and how you can manage your preferences." breadcrumbs={[{label:"Legal"},{label:"Cookies Policy"}]} />
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="text-base font-bold text-gray-900 mb-2">What are Cookies?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Cookies are small text files stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners. Olla Trade uses cookies to improve your browsing experience, analyse site traffic, and personalise content.</p>
            </div>
            {types.map(t=>(
              <div key={t.name} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="text-base font-bold text-gray-900 mb-2">{t.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="text-base font-bold text-gray-900 mb-2">Managing Cookies</h3>
              <p className="text-sm text-gray-600 leading-relaxed">You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies or delete existing ones. Note that disabling cookies may affect the functionality of our website. For more information, visit your browser&apos;s help documentation.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
