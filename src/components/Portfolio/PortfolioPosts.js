import React,{useState, useEffect} from 'react'
import ToText from '../../utils/ToText'
export default function PortfolioPosts() {
  const medium = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@haaris_iqubal"
  const [profile,setProfile] = useState({
    name: 'Haaris Iqubal',
    profileImage: '',
    profileURL: ''
  })
  const [blog,setBlog] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(medium)
    .then(res => res.json())
    .then((data) => {
      const image = data.feed.image
      const link = data.feed.link
      const blogs = data.items
      const posts = blogs.filter(post => post.categories.length > 0)
      // console.log(image);
      // console.log(link);
      setProfile(p => ({...p, profileImage: image, profileURL: link}))
      setBlog(posts)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err);
    })
  })
  return (
    <div>
      <div className='section-heading pt-[50px]'>
        &lt;
        Recent Posts
        &gt;
        </div>
      {loading ? 
      <div className='text-6xl text-white'>
        <p>Loading...</p>
      </div> : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {blog.map((post,index) => (
            <div
            class="mx-3 mt-6 flex flex-col rounded-lg contact-card text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          
            <div class="p-6">
            <p className='body-color text-sm'>{post.pubDate}</p>

              <h5 class="mb-2 text-xl code-font text-white leading-tight">{post.title}</h5>
              <p class="mb-4 body-color text-base">
              {ToText(post.description.substring(0,500))} ...
              </p>
              
            </div>
            <div class="mt-auto mx-2">
            {post.categories.map((category) => (
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                  #{category}  
                </span>
              ))}
            </div>
            <div
              class="mt-auto border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
              {post.link.length > 0 && (
              <a href={post.link} className='button-style'>Read More</a>
            )}
            </div>
          </div>
          ))}
        </div>
      )}
    </div>
  )
}
