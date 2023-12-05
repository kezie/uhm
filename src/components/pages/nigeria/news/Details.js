import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';

const Details = () => {
  const { slug } = useParams();
  const { postItems } = useSelector((state) => state.posts);
  const { categoryItems } = useSelector((state) => state.categories);

  const postIndex = postItems.findIndex((p) => p.slug === slug);
  const post = postIndex >= 0 ? postItems[postIndex] : null;

  const nextPost = postIndex > 0 ? postItems[postIndex - 1] : null;
  const prevPost =
    postIndex < postItems.length - 1 ? postItems[postIndex + 1] : null;

  return (
    <>
      <section className="blog-details-page pt-130 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <div className="blog-details-wrapper mb-40">
                {post ? (
                  <div className="blog-post mb-60 wow fadeInUp">
                    <div className="post-meta">
                      <ul>
                        {post.categories && post.categories.length > 0 ? (
                          post.categories.map((categoryId) => (
                            <li key={categoryId}>
                              {categoryItems.find((cat) => cat.id === categoryId)
                                ? categoryItems.find((cat) => cat.id === categoryId)
                                    .name
                                : 'Category Not Found'}
                            </li>
                          ))
                        ) : (
                          <li>No Categories</li>
                        )}
                      </ul>
                    </div>
                    <div className="main-post">
                      <div className="entry-content">
                        <h3 className="title">{post.title.rendered}</h3>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: post.content.rendered,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className='my-5 text-center'>
                    <Spinner animation='grow' role='status'>
                      <span className='visually-hidden'></span>
                    </Spinner>
                  </div>
                )}
                <div className="post-navigation">
                  {prevPost && (
                    <Link
                      to={`/posts/${prevPost.slug}`}
                      className="btn me-4"
                      style={{ backgroundColor: '#8eb850', color: 'white' }}
                    >
                      &lt; Previous Post
                    </Link>
                  )}
                  {nextPost && (
                    <Link
                      to={`/posts/${nextPost.slug}`}
                      className="btn"
                      style={{
                        backgroundColor: '#8eb850',
                        color: 'white',
                        float: 'right',
                      }}
                    >
                      Next Post &gt;
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
