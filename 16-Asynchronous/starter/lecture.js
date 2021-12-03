const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function (e) {
    //   console.log(this.responseText, e);
    const [countryData] = JSON.parse(this.responseText);
    console.log(countryData);
    renderCountryData(countryData);

    const neighborRequest = new XMLHttpRequest();
    const [neighbor] = countryData.borders;
    neighborRequest.open(
      'GET',
      `https://restcountries.com/v2/alpha/${neighbor}`
    );
    neighborRequest.send();
    neighborRequest.addEventListener('load', function () {
      //   console.log(this.responseText, e);
      const neighborData = JSON.parse(this.responseText);
      console.log(neighborData);
      renderCountryData(neighborData, 'neighbour');
    });
  });
};
