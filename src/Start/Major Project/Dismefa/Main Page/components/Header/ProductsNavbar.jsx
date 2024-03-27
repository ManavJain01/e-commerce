import { styled } from "styled-components";

function ProductsNavbar(){

  const items = [{
    id:1,
    name:"Medicines"
  },{
    id:2,
    name:"Personal care",
    list:["skin care", "hair care", "Baby and Mom care", "Oral care", "Elderly Care"]
  },{
    id:3,
    name:"Health Conditions",
    list:["Bone and Joint Care", "Digestive Care", "Eye Care", "Pain Relief", "Smoking Cessation", "Liver Care", "Stomach Care", "Cold and Cough", "Heart Care", "Kidney Care", "Piles, Fissures & Fistula", "Respiratory Care", "Mental Wellness", "Derma Care"]
  },{
    id:4,
    name:"Vitamins & Supplements",
    list:["Multivitamins, Multiminerals and Antioxidants", "Calcium & Minerals", "Vitamin A to Z", "Protein Supplements", "Supplement Power", "Vitamin B12 and B Complex", "Mineral Supplements", "Immunity Boosters", "Omega and Fish Oil"]
  },{
    id:5,
    name:"Diabetes Care",
    list:["Test Strips and Lancets", "Blood Glucose Monitors", "Diabetic Diet", "Sugar Substitutes", "Diabetes Ayurvedic Medicines", "Homeopathy", "Syringes and Pens"]
  },{
    id:6,
    name:"Healthcare Devices",
    list:["BP Monitors", "Nebulizers and Vaporizers", "Supports and Braces"]
  }]

  return(
    <>
      <div className="relative">
        <ItemStyles>
          <div className="w-screen absolute top-10 -right-4 z-50 px-5 py-1 mb-10 flex justify-between bg-white text-gray-500 text-sm border shadow-md shadow-gray-700">
            {items.map((e)=>(
              <div key={e.id} id={e.id} className="flex flex-col gap-3">
                <ul>
                  <li>{e.name}</li>
                </ul>

                {e.list ? e.list.map((f)=>(<div key={f} className="">{f}</div>)) : ""}
              </div>
            ))}
          </div>
        </ItemStyles>
      </div>
    </>
  )
}

export default ProductsNavbar;

const ItemStyles = styled.div`
  li:hover{
    color: red;
  }
`