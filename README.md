# Portal ITS · Proyecto GitHub - Página web estática

**Materia:** Cómputo en la Nube · Sistemas / Saltillo TecNM
**Actividad:** 2.4.1 Actividad GitHub - Proyecto página web estática del ITS

> Construir una página web estática para el ITS, a través de un proyecto colaborativo de software, con los estudiantes del grupo de CN, en el que cada uno aportará una página basada en una plantilla común y revisará la contribución de un compañero mediante GitHub.

## 1. Descripción del producto

Sitio web **responsivo** con una página de inicio y cinco menús desplegables:

- Ingeniería en Sistemas Computacionales
- Ingeniería Industrial
- Ingeniería en Materiales
- Ingeniería en Mecatrónica
- Servicios y actividades

Cada menú tiene **cuatro opciones**, y cada estudiante es responsable de una opción y de su página HTML.

## 2. Distribución entre los 20 estudiantes

> Sustituye "Nombre del alumno" y "@usuario" por los datos reales de cada integrante.

| Equipo | # | Estudiante | Usuario GitHub | Opción asignada | Archivo | Rama |
|---|---|---|---|---|---|---|
| Sistemas | 1 | Nombre del alumno | @usuario | Misión del programa | `paginas/sistemas-mision.html` | `e01-sistemas-mision` |
| Sistemas | 2 | Nombre del alumno | @usuario | Objetivos educacionales | `paginas/sistemas-objetivos.html` | `e02-sistemas-objetivos` |
| Sistemas | 3 | Nombre del alumno | @usuario | Perfil de ingreso | `paginas/sistemas-ingreso.html` | `e03-sistemas-ingreso` |
| Sistemas | 4 | Nombre del alumno | @usuario | Retículas | `paginas/sistemas-reticulas.html` | `e04-sistemas-reticulas` |
| Industrial | 5 | Nombre del alumno | @usuario | Misión del programa | `paginas/industrial-mision.html` | `e05-industrial-mision` |
| Industrial | 6 | Nombre del alumno | @usuario | Objetivos educacionales | `paginas/industrial-objetivos.html` | `e06-industrial-objetivos` |
| Industrial | 7 | Nombre del alumno | @usuario | Perfil de ingreso | `paginas/industrial-ingreso.html` | `e07-industrial-ingreso` |
| Industrial | 8 | Nombre del alumno | @usuario | Retículas | `paginas/industrial-reticulas.html` | `e08-industrial-reticulas` |
| Materiales | 9 | Nombre del alumno | @usuario | Misión del programa | `paginas/materiales-mision.html` | `e09-materiales-mision` |
| Materiales | 10 | Nombre del alumno | @usuario | Objetivos educacionales | `paginas/materiales-objetivos.html` | `e10-materiales-objetivos` |
| Materiales | 11 | Nombre del alumno | @usuario | Perfil de ingreso | `paginas/materiales-ingreso.html` | `e11-materiales-ingreso` |
| Materiales | 12 | Nombre del alumno | @usuario | Retículas | `paginas/materiales-reticulas.html` | `e12-materiales-reticulas` |
| Mecatrónica | 13 | Nombre del alumno | @usuario | Misión del programa | `paginas/mecatronica-mision.html` | `e13-mecatronica-mision` |
| Mecatrónica | 14 | Nombre del alumno | @usuario | Objetivos educacionales | `paginas/mecatronica-objetivos.html` | `e14-mecatronica-objetivos` |
| Mecatrónica | 15 | Nombre del alumno | @usuario | Perfil de ingreso | `paginas/mecatronica-ingreso.html` | `e15-mecatronica-ingreso` |
| Mecatrónica | 16 | Nombre del alumno | @usuario | Retículas | `paginas/mecatronica-reticulas.html` | `e16-mecatronica-reticulas` |
| Servicios y actividades | 17 | Nombre del alumno | @usuario | Servicio social | `paginas/servicio-social.html` | `e17-servicio-social` |
| Servicios y actividades | 18 | Nombre del alumno | @usuario | Emprendimiento | `paginas/emprendimiento.html` | `e18-emprendimiento` |
| Servicios y actividades | 19 | Nombre del alumno | @usuario | Servicios médicos | `paginas/servicios-medicos.html` | `e19-servicios-medicos` |
| Servicios y actividades | 20 | Nombre del alumno | @usuario | Actividades extraescolares | `paginas/extraescolares.html` | `e20-extraescolares` |

