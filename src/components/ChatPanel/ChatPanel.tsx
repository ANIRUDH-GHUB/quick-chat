import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProfileImg from "../../common/ProfileImg/ProfileImg";
import { userImageUrl } from "../../constants/Constants";
import { Message, STATE } from "../../model/Interfaces";
import messageJson from "./../../assets/json/messages.json";
import "./ChatPanel.scss";

const ChatPanel: React.FC = () => {
  const { contacts } = useSelector((state: STATE) => state);
  const [messages, setMessages] = useState<Message[]>();
  const { contactList, selectedUser } = contacts;

  const getMessagesForContact = (id: string) => {
    setMessages(messageJson.messages);
  };

  const getImageSrc = (id: string): string => {
    return (
      userImageUrl +
      (id === "0" ? "zero" : contactList[parseInt(selectedUser) - 1].avatar)
    );
  };

  useEffect(() => {
    getMessagesForContact(selectedUser);
  }, [selectedUser]);
  return (
    <div className="chat-panel">
      <div className="chat-panel-wrapper">
        {selectedUser && (
          <ul className="conversation-container">
            {messages?.map((message) => (
              <li
                className={
                  message.author === "0" ? "message-right" : "message-left"
                }
              >
                <div
                  className="user-message"
                  dangerouslySetInnerHTML={{ __html: message.data }}
                ></div>
                <ProfileImg
                  src={getImageSrc(message.author)}
                  width="50px"
                  height="50px"
                  bgColor={contactList[parseInt(selectedUser) - 1].bgcolor}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ChatPanel;
