import React from 'react';
import { FileUploaderDropContainer, } from '@carbon/react';



const Uploader = () => {


    const url = 'https://pdf-to-text-converter.p.rapidapi.com/api/pdf-to-text/convert';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '98e376b5fdmsh06e27186162ba9dp1b86e2jsn6763a458fb4d',
            'X-RapidAPI-Host': 'pdf-to-text-converter.p.rapidapi.com'
        },
        body: {
            key1: 'value',
            key2: 'value'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }


    return (<div className=''>
        <div className="bx--file__container">
            <FileUploaderDropContainer
                labelText="Drag and drop files here or click to upload"
                multiple={true}
                size="lg"
                accept={['.pdf']}
                disabled={false}
                onAddFiles={(e) => console.log("file added", e.dataTransfer.files)}
                tabIndex={0} />
        </div>


    </div>)
}


export default Uploader