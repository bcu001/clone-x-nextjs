import Link from 'next/link';
import { menuList } from '@/lib/menuList';
import CustomImage from './CustomImage';

const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      <section className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        <Link href={'/'} className="rounded-full p-2 hover:bg-ghost">
          <CustomImage src={'/icons/logo.svg'} alt="logo" w={24} h={24} />
        </Link>
        <div className="flex flex-col gap-4">
          {menuList.map((menu) => (
            <Link
              key={menu.name}
              href={menu.link}
              className="flex items-center gap-4 rounded-full hover:bg-ghost"
            >
              <CustomImage
                src={`/icons/${menu.icon}`}
                alt={menu.name}
                w={24}
                h={24}
              />
              <span className="hidden xxl:inline">{menu.name}</span>
            </Link>
          ))}
        </div>
        <Link
          href={'/'}
          className="flex items-center justify-center bg-textGrayLight text-black rounded-full w-12 h-12"
        >
          <CustomImage
            className="block xxl:hidden"
            src="/icons/post.svg"
            alt="post"
            w={24}
            h={24}
          />
        </Link>
        <Link
          href={'/'}
          className="hidden xxl:block bg-textGrayLight text-black rounded-full font-bold py-2 px-20"
        >
          Post
        </Link>
      </section>
      <section className="flex items-center justify-between ">
        <div className=" flex items-center gap-2">
          <div className="size-10 relative rounded-full overflow-hidden">
            <CustomImage
              src={'/general/avatar.png'}
              alt="avatar"
              w={40}
              h={40}
              tr={true}
            />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Bhuwan Upadhyay</span>
            <span className="text-sm text-textGray">@bcu001</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer ">...</div>
      </section>
    </div>
  );
};

export default LeftBar;
