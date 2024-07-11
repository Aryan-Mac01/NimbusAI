import "./App.css";
import aiLogo from "./assests/assets/nimbuslogo.svg";
import addBtn from './assests/assets/add-30.png'
import msgIcon from './assests/assets/message.svg'
import home from './assests/assets/home.svg'
import saved from './assests/assets/bookmark.svg'
import rocket  from './assests/assets/rocket.svg'
import sendBtn  from './assests/assets/send.svg'
import userIcon from './assests/assets/user-lap (Custom).jpg'
import imgLogo  from './assests/assets/nimbus.svg'

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={aiLogo} alt="Logo" className="logo" />
            <span className="brand">NimbusAI</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is programming ?
            </button>

            <button className="query">
              <img src={msgIcon} alt="Query" />
              How to use an AI ?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listItemsImg" />
            Home
          </div>

          <div className="listItems">
            <img src={saved} alt="" className="listItemsImg" />
            Saved
          </div>

          <div className="listItems">
            <img src={rocket} alt="" className="listItemsImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img src={userIcon} alt="" /><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, consectetur nesciunt? Dolor, et esse recusandae veniam consequatur non sunt eum distinctio a enim quibusdam, sint eos deserunt. Voluptatem, doloribus repellendus?</p>
          </div>
          
          <div className="chat">
            <img src={imgLogo} alt="" /><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, consectetur nesciunt? Dolor, et esse recusandae veniam consequatur non sunt eum distinctio a enim quibusdam, sint eos deserunt. Voluptatem, doloribus repellendus?</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message" /><button className="send"><img src={sendBtn} alt="Send" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
