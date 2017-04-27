import React from 'react';

class BasicsEditor extends React.Component {

  render() {

    return (
      <div className="editor">
        <div className="editor-header">Basics</div>
        <div className="editor-description">Make a good first impression: introduce your campaign objectives and entice people to learn more. This basic information will represent your campaign on your campaign page, on your campaign card, and in searches.</div>


        <div className="editor-input-div">
          <div className="editor-input-title">Campaign Title</div>
          <div className="editor-input-description">What is the title of your campaign?</div>
          <input type="text"
            value={this.props.state.title}
            onChange={this.props.update('title')}
            className="editor-input"
            />
        </div>


        <div className="editor-input-div">
          <div className="editor-input-title">Campaign Tagline</div>
          <div className="editor-input-description">Provide a short description that best describes your campaign to your audience.</div>
          <textarea type="text"
            value={this.props.state.tagline}
            onChange={this.props.update('tagline')}
            className="editor-textarea"
            />
        </div>


        <div className="editor-input-div">
          <div className="editor-input-title">Location</div>
          <div className="editor-input-description">Choose the location where you are running the campaign. This location will be visible on your campaign page for your audience to see.</div>
          <div className="location">
            <input type="text"
              value={this.props.state.city}
              onChange={this.props.update('city')}
              className="editor-input"
              placeholder="City"
              />
            <input type="text"
              value={this.props.state.country}
              onChange={this.props.update('country')}
              className="editor-input"
              placeholder="Country"
              />
          </div>
        </div>


        <div className="editor-input-div">
          <div className="editor-input-title">Campaign Duration</div>
          <div className="editor-input-description">How many days will you be running your campaign for? You can run a campaign for any number of days, with a 60 day duration maximum.</div>
          <input type="number"
            value={this.props.state.duration}
            onChange={this.props.update('duration')}
            className="editor-input duration-input"
            />
        </div>

      </div>
    );
  }
}
export default BasicsEditor;