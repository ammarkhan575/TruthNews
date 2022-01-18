import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state={
            articles : [],
            loading : true
        }
    }
    async componentDidMount(){
        let url= "https://newsapi.org/v2/top-headlines?country=us&apiKey=ae906ebf258e46bca389ae678a3c2dfe";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles : parsedData.articles})


    }
    render() {
        return (
            <div className="container my-3">
                <h2>TruthNews | Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div key={element.url} className="col-md-4 my-2">
                            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:""} newsUrl={element.url?element.url:""}/>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
