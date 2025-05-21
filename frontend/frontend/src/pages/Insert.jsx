import axios from 'axios'
import  {React, useState } from 'react'

const Insert = () => {
        
    const[inp,setInp]=useState({})
    const[image,setImage]=useState('')
      
     function handleInp(e){
         let name=e.target.name
         let value=e.target.value

         setInp(values=>({...values,[name]:value}))
     }
     function handleFile(e){
         setImage(e.target.files)
         console.log(image)
     }
     
    async function handleSave(e){
          e.preventDefault()

          let api='http://localhost:5050/user/insert'

        const formData=new FormData()

        for(const e in inp){
            formData.append(e,inp[e])
        }

        for(let i=0;i<=image.length;i++){
              formData.append('image',image[i])
        }
       
        await axios.post(api,formData).then((res)=>{
             console.log(res.data)
        })
        
    }

  return (
    <div>
     <form class="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md" >
  <h2 class="text-2xl font-semibold text-gray-800 mb-6">Insert New Product</h2>

  <div class="mb-4">
    <label for="name" class="block text-gray-700 font-medium mb-2">Product Name</label>
    <input type="text" id="name" name="name" required
     onChange={handleInp}
           class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
  </div>


  <div class="mb-4">
    <label for="description" class="block text-gray-700 font-medium mb-2">Description</label>
    <textarea id="description" name="description" rows="4" required
               onChange={handleInp}
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
  </div>


  <div class="mb-4">
    <label for="price" class="block text-gray-700 font-medium mb-2">Price ($)</label>
    <input type="number" id="price" name="price" step="0.01" required
     onChange={handleInp}
           class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
  </div>


  <div class="mb-4">
    <label for="stock" class="block text-gray-700 font-medium mb-2">Stock Quantity</label>
    <input type="number" id="stock" name="stock" required
     onChange={handleInp}
           class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
  </div>

  
  <div class="mb-6">
    <label for="image" class="block text-gray-700 font-medium mb-2">Product Image</label>
    <input type="file" id="image" name="image" multiple
     onChange={handleFile}
           class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
  </div>


  <div class="text-right">
    <button type="submit"
      onClick={handleSave}
            class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
      Add Product
    </button>
  </div>
</form>


    </div>
  )
}

export default Insert
