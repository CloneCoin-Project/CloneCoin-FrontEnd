import RTQTable from '@/components/home/RTQTable';
import List from '@components/home/List';
import Intro from '@components/home/Intro';

const HomePage = () => {
  return (
    <>
	  <Intro />
      <List count={2}/>
	  <RTQTable />
    </>
  );
};

export default HomePage;
