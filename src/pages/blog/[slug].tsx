import type { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '~/components/NavBar';
import { blogPostsData } from '~/data/blog-posts';
import { DrawingsWindTurbines } from '~/components/drawings/wind-turbines';

interface BlogPostProps {
  blog: {
    title: string;
    full_text: string;
    date: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ blog }) => {
  const router = useRouter();

  const [theme, setTheme] = useState('light'); // Default theme or fetch from localStorage

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // This function is passed to Navigation and updates the parent's state
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <main className={`${theme === 'dark' ? ' bg-gray-900' : 'bg-custom-beige'} p-4`}>
        <div className="container px-4 sm:px-8 w-full lg:w-1/2 mx-auto">  
        
        <Navigation activeSection='blog' onThemeChange={handleThemeChange} />

          <div  className={` p-2 mt-12 `}>
              {/* Go Back Button */}
              <Link href="/blog"> 
                <div className={`${theme === 'dark' ? ' text-teal-500' : 'text-custom-mint-green'} text-lg hover:underline mb-4 inline-bloc `}>
                  &larr; Go back to all blog posts
                </div>
              </Link>

              {/* Project Details */}
              <div>
                  <div className="flex justify-center items-end mb-6">
                      <span className={`text-2xl font-bold tracking-tight ${theme === 'dark' ? ' text-gray-200' : 'text-gray-800'}`}>
                          {blog.title}
                      </span>
                  </div>

                  {/* Full Text */}
                  <div className="mt-4 text-gray-800">
                      <div className={` prose text-lg w-full ${theme === 'dark' ? ' text-gray-200' : 'text-gray-800'}`} dangerouslySetInnerHTML={{ __html: blog.full_text }}>
                        {/* HTML content will be rendered here */}
                      </div>
                  </div>

                  <div className="hidden lg:block">
                    <DrawingsWindTurbines animationDuration={0.5}></DrawingsWindTurbines>
                </div>
              </div>
          </div>
      </div>
  </main>
    
  );
};


export const getStaticPaths: GetStaticPaths = () => {
const paths = blogPostsData.map((blog) => ({
    params: { slug: slugify(blog.title) },
}));

return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = (context) => {
const slug = context.params?.slug;
const blog = blogPostsData.find((blog) => slugify(blog.title) === slug);

if (!blog) {
    return { notFound: true };
}

return { props: { blog } };
};  

export default BlogPost;

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}
