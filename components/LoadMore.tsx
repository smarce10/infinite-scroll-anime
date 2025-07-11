"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchAnimeData } from "@/app/action";

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<JSX.Element[]>([]);
  const [page, setPage] = useState(2); // Empezamos en página 2 porque la 1 ya está cargada

  useEffect(() => {
    if (inView) {
      const newData = fetchAnimeData(page);
      newData.then((res) => {
        setData((prevData) => [...prevData, res]);
        setPage((prevPage) => prevPage + 1);
      });
    }
  }, [inView, page]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
