import {db} from "../config/firebase";
import {getDocs, collection, addDoc} from 'firebase/firestore';
import { useEffect, useState,} from 'react';
import { Timestamp } from 'firebase/firestore';

function Posts() {
const [postsList, setPostsList] = useState([])

//new
const [newPostTitle, setIsNewPostTitle] = useState("")
const [newPostDate, setIsNnewPostDate] = useState(0)
const [newPostAuthor, setIsNewPostAuthor] = useState("")
const [newPostLocation, setIsNewPostLocation] = useState("")
const [newPostDescription, setIsnewPostDescription] = useState("")




  const postsCollectionRef = collection(db, "Posts") //saving the variable that indicates which collection we want acsess
 
  useEffect(() => { // you cant make a use effect async, and we needed async in order to make it work
      async function getPosts()  {
      // reading the data
      // Set the posts
      try {
        const data = await getDocs(postsCollectionRef) // gets all the collections from firestore
        const filteredData = data.docs.map((doc)=>({...doc.data(),id: doc.id}));
        setPostsList(filteredData);
      } catch(err) {
        alert(err)
        }
      }
      getPosts();
    }, []);

async function onSubmitPost() {
    try {
    await addDoc(postsCollectionRef, {
        Title: newPostTitle,
        Date: Timestamp.fromDate(new Date(newPostDate)),
        Author: newPostAuthor,
        location: newPostLocation,
        Description: newPostDescription
    })}
    catch(err) {
        alert(err)
    }

}

    return(
        <div>
        <input placeholder="Title..." onChange={(e) => setIsNewPostTitle(e.target.value)}></input>
        <input placeholder="Date..." type="date" onChange={(e) => setIsNnewPostDate(e.target.value)}></input>
        <input placeholder="Author..."  onChange={(e) => setIsNewPostAuthor(e.target.value)}></input>
        <input placeholder="Location..." onChange={(e) => setIsNewPostLocation(e.target.value)}></input>
        <input placeholder="Description..." onChange={(e) => setIsnewPostDescription(e.target.value)}></input>
       
        {/* <input placeholder="Image..."></input> */}
        <button onClick={onSubmitPost}>Button</button>
    <div>
    {postsList.map((posts)=> (
        <div>
          <h1> Title: {posts.Title}</h1>
          <p>Date: {posts.Date?.toDate().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
})}</p>
          <p>By: {posts.Author}</p>
          <p> Location: {posts.location}</p>
          <p>Description: {posts.Description}</p>
          {/* <img src={posts.ImageURL}></img> */}
          </div>
      ))}
    </div>
        </div>
    )
}

export default Posts;