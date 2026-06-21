import Link from "next/link";

export default function NavBarMain() {
  return (
    <div className="flex gap-4 bg-gray-100 p-4 [&>a]:hover:underline">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/product">Product</Link>
    </div>
  );
}
