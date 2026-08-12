# Senda — café de Nariño

E-commerce mobile-first construido en Angular 21. Incluye catálogo filtrable, fichas detalladas de trazabilidad, carrito persistente, signup/login, checkout y confirmación de pedido.

Los productores, fincas y lotes incluidos son contenido demostrativo para la experiencia. Antes de publicar, deben reemplazarse por datos reales verificados. La autenticación de esta entrega también es una simulación local; para producción debe conectarse a un backend con contraseñas cifradas, sesiones seguras y recuperación de cuenta.

## Ejecutar

```bash
npm install
npm start
```

Abre `http://localhost:4200`.

## Pagos con Wompi

El proyecto funciona por defecto en modo demostración para poder recorrer el checkout sin credenciales. Para pagos reales o sandbox:

1. Genera en el backend una referencia única y la firma SHA-256 de integridad para el valor exacto del pedido.
2. Expón únicamente la llave pública, la firma y la URL de retorno al frontend.
3. Copia `public/wompi-config.example.js` como `public/wompi-config.js` y reemplaza sus valores dinámicamente desde tu backend.
4. Carga `/wompi-config.js` antes de `https://checkout.wompi.co/widget.js` en `src/index.html`.

No expongas la llave privada ni el secreto de integridad en Angular. La implementación detecta `window.CAFE_WOMPI`; si existe, abre el widget oficial. Sin esa configuración, simula una aprobación local claramente marcada como demo.

## Imágenes

Todas las fotografías de la interfaz provienen de Unsplash mediante sus URLs públicas. No se usaron imágenes generadas por IA.

## Alcance del catálogo varietal

El inventario se consolidó con la Cartilla Cátedra Café de la Gobernación de Nariño y la FNC (2025), el Comité de Cafeteros de Nariño, publicaciones agronómicas de Cenicafé y la ficha pública de Café El Turpial de la Agencia de Desarrollo Rural. Incluye 16 nombres documentados: Caturra, Colombia, Castillo, Castillo Zona Sur, Castillo Zona Centro, Cenicafé 1, Tabi, Típica, Geisha, Bourbon Rosado, SL28, Laurina, Sidra, Wush Wush, material etíope y material sudanés.

“Todos” se refiere al inventario nominal hallado en esas fuentes públicas, no a un censo botánico definitivo. Las entradas “Etíope” y “Sudán” se conservan con el nivel de precisión de la fuente, que no identifica accesiones concretas. Las imágenes son fotografías reales y representativas del café, pero no se presentan como evidencia morfológica del cultivar.
