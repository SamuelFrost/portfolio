var common = {
	some_page: "A not available page",
	in_progress: "in progress",
	short_language: "en",
	short_locale: "en-us"
};
var settings = {
	display_preferences: "Display Preferences"
};
var views = {
	standard: {
		error_404: {
			main: "Page not found."
		}
	},
	welcome: {
		index: {
			short_link: "Home",
			welcome: "Welcome to my portfolio!"
		}
	},
	schedule: {
		index: {
			short_link: "Schedule",
			short_title: "Schedule",
			long_title: "Samuel's availability for meetings and such"
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
