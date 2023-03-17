import React from 'react'
import '../css/style.css'
function Post() {
    return (
        <>
            <div class="card">
                <div class="top">
                    <div class="userDeatils">
                        <div class="profileImg">
                            <img src="https://picsum.photos/200" alt="user" class="cover" />
                        </div>
                        <h3>xyz zyx<br /><span>Web Designer</span></h3>
                    </div>
                    <div class="dot">
                        <i class="fa-solid fa-horizontal-rule"></i>
                    </div>
                </div>
                <div class="imgBg">
                    <img src="https://picsum.photos/200" alt="bg" class="cover" />
                </div>
                <div class="btns">
                    <div class="left">
                        <i class="fa-regular fa-heart" style={{ paddingRight: 10 }}></i>
                        <i class="fa-regular fa-comment"></i>

                    </div>
                    <div class="right">
                        {/* <img src="bookmark.png" alt="bookmark" /> */}
                    </div>
                </div>
                <h4 class="likes">5,489 likes</h4>
                <h4 class="message">
                    <b>xyz xyz</b>

                </h4>

                <div class="addComments">
                    <div class="userImg">
                        <img src="https://picsum.photos/200" alt="user" class="cover" />
                    </div>
                    <input type="text" class="text" placeholder="Add a comment..." />
                </div>
                <h5 class="postTime">5 hours ago</h5>
            </div>
        </>
    )
}

export default Post