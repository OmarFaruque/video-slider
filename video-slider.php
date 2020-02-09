<?php
/**
 * Plugin Name:       video-slider
 * Plugin URI:        https://larasoftbd.net/plugins/
 * Description:       Video & image slider with audeo as like linkedIN for post and pages using gutenberg editor.
 * Version:           1.0.1
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Omar Faruque
 * Author URI:        https://omar-faruque.me/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       video-slider
 * Domain Path:       /languages
 */




if (!class_exists('vdClass')) {
    final class vdClass{
        /**
         * This plugin's instance.
         *
         * @var vdslider
         * @since 1.0.1
         */
        private static  $instance ;

        /**
         * Main vdslider Instance.
         *
         * Insures that only one instance of vdslider exists in memory at any one
         * time. Also prevents needing to define globals all over the place.
         *
         * @since 1.0.0
         * @static
         * @return object|VDslider The one true vdslider
         */
        public static function instance()
        {
            
            if ( !isset( self::$instance ) && !self::$instance instanceof vdClass ) {
                self::$instance = new vdClass();
                self::$instance->init();
                self::$instance->constants();
                self::$instance->asset_suffix();
                self::$instance->includes();
            }
            
            return self::$instance;
        }

        /**
         * Throw error on object clone.
         *
         * The whole idea of the singleton design pattern is that there is a single
         * object therefore, we don't want the object to be cloned.
         *
         * @since 1.0.0
         * @access protected
         * @return void
         */
        public function __clone()
        {
            // Cloning instances of the class is forbidden.
            _doing_it_wrong( __FUNCTION__, esc_html__( 'Cheating huh?', 'video-slider' ), '1.0' );
        }

         /**
         * Disable unserializing of the class.
         *
         * @since 1.0.0
         * @access protected
         * @return void
         */
        public function __wakeup()
        {
            // Unserializing instances of the class is forbidden.
            _doing_it_wrong( __FUNCTION__, esc_html__( 'Cheating huh?', 'vedio-slider' ), '1.0' );
        }


        /**
         * Setup plugin constants.
         *
         * @access private
         * @since 1.0.0
         * @return void
         */
        private function constants()
        {

            // echo 'tst Omar0 <br/>';
            $this->define( 'VDSLIDER_VERSION', '1.12.0' );
            $this->define( 'VDSLIDER_HAS_PRO', false );
            $this->define( 'VDSLIDER_PLUGIN_NAME', 'vedio-slider' );
            $this->define( 'VDSLIDER_PLUGIN_SLUG', 'vedio-slider' );
            $this->define( 'VDSLIDER_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
            $this->define( 'VDSLIDER_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
            $this->define( 'VDSLIDER_PLUGIN_FILE', __FILE__ );
            $this->define( 'VDSLIDER_PLUGIN_BASE', plugin_basename( __FILE__ ) );
            $this->define( 'VDSLIDER_REVIEW_URL', get_home_url() );
            
        }
        

        /**
         * Define constant if not already set.
         *
         * @param  string|string $name Name of the definition.
         * @param  string|bool   $value Default value.
         */
        private function define( $name, $value )
        {
            if ( !defined( $name ) ) {
                define( $name, $value );
            }
        }


        /**
         * Include required files.
         *
         * @access private
         * @since 1.0.0
         * @return void
         */
        private function includes()
        {
            require_once VDSLIDER_PLUGIN_DIR . 'src/init.php';
            
            if ( is_admin() || defined( 'WP_CLI' ) && WP_CLI ) {
                require_once VDSLIDER_PLUGIN_DIR . 'includes/admin/class-vdslider-admin-start-page.php';
            }
        
        }

        /**
         * Load actions
         *
         * @return void
         */
        private function init()
        {
            add_action( 'plugins_loaded', array( $this, 'load_textdomain' ), 99 );
            add_action( 'enqueue_block_editor_assets', array( $this, 'block_localization' ) );
        }
        

        /**
         * Change the plugin's minified or src file name, based on debug mode.
         *
         * @since 1.0.0
         */
        public function asset_suffix()
        {
            $suffix = ( SCRIPT_DEBUG ? null : '.min' );
            $this->define( 'VDSLIDER_ASSET_SUFFIX', $suffix );
        }
        

        /**
         * If debug is on, serve unminified source assets.
         *
         * @since 1.0.0
         * @param string|string $type The type of resource.
         * @param string|string $directory Any extra directories needed.
         */
        public function asset_source( $type = 'js', $directory = null )
        {
            // if ( 'js' === $type ) {
            // 	return SCRIPT_DEBUG ? VDSLIDER_PLUGIN_URL . 'src/' . $type . '/' . $directory : VDSLIDER_PLUGIN_URL . 'dist/' . $type . '/' . $directory;
            // } else {
            // return VDSLIDER_PLUGIN_URL . 'dist/css/' . $directory;
            // }
            return VDSLIDER_PLUGIN_URL . 'dist';
        }

        /**
         * Loads the plugin language files.
         *
         * @access public
         * @since 1.0.0
         * @return void
         */
        public function load_textdomain()
        {
            load_plugin_textdomain( 'vedio-slider', false, dirname( plugin_basename( VDSLIDER_PLUGIN_DIR ) ) . '/languages/' );
        }

        /**
         * Enqueue localization data for our blocks.
         *
         * @access public
         */
        public function block_localization()
        {
            if ( function_exists( 'wp_set_script_translations' ) ) {
                wp_set_script_translations( 'vedioslider-editor', 'vedioslider' );
            }
        }
    } // end  final class vdClass
}



/**
 * The main function for that returns vedio-slider
 *
 * The main function responsible for returning the one true vedio-slider
 * Instance to functions everywhere.
 *
 * Use this function like you would a global variable, except without needing
 * to declare the global.
 *
 * Example: <?php $vedioslider = vedioslider(); ?>
 *
 * @since 1.0.1
 * @return object|vedioslider The one true vedioslider Instance.
 */
function Vedioslider()
{
    return vdClass::instance();
}

if ( function_exists( 'is_multisite' ) && is_multisite() ) {
    add_action( 'plugins_loaded', 'Vedioslider', 90 );
} else {
    Vedioslider();
}

