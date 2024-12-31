import axios from "axios"
import { useState } from "react";

export default function CreateProduct({ darkTheme }) {
  // useState
  const [selectedCategory, setSelectedCategory] = useState("Medicines");

  // Functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = e.target[0].value;
    const company = e.target[1].value;
    const price = e.target[2].value;
    const quantity = e.target[3].value;
    const packaging = e.target[4].value;
    const category = e.target[5].value;
    const subcategory = e.target[6].value;
    const description = e.target[7].value;
    const img = e.target[8].value;
    
    const data = {item: product, company: company, price: price, quantity: quantity, packaging: packaging, category: category, subcategory: subcategory, description: description, img: img};

    const res = await axios.post("http://localhost:5000/admin/createProduct", data);
    // const res = await axios.post("http://localhost:5000/admin/createLink", data);
  };

  return (
    <form onSubmit={handleSubmit} className={`${darkTheme ? "bg-gray-900" : "bg-gray-300"} text-gray-400 flex flex-col items-center gap-5 py-5 rounded-2xl`}>
      <h1 className="font-semibold text-3xl">Create A Product</h1>

      {/* Product and Company */}
      <div className="flex items-center gap-5">
        <input type="text" placeholder="Enter Product Name" required className="px-5 py-2 border outline-none" />
        <input type="text" placeholder="Enter Company Name" required className="px-5 py-2 border outline-none" />
      </div>
      
      {/* Price, Quantity and packaging */}
      <div className="flex items-center gap-5">
        <input type="number" placeholder="Enter Price" required className="px-5 py-2 border outline-none" />
        <input type="number" placeholder="Enter Quantity" required className="px-5 py-2 border outline-none" />
        <input type="text" placeholder="Enter Packaging" required className="px-5 py-2 border outline-none" />
      </div>

      {/* Category and Sub-Category */}
      <div className="flex items-center gap-5">
        <select name="product_addCategory" id="product_addCategory" onChange={(e) => setSelectedCategory(e.target.value)} className="px-5 py-3 outline-none">
          <option value="Medicines">Medicines</option>
          <option value="Personal care">Personal care</option>
          <option value="Health Conditions">Health Conditions</option>
          <option value="Vitamins & Supplements">Vitamins & Supplements</option>
          <option value="Diabetes Care">Diabetes Care</option>
          <option value="Healthcare Devices">Healthcare Devices</option>
        </select>
        <input type="text" placeholder="Enter Product Sub-Category" required className="px-5 py-2 border outline-none" />
      </div>

      {/* Description and Image */}
      <div className="flex items-center gap-5">
        <textarea type="text" placeholder="Enter Description" className="px-5 py-2 border outline-none" />
        <input type="text" placeholder="Enter image URL" required className="px-5 py-2 border outline-none" />
      </div>

      <button disabled={true} className="text-white bg-green-600 hover:bg-green-700 active:bg-green-800 px-5 py-2 rounded-xl">Add Product</button>
    </form>
  )
}