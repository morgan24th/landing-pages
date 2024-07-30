import { writeFile } from "fs/promises"
import { promises as fs } from 'fs';
import { join, dirname } from 'path';

const ServerPage = () => {
    const uploadImage = async (formData: FormData) =>{
        "use server"
        try {
          const file = formData.get("image") as File;
          
          if(file.type !== "image/jpeg"){
            alert("Invalid file type. Only JPEG is supported.");
            return
          }

          if(file.size > 1 * 1024 * 1024){
            alert("File size is too large. Maximum allowed size is 1MB.");
            return
          }

          const arrayBuffer = await file.arrayBuffer();
          const buffer = new Uint8Array(arrayBuffer);
      
          // Specify the base directory for uploads
          const uploadDir = join('public', 'images', 'tmp');
          const filePath = join(uploadDir, file.name);
      
          // Ensure the directory exists
          await fs.mkdir(dirname(filePath), { recursive: true });
      
          // Write the file
          await writeFile(filePath, buffer);
      
          alert(`File uploaded successfully to`);
        } catch (error) {
          alert('Error uploading file:');
        }
    }

  return (
    <div className='p-10'>
      <h1>Test Image upload</h1>

      <form action={uploadImage} className='flex items-center space-x-3'>
        <input type="file" name="image" placeholder='Choose an image'/>
        <button className='bg-slate-950 py-3 px-6' type="submit">upload image</button>
      </form>
    </div>
  )
}

export default ServerPage
