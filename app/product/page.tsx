import NavBarMain from "@/components/NavBarMain";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <NavBarMain />
      Product
      <div className="flex flex-col gap-2 pt-4 w-max">
          {["tablets", "notebooks", "pcs", "notebooks"].map((item) => (
            <span key={item} className="hover:bg-gray-200 px-2 py-1 rounded-md">
              <Link href={`/product/${item}`}>{item}</Link>
            </span>
          ))}
      </div>
    </div>
  );
}
