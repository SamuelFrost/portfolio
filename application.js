var common = {
	some_page: "A not available page",
	in_progress: "in progress"
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
	}
};
var application = {
	common: common,
	settings: settings,
	views: views
};

export default application;
export { common, settings, views };
