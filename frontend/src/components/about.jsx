import React from 'react'
import { VT323 } from 'next/font/google';

const vt323 = VT323({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const about = () => {
    return (
        <section className="px-6 py-10" id="about">
            <div className={`text-center text-neutral- ${vt323.className} text-3xl`}>
                <div>
                    <p className="mb-10">Meet the Team</p>
                    <div className="grid grid-cols-4 gap-4">
                        <img src="/images/ahmed.png" alt="ahmed" className="w-full h-auto animate-pulse" />
                        <img src="/images/andy.png" alt="andy" className="w-full h-auto animate-pulse" />
                        <img src="/images/jacob.png" alt="jacob" className="w-full h-auto animate-pulse" />
                        <img src="/images/jeheim-removebg-preview.png" alt="jahien" className="w-72 h-72 animate-pulse" />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <p>Ahmed</p>
                        <p>Andy</p>
                        <p>Jacob</p>
                        <p>Jahiem</p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default about