import Feed from '@/components/Feed';
import Share from '@/components/Share';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const Homepage = () => {
  return (
    <div className="">
      <div className="flex justify-around  text-textGray font-bold">
        <Link className="py-3 border-b-3 border-iconBlue" href={'/'}>
          For You
        </Link>
        <Link
          className="py-3 hover:border-b-3 hover:border-iconBlue"
          href={'/'}
        >
          Following
        </Link>
      </div>
      <Separator className={'bg-ghost'} />
      <Share />
      <Separator className={'bg-ghost'} />
      <Feed />
    </div>
  );
};

export default Homepage;
