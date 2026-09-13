import CustomImage from './CustomImage';
import Postinfo from './Postinfo';
import Postinteraction from './Postinteraction';

const Post = () => {
  return (
    <div className="p-4 border-y border-borderGray">
      {/* POOST TYPE */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        <span>bcu001 reposted</span>
      </div>
      {/** POST content */}
      <div className="flex gap-4">
        <div className="relative size-10 rounded-full overflow-hidden ">
          <CustomImage src="/general/avatar.png" alt="" w={100} h={100} tr />
        </div>
        {/* CONTENT  */}
        <div className="flex-1 flex flex-col gap-2">
          {/* top */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-md font-bold">Bhuwan Upadhyay</h1>
              <span className="text-textGray">@bcu001</span>
              <span className="text-textGray">1h</span>
            </div>
            <Postinfo />
          </div>
          {/* TEXT & MEDIA */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            ullam. Dicta quaerat quisquam, natus similique eos temporibus
            perspiciatis debitis deleniti?
          </p>
          <CustomImage src="general/post.jpeg" alt="" w={600} h={200} />

          {/* Buttons */}
          <Postinteraction />
        </div>
      </div>
    </div>
  );
};

export default Post;
