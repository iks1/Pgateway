import { PrismaClient } from "@repo/db";
const client = new PrismaClient();
import Test from "./test";

export default function Page(): JSX.Element {
  return (
    <>
      <div className="text-xl">
        <Test/>
      </div>
    </>
  );
}
