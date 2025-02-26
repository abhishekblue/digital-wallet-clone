export function InputBox({label, placeholder}) {
    return <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
        <input className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder={placeholder}></input>
        </div>
}