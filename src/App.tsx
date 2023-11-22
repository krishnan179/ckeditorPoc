import React, { Component } from 'react';
// import Editor from 'ckeditor5-custom-build/build/ckeditor';
// import { CKEditor } from '@ckeditor/ckeditor5-react'
// import { DragableContent } from './DragableContent';
// const editorConfiguration = {
//     toolbar: [ 'Essentials','undo', 'redo', '|','heading','bold', 'italic', 'bulletedList', 'numberedList', 'highlight',  ]
// };
import './App.css';

import LoadSaveIntegration from './LoadSaveIntegration';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>Using CKEditor&nbsp;5 from online builder in React</h2>
                <div id="ckEditor5">                    
                
                </div>
                {/* <DragableContent/> */}
                    <LoadSaveIntegration/>
                
            </div>
        );
    }
}

export default App