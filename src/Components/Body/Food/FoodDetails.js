import React, { useState, useEffect } from "react";

const FoodDetails = () => {
    const [foods, setFoods] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("breakfast.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const jsonData = await response.json();
                setFoods(jsonData);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);
    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!foods) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Food Details</h1>
            <div className="grid grid-cols-3 gap-4">
                {foods.map((food) => (
                    <div key={food.id} className="border p-4">
                        <img
                            src={food.image}
                            alt={food.name}
                            className="w-full h-auto"
                        />
                        <h2 className="text-lg font-semibold">{food.name}</h2>
                        <p className="text-gray-600">
                            ${food.price.toFixed(2)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodDetails;
