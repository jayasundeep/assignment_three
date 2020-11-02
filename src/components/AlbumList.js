import React from 'react';
import Album from './Album';


const AlbumList = (props) => (
    <div>
        {
            props.albums.map((item, index) => {
                return <Album item={item} key={index}/>
            })
        }
    </div>
);

export default AlbumList;