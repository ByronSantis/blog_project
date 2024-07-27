import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { createPost, deletePost, updatePost, getPost } from '../../api/post.api.js';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"




export function PostForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const navigate = useNavigate();
  const params = useParams()
  //console.log(params)

  const onSubmit = handleSubmit(async (data) => {

    if (params.id) {
      updatePost(params.id, data)
      //console.log(data)
      toast.success('¡Post actualizado con exito!')
    } else {
      await createPost(data);
      toast.success('¡Post creado con exito!')
    }
    navigate("/posts")
  });

  useEffect(() => {
    async function loadPost() {
      if (params.id) {
        const res = await getPost(params.id);
        setValue('title', res.data.title)
        setValue('content', res.data.content)
        setValue('author', res.data.author)
        //console.log(res)
      }
    }
    loadPost()
  }, [])

  return (
    <div className='max-w-xl mx-auto py-10'>
      <form onSubmit={onSubmit}>
      <span className='font-semibold'>Titulo:</span>
        <Input type="text" placeholder="Ingrese titulo"
          {...register("title", { required: true })}
          className='bg-white text-black p-5 rounded-xl block w-full mb-3'
        />
        {errors.title && <span className='text-red-600'>* Este campo es requerido *</span>}
        <span className='font-semibold'>Contenido:</span>
        <Textarea rows="3" id="" placeholder='Ingresa una descripción'
          {...register("content", { required: true })}
          className='bg-white text-black p-3 rounded-xl block w-full mb-3'
        ></Textarea>

        {errors.content && <span className='text-red-600'> * Este campo es requerido *</span>}

        <span className='font-semibold'>Autor:</span>
        <Input type="text" placeholder="Autor del post"
          {...register("author", { required: true })}
          className='bg-white text-black p-3 rounded-xl block w-full mb-3'
        />
        {errors.content && <span className='text-red-600'>* Este campo es requerido *</span>}

        <Button className='font-semibold bg-sky-700 p-3 rounded-xl block w-full mt-3 hover:bg-sky-700'>Publicar</Button>
      </form>
      {
        params.id && (
          <Button 
          
          className='font-semibold bg-red-700 p-3 rounded-xl block w-full mt-3 hover:bg-red-700 hover:cursor-pointer' onClick={async () => {
            const acpet = window.confirm("¿Estas seguro que quieres eliminar este post?")
            if (acpet) {
              await deletePost(params.id);
              toast.success('¡Post eliminado con exito!'),
              navigate("/posts")
            }
          }}>
            Borrar Post
          </Button>
        )
      }
    </div>
  )
}