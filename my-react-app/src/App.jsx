// import FileExplorerParent from "./FileExplorer/FileExplorerParent";
// import InfiniteScrollList from "./IntersectionObserver/IntersectionObserver";

// import ProgressBarParent from "./progressBar/progressBarParent";

// import UndoRedo from "./undoRedo/undoRedo";
import VirtualizedList from "./virtualizedList/virtualizedList";
function App() {
  return (
    <>
      {/* <FileExplorerParent /> */}
      {/* <InfiniteScrollList /> */}
      {/* <UndoRedo /> */}
      {/* <ProgressBarParent /> */}
      <VirtualizedList
        items={Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`)}
        itemHeight={50}
        containerHeight={1000}
      />
    </>
  );
}

export default App;
