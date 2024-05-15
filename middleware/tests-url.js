//Seguridad aplicada a las paginas de pruebas
export default defineNuxtRouteMiddleware((to, from) => {
  // Verifica si la ruta desde la que se está navegando no es ni "pucelano" ni "phoneTests"
  if (from.name !== "pucelano" && from.name !== "phoneTests") {
    // Si la condición se cumple, redirige la navegación a la ruta de inicio
    return navigateTo("./");
  }
});
