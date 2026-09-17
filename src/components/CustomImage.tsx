import { Image } from '@imagekit/next';
import CLIENT_ENV from '@/config/client-env';

type CustomImageProps = {
  src: string;
  alt: string;
  className?: string;
  w: number;
  h: number;
  tr?: boolean;
  loading?: 'eager' | 'lazy';
};

const CustomImage = (props: CustomImageProps) => {
  return (
    <Image
      urlEndpoint={CLIENT_ENV.urlEndPoint}
      src={props.src}
      alt={props.alt}
      width={props.w}
      height={props.h}
      className={props.className}
      loading={props.loading}
      {...(props.tr && {
        transformation: [{ width: props.w, height: props.h }],
      })}
    />
  );
};

export default CustomImage;
