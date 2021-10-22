import Header from "./Components/Header-component/Header";


const Main = () => {
    const obj = {
        name : "Jagan",
        course : "React"
    }
    const arr = ['Home',"Gallery","About","Contact"]
    return(
        <div>
            <Header logo="Fita Academy" stdInfo={obj} menu={arr}/>
        </div>
    )
}

export default Main;