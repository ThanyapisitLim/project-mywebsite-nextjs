export default function Footer() {
    return (
        <>
            <hr className="mx-10 my-5 h-[1px] border-0 rounded-2xl bg-gray-400" />
            <div className="flex justify-between mx-10">
                <div>
                    <h1>Thanyapisit Limpakanon</h1>
                    <div></div>
                </div>

                <div>
                    <h1>Send Message</h1>
                    <input type="text" placeholder="Message..." className="p-1 rounded-xl" />
                    <button className="bg-black text-white rounded-2xl p-2 m-2 hover:bg-gray-800 transition duration-200">send</button>
                </div>
            </div>
        </>
    );
}