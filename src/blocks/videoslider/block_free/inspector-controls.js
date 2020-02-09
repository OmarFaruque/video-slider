const { __ } = wp.i18n;
const {
	InspectorControls,
} = wp.editor;
const {
	Button,
	PanelBody,
	RangeControl,
	ToggleControl,
	SelectControl,
	textControl,
	ButtonGroup,
	TabPanel,
	ColorIndicator,
} = wp.components;
const {
	Fragment,
} = wp.element;

import { PARALLAX_DIRECTIONS } from '../attributes';
import icons from '../../icons';
import UnitButton from '../../../components/unit-button';

export const inspectorControls = ( attributes, notThis ) => {
	const {
		contentMode,
		fadeMode,
		dots,
		dotSize,
		dotColor,
		arrows,
		arrowSize,
		arrowColor,
		sliderHeight,
		spacingX,
		spacingY,
		spacingXMobile,
		spacingYMobile,
		spacingXTablet,
		spacingYTablet,
		spacingXDesktop,
		spacingYDesktop,
		spacingXUnit,
		spacingYUnit,
		isFullScreen,
		hasParallax,
		pauseOnFocus,
		pauseOnHover,
		pauseOnDotsHover,
		parallaxDirection,
		parallaxAmount,
		mixBlendMode,
		autoplay,
		contentOpacity,
	} = attributes;

	const {
		enableMixBlendPreview,
	} = notThis.state;

	const advancedSpacing = false;

	const arrowPanelTitle = (
		<span className="editor-panel-color-settings__panel-title block-editor-panel-color-settings__panel-title">
			{ __( 'Arrow Settings' ) }
			<ColorIndicator
				aria-label="(border color: #000)"
				colorValue={ arrowColor } />
		</span>
	);

	const dotPanelTitle = (
		<span className="editor-panel-color-settings__panel-title block-editor-panel-color-settings__panel-title">
			{ __( 'Dot Settings' ) }
			<ColorIndicator
				aria-label="(border color: #000)"
				colorValue={ dotColor } />
		</span>
	);

	const tabTitles = {
		mobile: (
			<div className="videoslider-tab-title">
				{ icons.mobile }
				<span>Mobile</span>
			</div>
		),
		tablet: (
			<div className="videoslider-tab-title">
				{ icons.tablet }
				<span>Tablet</span>
			</div>
		),
		desktop: (
			<div className="videoslider-tab-title">
				{ icons.desktop }
				<span>Desktop</span>
			</div>
		),
	};

	const tabContent = {
		mobile: (
			<Fragment>
				<ButtonGroup className="unit-buttons" aria-label={ __( 'Spacing Unit' ) }>
					{ [ '%', 'px' ].map( ( unit ) => {
						const isCurrent = spacingYUnit === unit;

						return (
							<Button
								key={ unit }
								isToggled={ isCurrent }
								aria-pressed={ isCurrent }
								onClick={ () => notThis.setSpacingYUnit( unit ) }
							>
								{ unit }
							</Button>
						);
					} ) }
				</ButtonGroup>
				<RangeControl
					label={ __( 'Spacing Top + Bottom' ) }
					value={ spacingYMobile }
					onChange={ ( spacing ) => notThis.setSpacingY( spacing, 'Mobile' ) }
					min={ 0 }
					max={ spacingYUnit === 'px' ? 300 : 50 }
					step={ 1 } />
				<ButtonGroup className="unit-buttons" aria-label={ __( 'Spacing Unit' ) }>
					{ [ '%', 'px' ].map( ( unit ) => {
						const isCurrent = spacingXUnit === unit;

						return (
							<Button
								key={ unit }
								isToggled={ isCurrent }
								aria-pressed={ isCurrent }
								onClick={ () => notThis.setSpacingXUnit( unit ) }
							>
								{ unit }
							</Button>
						);
					} ) }
				</ButtonGroup>
				<RangeControl
					label={ __( 'Spacing Left + Right' ) }
					value={ spacingXMobile }
					onChange={ ( spacing ) => notThis.setSpacingX( spacing, 'Mobile' ) }
					min={ 0 }
					max={ spacingXUnit === 'px' ? 300 : 50 }
					step={ 1 } />
			</Fragment>
		),
		tablet: (
			<Fragment>
				<ButtonGroup className="unit-buttons" aria-label={ __( 'Spacing Unit' ) }>
					{ [ '%', 'px' ].map( ( unit ) => {
						const isCurrent = spacingYUnit === unit;

						return (
							<Button
								key={ unit }
								isToggled={ isCurrent }
								aria-pressed={ isCurrent }
								onClick={ () => notThis.setSpacingYUnit( unit ) }
							>
								{ unit }
							</Button>
						);
					} ) }
				</ButtonGroup>
				<RangeControl
					label={ __( 'Spacing Top + Bottom' ) }
					value={ spacingYTablet }
					onChange={ ( spacing ) => notThis.setSpacingY( spacing, 'Tablet' ) }
					min={ 0 }
					max={ spacingYUnit === 'px' ? 300 : 50 }
					step={ 1 } />
				<ButtonGroup className="unit-buttons" aria-label={ __( 'Spacing Unit' ) }>
					{ [ '%', 'px' ].map( ( unit ) => {
						const isCurrent = spacingXUnit === unit;

						return (
							<Button
								key={ unit }
								isToggled={ isCurrent }
								aria-pressed={ isCurrent }
								onClick={ () => notThis.setSpacingXUnit( unit ) }
							>
								{ unit }
							</Button>
						);
					} ) }
				</ButtonGroup>
				<RangeControl
					label={ __( 'Spacing Left + Right' ) }
					value={ spacingXTablet }
					onChange={ ( spacing ) => notThis.setSpacingX( spacing, 'Tablet' ) }
					min={ 0 }
					max={ spacingXUnit === 'px' ? 300 : 50 }
					step={ 1 } />
			</Fragment>
		),
		desktop: (
			<Fragment>
				<ButtonGroup className="unit-buttons" aria-label={ __( 'Spacing Unit' ) }>
					{ [ '%', 'px' ].map( ( unit ) => {
						const isCurrent = spacingYUnit === unit;

						return (
							<Button
								key={ unit }
								isToggled={ isCurrent }
								aria-pressed={ isCurrent }
								onClick={ () => notThis.setSpacingYUnit( unit ) }
							>
								{ unit }
							</Button>
						);
					} ) }
				</ButtonGroup>
				<RangeControl
					label={ __( 'Spacing Top + Bottom' ) }
					value={ spacingYDesktop }
					onChange={ ( spacing ) => notThis.setSpacingY( spacing, 'Desktop' ) }
					min={ 0 }
					max={ spacingYUnit === 'px' ? 300 : 50 }
					step={ 1 } />
				<ButtonGroup className="unit-buttons" aria-label={ __( 'Spacing Unit' ) }>
					{ [ '%', 'px' ].map( ( unit ) => {
						const isCurrent = spacingXUnit === unit;

						return (
							<Button
								key={ unit }
								isToggled={ isCurrent }
								aria-pressed={ isCurrent }
								onClick={ () => notThis.setSpacingXUnit( unit ) }
							>
								{ unit }
							</Button>
						);
					} ) }
				</ButtonGroup>
				<RangeControl
					label={ __( 'Spacing Left + Right' ) }
					value={ spacingXDesktop }
					onChange={ ( spacing ) => notThis.setSpacingX( spacing, 'Desktop' ) }
					min={ 0 }
					max={ spacingXUnit === 'px' ? 300 : 50 }
					step={ 1 } />
			</Fragment>
		),
		all: (
			<Fragment>
				<ButtonGroup className="unit-buttons" aria-label={ __( 'Spacing Unit' ) }>
					{ [ '%', 'px' ].map( ( unit ) => {
						const isCurrent = spacingYUnit === unit;

						return (
							<Button
								key={ unit }
								isToggled={ isCurrent }
								aria-pressed={ isCurrent }
								onClick={ () => notThis.setSpacingYUnit( unit ) }
							>
								{ unit }
							</Button>
						);
					} ) }
				</ButtonGroup>
				<RangeControl
					label={ __( 'Spacing Top + Bottom' ) }
					value={ spacingY }
					onChange={ ( spacing ) => notThis.setSpacingY( spacing, 'all' ) }
					min={ 0 }
					max={ spacingYUnit === 'px' ? 300 : 50 }
					step={ 1 } />
				<ButtonGroup className="unit-buttons" aria-label={ __( 'Spacing Unit' ) }>
					{ [ '%', 'px' ].map( ( unit ) => {
						const isCurrent = spacingXUnit === unit;

						return (
							<Button
								key={ unit }
								isToggled={ isCurrent }
								aria-pressed={ isCurrent }
								onClick={ () => notThis.setSpacingXUnit( unit ) }
							>
								{ unit }
							</Button>
						);
					} ) }
				</ButtonGroup>
				<RangeControl
					label={ __( 'Spacing Left + Right' ) }
					value={ spacingX }
					onChange={ ( spacing ) => notThis.setSpacingX( spacing, 'all' ) }
					min={ 0 }
					max={ spacingXUnit === 'px' ? 300 : 50 }
					step={ 1 } />
			</Fragment>
		),
	};

	return (
		<InspectorControls >
			<PanelBody
				title={ __( 'General om Slider Settings' ) }
				className="videoslider-controls-general"
			>
				<ButtonGroup aria-label={ __( 'Fade Mode' ) } className="videoslider-toggle-fade-mode">
					<Button
						isDefault
						isPrimary={ fadeMode }
						aria-pressed={ fadeMode }
						onClick={ () => {
							notThis.setFadeMode( true );
						} }
					>
						Fade Animation
					</Button>
					<Button
						isDefault
						isPrimary={ ! fadeMode }
						aria-pressed={ ! fadeMode }
						onClick={ () => {
							notThis.setFadeMode( false );
						} }
					>
						Slide Animation
					</Button>
				</ButtonGroup>
				<ButtonGroup aria-label={ __( 'Slide Mode' ) } className="videoslider-toggle-content-mode">
					<Button
						isDefault
						isPrimary={ contentMode === 'fixed' }
						aria-pressed={ contentMode === 'fixed' }
						onClick={ () => {
							notThis.setContentMode( 'fixed' );
						} }
					>
						Fixed Content
					</Button>
					<Button
						isDefault
						isPrimary={ contentMode === 'change' }
						aria-pressed={ contentMode === 'change' }
						onClick={ () => {
							notThis.setContentMode( 'change' );
						} }
					>
						Changing Content
					</Button>
				</ButtonGroup>
			</PanelBody>
			<PanelBody
				title={ __( 'Advanced Slider Settings' ) }
				className="videoslider-controls-advanced"
			>
				{ ! isFullScreen &&
					<UnitButton
						label={ __( 'Slider Height' ) }
						onChange={ notThis.setSliderHeight }
						btnUnits={ [ 'vh', 'px' ] }
						btnLabels={ [ '%', 'px' ] }
						value={ sliderHeight }
						mins={ [ 20, 100 ] }
						maxs={ [ 100, 1500 ] }
						step={ 1 }
						transformUnits={ true }
					/> }
				<ToggleControl
					label={ __( 'Autoplay' ) }
					checked={ autoplay }
					onChange={ notThis.setAutoplay }
				/>
				<ToggleControl
					label={ __( 'Show Arrows' ) }
					checked={ arrows }
					onChange={ notThis.setArrows }
				/>
				<ToggleControl
					label={ __( 'Show Dots' ) }
					checked={ dots }
					onChange={ notThis.setDots }
				/>
				<ToggleControl
					label={ __( 'Fullscreen Background Slider' ) }
					checked={ isFullScreen }
					help={ isFullScreen ? __( 'Full Screen Background Slider preview is not available in the editor, check the live site to see it in action.' ) : null }
					onChange={ notThis.setFullscreen }
				/>
			</PanelBody>
			{ autoplay && <PanelBody
				title={ __( 'Autoplay Settings' ) }
				className="videoslider-controls-autoplay"
				initialOpen={ false }
			>
				<ToggleControl
					label={ __( 'Pause on Focus' ) }
					checked={ pauseOnFocus }
					onChange={ notThis.setPauseOnFocus }
				/>
				<ToggleControl
					label={ __( 'Pause on Hover' ) }
					checked={ pauseOnHover }
					onChange={ notThis.setPauseOnHover }
				/>
				<ToggleControl
					label={ __( 'Pause on Dots Hover' ) }
					checked={ pauseOnDotsHover }
					onChange={ notThis.setPauseOnDotsHover }
				/>
			</PanelBody> }
			{ arrows && <PanelBody
				title={ arrowPanelTitle }
				className="videoslider-controls-arrows"
				initialOpen={ false }
			>
				<RangeControl
					label={ __( 'Arrow Size (px)' ) }
					value={ arrowSize }
					onChange={ notThis.setArrowSize }
					min={ 15 }
					max={ 100 }
					step={ 1 }
				/>
			</PanelBody> }
			{ dots && <PanelBody
				title={ dotPanelTitle }
				className="videoslider-controls-dots"
				initialOpen={ false }
			>
				<RangeControl
					label={ __( 'Dot Size f (px)' ) }
					value={ dotSize }
					onChange={ notThis.setDotSize }
					min={ 15 }
					max={ 60 }
					step={ 1 }
				/>
			</PanelBody> }
			{ false && ! isFullScreen && <PanelBody
				title={ __( 'Parallax Settings' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __( 'Parallax' ) }
					checked={ hasParallax }
					onChange={ notThis.setParallax }
				/>
				{ hasParallax && <SelectControl
					label="Parallax Direction"
					value={ parallaxDirection }
					options={ PARALLAX_DIRECTIONS }
					onChange={ notThis.setParallaxDirection }
				/> }
				{ hasParallax && <RangeControl
					label={ __( 'Parallax Amount' ) }
					value={ parallaxAmount }
					onChange={ notThis.setParallaxAmount }
					min={ 1 }
					max={ 2 }
					step={ 0.1 }
				/> }
			</PanelBody>
			}
			<PanelBody
				title={ __( 'Spacing' ) }
				initialOpen={ false }
			>
				{
					advancedSpacing ?
						<TabPanel
							className="edit-post-sidebar-header edit-post-sidebar__panel-tabs videoslider-dimension-tabs"
							activeClass="is-active"
							tabs={ [
								{
									name: 'mobile',
									title: tabTitles.mobile,
									className: 'videoslider-device-tab',
								},
								{
									name: 'tablet',
									title: tabTitles.tablet,
									className: 'videoslider-device-tab',
								},
								{
									name: 'desktop',
									title: tabTitles.desktop,
									className: 'videoslider-device-tab',
								},
							] }>
							{
								( tab ) => tabContent[ tab.name ]
							}
						</TabPanel> :
						tabContent.all
				}
			</PanelBody>
			{ false && <PanelBody
				title={ __( 'Art Settings' ) }
				initialOpen={ false }
			>
				<SelectControl
					label={ __( 'Mix Blend Mode' ) }
					value={ mixBlendMode }
					options={ [
						{ label: 'None', value: '' },
						{ label: 'Color Burn', value: 'color-burn' },
						{ label: 'Color Dodge', value: 'color-dodge' },
						{ label: 'Difference', value: 'difference' },
						{ label: 'Exclusion', value: 'exclusion' },
						{ label: 'Saturation', value: 'saturation' },
					] }
					onChange={ notThis.setMixBlendMode }
				/>
				{ mixBlendMode !== 'None' && <ToggleControl
					label={ __( 'Enable Preview' ) }
					help={ __( 'Enable or disable the preview of "Mix Blend Mode" setting above' ) }
					checked={ enableMixBlendPreview }
					onChange={ notThis.setEnableMixBlendPreview }
				/> }
				<RangeControl
					label={ __( 'Content Opacity' ) }
					value={ contentOpacity }
					onChange={ notThis.setContentOpacity }
					min={ 0 }
					max={ 1 }
					step={ 0.1 }
				/>
			</PanelBody> }
		</InspectorControls>
	);
};





/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Fragment }	= wp.element;
const { InspectorAdvancedControls }	= wp.editor;
const { createHigherOrderComponent } = wp.compose;
const { ToggleControl } = wp.components;

