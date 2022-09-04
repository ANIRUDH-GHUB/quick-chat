import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import Picker, { IEmojiData } from "emoji-picker-react";
import "./MessageArea.scss";

const MessageArea: React.FC = () => {
  const [message, setMessage] = useState("");
  const [openEmoji, setOpenEmoji] = useState(false);

  const onEmojiClick = (event: any, emojiObject: IEmojiData) => {
    setMessage(message + emojiObject.emoji);
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
        <div className="send-button">
          <p>Send</p>
        </div>
      </div>
    </div>
  );
};

export default MessageArea;
