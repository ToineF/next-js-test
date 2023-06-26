import Image from "next/image";
import { useState } from "react";

export default function Comment({ props }) {
  const [value, setValue] = useState(0);

  return (
    <div className="bg-gray-50 border-2 border-gray-300 rounded py-4 px-8 flex justify-between gap-4 max-w-full">
      <p className="bg-gray-50">{props.text}</p>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>
        <Image
          src="/arrow.png"
          alt="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Feather-arrows-arrow-up.svg/1024px-Feather-arrows-arrow-up.svg.png"
          height={20}
          width={20}
        ></Image>
      </button>
    </div>
  );
}
