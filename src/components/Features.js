import { useTranslation } from "react-i18next";



export default function Features() {
  const {t} = useTranslation();

  const features = [
  {
    title: t("vvf_features_1"),
  },
  {
    title : t("vvf_features_2"),
  },
  {
    title: t("vvf_features_3"),
  },
];
  return (
    <section className="py-12 bg-white px-4">
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, idx) => (
          <div key={idx} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <p className="text-gray-700 text-lg">{f.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
