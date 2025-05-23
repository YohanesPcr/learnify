import { useState } from "react";
import faqs from "../json/faqs.json";
import PageHeader from '../components/PageHeader';// Ensure to import your PageHeader component  
export default function FaqPage() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-[#ffffff] text-[#043334] font-sans">
      {/* Header Section */}
      <PageHeader subtitle="Faq" title="FAQ Page"/>  

      {/* FAQ Accordion */}
      <section className="py-20 px-6 md:px-20">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 text-[#043334]">
  Frequently asked <span className="text-[#043334]">questions</span>
</h2>


        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full text-left px-6 py-4 font-medium text-[#043334] flex justify-between items-center"
              >
                {faq.question}
                <span className="text-xl">
                  {openId === faq.id ? "−" : "+"}
                </span>
              </button>
              {openId === faq.id && (
                <div className="px-6 pb-4 text-sm text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    
    </div>
  );
}
