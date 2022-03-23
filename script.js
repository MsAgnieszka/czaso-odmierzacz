const eventNameInput = document.querySelector('#event-name');
const eventDayInput = document.querySelector('#event-day');
const eventMonthInput = document.querySelector('#event-month');
const eventYearInput = document.querySelector('#event-year');
const eventImgInput = document.querySelector('#event-image');

const settingsBtn = document.querySelector('.settings-btn');
const settingsPanel = document.querySelector('.settings');
const imageSection = document.querySelector('.image-section');

const daysCount = document.querySelector('.days-count');
const hoursCount = document.querySelector('.hours-count');
const minutesCount = document.querySelector('.minutes-count');
const secondsCount = document.querySelector('.seconds-count');

const saveSettingsBtn = document.querySelector('.save');
const resetSettingsBtn = document.querySelector('.reset-settings');
const error = document.querySelector('.error');

const colorsPanel = document.querySelector('.colors');
const changeColorBtn = document.querySelector('.color-btn');
const saveColorBtn = document.querySelector('.save-color');
const resetColorBtn = document.querySelector('.reset-color');

const eventSpan = document.querySelector('.event');

let userDate;
let root = document.documentElement;
let color;

const showSettingsPanel = () => {
	settingsPanel.classList.toggle('active');
};

const showColorsPanel = () => {
	colorsPanel.classList.toggle('active');
};

const setTime = () => {
	const currentDate = new Date();
	const result = userDate - currentDate;
	const days = Math.floor(result / 1000 / 60 / 60 / 24);
	const hours = Math.floor(result / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(result / 1000 / 60) % 60;
	const seconds = Math.floor(result / 1000) % 60;

	daysCount.textContent = days;
	hoursCount.textContent = hours;
	minutesCount.textContent = minutes;
	secondsCount.textContent = seconds;
};

const updateAllElements = () => {
	if (
		eventNameInput.value !== '' &&
		eventDayInput.value !== '' &&
		eventMonthInput.value !== '' &&
		eventYearInput.value !== '' &&
		eventImgInput.value !== ''
	) {
		eventSpan.textContent = eventNameInput.value;
		userDate = new Date(
			`${eventMonthInput.value} ${eventDayInput.value} ${eventYearInput.value}`
		);
		imageSection.style.backgroundImage = `url('${eventImgInput.value}')`;
		error.style.visibility = 'hidden';
		setTime();
	} else {
		error.style.visibility = 'visible';
	}
};

const resetSettings = () => {
	eventNameInput.value = 'Dzień dziecka';
	eventDayInput.value = '1';
	eventMonthInput.value = '6';
	eventYearInput.value = '2022';
	eventImgInput.value = 'default-image.jpg';
	imageSection.style.backgroundImage = `url('/default-image.jpg')`;
	updateAllElements();
};

const saveNewColor = () => {
	changeColor();
	root.style.setProperty('--main-color', color);
	root.style.setProperty('--hover-btn-color', 'rgb(205,205,205');
};

const changeColor = () => {
	color = document.getElementById('colorInput').value;
	console.log(color);
	// root = color;
};

const resetColor = () => {
	root.style.setProperty('--main-color', 'rgb(255, 235, 215)');
	root.style.setProperty('--hover-btn-color', 'rgb(255, 216, 176)');
};

settingsBtn.addEventListener('click', showSettingsPanel);
saveSettingsBtn.addEventListener('click', updateAllElements);
resetSettingsBtn.addEventListener('click', resetSettings);
changeColorBtn.addEventListener('click', showColorsPanel);
saveColorBtn.addEventListener('click', saveNewColor);
resetColorBtn.addEventListener('click', resetColor);

resetSettings();
setInterval(setTime, 1000);
