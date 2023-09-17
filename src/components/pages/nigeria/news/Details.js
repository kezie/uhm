import React, {useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import PageBanner from '../../../partials/PageBanner'
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
    <PageBanner pageName={"News/Events"} PageImage={'story.jpg'}/>{" "}
    <section className="blog-details-page pt-130 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
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
                      {/* <figure className="block-image">
                        <img
                          src="assets/images/blog/single-blog-1.jpg"
                          alt=""
                        />
                      </figure>
                      <p>
                        Nemo enim ipsam voluptatem quia volupt pernatur aut odit
                        aut fugit sed quia consequuntur magni dolores eos qui
                        ratione volumessequ nesciunt. Neque porro quisquam est
                        qui dolorem ipsum quia dolor sit amet coctetur adipisci
                        velit sed
                      </p>
                      <div className="quote-admin text-center">
                        <div className="quote-inner-content">
                          <div className="quote-admin-content">
                            <h3>
                              Which Podcasts Should Web Designer And Developers
                              Be Listening To Ultimate Digital Clean Checklist
                              Prepare
                            </h3>
                            <h5>David H. Molina</h5>
                          </div>
                        </div>
                      </div>
                      <p>
                        Unde omnis iste natus error voluptatem accusantium
                        doloreque laudantium totam rem aperiam eaque quae abillo
                        inventore veritatis quasi architecto beatae vitae dicta
                        sunt explicabo. Nemo enim ipsam voluptatem quia volupt
                        pernatur aut odit aut fugit sed quia consequuntur magni
                        dolores eos qui ratione
                      </p> */}
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
            <div className="col-xl-4">
              {/*===  Sidebar widget area  ===*/}
              <div className="sidebar-widget-area">
                {/*===  Search Widget  ===*/}
                <div className="sidebar-widget search-widget mb-40 border-0 wow fadeInUp">
                  <h4 className="widget-title">
                    Search Here <span className="line" />
                  </h4>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="search-form"
                  >
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Search here......"
                        name="email"
                        required=""
                      />
                      <button className="search-btn">
                        <i className="far fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
                <Sidebar categoryItems={categoryItems} latestPosts={latestPosts}/>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Details