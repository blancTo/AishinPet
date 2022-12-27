import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Iframe from 'react-iframe'

export default class FullheightIframe extends Component {

    componentDidMount() {
        console.log("IFRAME DID MOUNT");
    }

    renderReactFrame() {
        return (
            <Iframe url="https://www.aishin2484.jp/business_guide.php" width="100%" height="100%" onLoad={()=>{console.log("IFRAME ON LOAD")}}></Iframe>
        );
    }

    renderHTMLFrame() {
        return (
            <iframe 
                onLoad={(loadEvent)=>{
                    // NOT WORKING var frameBody = ReactDOM.findDOMNode(this).contentDocument.body; // contentDocument undefined
                    // NOT WORKING obj.nativeEvent.contentWindow.document.body.scrollHeight // contentWindow undefined
                }} 
                ref="iframe" 
                src="https://www.aishin2484.jp/business_guide.php" 
                width="100%" 
                height="100%" 
                scrolling="no" 
                frameBorder="0"
            />
        );
    }

    render() {
        return (
            <div style={{maxWidth:640, width:'100%', height:'100%', overflow:'auto'}}>
                {this.renderHTMLFrame()}
            </div>
        );
    }
}