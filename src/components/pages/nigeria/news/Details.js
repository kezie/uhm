import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../../redux/reducers/postReducer'
import { getCategories } from '../../../redux/reducers/categoryReducer'
import Sidebar from './partials/Sidebar'

const Details = () => {
  const {slug} = useParams()
  const dispatch = useDispatch();
  const { postItems, isLoading } = useSelector((state)=> state.posts)
  const { categoryItems } = useSelector((state)=> state.categories)

  useEffect(()=>{
    dispatch(getPosts());
  }, [])

  useEffect(()=>{
    dispatch(getCategories());
  }, [])

  const postItem = postItems.filter(post => post.slug == slug);
  const post = postItem[0];
  const latestPosts = postItems.slice(0, 3);
    // if(!post) {
    //     return <div>Post not found.</div>;
    //   }

  return (
    <>
    <section className="blog-details-page pt-130 pb-90">
        <div className="container">
          <div className="row">
            <div style={{maxWidth:'70%', margin:'auto'}}>
              {/*===  Blog Details Wrapper  ===*/}
              <div className="blog-details-wrapper mb-40">
                {/*===  Blog Post  ===*/}
                <div className="blog-post mb-60 wow fadeInUp">
                  <div className="post-meta">
                    <ul>
                        {post.categories.map((categoryId) => (
                          <li key={categoryId}> 
                            {categoryItems.find(cat => cat.id === categoryId)?.name} 
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className="main-post">
                    <div className="entry-content">
                      <h3 className="title">{post.title.rendered}</h3>
                      <div dangerouslySetInnerHTML={{ __html: post.content.rendered}} />
                    </div>
                  </div>
                 
                </div>
                
                {/*===  Comments Form  ===*/}
                <div
                  className="comments-respond mb-35"
                  id="comment-respond wow fadeInUp"
                >
                  <h4 className="comments-heading">Write a comment</h4>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="comment-form"
                  >
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Name *"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email *"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Website *"
                            name="phone"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            name="message"
                            className="form_control"
                            placeholder="Comments"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="main-btn btn-red">
                            Send Us Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <div className="">
              ===  Sidebar widget area  ===
              <div className="sidebar-widget-area">
                <Sidebar categoryItems={categoryItems} latestPosts={latestPosts}/>               
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Details