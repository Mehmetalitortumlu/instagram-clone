import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { usePost } from '../context/PostContext';

function Post() {
    const { posts } = usePost();
    const [heart, setHeart] = useState(false);
    const [likes, setLikes] = useState(254);
    const [num, setNum] = useState(10);
    const [comment, setComment] = useState({
        text: ""
    });
    const [commentValue, setCommentValue] = useState([]);

    const onChange = (e) => {
        setComment({ ...comment, [e.target.name]: e.target.value })
    };
    const commentAdd = () => {
        if (comment.text !== "") {
            setCommentValue([...commentValue, { id: uuidv4(), userName: `kullanıcı-${num} `, text: comment.text }])
            setComment({ text: "" })
        } else {
            alert("bu alan boş bırakılamaz")
        }
        setNum((pre) => pre + 1)
    };

    const removeCommet = (id) => {
        // const cloned_comment=[...commentValue]
        // const itemsIndex=cloned_comment.findIndex(com => com.id ===id )
        // cloned_comment.splice(itemsIndex,1)
        // setCommentValue(cloned_comment)
        const filtered = commentValue.filter(com => com.id !== id)
        setCommentValue(filtered)
    };

    return <div className="row justify-content-center py-5"> {/* row start */}
        <div className="col-12 col-xxl-10">  {/* col start */}
            {posts.map((post, i) => (
                <ol key={i} className='list-group mb-5'>
                    <li className='list-group-item border-0 '>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='ms-lg-4 me-auto '>
                                <img className='img-fluid rounded-circle border border-warning border-3' width={"45"} height={"45"} src="../img/resim.jpg" alt="resim bulunamadı" />
                                <small className='fw-bold px-2'>m.alitrtml  </small>
                                <small className='text-muted '>. 11s</small>
                            </div>
                            <span>
                                <i className="bi bi-three-dots text-secondary btn btn-outline-light border-0"></i>
                            </span>
                        </div>
                        {/* ikinci row start */}
                        <div className="row justify-content-center"> {/* ikinci row start */}
                            <div className="col-12 col-md-10"> {/* ikinci col start*/}
                                <div className='d-flex justify-content-center pt-3'>
                                    <img className='rounded mb-1 img-fluid'  src={`${post.src}`} alt="resim bulunamdı" />
                                </div>

                                <div className='d-flex justify-content-center align-items-center'>
                                    <div className='me-auto'>
                                        {heart === false && <i onClick={() => { setHeart(true); setLikes(likes + 1) }} className="bi bi-heart fs-4 "></i>}
                                        {heart === true && <i onClick={() => { setHeart(false); setLikes(likes - 1) }} className="bi bi-heart-fill
                                        text-danger fs-4"></i>}
                                        <i className="bi bi-chat px-3 fs-4"></i>
                                        <i className="bi bi-arrow-up-right-circle fs-4"></i>
                                    </div>
                                    <span>
                                        <i className="bi bi-bookmark fs-4"></i>
                                    </span>
                                </div>

                                <div>
                                    <strong>{likes} beğenme</strong>
                                    {/* yorum alanı */}
                                    <div>
                                        <p>m.alitrtml  <small>keşfetten gelenler takip etmeyi unutmasın <span className='text-muted'>devamı... </span> </small> </p>
                                        <p className='text-muted lh-1 '>
                                            79 yorumun tümünü gör.
                                        </p>

                                        <div className='border-bottom pb-1'>
                                            <div className='d-flex'>
                                                <input value={comment.text} name="text" onChange={onChange} className='border-0 input-group ' id='comment-input' type="text" placeholder='Yorum ekle..' />
                                                <button onClick={commentAdd} className='btn-sm border border-1 btn-outline-primary'>Paylaş</button>
                                            </div>
                                            <ul className='list-unstyled mt-2'>
                                                {
                                                    commentValue.map((comm) => (
                                                        <li key={comm.id} className='d-flex align-items-center text-break'>
                                                            <strong className='pe-2'> {comm.userName} </strong>
                                                            <span className='me-auto'>{comm.text}</span>
                                                            <button className='btn btn-white' onClick={() => removeCommet(comm.id)} ><i className="bi bi-x-lg"></i></button>
                                                        </li>

                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    {/* yorum alanı bitiş */}
                                </div>
                            </div> {/* ikinci col end*/}
                        </div> {/* ikinci row end */}
                    </li>
                </ol>
            ))}
        </div> {/*  col end*/}
    </div> /* row end*/ 
}

export default Post
