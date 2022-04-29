import { createI18n } from "vue-i18n";
import en from "../lang/en.json";
import uz from "../lang/uz.json";
import ru from "../lang/ru.json";
const locale = localStorage.getItem("locale") || "uz";

const i18n = createI18n({
  locale: locale,
  fallbackLocale: "ru",
  silentFallbackWarn: true,
  messages: {
    en,
    uz,
    ru,
  },
});
export default i18n;