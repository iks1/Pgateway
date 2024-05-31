import { PrismaClient } from "@repo/db/";
const client = new PrismaClient();

export default function Page(): JSX.Element {
  return (
    <>
      <div className="text-xl">
        sumimmasen!
      </div>
    </>
  );
}
