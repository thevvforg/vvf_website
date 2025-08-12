import { useTranslation } from "react-i18next";

export default function Footer() {
  const {t} =  useTranslation();
  return (
    <footer className="bg-green-900 text-white py-6 text-center">
      <p className="text-sm">© {t("vvf_footer")}</p>
    </footer>
  );
}
