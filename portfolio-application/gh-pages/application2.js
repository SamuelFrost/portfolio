var common = {
	some_page: "Some place nowhere",
	in_progress: "workin' on it"
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
	}
};
var application = {
	common: common,
	settings: settings,
	views: views
};

export default application;
export { common, settings, views };
