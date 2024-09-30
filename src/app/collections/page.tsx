"use client";

import { fetchCollections } from "@/lib/utils/apiService";
import Link from "next/link";
import React from "react";

const AllCollections = () => {
  const [collections, setCollections] = React.useState([]);
  const [error, setError] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState<boolean>(true)

    React.useEffect(() => {
        const getCollections = async () => {
            try {
                const data = await fetchCollections()
                setCollections(data)
            } catch (error) {
                console.error('Error fetching collections:', error)
            } finally {
                setLoading(false)
            }
        }
        getCollections()
    }, [])

  return (
    <main className='flex flex-col items-center pb-[4rem]'>
      <h1 className='text-3xl font-bold  my-[3rem]'>Collections</h1>
      <ul className='gap-8 grid grid-cols-3 max-w-[70rem] w-full px-[3rem]'>
        {collections.map((collection) => (
            <li key={collection.slug}>
                <Link href={`/collections/${collection.slug}`}>
                    <div className='h-[20rem] w-full border flex items-center justify-center z-1 relative before:bg-black before:z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-30 hover:before:opacity-70'>
                        <span className='absolute font-bold  text-xl z-100'>{collection.name}</span>
                    </div>
                </Link>
            </li>
        ))}
      </ul>
    </main>
  );
};

export default AllCollections;
