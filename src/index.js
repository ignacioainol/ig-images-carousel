let longLivedAccessToken;

const loadCSS = (path, fallbackPath) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = path;

  link.onerror = () => {
    console.error(
      `Error loading CSS from ${path}. Loading fallback CSS from ${fallbackPath}.`
    );
    const fallbackLink = document.createElement('link');
    fallbackLink.rel = 'stylesheet';
    fallbackLink.type = 'text/css';
    fallbackLink.href = fallbackPath;
    document.head.appendChild(fallbackLink);
  };

  document.head.appendChild(link);
};

const fetchInstagramImages = (accessToken) => {
  const url = `https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${accessToken}`;

  return fetch(url, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Fetched Instagram Images:', data);
      displayInstagramImages(data);
    })
    .catch((error) => {
      console.error('Error fetching Instagram images:', error);
    });
};

const displayInstagramImages = ({ data }) => {
  const imagesContainer = document.getElementById('instagram-carousel');
  imagesContainer.innerHTML = '';

  data.forEach((item) => {
    if (item.media_type === 'IMAGE' || item.media_type === 'CAROUSEL_ALBUM') {
      const imageDiv = document.createElement('div');
      imageDiv.style.marginRight = '1.5em';
      imageDiv.style.width = '250px';
      imageDiv.style.position = 'relative';

      imageDiv.addEventListener('click', () => {
        window.location.href = item.permalink;
      });

      const img = document.createElement('img');
      img.src = item.media_url;
      img.alt = item.caption || 'Instagram Image';
      img.style.width = '100%';

      const logo = document.createElement('img');
      logo.src = './src/ig-logo.png';

      logo.onerror = function () {
        logo.src = 'https://services.crossvillefabric.com/test/ig-logo2.png';
      };

      logo.alt = 'Logo';
      logo.classList.add('hover-logo');

      imageDiv.appendChild(img);
      imageDiv.appendChild(logo);
      imagesContainer.appendChild(imageDiv);
    }
  });
};

const refreshAccessToken = () => {
  const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${longLivedAccessToken}`;

  return fetch(url, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      longLivedAccessToken = data.access_token;
      console.log(
        'Token refreshed. New Long-Lived Access Token:',
        longLivedAccessToken
      );
      return longLivedAccessToken;
    })
    .catch((error) => {
      console.error('Error refreshing the token:', error);
    });
};

const loadInstagramImages = async () => {
  const refreshedToken = await refreshAccessToken();
  fetchInstagramImages(refreshedToken);
};

export function initInstagramCarousel(options = {}) {
  let igName = options.igName || igTag.getAttribute('data-ig-name');
  const igTag = document.getElementById('instagram-area');
  let autoSlideInterval;

  loadCSS(
    './src/ig-style.css',
    'https://services.crossvillefabric.com/test/ig-style.css'
  );

  const heading = document.createElement('h3');
  heading.setAttribute('role', 'heading');
  heading.setAttribute('aria-level', '3');
  heading.classList.add('instagram-heading');
  heading.innerHTML = `Instagram &#64;${igName}`;

  const sliderContainer = document.createElement('div');
  sliderContainer.classList.add('instagram-slider-container');

  const prevButton = document.createElement('button');
  prevButton.classList.add('slider-arrow', 'slider-arrow--prev');
  prevButton.textContent = '<';

  const slider = document.createElement('div');
  slider.classList.add('instagram-slider');

  const carousel = document.createElement('div');
  carousel.setAttribute('id', 'instagram-carousel');
  carousel.classList.add('instagram-carousel');

  slider.appendChild(carousel);

  const nextButton = document.createElement('button');
  nextButton.classList.add('slider-arrow', 'slider-arrow--next');
  nextButton.textContent = '>';

  sliderContainer.appendChild(prevButton);
  sliderContainer.appendChild(slider);
  sliderContainer.appendChild(nextButton);

  igTag.appendChild(heading);
  igTag.appendChild(sliderContainer);
  loadInstagramImages();

  let currentPosition = 0;
  const slideWidth = 250 + 24;
  const maxVisibleSlides = Math.floor(
    document.querySelector('.instagram-slider').offsetWidth / slideWidth
  );

  const sliderNext = document.querySelector('.slider-arrow--next');
  const sliderPrev = document.querySelector('.slider-arrow--prev');

  const slideCarousel = (direction) => {
    const totalWidth = carousel.children.length * slideWidth;
    const visibleWidth =
      document.querySelector('.instagram-slider').offsetWidth;
    const maxPosition = Math.max(totalWidth - visibleWidth, 0); // Asegura que no haya valores negativos

    if (direction === 'next') {
      if (currentPosition < maxPosition) {
        currentPosition = Math.min(currentPosition + slideWidth, maxPosition);
      } else {
        // Si llegamos al final, volvemos al principio
        currentPosition = 0;
      }
    } else {
      if (currentPosition > 0) {
        currentPosition -= slideWidth;
      } else {
        // Si estamos al principio y vamos hacia atrás, saltamos al final
        currentPosition = maxPosition;
      }
    }

    carousel.style.transform = `translateX(-${currentPosition}px)`;
  };

  const startAutoSlide = (direction) => {
    autoSlideInterval = setInterval(() => slideCarousel(direction), 100);
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
  };

  sliderNext.addEventListener('click', () => slideCarousel('next'));
  sliderPrev.addEventListener('click', () => slideCarousel('prev'));

  sliderNext.addEventListener('mousedown', () => startAutoSlide('next'));
  sliderNext.addEventListener('mouseup', stopAutoSlide);
  sliderNext.addEventListener('mouseleave', stopAutoSlide);

  sliderPrev.addEventListener('mousedown', () => startAutoSlide('prev'));
  sliderPrev.addEventListener('mouseup', stopAutoSlide);
  sliderPrev.addEventListener('mouseleave', stopAutoSlide);
  if (!igTag) {
    console.error('Element with id "instagram-area" not found');
    return;
  }

  longLivedAccessToken =
    options.longLivedAccessToken || igTag.getAttribute('data-ig-token');

  if (!longLivedAccessToken || !igName) {
    console.error('Access token or Instagram name not provided');
    return;
  }

  // Inicialización
  function initialize() {
    loadInstagramImages();
  }

  // Ejecutar la inicialización cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
}

// Si estamos en un entorno de navegador, exponemos la función globalmente
if (typeof window !== 'undefined') {
  window.initInstagramCarousel = initInstagramCarousel;
}
