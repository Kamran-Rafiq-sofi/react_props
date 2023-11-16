import './App.css';
import List from './List';
import React from 'react';
class App extends React.Component {
  constructor(){
    super();
    this.state={
        data:[
            {
            icon:'https://cdn-icons-png.flaticon.com/128/3536/3536569.png',
            name:'Linkedin',
            link:'https://www.linkedin.com/login',
            bgColor:"#ff9580",
            id:1

            },
            {
                icon:'https://cdn-icons-png.flaticon.com/128/3291/3291695.png',
                name:'Github',
                link:'https://www.github.com',
                bgColor:"#f2faa6",
                id:2

                },
                {
                    icon:'https://cdn-icons-png.flaticon.com/128/25/25347.png',
                    name:'X',
                    link:'https://www.twitter.com',
                    bgColor:"#ff9580",
                    id:3
    
                    },

        ]
    }
}
render(){
  const{data}=this.state;
  return (
    <div className="App">
      <h1 style={{marginTop:20}}>Reach Me</h1>
   <List
   data={data} 
   />


    </div>
  );
}
}


export default App;
