import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
	return (
		<div>
			<>
				<Topbar />
				<div className="profile">
					<Sidebar />
					<div className="profileRight">
						<div className="profileRightTop">
							<div className="profileCover">
								<img
									className="profileCoverImg"
									src="assets/post/4.jpeg"
									alt=""
								/>
								<img
									className="profileUserImg"
									src="assets/person/8.jpeg"
									alt=""
								/>
							</div>
                            <div className="profileInfo">
                                <h4 className="profileInfoName">Adam Maichrzik</h4>
                                <span className="profileInfoDesc">Hello. It's me, Adam! </span>
                            </div>
						</div>
						<div className="profileRightBottom">
							<Feed />
							<Rightbar />
						</div>
					</div>
				</div>
			</>
		</div>
	);
}
