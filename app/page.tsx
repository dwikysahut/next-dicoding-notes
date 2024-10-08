import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex h-screen relative flex-col items-center justify-center p-24 w-100 ">
      <h1 className='text-3xl'>Welcome</h1>
      <Image
        src="/image/picture.jpeg"
        width={100}
        height={100}
       // This will make the image fill its container
        alt="Picture of the author"
      />
    </main>
  );
}
