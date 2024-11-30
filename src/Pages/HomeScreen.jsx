import iPhone from "../assets/Images/iPhone.png";
import AppStore from "../assets/Images/apple.png";
import GoogleStore from "../assets/Images/googlePlay.png";


const HomeScreen = () => {
    return (
        <div className="flex flex-col items-center w-screen h-screen">
            {/* <Header /> */}
            <div className=" flex flex-row w-full h-full justify-center">
                <div>
                    <h3 className=" text-[3rem] font-bold w-6/12">The Future of Health Monitoring is Here.</h3>
                    <p className=" w-2/5">Track, manage, and improve your well-being—all in one powerful app.
                    Personalized insights and tools to help you achieve your health goals.
                    </p>
                    <div className=" flex flex-row gap-5 mt-10">
                        <button className="flex flex-row border-[1px] border-white rounded-lg items-center bg-black justify-between gap-2 p-2">
                            <img className="w-8 h-8" src={AppStore} alt="App Store" />
                            <div className=" leading-[1rem]">
                                <p className=" text-sm">Download on the</p>
                                <p className=" font-bold">App Store</p>
                            </div>
                            </button>
                            <button className="flex flex-row border-[1px] border-white rounded-lg items-center bg-black justify-between gap-2 p-2">
                            <img className="w-8 h-8" src={GoogleStore} alt="App Store" />
                            <div className=" leading-[1rem]">
                                <p className=" text-sm">GET IT ON</p>
                                <p className=" font-bold">Google Store</p>
                            </div>
                            </button>
                    </div>
                </div>
                <div>
                    <img className=" h-3/5" src={iPhone} alt="Home Screen" />
                </div>
            </div>

        </div>
    );
}

export default HomeScreen;