import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/reducers/postReducer';
import { getCategories } from '../../redux/reducers/categoryReducer';

const Blog = () => {
  const dispatch = useDispatch();

  const { postItems, isLoading } = useSelector((state)=> state.posts)
  const { categoryItems } = useSelector((state)=> state.categories)

  useEffect(()=>{
    dispatch(getPosts());
  }, [])

  useEffect(()=>{
    dispatch(getCategories());
  }, [])

  const limitedPosts = postItems ? postItems.slice(0, 3) : [];
  return (
    <section className="blog-section service-section pt-100 z-1 p-r bg_cover pb-100 pt-70 p-r z-1"
      style={{ backgroundImage: "url(assets/images/bg/blog.jpg)" }}
    >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <h2>Catch Up With Exciting News &amp; Blog Posts</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {limitedPosts.map((post)=>{
              const inputDateString = post.date;
              const date = new Date(inputDateString);
              
              const months = [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
              ];
              
              const day = date.getDate().toString().padStart(2, '0');
              const month = months[date.getMonth()];
              const year = date.getFullYear();
              
              const formattedDate = `${day}/${month}/${year}`;
              return (
                <div className="col-xl-4 col-md-6 col-sm-12" key={post.id}>
                  {/*=== Blog Post Item ===*/}
                  <div
                    className="blog-post-item-one mb-40 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="post-thumbnail">
                      {post._embedded && post._embedded['wp:featuredmedia'] && (
                        <img
                          src={post._embedded['wp:featuredmedia'][0].source_url}
                          alt={post._embedded['wp:featuredmedia'][0].alt_text}
                        />
                       )}
                      <span className="post-date">
                        <a href="#">
                          {formattedDate}
                        </a>
                      </span>
                    </div>
                    <div className="entry-content">
                      <div className="post-meta">
                        <ul>
                          {post.categories.map((categoryId) => (
                            <li key={categoryId}> 
                              {categoryItems.find(cat => cat.id === categoryId)?.name} 
                            </li>
                          ))}
                        </ul>
                      </div>
                      <h5 className="title">
                        <Link to={`/posts/${post.slug}`}>
                          <span>{post.title.rendered}</span>
                        </Link>
                      </h5>
                      {/* <div dangerouslySetInnerHTML={{ __html: limitedWords + '...' }} /> */}
                      <Link to={`/posts/${post.slug}`}>
                        <span className="btn-link">Read More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )              
            })}
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/*=== Blog Button ===*/}
              <div
                className="blog-button text-center wow fadeInUp"
                data-wow-delay=".5s"
              >
                <Link to="/news">
                  <span className="main-btn btn-outline">View More News</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}


export default Blog