<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'hQeAECuQaFTPIXyCbT6ZSa8Joow7nA1d+gCMPRh+/WGYaspCXSDQx1rB1vxz8C7wpbKqAZrpgenv98ydGRXcRA==');
define('SECURE_AUTH_KEY',  'jmDvVASnHQKafPEuFFt+kcyFLywDNYoi37VjyWkENVIxp7AnswxU2IrrfOS4vjzycwyrf+crgxyHFVmyx78naA==');
define('LOGGED_IN_KEY',    'CR77lZtwzwwSAxp004L2j06zJ8y90QgJ41Sgh/jeCO77uXzv4wr40+ROFZlqwJ6HSdysxiUC/pRx5VSfTQTIFA==');
define('NONCE_KEY',        '0niD0Poo76muTmqDPcAaT7fkmAjaJrxlqE1gwPALSEcRdWSkqLi49HInM1D+sMzt+cmGqM2MAadpooFuDv5hoQ==');
define('AUTH_SALT',        'SvH0ucW4q+KA7TXj5ic6G7NxXdqWgRcU9CYiH83wgjg1KfamcfAlh1cQy2FJkN9YOpLREWCu0vTdL8zf2qNcqg==');
define('SECURE_AUTH_SALT', 'w78TwUnVpvQPmo/2bLcXNArPbnINqyeLYi7A0zU+7GIiq333bPQredbYRrkbd8dZLS3sNMLpGXqGvasQqPeTNw==');
define('LOGGED_IN_SALT',   'iOGV+flEALt9qxJNSKxt4lk7W/C0+pekVP7rym7Js6qBC8QSQlhn5XorjUdmt7YRJWeh3GAxvTKvB6mA7hvymw==');
define('NONCE_SALT',       'YIr8/dK8/TB9nCwnDd4AMdnJZqcYSbAWxlAulpvWvSJ5529uQ9t7HSNW0noEh1h917Gf02gVzi7UIgrYDQRL6A==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
