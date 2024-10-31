// "use client"; // only in App Router

// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import {
//   ClassicEditor,
//   Bold,
//   Essentials,
//   Italic,
//   Mention,
//   Paragraph,
//   Undo,
// } from "ckeditor5";
// import "ckeditor5/ckeditor5.css";

// function CustomEditor({ result, defaultValue }: any) {
//   const handleChangeEditor = (event: any, editor: any) => {
//     result(editor.getData());
//   };

//   return (
//     <CKEditor
//       editor={ClassicEditor}
//       config={{
//         toolbar: {
//           items: [
//             "undo",
//             "redo",
//             "|",
//             "bold",
//             "italic",
//             "|",
//             "heading",
//             "link",
//             "bulletedList",
//             "numberedList",
//             "|",
//             "indent",
//             "outdent",
//             "|",
//             "imageUpload",
//             "blockQuote",
//             "insertTable",
//             "mediaEmbed",
//             "undo",
//             "redo",
//             "|",
//           ],
//         },
//         plugins: [Bold, Essentials, Italic, Mention, Paragraph, Undo],
//         initialData: defaultValue || "",
//       }}
//       onChange={handleChangeEditor}
//     />
//   );
// }

// export default CustomEditor;

// fiuturr ini

// "use client"; // only in App Router

// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import {
//   ClassicEditor,
//   Bold,
//   Essentials,
//   Italic,
//   Mention,
//   Paragraph,
//   Undo,
//   FontSize,
//   FontFamily,
//   Alignment,
// } from "ckeditor5";
// import "ckeditor5/ckeditor5.css";

// function CustomEditor({ result, defaultValue }: any) {
//   const handleChangeEditor = (event: any, editor: any) => {
//     result(editor.getData());
//   };

//   return (
//     <CKEditor
//       editor={ClassicEditor}
//       config={{
//         toolbar: {
//           items: [
//             "undo",
//             "redo",
//             "|",
//             "bold",
//             "italic",
//             "|",
//             "heading",
//             "link",
//             "bulletedList",
//             "numberedList",
//             "|",
//             "indent",
//             "outdent",
//             "|",
//             "fontSize",
//             "fontFamily",
//             "alignment",
//             "imageUpload",
//             "blockQuote",
//             "insertTable",
//             "mediaEmbed",
//             "undo",
//             "redo",
//             "|",
//           ],
//         },
//         plugins: [
//           Bold,
//           Essentials,
//           Italic,
//           Mention,
//           Paragraph,
//           Undo,
//           FontSize,
//           FontFamily,
//           Alignment,
//         ],
//         initialData: defaultValue || "",
//         fontSize: {
//           options: [10, 12, 14, "default", 18, 20, 24],
//         },
//         fontFamily: {
//           options: [
//             "default",
//             "Arial",
//             "Courier New",
//             "Georgia",
//             "Times New Roman",
//             "Verdana",
//           ],
//         },
//         alignment: {
//           options: ["left", "center", "right", "justify"],
//         },
//       }}
//       onChange={handleChangeEditor}
//     />
//   );
// }

// export default CustomEditor;

// ss

"use client"; // only in App Router

import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
  FontSize,
  FontFamily,
  Alignment,
  Highlight,
  Strikethrough,
  Code,
  List,
  Table,
  TableToolbar,
  Image,
  ImageToolbar,
  ImageCaption,
  ImageStyle,
  ImageResize,
  Link,
  MediaEmbed,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";

function CustomEditor({ result, defaultValue }: any) {
  const handleChangeEditor = (event: any, editor: any) => {
    result(editor.getData());
  };

  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: {
          items: [
            "undo",
            "redo",
            "|",
            "bold",
            "italic",
            "strikethrough",
            "highlight",
            "code",
            "|",
            "heading",
            "link",
            "bulletedList",
            "numberedList",
            "|",
            "indent",
            "outdent",
            "|",
            "fontSize",
            "fontFamily",
            "alignment",
            "imageUpload",
            "blockQuote",
            "insertTable",
            "mediaEmbed",
            "|",
            "undo",
            "redo",
          ],
        },
        plugins: [
          Bold,
          Essentials,
          Italic,
          Mention,
          Paragraph,
          Undo,
          FontSize,
          FontFamily,
          Alignment,
          Highlight,
          Strikethrough,
          Code,
          List,
          Table,
          TableToolbar,
          Image,
          ImageToolbar,
          ImageCaption,
          ImageStyle,
          ImageResize,
          Link,
          MediaEmbed,
        ],
        initialData: defaultValue || "",
        fontSize: {
          options: [10, 12, 14, "default", 18, 20, 24, 30, 36],
        },
        fontFamily: {
          options: [
            "default",
            "Arial",
            "Courier New",
            "Georgia",
            "Times New Roman",
            "Verdana",
          ],
        },
        alignment: {
          options: ["left", "center", "right", "justify"],
        },
        image: {
          toolbar: [
            "imageTextAlternative",
            "imageStyle:full",
            "imageStyle:side",
            "imageResize",
          ],
        },
        table: {
          contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
        },
      }}
      onChange={handleChangeEditor}
    />
  );
}

export default CustomEditor;