Los apartados de las carreras aparecen en las páginas oficiales de Sistemas, Industrial, Materiales y Mecatrónica. Los servicios están enlazados desde el portal institucional. La agrupación en cinco menús es la propuesta para esta práctica.

## 3. Plantilla común

Cada página tendrá **exactamente** los mismos elementos (ver `plantilla.html`):

1. Nombre de la carrera o servicio.
2. Título del apartado.
3. Una imagen representativa con texto alternativo.
4. Uno o dos párrafos breves.
5. Una lista de tres puntos relevantes.
6. Enlace a la fuente oficial y botón para regresar al inicio.

Solo cambian textos, imagen y enlaces. En "Retículas", por ejemplo, basta una explicación breve y un enlace al documento oficial, sin reproducir todo el plan de estudios.

El CSS y el JavaScript son compartidos. El JavaScript únicamente controla los menús desplegables.

### Estándares de estilo acordados

| Elemento | Definición |
|---|---|
| Framework | CSS propio con Flexbox y Grid (sin Bootstrap) |
| Colores | Guinda `#6d1a36` y oro `#c9a45c`, fondo `#f7f4ef` |
| Tipografía | Segoe UI / system-ui |
| Nombre de la carrera o servicio | En el encabezado, clase `encabezado__titulo` |
| Título del apartado | `<h1 class="apartado__titulo">` |
| Subtítulo de la lista | "Puntos relevantes" |
| Texto del enlace | "Consultar fuente oficial" |
| Texto del botón | "← Regresar al inicio" |

## 4. Estructura del repositorio

```
portal-its-practica-github/
├── index.html
├── plantilla.html
├── css/
│   └── estilos.css
├── js/
│   └── menu.js
├── paginas/
│   ├── sistemas-mision.html
│   ├── sistemas-objetivos.html
│   └── ...otras páginas
├── imagenes/
│   ├── sistemas-mision.jpg
│   └── ...otras imágenes
└── README.md
```

## 5. Flujo de trabajo en GitHub (el mismo para todos)

| Paso | Acción del estudiante | Evidencia |
|---|---|---|
| 1 | Consultar su Issue | Tarea asignada |
| 2 | Crear una rama desde `main` | Ejemplo: `e01-sistemas-mision` |
| 3 | Copiar y adaptar la plantilla | Página e imagen propias |
| 4 | Guardar avances con commits descriptivos | Historial de cambios |
| 5 | Abrir un pull request hacia `main` | Propuesta de integración |
| 6 | Revisar el trabajo de un compañero | Comentarios o sugerencias |
| 7 | Atender las observaciones | Correcciones en la misma rama |
| 8 | Integrar el trabajo revisado | Página incorporada al sitio |

Ejemplo con comandos (también puede hacerse desde la interfaz web de GitHub):

```bash
git clone https://github.com/USUARIO/portal-its-practica-github.git
cd portal-its-practica-github
git checkout -b e01-sistemas-mision
# copiar plantilla.html a paginas/sistemas-mision.html y editarla
git add paginas/sistemas-mision.html imagenes/sistemas-mision.jpg
git commit -m "Agrega página Misión del programa de Sistemas"
git push origin e01-sistemas-mision
```

## 6. Revisión circular

Cada estudiante revisa el pull request del siguiente: el 1 revisa al 2, el 2 al 3, y así hasta que el 20 revisa al 1.

| Revisor | Revisa a | Revisor | Revisa a |
|---|---|---|---|
| 1 | 2 | 11 | 12 |
| 2 | 3 | 12 | 13 |
| 3 | 4 | 13 | 14 |
| 4 | 5 | 14 | 15 |
| 5 | 6 | 15 | 16 |
| 6 | 7 | 16 | 17 |
| 7 | 8 | 17 | 18 |
| 8 | 9 | 18 | 19 |
| 9 | 10 | 19 | 20 |
| 10 | 11 | 20 | 1 |

En la revisión se comprueba que:

- [ ] La imagen carga.
- [ ] Los enlaces funcionan.
- [ ] El contenido corresponde al apartado.
- [ ] Se conserva la plantilla.

## 7. Producto final

El producto integrado se publica con **GitHub Pages** (*Settings → Pages*, rama `main`, carpeta `/ (root)`):

```
https://USUARIO.github.io/portal-its-practica-github/
```

Documentación: https://docs.github.com/es/pages