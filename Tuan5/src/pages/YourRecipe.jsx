import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import avt from "../assets/avt.png";

const API_URL = "https://67c821fd0acf98d070850937.mockapi.io/recipes";

const YourRecipe = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("Fetched recipes:", data);
                setRecipes(data);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            
            <div className="flex items-center max-w-screen-xl mx-auto p-5 gap-5">
                <img src={avt} alt="Logo" className="w-24 h-24 rounded-full" />
                <div className="flex flex-col text-left flex-1">
                    <h1 className="text-2xl font-semibold">Emma Gonzalez's Recipe Box</h1>
                    <p className="mt-2 text-gray-600">
                        Emma Gonzalez is a deputy editor at Cheffify, bringing her expertise as a former cooking editor
                        at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks
                        and food publications. Originally from East Los Angeles, Emma now resides in New York City,
                        where she explores a wide range of culinary delights.
                    </p>
                    <div className="flex items-center mt-4 gap-3">
                        <span className="text-gray-700">6.5k Subscribers</span>
                        <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 font-semibold">
                            Share
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex border-b-2 border-gray-300 max-w-screen-xl px-5 p-5 gap-5">
                <span className="text-lg font-semibold text-pink-600 cursor-pointer">Saved Recipes</span>
                <span className="text-lg text-gray-600 cursor-pointer">Folders</span>
                <span className="text-lg text-gray-600 cursor-pointer">Recipes by Genevieve</span>
            </div>



            {loading && <p className="text-center mt-6 text-xl text-gray-500">Loading recipes...</p>}
            {error && <p className="text-center mt-6 text-xl text-red-500">{error}</p>}
            {!loading && !error && recipes.length === 0 && <p className="text-center mt-6 text-xl text-gray-500">No recipes found.</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-screen-xl mx-auto">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="bg-white p-4 rounded-lg shadow-md text-center relative">
                        <img className="w-full h-40 object-cover rounded-lg" src={recipe.image} alt={recipe.name} />
                        <h3 className="text-lg font-semibold mt-4 px-3">{recipe.name}</h3>
                        <p className="text-pink-500 font-bold mt-2">{recipe.time} minutes</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-2 py-6">
                <button className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700">1</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300">2</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300">3</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300">...</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300">10</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300">11</button>
            </div>

            <Footer />
        </div>
    );
};

export default YourRecipe;
