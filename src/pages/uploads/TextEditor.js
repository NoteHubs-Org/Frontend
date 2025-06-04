import React, { useEffect } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot, $createParagraphNode, $createTextNode } from "lexical";
import "./upload.css";

// Helper component to update editor content
const EditorUpdater = ({ content }) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (content) {
      editor.update(() => {
        const root = $getRoot();
        root.clear();
        const paragraphNode = $createParagraphNode();
        paragraphNode.append($createTextNode(content));
        root.append(paragraphNode);
      });
    }
  }, [content, editor]);

  return null;
};

const TextEditor = ({ content, isEnabled }) => {
  const editorConfig = {
    namespace: "MyEditor",
    theme: {
      paragraph: "editor-paragraph",
    },
    onError(error) {
      console.error(error);
    },
  };

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className={`editor-container ${!isEnabled ? "disabled" : ""}`}>
        <RichTextPlugin
          contentEditable={
            <ContentEditable
              className="editor-input"
              style={{
                background: !isEnabled ? "#f0f0f0" : "white",
                cursor: !isEnabled ? "not-allowed" : "text",
              }}
            />
          }
          placeholder={<div className="editor-placeholder">Waiting for summary...</div>}
        />
        <HistoryPlugin />
        <EditorUpdater content={content} />
      </div>
    </LexicalComposer>
  );
};

export default TextEditor;
