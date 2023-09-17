import React from 'react'
import Recent from './Recent'
import Categories from './Categories'

const Sidebar = ({categoryItems,latestPosts }) => {
  return (
    <>
        {/*=== Category Widget ===*/}
        <div className="sidebar-widget category-widget mb-40 wow fadeInUp">
            <h4 className="widget-title">
            Categories
            <span className="line" />
            </h4>
            {/* Posts Categories */}
            <Categories categoryItems ={categoryItems}/>
        </div>
        {/*=== Recent Post Widget ===*/}
        <div className="sidebar-widget recent-post-widget mb-40 wow fadeInUp">
            <h4 className="widget-title">
            Recent News
            <span className="line" />
            </h4>
            {/* Recent news */}
            <Recent latestPosts={latestPosts}/>
        </div>
    </>
  )
}

export default Sidebar