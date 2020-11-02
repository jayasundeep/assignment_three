import React from 'react';
import AlbumList from './AlbumList';
// import data from '../data/data.json'


class FetchData extends React.Component {
    state = {
        loading : true,
        title : "",
        albums : []
    }

    async componentDidMount() {
        const url = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson);
        navigator.clipboard.writeText(JSON.stringify(responseJson));
        // const responseJson = data;
        this.setState({
            title : responseJson.feed.title.label, 
            loading : false,
            albums : responseJson.feed.entry
        });
        // console.log(this.state);
    }

    render() {
        return (
            <div className="album_data">
                {
                    this.state.loading 
                    ? 
                    <p> loading... </p>
                    :
                    <div>
                        <p> {this.state.title } </p>
                        <AlbumList albums={this.state.albums}/>
                    </div>
                }
            </div>
        )
    }
}

export default FetchData;