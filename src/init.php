<?php

/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package Videoslider
 */
// Exit if accessed directly.
if ( !defined( 'ABSPATH' ) ) {
    exit;
}

if ( !function_exists( 'eedee_videoslider_activation' ) ) {
    /**
     * Check if free / pro version is active on activation and deactivate in case
     */
    function eedee_videoslider_activation()
    {
        if ( is_plugin_active( 'videoslider/eedee-videoslider.php' ) ) {
            deactivate_plugins( 'videoslider/eedee-videoslider.php' );
        }
        if ( is_plugin_active( 'videoslider-premium/eedee-videoslider.php' ) ) {
            deactivate_plugins( 'videoslider-premium/eedee-videoslider.php' );
        }
    }
    
    register_activation_hook( __FILE__, 'eedee_videoslider_activation' );
}

if ( !function_exists( 'eedee_videoslider_block_assets' ) ) {
    /**
     * Enqueue Gutenberg block assets for both frontend + backend.
     *
     * Assets enqueued:
     * 1. blocks.style.build.css - Frontend + Backend.
     * 2. blocks.build.js - Backend.
     * 3. blocks.editor.build.css - Backend.
     *
     * @uses {wp-blocks} for block type registration & related functions.
     * @uses {wp-element} for WP Element abstraction — structure of blocks.
     * @uses {wp-i18n} to internationalize the block's text.
     * @uses {wp-editor} for WP editor styles.
     * @since 1.0.0
     */
    function eedee_videoslider_block_assets()
    {
        // phpcs:ignore
        // Register block styles for both frontend + backend.
        wp_register_style(
            'eedee-videoslider-style-css',
            // Handle.
            plugins_url( 'dist/videoslider-blocks.style.build.css', dirname( __FILE__ ) ),
            // Block style CSS.
            array(),
            // Dependency to include the CSS after it.
            filemtime( plugin_dir_path( __DIR__ ) . 'dist/videoslider-blocks.style.build.css' )
        );
        wp_register_style(
            'eedee-videoslider-slick-css',
            // Handle.
            plugins_url( 'src/vendor/slick/slick.css', dirname( __FILE__ ) ),
            // Block style CSS.
            array(),
            // Dependency to include the CSS after it.
            filemtime( plugin_dir_path( __DIR__ ) . 'src/vendor/slick/slick.css' )
        );
        wp_register_style(
            'eedee-videoslider-slick-theme-css',
            // Handle.
            plugins_url( 'src/vendor/slick/slick-theme.css', dirname( __FILE__ ) ),
            // Block style CSS.
            array(),
            // Dependency to include the CSS after it.
            filemtime( plugin_dir_path( __DIR__ ) . 'src/vendor/slick/slick-theme.css' )
        );
        wp_register_script(
            'eedee-videoslider-slick-js',
            plugins_url( '/src/vendor/slick/slick.min.js', dirname( __FILE__ ) ),
            array( 'jquery' ),
            filemtime( plugin_dir_path( __DIR__ ) . '/src/vendor/slick/slick.min.js' ),
            true
        );

        wp_register_script(
            'eedee-videoslider-googlefontpreview-js',
            plugins_url( 'dist/jquery.fontselect.js', dirname( __FILE__ ) ),
            array( 'jquery' ),
            time(),
            true
        );


        wp_register_script(
            'eedee-videoslider-js',
            plugins_url( '/dist/videoslider.js', dirname( __FILE__ ) ),
            array( 'jquery', 'eedee-videoslider-slick-js' ),
            filemtime( plugin_dir_path( __DIR__ ) . '/dist/videoslider.js' ),
            true
        );

        wp_register_script(
            'eedee-googlefonts-js',
            'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyA98Mf3qguzrtO2pZKNGFyLsHX5qs9s6OA&callback=onFontsLoad',
            array( 'jquery' ),
            time(),
            false
        );
        
        // Register block editor script for backend.
        wp_register_script(
            'eedee-videoslider-block-js',
            // Handle.
            // plugins_url( '/dist/videoslider-blocks.build.js', dirname( __FILE__ ) ),
            plugins_url( '/dist/videoslider-blocks.pro.build.js', dirname( __FILE__ ) ),
            
            // Block.build.js: We register the block here. Built with Webpack.
            array(
                'wp-blocks',
                'wp-i18n',
                'wp-element',
                'wp-data'
            ),
            // Dependencies, defined above.
            // filemtime( plugin_dir_path( __DIR__ ) . 'dist/videoslider-blocks.build.js' ),
            filemtime( plugin_dir_path( __DIR__ ) . 'dist/videoslider-blocks.pro.build.js' ),
            // Version: filemtime — Gets file modification time.
            true
        );
        // Register block editor styles for backend.
        wp_register_style(
            'eedee-videoslider-block-editor-css',
            // Handle.
            plugins_url( 'dist/videoslider-blocks.editor.build.css', dirname( __FILE__ ) ),
            // Block editor CSS.
            array( 'wp-edit-blocks' ),
            // Dependency to include the CSS after it.
            filemtime( plugin_dir_path( __DIR__ ) . 'dist/videoslider-blocks.editor.build.css' )
        );
        $editor_script = 'eedee-videoslider-block-js';
        $scripts = [ 'eedee-videoslider-slick-js', 'eedee-videoslider-js', 'eedee-videoslider-googlefontpreview-js'];
        if ( function_exists( 'register_block_type' ) ) {
            /***
             * Register Gutenberg block on server-side.
             *
             * Register the block on server-side to ensure that the block
             * scripts and styles for both frontend and backend are
             * enqueued when the editor loads.
             *
             * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
             * @since 1.16.0
             */
            // register_block_type(
            // 	'eedee/block-videoslide',
            // 	array(
            // 		'attributes'      => array(
            // 			'isEditable' => array(
            // 				'type' => 'boolean',
            // 				'default' => true,
            // 			),
            // 			'mediaUrl' => array(
            // 				'type' => 'string',
            // 				'source' => 'attribute',
            // 				'selector' => '.slide-bg img, .slide-bg video',
            // 				'attribute' => 'src',
            // 			),
            // 			'mediaAlt' => array(
            // 				'type' => 'string',
            // 				'source' => 'attribute',
            // 				'selector' => '.slide-bg img',
            // 				'attribute' => 'alt',
            // 				'default' => '',
            // 			),
            // 			'mediaType' => array(
            // 				'type' => 'string',
            // 			),
            // 			'mediaId' => array(
            // 				'type' => 'number',
            // 			),
            // 			'overlayColor' => array(
            // 				'type' => 'string',
            // 			),
            // 			'dimRatio' => array(
            // 				'type' => 'number',
            // 				'default' => 0.5,
            // 			),
            // 			'rgbaBackground' => array(
            // 				'type' => 'string',
            // 				'default' => '',
            // 			),
            // 			'initialized' => array(
            // 				'type' => 'boolean',
            // 				'default' => false,
            // 			),
            // 			'linkUrl' => array(
            // 				'type' => 'string',
            // 				'default' => '',
            // 			),
            // 			'verticalAlign' => array(
            // 				'type' => 'string',
            // 				'default' => 'center',
            // 			),
            // 		),
            // 		'render_callback' => 'eedee_videoslide_dynamic_render_callback',
            // 	)
            // );
            register_block_type( 'eedee/block-gutenslider', array(
            'attributes'      => array(
                'align'             => array(
                'type'    => 'string',
                'default' => 'none',
            ),
                'contentMode'       => array(
                'type'    => 'string',
                'default' => 'change',
            ),
                'bgImageId'         => array(
                'type' => 'number',
            ),
            'fadeMode'          => array(
                'type'    => 'boolean',
                'default' => true,
            ),
            'audioURL'          => array(
                'type'    => 'number',
                'default' => '',
            ),
                'slidesToShow'      => array(
                'type'    => 'number',
                'default' => 1,
            ),
                'slidesToScroll'    => array(
                'type'    => 'number',
                'default' => 1,
            ),
                'sliderHeight'      => array(
                'type'    => 'string',
                'default' => '50vh',
            ),
                'isFullScreen'      => array(
                'type'    => 'boolean',
                'default' => false,
            ),
                'pauseOnHover'      => array(
                'type'    => 'boolean',
                'default' => true,
            ),
                'pauseOnFocus'      => array(
                'type'    => 'boolean',
                'default' => true,
            ),
                'pauseOnDotsHover'  => array(
                'type'    => 'boolean',
                'default' => true,
            ),
                'enableSpacing'     => array(
                'type'    => 'boolean',
                'default' => true,
            ),
                'spacingX'          => array(
                'type'    => 'number',
                'default' => 40,
            ),
                'spacingY'          => array(
                'type'    => 'number',
                'default' => 40,
            ),
                'spacingXMobile'    => array(
                'type'    => 'number',
                'default' => 40,
            ),
                'spacingYMobile'    => array(
                'type'    => 'number',
                'default' => 40,
            ),
                'spacingXTablet'    => array(
                'type'    => 'number',
                'default' => 40,
            ),
                'spacingYTablet'    => array(
                'type'    => 'number',
                'default' => 40,
            ),
                'spacingXDesktop'   => array(
                'type'    => 'number',
                'default' => 40,
            ),
                'spacingYDesktop'   => array(
                'type'    => 'number',
                'default' => 40,
            ),
                'spacingXUnit'      => array(
                'type'    => 'string',
                'default' => 'px',
            ),
                'spacingYUnit'      => array(
                'type'    => 'string',
                'default' => 'px',
            ),
                'autoplay'          => array(
                'type'    => 'boolean',
                'default' => true,
            ),
                'duration'          => array(
                'type'    => 'number',
                'default' => 3,
            ),
                'fadeSpeed'         => array(
                'type'    => 'number',
                'default' => 1,
            ),
                'arrows'            => array(
                'type'    => 'boolean',
                'default' => true,
            ),
                'arrowSize'         => array(
                'type'    => 'number',
                'default' => 20,
            ),
                'arrowColor'        => array(
                'type'    => 'string',
                'default' => '#ffffff',
            ),
                'arrowStyle'        => array(
                'type'    => 'string',
                'default' => 'arrow-style-1',
            ),
                'dots'              => array(
                'type'    => 'boolean',
                'default' => true,
            ),
                'dotSize'           => array(
                'type'    => 'number',
                'default' => 25,
            ),
                'dotColor'          => array(
                'type'    => 'string',
                'default' => '#ffffff',
            ),
                'dotStyle'          => array(
                'type'    => 'string',
                'default' => 'dot-style-1',
            ),
                'hasParallax'       => array(
                'type'    => 'boolean',
                'default' => false,
            ),
                'parallaxDirection' => array(
                'type'    => 'string',
                'default' => 'bottom',
            ),
                'parallaxAmount'    => array(
                'type'    => 'number',
                'default' => 1.3,
            ),
                'overlayColor'      => array(
                'type' => 'string',
            ),
                'dimRatio'          => array(
                'type'    => 'number',
                'default' => 0.5,
            ),
                'rgbaBackground'    => array(
                'type'    => 'string',
                'default' => '',
            ),
                'textColor'         => array(
                'type' => 'string',
            ),
                'mixBlendMode'      => array(
                'type'    => 'string',
                'default' => 'mb-none',
            ),
                'contentOpacity'    => array(
                'type'    => 'number',
                'default' => 1,
            ),
                'verticalAlign'     => array(
                'type'    => 'string',
                'default' => 'center',
            ),
            ),
                'style'           => [
                'eedee-videoslider-style-css',
                'eedee-videoslider-slick-css',
                'eedee-videoslider-slick-theme-css',
                'dashicons'
            ],
                'script'          => $scripts,
                'editor_script'   => $editor_script,
                'editor_style'    => 'eedee-videoslider-block-editor-css',
                'render_callback' => 'eedee_videoslider_dynamic_render_callback',
            ) );
        }
    }

}
// if ( ! function_exists( 'eedee_videoslide_dynamic_render_callback' ) ) {
// 	function eedee_videoslider_dynamic_render_callback( $attr, $inner_content ) {
// 		return 'innerContent:' . $inner_content;
// 	}
// }
if ( !function_exists( 'eedee_videoslider_dynamic_render_callback' ) ) {
    /**
     * Register Gutenberg block template that is rendered on server side
     *
     * @param Array  $attr are the attributes from the block.
     * @param String $inner_content the content of videosliders innerBlocks.
     * @link  https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
     * @uses  {save} the content returned from the save function of Videoslider block.
     * @since 1.16.0
     */
    function eedee_videoslider_dynamic_render_callback( $attr, $inner_content )
    {

        

        // echo '<pre>';
        // print_r($attr);
        // echo '</pre>';
        $audioURL = $attr['audioURL'];
        $audioURL = wp_get_attachment_url( $audioURL );

        $class = sprintf( 'wp-block-eedee-block-videoslider content-%1$s', $attr['contentMode'] );
        if ( isset( $attr['align'] ) ) {
            $class .= ' align' . $attr['align'];
        }
        if ( isset( $attr['isFullScreen'] ) && $attr['isFullScreen'] ) {
            $class .= ' is-full';
        }
        if ( isset( $attr['isFullScreen'] ) && !$attr['isFullScreen'] && isset( $attr['parallax'] ) && $attr['parallax'] ) {
            $class .= ' is-full';
        }
        if ( isset( $attr['hasParallax'] ) && $attr['hasParallax'] ) {
            $class .= ' has-parallax';
        }
        if ( isset( $attr['arrowStyle'] ) && $attr['arrowStyle'] ) {
            $class .= ' ' . $attr['arrowStyle'];
        }
        if ( isset( $attr['dotStyle'] ) && $attr['dotStyle'] ) {
            $class .= ' ' . $attr['dotStyle'];
        }
        if ( isset( $attr['className'] ) ) {
            $class .= ' ' . $attr['className'];
        }
        if ( isset( $attr['verticalAlign'] ) ) {
            $class .= ' vertical-align-' . $attr['verticalAlign'];
        }
        $bg_image = null;
        if ( isset( $attr['bgImageId'] ) ) {
            $bg_image = wp_get_attachment_image_src( $attr['bgImageId'], 'medium' )[0];
        }
        $component_style = sprintf(
            '--videoslider-min-height: %1$s;' . '--videoslider-arrow-size: %2$spx;' . '--videoslider-dot-size: %3$spx;' . '--videoslider-arrow-color: %4$s;' . '--videoslider-dot-color: %5$s;' . '--videoslider-padding-y-mobile: %6$s%12$s;' . '--videoslider-padding-x-mobile: %7$s%13$s;' . '--videoslider-padding-y-tablet: %8$s%12$s;' . '--videoslider-padding-x-tablet: %9$s%13$s;' . '--videoslider-padding-y-desktop: %10$s%12$s;' . '--videoslider-padding-x-desktop: %11$s%13$s;' . '--videoslider-bg-image: url(%14$s);',
            $attr['sliderHeight'],
            $attr['arrowSize'],
            $attr['dotSize'],
            $attr['arrowColor'],
            $attr['dotColor'],
            $attr['spacingYMobile'],
            $attr['spacingXMobile'],
            $attr['spacingYTablet'],
            $attr['spacingXTablet'],
            $attr['spacingYDesktop'],
            $attr['spacingXDesktop'],
            $attr['spacingYUnit'],
            $attr['spacingXUnit'],
            $bg_image
        );
        $overlay_style = '';
        if ( isset( $attr['rgbaBackground'] ) && $attr['rgbaBackground'] ) {
            $overlay_style .= 'background: ' . esc_attr( $attr['rgbaBackground'] ) . ';';
        }
        $content_classes = sprintf( 'wp-block-eedee-videoslider__content mb-%1$s co-%2$s', $attr['mixBlendMode'], $attr['contentOpacity'] );
        $slider_settings = array(
            'infinite'         => true,
            'pauseOnFocus'     => true,
            'pauseOnHover'     => true,
            'dots'             => false,
            'arrows'           => !$attr['isFullScreen'] && $attr['arrows'],
            // 'autoplaySpeed'    => $attr['duration'] * 1000,
            // 'speed'            => $attr['fadeSpeed'] * 1000,
            'autoplay'         => $attr['autoplay'],
            'fade'             => $attr['fadeMode'],
            'pauseOnFocus'     => $attr['pauseOnFocus'],
            'pauseOnHover'     => $attr['pauseOnHover'],
            'pauseOnDotsHover' => $attr['pauseOnDotsHover'],
            'slidesToShow'     => ( $attr['fadeMode'] ? 1 : $attr['slidesToShow'] ),
            'slidesToScroll'   => ( $attr['fadeMode'] ? 1 : $attr['slidesToScroll'] ),
        );
        $slider_settings = wp_json_encode( $slider_settings );
        $additional_attributes = '';
        
        if ( isset( $attr['parallaxDirection'] ) ) {
            $additional_attributes .= sprintf( 'data-parallax-direction="%1$s"', esc_attr( $attr['parallaxDirection'] ) );
        }
        if ( isset( $attr['parallaxAmount'] ) ) {
            $additional_attributes .= sprintf( ' data-parallax-amount="%1$s"', esc_attr( $attr['parallaxAmount'] ) );
        }
        // if the content mode is fixed, we need to print the content twice
        // and hide it in css, that is because wp gutenberg does not allow multiple
        // inner blocks by the time of writing
        // @fix @todo there will be another way soon.
        $audioOutput = '';
        if($audioURL){
            $audioOutput = '<div style="display:none;" class="videoslider_audionplayer">
            <audio preload="auto" loop id="autoplayaudio" controls>
                <source src="'.$audioURL.'" type="audio/ogg">
                <source src="'.$audioURL.'" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        </div>';
        }

        if ( 'fixed' === $attr['contentMode'] ) {
            return sprintf(
                '<div class="%1$s" style="%2$s">' . '<div class="slider-overlay" style="%7$s"></div>' . '<div class="slick-slider" data-slickslider=%5$s>%3$s</div>' . '<div class="%6$s" style="">%4$s</div>' . '</div>',
                esc_attr( $class ),
                $component_style,
                $inner_content,
                $inner_content,
                $slider_settings,
                $content_classes,
                $overlay_style
            );
        }
        return sprintf(
            '%6$s
            <div id="videoSlider" class="%1$s" style="%2$s" %5$s>' . '<div class="slick-slider" data-slickslider=%4$s>%3$s<div class="pbuttononclick"><div class="p-button"></div></div><div class="sliderController">
                
                <div class="progressbar">
                    <div class="progress_inner"></div>
                </div>                
                <div class="pButton">
                    <div class="p-button play-button"></div>
                </div>
                <div class="back-to-start">
                    <span class="backto-start-buton"></span>
                </div>
                <div class="replay-to-back d-inline">
                <span class="replay-to-back-buton"></span>
                </div>
                <div class="display-time d-inline-table">
                    <span class="display-time-inline"></span>
                </div>

                <div class="mute-button pull-right mr-10px d-inline">
                    <span class="sound-button "></span>
                <div>
            </div></div>' . '</div>',
            esc_attr( $class ),
            $component_style,
            $inner_content,
            $slider_settings,
            $additional_attributes,
            $audioOutput
        );
    }

}
if ( !function_exists( 'eedee_remove_max_srcset_image_width' ) ) {
    /**
     * Remove the max width filter for responsive images srcset
     *
     * @param number $max_width e max width (default 1600px).
     */
    function eedee_remove_max_srcset_image_width( $max_width )
    {
        return false;
    }

}
add_filter( 'max_srcset_image_width', 'eedee_remove_max_srcset_image_width' );
if ( !function_exists( 'eedee_videoslider_load_textdomain' ) ) {
    /**
     * Load Plugin i18n
     */
    function eedee_videoslider_load_textdomain()
    {
        load_plugin_textdomain( 'eedee-videoslider', false, dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/' );
    }

}
add_image_size( 'xl', 1600, 9999 );
add_image_size( 'xxl', 2200, 9999 );
add_image_size( 'xxxl', 2800, 9999 );
add_image_size( 'xxxxl', 3400, 9999 );
add_image_size( 'xxxxxl', 4000, 9999 );
// Hook: Block assets.
add_action( 'init', 'eedee_videoslider_block_assets' );
add_action( 'plugins_loaded', 'eedee_videoslider_load_textdomain' );




function wporg_block_wrapper( $block_content, $block ) {
        
    if(isset($block['attrs']['sliderFontFamily'])):
        $cssFonts = str_replace(' ', '+', $block['attrs']['sliderFontFamily']);
        wp_enqueue_style( 'dynamicGoogleFonts'.$cssFonts , 'https://fonts.googleapis.com/css?family=' . $cssFonts , array(), 'all' );
    endif;
    return $block_content;
} 
add_filter( 'render_block', 'wporg_block_wrapper', 10, 2 );