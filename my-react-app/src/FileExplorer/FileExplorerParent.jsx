import { useState } from "react";
import FileExplorer from "./FileExplorer";
import { fileExplorerData } from "./fileExplorerData";
export function FileExplorerParent() {
  const [data, setData] = useState(fileExplorerData);
  const deleteFile = (node, id) => {
    if (node.items) {
      node.items = node.items
        .map((items) => deleteFile(items, id))
        .filter(Boolean);
    }
    return node.id === id ? null : node;
  };
  const handleDelete = (id) => {
    const newData = deleteFile({ ...data }, id);
    if (newData) setData(newData);
  };
  const editFile = (node, name, id) => {
    if (node?.id === id) {
      node.name = name;
      return node;
    }
    if (node.items) {
      node.items = node.items.map((items) => editFile(items, name, id));
    }
    return node;
  };
  const handleEdit = (id, name) => {
    const newData = editFile({ ...data }, name, id);
    if (newData) setData(newData);
  };
  return (
    <>
      <FileExplorer
        explorer={data}
        editFile={handleEdit}
        deleteFile={handleDelete}
      />
    </>
  );
}

export default FileExplorerParent;
