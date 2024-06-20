

export default function SupportIcon() {
    return (
        <div className='z-50 fixed bottom-[10px] right-[20px] w-[50px] h-[50px] bg-[#12a19e] rounded-full flex items-center justify-center'>

            <div id="tooltip-default" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Tooltip content
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <a href="https://wa.me/573133360087"
                rel="noopener"
                target="_blank" >
                <svg viewBox="0 0 43.269 43.269" width="64" height="64">
                    <circle cx="21.635" cy="21.635" fill="#12A19E" r="21.635"></circle>
                    <g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width=".667">
                        <path d="m17.83 30.619c-2.312-1.074-3.804-3.15-3.804-5.724v-5.978s3.027-2.745 6.748-1.916c4.33.962 6.626.71 7.906.286.564.543.564 1.087.564 2.174v5.435c0 2.581-1.501 4.662-3.825 5.733"></path>
                        <path d="m17.836 17.01c.022-1.043.228-4.185 2.168-5.158"></path>
                        <path d="m20.553 16.955c.005-1.065.098-2.44 1.082-2.929"></path>
                        <path d="m11.852 24.352v-6.522c0-4.95 3.804-8.696 9.783-8.696s9.783 3.745 9.783 8.696v6.522c0 4.95-2.517 8.696-7.609 8.696"></path>
                        <path d="m11.852 18.374h-1.63c-.668 0-1.087.419-1.087 1.087v3.804c0 .668.419 1.087 1.087 1.087h1.63"></path>
                        <path d="m31.417 18.374h1.63c.668 0 1.087.419 1.087 1.087v3.804c0 .668-.419 1.087-1.087 1.087h-1.63"></path>
                        <rect height="2.717" rx="1.087" width="4.348" x="19.461" y="31.417"></rect>
                    </g>
                </svg>
            </a>
        </div>
    );
}