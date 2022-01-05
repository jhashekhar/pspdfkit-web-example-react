import React from 'react';
import PSPDFKitWeb from 'pspdfkit';

export const PSPDFKit = () => {
	const handleChange = async (event) => {
		const files = event.target.files;

		if (files) {
			const documentFileObjectUrl = URL.createObjectURL(files[0]);

			await PSPDFKitWeb.load({
				document: documentFileObjectUrl,
				container: '.uploadPdf',
			}).then((instance) => {
				console.log('Successfully mounted PSPDFKit: ', instance);
			});
		}
	};

	return (
		<div>
			<p>PSPDFKit is working?</p>
			<input
				type="file"
				style={{ display: 'none' }}
				id="uploadPdf"
				onChange={handleChange}
				className="uploadPdf"
			/>
			<label
				htmlFor="uploadPdf"
				style={{ background: '#FFD580', padding: '3px' }}
			>
				Upload pdf
			</label>
		</div>
	);
};
export default PSPDFKit;
