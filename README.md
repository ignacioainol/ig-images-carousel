# Instagram Carousel

This project creates an Instagram carousel using JavaScript, which loads Instagram images dynamically through the Instagram API. It also allows automatic sliding and supports custom styling through CSS.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [API Token](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
- [Contributing](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
- [License](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

## Installation

using npm:

> npm i ig-images-carousel

## Usage

```html
<div id="instagram-area"></div>

<script src="./dist/index.umd.js"></script>
<script>
  ignaCarousel.initInstagramCarousel({
    longLivedAccessToken: 'APP_TOKEN',
    igName: 'NAME_OF_INSTAGRAM',
  });
</script>
```
