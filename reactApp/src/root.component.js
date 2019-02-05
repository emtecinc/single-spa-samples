import React from 'react';
import reactLogo from '../assets/react-logo.png'


export default class Root extends React.Component {

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {

        let ret = <div></div>;

            ret =
                    <div style={{marginTop: 100}}>
                        <center><img src={reactLogo} style={{width: 100}}/></center> 
                        <br />
                        <h1 style={{paddingLeft: 60}}>This was rendered by App1, which is written in React.</h1>
                    </div>
               
        

        return ret;
    }
}
