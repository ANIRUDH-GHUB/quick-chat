import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileImg from "../../common/ProfileImg/ProfileImg";
import { userImageUrl } from "../../constants/Constants";
import { Message, STATE } from "../../model/Interfaces";
import { setMessageFromApi } from "../../state/slices/contactSlice";
import messageJson from "./../../assets/json/messages.json";
import "./ChatPanel.scss";
import MessageArea from "./MessageArea/MessageArea";

const ChatPanel: React.FC = () => {
  const { contacts } = useSelector((state: STATE) => state);
  const [messages, setMessages] = useState<Message[]>();
  const { userStatus } = contacts;
  const { contactList, selectedUser, messages: messageResponse } = contacts;
  const dispatch = useDispatch();

  const chatRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    dispatch(setMessageFromApi());
  }, []);

  useEffect(() => {
    getMessagesForContact(selectedUser);
  }, [selectedUser, messageResponse]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scroll(0, chatRef.current.scrollHeight);
    }
  });

  const getMessagesForContact = (id: string) => {
    setMessages(messageResponse[id]);
  };

  const getImageSrc = (id: string): string => {
    return (
      userImageUrl +
      (id === "0" ? "zero" : contactList[parseInt(selectedUser) - 1].avatar)
    );
  };

  const appendMessage = (msg: string) => {
    const newMessage = {
      id: messages?.length ? `${messages.length + 1}` : "1",
      author: "0",
      status: "Success",
      data: msg,
      time: "1662202747412",
    };
    if (messages) setMessages(() => [...messages, newMessage]);
  };

  return (
    <div className="chat-panel">
      <div className="chat-panel-wrapper">
        {selectedUser && (
          <div className="conversation-container">
            <ul ref={chatRef}>
              {messages?.map((message) => (
                <li
                  key={message.id}
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
                    bgColor={
                      message.author === "0"
                        ? ""
                        : contactList[parseInt(selectedUser) - 1].bgcolor
                    }
                    badge={
                      message.author === "0"
                        ? userStatus
                          ? "green"
                          : "red"
                        : "green"
                    }
                  />
                </li>
              ))}
            </ul>
            <MessageArea callback={appendMessage} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPanel;
