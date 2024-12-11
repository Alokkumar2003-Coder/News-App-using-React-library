import React, { useEffect, useState } from "react";

// import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
// static defaultProps = {
//   country: "us",
//   pageSize: 8,
//   category: "general",
// };

// static propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// };
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capatalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   articles: [],
  //   loading: true,
  //   page: 1,
  //   totalResults: 0,
  //   };
  //   document.title = `${this.capatalizeFirstLetter(
  //     this.props.category
  //   )} - NewsMonkey`;
  // }

  // async updateNews() {
  const updateNews = async () => {
    props.setProgress(10);
    // this.props.setProgress(10);
    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c9ef6c98beb5418ab73bf26d378478b5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0bcd23ec19314b5d8b54fd855a7ac932&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    setLoading(true);

    try {
      const data = await fetch(url);
      // this.props.setProgress(30);
      props.setProgress(30);
      const parsedData = await data.json();
      // this.props.setProgress(70);
      props.setProgress(70);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      // this.setState({
      //   articles: parsedData.articles,
      //   totalResults: parsedData.totalResults,
      //   loading: false,
      // });
    } catch (error) {
      console.error("Error fetching news:", error);
      // this.setState({ loading: false });
      setLoading(false);

    }
    // this.props.setProgress(100);
    props.setProgress(100);
  };

  useEffect(() => {
    // this.updateNews();
    document.title = `${capatalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    //eslint-disable-next-line

  }, []);

  // async componentDidMount() {
  //   this.updateNews(this.state.page);
  // }

  // const handlePreviousClick = async () => {
  //   // this.setState({ page: this.state.page - 1 });
  //   // this.updateNews();
  //   setPage(page-1)
  //   updateNews();

  // };
  // const handleNextClick = async () => {
  //   if (
  //     !(
  //       // this.state.page + 1 >
  //       page + 1 >
  //       Math.ceil(totalResults / pageSize)
  //       // Math.ceil(this.state.totalResults / this.props.pageSize)

  //     )
  //   ) {
  //     // this.updateNews(this.state.page + 1);
  //     updateNews(page + 1);

  //   }
  // };
  const fetchMoreData = async () => {
    // const nextPage = this.state.page + 1;
    // const nextPage = page + 1;
    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c9ef6c98beb5418ab73bf26d378478b5&page=${nextPage}&pageSize=${this.props.pageSize}`;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0bcd23ec19314b5d8b54fd855a7ac932&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    try {
      const data = await fetch(url);
      const parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles))
      setTotalResults( parsedData.totalResults)
      // this.setState({
      //   articles: this.state.articles.concat(parsedData.articles),
      //   articles:articles.concat(parsedData.articles),
      //   totalResults: parsedData.totalResults,
      //   page: nextPage,
      // });
    } catch (error) {
      console.error("Error fetching more news:", error);
    }
  };

  // render() {
  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ margin: "40px 0px", marginTop: '90px'}}>
        {/* NewsMonkey - Top {this.capatalizeFirstLetter(this.props.category)}{" "} */}
        NewsMonkey - Top {capatalizeFirstLetter(props.category)} Headlines
      </h1>
      {/* {this.state.loading && <Spinner/>} */}
      {loading && <Spinner/>}
      <InfiniteScroll
        dataLength={articles.length}
        // next={this.fetchMoreData}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {/* {this.state.articles.map((element) => { */}
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      <div className="container d-flex justify-content-between">
        {/* <button
             disabled={this.state.page <= 1}
             type="button"
             className="btn btn-dark"
             onClick={this.handlePreviousClick}
           >
             &larr; Previous
           </button>
           <button
             disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
             }
             type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
           </button>*/}
      </div>
    //</div>
  );
  // }
};

News.defaultProps = {
  country: "us",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
