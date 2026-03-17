import { ChevronRight } from "lucide-react";
import DiscoveryCard from "./DiscoveryCard";
import { useFetch } from "../hooks/use-fetch";
import type { ApiResponse, IMeal } from "../types/discovery.types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface SearchListProps {
    initialTerm: string;
}

const SearchList = ({ initialTerm }: SearchListProps) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [inputTerm, setInputTerm] = useState(initialTerm);
    const [activeTerm, setActiveTerm] = useState(initialTerm);

    const apiUrl = activeTerm
        ? `https://www.themealdb.com/api/json/v1/1/search.php?f=${encodeURIComponent(activeTerm)}`
        : "";

    const { data, loading, error } = useFetch<ApiResponse>(
        apiUrl
    );

    useEffect(() => {
        setInputTerm(initialTerm);
        setActiveTerm(initialTerm);
    }, [initialTerm]);

    const handleSearch = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const normalized = inputTerm.trim();
        if (!normalized) return;
        setActiveTerm(normalized);
        setSearchParams({ term: normalized });
    };
    console.log("API Data:", data, error, loading);
    // transform API → UI format
    if (loading) return <p>Loading...</p>;
    if ( typeof data?.meals === "string" && error === null) return <>
        <div className='input-button mt-[150px] mx-[75px]' >
            <input
                type='text'
                placeholder='Search recipes...'
                value={inputTerm}
                onChange={(e) => setInputTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
        <p className="mx-[75px]">No data found</p>
    </>;
    const meals: IMeal[] =
        data?.meals?.slice(0, 20).map((item) => ({
            id: item.idIngredient,
            name: item.strIngredient,
            category: item.strType ?? "Ingredient",
            prepTime: "—",
            mealName: item.strMeal,
            rating: Math.random() * 5, // fake for now
            ratingCount: Math.floor(Math.random() * 200),
            author: "ThemealDB",
            thumbnail: item.strThumb,
            mealThumb: item.strMealThumb,
            instructions: item.strInstructions
        })) ?? [];



    return (
        <>
            <div className='input-button mt-[150px] mx-[40px]'>
                <input
                    type='text'
                    placeholder='Search recipes...'
                    value={inputTerm}
                    onChange={(e) => setInputTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {!activeTerm ? (
                <p className="mt-4 text-center">Type a term and click Search to see results.</p>
            ) : (
                <section className=" w-full mx-auto md:px-12 sm:px-8 px-4 py-10">
                    <div className="flex items-end justify-between mb-8">
                        <h2 className="text-[clamp(1.8rem,4vw,1.5rem)] font-bold tracking-[-2px] leading-none text-[var(--text-primary)]">
                            Recipes for "{activeTerm}"
                        </h2>

                      
                    </div>

                    <div className="grid gap-[20px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                        {meals.length > 0 ? (
                            meals.map((meal) =>
                                
                                <DiscoveryCard key={meal.id} meal={meal} />
                            
                            )
                        ) : (
                            <p className="col-span-full text-center">No recipes found for "{activeTerm}".</p>
                        )}
                    </div>
                </section>
            )}
        </>
    );
};

export default SearchList;