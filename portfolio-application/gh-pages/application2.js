var common = {
	some_page: "Some place nowhere",
	in_progress: "workin' on it",
	short_language: "en",
	short_locale: "en-pirate"
};
var settings = {
	display_preferences: "How things be lookin' like"
};
var views = {
	standard: {
		error_404: {
			main: "This not be a page we got available matey."
		}
	},
	welcome: {
		index: {
			short_link: "Home",
			welcome: "Welcome to me app matey!"
		}
	},
	schedule: {
		index: {
			short_link: "Schedule",
			short_title: "My calendarrrr",
			long_title: "Times to be reachin' out to me for meetings and stuff"
		}
	}
};
var application = {
	common: common,
	settings: settings,
	views: views
};

export default application;
export { common, settings, views };
