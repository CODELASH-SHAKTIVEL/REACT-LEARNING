import { useReducer, useState } from 'react';
import './App.css';
import AddVideo from './Components/AddVideo';
import videoDB from './data/Data';
// import VideoList from './components/Videolisted.js';
import VideoList from './Components/Videolist'
import Video from './Components/video';
import Counter from './Components/Counter'
function App() {
  console.log('render App')

  const [editableVideo,setEditableVideo] = useState(null);

// FUNCTION FOR USE REDUCER
function videoReducer( videos , action){
  switch (action.type) {
    case 'ADD':
      return [
         ...videos,
            {...action.payload, id: videos.length+1}
      ]
      case 'DELETE':
        return [
          ...videos.filter((video)=>video!==action.payload)
        ]
        case 'UPDATE':
          const index = videos.findIndex(v => v.id === action.payload.id);
          const newVideos = [...videos];
          newVideos.splice(index, 1, action.payload);
          setEditableVideo(null); // To reset the add button after edit button
          return newVideos;        
    default:
      return videos
  }
}


// REDUX => USE AS USEREDUCER FOR STATE MANAGEMENT  
  const [videos , dispatch] = useReducer(videoReducer,videoDB);


  // const [videos,setVideos] = useState(videoDB);


  function addVideos(video){
    dispatch({ type:'ADD', payload : video})
      // setVideos([
      //       ...videos,
      //       {...video, id: videos.length+1}
      //     ]);
  }


  function deleteVideo(id){
    dispatch({type:'DELETE' , payload : id})
    // setVideos(videos.filter(video=>video.id!==id))
  }

  
  function updateVideo(Video){
    dispatch({type:'UPDATE' , payload : Video})
    // setVideos(newVideos)
  }
  
  function editVideo(id){
    setEditableVideo(videos.find(video=>video.id===id))
  }

  return (
    <div className="App" onClick={()=>console.log('App')}>
      <Counter></Counter>
       <AddVideo addVideos={addVideos} updateVideo={updateVideo} editableVideo={editableVideo}></AddVideo>
       <VideoList deleteVideo={deleteVideo} editVideo={editVideo}  videos={videos}></VideoList>
    </div>
  );
}

export default App;