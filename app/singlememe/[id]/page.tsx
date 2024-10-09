// "use client";

// import Loading from "@/app/Loading";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

// const Singlememe = (props: { params: { id: string } }) => {
//   const [generatedMeme, setGeneratedMeme] = useState("");
//   const [memeTemplate, setMemeTemplate] = useState<string | null>(null);
//   const [memesave, setMemesave] = useState<string[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [boxcount, setBoxcount] = useState<number>(0);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   useEffect(() => {
//     const fetchMemeTemplate = async () => {
//       const response = await fetch("https://api.imgflip.com/get_memes");
//       const data = await response.json();
//       const meme = data.data.memes.find((m: any) => m.id === props.params.id);

//       if (meme) {
//         setBoxcount(meme.box_count);
//         setMemeTemplate(meme.url);
//       }
//     };
//     fetchMemeTemplate();
//   }, [props.params.id]);

//   const generateMeme = async (data: any) => {
//     setLoading(true);
//     const textValues = Object.keys(data)
//       .map((key, index) => `text${index}=${encodeURIComponent(data[key])}`)
//       .join("&");

//     const url = `https://api.imgflip.com/caption_image?template_id=${
//       props.params.id
//     }&username=AbdulMoizAli&password=meme12345678&${textValues.toString()}`;
//     console.log(url);
//     try {
//       const response = await fetch(url, { method: "POST" });
//       const result = await response.json();
//       setLoading(false);

//       if (result.success) {
//         setGeneratedMeme(result.data.url);
//         setMemesave((prev) => [...prev, result.data.url]);
//       } else {
//         console.error("Error generating meme:", result.error_message);
//       }
//     } catch (error) {
//       console.error("Network error:", error);
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <h1 className="m-10 flex justify-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white decoration-blue-400 underline underline-offset-3 dark:decoration-blue-600">
//         Generate Meme
//       </h1>
//       {memeTemplate && (
//         <div className="flex justify-center">
//           <Image
//             src={memeTemplate}
//             width={384}
//             height={240}
//             alt="Meme Template"
//           />
//         </div>
//       )}
//       <form
//         onSubmit={handleSubmit(generateMeme)}
//         className="flex justify-center flex-col items-center m-10"
//       >
//         {Array.from({ length: boxcount }, (_, index) => (
//           <input
//             key={index}
//             type="text"
//             placeholder={`Text ${index + 1}`}
//             {...register(`text${index}`, { required: true })}
//             className="input input-bordered w-full max-w-xs mb-2"
//           />
//         ))}
//         <button className="btn btn-primary m-3" type="submit">
//           {loading ? <Loading /> : "Create Meme"}
//         </button>
//       </form>
//       {generatedMeme && (
//         <h2 className="text-center text-2xl font-bold my-5">
//           -: Saved Memes :-
//         </h2>
//       )}
//       <div className="flex justify-center gap-5 flex-wrap">
//         {memesave.map((memeUrl, index) => (
//           <div
//             key={index}
//             style={{ border: "2px solid white" }}
//             className="card flex justify-center border-neutral-50 bg-gray-900 m-10 item-center w-96 shadow-xl"
//           >
//             <Image
//               src={memeUrl}
//               width={384}
//               height={240}
//               alt={"Saved meme"}
//               className="rounded-xl"
//             />
//             <div className="card-body flex">
//               <div className="card-actions text-aline justify-center">
//                 <a href={memeUrl} download="meme.png">
//                   <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
//                     <svg
//                       className="w-3 h-3 me-2"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
//                       <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
//                     </svg>
//                     Downloads
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Singlememe;

"use client";

import Loading from "@/app/Loading";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Singlememe = (props: { params: { id: string } }) => {
  const [generatedMeme, setGeneratedMeme] = useState("");
  const [memeTemplate, setMemeTemplate] = useState<string | null>(null);
  const [memesave, setMemesave] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [boxcount, setBoxcount] = useState<number>(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchMemeTemplate = async () => {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      const meme = data.data.memes.find((m: any) => m.id === props.params.id);

      if (meme) {
        setBoxcount(meme.box_count);
        setMemeTemplate(meme.url);
      }
    };
    fetchMemeTemplate();
  }, [props.params.id]);

  const generateMeme = async (data: any) => {
    setLoading(true);
    const textValues = Array.from({ length: boxcount }, (_, index) => {
      const textKey = `text${index}`;
      return data[textKey]
        ? `boxes[${index}][text]=${encodeURIComponent(data[textKey])}`
        : null;
    }).filter(Boolean);

    const url = `https://api.imgflip.com/caption_image?template_id=${
      props.params.id
    }&username=AbdulMoizAli&password=meme12345678&${textValues.join("&")}`;

    console.log(url);
    try {
      const response = await fetch(url, { method: "POST" });
      const result = await response.json();
      setLoading(false);

      if (result.success) {
        setGeneratedMeme(result.data.url);
        setMemesave((prev) => [...prev, result.data.url]);
      } else {
        console.error("Error generating meme:", result.error_message);
      }
    } catch (error) {
      console.error("Network error:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="m-10 flex justify-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white decoration-blue-400 underline underline-offset-3 dark:decoration-blue-600">
        Generate Meme
      </h1>
      {memeTemplate && (
        <div className="flex justify-center">
          <Image
            src={memeTemplate}
            width={384}
            height={240}
            alt="Meme Template"
          />
        </div>
      )}
      <form
        onSubmit={handleSubmit(generateMeme)}
        className="flex justify-center flex-col items-center m-10"
      >
        {Array.from({ length: boxcount }, (_, index) => (
          <div key={index} className="flex flex-col items-center">
            <input
              type="text"
              placeholder={`Text ${index + 1}`}
              {...register(`text${index}`, { required: true })}
              className="input input-bordered w-full max-w-xs mb-2"
            />
            {errors[`text${index}`] && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
        ))}
        <button className="btn btn-primary m-3" type="submit">
          {loading ? <Loading /> : "Create Meme"}
        </button>
      </form>
      {generatedMeme && (
        <h2 className="text-center text-2xl font-bold my-5">
          -: Saved Memes :-
        </h2>
      )}
      <div className="flex justify-center gap-5 flex-wrap">
        {memesave.map((memeUrl, index) => (
          <div
            key={index}
            style={{ border: "2px solid white" }}
            className="card flex justify-center border-neutral-50 bg-gray-900 m-10 item-center w-96 shadow-xl"
          >
            <Image
              src={memeUrl}
              width={384}
              height={240}
              alt={"Saved meme"}
              className="rounded-xl"
            />
            <div className="card-body flex">
              <div className="card-actions justify-center">
                <a href={memeUrl} download="meme.png">
                  <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                    <svg
                      className="w-3 h-3 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                      <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                    </svg>
                    Downloads
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Singlememe;
