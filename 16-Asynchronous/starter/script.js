'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
// https://restcountries.com/v2/
// https://restcountries.com/v3.1/name/{name}
///////////////////////////////////////

const renderCountryData = function (countryData, cssClass = '') {
  const countryHtml = `
        <article class="country ${cssClass}">
          <img class="country__img" src="${countryData.flag}" />
          <div class="country__data">
            <h3 class="country__name">${countryData.name}</h3>
            <h4 class="country__region">${countryData.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +countryData.population / 1000000
            ).toFixed(1)}
             people</p>
            <p class="country__row"><span>🗣️</span>${
              countryData.languages.pop().name
            }</p>
            <p class="country__row"><span>💰</span>${
              countryData.currencies.pop().name
            }</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', countryHtml);
  countriesContainer.style.opacity = 1;
};

const rederErrorMessage = function (message) {
  countriesContainer.innerText = '';
  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = 1;
};

//getCountryData('portugal');
//getCountryData('brazil');
// getCountryData('germany');
const getCountryData = function (lat, lng) {
  const request = fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=889104758240985692918x106503`
  )
    .then(response => {
      if (response.status !== 200)
        throw new Error(`Error: ${response.statusText}`);
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);
      return data.country;
    })
    .then(countryName =>
      fetch(`https://restcountries.com/v2/name/${countryName}`)
    )
    .then(response => response.json())
    .then(countryData => {
      console.log('Read here ', countryData);
      if (!countryData[0]) throw new Error(`Country not found! - ${country}`);
      renderCountryData(countryData[0]);
      const neighbor = countryData[0].borders && countryData[0].borders[0];
      if (!neighbor) return;

      return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
    })
    .then(response => response.json())
    .then(neighborData => renderCountryData(neighborData, 'neighbour'))
    .catch(err => {
      console.error(err, 'remote error');
      rederErrorMessage(
        `Something went wrong (${err.message}), Please try again!`
      );
    })
    .finally(console.log('Finally Fetch'));
};

// whereAmI(52.508, 13.381);
btn.addEventListener('click', function () {
  getCurrentPosition().then(
    position =>
      getCountryData(position.coords.latitude, position.coords.longitude),
    err => console.log(err)
  );
  // getCountryData(-33.933, 18.474);
  // getCountryData(52.508, 13.381);
  // currentCountry = 'portugal';
  //   getCountryData('qdwedqew');
});

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.log(err)
// );

const getCurrentPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getCurrentPosition().then(
//   position => console.log('Nathan', position),
//   err => console.log(err)
// );

const whereAmIasync = async function () {
  try {
    const position = await getCurrentPosition();
    const { latitude: lat, longitude: lng } = position.coords;
    const countryRes = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=889104758240985692918x106503`
    );
    if (!countryRes.ok) throw new Error('Problem trying to get country info');
    const countryData = await countryRes.json();
    const res = await fetch(
      `https://restcountries.com/v2/name/${countryData.country}`
    );

    const data = await res.json();
    renderCountryData(data[0]);

    return `You are in ${countryData.city}, ${countryData.country}`;
  } catch (err) {
    rederErrorMessage(`Something went wrong 💥 - ${err.message}`);
    // Reject promise
    throw err;
  }
};
console.log('1: Will start!');
// whereAmIasync()
//   .then(string => console.log('2:', string))
//   .finally(() => console.log('3: Finished getting location'));

(async function () {
  const string = await whereAmIasync();
  console.log('2:', string);
  console.log('3: Finished getting location');
})();

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    console.log(data1, data2, data3);

    const parallelData = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(parallelData.map(data => data[0].capital));
  } catch (err) {
    console.log(err.message);
  }
};
get3Countries('brazil', 'portugal', 'canada');

const timeout = function (seconds) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, seconds * 1000);
  });
};

Promise.race([
  fetch('https://restcountries.com/v2/name/tanzania'),
  timeout(0.2),
])
  .then(res => console.log('Race then', res))
  .catch(err => console.log('Race catch', err));
