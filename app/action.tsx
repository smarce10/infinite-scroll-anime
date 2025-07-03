"use server";
import AnimeCard from "@/components/AnimeCard";
import { AnimeProp } from "@/components/AnimeCard";

export const fetchAnimeData = async(page: number): Promise<JSX.Element> => {
    const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`)
    const data = await response.json();
    console.log(data);
    return (
        <>
            {data.map((item: AnimeProp, index: number) => (
                <AnimeCard key={item.id} anime={item} index={index} />
            ))}
        </>
    )
}