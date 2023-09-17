import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import PageBanner from '../../../partials/PageBanner'
import { getPosts } from '../../../redux/reducers/postReducer';
import { getCategories } from '../../../redux/reducers/categoryReducer';
import Sidebar from './partials/Sidebar';
import PaginationComponent from '../../../partials/pagination/PaginationComponent';
import { Spinner } from 'react-bootstrap';
import Search from '../../../partials/search/Search';

const Blog = () => {
  
  const dispatch = useDispatch();
  const [totalPosts, setTotalPosts] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const ITEMS_PER_PAGE = 4

  const { postItems, isLoading } = useSelector((state)=> state.posts)
  const { categoryItems } = useSelector((state)=> state.categories)

  useEffect(()=>{
    dispatch(getPosts());
  }, [])

  useEffect(()=>{
    dispatch(getCategories());
  }, [])
  
  const postsArray = useMemo(()=> {
    let gottenPosts = postItems
    setTotalPosts(gottenPosts.length);

    if(search){
        gottenPosts = gottenPosts.filter(
          postItem => postItem.title.rendered.toLowerCase().includes(search.toLowerCase())
        )
    }

    return gottenPosts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );


},[postItems, currentPage, search]);
  
  if (isLoading) {
    return (
      <>
        <PageBanner pageName={"News/Events"} PageImage={'story.jpg'}/>{" "}
        <div className='my-5 text-center'>
          <Spinner animation='grow' role='status'>
            <span className='visually-hidden'></span>
          </Spinner>
        </div>
      </>
      )
  }
  
    
  const latestPosts = postItems.slice(0, 3);
   

  return (
    <>
    <PageBanner pageName={"News/Events"} PageImage={'story.jpg'}/>{" "}
    <section className="blog-section pt-130 pb-90">
        <div className="container">
          <div className="row">
            <div className='col-md-6 mb-4'>
                <PaginationComponent
                    total = {totalPosts}
                    itemsPerPage = {ITEMS_PER_PAGE}
                    currentPage = {currentPage}
                    onPageChange = {page => setCurrentPage(page)}
                />
            </div>
            <div className="col-xl-8 order-xl-1 order-2">
              {/*=== Blog List Wrapper ===*/}
              <div className="blog-list-wrpper">
                {postsArray && postsArray.map((post)=>{
                    const limitedWords = post.content.rendered.slice(0, 100);
                    const inputDateString = post.date;
                    const date = new Date(inputDateString);
              
                    const months = [
                      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                    ];
              
                    const day = date.getDate().toString().padStart(2, '0');
                    const month = months[date.getMonth()];

                    return(
                        <div key={post.id} className="blog-post-item-two d-flex mb-40 wow fadeInUp">
                            <div className="post-thumbnail">
                              {post._embedded && post._embedded['wp:featuredmedia'] && (
                                  <img
                                    src={post._embedded['wp:featuredmedia'][0].source_url}
                                    alt={post._embedded['wp:featuredmedia'][0].alt_text}
                                  />
                                )}
                                <span className="post-date">
                                    <a href="#">
                                        {day}<span>{month}</span>
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
                                <Link to={`/${post.slug}`}>
                                    <span>{post.title.rendered}</span>
                                </Link>
                            </h5>
                                <div dangerouslySetInnerHTML={{ __html: limitedWords + '...' }} />
                            <Link to={`/${post.slug}`}>
                                <span className="btn-link">Read More</span>
                            </Link>
                        </div>
                        {/* Pagination */}
                      </div>
                    )
                  })}     
              </div>
            </div>
                  
            <div className="col-xl-4 order-1 order-xl-2">
              {/*=== Sidebar Widget Area ===*/}
              <div className="sidebar-widget-area">
                {/*=== Search Widget ===*/}
                <div className="sidebar-widget search-widget mb-40 border-0 wow fadeInUp">
                    <h4 className="widget-title">
                    Search Here <span className="line" />
                    </h4>
                    <form onSubmit={(e) => e.preventDefault()} className="search-form">
                    <div className="form_group">
                        <Search 
                          onSearch = {(value)=>{
                            setSearch(value);
                            setCurrentPage(1);
                          }}
                          placeholder={'Search here...'}
                          className={'form_control'}
                        />
                        <button className="search-btn">
                        <i className="far fa-search" />
                        </button>
                    </div>
                    </form>
                </div>
                {/* Sidebar */}
                <Sidebar latestPosts = {latestPosts} categoryItems={categoryItems}/>
              </div>
            </div>
            
          </div>
          <div className='col-md-6 mb-4'>
              <PaginationComponent
                  total = {totalPosts}
                  itemsPerPage = {ITEMS_PER_PAGE}
                  currentPage = {currentPage}
                  onPageChange = {page => setCurrentPage(page)}
              />
            </div>
        </div>
      </section>
      </>
  )
}

export default Blog