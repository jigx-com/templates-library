//! DO NOT USE THIS SCRIPT, BECAUSE IT WILL OVERWRITE THE CONTENTS.JSON FILE
const fs = require("fs");
const path = require("path");

// Initialize an empty object for widgets
const widgets = {};

// Define the widget sizes
const widgetSizes = ["1x1", "2x2", "2x4", "4x2", "4x4"];

// Image extensions to look for
const imageExtensions = ["jpg", "png", "svg"];

// Flag to indicate if widgets folder exists
let widgetsExist = false;

const widgetsDir = path.join(__dirname, "..", "widgets");

// Check if widgets folder exists
if (fs.existsSync(widgetsDir)) {
  widgetsExist = true;

  // Loop through each widget size
  widgetSizes.forEach((size) => {
    const sizeDir = path.join(widgetsDir, size);

    // Check if the folder for this size exists
    if (fs.existsSync(sizeDir)) {
      widgets[size] = [];

      // Read the directory for the given widget size
      const widgetFolders = fs.readdirSync(sizeDir);

      // Loop through each widget folder
      widgetFolders.forEach((folder) => {
        const widgetPath = path.join(sizeDir, folder);
        const widgetItem = {};

        // Add filePath for template.yaml
        const templatePath = path.join(widgetPath, "template.yaml");
        if (fs.existsSync(templatePath)) {
          widgetItem.filePath = `widgets/${size}/${folder}/template.yaml`;
        }

        // Add filePath for preview image
        imageExtensions.some((ext) => {
          const previewPath = path.join(widgetPath, `preview.${ext}`);
          if (fs.existsSync(previewPath)) {
            widgetItem.previewImgSrc = `widgets/${size}/${folder}/preview.${ext}`;
            return true;
          }
          return false;
        });

        // Add filePath for datasource.yaml
        const datasourcePath = path.join(widgetPath, "datasource.yaml");
        if (fs.existsSync(datasourcePath)) {
          widgetItem.datasource = `widgets/${size}/${folder}/datasource.yaml`;
        }

        widgets[size].push(widgetItem);
      });
    }
  });
}

// Read the existing contents.json
const contentsPath = path.join(__dirname, "..", "contents.json");
let contents = JSON.parse(fs.readFileSync(contentsPath, "utf-8"));

// Update the widgets part, only if widgets folder exists
if (widgetsExist) {
  contents.widgets = widgets;
} else {
  // Remove the widgets key if it exists
  delete contents.widgets;
}

// Write the updated contents back to contents.json
fs.writeFileSync(contentsPath, JSON.stringify(contents, null, 2));
