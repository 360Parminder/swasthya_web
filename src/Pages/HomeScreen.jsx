import Header from "../Components/Header";
import Loader from "../Components/Loader";

const HomeScreen = () => {
    return (
        <div className="flex flex-col items-center">
            {/* <Header /> */}
            <div>
                <div>
                    <h3 className=" text-[3rem] font-bold w-6/12">The Future of Health Monitoring is Here.</h3>
                    <p className=" w-2/5">Track, manage, and improve your well-being—all in one powerful app.
                    Personalized insights and tools to help you achieve your health goals.
                    </p>
                    <div>
                        <button>App Store</button>
                        <button>Google Play</button>
                    </div>
                </div>
                <div>

                </div>
            </div>

        </div>
    );
}

export default HomeScreen;