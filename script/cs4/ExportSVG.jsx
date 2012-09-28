/**********************************************************

ADOBE SYSTEMS INCORPORATED
Copyright 2005-2006 Adobe Systems Incorporated
All Rights Reserved

NOTICE:  Adobe permits you to use, modify, and
distribute this file in accordance with the terms
of the Adobe license agreement accompanying it.
If you have received this file from a source
other than Adobe, then your use, modification,
or distribution of it requires the prior
written permission of Adobe.

*********************************************************/

/**
	Saves every document open in Illustrator as an SVG file in `export` folder.
*/

// app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;

try {
	if (app.documents.length > 0) {
		var rootPath = app.activeDocument.path + '/';

		var exportPath = rootPath + 'export/svg/';

		if (exportPath) {
			var options, i, doc, exportFilePath;

			// Get the SVG options.
			options = this.getOptions();

			for (i = 0; i < app.documents.length; i++) {
				doc = app.documents[i];

				exportFilePath = this.getTargetFile(doc.name, '.svg', exportPath);

				// Save as SVG
				doc.exportFile(exportFilePath, ExportType.SVG, options);
			}
		}
	}
} catch(e) {
	alert(e.message, "Error", true);
}


/**
	Returns the options to be used for the generated files.

	@return ExportOptionsSVG object
*/
function getOptions()
{
	var options = new ExportOptionsSVG();

	// DOCS:
	//	- http://cssdk.host.adobe.com/sdk/1.0/docs/WebHelp/references/csawlib/com/adobe/illustrator/ExportOptionsSVG.html

	options.compressed = false;
	options.coordinatePrecision = 3;
	options.cssProperties = SVGCSSPropertyLocation.STYLEATTRIBUTES;
	options.documentEncoding = SVGDocumentEncoding.ASCII;
	options.DTD = SVGDTDVersion.SVG1_1;
	options.embedRasterImages = false;
	options.fontSubsetting = SVGFontSubsetting.None;
	options.fontType = SVGFontType.SVGFONT;
	options.includeFileInfo = false;
	options.includeVariablesAndDatasets = false;
	options.optimizeForSVGViewer = false;
	options.preserveEditability = false;
	options.slices = false;
	options.sVGAutoKerning = false;
	options.sVGTextOnPath = false;

	return options;
}

/**
	Returns the file to save or export the document into.

	@param docName the name of the document
	@param ext the extension the file extension to be applied
	@param saveToPath the output folder

	@return File object
*/
function getTargetFile(docName, ext, saveToPath) {
	var newName = "";

	if (docName.indexOf('.') < 0) {
		newName = docName + ext;
	}
	else {
		var dot = docName.lastIndexOf('.');
		newName += docName.substring(0, dot);
		newName += ext;
	}

	var myFile = new File(saveToPath + '/' + newName);

	if (myFile.open('w')) {
		myFile.close();
	}
	else {
		throw new Error('Access is denied.');
	}
	return myFile;
}
