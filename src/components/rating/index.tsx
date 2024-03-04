import React, { FC } from "react";
import clsx from "clsx";

type Props = {
  rate: number;
};

const Rating: FC<Props> = ({ rate }) => {
  return (
    <div className="flex space-x-1">
      {Array.of(1, 2, 3, 4, 5).map((_item, index) => {
        return (
          <span
            className={clsx({
              "text-yellow-300": rate > index,
              "text-gray-300": rate <= index,
            })}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
