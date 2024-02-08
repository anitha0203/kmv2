import React, { useEffect, useState } from 'react'
import { imageDB } from './Config'
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"

function ImageUpload() {
    const [images, setImages] = useState('')
    const [imageUrl, setImageUrl] = useState([])

    const handleClick = () => {
        const imgRef = ref(imageDB, `files/${v4()}`)
        uploadBytes(imgRef, images)
    }

    useEffect(() => {
        listAll(ref(imageDB, 'files')).then(image => {
            console.log(image.items);
            image.items.forEach(val => {
                getDownloadURL(val).then(url => {
                    setImageUrl(data => [...data, url])
                })
            })
        })
    }, [imageDB])

    console.log(imageUrl);

    return (
        <div style={{ margin: "5rem" }}>
            <input type="file" onChange={(e) => { setImages(e.target.files[0]) }} />
            <button onClick={handleClick}>Upload</button>

            <br /><br />

            <div style={{ display: "flex", backgroundColor: "#eee", padding: "2rem" }}>
                {imageUrl.map(imgurl =>
                    <div style={{margin: "2rem"}}>
                        <img src={imgurl} height={200} width={200} />
                    </div>)}
            </div>
        </div>
    )
}

export default ImageUpload