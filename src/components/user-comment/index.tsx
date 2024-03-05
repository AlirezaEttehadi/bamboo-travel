import { User } from "@nextui-org/react";
import { FC } from "react";

import Rating from "@bamboo/components/rating";

type AuthorModel = {
  id: number;
  name: string;
  career: string;
  image: string;
};

type Props = {
  comment: {
    id: number;
    comment: string;
    rate: number;
    author: AuthorModel;
  };
};

const UserComment: FC<Props> = ({ comment }) => {
  return (
    <div className="flex py-4 flex-col items-start gap-1">
      <User
        name={comment.author.name}
        description={comment.author.career}
        avatarProps={{
          src: comment.author.image,
        }}
      />
      <Rating rate={4} />
      <p className="text-gray-500 text-sm">{comment.comment}</p>
    </div>
  );
};

export default UserComment;
