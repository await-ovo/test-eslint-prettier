const useMemo: any = () => 0;
const isLastArchiveNode = useMemo(() => {
  // comments 
  return [1, 2, 3].some(item => {
    return item > 1;
  });
}, [0]);
