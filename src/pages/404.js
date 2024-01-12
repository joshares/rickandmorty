import Link from "next/link";

export default function Index() {
  return (
    <main className="bg-gray-200 md:p-10 p-5 min-h-screen shadow-inner ">
      <header className=" pb-10 flex font-serif flex-col font-semibold gap-0">
        <p className="uppercase text-2xl">rick and morty</p>
        <p className="text-xs uppercase text-gray-600">Characters</p>
      </header>
      <div className="flex flex-col justify-center items-center gap-2 mt-40 text-center">
        <p>This page does not exist</p>
        <Link href="/" className="text-white bg-black px-4 p-2 rounded-md">
          Go home
        </Link>
      </div>
    </main>
  );
}
