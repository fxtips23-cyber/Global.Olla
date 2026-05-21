"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  enquiryType: string;
  subject: string;
  message: string;
}

const INITIAL: FormState = {
  fullName: "", email: "", phone: "", country: "",
  enquiryType: "", subject: "", message: "",
};

const ENQUIRY_TYPE_KEYS = [
  "enquiry_general",
  "enquiry_account",
  "enquiry_deposit",
  "enquiry_partner",
  "enquiry_complaint",
  "enquiry_tech",
] as const;

function FieldLabel({ label, required }: { label: string; required?: boolean }) {
  return (
    <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
      {label}{required && <span className="text-[#00CC44] ml-0.5">*</span>}
    </label>
  );
}

const inputClass =
  "w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-[#111827] bg-white focus:outline-none focus:border-[#00CC44] focus:ring-2 focus:ring-[#00CC44]/10 transition-all placeholder-gray-300";

export default function ContactForm() {
  const t = useTranslations("forms.contact");
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");

  const enquiryTypes = ENQUIRY_TYPE_KEYS.map(key => ({ key, label: t(key) }));

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
    if (apiError) setApiError("");
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim())    newErrors.fullName    = t("error_name");
    if (!form.email.trim())       newErrors.email       = t("error_email_required");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                                  newErrors.email       = t("error_email_invalid");
    if (!form.enquiryType)        newErrors.enquiryType = t("error_enquiry");
    if (!form.subject.trim())     newErrors.subject     = t("error_subject");
    if (!form.message.trim())     newErrors.message     = t("error_message");
    else if (form.message.trim().length < 20)
                                  newErrors.message     = t("error_message_short");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setApiError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setApiError(data.error || t("error_api"));
      } else {
        setSubmitted(true);
      }
    } catch {
      setApiError(t("error_network"));
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
          style={{ background: "rgba(0,204,68,0.12)", border: "2px solid rgba(0,204,68,0.25)" }}>
          <svg className="w-8 h-8 text-[#00CC44]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#111827] mb-2">{t("success_title")}</h3>
        <p className="text-[14px] text-gray-500 max-w-sm leading-relaxed mb-6">
          {t("success_desc").replace("{email}", form.email)}
        </p>
        <button
          onClick={() => { setForm(INITIAL); setSubmitted(false); }}
          className="text-[13px] font-semibold text-[#00CC44] hover:text-[#00AA38] transition-colors underline underline-offset-4"
        >
          {t("success_link")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Row 1: Name + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <FieldLabel label={t("fullName")} required />
          <input type="text" placeholder={t("fullName_placeholder")} value={form.fullName} onChange={set("fullName")} className={inputClass} />
          {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
        </div>
        <div>
          <FieldLabel label={t("email")} required />
          <input type="email" placeholder={t("email_placeholder")} value={form.email} onChange={set("email")} className={inputClass} />
          {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Row 2: Phone + Country */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <FieldLabel label={t("phone")} />
          <input type="tel" placeholder={t("phone_placeholder")} value={form.phone} onChange={set("phone")} className={inputClass} />
        </div>
        <div>
          <FieldLabel label={t("country")} />
          <input type="text" placeholder={t("country_placeholder")} value={form.country} onChange={set("country")} className={inputClass} />
        </div>
      </div>

      {/* Enquiry type */}
      <div>
        <FieldLabel label={t("enquiryType")} required />
        <select value={form.enquiryType} onChange={set("enquiryType")} className={inputClass + " appearance-none cursor-pointer"}>
          <option value="">{t("enquiryType_placeholder")}</option>
          {enquiryTypes.map(({ key, label }) => <option key={key} value={label}>{label}</option>)}
        </select>
        {errors.enquiryType && <p className="text-[11px] text-red-500 mt-1">{errors.enquiryType}</p>}
      </div>

      {/* Subject */}
      <div>
        <FieldLabel label={t("subject")} required />
        <input type="text" placeholder={t("subject_placeholder")} value={form.subject} onChange={set("subject")} className={inputClass} />
        {errors.subject && <p className="text-[11px] text-red-500 mt-1">{errors.subject}</p>}
      </div>

      {/* Message */}
      <div>
        <FieldLabel label={t("message")} required />
        <textarea
          rows={5}
          placeholder={t("message_placeholder")}
          value={form.message}
          onChange={set("message")}
          className={inputClass + " resize-none"}
        />
        {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
        <p className="text-[11px] text-gray-400 mt-1">{t("chars_min").replace("{count}", String(form.message.length))}</p>
      </div>

      {/* API error */}
      {apiError && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-[13px] text-red-700">
          {apiError}
        </div>
      )}

      {/* Disclaimer */}
      <p className="text-[11px] text-gray-400 leading-relaxed">{t("disclaimer")}</p>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2 font-bold py-4 rounded-xl text-[15px] transition-all"
        style={{ background: submitting ? "#00994D" : "#00CC44", color: "#000", opacity: submitting ? 0.8 : 1 }}
      >
        {submitting ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            {t("sending")}
          </>
        ) : (
          t("submit")
        )}
      </button>
    </form>
  );
}
