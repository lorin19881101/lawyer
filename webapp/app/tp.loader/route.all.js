/**
 * Created by doyen on 2015/7/31.
 */
define([
	'angular',
	'primary/route',
	'message.consult/route',
	'lawyer.mien/route',
	'lawyer.introduce/route',
	'contact/route',
	'common.sense/route',
	'news/route',
	'business.areas/route'
], function () {
	Array.prototype.shift.apply(arguments);
	var routes = arguments;

	return {
		initialize: function () {
			angular.forEach(routes, function (route) {
				route.initialize();
			});
		}
	}
})
