import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';

import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/
//Bar yang berada di samping
const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);
    
    
    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);



  return(
      <div className="sidebarContainer" style={{
          width: props.width
      }}>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>About Me</span>
                </div>
                <div className="profileImageContainer">
                    <img src="https://i.4pcdn.org/pol/1518674044821.jpg" alt="" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">My name is **Censored** I am a Meme Lover</p>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Have Fun In This blog</span>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>

                <div className="recentPosts">

                    {
                        posts.map(post => {
                            return (
                                <NavLink key={post.id} to={`/post/${post.slug}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                                
                            );
                        })
                    }
                </div>

            </Card>
      </div>
    
   )

 }

export default Sidebar