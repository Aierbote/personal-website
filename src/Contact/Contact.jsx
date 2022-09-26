import "./Contact.css"

export default function Contact () {
    return (
        <>
            <section id="contact">
                <h2>Contact Us</h2>

                <div className="underline"></div>

                <form action="" method="post">
                    <div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter Name" />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea rows="8" placeholder="Enter Message"></textarea>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Enter Phone Number"
                            />
                        </div>
                        <div>
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" placeholder="Enter Title" />
                        </div>
                        {/* TODO : maybe better a type submit */}
                        <button>Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
};