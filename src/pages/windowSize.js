import { useWindowResize } from "../util/hooks";

const WindowSize = () => {
  const windowSize = useWindowResize();
  return (
    <>
      <h1>Window Size</h1>
      <p>Width: {windowSize.width}px</p>
      <p>Height: {windowSize.height}px</p>
    </>
  );
};

export default WindowSize;
