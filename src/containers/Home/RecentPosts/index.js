import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

//tampilan home
const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={""} alt=""/>
            </div>

            <div style={{textAlign: 'center'}}>
                <h2>This blog is all bout meme</h2>
                <span>posted on July 21, 2016 by Akeno Senpai</span>
            </div>

            


        </Card>
    </div>
   )

 }

export default RecentPosts