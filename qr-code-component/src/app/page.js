import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center content-center bg-slate-300">
      <div className="bg-white rounded-2xl border-none flex justify-center">
        <Image src="/image-qr-code.png" width={240} height={240} alt="Qr Code" className="m-4 rounded-lg" />
      </div>
    </div>
  );
}
