import React       from 'react';
import ImageConfig from '../../../config/ImageConfig';
import FullImage from '../FullImage';

type Props = {}

const ProfileImage: React.FC<Props> = () => {
  return (
    <div className="profile-image">
      <FullImage
        src={ImageConfig.AVATAR}
        width={ImageConfig.WIDTH}
        height={ImageConfig.HEIGHT}
      />
    </div>
  );
};

export default ProfileImage;