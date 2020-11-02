import React from 'react';

/*  category
    artist
    image
    #songs
    price
    title
    link
    lastUpdatedOn */

class Album extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div className="album">
                    <a href={this.props.item.id.label} className="title">
                        {this.props.item.title.label}
                    </a>
                    <img src={this.props.item["im:image"][0].label}/>
                    <div className="details">
                        <p>Artist: </p> <p>{this.props.item['im:artist'].label}</p>
                    </div>
                    <div className="details">
                        <p>Category: </p> <p>{this.props.item.category.attributes.label}</p>
                    </div>
                    <div className="details">
                        <p>#songs: </p> <p>{this.props.item['im:itemCount'].label}</p>
                    </div>
                    <div className="details">
                        <p>Price: </p> <p>{this.props.item["im:price"].label}</p>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Album;