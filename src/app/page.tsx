import Image from "next/image";
import Mainpage from "./(main)/main/Page";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center
    "
    >
      {/* <Page /> */}
      <Mainpage />
    </main>
  );
}
