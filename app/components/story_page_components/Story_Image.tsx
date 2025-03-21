import Image from "next/image";
export const Story_Image = (props: { src: string; alt: string }) => {
  return (
    <div className="flex flex-row justify-evenly self-center">
      <Image
        src={props.src}
        height={407}
        width={330}
        quality={100}
        alt={props.alt}
        className="border-8 border-black rounded w-container h-auto"
      ></Image>
    </div>
  );
};
