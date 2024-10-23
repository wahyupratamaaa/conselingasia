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
          items: ["undo", "redo", "|", "bold", "italic"],
        },
        plugins: [Bold, Essentials, Italic, Mention, Paragraph, Undo],
        initialData: defaultValue || "",
      }}
      onChange={handleChangeEditor}
    />
  );
}

export default CustomEditor;
