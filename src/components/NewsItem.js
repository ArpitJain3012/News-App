import React, { Component } from 'react'

// export default class NewsItem extends Component {
//   render() {
//     let { title, description, imageURL, newsURL, author, date, source } = this.props
//     return (
//       <div className='my-3'>
//         <div className="card">
//           <div style={{
//             display: 'flex',
//             justifyContent: 'flex-end',
//             position: 'absolute',
//             right: '0'
//           }}>
//             <span className="badge rounded-pill bg-danger">{source}</span>
//           </div>
//           <img src={!imageURL ? "https://assets.thehansindia.com/h-upload/2022/10/08/1315488-chandrayaan-2.jpg" : imageURL} className='card-img-top' alt='...' />
//           <div className="card-body">
//             <h5 className="card-title">{title}...</h5>
//             <p className="card-text">{description}...</p>
//             <p className="card-text"><small className="text-muted">By <strong>{author ? author : "Unknown"}</strong> on <strong>{new Date(date).toGMTString()}</strong></small></p>
//             <a href={newsURL} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
//           </div>

//         </div>
//       </div>
//     )
//   }
// }

// Function Based Component...............

const NewsItem = (props)=> {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
      <div className="my-3">
          <div className="card">
              <div style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  position: 'absolute',
                  right: '0'
              }
              }> 
                  <span className="badge rounded-pill bg-danger"> {source} </span>
              </div>
              <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">{title}  </h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                  <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
              </div>
          </div>
      </div>
  )

}

export default NewsItem
