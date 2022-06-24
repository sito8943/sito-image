# sito-image

Image with shimmer loader

### What is a shimmer?

A powerful, customizable, Suspense-like <img> component that (optionally) simulates a shimmer effect while loading.

### How to use it?

```
import SitoImage from "sito-image";

function App() {
    return {
        <SitoImage src="https://source.unsplash.com/random/800x600" alt="shimmer-example" />
    }
}

```

You can change the name of the container, if you don't like its name 😂

```
import Image as Container from "sito-image";

function App() {
    return {
        <Image src="https://source.unsplash.com/random/800x600" alt="shimmer-example" />
    }
}

```

Yo can add your css rules, like `sx` prop for [styled-component](https://emotion.sh/docs/introduction), `style` prop like inline css styles and classNames from your css files

```
import Image as Container from "sito-image";

function App() {
    return {
        <Image
            sx={{ width: "350px", height: "350px" }}
            src="https://source.unsplash.com/random/800x600"
            alt="shimmer-example"
        />
    }
}

```

## Props

| Name       | Type                                               | Default    | Description                                                                                                                                                                                                                                                                                                                                                                        |   |
|------------|----------------------------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---|
| id         | string                                             |            | html identifier                                                                                                                                                                                                                                                                                                                                                                    |   |
| name       | string                                             |            | html name                                                                                                                                                                                                                                                                                                                                                                          |   |
| className  | string                                             |            | css class name                                                                                                                                                                                                                                                                                                                                                                     |   |
| alt        | string                                             | "no-image" | The required alt attribute specifies an alternate text for an image, if the image cannot be displayed. The alt attribute provides alternative information for an image if a user for some reason cannot view it (because of slow connection, an error in the src  attribute, or if the user uses a screen reader). Tip: To create a tooltip for an image, use the title attribute! |   |
| width      | number                                             | 250        | image width. IMPORTANT!! If width is passed with sx prop, width prop will be overitten                                                                                                                                                                                                                                                                                             |   |
| height     | number                                             | 250        | image height. IMPORTANT!! If height is passed with sx prop, height prop will be overitten                                                                                                                                                                                                                                                                                          |   |
| sx         | Array<func \| object  \| bool>  \| func  \| object |            | The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page  for more details.                                                                                                                                                                                                                                                       |   |
| style      | Array<func \| object  \| bool>  \| func  \| object |            | inline css                                                                                                                                                                                                                                                                                                                                                                         |   |
| extraProps | Array<func \| object  \| bool>  \| func  \| object |            | extra props like: onClick, onMouseEnter, etc                                                                                                                                                                                                                                                                                                                                       |   |

🙌 Good luck out there my friend 🙌
