//Seguridad aplicada a las paginas de información de las pruebas 
export default defineNuxtRouteMiddleware((to, from) => {
  // Verifica si la ruta desde la que se está navegando no es "tests"
  if (from.name !== "tests") {
    // Si la condición se cumple, redirige la navegación a la ruta de inicio
    return navigateTo("./");
  }
});
