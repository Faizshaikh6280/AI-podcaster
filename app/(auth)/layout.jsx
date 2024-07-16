import Image from "next/image";
import BgImage from "@/public/image/bg-img.png";
function layout({ children }) {
  return (
    <div className="relative w-full min-h-screen">
      <Image src={BgImage} alt="Background Image" quality={40} fill />
      <div className="overlay absolute inset-0 bg-white-3 dark:bg-black-3 opacity-70 flex items-center justify-center"></div>
      <div className="content absolute flex items-center justify-center h-screen w-full px-8">
        {children}
      </div>
    </div>
  );
}

export default layout;
