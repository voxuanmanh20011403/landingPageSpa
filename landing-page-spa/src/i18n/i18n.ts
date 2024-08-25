import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationKOR from "./locales/kor/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  kor: {
    translation: translationKOR,
  },
};

i18n
  .use(initReactI18next) // Kết nối với React
  .init({
    resources,
    lng: "en", // Ngôn ngữ mặc định
    fallbackLng: "en", // Ngôn ngữ dự phòng
    interpolation: {
      escapeValue: false, // React đã tự động xử lý XSS
    },
  });

export default i18n;
