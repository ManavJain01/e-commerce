// Importing React Icons
import { LuLoader } from "react-icons/lu";

import { useEffect, useState } from "react";

// Importing Custom Hooks
import { useServices } from "../../../hooks/useServices";

function Health(){
  // variables
  const shimmerQty = 8;

  // useStates
  const [articles, setArticles] = useState([])

  // use Custom Hooks
  const { loading, error, getHealthArticle } = useServices();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getHealthArticle();
      setArticles(await response);
    }

    fetchData();
  }, []);

  return(
    <>
      <div className="my-24">
        <div className="bg-blue-200 h-[13rem] w-screen flex justify-center items-center">
          <h1 className="text-blue-900 text-6xl font-bold">Blog</h1>
        </div>

        <div className={`${loading ? "mt-10" : "my-32"} px-10 flex flex-wrap gap-10`}>
          {loading
            ?Array.from({ length: shimmerQty }).map((_, index) => (
              <div
                key={index}
                className="bg-slate-200 h-56 w-64 mx-auto rounded-lg animate-pulse"
              />
            ))
            :articles?.map((e,i)=>{
            return(
              <a key={i} href={e?.url} className="max-w-80 h-fit flex flex-col justify-between border-[1px] border-gray-400 rounded-md">
                {e?.urlToImage && <img src={e?.urlToImage} alt="img" className="h-32" />}

                <div className="flex flex-col p-3">
                  <h1 className="font-semibold">{e?.title}</h1>
                  {e?.author && <span className="text-end">By - {e?.author}</span>}
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Health;