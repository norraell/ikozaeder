import React from 'react';
import './Sandbox.css';

class Sandbox extends React.Component <{}, { isExpanded: boolean }> {
  constructor(props: object){
    super(props);
    this.state = {
      isExpanded: false,
    }
  }
  
  handleExpand = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  render() {
    const { isExpanded } = this.state;
    const className = `item ${isExpanded ? 'expanded' : 'collapsed'}`;
    return(
      <div className={className}>
        <button className="item-anchor" onClick={this.handleExpand}>
          Projekttitel
        </button>
        <div className="item-container">
          <img src="https://picsum.photos/600/300?random" />
          <div className="item-title">Projekttitel</div>
          <div className="item-description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </div>
          <div>
            <button className="item-btn" onClick={this.handleExpand}>
              Zurück
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Sandbox;
