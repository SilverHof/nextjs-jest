import { Character } from '@/entities/viewer'
import { createPost } from '@/shared/helpers'
import Link from 'next/link'
import { FC, FormEvent, useState } from 'react'
import { QueryClient, useMutation } from 'react-query'

export const PostsPage: FC<any> = ({ posts }) => {
  const [form, setForm] = useState({
    userId: 0,
    id: 0,
    title: '',
    body: '',
  })

  const queryClient = new QueryClient()

  const { mutate } = useMutation('create post', (form: any) => createPost(form), {
    onSuccess() {
      setForm({
        userId: 0,
        id: 0,
        title: '',
        body: '',
      })
      alert('Post created')
      queryClient.invalidateQueries({ queryKey: 'posts' })
    },
    onError() {
      alert("Error - post didn't created")
    },
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    mutate(form)
  }

  return (
    <section className='container flex flex-col gap-6 min-w-[1440px] mt-[40px] pb-[50px]'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-black'>Create post</h2>
        <form className='flex justify-between' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='userId'
            className='px-2 py-2'
            value={form.userId}
            onChange={event =>
              setForm({
                ...form,
                userId: Number(event.target.value),
              })
            }
          />
          <input
            type='text'
            placeholder='id'
            className='px-2 py-2'
            value={form.id}
            onChange={event =>
              setForm({
                ...form,
                id: Number(event.target.value),
              })
            }
          />
          <input
            type='text'
            placeholder='title'
            className='px-2 py-2'
            value={form.title}
            onChange={event =>
              setForm({
                ...form,
                title: event.target.value,
              })
            }
          />
          <input
            type='text'
            placeholder='body'
            className='px-2 py-2'
            value={form.body}
            onChange={event =>
              setForm({
                ...form,
                body: event.target.value,
              })
            }
          />
          <button className='px-4 py-2 bg-black text-white'>Submit</button>
        </form>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-black'>Delete post</h2>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-black'>Posts</h2>
        {posts !== null &&
          posts.map((post: any) => {
            return (
              <Link href={`/posts/${post.id}`} key={post.id}>
                <div className='flex flex-col gap-2 p-4 rounded-md bg-black cursor-pointer'>
                  <div className='flex flex-col gap-2 rounded-lg p-4 bg-black items-start'>
                    <h2 className='text-green'>{post.title}</h2>
                    <h2 className='text-white'>{post.body}</h2>
                  </div>
                </div>
              </Link>
            )
          })}
      </div>
    </section>
  )
}
