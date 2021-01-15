var common = {
	some_page: "存在しないページ",
	in_progress: "未完成",
	short_language: "ja",
	short_locale: "ja-jp"
};
var settings = {
	display_preferences: "表示設定"
};
var views = {
	standard: {
		error_404: {
			main: "このページは存在しません."
		}
	},
	welcome: {
		index: {
			short_link: "ホーム",
			welcome: "私のポートフォリオにようこそ！"
		}
	},
	schedule: {
		index: {
			short_link: "スケージュール",
			short_title: "スケージュール",
			long_title: "ミーティングの時間などの提案のためのサミュエルの日程／アベイラビリティ"
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
