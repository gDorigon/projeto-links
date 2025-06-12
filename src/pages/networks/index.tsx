import { Header } from "../../components/header";
import { Input } from "../../components/Input";
import { FormEvent, useEffect, useState } from "react";
import { db } from "../../services/firebaseConnection";

import {
    addDoc,
    setDoc,
    doc,
    getDoc
} from 'firebase/firestore'


export function Networks() {

    const [facebook, setFacebook] = useState("")
    const [instagram, setInstagram] = useState("")
    const [github, setGithub] = useState("")

    useEffect(() => {
        function loadLinks() {
            const docRef = doc(db, "social", "link")

            getDoc(docRef)
                .then((snapshot) => {
                    if (snapshot.data() !== undefined) {
                        setFacebook(snapshot.data()?.facebook)
                        setInstagram(snapshot.data()?.instagram)
                        setGithub(snapshot.data()?.github)
                    }

                })
        }
        loadLinks();
    }, [])

    function handleRegister(e: FormEvent) {
        e.preventDefault();

        setDoc(doc(db, "social", "link"), {
            facebook: facebook,
            instagram: instagram,
            github: github
        })

            .then(() => {

            })
            .catch(() => {

            })
    }

    return (
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header />

            <h1 className="text-white texxxt-2xl font-medium mt-8 mb-4">Minhas redes socials</h1>

            <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
                <label className="text-white font-medium mt-2 mb-2">Link do Facebook</label>
                <Input
                    type="url"
                    placeholder="Digite a url do facebook"
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mb-2">Link do Instagram</label>
                <Input
                    type="url"
                    placeholder="Digite a url do instagram"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mb-2">Link do Github</label>
                <Input
                    type="url"
                    placeholder="Digite a url do github"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                />

                <button
                    type="submit"
                    className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium"
                >Cadastrar</button>
            </form>
        </div>
    )
}