import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  locales: ["en", "ar"], // Specify your supported locales
  defaultLocale: "en",
  // Match only internationalized pathnames
  matcher: ["/", "/(ar|en)/:path*"],
};
