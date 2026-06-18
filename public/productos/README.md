# Fotos de productos

Una carpeta por producto, con el mismo nombre que el `slug` definido en
`src/lib/site.ts`.

```
public/productos/
  varilla-roscada-acme/
    cover.jpg     ← portada (card del catálogo + apertura del detalle)
    01.jpg        ← fotos extra para la galería del detalle
    02.jpg
  gatos-maquinaria-agricola/
    cover.jpg
    ...
  piezas-a-medida/
    cover.jpg
    ...
```

## Cómo activarlas

En `src/lib/site.ts`, dentro de cada producto, agregá las rutas (empiezan en `/`):

```ts
image: "/productos/varilla-roscada-acme/cover.jpg",
gallery: [
  "/productos/varilla-roscada-acme/01.jpg",
  "/productos/varilla-roscada-acme/02.jpg",
],
```

Mientras `image` esté vacío se muestra un placeholder estilo plano, así que
podés ir subiendo las fotos de a poco.

## Recomendaciones

- Formato `.jpg` o `.webp`. `next/image` ya las convierte a WebP/AVIF y genera
  los tamaños por dispositivo, así que no hace falta optimizarlas a mano.
- Proporción ~4:3 para la portada (se recorta con `object-cover`).
- Lado largo de ~1600 px alcanza de sobra; evitá subir originales de 6000 px.
