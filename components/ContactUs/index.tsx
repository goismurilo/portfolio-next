; import React, { useState } from "react";

export default function ContactUs() {
    // States for contact form fields
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    //   Form validation state
    const [errors, setErrors] = useState({});

    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("Send");

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    // Validation check method
    const handleValidation = () => {
        if (fullname != 'undefined' || email != 'undefined' ||
            message != 'undefined') {
            return false;
        } else {
            return true;
        }
        // let tempErrors: [] = {};
        // let isValid = true;

        // if (fullname.length <= 0) {
        //     tempErrors["fullname"] = true;
        //     isValid = false;
        // }
        // if (email.length <= 0) {
        //     tempErrors["email"] = true;
        //     isValid = false;
        // }
        // if (message.length <= 0) {
        //     tempErrors["message"] = true;
        //     isValid = false;
        // }

        // setErrors({ ...tempErrors });
        // console.log("errors", errors);
        // return isValid;
    };

    //   Handling form submit

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        let isValidForm = handleValidation();

        if (isValidForm) {
            setButtonText("Sending");
            const res = await fetch("/api/sendgrid", {
                body: JSON.stringify({
                    email: email,
                    fullname: fullname,
                    subject: subject,
                    message: message,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            const { error } = await res.json();
            if (error) {
                console.log(error);
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setButtonText("Send");
                return;
            }
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText("Send");
        }
        console.log(fullname, email, message);
    };
    return (
        <main>
            <h1 className="bg-primary-medium text-center font-bold text-4xl text-white pb-8">Contato</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='nameS' />
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' />
                    <label htmlFor='message'>Message</label>
                    <input type='text' name='message' />
                    <button type='submit' >A</button>
                </form >
            </div>
        </main>
    );
}
// TODO: Add typing into the form fields variables