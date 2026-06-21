import NavBarMain from "@/components/NavBarMain";
import Image from "next/image";
import aa from "@/assets/images/aa.png";
import { Itim } from "next/font/google";

const itim = Itim({ subsets: ["latin"], weight: "400" });

export default function Page() {
  return (
    <div>
      <NavBarMain />
      <h1 className="flex justify-center text-2xl">Welcome</h1>
      <h2 className="flex justify-center">Home</h2>
      <Image src={aa} alt="aa" className="mx-auto" width={120} height={120} />

      <p className={`${itim.className} text-center`}>มหาวิทยาลัยเอเชียอาคเนย์</p>
    </div>
  );
}
