import logo from "../images/content/logo.png";


function Splash() {
    return (
        <section>
            <div className="container mx-auto min-h-screen">
                <div className="flex flex-center justify-center h-screen">
                    <div className="w-full md:w-14/12 text-center">
                        <img src={logo}
                            alt="LuxSpace | fullfil your house with bautifull furniture"
                            className="mx-auto mb-8"
                        />
                        <p className="mb-8 px-4">
                            Kaami menyediakan furniture berkelas yang membuat ruangan terasa hommie
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Splash;