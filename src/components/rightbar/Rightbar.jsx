import "./rightbar.css"

function Rightbar() {
    return (
        <div className="rightbar">
          <div className="rightbarWrapper">
            <div className="birthdayContainer">
              <img className="birthdayImg" src="assets/gift.png" alt="" />
              <span className="birthdaytext">

               <b> sumit gaurav</b> and <b>3 other friends</b>  have birthday today
              </span>
            
            </div>
            <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">rahul</span>
          </li>
        </ul>
          </div>
        </div>
    )
}

export default Rightbar
