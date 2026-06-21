import Link from "next/link";

export default function Page() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <p className="text-xl font-bold">ไม่พบหน้าที่คุณต้องการ</p>
            <Link href="/" className="text-blue-500 hover:underline mt-8">กลับไปหน้าหลัก</Link>
        </div>
    );
}