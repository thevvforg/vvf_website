import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LOGO from "../vvflogo.png"

export default function Hero() {
  const {t} = useTranslation();
  return (
    <section className=" py-8 text-center px-4">
      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
      <img width={150} height={150} src={LOGO}></img>
      </div>
      <h1 className="text-4xl font-bold text-gray-800 max-w-3xl mx-auto">
        {t("vvf_intro")}
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        {t("vvf_tagline")}
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
        <Link className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700" to="/membership">
          {t("vvf_CTA_membership_button")}
        </Link>
        <Link className="px-6 py-3 bg-white text-green-600 border border-green-600 rounded-lg hover:bg-green-50" to="/waitlist">
        {t("vvf_CTA_waitlist_button")}
        </Link>
      </div>
    </section>
  );
}
