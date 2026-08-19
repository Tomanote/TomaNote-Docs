---
title: Editor y formato
description: Escribe y da formato a tus notas en el editor de TomaNote.
---

El editor es el área principal de la app. Haz clic en cualquier nota abierta y empieza a escribir. El texto se guarda automáticamente mientras escribes.

![interface-editor-basics](/screenshots/editor-basics.png)

## Formato

TomaNote admite formato de texto ligero. Selecciona un texto y usa el grupo **Fuente** de las herramientas (negrita, subrayado, cursiva) o los atajos de teclado de abajo.

### Negrita (`Ctrl+B`)

La negrita funciona como un **ciclo de tres estados**:

1. Texto normal.
2. Seminegrita.
3. Extranegrita.
4. Vuelta a la normalidad.

Pulsa `Ctrl+B` varias veces (o usa la barra de herramientas) para recorrer los estados.

### Cursiva y subrayado

- `Ctrl+I` aplica cursiva a la selección.
- `Ctrl+U` subraya la selección.

:::note[Nota del navegador]
`Ctrl+I` y `Ctrl+U` aparecen en el menú contextual, pero dependen de tu navegador: en Chrome, `Ctrl+U` abre "Ver código fuente" en lugar de subrayar. Usa los botones de **Fuente** de la barra de herramientas o el menú contextual para un resultado fiable. Ver [issue #67](https://github.com/Tomanote/TomaNote/issues/67).
:::

## Copiar, cortar y pegar

- `Ctrl+C` copiar · `Ctrl+X` cortar · `Ctrl+V` pegar.
- Pegar inserta **texto plano** y es **deshacible** (`Ctrl+Z`).

## Deshacer y rehacer

- `Ctrl+Z` deshacer · `Ctrl+Y` rehacer.

## Indentar con Tab

Pulsar `Tab` dentro del editor inserta cuatro espacios (útil para indentar).

## Menú contextual

Haz clic derecho dentro del editor para abrir el menú contextual:

| Grupo     | Acciones                                               |
| --------- | ------------------------------------------------------ |
| Editar    | Copiar `Ctrl+C`, Cortar `Ctrl+X`, Pegar `Ctrl+V`       |
| Formato   | Negrita `Ctrl+B`, Cursiva `Ctrl+I`, Subrayado `Ctrl+U` |
| Historial | Deshacer `Ctrl+Z`, Rehacer `Ctrl+Y`                    |

Los elementos que necesitan selección (copiar, cortar, negrita, cursiva, subrayado) se deshabilitan cuando no hay nada seleccionado.

![interface-editor-context-menu](/screenshots/editor-context-menu.png)

## Texto plano, no markdown

TomaNote guarda texto plano con formato ligero. **Todavía no hay vista previa de markdown** — está prevista para una versión futura (ver [Roadmap](/es/guides/settings/#roadmap)).
