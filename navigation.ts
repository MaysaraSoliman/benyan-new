// import { createSharedPathnamesNavigation } from "next-intl/navigation";
// import { defineRouting } from "next-intl/routing";

// // const routing = defineRouting(/* ... */);
// const routing = defineRouting({
//     // Define your routes here
//     '/': { locale: 'en' },
//     '/about': { locale: 'en' },
//     '/services': { locale: 'en' },
//     '/contact': { locale: 'en' },
//   });

// export const { Link, redirect, usePathname, useRouter } =
//   createSharedPathnamesNavigation(routing);

// import { createSharedPathnamesNavigation } from "next-intl/navigation";
// import { defineRouting } from "next-intl/routing";

// // Define your locales and default locale
// const locales = ["en", "ar"] as const; // Available locales
// const defaultLocale = "en"; // Default locale

// // Define routing with the correct structure
// const routing = defineRouting({
//   locales,
//   defaultLocale,
// });

// // Manually define the routes outside of the `defineRouting` call
// // const routes = {
// //   "/": { locale: "en" },
// //   "/about": { locale: "en" },
// //   "/services": { locale: "en" },
// //   "/contact": { locale: "en" },
// // };

// // Create shared pathnames navigation
// export const { Link, redirect, usePathname, useRouter } =
//   createSharedPathnamesNavigation(routing);
