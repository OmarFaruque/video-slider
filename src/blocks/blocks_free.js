import './style.scss';
import './editor.scss';
import '../admin/admin.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const {
	registerBlockType,
} = wp.blocks;

import {
	attributes as slideAttributes,
} from './videoslide/attributes';

import {
	attributes as sliderAttributes,
} from './videoslider/attributes';

import sliderSave from './videoslider/save';
import sliderDeprecated from './videoslider/deprecations';
import slideDeprecated from './videoslide/deprecations';
import sliderEdit from './videoslider/block_free/edit';
import editVideoslide from './videoslide/block_free/edit';
import saveSlide from './videoslide/save';
import icons from './icons';

/**
 * Register: The Free Version of Gutenslider Block
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'eedee/block-gutenslider', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Videoslider' ), // Block title.
	description: __( 'Slider Block for Gutenberg that slides images with arbitrary blocks on top.' ),
	icon: icons.videoslider,
	category: 'common',
	keywords: [
		__( 'Slider' ),
		__( 'Image' ),
		__( 'Carousel' ),
	],
	attributes: sliderAttributes,
	supports: {
		align: [ 'wide', 'full' ],
	},

	/**
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: sliderEdit,
	save: sliderSave,
	deprecated: sliderDeprecated,
} );

registerBlockType( 'eedee/block-videoslide', {
	title: __( 'Videoslide' ), // Block title.
	description: __( 'Single Slide for videoslider.' ),
	icon: icons.videoslider,
	category: 'common',
	keywords: [
		__( 'Slide' ),
		__( 'Image' ),
		__( 'Carousel' ),
	],
	parent: [ 'eedee/block-gutenslider' ],
	attributes: slideAttributes,
	deprecated: slideDeprecated,
	edit: editVideoslide,
	save: saveSlide,
} );
