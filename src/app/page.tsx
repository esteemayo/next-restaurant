import type { Metadata } from 'next';

import Featured from '@/components/Featured';
import Offer from '@/components/Offer';
import Slider from '@/components/Slider';

export const metadata: Metadata = {
  title: 'Restaurant | Home',
};

const Home = () => {
  return (
    <main>
      <Slider />
      <Featured />
      <Offer />
    </main>
  );
};

export default Home;
