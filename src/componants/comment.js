import Image from "next/image";
import { useState } from "react";

export default function Comment({ props, comments }) {
  const [value, setValue] = useState(0);

  return (
    <div className="bg-gray-50 border-2 border-gray-300 rounded py-4 px-4 flex justify-between gap-4 max-w-full">
      <Image
        src="/profile.png"
        alt="https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png"
        height={30}
        width={30}
      ></Image>
      <p className="bg-gray-50">{props.text}</p>
      <div className="flex">
        <p>{value}</p>
        <button
          onClick={() => {
            setValue(value + 1);
            comments.find((c) => c.id === props.id).number = value + 1;
          }}
        >
          <Image
            src="/arrow.png"
            alt="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Feather-arrows-arrow-up.svg/1024px-Feather-arrows-arrow-up.svg.png"
            height={20}
            width={20}
          ></Image>
        </button>
      </div>
    </div>
  );
}
