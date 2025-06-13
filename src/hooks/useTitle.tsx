import { useEffect } from 'react';
const useTitle = (title: string) => {
  useEffect(() => {
    const previousTitle: string = document.title;
    document.title = title;
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};
export default useTitle;