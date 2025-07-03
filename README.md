# Anime Vault 🎌

Una aplicación moderna de descubrimiento de anime construida con **Next.js 15** y **React 19**, con funcionalidad de scroll infinito impulsada por Server Actions.

## 🚀 Características

- **Scroll Infinito**: Descubrimiento fluido de anime con intersection observer
- **Server Actions**: Obtención de datos del lado del servidor con Next.js 15
- **Diseño Responsivo**: Enfoque mobile-first con Tailwind CSS
- **Animaciones Suaves**: Impulsadas por Framer Motion
- **TypeScript**: Seguridad de tipos completa en toda la aplicación
- **Datos en Tiempo Real**: Obtiene información actualizada desde la API de Shikimori

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 15.3.4** - Framework de React con App Router
- **React 19.1.0** - React más reciente con características concurrentes
- **TypeScript** - Desarrollo con seguridad de tipos
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Librería de animaciones

### Librerías Clave
- **react-intersection-observer** - Implementación de scroll infinito
- **Server Actions** - Obtención de datos del servidor sin rutas API

### API
- **Shikimori API** - Base de datos pública de anime

## 🎯 Implementaciones Técnicas Clave

### Patrón de Server Actions
Este proyecto demuestra el enfoque moderno de Next.js 15 para la obtención de datos del lado del servidor:

```tsx
"use server";

export const fetchAnimeData = async(page: number): Promise<JSX.Element> => {
    const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`)
    const data = await response.json();
    return (
        <>
            {data.map((item: AnimeProp, index: number) => (
                <AnimeCard key={item.id} anime={item} index={index} />
            ))}
        </>
    )
}
```

### Scroll Infinito con Intersection Observer
Carga eficiente de contenido mientras el usuario hace scroll:

```tsx
const { ref, inView } = useInView();

useEffect(() => {
  if (inView) {
    const newData = fetchAnimeData(page);
    newData.then((res) => {
      setData((prevData) => [...prevData, res]);
      setPage((prevPage) => prevPage + 1);
    });
  }
}, [inView, page]);
```

## 🚦 Comenzando

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

1. Clona el repositorio
```bash
git clone https://github.com/smarce10/anime-vault.git
cd anime-vault
```

2. Instala las dependencias
```bash
npm install
```

3. Ejecuta el servidor de desarrollo
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 📱 Demostración de Características

- **Carga Inicial**: Primera página de tarjetas de anime renderizada del lado del servidor
- **Scroll Infinito**: Carga automática de más contenido al llegar al final
- **Grid Responsivo**: Se adapta de 1 columna (móvil) a 4 columnas (escritorio)
- **Estados de Carga**: Animación de spinner suave mientras se obtienen datos
- **Manejo de Errores**: Fallbacks elegantes para fallas de API

## 🔧 Estructura del Proyecto

```
anime-vault/
├── app/
│   ├── action.tsx          # Server Actions
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx           # Página de inicio
│   └── globals.css        # Estilos globales
├── components/
│   ├── AnimeCard.tsx      # Tarjeta individual de anime
│   ├── LoadMore.tsx       # Componente de scroll infinito
│   └── ...
└── public/               # Assets estáticos
```

## 🎨 Decisiones de Diseño

- **Server Actions sobre API Routes**: Aprovechando los patrones más recientes de obtención de datos de Next.js 15
- **Arquitectura Basada en Componentes**: Componentes de React reutilizables y mantenibles
- **Diseño Mobile-First**: Sistema de grid responsivo usando Tailwind CSS
- **Optimización de Rendimiento**: Intersection Observer para detección eficiente de scroll

## 📈 Consideraciones de Rendimiento

- **Server-side Rendering**: Carga inicial optimizada con SSR
- **Code Splitting**: Automático con Next.js App Router
- **Optimización de Imágenes**: Optimización integrada de Next.js
- **Lazy Loading**: Componentes renderizados solo cuando son necesarios

