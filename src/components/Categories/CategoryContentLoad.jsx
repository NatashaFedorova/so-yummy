import Skeleton from '@mui/material/Skeleton';
import useMediaQuery from '@mui/material/useMediaQuery';
const styles = {
  skeleton: {
    width: '300px',
    height: '400px',
    margin: '10px',
    BordeRadius: '6px',
    backgroundColor: 'rgb(139, 170, 54)',
    marginTop: '-50px',
  },
  row: {
    display: 'flex',
  },
};

export const CategorySkeleton = () => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const isTablet = useMediaQuery('(min-width:768px) and (max-width:1023px) ');
  let skeletons = [];
  if (isMobile) {
    skeletons = [<Skeleton key={1} style={styles.skeleton} />];
  } else if (isTablet) {
    skeletons = [
      <Skeleton key={1} style={styles.skeleton} />,
      <Skeleton key={2} style={styles.skeleton} />,
    ];
  } else {
    skeletons = [
      <Skeleton key={1} style={styles.skeleton} />,
      <Skeleton key={2} style={styles.skeleton} />,
      <Skeleton key={3} style={styles.skeleton} />,
      <Skeleton key={4} style={styles.skeleton} />,
    ];
  }

  return (
    <div>
      <div style={styles.row}>{skeletons}</div>
    </div>
  );
};
