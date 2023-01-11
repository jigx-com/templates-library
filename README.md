# Welcome to Jigx templates Library!

Here you can find a collection of snippets for the **Templates Library**

## Templates Library

The **[jigx-templates](https://github.com/jigx-com/templates-library/tree/main/templates)** folder contains all of the templates for **Templates Library**. The structure is as follows:

- [jigs](https://github.com/jigx-com/templates-library/tree/main/templates/jigs)
- [components](https://github.com/jigx-com/templates-library/tree/main/templates/jigs)

Later will be added **actions** folder for actions templates.

## contents.json

This file is the table of contents for the repository. The structure is:

    {
        snippets: {
            "name": "composite jig",
            "filePath": "templates/jigs/composite/template-composite-1.json",
            "previewImgSrc": "templates/jigs/composite/template-composite-1.jpeg",
            "datasource": "templates/jigs/composite/datasource.json"
            "jigLibraryRef": "jig-composite"
            "jigFiles": [
                {
                    "jigId": "type-default-7",
                    "filePath": "templates/jigs/composite/composite-1/element-1.json"
                },
                {
                    "jigId": "type-list-2",
                    "filePath": "templates/jigs/composite/composite-1/element-2.json"
                }
            ]
        },
    }

- **name** is a descriptive name of the template.
- **filePath** is a path to the snippet file.
- **previewImgSrc** is a path to the preview file of the snippet.
- **datasource** is a path to the file with datasource. This field is optional. If you include it, then datasource from the file will be inserted into the jig together with the main snippet.
- **jigLibraryRef** is required internal reference for each element in templates library. This field is used to filter out templates.
- **jigFiles** is a field that used only for composite jigx. These files will be inserted together with a composite jig.

This is the essential file used by the **Templates Library**. It is parsed and used to display and load each template. If you created a new template and didn't included it to the **contents.json** file, then it won't be shown in the library. Also if you forgot to include **_jigLibraryRef_** then
this template also won't be shown in the templates library (it will be filtered out).

## jigLibraryRef

Here is the list of currently available ref names:

| jigLibraryRef        |       Description |
| -------------------- | ----------------: |
| jig-default          |       Default Jig |
| jig-list             |          List Jig |
| jig-composite        |     Composite Jig |
| jig-calendar         |      Calendar Jig |
| jig-document         |      Document Jig |
| jc-avatar            |            Avatar |
| jc-bar-chart         |         Bar Chart |
| jc-entity            |            Entity |
| jc-form              |              Form |
| jc-image             |             Image |
| jc-line-chart        |        Line Chart |
| jc-expander          |          Expander |
| jc-list              |              List |
| jc-location          |          Location |
| jc-pie-chart         |         Pie Chart |
| jc-stepper           |           Stepper |
| jc-web-view          |          Web View |
| jc-interactive-image | Interactive Image |
| jc-form-section      |      Form Section |
| jc-section-default   |   Section Default |
| jc-text-field        |        Text Field |
| jc-signature-field   |   Signature Field |
| jc-number-field      |      Number Field |
| jc-media-field       |       Media Field |
| jc-email-field       |       Email Field |
| jc-dropdown          |          Dropdown |
| jc-date-picker       |       Date Picker |
| jc-checkbox          |          Checkbox |
| jc-field-row         |         Field Row |
| jc-avatar-field      |      Avatar Field |

The list will be updated with more references.
