import NavBarMain from "@/components/NavBarMain";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <NavBarMain />
      Product
      <div className="flex flex-col gap-4 pt-4">
          {["tablets", "notebooks", "pcs", "notebooks"].map((item) => (
            <div key={item}>
              <Link href={`/product/${item}`}>{item}</Link>
            </div>
          ))}
      </div>
    </div>
  );
}
