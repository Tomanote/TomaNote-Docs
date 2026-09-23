---
title: Editor y formato
description: Escribe y da formato a tus notas en el editor de TomaNote.
---

El editor es el área principal de la app. Haz clic en cualquier nota abierta y empieza a escribir. El texto se guarda automáticamente mientras escribes.

![interface-editor-basics](/screenshots/editor-basics.png)

## Motor de texto enriquecido: Milkdown + ProseMirror

Desde la **v0.5.6**, TomaNote renderiza y edita las notas con [Milkdown](https://milkdown.dev), un editor WYSIWYG de Markdown construido sobre el toolkit [ProseMirror](https://prosemirror.net). Esto aporta edición robusta a nivel de bloque (encabezados, listas, citas, bloques de código) con salida Markdown real — sin necesidad de un modo de vista previa aparte.

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

## Bloques de código

Los scripts de código de varias líneas se formatean como elementos `pre` **a nivel de bloque**. Cuando escribes o pegas código, TomaNote lo envuelve en un bloque de código Markdown acotado (` ``` `) renderizado como bloque independiente con su propio estilo, separado de los párrafos circundantes en lugar de tratarse como texto en línea.

- Fuente monoespaciada y un fondo distintivo para que los scripts destaquen del texto.
- Los atajos de formato (`Ctrl+B`, `Ctrl+I`, `Ctrl+U`) no se aplican dentro de un bloque de código.

## Enlaces e hipervínculos

### Insertar un enlace

Cómo se abre el modal de enlaces depende de si tienes texto seleccionado:

- **Con selección:** al seleccionar texto e invocar la acción de enlace (barra de herramientas o menú contextual) se abre un modal enfocado con un **único campo de URL**. El texto seleccionado se convierte en el texto mostrado.
- **Sin selección:** la misma acción abre un **diseño personalizado de dos campos** — **URL de destino** más **Texto mostrado personalizado**. Rellena ambos campos y confirma para insertar el nuevo enlace.

### Abrir enlaces en el editor

Los enlaces activos dentro del viewport del espacio de trabajo son clicables:

- `Ctrl + Clic` (Windows/Linux) o `Cmd + Clic` (macOS) abre el destino del enlace.
- Un clic normal mantiene el cursor en el editor para seguir editando el texto.
