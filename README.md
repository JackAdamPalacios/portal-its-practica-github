# Portal ITS · Práctica colaborativa en GitHub

Proyecto de la materia **Cómputo en la Nube**. El objetivo es construir, entre todo el grupo, un sitio web estático usando **GitHub** como plataforma de colaboración (ramas, *commits*, *pull requests* y revisión de código) y publicarlo con **GitHub Pages**.

## Estructura del repositorio

```
portal-its-practica-github/
├── index.html          # Página principal con la barra de navegación
├── plantilla.html      # Plantilla base que cada alumno duplica
├── README.md           # Este documento
├── css/
│   └── estilos.css     # Estilos globales (guinda y oro, responsivo)
├── js/
│   └── menu.js         # Lógica de los menús desplegables
├── paginas/            # Aquí va la página de cada alumno
└── imagenes/           # Imágenes usadas en las páginas
```

## Menú de navegación

| Menú | Opción 1 | Opción 2 | Opción 3 | Opción 4 |
|---|---|---|---|---|
| Sistemas | `sistemas-mision.html` | `sistemas-vision.html` | `sistemas-perfil-egreso.html` | `sistemas-plan-estudios.html` |
| Industrial | `industrial-mision.html` | `industrial-vision.html` | `industrial-perfil-egreso.html` | `industrial-plan-estudios.html` |
| Materiales | `materiales-mision.html` | `materiales-vision.html` | `materiales-perfil-egreso.html` | `materiales-plan-estudios.html` |
| Mecatrónica | `mecatronica-mision.html` | `mecatronica-vision.html` | `mecatronica-perfil-egreso.html` | `mecatronica-plan-estudios.html` |
| Servicios y Actividades | `servicios-biblioteca.html` | `servicios-becas.html` | `actividades-deportivas.html` | `actividades-culturales.html` |

## Tabla de asignación (19 alumnos)

> Sustituye "Alumno XX" por el nombre real y el usuario de GitHub de cada integrante.

| # | Alumno | Usuario GitHub | Archivo asignado | Rama |
|---|---|---|---|---|
| 01 | Alumno 01 (coordinador) | @usuario01 | `paginas/sistemas-mision.html` + `paginas/actividades-culturales.html` | `feature/sistemas-mision` |
| 02 | Alumno 02 | @usuario02 | `paginas/sistemas-vision.html` | `feature/sistemas-vision` |
| 03 | Alumno 03 | @usuario03 | `paginas/sistemas-perfil-egreso.html` | `feature/sistemas-perfil-egreso` |
| 04 | Alumno 04 | @usuario04 | `paginas/sistemas-plan-estudios.html` | `feature/sistemas-plan-estudios` |
| 05 | Alumno 05 | @usuario05 | `paginas/industrial-mision.html` | `feature/industrial-mision` |
| 06 | Alumno 06 | @usuario06 | `paginas/industrial-vision.html` | `feature/industrial-vision` |
| 07 | Alumno 07 | @usuario07 | `paginas/industrial-perfil-egreso.html` | `feature/industrial-perfil-egreso` |
| 08 | Alumno 08 | @usuario08 | `paginas/industrial-plan-estudios.html` | `feature/industrial-plan-estudios` |
| 09 | Alumno 09 | @usuario09 | `paginas/materiales-mision.html` | `feature/materiales-mision` |
| 10 | Alumno 10 | @usuario10 | `paginas/materiales-vision.html` | `feature/materiales-vision` |
| 11 | Alumno 11 | @usuario11 | `paginas/materiales-perfil-egreso.html` | `feature/materiales-perfil-egreso` |
| 12 | Alumno 12 | @usuario12 | `paginas/materiales-plan-estudios.html` | `feature/materiales-plan-estudios` |
| 13 | Alumno 13 | @usuario13 | `paginas/mecatronica-mision.html` | `feature/mecatronica-mision` |
| 14 | Alumno 14 | @usuario14 | `paginas/mecatronica-vision.html` | `feature/mecatronica-vision` |
| 15 | Alumno 15 | @usuario15 | `paginas/mecatronica-perfil-egreso.html` | `feature/mecatronica-perfil-egreso` |
| 16 | Alumno 16 | @usuario16 | `paginas/mecatronica-plan-estudios.html` | `feature/mecatronica-plan-estudios` |
| 17 | Alumno 17 | @usuario17 | `paginas/servicios-biblioteca.html` | `feature/servicios-biblioteca` |
| 18 | Alumno 18 | @usuario18 | `paginas/servicios-becas.html` | `feature/servicios-becas` |
| 19 | Alumno 19 | @usuario19 | `paginas/actividades-deportivas.html` | `feature/actividades-deportivas` |

> Son 20 páginas y 19 alumnos: el coordinador (Alumno 01) también se encarga de `actividades-culturales.html`. Ajusta la tabla si el grupo decide otra distribución.

## Cómo colaborar

1. Haz un *fork* del repositorio (o acepta la invitación como colaborador) y clónalo:
   ```bash
   git clone https://github.com/USUARIO/portal-its-practica-github.git
   ```
2. Crea tu rama:
   ```bash
   git checkout -b feature/sistemas-mision
   ```
3. Copia `plantilla.html` dentro de `paginas/` con el nombre que te tocó y edita **solo** los textos marcados con `CAMBIAR`.
4. Guarda tu imagen en `imagenes/` (formato `.jpg` o `.png`, menos de 500 KB) y actualiza el atributo `alt`.
5. Sube tus cambios:
   ```bash
   git add paginas/sistemas-mision.html imagenes/sistemas-mision.jpg
   git commit -m "Agrega página de misión de Sistemas"
   git push origin feature/sistemas-mision
   ```
6. Abre un **Pull Request** hacia `main` y espera la revisión del coordinador.

## Reglas del equipo

- No modificar `index.html`, `css/estilos.css` ni `js/menu.js` sin avisar al coordinador.
- Cada página debe incluir los 6 elementos de la plantilla: nombre de la carrera o servicio, título, imagen con `alt`, párrafos, lista de 3 puntos y enlace a la fuente oficial con botón de regreso.
- Nombres de archivo en minúsculas, sin acentos ni espacios.
- Mensajes de *commit* claros y en español.

## Publicación

En **Settings → Pages**, selecciona la rama `main` y la carpeta `/ (root)`. El sitio quedará disponible en:

```
https://USUARIO.github.io/portal-its-practica-github/
```
