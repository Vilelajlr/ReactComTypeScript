import { FormEvent, useState, useEffect } from "react";
import { Header } from "../../components/header";
import { Input } from "../../components/input";

import { db } from "../../services/firebaseConnection";
import { 
    doc,
    setDoc,
    getDoc
} from "firebase/firestore";

export function Networks(){

    const [github, setGithub] = useState('');
    const [instagram, setInstagram] = useState('');
    const [linkedin, setLinkedin] = useState('');


    useEffect(() => {
        function loadLinks(){
            const docRef = doc(db, "social", "link");
            getDoc(docRef)
            .then((doc) => {
                if (doc.data() !== undefined) {
                    
                    setGithub(doc.data()?.github);
                    setInstagram(doc.data()?.instagram);
                    setLinkedin(doc.data()?.linkedin);
                } else {
                    return;
                }
            })  
        }

        loadLinks();

    }, [])


    function handleRegister(e: FormEvent){
        e.preventDefault();


        setDoc(doc(db, "social", "link"), {
            github: github,
            instagram: instagram,
            linkedin: linkedin
        })
        .then(() => {

        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        })

    }

    return(
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header />

            <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas redes socias</h1>


            <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
                <label className="text-white font-medium mt-2 mb-2">Link do GitHub</label>
                <Input 
                    type="url"
                    placeholder="Digite a url do GitHub..."
                    value={github}
                    onChange={e => setGithub(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mb-2">Link do Instagram</label>
                <Input 
                    type="url"
                    placeholder="Digite a url do instagram..."
                    value={instagram}
                    onChange={e => setInstagram(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mb-2">Link do Linkedin</label>
                <Input 
                    type="url"
                    placeholder="Digite a url do Linkedin..."
                    value={linkedin}
                    onChange={e => setLinkedin(e.target.value)}
                />

                <button
                    type="submit"
                    className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium"
                >
                    Salvar Links
                </button>

            </form>

        </div>
    )
}