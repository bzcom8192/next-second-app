import NavBarMain from "@/components/NavBarMain";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <NavBarMain />
      <div className="flex flex-row justify-center gap-4 my-4 [&>img]:rounded-md [&>img]:border-2 [&>img]:border-gray-300">
        <Image
          src="https://cdn.pixabay.com/photo/2026/03/31/09/56/09-56-27-643_1280.jpg"
          alt="aa"
          className="mx-auto"
          width={120}
          height={120}
        />
        <Image
          src="https://media.flaticon.com/dist/min/img/home/banner-figma-image.svg"
          alt="bb"
          className="mx-auto"
          width={120}
          height={120}
        />
        <Image
          src="https://www.google.com/logos/doodles/2026/world-cup-2026-the-art-of-the-penalty-kick-620-6753651837111114-la22242a.gif"
          alt="bb"
          className="mx-auto w-auto"
          width={120}
          height={120}
          unoptimized
        />
      </div>
      About
    </div>
  );
}
