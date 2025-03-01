/* ---------------------------------------------------------------------------------------
 * about:运行时-构建时。应对需要在 mounted 之前就必须准备好的情况。
 * ---------------------------------------------------------------------------------------- */
import { useRef } from 'react';

// 组件初始化（from https://dev.to/brayanarrieta/most-awesome-hooks-for-your-react-project-4dcp）
const useConstructor = (callBack: () => void) => {
  const hasBeenCalled = useRef(false);
  if (hasBeenCalled.current) return;
  callBack();
  hasBeenCalled.current = true;
};

export default useConstructor;
