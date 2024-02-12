"use client";
import { useState } from "react";
import Image from "next/image";

export default function LazyImage({ src, alt , width, height , quality ,...props}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`blurred-img ${loaded ? "loaded" : ""}`}>
      <Image
        src={src}
        width={width}
        height={height}
        quality={quality}
        alt={alt}
        className={loaded ? "" : "blur-xl"}
        onLoad={() => setLoaded(true)}
        {...props}
      />
      <style jsx>
        {`
          .blurred-img {
            background-repeat: no-repeat;
            background-size: cover;
          }

          .blurred-img::before {
            content: "";
            position: absolute;
            inset: 0;
            opacity: 0;
            animation: pulse 2.5s infinite;
            background-color: var(--text-color);
          }

          @keyframes pulse {
            0% {
              opacity: 0;
            }
            50% {
              opacity: 0.1;
            }
            100% {
              opacity: 0;
            }
          }

          .blurred-img.loaded::before {
            animation: none;
            content: none;
          }

          .blurred-img img {
            opacity: 0;
            transition: opacity 250ms ease-in-out;
          }

          .blurred-img.loaded img {
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
}

// "use client";
// import { useState } from 'react';
// import Image from 'next/image';

// export default function LazyImage() {
//     const [loaded, setLoaded] = useState(false);

//     return (
//         <div className={`${loaded ? 'loaded' : ''}`}>
//             <Image
//                 src="/android-chrome-192x192.png"
//                 width={500}
//                 height={500}
//                 quality={100}
//                 className={loaded ? '' : 'blur-xl'}
//                 onLoad={() => setLoaded(true)}
//             />
//         </div>
//     );
// }
