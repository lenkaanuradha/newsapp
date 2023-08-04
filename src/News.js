import React, { Component} from "react";
import NewsItems from "./NewsItems";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      // loading:true,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.props.category}-NewsMonkey`;
  }
  static defaultProps = {
    country: "in",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };
  async updateNews(){
    this.props.setProgress(10);
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=b7ef292ddd194e198d4d910a50eed17e`;
  // this.setState({ loading: true });
  let data = await fetch(url);
  this.props.setProgress(30);
  let parseData = await data.json();

  this.setState({
    articles: parseData.articles,
    totalResults: parseData.totalResults,
    // loading: false
  });
  this.props.setProgress(100)
}
  async componentDidMount() {
   this.updateNews();
  }

  

  fetchMoreData = async () => {
    this.setState({page:this.state.page+1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=b7ef292ddd194e198d4d910a50eed17e&page=${this.state.page}`;
    let data = await fetch(url);

    let parseData = await data.json();

    this.setState({
      articles: parseData.articles.concat(parseData.articles),
      totalResults: parseData.totalResults
      
    });
  };
   

  render() {
    
    return (
      <div>
        <div className="container my-3">

          <h2 className="text-center" style={{ margin: "35px 0px" ,marginTop:'90px'}}>
            {" "}
           {`NewsMonkey-Top ${this.props.category} Headlines`}
          </h2>

           {/* {this.state.loading && <Loading/>} */}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
            inverse={true} //
            hasMore={this.state.articles.length !== this.totalResults}
            
            scrollableTarget="scrollableDiv"
          >
            <div className="container">
            <div className="row ">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <NewsItems
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://th.bing.com/th?id=OIP.epXTyIMpB_98w5LljtdiIAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                      }
                      newsurl={element.url}
                      author={element.author ? element.author : "Unknown"}
                      publishedAt={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
            </div>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default News;
