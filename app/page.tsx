import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {
  const data = await fetch("https://api.imgflip.com/get_memes");
  const response = await data.json();
  const meme = response.data.memes;
  console.log(meme);
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/png"
          sizes="32x32"
        />
      </Head>
      <h1 className="m-10 flex justify-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white decoration-blue-400 underline underline-offset-3 dark:decoration-blue-600">
        Meme Maker
      </h1>
      <div className="flex justify-center gap-5 flex-wrap">
        {meme.map((item: any) => {
          return (
            <div key={item.id} className="card bg-base-100 w-96 shadow-xl">
              <Image
                className="h-60 w-96"
                src={item.url}
                width={384}
                height={240}
                alt="meme"
              />
              <div className="card-body">
                <h2 className="card-title">{item.name}!</h2>
                <div className="card-actions text-aline justify-end">
                  <Link href={`/singlememe/${item.id}`}>
                    <button className="btn btn-primary">
                      Create Now
                      <svg
                        className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default page;

// iii) Generate Button

// Once user clicks, it should use this API to generate a Meme with user provided text:
// POST request: https://api.imgflip.com/caption_image?template_id=<memeId>&username=<imgflipusername>&password=<imgflippassword>&text0=<text1FromUser>&text1=<text2FromUser&gt;

// For e.g.:
// https://api.imgflip.com/caption_image?template_id=181913649&username=mabdullah&password=123456&text0=Hey there&text1=hello world

// It generated:

// https://i.imgflip.com/8foj86.jpg

// For username and password, signup at imgflip.com
// Show the generated image to user! Happy coding!
// Class comments

// post request code.
// fetch('https://example.com/api/users&#39;, {
//     method: 'POST'
// })
