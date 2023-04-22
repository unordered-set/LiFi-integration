import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { LoadingIndicator } from '../pages/components/LoadingIndicator';

export const LiFiWidgetNext = dynamic(
  () => import('../pages/components/Widget').then((module) => module.Widget) as any,
  {
    ssr: false,
    loading: () => <LoadingIndicator />,
  },
);

const Home: NextPage = () => {
  return <LiFiWidgetNext />;
};

export default Home;