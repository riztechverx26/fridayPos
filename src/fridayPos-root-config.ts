import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@friday/mf-retail",
  app: () => System.import("@friday/mf-retail"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
