import React from "react";

const CartPage = () => {
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <div className="flex items-center justify-between border-b border-gray-300 py-4">
                        <div>
                            <h2 className="text-lg font-semibold">
                                {/* {item.name} */}
                            </h2>
                            <p className="text-gray-600">
                                {/* Price: ${item.price} */}
                            </p>
                            <p className="text-gray-600">
                                {/* Quantity: {item.quantity} */}
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold">
                                {/* ${item.price * item.quantity} */}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="bg-gray-100 p-4 rounded-md">
                        <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
                        <p className="text-gray-600 mb-2">
                            {/* Total Items: {cartItems.length} */}
                        </p>
                        <p className="text-gray-600 mb-2">
                            {/* Total Price: ${getTotalPrice()} */}
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
