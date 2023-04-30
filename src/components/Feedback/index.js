import {Component} from 'react'

import './index.css'

const FeedbackType = props => {
  const {emojiDetails, onClickChangeState} = props
  const {id, name, imageUrl} = emojiDetails

  const onClickEmoji = () => {
    onClickChangeState()
  }

  return (
    <li className="list-item">
      <img src={imageUrl} onClick={onClickEmoji} className="emoji" alt={name} />
      <p className="expression">{name}</p>
    </li>
  )
}

class Feedback extends Component {
  state = {isClicked: false}

  onClickChangeState = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    if (isClicked === false) {
      return (
        <div className="app-container">
          <div className="give-feedback-container">
            <h1 className="asking">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="list-container">
              {emojis.map(eachEmoji => (
                <FeedbackType
                  emojiDetails={eachEmoji}
                  key={eachEmoji.id}
                  onClickChangeState={this.onClickChangeState}
                />
              ))}
            </ul>
          </div>
        </div>
      )
    }
    return (
      <div className="app-container">
        <div className="give-feedback-container">
          <img src={loveEmojiUrl} className="love-emoji" alt="love emoji" />
          <h1 className="asking">Thank You</h1>
          <p className="support">
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      </div>
    )
  }
}

export default Feedback
