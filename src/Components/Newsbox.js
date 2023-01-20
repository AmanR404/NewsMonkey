import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export class Newsbox extends Component {
  static defaultProps = {
    country : "in",
    category : "general"
  }
  constructor(){
    super()  
    this.state = { 
      articles : [],
      loading : false,
      page : 1
    }  
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=11749b0a1210410798e4202eb71976ec&pageSize=5`
    this.setState({loading : true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles : parsedData.articles, totalResults : parsedData.totalResults, loading : false})
  }
  handleNextClick = async ()=>{
   if(this.state.page + 1 > Math.ceil(this.state.totalResults/6)){
    alert("No more Updates")
   }
   else{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=11749b0a1210410798e4202eb71976ec&page=${this.state.page + 1}&pageSize=5`;
    this.setState({loading : true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles : parsedData.articles, page : this.state.page + 1, loading : false})
   }
  }
  handlePrevClick = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=11749b0a1210410798e4202eb71976ec&page=${this.state.page - 1}&pageSize=5`;
    this.setState({loading : true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles : parsedData.articles, page : this.state.page - 1, loading : false})
  }
  render() {
    return (
      <div className='container my-3'>
        <h1 style={{margin : '35px 0px'}}>NewsMonkey - Top Headlines</h1>
      {this.state.loading && <Spinner/>}
        <div className="row">
       {this.state.articles.map((element)=>{
        return <div className="col-md-4" key={element.url}>
        <NewsItem title={element.title} author={element.author} date={element.publishedAt} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name}/>
        </div>    
       })}
       </div>
       <div className='d-flex justify-content-between'>
       <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
       <button type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next  &rarr;</button>
       </div>
      </div>
    )
  }
}

export default Newsbox
