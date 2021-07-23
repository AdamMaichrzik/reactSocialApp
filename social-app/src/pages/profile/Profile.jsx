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
						<div className="profileRightTop">Test top </div>
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
