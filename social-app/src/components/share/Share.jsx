import "./share.css";
import {PermMedia } from "@material-ui/icons";

export default function Share() {
	return (
		<div className="share">
			<div className="shareWrapper">
				<div className="shareTop">
					<img className="shareProfileImg" src="assets/person/8.jpeg" alt="" />
					<input placeholder="What is in your mind?" className="shareInput" />
				</div>
                <hr className="shareHr"/>
				<div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia className="shareIcon"/>
                            <span className="shareOptionText">Photo Video</span>
                        </div>
                        <div className="shareOption">
                            <PermMedia className="shareIcon"/>
                            <span className="shareOptionText">Photo Video</span>
                        </div>
                        <div className="shareOption">
                            <PermMedia className="shareIcon"/>
                            <span className="shareOptionText">Photo Video</span>
                        </div>
                        <div className="shareOption">
                            <PermMedia className="shareIcon"/>
                            <span className="shareOptionText">Photo Video</span>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	);
}
