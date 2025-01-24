import GeneralLayout from "@/components/layouts/GeneralLayout";
import ErrorSection from "@/modules/error/ErrorSection";

export type ErrorParams = {
  status: string;
};

type Props = {
  params: ErrorParams;
};

const Page = ({ params }: Props) => {
  const { status } = params;
  return (
    <GeneralLayout>
      <ErrorSection status={status} />
    </GeneralLayout>
  );
};

export default Page;
