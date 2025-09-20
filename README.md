# 🛒 E-commerce de Figuras 3D

Este proyecto es una tienda online de figuras impresas en 3D, donde los usuarios pueden explorar productos, añadirlos a su lista de deseos, realizar pedidos y gestionar sus direcciones. Desarrollado con **Next.js**, **Strapi** y **Chakra UI**.

🔗 **Demo**: [https://3dhispalis.netlify.app](https://3dhispalis.netlify.app)

---

## 🚀 Tecnologías

- **Frontend**: Next.js, Chakra UI, React  
- **Backend**: Strapi CMS (API REST personalizada)  
- **Base de datos**: PostgreSQL (Railway) / SQLite en local  
- **Almacenamiento de imágenes**: AWS S3  
- **Pasarela de pago**: Stripe (implementación en curso)

---

## ⚙️ Instalación local

1. Clona el repositorio:

git clone https://github.com/usuario/ecommerce-figuras3d.git
cd ecommerce-figuras3d

2. Clona el repositorio:

npm install
# o
pnpm install

3. Arranca el entorno de desarrollo:

npm run dev
# o
pnpm dev

4. Abre tu navegador en: http://localhost:3000

## 🧩 Estructura del proyecto

- `src/pages/`: Páginas principales
- `src/components/`: Componentes reutilizables (Header, WishlistIcon, ProductCard, etc.)
- `src/api/`: Funciones para interactuar con la API de Strapi
- `src/utils/`: Funciones auxiliares (por ejemplo, cálculo de descuentos)
- `src/hooks/`: Hooks personalizados (autenticación, carrito...)

---

## 🛍️ Funcionalidades destacadas

- Navegación por categorías
- Detalle de producto con descuentos y variaciones
- Lista de deseos por usuario
- Carrito persistente por sesión
- Proceso de compra paso a paso (dirección, pago, resumen)
- Panel de usuario con pedidos, direcciones y ajustes
- Panel de administración con Strapi (gestión de productos, categorías, sliders...)

---

## 📦 API

La API se gestiona con **Strapi** y permite:

- Registro / login de usuarios
- CRUD de productos, categorías, sliders y pedidos
- Gestión de direcciones y listas de deseos

**Ruta base de la API en desarrollo local**:

http://localhost:1337/api

markdown
Copiar
Editar

---

## 🌐 Despliegue

- **Frontend** desplegado en [Vercel](https://vercel.com)
- **Backend** desplegado en [Railway](https://railway.app) + AWS S3 para imágenes
- Variables de entorno gestionadas desde `.env.local` y `.env` en ambos entornos

---

## ✅ Pendiente o en desarrollo

- Integración completa de Stripe
- Gestión de stock y estado de pedidos
- Búsqueda avanzada y filtrado por precio
- Mejoras en el SEO y accesibilidad

---

## 📚 Recursos útiles

- [Documentación Next.js](https://nextjs.org/docs)
- [Guía Chakra UI](https://chakra-ui.com/docs)
- [Strapi API Docs](https://docs.strapi.io)
- [Deploy en Vercel](https://vercel.com/docs)
