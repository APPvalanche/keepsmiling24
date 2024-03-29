import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(query);

  return data;
}

export default async function Hero() {
  const data = await getData();
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Uncover the Art of Imperfection at Flow.
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            At Flow, we believe that true beauty lies in embracing the
            imperfect, the transient, and the authentic. Inspired by the ancient
            <span className="font-bold"> Japanese philosophy</span> of Wabi
            Sabi, our brand celebrates the inherent elegance found in the
            natural world and in the simple moments of everyday life.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 shadow-lg overflow-hidden rounded-lg rounded-bl-full bg-gray-100 md:left-16 md:top-16 lg:ml-0">
            <Image
              src={urlFor(data.image1).url()}
              alt="Hero Image"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>

          <div className="overfow-hidden bg-gray-100 shadow-lg rounded-tr-full">
            <Image
              src={urlFor(data.image2).url()}
              alt="Hero Image 2"
              className="h-full w-full object-cover object-center rounded-tr-full shadow-lg"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-96 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/Serveware"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Serveware
          </Link>

          <Link
            href="/Decoration"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Decoration
          </Link>

          <Link
            href="/Art"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Art
          </Link>
        </div>
      </div>
    </section>
  );
}
