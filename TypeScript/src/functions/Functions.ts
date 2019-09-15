export function exibirTexto(text: string) {
    return text + "..."
} 
    
export function exibirData() {
    return Date.now()
}
    
let exibirHora = () => Date.now();

export { exibirHora }