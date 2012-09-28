/**
  Saves every document open in Illustrator as an PNG file in `export` folder.
*/

// app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;

try {
  var widths = [180, 400];

  if (app.documents.length > 0) {
    var rootPath = app.activeDocument.path + '/';

    var exportPath = rootPath + 'export/png/';

    if (exportPath) {
      var options, i, j, doc, artboard, scale, width, exportFilePath;

      // Get the PNG options.
      options = this.getOptions();

      for (i = 0; i < app.documents.length; i++) {
        doc = app.documents[i];
        artboard = doc.artboards[0];

        for (j = 0; j < widths.length; j++) {
          width = widths[j];

          scale = (width / (artboard.artboardRect[2] - artboard.artboardRect[0])) * 100;

          options.horizontalScale = options.verticalScale = scale;

          exportFilePath = this.getTargetFile(doc.name, '-' + width, '.png', exportPath);

          // Save as PNG-8
          doc.exportFile(exportFilePath, ExportType.PNG8, options);
        }
      }
    }
  }
} catch(e) {
  alert(e.message, "Error", true);
}


/**
  Returns the options to be used for the generated files.

  @return ExportOptionsPNG8 object
*/
function getOptions()
{
  var options = new ExportOptionsPNG8();

  // DOCS:
  //  - http://cssdk.host.adobe.com/sdk/1.0/docs/WebHelp/references/csawlib/com/adobe/illustrator/ExportOptionsPNG8.html

  var matteColor = new RGBColor();

  matteColor.red = 255;
  matteColor.green = 255;
  matteColor.blue = 255;

  options.antiAliasing = true;
  options.artBoardClipping = false;
  options.colorCount = 128;
  options.colorDither = ColorDitherMethod.DIFFUSION;
  options.colorReduction = ColorReductionMethod.SELECTIVE;
  options.ditherPercent = 88;
  options.horizontalScale = 100.0;
  options.interlaced = false;
  options.matte = true;
  options.matteColor = matteColor;
  options.saveAsHTML = false;
  options.transparency = true;
  options.verticalScale = 100.0;
  options.webSnap = 0;

  return options;
}

/**
  Returns the file to save or export the document into.

  @param docName the name of the document
  @param ext the extension the file extension to be applied
  @param saveToPath the output folder

  @return File object
*/
function getTargetFile(docName, suffix, ext, saveToPath) {
  var newName = "";

  if (docName.indexOf('.') < 0) {
    newName = docName + suffix + ext;
  }
  else {
    var dot = docName.lastIndexOf('.');
    newName += docName.substring(0, dot);
    newName += suffix;
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
