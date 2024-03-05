import { User } from "@nextui-org/react";

import Rating from "@bamboo/components/rating";

const UserComment = () => {
  return (
    <div className="flex py-4 flex-col items-start gap-1">
      <User
        name="Jane Doe"
        description="Product Designer"
        avatarProps={{
          src: "/user.avif",
        }}
      />
      <Rating rate={4} />
      <p className="text-gray-500 text-sm">
        My third time there.Keeping the highest level.Location,staff,room
        perfect as always.
      </p>
    </div>
  );
};

export default UserComment;
