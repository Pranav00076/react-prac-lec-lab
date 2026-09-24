
// import { createRoot } from 'react-dom/client'

// const UserProfile = (props) => {
//   return (
//     <div className='cont'>
//       <img id='profile-image' src={props.url} alt={props.alt} />
//       <div className='mini-cont'>
//         <h3 id='username'>{props.username}</h3>
//         <h6 id='userId'>{`@${props.userId}`}</h6>
//       </div>
//       <button className='follow-button'>Follow</button>
//     </div>
//   )
// }

// let jsx = (
//   <div className='outer-cont'>
//       <UserProfile url="https://picsum.photos/200" alt="profile image" username="Pranav Thawait" userId="pt.clicks" />
//       <UserProfile url="https://picsum.photos/200" alt="profile image" username="Pranav Thawait" userId="pt.clicks" />
//       <UserProfile url="https://picsum.photos/200" alt="profile image" username="Pranav Thawait" userId="pt.clicks" />
//       <UserProfile url="https://picsum.photos/200" alt="profile image" username="Pranav Thawait" userId="pt.clicks" />
//       <UserProfile url="https://picsum.photos/200" alt="profile image" username="Pranav Thawait" userId="pt.clicks" />
//   </div>
// )

// createRoot(document.getElementById('root')).render(jsx)


import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { DriveImage } from '@driveloader/react';
import '@driveloader/react/styles.css';

export function ProfileAvatar() {
  return (
    <DriveImage
      src="https://drive.google.com/file/d/1Fv7jwDFgZfRYdUUAwdtT8VOLTii5_My2/view?usp=sharing"
      alt="User Profile"
      width={1200}
      height={1200}
      fade={true}
    />
  );
}



// var arr;
// async function getData() {
//   let res = await fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=50");
//   let data = ((await res.json()).results).map(x=>x.name)
//   data.forEach(x)
// }
// console.log(arr)

// const UserProfile = (props) => {
//   return (
//     <div className='cont'>
//       <img id='profile-image' src={props.url} alt={props.alt} />
//       <div className='mini-cont'>
//         <h3 id='username'>{props.username}</h3>
//         <h6 id='userId'>{`@${props.userId}`}</h6>
//       </div>
//       <button className='follow-button'>Follow</button>
//     </div>
//   )
// }

// const App = () => {
//   const [visibleCount, setVisibleCount] = useState(3)
//   const users = [
//     { id: 1, username: "Pranav", userId: "pt.clicks" },
//     { id: 2, username: "Alex", userId: "alex.dev" },
//     { id: 3, username: "Sam", userId: "sam.codes" },
//     { id: 4, username: "John", userId: "john123" },
//     { id: 5, username: "Emma", userId: "emma.x" },
//     { id: 6, username: "Chris", userId: "chris.dev" },
//     { id: 7, username: "Lisa", userId: "lisa.codes" },
//   ]

//   const handleShowMore = () => {
//     setVisibleCount(prev => prev + 3)
//   }

//   return (
//     <div className='outer-cont'>
//       {users.slice(0, visibleCount).map(user => (
//         <UserProfile
//           key={user.id}
//           url="https://picsum.photos/200"
//           alt="profile image"
//           username={user.username}
//           userId={user.userId}
//         />
//       ))}

//       {visibleCount < users.length && (
//         <button id='button-showmore' onClick={handleShowMore}>
//           Show More
//         </button>
//       )}
//     </div>
//   )
// }

createRoot(document.getElementById('root')).render(<ProfileAvatar />)