//restrict to specific block names
const allowedBlocks = [ 'core/paragraph', 'core/heading' ];

/**
 * Add custom attribute for mobile visibility.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */
function addAttributes( settings ) {
	
	//check if object exists for old Gutenberg version compatibility
	//add allowedBlocks restriction
	if( typeof settings.attributes !== 'undefined' && allowedBlocks.includes( settings.name ) ){
	
		settings.attributes = Object.assign( settings.attributes, {
			visibleOnMobile:{ 
				type: 'boolean',
				default: true,
			}
		});
    
	}

	return settings;
}

/**
 * Add mobile visibility controls on Advanced Block Panel.
 *
 * @param {function} BlockEdit Block edit component.
 *
 * @return {function} BlockEdit Modified block edit component.
 */
const withAdvancedControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {

		const {
			name,
			attributes,
			setAttributes,
			isSelected,
		} = props;

		const {
			visibleOnMobile,
		} = attributes;
		
		
		return (
			<Fragment>
				<BlockEdit {...props} />
				{ isSelected && allowedBlocks.includes( name ) &&
					<InspectorAdvancedControls>
						<ToggleControl
							label={ __( 'Mobile Devices Visibity' ) }
							checked={ !! visibleOnMobile }
							onChange={ () => setAttributes( {  visibleOnMobile: ! visibleOnMobile } ) }
							help={ !! visibleOnMobile ? __( 'Font family only applicable on Frontend.' ) : __( 'Hidden on mobile devices.' ) }
						/>
					</InspectorAdvancedControls>
				}

			</Fragment>
		);
	};
}, 'withAdvancedControls');

/**
 * Add custom element class in save element.
 *
 * @param {Object} extraProps     Block element.
 * @param {Object} blockType      Blocks object.
 * @param {Object} attributes     Blocks attributes.
 *
 * @return {Object} extraProps Modified block element.
 */
function applyExtraClass( extraProps, blockType, attributes ) {

	const { visibleOnMobile } = attributes;
	
	//check if attribute exists for old Gutenberg version compatibility
	//add class only when visibleOnMobile = false
	//add allowedBlocks restriction
	if ( typeof visibleOnMobile !== 'undefined' && !visibleOnMobile && allowedBlocks.includes( blockType.name ) ) {
		extraProps.className = classnames( extraProps.className, 'mobile-hidden' );
	}

	return extraProps;
}

//add filters

addFilter(
	'blocks.registerBlockType',
	'editorskit/custom-attributes',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'editorskit/custom-advanced-control',
	withAdvancedControls
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'editorskit/applyExtraClass',
	applyExtraClass
);