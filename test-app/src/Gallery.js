import Profile from "./Profile";

export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <div className="flex space-x-4">
                <Profile />
                <Profile />
                <Profile />
            </div>
        </section>
    );
}
