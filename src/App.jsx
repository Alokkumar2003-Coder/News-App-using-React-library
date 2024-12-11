// import React, { Component } from 'react';
import React, { useState} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {BrowserRouter as Router,Routes,Route,Navigate,} from 'react-router-dom';

const App =()=>{
// export default class App extends Component {
  // pageSize = 5;
  const pageSize = 5;
  // state ={
  //   progress:0
  // }
  const [progress, setProgress] = useState(0);
  // setProgress =(progress)=>{
  //   this.setState({progress:progress})
  // }

  // render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          color='red'
          // progress={this.state.progress}
          progress={progress}

          />

          <Routes>            
            <Route path="/" element={<Navigate to="/home" replace />}/>            
            {/* News routes for different categories */}
            {/* <Route exact path="/home" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="us" category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="us" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="us" category="technology" />} /> */}
            <Route exact path="/home" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="us" category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="us" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  // }
}

export default App;