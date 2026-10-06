## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Project conventions

- Use HeroUI v3 (`@heroui/react`) for interface controls and Gravity Icons (`@gravity-ui/icons`) for icons.
- Import Gravity icons from individual modules (for example `import Sun from '@gravity-ui/icons/Sun'`) to support Node static rendering.
- Keep brand tokens in `src/styles/theme.css`; import global styles through `src/layouts/Layout.astro`.
- Use React islands with Astro client directives for interactive controls. HeroUI v3 does not need a provider.
- `NO SUBIR A GIT/` is local-only source material. Never commit it or reference it from production code; copy needed assets into `public/` or `src/`.

## Documentation guides

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
