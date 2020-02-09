const { __ } = wp.i18n;
const {
	InspectorControls,
	// withColors,
} = wp.editor;
const {
	PanelBody,
	TextControl,
} = wp.components;

export const slideInspectorControls = ( notThis ) => {
	const {
		linkUrl,
	} = notThis.props.attributes;

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Slide Settings' ) }
				className="videoslider-controls-advanced"
			>
				<TextControl
					label={ __( 'Slide Link' ) }
					value={ linkUrl || '' }
					onChange={ notThis.setSingleDuration }
					help={ __( 'Set an url that opens, when the user clicks the slide.' ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};
