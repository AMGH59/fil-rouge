export default function Signin() {
    return (
        <div className="container bg-light p-5 rounded">
            <h3> Créer un compte :</h3>
            <hr />
            <form action="POST" className="form d-flex flex-column ">
                <label htmlFor="name" className="border-dark">Prénom</label><input type="text" name="name" id="" />
                <label htmlFor="email">e-mail</label><input type="email" name="email" id="" />
                <label htmlFor="password-once">Mot de passe</label><input type="text" name="password-once" id="" />
                <label htmlFor="password-twice">Confirmer le mot de passe</label><input type="text" name="password-twice" id="" />
                <button type="submit" className="btn btn-dark mt-2">S'inscrire</button>
            </form>
        </div>
    )
}