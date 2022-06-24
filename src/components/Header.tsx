import { Logo } from "./Logo";


export function Header () {
    return (
        <div className="flex justify-between items-center">
            <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
                <Logo/> 
            </header>
            {/*Possivel implementação de responsividade*/}
            {/* <p className="text-gray-200">Aulas</p>
            <div>
                <div className="w-10 h-8 mr-5">
                    <div className="bg-blue-500 w-full h-1 m-[8px]"></div>
                    <div className="bg-blue-500 w-full h-1 m-[8px]"></div>
                    <div className="bg-blue-500 w-full h-1 m-[8px]"></div>
                </div>
            </div> */}
        </div>
    )
}