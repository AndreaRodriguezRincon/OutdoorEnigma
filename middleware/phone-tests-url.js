//Seguridad aplicada a las paginas del telefono con letra
export default defineNuxtRouteMiddleware((to, from) => {
  // Verifica si la ruta desde la que se está navegando no es "infoTests"
  if (from.name !== "infoTests") {
    // Si la condición se cumple, redirige la navegación a la ruta de inicio
    return navigateTo("./");
  }
});
