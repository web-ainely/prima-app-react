function Footer (props) {
    return (
        <footer>
        <p>questo paragrafo si trova nel footer</p>
       {props.children}
        </footer>
    )
}
export default Footer