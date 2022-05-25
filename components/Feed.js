
import { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import { useSession } from "next-auth/react";
import Input from "./Input";
import Post from "./Post";
import MyPopover from "./Pop";


function Feed() {

const [posts,setPosts] = useState([]);

// MESSY
  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     query(collection(db, "posts"), orderBy("timestamp", "desc")),
  //     (snapshot) => {
  //       setPosts(snapshot.docs);
  //     }
  //   );

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [db]);
 
  // CLEAN
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]  
  );
console.log(posts);
    return (
        <div className="flex-grow border-l border-r border-[#dddddd] max-w-4xl sm:ml-[73px] xl:ml-[200px]">
          <div className="text-[ #363636] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-white border-b border-white">
            <h2 className="text-lg sm:text-xl font-bold">Home</h2>
            <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
           
            </div>
          </div>

          <Input />
      <div className="pb-72">
        {posts.map((post) => (
          <Post key={post.id} id={post.id} post={post.data()} />
        ))}
      </div>
    </div>
  );
}

export default Feed;