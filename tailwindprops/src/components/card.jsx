import React from 'react'

function Card({username='aishu',post='not assigned yet'}) {
  // console.log(props);
  return (
    <figure  className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img  className="w-24 h-24 rounded-full mx-auto" src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg" alt="" width="384" height="512"/>
  <div  className="pt-6 space-y-4">
    <blockquote>
      <p  className="text-lg font-medium">
        Tailwind CSS is the only framework that I've seen scale
        on large teams. Its easy to customize, adapts to any design,
        and the build size is tiny
      </p>
    </blockquote>
    <figcaption  className="font-medium">
      <div  className="text-sky-500 dark:text-sky-400">
      {username}
      </div>
      <div  className="text-slate-700 dark:text-slate-500">
        {post}
      </div>
    </figcaption>
  </div>
</figure>
  )
}

export default Card