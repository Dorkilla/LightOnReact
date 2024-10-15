import Lampa from "./Lampa.js";

function Jatekter(props){
    function katt(adat){
    props.katt(adat)
    }
    return(
        <div className='jatekter'>
            {props.lista.map((e,i)=>{
                return <Lampa key={i} jel={e} index={i} katt={katt} />
            })}
        </div>
    )

}
export default Jatekter;