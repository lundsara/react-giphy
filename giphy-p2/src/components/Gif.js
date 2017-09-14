import React, {Component} from 'react';

class Gif extends Component {
  // shouldComponentUpdate(nextProps, nextState) {

  //   console.log('Gif should update');
  //   return nextProps.data.image_original_url !== this.props.data.image_original_url;
  // }

render() {
  console.log(this.props.singleGif);
  return(
    <div id="single">
     <img src={this.props.singleGif.images.downsized.url}/>
    </div>
   )
 }
}




export default Gif;
