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
            "templateRef": "jig-composite"
            "files": [
                {
                    "name": "type-default",
                    "filePath": "templates/jigs/composite/composite-1/element-1.yaml",
                    "directory": "jigs"
                },
                {
                    "name": "type-list",
                    "filePath": "templates/jigs/composite/composite-1/element-2.yaml",
                    "directory": "jigs"
                }
            ],
            "filter": { "enableFor": ["jig.default"] }
        },
    }

- **name** is a descriptive name of the template.
- **filePath** is a path to the snippet file.
- **previewImgSrc** is a path to the preview file of the snippet.
- **datasource** is a path to the file with datasource. This field is optional. If you include it, then datasource from the file will be inserted into the jig together with the main snippet.
- **templateRef** is required internal reference for each element in templates library. This field is used to filter out templates.
- **files** is an array field that used for files that has to be created together with the template
  - **name** is a file name for the new file
  - **filePath** is a path to the file in teplate-library
  - **directory** is a directory of the solution where the file has to be created
- **filter** is used for filtering out templates.
  - **enableFor** is an array of allowed jigType (they will be listed below)
  - **isDisabled** specifies if template is disabled

This is the essential file used by the **Templates Library**. It is parsed and used to display and load each template. If you created a new template and didn't included it to the **contents.json** file, then it won't be shown in the library. Also if you forgot to include **_templateRef_** then
this template also won't be shown in the templates library (it will be filtered out).

## templateRef

Here is the list of currently available ref names:

| templateRef          |                                  Description |
| -------------------- | -------------------------------------------: |
| jig-default          |                                  Default Jig |
| jig-list             |                                     List Jig |
| jig-composite        |                                Composite Jig |
| jig-calendar         |                                 Calendar Jig |
| jig-document         |                                 Document Jig |
| jc-avatar            |                                       Avatar |
| jc-bar-chart         |                                    Bar Chart |
| jc-entity            |                                       Entity |
| jc-form              |                                         Form |
| jc-image             |                                        Image |
| jc-line-chart        |                                   Line Chart |
| jc-expander          |                                     Expander |
| jc-list              |                                         List |
| jc-location          |                                     Location |
| jc-pie-chart         |                                    Pie Chart |
| jc-stepper           |                                      Stepper |
| jc-web-view          |                                     Web View |
| jc-interactive-image |                            Interactive Image |
| jc-form-section      |                                 Form Section |
| jc-section-default   |                              Section Default |
| jc-text-field        |                                   Text Field |
| jc-signature-field   |                              Signature Field |
| jc-number-field      |                                 Number Field |
| jc-media-field       |                                  Media Field |
| jc-email-field       |                                  Email Field |
| jc-dropdown          |                                     Dropdown |
| jc-date-picker       |                                  Date Picker |
| jc-checkbox          |                                     Checkbox |
| jc-field-row         |                                    Field Row |
| jc-avatar-field      |                                 Avatar Field |
| jc-stage             |                                        Stage |
| jc-list-item         |                                    List item |
| jc-product-item      |                                 Product Item |
| jc-custom-component  |                  Custom Component (children) |
| ComponentDefinition  | Custom Component inside of components folder |
| jc-progress-bar      |                                 Progress Bar |

The list will be updated with more references.

## Allowed values for enableFor field

```TypeScript
enum KegComponentType {
  AVATAR = 'component.avatar',
  BAR_CHART = 'component.bar-chart',
  BOTTOM_SHEET = 'component.bottom-sheet',
  CHECKBOX = 'component.checkbox',
  DATE_PICKER = 'component.date-picker',
  DROPDOWN = 'component.dropdown',
  DROPDOWN_ITEM = 'component.dropdown-item',
  ENTITY = 'component.entity',
  EXPANDER = 'component.expander',
  EMAIL_FIELD = 'component.email-field',
  ENTITY_FIELD = 'component.entity-field',
  EVENT = 'component.event',
  FIELD_ROW = 'component.field-row',
  FORM = 'component.form',
  ICON = 'component.icon',
  IMAGE = 'component.image',
  INTERACTIVE_IMAGE = 'component.interactive-image',
  INTERACTIVE_IMAGE_ITEM = 'component.interactive-image-item',
  LINE_CHART = 'component.line-chart',
  LIST = 'component.list',
  LIST_ITEM = 'component.list-item',
  LOCATION = 'component.location',
  MAP_VIEW = 'component.map-view',
  JIG_HEADER = 'component.jig-header',
  NUMBER_FIELD = 'component.number-field',
  PIE_CHART = 'component.pie-chart',
  PRODUCT_ITEM = 'component.product-item',
  SECTION = 'component.section',
  SIGNATURE_FIELD = 'component.signature-field',
  MEDIA_FIELD = 'component.media-field',
  AVATAR_FIELD = 'component.avatar-field',
  STAGE = 'component.stage',
  STEP = 'component.step',
  STEPPER = 'component.stepper',
  STORY_GROUP = 'component.story-group',
  SUMMARY = 'component.summary',
  TEXT = 'component.text',
  TEXT_FIELD = 'component.text-field',
  TITLES = 'component.titles',
  TREND = 'component.trend',
  VIDEO_PLAYER = 'component.video-player',
  WEB_VIEW = 'component.web-view',
  WIDGETS = 'component.widgets',
}

enum JigType {
  DEFAULT = 'jig.default',
  LIST = 'jig.list',
  CALENDAR = 'jig.calendar',
  COMPOSITE = 'jig.composite',
  DOCUMENT = 'jig.document',
}
```
