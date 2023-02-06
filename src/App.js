import React, { Component, useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';

// export default class App extends Component {
//   pageSize = 15;
//   state = {
//     progress: 0
//   }
//   setProgress = (progress) => {
//     this.setState({ progress: progress })
//   }
//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar />
//           <LoadingBar
//             height={2.5}
//             color='#f11946'
//             progress={this.state.progress}
//           />
//           <Routes>
//             <Route exact path='/' element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports" />}></Route>
//             <Route exact path='/business' element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business" />}></Route>
//             <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />}></Route>
//             <Route exact path='/general' element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" />}></Route>
//             <Route exact path='/health' element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health" />}></Route>
//             <Route exact path='/science' element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science" />}></Route>
//             <Route exact path='/sports' element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports" />}></Route>
//             <Route exact path='/technology' element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology" />}></Route>
//           </Routes>
//         </Router>
//       </div>
//     )
//   }
// }


const App = () => {
  const pageSize = 15;

  const [progress, setProgress] = useState(0);

  return (
          <div>
            <Router>
              <Navbar />
              <LoadingBar
                height={2.5}
                color='#f11946'
                progress={progress}
              />
              <Routes>
                <Route exact path='/' element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports" />}></Route>
                <Route exact path='/business' element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business" />}></Route>
                <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}></Route>
                <Route exact path='/general' element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" />}></Route>
                <Route exact path='/health' element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health" />}></Route>
                <Route exact path='/science' element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science" />}></Route>
                <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports" />}></Route>
                <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology" />}></Route>
              </Routes>
            </Router>
          </div>
        )
}
export default App;