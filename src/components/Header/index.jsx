export const Header = () => {
    return (
        <div className="sticky top-0 w-full z-100 px-4 py-3 flex items-center justify-between bg-blue-300">
            <a href="/">
                <span className="font-bold text-2xl">Sri Ganesh</span>
            </a>
            <div className="flex items-center gap-2">

                <a
                    href="https://api.whatsapp.com/send?phone=919901103469&text=Hi%2C%20I%20am%20interested%20in%20one%20of%20your%20cars"
                    target="_blank"
                    className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.092.542 4.056 1.486 5.783L0 24l6.412-1.692A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.786 9.786 0 0 1-5.019-1.381l-.36-.215-3.812.993.992-3.724-.234-.382A9.784 9.784 0 1 1 21.82 12 9.803 9.803 0 0 1 12 21.82zm5.52-7.389c-.255-.127-1.51-.743-1.743-.828-.233-.085-.403-.127-.572.127s-.656.828-.805 1c-.148.17-.296.191-.551.064a7.939 7.939 0 0 1-2.338-1.44 8.756 8.756 0 0 1-1.62-2.002c-.17-.296-.018-.456.127-.601.13-.129.296-.339.446-.509.149-.17.198-.296.298-.493.101-.212.042-.382-.021-.509s-.572-1.374-.784-1.889c-.206-.496-.415-.429-.572-.437l-.488-.009a.937.937 0 0 0-.675.318c-.233.255-.887.867-.887 2.113 0 1.246.91 2.45 1.036 2.618.127.169 1.787 2.726 4.333 3.822.605.26 1.076.415 1.442.53.605.191 1.157.164 1.592.1.485-.072 1.51-.616 1.724-1.211.212-.596.212-1.107.148-1.211-.064-.106-.234-.17-.489-.297z" />
                    </svg>
                    Chat on WhatsApp
                </a>
                <p className="flex items-center gap-1">Buy</p>
                <p className="flex items-center gap-1">Sell</p>
                <p className="flex items-center gap-1">Wishlist</p>
            </div>
        </div>
    )
}