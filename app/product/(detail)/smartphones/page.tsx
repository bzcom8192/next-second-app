import bb from "@/assets/images/bb.png";
import Back from "@/components/Back";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Back />
      <Image src={bb} alt="bb" className="mx-auto" width={120} height={120} />
      Smartphones
    </div>
  );
}
