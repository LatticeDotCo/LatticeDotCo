---
title: "MLOps en entornos complejos"
date: 2025-02-22
description: "> Revisa nuestro proceso de implementación para entornos mineros."
draft: false
author: "jcort"
type: "post"
tags: ["ModelOps", "DevOps", "IaC", "ml pipelines", "LLMs"]
categories: ["MLOps"]
---

To add a cover image to your article, you have two options:

1. Front Matter Method

You can use either `cover` or `images` parameter for the images source.
And `alt`, `coverAlt` or `imagesAlt` parameter for alt text.

```yaml
---
title: "My Article"
images: "images/my-cover.jpg"
alt: "Description of the images"
---
```

2. Page Bundle Method

- Create a folder for your post
- Name your image `cover.*`
- Place it in the same folder as your content
- Set the alt text in your post frontmatter

## Adding Audio Articles

1. Front Matter Method

```yaml
---
title: "My Article"
audio: "audio/my-audio.ogg"
---
```

2. Page Bundle Method

You can upload multiple audio format with this method:

- Create a folder for your post
- Name your audio `audio.*`
- Place it in the same folder as your content

## Page Bundle Method Examples

Here's how your folder structure should look:

    content/
    └── posts/
        └── my-article/
            ├── index.md
            ├── cover.jpg
            ├── audio.mp3
            └── audio.ogg