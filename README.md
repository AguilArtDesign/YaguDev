# Yagu

Sitio en Astro con React, HeroUI v3, Tailwind CSS v4 y Gravity Icons.

## Desarrollo

Requiere Node.js >= 22.12.0. Instalar con `npm install`.

- `npm run dev`: iniciar Astro en segundo plano.
- `npm run astro -- dev status`: consultar el servidor.
- `npm run astro -- dev logs`: consultar los registros.
- `npm run astro -- dev stop`: detener el servidor.
- `npm run check`: comprobar Astro y TypeScript.
- `npm run build`: generar el sitio en `dist/`.

## Estructura y convenciones

- `src/layouts/Layout.astro`: documento base, metadatos y tema inicial.
- `src/pages/index.astro`: pantalla temporal basada en la referencia suministrada.
- `src/components/`: componentes React con HeroUI; usar `client:load` cuando necesiten interacción.
- `src/styles/theme.css`: variables originales de marca para los temas claro y oscuro.
- `src/styles/global.css`: Tailwind, HeroUI, Inter local y estilos generales.
- `public/brand/`: logos SVG utilizados por el sitio.
- `public/favicon.svg`: favicon de Yagu.

Usar HeroUI para los controles de interfaz y `@gravity-ui/icons` para los iconos. HeroUI v3 no requiere un proveedor global. El tema oscuro es el predeterminado; el selector guarda la preferencia en el navegador.

`NO SUBIR A GIT/` contiene los materiales originales y está excluida de Git. Copiar únicamente los recursos necesarios a `src/` o `public/`. La referencia PNG se conserva en esa carpeta; la pantalla se reproduce con SVG y un selector funcional para adaptarse a distintos tamaños.

Guías: [Astro + React](https://docs.astro.build/en/guides/framework-components/), [HeroUI](https://heroui.com/en/docs/react/getting-started/quick-start), [Gravity Icons](https://gravity-ui.com/libraries/icons).
