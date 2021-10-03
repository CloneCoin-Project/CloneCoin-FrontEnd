import List from '@components/home/List';
import Filter from '@components/home/Filter';
import Intro from '@components/home/Intro';

const HomePage = () => {
  return (
    <>
	  <Intro />
      <Filter />
      <List />
    </>
  );
};

export default HomePage;
