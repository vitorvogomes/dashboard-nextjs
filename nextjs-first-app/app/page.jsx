import LikeButton from "./like-button";
import AthleteList from "./athlete-list";

function Header({ title }) {
    return <h1>{title ? title : "This is how we live"}</h1>;
}

export default function HomePage() {
    return (
        <div>
            <Header title="SkateSurfMoto"/>
            <AthleteList />
            <LikeButton />
        </div>
    );
}