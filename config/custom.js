/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */
const pkg = require("./../package.json");

module.exports.custom = {
	version: pkg.version,
	baseUrl: 'http://image.xiakofin.com'
	/***************************************************************************
	 *                                                                          *
	 * Any other custom config this Sails app should use during development.    *
	 *                                                                          *
	 ***************************************************************************/
	// mailgunDomain: 'transactional-mail.example.com',
	// mailgunSecret: 'key-testkeyb183848139913858e8abd9a3',
	// stripeSecret: 'sk_test_Zzd814nldl91104qor5911gjald',
	// …

};
