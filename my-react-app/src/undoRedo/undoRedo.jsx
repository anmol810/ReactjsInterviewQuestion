import React, { useState } from "react";

function UndoRedo() {
  const [value, setValue] = useState(""); // current value
  const [undoStack, setUndoStack] = useState([]); // stack of past values
  const [redoStack, setRedoStack] = useState([]); // stack of undone values

  const handleChange = (e) => {
    const newValue = e.target.value;

    // Push current value to undo stack
    setUndoStack((prev) => [...prev, value]);
    setValue(newValue);
    setRedoStack([]); // Clear redo stack
  };

  const handleUndo = () => {
    if (undoStack.length === 0) return;

    const previous = undoStack[undoStack.length - 1];
    setUndoStack((prev) => {
      return prev.slice(0, prev.length - 1);
    });

    setRedoStack((prev) => [...prev, value]);
    setValue(previous);
  };

  const handleRedo = () => {
    if (redoStack.length === 0) return;

    const next = redoStack[redoStack.length - 1];
    setRedoStack((prev) => prev.slice(0, prev.length - 1));
    console.log("next", value, next);
    setUndoStack((prev) => [...prev, value]);
    setValue(next);
  };

  return (
    <div style={{ padding: "20px" }}>
      <textarea value={value} onChange={handleChange} rows={6} cols={40} />
      <br />
      <button onClick={handleUndo} disabled={undoStack.length === 0}>
        Undo
      </button>
      <button onClick={handleRedo} disabled={redoStack.length === 0}>
        Redo
      </button>
    </div>
  );
}

export default UndoRedo;
