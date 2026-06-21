export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <h1>Product Sale</h1>
            {children}
            <h3>สินค้าดีมีคุณภาพ</h3>
        </section>
    );
}