import { useState } from 'react';
import './App.css';
import AddVideo from './Components/AddVideoed';
import videoDB from './data/Data';
import VideoList from './Components/Videolisted';
function App() {
  console.log('render App')

  const [videos,setVideos] = useState(videoDB);

  function addVideos(video){
      setVideos([
            ...videos,
            {...video, id: videos.length+1}
          ]);
  }

  return (
    <div className="App" onClick={()=>console.log('App')}>
       <AddVideo addVideos={addVideos}></AddVideo>
       <VideoList videos={videos}></VideoList>


    </div>
  );
}

export default App;