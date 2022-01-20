import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    constructor(){
        super();
        this.state={
            articles : [],
            loading : false,
            page : 1
        }
    }
    async componentDidMount(){
        let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=ae906ebf258e46bca389ae678a3c2dfe&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles : parsedData.articles,
                       loading:false
        })
    }

    handleNextClick = async ()=>{
        if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))
        {

        }
        else{
        let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=ae906ebf258e46bca389ae678a3c2dfe&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles : parsedData.articles,
            page: this.state.page+1,
            totalResults: parsedData.totalResults,
            loading : false
        })
        }

    }
    handlePrevClick = async ()=>{
        
        let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=ae906ebf258e46bca389ae678a3c2dfe&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
        
    }
    

    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center">TruthNews | Top Headlines</h2>
                {this.state.loading &&<Spinner/>}
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div key={element.url} className="col-md-4 my-2">
                            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:""} newsUrl={element.url?element.url:""}/>
                        </div>
                    })}
                </div>
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-dark"  onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
