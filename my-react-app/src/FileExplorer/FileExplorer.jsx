import React, { useState } from "react";

const FileExplorer = ({ explorer, editFile, deleteFile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [fileName, setFileName] = useState(explorer.name);

  const handleEdit = () => {
    editFile(explorer.id, fileName);
    setIsEditing(false);
  };

  return (
    <div style={{ paddingLeft: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span
          style={{
            fontWeight: explorer?.isFolder ? "bold" : "normal",
            fontSize: "1.1em",
            color: "#333",
            cursor: explorer.isFolder ? "pointer" : "default",
          }}
          onClick={() => {
            if (explorer.isFolder) {
              setIsOpen((prev) => !prev);
            }
          }}
        >
          {explorer.isFolder ? (isOpen ? "📂" : "📁") : "📄"}
        </span>

        {isEditing ? (
          <input
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleEdit()}
            autoFocus
            style={{ fontSize: "1em" }}
          />
        ) : (
          <span>{explorer.name}</span>
        )}

        <button onClick={() => setIsEditing((prev) => !prev)}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={() => deleteFile(explorer.id)}>Delete</button>
      </div>

      {isOpen &&
        explorer.items?.map((item) => (
          <FileExplorer
            key={item.id}
            explorer={item}
            editFile={editFile}
            deleteFile={deleteFile}
          />
        ))}
    </div>
  );
};

export default FileExplorer;
