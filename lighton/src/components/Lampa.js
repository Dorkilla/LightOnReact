function Lampa(props){
    function katt(){
        props.katt(props.index)
    }
    return(
        <div className={'elem ${props.jel?"fel":"le"}'}onClick={()=>katt()}>
        </div>
    );
}
export default Lampa;