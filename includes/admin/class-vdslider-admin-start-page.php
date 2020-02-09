<?php
/**
 * Create a Getting Started page that fires after plugin activation
 *
 * @package videoslider
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Videoslider_Getting_Started_Page Class
 */
class Videoslider_Admin_Start_Page {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'admin_menu', array( $this, 'admin_menu' ) );
		add_action( 'activated_plugin', array( $this, 'redirect' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'load_style' ), 100 );
	}

	/**
	 * Setup the admin menu.
	 */
	public function admin_menu() {

		/**
		 * Allow users to nest the Videoslider menu page
		 *
		 * @var string
		 */
		$submenu_parent_slug = (string) apply_filters( 'videoslider_getting_started_submenu_parent_slug', '' );

		// if ( '' !== $submenu_parent_slug ) {
		//
		// 	add_menu_page(
		// 		$submenu_parent_slug,
		// 		__( 'Videoslider', 'videoslider' ),
		// 		__( 'Videoslider', 'videoslider' ),
		// 		apply_filters( 'videoslider_getting_started_screen_capability', 'manage_options' ),
		// 		'videoslider-getting-started',
		// 		array( $this, 'content' )
		// 	);
		//
		// 	return;
		//
		// }

		add_menu_page(
			__( 'Videoslider', 'videoslider' ),
			__( 'Videoslider', 'videoslider' ),
			'manage_options',
			'settings_page_videoslider',
			[ $this, 'render' ]
		);
	}

	/**
	 * Render the view using MVC pattern.
	 */
	public function render() {
		$heading = VDSLIDER_PLUGIN_NAME;

		// View.
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/partials/view.php';
	}

	/**
	 * Load Scripts
	 *
	 * Enqueues the required scripts.
	 *
	 * @return void
	 */
	public function load_style() {

		global $wp_query;

		$screen    = get_current_screen();
		$screen_id = $screen ? $screen->id : '';

		// Only enqueue admin scripts and styles on relevant pages.
		if ( false !== strpos( $screen_id, 'settings_page_videoslider' ) ) {

			// Define where the assets are loaded from.
			$dir = Vedioslider()->asset_source( 'dist' );

			wp_enqueue_style(
				'videoslider-getting-started',
				$dir . '/videoslider-admin.build.css',
				VDSLIDER_VERSION,
				true
			);

			wp_enqueue_script(
				'videoslider-admin-js',
				$dir . '/videoslider-admin.build.js',
				array(),
				VDSLIDER_VERSION,
				true
			);
		}

	}

	/**
	 * Redirect to the Getting Started page upon plugin activation.
	 *
	 * @param string $plugin The activate plugin name.
	 */
	public function redirect( $plugin ) {

		if ( 'videoslider/class-videoslider.php' !== $plugin ) {

			return;

		}

		$nonce          = filter_input( INPUT_GET, '_wpnonce', FILTER_SANITIZE_STRING );
		$activate_multi = filter_input( INPUT_GET, 'activate-multi', FILTER_VALIDATE_BOOLEAN );

		if ( ! $nonce ) {

			return;

		}

		if ( defined( 'WP_CLI' ) && WP_CLI ) {

			WP_CLI::log(
				WP_CLI::colorize(
					'%b' . sprintf( '🎉 %s %s', __( 'Get started with Videoslider here:', 'videoslider' ), admin_url( 'admin.php?page=videoslider-getting-started' ) ) . '%n'
				)
			);

			return;

		}

		if ( $activate_multi ) {

			return;

		}

		wp_safe_redirect( admin_url( 'admin.php?page=videoslider-getting-started' ) );

		die();

	}
}

return new Videoslider_Admin_Start_Page();
