import { File, FileTypeEnum } from "@/interfaces/file";
import Image from "next/image";

type Props = {
  memory: File;
};

const SingleMemory = ({ memory }: Props) => {
  const { url, height, width, type } = memory;
  return (
    <article className="px-2">
      <div className="px-2.5 py-5 rounded-sm h-80 flex items-center justify-center overflow-hidden">
        {type === FileTypeEnum.IMAGE ? (
          <Image
            width={width}
            height={height}
            src={url}
            alt={`${type} ${width} ${height}`}
          />
        ) : (
          <video width={width} height={height} controls preload="none">
            <source src={url} type={`video/${type}`} />
          </video>
        )}
      </div>
    </article>
  );
};

export default SingleMemory;
