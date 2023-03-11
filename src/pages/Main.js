import Post from './Post';
import Stories from './Stories';

function Main() {

    return (
        <div className="col-12 col-md-10 col-lg-7 col-xl-6 p-3 p-lg-5 "> {/* col-start */}
            {/* hikayeler start*/}
            <Stories />
            {/* hikayeler end*/}
            {/* gönderiler start*/}
            <Post />
            {/* gönderiler end*/}

        </div> /* col-end */
    )
}

export default Main
