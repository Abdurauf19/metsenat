export default async function({ store, redirect }) {
  redirect('/')
  console.log('middlewareee')
  // var user = store.state.auth.user;
  // let hasToken = document.localStorage.getItem('token')
  // if (!user ) {
  //   // console.dir(window.$nuxt.$route)
  //   try {
  //     await store.dispatch("auth/LOAD_TOKEN");
  //     await store.dispatch("auth/FETCH_USER");
  //   } catch (e) {
  //     try {
  //       await store.dispatch("auth/REFRESH_TOKEN");
  //       await store.dispatch("auth/FETCH_USER");
  //     } catch (e) {
  //       if (process.browser && localStorage.getItem("locale")) {
  //         window.$nuxt.$router.push({ path: "/" + localStorage.getItem("locale") + "/teacher/login", query: { redirect: window.$nuxt.$route.fullPath } });
  //         // redirect("/" + localStorage.getItem("locale") + "/teacher/login");
  //       } else {
  //         window.$nuxt.$router.push({ path: "/teacher/login", query: { redirect: window.$nuxt.$route.fullPath } });
  //         // redirect("/teacher/login");
  //       }
  //     }
  //   }
  // }

  // user = store.state.auth.user;
  // if (process.browser) {
  //   ((d, t) => {
  //     var BASE_URL = "https://chat.uicgroup.tech";
  //     var g = d.createElement(t),
  //       s = d.getElementsByTagName(t)[0];
  //     g.src = BASE_URL + "/packs/js/sdk.js";
  //     g.defer = true;
  //     g.async = true;
  //     s.parentNode.insertBefore(g, s);
  //     // g.onload = function() {
  //     //   window.chatwootSDK.run({
  //     //     websiteToken: "eSYUyhsGcwG4XXDXPhGHzDrb",
  //     //     baseUrl: BASE_URL
  //     //   });

  //     //   setTimeout(function() {
  //     //     // window.$chatwoot.reset();
  //     //     window.$chatwoot.setUser(user.user, {
  //     //       name: user.name,
  //     //       avatar_url: user.avatar_url,
  //     //       phone_number: "+998" + user.phone
  //     //     });
  //     //   }, 5000);
  //     // };
  //   })(document, "script");
  // }
}