import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center content-center bg-slate-300 p-2">
      <div className="w-68 bg-white rounded-2xl border-none flex flex-col justify-center items-center">
        <div className="p-4">
          <Image src="/image-qr-code.png" width={240} height={240} alt="Qr Code" className="rounded-lg" />
        </div>
        <div className="flex flex-col gap-y-3 text-center px-8 pb-8">
          <h1 className="font-bold text-lg leading-5.5">Improve your front-end skills by building projects</h1>
          <p className="text-gray-400 text-xs">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  );
}
