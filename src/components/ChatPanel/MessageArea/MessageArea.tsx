import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import Picker, { IEmojiData } from "emoji-picker-react";
import "./MessageArea.scss";

interface MessageProps {
  callback: (message: string) => void;
}

const MessageArea: React.FC<MessageProps> = ({ callback }) => {
  const [message, setMessage] = useState("");
  const [openEmoji, setOpenEmoji] = useState(false);

  const onEmojiClick = (event: any, emojiObject: IEmojiData) => {
    setMessage(message + emojiObject.emoji);
  };

  const onSend = (message: string) => {
    if (message) callback(message);
    setMessage("");
  };

  return (
    <div className="message-area">
      <div className="message-area-container">
        <div className="message-attachment">
          <FontAwesomeIcon icon={faPaperclip} size="lg" />
        </div>
        <div className="input-area">
          <input
            type="text"
            placeholder="Enter your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></input>
          <FontAwesomeIcon
            icon={faFaceSmile}
            size="lg"
            onClick={() => setOpenEmoji(!openEmoji)}
          />
          {openEmoji && (
            <div className="emoji-panel">
              <Picker
                onEmojiClick={onEmojiClick}
                disableAutoFocus={true}
                native
              />
            </div>
          )}
        </div>
        <div className="send-button" onClick={() => onSend(message)}>
          <p>Send</p>
        </div>
      </div>
    </div>
  );
};

export default MessageArea;
