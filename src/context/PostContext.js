import { createContext, useContext, useState } from "react";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([
        {
            src: "https://img-s1.onedio.com/id-61c5d4a45b9585b421f47f86/rev-0/w-620/f-jpg/s-b9d895a8eeecda8af5386b08f1b5ef582925fbc1.jpg",
        },
    ])
    console.log(posts)
    const values = {
        posts,
        setPosts
    }
    return <PostContext.Provider value={values}>
        {children}
    </PostContext.Provider>
};


export const usePost = () => useContext(PostContext);