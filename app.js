let map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Track your City by IP
const findCoordinates = async () => {
  const response = await fetch("https://ipapi.co/json/");
  const userData = await response.json();

  const userCordinates = [userData.latitude, userData.longitude];
  const zoomLevel = 13;
  return map.setView(userCordinates, zoomLevel);
};

findCoordinates();

const userSettingFrom = document.querySelector(`#settings-form`);

userSettingFrom.addEventListener(`submit`, function (event) {
  event.preventDefault();
  const userCountry = document.querySelector(`#userCountry`).value;
  const userCity = document.querySelector(`#userCity`).value;
  userCountry === "" || userCity === ""
    ? console.log(`You have to  fill in all the fields`)
    : console.log(`User country:`, typeof userCountry, `User City:`, userCity);
});
