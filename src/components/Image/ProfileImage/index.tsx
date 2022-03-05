import React        from 'react';
import FullImage    from '../FullImage';
import ImageConfig  from '../../../config/image';
import AuthorConfig from '../../../config/author';

type Props = {}

const ProfileImage: React.FC<Props> = () => {
  return (
    <div className="profile-image max-w-[16.4%] md:max-w-[256px] laptop:max-w-[296px]">
      <FullImage
        alt="John Zenith"
        src={AuthorConfig.avatar}
        width={ImageConfig.WIDTH}
        height={ImageConfig.HEIGHT}
      />
    </div>
  );
};

export default ProfileImage;