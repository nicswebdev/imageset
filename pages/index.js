import Image from "next/image";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <div>
                <Image
                    className="w-full h-auto rounded-lg mx-auto"
                    src={`https://raw.githubusercontent.com/gitdagray/test-blogposts/main/images/NextLevel1.png`}
                    alt="test-image"
                    width={650}
                    height={366}
                    sizes="(min-width: 880px) 650px, calc(96.79vw - 182px)"
                    priority={true}
                />
            </div>
        </main>
    );
}
