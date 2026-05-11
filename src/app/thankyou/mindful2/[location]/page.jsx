import { Suspense } from 'react';
import Thankyoupage2 from '../component/Thankyoupage2';

export async function generateMetadata() {
  return {
    robots: 'noindex, nofollow',
  };
}

const WHATSAPP_NUMBERS = {
  hb: '9606030958',
  gk: '9606067372',
  wf: '8197341114',
};

const Page = ({ params }) => {
  const whatsapp = WHATSAPP_NUMBERS[params.location] ?? WHATSAPP_NUMBERS.hb;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Thankyoupage2 whatsapp={whatsapp} />
    </Suspense>
  );
};

export default Page;
