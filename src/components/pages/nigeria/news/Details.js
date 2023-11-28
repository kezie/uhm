import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Details = () => {
  const {slug} = useParams()
  const { postItems, isLoading } = useSelector((state)=> state.posts)
  const { categoryItems } = useSelector((state)=> state.categories)

  const postIndex = postItems.findIndex((p) => p.slug === slug);
  const post = postItems[postIndex];

  const nextPost = postIndex > 0 ? postItems[postIndex - 1] : null;
  const prevPost = postIndex < postItems.length - 1 ? postItems[postIndex + 1] : null;


  return (
    <>
    <section className="blog-details-page pt-130 pb-90">
        <div className="container">
          <div className="row">
            <div className='col-lg-1'></div>
            <div className='col-lg-10'>
              {/*===  Blog Details Wrapper  ===*/}
              <div className="blog-details-wrapper mb-40">
                {/*===  Blog Post  ===*/}
                <div className="blog-post mb-60 wow fadeInUp">
                  <div className="post-meta">
                    <ul>
                        {post.categories ? (post.categories.map((categoryId) => (
                          <li key={categoryId}> 
                            {categoryItems.find(cat => cat.id === categoryId)?.name} 
                          </li>
                        ))): ''}
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
                            Comment
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="post-navigation">
                {prevPost && (
                  <Link to={`/${prevPost.slug}`} className="btn me-4" style={{backgroundColor:'#8eb850', color:'white'}}>
                    &lt; Previous Post
                  </Link>
                )}
                {nextPost && (
                  <Link to={`/${nextPost.slug}`} className="btn" style={{backgroundColor:'#8eb850', color:'white', float:'right'}}>
                    Next Post &gt;
                  </Link>
                )}
            </div>
            </div>
            <div className='col-lg-1'></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Details