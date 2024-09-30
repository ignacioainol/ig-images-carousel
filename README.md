# Instagram Carousel

This project creates an Instagram carousel using JavaScript, which loads Instagram images dynamically through the Instagram API. It also allows automatic sliding and supports custom styling through CSS.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [API Token](#api-token)
- [License](#license)

## Installation

using npm:

> npm i ig-images-carousel

## Usage

```html
<div id="instagram-area"></div>

<script src="./node_modules/ig-images-carousel/dist/index.umd.js"></script>
<script>
  ignaCarousel.initInstagramCarousel({
    longLivedAccessToken: 'APP_TOKEN',
    igName: 'NAME_OF_INSTAGRAM',
  });
</script>
```

## API TOKEN

To generate an Instagram API token, follow these steps:

1. Set up a [Facebook Developer App.](https://developers.facebook.com/apps/)
2. Add Instagram Basic Display to your app in the dashboard.
3. Generate a short-lived access token using the User Token Generator under Instagram Basic Display.
4. Exchange the short-lived token for a long-lived access token by making a GET request to:

```bash
    https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret={your-app-secret}&access_token={your-short-lived-access-token}
```

## LICENSE

This project is licensed under the MIT License
