import { File, FileTypeEnum } from "@/interfaces/file";
import Image from "next/image";

type Props = {
  memory: File;
};

const SingleMemory = ({ memory }: Props) => {
  const { url, height, width, type } = memory;

  return (
    <article className="px-2">
      {type === FileTypeEnum.IMAGE ? (
        <div className="py-5 rounded-sm h-80 flex items-center justify-center overflow-hidden">
          <Image
            width={width}
            height={height}
            src={url}
            alt={`${type} ${width} ${height}`}
          />
        </div>
      ) : (
        <div className="py-5 rounded-sm flex items-center justify-center overflow-hidden">
          <iframe src={url} allowFullScreen width={width} height={height} />
        </div>
      )}
    </article>
  );
};

export default SingleMemory;
