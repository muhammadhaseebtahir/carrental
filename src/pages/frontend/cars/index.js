import React, { useEffect } from 'react'
import   {cardData} from "../../../component/assest/index"
import { motion } from "framer-motion";
import Card from '../../../component/card';
import { useProductContext } from '../../../context/ProductContext';

export default function Cars() {
  const {product,fetchData} = useProductContext()
 
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='mb-20'>
    <div className='flex flex-col items-center justify-center py-20 bg-gray-200/50 max-md:px-4 space-y-3' >
      <h1 className='text-3xl font-bold' >Avaliable Cars</h1>
            <p className='text-gray-500'>Browse our selection of premium vehicles available for your next adventure</p>
<div className='flex items-center justify-center bg-white px-6 mt-5 max-w-2xl w-full h-12 rounded-full shadow-md'>
<i className="ri-search-line mr-3"></i>
<input type="text" name="" placeholder='Search by make, model, or features' className='w-full h-full outline-none text-gray-500 '  />
<i className="ri-filter-2-line ml-2"></i>
</div>
    </div>
<div className="px-6 mt-10 bg-white">
<p className='text-gray-500 md:px-16 lg:px-24 xl:px-32 py-5'>Showing  {cardData.length} Cars </p>
 <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }} // 👈 animate when in view
        // viewport={{ once: false, amount: 0.1 }} 
                transition={{ duration: 0.7, ease: "easeOut"}}
        className="flex flex-wrap gap-6  items-center justify-center "
      >
        {product.map((item, i) => (
          <Card card={item} key={i}  />
        ))}
      </motion.div>


</div>



    </div>
  )
}
