export default defineNuxtRouteMiddleware((to, from) => {
  if (from.name !== "pucelano" && from.name !== "phoneTests") {
    return navigateTo("./");
  }
});
